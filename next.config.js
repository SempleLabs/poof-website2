/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      // 2026-09-22: poofai.com sells the software only. The trade landing pages
      // that sold the managed service fold into the product page for shops.
      { source: '/hvac', destination: '/trades', permanent: true },
      { source: '/plumbing', destination: '/trades', permanent: true },
      { source: '/electrical', destination: '/trades', permanent: true },
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
