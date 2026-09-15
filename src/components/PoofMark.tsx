/**
 * The mark: a full stop, boxed. Hard-cornered square outline in ink, centered ledger-green dot
 * about 38% of the box. Same geometry as the app's PoofMark (viewBox 64, rect 2..62, r 12.16).
 */
export default function PoofMark({ size = 24, onInk = false, className = '' }: { size?: number; onInk?: boolean; className?: string }) {
  const stroke = onInk ? '#EEF2EA' : '#12211A'
  const dot = onInk ? '#A9D8B8' : '#1B5E3F'
  const fill = onInk ? '#12211A' : '#FFFFFF'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="60" height="60" fill={fill} stroke={stroke} strokeWidth="4" />
      <circle cx="32" cy="32" r="12.16" fill={dot} />
    </svg>
  )
}
