'use client'

import { useState } from 'react'
import PoofWordmark from '@/components/PoofWordmark'
import ApprovalCard, { DEMO_CARDS, type CardState } from '@/components/ApprovalCard'

/**
 * The hero phone: a preview of the Approvals inbox, shown in a phone browser (Poof on the web;
 * the iPhone app is a separate thing). The two cards are ones the live demo company,
 * Brazos Valley Comfort Co. (app.poofai.com/demo), opens on, so the preview matches the demo.
 * Approving here changes nothing anywhere; it only shows what would happen.
 */

const CARDS = [DEMO_CARDS.billMatch, DEMO_CARDS.estimate]

export default function PhoneApprovals() {
  const [states, setStates] = useState<CardState[]>(CARDS.map(() => 'open'))
  const decide = (i: number, s: CardState) => setStates(states.map((x, j) => (j === i ? s : x)))
  const waiting = states.filter((s) => s === 'open').length

  return (
    <div className="bg-white text-ink h-[440px] lg:h-[520px] flex flex-col text-left">
      {/* A phone browser's address bar: this is Poof on the web, not the iPhone app. */}
      <div className="px-3 pt-2 pb-1.5 bg-paper-2 border-b border-rule">
        <div className="mx-auto w-fit flex items-center gap-1 rounded-full bg-white border border-rule px-2.5 py-[2px] font-mono text-[10px] text-muted">
          <svg width="8" height="9" viewBox="0 0 8 9" aria-hidden="true"><rect x="0.5" y="4" width="7" height="4.5" rx="1" fill="currentColor" /><path d="M2 4V2.8a2 2 0 0 1 4 0V4" fill="none" stroke="currentColor" strokeWidth="1.1" /></svg>
          app.poofai.com
        </div>
      </div>
      <div className="flex items-center px-3.5 py-2.5 border-b border-rule">
        <PoofWordmark size={17} />
      </div>

      <div className="flex-1 overflow-y-auto px-3.5 py-3 bg-paper-2">
        <p className="font-semibold text-[14px] flex items-center gap-1.5">
          Approvals
          {waiting > 0 && <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#8A5A1C] text-white text-[10.5px]">{waiting}</span>}
        </p>
        <p className="text-[11.5px] text-muted leading-[1.4] mt-0.5 mb-3">Each card is something Poof wants to do, and why. Nothing happens until you say yes.</p>

        <div className="grid gap-2.5">
          {CARDS.map((c, i) => <ApprovalCard key={c.title} card={c} state={states[i]} onDecide={(st) => decide(i, st)} />)}
        </div>

        {waiting === 0 && (
          <div className="mt-3 text-center" role="status">
            <p className="font-semibold text-[13px]">You&apos;re caught up.</p>
            <a href="https://app.poofai.com/demo" className="block mt-0.5 text-[12px] text-ledger-600 font-semibold hover:text-ledger-700">Open the live demo →</a>
            <a href="#act1" className="block mt-0.5 text-[12px] text-muted hover:text-ink">Or try a whole night below ↓</a>
          </div>
        )}
      </div>
    </div>
  )
}
