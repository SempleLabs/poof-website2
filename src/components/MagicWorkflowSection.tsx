'use client'

import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'

const steps = [
  {
    step: 1,
    title: 'Connect Your Bank',
    description:
      'Link your accounts via Plaid in under 5 minutes. Transactions from the last 30 days sync automatically.',
    glowColor: 'rgba(20, 184, 166, 0.15)',
    iconBg: 'bg-teal-500/10',
    iconColor: 'text-teal-400',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.5,1L2,6V8H21V6M16,10V17H19V19H5V17H8V10H10V17H14V10M2,22H21V20H2V22Z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: 'AI Does the Work',
    description:
      'The BRAID engine categorizes every transaction, detects recurring charges, matches payments to invoices, and scans receipts — while you sleep.',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    iconBg: 'bg-gold-500/10',
    iconColor: 'text-gold-400',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: 'done',
    description:
      'Wake up to clean books, accurate reports, and zero manual data entry. Every. Single. Day.',
    glowColor: 'rgba(139, 92, 246, 0.2)',
    iconBg: 'bg-gold-500/10',
    iconColor: 'text-gold-400',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
        <circle cx="19" cy="3" r="1.5" />
        <circle cx="21.5" cy="6" r="1" />
      </svg>
    ),
  },
]

export default function MagicWorkflowSection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            How <span className="animated-gradient-text">Poof</span> Works
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Three steps. Five minutes. Zero spreadsheets.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-1/2 left-[calc(33.33%+12px)] right-[calc(33.33%+12px)] -translate-y-1/2 z-0">
            <div className="border-t-2 border-dashed border-slate-700 w-full" />
          </div>

          {steps.map((step, i) => (
            <div key={i}>
              <AnimateOnScroll animation="fade-up" delay={200 + i * 150}>
                <GlowCard
                  className="rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm relative z-10 h-full"
                  glowColor={step.glowColor}
                  tilt={true}
                >
                  <div className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-slate-300 text-sm font-mono font-bold mb-6">
                      {step.step}
                    </div>

                    <div
                      className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 ${step.iconColor}`}
                    >
                      {step.icon}
                    </div>

                    <h3 className="font-display text-xl font-bold mb-4 text-white">
                      {step.step === 3 ? (
                        <>
                          <span className="animated-gradient-text">Poof.</span> It&apos;s Done.
                        </>
                      ) : (
                        step.title
                      )}
                    </h3>

                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </GlowCard>
              </AnimateOnScroll>

              {/* Mobile connector arrow */}
              {i < steps.length - 1 && (
                <div className="flex justify-center my-4 md:hidden">
                  <svg
                    className="w-6 h-6 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
