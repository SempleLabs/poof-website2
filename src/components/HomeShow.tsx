'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * The homepage show: five acts the visitor performs.
 * "The work disappears. The evidence doesn't."
 * Every act is a feature that exists and is tested; the figures in the acts are a demo,
 * the claims table at the end is real.
 */

type RuleState = 'none' | 'active' | 'paused' | 'revoked'

const fmtTime = (d: Date) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
const money = (n: number) => n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const EVIDENCE = [
  ['Ferguson Enterprises', '$1,214.60', '5 prior transactions, all Job Materials. Matched to job #2026-081.'],
  ['Jobber export', '41 jobs', "39 matched to invoices. 2 are waiting with the reason they didn't."],
  ['HOME DEPOT #4471', '$86.12', 'No history for this merchant. That is why it will ask you.'],
  ['Rivera deposit', '$3,000.00', "Held as a liability. Released to the job's revenue when the job is done, not today."],
  ['Truck 3 fuel', '$212.40', 'Allocated across 3 jobs by the hours the tech logged on them.'],
  ['Henderson field report', '22 h', "Draft invoice exists in the office, in the tech's own words. Nobody retyped a ticket."],
] as const

const BATCH = [
  ['08/03 · FERGUSON ENT · job #2026-078', '$612.40'],
  ['08/09 · FERGUSON ENT · job #2026-081', '$1,214.60'],
  ['08/14 · FERGUSON ENT · job #2026-083', '$388.00'],
  ['08/21 · FERGUSON ENT · job #2026-085', '$1,691.20'],
  ['08/28 · FERGUSON ENT · no job yet', '$412.00'],
] as const

