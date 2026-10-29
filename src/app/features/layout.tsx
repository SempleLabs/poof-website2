import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features — every feature on one page | Poof',
  description: 'All 246 Poof features on one page, searchable: the approvals inbox, job costing, the month-end close, reconciliation, invoicing, budgeting, 14 reports, and the AI receptionist. Poof is free; Poof Agent is $79/mo; the AI receptionist is an add-on.',
  keywords: 'AI bookkeeping features, automated categorization, AI budgeting, cash flow forecasting, recurring invoices, auto-reconciliation, expense tracking, bank reconciliation, financial reports, receipt scanning',
  alternates: {
    canonical: 'https://www.poofai.com/features',
  },
  openGraph: {
    title: 'Poof Features — 246 Tools, Free to Start',
    description:
      '246 features: AI categorization, budgeting, cash flow forecasting, invoicing, job costing, receipt scanning, auto-reconciliation, and 14 reports. Poof is free; Poof Agent is $79/mo.',
    url: 'https://www.poofai.com/features',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
