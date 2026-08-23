import Link from 'next/link'
import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'
import BookCallButton from './BookCallButton'

const pains = [
  {
    title: 'Your May P&L lands June 20th, not June 2nd',
    body: 'You\'re pricing this week\'s bids on numbers that are three weeks stale. Bookkeeper turnaround is the bottleneck.',
  },
  {
    title: 'You can\'t tell which jobs actually made money',
    body: 'The big commercial install might have been a loss. By the time the P&L lands, the next quote is already out the door.',
  },
  {
    title: 'Field-service data gets rekeyed into QBO by hand',
    body: 'A part-time bookkeeper at $800–$1,500/mo manually moves invoices and payments between systems. Slow, error-prone, expensive.',
  },
]

const trades = [
  { href: '/hvac', label: 'HVAC', blurb: 'Per-job profit on installs and service calls' },
  { href: '/plumbing', label: 'Plumbing', blurb: 'Materials and labor costed to every job' },
  { href: '/electrical', label: 'Electrical', blurb: 'Clean books across service and contract work' },
]

export default function HomeTradesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Replaces your part-time bookkeeper — and answers the question they never could
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            You didn&apos;t build a shop from a service truck to chase a bookkeeper for last month&apos;s P&amp;L.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {pains.map((p, i) => (
            <AnimateOnScroll key={p.title} animation="fade-up" delay={i * 100}>
              <GlowCard className="bg-white border border-slate-200 rounded-xl p-6 card-hover-lift h-full">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold mb-4">
                  !
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
              </GlowCard>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up">
          <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-center mb-14">
            <p className="text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">Poof Managed for Trades</p>
            <p className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
              Per-job profit on every monthly close. From $1,200/mo.
            </p>
            <p className="text-slate-300 mb-4 max-w-2xl mx-auto">
              AI does the work. A controller you can text reviews every close. Books closed by the 15th business day, every completed job costed within 5 business days, and an unbilled-work report every Friday.
            </p>
            <p className="text-slate-400 text-sm mb-6 max-w-2xl mx-auto">
              Most shops start with the <span className="text-violet-300 font-semibold">$750 Job Margin &amp; Recovery Audit</span> — one week, and you get a dollar figure for the margin you&apos;re leaving on the table. It credits against onboarding if you sign.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <BookCallButton className="inline-block bg-gold-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-gold-700 shadow-gold transition-all duration-200">
                Book a 20-minute call
              </BookCallButton>
              <Link
                href="/trades"
                className="inline-block border-2 border-slate-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-violet-400 hover:text-violet-200 transition-all duration-200"
              >
                How the managed service works
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {trades.map((t, i) => (
            <AnimateOnScroll key={t.href} animation="fade-up" delay={i * 80}>
              <Link
                href={t.href}
                className="block bg-white border border-slate-200 rounded-xl p-6 h-full hover:border-violet-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-1">Bookkeeping for {t.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{t.blurb}</p>
                <span className="text-sm font-medium text-gold-600">Learn more →</span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
