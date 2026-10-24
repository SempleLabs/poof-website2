'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * The homepage hero: last night's run, replayed. Each finished line breaks into dots that fly
 * to the tally (the mark's dispersing disc, used as motion); a line that needs a person sends
 * one green dot to "waiting for you", like the mark's one surviving particle. The cards at the
 * end are live. Every line is a shipped feature; the figures are a sample shop.
 */

type Kind = 'bank' | 'rules' | 'job' | 'payroll' | 'tax' | 'need'
const LINES: { t: string; text: string; kind: Kind; adds?: number }[] = [
  { t: '02:00', text: 'Pulled 47 rows from the operating account and two cards', kind: 'bank' },
  { t: '02:01', text: '41 sorted by rules you granted, each one with Undo', kind: 'rules', adds: 41 },
  { t: '02:03', text: 'Ferguson bill $1,214.60 matched to job #2026-081', kind: 'job', adds: 1 },
  { t: '02:04', text: 'Truck 3 fuel split across 3 jobs by the hours techs logged', kind: 'job', adds: 1 },
  { t: '02:05', text: 'Payroll provider’s pay run tied to Friday’s withdrawal', kind: 'payroll', adds: 1 },
  { t: '02:06', text: 'Sales tax for 3 cities accrued on 14 invoices', kind: 'tax', adds: 14 },
  { t: '02:07', text: 'Henderson invoice drafted from the tech’s field report', kind: 'need' },
  { t: '02:08', text: 'Garcia accepted the quote online: $8,450', kind: 'need' },
  { t: '02:10', text: 'Shell $64.18 twice in two days: a double charge?', kind: 'need' },
  { t: '02:12', text: 'Rivera Electric crossed $2,000 this year, no W-9 on file', kind: 'need' },
  { t: '02:13', text: 'Tax reserve $1,650 short of the Jan 15 estimate', kind: 'need' },
  { t: '02:15', text: 'Home Depot #4471 $86.12: no history, so it asks', kind: 'need' },
]
const LABEL: Record<Kind, string> = { bank: 'bank', rules: 'rules', job: 'jobs', payroll: 'payroll', tax: 'sales tax', need: 'for you' }
const HANDLED = LINES.reduce((n, l) => n + (l.adds || 0), 0)
const WAITING = LINES.filter((l) => l.kind === 'need').length

const CARDS: { title: string; amount: string; evidence: string; yes: string; no: string }[] = [
  { title: 'Send the Henderson invoice', amount: '$2,860.00', evidence: 'Drafted from the tech’s field report: 6 hours and two parts, in the tech’s own words. Read it before it goes.', yes: 'Send it', no: 'Not yet' },
  { title: 'Request a W-9 from Rivera Electric', amount: '$2,450.00', evidence: 'Paid $2,450 this year, over the $2,000 line for 2026 payments. Poof emails them a link to fill it in.', yes: 'Send the link', no: 'Not yet' },
  { title: 'Home Depot #4471 → Job Materials', amount: '$86.12', evidence: 'No history for this merchant. That is why it is asking.', yes: 'Approve', no: 'Change it' },
]

const STEP = 480
const time = () => new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })

