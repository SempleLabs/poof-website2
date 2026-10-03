import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job Margin Check — Which of Your Jobs Actually Made Money? | Poof',
  description:
    'Free for HVAC, plumbing and electrical shops: enter 3 to 10 recent jobs and see each one’s margin against your other jobs, which ones lost money, and why. No account, no bank statement.',
  alternates: { canonical: 'https://www.poofai.com/job-margin-check' },
  openGraph: {
    title: 'Which of your jobs actually made money?',
    description: 'Enter a few recent jobs. See each one’s margin, and which ones lost money. Free, no account.',
    url: 'https://www.poofai.com/job-margin-check',
    siteName: 'Poof',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Which of your jobs actually made money?', description: 'A free job margin check for trades shops.' },
}

export default function JobMarginCheckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
