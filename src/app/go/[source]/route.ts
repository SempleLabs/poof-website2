import { NextRequest, NextResponse } from 'next/server'
import { SOURCES, SOURCE_COOKIE, SOURCE_MAX_AGE, cleanSource } from '@/lib/source'

/**
 * /go/<source> — the tracking link in each social bio and caption. Records the
 * source (first touch wins) and sends the visitor on with UTM tags; the trial
 * link also carries `src` so the app can store it at sign-up.
 */
export function GET(request: NextRequest, { params }: { params: { source: string } }) {
  const source = cleanSource(params.source)
  const known = source ? SOURCES[source] : undefined
  const target = new URL(known?.to ?? '/', request.nextUrl.origin)
  if (known) {
    target.searchParams.set('utm_source', known.utm.source)
    target.searchParams.set('utm_medium', known.utm.medium)
    target.searchParams.set('utm_campaign', known.utm.campaign)
  }
  if (source && target.host === 'app.poofai.com') target.searchParams.set('src', source)

  const res = NextResponse.redirect(target, 302)
  if (source && !request.cookies.get(SOURCE_COOKIE)) {
    res.cookies.set(SOURCE_COOKIE, source, { maxAge: SOURCE_MAX_AGE, path: '/', sameSite: 'lax', secure: true })
  }
  return res
}
