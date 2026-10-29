'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'
import { getFaqPageSchema, getSoftwareApplicationSchema, getBreadcrumbSchema } from '@/lib/jsonLd'

const CheckIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const freeFeatures = [
    'The books: transactions, chart of accounts, journal entries',
    'Invoices, estimates, bills & purchase orders',
    'Every report, all 14 of them',
    'Close checklist & period locks',
    'Payroll prep, 1099 prep & sales tax',
    'Dispatch board & the technician\'s field link',
    'The iPhone app',
    'The Claude & ChatGPT connector',
    'Approval cards, in every channel',
    'Your own rules, which keep sorting transactions'
  ]

  const freeAllowance = [
    '25 Ask Poof questions',
    '25 receipt or document reads',
    '2 connected bank accounts (bank feeds)'
  ]

  const agentFeatures = [
    'Sorts new transactions overnight and posts the ones it\'s sure of',
    'Reads every receipt, bill & check: photographed, uploaded, forwarded or texted',
    'Ask Poof with no limit, in the app, Telegram, Slack & by voice',
    'Writes your collection reminders & your month-end summary',
    'Unlimited bank feeds',
    'Text your customers'
  ]

  const faqs = [
    {
      question: 'Is Poof really free?',
      answer: 'Yes, for good. The books, invoices, estimates, bills, purchase orders, every report, the close checklist and period locks, payroll prep, 1099 prep, sales tax, the dispatch board, the iPhone app, and the Claude and ChatGPT connector are all free, with no card and no time limit. Free also includes 25 Ask Poof questions, 25 receipt or document reads, and 2 connected bank accounts each month. Poof Agent, the AI that does the work for you, is the paid plan.'
    },
    {
      question: 'What does Poof Agent add?',
      answer: 'Poof Agent is the AI that does the work while you\'re not looking. It sorts new transactions overnight and posts the ones it\'s sure of, reads every receipt, bill and check, answers Ask Poof with no limit in the app, Telegram, Slack and by voice, writes your collection reminders and month-end summary, connects every bank account, and lets you text your customers. It is $79/mo, or $790/yr.'
    },
    {
      question: 'What happens after the 30 days?',
      answer: 'A new company starts with Poof Agent on for 30 days, with no card. After that, the company stays on Free unless you add Poof Agent. Nothing is locked or read-only: every screen and every number stays, your rules keep sorting, and new transactions they don\'t cover wait for a person instead of being sorted overnight.'
    },
    {
      question: 'What counts as a question or a read, and what happens when they run out?',
      answer: 'A question is one Ask Poof message, in the app, Telegram, Slack or by voice. A read is one receipt, bill, check, PDF statement or forwarded email that Poof\'s AI reads for you. Free includes 25 of each a month. When they run out, they come back on the 1st; everything else keeps working, approval cards included, and a scanned photo is still saved on the expense. File imports (CSV, QuickBooks, Jobber, Housecall Pro) have no limit.'
    },
    {
      question: 'Is the AI receptionist included?',
      answer: 'No. The AI receptionist that answers a service shop\'s phone and books the job is an add-on: $99 a month with 1,000 minutes of calls included, then 12¢ a minute. A shop turns it on and buys it in Settings → Receptionist; no demo needed. The dispatch board and the technician\'s field link are free.'
    },
    {
      question: 'How does pricing work for bookkeeping firms?',
      answer: 'Every client company is free. Poof Agent is $29 a month ($290 a year) for each client the firm switches it on for, billed to the firm. The firm\'s trial covers Poof Agent for 3 clients.'
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Yes. All data is encrypted in transit via HTTPS/TLS. Bank connections are read-only through Plaid — we never see or store your credentials. Two-factor authentication, role-based permissions, and automatic session timeouts keep your account locked down.'
    },
    {
      question: 'Can my accountant access my books?',
      answer: 'Yes! You can invite your accountant or bookkeeper to access your books with read-only or full permissions. They can review, make adjustments, and export reports as needed.'
    },
    {
      question: 'What if I need to cancel Poof Agent?',
      answer: 'You can cancel anytime. No contracts, no cancellation fees. Email support@poofai.com with the change you want and we will take care of it. Poof Agent stays on until the end of your paid month, then your company moves to Free with every screen, rule and number intact, and you can export all your data.'
    },
    {
      question: 'How does Poof compare to QuickBooks?',
      answer: 'QuickBooks has no free plan: Simple Start is $38/mo, Essentials $85/mo, and Plus $140/mo, the tier that carries job costing, budgets, and comprehensive reports. Poof is free, with the books, invoices, bills, every report, the close checklist, payroll and 1099 prep, and sales tax included. Poof Agent, the AI that sorts your transactions and reads your receipts, is $79/mo, 44% less than Plus, and every change it proposes waits on an approval card for a person. (QuickBooks pricing verified August 2026.)'
    },
    {
      question: 'What reports can I generate?',
      answer: 'Poof generates 14 financial reports, all of them on Free: Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail, AR Aging (also by job), AP Aging, Customer Sales, Vendor Expenses, Sales by Product/Service, Expenses by Category, Budget vs Actual, and Progress Billing. Toggle between accrual and cash basis, choose your date range, and export in seconds.'
    },
    {
      question: 'Do you integrate with my existing tools?',
      answer: 'Yes. Poof integrates with most banks, credit cards, and popular business tools. We\'re constantly adding new integrations based on customer requests.'
    },
    {
      question: 'How much does bookkeeping software cost for a small business?',
      answer: 'Bookkeeping software for small businesses runs from free to $140/month depending on features and tier. As of August 2026, QuickBooks has no free plan: it starts at $38/month for Simple Start and steps up through Essentials at $85 and Plus at $140, and Plus is the tier you need for job costing and budgets. Poof is free, every report included. Poof Agent, the AI that does the work, is $79/month or $790/year.'
    },
    {
      question: 'Do I still need a bookkeeper if I use Poof?',
      answer: 'Many small businesses use Poof to handle their day-to-day bookkeeping without hiring a bookkeeper. Poof Agent sorts transactions, reads receipts, and writes the month-end summary, and every report builds itself. For tax preparation or complex accounting needs, you can invite your accountant to collaborate directly inside Poof.'
    }
  ]

  return (
    <main id="main-content" className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSoftwareApplicationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.poofai.com' },
              { name: 'Pricing', url: 'https://www.poofai.com/pricing' },
            ])
          ),
        }}
      />
      <Header />

      <PageHero
        title={<>Poof is free. <span className="text-ledger-600">Poof Agent does the work.</span></>}
        subtitle="The books, invoices, reports and close are free, for good. Poof Agent, the AI that works while you sleep, is $79 a month, and your first 30 days of it are free."
      />

      {/* Free Banner + Pricing Toggle */}
      <section className="pt-12 pb-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 bg-ledger-100 text-ledger-600 font-semibold text-sm px-5 py-2.5 rounded-full border border-ledger-300">
                <CheckIcon className="w-4 h-4" />
                Free for good · Poof Agent free for 30 days · No card
              </span>
            </div>
          </AnimateOnScroll>
          <div className="flex items-center justify-center">
            <div className="relative bg-slate-200 p-1 rounded-lg flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  !isAnnual
                    ? 'bg-ledger-500 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                  isAnnual
                    ? 'bg-ledger-500 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-ledger-500 text-white text-xs px-2 py-1 rounded-full">
                  Save $158
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Cards: Free and Poof Agent */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Free */}
            <AnimateOnScroll animation="scale-up" delay={100} className="h-full">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm h-full flex flex-col">
                <div className="bg-slate-100 text-slate-600 px-6 py-3 text-sm font-semibold tracking-widest rounded-t-[inherit] text-center uppercase">
                  For good
                </div>
                <div className="p-8 sm:p-10 flex flex-col flex-grow">
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl font-display font-bold text-slate-800 mb-4">Free</h2>
                    <p className="text-slate-600 mb-6">The whole app: the books, the paperwork and the close</p>
                    <div className="mb-2">
                      <span className="text-6xl font-mono font-bold text-slate-800">$0</span>
                    </div>
                    <p className="text-sm text-slate-500">No card, no time limit, nothing read-only</p>
                  </div>

                  <div className="text-left mb-8 flex-grow">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Included:</h3>
                    <div className="space-y-3">
                      {freeFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-ledger-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mt-8 mb-4">A taste of Poof Agent, each month:</h3>
                    <div className="space-y-3">
                      {freeAllowance.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-ledger-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-slate-500 mt-4">File imports have no limit.</p>
                  </div>

                  <Link
                    href="https://app.poofai.com/register"
                    className="border-[1.5px] border-ledger-500 text-ledger-600 font-semibold rounded-lg hover:bg-ledger-100 transition-all text-lg w-full block text-center py-4"
                  >
                    Get started free →
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Poof Agent */}
            <AnimateOnScroll animation="scale-up" delay={200} className="h-full">
              <div className="bg-slate-900 rounded-xl border border-ledger-500/30 shadow-lg h-full flex flex-col">
                {!isAnnual ? (
                  <div className="bg-ledger-500 text-white px-6 py-3 text-sm font-semibold tracking-widest rounded-t-[inherit] flex items-center justify-center gap-3">
                    <span className="animate-pulse">✦</span>
                    <span className="uppercase">Free for your first 30 days</span>
                    <span className="animate-pulse">✦</span>
                  </div>
                ) : (
                  <div className="bg-ledger-500 text-white px-6 py-3 text-sm font-semibold tracking-widest rounded-t-[inherit] flex items-center justify-center gap-3">
                    <span>★</span>
                    <span className="uppercase">Best Value — 2 months free</span>
                    <span>★</span>
                  </div>
                )}

                <div className="p-8 sm:p-10 flex flex-col flex-grow">
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">Poof Agent</h2>
                    <p className="text-slate-400 mb-6">Your AI works when you&apos;re talking to it. Poof&apos;s agent works while you sleep.</p>
                    <div className="mb-2">
                      <span className="text-6xl font-mono font-bold text-ledger-400">
                        ${isAnnual ? '65.83' : '79'}
                      </span>
                      <span className="text-xl font-normal text-slate-400">
                        /mo
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">
                      {isAnnual
                        ? 'Billed $790/year (2 months free)'
                        : 'Billed monthly · or $790/year'
                      }
                    </p>
                  </div>

                  <div className="text-left mb-8 flex-grow">
                    <h3 className="text-lg font-semibold text-white mb-4">Everything in Free, plus:</h3>
                    <div className="space-y-3">
                      {agentFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-ledger-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-slate-400 mt-4">
                      After 30 days your company stays on Free unless you keep Poof Agent. Nothing is locked; new transactions wait for a person instead of being sorted overnight.
                    </p>
                  </div>

                  <Link
                    href="https://app.poofai.com/register"
                    className="bg-ledger-500 text-white font-semibold rounded-lg hover:bg-ledger-600 transition-all text-lg w-full block text-center py-4 mb-4"
                  >
                    Start free →
                  </Link>

                  <p className="text-sm text-slate-500 text-center">
                    Poof Agent free for 30 days · no card
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* For bookkeeping firms */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-8 sm:flex sm:items-center sm:justify-between gap-8">
              <div className="mb-6 sm:mb-0">
                <h2 className="text-2xl font-display font-bold text-slate-800 mb-2">For bookkeeping firms</h2>
                <p className="text-slate-600">
                  Every client company is free. Poof Agent is $29 a month ($290 a year) for each client you switch it on for, and your trial covers Poof Agent for 3 clients.
                </p>
              </div>
              <Link
                href="https://app.poofai.com/register"
                className="bg-ledger-500 text-white font-semibold rounded-lg hover:bg-ledger-600 transition-all whitespace-nowrap px-6 py-3 inline-block"
              >
                Get started free →
              </Link>
            </div>
          </AnimateOnScroll>

          <p className="text-sm text-slate-600 text-center mt-6">
            The AI receptionist for service shops is an add-on: $99 a month with 1,000 minutes of calls included, then 12¢ a minute. Turn it on in Settings → Receptionist.{' '}
            <Link href="/trades" className="text-ledger-600 font-semibold hover:text-ledger-400">See Poof for shops</Link>
          </p>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Questions about our pricing?
            </p>
            <Link
              href="/demo"
              className="text-ledger-600 hover:text-ledger-400 font-medium"
            >
              Schedule a demo to learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-display font-bold text-slate-800 mb-6">
              Why Small Businesses Switch to Poof
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              The books are free, for good — and when you want AI that actually does the work, that&apos;s Poof Agent.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
                  </svg>
                ),
                title: 'Always-Clean Books',
                description: 'Poof Agent sorts your transactions overnight and reads every receipt, and your own rules keep sorting on Free. No manual data entry. No weekend catch-up sessions.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                  </svg>
                ),
                title: 'Set Up in 5 Minutes',
                description: 'Connect your bank, and Poof starts organizing your books immediately. No chart of accounts to build, no accountant required to get started.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Bank-Grade Security',
                description: 'Read-only bank connections through Plaid. Two-factor authentication. Role-based permissions. Your financial data stays encrypted and locked down.'
              }
            ].map((card, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 100}>
                <div className="bg-white border border-slate-200 rounded-xl p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-ledger-500 rounded-xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg flex-shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-800 mb-3">{card.title}</h3>
                  <p className="text-slate-600 flex-grow">{card.description}</p>
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
              <h2 className="text-4xl font-display font-bold text-slate-800 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600">
                Everything you need to know about Poof pricing and features.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 60}>
                <div className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'border-ledger-500/30 shadow-md' : 'border-slate-200'}`}>
                  <button type="button" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} aria-expanded={openFaqIndex === index} aria-controls={`pricing-faq-panel-${index}`} className="w-full px-6 py-5 text-left flex items-center justify-between transition-colors rounded-xl">
                    <h3 className="text-lg font-semibold text-slate-800 pr-4">{faq.question}</h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaqIndex === index ? 'bg-ledger-100 rotate-180' : 'bg-slate-100'}`}>
                      <svg className={`w-4 h-4 transition-colors duration-300 ${openFaqIndex === index ? 'text-ledger-600' : 'text-slate-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div id={`pricing-faq-panel-${index}`} role="region" aria-hidden={openFaqIndex !== index} className={`accordion-content ${openFaqIndex === index ? 'open' : ''}`}>
                    <div><div className="px-6 pb-5"><p className="text-slate-600 leading-relaxed">{faq.answer}</p></div></div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27, 94, 63,0.08),transparent_70%)]" />
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Automate Your Bookkeeping?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Poof is free for good, and Poof Agent is free for your first 30 days.
            </p>
            <Link
              href="https://app.poofai.com/register"
              className="bg-ledger-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-ledger-600 hover:-translate-y-0.5 transition-all duration-300 text-lg"
            >
              Get started free →
            </Link>
            <p className="text-slate-500 text-sm mt-4">
              No card • Nothing goes read-only
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      <Footer />
    </main>
  )
}
