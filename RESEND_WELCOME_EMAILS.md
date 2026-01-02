# Resend Welcome Emails & Newsletter Setup

Complete guide to setting up welcome emails, audiences, and broadcasts using Resend.

## Overview

Since you're already using Resend in your app, you can leverage it for:
1. **Newsletter subscriptions** - Collecting subscribers from website
2. **Welcome emails** - Automated email when someone subscribes
3. **Broadcasts** - Sending newsletters to all subscribers
4. **Audience management** - Managing subscriber list

---

## Part 1: Newsletter Integration

### Step 1: Create an Audience

1. Log into https://resend.com/dashboard
2. Navigate to **Audiences** in the sidebar
3. Click **Create Audience**
4. Name it: **"Newsletter Subscribers"**
5. Copy the **Audience ID** (looks like `aud_xxx`)

### Step 2: Add Environment Variable

Add to your `.env.local` file:

```bash
RESEND_API_KEY=re_xxx  # Should already exist from your app
RESEND_AUDIENCE_ID=aud_xxx  # Your new audience ID
```

**Important:** Never commit `.env.local` to Git!

### Step 3: Install Resend SDK

If not already installed:

```bash
npm install resend
```

### Step 4: Update Newsletter API Route

Edit `/src/app/api/newsletter/subscribe/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Add contact to Resend audience
    const contact = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    })

    console.log('Contact added to Resend:', contact)

    return NextResponse.json({
      message: 'Successfully subscribed! Check your inbox for a confirmation email.'
    })

  } catch (error: any) {
    console.error('Newsletter subscription error:', error)

    // Handle duplicate email
    if (error.message?.includes('already exists')) {
      return NextResponse.json(
        { error: 'This email is already subscribed!' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
```

### Step 5: Test Newsletter Subscription

1. Visit your website footer or Resources page
2. Enter an email address
3. Click Subscribe
4. Check Resend dashboard → Audiences → Newsletter Subscribers
5. Verify the email was added

---

## Part 2: Welcome Email Setup

Welcome emails are automatically sent when someone subscribes to your newsletter.

### Option A: Using Resend's Built-in Welcome Email (Recommended)

1. In Resend dashboard, go to **Audiences**
2. Select your **Newsletter Subscribers** audience
3. Click **Settings** tab
4. Scroll to **Welcome Email**
5. Toggle **Enable welcome email**
6. Configure:
   - **From Name:** Poof
   - **From Email:** noreply@poofai.com (or your verified domain)
   - **Subject:** Welcome to Poof's Newsletter!
   - **Email Template:** Create below

**Welcome Email Template:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Poof!</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header with gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%); padding: 40px 40px 40px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                Welcome to Poof! ✨
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="font-size: 16px; line-height: 24px; color: #374151; margin: 0 0 20px 0;">
                Hi there! 👋
              </p>

              <p style="font-size: 16px; line-height: 24px; color: #374151; margin: 0 0 20px 0;">
                Thanks for subscribing to our newsletter! You're now part of a growing community of small business owners who are transforming their bookkeeping with AI.
              </p>

              <p style="font-size: 16px; line-height: 24px; color: #374151; margin: 0 0 30px 0;">
                Here's what you can expect from us:
              </p>

              <!-- Benefits list -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="color: #10B981; font-size: 20px; margin-right: 10px;">✓</span>
                    <span style="font-size: 16px; color: #374151;">Bookkeeping tips and best practices</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="color: #10B981; font-size: 20px; margin-right: 10px;">✓</span>
                    <span style="font-size: 16px; color: #374151;">Product updates and new features</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="color: #10B981; font-size: 20px; margin-right: 10px;">✓</span>
                    <span style="font-size: 16px; color: #374151;">Small business financial insights</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="color: #10B981; font-size: 20px; margin-right: 10px;">✓</span>
                    <span style="font-size: 16px; color: #374151;">Exclusive guides and resources</span>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="https://poofai.com/resources" style="background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block;">
                      Explore Our Resources →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="font-size: 16px; line-height: 24px; color: #374151; margin: 30px 0 0 0;">
                Haven't tried Poof yet? Start your free 30-day trial today—no credit card required!
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 15px;">
                <tr>
                  <td align="center">
                    <a href="https://app.poofai.com/register" style="color: #8B5CF6; text-decoration: none; font-weight: 600; font-size: 16px;">
                      Start Free Trial →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px 40px; border-top: 1px solid #e5e7eb;">
              <p style="font-size: 14px; color: #6b7280; margin: 0 0 10px 0; text-align: center;">
                Questions? Reply to this email or visit our
                <a href="https://poofai.com/contact" style="color: #8B5CF6; text-decoration: none;">contact page</a>.
              </p>

              <p style="font-size: 12px; color: #9ca3af; margin: 20px 0 0 0; text-align: center;">
                You're receiving this because you subscribed to Poof's newsletter.
                <br>
                <a href="{{unsubscribe_url}}" style="color: #9ca3af; text-decoration: underline;">Unsubscribe</a>
              </p>

              <p style="font-size: 12px; color: #9ca3af; margin: 10px 0 0 0; text-align: center;">
                © 2025 Poof. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

