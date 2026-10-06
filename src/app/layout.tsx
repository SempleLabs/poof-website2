import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { getOrganizationSchema } from '@/lib/jsonLd'
import ConsentBanner from '@/components/ConsentBanner'

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
  display: 'swap',
})
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-bricolage',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Poof — The back office, run by AI. Signed by you.',
  description: 'Poof runs the back office: the books, the invoices, the cash plan, the month-end close, and for shops the phone and the field. Every AI write waits on a card with its evidence. $79 a month, every feature.',
  keywords: 'AI back office, AI bookkeeping software, month-end close software, job costing, per-job profitability, AI receptionist for shops, approvals inbox, small business accounting software, QuickBooks alternative',
  authors: [{ name: 'Poof' }],
  metadataBase: new URL('https://www.poofai.com'),
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/poof-mark.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Poof — The work disappears. The evidence doesn\'t.',
    description: 'Poof runs the back office: the books, the invoices, the cash plan, the close, and for shops the phone and the field. Every AI write waits on a card with its evidence. $79/mo, every feature.',
    url: 'https://www.poofai.com',
    siteName: 'Poof',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'poof. The work disappears. The evidence doesn\'t.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poof — The work disappears. The evidence doesn\'t.',
    description: 'AI bookkeeping for the person who signs the close. Every write waits on a card with its evidence. $79/mo, every feature.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#EEF2EA',
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
            window.dataLayer = window.dataLayer || [];            function gtag(){dataLayer.push(arguments);}            window.gtag = gtag;            gtag('consent', 'default', {              ad_storage: 'denied',              ad_user_data: 'denied',              ad_personalization: 'denied',              analytics_storage: 'denied',              wait_for_update: 500            });          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RBYZR71LFN" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());            gtag('config', 'G-RBYZR71LFN', { anonymize_ip: true });          `}
        </Script>
      </head>
      <body className={`${plex.className} ${plex.variable} ${plexMono.variable} ${bricolage.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-ledger-600 focus:shadow-lg focus:ring-2 focus:ring-ledger-500"
        >
          Skip to content
        </a>
        {children}
        <ConsentBanner />
      </body>
    </html>
  )
}
