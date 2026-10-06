import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

/**
 * Shop Math calculator signups (www.poofai.com/shop-math).
 *
 * A visitor asks for their numbers by email: they get the answer and the
 * working with their own figures, and Austin gets the lead — reply-to set to
 * the visitor, so answering it is one tap. Nothing is stored; the email to
 * Austin is the record. The page is built in SempleLabs/poofsocial
 * (tools/shop-calculator, `--site poof`) and copied to public/shop-math/.
 */

// Where leads go: SHOP_MATH_NOTIFY_EMAIL, else the NOTIFY_EMAIL the intake form uses. Kept out of
// this (public) repo on purpose.
const NOTIFY = process.env.SHOP_MATH_NOTIFY_EMAIL || process.env.NOTIFY_EMAIL || ''
const PAGE = 'https://www.poofai.com/shop-math'
// Physical mailing address, as in the newsletter (set COMPANY_MAILING_ADDRESS in the environment).
const MAILING_ADDRESS = process.env.COMPANY_MAILING_ADDRESS || 'Semple Labs LLC'

const QUESTIONS = new Set(['price-raise', 'discount', 'price-vs-volume', 'labor-rate', 'callbacks', 'paid-late', 'drive-time'])

// Simple in-memory rate limiting: max 5 requests per IP per 10 minutes (as the newsletter does).
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 })
    return false
  }
  entry.count++
  return entry.count > 5
}

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Short, plain text only — this is shown in email. */
const clip = (v: unknown, n = 300) => String(v ?? '').slice(0, n)

type Figure = { label: string; value: number; unit: 'money' | 'percent' | 'count' }

