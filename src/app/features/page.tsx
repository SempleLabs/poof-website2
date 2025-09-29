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
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 6c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/>
        </svg>
      ),
      title: "AI-Powered Categorization",
      description: "Our advanced AI learns your business patterns and categorizes transactions with 99.8% accuracy. No more manual sorting through hundreds of transactions.",
      benefits: [
        "99.8% accuracy rate",
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
      description: "Connect all your bank accounts and credit cards. Transactions sync automatically and reconcile in real-time, giving you an always up-to-date view.",
      benefits: [
        "Real-time transaction sync",
        "Automatic reconciliation",
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
      description: "Get instant access to P&L statements, balance sheets, and cash flow reports. Always know exactly where your business stands financially.",
      benefits: [
        "Instant P&L statements",
        "Real-time balance sheets",
        "Cash flow analysis",
        "Custom date ranges"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: "Smart Receipt Processing",
      description: "Simply take a photo of any receipt and our AI extracts all the details automatically. No more manual data entry or lost receipts.",
      benefits: [
        "OCR technology",
        "Automatic data extraction",
        "Cloud storage & backup",
        "Mobile app integration"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
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
          <path d="M17 18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10zM7 3h10c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z"/>
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
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Third-Party Integrations",
      description: "Connect with your existing tools including PayPal, Stripe, Square, and more. Everything flows into one unified system.",
      benefits: [
        "50+ integrations",
        "E-commerce platforms",
        "Payment processors",
        "Accounting software"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7.5h-5A1.5 1.5 0 0 0 12.04 8.37L9.5 16H12v6h8zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
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
            Join 2,000+ small businesses using Poof to automate their bookkeeping.
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