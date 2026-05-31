import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { verifyUnsubscribeToken } from '@/lib/unsubscribe'

// Mark an address as unsubscribed (suppression). Idempotent — succeeds even if
// the address was never in the list.
async function suppress(email: string): Promise<void> {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !supabaseKey) return

  const supabase = createClient(supabaseUrl, supabaseKey)
  await supabase
    .from('newsletter_subscribers')
    .update({ unsubscribed_at: new Date().toISOString() })
    .eq('email', email.trim().toLowerCase())
}

function resultPage(message: string, ok: boolean): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>${ok ? 'Unsubscribed' : 'Unsubscribe'} — Poof</title>
</head>
<body style="margin:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#fff;border-radius:16px;box-shadow:0 4px 6px rgba(0,0,0,0.05);overflow:hidden;">
        <tr><td style="background:linear-gradient(135deg,#7c3aed 0%,#6366f1 50%,#14b8a6 100%);padding:32px;text-align:center;">
          <span style="font-size:26px;font-weight:700;color:#fff;">Poof</span>
        </td></tr>
        <tr><td style="padding:36px 32px;text-align:center;">
          <div style="font-size:40px;margin-bottom:8px;">${ok ? '✓' : '⚠️'}</div>
          <p style="margin:0 0 24px;color:#334155;font-size:16px;line-height:1.6;">${message}</p>
          <a href="https://www.poofai.com" style="display:inline-block;background:#7c3aed;color:#fff;text-decoration:none;font-weight:600;font-size:15px;padding:12px 28px;border-radius:8px;">Back to Poof</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function readParams(request: NextRequest): { email: string; token: string } {
  const { searchParams } = new URL(request.url)
  return {
    email: searchParams.get('email') || '',
    token: searchParams.get('token') || '',
  }
}

// Link click from the email footer.
export async function GET(request: NextRequest) {
  const { email, token } = readParams(request)
  const headers = { 'Content-Type': 'text/html; charset=utf-8' }

  if (!verifyUnsubscribeToken(email, token)) {
    return new NextResponse(
      resultPage('This unsubscribe link is invalid or has expired. If you keep receiving emails, reply to any of them and we will remove you.', false),
      { status: 400, headers }
    )
  }

  await suppress(email)
  return new NextResponse(
    resultPage("You've been unsubscribed. You won't receive any more newsletter emails from Poof.", true),
    { status: 200, headers }
  )
}

// RFC 8058 one-click unsubscribe (List-Unsubscribe-Post). Mail clients POST here
// directly with the body "List-Unsubscribe=One-Click".
export async function POST(request: NextRequest) {
  const { email, token } = readParams(request)

  if (!verifyUnsubscribeToken(email, token)) {
    return NextResponse.json({ error: 'Invalid unsubscribe link.' }, { status: 400 })
  }

  await suppress(email)
  return NextResponse.json({ success: true })
}
