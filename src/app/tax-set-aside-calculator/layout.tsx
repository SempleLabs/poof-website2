import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tax Set-Aside Calculator for 2026: How Much to Save | Poof',
  description:
    'For sole proprietors and single-member LLC owners: enter your 2026 profit and see how much to set aside for self-employment and income tax, and what to pay by January 15, 2027 under the safe-harbor rule. Free, no account.',
  alternates: { canonical: 'https://www.poofai.com/tax-set-aside-calculator' },
  openGraph: {
    images: ['/og-image.png'],
    title: 'How much should I set aside for taxes?',
    description: 'Enter your 2026 profit. See the share to set aside and your January 15 estimate. Free, no account.',
    url: 'https://www.poofai.com/tax-set-aside-calculator',
    siteName: 'Poof',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'How much should I set aside for taxes?', description: 'A free tax set-aside calculator for 2026.' },
}

export default function SetAsideCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
