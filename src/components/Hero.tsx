'use client'

import Link from 'next/link'
import AuroraBackground from './AuroraBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      <AuroraBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center px-5 py-2 rounded-full bg-violet-50 border border-gold-500/30 text-gold-600 text-sm font-medium tracking-[0.15em] uppercase mb-8 mt-24 md:mt-8"
          >
            AI-Powered Bookkeeping
          </div>

          {/* Main Heading */}
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.05] tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Bookkeeping That
            <br />
            <span className="text-gradient-gold">Does Itself</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again.
          </p>

          <p className="font-display text-2xl sm:text-3xl text-gold-400 font-bold italic mb-8 tracking-tight">
            Poof. It&apos;s done.
          </p>

          {/* Benefit badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['5-minute setup', '90% fewer manual entries', '30-day free trial'].map((text) => (
              <div key={text} className="flex items-center bg-slate-100 border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-700">
                <span className="w-2 h-2 rounded-full bg-teal-400 mr-2" />
                {text}
              </div>
            ))}
          </div>

          {/* Spend Score CTA */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <p className="text-lg sm:text-xl font-bold text-slate-800">
              What&apos;s your <span className="text-violet-600">Spend Score</span>?
            </p>
            <p className="text-sm text-slate-500 mb-2">
              Upload a bank statement. AI scores your spending in 60 seconds.
            </p>
            <Link
              href="/spend-score"
              className="bg-violet-600 text-white font-semibold px-6 py-3 rounded-lg text-base hover:bg-violet-500 shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              Get My Score
            </Link>
            <div className="flex items-center gap-3 text-xs text-slate-400 mt-1.5">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure
              </span>
              <span>No signup required</span>
              <span>Data never stored</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <Link
              href="https://app.poofai.com/register"
              className="glow-border shimmer-hover bg-gold-500 text-white font-semibold px-8 py-3.5 rounded-lg text-lg hover:bg-gold-400 shadow-gold-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Start Free Trial →
            </Link>
            <Link
              href="/demo"
              className="border-2 border-slate-300 text-slate-700 font-semibold px-8 py-3.5 rounded-lg text-lg hover:border-gold-500/50 hover:text-gold-500 transition-all duration-200"
            >
              Request Demo
            </Link>
          </div>

          <div className="mt-16 text-slate-500 text-sm">
            <p>Built for small businesses who hate manual bookkeeping</p>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
