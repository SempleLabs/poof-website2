/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // The Shop Math calculator is one static page, built in SempleLabs/poofsocial (tools/shop-calculator).
  async rewrites() {
    return [{ source: '/shop-math', destination: '/shop-math/index.html' }]
  },
}

module.exports = nextConfig