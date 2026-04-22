import type { Metadata } from 'next'
import { getSpendScoreToolSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'Free Spend Score — Upload Your Bank Statement & Get Your AI Score | Poof',
  description: 'Upload a bank statement and get your free Spend Score. AI categorizes your transactions, scores your spending habits, and generates a personalized report with infographic — in under 60 seconds.',
  keywords: 'spend score, free spending report, AI bank statement analysis, spending analysis, transaction categorization, spending score, Poof AI',
  alternates: {
    canonical: 'https://poof.ai/spend-score',
  },
  openGraph: {
    title: 'Get Your Free Spend Score — Powered by AI',
    description: 'Upload a bank statement and get your free AI Spend Score. See your spending categorized, scored, and analyzed in under 60 seconds.',
    url: 'https://poof.ai/spend-score',
    siteName: 'Poof',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Your Free Spend Score — Powered by AI',
    description: 'Upload a bank statement and get your free AI Spend Score in under 60 seconds.',
  },
}

export default function SpendScoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpendScoreToolSchema()) }}
      />
      {children}
    </>
  )
}
