/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // The Shop Math calculator is one static page, built in SempleLabs/poofsocial (tools/shop-calculator).
  async rewrites() {
    return [{ source: '/shop-math', destination: '/shop-math/index.html' }]
  },
  async redirects() {
    return [
      // /hvac, /plumbing and /electrical redirected to /trades from 2026-09-22 to 2026-11-19;
      // they are pages again, now selling the software (see src/components/IndustryPage.tsx).
      // The free-analysis funnel is retired.
      { source: '/creators', destination: '/', permanent: true },
      { source: '/ecommerce', destination: '/', permanent: true },
      { source: '/service-businesses', destination: '/', permanent: true },
      { source: '/new-llc', destination: '/', permanent: true },
      { source: '/profit-analysis', destination: '/', permanent: true },
      { source: '/freelancers', destination: '/', permanent: true },
      { source: '/tax-season', destination: '/', permanent: true },
      { source: '/spreadsheet-bookkeeping', destination: '/', permanent: true },
      { source: '/quickbooks-alternative', destination: '/poof-vs-quickbooks', permanent: true },
      { source: '/spend-score', destination: '/', permanent: true },
      { source: '/blog/free-ai-bank-statement-analyzer', destination: '/blog', permanent: true },
    ]
  },
}

module.exports = nextConfig
