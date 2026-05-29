import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Righteous } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'
import { getOrganizationSchema } from '@/lib/jsonLd'
import ConsentBanner from '@/components/ConsentBanner'

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
  description: 'AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again. 69 features, 13 reports, $29/mo. 30-day free trial.',
  keywords: 'AI bookkeeping, automated accounting, small business bookkeeping, QuickBooks alternative, AI budgeting, cash flow forecasting, invoicing software, expense tracking, bank reconciliation, recurring invoices, bookkeeping that does itself',
  authors: [{ name: 'Poof' }],
  metadataBase: new URL('https://www.poofai.com'),
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon-192x192.png',
  },
  openGraph: {
    title: 'Poof — Bookkeeping That Does Itself',
    description: 'AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again. 69 features, 13 reports, $29/mo. 30-day free trial.',
    url: 'https://www.poofai.com',
    siteName: 'Poof',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Poof — AI bookkeeping that does itself',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poof — Bookkeeping That Does Itself',
    description: 'AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again. 69 features, 13 reports, $29/mo. 30-day free trial.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#7c3aed',
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
        {/* Google Consent Mode v2 — deny tracking storage until the visitor opts in */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RBYZR71LFN" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'G-RBYZR71LFN', { anonymize_ip: true });
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${cabinet.variable} ${jetbrains.variable} ${righteous.variable}`}>
        {children}
        <ConsentBanner />
      </body>
    </html>
  )
}
