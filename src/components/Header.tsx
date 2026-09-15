'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'
import PoofWordmark from './PoofWordmark'
import BookCallButton from './BookCallButton'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/trades', label: 'For Trades' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/how-it-works', label: 'How it Works' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About' },
  ]

  return (
    <>
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-md border-b border-rule'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <PoofWordmark size={28} />

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-underline font-medium transition-colors ${
                  scrolled ? 'text-slate-700 hover:text-ledger-700' : 'text-slate-700 hover:text-ledger-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="https://app.poofai.com/login"
              className={`font-semibold text-sm transition-colors ${
                scrolled ? 'text-slate-700 hover:text-ledger-700' : 'text-slate-700 hover:text-ledger-700'
              }`}
            >
              Log in
            </Link>
            <BookCallButton className="border-[1.5px] border-ink text-ink px-4 py-2 rounded-lg font-semibold text-sm hover:bg-paper-2 transition-colors duration-200">
              Book a call
            </BookCallButton>
            <Link
              href="https://app.poofai.com/register"
              onClick={() => trackEvent('start_trial_click', { location: 'header' })}
              className="bg-ledger-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-ledger-600 transition-colors duration-200"
            >
              Start free trial
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className={`md:hidden transition-colors ${
              scrolled ? 'text-slate-700' : 'text-slate-700'
            }`}
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
        <div className="md:hidden fixed inset-0 bg-ink z-[100] flex flex-col items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl font-semibold hover:text-ledger-400 transition-colors"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-slate-600 flex flex-col items-center space-y-4 w-full">
              <Link href="https://app.poofai.com/login" onClick={() => setIsMenuOpen(false)} className="text-slate-300 text-xl font-semibold hover:text-white transition-colors">
                Log in
              </Link>
              <Link href="/demo" onClick={() => setIsMenuOpen(false)} className="border-[1.5px] border-paper text-paper px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Book a call
              </Link>
              <Link
                href="https://app.poofai.com/register"
                onClick={() => { trackEvent('start_trial_click', { location: 'header_mobile' }); setIsMenuOpen(false) }}
                className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Start free trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
