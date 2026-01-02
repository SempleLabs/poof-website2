'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-poof-primary-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/poof-logo.png"
                alt="Poof Logo"
                className="w-14 h-14 rounded-lg"
              />
              <span className="poof-brand">Poof</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-poof-primary-600 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-poof-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-poof-primary-600 transition-colors">
              How it Works
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-poof-primary-600 transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-poof-primary-600 transition-colors">
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/demo"
              className="text-poof-primary-600 hover:text-poof-primary-700 font-medium transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="https://app.poofai.com/login"
              className="magical-button"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-poof-primary-600 transition-colors"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/features" className="text-gray-700 hover:text-poof-primary-600 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-poof-primary-600 transition-colors">
                Pricing
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-poof-primary-600 transition-colors">
                How it Works
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-poof-primary-600 transition-colors">
                Resources
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-poof-primary-600 transition-colors">
                About
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link href="/demo" className="block mb-3 text-poof-primary-600 font-medium">
                  Request Demo
                </Link>
                <Link href="https://app.poofai.com/login" className="magical-button block text-center">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}