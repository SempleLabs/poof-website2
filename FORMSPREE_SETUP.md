# Formspree Forms Setup Guide

You're using Formspree for form handling on your website. Here's how to set up the contact form and verify your demo/trial forms.

## Current Forms

### 1. Demo Request Form ✅
- **File:** `src/app/demo/page.tsx`
- **Formspree ID:** `xkgqjrba`
- **Status:** Active
- **Sends to:** `semplelabs@gmail.com`

### 2. Trial Signup Form ✅
- **File:** `src/app/trial/page.tsx`
- **Formspree ID:** `xvgwkarj`
- **Status:** Active
- **Sends to:** `semplelabs@gmail.com`

### 3. Contact Form ✅
- **File:** `src/app/contact/page.tsx`
- **Formspree ID:** `maqnoywd`
- **Status:** Active
- **Sends to:** `semplelabs@gmail.com`

---

## How to Access Formspree Settings

When you click on a form in Formspree, you'll see these tabs at the top:
- **Submissions** - View all form submissions
- **Settings** - Configure notification emails and other settings
- **Workflow** - Set up auto-replies and automation
- **Rules** - Set up conditional logic
- **Integration** - Connect to other services

### Where to Find Email Settings (Notification Email)

1. Log into https://formspree.io
2. Click on the form name (e.g., "Demo Request", "Trial Signup", "Website Contact Form")
3. Click the **Settings** tab at the top
4. On the Settings page, you'll see:
   - **Notification Email** - Where form submissions are sent (currently `semplelabs@gmail.com`)
   - **Email Subject** - Customize the subject line of notification emails
   - **Reply-To** - Set which field contains the reply-to email
   - **CC/BCC** - Add additional recipients
5. Make any changes you need
6. Click **Save** at the bottom

### Auto-Reply Settings (Premium Feature)

**Note:** Auto-replies are a **paid feature** on Formspree and are not available on the free tier.

On the free plan:
- **Responses** section is locked (requires upgrade)
- **Actions** only allows sending notifications to your email (semplelabs@gmail.com)
- Forms redirect to success pages on your website (this works on free tier)

If you want auto-reply functionality, you have two options:

**Option 1: Upgrade Formspree** ($10/month)
- Unlocks auto-reply/autoresponder feature
- Get 1,000 submissions/month (vs 50 on free tier)
- Custom response emails to users

**Option 2: Use Resend for Auto-Replies** (Recommended - Free)
Since you're already using Resend in your app, you can implement auto-replies yourself:
1. Create an API route that handles form submissions
2. When a form is submitted, use Resend to send a confirmation email
3. This gives you full control over email content and design
4. See `RESEND_WELCOME_EMAILS.md` for implementation details

## Verifying Your Current Setup

All three forms are currently configured and sending to `semplelabs@gmail.com`. If you want to verify or change settings:

### Demo Request Form (`xkgqjrba`)
1. Log into Formspree → Click "Demo Request" form
2. Click **Settings** tab → Verify notification email is `semplelabs@gmail.com`
3. Click **Workflow** tab → Verify redirect is set to success page

### Trial Signup Form (`xvgwkarj`)
1. Log into Formspree → Click "Trial Signup" form
2. Click **Settings** tab → Verify notification email is `semplelabs@gmail.com`
3. Click **Workflow** tab → Verify redirect is set to success page

### Contact Form (`maqnoywd`)
1. Log into Formspree → Click "Website Contact Form"
2. Click **Settings** tab → Verify notification email is `semplelabs@gmail.com`
3. Click **Workflow** tab → Verify redirect is set to success page (handled in code)

---

## Auto-Reply Email Templates (For Future Use)

**Note:** These templates are for reference if you decide to upgrade Formspree or implement auto-replies using Resend.

On Formspree's free tier, auto-replies are not available. Your current setup:
- ✅ User submits form
- ✅ You receive notification at semplelabs@gmail.com
- ✅ User sees success page on your website
- ❌ User does NOT receive auto-reply email (requires paid plan or custom implementation)

If you want to add auto-replies later, here are the templates:

### Demo Form Auto-Reply Template

**Reply-To Field:** email
**Subject Line:** Your Demo Request Has Been Received

**Message:**
```
Hi {name},

Thank you for requesting a demo of Poof! We've received your request and will be in touch within 24 hours to schedule a time that works for you.

In the meantime, feel free to explore our resources at https://poofai.com/resources

Best regards,
The Poof Team
```

### Trial Form Auto-Reply Template

