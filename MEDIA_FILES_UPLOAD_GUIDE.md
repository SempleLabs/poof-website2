# Media Files Upload Guide

This guide explains which media files need to be uploaded to complete the website setup.

## Required Files to Upload

### 1. Logo
**Location:** `/public/poof-logo.png`

**Specifications:**
- Format: PNG (with transparency recommended)
- Size: 40x40 pixels minimum (for retina displays, 80x80 or larger)
- Background: Can have purple background or transparent
- Current references: Header and Footer

**How to Upload:**
1. Place your logo file in the `/public/` directory
2. Name it exactly `poof-logo.png`
3. The website will automatically use it

---

### 2. Founder Photo
**Location:** `/public/team/austin-semple.jpg`

**Specifications:**
- Format: JPG or PNG
- Recommended size: 400x400 pixels or larger (square)
- Photo type: Professional headshot
- Will be displayed as: Circular crop, 96x96 pixels on page

**How to Upload:**
1. Place your photo in the `/public/team/` directory
2. Name it exactly `austin-semple.jpg`
3. Photo appears on the About page in the "Meet the Founder" section

**Photo Tips:**
- Use a professional, high-quality headshot
- Ensure good lighting
- Neutral or professional background recommended
- Face should be clearly visible and centered
- Photo will be cropped to a circle

---

### 3. Product Screenshots
**Location:** `/public/screenshots/`

Five screenshots are needed for the product carousel on the homepage:

#### a) Dashboard Screenshot
**Filename:** `dashboard.png`
**Shows:** Dashboard overview of financial health
**Description on site:** "Get a complete view of your financial health at a glance"

#### b) Transactions Screenshot
**Filename:** `transactions.png`
**Shows:** AI-powered transaction categorization interface
**Description on site:** "Our AI automatically categorizes your transactions"

#### c) Bank Sync Screenshot
**Filename:** `bank-sync.png`
**Shows:** Bank account connection interface
**Description on site:** "Connect your bank accounts and credit cards securely"

#### d) Reports Screenshot
**Filename:** `reports.png`
**Shows:** Financial reports (P&L, balance sheet, etc.)
**Description on site:** "Generate P&L statements, balance sheets, and cash flow reports"

#### e) Receipts Screenshot
**Filename:** `receipts.png`
**Shows:** Receipt management and upload interface
**Description on site:** "Snap photos of receipts or forward them via email"

**Screenshot Specifications:**
- **Format:** PNG (preferred) or JPG
- **Aspect Ratio:** 16:9 (e.g., 1920x1080, 1600x900, 1280x720)
- **File Size:** Keep under 500KB each for optimal page load speed
- **Quality:** High resolution for clarity
- **Content:** Use real or realistic demo data (anonymized if needed)

**Screenshot Tips:**
- Use consistent UI state across all screenshots (same theme, logged-in state)
- Remove any sensitive or real customer data
- Consider adding subtle shadows or borders to make screenshots stand out
- Ensure text is readable and UI elements are clear
- Take screenshots at consistent zoom levels

**How to Upload:**
1. Place all five screenshots in the `/public/screenshots/` directory
2. Name them exactly as specified above
3. They will automatically appear in the carousel on the homepage

---

## File Organization

```
/public/
├── poof-logo.png (NEW - Logo for header/footer)
├── team/
│   └── austin-semple.jpg (NEW - Founder photo)
└── screenshots/ (EXISTING DIRECTORY)
    ├── dashboard.png (NEW)
    ├── transactions.png (NEW)
    ├── bank-sync.png (NEW)
    ├── reports.png (NEW)
    └── receipts.png (NEW)
```

---

## Verification

After uploading files, verify they appear correctly:

### Logo
- [ ] Check header (top navigation bar)
- [ ] Check footer
- [ ] Logo loads without errors in browser console

### Founder Photo
- [ ] Visit `/about` page
- [ ] Scroll to "Meet the Founder" section
- [ ] Photo appears circular with border
- [ ] Photo is high quality and centered

### Screenshots
- [ ] Visit homepage
- [ ] Scroll to "See Poof in Action" carousel
- [ ] All 5 screenshots load
- [ ] Navigate through carousel (arrows and dots work)
- [ ] Each screenshot has correct title/description
- [ ] Images are clear and properly sized

---

## Troubleshooting

### Image Not Appearing
- Verify file name exactly matches (including case sensitivity)
- Ensure file is in correct directory
- Check browser console for 404 errors
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Restart development server if running locally

### Image Quality Issues
- Ensure original file is high resolution
- Check file hasn't been overly compressed
- PNG format recommended for logos/screenshots
- JPG acceptable for photos

### File Size Too Large
- Optimize images before uploading:
  - Use tools like TinyPNG, ImageOptim, or Squoosh
  - Target: <100KB for logo, <500KB for screenshots
  - Maintain visual quality while compressing

---

## Next Steps

After uploading all media files:

1. **Test locally** (if running dev server): Visit all pages to verify images load
2. **Commit and push** changes to trigger deployment
3. **Verify on live site** after deployment completes
4. **Check mobile responsiveness** - images should load properly on all devices

---

## Questions?

If you encounter issues with file uploads or image display, check:
- Browser developer console for error messages
- Network tab to see if files are being requested correctly
- File permissions (should be readable)

For deployment-specific questions, consult your hosting platform documentation (Vercel, Netlify, etc.).
