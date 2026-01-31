'use client'

import { featureGroups } from '@/lib/featureData'
import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'

const groupIcons: Record<string, JSX.Element> = {
  ai: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
    </svg>
  ),
  invoice: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,12L16,16H13.5V19H10.5V16H8L12,12Z"/>
    </svg>
  ),
  expense: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z"/>
    </svg>
  ),
  bank: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.5,1L2,6V8H21V6M16,10V17H19V19H5V17H8V10H10V17H14V10M2,22H21V20H2V22Z"/>
    </svg>
  ),
  report: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
  ),
  security: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
}

export default function FeatureSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
            Everything You Need to
            <span className="text-gradient-gold"> Automate Your Books</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            24 built-in features across 6 categories — from AI-powered categorization to financial reporting.
            No add-ons, no hidden fees.
          </p>
        </AnimateOnScroll>

        <div className="space-y-20">
          {featureGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-gold-400 bg-white border border-slate-200 shadow-sm flex-shrink-0">
                    {groupIcons[group.icon]}
                  </div>
                  <h3 className="text-gold-400 text-base font-semibold tracking-widest uppercase">
                    {group.name}
                  </h3>
                </div>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.features.map((feature, featureIndex) => (
                  <AnimateOnScroll
                    key={featureIndex}
                    animation="fade-up"
                    delay={150 + featureIndex * 80}
                  >
                    <GlowCard
                      className="rounded-xl bg-white border border-slate-200 shadow-sm h-full card-hover-lift"
                      glowColor="rgba(139, 92, 246, 0.08)"
                    >
                      <div className="p-6 h-full border-t-2 border-transparent">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </GlowCard>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AnimateOnScroll animation="scale-up" delay={200} className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gold-500/10 text-gold-400 text-sm font-medium border border-gold-500/30">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            All features included · $14.50/month · 30-day free trial
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
