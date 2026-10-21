'use client'

import { useState } from 'react'
import Link from 'next/link'
import PoofWordmark from './PoofWordmark'

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

  const col = 'font-mono text-[11.5px] tracking-[0.08em] uppercase text-ink mb-4'
  const link = 'text-muted hover:text-ledger-700 transition-colors'
  const columns: { title: string; links: [string, string][] }[] = [
    { title: 'Product', links: [['/close', 'The close'], ['/taxes', 'Taxes'], ['/autopilot', 'Autopilot'], ['/trades', 'Poof for shops'], ['/features', 'Features'], ['/pricing', 'Pricing'], ['/how-it-works', 'How it Works'], ['/demo', 'Book a demo']] },
    { title: 'Resources', links: [['/resources', 'Guides & Templates'], ['/blog', 'Blog'], ['/poof-vs-quickbooks', 'Poof vs QuickBooks'], ['/faq', 'FAQ'], ['/security', 'Security']] },
    { title: 'Company', links: [['/about', 'About'], ['/contact', 'Contact'], ['/support', 'Support'], ['/privacy', 'Privacy Policy'], ['/terms', 'Terms of Service']] },
  ]

  return (
    <footer className="bg-paper-2 border-t border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-8 gap-y-10">
          {/* brand + newsletter */}
          <div className="col-span-2 lg:col-span-1 max-w-[380px]">
            <PoofWordmark size={26} href={null} />
            <p className="text-muted mt-4">The back office, run by AI. Signed by you.</p>

            <form onSubmit={handleSubmit} className="mt-6" aria-labelledby="footer-newsletter">
              <p id="footer-newsletter" className="text-sm font-semibold text-ink mb-2">Bookkeeping and tax notes from a former controller</p>
              <div className="flex gap-2">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  disabled={status === 'loading' || status === 'success'}
                  className="min-w-0 flex-1 px-3 py-2 text-sm rounded-lg bg-white border border-rule text-ink placeholder-slate-400 focus:outline-none focus:border-ledger-500 disabled:opacity-50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="px-4 py-2 text-sm bg-ledger-500 text-white font-semibold rounded-lg hover:bg-ledger-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed' : 'Subscribe'}
                </button>
              </div>
              <p className={`text-xs mt-2 ${status === 'error' ? 'text-audit' : 'text-muted'}`} aria-live="polite">
                {message || 'No spam. Unsubscribe anytime.'}
              </p>
            </form>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className={col}>{c.title}</h3>
              <ul className="space-y-2.5 text-[15px]">
                {c.links.map(([href, label]) => (
                  <li key={href}><Link href={href} className={link}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-rule mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-muted">
          <p>© 2026 Semple Labs LLC. Poof is a product of Semple Labs LLC.</p>
          <a href="mailto:support@poofai.com" className={link}>support@poofai.com</a>
        </div>
      </div>
    </footer>
  )
}
