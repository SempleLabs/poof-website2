import Link from 'next/link'
import PoofMark from './PoofMark'

/**
 * The lockup: the dispersing-disc mark, then "poof" in Bricolage Grotesque 800.
 * No typed period; the mark carries the sentence.
 */
export default function PoofWordmark({
  size = 28,
  onInk = false,
  href = '/',
  className = '',
  markOnly = false,
}: {
  size?: number
  onInk?: boolean
  href?: string | null
  className?: string
  markOnly?: boolean
}) {
  const lockup = (
    <span className={`inline-flex items-center gap-[0.32em] ${className}`} style={{ fontSize: size }} aria-label="Poof">
      <PoofMark size={Math.round(size * 1.15)} onInk={onInk} />
      {!markOnly && (
        <span
          className={`font-display font-extrabold leading-[0.9] tracking-[-0.05em] ${onInk ? 'text-paper' : 'text-ink'}`}
          style={{ fontSize: size }}
        >
          poof
        </span>
      )}
    </span>
  )
  if (!href) return lockup
  return (
    <Link href={href} className="inline-flex items-center" aria-label="Poof home">
      {lockup}
    </Link>
  )
}
