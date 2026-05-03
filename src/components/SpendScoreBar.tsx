'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SpendScoreBar() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-violet-50 border-b border-violet-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="hidden sm:flex items-center justify-center w-6 h-6 rounded-full bg-violet-100 flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-sm text-slate-700 truncate">
            <span className="font-semibold">What&apos;s your Spend Score?</span>
            <span className="hidden md:inline"> Upload a bank statement. AI scores your spending in 60 seconds.</span>
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/spend-score"
            className="bg-violet-600 text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-violet-500 transition-colors"
          >
            Get My Score
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="text-slate-400 hover:text-slate-600 transition-colors p-1"
            aria-label="Dismiss"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
