'use client'

import { useState } from 'react'
import { faqData } from '@/lib/featureData'
import { getFaqPageSchema } from '@/lib/jsonLd'
import AnimateOnScroll from './AnimateOnScroll'

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqData)) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-800 mb-6" style={{ letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Common questions about Poof&apos;s AI bookkeeping platform
          </p>
        </AnimateOnScroll>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 60}>
              <div
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'border-gold-200 shadow-md glow-accent-left' : 'border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between transition-colors rounded-2xl"
                >
                  <h3 className={`text-lg font-semibold pr-4 transition-colors ${
                    openIndex === index ? 'text-gold-600' : 'text-slate-800 hover:text-gold-600'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'bg-gold-100 rotate-180' : 'bg-slate-100'
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-colors duration-300 ${
                        openIndex === index ? 'text-gold-500' : 'text-slate-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
