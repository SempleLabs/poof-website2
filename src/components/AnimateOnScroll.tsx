'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-up' | 'blur-in' | 'slide-in-left' | 'slide-in-right' | 'reveal-up' | 'reveal-mask'
  delay?: number
  duration?: number
  threshold?: number
}

export default function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasMounted, setHasMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Only start hidden after client mount to avoid SSR white screen
  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasMounted, threshold])

  // Server render and before mount: fully visible (no flash of invisible content)
  if (!hasMounted) {
    return (
      <div className={className}>
        {children}
      </div>
    )
  }

  const baseStyles: React.CSSProperties = {
    transitionProperty: 'opacity, transform, filter, clip-path',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
  }

  const hiddenStyles: Record<string, React.CSSProperties> = {
    'fade-up': { opacity: 0, transform: 'translateY(40px)' },
    'fade-in': { opacity: 0 },
    'fade-left': { opacity: 0, transform: 'translateX(-40px)' },
    'fade-right': { opacity: 0, transform: 'translateX(40px)' },
    'scale-up': { opacity: 0, transform: 'scale(0.92)' },
    'blur-in': { opacity: 0, filter: 'blur(10px)' },
    'slide-in-left': { opacity: 0, transform: 'translateX(-60px) rotate(-3deg)' },
    'slide-in-right': { opacity: 0, transform: 'translateX(60px) rotate(3deg)' },
    'reveal-up': { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
    'reveal-mask': { opacity: 1, clipPath: 'inset(0 100% 0 0)' },
  }

  const visibleStyles: React.CSSProperties = {
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1) rotate(0deg)',
    filter: 'blur(0)',
    clipPath: 'inset(0)',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyles,
        ...(isVisible ? visibleStyles : hiddenStyles[animation]),
      }}
    >
      {children}
    </div>
  )
}
