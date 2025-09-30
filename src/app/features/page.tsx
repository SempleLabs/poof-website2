import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Features - AI Bookkeeping Automation | Poof',
  description: 'Discover how Poof automates your bookkeeping with AI-powered categorization, bank sync, real-time reports, and more. See all features.',
  keywords: 'AI bookkeeping features, automated categorization, bank sync, financial reports, receipt processing',
}

export default function FeaturesPage() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
        </svg>
      ),
      title: "AI-Powered Categorization",
      description: "Our advanced AI learns your business patterns and categorizes transactions with exceptional accuracy. No more manual sorting through hundreds of transactions.",
      benefits: [
        "Exceptional accuracy rate",
        "Learns your business patterns",
        "Handles complex transactions",
        "Reduces manual work by 90%"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.5,1L2,6V8H21V6M16,10V17H19V19H5V17H8V10H10V17H14V10M2,22H21V20H2V22Z"/>
        </svg>
      ),
      title: "Bank Sync & Auto-Reconciliation",
      description: "Connect your bank accounts and credit cards securely. Transactions sync automatically with AI-suggested categorization to streamline your reconciliation process.",
      benefits: [
        "Real-time transaction sync",
        "AI-assisted reconciliation",
        "Support for 10,000+ banks",
        "Secure bank-level encryption"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: "Real-Time Financial Reports",
      description: "Get instant access to P&L statements, balance sheets, and cash flow reports with a live dashboard. Always know exactly where your business stands financially.",
      benefits: [
        "Live dashboard view",
        "Instant P&L statements",
        "Real-time balance sheets",
        "Cash flow analysis"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V7H19A1,1 0 0,1 20,8V19A3,3 0 0,1 17,22H7A3,3 0 0,1 4,19V8A1,1 0 0,1 5,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4M6,9V19A1,1 0 0,0 7,20H17A1,1 0 0,0 18,19V9H6Z"/>
        </svg>
      ),
      title: "Small Business Focus",
      description: "Built specifically for small businesses with intuitive workflows. No accounting degree required - designed for busy entrepreneurs who need clarity, not complexity.",
      benefits: [
        "Easy setup in minutes",
        "Intuitive for non-accountants",
        "Small business workflows",
        "Affordable pricing"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      ),
      title: "Tax-Ready Books",
      description: "Your books stay tax-ready year-round with proper categorization and documentation. Make tax season stress-free.",
      benefits: [
        "IRS-compliant categorization",
        "Automatic tax prep",
        "Document organization",
        "Audit-ready reports"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"/>
        </svg>
      ),
      title: "Mobile-First Design",
      description: "Manage your books on the go with our beautiful mobile app. Everything syncs seamlessly across all your devices.",
      benefits: [
        "Native mobile apps",
        "Offline capability",
        "Real-time sync",
        "Touch-optimized interface"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,12L16,16H13.5V19H10.5V16H8L12,12Z"/>
        </svg>
      ),
      title: "Simple Invoice Tracking",
      description: "Keep track of invoices sent and payments received in one organized view. Never lose track of what customers owe you.",
      benefits: [
        "Invoice status tracking",
        "Payment reminders",
        "Customer payment history",
        "Overdue alerts"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"/>
        </svg>
      ),
      title: "Multi-User Access",
      description: "Collaborate with your team, accountant, or bookkeeper. Set permissions and track who made what changes.",
      benefits: [
        "Role-based permissions",
        "Activity tracking",
        "Accountant collaboration",
        "Team management"
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="hero-text"> Modern Bookkeeping</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to automate your bookkeeping and get back to growing your business.
            See how Poof transforms the way small businesses manage their finances.
          </p>
          <Link
            href="/trial"
            className="magical-button text-lg"
          >
            Start Free Trial →
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-poof-primary-500 to-poof-secondary-500"></div>

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-poof-primary-500 to-poof-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-poof-success-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Connection Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Connect All Your Bank Accounts
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Powered by Plaid, we securely connect to over 10,000 banks and credit unions across the US.
            Your financial data syncs automatically and stays up-to-date in real-time.
          </p>

          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-poof-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-poof-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9V17H10Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank-Level Security</h3>
                <p className="text-gray-600 text-sm">256-bit encryption and read-only access to your accounts</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-poof-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-poof-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,17H22V19H19V17M19,7H22V9H19V7M20,3H4A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V5A2,2 0 0,0 20,3M20,19H4V5H20V19Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">10,000+ Banks</h3>
                <p className="text-gray-600 text-sm">Works with virtually any US bank, credit union, or credit card</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-poof-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-poof-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Sync</h3>
                <p className="text-gray-600 text-sm">Transactions appear in Poof as soon as they hit your account</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by the same technology that powers:</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <span className="text-sm font-medium text-gray-400">Venmo</span>
                <span className="text-sm font-medium text-gray-400">Robinhood</span>
                <span className="text-sm font-medium text-gray-400">Mint</span>
                <span className="text-sm font-medium text-gray-400">Acorns</span>
                <span className="text-sm font-medium text-gray-400">Coinbase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join small businesses everywhere using Poof to automate their bookkeeping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trial"
              className="bg-white text-poof-primary-600 font-bold px-8 py-4 rounded-magical shadow-magical hover:shadow-magical-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
            >
              Start Free Trial →
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-magical backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}