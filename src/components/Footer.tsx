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
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="/poof-logo.png" alt="Poof logo" width={72} height={72} className="-mr-1" />
              <span className="poof-brand">Poof</span>
            </div>
            <p className="text-slate-500 mb-6">
              AI-powered bookkeeping for small businesses. Automate your finances with AI.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-slate-500 hover:text-gold-600 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-slate-500 hover:text-gold-600 transition-colors">Pricing</Link></li>
              <li><Link href="/how-it-works" className="text-slate-500 hover:text-gold-600 transition-colors">How it Works</Link></li>
              <li><Link href="/demo" className="text-slate-500 hover:text-gold-600 transition-colors">Request Demo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Industries</h3>
            <ul className="space-y-3">
              <li><Link href="/hvac" className="text-slate-500 hover:text-gold-600 transition-colors">HVAC</Link></li>
              <li><Link href="/plumbing" className="text-slate-500 hover:text-gold-600 transition-colors">Plumbing</Link></li>
              <li><Link href="/electrical" className="text-slate-500 hover:text-gold-600 transition-colors">Electrical</Link></li>
              <li><Link href="/service-businesses" className="text-slate-500 hover:text-gold-600 transition-colors">Service Businesses</Link></li>
              <li><Link href="/freelancers" className="text-slate-500 hover:text-gold-600 transition-colors">Freelancers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-slate-500 hover:text-gold-600 transition-colors">Blog</Link></li>
              <li><Link href="/resources" className="text-slate-500 hover:text-gold-600 transition-colors">Guides &amp; Templates</Link></li>
              <li><Link href="/poof-vs-quickbooks" className="text-slate-500 hover:text-gold-600 transition-colors">Poof vs QuickBooks</Link></li>
              <li><Link href="/faq" className="text-slate-500 hover:text-gold-600 transition-colors">FAQ</Link></li>
              <li><Link href="/security" className="text-slate-500 hover:text-gold-600 transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-500 hover:text-gold-600 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-gold-600 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-500 hover:text-gold-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-500 hover:text-gold-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-200 mt-12 pt-8 pb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Stay Updated</h3>
            <p className="text-slate-500 text-sm mb-4">Get bookkeeping tips and product updates delivered to your inbox.</p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === 'loading' || status === 'success'}
                className="flex-1 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500 disabled:opacity-50 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="px-6 py-2 bg-gold-600 text-white font-semibold rounded-lg hover:bg-gold-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

        <div className="border-t border-slate-200 pt-8">
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
