import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features — Every feature, one price | Poof',
  description: 'All 128 Poof features on one page, searchable: the approvals inbox, job costing, the month-end close, reconciliation, invoicing, budgeting, 13 reports, and the AI receptionist. $79/mo, every feature.',
  keywords: 'AI bookkeeping features, automated categorization, AI budgeting, cash flow forecasting, recurring invoices, auto-reconciliation, expense tracking, bank reconciliation, financial reports, receipt scanning',
  alternates: {
    canonical: 'https://www.poofai.com/features',
  },
  openGraph: {
    title: 'Poof Features — 128 Tools, One Flat Price',
    description:
      '128 features for $79/mo: AI categorization, budgeting, cash flow forecasting, invoicing, job costing, receipt scanning, auto-reconciliation, and 13 reports.',
    url: 'https://www.poofai.com/features',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
