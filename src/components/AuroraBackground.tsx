'use client'

import { useRef, useEffect, useCallback } from 'react'

// Aurora ribbon configuration
const RIBBONS = [
  { yBase: 0.25, amplitude: 80, wavelength: 0.003, speed: 0.4, thickness: 220, hueStart: 270, hueEnd: 200, opacity: 0.22 },
  { yBase: 0.35, amplitude: 60, wavelength: 0.004, speed: 0.3, thickness: 180, hueStart: 260, hueEnd: 174, opacity: 0.18 },
  { yBase: 0.45, amplitude: 100, wavelength: 0.0025, speed: 0.5, thickness: 260, hueStart: 200, hueEnd: 174, opacity: 0.16 },
  { yBase: 0.55, amplitude: 50, wavelength: 0.0035, speed: 0.35, thickness: 160, hueStart: 280, hueEnd: 240, opacity: 0.18 },
  { yBase: 0.65, amplitude: 70, wavelength: 0.003, speed: 0.45, thickness: 200, hueStart: 240, hueEnd: 174, opacity: 0.14 },
]

const SPARKLE_COUNT = 50

interface Sparkle {
  x: number
  y: number
  size: number
  phase: number
  speed: number
  brightness: number
}

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const timeRef = useRef(0)
  const sparklesRef = useRef<Sparkle[]>([])
  const visibleRef = useRef(true)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !visibleRef.current) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const w = canvas.width / dpr
    const h = canvas.height / dpr

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.scale(dpr, dpr)

    timeRef.current += 0.008

    const t = timeRef.current

    // Draw aurora ribbons
    for (const ribbon of RIBBONS) {
      const baseY = h * ribbon.yBase

      // Draw ribbon as a series of vertical gradient strips
      const step = 3
      for (let x = -20; x < w + 20; x += step) {
        // Multiple sine waves for organic undulation
        const wave1 = Math.sin(x * ribbon.wavelength + t * ribbon.speed) * ribbon.amplitude
        const wave2 = Math.sin(x * ribbon.wavelength * 1.7 + t * ribbon.speed * 0.7 + 2.0) * ribbon.amplitude * 0.4
        const wave3 = Math.sin(x * ribbon.wavelength * 0.5 + t * ribbon.speed * 1.3 + 4.5) * ribbon.amplitude * 0.3
        const y = baseY + wave1 + wave2 + wave3

        // Vary thickness along the ribbon
        const thicknessWave = 1 + Math.sin(x * 0.005 + t * 0.3) * 0.3 + Math.sin(x * 0.002 + t * 0.15) * 0.2
        const thickness = ribbon.thickness * thicknessWave

        // Color shifts along the ribbon
        const colorT = (Math.sin(x * 0.002 + t * 0.2) + 1) / 2
        const hue = ribbon.hueStart + (ribbon.hueEnd - ribbon.hueStart) * colorT

        // Intensity varies — brighter at peaks, creates curtain folds
        const foldIntensity = Math.abs(Math.cos(x * ribbon.wavelength + t * ribbon.speed))
        const opacity = ribbon.opacity * (0.5 + foldIntensity * 0.5)

        // Vertical gradient for each strip
        const grad = ctx.createLinearGradient(x, y - thickness / 2, x, y + thickness / 2)
        grad.addColorStop(0, `hsla(${hue}, 70%, 60%, 0)`)
        grad.addColorStop(0.3, `hsla(${hue}, 70%, 60%, ${opacity * 0.6})`)
        grad.addColorStop(0.5, `hsla(${hue}, 75%, 55%, ${opacity})`)
        grad.addColorStop(0.7, `hsla(${hue}, 70%, 60%, ${opacity * 0.6})`)
        grad.addColorStop(1, `hsla(${hue}, 70%, 60%, 0)`)

        ctx.fillStyle = grad
        ctx.fillRect(x, y - thickness / 2, step + 1, thickness)
      }
    }

    // Draw sparkles
    const sparkles = sparklesRef.current
    for (const sparkle of sparkles) {
      sparkle.phase += sparkle.speed
      const twinkle = Math.pow((Math.sin(sparkle.phase) + 1) / 2, 3)
      const alpha = twinkle * sparkle.brightness

      if (alpha < 0.01) continue

      // Soft glow
      const glowSize = sparkle.size * 4
      const glowGrad = ctx.createRadialGradient(
        sparkle.x, sparkle.y, 0,
        sparkle.x, sparkle.y, glowSize
      )
      glowGrad.addColorStop(0, `rgba(200, 180, 255, ${alpha * 0.8})`)
      glowGrad.addColorStop(0.3, `rgba(200, 180, 255, ${alpha * 0.3})`)
      glowGrad.addColorStop(1, 'rgba(200, 180, 255, 0)')
      ctx.fillStyle = glowGrad
      ctx.fillRect(sparkle.x - glowSize, sparkle.y - glowSize, glowSize * 2, glowSize * 2)

      // Bright core
      ctx.globalAlpha = alpha
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.arc(sparkle.x, sparkle.y, sparkle.size * 0.5, 0, Math.PI * 2)
      ctx.fill()

      // Star cross
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.6})`
      ctx.lineWidth = 0.5
      const crossSize = sparkle.size * twinkle * 2
      ctx.beginPath()
      ctx.moveTo(sparkle.x - crossSize, sparkle.y)
      ctx.lineTo(sparkle.x + crossSize, sparkle.y)
      ctx.moveTo(sparkle.x, sparkle.y - crossSize)
      ctx.lineTo(sparkle.x, sparkle.y + crossSize)
      ctx.stroke()

      ctx.globalAlpha = 1
    }

    ctx.restore()
    rafRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const setup = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.parentElement!.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      // Initialize sparkles
      const sparkles: Sparkle[] = []
      for (let i = 0; i < SPARKLE_COUNT; i++) {
        sparkles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size: 1 + Math.random() * 2,
          phase: Math.random() * Math.PI * 2,
          speed: 0.015 + Math.random() * 0.025,
          brightness: 0.3 + Math.random() * 0.5,
        })
      }
      sparklesRef.current = sparkles
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting
        if (entry.isIntersecting) {
          rafRef.current = requestAnimationFrame(draw)
        }
      },
      { threshold: 0 }
    )

    setup()
    observer.observe(canvas)
    window.addEventListener('resize', setup)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
      window.removeEventListener('resize', setup)
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
