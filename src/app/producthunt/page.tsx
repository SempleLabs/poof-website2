import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Poof × Product Hunt — 90 Days Free | AI Bookkeeping That Does Itself',
  description:
    'Welcome, Product Hunt. Poof is AI bookkeeping that does itself — categorization, reconciliation, receipts, and reports on autopilot. PH-exclusive: 90 days free.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://www.poofai.com/producthunt',
  },
}

const highlights = [
  {
    title: 'AI categorization & reconciliation',
    body: 'Connect your bank and cards; the BRAID engine categorizes every transaction and reconciles your accounts to the statement — automatically.',
  },
  {
    title: 'An AI assistant with 30+ tools',
    body: 'Create invoices, record payments, set up depreciation schedules, or ask for any of 13 reports — in plain English, from a sidebar chat.',
  },
  {
    title: 'Job & project profitability',
    body: 'Tag transactions, bills, and invoices to jobs and see margin per job — the feature QuickBooks reserves for its $140/mo Plus tier.',
  },
  {
    title: 'Receipts that file themselves',
    body: 'Snap a photo or forward an email — OCR extracts the data, matches it to the transaction, and attaches the documentation.',
  },
  {
    title: 'Budgets & 12-month forecasts',
    body: 'Describe your goal in plain English and AI builds the budget, then tracks variance and projects your cash 12 months out.',
  },
  {
    title: 'A real month-end close',
    body: 'Period locking, books-integrity checks, and a plain-English close narrative — the discipline of a controller, automated.',
  },
]

export default function ProductHuntPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />

      {/* PH welcome hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              👋 Welcome, Product Hunt — exclusive offer below
            </div>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.05] tracking-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              Bookkeeping that <span className="text-gradient-gold">does itself.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect your accounts and Poof categorizes, reconciles, and closes your books — 108 features, one plan, built by a former controller. Normally $79/mo with a 30-day trial.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-up" delay={200}>
            <div className="bg-slate-900 rounded-2xl p-8 max-w-xl mx-auto mb-8">
              <p className="text-orange-300 text-xs font-semibold uppercase tracking-wider mb-2">Product Hunt exclusive</p>
              <p className="font-display text-3xl font-bold text-white mb-2">90 days free</p>
              <p className="text-slate-300 text-sm mb-6">
                Three full months of everything — no credit card to start. Use code <span className="font-mono font-semibold text-white bg-white/10 px-2 py-0.5 rounded">PRODUCTHUNT</span> at signup.
              </p>
              <Link
                href="https://app.poofai.com/register"
                className="glow-border shimmer-hover inline-block bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-gold-700 shadow-gold-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Claim 90 days free
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={300}>
            <p className="text-sm text-slate-500">
              Just browsing?{' '}
              <Link href="/spend-score" className="text-gold-600 font-semibold hover:text-gold-700 transition-colors">
                Try the free Spend Score
              </Link>{' '}
              — upload a bank statement, get an AI read on your spending in 60 seconds. No signup.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What it does */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              What the AI actually does
            </h2>
            <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
              Not a chatbot bolted onto accounting software — an engine that does the bookkeeping, with you reviewing instead of typing.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <AnimateOnScroll key={h.title} animation="fade-up" delay={i * 60}>
                <div className="bg-white border border-slate-200 rounded-xl p-6 h-full">
                  <h3 className="font-semibold text-slate-900 mb-2 leading-snug">{h.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{h.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="text-center mt-10">
              <Link href="/features" className="text-gold-600 font-semibold hover:text-gold-700 transition-colors">
                See all 108 features →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trust + trades footnote */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <p className="text-slate-600 leading-relaxed mb-6">
              Poof is built by Austin Semple, a former controller with 10+ years of audit and controller experience. The same engine powers our managed bookkeeping service for trade contractors, where a controller reviews every monthly close — so the AI underneath is held to audit-grade standards, not demo-grade ones.
            </p>
            <p className="text-sm text-slate-500">
              Run an HVAC, plumbing, or electrical shop?{' '}
              <Link href="/trades" className="text-gold-600 font-semibold hover:text-gold-700 transition-colors">
                See Poof Managed for Trades
              </Link>{' '}
              — done-for-you books with per-job profitability.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
