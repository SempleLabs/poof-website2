import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works - AI Bookkeeping Process | Poof',
  description: 'Learn how Poof automates your bookkeeping in 3 simple steps. Connect banks, let AI categorize, get reports. See the magic in action.',
  keywords: 'how AI bookkeeping works, automated bookkeeping process, Poof setup, AI categorization process',
}

export default function HowItWorksPage() {
  const steps = [
    {
      step: 1,
      title: "Connect Your Accounts",
      description: "Securely link your bank accounts, credit cards, and payment processors in under 5 minutes.",
      details: [
        "Bank-level 256-bit encryption",
        "Support for 10,000+ financial institutions",
        "One-time setup with automatic syncing",
        "Connect multiple accounts and cards"
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.5,1L2,6V8H21V6M16,10V17H19V19H5V17H8V10H10V17H14V10M2,22H21V20H2V22Z"/>
        </svg>
      ),
      timeframe: "2-5 minutes"
    },
    {
      step: 2,
      title: "AI Learns Your Business",
      description: "Our AI analyzes your transaction patterns and business type to categorize everything automatically.",
      details: [
        "Machine learning adapts to your business",
        "exceptional categorization accuracy",
        "Learns from your corrections",
        "Handles complex business transactions"
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 6c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/>
        </svg>
      ),
      timeframe: "Continuous learning"
    },
    {
      step: 3,
      title: "Get Real-Time Insights",
      description: "Access your financial reports instantly. Your books are always up-to-date and tax-ready.",
      details: [
        "Real-time P&L statements",
        "Live cash flow tracking",
        "Tax-ready categorization",
        "Mobile and desktop access"
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      timeframe: "Instant updates"
    }
  ]

  const features = [
    {
      title: "Smart Receipt Processing",
      description: "Take a photo of any receipt and watch our AI extract all the details automatically.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,2A1,1 0 0,0 8,3V4H4A1,1 0 0,0 3,5V19A1,1 0 0,0 4,20H20A1,1 0 0,0 21,19V5A1,1 0 0,0 20,4H16V3A1,1 0 0,0 15,2H9M6,6H18V18H6V6M8,8V16H16V8H8M10,10H14V14H10V10Z"/>
        </svg>
      ),
      process: [
        "Snap a photo with your phone",
        "AI reads and extracts data",
        "Automatically categorizes expense",
        "Stores digitally in the cloud"
      ]
    },
    {
      title: "Bank Reconciliation",
      description: "Your accounts reconcile automatically as transactions sync from your bank.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
        </svg>
      ),
      process: [
        "Transactions sync from bank",
        "AI matches and categorizes",
        "Automatic reconciliation",
        "Flag any discrepancies"
      ]
    },
    {
      title: "Financial Reporting",
      description: "Generate professional financial reports with a single click, anytime you need them.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      process: [
        "Choose your date range",
        "Select report type needed",
        "Generate in seconds",
        "Export or share easily"
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            How <span className="hero-text">Poof</span> Works
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your bookkeeping in 3 simple steps. No accounting degree required -
            just connect your accounts and let our AI handle the rest.
          </p>
          <Link
            href="/trial"
            className="magical-button text-lg"
          >
            Start Your Free Trial →
          </Link>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              From setup to insights in under 10 minutes
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-poof-primary-200 via-poof-primary-400 to-poof-primary-200"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-poof-primary-500 to-poof-secondary-500"></div>

                    <div className="text-center">
                      {/* Step Number */}
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-poof-primary-500 to-poof-primary-600 text-white rounded-full text-2xl font-bold mb-6 relative z-10 group-hover:scale-105 transition-transform duration-300">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 bg-poof-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-poof-primary-600">
                        {step.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {step.description}
                      </p>

                      {/* Timeframe */}
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-poof-success-50 text-poof-success-700 text-sm font-medium mb-6">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                        </svg>
                        {step.timeframe}
                      </div>
                    </div>

                    {/* Details */}
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-poof-success-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              See the Magic in Action
            </h2>
            <p className="text-xl text-gray-600">
              Explore how our key features work behind the scenes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-poof-primary-500 to-poof-secondary-500"></div>

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-poof-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-poof-primary-600 group-hover:scale-105 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {feature.process.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-poof-primary-500 to-poof-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                        {stepIndex + 1}
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Start Your Automated Bookkeeping Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of small businesses that have already transformed their bookkeeping.
            Setup takes less than 5 minutes and you'll see results immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/trial"
              className="magical-button text-lg"
            >
              Start Free Trial →
            </Link>
            <Link
              href="/demo"
              className="border-2 border-poof-primary-600 text-poof-primary-600 font-semibold px-8 py-4 rounded-magical hover:bg-poof-primary-50 transition-all duration-300 text-lg"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">5 min</div>
              <div className="text-gray-600">Average setup time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">exceptional</div>
              <div className="text-gray-600">AI accuracy rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">Happy</div>
              <div className="text-gray-600">Customer reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about getting started
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How long does it take to set up?",
                answer: "Most businesses are up and running in under 5 minutes. Simply connect your bank accounts and our AI takes care of the rest. No complex configuration or manual data entry required."
              },
              {
                question: "What if the AI categorizes something wrong?",
                answer: "Simply click to correct any categorization and our AI learns from your input. The more you use Poof, the more accurate it becomes for your specific business patterns."
              },
              {
                question: "Can I import my existing bookkeeping data?",
                answer: "Yes! We support imports from QuickBooks, Xero, CSV files, and most other accounting software. Our team can help with larger migrations if needed."
              },
              {
                question: "Is my financial data secure?",
                answer: "Absolutely. We use bank-level 256-bit encryption and read-only access to your accounts. Your data is never shared and is protected by the same standards used by major banks."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6">
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
            Experience the Magic Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join small businesses small businesses who've transformed their bookkeeping with Poof.
          </p>
          <Link
            href="/trial"
            className="bg-white text-poof-primary-600 font-bold px-8 py-4 rounded-magical shadow-magical hover:shadow-magical-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
          >
            Start Free Trial →
          </Link>
          <p className="text-white/80 text-sm mt-4">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}