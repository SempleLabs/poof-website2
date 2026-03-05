import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Righteous } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { getOrganizationSchema } from '@/lib/jsonLd'

const inter = Inter({ subsets: ['latin'] })
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})
const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-righteous',
  display: 'swap',
})
const cabinet = localFont({
  src: [
    { path: '../fonts/CabinetGrotesk-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/CabinetGrotesk-Extrabold.woff2', weight: '800', style: 'normal' },
    { path: '../fonts/CabinetGrotesk-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-cabinet',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Poof — Bookkeeping That Does Itself | AI Bookkeeping for Small Business',
  description: 'AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again. 60 features, 13 reports, $29/mo. 30-day free trial.',
  keywords: 'AI bookkeeping, automated accounting, small business bookkeeping, QuickBooks alternative, AI budgeting, cash flow forecasting, invoicing software, expense tracking, bank reconciliation, recurring invoices, bookkeeping that does itself',
  authors: [{ name: 'Poof' }],
  alternates: {
    canonical: 'https://poof.ai',
  },
  openGraph: {
    title: 'Poof — Bookkeeping That Does Itself',
    description: 'AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again. 60 features, 13 reports, $29/mo. 30-day free trial.',
    url: 'https://poof.ai',
    siteName: 'Poof',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poof — Bookkeeping That Does Itself',
    description: 'AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again. 60 features, 13 reports, $29/mo. 30-day free trial.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
        />
      </head>
      <body className={`${inter.className} ${cabinet.variable} ${jetbrains.variable} ${righteous.variable}`}>{children}</body>
    </html>
  )
}
