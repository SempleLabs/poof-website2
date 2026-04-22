'use client'

import { useState } from 'react'

interface EmailGateFormProps {
  onSubmit: (email: string) => void
  isLoading?: boolean
}

export default function EmailGateForm({ onSubmit, isLoading }: EmailGateFormProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    onSubmit(trimmed)
  }

  return (
    <div className="max-w-lg mx-auto text-center py-8">
      <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>

      <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
        Your Spend Score is ready
      </h3>
      <p className="text-slate-600 mb-6">
        Enter your email to unlock your full Spend Score, detailed report, and AI-generated infographic. We&apos;ll also send you a copy.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20 transition-all text-center sm:text-left"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 shadow-gold transition-all duration-200 shimmer-hover whitespace-nowrap ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Generating...
            </span>
          ) : (
            'Unlock My Report'
          )}
        </button>
      </form>

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}

      <p className="mt-4 text-xs text-slate-400">
        No spam, ever. We respect your privacy.
      </p>
    </div>
  )
}
