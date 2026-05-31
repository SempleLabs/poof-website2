import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import GlowCard from '@/components/GlowCard'
import { getFaqPageSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'Bookkeeping for Trade Contractors | Poof Managed for Trades',
  description:
    'A managed bookkeeping service for HVAC, plumbing, and electrical shops doing $750K–$3M. Per-job profit on every monthly close — know which jobs made money. AI-powered, controller-reviewed, built from your Jobber or Housecall Pro data.',
  alternates: {
    canonical: 'https://www.poofai.com/trades',
  },
  openGraph: {
    title: 'Poof Managed for Trades — Bookkeeping for Trade Contractors',
    description:
      'Per-job profit on every monthly close. AI-powered, controller-reviewed bookkeeping for HVAC, plumbing, and electrical shops.',
    url: 'https://www.poofai.com/trades',
    siteName: 'Poof',
    type: 'website',
  },
}

const trades = [
  {
    name: 'HVAC',
    href: '/hvac',
    body: 'Per-job P&L on every install and replacement — so the next bid is priced on real margin, not last month\'s guess.',
  },
  {
    name: 'Plumbing',
    href: '/plumbing',
    body: 'Know which repipes, service calls, and remodels actually made money before you bid two more like them.',
  },
  {
    name: 'Electrical',
    href: '/electrical',
    body: 'Job-level profit on panel upgrades and service work, with subs tracked all year for a clean 1099 January.',
  },
]

const pains = [
  {
    title: 'Your monthly P&L lands weeks after the month ends',
    body: 'You\'re bidding this week\'s jobs on numbers that are three weeks stale. Bookkeeper turnaround is the bottleneck.',
  },
  {
    title: 'You can\'t tell which jobs actually made money',
    body: 'The big commercial install might have been a loss. By the time the P&L lands, the next quote is already out the door.',
  },
  {
    title: 'Field data gets rekeyed into QBO by hand',
    body: 'A part-time bookkeeper at $800–$1,500/mo manually moves Jobber or Housecall Pro data into QuickBooks. Slow, error-prone, expensive.',
  },
]

const howItWorks = [
  {
    number: '1',
    title: 'Connect your bank, cards, and field-service tool',
    body: 'Plaid links your bank and cards. We bring your Jobber or Housecall Pro data into your books — so job revenue and costs land in the ledger without you rekeying them.',
  },
  {
    number: '2',
    title: 'AI agents categorize and reconcile your books',
    body: 'Transactions are categorized against a chart of accounts built for your trade, and supply-house costs get matched to the right job.',
  },
  {
    number: '3',
    title: 'A controller reviews every customer-facing decision',
    body: 'Austin and team review categorizations, journal entries, and month-end close before anything is final. AI does the work. A human signs off.',
  },
  {
    number: '4',
    title: 'Per-job P&L with every monthly close',
    body: 'Want to know if a specific job made money? Ask Poof\'s assistant, or text your controller — and get a straight answer instead of a P&L that\'s three weeks late.',
  },
]

const plans = [
  {
    name: 'Poof Managed for Trades',
    price: '$1,200',
    cadence: '/mo',
    bestFor: '2–4 truck shops, $750K–$1.8M revenue',
    features: [
      'All Poof Professional features included',
      'Per-job P&L with every monthly close',
      'Monthly close + controller review',
      'Jobber / Housecall Pro data brought into your books',
      'A controller you can text or email',
      'Monthly variance review',
    ],
    cta: 'Book a 20-minute call',
    ctaHref: '/contact',
    highlight: true,
  },
  {
    name: 'Poof Managed for Trades Plus',
    price: '$1,500',
    cadence: '/mo',
    bestFor: '5–6 truck shops, $1.8M–$3M revenue',
    features: [
      'Everything in Managed for Trades',
      'Multi-location reporting',
      'Quarterly review call',
      'Priority response',
    ],
    cta: 'Book a 20-minute call',
    ctaHref: '/contact',
    highlight: false,
  },
]

