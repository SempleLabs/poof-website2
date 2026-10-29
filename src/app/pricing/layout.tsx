import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Poof is free; Poof Agent is $79/mo | Poof',
  description: 'Poof is free for good: the books, invoices, bills, all 14 reports, the close, payroll and 1099 prep. Poof Agent, the AI that does the work, is $79/mo vs $140/mo for QuickBooks Plus, and free for your first 30 days.',
  keywords: 'bookkeeping software pricing, AI bookkeeping cost, small business bookkeeping price, Poof pricing, AI budgeting software cost',
  alternates: {
    canonical: 'https://www.poofai.com/pricing',
  },
  openGraph: {
    title: 'Poof Pricing — Free for Good, Poof Agent $79/mo',
    description:
      'Poof is free for good: the books, invoices, all 14 reports and the close. Poof Agent, the AI that works while you sleep, is $79/mo vs $140/mo for QuickBooks Plus. Poof Agent free for 30 days, no card.',
    url: 'https://www.poofai.com/pricing',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
