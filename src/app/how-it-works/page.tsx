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
      title: "Upload & Connect",
      description: "Import your bank statements, Excel files, or connect accounts directly. Multiple ways to get your financial data into Poof.",
      details: [
        "Import bank statements & Excel files",
        "Connect accounts directly via Plaid",
        "Support for CSV and QBO files",
        "One-time setup with automatic syncing"
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"/>
        </svg>
      ),
      timeframe: "2-5 minutes"
    },
    {
      step: 2,
      title: "AI Does the Work",
      description: "Watch Poof automatically categorize transactions and suggest account mappings. Our AI learns your business patterns.",
      details: [
        "Automatic transaction categorization",
        "Smart account mapping suggestions",
        "AI learns from your corrections",
        "Handles complex business transactions"
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
        </svg>
      ),
      timeframe: "Automated"
    },
    {
      step: 3,
      title: "Run Your Business",
      description: "Get insights, send invoices, and make informed financial decisions. Your books are always ready when you need them.",
      details: [
        "Real-time financial insights",
        "Professional invoice creation",
        "Tax-ready books year-round",
        "Make informed business decisions"
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V7H19A1,1 0 0,1 20,8V19A3,3 0 0,1 17,22H7A3,3 0 0,1 4,19V8A1,1 0 0,1 5,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4M6,9V19A1,1 0 0,0 7,20H17A1,1 0 0,0 18,19V9H6Z"/>
        </svg>
      ),
      timeframe: "Ongoing"
    }
  ]

  const features = [
    {
      title: "Financial Import & AI Mapping",
      description: "Upload financial data and watch AI organize everything automatically with smart account mapping.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"/>
        </svg>
      ),
      process: [
        "Upload your files - Excel, CSV, PDF, or bank statements",
        "AI analyzes & maps accounts - Smart suggestions for chart of accounts",
        "Review & approve mappings - Quick validation of AI recommendations",
        "Transactions auto-categorized - Your books are organized instantly"
      ]
    },
    {
      title: "Professional Invoicing",
      description: "Create and send professional invoices in minutes with automated payment tracking.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,12L16,16H13.5V19H10.5V16H8L12,12Z"/>
        </svg>
      ),
      process: [
        "Select customer & services - From your organized customer database",
        "Customize invoice template - Professional branded invoices",
        "Send instantly - Email directly from Poof",
        "Track payment status - Know exactly who owes what"
      ]
    },
    {
      title: "Real-Time Financial Reporting",
      description: "Generate professional financial reports instantly with real-time data and professional formatting.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      process: [
        "Choose your date range - Any period you need",
        "Select report type - P&L, Balance Sheet, Cash Flow, Trial Balance",
        "Generate in seconds - Real-time data, professional formatting",
        "Export or share easily - PDF, Excel, or direct sharing"
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
            Ready to Streamline Your Bookkeeping?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Built by a controller who understands your daily bookkeeping challenges.
            Try Poof risk-free with our 30-day trial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/trial"
              className="magical-button text-lg flex items-center justify-center"
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
              <div className="text-2xl font-bold text-gray-900">30 days</div>
              <div className="text-gray-600">Free trial period</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">No setup fees</div>
              <div className="text-gray-600">Cancel anytime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">10+ years</div>
              <div className="text-gray-600">Controller experience</div>
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
                answer: "Yes. We support imports from QuickBooks, Xero, CSV files, and most other accounting software. Our team can help with larger migrations if needed."
              },
              {
                question: "How does the AI categorization work?",
                answer: "Our AI analyzes transaction patterns, merchant information, and your business type to automatically categorize transactions. It learns from your corrections and gets more accurate over time."
              },
              {
                question: "What types of receipts can I process?",
                answer: "Snap photos of any receipt - paper, digital, or email receipts. Our AI extracts all details automatically including vendor, amount, date, and expense category."
              },
              {
                question: "How accurate is the bank reconciliation?",
                answer: "Our AI matches and categorizes transactions with 95%+ accuracy. Any discrepancies are flagged for quick review, and the system learns from your corrections."
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