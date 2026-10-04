/**
 * Where a visitor came from: `/go/<source>` sets the `poof_src` cookie (first
 * touch wins, 90 days), and every lead form records it. Social bios and captions
 * link to /go/<source>, so leads and trials can be counted per account.
 */
export const SOURCE_COOKIE = 'poof_src'
export const SOURCE_MAX_AGE = 60 * 60 * 24 * 90

/** Account short names → where the link lands and how it's tagged. */
export const SOURCES: Record<string, { to: string; utm: { source: string; medium: string; campaign: string } }> = {
  shopmath: { to: '/job-margin-check', utm: { source: 'tiktok', medium: 'social', campaign: 'shopmath' } },
  poof: { to: 'https://app.poofai.com/register', utm: { source: 'tiktok', medium: 'social', campaign: 'poof' } },
  austin: { to: '/', utm: { source: 'tiktok', medium: 'social', campaign: 'austinbuildswithai' } },
  yt: { to: 'https://app.poofai.com/register', utm: { source: 'youtube', medium: 'social', campaign: 'poof' } },
}

/** A source name we'll store: lowercase letters, digits and dashes, at most 40. */
export function cleanSource(raw: string | null | undefined): string | null {
  const s = (raw ?? '').toLowerCase().trim()
  return /^[a-z0-9-]{1,40}$/.test(s) ? s : null
}

/** In the browser: the cookie, else the URL's utm_campaign, else null. */
export function readSource(): string | null {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(/(?:^|;\s*)poof_src=([^;]+)/)
  if (m) return cleanSource(decodeURIComponent(m[1]))
  return cleanSource(new URLSearchParams(window.location.search).get('utm_campaign'))
}
