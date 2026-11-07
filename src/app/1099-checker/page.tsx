'use client'

import { useEffect, useMemo, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { DUE_DATE, MAX_PAYEES, PAYEES, PURPOSES, check1099, formLabel, headline, money, type PayeeInput, type Payee, type Purpose } from '@/lib/form1099'
import { FILE_1099S_URL, FILING_1099, dollars } from '@/lib/pricing1099'
import { readSource } from '@/lib/source'
import { trackEvent } from '@/lib/analytics'

type Row = { name: string; paid: string; card: string; purpose: Purpose; payee: Payee }
const emptyRow = (): Row => ({ name: '', paid: '', card: '', purpose: 'services', payee: 'unknown' })
const toNum = (s: string) => Number(s.replace(/[$,\s]/g, ''))
const valid = (s: string) => s.trim() !== '' && Number.isFinite(toNum(s)) && toNum(s) >= 0

const field =
  'w-full px-3 py-2.5 bg-white border border-rule rounded-lg text-ink focus:border-ledger-500 focus:ring-1 focus:ring-ledger-500/20 transition-all'
const num = `${field} font-mono tabular-nums`

/** Rows copied from a spreadsheet arrive tab-separated: name, paid by check/ACH/cash, and optionally paid by card. */
function parsePaste(text: string): Row[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.split('\t').map((c) => c.trim()))
    .filter((cells) => cells[0] && valid(cells[1] ?? ''))
    .slice(0, MAX_PAYEES)
    .map(([name, paid, card]) => ({ ...emptyRow(), name: name.slice(0, 60), paid, card: card && valid(card) ? card : '' }))
}

