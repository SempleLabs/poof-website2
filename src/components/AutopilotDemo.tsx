'use client'

import { useMemo, useState } from 'react'

/**
 * A night of the categorization sweep with Autopilot on, replayed against the
 * real gates: not a new account, under the ceiling, merchant history unanimous
 * and long enough, confidence over the bar. Move the limits and rows move
 * between "posted" and "held". Correct a posted row and the rule pauses.
 */

type Row = { id: string; date: string; merchant: string; amount: number; category: string; conf: number; hist: number; unanimous: boolean; newAccount?: boolean; learned?: boolean }

const ROWS: Row[] = [
  { id: 'r1', date: '09/16', merchant: 'FERGUSON ENT #1204', amount: 612.4, category: 'Job Materials', conf: 0.97, hist: 5, unanimous: true },
  { id: 'r2', date: '09/16', merchant: 'FERGUSON ENT #1204', amount: 2310.0, category: 'Job Materials', conf: 0.96, hist: 5, unanimous: true },
  { id: 'r3', date: '09/16', merchant: 'SHELL OIL 57442119', amount: 71.4, category: 'Fuel', conf: 0.94, hist: 22, unanimous: true },
  { id: 'r4', date: '09/16', merchant: 'HOME DEPOT #0472', amount: 86.12, category: 'Job Materials', conf: 0.88, hist: 0, unanimous: true },
  { id: 'r5', date: '09/16', merchant: 'AMAZON MKTPL', amount: 148.3, category: 'Shop Supplies', conf: 0.91, hist: 7, unanimous: false },
  { id: 'r6', date: '09/16', merchant: 'JOHNSTONE SUPPLY', amount: 412.0, category: 'Job Materials', conf: 0.93, hist: 2, unanimous: true },
  { id: 'r7', date: '09/16', merchant: 'QT 1187', amount: 54.2, category: 'Fuel', conf: 0.9, hist: 4, unanimous: true, learned: true },
  { id: 'r8', date: '09/16', merchant: 'CITY OF MESA PERMITS', amount: 430.0, category: 'Permits & Inspections', conf: 0.95, hist: 3, unanimous: true, newAccount: true },
]

function decide(r: Row, on: boolean, ceiling: number, minHist: number, minConf: number): { post: boolean; reason: string } {
  if (!on) return { post: false, reason: 'auto-post disabled' }
  if (r.newAccount) return { post: false, reason: 'AI suggested a new account — the chart may not cover this yet' }
  if (r.amount > ceiling) return { post: false, reason: `$${r.amount.toFixed(2)} is over the $${ceiling.toFixed(2)} auto-post ceiling` }
  if (r.learned) return { post: true, reason: 'replays a prior human correction for this merchant' }
  if (r.conf < minConf) return { post: false, reason: `confidence ${Math.round(r.conf * 100)}% is below the ${Math.round(minConf * 100)}% bar` }
  if (!r.unanimous) return { post: false, reason: `this merchant has been categorized more than one way before (${r.hist} prior transactions)` }
  if (r.hist === 0) return { post: false, reason: 'no prior categorization history for this merchant' }
  if (r.hist < minHist) return { post: false, reason: `only ${r.hist} prior transaction${r.hist === 1 ? '' : 's'} for this merchant, ${minHist} required` }
  return { post: true, reason: `${r.hist} prior transactions, all ${r.category} · confidence ${Math.round(r.conf * 100)}%` }
}

