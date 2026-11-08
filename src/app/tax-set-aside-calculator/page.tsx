'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { parseAmount } from '@/lib/form1099'
import {
  EARLIER_QUARTERS,
  FILING_STATUSES,
  MAX_PROFIT,
  TAX_2026,
  headline,
  januaryLines,
  parseRate,
  setAside,
  usd,
  type FilingStatus,
  type SetAsideInput,
} from '@/lib/setAside'
import { readSource } from '@/lib/source'
import { trackEvent } from '@/lib/analytics'

type Fields = { profit: string; stateRate: string; priorTax: string; priorAgi: string; paid: string }
type Key = keyof Fields

const field =
  'w-full px-3 py-2.5 bg-white border border-rule rounded-lg text-ink focus:border-ledger-500 focus:ring-1 focus:ring-ledger-500/20 transition-all'
const num = `${field} font-mono tabular-nums`
const label = 'block text-xs uppercase tracking-wider text-muted mb-1'

/** Why a field can't be read, or null when it can (or is blank and optional). */
function fieldProblem(key: Key, value: string): string | null {
  const v = value.trim()
  if (!v) return key === 'profit' ? 'Enter your 2026 profit, or your best estimate of it.' : null
  if (key === 'stateRate') return parseRate(v) === null ? 'Enter a percent from 0 to 15, like 4.95.' : null
  const n = parseAmount(v)
  if (n === null) return 'Enter dollars and cents, like 84,250.50. For a loss, enter 0.'
  if (n > MAX_PROFIT) return 'Enter an amount under $10 million.'
  return null
}

