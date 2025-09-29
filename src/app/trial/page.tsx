'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TrialPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    businessType: '',
    currentBookkeeping: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-24 pb-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-poof-success-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to <span className="hero-text font-righteous">Poof!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your 30-day free trial is ready to start. Check your email for login instructions and next steps.
              </p>
            </div>

            <div className="glass-card p-8 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What happens next?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-poof-primary-100 text-poof-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Check your email</div>
                    <div className="text-sm text-gray-600">We've sent login instructions to {formData.email}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-poof-primary-100 text-poof-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Connect your bank accounts</div>
                    <div className="text-sm text-gray-600">Secure setup takes just 2-3 minutes</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-poof-primary-100 text-poof-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Watch the magic happen</div>
                    <div className="text-sm text-gray-600">Our AI starts categorizing your transactions automatically</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Need help getting started?
              </p>
              <a
                href="mailto:support@poof.ai"
                className="text-poof-primary-600 hover:text-poof-primary-700 font-medium"
              >
                Contact our support team →
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Start Your <span className="hero-text">Free Trial</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get 30 days of magical bookkeeping automation. No credit card required.
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-600 mb-12">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-poof-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-poof-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              5-minute setup
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-poof-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-600 focus:border-transparent transition-all"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-600 focus:border-transparent transition-all"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-600 focus:border-transparent transition-all"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-600 focus:border-transparent transition-all"
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-600 focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-600 focus:border-transparent transition-all"
                >
                  <option value="">Select your business type</option>
                  <option value="consulting">Consulting</option>
                  <option value="retail">Retail</option>
                  <option value="restaurant">Restaurant/Food Service</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="professional">Professional Services</option>
                  <option value="construction">Construction</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentBookkeeping" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Bookkeeping Method
                </label>
                <select
                  id="currentBookkeeping"
                  name="currentBookkeeping"
                  value={formData.currentBookkeeping}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-600 focus:border-transparent transition-all"
                >
                  <option value="">Select current method</option>
                  <option value="manual">Manual/Spreadsheets</option>
                  <option value="quickbooks">QuickBooks</option>
                  <option value="xero">Xero</option>
                  <option value="bookkeeper">Professional Bookkeeper</option>
                  <option value="other">Other Software</option>
                  <option value="none">No Current System</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full magical-button text-lg py-4 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Setting up your trial...
                  </div>
                ) : (
                  'Start My Free Trial →'
                )}
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              By starting your trial, you agree to our{' '}
              <a href="/terms" className="text-poof-primary-600 hover:text-poof-primary-700">Terms of Service</a>{' '}
              and{' '}
              <a href="/privacy" className="text-poof-primary-600 hover:text-poof-primary-700">Privacy Policy</a>
            </div>
          </form>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by 2,000+ Small Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-medium text-gray-900">Bank-Level Security</div>
              <div className="text-sm text-gray-600">SOC 2 certified with 256-bit encryption</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-medium text-gray-900">5-Minute Setup</div>
              <div className="text-sm text-gray-600">Get started in minutes, not hours</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">💡</div>
              <div className="font-medium text-gray-900">Expert Support</div>
              <div className="text-sm text-gray-600">Our team is here to help you succeed</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}