export default function Checker1099Page() {
  const [rows, setRows] = useState<Row[]>([emptyRow(), emptyRow(), emptyRow()])
  const [pasting, setPasting] = useState(false)
  const [paste, setPaste] = useState('')
  const [shown, setShown] = useState(false)
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [source, setSource] = useState<string | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => setSource(readSource()), [])

  const payees: PayeeInput[] = rows
    .filter((r) => valid(r.paid) || valid(r.card))
    .filter((r) => (r.paid === '' || valid(r.paid)) && (r.card === '' || valid(r.card)))
    .map((r, i) => ({
      name: r.name.trim() || `Payee ${i + 1}`,
      paid: r.paid === '' ? 0 : toNum(r.paid),
      card: r.card === '' ? 0 : toNum(r.card),
      purpose: r.purpose,
      payee: r.payee,
    }))
  const report = useMemo(() => check1099(payees), [JSON.stringify(payees)]) // eslint-disable-line react-hooks/exhaustive-deps

  const set = <K extends keyof Row>(i: number, key: K, value: Row[K]) => {
    if (!started) {
      setStarted(true)
      trackEvent('n99_started', { source: source ?? 'direct' })
    }
    setRows((rs) => rs.map((r, k) => (k === i ? { ...r, [key]: value } : r)))
  }

  const usePaste = () => {
    const parsed = parsePaste(paste)
    if (parsed.length === 0) return setError('Copy two or three columns from a spreadsheet: name, then paid by check, ACH or cash, then paid by card.')
    setError(null)
    setRows(parsed)
    setPasting(false)
    setPaste('')
  }

  const showResult = () => {
    if (payees.length < 1) return setError('Fill in at least one person you paid, with an amount.')
    setError(null)
    setShown(true)
    trackEvent('n99_result_shown', { source: source ?? 'direct', payees: payees.length, forms: report.forms })
    setTimeout(() => document.getElementById('result')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  const sendList = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError('Please enter a valid email address.')
    setSending(true)
    setError(null)
    try {
      const res = await fetch('/api/1099-checker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), payees, source, company_url: honeypot }),
      })
      const out = await res.json()
      if (!res.ok) throw new Error(out.error || 'Something went wrong.')
      setSent(true)
      trackEvent('n99_email_submitted', { source: source ?? 'direct', payees: payees.length, forms: report.forms })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSending(false)
    }
  }

  const chip = (form: string | null) =>
    form === '1099-NEC' || form === '1099-MISC' ? 'bg-ledger-200 text-ledger-600' : 'bg-paper-2 text-muted'

  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <PageHero
        title={<>Do I owe these contractors <span className="text-ledger-600">a 1099?</span></>}
        subtitle="List who you paid in 2026. See who gets a 1099 at the new $2,000 line, who doesn’t and why, and which W-9s you still need. Nothing is saved unless you ask for a copy."
      />

      <section className="py-8 pb-16 bg-paper-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-rule rounded-2xl p-4 sm:p-6">
            {pasting ? (
              <div>
                <label className="block text-sm text-ink font-semibold mb-2" htmlFor="paste">Paste from a spreadsheet</label>
                <p className="text-sm text-muted mb-3">Copy two or three columns: name, paid by check, ACH or cash, and (optional) paid by card or PayPal. Up to {MAX_PAYEES} rows.</p>
                <textarea id="paste" rows={8} className={`${field} font-mono text-sm`} value={paste} onChange={(e) => setPaste(e.target.value)} placeholder={'Rivera Drywall\t18400\nLopez Electric\t1200\t3000'} />
                <div className="flex flex-col sm:flex-row gap-3 mt-3">
                  <button type="button" onClick={usePaste} className="flex-1 px-5 py-3 rounded-lg bg-ledger-500 text-white font-semibold hover:bg-ledger-600">Use these rows</button>
                  <button type="button" onClick={() => setPasting(false)} className="px-5 py-3 rounded-lg border border-rule text-ink font-semibold hover:bg-paper">Type them instead</button>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {rows.map((r, i) => (
                    <div key={i} className="border border-rule rounded-xl p-3 sm:p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <input aria-label={`Payee ${i + 1} name`} className={field} placeholder={`Who you paid (e.g. Rivera Drywall)`} value={r.name} onChange={(e) => set(i, 'name', e.target.value)} />
                        {rows.length > 1 && (
                          <button type="button" aria-label={`Remove payee ${i + 1}`} onClick={() => setRows((rs) => rs.filter((_, k) => k !== i))} className="px-3 py-2 text-muted hover:text-audit">
                            ✕
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <label className="block">
                          <span className="block text-xs uppercase tracking-wider text-muted mb-1">Paid by check, ACH, cash, Zelle</span>
                          <input inputMode="decimal" className={num} placeholder="$0" value={r.paid} onChange={(e) => set(i, 'paid', e.target.value)} />
                        </label>
                        <label className="block">
                          <span className="block text-xs uppercase tracking-wider text-muted mb-1">Paid by card or PayPal (optional)</span>
                          <input inputMode="decimal" className={num} placeholder="$0" value={r.card} onChange={(e) => set(i, 'card', e.target.value)} />
                        </label>
                        <label className="block">
                          <span className="block text-xs uppercase tracking-wider text-muted mb-1">What it was for</span>
                          <select className={field} value={r.purpose} onChange={(e) => set(i, 'purpose', e.target.value as Purpose)}>
                            {PURPOSES.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                          </select>
                        </label>
                        <label className="block">
                          <span className="block text-xs uppercase tracking-wider text-muted mb-1">Their W-9 says</span>
                          <select className={field} value={r.payee} onChange={(e) => set(i, 'payee', e.target.value as Payee)}>
                            {PAYEES.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                          </select>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted mt-3">Totals for payments made January 1 to December 31, 2026. An LLC is taxed however its W-9 says, so pick from the W-9, not the name.</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  {rows.length < MAX_PAYEES && (
                    <button type="button" onClick={() => setRows((rs) => [...rs, emptyRow()])} className="px-5 py-3 rounded-lg border border-rule text-ink font-semibold hover:bg-paper">
                      Add a person
                    </button>
                  )}
                  <button type="button" onClick={() => setPasting(true)} className="px-5 py-3 rounded-lg border border-rule text-ink font-semibold hover:bg-paper">
                    Paste a list
                  </button>
                  <button type="button" onClick={showResult} className="flex-1 px-5 py-3 rounded-lg bg-ledger-500 text-white font-semibold hover:bg-ledger-600">
                    Check my 1099s
                  </button>
                </div>
              </>
            )}
            {error && !shown && <p className="mt-3 text-sm text-audit">{error}</p>}
          </div>

          {shown && report.payees.length > 0 && (
            <div id="result" className="mt-8 scroll-mt-24">
              <div className="bg-white border border-rule rounded-2xl p-4 sm:p-6">
                <p className="text-xs uppercase tracking-wider text-muted mb-2">Your result</p>
                <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight mb-2">{headline(report)}</h2>
                <p className="text-muted font-mono tabular-nums text-sm">
                  {report.nec} 1099-NEC · {report.misc} 1099-MISC · {report.missingW9} missing W-9{report.missingW9 === 1 ? '' : 's'}
                </p>

                <div className="mt-5 divide-y divide-rule">
                  {report.payees.map((p, i) => (
                    <div key={i} className="py-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-semibold text-ink">{p.name}</span>
                        <span className={`font-mono tabular-nums text-sm px-2 py-0.5 rounded whitespace-nowrap ${chip(p.form)}`}>{formLabel(p)}</span>
                      </div>
                      {(p.form === '1099-NEC' || p.form === '1099-MISC') && <div className="font-mono tabular-nums text-sm text-muted mt-1">{money(p.counted)} on the form</div>}
                      <p className="text-sm text-ink mt-1">{p.reason}</p>
                    </div>
                  ))}
                </div>

                {report.missingW9 > 0 && (
                  <p className="text-sm text-ink mt-4 border-t border-rule pt-4">
                    {report.missingW9 === 1 ? '1 person is' : `${report.missingW9} people are`} over the line with no W-9 yet. Ask now, while they still answer email: the{' '}
                    <a href="/guides/w9-request-email-templates.html" className="text-ledger-600 font-semibold hover:text-ledger-700">W-9 request emails</a> are free to copy.
                  </p>
                )}
                <p className="text-sm text-muted mt-4">
                  1099-NEC forms go to the IRS and to each contractor by {DUE_DATE}. 1099-MISC copies go to recipients by the same day; the IRS copy is due March 31, 2027 if filed
                  online. For anything unusual, ask your CPA.
                </p>
              </div>

              {report.forms > 0 && (
                <div className="bg-ink text-white rounded-2xl p-5 sm:p-7 mt-4">
                  <p className="text-xs uppercase tracking-wider text-white/60 mb-2">To file them with Poof</p>
                  <p className="font-display text-2xl leading-tight">{report.cost.sentence}</p>
                  <p className="text-white/80 leading-relaxed mt-3">
                    Tell Poof who you paid, and Poof collects the W-9s, files with the IRS once you approve, and emails each contractor their copy free, or mails it for{' '}
                    {dollars(FILING_1099.mailedCopy)}. No IRS filer code and no books to set up.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-5">
                    <a
                      href={FILE_1099S_URL}
                      onClick={() => trackEvent('n99_file_clicked', { source: source ?? 'direct', forms: report.forms })}
                      className="px-5 py-3 rounded-lg bg-ledger-500 text-white font-semibold hover:bg-ledger-600 text-center"
                    >
                      File these with Poof
                    </a>
                    <a href="/1099s" className="px-5 py-3 rounded-lg border border-white/30 text-white font-semibold text-center">
                      How filing works
                    </a>
                  </div>
                </div>
              )}

              <div className="bg-white border border-rule rounded-2xl p-4 sm:p-6 mt-4">
                {sent ? (
                  <p className="text-ink">Sent. The list is on its way to {email.trim()}.</p>
                ) : (
                  <form onSubmit={sendList}>
                    <h3 className="font-display text-xl text-ink mb-1">Email me this list</h3>
                    <p className="text-muted text-sm mb-4">Who gets a form, the amounts and the deadline, to keep for January. One email; nothing else unless you ask.</p>
                    <input type="text" tabIndex={-1} autoComplete="off" className="hidden" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} aria-hidden="true" />
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@yourshop.com" className={`${field} flex-1`} />
                      <button type="submit" disabled={sending} className="px-5 py-3 rounded-lg bg-ink text-white font-semibold disabled:opacity-60">
                        {sending ? 'Sending…' : 'Email me the list'}
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
