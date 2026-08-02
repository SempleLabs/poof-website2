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
  title: 'Poof — Managed Bookkeeping for HVAC, Plumbing & Electrical Shops',
  description: 'Poof Managed for Trades: AI agents do the books, a former controller reviews every monthly close. Per-job profit for shops doing $750K–$3M, from $1,200/mo. Self-serve AI bookkeeping for any small business at $79/mo.',
  keywords: 'hvac bookkeeping, plumbing bookkeeping, electrical contractor bookkeeping, bookkeeping for trades, job costing, per-job profitability, managed bookkeeping service, AI bookkeeping, small business bookkeeping, QuickBooks alternative, bookkeeping that does itself',
  authors: [{ name: 'Poof' }],
  metadataBase: new URL('https://www.poofai.com'),
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon-192x192.png',
  },
  openGraph: {
    title: 'Poof — Managed Bookkeeping for HVAC, Plumbing & Electrical Shops',
    description: 'AI agents do the books, a former controller reviews every monthly close. Per-job profit for shops doing $750K–$3M, from $1,200/mo. Self-serve AI bookkeeping at $79/mo.',
    url: 'https://www.poofai.com',
    siteName: 'Poof',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Poof — managed bookkeeping for trade contractors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poof — Managed Bookkeeping for HVAC, Plumbing & Electrical Shops',
    description: 'AI agents do the books, a former controller reviews every monthly close. Per-job profit for shops doing $750K–$3M, from $1,200/mo. Self-serve AI bookkeeping at $79/mo.',
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-gold-700 focus:shadow-lg focus:ring-2 focus:ring-gold-600"
        >
          Skip to content
        </a>
        {children}
        <ConsentBanner />
      </body>
    </html>
  )
}
