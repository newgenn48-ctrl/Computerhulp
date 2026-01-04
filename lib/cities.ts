/**
 * Centralized city data for Zuid-Holland
 * This is the single source of truth for all city-related information
 */

export interface City {
  slug: string
  name: string
  latitude: number
  longitude: number
}

export const cities: City[] = [
  { slug: 'alblasserdam', name: 'Alblasserdam', latitude: 51.8667, longitude: 4.6667 },
  { slug: 'albrandswaard', name: 'Albrandswaard', latitude: 51.8583, longitude: 4.4083 },
  { slug: 'alphen-aan-den-rijn', name: 'Alphen aan den Rijn', latitude: 52.1292, longitude: 4.6656 },
  { slug: 'barendrecht', name: 'Barendrecht', latitude: 51.8556, longitude: 4.5333 },
  { slug: 'bodegraven-reeuwijk', name: 'Bodegraven-Reeuwijk', latitude: 52.0833, longitude: 4.75 },
  { slug: 'capelle-aan-den-ijssel', name: 'Capelle aan den IJssel', latitude: 51.9292, longitude: 4.5778 },
  { slug: 'delft', name: 'Delft', latitude: 52.0116, longitude: 4.3571 },
  { slug: 'den-haag', name: 'Den Haag', latitude: 52.0705, longitude: 4.3007 },
  { slug: 'dordrecht', name: 'Dordrecht', latitude: 51.8133, longitude: 4.6736 },
  { slug: 'goeree-overflakkee', name: 'Goeree-Overflakkee', latitude: 51.75, longitude: 4.0833 },
  { slug: 'gorinchem', name: 'Gorinchem', latitude: 51.8333, longitude: 4.9667 },
  { slug: 'gouda', name: 'Gouda', latitude: 52.0175, longitude: 4.7056 },
  { slug: 'hardinxveld-giessendam', name: 'Hardinxveld-Giessendam', latitude: 51.8333, longitude: 4.85 },
  { slug: 'hendrik-ido-ambacht', name: 'Hendrik-Ido-Ambacht', latitude: 51.8417, longitude: 4.6333 },
  { slug: 'hillegom', name: 'Hillegom', latitude: 52.2917, longitude: 4.5833 },
  { slug: 'hoeksche-waard', name: 'Hoeksche Waard', latitude: 51.7667, longitude: 4.4167 },
  { slug: 'kaag-en-braassem', name: 'Kaag en Braassem', latitude: 52.2167, longitude: 4.6333 },
  { slug: 'katwijk', name: 'Katwijk', latitude: 52.2, longitude: 4.4167 },
  { slug: 'krimpen-aan-den-ijssel', name: 'Krimpen aan den IJssel', latitude: 51.9167, longitude: 4.6 },
  { slug: 'krimpenerwaard', name: 'Krimpenerwaard', latitude: 51.95, longitude: 4.7333 },
  { slug: 'lansingerland', name: 'Lansingerland', latitude: 51.9833, longitude: 4.5167 },
  { slug: 'leiden', name: 'Leiden', latitude: 52.1583, longitude: 4.4931 },
  { slug: 'leiderdorp', name: 'Leiderdorp', latitude: 52.1583, longitude: 4.5333 },
  { slug: 'leidschendam-voorburg', name: 'Leidschendam-Voorburg', latitude: 52.0833, longitude: 4.4 },
  { slug: 'lisse', name: 'Lisse', latitude: 52.2583, longitude: 4.5583 },
  { slug: 'maassluis', name: 'Maassluis', latitude: 51.9231, longitude: 4.25 },
  { slug: 'midden-delfland', name: 'Midden-Delfland', latitude: 51.9667, longitude: 4.3 },
  { slug: 'molenlanden', name: 'Molenlanden', latitude: 51.8833, longitude: 4.85 },
  { slug: 'nieuwkoop', name: 'Nieuwkoop', latitude: 52.15, longitude: 4.7667 },
  { slug: 'nissewaard', name: 'Nissewaard', latitude: 51.85, longitude: 4.3167 },
  { slug: 'noordwijk', name: 'Noordwijk', latitude: 52.2333, longitude: 4.4333 },
  { slug: 'oegstgeest', name: 'Oegstgeest', latitude: 52.1833, longitude: 4.4667 },
  { slug: 'papendrecht', name: 'Papendrecht', latitude: 51.8333, longitude: 4.6833 },
  { slug: 'pijnacker-nootdorp', name: 'Pijnacker-Nootdorp', latitude: 52.0167, longitude: 4.4333 },
  { slug: 'ridderkerk', name: 'Ridderkerk', latitude: 51.8667, longitude: 4.6 },
  { slug: 'rijswijk', name: 'Rijswijk', latitude: 52.0333, longitude: 4.3167 },
  { slug: 'rotterdam', name: 'Rotterdam', latitude: 51.9225, longitude: 4.47917 },
  { slug: 'schiedam', name: 'Schiedam', latitude: 51.9167, longitude: 4.4 },
  { slug: 'sliedrecht', name: 'Sliedrecht', latitude: 51.8167, longitude: 4.7667 },
  { slug: 'teylingen', name: 'Teylingen', latitude: 52.2167, longitude: 4.5 },
  { slug: 'vlaardingen', name: 'Vlaardingen', latitude: 51.9125, longitude: 4.3417 },
  { slug: 'voorschoten', name: 'Voorschoten', latitude: 52.1333, longitude: 4.45 },
  { slug: 'waddinxveen', name: 'Waddinxveen', latitude: 52.0417, longitude: 4.65 },
  { slug: 'wassenaar', name: 'Wassenaar', latitude: 52.1458, longitude: 4.4 },
  { slug: 'westland', name: 'Westland', latitude: 52.0, longitude: 4.2167 },
  { slug: 'westvoorne', name: 'Westvoorne', latitude: 51.8833, longitude: 4.0833 },
  { slug: 'zoetermeer', name: 'Zoetermeer', latitude: 52.0571, longitude: 4.4931 },
  { slug: 'zoeterwoude', name: 'Zoeterwoude', latitude: 52.1167, longitude: 4.4833 },
  { slug: 'zwijndrecht', name: 'Zwijndrecht', latitude: 51.8167, longitude: 4.6333 },
]

// Utility functions
export const citySlugs = cities.map(c => c.slug)

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

export function getCityName(slug: string): string {
  return getCityBySlug(slug)?.name || slug
}

export function getNearbyCities(slug: string, count: number = 6): City[] {
  const city = getCityBySlug(slug)
  if (!city) return cities.slice(0, count)

  // Calculate distances and sort
  const withDistances = cities
    .filter(c => c.slug !== slug)
    .map(c => ({
      ...c,
      distance: Math.sqrt(
        Math.pow(c.latitude - city.latitude, 2) +
        Math.pow(c.longitude - city.longitude, 2)
      )
    }))
    .sort((a, b) => a.distance - b.distance)

  return withDistances.slice(0, count)
}

// Services data
export const services = [
  'computer-laptop-hulp',
  'printer-scanner-hulp',
  'email-hulp',
  'wifi-internet-hulp',
  'tablet-smartphone-hulp',
  'persoonlijke-training',
  'televisie-radio',
  'smart-home-domotica',
  'dataherstel-backup'
] as const

export type ServiceSlug = typeof services[number]