**Reply-To Field:** email
**Subject Line:** Welcome to Your Poof Trial!

**Message:**
```
Hi {name},

Thank you for signing up for a Poof trial! We're excited to help you automate your bookkeeping.

Your trial information has been received, and you should receive access details shortly.

If you have any questions, feel free to reply to this email or visit our resources at https://poofai.com/resources

Best regards,
The Poof Team
```

### Contact Form Auto-Reply Template

**Reply-To Field:** email
**Subject Line:** We've Received Your Message

**Message:**
```
Hi {name},

Thank you for reaching out to Poof! We've received your message and will respond within 24 hours.

If you have an urgent question, you can also reply directly to this email.

Best regards,
The Poof Team
```

**Note:** The `{name}` placeholder will automatically be replaced with the value from the "name" field in your form.

### Spam Protection
- Enable **reCAPTCHA** for all forms to prevent spam
- Set up **Honeypot fields** (Formspree includes this by default)

---

## Form Submission Workflow

When someone submits a form:

1. **User fills out form** on your website
2. **Form data sent** to Formspree endpoint
3. **Formspree processes** the submission
4. **Email notification sent** to `semplelabs@gmail.com`
5. **User sees success page** on your website
6. **Optional: Auto-reply sent** to user's email address

---

## Formspree Free Tier Limits

- **50 submissions per month** per form
- 3 forms total on free tier
- Basic spam protection included

If you exceed limits:
- Upgrade to Formspree paid plan ($10/month for 1,000 submissions)
- Or switch to alternative solution (custom backend, SendGrid, etc.)

---

## Testing Your Forms

### Test Checklist

For each form (Demo, Trial, Contact):

- [ ] Fill out form with test data
- [ ] Submit form
- [ ] Success page appears correctly
- [ ] Email notification received at `semplelabs@gmail.com`
- [ ] Auto-reply received (if configured)
- [ ] Form data appears in Formspree dashboard
- [ ] Test on mobile device
- [ ] Test spam protection (if enabled)

### Sample Test Data

Use this for testing:
- **Name:** Test User
- **Email:** your-email+test@gmail.com (Gmail + trick)
- **Message/Info:** This is a test submission
- **Company:** Test Company Inc.

---

## Troubleshooting

### Form Not Submitting
1. Check browser console for errors
2. Verify Formspree form ID is correct
3. Check network tab in browser dev tools
4. Ensure form fields have correct `name` attributes

### Not Receiving Emails
1. Check spam folder
2. Verify email address in Formspree settings
3. Check Formspree dashboard for submissions
4. Verify form is not paused or archived

### Auto-Reply Not Working
1. Ensure auto-reply is enabled in Formspree
2. Check that form includes email field with name="email"
3. Verify sender email is authorized in Formspree

---

## Security Best Practices

1. **Never expose API keys** - Formspree forms don't require API keys (they use form IDs)
2. **Enable spam protection** - Always enable reCAPTCHA
3. **Validate on backend** - Formspree handles this automatically
4. **Rate limiting** - Formspree includes rate limiting
5. **HTTPS only** - Always use HTTPS for form submissions (already enforced)

---

## Alternative Solutions

If you outgrow Formspree or want more control:

### Option 1: Resend (Your Current Email Provider)
- Build custom API endpoint
- Use Resend to send form data as emails
- Full control over form handling
- More complex to set up

### Option 2: Netlify Forms
- If hosting on Netlify
- Free tier: 100 submissions/month
- Built-in spam protection

### Option 3: Custom Backend
- Full control
- Requires server/API development
- More maintenance

---

## Quick Reference

| Form Type | Form ID | Email To | File Location |
|-----------|---------|----------|---------------|
| Demo Request | `xkgqjrba` | semplelabs@gmail.com | src/app/demo/page.tsx |
| Trial Signup | `xvgwkarj` | semplelabs@gmail.com | src/app/trial/page.tsx |
| Contact | `maqnoywd` | semplelabs@gmail.com | src/app/contact/page.tsx |

---

## Next Steps

1. ✅ All forms created and active
2. ✅ Contact page code updated with form ID `maqnoywd`
3. ✅ All forms sending to semplelabs@gmail.com
4. ✅ Success page redirects configured
5. Optional: Test all three forms with sample data
6. Optional: Upgrade Formspree ($10/month) or implement Resend auto-replies for user confirmation emails
7. Monitor Formspree dashboard for submissions

**Need Help?** Formspree documentation: https://help.formspree.io/
