'use client'

import { useState, FormEvent } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
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
        setMessage(data.message || 'Successfully subscribed!')
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
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
          Stay Updated with Bookkeeping Tips
        </h2>
        <p className="text-xl text-slate-600 mb-8">
          Get weekly insights, tips, and resources delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="bg-gold-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
            </button>
          </div>

          {message && (
            <p className={`text-sm mt-4 ${status === 'error' ? 'text-rose-400' : 'text-teal-400'}`}>
              {message}
            </p>
          )}

          {status !== 'success' && (
            <p className="text-slate-500 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
