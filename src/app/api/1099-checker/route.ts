import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { DUE_DATE, MAX_PAYEES, PAYEES, PURPOSES, check1099, formLabel, headline, isCents, money, type Payee, type PayeeInput, type Purpose, type Report1099 } from '@/lib/form1099'
import { FILE_1099S_URL, FILING_1099, dollars } from '@/lib/pricing1099'
import { SOURCE_COOKIE, cleanSource } from '@/lib/source'

/**
 * 1099 checker: the email of the list. The result is recomputed here from the payees
 * sent — never trusted from the browser — then stored as a lead (with where the
 * visitor came from) and emailed to them.
 */

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const amount = (v: unknown) => {
  const n = v === undefined || v === '' ? 0 : typeof v === 'number' ? v : Number(v)
  // Dollars and cents only: $1,999.995 is rejected, never rounded up to $2,000.
  return isCents(n) && n < 100_000_000 ? n : NaN
}
const PURPOSE_SET = new Set<string>(PURPOSES.map((p) => p.value))
const PAYEE_SET = new Set<string>(PAYEES.map((p) => p.value))

function parsePayees(raw: unknown): PayeeInput[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > MAX_PAYEES) return null
  const out: PayeeInput[] = []
  for (let i = 0; i < raw.length; i++) {
    const o = (raw[i] ?? {}) as Record<string, unknown>
    const p = {
      name: String(o.name ?? '').trim().slice(0, 60) || `Payee ${i + 1}`,
      paid: amount(o.paid),
      card: amount(o.card),
      purpose: String(o.purpose ?? '') as Purpose,
      payee: String(o.payee ?? '') as Payee,
    }
    if (Number.isNaN(p.paid) || Number.isNaN(p.card) || !PURPOSE_SET.has(p.purpose) || !PAYEE_SET.has(p.payee)) return null
    out.push(p)
  }
  return out
}

// One address gets at most this many lists; and an IP at most 5 requests per 10 minutes.
const MAX_PER_ADDRESS = 3
const ipHits = new Map<string, { count: number; resetAt: number }>()
function ipLimited(ip: string): boolean {
  const now = Date.now()
  const e = ipHits.get(ip)
  if (!e || now > e.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 })
    return false
  }
  e.count++
  return e.count > 5
}