7. Click **Save** and **Enable**

### Option B: Custom Welcome Email via API (Advanced)

If you want more control, send welcome email programmatically:

Update your API route to include welcome email:

```typescript
// After adding contact to audience
const contact = await resend.contacts.create({
  email: email,
  audienceId: process.env.RESEND_AUDIENCE_ID as string,
})

// Send welcome email
await resend.emails.send({
  from: 'Poof <noreply@poofai.com>',
  to: email,
  subject: 'Welcome to Poof\'s Newsletter! ✨',
  html: `
    <!-- Paste the HTML template from above -->
  `
})
```

---

## Part 3: Sending Newsletters (Broadcasts)

### Creating Your First Newsletter

1. In Resend dashboard, go to **Broadcasts**
2. Click **Create Broadcast**
3. Configure:
   - **Name:** "January 2026 Newsletter" (internal name)
   - **From:** Poof <newsletter@poofai.com>
   - **Subject:** Your compelling subject line
   - **Audience:** Newsletter Subscribers

4. **Create Email Content:**

**Simple Newsletter Template:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Poof Newsletter</h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; opacity: 0.9;">January 2026</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">

              <!-- Main Article -->
              <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 22px;">
                🎯 3 Bookkeeping Mistakes Costing You Money
              </h2>

              <p style="color: #374151; line-height: 26px; margin: 0 0 20px 0; font-size: 16px;">
                Most small businesses lose thousands annually due to preventable bookkeeping errors. Here are the top 3 mistakes we see—and how to fix them...
              </p>

              <a href="https://poofai.com/blog/bookkeeping-mistakes" style="color: #8B5CF6; text-decoration: none; font-weight: 600;">
                Read the full article →
              </a>

              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

              <!-- Product Update -->
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 20px;">
                ✨ What's New in Poof
              </h3>

              <p style="color: #374151; line-height: 26px; margin: 0 0 15px 0; font-size: 16px;">
                We've added new features to make your bookkeeping even more magical:
              </p>

              <ul style="color: #374151; line-height: 28px; font-size: 16px; padding-left: 20px;">
                <li>Enhanced AI categorization for better accuracy</li>
                <li>New financial reports dashboard</li>
                <li>Bulk transaction editing</li>
              </ul>

              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

              <!-- Resource -->
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 20px;">
                📚 Resource of the Month
              </h3>

              <p style="color: #374151; line-height: 26px; margin: 0 0 20px 0; font-size: 16px;">
                Download our free guide: "The Small Business Tax Preparation Checklist"
              </p>

              <a href="https://poofai.com/resources" style="background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%); color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; display: inline-block;">
                Download Free Guide
              </a>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0 0 15px 0; font-size: 14px;">
                Have questions? <a href="https://poofai.com/contact" style="color: #8B5CF6;">Contact us</a>
              </p>
              <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                <a href="{{unsubscribe_url}}" style="color: #9ca3af;">Unsubscribe</a> |
                © 2025 Poof
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

