import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free 1099 Checker for 2026 — Who Gets a 1099-NEC? | Poof',
  description:
    'List who you paid in 2026 and see who gets a 1099-NEC or 1099-MISC at the new $2,000 line, who doesn’t and why, which W-9s are missing, and the February 1, 2027 deadline. Free, no account.',
  alternates: { canonical: 'https://www.poofai.com/1099-checker' },
  openGraph: {
    images: ['/og-image.png'],
    title: 'Do I owe these contractors a 1099?',
    description: 'List who you paid in 2026. See who gets a 1099 at the $2,000 line, and which W-9s are missing. Free, no account.',
    url: 'https://www.poofai.com/1099-checker',
    siteName: 'Poof',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Do I owe these contractors a 1099?', description: 'A free 1099 checker for 2026 payments.' },
}

export default function Checker1099Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
