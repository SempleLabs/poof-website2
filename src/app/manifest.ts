import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Poof - AI Bookkeeping',
    short_name: 'Poof',
    description: 'AI-powered bookkeeping automation for small businesses',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#eab308',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
