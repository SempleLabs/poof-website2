'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const features = [
    'AI-powered transaction categorization',
    'Bank sync & auto-reconciliation',
    'Real-time financial reports',
    'Small business workflows',
    'Tax-ready books',
    'Mobile-first design',
    'Simple invoice tracking',
    'Multi-user access',
    'Secure bank-level encryption',
    'Email support',
    'Unlimited bank connections',
    'Unlimited transactions'
  ]

  const faqs = [
    {
      question: 'What happens during the free trial?',
      answer: 'You get full access to all features for 30 days. No credit card required. Connect your bank accounts, process receipts, and see how Poof transforms your bookkeeping.'
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Absolutely. We use bank-level 256-bit encryption and read-only access to your accounts. Your data is never shared and is protected by the same standards used by major banks.'
    },
    {
      question: 'Can my accountant access my books?',
      answer: 'Yes! You can invite your accountant or bookkeeper to access your books with read-only or full permissions. They can review, make adjustments, and export reports as needed.'
    },
    {
      question: 'What if I need to cancel?',
      answer: 'You can cancel anytime with one click. No contracts, no cancellation fees. You\'ll have access until the end of your billing period, and can export all your data.'
    },
    {
      question: 'How does Poof compare to QuickBooks?',
      answer: 'Poof is designed specifically for small businesses who want automated bookkeeping without the complexity. Our AI handles categorization automatically, while QuickBooks requires significant manual work.'
    },
    {
      question: 'What reports can I generate?',
      answer: 'Generate professional financial reports instantly - P&L statements, balance sheets, cash flow reports, and tax-ready summaries. Choose your date range and export in seconds.'
    },
    {
      question: 'Do you integrate with my existing tools?',
      answer: 'Yes. Poof integrates with most banks, credit cards, and popular business tools. We\'re constantly adding new integrations based on customer requests.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Simple, Honest
            <span className="hero-text"> Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            One plan with everything you need. Start with a 30-day free trial.
          </p>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-poof-success-50 text-poof-success-700 text-sm font-medium">
            <span className="mr-2">✅</span>
            30-day free trial • No credit card required
          </div>

          {/* Pricing Toggle */}
          <div className="mt-12 flex items-center justify-center">
            <div className="relative bg-gray-100 p-1 rounded-lg flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  !isAnnual
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                  isAnnual
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-poof-success-500 text-white text-xs px-2 py-1 rounded-full">
                  Save $69
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-8 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center border-2 border-poof-primary-200 shadow-magical relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-magical-gradient text-white px-6 py-2 rounded-full text-sm font-medium">
                LAUNCH SPECIAL
              </span>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Poof Professional</h2>
              <p className="text-gray-600 mb-6">Everything you need for automated bookkeeping</p>
              <div className="text-6xl font-bold text-gray-900 mb-2">
                ${isAnnual ? '279' : '29'}
                <span className="text-xl font-normal text-gray-600">
                  {isAnnual ? '/year' : '/month'}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                {isAnnual
                  ? 'Billed annually • Save $69 per year'
                  : 'Billed monthly • Cancel anytime'
                }
              </p>
            </div>

            <div className="text-left mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Everything included:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-poof-success-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/trial"
              className="magical-button text-lg w-full block text-center py-4 mb-4"
            >
              Start Free Trial →
            </Link>

            <p className="text-sm text-gray-500">
              No credit card required • Full access for 30 days
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Questions about our pricing?
            </p>
            <Link
              href="/demo"
              className="text-poof-primary-600 hover:text-poof-primary-700 font-medium"
            >
              Schedule a demo to learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Small Businesses Choose Poof
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Built by a controller who understands your daily bookkeeping challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-poof-primary-500 to-poof-primary-600 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Categorization</h3>
              <p className="text-gray-600">
                Our AI suggests categories for your transactions, making bookkeeping faster and more accurate. Review and approve with one click.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-poof-primary-500 to-poof-primary-600 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save Time Every Week</h3>
              <p className="text-gray-600">
                What used to take hours now takes minutes. Spend your time growing your business, not categorizing transactions.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-poof-primary-500 to-poof-primary-600 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,19L10.5,17.5C9.67,16.67 8.33,16.67 7.5,17.5C6.67,18.33 6.67,19.67 7.5,20.5C8.33,21.33 9.67,21.33 10.5,20.5L12,19M16.5,15L15,13.5C14.17,12.67 12.83,12.67 12,13.5C11.17,14.33 11.17,15.67 12,16.5C12.83,17.33 14.17,17.33 15,16.5L16.5,15Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Tax-Ready</h3>
              <p className="text-gray-600">
                Your books stay organized year-round with proper categorization and documentation. Tax season becomes stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Poof pricing and features.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Bookkeeping?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join small businesses who've made bookkeeping effortless with Poof. Start your free trial today.
          </p>
          <Link
            href="/trial"
            className="bg-white text-poof-primary-600 font-bold px-8 py-4 rounded-magical shadow-magical hover:shadow-magical-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
          >
            Start Free Trial →
          </Link>
          <p className="text-white/80 text-sm mt-4">
            No credit card required • Cancel anytime • 30-day free trial
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}