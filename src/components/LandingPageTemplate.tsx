'use client'

import Link from 'next/link'
import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'
import VaporField from './ParticleField'

export interface LandingPageConfig {
  hero: {
    headline: string
    highlightedWord?: string
    subheadline: string
    ctaText: string
    ctaHref: string
  }
  painPoints: {
    title: string
    items: string[]
  }
  whatsIncluded?: {
    title: string
    items: { label: string; description: string }[]
  }
  howItWorks?: {
    title: string
    steps: { number: string; title: string; description: string }[]
  }
  socialProof?: {
    title: string
    items: { quote: string; name: string; company: string }[]
  }
  cta: {
    headline: string
    subheadline: string
    buttonText: string
    buttonHref: string
  }
  showIntakeForm?: boolean
  complianceNote?: string
}

export default function LandingPageTemplate({ config }: { config: LandingPageConfig }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80dvh] flex items-center justify-center hero-bg overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <AnimateOnScroll animation="fade-up">
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.08] tracking-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              {config.hero.highlightedWord ? (
                <>
                  {config.hero.headline.split(config.hero.highlightedWord)[0]}
                  <span className="text-gradient-gold">{config.hero.highlightedWord}</span>
                  {config.hero.headline.split(config.hero.highlightedWord)[1]}
                </>
              ) : (
                config.hero.headline
              )}
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {config.hero.subheadline}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-up" delay={200}>
            <Link
              href={config.hero.ctaHref}
              className="glow-border shimmer-hover inline-block bg-gold-500 text-white font-semibold px-10 py-4 rounded-lg text-lg hover:bg-gold-400 shadow-gold-lg transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02]"
            >
              {config.hero.ctaText}
            </Link>
          </AnimateOnScroll>

          {config.complianceNote && (
            <AnimateOnScroll animation="fade-in" delay={400}>
              <p className="text-xs text-slate-400 mt-6 max-w-lg mx-auto leading-relaxed">
                {config.complianceNote}
              </p>
            </AnimateOnScroll>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              {config.painPoints.title}
            </h2>
            <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
              If any of these sound familiar, you&apos;re not alone.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {config.painPoints.items.map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                <GlowCard className="bg-slate-50 border border-slate-200 rounded-xl p-6 card-hover-lift h-full">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-sm font-semibold">
                      !
                    </span>
                    <p className="text-slate-700 leading-relaxed">{item}</p>
                  </div>
                </GlowCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      {config.whatsIncluded && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
                {config.whatsIncluded.title}
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.whatsIncluded.items.map((item, i) => (
                <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                  <GlowCard className="bg-white border border-slate-200 rounded-xl p-6 card-hover-lift h-full">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-50 text-gold-500 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{item.label}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </GlowCard>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {config.howItWorks && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
                {config.howItWorks.title}
              </h2>
            </AnimateOnScroll>

            <div className="space-y-0">
              {config.howItWorks.steps.map((step, i) => (
                <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                  <div className="flex gap-6 items-start relative">
                    {/* Connector line */}
                    {i < config.howItWorks!.steps.length - 1 && (
                      <div className="absolute left-6 top-14 w-px h-[calc(100%-2rem)] bg-gradient-to-b from-gold-300 to-slate-200" />
                    )}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold text-lg shadow-gold relative z-10">
                      {step.number}
                    </div>
                    <div className="pb-10">
                      <h3 className="font-semibold text-lg text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Proof Section (Placeholder) */}
      {config.socialProof && config.socialProof.items.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
                {config.socialProof.title}
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.socialProof.items.map((item, i) => (
                <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                  <GlowCard className="bg-white border border-slate-200 rounded-xl p-6 card-hover-lift">
                    <p className="text-slate-600 italic mb-4">&ldquo;{item.quote}&rdquo;</p>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{item.name}</p>
                      <p className="text-slate-400 text-xs">{item.company}</p>
                    </div>
                  </GlowCard>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <VaporField particleCount={20} />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-[1.15]" style={{ letterSpacing: '-0.02em' }}>
              {config.cta.headline}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              {config.cta.subheadline}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-up" delay={200}>
            <Link
              href={config.cta.buttonHref}
              className="glow-border shimmer-hover inline-block bg-gold-500 text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-gold-lg hover:bg-gold-400 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200"
            >
              {config.cta.buttonText}
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-slate-300 mt-12">
              {[
                { label: 'Limited Spots Available', icon: '✦' },
                { label: 'Results in 5-7 Days', icon: '⚡' },
                { label: '100% Confidential', icon: '✓' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <span className="text-teal-400 text-xl mb-2">{item.icon}</span>
                  <div className="text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
