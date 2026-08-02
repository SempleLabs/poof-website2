'use client'

import Link from 'next/link'
import AnimateOnScroll from './AnimateOnScroll'
import VaporField from './ParticleField'
import BookCallButton from './BookCallButton'

export default function CtaSection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <VaporField particleCount={20} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimateOnScroll animation="fade-up">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 pb-2 leading-[1.15]" style={{ letterSpacing: '-0.02em' }}>
            Ready for books that tell you which jobs made money?
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Book a 20-minute call about the managed service for trades — or start the self-serve free trial and run your own books.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <BookCallButton
              className="glow-border shimmer-hover bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg shadow-gold-lg hover:bg-gold-700 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200 text-lg"
            >
              Book a 20-minute call
            </BookCallButton>
            <Link
              href="https://app.poofai.com/register"
              className="border-2 border-slate-600 text-white font-semibold px-8 py-4 rounded-lg hover:border-gold-500/50 hover:text-gold-400 transition-all duration-200 text-lg"
            >
              Start the Free Trial
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-slate-300">
            {[
              { label: 'Controller-Reviewed', icon: '✦' },
              { label: '30-Day Refundable Pilot', icon: '⚡' },
              { label: 'Cancel Anytime', icon: '✓' },
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
  )
}
