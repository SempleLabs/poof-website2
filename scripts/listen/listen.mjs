#!/usr/bin/env node
/**
 * Pull QuickBooks complaints off Reddit and write a review-ready report.
 *
 * Zero dependencies — app-only OAuth with built-in fetch, nothing to npm install.
 *
 *   node scripts/listen/listen.mjs              # last month
 *   node scripts/listen/listen.mjs --window week
 *   node scripts/listen/listen.mjs --no-comments
 *
 * Setup (one time, see scripts/listen/SETUP.md):
 *   export REDDIT_CLIENT_ID=...
 *   export REDDIT_CLIENT_SECRET=...
 *   export REDDIT_USER_AGENT='poof-listen/1.0 (by /u/yourname)'
 *
 * This reads public Reddit posts through Reddit's own API. It does not post,
 * vote, message, or collect anything about individual users beyond the public
 * author handle on a public thread.
 */

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const OUT_DIR = process.env.LISTEN_OUT || path.join(process.cwd(), '.listen-reports')
const UA = process.env.REDDIT_USER_AGENT || 'poof-listen/1.0 (bookkeeping market research)'
const ID = process.env.REDDIT_CLIENT_ID
const SECRET = process.env.REDDIT_CLIENT_SECRET

const arg = (name, fallback) => {
  const eq = process.argv.find((a) => a.startsWith(`--${name}=`))
  if (eq) return eq.split('=').slice(1).join('=')
  const i = process.argv.indexOf(`--${name}`)
  return i > -1 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : fallback
}
const WINDOW = arg('window', 'month')            // hour|day|week|month|year|all
const WITH_COMMENTS = !process.argv.includes('--no-comments')
const COMMENT_DEPTH = Number(arg('comments', 12)) // how many top threads to read comments on

// ---------- what we listen to ----------

// Trade subs first: those are the ICP. The general business subs carry the volume
// but most of it is freelancers and retail, which is the secondary product at best.
const SUBS_TRADES = ['HVAC', 'hvacadvice', 'Plumbing', 'electricians', 'Construction', 'ElectricalContractors', 'Roofing', 'Contractor', 'skilledtrades']
const SUBS_BUSINESS = ['smallbusiness', 'Entrepreneur', 'Accounting', 'Bookkeeping', 'QuickBooks', 'tax', 'business']

const QUERY_QB = 'quickbooks OR intuit OR qbo'
const QUERY_BOOKS = 'bookkeeping OR bookkeeper OR "job costing" OR accounting'

// ---------- signal dictionaries ----------

export const TRADE_SIGNALS = [
  'hvac', 'plumb', 'electric', 'contractor', 'roofing', 'job costing', 'job cost', 'wip',
  'retainage', 'progress invoic', 'change order', 'technician', 'tech ', 'techs', 'truck',
  'service call', 'dispatch', 'field service', 'jobber', 'housecall', 'servicetitan',
  'service titan', 'subcontractor', 'prevailing wage', 'certified payroll', 'lien',
  'estimate', 'takeoff', 'install', 'shop owner', 'crew', 'jobsite', 'job site',
]

const PAIN_SIGNALS = [
  'hate', 'frustrat', 'broken', 'does not work', "doesn't work", "won't", 'error', 'bug',
  'ridiculous', 'expensive', 'price increase', 'raised', 'cancel', 'switch', 'alternative',
  'migrat', 'useless', 'garbage', 'nightmare', 'stuck', "can't figure", 'cannot figure',
  'terrible', 'awful', 'worst', 'fed up', 'sick of', 'disaster', 'mess', 'wrong', 'lost',
  'refuse', 'charge', 'overcharg', 'downgrade', 'forced', 'scam', 'rip off', 'ripoff',
  'help', 'why does', 'why is', 'anyone else', 'am i crazy', 'losing my mind',
]

