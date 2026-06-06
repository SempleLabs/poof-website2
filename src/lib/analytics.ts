// Lightweight GA4 event helper.
//
// Safe to call from anywhere: it no-ops on the server and before gtag has
// loaded. GA4 Consent Mode (configured in app/layout.tsx) already governs
// whether the hit is cookie-based or modeled, so — unlike the X/Twitter pixel —
// these events do NOT need to be manually gated behind marketing consent.
//
// To make an event count as a conversion, mark its name as a "Key event" in
// GA4: Admin -> Events (or Key events) -> toggle it on.

type GtagParams = Record<string, string | number | boolean | undefined>

export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== 'function') return
  gtag('event', name, params)
}
