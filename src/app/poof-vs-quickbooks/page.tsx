import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Poof vs QuickBooks — AI Bookkeeping Comparison | Poof',
  description: 'Compare Poof and QuickBooks side by side. Poof is $79/mo flat vs $140/mo for QuickBooks Plus — with AI budgeting, cash flow forecasting, job costing, and auto-reconciliation QuickBooks doesn\'t offer at any tier.',
  keywords: 'Poof vs QuickBooks, QuickBooks alternative, AI bookkeeping comparison, small business bookkeeping, AI budgeting, cash flow forecasting',
  alternates: {
    canonical: 'https://www.poofai.com/poof-vs-quickbooks',
  },
  openGraph: {
    title: 'Poof vs QuickBooks — AI Bookkeeping Comparison',
    description:
      'Compare Poof and QuickBooks side by side: $79/mo flat vs $140/mo QuickBooks Plus, with AI budgeting, cash flow forecasting, job costing, and auto-reconciliation.',
    url: 'https://www.poofai.com/poof-vs-quickbooks',
    siteName: 'Poof',
    type: 'website',
  },
}

const comparisonData = [
  { category: 'AI & Automation', features: [
    { name: 'AI Transaction Categorization', poof: true, quickbooks: true },
    { name: 'Built-in AI Assistant (Poof)', poof: true, quickbooks: false },
    { name: 'Auto Chart of Accounts Generation', poof: true, quickbooks: false },
    { name: 'AI Recurring Charge Detection', poof: true, quickbooks: false },
    { name: 'Receipt Scanning & OCR (with duplicate detection)', poof: true, quickbooks: false },
    { name: 'Smart Transaction Matching', poof: true, quickbooks: false },
    { name: 'AI Budget & Forecast Generation', poof: true, quickbooks: false },
    { name: 'AI Depreciation & Recurring Entry Setup', poof: true, quickbooks: false },
  ]},
  { category: 'Budgeting & Forecasting', features: [
    { name: 'AI-Powered Budget Creation', poof: true, quickbooks: false },
    { name: 'Budget Overview & Status Tracking', poof: true, quickbooks: false },
    { name: 'Budget vs Actual Variance Dashboard', poof: true, quickbooks: false },
    { name: 'AI Cash Flow Forecasting (12-month)', poof: true, quickbooks: false },
    { name: 'Budget Alerts', poof: true, quickbooks: false },
  ]},
  { category: 'Core Bookkeeping', features: [
    { name: 'Invoicing & Credit Notes', poof: true, quickbooks: true },
    { name: 'Estimates with One-Click Invoice Conversion', poof: true, quickbooks: false },
    { name: 'Recurring Invoices with Auto-Send', poof: true, quickbooks: false },
    { name: 'Automated Invoice Follow-ups', poof: true, quickbooks: false },
    { name: 'Expense Tracking & Receipt Uploads', poof: true, quickbooks: true },
    { name: 'Bill & Vendor Management', poof: true, quickbooks: false },
    { name: 'Double-Entry Accounting', poof: true, quickbooks: true },
    { name: 'Bank Reconciliation', poof: true, quickbooks: true },
    { name: 'Auto-Reconciliation', poof: true, quickbooks: false },
    { name: 'Accrual & Cash Basis Toggle', poof: true, quickbooks: true },
    { name: 'Recurring Journal Entry Templates', poof: true, quickbooks: false },
    { name: 'Transaction Approval Workflows', poof: true, quickbooks: false },
  ]},
  { category: 'Banking & Reports', features: [
    { name: 'Bank Connection (Plaid)', poof: true, quickbooks: true },
    { name: 'Bank Statement Import (CSV/PDF)', poof: true, quickbooks: false },
    { name: 'Bank Statement PDF Import via AI Chat', poof: true, quickbooks: false },
    { name: '13 Financial Reports', poof: true, quickbooks: true },
    { name: 'Report Drill-Down (Click to See Journal Entries)', poof: true, quickbooks: false },
    { name: 'Shareable Report URLs', poof: true, quickbooks: false },
    { name: 'Scheduled Report Delivery (Email, PDF/CSV)', poof: true, quickbooks: false },
  ]},
  { category: 'Security & Team', features: [
    { name: 'Team Roles (5 roles, 26 permissions)', poof: true, quickbooks: false },
    { name: 'Audit Logs with PII Masking', poof: true, quickbooks: false },
    { name: 'Two-Factor Auth (TOTP)', poof: true, quickbooks: true },
  ]},
  { category: 'Productivity & UX', features: [
    { name: 'Personalized Dashboard with AI Daily Briefing', poof: true, quickbooks: false },
    { name: 'Command Bar (Cmd+K)', poof: true, quickbooks: false },
    { name: 'AI Chat Folders & Multi-Session Conversations', poof: true, quickbooks: false },
    { name: 'Simple, Flat Pricing (from $39.50/mo)', poof: true, quickbooks: false },
  ]},
  { category: 'Job Costing & Close', features: [
    { name: 'Job Costing & Per-Job Profitability', poof: true, quickbooks: true },
    { name: 'Per-Job Labor Allocation', poof: true, quickbooks: false },
    { name: 'Financing Gross-Up (Dealer Fees Costed to the Job)', poof: true, quickbooks: false },
    { name: 'Peer Benchmarks on the Per-Job P&L', poof: true, quickbooks: false },
    { name: 'Period Close & Locking with Tie-Out Checks', poof: true, quickbooks: false },
    { name: 'AI Close Narrative', poof: true, quickbooks: false },
    { name: 'Customer Deposits Held as a Liability, Released to the Job on Completion', poof: true, quickbooks: false },
    { name: 'Prepaid Maintenance Plans Earned Per Completed Visit', poof: true, quickbooks: false },
    { name: 'AI Phone Receptionist + Dispatch (managed service)', poof: true, quickbooks: false },
  ]},
  { category: 'Field Service & Job Handoff', features: [
    { name: 'Technician Field Link (no account, no app install)', poof: true, quickbooks: false },
    { name: 'Arrival Tracking (on-my-way, arrived, completed)', poof: true, quickbooks: false },
    { name: 'Field Report & Equipment on File (per address)', poof: true, quickbooks: false },
    { name: 'Jobsite Photos, Opted In Per Photo', poof: true, quickbooks: false },
    { name: 'Parts & Labor Logged in the Field', poof: true, quickbooks: false },
    { name: 'Invoice Drafted From the Completed Visit', poof: true, quickbooks: false },
    { name: 'Trade-Format Invoice (diagnosis, work performed, warranty)', poof: true, quickbooks: false },
    { name: 'A Completed Service Call Becomes a Job', poof: true, quickbooks: false },
    { name: 'Office Review of the Field Report Before Send', poof: true, quickbooks: false },
    { name: 'Even Work Distribution Across Technicians', poof: true, quickbooks: false },
    { name: 'Unassigned-Job Escalation Before Start Time', poof: true, quickbooks: false },
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
    <main id="main-content" className="min-h-screen">
      <Header />

      <PageHero
        title={<><span className="text-gradient-gold">Poof</span> vs QuickBooks</>}
        subtitle="Both platforms handle core bookkeeping. Poof is one plan at $79/mo — 44% less than the $140/mo QuickBooks Plus tier that carries job costing and budgets — with AI automation QuickBooks doesn't offer at any tier."
      />

      {/* Pricing Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="bg-slate-900 border border-gold-500/30 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold font-display text-white mb-2">Poof</h3>
                <div className="mb-1">
                  <span className="text-2xl font-bold text-slate-500 line-through mr-2">$79</span>
                  <span className="text-4xl font-bold text-gold-400">$39.50</span>
                  <span className="text-lg text-slate-400">/mo</span>
                </div>
                <p className="text-slate-400 mb-6">50% off for your first 3 months, then $79/mo. All features included.</p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2"><PoofCheck /> 110 features included</li>
                  <li className="flex items-center gap-2"><PoofCheck /> AI transaction categorization</li>
                  <li className="flex items-center gap-2"><PoofCheck /> Built-in AI assistant</li>
                  <li className="flex items-center gap-2"><PoofCheck /> 30-day free trial</li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={150}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full shadow-sm">
                <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">QuickBooks Plus</h3>
                <div className="text-4xl font-bold text-slate-700 mb-1">$140<span className="text-lg text-slate-500">/mo</span></div>
                <p className="text-slate-600 mb-6">The tier that carries job costing and budgets. Up 22% on August 1, 2026 &mdash; from $115.</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-2"><QBCheck /> Core bookkeeping + project tracking</li>
                  <li className="flex items-center gap-2"><Cross /> No built-in AI assistant</li>
                  <li className="flex items-center gap-2"><Cross /> No AI budgeting or cash flow forecasting</li>
                  <li className="flex items-center gap-2"><Cross /> Team roles and audit logs need Advanced ($340/mo)</li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Why Plus, not Simple Start */}
          <AnimateOnScroll animation="fade-up">
            <div className="mb-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
                Why we compare against Plus, not Simple Start
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                QuickBooks Simple Start is $38/mo, and it is the number every comparison page reaches for. But it is
                single-user, with no team roles, no budgets, and a fraction of the reporting &mdash; a business that
                needs what Poof does can&apos;t run on it. Plus, at $140/mo, is the tier that actually matches this
                feature set. That is the honest comparison, and it is the one where the numbers favor Poof:
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 font-bold">&bull;</span>
                  <span><strong>$79 flat vs $140.</strong> Poof is 44% cheaper &mdash; and adds the AI assistant, budgeting,
                  forecasting, and per-job labor allocation that Plus doesn&apos;t have at any price.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 font-bold">&bull;</span>
                  <span><strong>Roles and audit logging are Advanced-tier at QuickBooks.</strong> Poof&apos;s 5 roles,
                  26 granular permissions, and SOC 2 audit logging with PII masking are included &mdash; QuickBooks puts
                  that class of capability on its $340/mo plan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 font-bold">&bull;</span>
                  <span><strong>Intuit raised prices on August 1, 2026.</strong> Plus went from $115 to $140 (+22%) and
                  Advanced from $275 to $340 (+24%), with no new capability attached. Poof is $79, flat, everything
                  included.</span>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

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
            Compared against QuickBooks Online Plus at $140/mo &mdash; the plan that matches Poof&apos;s capability set. QuickBooks list prices as of August 2026, following Intuit&apos;s August 1, 2026 increase: Simple Start $38, Essentials $85, Plus $140, Advanced $340. Features and pricing may vary; re-check before relying on these figures. A cross in the QuickBooks column means the capability is not built in: deposit release and per-visit plan revenue, for example, are manual journal entries there.
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
              See the difference AI bookkeeping makes. One plan, 110 features, no tier to grow into.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.poofai.com/register"
                className="bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg shadow-gold hover:bg-gold-700 transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
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
