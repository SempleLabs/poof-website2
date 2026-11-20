'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'
import PoofWordmark from './PoofWordmark'

// Header nav approved 2026-11-19: Product · Who it's for ▾ · Pricing · Resources.
// "A bookkeeper" lives on the Pricing page (Done for you) and the hero button; About and
// "Bookkeeping service" are in the footer. The audience pages match the hero's "You…" links.
const AUDIENCES: [string, string][] = [
  ['/trades', 'Service shops'],
  ['/av', 'AV integrators'],
  ['/1099s', 'Paying contractors'],
  ['/close', 'Bookkeepers and firms'],
  ['/poof-vs-quickbooks', 'Leaving QuickBooks'],
]
const LIVE_DEMO = 'https://app.poofai.com/demo'

const linkCls = 'nav-link-underline font-medium transition-colors text-slate-700 hover:text-ledger-700'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [whoOpen, setWhoOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const whoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the dropdown on an outside tap/click or Escape.
  useEffect(() => {
    if (!whoOpen) return
    const onDown = (e: PointerEvent) => { if (whoRef.current && !whoRef.current.contains(e.target as Node)) setWhoOpen(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setWhoOpen(false) }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey) }
  }, [whoOpen])

  return (
    <>
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/95 backdrop-blur-md border-b border-rule' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <PoofWordmark size={28} />

          <nav className="hidden md:flex items-center space-x-8" aria-label="Main">
            <Link href="/features" className={linkCls}>Product</Link>

            <div className="relative" ref={whoRef}>
              <button
                type="button"
                onClick={() => setWhoOpen(!whoOpen)}
                aria-expanded={whoOpen}
                aria-haspopup="true"
                className={`${linkCls} inline-flex items-center gap-1`}
              >
                Who it&apos;s for
                <svg className={`w-3.5 h-3.5 transition-transform ${whoOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              {whoOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-60 bg-white border border-rule rounded-lg shadow-[0_12px_30px_rgba(18,33,26,0.12)] py-2">
                  {AUDIENCES.map(([href, label]) => (
                    <Link key={href} href={href} onClick={() => setWhoOpen(false)} className="block px-4 py-2 text-[15px] text-slate-700 hover:bg-paper-2 hover:text-ledger-700">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className={linkCls}>Pricing</Link>
            <Link href="/resources" className={linkCls}>Resources</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Link href="https://app.poofai.com/login" className="font-semibold text-sm transition-colors text-slate-700 hover:text-ledger-700">
              Log in
            </Link>
            <Link
              href="https://app.poofai.com/register"
              onClick={() => trackEvent('start_trial_click', { location: 'header' })}
              className="bg-ledger-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-ledger-600 transition-colors duration-200"
            >
              Start free
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="md:hidden transition-colors text-slate-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Menu - full screen overlay (rendered outside <header> so the
          scrolled header's backdrop-blur doesn't become its containing block
          and collapse the fixed overlay to the header's height) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-ink z-[100] flex flex-col items-center justify-center overflow-y-auto py-16">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-5">
            <Link href="/features" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-semibold hover:text-ledger-400 transition-colors">Product</Link>

            <button
              type="button"
              onClick={() => setWhoOpen(!whoOpen)}
              aria-expanded={whoOpen}
              className="text-white text-2xl font-semibold hover:text-ledger-400 transition-colors inline-flex items-center gap-2"
            >
              Who it&apos;s for
              <svg className={`w-5 h-5 transition-transform ${whoOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {whoOpen && (
              <div className="flex flex-col items-center space-y-3 -mt-1">
                {AUDIENCES.map(([href, label]) => (
                  <Link key={href} href={href} onClick={() => { setIsMenuOpen(false); setWhoOpen(false) }} className="text-slate-300 text-lg hover:text-white transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-semibold hover:text-ledger-400 transition-colors">Pricing</Link>
            <Link href="/resources" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-semibold hover:text-ledger-400 transition-colors">Resources</Link>

            <div className="pt-6 border-t border-slate-600 flex flex-col items-center space-y-4 w-full">
              <Link href="https://app.poofai.com/login" onClick={() => setIsMenuOpen(false)} className="text-slate-300 text-xl font-semibold hover:text-white transition-colors">
                Log in
              </Link>
              <Link href={LIVE_DEMO} onClick={() => setIsMenuOpen(false)} className="border-[1.5px] border-paper text-paper px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Open a live demo
              </Link>
              <Link
                href="https://app.poofai.com/register"
                onClick={() => { trackEvent('start_trial_click', { location: 'header_mobile' }); setIsMenuOpen(false) }}
                className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Start free
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