const extras = [
  {
    name: 'Onboarding (one-time)',
    price: '$1,500',
    body: 'Historical cleanup up to 18 months, QBO or Xero migration, Jobber / Housecall Pro setup, chart of accounts aligned to your trade.',
  },
  {
    name: 'Trade pilot',
    price: '$250',
    body: '30-day full-service trial. Fully refundable if you\'re not delighted. The lowest-risk way to see if this fits your shop.',
  },
]

const faqs = [
  {
    q: 'Which trades do you work with?',
    a: 'HVAC, plumbing, and electrical service shops doing roughly $750K–$3M with 2–6 trucks. Other field-service trades on the same Jobber or Housecall Pro setup are usually a fit too — book a call and we\'ll be straight about it.',
  },
  {
    q: 'Do I need to switch from Jobber or Housecall Pro?',
    a: 'No. Keep using exactly what your techs use today. We bring your Jobber or Housecall Pro data into your books for you — your dispatcher and techs see no change. The handoff into your books is what we replace, not the field tool.',
  },
  {
    q: 'Is this real bookkeeping or just AI guessing?',
    a: 'Real bookkeeping. Every customer-facing decision is reviewed by a credentialed human — Austin or someone on his team, with audit and controller experience. The AI does the volume work. The human signs off on the calls that matter. The ledger is real double-entry, built to survive any IRS or insurance audit.',
  },
  {
    q: 'How is this different from my current bookkeeper?',
    a: 'Granularity: per-job P&L on every close, which most part-time bookkeepers can\'t deliver at any price. Accountability: a former controller reviewing the work, with an audit-grade ledger underneath. Responsiveness: a real person you can text about a specific job, not someone who logs in once a month.',
  },
]

