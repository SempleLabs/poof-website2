/**
 * The mark: a disc dispersing into particles, and one green particle that stayed.
 * "The work disappears. The evidence doesn't."
 * Geometry on a 64 grid, identical to public/poof-mark.svg and the app's PoofMark.
 */
export default function PoofMark({ size = 24, onInk = false, className = '' }: { size?: number; onInk?: boolean; className?: string }) {
  const c = onInk ? '#E8EFE9' : '#12211A'
  const a = onInk ? '#A9D8B8' : '#1B5E3F'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <path d="M30 10 A22 22 0 0 0 30 54 Z" fill={c} />
      <circle cx="34.92" cy="13.65" r="3.6" fill={c} />
      <circle cx="44.97" cy="20.30" r="3.4" fill={c} />
      <circle cx="49" cy="32" r="3.2" fill={c} />
      <circle cx="44.97" cy="43.70" r="3.4" fill={c} />
      <circle cx="34.92" cy="50.35" r="3.6" fill={c} />
      <circle cx="46.01" cy="11.51" r="2" fill={c} />
      <circle cx="46.01" cy="52.49" r="2" fill={c} />
      <circle cx="59" cy="32" r="2.8" fill={a} />
    </svg>
  )
}