// The taxonomy. First matching bucket wins per keyword hit; a post can land in several.
// `covers` = URLs on our site that already answer this. Empty = content gap.
export const THEMES = [
  {
    key: 'pricing',
    label: 'Pricing, plan tiers and forced upgrades',
    kw: ['price', 'pricing', 'cost', 'expensive', 'increase', 'raised', 'subscription', 'per month', 'tier', 'upgrade', 'plus plan', 'advanced', 'essentials', 'simple start', 'billing', 'renew'],
    covers: ['/blog/quickbooks-price-increase-2026', '/blog/quickbooks-too-expensive-alternatives', '/poof-vs-quickbooks'],
  },
  {
    key: 'bank-feeds',
    label: 'Bank feeds, sync failures and duplicate transactions',
    kw: ['bank feed', 'bank connection', 'reconnect', 'disconnect', 'sync', 'duplicate', 'missing transaction', 'plaid', 'feed stopped', 'not importing', 'reconcil'],
    covers: [],
  },
  {
    key: 'support',
    label: 'Customer support quality',
    kw: ['support', 'customer service', 'chat agent', 'phone support', 'escalat', 'ticket', 'no response', 'offshore', 'rep '],
    covers: [],
  },
  {
    key: 'job-costing',
    label: 'Job costing, WIP and progress invoicing',
    kw: ['job costing', 'job cost', 'per job', 'wip', 'work in progress', 'progress invoic', 'change order', 'retainage', 'job profit', 'margin', 'estimate vs actual', 'class tracking', 'project profitability'],
    covers: ['/blog/hvac-per-job-profitability', '/trades', '/hvac', '/plumbing', '/electrical'],
  },
  {
    key: 'payroll',
    label: 'Payroll, contractors and 1099s',
    kw: ['payroll', '1099', 'w-2', 'w2', 'direct deposit', 'paycheck', 'certified payroll', 'prevailing wage', 'workers comp'],
    covers: [],
  },
  {
    key: 'migration',
    label: 'Migrating, exporting data and switching away',
    kw: ['migrat', 'export', 'import', 'switch', 'moving off', 'leave quickbooks', 'leaving quickbooks', 'alternative', 'desktop to online', 'convert', 'transfer data', 'get my data'],
    covers: ['/quickbooks-alternative', '/blog/best-quickbooks-alternatives-small-business'],
  },
  {
    key: 'desktop-sunset',
    label: 'Desktop discontinued / forced to Online',
    kw: ['desktop', 'qbdt', 'enterprise', 'discontinu', 'sunset', 'end of life', 'forced to online', 'no longer support'],
    covers: [],
  },
  {
    key: 'payments',
    label: 'QuickBooks Payments, holds and merchant fees',
    kw: ['quickbooks payments', 'merchant', 'held funds', 'holding my money', 'deposit hold', 'processing fee', 'ach fee', 'card fee', 'payout'],
    covers: [],
  },
  {
    key: 'usability',
    label: 'Complexity and usability',
    // Substring matching: keep these anchored. Bare 'ui' matches "intuit" and made this
    // theme rank first on pure noise.
    kw: ['confusing', 'complicated', 'clunky', ' ui ', 'the ui', 'interface', 'unintuitive', 'learning curve', 'accounting degree', 'figure out', 'buried', 'redesign', 'new layout'],
    covers: ['/quickbooks-alternative'],
  },
  {
    key: 'accuracy',
    label: 'Wrong numbers, data loss and categorization',
    kw: ['categoriz', 'miscateg', 'wrong number', 'data loss', 'lost data', 'deleted', 'balance is off', 'does not match', "doesn't match", 'out of balance', 'undeposited', 'journal entry'],
    covers: ['/blog/tax-season-bookkeeping-checklist'],
  },
  {
    key: 'invoicing',
    label: 'Invoicing and getting paid',
    kw: ['invoice', ' a/r', 'accounts receivable', 'past due', 'chase payment', 'collect', 'statement', 'late payment'],
    covers: [],
  },
  {
    key: 'sales-tax',
    label: 'Sales tax',
    kw: ['sales tax', 'tax rate', 'nexus', 'taxable', 'exempt'],
    covers: [],
  },
  {
    key: 'seats',
    label: 'User seats, permissions and multi-user',
    kw: ['seat', 'user limit', 'multi user', 'multi-user', 'permission', 'add a user', 'accountant access'],
    covers: [],
  },
  {
    key: 'ai-features',
    label: 'Intuit AI features and upsells',
    kw: ['intuit assist', ' ai ', 'ai feature', 'autocateg', 'suggestion', 'upsell', 'mailchimp', 'bundle'],
    covers: ['/blog/ai-bookkeeping-small-business'],
  },
]