function buildEmail(r: Report1099): string {
  const rows = r.payees
    .map((p) => {
      const reportable = p.form === '1099-NEC' || p.form === '1099-MISC'
      return `<tr><td style="padding:12px 0;border-bottom:1px solid #C9D3C6;font-size:14px;color:#12211A">
        <strong>${escapeHtml(p.name)}</strong> — <span style="color:${reportable ? '#1B5E3F' : '#5B6660'};font-weight:600">${escapeHtml(formLabel(p))}</span>
        ${reportable ? `, ${money(p.counted)}` : ''}
        <br><span style="color:#5B6660">${escapeHtml(p.reason)}</span>
      </td></tr>`
    })
    .join('')
  const w9 = r.missingW9
    ? `<p style="margin:0 0 14px;font-size:14px;line-height:1.5;color:#12211A">${r.missingW9 === 1 ? '1 person is' : `${r.missingW9} people are`} over the line with no W-9 yet. The <a href="https://www.poofai.com/guides/w9-request-email-templates.html" style="color:#1F7A4F">W-9 request emails</a> are free to copy.</p>`
    : ''
  const file = r.forms
    ? `<p style="margin:0 0 6px;font-size:15px;line-height:1.5;color:#12211A"><strong>${escapeHtml(r.cost.sentence)}</strong></p>
      <p style="margin:0 0 14px;font-size:15px;line-height:1.5;color:#12211A">Poof collects the W-9s, files with the IRS once you approve, and emails each contractor their copy free, or mails it for ${dollars(FILING_1099.mailedCopy)}. No IRS filer code needed.</p>
      <a href="${FILE_1099S_URL}" style="display:inline-block;background:#1F7A4F;color:#FFFFFF;text-decoration:none;font-weight:600;padding:12px 20px;border-radius:8px">File these with Poof</a>`
    : ''
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#EEF2EA;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#EEF2EA;padding:32px 16px"><tr><td align="center">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFFFF;border:1px solid #C9D3C6;border-radius:12px">
    <tr><td style="padding:28px 28px 8px">
      <p style="margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#5B6660">1099 checker · 2026 payments</p>
      <h1 style="margin:0 0 12px;font-size:22px;line-height:1.3;color:#12211A">${escapeHtml(headline(r))}</h1>
      <p style="margin:0;font-size:14px;color:#5B6660">${r.nec} 1099-NEC · ${r.misc} 1099-MISC · ${r.missingW9} missing W-9${r.missingW9 === 1 ? '' : 's'}</p>
    </td></tr>
    <tr><td style="padding:8px 28px"><table width="100%" cellpadding="0" cellspacing="0">${rows}</table></td></tr>
    <tr><td style="padding:20px 28px 28px">
      ${w9}
      <p style="margin:0 0 14px;font-size:14px;line-height:1.5;color:#5B6660">1099-NEC forms go to the IRS and to each contractor by ${DUE_DATE}. 1099-MISC copies go to recipients by the same day; the IRS copy is due March 31, 2027 if filed online. For anything unusual, ask your CPA.</p>
      ${file}
    </td></tr>
  </table>
  <p style="font-size:12px;color:#5B6660;margin:16px 0 0">Poof · poofai.com</p>
  </td></tr></table></body></html>`
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (ipLimited(ip)) return NextResponse.json({ error: 'Too many requests. Try again in a few minutes.' }, { status: 429 })
    const body = (await request.json()) as Record<string, unknown>
    const email = String(body.email ?? '').trim().toLowerCase().slice(0, 200)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    // Honeypot: a hidden field only bots fill.
    if (body.company_url) return NextResponse.json({ success: true })
    const payees = parsePayees(body.payees)
    if (!payees) return NextResponse.json({ error: 'Check the list: each amount needs to be in dollars and cents.' }, { status: 400 })

    const report = check1099(payees)
    const source = cleanSource(request.cookies.get(SOURCE_COOKIE)?.value) ?? cleanSource(String(body.source ?? ''))

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey)
      const { count, error: countError } = await supabase
        .from('report_leads')
        .select('email', { count: 'exact', head: true })
        .eq('email', email)
        .like('source', '1099_checker%')
      if (countError) console.error('1099-checker: supabase count', countError)
      else if ((count ?? 0) >= MAX_PER_ADDRESS) {
        return NextResponse.json({ error: 'We have already sent this address its lists. Check your inbox, or file them with Poof.' }, { status: 429 })
      }
      // Same table and shape as the Job Margin Check: the account rides in `source`.
      const { error } = await supabase.from('report_leads').insert({
        email,
        source: source ? `1099_checker:${source}` : '1099_checker',
        transaction_count: report.payees.length,
        top_category: headline(report).slice(0, 200),
      })
      if (error) console.error('1099-checker: supabase insert', error)
    }

    const resendKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL
    if (resendKey) {
      const resend = new Resend(resendKey)
      // Resend returns { error } rather than throwing, so a failed send has to be checked.
      const { error: sendError } = await resend.emails.send({ from: 'Poof <noreply@poofai.com>', to: email, subject: headline(report), html: buildEmail(report) })
      if (sendError) {
        console.error('1099-checker: resend', sendError)
        return NextResponse.json({ error: 'Something went wrong sending the list. Try again in a minute.' }, { status: 502 })
      }
      if (notifyEmail) {
        const { error: notifyError } = await resend.emails.send({
          from: 'Poof <noreply@poofai.com>',
          to: notifyEmail,
          subject: `New 1099 checker lead${source ? ` (${source})` : ''}: ${report.forms} forms`,
          html: `<p><strong>Email:</strong> ${escapeHtml(email)}<br><strong>Source:</strong> ${escapeHtml(source ?? 'direct')}</p>${buildEmail(report)}`,
        })
        // The visitor's list went out; a failed lead alert is only logged.
        if (notifyError) console.error('1099-checker: resend notify', notifyError)
      }
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('1099-checker error:', err)
    return NextResponse.json({ error: 'Something went wrong sending the list. Try again in a minute.' }, { status: 500 })
  }
}
