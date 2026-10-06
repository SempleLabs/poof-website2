'use client'

import { useEffect, useMemo, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { MAX_JOBS, MIN_JOBS, analyzeJobs, driverSentence, headline, money, pct, type JobInput } from '@/lib/jobMargin'
import { readSource } from '@/lib/source'
import { trackEvent } from '@/lib/analytics'

type Row = { name: string; price: string; labor: string; materials: string; other: string }
const emptyRow = (): Row => ({ name: '', price: '', labor: '', materials: '', other: '' })
const toNum = (s: string) => Number(s.replace(/[$,\s]/g, ''))
const valid = (s: string) => s.trim() !== '' && Number.isFinite(toNum(s)) && toNum(s) >= 0

const field =
  'w-full px-3 py-2.5 bg-white border border-rule rounded-lg text-ink focus:border-ledger-500 focus:ring-1 focus:ring-ledger-500/20 transition-all font-mono tabular-nums'

export default function JobMarginCheckPage() {
  const [rows, setRows] = useState<Row[]>([emptyRow(), emptyRow(), emptyRow()])
  const [shown, setShown] = useState(false)
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [source, setSource] = useState<string | null>(null)

  useEffect(() => setSource(readSource()), [])

  const complete = rows.filter((r) => valid(r.price) && toNum(r.price) > 0 && valid(r.labor) && valid(r.materials) && (r.other === '' || valid(r.other)))
  const jobs: JobInput[] = complete.map((r) => ({
    name: r.name.trim() || `Job ${rows.indexOf(r) + 1}`,
    price: toNum(r.price),
    labor: toNum(r.labor),
    materials: toNum(r.materials),
    other: r.other === '' ? 0 : toNum(r.other),
  }))
  const report = useMemo(() => analyzeJobs(jobs), [JSON.stringify(jobs)]) // eslint-disable-line react-hooks/exhaustive-deps

  const set = (i: number, key: keyof Row, value: string) => setRows((rs) => rs.map((r, k) => (k === i ? { ...r, [key]: value } : r)))

  const showResult = () => {
    if (jobs.length < 1) return setError('Fill in at least one job: a price, labor and materials.')
    setError(null)
    setShown(true)
    trackEvent('jmc_result_shown', { source: source ?? 'direct', jobs: jobs.length })
    setTimeout(() => document.getElementById('result')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  const sendWriteUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError('Please enter a valid email address.')
    setSending(true)
    setError(null)
    try {
      const res = await fetch('/api/job-margin-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), jobs, source, company_url: honeypot }),
      })
      const out = await res.json()
      if (!res.ok) throw new Error(out.error || 'Something went wrong.')
      setSent(true)
      trackEvent('jmc_email_submitted', { source: source ?? 'direct', jobs: jobs.length })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSending(false)
    }
  }

  const chip = (flag: string) =>
    flag === 'red' ? 'bg-audit-100 text-audit' : flag === 'amber' ? 'bg-amber-100 text-amber-800' : 'bg-ledger-200 text-ledger-600'

  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <PageHero
        title={<>Which of your jobs actually <span className="text-ledger-600">made money?</span></>}
        subtitle="Enter 3 to 10 recent jobs. See each one’s margin against your other jobs, and which ones lost money. Nothing is saved unless you ask for the write-up."
      />

      <section className="py-8 pb-16 bg-paper-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-rule rounded-2xl p-4 sm:p-6">
            <div className="space-y-4">
              {rows.map((r, i) => (
                <div key={i} className="border border-rule rounded-xl p-3 sm:p-4" onFocus={() => i === 0 && trackEvent('jmc_started', { source: source ?? 'direct' })}>
                  <div className="flex items-center gap-2 mb-3">
                    <input aria-label={`Job ${i + 1} name`} className={`${field} font-sans`} placeholder={`Job ${i + 1} (e.g. Garza changeout)`} value={r.name} onChange={(e) => set(i, 'name', e.target.value)} />
                    {rows.length > 1 && (
                      <button type="button" aria-label={`Remove job ${i + 1}`} onClick={() => setRows((rs) => rs.filter((_, k) => k !== i))} className="px-3 py-2 text-muted hover:text-audit">
                        ✕
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['price', 'labor', 'materials', 'other'] as const).map((k) => (
                      <label key={k} className="block">
                        <span className="block text-xs uppercase tracking-wider text-muted mb-1">
                          {k === 'price' ? 'Price charged' : k === 'labor' ? 'Labor' : k === 'materials' ? 'Materials' : 'Other (optional)'}
                        </span>
                        <input inputMode="decimal" className={field} placeholder="$0" value={r[k]} onChange={(e) => set(i, k, e.target.value)} />
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted mt-3">Labor is what you paid for the hours, with taxes and insurance, not what you billed. Other: subs, permits, rentals.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              {rows.length < MAX_JOBS && (
                <button type="button" onClick={() => setRows((rs) => [...rs, emptyRow()])} className="px-5 py-3 rounded-lg border border-rule text-ink font-semibold hover:bg-paper">
                  Add a job
                </button>
              )}
              <button type="button" onClick={showResult} className="flex-1 px-5 py-3 rounded-lg bg-ledger-500 text-white font-semibold hover:bg-ledger-600">
                Check my jobs
              </button>
            </div>
            {error && !shown && <p className="mt-3 text-sm text-audit">{error}</p>}
          </div>

          {shown && report.jobs.length > 0 && (
            <div id="result" className="mt-8 scroll-mt-24">
              <div className="bg-white border border-rule rounded-2xl p-4 sm:p-6">
                <p className="text-xs uppercase tracking-wider text-muted mb-2">Your result</p>
                <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight mb-2">{headline(report)}</h2>
                <p className="text-muted font-mono tabular-nums text-sm">
                  {report.jobs.length} jobs · {money(report.revenue)} revenue · {money(report.profit)} profit · {pct(report.margin)} blended
                </p>
                {!report.compared && <p className="text-sm text-muted mt-2">Add at least {MIN_JOBS} jobs to compare each one with the rest.</p>}

                <div className="mt-5 divide-y divide-rule">
                  {report.jobs.map((j, i) => (
                    <div key={i} className="py-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-semibold text-ink">{j.name}</span>
                        <span className={`font-mono tabular-nums text-sm px-2 py-0.5 rounded ${chip(j.flag)}`}>{pct(j.margin)}</span>
                      </div>
                      <div className="font-mono tabular-nums text-sm text-muted mt-1">
                        {money(j.price)} price · {money(j.profit)} profit
                        {j.gap > 0 && <span className="text-ink"> · {money(j.gap)} below your other jobs</span>}
                      </div>
                      {driverSentence(j) && <p className="text-sm text-ink mt-1">{driverSentence(j)}</p>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-rule rounded-2xl p-4 sm:p-6 mt-4">
                {sent ? (
                  <p className="text-ink">Sent. The write-up is on its way to {email.trim()}, with what to check on each losing job.</p>
                ) : (
                  <form onSubmit={sendWriteUp}>
                    <h3 className="font-display text-xl text-ink mb-1">Get this as a write-up</h3>
                    <p className="text-muted text-sm mb-4">With what to check on each losing job. One email; nothing else unless you ask.</p>
                    <input type="text" tabIndex={-1} autoComplete="off" className="hidden" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} aria-hidden="true" />
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@yourshop.com" className={`${field} font-sans flex-1`} />
                      <button type="submit" disabled={sending} className="px-5 py-3 rounded-lg bg-ink text-white font-semibold disabled:opacity-60">
                        {sending ? 'Sending…' : 'Email me the write-up'}
                      </button>
                    </div>
                    {error && <p className="mt-2 text-sm text-audit">{error}</p>}
                  </form>
                )}
              </div>

              <div className="bg-ink text-white rounded-2xl p-5 sm:p-7 mt-4">
                <p className="text-lg leading-relaxed">
                  This is {report.jobs.length} jobs you remembered. Poof does this for every job from your real books: it tracks profit per job from the bills and
                  invoices tagged to it, on every monthly close. One plan, every feature: 30 days free with no card, then $39.50 a month for three months, then $79.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  <a
                    href={`https://app.poofai.com/register?src=${encodeURIComponent(source ?? 'job-margin-check')}`}
                    onClick={() => trackEvent('jmc_trial_clicked', { source: source ?? 'direct' })}
                    className="px-5 py-3 rounded-lg bg-ledger-500 text-white font-semibold hover:bg-ledger-600 text-center"
                  >
                    Start your free trial
                  </a>
                  <a href="/trades" className="px-5 py-3 rounded-lg border border-white/30 text-white font-semibold text-center">
                    How Poof works for shops
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
