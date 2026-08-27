import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features — Everything You Need, Nothing You Don\'t | Poof AI Bookkeeping',
  description: '108 features, one flat price — $79/mo. AI categorization, budgeting, cash flow forecasting, invoicing, job costing, receipt scanning, auto-reconciliation, and 13 reports.',
  keywords: 'AI bookkeeping features, automated categorization, AI budgeting, cash flow forecasting, recurring invoices, auto-reconciliation, expense tracking, bank reconciliation, financial reports, receipt scanning',
  alternates: {
    canonical: 'https://www.poofai.com/features',
  },
  openGraph: {
    title: 'Poof Features — 108 Tools, One Flat Price',
    description:
      '108 features for $79/mo: AI categorization, budgeting, cash flow forecasting, invoicing, job costing, receipt scanning, auto-reconciliation, and 13 reports.',
    url: 'https://www.poofai.com/features',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
