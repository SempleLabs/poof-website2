'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CAROUSEL_IMAGES = [
  { src: '/hero/hero-dashboard.png', alt: 'Poof dashboard overview', phrase: 'Show me how my business is doing' },
  { src: '/hero/hero-transactions.png', alt: 'Transaction categorization', phrase: 'Categorize my transactions' },
  { src: '/hero/hero-bank-reconciliation.png', alt: 'Bank reconciliation', phrase: 'Reconcile my bank accounts' },
  { src: '/hero/hero-pnl.png', alt: 'Profit & Loss report', phrase: 'Generate my P&L report' },
  { src: '/hero/hero-spend-score.png', alt: 'Spend Score results', phrase: 'Score my spending habits' },
  { src: '/hero/hero-chat-assistant.png', alt: 'AI chat assistant', phrase: 'Ask Poof anything' },
  { src: '/hero/hero-invoices.png', alt: 'Invoice management', phrase: 'Send and track my invoices' },
  { src: '/hero/hero-expenses.png', alt: 'Expense tracking', phrase: 'Track my expenses' },
]

function useTypewriter(phrases: string[], typingSpeed = 60, deletingSpeed = 35, pauseDuration = 2000) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentPhrase.slice(0, text.length + 1))
          if (text.length + 1 === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          setText(currentPhrase.slice(0, text.length - 1))
          if (text.length === 0) {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [text, phraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return text
}

const PHRASES = CAROUSEL_IMAGES.map((img) => img.phrase)

export default function Hero() {
  const typedText = useTypewriter(PHRASES)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-50 pt-16">
      {/* Carousel background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Scrolling row - top */}
        <div className="carousel-row carousel-row-left absolute top-[5%] left-0 flex gap-6">
          {[...CAROUSEL_IMAGES.slice(0, 4), ...CAROUSEL_IMAGES.slice(0, 4)].map((img, i) => (
            <div
              key={`top-${i}`}
              className="relative w-[260px] h-[350px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-white border border-slate-200/60"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="260px"
                priority={i < 4}
              />
            </div>
          ))}
        </div>

        {/* Scrolling row - bottom */}
        <div className="carousel-row carousel-row-right absolute bottom-[5%] left-0 flex gap-6">
          {[...CAROUSEL_IMAGES.slice(4, 8), ...CAROUSEL_IMAGES.slice(4, 8)].map((img, i) => (
            <div
              key={`bottom-${i}`}
              className="relative w-[260px] h-[350px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-white border border-slate-200/60"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>
          ))}
        </div>

        {/* Center fade overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-slate-50/95 to-slate-50/40" />
      </div>

      {/* Center content */}
      <div
        className={`relative z-10 flex flex-col items-center px-4 transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Typewriter card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 px-8 py-6 sm:px-12 sm:py-8 max-w-xl w-full mb-8">
          <div className="flex items-start">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 leading-tight">
              {typedText}
              <span className="inline-block w-[3px] h-[1em] bg-gold-500 ml-1 align-middle animate-pulse" />
            </span>
          </div>
        </div>

        {/* CTA button */}
        <Link
          href="https://app.poofai.com/register"
          className="glow-border shimmer-hover bg-gold-500 text-white font-semibold px-10 py-4 rounded-xl text-lg hover:bg-gold-400 shadow-gold-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02]"
        >
          Get Started
        </Link>

        {/* Tagline */}
        <p className="mt-6 text-slate-500 text-base sm:text-lg max-w-md text-center leading-relaxed">
          AI bookkeeping that does itself.
          <br className="hidden sm:block" />
          {' '}Minutes on your books, not hours.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