5. **Preview** your email
6. **Send a test** to yourself
7. When ready, click **Send Broadcast**

---

## Part 4: Best Practices

### Email Frequency
- **Start conservatively:** Monthly newsletters
- **Monitor engagement:** Adjust based on open rates
- **Don't over-send:** Quality over quantity

### Subject Lines
- **Keep it under 50 characters**
- **Create urgency or curiosity**
- **Personalize when possible**
- Examples:
  - "3 bookkeeping mistakes costing you $1000s"
  - "New: AI now categorizes 95% of transactions"
  - "Your January financial checklist"

### Content Mix (60/30/10 Rule)
- **60% Educational:** Tips, guides, best practices
- **30% Product Updates:** New features, improvements
- **10% Promotional:** Free trials, special offers

### Metrics to Track
- **Open Rate:** Aim for 20-30%
- **Click Rate:** Aim for 2-5%
- **Unsubscribe Rate:** Keep below 0.5%
- View these in Resend Broadcasts dashboard

---

## Part 5: Newsletter Content Calendar

### Monthly Newsletter Template

**Week 1:** Plan content
- Choose topic based on season/trending issues
- Write main article
- Gather product updates

**Week 2:** Create email
- Design in Resend
- Add images/links
- Write compelling subject line

**Week 3:** Review & test
- Proofread content
- Send test emails
- Check mobile rendering

**Week 4:** Send & analyze
- Schedule send (Tuesdays 10am typically best)
- Monitor open rates
- Track clicks and engagement

### Content Ideas
- **January:** Tax preparation tips
- **February:** Cash flow management
- **March:** Q1 financial review guide
- **April:** Tax season survival guide
- **May:** Spring financial cleanup
- **June:** Mid-year financial checkup
- **July:** Q2 review and planning
- **August:** Back-to-business finance tips
- **September:** Q3 review
- **October:** Year-end planning starts
- **November:** Black Friday prep (for retail)
- **December:** Year-end tax tips

---

## Part 6: Troubleshooting

### Subscribers Not Receiving Emails
1. Check spam folder
2. Verify domain authentication in Resend
3. Check broadcast status (sent/scheduled/draft)
4. Verify audience has contacts

### Low Open Rates
1. Improve subject lines
2. Test send times
3. Segment audience if needed
4. Check sender reputation

### High Unsubscribe Rate
1. Review content quality
2. Reduce send frequency
3. Make content more valuable
4. Survey unsubscribers for feedback

---

## Part 7: Domain Authentication (Important!)

To improve deliverability, authenticate your domain:

1. In Resend, go to **Domains**
2. Click **Add Domain**
3. Enter: `poofai.com`
4. Add DNS records to your domain provider:
   - DKIM record
   - SPF record
   - DMARC record (optional but recommended)

5. Wait for verification (can take up to 48 hours)
6. Once verified, use `newsletter@poofai.com` as sender

**Benefits:**
- Higher deliverability
- Lower spam rates
- Professional sender address
- Better email reputation

---

## Quick Start Checklist

- [ ] Create audience in Resend
- [ ] Add `RESEND_AUDIENCE_ID` to `.env.local`
- [ ] Update newsletter API route code
- [ ] Test newsletter subscription
- [ ] Set up welcome email (Option A or B)
- [ ] Test welcome email delivery
- [ ] Authenticate domain (optional but recommended)
- [ ] Create first newsletter broadcast
- [ ] Send test newsletter to yourself
- [ ] Schedule regular newsletter sends

---

## Resources

- **Resend Docs:** https://resend.com/docs
- **Audiences:** https://resend.com/docs/dashboard/audiences/introduction
- **Broadcasts:** https://resend.com/docs/dashboard/broadcasts/introduction
- **Email Best Practices:** https://resend.com/blog/best-practices

---

**Questions?** Check Resend's documentation or reply to support@poof.ai
