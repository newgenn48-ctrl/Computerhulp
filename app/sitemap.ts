import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://computerhulpzh.nl'

  // Diensten
  const services = [
    'computer-laptop-hulp',
    'printer-scanner-hulp',
    'email-hulp',
    'wifi-internet-hulp',
    'tablet-smartphone-hulp',
    'persoonlijke-training',
    'televisie-radio',
    'smart-home-domotica',
    'dataherstel-backup'
  ]

  // Zuid-Holland steden
  const cities = [
    'alblasserdam',
    'albrandswaard',
    'alphen-aan-den-rijn',
    'barendrecht',
    'bodegraven-reeuwijk',
    'capelle-aan-den-ijssel',
    'delft',
    'den-haag',
    'dordrecht',
    'goeree-overflakkee',
    'gorinchem',
    'gouda',
    'hardinxveld-giessendam',
    'hendrik-ido-ambacht',
    'hillegom',
    'hoeksche-waard',
    'kaag-en-braassem',
    'katwijk',
    'krimpen-aan-den-ijssel',
    'krimpenerwaard',
    'lansingerland',
    'leiden',
    'leiderdorp',
    'leidschendam-voorburg',
    'lisse',
    'maassluis',
    'midden-delfland',
    'molenlanden',
    'nieuwkoop',
    'nissewaard',
    'noordwijk',
    'oegstgeest',
    'papendrecht',
    'pijnacker-nootdorp',
    'ridderkerk',
    'rijswijk',
    'rotterdam',
    'schiedam',
    'sliedrecht',
    'teylingen',
    'vlaardingen',
    'voorschoten',
    'waddinxveen',
    'wassenaar',
    'westland',
    'westvoorne',
    'zoetermeer',
    'zoeterwoude',
    'zwijndrecht'
  ]

  // Basis paginas
  const basePages = [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/computerhulp-aan-huis`, priority: 0.95 },
    { url: `${baseUrl}/student-aan-huis`, priority: 0.95 },
    { url: `${baseUrl}/website-laten-maken`, priority: 0.95 },
    { url: `${baseUrl}/offerte-aanvragen`, priority: 0.9 },
    { url: `${baseUrl}/afspraak-maken`, priority: 0.85 },
    { url: `${baseUrl}/contact`, priority: 0.9 },
    { url: `${baseUrl}/over-ons`, priority: 0.8 },
    { url: `${baseUrl}/faq`, priority: 0.7 },
    { url: `${baseUrl}/privacy`, priority: 0.3 },
    { url: `${baseUrl}/voorwaarden`, priority: 0.3 },
  ]

  // Diensten paginas
  const servicePages = services.map(service => ({
    url: `${baseUrl}/diensten/${service}`,
    priority: 0.9,
  }))

  // Stad paginas - Student aan huis
  const studentCityPages = cities.map(city => ({
    url: `${baseUrl}/student-aan-huis-${city}`,
    priority: 0.95,
  }))

  // Stad paginas - Computerhulp aan huis
  const computerhulpCityPages = cities.map(city => ({
    url: `${baseUrl}/computerhulp-aan-huis-${city}`,
    priority: 0.95,
  }))

  return [
    ...basePages,
    ...servicePages,
    ...studentCityPages,
    ...computerhulpCityPages,
  ]
}
