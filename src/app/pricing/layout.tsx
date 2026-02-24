import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Simple, Honest Pricing for AI Bookkeeping | Poof',
  description: 'One plan with all 40 features. Start with a 30-day free trial, then $14.50/month (50% off launch special). No hidden fees, cancel anytime.',
  keywords: 'bookkeeping software pricing, AI bookkeeping cost, small business bookkeeping price, Poof pricing',
  alternates: {
    canonical: 'https://poof.ai/pricing',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
