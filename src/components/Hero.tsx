'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SLIDES = [
  { src: '/hero/hero-dashboard.png', alt: 'Poof dashboard overview', phrase: 'Show me how my business is doing' },
  { src: '/hero/hero-transactions.png', alt: 'Transaction categorization', phrase: 'Categorize my transactions' },
  { src: '/hero/hero-bank-reconciliation.png', alt: 'Bank reconciliation', phrase: 'Reconcile my bank accounts' },
  { src: '/hero/hero-pnl.png', alt: 'Profit & Loss report', phrase: 'Generate my P&L report' },
  { src: '/hero/hero-spend-score.png', alt: 'Spend Score results', phrase: 'Score my spending habits' },
  { src: '/hero/hero-chat-assistant.png', alt: 'AI chat assistant', phrase: 'Ask Poof anything' },
  { src: '/hero/hero-invoices.png', alt: 'Invoice management', phrase: 'Send and track my invoices' },
  { src: '/hero/hero-expenses.png', alt: 'Expense tracking', phrase: 'Track my expenses' },
]

function useTypewriter(phrase: string, typingSpeed = 50) {
  const [text, setText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const prevPhraseRef = useRef(phrase)

  useEffect(() => {
    if (prevPhraseRef.current !== phrase) {
      setText('')
      setIsTypingComplete(false)
      prevPhraseRef.current = phrase
      return
    }

    if (text.length < phrase.length) {
      const timeout = setTimeout(() => {
        setText(phrase.slice(0, text.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [text, phrase, typingSpeed])

  return { text, isTypingComplete }
}

// Get wrapped offset: how far slide `i` is from `active`, wrapping around
function getWrappedOffset(i: number, active: number, total: number) {
  let diff = i - active
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  return diff
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { text: typedText, isTypingComplete } = useTypewriter(SLIDES[activeIndex].phrase)
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const goTo = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  // Auto-advance after typing completes
  useEffect(() => {
    if (isPaused || !isTypingComplete) return

    autoAdvanceRef.current = setTimeout(() => {
      goNext()
    }, 2500)

    return () => {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current)
    }
  }, [isTypingComplete, isPaused, goNext, activeIndex])

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-white pt-16">
      <div
        className={`relative w-full flex-1 flex flex-col items-center justify-center transition-opacity duration-700 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Carousel area */}
        <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px]">
          {SLIDES.map((slide, i) => {
            const offset = getWrappedOffset(i, activeIndex, SLIDES.length)
            const absOffset = Math.abs(offset)
            const isActive = offset === 0

            // Hide slides too far away
            if (absOffset > 4) return null

            // Spacing between cards (px from center)
            const spacing = 320
            const scale = isActive ? 1 : Math.max(0.65, 0.8 - (absOffset - 1) * 0.05)
            const opacity = isActive ? 1 : Math.max(0.25, 0.6 - (absOffset - 1) * 0.15)
            const xPos = offset * spacing
            const zIndex = 10 - absOffset

            return (
              <div
                key={slide.src}
                className="absolute top-1/2 left-1/2 transition-all duration-500 ease-out"
                style={{
                  transform: `translate(-50%, -50%) translateX(${xPos}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  cursor: isActive ? 'default' : 'pointer',
                }}
                onClick={() => !isActive && goTo(i)}
              >
                <div className="relative w-[260px] h-[360px] sm:w-[300px] sm:h-[410px] lg:w-[340px] lg:h-[460px] rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200/80">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover object-top"
                    sizes="340px"
                    priority={i < 3}
                  />
                </div>
              </div>
            )
          })}

          {/* Typewriter card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[88%] max-w-lg">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-200 px-6 py-5 sm:px-10 sm:py-7">
              <span className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-slate-900 leading-tight">
                {typedText}
                <span className="inline-block w-[2px] h-[1em] bg-gold-500 ml-0.5 align-middle animate-pulse" />
              </span>
              <div className="mt-4 flex justify-end">
                <Link
                  href="https://app.poofai.com/register"
                  className="bg-gold-500 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-gold-400 transition-all duration-200"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>

          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-[15] pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-[15] pointer-events-none" />
        </div>

        {/* Navigation controls */}
        <div className="flex items-center gap-2 mt-2 z-30">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full border-2 border-slate-800 flex items-center justify-center hover:bg-slate-100 transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-10 h-10 rounded-full border-2 border-slate-800 flex items-center justify-center hover:bg-slate-100 transition-colors"
            aria-label={isPaused ? 'Play' : 'Pause'}
          >
            {isPaused ? (
              <svg className="w-4 h-4 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>
          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full border-2 border-slate-800 flex items-center justify-center hover:bg-slate-100 transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tagline */}
      <div className="relative z-10 text-center pb-10 pt-2 px-4">
        <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          AI bookkeeping that does itself. Minutes on your books, not hours.
        </p>
      </div>
    </section>
  )
}
