import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Poof is free; Poof Agent is $79/mo | Poof',
  description: 'Poof is free for good: the books, invoices, all 14 reports, the close, payroll and 1099 prep. Poof Agent, the AI that does the work, is $79/mo, free for 30 days. Poof files your 1099s, the first 3 forms free; a person to do your books, quoted.',
  keywords: 'free bookkeeping software, bookkeeping software pricing, AI bookkeeping cost, 1099 filing price, small business bookkeeper, Poof pricing',
  alternates: {
    canonical: 'https://www.poofai.com/pricing',
  },
  openGraph: {
    images: ['/og-image.png'],
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
