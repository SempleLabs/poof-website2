import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — one plan, every feature, $79/mo | Poof',
  description: 'One price, every feature — $79/mo flat vs $140/mo for QuickBooks Plus. 128 features, 13 reports, AI budgeting & forecasting. 30 days free, then $39.50/mo for your first three paid months, then $79/mo.',
  keywords: 'bookkeeping software pricing, AI bookkeeping cost, small business bookkeeping price, Poof pricing, AI budgeting software cost',
  alternates: {
    canonical: 'https://www.poofai.com/pricing',
  },
  openGraph: {
    title: 'Poof Pricing — Everything You Need, One Price',
    description:
      'One price, every feature — $79/mo flat vs $140/mo for QuickBooks Plus. One plan, 128 features, 13 reports, AI budgeting & forecasting. 30 days free, then half price for three months.',
    url: 'https://www.poofai.com/pricing',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
