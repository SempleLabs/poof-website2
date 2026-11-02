'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import OvernightRun from '@/components/OvernightRun'

/**
 * The homepage show: last night's run, then three steps the visitor performs.
 * "The work disappears. The evidence doesn't."
 * Every step is a feature that exists and is tested; the figures are a demo.
 */

type RuleState = 'none' | 'active' | 'paused' | 'revoked'
// Who Poof is for, each pointing at the page written for them (folds in site PR #26). Plain links:
// visible at once, readable by search engines, and nothing on the page changes behind the visitor's back.
// Owners first (2026-11-01).
const AUDIENCES: [string, string][] = [
  ['You do your own books', '/autopilot'],
  ['You want someone to do them', '/bookkeeper'],
  ['You run a service shop', '/trades'],
  ['You paid contractors this year', '/1099s'],
  ['You keep books for clients', '/close'],
  ['You are leaving QuickBooks', '/poof-vs-quickbooks'],
]

const fmtTime = (d: Date) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
const money = (n: number) => n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const BATCH = [
  ['08/03 · FERGUSON ENT · job #2026-078', '$612.40'],
  ['08/09 · FERGUSON ENT · job #2026-081', '$1,214.60'],
  ['08/14 · FERGUSON ENT · job #2026-083', '$388.00'],
  ['08/21 · FERGUSON ENT · job #2026-085', '$1,691.20'],
  ['08/28 · FERGUSON ENT · no job yet', '$412.00'],
] as const

type Task = { id: string; label: string; kind: 'auto' | 'person' | 'lock'; due: string; done: boolean; ev: string; open?: boolean }
// The product's monthly default, in an owner's words (close-tasks.math.ts DEFAULT_TEMPLATE, 2026-10-12):
// nineteen tasks, fifteen proven by the books, three a person's tick, and the signature.
const INITIAL_TASKS: Task[] = [
  { id: 'feeds', label: 'Bank feeds reviewed', kind: 'auto', due: 'day 2', done: false, open: true, ev: '3 cards still waiting. Step 2 is where they are.' },
  { id: 'bank', label: 'Bank reconciled', kind: 'auto', due: 'day 3', done: false, open: true, ev: 'Operating account: 2,140.00 unexplained. Step 3 fixes this.' },
  { id: 'drafts', label: 'Draft entries posted', kind: 'auto', due: 'day 3', done: true, ev: '0 drafts remain' },
  { id: 'staged', label: 'Parts bought for finished jobs moved onto them', kind: 'auto', due: 'day 3', done: true, ev: '$0 left waiting for a job' },
  { id: 'deposits', label: 'Customer deposits released on finished jobs', kind: 'auto', due: 'day 3', done: true, ev: 'Rivera install not finished; $3,000 correctly still held' },
  { id: 'accruals', label: 'Recurring month-end entries posted', kind: 'auto', due: 'day 4', done: true, ev: '3 schedules ran on time' },
  { id: 'depr', label: 'Depreciation posted', kind: 'auto', due: 'day 4', done: true, ev: 'Two vans and the jetter, posted for August' },
  { id: 'ar', label: 'Who owes you matches open invoices', kind: 'auto', due: 'day 4', done: true, ev: '2 invoices past 30 days, both with follow-ups sent' },
  { id: 'ap', label: 'What you owe matches open bills', kind: 'auto', due: 'day 4', done: true, ev: 'Ties to the penny' },
  { id: 'plans', label: 'No plan visit counted twice', kind: 'auto', due: 'day 4', done: true, ev: '6 maintenance visits, none also invoiced' },
  { id: 'jobs', label: 'Every job cost tagged to its job', kind: 'auto', due: 'day 4', done: true, ev: '41 jobs, every part and bill tagged' },
  { id: 'cat', label: 'Every category reaches a report', kind: 'auto', due: 'day 4', done: true, ev: 'Nothing sitting in a category no report shows' },
  { id: 'invoiced', label: 'Every finished job invoiced', kind: 'auto', due: 'day 4', done: true, ev: '41 of 41, or a plan visit that earned it' },
  { id: 'labor', label: 'Labor on jobs', kind: 'auto', due: 'day 4', done: true, ev: '88% of field hours landed on jobs' },
  { id: 'vendor', label: 'Every August bill entered', kind: 'person', due: 'day 5', done: false, ev: 'Waiting for a person' },
  { id: 'tieout', label: 'Books checked for errors', kind: 'auto', due: 'day 5', done: true, ev: 'Clean as the books stand now; checks again if anything changes' },
  { id: 'narrative', label: 'The month’s write-up read', kind: 'person', due: 'day 6', done: false, ev: 'Waiting for a person' },
  { id: 'sign', label: 'Signed', kind: 'lock', due: 'day 7', done: false, open: true, ev: 'Signing locks the month. Its status comes from the books, never typed in.' },
  { id: 'pkg', label: 'Reports sent to the owner', kind: 'person', due: 'day 8', done: false, ev: 'After the signature: P&L, balance sheet, cash flow' },
]

