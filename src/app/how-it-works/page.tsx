import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getFaqPageSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'How It Works — AI Bookkeeping in 3 Steps | Poof',
  description: 'Learn how Poof automates your bookkeeping in 3 simple steps. Connect banks, let AI categorize and reconcile, get 13 financial reports, budgets, and cash flow forecasts.',
  keywords: 'how AI bookkeeping works, automated bookkeeping process, Poof setup, AI categorization, AI budgeting, cash flow forecasting, auto-reconciliation',
  alternates: {
    canonical: 'https://poof.ai/how-it-works',
  },
}

const howItWorksFaqs = [
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
    answer: "Yes. We support imports from QuickBooks, Xero, CSV files, and most other accounting software. You can also upload CSV or PDF bank statements for transactions beyond the 30-day Plaid sync window."
  },
  {
    question: "How does the AI categorization work?",
    answer: "Our BRAID engine analyzes transaction patterns, merchant information, and your business type to automatically categorize transactions. It also detects recurring charges and matches transactions to invoices and bills. It learns from your corrections and gets more accurate over time."
  },
  {
    question: "What types of receipts can I process?",
    answer: "Upload photos of any receipt or invoice — paper, digital, or email receipts in JPG, PNG, or HEIC format. Our OCR engine extracts vendor name, amount, date, and category automatically, with built-in duplicate detection."
  },
  {
    question: "How accurate is the bank reconciliation?",
    answer: "Our AI matches and categorizes transactions with 95%+ accuracy. Any discrepancies are flagged for quick review, and the system learns from your corrections."
  }
]

