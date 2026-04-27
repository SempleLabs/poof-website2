import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Everything You Need, One Price | Poof AI Bookkeeping',
  description: '$29/mo for everything QuickBooks charges $38+ for. One plan, 72 features, 13 reports, AI budgeting & forecasting. 30-day free trial, then $14.50/month (50% off launch special). No tiers, no hidden fees.',
  keywords: 'bookkeeping software pricing, AI bookkeeping cost, small business bookkeeping price, Poof pricing, AI budgeting software cost',
  alternates: {
    canonical: 'https://poof.ai/pricing',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
