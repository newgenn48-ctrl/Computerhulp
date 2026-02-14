import { MetadataRoute } from 'next'
import { citySlugs, services } from '@/lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://computerhulpzh.nl'
  const now = new Date()

  // Basis paginas met prioriteit
  const basePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/computerhulp-aan-huis`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/student-aan-huis`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/diensten`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/website-laten-maken`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/offerte-aanvragen`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/afspraak-maken`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/over-ons`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/voorwaarden`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Diensten paginas
  const servicePages: MetadataRoute.Sitemap = services.map(service => ({
    url: `${baseUrl}/diensten/${service}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Stad paginas - Student aan huis
  const studentCityPages: MetadataRoute.Sitemap = citySlugs.map(city => ({
    url: `${baseUrl}/student-aan-huis-${city}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Stad paginas - Computerhulp aan huis
  const computerhulpCityPages: MetadataRoute.Sitemap = citySlugs.map(city => ({
    url: `${baseUrl}/computerhulp-aan-huis-${city}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [
    ...basePages,
    ...servicePages,
    ...studentCityPages,
    ...computerhulpCityPages,
  ]
}