export default function HowItWorksPage() {
  const steps = [
    {
      step: 1,
      title: "Upload & Connect",
      description: "Import bank statements (CSV/PDF), Excel files, connect via Plaid, or upload receipts and invoices for automatic scanning.",
      details: [
        "Import bank statements (CSV/PDF) & Excel files",
        "Connect accounts directly via Plaid",
        "Upload receipts & invoices for OCR scanning",
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
      description: "Watch Poof automatically categorize transactions, detect recurring charges, match transactions to invoices and bills, and scan receipts.",
      details: [
        "Automatic transaction categorization",
        "Recurring charge detection & prediction",
        "Smart transaction matching to invoices & bills",
        "Receipt scanning with data extraction"
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
      description: "Get insights, send invoices, create budgets, forecast cash flow, and make informed financial decisions. Your books are always ready when you need them.",
      details: [
        "13 financial reports with real-time data",
        "AI-powered budgeting and cash flow forecasting",
        "Professional invoicing with automated follow-ups",
        "Tax-ready books year-round"
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
      description: "Generate 13 professional financial reports instantly with real-time data.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      process: [
        "Choose your date range - Any period you need",
        "Select report type - P&L, Balance Sheet, Cash Flow, Budget vs Actual, and 9 more",
        "Generate in seconds - Real-time data, professional formatting",
        "Export or share easily - PDF, Excel, or direct sharing"
      ]
    },
    {
      title: "Receipt Scanning & OCR",
      description: "Upload photos of receipts and invoices for automatic data extraction and categorization.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/>
        </svg>
      ),
      process: [
        "Snap a photo - Upload receipts or invoices (including HEIC)",
        "AI extracts data - Vendor, amount, date, and category identified",
        "Duplicate detection - Prevents double-entry of the same receipt",
        "Auto-categorized - Expense is created and categorized automatically"
      ]
    },
    {
      title: "Recurring Charge Detection",
      description: "AI automatically identifies and predicts recurring transactions in your accounts.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"/>
        </svg>
      ),
      process: [
        "AI scans transactions - Identifies repeating patterns automatically",
        "Frequency analysis - Weekly, biweekly, monthly, quarterly, or annual",
        "Confidence scoring - Know how certain each detection is",
        "Next payment prediction - See when charges are expected next"
      ]
    },
    {
      title: "Bank Statement Import",
      description: "Upload CSV or PDF bank statements for transactions beyond the Plaid sync window.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.5,1L2,6V8H21V6M16,10V17H19V19H5V17H8V10H10V17H14V10M2,22H21V20H2V22Z"/>
        </svg>
      ),
      process: [
        "Upload statement - CSV or PDF files up to 25MB",
        "Intelligent column mapping - AI maps your statement format",
        "Duplicate prevention - No double-counting of transactions",
        "Batch preview & import - Review everything before committing"
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(howItWorksFaqs)) }}
      />
      <Header />

      <PageHero
        title={<>How <span className="text-gradient-gold">Poof Works</span></>}
        subtitle="Transform your bookkeeping in 3 simple steps. No accounting degree required - just connect your accounts and let our AI handle the rest."
      >
        <Link
          href="https://app.poofai.com/register"
          className="bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-400 shadow-gold text-lg mt-8 inline-block px-8 py-4"
        >
          Start Your Free Trial →
        </Link>
      </PageHero>

      {/* Steps Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">
                Get Started in 3 Simple Steps
              </h2>
              <p className="text-xl text-slate-600">
                From setup to insights in under 10 minutes
              </p>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-2/3 border-l-2 border-dashed border-gold-200 h-0 border-t-2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 150}>
                  <div className="relative h-full flex flex-col">
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 group relative overflow-hidden flex-1 flex flex-col">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-teal-500"></div>

                      <div className="text-center">
                        {/* Step Number */}
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 text-white rounded-full font-mono font-bold text-2xl mb-6 relative z-10">
                          {step.step}
                        </div>

                        {/* Icon */}
                        <div className="w-16 h-16 bg-gold-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold-500">
                          {step.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                          {step.description}
                        </p>

                        {/* Timeframe */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                          </svg>
                          {step.timeframe}
                        </div>
                      </div>

                      {/* Details */}
                      <ul className="space-y-3 mt-auto">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-700 font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <ImagePlaceholder
                        alt={`Step ${step.step}: ${
                          step.step === 1 ? 'Connect your bank' :
                          step.step === 2 ? 'AI categorizes transactions' :
                          'Review your reports'
                        }`}
                        aspectRatio="16/9"
                      />
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">
                See Poof in Action
              </h2>
              <p className="text-xl text-slate-600">
                Explore how our key features work behind the scenes
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 150}>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 group relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-teal-500"></div>

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gold-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>

                  <div className="space-y-4 mt-auto">
                    {feature.process.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-gold-500 to-gold-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                          {stepIndex + 1}
                        </div>
                        <span className="text-sm text-slate-700 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">
              Ready to Streamline Your Bookkeeping?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Built by a controller who understands your daily bookkeeping challenges.
              Try Poof risk-free with our 30-day trial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="https://app.poofai.com/register"
                className="bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-400 shadow-gold text-lg flex items-center justify-center px-8 py-4"
              >
                Start Free Trial →
              </Link>
              <Link
                href="/demo"
                className="border-2 border-gold-500 text-gold-500 font-semibold px-8 py-4 rounded-lg hover:bg-gold-50 transition-all duration-300 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { value: "30 days", label: "Free trial period" },
              { value: "No setup fees", label: "Cancel anytime" },
              { value: "10+ years", label: "Controller experience" },
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div>
                  <div className="text-2xl font-bold text-gold-500">{item.value}</div>
                  <div className="text-slate-600">{item.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">
                Common Questions
              </h2>
              <p className="text-xl text-slate-600">
                Everything you need to know about getting started
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-8">
            {howItWorksFaqs.map((faq, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 60}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold font-display text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="absolute text-gold-500/20 animate-sparkle-drift" style={{ top: `${15 + Math.random() * 70}%`, left: `${5 + Math.random() * 90}%`, fontSize: `${10 + Math.random() * 14}px`, animationDelay: `${i * 0.7}s` }}>&#10022;</span>
        ))}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Get Started Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join small businesses who've transformed their bookkeeping with Poof.
            </p>
            <Link
              href="https://app.poofai.com/register"
              className="bg-gold-500 text-white font-bold px-8 py-4 rounded-lg shadow-gold hover:bg-gold-400 transform hover:-translate-y-0.5 transition-all duration-300 text-lg inline-block"
            >
              Start Free Trial →
            </Link>
            <p className="text-white/80 text-sm mt-4">
              30-day free trial &bull; Cancel anytime
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
