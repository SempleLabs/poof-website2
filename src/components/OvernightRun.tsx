'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import ApprovalCard, { DEMO_CARDS, type CardState } from '@/components/ApprovalCard'

/**
 * Step 1 on the homepage: last night at Brazos Valley Comfort Co., the same fictional shop as the
 * hero phone and the live demo (app.poofai.com/demo). Drawn in the app's light look: on the left,
 * the Approvals "Done by rules" list (what Poof did, each rule row with Undo); on the right, the
 * cards waiting for a person, using the same card component as the hero phone. Every card here is
 * one the live demo also lets a visitor approve, and the Done-by-rules list is the demo's own night.
 */

// The live demo's real night (app PR #618): 3 rules filed 6 bank rows, each with Undo in Approvals →
// Done by rules. Keep this list identical to the demo's.
type Kind = 'rules'
const LINES: { t: string; text: string; kind: Kind; adds: number }[] = [
  { t: '2:00', text: 'FUEL STOP #118 WACO, $214.07, sorted to Vehicle Fuel', kind: 'rules', adds: 1 },
  { t: '2:00', text: 'SUPPLY HOUSE COUNTER #3 WACO, $148.62, sorted to Parts & Components', kind: 'rules', adds: 1 },
  { t: '2:01', text: 'FUEL STOP #207 WOODWAY, $187.42, sorted to Vehicle Fuel', kind: 'rules', adds: 1 },
  { t: '2:01', text: 'TRAVEL CENTER HEWITT, $171.36, sorted to Vehicle Fuel', kind: 'rules', adds: 1 },
  { t: '2:02', text: 'SUPPLY HOUSE COUNTER #3 WACO, $36.95, sorted to Parts & Components', kind: 'rules', adds: 1 },
  { t: '2:02', text: 'SUPPLY HOUSE COUNTER #3 WACO, $221.40, sorted to Parts & Components', kind: 'rules', adds: 1 },
]
const TAG: Record<Kind, string> = { rules: 'rule' }
const CARDS = [DEMO_CARDS.billMatch, DEMO_CARDS.paymentMatch, DEMO_CARDS.estimate]
const DONE = LINES.reduce((n, l) => n + l.adds, 0)

const STEP = 380

export const OVERNIGHT_RULE_COUNT = LINES.reduce((n, l) => n + l.adds, 0)

export default function OvernightRun({ onDecide, onFinish, onRuleCount }: { onDecide?: () => void; onFinish?: () => void; onRuleCount?: (n: number) => void }) {
  const [shown, setShown] = useState(0)
  const [finished, setFinished] = useState(false)
  const [undone, setUndone] = useState<number[]>([])
  const [states, setStates] = useState<CardState[]>(CARDS.map(() => 'open'))
  const timers = useRef<number[]>([])
  const finishRef = useRef(onFinish)
  finishRef.current = onFinish

  const play = useCallback(() => {
    timers.current.forEach(clearTimeout); timers.current = []
    setShown(0); setFinished(false); setUndone([]); setStates(CARDS.map(() => 'open'))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(LINES.length); setFinished(true); finishRef.current?.()
      return
    }
    LINES.forEach((_, i) => timers.current.push(window.setTimeout(() => setShown(i + 1), 250 + i * STEP)))
    timers.current.push(window.setTimeout(() => { setFinished(true); finishRef.current?.() }, 250 + LINES.length * STEP + 300))
  }, [])

  useEffect(() => {
    play()
    const t = timers.current
    return () => t.forEach(clearTimeout)
  }, [play])

  const decide = (i: number, s: CardState) => {
    if (states[i] !== 'open') return
    setStates(states.map((x, j) => (j === i ? s : x)))
    onDecide?.()
  }
  const waiting = states.filter((s) => s === 'open').length + undone.length
  const done = DONE - LINES.reduce((n, l, i) => n + (undone.includes(i) ? l.adds : 0), 0)
  const countRef = useRef(onRuleCount)
  countRef.current = onRuleCount
  useEffect(() => { countRef.current?.(done) }, [done])

  return (
    <div className="mt-6 bg-paper-2 border border-rule rounded-[6px] overflow-hidden text-ink">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-white border-b border-rule">
        <span className="min-w-0">
          <span className="block font-semibold text-[14px] truncate">Brazos Valley Comfort Co.</span>
          <span className="block font-mono text-[10.5px] tracking-[0.06em] uppercase text-muted">Heating &amp; plumbing · Waco, TX · Tuesday night</span>
        </span>
        <button type="button" onClick={play} className="shrink-0 rounded-md border border-rule bg-white px-2.5 py-1 text-[12px] font-semibold text-muted hover:text-ink hover:border-ink transition-colors">Replay</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr]">
        {/* Done by rules */}
        <div className="p-4 md:border-r border-b md:border-b-0 border-rule min-w-0">
          <p className="flex items-center gap-2 mb-2.5">
            <span className="rounded-md bg-ledger-600 text-white text-[12px] font-semibold px-2 py-[3px]">Done by rules</span>
            <span className="font-mono text-[12px] text-muted tabular">{finished ? done : '…'}</span>
          </p>
          <ol className="grid gap-1.5 min-h-[320px] content-start" aria-label="What Poof did overnight">
            {LINES.slice(0, shown).map((l, i) => {
              const off = undone.includes(i)
              return (
                <li key={l.t + l.text} className={`bg-white border border-rule px-3 py-2 grid grid-cols-[34px_1fr] gap-x-2 text-[13px] leading-[1.4] animate-[fadeIn_.35s_ease-out] ${off ? 'opacity-60' : ''}`}>
                  <span className="font-mono text-[11.5px] text-muted tabular pt-[1px]">{l.t}</span>
                  <span className="min-w-0">
                    <span className={off ? 'line-through' : ''}>{l.text}</span>
                    <span className="flex items-center gap-3 mt-1">
                      <span className="font-mono text-[10px] tracking-[0.04em] uppercase text-ledger-700 bg-ledger-100 rounded px-1.5 py-[1px]">{TAG[l.kind]}</span>
                      {l.kind === 'rules' && (off
                        ? <span className="text-[11.5px] text-audit">Undone. Back in Waiting for a person.</span>
                        : <button type="button" onClick={() => { setUndone([...undone, i]); onDecide?.() }} className="text-[11.5px] font-semibold text-muted hover:text-ink underline underline-offset-2">Undo</button>)}
                    </span>
                  </span>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Waiting for you */}
        <div className="p-4 min-w-0 flex flex-col">
          <p className="flex items-center gap-2 mb-2.5">
            <span className="rounded-md border border-rule bg-white text-[12px] font-semibold px-2 py-[3px]">Waiting for you</span>
            {finished && waiting > 0 && <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#8A5A1C] text-white text-[10.5px]">{waiting}</span>}
          </p>
          {finished ? (
            <div className="grid gap-2.5 animate-[fadeIn_.35s_ease-out]">
              {CARDS.map((c, i) => <ApprovalCard key={c.title} card={c} state={states[i]} size="md" onDecide={(s) => decide(i, s)} />)}
            </div>
          ) : (
            <p className="text-[13px] text-muted">Poof is still working through the night…</p>
          )}
          <p className="text-[12.5px] text-muted mt-4">Nothing reached the books on its own. What a rule did, you granted, and each one can be undone. Everything else waits on a card for your yes.</p>
          <a href="https://app.poofai.com/demo" className="mt-3 text-[14px] font-semibold text-ledger-600 hover:text-ledger-700">These are waiting for you in the live demo →</a>
        </div>
      </div>
    </div>
  )
}
