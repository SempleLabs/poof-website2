'use client'

import Link from 'next/link'
import { featureGroups } from '@/lib/featureData'
import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'

const showcases = [
  {
    title: 'Meet Preston, Your AI Bookkeeper',
    description:
      'Built-in AI assistant with specialist agents for accounting, invoicing, expenses, reports, and banking. Preston walks you through setup, answers questions, and handles the details.',
    bullets: [
      'Specialist agents for every area of your books',
      'Guided onboarding that sets up your chart of accounts',
      'Natural-language answers to any bookkeeping question',
    ],
    iconBg: 'bg-gold-500/10',
    iconBorder: 'border-gold-500/20',
    iconColor: 'text-gold-500',
    glowColor: 'rgba(139, 92, 246, 0.08)',
    iconLeft: true,
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
      </svg>
    ),
  },
  {
    title: 'Snap a Photo, Skip the Data Entry',
    description:
      'Upload receipts and invoices for automatic data extraction. AI identifies vendors, suggests categories, detects duplicates, and works with HEIC/HEIF images.',
    bullets: [
      'OCR extracts amounts, dates, and vendors automatically',
      'Duplicate detection prevents double-entries',
      'Supports HEIC/HEIF from iPhone photos',
    ],
    iconBg: 'bg-teal-500/10',
    iconBorder: 'border-teal-500/20',
    iconColor: 'text-teal-500',
    glowColor: 'rgba(20, 184, 166, 0.08)',
    iconLeft: false,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Invoices Meet Payments, Automatically',
    description:
      'AI matches bank deposits to outstanding invoices and payments to bills — including partial payments — with confidence scoring.',
    bullets: [
      'Matches deposits to invoices with confidence scores',
      'Handles partial payments and credit notes',
      'Automatic bill-to-payment reconciliation',
    ],
    iconBg: 'bg-gold-500/10',
    iconBorder: 'border-gold-500/20',
    iconColor: 'text-gold-500',
    glowColor: 'rgba(139, 92, 246, 0.08)',
    iconLeft: true,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
  },
]

const Check = () => (
  <svg
    className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0 glow-check"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
)

const SmallCheck = () => (
  <svg
    className="w-4 h-4 text-gold-400 flex-shrink-0 glow-check"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
)

const totalFeatures = featureGroups.reduce((sum, g) => sum + g.features.length, 0)

export default function FeatureHighlights() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2
            className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Powerful Features,
            <span className="text-gradient-gold"> Zero Complexity</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built-in AI that handles the details so you don&apos;t have to.
          </p>
        </AnimateOnScroll>

        {/* Feature Showcases */}
        <div className="space-y-16 mb-24">
          {showcases.map((item, i) => (
            <AnimateOnScroll
              key={i}
              animation={item.iconLeft ? 'fade-right' : 'fade-left'}
              delay={100}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Icon Panel */}
                <div
                  className={`flex items-center justify-center ${
                    item.iconLeft ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <GlowCard
                    className={`rounded-2xl ${item.iconBg} border ${item.iconBorder} w-full max-w-xs aspect-square flex items-center justify-center`}
                    glowColor={item.glowColor}
                  >
                    <div className={`${item.iconColor} p-12`}>{item.icon}</div>
                  </GlowCard>
                </div>

                {/* Text Panel */}
                <div className={item.iconLeft ? 'md:order-2' : 'md:order-1'}>
                  <h3
                    className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check />
                        <span className="text-slate-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Compact Feature Grid */}
        <div className="border-t border-slate-200 pt-16">
          <AnimateOnScroll animation="fade-up" className="text-center mb-12">
            <h3
              className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4"
              style={{ letterSpacing: '-0.01em' }}
            >
              And That&apos;s Just the Start
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {totalFeatures} features across {featureGroups.length} categories — all included in
              every plan.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {featureGroups.map((category, ci) => (
              <AnimateOnScroll key={ci} animation="fade-up" delay={100 + ci * 80}>
                <div>
                  <h4 className="text-sm font-semibold text-gold-400 tracking-widest uppercase mb-4">
                    {category.name}
                  </h4>
                  <ul className="space-y-2.5">
                    {category.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-center gap-2.5 text-slate-700 text-sm"
                      >
                        <SmallCheck />
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up" delay={200} className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center text-gold-500 hover:text-gold-400 font-semibold text-lg transition-colors duration-200"
            >
              See all {totalFeatures} features
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-up" delay={300} className="text-center mt-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gold-500/10 text-gold-400 text-sm font-medium border border-gold-500/30">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              All features included · $14.50/month · 30-day free trial
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
