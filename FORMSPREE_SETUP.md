# Formspree Forms Setup Guide

You're using Formspree for form handling on your website. Here's how to set up the contact form and verify your demo/trial forms.

## Current Forms

### 1. Demo Request Form ✅
- **File:** `src/app/demo/page.tsx`
- **Formspree ID:** `xkgqjrba`
- **Status:** Active
- **Issue:** Currently sending to `semplelabs@gmail.com`
- **Fix Needed:** Update email to `support@poof.ai`

### 2. Trial Signup Form ✅
- **File:** `src/app/trial/page.tsx`
- **Formspree ID:** `xvgwkarj`
- **Status:** Active
- **Should send to:** `support@poof.ai`

### 3. Contact Form ⚠️ NEEDS SETUP
- **File:** `src/app/contact/page.tsx`
- **Formspree ID:** Currently `YOUR_FORM_ID` (placeholder)
- **Status:** Needs creation
- **Should send to:** `support@poof.ai`

---

## Step-by-Step Setup

### Update Demo Form Email

1. Log into https://formspree.io
2. Find form `xkgqjrba` (Demo Request)
3. Go to **Settings** → **Email**
4. Change notification email from `semplelabs@gmail.com` to **`support@poof.ai`**
5. Save changes
6. Test the form at your website's `/demo` page

### Verify Trial Form Email

1. In Formspree dashboard, find form `xvgwkarj` (Trial Signup)
2. Go to **Settings** → **Email**
3. Verify notification email is set to **`support@poof.ai`**
4. If not, update it
5. Test the form at your website's `/trial` page

### Create New Contact Form

1. In Formspree dashboard, click **+ New Form**
2. Name it: **"Website Contact Form"**
3. Configure settings:
   - **Email Address:** `support@poof.ai`
   - **Subject:** "New Contact Form Submission"
   - **Auto-reply:** Optional (recommended)
   - **Spam Protection:** Enable reCAPTCHA (recommended)

4. Copy the form ID (will look like `abc123xyz`)

5. Update the contact page code:
   - Open `/src/app/contact/page.tsx`
   - Find line 37: `const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {`
   - Replace `YOUR_FORM_ID` with your new form ID
   - Example: `'https://formspree.io/f/abc123xyz'`

6. Save and test the contact form on your website

---

## Recommended Email Settings

For each form, configure these settings in Formspree:

### Email Notifications
- **To:** `support@poof.ai`
- **Subject Line:** Customize per form:
  - Demo: "New Demo Request from [Name]"
  - Trial: "New Trial Signup from [Name]"
  - Contact: "New Contact Form Message from [Name]"

### Auto-Reply (Optional but Recommended)
Enable auto-reply to immediately acknowledge form submissions:

**Demo Form Auto-Reply:**
```
Subject: Your Demo Request Has Been Received

Hi {name},

Thank you for requesting a demo of Poof! We've received your request and will be in touch within 24 hours to schedule a time that works for you.

In the meantime, feel free to explore our resources at https://poofai.com/resources

Best regards,
The Poof Team
support@poof.ai
```

**Contact Form Auto-Reply:**
```
Subject: We've Received Your Message

Hi {name},

Thank you for reaching out to Poof! We've received your message and will respond within 24 hours.

If you have an urgent question, you can also reply directly to this email.

Best regards,
The Poof Team
support@poof.ai
```

### Spam Protection
- Enable **reCAPTCHA** for all forms to prevent spam
- Set up **Honeypot fields** (Formspree includes this by default)

---

## Form Submission Workflow

When someone submits a form:

1. **User fills out form** on your website
2. **Form data sent** to Formspree endpoint
3. **Formspree processes** the submission
4. **Email notification sent** to `support@poof.ai`
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
- [ ] Email notification received at `support@poof.ai`
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
| Demo Request | `xkgqjrba` | support@poof.ai | src/app/demo/page.tsx |
| Trial Signup | `xvgwkarj` | support@poof.ai | src/app/trial/page.tsx |
| Contact | `[YOUR_NEW_ID]` | support@poof.ai | src/app/contact/page.tsx |

---

## Next Steps

1. ✅ Log into Formspree.io
2. ✅ Update demo form email to support@poof.ai
3. ✅ Verify trial form email
4. ✅ Create new contact form
5. ✅ Update contact page code with new form ID
6. ✅ Configure auto-replies (optional)
7. ✅ Test all three forms
8. ✅ Monitor Formspree dashboard for submissions

**Need Help?** Formspree documentation: https://help.formspree.io/
