import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Poof vs QuickBooks — AI Bookkeeping Comparison | Poof',
  description: 'Compare Poof and QuickBooks side by side. See how Poof\'s AI-powered bookkeeping compares on features, pricing, and ease of use for small businesses.',
  keywords: 'Poof vs QuickBooks, QuickBooks alternative, AI bookkeeping comparison, small business bookkeeping',
}

const comparisonData = [
  { category: 'AI & Automation', features: [
    { name: 'AI Transaction Categorization', poof: true, quickbooks: true },
    { name: 'Built-in AI Assistant', poof: true, quickbooks: false },
    { name: 'Auto Chart of Accounts Generation', poof: true, quickbooks: false },
  ]},
  { category: 'Core Bookkeeping', features: [
    { name: 'Invoicing & Credit Notes', poof: true, quickbooks: true },
    { name: 'Expense Tracking & Receipt Uploads', poof: true, quickbooks: true },
    { name: 'Bill & Vendor Management', poof: true, quickbooks: false },
    { name: 'Double-Entry Accounting', poof: true, quickbooks: true },
    { name: 'Bank Reconciliation', poof: true, quickbooks: true },
    { name: 'Accrual & Cash Basis Toggle', poof: true, quickbooks: true },
  ]},
  { category: 'Banking & Reports', features: [
    { name: 'Bank Connection (Plaid)', poof: true, quickbooks: true },
    { name: '8 Financial Reports', poof: true, quickbooks: true },
  ]},
  { category: 'Security & Team', features: [
    { name: 'Team Roles (RBAC)', poof: true, quickbooks: false },
    { name: 'Two-Factor Auth (TOTP)', poof: true, quickbooks: true },
    { name: 'Audit Logs', poof: true, quickbooks: false },
  ]},
  { category: 'Small Business Focus', features: [
    { name: 'Built for Small Business', poof: true, quickbooks: true },
    { name: 'Simple, Flat Pricing (from $14.50/mo)', poof: true, quickbooks: false },
  ]},
]

const PoofCheck = () => (
  <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const QBCheck = () => (
  <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const Cross = () => (
  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

export default function PoofVsQuickbooksPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title={<><span className="text-gradient-gold">Poof</span> vs QuickBooks</>}
        subtitle="Both platforms handle core bookkeeping. Poof adds AI automation and is built specifically for small businesses — starting at $14.50/month with no feature tiers."
      />

      {/* Pricing Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="bg-slate-900 border border-gold-500/30 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold font-display text-white mb-2">Poof</h3>
                <div className="mb-1">
                  <span className="text-2xl font-bold text-slate-500 line-through mr-2">$29</span>
                  <span className="text-4xl font-bold text-gold-400">$14.50</span>
                  <span className="text-lg text-slate-400">/mo</span>
                </div>
                <p className="text-slate-400 mb-6">50% off for your first 3 months, then $29/mo. All features included.</p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2"><PoofCheck /> 24 features included</li>
                  <li className="flex items-center gap-2"><PoofCheck /> AI transaction categorization</li>
                  <li className="flex items-center gap-2"><PoofCheck /> Built-in AI assistant</li>
                  <li className="flex items-center gap-2"><PoofCheck /> 30-day free trial</li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={150}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full shadow-sm">
                <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">QuickBooks Simple Start</h3>
                <div className="text-4xl font-bold text-slate-700 mb-1">$38<span className="text-lg text-slate-500">/mo+</span></div>
                <p className="text-slate-600 mb-6">Base plan. Advanced features cost more.</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-2"><QBCheck /> Core bookkeeping features</li>
                  <li className="flex items-center gap-2"><Cross /> No built-in AI assistant</li>
                  <li className="flex items-center gap-2"><Cross /> No team roles or audit logs</li>
                  <li className="flex items-center gap-2"><Cross /> Complex, tiered pricing</li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Detailed Comparison Table */}
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-8 text-center">Feature-by-Feature Comparison</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left px-6 py-5 text-sm font-semibold text-slate-600 w-1/2">Feature</th>
                    <th className="px-4 py-5 text-center bg-gold-500/10">
                      <div className="text-sm font-bold text-gold-600">Poof</div>
                    </th>
                    <th className="px-4 py-5 text-center">
                      <div className="text-sm font-bold text-slate-700">QuickBooks</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((section, sectionIndex) => (
                    <React.Fragment key={sectionIndex}>
                      <tr className="bg-slate-50">
                        <td colSpan={3} className="px-6 py-3 text-sm font-bold text-slate-900">
                          {section.category}
                        </td>
                      </tr>
                      {section.features.map((feature, featureIndex) => (
                        <tr key={`${sectionIndex}-${featureIndex}`} className="border-b border-slate-200">
                          <td className="px-6 py-4 text-sm text-slate-700">{feature.name}</td>
                          <td className="px-4 py-4 text-center bg-gold-500/5">
                            <div className="flex justify-center">{feature.poof ? <PoofCheck /> : <Cross />}</div>
                          </td>
                          <td className="px-4 py-4 text-center">
                            <div className="flex justify-center">{feature.quickbooks ? <QBCheck /> : <Cross />}</div>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          <p className="text-sm text-slate-500 text-center mt-6">
            Comparison based on QuickBooks Simple Start plan as of January 2026. Features and pricing may vary.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Try <span className="text-gradient-gold">Poof</span> Free for 30 Days
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              See the difference AI bookkeeping makes. All 24 features included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.poofai.com/register"
                className="bg-gold-500 text-white font-semibold px-8 py-4 rounded-lg shadow-gold hover:bg-gold-400 transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
              >
                Start Free Trial →
              </Link>
              <Link
                href="/demo"
                className="border-2 border-slate-600 text-white font-semibold px-8 py-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
