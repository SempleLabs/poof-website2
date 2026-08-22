import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions | Poof AI Bookkeeping',
  description: 'Common questions about Poof bookkeeping — pricing, features, security, QuickBooks migration, and how the managed service works for trade shops.',
  keywords: 'Poof FAQ, AI bookkeeping questions, bookkeeping software FAQ, QuickBooks alternative FAQ, small business bookkeeping help, AI accounting questions',
  alternates: {
    canonical: 'https://www.poofai.com/faq',
  },
  openGraph: {
    title: 'FAQ — Frequently Asked Questions | Poof AI Bookkeeping',
    description: 'Get answers to common questions about Poof AI bookkeeping — pricing, features, security, QuickBooks migration, and how AI automates your books.',
    url: 'https://www.poofai.com/faq',
    siteName: 'Poof',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Frequently Asked Questions | Poof AI Bookkeeping',
    description: 'Get answers to common questions about Poof AI bookkeeping — pricing, features, security, QuickBooks migration, and how AI automates your books.',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
