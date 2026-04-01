import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features — Everything You Need, Nothing You Don\'t | Poof AI Bookkeeping',
  description: '69 features, one flat price — $29/mo. AI categorization, budgeting, cash flow forecasting, recurring invoices, receipt scanning, auto-reconciliation, 13 reports, and more. Everything QuickBooks charges $38+ for.',
  keywords: 'AI bookkeeping features, automated categorization, AI budgeting, cash flow forecasting, recurring invoices, auto-reconciliation, expense tracking, bank reconciliation, financial reports, receipt scanning',
  alternates: {
    canonical: 'https://poof.ai/features',
  },
}

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
