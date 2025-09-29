import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing - Start Free Trial | Poof',
  description: 'Simple, transparent pricing for AI-powered bookkeeping. Start with a 30-day free trial. No setup fees, cancel anytime.',
  keywords: 'Poof pricing, bookkeeping software cost, QuickBooks alternative pricing, small business accounting cost',
}

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 29,
      description: 'Perfect for new businesses getting started',
      features: [
        'Up to 50 transactions/month',
        'AI-powered categorization',
        'Basic financial reports',
        'Mobile app access',
        'Email support',
        '1 bank account connection'
      ],
      recommended: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 59,
      description: 'Most popular for growing businesses',
      features: [
        'Up to 500 transactions/month',
        'AI-powered categorization',
        'Advanced financial reports',
        'Receipt processing',
        'Priority support',
        'Up to 5 bank connections',
        'Multi-user access (3 users)',
        'Integrations included',
        'Tax-ready reports'
      ],
      recommended: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Business',
      price: 99,
      description: 'For established businesses with complex needs',
      features: [
        'Unlimited transactions',
        'AI-powered categorization',
        'Custom financial reports',
        'Advanced receipt processing',
        'White-glove support',
        'Unlimited bank connections',
        'Multi-user access (10 users)',
        'All integrations included',
        'Tax-ready reports',
        'Accountant collaboration',
        'API access',
        'Custom training'
      ],
      recommended: false,
      cta: 'Start Free Trial'
    }
  ]

  const faqs = [
    {
      question: 'What happens during the free trial?',
      answer: 'You get full access to all features for 30 days. No credit card required. Connect your bank accounts, process receipts, and see how Poof transforms your bookkeeping.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Absolutely. We use bank-level 256-bit encryption and are SOC 2 Type II certified. Your data is never shared and is protected by the same standards used by major banks.'
    },
    {
      question: 'How does the AI categorization work?',
      answer: 'Our AI analyzes transaction patterns, merchant information, and your business type to automatically categorize transactions. It learns from your corrections and gets more accurate over time.'
    },
    {
      question: 'Can my accountant access my books?',
      answer: 'Yes! You can invite your accountant or bookkeeper to access your books with read-only or full permissions. They can review, make adjustments, and export reports as needed.'
    },
    {
      question: 'What if I need to cancel?',
      answer: 'You can cancel anytime with one click. No contracts, no cancellation fees. You\'ll have access until the end of your billing period, and can export all your data.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="hero-text"> Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Start with a 30-day free trial. No setup fees, no contracts, cancel anytime.
          </p>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-poof-success-50 text-poof-success-700 text-sm font-medium">
            <span className="mr-2">✅</span>
            30-day free trial • No credit card required
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-magical p-8 ${
                  plan.recommended
                    ? 'glass-card border-2 border-poof-primary-200 shadow-magical'
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-magical-gradient text-white px-4 py-1 rounded-full text-xs font-medium">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    ${plan.price}
                    <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">Billed monthly</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-poof-success-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/trial"
                  className={`block w-full text-center py-3 px-6 rounded-magical font-semibold transition-all duration-300 ${
                    plan.recommended
                      ? 'magical-button'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              Need a custom solution for your business?
            </p>
            <Link
              href="/contact"
              className="text-poof-primary-600 hover:text-poof-primary-700 font-medium"
            >
              Contact our sales team →
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            See Your ROI in Minutes
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Calculate how much time and money Poof can save your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-8">
              <div className="text-3xl mb-4">⏱️</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">15 hours</div>
              <div className="text-gray-600">saved per month on average</div>
            </div>
            <div className="glass-card p-8">
              <div className="text-3xl mb-4">💰</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">$750</div>
              <div className="text-gray-600">monthly savings (at $50/hr)</div>
            </div>
            <div className="glass-card p-8">
              <div className="text-3xl mb-4">📈</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">1200%</div>
              <div className="text-gray-600">average ROI in first year</div>
            </div>
          </div>

          <div className="bg-white rounded-magical p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quick ROI Calculation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Your Current Costs:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 20 hours/month × $50/hour = $1,000</li>
                  <li>• QuickBooks subscription = $50/month</li>
                  <li>• <strong>Total: $1,050/month</strong></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">With Poof:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 3 hours/month × $50/hour = $150</li>
                  <li>• Poof Professional = $59/month</li>
                  <li>• <strong>Total: $209/month</strong></li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-poof-success-50 rounded-lg">
              <div className="text-lg font-bold text-poof-success-700">
                Monthly Savings: $841 • Annual Savings: $10,092
              </div>
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
            Ready to Start Saving Time and Money?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join small businesses already using Poof. Start your free trial today.
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