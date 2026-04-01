'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'
import { faqData } from '@/lib/featureData'
import { getFaqPageSchema } from '@/lib/jsonLd'

const faqCategories = [
  'General',
  'AI & Automation',
  'Invoicing & Payments',
  'Pricing & Plans',
  'Security & Data',
  'Getting Started',
] as const

const categoryIcons: Record<string, React.ReactNode> = {
  'General': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'AI & Automation': (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5z" />
    </svg>
  ),
  'Invoicing & Payments': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  'Pricing & Plans': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'Security & Data': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  'Getting Started': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key)
  }

  const filteredCategories = activeCategory
    ? faqCategories.filter(c => c === activeCategory)
    : faqCategories

  return (
    <main className="min-h-screen">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqData)) }}
      />

      <PageHero
        title={<>Frequently Asked <span className="text-gradient-gold">Questions</span></>}
        subtitle="Everything you need to know about Poof's AI-powered bookkeeping platform. Can't find your answer? Reach out to our team."
      />

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === null
                  ? 'bg-gold-500 text-white shadow-gold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Questions
            </button>
            {faqCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category
                    ? 'bg-gold-500 text-white shadow-gold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {categoryIcons[category]}
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections by Category */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredCategories.map(category => {
              const categoryFaqs = faqData.filter(faq => faq.category === category)
              if (categoryFaqs.length === 0) return null

              return (
                <div key={category}>
                  <AnimateOnScroll animation="fade-up">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        {categoryIcons[category]}
                      </div>
                      <h2 className="text-2xl font-bold font-display text-slate-900">
                        {category}
                      </h2>
                    </div>
                  </AnimateOnScroll>

                  <div className="space-y-4">
                    {categoryFaqs.map((faq, index) => {
                      const key = `${category}-${index}`
                      return (
                        <AnimateOnScroll key={key} animation="fade-up" delay={100 + index * 60}>
                          <div
                            className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                              openIndex === key ? 'border-gold-200 shadow-md glow-accent-left' : 'border-slate-200'
                            }`}
                          >
                            <button
                              onClick={() => toggle(key)}
                              className="w-full px-6 py-5 text-left flex items-center justify-between transition-colors rounded-2xl"
                            >
                              <h3 className={`text-lg font-semibold pr-4 transition-colors ${
                                openIndex === key ? 'text-gold-600' : 'text-slate-800 hover:text-gold-600'
                              }`}>
                                {faq.question}
                              </h3>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                openIndex === key ? 'bg-gold-100 rotate-180' : 'bg-slate-100'
                              }`}>
                                <svg
                                  className={`w-4 h-4 transition-colors duration-300 ${
                                    openIndex === key ? 'text-gold-500' : 'text-slate-500'
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </button>
                            <div className={`accordion-content ${openIndex === key ? 'open' : ''}`}>
                              <div>
                                <div className="px-6 pb-5">
                                  <p className="text-slate-600 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AnimateOnScroll>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        {/* Sparkle stars */}
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute text-white/20 animate-sparkle-drift"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
              fontSize: `${10 + Math.random() * 14}px`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            &#x2726;
          </span>
        ))}
        {/* Floating orbs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-slow" />

        <AnimateOnScroll animation="fade-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is here to help. Reach out or see Poof in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-lg hover:bg-slate-100 transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/demo"
                className="bg-gold-500 text-white font-semibold px-8 py-4 rounded-lg shadow-gold hover:bg-gold-400 transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
              >
                Watch Demo
              </Link>
            </div>
            <p className="text-white/80 text-sm mt-6">
              30-day free trial &bull; No credit card required
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      <Footer />
    </main>
  )
}
