import crypto from 'crypto'

// Secret used to sign unsubscribe tokens. Prefer a dedicated secret, but fall
// back to the (server-only) Supabase service role key so one-click unsubscribe
// works without additional env configuration.
const SECRET =
  process.env.UNSUBSCRIBE_SECRET ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  'poof-unsubscribe-dev-secret'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.poofai.com').replace(/\/$/, '')

// Deterministic HMAC of the (lowercased) email. Lets recipients unsubscribe via
// a stable link without us storing per-send tokens, while preventing anyone from
// unsubscribing an arbitrary address by guessing.
export function makeUnsubscribeToken(email: string): string {
  return crypto.createHmac('sha256', SECRET).update(email.trim().toLowerCase()).digest('hex')
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  if (!email || !token) return false
  const expected = makeUnsubscribeToken(email)
  const a = Buffer.from(expected)
  const b = Buffer.from(token)
  if (a.length !== b.length) return false
  return crypto.timingSafeEqual(a, b)
}

export function makeUnsubscribeUrl(email: string): string {
  const params = new URLSearchParams({
    email: email.trim().toLowerCase(),
    token: makeUnsubscribeToken(email),
  })
  return `${SITE_URL}/api/newsletter/unsubscribe?${params.toString()}`
}
