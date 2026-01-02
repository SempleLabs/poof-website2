# Newsletter Subscription Setup

The newsletter subscription functionality is now implemented and ready to use! Currently, it logs email addresses to the console. To integrate with an email service provider, follow the instructions below.

## Current Functionality

✅ **Working now:**
- Newsletter signup form on resources page
- Form validation (email format)
- Loading states
- Success/error messages
- Email addresses logged to console

🔧 **To complete:**
- Integrate with your email service provider (instructions below)

## Integration Options

Choose one of the following email service providers:

### Option 1: Mailchimp (Recommended for beginners)

**Steps:**
1. Create a Mailchimp account at https://mailchimp.com
2. Create an audience/list
3. Generate an API key (Account > Extras > API keys)
4. Get your list ID (Audience > Settings > Audience name and defaults)
5. Add to `.env.local`:

```bash
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_LIST_ID=your_list_id_here
MAILCHIMP_SERVER_PREFIX=us1  # or your server prefix (us1, us2, etc.)
```

6. Uncomment the Mailchimp code in `/src/app/api/newsletter/subscribe/route.ts` (lines ~15-31)

**Pricing:** Free up to 500 contacts

---

### Option 2: ConvertKit (Best for creators/bloggers)

**Steps:**
1. Create a ConvertKit account at https://convertkit.com
2. Create a form
3. Get your API key (Settings > Advanced > API Secret)
4. Get your form ID (from the form URL)
5. Add to `.env.local`:

```bash
CONVERTKIT_API_KEY=your_api_key_here
CONVERTKIT_FORM_ID=your_form_id_here
```

6. Uncomment the ConvertKit code in `/src/app/api/newsletter/subscribe/route.ts` (lines ~33-48)

**Pricing:** Free up to 1,000 subscribers

---

### Option 3: SendGrid (Enterprise-grade)

**Steps:**
1. Create a SendGrid account at https://sendgrid.com
2. Create an API key with Marketing permissions
3. Create a contact list
4. Add to `.env.local`:

```bash
SENDGRID_API_KEY=your_api_key_here
SENDGRID_LIST_ID=your_list_id_here
```

5. Uncomment the SendGrid code in `/src/app/api/newsletter/subscribe/route.ts` (lines ~50-66)

**Pricing:** Free up to 100 emails/day

---

### Option 4: Resend (Modern developer-first)

**Steps:**
1. Create a Resend account at https://resend.com
2. Get your API key
3. Install: `npm install resend`
4. Create custom implementation in `/src/app/api/newsletter/subscribe/route.ts`

**Pricing:** Free up to 3,000 emails/month

---

## Setup Instructions

### 1. Create `.env.local` file

In your project root, create a `.env.local` file (if it doesn't exist):

```bash
# Add your chosen service's credentials here
# Example for Mailchimp:
MAILCHIMP_API_KEY=abc123...
MAILCHIMP_LIST_ID=xyz789...
MAILCHIMP_SERVER_PREFIX=us1
```

### 2. Update the API route

Edit `/src/app/api/newsletter/subscribe/route.ts`:
- Find the section for your chosen service (Mailchimp, ConvertKit, etc.)
- Uncomment the code
- Delete the temporary console.log and success response

### 3. Test it

1. Restart your dev server: `npm run dev`
2. Go to http://localhost:3001/resources
3. Enter an email and click Subscribe
4. Check your email service dashboard to confirm the subscription

## Testing Without Email Service

The current implementation works without integration:
- Emails are logged to the server console
- You'll see success messages
- This is fine for development/testing

## Double Opt-In (Recommended)

Most email services support double opt-in (subscriber must confirm via email). This:
- Ensures valid email addresses
- Complies with anti-spam laws
- Improves deliverability

**To enable:**
- **Mailchimp**: Audience Settings > Enable double opt-in
- **ConvertKit**: Form Settings > Enable double opt-in
- **SendGrid**: Marketing > Signup Forms > Enable confirmation email

## Email Campaign Setup

After collecting subscribers, you'll want to send newsletters:

1. **Create email templates** in your email service
2. **Schedule campaigns** (weekly, monthly, etc.)
3. **Track metrics** (open rates, click rates)
4. **Segment subscribers** (by interest, signup date, etc.)

## Unsubscribe Functionality

All email services automatically include unsubscribe links in emails. You don't need to build this.

## GDPR Compliance

If you have European visitors:
- Add a privacy policy link
- Get explicit consent
- Allow data export/deletion
- Most email services handle this automatically

## Troubleshooting

**Form not submitting:**
- Check browser console for errors
- Verify API route is accessible
- Check network tab in dev tools

**Emails not appearing in service:**
- Verify API credentials in `.env.local`
- Check service dashboard for errors
- Look at server logs for error messages

**Double subscriptions:**
- Most services prevent duplicates automatically
- Check service settings for handling duplicates

## Next Steps

1. Choose an email service provider
2. Create an account and get API credentials
3. Add credentials to `.env.local`
4. Uncomment the relevant code in the API route
5. Test the subscription flow
6. Create your first newsletter campaign!

## Support

If you need help:
- **Mailchimp**: https://mailchimp.com/help/
- **ConvertKit**: https://help.convertkit.com/
- **SendGrid**: https://docs.sendgrid.com/
