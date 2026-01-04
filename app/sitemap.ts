import { MetadataRoute } from 'next'
import { citySlugs, services } from '@/lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://computerhulpzh.nl'

  // Basis paginas met prioriteit
  const basePages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/computerhulp-aan-huis`, priority: 0.9 },
    { url: `${baseUrl}/student-aan-huis`, priority: 0.9 },
    { url: `${baseUrl}/diensten`, priority: 0.8 },
    { url: `${baseUrl}/website-laten-maken`, priority: 0.7 },
    { url: `${baseUrl}/offerte-aanvragen`, priority: 0.8 },
    { url: `${baseUrl}/afspraak-maken`, priority: 0.9 },
    { url: `${baseUrl}/contact`, priority: 0.7 },
    { url: `${baseUrl}/over-ons`, priority: 0.6 },
    { url: `${baseUrl}/faq`, priority: 0.6 },
    { url: `${baseUrl}/privacy`, priority: 0.3 },
    { url: `${baseUrl}/voorwaarden`, priority: 0.3 },
  ]

  // Diensten paginas
  const servicePages: MetadataRoute.Sitemap = services.map(service => ({
    url: `${baseUrl}/diensten/${service}`,
    priority: 0.8,
  }))

  // Stad paginas - Student aan huis
  const studentCityPages: MetadataRoute.Sitemap = citySlugs.map(city => ({
    url: `${baseUrl}/student-aan-huis-${city}`,
    priority: 0.85,
  }))

  // Stad paginas - Computerhulp aan huis
  const computerhulpCityPages: MetadataRoute.Sitemap = citySlugs.map(city => ({
    url: `${baseUrl}/computerhulp-aan-huis-${city}`,
    priority: 0.85,
  }))

  return [
    ...basePages,
    ...servicePages,
    ...studentCityPages,
    ...computerhulpCityPages,
  ]
}
