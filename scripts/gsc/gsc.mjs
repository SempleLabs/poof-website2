#!/usr/bin/env node
/**
 * Pull Google Search Console data and write a review-ready report.
 *
 * Zero dependencies — service-account JWT is signed with Node's built-in crypto
 * and the API is called with built-in fetch. Nothing to npm install.
 *
 *   node scripts/gsc/gsc.mjs                # last 28d vs previous 28d
 *   node scripts/gsc/gsc.mjs --days 90
 *
 * Setup (one time, see scripts/gsc/SETUP.md):
 *   export GSC_SA_KEY=/absolute/path/to/service-account.json
 *   export GSC_SITE='sc-domain:poofai.com'      # or https://www.poofai.com/
 */

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const SITE = process.env.GSC_SITE || 'sc-domain:poofai.com'
const KEY_PATH = process.env.GSC_SA_KEY
const OUT_DIR = process.env.GSC_OUT || path.join(process.cwd(), '.gsc-reports')

const argDays = Number((process.argv.find((a) => a.startsWith('--days=')) || '').split('=')[1])
const flagIdx = process.argv.indexOf('--days')
const DAYS = argDays || (flagIdx > -1 ? Number(process.argv[flagIdx + 1]) : 0) || 28

// ---------- auth: service-account JWT -> access token ----------

