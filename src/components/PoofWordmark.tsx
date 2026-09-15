import Link from 'next/link'

/**
 * The wordmark: lowercase "poof" in Bricolage Grotesque 800 with a DRAWN period,
 * the same circle as the mark's dot. Never typeset the period (Bricolage's is an oval).
 */
export default function PoofWordmark({
  size = 28,
  onInk = false,
  href = '/',
  className = '',
}: {
  size?: number
  onInk?: boolean
  href?: string | null
  className?: string
}) {
  const mark = (
    <span className={`poof-wm ${onInk ? 'on-ink' : ''} ${className}`} style={{ fontSize: size }} aria-label="Poof">
      poof<span className="dot">.</span>
    </span>
  )
  if (!href) return mark
  return (
    <Link href={href} className="inline-flex items-center" aria-label="Poof home">
      {mark}
    </Link>
  )
}
