'use client'

import { useState } from 'react'
import PoofWordmark from '@/components/PoofWordmark'

/**
 * The hero phone: a working copy of the Approvals inbox (the real screenshot,
 * public/images/approvals-phone.jpg, is linked under it). Same two cards, plain words,
 * demo figures. Approving here changes nothing anywhere; it only shows what would happen.
 */

type State = 'open' | 'approved' | 'rejected'

const ROWS = [
  ['FERGUSON ENT', 'Job Materials', '$612.40'],
  ['SHELL OIL 5741', 'Truck Fuel', '$84.17'],
] as const

const btn = 'rounded-md bg-ledger-500 text-white font-semibold text-[12px] px-2.5 py-[5px] hover:bg-ledger-600 transition-colors'
const btnRed = 'rounded-md border border-audit text-audit font-semibold text-[12px] px-2.5 py-[4px] hover:bg-audit-100 transition-colors'

function Done({ state, yes, no }: { state: State; yes: string; no: string }) {
  return (
    <p className={`mt-2 pt-2 border-t border-dashed border-rule text-[12px] leading-[1.4] ${state === 'approved' ? 'text-ledger-600' : 'text-audit'}`} role="status">
      {state === 'approved' ? yes : no}
    </p>
  )
}

export default function PhoneApprovals() {
  const [sort, setSort] = useState<State>('open')
  const [inv, setInv] = useState<State>('open')
  const [showRows, setShowRows] = useState(false)
  const [showInv, setShowInv] = useState(false)
  const waiting = (sort === 'open' ? 1 : 0) + (inv === 'open' ? 1 : 0)

  return (
    <div className="bg-white text-ink h-[440px] lg:h-[520px] flex flex-col text-left">
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-rule">
        <PoofWordmark size={17} />
        <span className="font-mono text-[9.5px] tracking-[0.08em] uppercase text-muted">Demo</span>
      </div>

      <div className="flex-1 overflow-y-auto px-3.5 py-3 bg-paper-2">
        <p className="font-semibold text-[14px] flex items-center gap-1.5">
          Approvals
          {waiting > 0 && <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#8A5A1C] text-white text-[10.5px]">{waiting}</span>}
        </p>
        <p className="text-[11.5px] text-muted leading-[1.4] mt-0.5 mb-3">Each card is something Poof wants to do, and why. Nothing happens until you say yes.</p>

        {/* card 1: from last night's run */}
        <div className="bg-white border border-rule border-l-[3px] border-l-ledger-600 px-3 py-2.5 mb-2.5">
          <p className="font-semibold text-[13px]">Sort 2 transactions</p>
          <p className="font-mono text-[10px] text-muted mt-0.5">From last night&apos;s run</p>
          <button type="button" onClick={() => setShowRows(!showRows)} className="text-[11.5px] text-muted mt-1.5 hover:text-ink" aria-expanded={showRows}>
            What Poof would change {showRows ? '▴' : '▾'}
          </button>
          {showRows && (
            <ul className="mt-1.5 text-[11px]">
              {ROWS.map(([who, cat, amt]) => (
                <li key={who} className="grid grid-cols-[1fr_auto] gap-x-2 py-1 border-t border-rule">
                  <span>{who} → <b className="font-semibold">{cat}</b></span>
                  <span className="font-mono tabular">{amt}</span>
                  <span className="col-span-2 text-muted text-[10.5px]">Same as every past charge from them</span>
                </li>
              ))}
            </ul>
          )}
          {sort === 'open' ? (
            <div className="flex gap-1.5 mt-2">
              <button type="button" className={btn} onClick={() => setSort('approved')}>Approve both</button>
              <button type="button" className={btnRed} onClick={() => setSort('rejected')}>Reject</button>
            </div>
          ) : (
            <Done state={sort} yes="Posted to the books, exactly as shown." no="Nothing posted. Your reason is recorded." />
          )}
        </div>

        {/* card 2: drafted by Ask Poof */}
        <div className="bg-white border border-rule border-l-[3px] border-l-ledger-600 px-3 py-2.5">
          <p className="font-semibold text-[13px]">Invoice Henderson, $2,860</p>
          <p className="font-mono text-[10px] text-muted mt-0.5">You asked Ask Poof for it</p>
          <button type="button" onClick={() => setShowInv(!showInv)} className="text-[11.5px] text-muted mt-1.5 hover:text-ink" aria-expanded={showInv}>
            Details {showInv ? '▴' : '▾'}
          </button>
          {showInv && (
            <ul className="mt-1.5 text-[11px]">
              {[['Labor, 6 hours', '$1,140.00'], ['Condenser fan motor', '$1,420.00'], ['Service call', '$300.00']].map(([l, a]) => (
                <li key={l} className="flex justify-between gap-2 py-1 border-t border-rule"><span>{l}</span><span className="font-mono tabular">{a}</span></li>
              ))}
            </ul>
          )}
          {inv === 'open' ? (
            <div className="flex gap-1.5 mt-2">
              <button type="button" className={btn} onClick={() => setInv('approved')}>Approve</button>
              <button type="button" className={btnRed} onClick={() => setInv('rejected')}>Reject</button>
            </div>
          ) : (
            <Done state={inv} yes="Saved as a draft invoice. Nothing was sent to the customer." no="No invoice created." />
          )}
        </div>

        {waiting === 0 && (
          <div className="mt-3 text-center" role="status">
            <p className="font-semibold text-[13px]">You&apos;re caught up.</p>
            <a href="#act1" className="text-[12px] text-ledger-600 font-semibold hover:text-ledger-700">Now try a whole night ↓</a>
          </div>
        )}
      </div>
    </div>
  )
}
