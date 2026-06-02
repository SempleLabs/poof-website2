import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '404: Page Not Found | Poof',
  description: 'The page you were looking for could not be found. Explore Poof — AI-powered, controller-reviewed bookkeeping.',
}

const popularLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/trades', label: 'For trades' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-white flex flex-col">
      <Header />

      <section className="relative flex-grow flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-display text-7xl sm:text-8xl font-extrabold text-gradient-gold mb-4 leading-none">
            404
          </div>
          <h1
            className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            This page couldn&apos;t be found
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
            The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <Link
              href="/"
              className="glow-border shimmer-hover inline-block bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-gold-700 shadow-gold-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-lg text-base hover:border-slate-900 hover:text-slate-900 transition-all duration-200"
            >
              Contact us
            </Link>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Popular pages
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {popularLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-slate-600 hover:text-gold-600 font-medium transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