const STOPWORDS = new Set(
  'a an the and or but if then than that this these those is are was were be been being do does did doing have has had having i me my we our you your it its they them their he she his her for to of in on at by with from as so not no nor too very can will just dont don t im ive s t re ve ll d m about into over under out up down off again more most some such only own same what which who whom when where why how all any both each few other than there here now also get got go going one two new like know really would could should did doing use using used need needs want wants make makes made take takes see sees looking look thing things time year years month months day days lot bit way ways much many' .split(
    ' '
  )
)

// ---------- reddit ----------

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

let token = null
async function getToken() {
  if (!ID || !SECRET) return null
  const basic = Buffer.from(`${ID}:${SECRET}`).toString('base64')
  const res = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': UA },
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
  })
  if (!res.ok) throw new Error(`Reddit token request failed ${res.status}: ${await res.text()}\nCheck REDDIT_CLIENT_ID / REDDIT_CLIENT_SECRET — see scripts/listen/SETUP.md`)
  const j = await res.json()
  if (!j.access_token) throw new Error(`Reddit returned no access token: ${JSON.stringify(j)}`)
  return j.access_token
}

let requests = 0
async function api(pathname, params) {
  const base = token ? 'https://oauth.reddit.com' : 'https://www.reddit.com'
  const suffix = token ? '' : '.json'
  const url = `${base}${pathname}${suffix}?${new URLSearchParams({ raw_json: '1', ...params })}`
  const headers = { 'User-Agent': UA }
  if (token) headers.Authorization = `Bearer ${token}`

  for (let attempt = 0; attempt < 3; attempt++) {
    requests++
    const res = await fetch(url, { headers })
    if (res.ok) return res.json()
    if (res.status === 429 || res.status >= 500) {
      await sleep(2000 * (attempt + 1))
      continue
    }
    if (res.status === 403 && !token) {
      throw new Error(
        'Reddit returned 403 for anonymous access. Reddit throttles unauthenticated requests hard.\n' +
          'Set REDDIT_CLIENT_ID and REDDIT_CLIENT_SECRET — see scripts/listen/SETUP.md (takes about 3 minutes).'
      )
    }
    throw new Error(`Reddit ${res.status} on ${pathname}: ${(await res.text()).slice(0, 300)}`)
  }
  throw new Error(`Reddit kept failing on ${pathname} after 3 attempts`)
}

async function search(sub, q) {
  try {
    const j = await api(`/r/${sub}/search`, { q, restrict_sr: 'on', sort: 'new', t: WINDOW, limit: '100' })
    await sleep(700) // stay well inside the 100 req/min free tier
    return (j.data?.children || []).map((c) => c.data)
  } catch (e) {
    if (/40[34]/.test(e.message)) return [] // private, banned or renamed sub — skip it, do not kill the run
    throw e
  }
}

async function comments(id) {
  try {
    const j = await api(`/comments/${id}`, { limit: '40', depth: '1', sort: 'top' })
    await sleep(700)
    const listing = Array.isArray(j) ? j[1] : null
    return (listing?.data?.children || []).map((c) => c.data?.body).filter((b) => typeof b === 'string' && b !== '[deleted]' && b !== '[removed]')
  } catch {
    return []
  }
}

// ---------- scoring ----------

const norm = (s) => (s || '').toLowerCase()
const countHits = (text, dict) => dict.filter((k) => text.includes(k)).length
const hitList = (text, dict) => dict.filter((k) => text.includes(k))

export function score(post) {
  const text = `${norm(post.title)} ${norm(post.selftext).slice(0, 4000)}`
  const trades = countHits(text, TRADE_SIGNALS)
  const pain = countHits(text, PAIN_SIGNALS)
  const themes = THEMES.filter((t) => t.kw.some((k) => text.includes(k))).map((t) => t.key)
  // Trades relevance is weighted hardest: an on-ICP thread with mild pain beats a
  // furious freelancer thread we would only answer with the secondary product.
  const priority = trades * 3 + pain * 1.5 + Math.min(post.num_comments || 0, 40) / 10 + Math.min(post.score || 0, 200) / 50
  return { trades, pain, themes, priority }
}

