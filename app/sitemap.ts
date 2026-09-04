import { MetadataRoute } from 'next'
import { citySlugs, services } from '@/lib/cities'
import { getCityContent } from '@/lib/cityContent'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://computerhulpzh.nl'
  // Echte wijzigingsdatums in plaats van de buildtijd: Google negeert een lastmod die bij
  // elke build voor alle 370 URL's tegelijk verspringt, en vertrouwt de sitemap dan minder.
  const contentUpdate = new Date('2026-09-05')
  const layoutUpdate = new Date('2026-08-29')
  const now = contentUpdate

  // Basis paginas met prioriteit
  const basePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/computerhulp-aan-huis`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/student-aan-huis`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/it-hulp`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/diensten`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/website-laten-maken`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/offerte-aanvragen`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/afspraak-maken`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tarieven`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/over-ons`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/waarom-ons`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/voorwaarden`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/locaties`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
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
    lastModified: getCityContent(city) ? contentUpdate : layoutUpdate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Stad paginas - Computerhulp aan huis
  const computerhulpCityPages: MetadataRoute.Sitemap = citySlugs.map(city => ({
    url: `${baseUrl}/computerhulp-aan-huis-${city}`,
    lastModified: getCityContent(city) ? contentUpdate : layoutUpdate,
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
