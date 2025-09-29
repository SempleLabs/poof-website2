import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Poof - Magical Bookkeeping',
    short_name: 'Poof',
    description: 'AI-powered bookkeeping automation for small businesses',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#7c7aff',
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