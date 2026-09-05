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
  { slug: 'hellevoetsluis', name: 'Hellevoetsluis', latitude: 51.83, longitude: 4.13 },
  { slug: 'spijkenisse', name: 'Spijkenisse', latitude: 51.85, longitude: 4.33 },
]

/**
 * Dorpen en kernen zonder eigen pagina. Ze worden bij naam genoemd op de pagina van hun
 * gemeente en hun oude URL's sturen daar permanent naartoe (zie lib/village-redirects.json).
 * Reden: 238 vrijwel identieke dorpspagina's werden door Google niet geïndexeerd en trokken
 * de sterke gemeentepagina's mee omlaag.
 */
export interface Village {
  slug: string
  name: string
  municipality: string
}

export const villages: Village[] = [
  { slug: 'wateringen', name: 'Wateringen', municipality: 'westland' },
  { slug: 's-gravendeel', name: "'s-Gravendeel", municipality: 'hoeksche-waard' },
  { slug: 's-gravenzande', name: "'s-Gravenzande", municipality: 'westland' },
  { slug: 'stad-aan-t-haringvliet', name: "Stad aan 't Haringvliet", municipality: 'goeree-overflakkee' },
  { slug: 'naaldwijk', name: 'Naaldwijk', municipality: 'westland' },
  { slug: 'monster', name: 'Monster', municipality: 'westland' },
  { slug: 'de-lier', name: 'De Lier', municipality: 'westland' },
  { slug: 'honselersdijk', name: 'Honselersdijk', municipality: 'westland' },
  { slug: 'poeldijk', name: 'Poeldijk', municipality: 'westland' },
  { slug: 'kwintsheul', name: 'Kwintsheul', municipality: 'westland' },
  { slug: 'maasdijk', name: 'Maasdijk', municipality: 'westland' },
  { slug: 'ter-heijde', name: 'Ter Heijde', municipality: 'westland' },
  { slug: 'berkel-en-rodenrijs', name: 'Berkel en Rodenrijs', municipality: 'lansingerland' },
  { slug: 'bleiswijk', name: 'Bleiswijk', municipality: 'lansingerland' },
  { slug: 'bergschenhoek', name: 'Bergschenhoek', municipality: 'lansingerland' },
  { slug: 'pijnacker', name: 'Pijnacker', municipality: 'pijnacker-nootdorp' },
  { slug: 'nootdorp', name: 'Nootdorp', municipality: 'pijnacker-nootdorp' },
  { slug: 'delfgauw', name: 'Delfgauw', municipality: 'pijnacker-nootdorp' },
  { slug: 'voorburg', name: 'Voorburg', municipality: 'leidschendam-voorburg' },
  { slug: 'leidschendam', name: 'Leidschendam', municipality: 'leidschendam-voorburg' },
  { slug: 'stompwijk', name: 'Stompwijk', municipality: 'leidschendam-voorburg' },
  { slug: 'sassenheim', name: 'Sassenheim', municipality: 'teylingen' },
  { slug: 'voorhout', name: 'Voorhout', municipality: 'teylingen' },
  { slug: 'warmond', name: 'Warmond', municipality: 'teylingen' },
  { slug: 'brielle', name: 'Brielle', municipality: 'westvoorne' },
  { slug: 'oostvoorne', name: 'Oostvoorne', municipality: 'westvoorne' },
  { slug: 'rockanje', name: 'Rockanje', municipality: 'westvoorne' },
  { slug: 'nieuwenhoorn', name: 'Nieuwenhoorn', municipality: 'hellevoetsluis' },
  { slug: 'zwartewaal', name: 'Zwartewaal', municipality: 'westvoorne' },
  { slug: 'abbenbroek', name: 'Abbenbroek', municipality: 'nissewaard' },
  { slug: 'geervliet', name: 'Geervliet', municipality: 'nissewaard' },
  { slug: 'hekelingen', name: 'Hekelingen', municipality: 'nissewaard' },
  { slug: 'zuidland', name: 'Zuidland', municipality: 'nissewaard' },
  { slug: 'heenvliet', name: 'Heenvliet', municipality: 'nissewaard' },
  { slug: 'oud-beijerland', name: 'Oud-Beijerland', municipality: 'hoeksche-waard' },
  { slug: 'strijen', name: 'Strijen', municipality: 'hoeksche-waard' },
  { slug: 'klaaswaal', name: 'Klaaswaal', municipality: 'hoeksche-waard' },
  { slug: 'numansdorp', name: 'Numansdorp', municipality: 'hoeksche-waard' },
  { slug: 'piershil', name: 'Piershil', municipality: 'hoeksche-waard' },
  { slug: 'zuid-beijerland', name: 'Zuid-Beijerland', municipality: 'hoeksche-waard' },
  { slug: 'puttershoek', name: 'Puttershoek', municipality: 'hoeksche-waard' },
  { slug: 'maasdam', name: 'Maasdam', municipality: 'hoeksche-waard' },
  { slug: 'heinenoord', name: 'Heinenoord', municipality: 'hoeksche-waard' },
  { slug: 'mijnsheerenland', name: 'Mijnsheerenland', municipality: 'hoeksche-waard' },
  { slug: 'nieuw-beijerland', name: 'Nieuw-Beijerland', municipality: 'hoeksche-waard' },
  { slug: 'goudswaard', name: 'Goudswaard', municipality: 'hoeksche-waard' },
  { slug: 'rhoon', name: 'Rhoon', municipality: 'albrandswaard' },
  { slug: 'poortugaal', name: 'Poortugaal', municipality: 'albrandswaard' },
  { slug: 'middelharnis', name: 'Middelharnis', municipality: 'goeree-overflakkee' },
  { slug: 'ouddorp', name: 'Ouddorp', municipality: 'goeree-overflakkee' },
  { slug: 'dirksland', name: 'Dirksland', municipality: 'goeree-overflakkee' },
  { slug: 'goedereede', name: 'Goedereede', municipality: 'goeree-overflakkee' },
  { slug: 'sommelsdijk', name: 'Sommelsdijk', municipality: 'goeree-overflakkee' },
  { slug: 'stellendam', name: 'Stellendam', municipality: 'goeree-overflakkee' },
  { slug: 'oude-tonge', name: 'Oude-Tonge', municipality: 'goeree-overflakkee' },
  { slug: 'nieuwe-tonge', name: 'Nieuwe-Tonge', municipality: 'goeree-overflakkee' },
  { slug: 'ooltgensplaat', name: 'Ooltgensplaat', municipality: 'goeree-overflakkee' },
  { slug: 'den-bommel', name: 'Den Bommel', municipality: 'goeree-overflakkee' },
  { slug: 'herkingen', name: 'Herkingen', municipality: 'goeree-overflakkee' },
  { slug: 'melissant', name: 'Melissant', municipality: 'goeree-overflakkee' },
  { slug: 'bodegraven', name: 'Bodegraven', municipality: 'bodegraven-reeuwijk' },
  { slug: 'reeuwijk', name: 'Reeuwijk', municipality: 'bodegraven-reeuwijk' },
  { slug: 'driebruggen', name: 'Driebruggen', municipality: 'bodegraven-reeuwijk' },
  { slug: 'schoonhoven', name: 'Schoonhoven', municipality: 'krimpenerwaard' },
  { slug: 'bergambacht', name: 'Bergambacht', municipality: 'krimpenerwaard' },
  { slug: 'lekkerkerk', name: 'Lekkerkerk', municipality: 'krimpenerwaard' },
  { slug: 'stolwijk', name: 'Stolwijk', municipality: 'krimpenerwaard' },
  { slug: 'haastrecht', name: 'Haastrecht', municipality: 'krimpenerwaard' },
  { slug: 'ammerstol', name: 'Ammerstol', municipality: 'krimpenerwaard' },
  { slug: 'berkenwoude', name: 'Berkenwoude', municipality: 'krimpenerwaard' },
  { slug: 'gouderak', name: 'Gouderak', municipality: 'krimpenerwaard' },
  { slug: 'krimpen-aan-de-lek', name: 'Krimpen aan de Lek', municipality: 'krimpenerwaard' },
  { slug: 'ouderkerk-aan-den-ijssel', name: 'Ouderkerk aan den IJssel', municipality: 'krimpenerwaard' },
  { slug: 'kinderdijk', name: 'Kinderdijk', municipality: 'molenlanden' },
  { slug: 'nieuw-lekkerland', name: 'Nieuw-Lekkerland', municipality: 'molenlanden' },
  { slug: 'groot-ammers', name: 'Groot-Ammers', municipality: 'molenlanden' },
  { slug: 'bleskensgraaf', name: 'Bleskensgraaf', municipality: 'molenlanden' },
  { slug: 'arkel', name: 'Arkel', municipality: 'molenlanden' },
  { slug: 'giessenburg', name: 'Giessenburg', municipality: 'molenlanden' },
  { slug: 'hoornaar', name: 'Hoornaar', municipality: 'molenlanden' },
  { slug: 'nieuwpoort', name: 'Nieuwpoort', municipality: 'molenlanden' },
  { slug: 'streefkerk', name: 'Streefkerk', municipality: 'molenlanden' },
  { slug: 'oud-alblas', name: 'Oud-Alblas', municipality: 'molenlanden' },
  { slug: 'noordeloos', name: 'Noordeloos', municipality: 'molenlanden' },
  { slug: 'schelluinen', name: 'Schelluinen', municipality: 'molenlanden' },
  { slug: 'langerak', name: 'Langerak', municipality: 'molenlanden' },
  { slug: 'boskoop', name: 'Boskoop', municipality: 'alphen-aan-den-rijn' },
  { slug: 'hazerswoude-dorp', name: 'Hazerswoude-Dorp', municipality: 'alphen-aan-den-rijn' },
  { slug: 'hazerswoude-rijndijk', name: 'Hazerswoude-Rijndijk', municipality: 'alphen-aan-den-rijn' },
  { slug: 'benthuizen', name: 'Benthuizen', municipality: 'alphen-aan-den-rijn' },
  { slug: 'koudekerk-aan-den-rijn', name: 'Koudekerk aan den Rijn', municipality: 'alphen-aan-den-rijn' },
  { slug: 'zwammerdam', name: 'Zwammerdam', municipality: 'alphen-aan-den-rijn' },
  { slug: 'aarlanderveen', name: 'Aarlanderveen', municipality: 'alphen-aan-den-rijn' },
  { slug: 'leimuiden', name: 'Leimuiden', municipality: 'kaag-en-braassem' },
  { slug: 'roelofarendsveen', name: 'Roelofarendsveen', municipality: 'kaag-en-braassem' },
  { slug: 'oude-wetering', name: 'Oude Wetering', municipality: 'kaag-en-braassem' },
  { slug: 'woubrugge', name: 'Woubrugge', municipality: 'kaag-en-braassem' },
  { slug: 'hoogmade', name: 'Hoogmade', municipality: 'kaag-en-braassem' },
  { slug: 'rijnsburg', name: 'Rijnsburg', municipality: 'katwijk' },
  { slug: 'valkenburg-zh', name: 'Valkenburg', municipality: 'katwijk' },
  { slug: 'noordwijkerhout', name: 'Noordwijkerhout', municipality: 'noordwijk' },
  { slug: 'de-zilk', name: 'De Zilk', municipality: 'noordwijk' },
  { slug: 'rozenburg', name: 'Rozenburg', municipality: 'rotterdam' },
  { slug: 'hoek-van-holland', name: 'Hoek van Holland', municipality: 'rotterdam' },
  { slug: 'hoogvliet', name: 'Hoogvliet', municipality: 'rotterdam' },
  { slug: 'ijsselmonde', name: 'IJsselmonde', municipality: 'rotterdam' },
  { slug: 'pernis', name: 'Pernis', municipality: 'rotterdam' },
  { slug: 'overschie', name: 'Overschie', municipality: 'rotterdam' },
  { slug: 'hillegersberg', name: 'Hillegersberg', municipality: 'rotterdam' },
  { slug: 'maasland', name: 'Maasland', municipality: 'midden-delfland' },
  { slug: 'schipluiden', name: 'Schipluiden', municipality: 'midden-delfland' },
  { slug: 'den-hoorn', name: 'Den Hoorn', municipality: 'midden-delfland' },
  { slug: 'ter-aar', name: 'Ter Aar', municipality: 'nieuwkoop' },
  { slug: 'nieuwveen', name: 'Nieuwveen', municipality: 'nieuwkoop' },
  { slug: 'noorden', name: 'Noorden', municipality: 'nieuwkoop' },
  { slug: 'zevenhoven', name: 'Zevenhoven', municipality: 'nieuwkoop' },
  { slug: 'hardinxveld', name: 'Hardinxveld', municipality: 'hardinxveld-giessendam' },
  { slug: 'giessendam', name: 'Giessendam', municipality: 'hardinxveld-giessendam' },
]

