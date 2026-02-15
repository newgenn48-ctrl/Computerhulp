import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Computerhulp Zuid-Holland',
    short_name: 'Computerhulp ZH',
    description: 'Professionele computerhulp aan huis in heel Zuid-Holland. Binnen 24 uur bij u thuis. Computer-, laptop-, printer- en WiFi-hulp.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
