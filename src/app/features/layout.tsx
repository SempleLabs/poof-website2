import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features — Every feature, one price | Poof',
  description: 'All 246 Poof features on one page, searchable: the approvals inbox, job costing, the month-end close, reconciliation, invoicing, budgeting, 14 reports, and the AI receptionist. $79/mo for every feature in the plan; the AI receptionist is an add-on.',
  keywords: 'AI bookkeeping features, automated categorization, AI budgeting, cash flow forecasting, recurring invoices, auto-reconciliation, expense tracking, bank reconciliation, financial reports, receipt scanning',
  alternates: {
    canonical: 'https://www.poofai.com/features',
  },
  openGraph: {
    title: 'Poof Features — 246 Tools, One Flat Price',
    description:
      '246 features for $79/mo: AI categorization, budgeting, cash flow forecasting, invoicing, job costing, receipt scanning, auto-reconciliation, and 14 reports.',
    url: 'https://www.poofai.com/features',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
