import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const { email, transactionCount, topCategory } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 })
    }

    // Save lead to Supabase
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey)
      await supabase.from('report_leads').insert({
        email,
        source: 'spend_score',
        transaction_count: transactionCount || null,
        top_category: topCategory || null,
      })
    }

    // Send notification email
    const resendKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL

    if (resendKey && notifyEmail) {
      const resend = new Resend(resendKey)

      await resend.emails.send({
        from: 'Poof <noreply@poofai.com>',
        to: notifyEmail,
        subject: 'New Spend Score Lead',
        html: `
          <h2>New Spend Score Lead</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Transactions analyzed:</strong> ${transactionCount || 'N/A'}</p>
          <p><strong>Top category:</strong> ${topCategory || 'N/A'}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    // Don't fail the user experience if email saving fails
    console.error('Email save error:', err)
    return NextResponse.json({ success: true })
  }
}
