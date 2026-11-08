import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { FILING_STATUSES, MAX_STATE_RATE, TAX_2026, headline, januaryLines, setAside, usd, validAmount, type FilingStatus, type SetAsideInput, type SetAsideResult } from '@/lib/setAside'
import { SOURCE_COOKIE, cleanSource } from '@/lib/source'

/**
 * Tax set-aside calculator: the email of the result. The result is recomputed here from the
 * inputs sent — never trusted from the browser — then stored as a lead (with where the
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

const STATUS_SET = new Set<string>(FILING_STATUSES.map((s) => s.value))
/** State rate: a percent, 0 to 15, at most two decimals. */
const validRate = (n: unknown): n is number => typeof n === 'number' && Number.isFinite(n) && n >= 0 && n <= MAX_STATE_RATE && Math.abs(n * 100 - Math.round(n * 100)) < 1e-6
const optional = (v: unknown) => (v === null || v === undefined ? null : validAmount(v) ? v : NaN)

function parseInput(raw: unknown): SetAsideInput | null {
  const o = (raw ?? {}) as Record<string, unknown>
  const status = String(o.status ?? '')
  if (!STATUS_SET.has(status) || !validAmount(o.profit) || !validRate(o.stateRate) || !validAmount(o.paid)) return null
  const priorTax = optional(o.priorTax)
  const priorAgi = optional(o.priorAgi)
  // Dollars and cents only: an amount with a third decimal is rejected, never rounded.
  if (Number.isNaN(priorTax) || Number.isNaN(priorAgi)) return null
  return { status: status as FilingStatus, profit: o.profit, stateRate: o.stateRate, priorTax, priorAgi, paid: o.paid }
}

// One address gets at most this many emails; and an IP at most 5 requests per 10 minutes.
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

function signupUrl(source: string | null): string {
  return `https://app.poofai.com/register?src=${encodeURIComponent(source ?? 'tax-set-aside-calculator')}`
}

function buildEmail(r: SetAsideResult, source: string | null): string {
  const jan = januaryLines(r)
  const line = (name: string, cents: number, bold = false) =>
    `<tr><td style="padding:8px 0;border-bottom:1px solid #C9D3C6;font-size:14px;color:#12211A${bold ? ';font-weight:600' : ''}">${escapeHtml(name)}</td><td align="right" style="padding:8px 0;border-bottom:1px solid #C9D3C6;font-size:14px;color:#12211A;font-family:Menlo,monospace${bold ? ';font-weight:600' : ''}">${usd(cents)}</td></tr>`
  const rows = [
    line('Self-employment tax', r.seTaxCents),
    line('Federal income tax', r.incomeTaxCents),
    r.additionalMedicareCents > 0 ? line('Additional Medicare tax', r.additionalMedicareCents) : '',
    r.stateCents > 0 ? line(`State, at ${r.input.stateRate}% of profit (rough)`, r.stateCents) : '',
    line('To set aside', r.totalCents, true),
  ].join('')
  const skip =
    r.january.rule !== 'under-minimum'
      ? ` The rest of the year’s tax is due with your return. You can skip the January payment by filing your 2026 return and paying everything by ${TAX_2026.estimates.skipIfFiledBy}.`
      : ''
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#EEF2EA;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#EEF2EA;padding:32px 16px"><tr><td align="center">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFFFF;border:1px solid #C9D3C6;border-radius:12px">
    <tr><td style="padding:28px 28px 8px">
      <p style="margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#5B6660">Tax set-aside · 2026 profit of ${usd(r.profitCents)}</p>
      <h1 style="margin:0;font-size:22px;line-height:1.3;color:#12211A">${escapeHtml(headline(r))}</h1>
    </td></tr>
    <tr><td style="padding:8px 28px"><table width="100%" cellpadding="0" cellspacing="0">${rows}</table></td></tr>
    <tr><td style="padding:20px 28px 28px">
      <p style="margin:0 0 6px;font-size:15px;line-height:1.5;color:#12211A"><strong>${escapeHtml(jan.line)}</strong></p>
      <p style="margin:0 0 14px;font-size:14px;line-height:1.5;color:#12211A">${escapeHtml(jan.why + skip)}</p>
      <p style="margin:0 0 14px;font-size:14px;line-height:1.5;color:#5B6660">Assumes the business is your only income, the standard deduction, and no other deductions or credits. General information, not tax advice; your CPA has the final word.</p>
      <p style="margin:0 0 14px;font-size:15px;line-height:1.5;color:#12211A">Poof keeps this number every month: the tax your profit has built up, next to what’s in your tax account.</p>
      <a href="${escapeHtml(signupUrl(source))}" style="display:inline-block;background:#1F7A4F;color:#FFFFFF;text-decoration:none;font-weight:600;padding:12px 20px;border-radius:8px">Start free</a>
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
    const input = parseInput(body.input)
    if (!input) return NextResponse.json({ error: 'Check the numbers: each amount needs to be in dollars and cents.' }, { status: 400 })

    const result = setAside(input)
    const source = cleanSource(request.cookies.get(SOURCE_COOKIE)?.value) ?? cleanSource(String(body.source ?? ''))

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey)
      const { count, error: countError } = await supabase
        .from('report_leads')
        .select('email', { count: 'exact', head: true })
        .eq('email', email)
        .like('source', 'set_aside_calculator%')
      if (countError) console.error('set-aside: supabase count', countError)
      else if ((count ?? 0) >= MAX_PER_ADDRESS) {
        return NextResponse.json({ error: 'We have already sent this address its results. Check your inbox.' }, { status: 429 })
      }
      // Same table and shape as the other free tools: the account rides in `source`, one row per calculation.
      const { error } = await supabase.from('report_leads').insert({
        email,
        source: source ? `set_aside_calculator:${source}` : 'set_aside_calculator',
        transaction_count: 1,
        top_category: headline(result).slice(0, 200),
      })
      if (error) console.error('set-aside: supabase insert', error)
    }

    const resendKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL
    if (resendKey) {
      const resend = new Resend(resendKey)
      // Resend returns { error } rather than throwing, so a failed send has to be checked.
      const { error: sendError } = await resend.emails.send({ from: 'Poof <noreply@poofai.com>', to: email, subject: headline(result), html: buildEmail(result, source) })
      if (sendError) {
        console.error('set-aside: resend', sendError)
        return NextResponse.json({ error: 'Something went wrong sending it. Try again in a minute.' }, { status: 502 })
      }
      if (notifyEmail) {
        const { error: notifyError } = await resend.emails.send({
          from: 'Poof <noreply@poofai.com>',
          to: notifyEmail,
          subject: `New set-aside calculator lead${source ? ` (${source})` : ''}`,
          html: `<p><strong>Email:</strong> ${escapeHtml(email)}<br><strong>Source:</strong> ${escapeHtml(source ?? 'direct')}</p>${buildEmail(result, source)}`,
        })
        // The visitor's email went out; a failed lead alert is only logged.
        if (notifyError) console.error('set-aside: resend notify', notifyError)
      }
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('set-aside error:', err)
    return NextResponse.json({ error: 'Something went wrong sending it. Try again in a minute.' }, { status: 500 })
  }
}
