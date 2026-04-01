import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions | Poof AI Bookkeeping',
  description: 'Get answers to common questions about Poof AI bookkeeping — pricing, features, security, QuickBooks migration, tax preparation, and how AI automates your books. 30-day free trial, $29/mo.',
  keywords: 'Poof FAQ, AI bookkeeping questions, bookkeeping software FAQ, QuickBooks alternative FAQ, small business bookkeeping help, AI accounting questions',
  alternates: {
    canonical: 'https://poof.ai/faq',
  },
  openGraph: {
    title: 'FAQ — Frequently Asked Questions | Poof AI Bookkeeping',
    description: 'Get answers to common questions about Poof AI bookkeeping — pricing, features, security, QuickBooks migration, and how AI automates your books.',
    url: 'https://poof.ai/faq',
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
