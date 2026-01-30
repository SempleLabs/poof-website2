'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks for subscribing!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <footer className="bg-midnight-950 border-t border-midnight-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="/poof-logo.png" alt="Poof logo" width={52} height={52} className="-mr-1" />
              <span className="poof-brand">Poof</span>
            </div>
            <p className="text-slate-500 mb-6">
              AI-powered bookkeeping for small businesses. Automate your finances with AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-gold-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-gold-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-slate-500 hover:text-gold-400 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-slate-500 hover:text-gold-400 transition-colors">Pricing</Link></li>
              <li><Link href="/how-it-works" className="text-slate-500 hover:text-gold-400 transition-colors">How it Works</Link></li>
              <li><Link href="/demo" className="text-slate-500 hover:text-gold-400 transition-colors">Request Demo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/resources" className="text-slate-500 hover:text-gold-400 transition-colors">Blog & Guides</Link></li>
              <li><Link href="/poof-vs-quickbooks" className="text-slate-500 hover:text-gold-400 transition-colors">Poof vs QuickBooks</Link></li>
              <li><Link href="/security" className="text-slate-500 hover:text-gold-400 transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-500 hover:text-gold-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-midnight-600 mt-12 pt-8 pb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-slate-500 text-sm mb-4">Get bookkeeping tips and product updates delivered to your inbox.</p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === 'loading' || status === 'success'}
                className="flex-1 px-4 py-2 rounded-lg bg-midnight-800 border border-midnight-600 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500 disabled:opacity-50 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="px-6 py-2 bg-gold-500 text-midnight-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>

            {message && (
              <p className={`text-sm mt-2 ${status === 'error' ? 'text-rose-400' : 'text-teal-400'}`}>
                {message}
              </p>
            )}

            <p className="text-slate-600 text-xs mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="border-t border-midnight-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-600">
              © 2026 Poof. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
