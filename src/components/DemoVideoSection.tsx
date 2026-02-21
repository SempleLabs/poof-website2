'use client'

import AnimateOnScroll from './AnimateOnScroll'

export default function DemoVideoSection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-float-slow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <h2
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            See <span className="text-gradient-gold">Poof</span> in Action
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Watch how Poof automates your bookkeeping in minutes.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" delay={200}>
          <div className="aspect-video rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center">
            {/* Play button placeholder */}
            <div className="w-20 h-20 rounded-full bg-gold-500/20 border-2 border-gold-500/40 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-gold-400 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-slate-500 font-medium">Demo video coming soon</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
