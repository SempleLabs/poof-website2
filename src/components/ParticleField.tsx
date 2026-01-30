'use client'

import { useEffect, useRef } from 'react'

interface VaporFieldProps {
  particleCount?: number
  colors?: string[]
  maxSize?: number
  className?: string
}

interface Particle {
  x: number
  y: number
  size: number
  color: string
  opacity: number
  vx: number
  vy: number
  fadeRate: number
}

export default function VaporField({
  particleCount = 40,
  colors = ['#eab308', '#facc15', '#2dd4bf', '#fde047'],
  maxSize = 5,
  className = '',
}: VaporFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isMobile = window.innerWidth < 768
    const count = isMobile ? Math.floor(particleCount / 3) : particleCount
    let isVisible = true

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0 }
    )
    observer.observe(canvas)

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height * 0.6 + Math.random() * canvas.height * 0.4,
      size: 3 + Math.random() * (maxSize - 1),
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.15 + Math.random() * 0.25,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(0.2 + Math.random() * 0.6),
      fadeRate: 0.001 + Math.random() * 0.002,
    })

    const initParticles = () => {
      particlesRef.current = Array.from({ length: count }, () => {
        const p = createParticle()
        p.y = Math.random() * canvas.height
        return p
      })
    }

    const animate = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particlesRef.current) {
        p.x += p.vx
        p.y += p.vy
        p.opacity -= p.fadeRate

        if (p.opacity <= 0 || p.y < -10) {
          Object.assign(p, createParticle())
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    initParticles()
    animate()

    const handleResize = () => { resize(); initParticles() }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [particleCount, colors, maxSize])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  )
}
