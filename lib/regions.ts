/**
 * Regio-indeling van de gemeenten met een eigen pagina.
 *
 * Waarom dit bestaat: alle 51 gemeentepagina's (x2 varianten) hingen aan één
 * overzichtspagina. Google vond ze wel via de sitemap, maar haalde ruim vijftig
 * ervan nooit op ("Discovered - currently not indexed"). Een tussenlaag per
 * regio haalt de crawlafstand omlaag en geeft bezoekers een logische stap
 * tussen "heel Zuid-Holland" en één gemeente.
 *
 * De regionaam komt uit lib/cityContent.ts, zodat er één bron van waarheid is.
 */

import { cities, City } from '@/lib/cities'
import { getCityContent } from '@/lib/cityContent'

export interface Region {
  slug: string
  name: string
  cities: City[]
}

/** 'Hoeksche Waard' -> 'hoeksche-waard' */
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

/* Regio's zonder lidwoord lezen raar in een zin ("hulp in Haaglanden" versus
   "hulp in de Bollenstreek"). Dit zijn de uitzonderingen. */
const GEEN_LIDWOORD = new Set([
  'Haaglanden',
  'Westland',
  'Rijnmond',
  'Drechtsteden',
  'Lansingerland',
  'Midden-Delfland',
  'Goeree-Overflakkee',
])

export function regionWithArticle(name: string): string {
  return GEEN_LIDWOORD.has(name) ? name : `de ${name}`
}

/** Alle regio's met minstens één gemeentepagina, alfabetisch. */
export const regions: Region[] = (() => {
  const grouped = new Map<string, City[]>()

  for (const city of cities) {
    const regionName = getCityContent(city.slug)?.region
    if (!regionName) continue
    const list = grouped.get(regionName)
    if (list) list.push(city)
    else grouped.set(regionName, [city])
  }

  return Array.from(grouped.entries())
    .map(([name, list]) => ({
      slug: toSlug(name),
      name,
      cities: [...list].sort((a, b) => a.name.localeCompare(b.name, 'nl')),
    }))
    .sort((a, b) => a.name.localeCompare(b.name, 'nl'))
})()

/**
 * Alleen regio's met genoeg gemeenten krijgen een eigen hubpagina. Een hub met
 * één gemeente zou precies zo'n dunne pagina worden als Google nu al afwijst,
 * en maakt het indexeringsprobleem dus erger in plaats van beter. Gemeenten in
 * een te kleine regio blijven gewoon via /locaties en de buurgemeenten lopen.
 */
const MIN_GEMEENTEN_VOOR_HUB = 3

export const hubRegions: Region[] = regions.filter(r => r.cities.length >= MIN_GEMEENTEN_VOOR_HUB)

export const regionSlugs = hubRegions.map(r => r.slug)

export function getRegionBySlug(slug: string): Region | undefined {
  return hubRegions.find(r => r.slug === slug)
}

/**
 * De regiohub waar een gemeente onder valt, of undefined als die regio te klein
 * is voor een eigen pagina. Gebruikt op de gemeentepagina's om omhoog te linken.
 */
export function getRegionOfCity(citySlug: string): Region | undefined {
  const regionName = getCityContent(citySlug)?.region
  if (!regionName) return undefined
  return hubRegions.find(r => r.name === regionName)
}