/** Dorpen en kernen die onder een gemeente vallen (voor de tekst op de gemeentepagina). */
export function getVillagesOf(municipalitySlug: string): Village[] {
  return villages.filter(v => v.municipality === municipalitySlug)
}

// Utility functions
export const citySlugs = cities.map(c => c.slug)

/** De grootste plaatsen — de vaste selectie voor footers, chips en schema's. */
export const TOP_CITIES = [
  { name: 'Den Haag', slug: 'den-haag' },
  { name: 'Rotterdam', slug: 'rotterdam' },
  { name: 'Leiden', slug: 'leiden' },
  { name: 'Delft', slug: 'delft' },
  { name: 'Zoetermeer', slug: 'zoetermeer' },
  { name: 'Dordrecht', slug: 'dordrecht' },
  { name: 'Gouda', slug: 'gouda' },
  { name: 'Alphen aan den Rijn', slug: 'alphen-aan-den-rijn' },
  { name: 'Westland', slug: 'westland' },
  { name: 'Schiedam', slug: 'schiedam' },
  { name: 'Vlaardingen', slug: 'vlaardingen' },
  { name: 'Capelle aan den IJssel', slug: 'capelle-aan-den-ijssel' },
] as const

/** Aantal plaatsen waarvoor een eigen landingspagina bestaat. */
export const cityCount = cities.length

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

// Services data - moet elke map onder app/diensten/ bevatten,
// anders ontbreekt die pagina in de sitemap.
export const services = [
  'computer-laptop-hulp',
  'computercursus-ouderen',
  'computerhulp-senioren',
  'hulp-bij-computerproblemen',
  'pc-hulp-aan-huis',
  'smartphone-hulp-aan-huis',
  'tv-installatie',
  'printer-scanner-hulp',
  'email-hulp',
  'wifi-internet-hulp',
  'tablet-smartphone-hulp',
  'persoonlijke-training',
  'televisie-radio',
  'smart-home-domotica',
  'dataherstel-backup',
  'laptop-computer-reparatie',
  'monteur-aan-huis'
] as const

export type ServiceSlug = typeof services[number]
