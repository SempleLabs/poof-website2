'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import AnimateOnScroll from './AnimateOnScroll'

/**
 * Add your screenshot filenames here.
 * Drop images into public/demo/ and add the filename to this array.
 */
const demoImages = [
  { src: '/demo/dashboard.png', alt: 'Poof Dashboard with AI daily briefing and KPIs' },
  { src: '/demo/ask_poof_full_screen.png', alt: 'Poof AI assistant in full-screen mode' },
  { src: '/demo/assistant_convo_add_customer.png', alt: 'Poof AI creating a customer via conversation' },
  { src: '/demo/invoices.png', alt: 'Invoice management with status tracking' },
  { src: '/demo/reports.png', alt: 'Financial reports with drill-down' },
  { src: '/demo/expenses.png', alt: 'Expense tracking and categorization' },
  { src: '/demo/bank_accounts.png', alt: 'Connected bank accounts overview' },
  { src: '/demo/chart_of_accounts.png', alt: 'Chart of accounts setup' },
  { src: '/demo/add_customers_screenshot.png', alt: 'Customer management database' },
  { src: '/demo/form_customization.png', alt: 'Invoice and form customization' },
  { src: '/demo/team_and_permissions.png', alt: 'Team management with role-based permissions' },
  { src: '/demo/security.png', alt: 'Security settings with two-factor authentication' },
  { src: '/demo/settings.png', alt: 'Company settings and configuration' },
]

const AUTOPLAY_INTERVAL = 5000

export default function DemoVideoSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const hasImages = demoImages.length > 0

  const next = useCallback(() => {
    if (demoImages.length <= 1) return
    setCurrent((prev) => (prev + 1) % demoImages.length)
  }, [])

  const prev = useCallback(() => {
    if (demoImages.length <= 1) return
    setCurrent((prev) => (prev - 1 + demoImages.length) % demoImages.length)
  }, [])

  useEffect(() => {
    if (!hasImages || isPaused || demoImages.length <= 1) return
    const timer = setInterval(next, AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [hasImages, isPaused, next])

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
            {hasImages
              ? 'A look inside the app — AI-powered bookkeeping that just works.'
              : 'Watch how Poof automates your bookkeeping in minutes.'}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" delay={200}>
          {hasImages ? (
            <div
              className="relative aspect-video rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Images */}
              {demoImages.map((img, index) => (
                <div
                  key={img.src}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{ opacity: index === current ? 1 : 0 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 960px"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Navigation arrows */}
              {demoImages.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-600/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-slate-900/80"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-600/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-slate-900/80"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Dot indicators */}
              {demoImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {demoImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === current
                          ? 'bg-gold-400 w-6'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="aspect-video rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center">
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
          )}
        </AnimateOnScroll>
      </div>
    </section>
  )
}
