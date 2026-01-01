# Product Screenshots

Place your product screenshots in this directory. The carousel expects the following images:

1. `dashboard.png` - Dashboard overview screenshot
2. `transactions.png` - Transaction categorization interface
3. `bank-sync.png` - Bank connection/sync interface
4. `reports.png` - Financial reports view
5. `receipts.png` - Receipt management interface

## Recommended Image Specifications

- **Format**: PNG or JPG
- **Aspect Ratio**: 16:9 (e.g., 1920x1080, 1600x900, 1280x720)
- **File Size**: Keep under 500KB for optimal page load speed
- **Quality**: High resolution for clarity, but compressed for web

## Tips for Great Screenshots

1. Use actual product data (anonymized if needed)
2. Highlight key features with annotations or callouts if helpful
3. Ensure consistent UI state across screenshots (same theme, logged-in state, etc.)
4. Consider adding subtle shadows or borders to make screenshots stand out
5. Remove any sensitive customer data before uploading

## Updating the Carousel

To modify the carousel slides, edit the `slides` array in:
`src/components/ProductDemoSection.tsx`

You can:
- Change the order of slides
- Update titles and descriptions
- Add or remove slides
- Change image paths