function b64url(buf) {
  return Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

async function getAccessToken() {
  if (!KEY_PATH) throw new Error('GSC_SA_KEY is not set. See scripts/gsc/SETUP.md')
  if (!fs.existsSync(KEY_PATH)) throw new Error(`Service-account key not found at ${KEY_PATH}`)
  const key = JSON.parse(fs.readFileSync(KEY_PATH, 'utf8'))
  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claim = b64url(
    JSON.stringify({
      iss: key.client_email,
      scope: 'https://www.googleapis.com/auth/webmasters.readonly',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    })
  )
  const signer = crypto.createSign('RSA-SHA256')
  signer.update(`${header}.${claim}`)
  const sig = b64url(signer.sign(key.private_key))
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${header}.${claim}.${sig}`,
    }),
  })
  if (!res.ok) throw new Error(`Token request failed ${res.status}: ${await res.text()}`)
  return (await res.json()).access_token
}

// ---------- api ----------

const iso = (d) => d.toISOString().slice(0, 10)
const daysAgo = (n) => {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() - n)
  return d
}

async function query(token, body) {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`GSC query failed ${res.status}: ${await res.text()}`)
  return (await res.json()).rows || []
}

// GSC data lags ~2 days; end the window there so the last days aren't half-empty.
const LAG = 2

async function pull(token, dims, start, end) {
  return query(token, {
    startDate: iso(start),
    endDate: iso(end),
    dimensions: dims,
    rowLimit: 25000,
    type: 'web',
  })
}

// ---------- analysis ----------

const sum = (rows, k) => rows.reduce((a, r) => a + (r[k] || 0), 0)
const wpos = (rows) => (sum(rows, 'impressions') ? rows.reduce((a, r) => a + r.position * r.impressions, 0) / sum(rows, 'impressions') : 0)
const pct = (a, b) => (b ? ((a - b) / b) * 100 : 0)
const arrow = (n) => (n > 0.5 ? '▲' : n < -0.5 ? '▼' : '–')
const fmtPct = (n) => `${n >= 0 ? '+' : ''}${n.toFixed(0)}%`

function keyed(rows, i = 0) {
  const m = new Map()
  for (const r of rows) m.set(r.keys[i], r)
  return m
}

function section(title, body) {
  return body.trim() ? `\n## ${title}\n\n${body.trim()}\n` : ''
}

function table(head, rows) {
  if (!rows.length) return ''
  return [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows.map((r) => `| ${r.join(' | ')} |`)].join('\n')
}

async function main() {
  const token = await getAccessToken()
  const end = daysAgo(LAG)
  const start = daysAgo(LAG + DAYS - 1)
  const prevEnd = daysAgo(LAG + DAYS)
  const prevStart = daysAgo(LAG + DAYS * 2 - 1)

  const [curQ, prevQ, curP, prevP, curQP] = await Promise.all([
    pull(token, ['query'], start, end),
    pull(token, ['query'], prevStart, prevEnd),
    pull(token, ['page'], start, end),
    pull(token, ['page'], prevStart, prevEnd),
    pull(token, ['query', 'page'], start, end),
  ])

  const out = []
  out.push(`# Search Console review — ${iso(start)} to ${iso(end)}`)
  out.push(`\n_${DAYS}-day window vs the previous ${DAYS} days. Site: \`${SITE}\`. Generated ${iso(new Date())}._\n`)

  // --- headline ---
  const c = { clicks: sum(curP, 'clicks'), impressions: sum(curP, 'impressions'), pos: wpos(curP) }
  const p = { clicks: sum(prevP, 'clicks'), impressions: sum(prevP, 'impressions'), pos: wpos(prevP) }
  const ctr = (x) => (x.impressions ? (x.clicks / x.impressions) * 100 : 0)
  out.push(
    section(
      'Headline',
      table(
        ['Metric', 'This window', 'Previous', 'Change'],
        [
          ['Clicks', c.clicks, p.clicks, `${arrow(c.clicks - p.clicks)} ${fmtPct(pct(c.clicks, p.clicks))}`],
          ['Impressions', c.impressions, p.impressions, `${arrow(c.impressions - p.impressions)} ${fmtPct(pct(c.impressions, p.impressions))}`],
          ['CTR', `${ctr(c).toFixed(2)}%`, `${ctr(p).toFixed(2)}%`, `${arrow(ctr(c) - ctr(p))} ${(ctr(c) - ctr(p)).toFixed(2)}pp`],
          ['Avg position', c.pos.toFixed(1), p.pos.toFixed(1), `${arrow(p.pos - c.pos)} ${(c.pos - p.pos).toFixed(1)}`],
        ]
      )
    )
  )

  // --- striking distance: page 2 with real volume, the cheapest wins ---
  const strike = curQ
    .filter((r) => r.position >= 8 && r.position <= 20 && r.impressions >= 20)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15)
    .map((r) => [`\`${r.keys[0]}\``, r.impressions, r.clicks, r.position.toFixed(1)])
  out.push(
    section(
      'Striking distance (position 8–20, ≥20 impressions)',
      `These are one or two positions from real traffic. Cheapest wins on the board.\n\n${table(['Query', 'Impr', 'Clicks', 'Pos'], strike)}`
    )
  )

  // --- high volume, no clicks ---
  const zero = curQ
    .filter((r) => r.clicks === 0 && r.impressions >= 50)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15)
    .map((r) => [`\`${r.keys[0]}\``, r.impressions, r.position.toFixed(1), r.position > 30 ? 'rank too low' : 'CTR problem'])
  out.push(
    section(
      'Demand you are not capturing (≥50 impressions, 0 clicks)',
      `Position >30 means it is a ranking problem, not a title problem.\n\n${table(['Query', 'Impr', 'Pos', 'Likely cause'], zero)}`
    )
  )

  // --- movers ---
  const prevQMap = keyed(prevQ)
  const movers = curQ
    .filter((r) => r.impressions >= 30 && prevQMap.has(r.keys[0]))
    .map((r) => {
      const q = prevQMap.get(r.keys[0])
      return { k: r.keys[0], d: q.position - r.position, now: r.position, was: q.position, i: r.impressions }
    })
    .filter((m) => Math.abs(m.d) >= 3)
    .sort((a, b) => b.d - a.d)
  const up = movers.slice(0, 8).map((m) => [`\`${m.k}\``, m.i, m.was.toFixed(1), m.now.toFixed(1), `▲ ${m.d.toFixed(1)}`])
  const down = movers.slice(-8).reverse().filter((m) => m.d < 0).map((m) => [`\`${m.k}\``, m.i, m.was.toFixed(1), m.now.toFixed(1), `▼ ${Math.abs(m.d).toFixed(1)}`])
  out.push(section('Biggest position gains', table(['Query', 'Impr', 'Was', 'Now', 'Move'], up)))
  out.push(section('Biggest position losses', table(['Query', 'Impr', 'Was', 'Now', 'Move'], down)))

  // --- cannibalization: one query, several of our pages ---
  const byQuery = new Map()
  for (const r of curQP) {
    const [q, pg] = r.keys
    if (!byQuery.has(q)) byQuery.set(q, [])
    byQuery.get(q).push({ pg, ...r })
  }
  const cannib = [...byQuery.entries()]
    .filter(([, v]) => v.length > 1 && sum(v, 'impressions') >= 30)
    .sort((a, b) => sum(b[1], 'impressions') - sum(a[1], 'impressions'))
    .slice(0, 10)
    .map(([q, v]) => [
      `\`${q}\``,
      sum(v, 'impressions'),
      v
        .sort((a, b) => a.position - b.position)
        .map((x) => `${x.pg.replace(/^https?:\/\/(www\.)?[^/]+/, '')} (${x.position.toFixed(0)})`)
        .join('<br>'),
    ])
  out.push(
    section(
      'Possible cannibalization (one query, multiple pages)',
      `Two pages competing for one query splits the signal. Differentiate the intent or consolidate.\n\n${table(['Query', 'Impr', 'Pages (position)'], cannib)}`
    )
  )

  // --- page movement ---
  const prevPMap = keyed(prevP)
  const pageRows = curP
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 20)
    .map((r) => {
      const q = prevPMap.get(r.keys[0])
      const dImp = q ? pct(r.impressions, q.impressions) : null
      return [
        r.keys[0].replace(/^https?:\/\/(www\.)?[^/]+/, '') || '/',
        r.clicks,
        r.impressions,
        dImp === null ? 'new' : `${arrow(dImp)} ${fmtPct(dImp)}`,
        r.position.toFixed(1),
      ]
    })
  out.push(section('Top pages', table(['Page', 'Clicks', 'Impr', 'Impr Δ', 'Pos'], pageRows)))

  fs.mkdirSync(OUT_DIR, { recursive: true })
  const file = path.join(OUT_DIR, `gsc-${iso(end)}.md`)
  fs.writeFileSync(file, out.join('\n'))
  fs.writeFileSync(path.join(OUT_DIR, 'latest.md'), out.join('\n'))
  console.log(file)
}

main().catch((e) => {
  console.error(`\n✗ ${e.message}\n`)
  process.exit(1)
})
