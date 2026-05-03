import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Righteous } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
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
  description: 'AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again. 72 features, 13 reports, $29/mo. 30-day free trial.',
  keywords: 'AI bookkeeping, automated accounting, small business bookkeeping, QuickBooks alternative, AI budgeting, cash flow forecasting, invoicing software, expense tracking, bank reconciliation, recurring invoices, bookkeeping that does itself',
  authors: [{ name: 'Poof' }],
  alternates: {
    canonical: 'https://poof.ai',
  },
  openGraph: {
    title: 'Poof — Bookkeeping That Does Itself',
    description: 'AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again. 72 features, 13 reports, $29/mo. 30-day free trial.',
    url: 'https://poof.ai',
    siteName: 'Poof',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poof — Bookkeeping That Does Itself',
    description: 'AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again. 72 features, 13 reports, $29/mo. 30-day free trial.',
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RBYZR71LFN" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RBYZR71LFN');
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${cabinet.variable} ${jetbrains.variable} ${righteous.variable}`}>
        {children}
        <Script id="x-pixel" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?
            s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}
            (window,document,'script');
            twq('config','rc7s1');
          `}
        </Script>
      </body>
    </html>
  )
}
