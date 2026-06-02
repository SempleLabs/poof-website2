import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Everything You Need, One Price | Poof AI Bookkeeping',
  description: '$29/mo for everything QuickBooks charges $38+ for — 69 features, 13 reports, AI budgeting & forecasting. 30-day free trial, then $14.50/mo launch price.',
  keywords: 'bookkeeping software pricing, AI bookkeeping cost, small business bookkeeping price, Poof pricing, AI budgeting software cost',
  alternates: {
    canonical: 'https://www.poofai.com/pricing',
  },
  openGraph: {
    title: 'Poof Pricing — Everything You Need, One Price',
    description:
      '$29/mo for everything QuickBooks charges $38+ for. One plan, 69 features, 13 reports, AI budgeting & forecasting. 30-day free trial.',
    url: 'https://www.poofai.com/pricing',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
