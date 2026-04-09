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
  // Plaatsen binnen gemeenten
  // Westland
  { slug: 'wateringen', name: 'Wateringen', latitude: 52.02, longitude: 4.27 },
  { slug: 'naaldwijk', name: 'Naaldwijk', latitude: 51.99, longitude: 4.21 },
  { slug: 's-gravenzande', name: "'s-Gravenzande", latitude: 52.00, longitude: 4.16 },
  { slug: 'monster', name: 'Monster', latitude: 52.03, longitude: 4.17 },
  { slug: 'de-lier', name: 'De Lier', latitude: 51.98, longitude: 4.25 },
  { slug: 'honselersdijk', name: 'Honselersdijk', latitude: 52.00, longitude: 4.22 },
  { slug: 'poeldijk', name: 'Poeldijk', latitude: 52.02, longitude: 4.22 },
  { slug: 'kwintsheul', name: 'Kwintsheul', latitude: 52.03, longitude: 4.24 },
  { slug: 'maasdijk', name: 'Maasdijk', latitude: 51.97, longitude: 4.19 },
  { slug: 'ter-heijde', name: 'Ter Heijde', latitude: 52.04, longitude: 4.15 },
  // Lansingerland
  { slug: 'berkel-en-rodenrijs', name: 'Berkel en Rodenrijs', latitude: 51.99, longitude: 4.48 },
  { slug: 'bleiswijk', name: 'Bleiswijk', latitude: 52.01, longitude: 4.53 },
  { slug: 'bergschenhoek', name: 'Bergschenhoek', latitude: 51.99, longitude: 4.50 },
  // Pijnacker-Nootdorp
  { slug: 'pijnacker', name: 'Pijnacker', latitude: 52.02, longitude: 4.43 },
  { slug: 'nootdorp', name: 'Nootdorp', latitude: 52.04, longitude: 4.39 },
  { slug: 'delfgauw', name: 'Delfgauw', latitude: 52.00, longitude: 4.40 },
  // Leidschendam-Voorburg
  { slug: 'voorburg', name: 'Voorburg', latitude: 52.07, longitude: 4.36 },
  { slug: 'leidschendam', name: 'Leidschendam', latitude: 52.08, longitude: 4.39 },
  { slug: 'stompwijk', name: 'Stompwijk', latitude: 52.07, longitude: 4.42 },
  // Teylingen
  { slug: 'sassenheim', name: 'Sassenheim', latitude: 52.23, longitude: 4.52 },
  { slug: 'voorhout', name: 'Voorhout', latitude: 52.22, longitude: 4.48 },
  { slug: 'warmond', name: 'Warmond', latitude: 52.20, longitude: 4.50 },
  // Voorne aan Zee
  { slug: 'hellevoetsluis', name: 'Hellevoetsluis', latitude: 51.83, longitude: 4.13 },
  { slug: 'brielle', name: 'Brielle', latitude: 51.90, longitude: 4.16 },
  { slug: 'oostvoorne', name: 'Oostvoorne', latitude: 51.91, longitude: 4.09 },
  { slug: 'rockanje', name: 'Rockanje', latitude: 51.87, longitude: 4.07 },
  { slug: 'nieuwenhoorn', name: 'Nieuwenhoorn', latitude: 51.86, longitude: 4.14 },
  { slug: 'zwartewaal', name: 'Zwartewaal', latitude: 51.87, longitude: 4.20 },
  // Nissewaard
  { slug: 'spijkenisse', name: 'Spijkenisse', latitude: 51.85, longitude: 4.33 },
  { slug: 'abbenbroek', name: 'Abbenbroek', latitude: 51.86, longitude: 4.23 },
  { slug: 'geervliet', name: 'Geervliet', latitude: 51.86, longitude: 4.26 },
  { slug: 'hekelingen', name: 'Hekelingen', latitude: 51.85, longitude: 4.28 },
  { slug: 'zuidland', name: 'Zuidland', latitude: 51.84, longitude: 4.27 },
  { slug: 'heenvliet', name: 'Heenvliet', latitude: 51.87, longitude: 4.24 },
  // Hoeksche Waard
  { slug: 'oud-beijerland', name: 'Oud-Beijerland', latitude: 51.83, longitude: 4.42 },
  { slug: 'strijen', name: 'Strijen', latitude: 51.75, longitude: 4.55 },
  { slug: 'klaaswaal', name: 'Klaaswaal', latitude: 51.79, longitude: 4.44 },
  { slug: 'numansdorp', name: 'Numansdorp', latitude: 51.73, longitude: 4.44 },
  { slug: 'piershil', name: 'Piershil', latitude: 51.78, longitude: 4.36 },
  { slug: 'zuid-beijerland', name: 'Zuid-Beijerland', latitude: 51.76, longitude: 4.35 },
  { slug: 's-gravendeel', name: "'s-Gravendeel", latitude: 51.78, longitude: 4.62 },
  { slug: 'puttershoek', name: 'Puttershoek', latitude: 51.80, longitude: 4.59 },
  { slug: 'maasdam', name: 'Maasdam', latitude: 51.79, longitude: 4.55 },
  { slug: 'heinenoord', name: 'Heinenoord', latitude: 51.82, longitude: 4.48 },
  { slug: 'mijnsheerenland', name: 'Mijnsheerenland', latitude: 51.81, longitude: 4.46 },
  { slug: 'nieuw-beijerland', name: 'Nieuw-Beijerland', latitude: 51.80, longitude: 4.35 },
  { slug: 'goudswaard', name: 'Goudswaard', latitude: 51.78, longitude: 4.38 },
  // Albrandswaard
  { slug: 'rhoon', name: 'Rhoon', latitude: 51.86, longitude: 4.42 },
  { slug: 'poortugaal', name: 'Poortugaal', latitude: 51.86, longitude: 4.40 },
  // Goeree-Overflakkee
  { slug: 'middelharnis', name: 'Middelharnis', latitude: 51.76, longitude: 4.17 },
  { slug: 'ouddorp', name: 'Ouddorp', latitude: 51.81, longitude: 3.93 },
  { slug: 'dirksland', name: 'Dirksland', latitude: 51.74, longitude: 4.10 },
  { slug: 'goedereede', name: 'Goedereede', latitude: 51.82, longitude: 3.98 },
  { slug: 'sommelsdijk', name: 'Sommelsdijk', latitude: 51.77, longitude: 4.17 },
  { slug: 'stellendam', name: 'Stellendam', latitude: 51.79, longitude: 4.03 },
  { slug: 'oude-tonge', name: 'Oude-Tonge', latitude: 51.69, longitude: 4.22 },
  { slug: 'nieuwe-tonge', name: 'Nieuwe-Tonge', latitude: 51.72, longitude: 4.19 },
  { slug: 'ooltgensplaat', name: 'Ooltgensplaat', latitude: 51.68, longitude: 4.35 },
  { slug: 'stad-aan-t-haringvliet', name: "Stad aan 't Haringvliet", latitude: 51.74, longitude: 4.10 },
  { slug: 'den-bommel', name: 'Den Bommel', latitude: 51.72, longitude: 4.27 },
  { slug: 'herkingen', name: 'Herkingen', latitude: 51.74, longitude: 4.12 },
  { slug: 'melissant', name: 'Melissant', latitude: 51.74, longitude: 4.14 },
  // Bodegraven-Reeuwijk
  { slug: 'bodegraven', name: 'Bodegraven', latitude: 52.08, longitude: 4.75 },
  { slug: 'reeuwijk', name: 'Reeuwijk', latitude: 52.05, longitude: 4.73 },
  { slug: 'driebruggen', name: 'Driebruggen', latitude: 52.04, longitude: 4.78 },
  // Krimpenerwaard
  { slug: 'schoonhoven', name: 'Schoonhoven', latitude: 51.95, longitude: 4.85 },
  { slug: 'bergambacht', name: 'Bergambacht', latitude: 51.93, longitude: 4.79 },
  { slug: 'lekkerkerk', name: 'Lekkerkerk', latitude: 51.89, longitude: 4.68 },
  { slug: 'stolwijk', name: 'Stolwijk', latitude: 51.97, longitude: 4.77 },
  { slug: 'haastrecht', name: 'Haastrecht', latitude: 52.00, longitude: 4.77 },
  { slug: 'ammerstol', name: 'Ammerstol', latitude: 51.93, longitude: 4.83 },
  { slug: 'berkenwoude', name: 'Berkenwoude', latitude: 51.95, longitude: 4.71 },
  { slug: 'gouderak', name: 'Gouderak', latitude: 51.97, longitude: 4.68 },
  { slug: 'krimpen-aan-de-lek', name: 'Krimpen aan de Lek', latitude: 51.89, longitude: 4.63 },
  { slug: 'ouderkerk-aan-den-ijssel', name: 'Ouderkerk aan den IJssel', latitude: 51.93, longitude: 4.64 },
  // Molenlanden
  { slug: 'kinderdijk', name: 'Kinderdijk', latitude: 51.89, longitude: 4.64 },
  { slug: 'nieuw-lekkerland', name: 'Nieuw-Lekkerland', latitude: 51.89, longitude: 4.69 },
  { slug: 'groot-ammers', name: 'Groot-Ammers', latitude: 51.91, longitude: 4.83 },
  { slug: 'bleskensgraaf', name: 'Bleskensgraaf', latitude: 51.87, longitude: 4.79 },
  { slug: 'arkel', name: 'Arkel', latitude: 51.87, longitude: 4.99 },
  { slug: 'giessenburg', name: 'Giessenburg', latitude: 51.87, longitude: 4.89 },
  { slug: 'hoornaar', name: 'Hoornaar', latitude: 51.89, longitude: 4.94 },
  { slug: 'nieuwpoort', name: 'Nieuwpoort', latitude: 51.93, longitude: 4.87 },
  { slug: 'streefkerk', name: 'Streefkerk', latitude: 51.90, longitude: 4.74 },
  { slug: 'oud-alblas', name: 'Oud-Alblas', latitude: 51.87, longitude: 4.70 },
  { slug: 'noordeloos', name: 'Noordeloos', latitude: 51.89, longitude: 4.95 },
  { slug: 'schelluinen', name: 'Schelluinen', latitude: 51.85, longitude: 4.96 },
  { slug: 'langerak', name: 'Langerak', latitude: 51.91, longitude: 4.80 },
  // Alphen aan den Rijn
  { slug: 'boskoop', name: 'Boskoop', latitude: 52.08, longitude: 4.66 },
  { slug: 'hazerswoude-dorp', name: 'Hazerswoude-Dorp', latitude: 52.10, longitude: 4.58 },
  { slug: 'hazerswoude-rijndijk', name: 'Hazerswoude-Rijndijk', latitude: 52.11, longitude: 4.60 },
  { slug: 'benthuizen', name: 'Benthuizen', latitude: 52.08, longitude: 4.54 },
  { slug: 'koudekerk-aan-den-rijn', name: 'Koudekerk aan den Rijn', latitude: 52.14, longitude: 4.52 },
  { slug: 'zwammerdam', name: 'Zwammerdam', latitude: 52.10, longitude: 4.74 },
  { slug: 'aarlanderveen', name: 'Aarlanderveen', latitude: 52.12, longitude: 4.67 },
  // Kaag en Braassem
  { slug: 'leimuiden', name: 'Leimuiden', latitude: 52.22, longitude: 4.68 },
  { slug: 'roelofarendsveen', name: 'Roelofarendsveen', latitude: 52.20, longitude: 4.63 },
  { slug: 'oude-wetering', name: 'Oude Wetering', latitude: 52.21, longitude: 4.61 },
  { slug: 'woubrugge', name: 'Woubrugge', latitude: 52.17, longitude: 4.64 },
  { slug: 'hoogmade', name: 'Hoogmade', latitude: 52.18, longitude: 4.58 },
  // Katwijk
  { slug: 'rijnsburg', name: 'Rijnsburg', latitude: 52.19, longitude: 4.44 },
  { slug: 'valkenburg-zh', name: 'Valkenburg', latitude: 52.18, longitude: 4.43 },
  // Noordwijk
  { slug: 'noordwijkerhout', name: 'Noordwijkerhout', latitude: 52.26, longitude: 4.49 },
  { slug: 'de-zilk', name: 'De Zilk', latitude: 52.28, longitude: 4.50 },
  // Rotterdam deelgebieden
  { slug: 'rozenburg', name: 'Rozenburg', latitude: 51.90, longitude: 4.25 },
  { slug: 'hoek-van-holland', name: 'Hoek van Holland', latitude: 51.98, longitude: 4.13 },
  { slug: 'hoogvliet', name: 'Hoogvliet', latitude: 51.87, longitude: 4.37 },
  { slug: 'ijsselmonde', name: 'IJsselmonde', latitude: 51.89, longitude: 4.50 },
  { slug: 'pernis', name: 'Pernis', latitude: 51.88, longitude: 4.39 },
  { slug: 'overschie', name: 'Overschie', latitude: 51.94, longitude: 4.43 },
  { slug: 'hillegersberg', name: 'Hillegersberg', latitude: 51.96, longitude: 4.48 },
  // Midden-Delfland
  { slug: 'maasland', name: 'Maasland', latitude: 51.93, longitude: 4.28 },
  { slug: 'schipluiden', name: 'Schipluiden', latitude: 51.97, longitude: 4.32 },
  { slug: 'den-hoorn', name: 'Den Hoorn', latitude: 52.00, longitude: 4.33 },
  // Nieuwkoop
  { slug: 'ter-aar', name: 'Ter Aar', latitude: 52.17, longitude: 4.72 },
  { slug: 'nieuwveen', name: 'Nieuwveen', latitude: 52.20, longitude: 4.76 },
  { slug: 'noorden', name: 'Noorden', latitude: 52.16, longitude: 4.77 },
  { slug: 'zevenhoven', name: 'Zevenhoven', latitude: 52.18, longitude: 4.80 },
  // Hardinxveld-Giessendam
  { slug: 'hardinxveld', name: 'Hardinxveld', latitude: 51.83, longitude: 4.84 },
  { slug: 'giessendam', name: 'Giessendam', latitude: 51.83, longitude: 4.86 },
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
  'dataherstel-backup',
  'laptop-computer-reparatie',
  'laptop-laten-herstellen',
  'monteur-aan-huis'
] as const

export type ServiceSlug = typeof services[number]
