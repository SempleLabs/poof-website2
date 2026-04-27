'use client'

import Link from 'next/link'
import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'

export default function ProfitAnalysisCta() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <GlowCard className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 sm:p-14 text-center">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Beyond Software
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-[1.15]" style={{ letterSpacing: '-0.02em' }}>
              Want expert eyes on your numbers?
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              We&apos;ll analyze your ecommerce finances, uncover profit leaks, and show you exactly what to automate.
            </p>
            <Link
              href="/profit-analysis"
              className="glow-border shimmer-hover inline-block bg-gold-500 text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-gold-lg hover:bg-gold-400 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200"
            >
              Get My Analysis
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm mt-8">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                10-15 slide report
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Clear action plan
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Optional Loom walkthrough
              </span>
            </div>
          </GlowCard>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
