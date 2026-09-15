import { ReactNode, CSSProperties } from 'react'

/** Formerly a mouse-following glow; the ledger-green system has no glow. Same API, plain card. */
export default function GlowCard({
  children,
  className = '',
  style,
}: {
  children?: ReactNode
  className?: string
  glowColor?: string
  tilt?: boolean
  style?: CSSProperties
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
