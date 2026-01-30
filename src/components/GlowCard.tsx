'use client'

import { useRef, useCallback, ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  tilt?: boolean
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(234, 179, 8, 0.08)',
  tilt = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--glow-x', `${x}px`)
    el.style.setProperty('--glow-y', `${y}px`)
    el.style.setProperty('--glow-opacity', '1')

    if (tilt) {
      const tiltX = ((x - rect.width / 2) / (rect.width / 2)) * 3
      const tiltY = ((y - rect.height / 2) / (rect.height / 2)) * -3
      el.style.transform = `perspective(800px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`
    }
  }, [tilt])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.setProperty('--glow-opacity', '0')
    if (tilt) el.style.transform = ''
  }, [tilt])

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-transform duration-200 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--glow-opacity': '0', '--glow-x': '0px', '--glow-y': '0px' } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 z-0"
        style={{
          opacity: 'var(--glow-opacity)' as unknown as number,
          background: `radial-gradient(300px circle at var(--glow-x) var(--glow-y), ${glowColor}, transparent 60%)`,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
