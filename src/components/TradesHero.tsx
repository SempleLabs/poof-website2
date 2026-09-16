import Link from 'next/link'
import AnimateOnScroll from './AnimateOnScroll'
import BookCallButton from './BookCallButton'

export default function TradesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="fade-up">
          <div className="inline-flex items-center gap-2 bg-ledger-100 border border-ledger-300 text-ledger-700 font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            The Augmented Operator — HVAC · Plumbing · Electrical
          </div>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.05] tracking-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            Know which jobs make money — <span className="text-ledger-600">every month, from a real controller.</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Managed bookkeeping for shops doing $750K–$3M with 2–6 trucks. AI agents categorize, reconcile, and job-cost your books; a former controller reviews every monthly close. Built from the Jobber or Housecall Pro data you already have — and Poof can answer your phone and book the job too.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BookCallButton
              className="inline-block bg-ledger-500 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-ledger-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a 20-minute call
            </BookCallButton>
            <Link
              href="/trades"
              className="inline-block border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-lg text-base hover:border-slate-900 hover:text-slate-900 transition-all duration-200"
            >
              Plans &amp; pricing for trades
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay={300}>
          <p className="text-sm text-slate-500 mt-6">
            Books closed by the 15th business day · Founder-led onboarding · No long-term contract
          </p>
        </AnimateOnScroll>

        {/* Per-job P&L mockup */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="rounded-xl bg-white border border-slate-200 shadow-xl overflow-hidden text-left">
              <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Per-job P&amp;L · Henderson install</div>
                <div className="text-xs text-ledger-600 font-semibold">From your monthly profit report</div>
              </div>
              <div className="px-6 py-5">
                <div className="grid grid-cols-3 gap-4 mb-5">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Revenue</div>
                    <div className="text-xl font-bold text-slate-900">$18,400</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Cost</div>
                    <div className="text-xl font-bold text-slate-900">$12,890</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Margin</div>
                    <div className="text-xl font-bold text-ledger-600">$5,510 · 29.9%</div>
                  </div>
                </div>
                <div className="space-y-1.5 text-sm">
                  {[
                    ['Equipment (2.5-ton heat pump)', '$6,200'],
                    ['Materials — Ferguson, Johnstone', '$1,840'],
                    ['Labor — 22 tech hours', '$3,520'],
                    ['Permits & inspection', '$430'],
                    ['Truck & fuel allocated', '$900'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-slate-600">
                      <span>{k}</span>
                      <span className="font-medium text-slate-900">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-3 italic">Sample report. Your shop&apos;s real per-job P&amp;Ls come with every monthly close.</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay={500}>
          <p className="text-sm text-slate-500 mt-10">
            Not a trade shop?{' '}
            <a href="#software" className="text-ledger-600 font-semibold hover:text-ledger-700 transition-colors">
              Poof Professional — self-serve AI bookkeeping for any small business, $79/mo ↓
            </a>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