export default function SetAsideCalculatorPage() {
  const [status, setStatus] = useState<FilingStatus>('single')
  const [fields, setFields] = useState<Fields>({ profit: '', stateRate: '', priorTax: '', priorAgi: '', paid: '' })
  const [shown, setShown] = useState(false)
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [source, setSource] = useState<string | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => setSource(readSource()), [])

  const problems = (Object.keys(fields) as Key[]).reduce((acc, k) => ({ ...acc, [k]: fieldProblem(k, fields[k]) }), {} as Record<Key, string | null>)
  const badFields = Object.values(problems).filter(Boolean).length
  const amount = (k: Key) => (fields[k].trim() ? parseAmount(fields[k]) : null)
  const input: SetAsideInput | null =
    badFields > 0
      ? null
      : {
          status,
          profit: amount('profit') ?? 0,
          stateRate: fields.stateRate.trim() ? parseRate(fields.stateRate)! : 0,
          priorTax: amount('priorTax'),
          priorAgi: amount('priorAgi'),
          paid: amount('paid') ?? 0,
        }
  const result = useMemo(() => (input ? setAside(input) : null), [JSON.stringify(input)]) // eslint-disable-line react-hooks/exhaustive-deps
  const jan = result ? januaryLines(result) : null
  const signupUrl = `https://app.poofai.com/register?src=${encodeURIComponent(source ?? 'tax-set-aside-calculator')}`

  const touch = () => {
    if (!started) {
      setStarted(true)
      trackEvent('sa_started', { source: source ?? 'direct' })
    }
    setError(null)
    setSent(false)
  }
  const set = (k: Key, v: string) => {
    touch()
    setFields((f) => ({ ...f, [k]: v }))
  }

  const showResult = () => {
    if (badFields > 0 || !result) return setError(`Fix the ${badFields === 1 ? 'field' : `${badFields} fields`} marked in red.`)
    setError(null)
    setShown(true)
    trackEvent('sa_result_shown', { source: source ?? 'direct', status, prior_year: result.input.priorTax !== null, rate: Math.round(result.ratePct) })
    setTimeout(() => document.getElementById('result')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  const sendIt = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input) return
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError('Please enter a valid email address.')
    setSending(true)
    setError(null)
    try {
      const res = await fetch('/api/tax-set-aside-calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), input, source, company_url: honeypot }),
      })
      const out = await res.json()
      if (!res.ok) throw new Error(out.error || 'Something went wrong.')
      setSent(true)
      trackEvent('sa_email_submitted', { source: source ?? 'direct' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSending(false)
    }
  }

  const amountField = (k: Key, text: string, placeholder: string, hint?: string) => (
    <label className="block">
      <span className={label}>{text}</span>
      <input inputMode="decimal" className={`${num} ${problems[k] ? 'border-audit' : ''}`} placeholder={placeholder} value={fields[k]} onChange={(e) => set(k, e.target.value)} aria-invalid={!!problems[k]} />
      {problems[k] && (fields[k].trim() || shown || error) ? <span role="alert" className="block mt-1 text-sm text-audit">{problems[k]}</span> : hint ? <span className="block mt-1 text-xs text-muted">{hint}</span> : null}
    </label>
  )

  const row = (name: string, cents: number) => (
    <div className="flex items-baseline justify-between gap-3 py-2">
      <span className="text-ink">{name}</span>
      <span className="font-mono tabular-nums text-ink">{usd(cents)}</span>
    </div>
  )

  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <PageHero
        title={<>How much should I set aside <span className="text-ledger-600">for taxes?</span></>}
        subtitle="For sole proprietors and single-member LLC owners. Enter your 2026 profit and see the share to set aside, and your January 15, 2027 federal estimate under the safe-harbor rule. Nothing is saved unless you ask for a copy."
      />

      <section className="py-8 pb-16 bg-paper-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-rule rounded-2xl p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className={label}>Filing status for 2026</span>
                <select
                  className={field}
                  value={status}
                  onChange={(e) => {
                    touch()
                    setStatus(e.target.value as FilingStatus)
                  }}
                >
                  {FILING_STATUSES.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </label>
              {amountField('profit', '2026 profit from the business', '$0', 'The full year, or your best estimate. Profit, not sales.')}
              {amountField('stateRate', 'State income tax rate, %', '0', 'Leave blank or 0 if your state has none, like Texas.')}
              {amountField('paid', '2026 federal estimates already paid', '$0', 'Optional. For tax year 2026 (April, June and September 2026), plus any 2025 refund applied.')}
            </div>
            <div className="mt-5 border-t border-rule pt-4">
              <p className="text-sm text-ink font-semibold">From your 2025 return (optional)</p>
              <p className="text-sm text-muted mb-3">These can lower the January payment: last year’s tax is often the smaller safe-harbor figure.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amountField('priorTax', 'Total tax on your 2025 return', '$0')}
                {amountField('priorAgi', 'Adjusted gross income (AGI)', '$0')}
              </div>
            </div>
            <button type="button" onClick={showResult} className="w-full mt-5 px-5 py-3 rounded-lg bg-ledger-500 text-white font-semibold hover:bg-ledger-600">
              Work out my set-aside
            </button>
            {error && (!shown || badFields > 0) && <p className="mt-3 text-sm text-audit">{error}</p>}
            {shown && badFields > 0 && !error && <p className="mt-3 text-sm text-audit">Fix the fields marked in red to update your result.</p>}
            <p className="text-sm text-muted mt-4">
              Own an S corporation? Your salary already has tax withheld, so the math is different; the S-corp section of{' '}
              <Link href="/blog/how-much-to-set-aside-for-taxes" className="text-ledger-600 font-semibold hover:text-ledger-700">how much to set aside</Link> explains it.
            </p>
          </div>

          {shown && result && jan && (
            <div id="result" className="mt-8 scroll-mt-24">
              <div className="bg-white border border-rule rounded-2xl p-4 sm:p-6">
                <p className="text-xs uppercase tracking-wider text-muted mb-2">Your result</p>
                <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight mb-1">{headline(result)}</h2>
                <p className="text-muted font-mono tabular-nums text-sm mb-4">On 2026 profit of {usd(result.profitCents)}, {FILING_STATUSES.find((s) => s.value === result.input.status)?.label.toLowerCase()}</p>

                <div className="divide-y divide-rule">
                  {row('Self-employment tax', result.seTaxCents)}
                  {row('Federal income tax', result.incomeTaxCents)}
                  {result.additionalMedicareCents > 0 && row('Additional Medicare tax', result.additionalMedicareCents)}
                  {result.stateCents > 0 && row(`State, at ${result.input.stateRate}% of profit (rough)`, result.stateCents)}
                  <div className="flex items-baseline justify-between gap-3 py-2 font-semibold">
                    <span className="text-ink">To set aside</span>
                    <span className="font-mono tabular-nums text-ink">{usd(result.totalCents)}</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-rule pt-4">
                  <p className="text-xs uppercase tracking-wider text-muted mb-1">Your January federal estimate</p>
                  <p className="font-display text-xl text-ink">{jan.line}</p>
                  <p className="text-sm text-ink mt-1">{jan.why}</p>
                  {result.january.rule !== 'under-minimum' && (
                    <p className="text-sm text-muted mt-2">
                      The rest of the year’s tax is due with your return. You can skip the January payment by filing your 2026 return and paying everything by{' '}
                      {TAX_2026.estimates.skipIfFiledBy}. {EARLIER_QUARTERS}
                    </p>
                  )}
                </div>

                <p className="text-sm text-muted mt-4 border-t border-rule pt-4">
                  Assumes the business is your only income, the standard deduction, and no other deductions or credits. The state figure is a flat rough rate. General
                  information, not tax advice; your CPA has the final word.
                </p>
              </div>

              <div className="bg-ink text-white rounded-2xl p-5 sm:p-7 mt-4">
                <p className="text-xs uppercase tracking-wider text-white/60 mb-2">Every month, from your books</p>
                <p className="font-display text-2xl leading-tight">Poof keeps this number every month: the tax your profit has built up, next to what’s in your tax account.</p>
                <p className="text-white/80 leading-relaxed mt-3">When the reserve falls behind, a reminder after the close says by how much. Poof never moves money; the transfer is yours.</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  <a
                    href={signupUrl}
                    onClick={() => trackEvent('sa_signup_clicked', { source: source ?? 'direct' })}
                    className="px-5 py-3 rounded-lg bg-ledger-500 text-white font-semibold hover:bg-ledger-600 text-center"
                  >
                    Start free
                  </a>
                  <a href="/taxes" className="px-5 py-3 rounded-lg border border-white/30 text-white font-semibold text-center">
                    How the tax reserve works
                  </a>
                </div>
              </div>

              <div className="bg-white border border-rule rounded-2xl p-4 sm:p-6 mt-4">
                {sent ? (
                  <p className="text-ink">Sent. Your set-aside is on its way to {email.trim()}.</p>
                ) : (
                  <form onSubmit={sendIt}>
                    <h3 className="font-display text-xl text-ink mb-1">Email me this</h3>
                    <p className="text-muted text-sm mb-4">The breakdown and the January payment, to keep for the 15th. One email; nothing else unless you ask.</p>
                    <input type="text" tabIndex={-1} autoComplete="off" className="hidden" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} aria-hidden="true" />
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@yourshop.com" className={`${field} flex-1`} />
                      <button type="submit" disabled={sending} className="px-5 py-3 rounded-lg bg-ink text-white font-semibold disabled:opacity-60">
                        {sending ? 'Sending…' : 'Email me this'}
                      </button>
                    </div>
                    {error && <p className="mt-2 text-sm text-audit">{error}</p>}
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
