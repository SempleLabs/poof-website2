import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, business_name, website, revenue_range, pain_point, accounting_software, business_type, platforms, source } = body

    if (!name || !email || !business_name || !revenue_range) {
      return NextResponse.json(
        { error: 'Name, email, business name, and revenue range are required.' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const resendApiKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL

    // Store in Supabase if configured
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey)

      const { error: insertError } = await supabase
        .from('intake_submissions')
        .insert({
          name,
          email: email.toLowerCase(),
          business_name,
          website: website || null,
          revenue_range,
          pain_point: pain_point || null,
          accounting_software: accounting_software || null,
          business_type: business_type || null,
          platforms: platforms || [],
          source: source || 'profit-analysis',
          submitted_at: new Date().toISOString(),
        })

      if (insertError) {
        console.error('Supabase insert error:', insertError)
      }
    }

    // Send notification email to Austin
    if (resendApiKey && notifyEmail) {
      const resend = new Resend(resendApiKey)

      await resend.emails.send({
        from: 'Poof <noreply@poofai.com>',
        to: notifyEmail,
        subject: `New Profit Analysis Application: ${business_name}`,
        html: `
          <h2>New Intake Submission</h2>
          <p><strong>Source:</strong> ${source || 'profit-analysis'}</p>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Business:</strong> ${business_name}</p>
          <p><strong>Website:</strong> ${website || 'Not provided'}</p>
          <p><strong>Monthly Revenue:</strong> ${revenue_range}</p>
          <p><strong>Business Type:</strong> ${business_type || 'Not specified'}</p>
          <p><strong>Accounting Software:</strong> ${accounting_software || 'Not specified'}</p>
          <p><strong>Platforms:</strong> ${platforms?.length ? platforms.join(', ') : 'None selected'}</p>
          <p><strong>Pain Point:</strong> ${pain_point || 'Not provided'}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</p>
        `
      })

      // Send confirmation email to applicant
      await resend.emails.send({
        from: 'Poof <noreply@poofai.com>',
        to: email,
        subject: 'We received your application — Poof Profit Analysis',
        html: `
          <!DOCTYPE html>
          <html>
          <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
          <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    <tr>
                      <td style="background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #14b8a6 100%); padding: 40px 30px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Application Received</h1>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 40px 30px;">
                        <p style="margin: 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
                          Hi ${name},
                        </p>
                        <p style="margin: 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
                          Thanks for applying for a Poof Ecommerce Profit & Cash Flow Analysis. We've received your submission for <strong>${business_name}</strong>.
                        </p>
                        <p style="margin: 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
                          Here's what happens next:
                        </p>
                        <ol style="margin: 0 0 20px; padding-left: 20px; color: #334155; font-size: 16px; line-height: 1.8;">
                          <li>We'll review your application within 1-2 business days</li>
                          <li>If accepted, we'll send you secure instructions to share your financial data</li>
                          <li>You'll receive your analysis within 5-7 business days of sharing data</li>
                        </ol>
                        <p style="margin: 0; color: #334155; font-size: 16px; line-height: 1.6;">
                          If you have any questions in the meantime, just reply to this email.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 30px; background-color: #f8fafc; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="margin: 0; color: #64748b; font-size: 14px;">Poof - AI-Powered Financial Analysis for Ecommerce</p>
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
    }

    return NextResponse.json({ message: 'Application received!', success: true }, { status: 200 })
  } catch (error) {
    console.error('Intake submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit. Please try again later.' },
      { status: 500 }
    )
  }
}
