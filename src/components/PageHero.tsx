'use client'

import { useRef, useCallback } from 'react'
import VaporField from './ParticleField'

interface PageHeroProps {
  title: React.ReactNode
  subtitle?: string
  children?: React.ReactNode
}

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    containerRef.current.style.setProperty('--mx', `${x * 12}px`)
    containerRef.current.style.setProperty('--my', `${y * 8}px`)
  }, [])

  return (
    <section className="relative pt-32 pb-20 hero-bg overflow-hidden">
      <VaporField particleCount={20} />

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1
          className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 pb-2 leading-[1.15] tracking-tight transition-transform duration-300 ease-out"
          style={{
            letterSpacing: '-0.02em',
            transform: 'translate(calc(var(--mx, 0) * 0.5), calc(var(--my, 0) * 0.5))',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
