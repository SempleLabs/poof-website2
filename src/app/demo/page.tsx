'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    preferredTime: '',
    timeZone: '',
    businessType: '',
    currentChallenges: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xkgqjrba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('There was an error submitting your demo request. Please try again.')
      }
    } catch (error) {
      alert('There was an error submitting your demo request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
                Demo <span className="hero-text">Scheduled!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We've received your demo request and will be in touch within 24 hours to schedule your personalized demo.
              </p>
            </div>

            <div className="glass-card p-8 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What to expect:</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-poof-primary-100 text-poof-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Personalized walkthrough</div>
                    <div className="text-sm text-gray-600">See how Poof works specifically for your business type</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-poof-primary-100 text-poof-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Live AI demonstration</div>
                    <div className="text-sm text-gray-600">Watch our AI categorize real transactions in real-time</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-poof-primary-100 text-poof-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Q&A session</div>
                    <div className="text-sm text-gray-600">Get answers to your specific questions and concerns</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Questions before your demo?
              </p>
              <Link
                href="/contact"
                className="text-poof-primary-600 hover:text-poof-primary-700 font-medium"
              >
                Contact us →
              </Link>
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
      <section className="pt-24 pb-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            See the <span className="hero-text">Magic</span> in Action
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get a personalized demo of Poof and see how it can transform your bookkeeping.
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-poof-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              30-minute demo
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-poof-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Personalized for your business
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-poof-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No pressure
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 bg-white">
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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-600 focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Demo Time *
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-600 focus:border-transparent transition-all"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9am - 12pm)</option>
                  <option value="afternoon">Afternoon (1pm - 5pm)</option>
                  <option value="evening">Evening (6pm - 8pm)</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeZone" className="block text-sm font-medium text-gray-700 mb-2">
                  Time Zone *
                </label>
                <select
                  id="timeZone"
                  name="timeZone"
                  required
                  value={formData.timeZone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-600 focus:border-transparent transition-all"
                >
                  <option value="">Select your time zone</option>
                  <option value="ET">Eastern Time (ET)</option>
                  <option value="CT">Central Time (CT)</option>
                  <option value="MT">Mountain Time (MT)</option>
                  <option value="PT">Pacific Time (PT)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
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

              <div className="md:col-span-2">
                <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Bookkeeping Challenges
                </label>
                <textarea
                  id="currentChallenges"
                  name="currentChallenges"
                  rows={4}
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-magical focus:ring-2 focus:ring-poof-primary-600 focus:border-transparent transition-all"
                  placeholder="Tell us about your current bookkeeping challenges so we can personalize the demo..."
                />
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
                    Scheduling your demo...
                  </div>
                ) : (
                  'Schedule My Demo →'
                )}
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              We respect your privacy. Your information will only be used to schedule and conduct your demo.
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}