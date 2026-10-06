import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Poof',
    short_name: 'Poof',
    description: 'The back office, run by AI. Nothing lands until a person has seen it.',
    start_url: '/',
    display: 'standalone',
    background_color: '#EEF2EA',
    theme_color: '#EEF2EA',
    icons: [
      { src: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
