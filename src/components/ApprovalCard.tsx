'use client'

/**
 * One Approvals card, as the app draws it: white, green left edge, title + amount, where it came
 * from, one plain sentence, then Yes / Reject. Used by the hero phone and the overnight section so
 * both show the same component. Cards here are ones the live demo (app.poofai.com/demo) also has
 * and lets a visitor approve: matches and estimate → invoice, never anything that sends email.
 */

export type CardState = 'open' | 'approved' | 'rejected'
export type Card = { title: string; amount: string; from: string; body: string; yesLabel: string; yes: string }

export const DEMO_CARDS = {
  billMatch: {
    title: 'Match a payment to a bill',
    amount: '$1,786.75',
    from: 'Bank feed · Checking 6614',
    body: 'Central Texas Parts House cleared $1,786.75. That’s BILL-2026-0008. Match it?',
    yesLabel: 'Match it',
    yes: 'Matched. The bill is marked paid.',
  },
  paymentMatch: {
    title: 'Match a customer payment',
    amount: '$984.00',
    from: 'Bank feed · Checking 6614',
    body: 'Luis & Ana Ortega paid INV-046. Match it?',
    yesLabel: 'Match it',
    yes: 'Matched. INV-046 is marked paid.',
  },
  estimate: {
    title: 'Turn an estimate into an invoice',
    amount: '$9,400.00',
    from: 'Estimate accepted',
    body: 'Danielle Parker accepted estimate EST-001. Convert it to an invoice?',
    yesLabel: 'Convert',
    yes: 'Saved as a draft invoice. Nothing was sent to the customer.',
  },
} satisfies Record<string, Card>

const btn = 'rounded-md bg-ledger-500 text-white font-semibold text-[12px] px-2.5 py-[5px] hover:bg-ledger-600 transition-colors'
const btnRed = 'rounded-md border border-audit text-audit font-semibold text-[12px] px-2.5 py-[4px] hover:bg-audit-100 transition-colors'

export default function ApprovalCard({ card, state, onDecide, size = 'sm' }: { card: Card; state: CardState; onDecide: (s: CardState) => void; size?: 'sm' | 'md' }) {
  const md = size === 'md'
  return (
    <div className={`bg-white border border-rule border-l-[3px] border-l-ledger-600 ${md ? 'px-4 py-3' : 'px-3 py-2.5'}`}>
      <div className="flex justify-between gap-2 items-baseline">
        <p className={`font-semibold leading-[1.25] ${md ? 'text-[14.5px]' : 'text-[13px]'}`}>{card.title}</p>
        <span className={`font-mono tabular whitespace-nowrap ${md ? 'text-[13px]' : 'text-[11px]'}`}>{card.amount}</span>
      </div>
      <p className={`font-mono text-muted mt-0.5 ${md ? 'text-[11px]' : 'text-[10px]'}`}>{card.from}</p>
      <p className={`leading-[1.4] mt-1.5 ${md ? 'text-[13.5px]' : 'text-[11.5px]'}`}>{card.body}</p>
      {state === 'open' ? (
        <div className="flex gap-1.5 mt-2">
          <button type="button" className={btn} onClick={() => onDecide('approved')}>{card.yesLabel}</button>
          <button type="button" className={btnRed} onClick={() => onDecide('rejected')}>Reject</button>
        </div>
      ) : (
        <p className={`mt-2 pt-2 border-t border-dashed border-rule leading-[1.4] ${md ? 'text-[13px]' : 'text-[12px]'} ${state === 'approved' ? 'text-ledger-600' : 'text-audit'}`} role="status">
          {state === 'approved' ? card.yes : 'Nothing changed.'}
        </p>
      )}
    </div>
  )
}
