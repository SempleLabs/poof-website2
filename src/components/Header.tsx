'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/how-it-works', label: 'How it Works' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src="/poof-logo.png" alt="Poof logo" width={72} height={72} className="-mr-2" />
            <span className="poof-brand">Poof</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-underline font-medium transition-colors ${
                  scrolled ? 'text-slate-700 hover:text-gold-600' : 'text-slate-700 hover:text-gold-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/demo"
              className={`font-semibold transition-colors ${
                scrolled ? 'text-slate-700 hover:text-gold-600' : 'text-slate-700 hover:text-gold-500'
              }`}
            >
              Request Demo
            </Link>
            <Link
              href="https://app.poofai.com/login"
              className="bg-gold-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gold-400 shadow-gold transition-all duration-200 shimmer-hover"
            >
              Sign In
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Mobile Menu - full screen overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-900/98 backdrop-blur-lg z-[60] flex flex-col items-center justify-center">
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
                className="text-white text-2xl font-semibold hover:text-gold-400 transition-colors"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-slate-600 flex flex-col items-center space-y-4 w-full">
              <Link href="/demo" onClick={() => setIsMenuOpen(false)} className="text-gold-400 text-xl font-semibold">
                Request Demo
              </Link>
              <Link
                href="https://app.poofai.com/login"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
