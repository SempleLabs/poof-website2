'use client'

import AnimateOnScroll from './AnimateOnScroll'

const features = [
  { name: 'AI Transaction Categorization', poof: true, quickbooks: true, xero: false, freshbooks: false },
  { name: 'Built-in AI Assistant (Creates, Edits & Records)', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'AI Payment Recording with Journal Entries', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'Auto Chart of Accounts Generation', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'Receipt Scanning & OCR', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'AI Recurring Charge Detection', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'AI Budgeting & Cash Flow Forecasting', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'Invoicing & Credit Notes', poof: true, quickbooks: true, xero: true, freshbooks: true },
  { name: 'Recurring Invoices with Automated Follow-ups', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'Expense Tracking & Receipt Uploads', poof: true, quickbooks: true, xero: true, freshbooks: true },
  { name: 'Bank Connection (Plaid)', poof: true, quickbooks: true, xero: true, freshbooks: true },
  { name: 'Bank Statement Import (CSV/PDF)', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'Bank Reconciliation', poof: true, quickbooks: true, xero: true, freshbooks: true },
  { name: 'Auto-Reconciliation', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'Double-Entry Accounting', poof: true, quickbooks: true, xero: true, freshbooks: false },
  { name: 'Bill & Vendor Management', poof: true, quickbooks: false, xero: true, freshbooks: false },
  { name: '13 Financial Reports', poof: true, quickbooks: true, xero: true, freshbooks: false },
  { name: 'Budget vs Actual Variance Dashboard', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'Accrual & Cash Basis Toggle', poof: true, quickbooks: true, xero: true, freshbooks: false },
  { name: 'Drag-and-Drop Dashboard', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'Command Bar (Cmd+K)', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'Team Roles (5 roles, 26 permissions)', poof: true, quickbooks: false, xero: true, freshbooks: true },
  { name: 'SOC 2 Audit Logs', poof: true, quickbooks: false, xero: false, freshbooks: false },
  { name: 'Two-Factor Auth (TOTP)', poof: true, quickbooks: true, xero: true, freshbooks: true },
  { name: 'Built for Small Business', poof: true, quickbooks: true, xero: false, freshbooks: true },
]

const Check = () => (
  <svg className="w-5 h-5 text-gold-400 glow-check" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const CheckOther = () => (
  <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const Cross = () => (
  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
            <span className="text-gradient-gold">Poof vs.</span> Other Bookkeeping Software
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how Poof compares to QuickBooks, Xero, and FreshBooks on the features that matter most to small businesses.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left px-6 py-5 text-sm font-semibold text-slate-700 w-1/3">
                    Feature
                  </th>
                  <th className="px-4 py-5 text-center bg-gold-500/10">
                    <div className="text-sm font-bold text-gold-400">Poof</div>
                    <div className="text-xs text-slate-500">$14.50/mo+</div>
                    <div className="mt-1 inline-block bg-gold-500 text-white text-xs font-bold px-2 py-0.5 rounded">RECOMMENDED</div>
                  </th>
                  <th className="px-4 py-5 text-center">
                    <div className="text-sm font-semibold text-slate-700">QuickBooks</div>
                    <div className="text-xs text-slate-500">$38/mo+</div>
                  </th>
                  <th className="px-4 py-5 text-center">
                    <div className="text-sm font-semibold text-slate-700">Xero</div>
                    <div className="text-xs text-slate-500">$15/mo+</div>
                  </th>
                  <th className="px-4 py-5 text-center">
                    <div className="text-sm font-semibold text-slate-700">FreshBooks</div>
                    <div className="text-xs text-slate-500">$19/mo+</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={`border-b border-slate-200 table-row-hover ${index % 2 === 0 ? 'bg-slate-50/50' : ''}`}>
                    <td className="px-6 py-4 text-sm text-slate-700 font-medium">
                      {feature.name}
                    </td>
                    <td className="px-4 py-4 text-center bg-gold-500/5">
                      <div className="flex justify-center">{feature.poof ? <Check /> : <Cross />}</div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="flex justify-center">{feature.quickbooks ? <CheckOther /> : <Cross />}</div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="flex justify-center">{feature.xero ? <CheckOther /> : <Cross />}</div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="flex justify-center">{feature.freshbooks ? <CheckOther /> : <Cross />}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>

        <p className="text-sm text-slate-500 text-center mt-6">
          Comparison based on each platform&apos;s base plan as of February 2026. Features and pricing may vary.
        </p>
      </div>
    </section>
  )
}