export default function TradesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              For HVAC, plumbing, and electrical shops
            </div>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.05] tracking-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              Bookkeeping for trade contractors. <span className="text-gradient-gold">Finally know which jobs actually made money.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A managed bookkeeping service for shops doing $750K–$3M with 2–6 trucks. Powered by AI agents, reviewed by a former controller. Works with your existing Jobber or Housecall Pro.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-up" delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="glow-border shimmer-hover inline-block bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-gold-700 shadow-gold-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a 20-minute call
              </Link>
              <Link
                href="#trades"
                className="inline-block border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-lg text-base hover:border-slate-900 hover:text-slate-900 transition-all duration-200"
              >
                Find your trade
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={300}>
            <p className="text-sm text-slate-500 mt-6">
              30-day refundable pilot · Founder-led onboarding · Cancel anytime
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trade cards */}
      <section id="trades" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              Built for your trade
            </h2>
            <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
              Same managed service, a chart of accounts and job costing tuned to how your work actually gets billed.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {trades.map((t, i) => (
              <AnimateOnScroll key={t.name} animation="fade-up" delay={i * 100}>
                <Link href={t.href} className="block h-full">
                  <GlowCard className="bg-white border border-slate-200 rounded-xl p-6 card-hover-lift h-full">
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">{t.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{t.body}</p>
                    <span className="text-sm font-semibold text-violet-600">View details →</span>
                  </GlowCard>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              The pain you have today
            </h2>
            <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
              You didn&apos;t get into this trade to chase down a part-time bookkeeper for last month&apos;s P&amp;L.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pains.map((p, i) => (
              <AnimateOnScroll key={p.title} animation="fade-up" delay={i * 100}>
                <GlowCard className="bg-slate-50 border border-slate-200 rounded-xl p-6 card-hover-lift h-full">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold mb-4">
                    !
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
                </GlowCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-3">
              How it works in 60 seconds
            </h2>
            <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
              Connect, sync, review, deliver. The handoff into your books is the part we replace.
            </p>
          </AnimateOnScroll>

          <div className="space-y-0">
            {howItWorks.map((step, i) => (
              <AnimateOnScroll key={step.number} animation="fade-up" delay={i * 100}>
                <div className="flex gap-5 items-start relative">
                  {i < howItWorks.length - 1 && (
                    <div className="absolute left-6 top-14 w-px h-[calc(100%-2rem)] bg-gradient-to-b from-violet-300 to-slate-200" />
                  )}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-600 text-white flex items-center justify-center font-bold text-lg shadow-gold relative z-10">
                    {step.number}
                  </div>
                  <div className="pb-10">
                    <h3 className="font-semibold text-lg text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-3">
              Pricing built for trade shops
            </h2>
            <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
              Replaces a $1,000–$1,500/mo bookkeeper, and delivers detail they can&apos;t. No long-term contract.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {plans.map((plan, i) => (
              <AnimateOnScroll key={plan.name} animation="fade-up" delay={i * 100}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col ${
                    plan.highlight
                      ? 'bg-slate-900 text-white border-2 border-violet-400 shadow-xl'
                      : 'bg-white text-slate-900 border border-slate-200'
                  }`}
                >
                  {plan.highlight && (
                    <div className="inline-block self-start bg-violet-500 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                      Most shops start here
                    </div>
                  )}
                  <h3 className={`font-semibold text-xl mb-1 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-5 ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>{plan.bestFor}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                    <span className={`text-lg ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>{plan.cadence}</span>
                  </div>
                  <ul className="space-y-2 mb-8 flex-grow">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-violet-300' : 'text-emerald-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.highlight ? 'text-slate-100' : 'text-slate-700'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.ctaHref}
                    className={`block w-full text-center font-semibold px-6 py-3 rounded-lg transition-all duration-200 ${
                      plan.highlight
                        ? 'bg-gold-600 text-white hover:bg-gold-700'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extras.map((extra, i) => (
              <AnimateOnScroll key={extra.name} animation="fade-up" delay={i * 100}>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-semibold text-slate-900">{extra.name}</h4>
                    <div className="text-2xl font-bold text-violet-600">{extra.price}</div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{extra.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8 max-w-xl mx-auto">
            Not sure which tier fits? Book a 20-minute call. We&apos;ll be straight about whether Poof makes sense for your shop.
          </p>
        </div>
      </section>

      {/* Founder bio */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10">
              <div className="text-xs font-semibold uppercase tracking-wider text-violet-600 mb-3">Built by a controller, not a startup</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Austin Semple — 10+ years of audit and controller work
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Before Poof, Austin spent a decade auditing and running the books for small service businesses. The pattern was always the same: an owner who built a real business from a service truck, paying $1,000+/mo for a bookkeeper who delivered a PDF three weeks late and couldn&apos;t answer the one question that mattered — &ldquo;which jobs made money?&rdquo;
                </p>
                <p>
                  Poof Managed for Trades is built on that experience. AI agents do the volume work. A credentialed human signs off on every customer-facing decision. The ledger underneath is real double-entry bookkeeping with reversal entries — built to survive any IRS or insurance audit.
                </p>
                <p className="text-slate-900 font-medium">
                  Austin personally onboards the first 50 shops. If that&apos;s you, you&apos;re working directly with the founder.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Questions shop owners ask
            </h2>
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <AnimateOnScroll key={f.q} animation="fade-up" delay={i * 50}>
                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-6 open:bg-white open:border-violet-200 transition-colors">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-slate-900 leading-snug">{f.q}</h3>
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed text-sm">{f.a}</p>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Per-job profit on every monthly close. Starts at $1,200/mo.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Book a 20-minute call with Austin. We&apos;ll look at your current setup and give you a straight answer on whether Poof fits.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-up" delay={200}>
            <Link
              href="/contact"
              className="glow-border shimmer-hover inline-block bg-gold-600 text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-gold-lg hover:bg-gold-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a 20-minute call
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-slate-300 mt-12 max-w-2xl mx-auto">
              {[
                { label: 'Controller-reviewed', icon: '✓' },
                { label: 'Founder-led onboarding', icon: '✦' },
                { label: '30-day refundable pilot', icon: '↻' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <span className="text-violet-300 text-xl mb-2">{item.icon}</span>
                  <div className="text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
