import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const resendApiKey = process.env.RESEND_API_KEY

    if (!supabaseUrl || !supabaseKey || !resendApiKey) {
      console.error('Environment variables not configured')
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const resend = new Resend(resendApiKey)

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('id')
      .eq('email', email.toLowerCase())
      .single()

    if (existing) {
      return NextResponse.json(
        { message: "You're already subscribed!", success: true },
        { status: 200 }
      )
    }

    // Add subscriber to database
    const { error: insertError } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: email.toLowerCase(),
        subscribed_at: new Date().toISOString(),
        source: 'website_footer'
      })

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    }

    // Send welcome email to subscriber
    await resend.emails.send({
      from: 'Poof <noreply@poofai.com>',
      to: email,
      subject: 'Welcome to Poof!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #14b8a6 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700;">Welcome to Poof!</h1>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="margin: 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
                        Thanks for subscribing to the Poof newsletter! You're now on the list to receive:
                      </p>

                      <ul style="margin: 0 0 20px; padding-left: 20px; color: #334155; font-size: 16px; line-height: 1.8;">
                        <li>Bookkeeping tips and best practices</li>
                        <li>Product updates and new features</li>
                        <li>Exclusive insights for small business owners</li>
                      </ul>

                      <p style="margin: 0 0 30px; color: #334155; font-size: 16px; line-height: 1.6;">
                        We're building AI-powered bookkeeping that actually works for small businesses. Stay tuned for updates!
                      </p>

                      <table cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                        <tr>
                          <td style="background-color: #8b5cf6; border-radius: 8px;">
                            <a href="https://www.poofai.com" style="display: inline-block; padding: 14px 28px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 16px;">
                              Learn More About Poof
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px; background-color: #f8fafc; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0 0 10px; color: #64748b; font-size: 14px;">
                        Poof - AI-Powered Bookkeeping for Small Businesses
                      </p>
                      <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                        You received this email because you subscribed at poofai.com
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    })

    // Notify you of new subscriber
    const notifyEmail = process.env.NOTIFY_EMAIL
    if (notifyEmail) {
      await resend.emails.send({
        from: 'Poof <noreply@poofai.com>',
        to: notifyEmail,
        subject: `New newsletter subscriber: ${email}`,
        html: `
          <p>A new subscriber signed up for the Poof newsletter:</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</p>
        `
      })
    }

    return NextResponse.json(
      {
        message: 'Thanks for subscribing!',
        success: true,
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    )
  }
}
