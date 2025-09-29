import type { Metadata } from 'next'
import { Inter, Righteous } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-righteous'
})

export const metadata: Metadata = {
  title: 'Poof - Magical Bookkeeping for Small Business',
  description: 'Automate your bookkeeping with AI. Poof makes financial management magical for small businesses. Start your free trial today.',
  keywords: 'AI bookkeeping, automated accounting, small business bookkeeping, QuickBooks alternative, AI financial management',
  authors: [{ name: 'Poof' }],
  openGraph: {
    title: 'Poof - Magical Bookkeeping for Small Business',
    description: 'Automate your bookkeeping with AI. Poof makes financial management magical for small businesses.',
    url: 'https://poof.ai',
    siteName: 'Poof',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poof - Magical Bookkeeping for Small Business',
    description: 'Automate your bookkeeping with AI. Poof makes financial management magical for small businesses.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} ${righteous.variable}`}>{children}</body>
    </html>
  )
}