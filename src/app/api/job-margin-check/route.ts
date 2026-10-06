import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { MAX_JOBS, WHAT_TO_CHECK, analyzeJobs, driverSentence, headline, money, pct, type JobInput, type MarginReport } from '@/lib/jobMargin'
import { SOURCE_COOKIE, cleanSource } from '@/lib/source'

/**
 * Job Margin Check: the email for the write-up. The result is recomputed here
 * from the jobs sent — never trusted from the browser — then stored as a lead
 * (with where the visitor came from) and emailed to them.
 */

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const num = (v: unknown) => {
  const n = typeof v === 'number' ? v : Number(v)
  return Number.isFinite(n) && n >= 0 && n < 100_000_000 ? n : NaN
}

function parseJobs(raw: unknown): JobInput[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > MAX_JOBS) return null
  const jobs: JobInput[] = []
  for (let i = 0; i < raw.length; i++) {
    const o = (raw[i] ?? {}) as Record<string, unknown>
    const job = {
      name: String(o.name ?? '').trim().slice(0, 60) || `Job ${i + 1}`,
      price: num(o.price),
      labor: num(o.labor),
      materials: num(o.materials),
      other: o.other === undefined || o.other === '' ? 0 : num(o.other),
    }
    if ([job.price, job.labor, job.materials, job.other].some(Number.isNaN) || job.price <= 0) return null
    jobs.push(job)
  }
  return jobs
}

const trialUrl = (source: string | null) =>
  `https://app.poofai.com/register?src=${encodeURIComponent(source ?? 'job-margin-check')}`

function buildEmail(r: MarginReport, source: string | null): string {
  const rows = r.jobs
    .map((j) => {
      const color = j.flag === 'red' ? '#B3261E' : j.flag === 'amber' ? '#8A5A00' : '#1B5E3F'
      const why = driverSentence(j)
      const checks = j.driver ? WHAT_TO_CHECK[j.driver.line].map((c) => `<li style="margin:2px 0">${escapeHtml(c)}</li>`).join('') : ''
      return `<tr><td style="padding:12px 0;border-bottom:1px solid #C9D3C6;font-size:14px;color:#12211A">
        <strong>${escapeHtml(j.name)}</strong> — ${money(j.price)} price, ${money(j.profit)} profit,
        <span style="color:${color};font-weight:600">${pct(j.margin)}</span>
        ${j.gap > 0 ? `<br><span style="color:#5B6660">${money(j.gap)} below your other jobs on the same revenue.</span>` : ''}
        ${why ? `<br><span style="color:#12211A">${escapeHtml(why)}</span><ul style="margin:6px 0 0 18px;padding:0;color:#5B6660">${checks}</ul>` : ''}
      </td></tr>`
    })
    .join('')
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#EEF2EA;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#EEF2EA;padding:32px 16px"><tr><td align="center">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFFFF;border:1px solid #C9D3C6;border-radius:12px">
    <tr><td style="padding:28px 28px 8px">
      <p style="margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#5B6660">Job Margin Check</p>
      <h1 style="margin:0 0 12px;font-size:22px;line-height:1.3;color:#12211A">${escapeHtml(headline(r))}</h1>
      <p style="margin:0;font-size:14px;color:#5B6660">${r.jobs.length} jobs · ${money(r.revenue)} revenue · ${money(r.profit)} profit · ${pct(r.margin)} blended margin</p>
    </td></tr>
    <tr><td style="padding:8px 28px"><table width="100%" cellpadding="0" cellspacing="0">${rows}</table></td></tr>
    <tr><td style="padding:20px 28px 28px">
      <p style="margin:0 0 14px;font-size:15px;line-height:1.5;color:#12211A">This is ${r.jobs.length} jobs you remembered. Poof does this for every job from your real books: it tracks profit per job from the bills and invoices tagged to it, on every monthly close. One plan, every feature: 30 days free with no card, then $39.50 a month for three months, then $79.</p>
      <a href="${trialUrl(source)}" style="display:inline-block;background:#1F7A4F;color:#FFFFFF;text-decoration:none;font-weight:600;padding:12px 20px;border-radius:8px">Start your free trial</a>
    </td></tr>
  </table>
  <p style="font-size:12px;color:#5B6660;margin:16px 0 0">Poof · poofai.com</p>
  </td></tr></table></body></html>`
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const email = String(body.email ?? '').trim().toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    // Honeypot: a hidden field only bots fill.
    if (body.company_url) return NextResponse.json({ success: true })
    const jobs = parseJobs(body.jobs)
    if (!jobs) return NextResponse.json({ error: 'Check the jobs: each needs a price above $0 and labor and materials as numbers.' }, { status: 400 })

    const report = analyzeJobs(jobs)
    const source = cleanSource(request.cookies.get(SOURCE_COOKIE)?.value) ?? cleanSource(String(body.source ?? ''))

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey)
      // report_leads has email + source today. The account is kept in `source` until a
      // details column exists, e.g. "job_margin_check:shopmath".
      const { error } = await supabase.from('report_leads').insert({
        email,
        source: source ? `job_margin_check:${source}` : 'job_margin_check',
        transaction_count: report.jobs.length,
        top_category: headline(report).slice(0, 200),
      })
      if (error) console.error('job-margin-check: supabase insert', error)
    }

    const resendKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL
    if (resendKey) {
      const resend = new Resend(resendKey)
      await resend.emails.send({ from: 'Poof <noreply@poofai.com>', to: email, subject: headline(report), html: buildEmail(report, source) })
      if (notifyEmail) {
        await resend.emails.send({
          from: 'Poof <noreply@poofai.com>',
          to: notifyEmail,
          subject: `New Job Margin Check lead${source ? ` (${source})` : ''}`,
          html: `<p><strong>Email:</strong> ${escapeHtml(email)}<br><strong>Source:</strong> ${escapeHtml(source ?? 'direct')}</p>${buildEmail(report, source)}`,
        })
      }
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('job-margin-check error:', err)
    return NextResponse.json({ error: 'Something went wrong sending the write-up. Try again in a minute.' }, { status: 500 })
  }
}