const eyebrow = 'font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3'
const h2 = 'font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1] tracking-[-0.035em] text-ink mb-3 text-balance'
const sub = 'text-lg text-muted max-w-[56ch] mb-6 leading-[1.45]'
const btn = 'inline-block rounded-lg bg-ledger-500 text-white font-semibold text-[15px] px-[18px] py-[11px] hover:bg-ledger-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
const btnSm = 'inline-block rounded-lg bg-ledger-500 text-white font-semibold text-sm px-3 py-[7px] hover:bg-ledger-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
const btnRedSm = 'inline-block rounded-lg border-[1.5px] border-audit text-audit font-semibold text-sm px-3 py-[7px] hover:bg-audit-100 transition-colors'
const btnQuietSm = 'inline-block rounded-lg bg-ledger-200 text-ledger-600 font-semibold text-sm px-3 py-[7px] hover:bg-ledger-300 transition-colors'
const btnGhostSm = 'inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-sm px-3 py-[7px] hover:bg-paper-2 transition-colors disabled:opacity-50'

export default function HomeShow() {
  const reduce = useRef(false)
  useEffect(() => {
    reduce.current = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  // score
  const [you, setYou] = useState(0)
  const [byRule, setByRule] = useState(0)
  const [corr, setCorr] = useState(0)
  const start = useRef<Date | null>(null)
  const touch = () => { if (!start.current) start.current = new Date() }

  // act 1: the overnight run
  const [ranOvernight, setRanOvernight] = useState(false)

  // act 2
  const [c1, setC1] = useState<'open' | 'rejecting' | 'approved' | 'rejected'>('open')
  const [c1Reason, setC1Reason] = useState('')
  const [c2, setC2] = useState<string | null>(null)
  const [checks, setChecks] = useState([true, true, true, true, true])
  const [c3Approved, setC3Approved] = useState<number | null>(null)
  const [rule, setRule] = useState<RuleState>('none')
  const [night, setNight] = useState(false)
  const [ruleNote, setRuleNote] = useState<{ cls: string; text: string } | null>(null)
  const cardsDecided = (c1 === 'approved' || c1 === 'rejected' ? 1 : 0) + (c2 ? 1 : 0) + (c3Approved !== null ? 1 : 0)

  // act 3
  const [tied, setTied] = useState(false)
  const [diff, setDiff] = useState(2140)
  const reconcile = () => {
    touch(); if (tied) return
    setTied(true)
    const dur = reduce.current ? 0 : 900
    const t0 = performance.now()
    const step = (ts: number) => {
      const k = dur ? Math.min(1, (ts - t0) / dur) : 1
      setDiff(k >= 1 ? 0 : 2140 * (1 - k * k))
      if (k < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  // act 4
  const [person, setPerson] = useState<Record<string, string>>({})
  const [signer, setSigner] = useState('')
  const [signed, setSigned] = useState<Date | null>(null)
  const [reopened, setReopened] = useState<Date | null>(null)

  const tasks = useMemo(() => INITIAL_TASKS.map((t) => {
    const x = { ...t }
    if (t.id === 'bank' && tied) { x.done = true; x.open = false; x.ev = 'Operating account: 0.00 unexplained, completion stored the same figure' }
    if (t.id === 'feeds' && cardsDecided === 3) { x.done = true; x.open = false; x.ev = 'Every row seen by a person or a rule you granted' }
    if (t.kind === 'person' && person[t.id]) { x.done = true; x.ev = t.id === 'pkg' ? `Sent by a person, ${person[t.id]}` : `Ticked by a person, ${person[t.id]}` }
    if (t.id === 'sign' && signed) { x.done = true; x.open = false; x.ev = `Signed by ${signer.trim()}, ${fmtTime(signed)}. August is locked.` }
    return x
  }), [tied, cardsDecided, person, signed, signer])
  const openCount = tasks.filter((t) => !t.done && t.id !== 'sign' && t.id !== 'pkg').length
  const ready = openCount === 0 && !signed

  const tickPerson = (id: string) => { touch(); if (person[id] || (id === 'pkg' && !signed)) return; setPerson({ ...person, [id]: fmtTime(new Date()) }); setYou((v) => v + 1) }
  const sign = () => {
    if (!signer.trim()) return
    touch(); setSigned(new Date())
  }

  const rejectSend = useCallback(() => { touch(); setC1('rejected'); setYou((v) => v + 1) }, [])

  const o1 = ranOvernight, o2 = cardsDecided >= 2, o3 = tied, o4 = !!signed
  const checkedCount = checks.filter(Boolean).length
  const autoDone = tasks.filter((t) => t.kind !== 'person' && t.done).length
  const personDone = tasks.filter((t) => t.kind === 'person' && t.done).length

  return (
    <>
      {/* HERO: the offer, and the real inbox beside it */}
      <section className="max-w-[1020px] mx-auto px-4 sm:px-6 pt-10 pb-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-10 lg:gap-14 items-center" id="top">
        <div>
          <p className={eyebrow}>Free for good · Poof Agent $79 a month</p>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[72px] leading-[1] tracking-[-0.035em] text-ink mb-4 text-balance">Poof is free. Poof Agent does the books while you sleep.</h1>
          <p className="font-display text-[22px] sm:text-[26px] leading-[1.1] tracking-[-0.03em] text-ledger-600 mb-4">The work disappears. The evidence doesn&apos;t.</p>
          <p className={sub}>The books, invoices, reports and month-end cost nothing, for good. Poof Agent sorts the bank overnight, reads the receipts and drafts the reminders, then leaves each entry for your OK in the morning. Or hand the books to a person.</p>
          <div className="flex flex-wrap gap-2.5 items-center">
            <Link href="https://app.poofai.com/register" className={btn}>Start free</Link>
            <Link href="/bookkeeper" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Ask for a bookkeeper</Link>
          </div>
          <p className="text-[13px] text-muted mt-3">No card. Poof Agent is free for your first 30 days, then $79 a month if you keep it.</p>

          <nav aria-label="Who Poof is for" className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-1.5 text-[14px]">
            {AUDIENCES.map(([label, href]) => (
              <Link key={href} href={href} className="text-muted hover:text-ledger-700 underline decoration-rule underline-offset-[5px] hover:decoration-ledger-600">{label} →</Link>
            ))}
          </nav>
        </div>

        <figure className="mx-auto lg:mx-0">
          <div className="relative w-[220px] lg:w-[260px] rounded-[28px] border-[6px] border-ink bg-ink overflow-hidden shadow-[0_18px_40px_rgba(18,33,26,0.18)]">
            <Image src="/images/approvals-phone.jpg" alt="The Approvals inbox on a phone: a Categorize 2 transactions card from the nightly run and a Create invoice card from the assistant, each with Approve and Reject" width={788} height={1600} sizes="260px" priority className="block w-full h-auto" />
          </div>
          <figcaption className="mt-3 text-[13px] text-muted max-w-[260px]">
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-ledger-600 block mb-1">Real screenshot · the founder&apos;s books</span>
            Two cards waiting for a yes: one from the overnight run, one Ask Poof drafted.
          </figcaption>
        </figure>
      </section>

    <div className="max-w-[820px] mx-auto px-4 sm:px-6 pb-24">
      {/* progress line */}
      <div className="sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2 bg-paper/95 backdrop-blur border-b border-rule flex items-center justify-between gap-3 text-[11px] sm:text-[12.5px] font-mono tracking-[0.06em] uppercase text-muted" aria-label="Progress">
        {/* all four steps fit a 375px phone: no "The", no separators, smaller dots below sm */}
        <span className="flex items-center gap-2 min-w-0 overflow-x-auto scrollbar-hide">
          {[['night', o1], ['inbox', o2], ['bank', o3], ['month-end', o4]].map(([label, done], i) => (
            <span key={label as string} className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
              {i > 0 && <span className="text-rule hidden sm:inline">·</span>}
              <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${done ? 'bg-ledger-600' : 'border border-muted'}`} aria-hidden="true" />
              <span className={done ? 'text-ink' : ''}>{label as string}</span>
            </span>
          ))}
        </span>
        <span className="hidden sm:inline whitespace-nowrap">By you <b className="text-ink">{you}</b> · by a rule <b className="text-ink">{byRule}</b> · corrected <b className="text-ink">{corr}</b></span>
      </div>

      <div className="min-w-0">
        {/* ACT 1 */}
        <section className="pt-10 pb-6" id="act1">
          <p className={eyebrow}>Step 1 · The night</p>
          <h2 className={h2}>Last night, Poof Agent ran the back office.</h2>
          <p className="text-[15px] text-muted max-w-[56ch]">It pulled the bank, matched the bills to jobs, drafted the invoice from the tech&apos;s notes and checked who needs a 1099. Then it stopped, because a few things need a person. That person is you.</p>

          <OvernightRun onFinish={() => setRanOvernight(true)} onDecide={() => { touch(); setYou((v) => v + 1) }} />
        </section>

        {/* ACT 2 */}
        <section className="pt-16 pb-6 border-t border-rule" id="act2">
          <p className={eyebrow}>Step 2 · The inbox</p>
          <h2 className={h2}>Every entry waits for you, with its reasons.</h2>
          <p className={sub}>Approve it, approve part of it, or say why not. When the same answer keeps coming up, make it a rule, and watch the rule <b className="text-ink font-semibold">stop itself</b> the first time you correct it.</p>
          <div className="grid gap-3.5">
            {/* card 1 */}
            <div className="bg-white border border-rule px-[18px] py-4">
              <div className="flex justify-between gap-3 items-baseline"><b className="font-semibold">Ferguson Enterprises → Job Materials</b><span className="font-mono font-medium tabular whitespace-nowrap">$1,214.60</span></div>
              <div className="mt-2 px-3 py-[9px] bg-ledger-200 text-ledger-600 text-[13.5px] rounded">Evidence: 5 prior transactions for this merchant, all categorized Job Materials. Bill matched to job #2026-081, Henderson install. Gathered by code, not judged by the model.</div>
              {c1 === 'open' && (
                <div className="flex flex-wrap gap-2 mt-3"><button type="button" className={btnSm} onClick={() => { touch(); setC1('approved'); setYou((v) => v + 1) }}>Approve</button><button type="button" className={btnRedSm} onClick={() => { touch(); setC1('rejecting') }}>Reject with a reason</button></div>
              )}
              {c1 === 'rejecting' && (
                <div className="flex gap-2 mt-2.5">
                  <input type="text" value={c1Reason} onChange={(e) => setC1Reason(e.target.value)} placeholder="Why not? This is recorded, and it is what stops a rule." aria-label="Rejection reason" className="flex-1 text-sm px-2.5 py-2 border border-rule rounded bg-paper-2" />
                  <button type="button" className={btnSm} onClick={rejectSend}>Record</button>
                </div>
              )}
              {c1 === 'approved' && <div className="mt-3 pt-2.5 border-t border-dashed border-rule text-sm text-ledger-600">Approved. It ran exactly what was on the card: the stored request, not a fresh interpretation of it.</div>}
              {c1 === 'rejected' && <div className="mt-3 pt-2.5 border-t border-dashed border-rule text-sm text-audit">Rejected. Reason recorded: &ldquo;{c1Reason.trim() || '(no reason given)'}&rdquo;. That sentence is what stops a rule covering this kind of work.</div>}
            </div>
            {/* card 2 */}
            <div className="bg-white border border-rule px-[18px] py-4">
              <div className="flex justify-between gap-3 items-baseline"><b className="font-semibold">HOME DEPOT #4471 → ?</b><span className="font-mono font-medium tabular whitespace-nowrap">$86.12</span></div>
              <div className="mt-2 px-3 py-[9px] bg-paper-2 text-muted text-[13.5px] rounded">No history for this merchant. The card is telling you why it is asking instead of guessing.</div>
              {!c2 ? (
                <div className="flex flex-wrap gap-2 mt-3 items-center"><span className="font-mono text-[12.5px] text-muted">Categorize as</span>{['Job Materials', 'Shop Supplies', 'Truck & Tools'].map((a) => (
                  <button key={a} type="button" className={btnQuietSm} onClick={() => { touch(); setC2(a); setYou((v) => v + 1) }}>{a}</button>
                ))}</div>
              ) : (
                <div className="mt-3 pt-2.5 border-t border-dashed border-rule text-sm text-ledger-600">Categorized as {c2}. Recorded as your decision, with the evidence that there was none. Next time this merchant appears, the card will say &ldquo;1 prior, categorized {c2} by you.&rdquo;</div>
              )}
            </div>
            {/* card 3 */}
            <div className="bg-white border border-rule px-[18px] py-4">
              <div className="flex justify-between gap-3 items-baseline"><b className="font-semibold">Ferguson Enterprises → Job Materials, 5 rows</b><span className="font-mono font-medium tabular whitespace-nowrap">$4,318.20</span></div>
              <div className="mt-2 px-3 py-[9px] bg-ledger-200 text-ledger-600 text-[13.5px] rounded">Evidence: same merchant, same agreement in their history. Untick anything you want to look at; the rest goes in one tap. Unticked rows are still here tomorrow.</div>
              <ul className="mt-2.5 border-t border-rule">
                {BATCH.map(([label, amt], i) => {
                  const waiting = c3Approved !== null && !checks[i]
                  const okd = c3Approved !== null && checks[i]
                  return (
                    <li key={label} className={`grid grid-cols-[22px_1fr_auto] gap-2.5 py-[7px] border-b border-rule text-sm items-center ${waiting ? 'text-muted' : ''} ${okd ? 'text-ledger-600' : ''}`}>
                      <input type="checkbox" className="accent-ledger-500 w-[15px] h-[15px]" checked={checks[i]} disabled={c3Approved !== null} aria-label={`Row ${i + 1}`} onChange={(e) => setChecks(checks.map((c, j) => (j === i ? e.target.checked : c)))} />
                      <span>{label}</span>
                      {waiting ? <span className="font-mono text-[11px] tracking-[0.06em] uppercase">still waiting</span> : <span className="font-mono tabular">{amt}</span>}
                    </li>
                  )
                })}
              </ul>
              {c3Approved === null && <div className="mt-3"><button type="button" className={btnSm} onClick={() => { touch(); setC3Approved(checkedCount); setYou((v) => v + checkedCount) }}>Approve {checkedCount}</button></div>}
              {c3Approved !== null && (
                <div className="mt-3 pt-2.5 border-t border-dashed border-rule text-sm text-ledger-600">Approved {c3Approved} of 5. {5 - c3Approved === 0 ? 'Nothing left on this card.' : `${5 - c3Approved} still waiting; it will be here tomorrow.`}</div>
              )}
              {c3Approved !== null && rule === 'none' && <div className="mt-3"><button type="button" className={btnQuietSm} onClick={() => { touch(); setRule('active') }}>Approve all like this: derive a rule</button></div>}
              {rule !== 'none' && (
                <div className="mt-3.5 border border-ledger-600 px-4 py-3.5 bg-paper-2">
                  <span className={`inline-block font-mono text-[11px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-[3px] mb-2 ${rule === 'active' ? 'bg-ledger-200 text-ledger-600' : rule === 'paused' ? 'bg-audit-100 text-audit' : 'bg-paper text-muted'}`}>{rule === 'active' ? 'Active' : rule === 'paused' ? 'Paused' : 'Revoked'}</span>
                  <h5 className="font-semibold text-[15px] mb-2">Standing rule, derived from the card you just read</h5>
                  <p className="text-[14.5px] mb-1.5">When <b>Ferguson Enterprises</b> charges <b>under $2,000</b>, categorize as <b>Job Materials</b>. Covers 4 of the 5 rows on this card. Writes to the ledger only; never sends anything to a customer. That stays a person&apos;s decision.</p>
                  <p className="font-mono text-[12.5px] text-muted mt-2">Your record with this kind of change, last 30 days: 12 approved · 0 rejected · granted by you, just now</p>
                  {!night && <div className="mt-3"><button type="button" className={btnSm} onClick={() => { touch(); setNight(true); setByRule((v) => v + 3) }}>Run overnight</button></div>}
                  {night && <div className="mt-3 pt-2.5 border-t border-dashed border-rule text-sm text-ledger-600">Overnight: the rule covered 3 new Ferguson rows under $2,000 and left one at $2,310.00 in the inbox, over its ceiling. Daily cap: 3 of 25.</div>}
                  {night && rule === 'active' && !ruleNote && <div className="mt-3"><button type="button" className={btnRedSm} onClick={() => { touch(); setCorr((v) => v + 1); setRule('paused'); setRuleNote({ cls: 'text-audit', text: `Paused itself. The correction that stopped it: FERGUSON 08/28 $412.00, Job Materials → Equipment, by you, ${fmtTime(new Date())}. It covers nothing until you decide. Its earlier work stands.` }) }}>Correct one of its rows: $412.00 was Equipment, not Job Materials</button></div>}
                  {ruleNote && <div className={`mt-3 pt-2.5 border-t border-dashed border-rule text-sm ${ruleNote.cls}`}>{ruleNote.text}</div>}
                  {rule === 'paused' && (
                    <div className="flex gap-2 mt-3">
                      <button type="button" className={btnSm} onClick={() => { setRule('active'); setRuleNote({ cls: 'text-ledger-600', text: `Resumed by you, ${fmtTime(new Date())}. The correction stays on its record.` }) }}>Resume</button>
                      <button type="button" className={btnRedSm} onClick={() => { setRule('revoked'); setRuleNote({ cls: 'text-muted', text: `Revoked by you, ${fmtTime(new Date())}. Inert from now on; the 3 rows it handled overnight stand, with its name on them.` }) }}>Revoke</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <p className="text-sm text-muted mt-6 max-w-[56ch]">These cards are a demo. The phone at the top of the page is the real inbox, from the founder&apos;s own books.</p>
        </section>

        {/* ACT 3 */}
        <section className="pt-16 pb-6 border-t border-rule" id="act3">
          <p className={eyebrow}>Step 3 · Bank against books</p>
          <h2 className={h2}>One figure. It ties or it doesn&apos;t.</h2>
          <p className={sub}>Your bank statement on one side, your books on the other, down to the penny. When they don&apos;t match, Poof shows you why. When they do, that figure is saved, and month-end reads the same one. <b className="text-ink font-semibold">There is no second figure.</b></p>
          <div className="bg-white border border-rule px-[18px] pt-1.5 pb-4 max-w-[560px]">
            <table className="w-full border-collapse">
              <tbody>
                <tr><td className="py-2.5 border-b border-rule text-[15px]">Statement ending balance · Aug 31</td><td className="py-2.5 border-b border-rule text-right font-mono tabular whitespace-nowrap">48,212.19</td></tr>
                <tr><td className="py-2.5 border-b border-rule text-[15px]">Less: books at period end</td><td className="py-2.5 border-b border-rule text-right font-mono tabular whitespace-nowrap">46,072.19</td></tr>
                {tied && <tr className="text-ledger-600"><td className="py-2.5 border-b border-rule text-[15px]">Less: outstanding, carried forward from July · check #1187 to Johnstone Supply, written Jul 29, not yet cleared</td><td className="py-2.5 border-b border-rule text-right font-mono tabular whitespace-nowrap">2,140.00</td></tr>}
                <tr><td className="pt-3.5 font-semibold text-[15px]">Unexplained difference</td><td className={`pt-3.5 text-right font-mono tabular text-[26px] font-medium ${tied ? 'text-ledger-600' : ''}`}>{money(diff)}</td></tr>
              </tbody>
            </table>
          </div>
          {tied && <div className="inline-block mt-2.5 font-display text-[40px] tracking-[-0.04em] text-ledger-600 -rotate-[4deg] origin-left">Ties.</div>}
          <div className="mt-3.5"><button type="button" className={btn} onClick={reconcile} disabled={tied}>{tied ? 'Reconciled · stored as the same figure' : 'Reconcile August'}</button></div>
        </section>

        {/* ACT 4 */}
        <section className="pt-16 pb-6 border-t border-rule" id="act4">
          <p className={eyebrow}>Step 4 · Month-end</p>
          <h2 className={h2}>The close is a record, and you are the signature.</h2>
          <p className={sub}>Month-end is a checklist of nineteen jobs. <b className="text-ink font-semibold">Fifteen tick themselves</b> when the books prove they&apos;re done, and nobody can tick them by hand. Three wait for a person and record who and when. Your signature locks the month. This page has been keeping score since you arrived.</p>
          <ul className="border-t border-ink">
            {tasks.map((t) => (
              <li key={t.id} className="grid grid-cols-[24px_1fr_auto] gap-3 py-[9px] border-b border-rule text-[14.5px] items-start">
                {t.kind === 'person' ? (
                  <button type="button" role="checkbox" aria-checked={t.done} aria-label={`Tick: ${t.label}`} onClick={() => tickPerson(t.id)} className={`relative w-[17px] h-[17px] mt-0.5 rounded-[3px] border-[1.5px] ${t.done ? 'bg-ledger-600 border-ledger-600' : 'border-muted'}`}>
                    {t.done && <span className="absolute left-[5px] top-[1px] w-[5px] h-[10px] border-white border-r-2 border-b-2 rotate-45" />}
                  </button>
                ) : (
                  <span className={`relative w-[17px] h-[17px] mt-0.5 rounded-[3px] border-[1.5px] ${t.done ? 'bg-ledger-600 border-ledger-600' : 'border-dashed border-muted'}`}>
                    {t.done && <span className="absolute left-[5px] top-[1px] w-[5px] h-[10px] border-white border-r-2 border-b-2 rotate-45" />}
                  </span>
                )}
                <span>
                  {t.label}
                  <span className="font-mono text-[10.5px] tracking-[0.06em] uppercase text-muted ml-1.5">{t.kind === 'person' ? "a person's tick" : t.kind === 'lock' ? 'the lock' : 'evidence'}</span>
                  <span className={`block text-[13px] mt-0.5 ${t.done ? 'text-ledger-600' : t.open ? 'text-audit' : 'text-muted'}`}>{t.ev}</span>
                </span>
                <span className="font-mono text-xs text-muted whitespace-nowrap pt-0.5">{t.due}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2.5 items-center mt-[18px]">
            <input type="text" value={signer} onChange={(e) => setSigner(e.target.value)} placeholder="Your name" aria-label="Your name, as the signature" disabled={!!signed} className="font-display text-[22px] tracking-[-0.03em] px-3 py-2 border-0 border-b-2 border-ink bg-transparent min-w-[240px] placeholder:text-muted" />
            <button type="button" className={btn} disabled={!ready || !signer.trim()} onClick={sign}>{signed ? 'Signed' : ready ? 'Sign the August close' : `Not ready · ${openCount} ${openCount === 1 ? 'task open' : 'tasks open'}`}</button>
          </div>
          {signed && (
            <div className="mt-[22px] border border-ink border-l-4 border-l-audit [border-left-style:double] bg-white px-5 py-[18px]">
              <h5 className="font-display text-2xl tracking-[-0.035em] mb-2.5">August 2026 · {reopened ? 'reopened' : 'signed'}</h5>
              <dl className="grid grid-cols-[auto_1fr] gap-x-[18px] gap-y-1.5 text-[14.5px]">
                <dt className="font-mono text-xs tracking-[0.06em] uppercase text-muted pt-0.5">Started</dt><dd>{fmtTime(start.current || signed)} by you</dd>
                <dt className="font-mono text-xs tracking-[0.06em] uppercase text-muted pt-0.5">Signed</dt><dd>{fmtTime(signed)} by {signer.trim()}</dd>
                <dt className="font-mono text-xs tracking-[0.06em] uppercase text-muted pt-0.5">Took</dt><dd>{(() => { const ms = signed.getTime() - (start.current || signed).getTime(); const m = Math.floor(ms / 60000), s = Math.round((ms % 60000) / 1000); return `${m ? m + ' min ' : ''}${s} sec, start to signature` })()}</dd>
                <dt className="font-mono text-xs tracking-[0.06em] uppercase text-muted pt-0.5">Decisions</dt><dd>{you} by a person · {byRule} by a rule you granted</dd>
                <dt className="font-mono text-xs tracking-[0.06em] uppercase text-muted pt-0.5">Corrections</dt><dd>{corr} {corr === 1 ? 'correction' : 'corrections'}{rule === 'paused' ? ' · one rule still paused' : rule === 'revoked' ? ' · one rule revoked' : ''}</dd>
                <dt className="font-mono text-xs tracking-[0.06em] uppercase text-muted pt-0.5">Tasks</dt><dd>{tasks.length} · {autoDone} ticked themselves · {personDone} by a person</dd>
              </dl>
              <div className="mt-3.5 flex gap-2.5 items-center flex-wrap text-sm text-muted">
                <button type="button" className={btnGhostSm} disabled={!!reopened} onClick={() => setReopened(new Date())}>Reopen the close</button>
                <span>{reopened ? `Reopened ${fmtTime(reopened)}. The signature above stays on the record.` : 'Reopening keeps the signature on record.'}</span>
              </div>
            </div>
          )}
        </section>

        {/* PRACTITIONER */}
        <section className="pt-16 pb-6 border-t border-rule" id="practitioner">
          <p className={eyebrow}>Built by a former controller</p>
          <h2 className={h2}>The person who wrote this signed closes for a living first.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-[22px] items-center mt-7 px-6 py-[22px] bg-white border border-rule">
            <div className="relative aspect-square max-w-[220px] border border-rule bg-paper-2 overflow-hidden">
              <Image src="/team/austin-semple.jpg" alt="Austin Semple" fill sizes="220px" className="object-cover object-center" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1.5">Austin Semple, former controller</h3>
              <p className="text-[15px] text-muted max-w-[52ch]">Two years as an auditor, then seven as a controller for small businesses, then Poof. He closes his own books on it, from a phone, and fixes what that turns up before anyone else sees it.</p>
              <p className="mt-3 text-sm"><Link href="/about" className="text-ledger-600 font-semibold hover:text-ledger-700">More about Austin</Link></p>
            </div>
          </div>
        </section>

        {/* SOURCES */}
        <section className="pt-12 pb-6 border-t border-rule" id="sources">
          <p className="text-sm text-muted max-w-[62ch]">Every figure on this page is either a demo, marked as one, or a screenshot of the founder&apos;s own books.</p>
          <p className="text-sm text-muted mt-3 max-w-[60ch]">Run a shop? <Link href="/trades" className="text-ledger-600 font-semibold hover:text-ledger-700">See a service call go from the phone to the P&amp;L →</Link></p>
          <p className="text-sm text-muted mt-3 max-w-[60ch]">Rather not do any of this yourself? <Link href="/bookkeeper" className="text-ledger-600 font-semibold hover:text-ledger-700">A bookkeeper who works in Poof will →</Link></p>
        </section>
      </div>
    </div>
    </>
  )
}
