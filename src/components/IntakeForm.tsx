'use client'

import { useState } from 'react'
import AnimateOnScroll from './AnimateOnScroll'

interface IntakeFormProps {
  source?: string
}

const revenueRanges = [
  'Under $10K/mo',
  '$10K - $50K/mo',
  '$50K - $100K/mo',
  '$100K - $500K/mo',
  '$500K+/mo',
]

const accountingSoftware = [
  'QuickBooks',
  'Xero',
  'Wave',
  'None',
  'Other',
]

const businessTypes = [
  'Service-based',
  'Ecommerce / Retail',
  'Freelance / Consulting',
  'Restaurant / Food service',
  'Construction / Trades',
  'Real estate',
  'Healthcare / Wellness',
  'Other',
]

const platforms = [
  'Stripe',
  'PayPal',
  'Square',
  'Gusto',
  'Other',
]

export default function IntakeForm({ source = 'profit-analysis' }: IntakeFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      business_name: formData.get('business_name') as string,
      website: formData.get('website') ? `https://${(formData.get('website') as string).replace(/^https?:\/\//, '')}` : '',
      revenue_range: formData.get('revenue_range') as string,
      pain_point: formData.get('pain_point') as string,
      accounting_software: formData.get('accounting_software') as string,
      business_type: formData.get('business_type') as string,
      platforms: selectedPlatforms,
      source,
    }

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
      } else {
        const result = await response.json()
        setErrorMessage(result.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="apply" className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="scale-up">
            <div className="bg-white border border-slate-200 rounded-2xl p-12">
              <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">Application Received</h2>
              <p className="text-slate-500">
                We&apos;ll review your application and get back to you within 1-2 business days. Check your email for a confirmation.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="py-20 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-3">
            Apply for Your Analysis
          </h2>
          <p className="text-slate-500 text-center mb-10 max-w-lg mx-auto">
            Fill out the form below and we&apos;ll determine if your business is a good fit.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {/* Business name & Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="business_name" className="block text-sm font-medium text-slate-700 mb-1.5">Business Name</label>
                <input
                  type="text"
                  id="business_name"
                  name="business_name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500 transition-colors"
                  placeholder="Your business"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1.5">Website / Store URL</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className="flex-1 px-4 py-2.5 rounded-r-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500 transition-colors"
                    placeholder="www.yourstore.com"
                  />
                </div>
              </div>
            </div>

            {/* Revenue range & Accounting software */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="revenue_range" className="block text-sm font-medium text-slate-700 mb-1.5">Monthly Revenue</label>
                <select
                  id="revenue_range"
                  name="revenue_range"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500 transition-colors"
                >
                  <option value="">Select range</option>
                  {revenueRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="accounting_software" className="block text-sm font-medium text-slate-700 mb-1.5">Current Accounting Software</label>
                <select
                  id="accounting_software"
                  name="accounting_software"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500 transition-colors"
                >
                  <option value="">Select software</option>
                  {accountingSoftware.map(sw => (
                    <option key={sw} value={sw}>{sw}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Business type */}
            <div>
              <label htmlFor="business_type" className="block text-sm font-medium text-slate-700 mb-1.5">Business Type</label>
              <select
                id="business_type"
                name="business_type"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500 transition-colors"
              >
                <option value="">Select type</option>
                {businessTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Platforms */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Platforms Used</label>
              <div className="flex flex-wrap gap-2">
                {platforms.map(platform => (
                  <button
                    key={platform}
                    type="button"
                    onClick={() => togglePlatform(platform)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                      selectedPlatforms.includes(platform)
                        ? 'bg-gold-500 text-white border-gold-500'
                        : 'bg-white text-slate-600 border-slate-300 hover:border-gold-300'
                    }`}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>

            {/* Pain point */}
            <div>
              <label htmlFor="pain_point" className="block text-sm font-medium text-slate-700 mb-1.5">
                What&apos;s your biggest financial pain point right now?
              </label>
              <textarea
                id="pain_point"
                name="pain_point"
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-500/20 focus:border-gold-500 transition-colors resize-none"
                placeholder="e.g., I don't know my true margins, books are months behind..."
              />
            </div>

            {errorMessage && (
              <p className="text-sm text-rose-500">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full glow-border shimmer-hover bg-gold-500 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gold-400 shadow-gold-lg transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit Application'}
            </button>

            <p className="text-xs text-slate-400 text-center">
              Your information is 100% confidential. We&apos;ll never share your data.
            </p>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
