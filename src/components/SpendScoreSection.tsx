'use client'

import Link from 'next/link'

export default function SpendScoreSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-200 rounded-2xl px-6 py-10 sm:px-12 sm:py-12">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Free Tool
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            What&apos;s your <span className="text-violet-600">Spend Score</span>?
          </h2>
          <p className="text-slate-600 text-lg mb-6 max-w-lg mx-auto">
            Upload a bank statement and AI will score your spending in 60 seconds. No signup required.
          </p>
          <Link
            href="/spend-score"
            className="inline-block bg-violet-600 text-white font-semibold px-8 py-3.5 rounded-lg text-base hover:bg-violet-500 shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            Get My Score
          </Link>
          <div className="flex items-center justify-center gap-4 text-xs text-slate-400 mt-4">
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
      </div>
    </section>
  )
}