// ---------- phrase extraction ----------

export function phrases(texts, n = 3, min = 3) {
  const counts = new Map()
  for (const t of texts) {
    const words = norm(t)
      .replace(/https?:\/\/\S+/g, ' ')
      .replace(/[^a-z0-9'\s-]/g, ' ')
      .split(/\s+/)
      .filter(Boolean)
    for (let size = 2; size <= n; size++) {
      for (let i = 0; i + size <= words.length; i++) {
        const gram = words.slice(i, i + size)
        if (STOPWORDS.has(gram[0]) || STOPWORDS.has(gram[gram.length - 1])) continue
        if (gram.every((w) => STOPWORDS.has(w))) continue
        if (gram.some((w) => w.length < 2)) continue
        const key = gram.join(' ')
        counts.set(key, (counts.get(key) || 0) + 1)
      }
    }
  }
  // Longest first at equal frequency, then drop any phrase that is just a fragment of
  // one already kept with the same count — otherwise "bank feed", "feed disconnected"
  // and "bank feed disconnected" all show up at 3 and the table says nothing.
  const ranked = [...counts.entries()]
    .filter(([, c]) => c >= min)
    .sort((a, b) => b[1] - a[1] || b[0].length - a[0].length)
  const kept = []
  for (const [gram, c] of ranked) {
    if (kept.some(([k, kc]) => kc === c && k.includes(gram))) continue
    kept.push([gram, c])
  }
  return kept
}

// ---------- output helpers ----------

const iso = (d) => d.toISOString().slice(0, 10)
const esc = (s) => (s || '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').trim()
const clip = (s, n) => (s.length > n ? `${s.slice(0, n - 1)}…` : s)
const ago = (utc) => {
  const d = Math.floor((Date.now() / 1000 - utc) / 86400)
  return d <= 0 ? 'today' : `${d}d`
}

function section(title, body) {
  return body.trim() ? `\n## ${title}\n\n${body.trim()}\n` : ''
}

function table(head, rows, empty = '') {
  if (!rows.length) return empty
  return [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows.map((r) => `| ${r.join(' | ')} |`)].join('\n')
}

// ---------- main ----------

async function main() {
  token = await getToken()
  if (!token) console.error('⚠  No REDDIT_CLIENT_ID/SECRET set — trying anonymous access, which Reddit rate-limits hard.\n')

  const found = new Map() // id -> post

  const collect = async (subs, q, qkind) => {
    for (const sub of subs) {
      const posts = await search(sub, q)
      for (const p of posts) {
        if (!p?.id || found.has(p.id)) continue
        found.set(p.id, { ...p, _q: qkind })
      }
      process.stderr.write(`  r/${sub}: ${posts.length}\n`)
    }
  }

  process.stderr.write('Searching trade subs…\n')
  await collect(SUBS_TRADES, QUERY_QB, 'qb')
  await collect(SUBS_TRADES, QUERY_BOOKS, 'books')
  process.stderr.write('Searching business subs…\n')
  await collect(SUBS_BUSINESS, QUERY_QB, 'qb')

  // The bookkeeping sweep of the trade subs pulls in plenty of unrelated threads, so
  // filter it. Anything Reddit's own QuickBooks query matched is kept as-is: plenty of
  // r/QuickBooks complaints never spell the product out ("bank feed dropped again").
  const all = [...found.values()]
    .map((p) => ({ ...p, ...score(p) }))
    .filter((p) => p._q === 'qb' || /quickbook|intuit|qbo|qbdt/i.test(`${p.title} ${p.selftext}`) || p.trades >= 2)

  const tradesRelevant = all.filter((p) => p.trades >= 1).sort((a, b) => b.priority - a.priority)

  // Comments on the top ICP threads: the complaint language lives in replies,
  // not in the post title.
  const quoteBank = []
  if (WITH_COMMENTS && token) {
    process.stderr.write(`Reading comments on top ${Math.min(COMMENT_DEPTH, tradesRelevant.length)} threads…\n`)
    for (const p of tradesRelevant.slice(0, COMMENT_DEPTH)) {
      for (const body of await comments(p.id)) quoteBank.push({ id: p.id, sub: p.subreddit, body })
    }
  }

  // --- diff against the previous run ---
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const seenPath = path.join(OUT_DIR, 'seen.json')
  const seen = fs.existsSync(seenPath) ? JSON.parse(fs.readFileSync(seenPath, 'utf8')) : {}
  const fresh = all.filter((p) => !seen[p.id])
  for (const p of all) if (!seen[p.id]) seen[p.id] = iso(new Date())

  // --- theme rollup ---
  const themeRows = THEMES.map((t) => {
    const posts = all.filter((p) => p.themes.includes(t.key))
    const tr = posts.filter((p) => p.trades >= 1)
    return { ...t, posts, count: posts.length, tradesCount: tr.length, newCount: posts.filter((p) => fresh.includes(p)).length }
  })
    .filter((t) => t.count > 0)
    .sort((a, b) => b.tradesCount - a.tradesCount || b.count - a.count)

  // ---------- report ----------

  const out = []
  const today = iso(new Date())
  out.push(`# QuickBooks complaint listening — ${today}`)
  out.push(
    `\n_Reddit, last ${WINDOW}. ${all.length} QuickBooks threads matched across ${SUBS_TRADES.length + SUBS_BUSINESS.length} subs, ` +
      `${tradesRelevant.length} with trade signal, ${fresh.length} not seen in a previous run. ${requests} API requests._\n`
  )

  out.push(
    section(
      'Headline',
      table(
        ['Metric', 'Count'],
        [
          ['QuickBooks threads matched', all.length],
          ['With trade signal (the ICP)', tradesRelevant.length],
          ['New since the last run', fresh.length],
          ['Comments read for language', quoteBank.length],
        ]
      )
    )
  )

  // --- themes, ranked by ICP volume ---
  const themeTable = themeRows.map((t) => [
    t.label,
    t.tradesCount,
    t.count,
    t.newCount || '–',
    t.covers.length ? t.covers.map((u) => `\`${u}\``).join('<br>') : '**none — gap**',
  ])
  out.push(
    section(
      'Themes, ranked by trade-shop volume',
      'Sorted by threads with trade signal, not raw volume — raw volume is mostly freelancers.\n' +
        'The coverage column is what already exists on the site. A theme with coverage is a\n' +
        'candidate for rewriting that page, not for a new one.\n\n' +
        table(['Theme', 'Trades', 'All', 'New', 'Already covered by'], themeTable)
    )
  )

  // --- threads worth answering ---
  const answerRows = tradesRelevant.slice(0, 20).map((p) => [
    `[${clip(esc(p.title), 70)}](https://reddit.com${p.permalink})`,
    `r/${p.subreddit}`,
    ago(p.created_utc),
    p.num_comments || 0,
    p.themes.slice(0, 2).join(', ') || '–',
    fresh.includes(p) ? '**new**' : '',
  ])
  out.push(
    section(
      'Trade-shop threads worth a reply',
      'Ranked by trade signal first, then complaint intensity and engagement.\n' +
        'Answer as a controller who knows the answer — not as a vendor. Threads older than\n' +
        'about two weeks are usually dead regardless of score.\n\n' +
        table(['Thread', 'Sub', 'Age', 'Comments', 'Themes', ''], answerRows)
    )
  )

  // --- verbatim language, per theme ---
  // Themes are already ranked by trade volume, so walking them in order and claiming each
  // quote once puts every quote under the theme that matters most for it.
  const usedQuotes = new Set()
  const quoteBlocks = themeRows
    .slice(0, 8)
    .map((t) => {
      const lines = []
      for (const p of t.posts.filter((x) => x.trades >= 1)) {
        if (lines.length >= 3 || usedQuotes.has(p.id)) continue
        usedQuotes.add(p.id)
        lines.push(`> ${esc(p.title)} — r/${p.subreddit}`)
      }
      for (const q of quoteBank) {
        if (lines.length >= 6) break
        const body = clip(esc(q.body), 220)
        if (body.length <= 60 || usedQuotes.has(body)) continue
        if (!t.kw.some((k) => norm(q.body).includes(k))) continue
        usedQuotes.add(body)
        lines.push(`> ${body}`)
      }
      return lines.length ? `### ${t.label}\n\n${lines.join('\n>\n')}` : ''
    })
    .filter(Boolean)
    .join('\n\n')
  out.push(
    section(
      'Verbatim language',
      'The actual words, for titles, H1s and `faqs:` frontmatter. Do not paraphrase these into\n' +
        'marketing copy — the value is that they are how people really phrase it.\n\n' +
        quoteBlocks
    )
  )

  // --- phrase frequency ---
  const corpus = [...all.map((p) => `${p.title}. ${p.selftext || ''}`), ...quoteBank.map((q) => q.body)]
  const tradeCorpus = [...tradesRelevant.map((p) => `${p.title}. ${p.selftext || ''}`), ...quoteBank.map((q) => q.body)]
  const phraseRows = phrases(tradeCorpus, 4, 3)
    .filter(([p]) => !/^(quickbooks|intuit|qbo)\b/.test(p))
    .slice(0, 30)
    .map(([p, c]) => [`\`${p}\``, c])
  out.push(
    section(
      'Phrase frequency (trade threads)',
      'Repeated phrasing across ICP threads. Candidates for exact-match headings and FAQ questions.\n\n' +
        table(['Phrase', 'Times'], phraseRows, '_Nothing repeated three times or more in this window — too few trade threads to read anything into._')
    )
  )

  // --- gaps ---
  const gaps = themeRows.filter((t) => !t.covers.length && t.tradesCount >= 2)
  out.push(
    section(
      'Themes with trade volume and no page',
      gaps.length
        ? 'Themes with 2+ trade threads and no page answering them. Still check for cannibalization\n' +
            'against the five QuickBooks URLs before proposing anything new.\n\n' +
            table(['Theme', 'Trade threads', 'All threads'], gaps.map((t) => [t.label, t.tradesCount, t.count]))
        : 'No theme reached 2+ trade threads without an existing page this run.'
    )
  )

  out.push(
    section(
      'Existing QuickBooks URLs',
      'For the cannibalization check. Three of these already compete on "quickbooks alternative".\n\n' +
        table(
          ['URL', 'Intent'],
          [
            ['`/poof-vs-quickbooks`', 'Head-to-head vs QBO Plus'],
            ['`/quickbooks-alternative`', 'Switching / overkill'],
            ['`/blog/best-quickbooks-alternatives-small-business`', 'Alternatives roundup'],
            ['`/blog/quickbooks-too-expensive-alternatives`', 'Price → options'],
            ['`/blog/quickbooks-price-increase-2026`', 'Aug 2026 increase'],
          ]
        )
    )
  )

  const body = out.join('\n')
  const file = path.join(OUT_DIR, `listen-${today}.md`)
  fs.writeFileSync(file, body)
  fs.writeFileSync(path.join(OUT_DIR, 'latest.md'), body)
  fs.writeFileSync(seenPath, JSON.stringify(seen, null, 2))
  fs.writeFileSync(
    path.join(OUT_DIR, `listen-${today}.json`),
    JSON.stringify(
      {
        date: today,
        window: WINDOW,
        matched: all.length,
        tradesRelevant: tradesRelevant.length,
        themes: themeRows.map((t) => ({ key: t.key, label: t.label, count: t.count, trades: t.tradesCount, covers: t.covers })),
        threads: tradesRelevant.slice(0, 40).map((p) => ({
          id: p.id, title: p.title, sub: p.subreddit, url: `https://reddit.com${p.permalink}`,
          themes: p.themes, trades: p.trades, pain: p.pain, comments: p.num_comments, created: p.created_utc,
        })),
      },
      null,
      2
    )
  )
  console.log(file)
}

// Only run when executed directly, so the helpers above can be imported and tested.
// pathToFileURL, not string interpolation: this repo's path contains spaces, which
// import.meta.url percent-encodes and a naive `file://${argv[1]}` does not.
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e) => {
    console.error(`\n✗ ${e.message}\n`)
    process.exit(1)
  })
}
