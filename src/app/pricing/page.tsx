'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'
import { getFaqPageSchema } from '@/lib/jsonLd'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const features = [
    'AI transaction categorization',
    'Built-in AI assistant (Preston)',
    'Receipt & invoice scanning (OCR)',
    'AI recurring charge detection',
    'Smart transaction matching',
    'Invoicing & credit notes',
    'Expense & mileage tracking',
    'Bill & vendor management',
    'Bank connection via Plaid (12,000+ banks)',
    'Bank statement import (CSV/PDF)',
    'Bank reconciliation',
    'Double-entry accounting',
    '12 financial reports',
    'Recurring journal entry templates',
    'Accrual & cash basis toggle',
    'Team roles (5 roles, 26 permissions)',
    'Two-factor authentication',
    'Dashboard with KPIs',
    'Unlimited transactions'
  ]

  const faqs = [
    {
      question: 'What happens during the free trial?',
      answer: 'You get full access to all features for 30 days. Connect your bank accounts, process receipts, and see how Poof transforms your bookkeeping. You can cancel anytime during the trial period.'
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Yes. All data is encrypted in transit via HTTPS/TLS. Bank connections are read-only through Plaid — we never see or store your credentials. Two-factor authentication, role-based permissions, and automatic session timeouts keep your account locked down.'
    },
    {
      question: 'Can my accountant access my books?',
      answer: 'Yes! You can invite your accountant or bookkeeper to access your books with read-only or full permissions. They can review, make adjustments, and export reports as needed.'
    },
    {
      question: 'What if I need to cancel?',
      answer: 'You can cancel anytime with one click. No contracts, no cancellation fees. You\'ll have access until the end of your billing period, and can export all your data.'
    },
    {
      question: 'How does Poof compare to QuickBooks?',
      answer: 'Poof is designed specifically for small businesses who want automated bookkeeping without the complexity. Our AI handles categorization automatically, while QuickBooks requires significant manual work.'
    },
    {
      question: 'What reports can I generate?',
      answer: 'Generate professional financial reports instantly - P&L statements, balance sheets, cash flow reports, and tax-ready summaries. Choose your date range and export in seconds.'
    },
    {
      question: 'Do you integrate with my existing tools?',
      answer: 'Yes. Poof integrates with most banks, credit cards, and popular business tools. We\'re constantly adding new integrations based on customer requests.'
    },
    {
      question: 'How much does bookkeeping software cost for a small business?',
      answer: 'Bookkeeping software for small businesses typically costs $15–$75/month depending on features. QuickBooks starts at $38/month, while Poof starts at $14.50/month (launch special) with all 30+ features included in one plan — no tiers or add-ons.'
    },
    {
      question: 'Do I still need a bookkeeper if I use Poof?',
      answer: 'Many small businesses use Poof to handle their day-to-day bookkeeping without hiring a bookkeeper. Poof automates transaction categorization, receipt scanning, recurring charge detection, and report generation. For tax preparation or complex accounting needs, you can invite your accountant to collaborate directly inside Poof.'
    }
  ]

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqs)) }}
      />
      <Header />

      <PageHero
        title={<><span className="text-gradient-gold">Simple, </span>Honest Pricing</>}
        subtitle="One plan with everything you need. Start with a 30-day free trial."
      />

      {/* Free Trial Banner + Pricing Toggle */}
      <section className="pt-12 pb-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 bg-gold-50 text-gold-600 font-semibold text-sm px-5 py-2.5 rounded-full border border-gold-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Start with a free 30-day trial — full access, cancel anytime
              </span>
            </div>
          </AnimateOnScroll>
          <div className="flex items-center justify-center">
            <div className="relative bg-slate-200 p-1 rounded-lg flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  !isAnnual
                    ? 'bg-gold-500 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                  isAnnual
                    ? 'bg-gold-500 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                  Save $58
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-8 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="scale-up" delay={200}>
            <div className="bg-slate-900 rounded-2xl text-center border border-gold-500/30 shadow-lg relative">
              {!isAnnual ? (
                <div className="bg-gradient-to-r from-gold-600 to-gold-400 text-white px-6 py-3 text-sm font-semibold tracking-widest rounded-t-[inherit] flex items-center justify-center gap-3">
                  <span className="animate-pulse">✦</span>
                  <span className="uppercase">Launch Special — 50% off your first 3 months</span>
                  <span className="animate-pulse">✦</span>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white px-6 py-3 text-sm font-semibold tracking-widest rounded-t-[inherit] flex items-center justify-center gap-3">
                  <span>★</span>
                  <span className="uppercase">Best Value — Save $58/year + 30-day free trial</span>
                  <span>★</span>
                </div>
              )}

              <div className="p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-white mb-4">Poof Professional</h2>
                  <p className="text-slate-400 mb-6">Everything you need for automated bookkeeping</p>
                  <div className="mb-2">
                    {!isAnnual && (
                      <span className="text-3xl font-mono font-bold text-slate-500 line-through mr-3">
                        $29
                      </span>
                    )}
                    <span className="text-6xl font-mono font-bold text-gold-400">
                      ${isAnnual ? '290' : '14.50'}
                    </span>
                    <span className="text-xl font-normal text-slate-400">
                      /{isAnnual ? 'year' : 'mo'}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    {isAnnual
                      ? '$24.17/mo • Save $58 per year'
                      : '50% off for your first 3 months, then $29/mo'
                    }
                  </p>
                </div>

              <div className="text-left mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Everything included:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="https://app.poofai.com/register"
                className="bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-400 shadow-gold transition-all text-lg w-full block text-center py-4 mb-4"
              >
                Start Free Trial →
              </Link>

              <p className="text-sm text-slate-500">
                Full access for 30 days • Cancel anytime
              </p>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Questions about our pricing?
            </p>
            <Link
              href="/demo"
              className="text-gold-500 hover:text-gold-400 font-medium"
            >
              Schedule a demo to learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-display font-bold text-slate-800 mb-6">
              Why Small Businesses Choose Poof
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Designed specifically for small businesses who want professional bookkeeping without the complexity.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
                  </svg>
                ),
                title: 'AI-Powered Categorization',
                description: 'Our AI suggests categories for your transactions, making bookkeeping faster and more accurate. Review and approve with one click.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                  </svg>
                ),
                title: '5-Minute Setup',
                description: 'Most accounting software takes weeks to configure. Connect your accounts and start getting organized books in minutes, not months. No chart of accounts to build or complex setup required.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Secure by Design',
                description: 'All data encrypted in transit. Bank connections are read-only through Plaid — we never see or store your credentials. Two-factor authentication and role-based permissions keep your books locked down.'
              }
            ].map((card, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 100}>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg flex-shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-800 mb-3">{card.title}</h3>
                  <p className="text-slate-600 flex-grow">{card.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-slate-800 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600">
                Everything you need to know about Poof pricing and features.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 60}>
                <div className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'border-gold-500/30 shadow-md' : 'border-slate-200'}`}>
                  <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="w-full px-6 py-5 text-left flex items-center justify-between transition-colors rounded-2xl">
                    <h3 className="text-lg font-semibold text-slate-800 pr-4">{faq.question}</h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaqIndex === index ? 'bg-gold-50 rotate-180' : 'bg-slate-100'}`}>
                      <svg className={`w-4 h-4 transition-colors duration-300 ${openFaqIndex === index ? 'text-gold-500' : 'text-slate-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`accordion-content ${openFaqIndex === index ? 'open' : ''}`}>
                    <div><div className="px-6 pb-5"><p className="text-slate-600 leading-relaxed">{faq.answer}</p></div></div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)]" />
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Automate Your Bookkeeping?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Start your 30-day free trial, then get 50% off your first 3 months.
            </p>
            <Link
              href="https://app.poofai.com/register"
              className="bg-gold-500 text-white font-bold px-8 py-4 rounded-lg shadow-gold hover:bg-gold-400 hover:-translate-y-0.5 transition-all duration-300 text-lg"
            >
              Start Free Trial →
            </Link>
            <p className="text-slate-500 text-sm mt-4">
              30-day free trial • Cancel anytime
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      <Footer />
    </main>
  )
}
