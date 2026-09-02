import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'

type LedgerRow = { when: string; amount: string; account: string; earned: boolean }

const ledgers: { title: string; rows: LedgerRow[]; body: string }[] = [
  {
    title: 'The deposit on an install',
    rows: [
      { when: 'Deposit clears', amount: '$4,000', account: 'Customer deposits · liability', earned: false },
      { when: 'Install completed', amount: '$4,000', account: 'Install revenue · on that job’s P&L', earned: true },
    ],
    body: 'A down payment is held as a liability from the day it lands, not booked as income. When the job is done it is released to that job’s revenue — so the install’s margin is right, and the month you took the deposit was never inflated by money you had not earned. The release previews before it posts, refuses to release money that was never categorized as a deposit, and warns you if the job was also invoiced.',
  },
  {
    title: 'The prepaid maintenance plan',
    rows: [
      { when: 'Plan sold', amount: '$360', account: 'Deferred plan revenue · liability', earned: false },
      { when: 'Spring tune-up completed', amount: '$180', account: 'Plan revenue · earned', earned: true },
      { when: 'Fall tune-up completed', amount: '$180', account: 'Plan revenue · earned', earned: true },
    ],
    body: 'A prepaid plan is deferred when it is sold. Each maintenance visit earns its share to the penny — automatically, the moment the tech taps Complete. A repair call on a plan customer does not count against the plan, and if a customer somehow has two open plans, your office picks which one the visit belongs to. The software does not guess.',
  },
]

export default function UnearnedRevenueSection() {
  return (
    <section id="unearned-revenue" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Part of Poof Managed for Trades
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              A down payment isn&apos;t revenue until the job is done.{' '}
              <span className="text-gradient-gold">A plan isn&apos;t revenue until the visit happens.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Your bank feed says the money arrived. A controller says it isn&apos;t yours yet. Poof books it the
              way a controller would, and moves it to earned revenue the day the work is actually done.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {ledgers.map((ledger, i) => (
            <AnimateOnScroll key={ledger.title} animation="fade-up" delay={i * 100}>
              <GlowCard className="bg-white border border-slate-200 rounded-xl p-6 h-full flex flex-col">
                <h3 className="font-semibold text-lg text-slate-900 mb-4">{ledger.title}</h3>
                <div className="rounded-lg border border-slate-200 overflow-hidden mb-5 text-sm">
                  {ledger.rows.map((row) => (
                    <div
                      key={row.when}
                      className={`flex items-start justify-between gap-3 px-4 py-2.5 border-b border-slate-100 last:border-b-0 ${
                        row.earned ? 'bg-emerald-50/60' : 'bg-slate-50'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="font-medium text-slate-900">{row.when}</div>
                        <div className={`text-xs ${row.earned ? 'text-emerald-700' : 'text-slate-500'}`}>{row.account}</div>
                      </div>
                      <div className={`font-semibold whitespace-nowrap ${row.earned ? 'text-emerald-700' : 'text-slate-500'}`}>
                        {row.amount}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{ledger.body}</p>
              </GlowCard>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up">
          <div className="rounded-xl bg-slate-900 p-6 sm:p-8 text-white">
            <h3 className="font-semibold text-lg mb-2">Cancellation is a decision, not a write-off</h3>
            <p className="text-slate-300 leading-relaxed">
              When a plan customer leaves, your office records whether the unearned balance was refunded or
              forfeited, and the books show which. Poof deliberately does not decide that for you. Nobody should
              find out in March that prepaid money quietly disappeared in November.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in">
          <p className="text-xs text-slate-500 mt-6 text-center max-w-3xl mx-auto leading-relaxed">
            Illustrative amounts. Built for prepaid plans &mdash; the annual agreement a customer pays for up front.
            A visit that was both released against a plan and invoiced on its own is flagged at month-end close, so
            it is caught before the books are signed.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
