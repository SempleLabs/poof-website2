'use client'

import { useRef, useEffect, useCallback } from 'react'

const GRID_SPACING = 40
const MAX_RADIUS = 4
const MIN_RADIUS = 0.5
const VISIBLE_RADIUS = 400
const EASE = 0.03
const ORBIT_SPEED = 0.003
const MOUSE_LAG = 0.02

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const smoothMouseRef = useRef({ x: -1000, y: -1000 })
  const rafRef = useRef<number>(0)
  const visibleRef = useRef(true)
  const homeRef = useRef<Float32Array | null>(null)
  const posRef = useRef<Float32Array | null>(null)
  const sizesRef = useRef<Float32Array | null>(null)
  const countRef = useRef(0)
  const timeRef = useRef(0)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !visibleRef.current) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const w = canvas.width / dpr
    const h = canvas.height / dpr

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.scale(dpr, dpr)

    timeRef.current += ORBIT_SPEED
    const t = timeRef.current

    // Lagged mouse for position/visibility, real mouse for breathing
    const sm = smoothMouseRef.current
    sm.x += (mouseRef.current.x - sm.x) * MOUSE_LAG
    sm.y += (mouseRef.current.y - sm.y) * MOUSE_LAG
    const mx = sm.x
    const my = sm.y
    const rmx = mouseRef.current.x
    const rmy = mouseRef.current.y

    if (!homeRef.current) return

    const home = homeRef.current
    const pos = posRef.current!
    const sizes = sizesRef.current!
    const count = countRef.current

    // Color stops: purple(270°) → blue(240°) → teal(174°)
    const hues = [270, 240, 174]

    for (let i = 0; i < count; i++) {
      const pi = i * 2
      const homeX = home[pi]
      const homeY = home[pi + 1]

      const dx = homeX - mx
      const dy = homeY - my
      const dist = Math.sqrt(dx * dx + dy * dy)

      // Organic visible radius — wobbles per angle + time
      const angle0 = Math.atan2(dy, dx)
      const radiusWobble = Math.sin(t * 0.5 + angle0 * 2) * 60
        + Math.sin(t * 0.3 + angle0 * 5 + 1.5) * 35
        + Math.sin(t * 0.8 - angle0 * 3 + 3.0) * 25
      const effectiveRadius = VISIBLE_RADIUS + radiusWobble

      if (dist > effectiveRadius + 40) {
        sizes[i] += (MAX_RADIUS - sizes[i]) * 0.08
        pos[pi] += (homeX - pos[pi]) * EASE
        pos[pi + 1] += (homeY - pos[pi + 1]) * EASE
        continue
      }

      const proximity = Math.max(0, 1 - dist / effectiveRadius)

      // Size: shrinks near mouse + oscillating pulse
      const baseShrink = MAX_RADIUS - proximity * proximity * (MAX_RADIUS - MIN_RADIUS)
      const sizePulse = Math.sin(t * 0.6 + homeX * 0.01 + homeY * 0.008) * 0.8
        + Math.sin(t * 1.0 - homeX * 0.006 + homeY * 0.012) * 0.5
      const targetSize = Math.max(MIN_RADIUS, baseShrink + sizePulse * proximity)
      sizes[i] += (targetSize - sizes[i]) * 0.08

      let targetX = homeX
      let targetY = homeY

      // Use real (instant) mouse for breathing/swirl so movement stays snappy
      const rdx = homeX - rmx
      const rdy = homeY - rmy
      const rdist = Math.sqrt(rdx * rdx + rdy * rdy)
      const rProximity = Math.max(0, 1 - rdist / effectiveRadius)

      if (rdist > 1) {
        const angle = Math.atan2(rdy, rdx)

        // Radial breathing — world-coordinate waves so neighbors move together
        const breathFalloff = Math.pow(rProximity, 0.25)
        const breath1 = Math.sin(t * 0.8 + homeX * 0.003 + homeY * 0.002) * 55
        const breath2 = Math.sin(t * 0.5 - homeX * 0.002 + homeY * 0.004) * 38
        const breath3 = Math.sin(t * 1.2 + homeX * 0.004 - homeY * 0.003) * 25
        const breathTotal = (breath1 + breath2 + breath3) * breathFalloff

        const radX = (rdx / rdist) * breathTotal
        const radY = (rdy / rdist) * breathTotal

        // Tangential swirl
        const swirlFalloff = Math.pow(rProximity, 0.25)
        const swirl1 = Math.sin(t * 0.6 + angle * 2 + homeX * 0.003) * 35
        const swirl2 = Math.sin(t * 0.9 + angle * 1.5 + homeY * 0.003) * 22
        const swirl = (swirl1 + swirl2) * swirlFalloff
        const perpX = -rdy / rdist
        const perpY = rdx / rdist

        // Wind drift — slow directional push that shifts over time
        const windAngle = t * 0.15
        const windStrength = (Math.sin(t * 0.3 + homeX * 0.004) * 0.5 + 0.5) * rProximity * 12
        const windX = Math.cos(windAngle) * windStrength
        const windY = Math.sin(windAngle) * windStrength * 0.6

        let offX = radX + perpX * swirl + windX
        let offY = radY + perpY * swirl + windY

        // Clamp displacement to half grid spacing so dots never cross neighbors
        const maxOff = GRID_SPACING * 0.8
        const offDist = Math.sqrt(offX * offX + offY * offY)
        if (offDist > maxOff) {
          const scale = maxOff / offDist
          offX *= scale
          offY *= scale
        }

        targetX = homeX + offX
        targetY = homeY + offY
      }

      pos[pi] += (targetX - pos[pi]) * EASE
      pos[pi + 1] += (targetY - pos[pi + 1]) * EASE

      // Color cycling — multiple overlapping waves break up banding
      const cw1 = Math.sin(t * 0.7 + homeX * 0.03 + homeY * 0.01)
      const cw2 = Math.sin(t * 1.1 - homeX * 0.015 + homeY * 0.035)
      const cw3 = Math.sin(t * 0.4 + homeX * 0.02 - homeY * 0.025)
      const colorWave = ((cw1 + cw2 + cw3) / 3 + 1) / 2 // 0→1
      const idx2 = colorWave * 2
      const stopIdx = Math.min(Math.floor(idx2), 1)
      const frac = idx2 - stopIdx
      const hue = hues[stopIdx] + (hues[stopIdx + 1] - hues[stopIdx]) * frac

      // Inner dots fade out — peak opacity at mid-range
      const fadeInner = proximity > 0.4 ? 1 - (proximity - 0.4) / 0.6 * 0.85 : 1
      ctx.globalAlpha = (0.08 + proximity * 0.35) * fadeInner
      ctx.fillStyle = `hsl(${hue}, 70%, 55%)`

      ctx.beginPath()
      ctx.arc(pos[pi], pos[pi + 1], sizes[i], 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.globalAlpha = 1
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    rafRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scatter = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.parentElement!.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      const w = rect.width
      const h = rect.height
      const cols = Math.ceil(w / GRID_SPACING) + 1
      const rows = Math.ceil(h / GRID_SPACING) + 1
      const count = cols * rows
      countRef.current = count

      const home = new Float32Array(count * 2)
      const pos = new Float32Array(count * 2)
      let idx = 0
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * GRID_SPACING
          const y = r * GRID_SPACING
          home[idx] = x
          home[idx + 1] = y
          pos[idx] = x
          pos[idx + 1] = y
          idx += 2
        }
      }
      homeRef.current = home
      posRef.current = pos
      sizesRef.current = new Float32Array(count).fill(MAX_RADIUS)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
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

    scatter()
    observer.observe(canvas)
    window.addEventListener('resize', scatter)
    canvas.parentElement!.addEventListener('mousemove', handleMouseMove)
    canvas.parentElement!.addEventListener('mouseleave', handleMouseLeave)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
      window.removeEventListener('resize', scatter)
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove)
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none hidden md:block"
      aria-hidden="true"
    />
  )
}