type Task = { id: string; label: string; kind: 'auto' | 'person' | 'lock'; due: string; done: boolean; ev: string; open?: boolean }
const INITIAL_TASKS: Task[] = [
  { id: 'feeds', label: 'Feeds reviewed', kind: 'auto', due: 'day 2', done: true, ev: '128 rows in, 128 seen by a person or a rule' },
  { id: 'bank', label: 'Bank reconciled', kind: 'auto', due: 'day 3', done: false, open: true, ev: 'Operating account: 2,140.00 unexplained. Act 3 fixes this.' },
  { id: 'drafts', label: 'Draft entries posted', kind: 'auto', due: 'day 3', done: true, ev: '0 drafts remain' },
  { id: 'staged', label: 'Staged materials relieved to jobs', kind: 'auto', due: 'day 3', done: true, ev: '$0 left on the staging account' },
  { id: 'deposits', label: 'Customer deposits released on completed jobs', kind: 'auto', due: 'day 3', done: true, ev: 'Rivera install not complete; $3,000 correctly still held' },
  { id: 'accruals', label: 'Accruals posted', kind: 'auto', due: 'day 4', done: true, ev: '3 schedules ran on time' },
  { id: 'ar', label: 'A/R reviewed', kind: 'auto', due: 'day 4', done: true, ev: '2 invoices past 30 days, both with follow-ups sent' },
  { id: 'ap', label: 'A/P reviewed', kind: 'auto', due: 'day 4', done: true, ev: 'Cash plan covers every bill due through Sep 15' },
  { id: 'plans', label: 'Plan visits earned', kind: 'auto', due: 'day 4', done: true, ev: '6 maintenance visits completed, 6 earned' },
  { id: 'jobs', label: 'Job costs tied', kind: 'auto', due: 'day 4', done: true, ev: '41 jobs, labor reconciles to payroll within $0.00' },
  { id: 'cat', label: 'Categories tied', kind: 'auto', due: 'day 4', done: false, open: true, ev: '3 cards waiting in Approvals. Act 2 is where they are.' },
  { id: 'inbox', label: 'Approvals inbox empty', kind: 'auto', due: 'day 4', done: false, open: true, ev: 'Anything still waiting is a decision nobody made.' },
  { id: 'vendor', label: 'Vendor bills cut off', kind: 'person', due: 'day 5', done: false, ev: 'Waiting for a person' },
  { id: 'tieout', label: 'Tie-out clean', kind: 'auto', due: 'day 5', done: true, ev: 'Ran clean at the state the books are in now; re-runs if anything moves' },
  { id: 'narrative', label: 'Narrative reviewed', kind: 'person', due: 'day 6', done: false, ev: 'Waiting for a person' },
  { id: 'sign', label: 'Signed', kind: 'lock', due: 'day 7', done: false, open: true, ev: 'Locking the period is the signature. Status is derived from the books, never typed.' },
  { id: 'pkg', label: 'Package sent', kind: 'auto', due: 'day 8', done: false, open: true, ev: 'Sends after the signature' },
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

  // act 1
  const [gone, setGone] = useState(false)
  const [vanished, setVanished] = useState(false)
  const poof = () => {
    touch(); setGone(true)
    window.setTimeout(() => setVanished(true), reduce.current ? 0 : 750)
  }

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
    if (t.id === 'cat' && cardsDecided >= 2) { x.done = true; x.open = false; x.ev = 'Every card decided by a person or a rule you granted' }
    if (t.id === 'inbox' && cardsDecided === 3) { x.done = true; x.open = false; x.ev = 'Nothing waiting' }
    if (t.kind === 'person' && person[t.id]) { x.done = true; x.ev = `Ticked by a person, ${person[t.id]}` }
    if (t.id === 'sign' && signed) { x.done = true; x.open = false; x.ev = `Signed by ${signer.trim()}, ${fmtTime(signed)}. Period locked.` }
    if (t.id === 'pkg' && signed) { x.done = true; x.open = false; x.ev = 'P&L, balance sheet, cash flow and variance sent after the signature' }
    return x
  }), [tied, cardsDecided, person, signed, signer])
  const openCount = tasks.filter((t) => !t.done && t.id !== 'sign' && t.id !== 'pkg').length
  const ready = openCount === 0 && !signed

  const tickPerson = (id: string) => { touch(); if (person[id]) return; setPerson({ ...person, [id]: fmtTime(new Date()) }); setYou((v) => v + 1) }
  const sign = () => {
    if (!signer.trim()) return
    touch(); setSigned(new Date())
  }

  const rejectSend = useCallback(() => { touch(); setC1('rejected'); setYou((v) => v + 1) }, [])

  const o1 = vanished, o2 = cardsDecided >= 2, o3 = tied, o4 = !!signed
  const checkedCount = checks.filter(Boolean).length
  const autoDone = tasks.filter((t) => t.kind !== 'person' && t.done).length
  const personDone = tasks.filter((t) => t.kind === 'person' && t.done).length

  return (
    <div className="max-w-[1180px] mx-auto px-4 sm:px-6 pb-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_220px] gap-0 lg:gap-12">
      {/* running order */}
      <aside className="lg:order-2 lg:sticky lg:top-24 lg:self-start pt-2 lg:pt-9" aria-label="Running order">
        <h4 className="font-mono text-[11.5px] tracking-[0.08em] uppercase text-muted mb-2.5">Running order · this visit</h4>
        <ol className="grid grid-cols-2 lg:grid-cols-1 gap-x-3.5 border-t border-ink">
          {[['The desk', o1], ['The inbox', o2], ['The reconciliation', o3], ['The close', o4]].map(([label, done]) => (
            <li key={label as string} className={`grid grid-cols-[22px_1fr] gap-2.5 py-2 lg:py-2.5 border-b border-rule text-sm ${done ? 'text-ink' : 'text-muted'}`}>
              <span className={`relative w-4 h-4 mt-[3px] rounded-[3px] border-[1.5px] ${done ? 'bg-ledger-600 border-ledger-600' : 'border-muted'}`}>
                {done && <span className="absolute left-[4px] top-[1px] w-[5px] h-[9px] border-white border-r-2 border-b-2 rotate-45" />}
              </span>
              <span>{label as string}</span>
            </li>
          ))}
        </ol>
        <div className="mt-3 text-[13.5px] text-muted">
          Decisions by you: <b className="text-ink">{you}</b> · by a rule: <b className="text-ink">{byRule}</b> · corrections: <b className="text-ink">{corr}</b>
          {signed && <><br /><b className="text-ink">Signed.</b></>}
        </div>
      </aside>

      <div className="lg:order-1 min-w-0 max-w-[780px]">
        {/* ACT 1 */}
        <section className="pt-9 pb-6" id="act1">
          <p className={eyebrow}>Step 1 · The desk</p>
          {!vanished ? (
            <>
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[84px] leading-[1] tracking-[-0.035em] text-ink mb-4 text-balance">The work disappears.</h1>
              <p className={sub}>Receipts, the bank feed, the Jobber export, the supply-house ticket in the truck. Press the button.</p>
            </>
          ) : (
            <>
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[84px] leading-[1] tracking-[-0.035em] text-ink mb-4 text-balance">The evidence doesn&apos;t.</h1>
              <p className={sub}>Nothing reached the books. Six things are waiting for you, each with <b className="text-ink font-semibold">what it found</b>. That is the whole idea: the work moves, the record does not, until you say so.</p>
            </>
          )}
          <div className={`relative aspect-[1024/687] my-2 mb-5 border border-rule overflow-hidden bg-paper-2 ${gone ? 'is-gone' : ''}`}>
            <Image src="/images/ledger-pad.jpg" alt="An empty pale-green ledger pad under a pool of warm light, one tick mark in the corner" fill sizes="(max-width: 780px) 100vw, 780px" className="object-cover" />
            <Image
              src="/images/ledger-pile.jpg"
              alt="Six pieces of paper on a ledger pad: a crumpled supply-house receipt, a spreadsheet export, a bank statement, a deposit slip, a fuel receipt, and a technician's work order"
              fill sizes="(max-width: 780px) 100vw, 780px" priority
              className={`object-cover transition-[opacity,transform] duration-[900ms] ease-out ${gone ? 'opacity-0 scale-[1.03]' : 'opacity-100'}`}
            />
            <div className={`absolute left-4 bottom-3.5 font-mono text-[11.5px] tracking-[0.08em] uppercase text-ink bg-paper-2/90 px-2.5 py-1 transition-opacity duration-[400ms] delay-[600ms] ${gone ? 'opacity-100' : 'opacity-0'}`}>Gone from the desk. Nothing touched the books yet.</div>
          </div>
          {!vanished && (
            <div className="text-center mt-1">
              <button type="button" onClick={poof} className="font-display text-[28px] sm:text-[34px] tracking-[-0.04em] bg-ledger-500 text-white px-10 sm:px-12 py-4 sm:py-[18px] rounded-[10px] shadow-[0_10px_30px_rgba(27,94,63,0.22)] hover:bg-ledger-600 hover:-translate-y-px transition">Poof.</button>
            </div>
          )}
          {vanished && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                {EVIDENCE.map(([k, v, w]) => (
                  <div key={k} className="bg-white border border-rule border-l-[3px] border-l-ledger-600 px-3 py-2.5 text-[13.5px]">
                    <div className="font-semibold flex justify-between gap-2.5"><span>{k}</span><span className="font-mono font-medium tabular">{v}</span></div>
                    <div className="text-muted mt-[3px]">{w}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6"><a className={btn} href="#act2">See what is waiting</a></div>
            </>
          )}
        </section>

        {/* ACT 2 */}
        <section className="pt-16 pb-6 border-t border-rule" id="act2">
          <p className={eyebrow}>Step 2 · The inbox</p>
          <h2 className={h2}>Every entry waits for you, with its reasons.</h2>
          <p className={sub}>Approve it, approve part of it, or say why not. Then grant a rule from work you just read, and watch it <b className="text-ink font-semibold">stop itself</b> the first time you contradict it.</p>
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
                  <p className="text-[14.5px] mb-1.5">When <b>Ferguson Enterprises</b> charges <b>under $2,000</b>, categorize as <b>Job Materials</b>. Covers 4 of the 5 rows on this card. Never sends anything to a customer; that stays a person&apos;s decision.</p>
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

          {/* The real thing, from a phone */}
          <figure className="mt-8 grid grid-cols-1 sm:grid-cols-[minmax(0,260px)_1fr] gap-6 items-center">
            <div className="relative mx-auto sm:mx-0 w-[240px] rounded-[28px] border-[6px] border-ink bg-ink overflow-hidden shadow-[0_18px_40px_rgba(18,33,26,0.18)]">
              <Image src="/images/approvals-phone.jpg" alt="The Approvals inbox on a phone: a Categorize 2 transactions card from the nightly pipeline with 29 days left, and a Create invoice card proposed by the assistant with 23 hours left, each with Approve, Reject, and Approve all like this" width={788} height={1600} sizes="240px" className="block w-full h-auto" />
            </div>
            <figcaption className="text-sm text-muted max-w-[44ch]">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-ledger-600 block mb-2">Real screenshot · the founder&apos;s books · September 2026</span>
              The cards above are a demo. This is the inbox itself, on a phone: one card the nightly pipeline raised, one the assistant drafted, both waiting. The line under the first one says <b className="text-ink font-semibold">computed by Poof, no model involved</b>, because the evidence is gathered by code.
            </figcaption>
          </figure>
        </section>

        {/* ACT 3 */}
        <section className="pt-16 pb-6 border-t border-rule" id="act3">
          <p className={eyebrow}>Step 3 · The reconciliation</p>
          <h2 className={h2}>One figure. It ties or it doesn&apos;t.</h2>
          <p className={sub}>Statement ending, less the books at period end, less what is still outstanding. The screen reads it from the server; completion stores the same number; the close reads that. <b className="text-ink font-semibold">There is no second figure.</b></p>
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
          <p className="text-sm text-muted mt-3.5 max-w-[56ch]">A first reconciliation lists what was still open from before it, never the opening balance, which both sides already agree on. A row you add during the reconciliation counts even though auto-match never saw it. Cleared rows stay cleared when someone later fixes a memo.</p>
        </section>

        {/* ACT 4 */}
        <section className="pt-16 pb-6 border-t border-rule" id="act4">
          <p className={eyebrow}>Step 4 · The close</p>
          <h2 className={h2}>The close is a record, and you are the signature.</h2>
          <p className={sub}>Seventeen tasks with due dates. <b className="text-ink font-semibold">Twelve tick themselves</b> when the books prove them and cannot be ticked by hand; each open one says why in a sentence. The rest are a person&apos;s tick, recorded with who and when. This page has been keeping score since you arrived.</p>
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
                <dt className="font-mono text-xs tracking-[0.06em] uppercase text-muted pt-0.5">Tasks</dt><dd>17 · {autoDone} ticked themselves · {personDone} by a person</dd>
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
            <div className="aspect-square max-w-[220px] border border-rule bg-paper-2 flex flex-col justify-end p-3.5 gap-1.5">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-ledger-600">Real photograph · Austin Semple</span>
              <span className="text-sm text-muted">Window light, work shirt, no laptop.</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1.5">Austin Semple, former controller</h3>
              <p className="text-[15px] text-muted max-w-[52ch]">Three years as an auditor, then seven as a controller for small businesses, then Poof. He closes his own books on it, from a phone, and fixes what that turns up before anyone else sees it.</p>
              <p className="mt-3 text-sm"><Link href="/about" className="text-ledger-600 font-semibold hover:text-ledger-700">More about Austin</Link></p>
            </div>
          </div>
        </section>

        {/* SOURCES */}
        <section className="pt-12 pb-6 border-t border-rule" id="sources">
          <p className="text-sm text-muted max-w-[62ch]">Every figure on this page is either a demo, marked as one, or a screenshot of the founder&apos;s own books. Prices were checked against QuickBooks on 23 Aug 2026. The two claims we have not earned yet, that it runs overnight on its own and that it will nag you at 3am, are not on this page.</p>
          <p className="text-sm text-muted mt-3 max-w-[60ch]">Run a shop? <Link href="/trades" className="text-ledger-600 font-semibold hover:text-ledger-700">See a service call go from the phone to the P&amp;L →</Link></p>
        </section>
      </div>
    </div>
  )
}
