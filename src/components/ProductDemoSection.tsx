'use client'

import ProductCarousel from './ProductCarousel'
import Link from 'next/link'

export default function ProductDemoSection() {
  // Define your product screenshots here
  // Replace these placeholder images with your actual screenshot paths
  const slides = [
    {
      image: '/screenshots/dashboard.png',
      title: 'Dashboard Overview',
      description: 'Get a complete view of your financial health at a glance. Track income, expenses, and key metrics in real-time.',
      alt: 'Poof AI Dashboard showing financial overview'
    },
    {
      image: '/screenshots/transactions.png',
      title: 'AI-Powered Transaction Categorization',
      description: 'Our AI automatically categorizes your transactions with impressive accuracy. Review and approve with a single click.',
      alt: 'Transaction categorization interface with AI suggestions'
    },
    {
      image: '/screenshots/bank-sync.png',
      title: 'Seamless Bank Sync',
      description: 'Connect your bank accounts and credit cards securely. Transactions sync automatically, keeping your books up-to-date.',
      alt: 'Bank account connection and sync interface'
    },
    {
      image: '/screenshots/reports.png',
      title: 'Professional Financial Reports',
      description: 'Generate P&L statements, balance sheets, and cash flow reports instantly. Export to share with your accountant.',
      alt: 'Financial reports dashboard showing P&L and balance sheet'
    },
    {
      image: '/screenshots/receipts.png',
      title: 'Smart Receipt Management',
      description: 'Snap photos of receipts or forward them via email. AI extracts details and matches them to transactions automatically.',
      alt: 'Receipt upload and management interface'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            See <span className="hero-text">Poof</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how Poof transforms your bookkeeping from hours of manual work to magical automation in just minutes.
          </p>
        </div>

        {/* Product Screenshots Carousel */}
        <div className="max-w-5xl mx-auto mb-16">
          <ProductCarousel slides={slides} />
        </div>

        {/* Key Features Highlighted */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-poof-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-poof-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Process transactions in seconds, not hours</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-poof-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-poof-secondary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600">Smart categorization that learns your business</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-poof-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-poof-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Exceptionally Accurate</h3>
            <p className="text-gray-600">Reliable results you can trust</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Want a personalized walkthrough?{' '}
            <Link href="/demo" className="text-poof-primary-600 hover:text-poof-primary-700 font-medium">
              Schedule a demo →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}