export default function AutopilotDemo() {
  const [on, setOn] = useState(true)
  const [ceiling, setCeiling] = useState(2000)
  const [minHist, setMinHist] = useState(3)
  const [minConf, setMinConf] = useState(0.9)
  const [corrected, setCorrected] = useState<string | null>(null)

  const rows = useMemo(() => ROWS.map((r) => ({ r, d: decide(r, on, ceiling, minHist, minConf) })), [on, ceiling, minHist, minConf])
  const posted = rows.filter((x) => x.d.post).length
  const held = rows.length - posted
  const paused = !!corrected

  return (
    <div className="bg-white border border-rule">
      {/* controls */}
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_1fr_1fr] gap-4 sm:gap-6 items-end px-5 py-4 border-b border-rule">
        <label className="flex items-center gap-2.5 font-semibold text-sm">
          <input type="checkbox" checked={on} onChange={(e) => { setOn(e.target.checked); setCorrected(null) }} className="w-9 h-5 appearance-none rounded-full bg-muted checked:bg-ledger-500 relative transition-colors before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-4 before:h-4 before:rounded-full before:bg-white checked:before:translate-x-4 before:transition-transform" />
          Autopilot
        </label>
        <label className="text-sm">
          <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted block mb-1">Ceiling · <b className="text-ink">${ceiling.toLocaleString()}</b></span>
          <input type="range" min={100} max={5000} step={100} value={ceiling} onChange={(e) => setCeiling(Number(e.target.value))} className="w-full accent-ledger-500" aria-label="Auto-post dollar ceiling" />
        </label>
        <label className="text-sm">
          <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted block mb-1">Min history · <b className="text-ink">{minHist}</b></span>
          <input type="range" min={1} max={10} step={1} value={minHist} onChange={(e) => setMinHist(Number(e.target.value))} className="w-full accent-ledger-500" aria-label="Minimum prior transactions" />
        </label>
        <label className="text-sm">
          <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted block mb-1">Confidence bar · <b className="text-ink">{Math.round(minConf * 100)}%</b></span>
          <input type="range" min={0.5} max={0.99} step={0.01} value={minConf} onChange={(e) => setMinConf(Number(e.target.value))} className="w-full accent-ledger-500" aria-label="Minimum confidence" />
        </label>
      </div>

      {/* the sweep */}
      <div className="px-5 py-3 border-b border-rule flex flex-wrap items-baseline justify-between gap-3">
        <span className="font-mono text-[12px] tracking-[0.06em] uppercase text-muted">Nightly sweep · 8 rows</span>
        <span className="font-mono tabular text-[13px]"><b className="text-ledger-600">{paused ? 0 : posted} posted</b> · <b className="text-ink">{paused ? rows.length : held} held for you</b>{paused && <span className="text-audit"> · rule paused</span>}</span>
      </div>
      <ul>
        {rows.map(({ r, d }) => {
          const post = d.post && !paused
          return (
            <li key={r.id} className="grid grid-cols-[52px_1fr_auto] gap-3 px-5 py-3 border-b border-rule text-sm items-start">
              <span className="font-mono text-xs text-muted pt-0.5">{r.date}</span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-semibold text-ink">{r.merchant}</span>
                  <span className="text-muted">→ {r.category}</span>
                </div>
                <div className={`mt-1 inline-block font-mono text-[12px] px-2 py-0.5 ${post ? 'bg-ledger-200 text-ledger-600' : 'bg-paper-2 text-muted'}`}>
                  {paused ? 'held: the rule that covered this is paused' : post ? `posted: ${d.reason}` : `held: ${d.reason}`}
                </div>
                {post && r.id === 'r1' && !corrected && (
                  <button type="button" onClick={() => setCorrected(r.id)} className="block mt-2 text-[13px] font-semibold text-audit hover:underline">Correct this one: it was Equipment, not Job Materials</button>
                )}
              </div>
              <span className="font-mono tabular whitespace-nowrap">${r.amount.toFixed(2)}</span>
            </li>
          )
        })}
      </ul>
      {paused && (
        <div className="px-5 py-4 bg-audit-100 text-[14px] text-ink">
          <b className="font-semibold text-audit">Poof paused a rule.</b> The correction that stopped it: FERGUSON ENT #1204 $612.40, Job Materials → Equipment, by you, just now. Nothing it covers will post until you resume or revoke it. What it already posted stands, with the rule's name on each entry.
          <div className="mt-3 flex gap-2">
            <button type="button" onClick={() => setCorrected(null)} className="rounded-lg bg-ledger-500 text-white font-semibold text-sm px-3 py-[7px] hover:bg-ledger-600">Resume</button>
            <button type="button" onClick={() => { setOn(false); setCorrected(null) }} className="rounded-lg border-[1.5px] border-audit text-audit font-semibold text-sm px-3 py-[7px] hover:bg-white">Revoke</button>
          </div>
        </div>
      )}
      <p className="px-5 py-3 text-[12.5px] text-muted border-t border-rule">The gates and their wording are the product's own. The rows are a demo. Defaults in the app: ceiling unset until you choose one, three prior transactions, a 90% bar.</p>
    </div>
  )
}
