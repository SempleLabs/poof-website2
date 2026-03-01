import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Simple, Honest Pricing for AI Bookkeeping | Poof',
  description: 'One plan with all 40+ features including AI budgeting, cash flow forecasting, and 13 reports. 30-day free trial, then $14.50/month (50% off launch special). No hidden fees.',
  keywords: 'bookkeeping software pricing, AI bookkeeping cost, small business bookkeeping price, Poof pricing, AI budgeting software cost',
  alternates: {
    canonical: 'https://poof.ai/pricing',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
