import Link from 'next/link'

// Group 25 of the brand kit (2026-11-17): reports you build by talking.
// Laid out like the product's P&L by job: one column per job, plus Unassigned and Total.
// The example is illustrative; every column and row adds up (Net = income less expenses; Total = the sum of the columns).
const COLS = ['Ridge cabin', 'Creek cabin', 'Unassigned', 'Total']
const ROWS: { name: string; values: number[]; net?: boolean }[] = [
  { name: 'Rent income', values: [28400, 24900, 0, 53300] },
  { name: 'Cleaning', values: [4150, 3720, 0, 7870] },
  { name: 'Utilities', values: [2380, 2110, 0, 4490] },
  { name: 'Insurance', values: [0, 0, 2600, 2600] },
  { name: 'Net', values: [21870, 19070, -2600, 38340], net: true },
]

const money = (n: number) => (n === 0 ? '—' : n < 0 ? `(${Math.abs(n).toLocaleString('en-US')})` : n.toLocaleString('en-US'))

export default function ReportsSection() {
  return (
    <section className="max-w-[1020px] mx-auto px-4 sm:px-6 pt-16 pb-6 border-t border-rule" id="reports">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 items-start">
        <div>
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Reports · ask for the one you want</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1] tracking-[-0.035em] text-ink mb-4 text-balance">Ask for the report you want. Keep it.</h2>
          <p className="text-lg text-muted max-w-[56ch] leading-[1.45]">
            Type &ldquo;show me the P&amp;L by cabin this year&rdquo; and Poof builds it from your books. Change it the way you&apos;d ask a bookkeeper (&ldquo;take depreciation out and make it quarterly&rdquo;), tap Save, and it runs on today&apos;s books every time you open it. Put its number on Home, or have it emailed to you on the 1st.
          </p>
          <p className="text-[15px] text-muted max-w-[56ch] leading-[1.45] mt-3">
            The AI describes the report; Poof runs it on the same numbers as your P&amp;L, so the net matches. It never writes a number. Rentals and builders also get standard reports made for them: every property&apos;s month, and margin, backlog and billing by project.
          </p>
          <p className="mt-5"><Link href="/features#reports-you-build-by-talking" className="text-ledger-600 font-semibold hover:text-ledger-700">What reports can do →</Link></p>
        </div>

        <figure className="bg-white border border-rule p-4 sm:p-5" aria-label="Example: a report built by asking">
          <p className="text-[14px] text-ink bg-paper-2 border border-rule rounded-lg px-3 py-2 mb-4 ml-auto max-w-[85%] w-fit">Show me the P&amp;L by cabin this year</p>
          <div className="flex items-baseline justify-between gap-3 mb-2">
            <p className="font-semibold text-ink text-[15px]">P&amp;L by cabin · Jan 1 to today</p>
            <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">Example</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px] text-[13px] tabular">
              <thead>
                <tr className="border-b border-rule">
                  <th className="text-left font-normal py-1.5"><span className="sr-only">Account</span></th>
                  {COLS.map((c) => (
                    <th key={c} className="text-right font-mono text-[10.5px] tracking-[0.06em] uppercase text-muted font-normal py-1.5 pl-2">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.name} className={r.net ? 'border-t-[1.5px] border-ink' : 'border-b border-rule'}>
                    <td className={`py-1.5 pr-2 ${r.net ? 'font-semibold text-ink' : 'text-ink'}`}>{r.name}</td>
                    {r.values.map((v, i) => (
                      <td key={i} className={`py-1.5 pl-2 text-right font-mono ${r.net ? 'font-semibold text-ink' : i === COLS.length - 1 ? 'text-ink' : 'text-muted'}`}>{money(v)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="rounded-lg bg-ledger-500 text-white font-semibold text-[13px] px-3 py-1.5">Save</span>
            <span className="rounded-lg border border-rule text-ink text-[13px] px-3 py-1.5">Pin to Home</span>
            <span className="rounded-lg border border-rule text-ink text-[13px] px-3 py-1.5">Email it on the 1st</span>
          </div>
        </figure>
      </div>
    </section>
  )
}