const shown = (n: Figure) =>
  n.unit === 'money' ? `$${Number(n.value).toLocaleString('en-US')}` : n.unit === 'percent' ? `${n.value}%` : Number(n.value).toLocaleString('en-US')

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Try again in a few minutes.' }, { status: 429 })
    }

    const body = await request.json()
    // Honeypot: a field people never see. Bots fill it; pretend it worked.
    if (body.website) return NextResponse.json({ success: true })

    const email = clip(body.email, 200).trim()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 })
    }
    const question = clip(body.question, 40)
    if (!QUESTIONS.has(question)) {
      return NextResponse.json({ error: 'Unknown question' }, { status: 400 })
    }
    const numbers: Figure[] = (Array.isArray(body.numbers) ? body.numbers : [])
      .slice(0, 8)
      .filter((n: Figure) => n && typeof n.label === 'string' && Number.isFinite(Number(n.value)))
      .map((n: Figure) => ({ label: clip(n.label, 80), value: Number(n.value), unit: n.unit }))
    const steps: string[] = (Array.isArray(body.steps) ? body.steps : []).slice(0, 8).map((s: unknown) => clip(s))
    const ask = clip(body.ask, 200)
    const answer = clip(body.answer, 40)
    const answerLabel = clip(body.answerLabel, 120)
    const rule = body.rule ? clip(body.rule) : null
    const episode = Number.isFinite(Number(body.episode)) && body.episode !== null ? Number(body.episode) : null
    const referrer = body.referrer ? clip(body.referrer, 200) : null
    const link = body.link ? clip(body.link, 200) : null

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey || !NOTIFY) {
      console.error('RESEND_API_KEY or SHOP_MATH_NOTIFY_EMAIL/NOTIFY_EMAIL not configured')
      return NextResponse.json({ error: 'Email is not configured' }, { status: 500 })
    }
    const resend = new Resend(resendApiKey)
    const back = `${PAGE}#${question}`
    const numbersRows = numbers
      .map((n) => `<tr><td style="padding:6px 12px 6px 0;color:#5B6660">${escapeHtml(n.label)}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(shown(n))}</td></tr>`)
      .join('')
    const stepsList = steps.map((s) => `<li style="margin:0 0 6px">${escapeHtml(s)}</li>`).join('')

    // The lead, to Austin.
    await resend.emails.send({
      from: 'Shop Math <noreply@poofai.com>',
      to: NOTIFY,
      replyTo: email,
      subject: `Shop Math lead: ${email} ran ${episode ? `#${episode} ` : ''}${question}`,
      html: `
        <h2 style="margin:0 0 8px">New Shop Math lead</h2>
        <p style="margin:0 0 16px"><strong>${escapeHtml(email)}</strong> asked for their numbers. Reply to this email to answer them directly.</p>
        <p style="margin:0 0 4px"><strong>Question${episode ? ` (episode #${episode})` : ''}:</strong> ${escapeHtml(ask)}</p>
        <p style="margin:0 0 12px"><strong>Answer:</strong> ${escapeHtml(answer)} ${escapeHtml(answerLabel)}</p>
        <table style="border-collapse:collapse;margin:0 0 12px">${numbersRows}</table>
        <ol style="margin:0 0 12px;padding-left:20px">${stepsList}</ol>
        <p style="margin:0;color:#5B6660;font-size:13px">Came from: ${escapeHtml(referrer || 'direct / app')}${link ? ` · link ${escapeHtml(link)}` : ''} · ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT</p>
      `,
    })

    // Their numbers, to the visitor.
    await resend.emails.send({
      from: 'Shop Math <noreply@poofai.com>',
      to: email,
      replyTo: NOTIFY,
      subject: `Your Shop Math numbers: ${answer} ${answerLabel}`.slice(0, 150),
      html: `
        <!DOCTYPE html>
        <html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="margin:0;padding:0;background:#0D2640;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D2640;padding:32px 16px;"><tr><td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#10304F;border:2px solid #2A5584;border-radius:12px;color:#F3F6FA;">
              <tr><td style="padding:28px 28px 8px">
                <p style="margin:0 0 6px;color:#FF7A1A;font-size:13px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase">Shop Math${episode ? ` #${episode}` : ''}</p>
                <p style="margin:0 0 18px;font-size:20px;font-weight:700;line-height:1.25">${escapeHtml(ask)}</p>
                <p style="margin:0;color:#FF7A1A;font-size:48px;font-weight:800;line-height:1">${escapeHtml(answer)}</p>
                <p style="margin:6px 0 20px;font-size:16px;font-weight:600;text-transform:uppercase">${escapeHtml(answerLabel)}</p>
              </td></tr>
              <tr><td style="padding:0 28px 8px">
                <p style="margin:0 0 6px;color:#9DB2CA;font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">Your numbers</p>
                <table style="border-collapse:collapse;margin:0 0 18px;color:#F3F6FA">${numbersRows.replace(/#5B6660/g, '#9DB2CA')}</table>
                <p style="margin:0 0 6px;color:#9DB2CA;font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase">How it's worked out</p>
                <ol style="margin:0 0 16px;padding-left:20px;line-height:1.5">${stepsList}</ol>
                ${rule ? `<p style="margin:0 0 20px;padding:12px 14px;border:2px solid #2A5584;border-radius:8px;color:#FF7A1A;font-weight:600">${escapeHtml(rule)}</p>` : ''}
                <p style="margin:0 0 24px"><a href="${back}" style="color:#FF7A1A;font-weight:700">Change the numbers and run it again</a></p>
              </td></tr>
              <tr><td style="padding:18px 28px 26px;border-top:2px dashed #2A5584;color:#9DB2CA;font-size:14px;line-height:1.5">
                Shop Math is made by Austin Semple, who builds <a href="https://www.poofai.com" style="color:#F3F6FA">Poof</a>: AI bookkeeping for trades shops that tracks the margin on every real job. One plan, $79 a month, free for 30 days with no credit card.<br /><br />
                Illustrative math, not financial or tax advice. You're getting this because you asked for your numbers at poofai.com/shop-math. Reply with any question and it reaches Austin.<br />${escapeHtml(MAILING_ADDRESS)}
              </td></tr>
            </table>
          </td></tr></table>
        </body></html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Shop Math signup error:', error)
    return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status: 500 })
  }
}
