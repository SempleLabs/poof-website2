import Link from 'next/link'

/**
 * The October 2026 groups, one row each: outcome first, with the limit kept in the
 * body as what Poof does (the site never lists what it withholds). Each row links to
 * its group on /features, whose section ids are the group names slugged.
 */
const rows: { label: string; href: string; headline: string; body: string }[] = [
  {
    label: 'Rules',
    href: '/features#approvals-and-ai-autonomy',
    headline: 'Approve it twice, and Poof offers to do it for you.',
    body: 'Approve the same change on a few cards and Poof offers a rule. You say yes, you set its ceiling, and a page shows everything it did on its own, with Undo on each change.',
  },
  {
    label: 'Payroll',
    href: '/features#payroll',
    headline: 'Your payroll provider pays them. Poof makes the books and the 941 agree.',
    body: 'Forward your provider’s payroll report and it becomes one entry, matched to the bank withdrawals, with wages accrued into the month they were earned and the 941s, W-2s and state returns tied to the pay runs. You turn it on when you’re ready.',
  },
  {
    label: 'Sales tax',
    href: '/features#sales-tax',
    headline: 'Sales tax by city, exemptions on file, and a return that ties.',
    body: 'Rates by city on every invoice, exempt customers with their certificates, a report by jurisdiction, and the return you file recorded and matched to its payment, so the close ties it out.',
  },
  {
    label: 'Assets & loans',
    href: '/features#fixed-assets-and-loans',
    headline: 'The van, its loan and its depreciation, on the books without a spreadsheet.',
    body: 'An asset register with the month’s depreciation approved as one card, loan payments split into principal and interest, and a trade-in (old van out, loan paid off, new van and loan in) as one entry you see before it posts.',
  },
  {
    label: '1099s',
    href: '/features#1099s-and-vendors',
    headline: 'January’s 1099s, prepared from the year’s payments. W-9s collected by link.',
    body: 'Every contractor’s year against the $2,000 threshold, W-9s filled in online, each contractor’s copy and a summary for your CPA, and a checklist for whoever uploads them to the IRS.',
  },
  {
    label: 'Truck stock',
    href: '/features#inventory-truck-stock',
    headline: 'Count the van from your phone. Poof knows what went on jobs and what went missing.',
    body: 'Each truck is a stock location. Post a count and the parts used on jobs go to those jobs, the rest shows as shrinkage, and the close knows when each van was last counted.',
  },
]

export default function BackOfficeSection() {
  return (
    <section id="back-office" className="max-w-[820px] mx-auto px-4 sm:px-6 pt-16 pb-6 border-t border-rule">
      <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">The rest of the back office</p>
      <h2 className="font-display text-3xl sm:text-4xl leading-[1] tracking-[-0.035em] text-ink mb-4 text-balance">
        Payroll, sales tax, 1099s, the trucks and what&apos;s on them. In the same books.
      </h2>
      <p className="text-lg text-muted max-w-[62ch] leading-[1.45]">
        Each one lands as a card with its evidence, like everything else Poof does, and waits for you.
      </p>
      <div className="mt-8 border-t border-rule">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-x-6 gap-y-1 py-5 border-b border-rule">
            <p className="font-mono text-[11.5px] tracking-[0.08em] uppercase text-ledger-600 pt-1">{row.label}</p>
            <div>
              <h3 className="font-semibold text-ink text-[17px] leading-snug">{row.headline}</h3>
              <p className="text-[15px] text-muted leading-[1.5] mt-1.5 max-w-[60ch]">{row.body}</p>
              <Link href={row.href} className="inline-block text-[14px] text-ledger-600 font-semibold hover:text-ledger-700 mt-2">
                See the features
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
