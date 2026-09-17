/**
 * The mark: a disc dispersing into particles, and one green particle that stayed.
 * "The work disappears. The evidence doesn't."
 * Geometry on a 64 grid: the approved D1, verbatim. Identical to public/poof-mark.svg and the app's PoofMark.
 * Do not re-derive these numbers from a formula; they are the design.
 */
export default function PoofMark({ size = 24, onInk = false, className = '' }: { size?: number; onInk?: boolean; className?: string }) {
  const c = onInk ? '#E8EFE9' : '#12211A'
  const a = onInk ? '#A9D8B8' : '#1B5E3F'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <path d="M30 10 A22 22 0 0 0 30 54 Z" fill={c} />
      <circle cx="38" cy="12" r="3.6" fill={c} />
      <circle cx="45.5" cy="20" r="3.4" fill={c} />
      <circle cx="49" cy="32" r="3.2" fill={c} />
      <circle cx="45.5" cy="44" r="3.4" fill={c} />
      <circle cx="38" cy="52" r="3.6" fill={c} />
      <circle cx="53" cy="16" r="2" fill={c} />
      <circle cx="53" cy="48" r="2" fill={c} />
      <circle cx="58.5" cy="32" r="2.6" fill={a} />
    </svg>
  )
}