export default function OvernightRun({ onDecide, onFinish }: { onDecide?: () => void; onFinish?: () => void }) {
  const [shown, setShown] = useState(0)
  const [settled, setSettled] = useState<number[]>([])
  const [handled, setHandled] = useState(0)
  const [waiting, setWaiting] = useState(0)
  const [finished, setFinished] = useState(false)
  const [decided, setDecided] = useState<Record<number, string>>({})
  const box = useRef<HTMLDivElement>(null)
  const handledTile = useRef<HTMLDivElement>(null)
  const waitingTile = useRef<HTMLDivElement>(null)
  const lineRefs = useRef<(HTMLLIElement | null)[]>([])
  const timers = useRef<number[]>([])
  const reduce = useRef(false)
  const finishRef = useRef(onFinish)
  finishRef.current = onFinish

  const fly = useCallback((i: number, green: boolean) => {
    const root = box.current, from = lineRefs.current[i], to = (green ? waitingTile : handledTile).current
    if (reduce.current || !root || !from || !to || typeof root.animate !== 'function') return
    const r = root.getBoundingClientRect(), a = from.getBoundingClientRect(), b = to.getBoundingClientRect()
    const n = green ? 1 : 5
    for (let k = 0; k < n; k++) {
      const d = document.createElement('span')
      d.className = `absolute w-1.5 h-1.5 rounded-full pointer-events-none z-10 ${green ? 'bg-ledger-400' : 'bg-paper'}`
      const x0 = a.left - r.left + 56 + Math.random() * Math.max(40, Math.min(220, a.width - 90))
      const y0 = a.top - r.top + a.height / 2
      const x1 = b.left - r.left + 18 + Math.random() * 40, y1 = b.top - r.top + 22
      d.style.left = `${x0}px`; d.style.top = `${y0}px`
      root.appendChild(d)
      d.animate(
        [
          { transform: 'translate(0,0)', opacity: 1 },
          { transform: `translate(${(x1 - x0) * 0.5}px,${(y1 - y0) * 0.5 - 28}px)`, opacity: 1, offset: 0.5 },
          { transform: `translate(${x1 - x0}px,${y1 - y0}px)`, opacity: 0 },
        ],
        { duration: 680 + k * 90, easing: 'cubic-bezier(.5,0,.3,1)' },
      ).onfinish = () => d.remove()
    }
  }, [])

  const play = useCallback(() => {
    timers.current.forEach(clearTimeout); timers.current = []
    setShown(0); setSettled([]); setHandled(0); setWaiting(0); setFinished(false); setDecided({})
    if (reduce.current) {
      setShown(LINES.length); setSettled(LINES.map((_, i) => i)); setHandled(HANDLED); setWaiting(WAITING); setFinished(true)
      finishRef.current?.()
      return
    }
    const later = (fn: () => void, ms: number) => { timers.current.push(window.setTimeout(fn, ms)) }
    LINES.forEach((l, i) => {
      later(() => setShown(i + 1), 300 + i * STEP)
      later(() => {
        setSettled((s) => [...s, i])
        if (l.kind === 'bank') return
        fly(i, l.kind === 'need')
        later(() => (l.kind === 'need' ? setWaiting((w) => w + 1) : setHandled((h) => h + (l.adds || 0))), 520)
      }, 300 + i * STEP + 340)
    })
    later(() => { setFinished(true); finishRef.current?.() }, 300 + LINES.length * STEP + 900)
  }, [fly])

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    play()
    const t = timers.current
    return () => t.forEach(clearTimeout)
  }, [play])

  const decide = (i: number, word: string) => {
    if (decided[i]) return
    setDecided((d) => ({ ...d, [i]: `${word} by you, ${time()}` }))
    setWaiting((w) => Math.max(0, w - 1))
    onDecide?.()
  }

  return (
    <div ref={box} className="relative bg-ink text-paper rounded-[4px] overflow-hidden mt-6">
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-midnight-700 font-mono text-[11px] tracking-[0.06em] uppercase text-midnight-400">
        <span className="flex items-center gap-2 text-ledger-400">
          <span className={`w-[7px] h-[7px] rounded-full bg-ledger-400 ${finished ? '' : 'animate-pulse'}`} aria-hidden="true" />
          Overnight run · Tuesday
        </span>
        <span className="flex items-center gap-3">
          <span className="hidden sm:inline">Sample shop</span>
          <button type="button" onClick={play} className="border border-midnight-700 rounded px-2 py-1 hover:text-paper hover:border-midnight-600 transition-colors">Replay</button>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
        <ol className="px-4 py-3.5 font-mono text-[12.5px] leading-[1.55] md:border-r border-b md:border-b-0 border-midnight-700 min-h-[300px] min-w-0" aria-label="What Poof did overnight">
          {LINES.slice(0, shown).map((l, i) => {
            const done = settled.includes(i)
            return (
              <li key={l.t + l.text} ref={(el) => { lineRefs.current[i] = el }} className="grid grid-cols-[44px_1fr_auto] gap-2.5 py-[3px] items-baseline">
                <span className="text-midnight-400 tabular">{l.t}</span>
                <span className={`min-w-0 [overflow-wrap:anywhere] transition-opacity duration-500 ${done && l.kind !== 'need' && l.kind !== 'bank' ? 'opacity-40' : ''}`}>{l.text}</span>
                <span className={`text-[10.5px] whitespace-nowrap ${l.kind === 'need' ? 'text-ledger-400' : 'text-midnight-400'}`}>{LABEL[l.kind]}</span>
              </li>
            )
          })}
        </ol>

        <div className="p-4 flex flex-col gap-3 min-w-0">
          <div className="grid grid-cols-2 gap-2.5">
            <div ref={handledTile} className="border border-midnight-700 px-3 py-2.5">
              <div className="font-display text-[38px] leading-none tracking-[-0.03em] tabular">{handled}</div>
              <div className="text-[12.5px] text-midnight-400 mt-1">handled by rules and checks</div>
            </div>
            <div ref={waitingTile} className="border border-midnight-700 px-3 py-2.5">
              <div className="font-display text-[38px] leading-none tracking-[-0.03em] tabular text-ledger-400">{waiting}</div>
              <div className="text-[12.5px] text-midnight-400 mt-1">waiting for you</div>
            </div>
          </div>

          {finished && (
            <div className="grid gap-2">
              {CARDS.map((c, i) => (
                <div key={c.title} className={`bg-midnight-800 border-l-[3px] px-3 py-2.5 text-[13.5px] transition-opacity ${decided[i] ? 'border-l-midnight-700 opacity-60' : 'border-l-ledger-400'}`}>
                  <div className="flex justify-between gap-2.5 font-semibold"><span>{c.title}</span><span className="font-mono font-medium tabular whitespace-nowrap">{c.amount}</span></div>
                  <p className="text-midnight-400 text-[12.5px] mt-0.5">{c.evidence}</p>
                  {decided[i] ? (
                    <p className="font-mono text-[11px] text-ledger-400 mt-1.5">{decided[i]}</p>
                  ) : (
                    <div className="flex gap-2 mt-2">
                      <button type="button" onClick={() => decide(i, 'Approved')} className="rounded-[5px] bg-ledger-400 text-ink font-semibold text-[12.5px] px-2.5 py-[5px] hover:bg-paper transition-colors">{c.yes}</button>
                      <button type="button" onClick={() => decide(i, 'Held')} className="rounded-[5px] border-[1.5px] border-ledger-400 text-paper font-semibold text-[12.5px] px-2.5 py-[4px] hover:bg-midnight-700 transition-colors">{c.no}</button>
                    </div>
                  )}
                </div>
              ))}
              <a href="#act2" className="text-[12.5px] text-ledger-400 font-semibold hover:text-paper">{WAITING - CARDS.length} more waiting in Approvals ↓</a>
            </div>
          )}
          <p className="text-[12.5px] text-midnight-400 mt-auto">Nothing reached the books on its own. What a rule did, you granted; everything else waits on a card with what it found.</p>
        </div>
      </div>
    </div>
  )
}
