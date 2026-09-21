import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import NearbyCities from '@/components/NearbyCities'
import ServicesSection from '@/components/ServicesSection'
import Hero from '@/components/sections/Hero'
import CallbackSection from '@/components/sections/CallbackSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import ComfortSection from '@/components/sections/ComfortSection'
import { Icon } from '@/components/icons'
import { City, getVillagesOf } from '@/lib/cities'
import { getCityContent, getPopulationDescription, formatNeighborhoods } from '@/lib/cityContent'
import { BUSINESS, PRICING, HOURS, OG_IMAGE } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

// ─── Types ───────────────────────────────────────────────────────────────────

export type CityPageVariant = 'computerhulp' | 'student'

interface CityPageTemplateProps {
  city: City
  variant: CityPageVariant
}

// ─── Variant-specific configuration ──────────────────────────────────────────

interface Benefit {
  icon: string
  title: string
  desc: string
}

interface VariantConfig {
  serviceName: string
  serviceNameLower: string
  urlPrefix: 'computerhulp-aan-huis' | 'student-aan-huis'
  heroImage: string
  heroAlt: (cityName: string) => string
  heroTitle: (cityName: string) => React.ReactNode
  heroDescription: (cityName: string) => React.ReactNode
  servicesTitle: (cityName: string) => string
  servicesDescription: string
  whyTitle: string
  benefits?: Benefit[]
  neighborhoodsSectionTitle: (city: City, region: string) => string
  neighborhoodsSectionDescription: (cityName: string, region?: string) => string
  pricingBenefits: (cityName: string) => string[]
}

const computerhulpConfig: VariantConfig = {
  serviceName: 'Computerhulp aan Huis',
  serviceNameLower: 'computerhulp aan huis',
  urlPrefix: 'computerhulp-aan-huis',
  heroImage: '/hero-computerhulp.webp',
  heroAlt: (cityName) => `HBO-student sluit de wifi-router aan terwijl de bewoonster meekijkt in ${cityName}`,
  heroTitle: (cityName) => (
    <>Computerhulp aan huis <span className="hero-highlight">{cityName}</span></>
  ),
  heroDescription: (cityName) => (
    <>
      Computer, printer, internet, e-mail, tablet of telefoon: doet iets het niet meer? Een geduldige HBO-student komt bij u thuis in {cityName}, lost het op en legt het rustig uit. <strong className="text-white">Meestal binnen 24 uur.</strong>
    </>
  ),
  servicesTitle: (cityName) => `Computerhulp aan huis ${cityName}`,
  servicesDescription: 'Van een simpele vraag tot een lastig probleem, wij helpen u graag',
  whyTitle: 'Waarom klanten voor ons kiezen',
  neighborhoodsSectionTitle: (_city, region) => `Computerhulp in de regio ${region}`,
  neighborhoodsSectionDescription: (cityName, region) =>
    `Wij komen in alle wijken en buurten van ${cityName}. Waar u ook woont in de regio ${region}, we zijn er snel.`,
  pricingBenefits: (cityName) => [
    `${PRICING.TRAVEL} voorrijkosten in ${cityName}`,
    'Ook \'s avonds en in het weekend beschikbaar',
    'Betalen via pin of Tikkie'
  ],
}

const studentConfig: VariantConfig = {
  serviceName: 'Student aan Huis',
  serviceNameLower: 'student aan huis',
  urlPrefix: 'student-aan-huis',
  heroImage: '/hero-student.webp',
  heroAlt: (cityName) => `HBO-student legt aan de keukentafel iets uit op een tablet aan een oudere klant in ${cityName}`,
  heroTitle: (cityName) => (
    <>Student aan huis <span className="hero-highlight">{cityName}</span></>
  ),
  heroDescription: (cityName) => (
    <>
      Computer, printer, internet, e-mail, tablet of telefoon: doet iets het niet meer? Een geduldige HBO-student komt bij u thuis in {cityName}, lost het op en legt het rustig uit.
    </>
  ),
  servicesTitle: (cityName) => `Waar we u mee helpen in ${cityName}`,
  servicesDescription: 'Van een laptopprobleem tot smart home, onze HBO-studenten helpen u graag',
  whyTitle: 'Waarom een student aan huis?',
  benefits: [
    { icon: 'users', title: 'Geduldige HBO-studenten', desc: 'Jonge specialisten die uitleggen stap voor stap. Geen vaktermen, wel helder.' },
    { icon: 'clock', title: 'Meestal binnen 24 uur bij u thuis', desc: 'Geen wachtlijst. Meestal de volgende dag al bij u aan de keukentafel.' },
    { icon: 'home', title: 'Gewoon thuis blijven', desc: 'U hoeft nergens naartoe. Wij komen bij u en lossen het ter plekke op.' },
    { icon: 'money', title: 'Betalen pas na afloop', desc: 'Eerst u tevreden, dan betalen, via Tikkie. Geen abonnement, geen verborgen kosten.' },
  ],
  neighborhoodsSectionTitle: (city) => `Student aan huis in alle wijken van ${city.name}`,
  neighborhoodsSectionDescription: (cityName) =>
    `Wij komen in alle wijken en buurten van ${cityName}. Waar u ook woont, voorrijden kost slechts ${PRICING.TRAVEL}.`,
  pricingBenefits: (cityName) => [
    `${PRICING.TRAVEL} voorrijkosten in ${cityName}`,
    'Eerlijke inschatting vooraf, geen verrassingen',
    'Ook \'s avonds en in het weekend beschikbaar',
    'Betalen via pin of Tikkie'
  ],
}

/** Hogescholen/universiteiten in de buurt van elke regio; gebruikt op de student-stadspagina's. */
const STUDY_CITIES: Record<string, string> = {
  'Haaglanden': 'Den Haag en Delft',
  'Westland': 'Den Haag en Delft',
  'Midden-Delfland': 'Delft en Rotterdam',
  'Rijnmond': 'Rotterdam',
  'Lansingerland': 'Rotterdam en Den Haag',
  'Voorne aan Zee': 'Rotterdam',
  'Voorne-Putten': 'Rotterdam',
  'Drechtsteden': 'Rotterdam en Dordrecht',
  'Alblasserwaard': 'Rotterdam en Dordrecht',
  'Hoeksche Waard': 'Rotterdam en Dordrecht',
  'Goeree-Overflakkee': 'Rotterdam',
  'Holland Rijnland': 'Leiden',
  'Bollenstreek': 'Leiden',
  'Groene Hart': 'Leiden en Rotterdam',
  'Krimpenerwaard': 'Rotterdam',
}

function getConfig(variant: CityPageVariant): VariantConfig {
  return variant === 'computerhulp' ? computerhulpConfig : studentConfig
}

// ─── Metadata generators ─────────────────────────────────────────────────────

/** ' (ook Naaldwijk, Monster en De Lier)' voor gemeenten met dorpen; anders leeg. */
function villageSuffix(city: City): string {
  const names = getVillagesOf(city.slug).slice(0, city.name.length > 12 ? 1 : 2).map(v => v.name)
  if (names.length === 0) return ''
  const lijst = names.length > 1 ? `${names.slice(0, -1).join(', ')} en ${names[names.length - 1]}` : names[0]
  return ` (ook ${lijst})`
}

/** Google toont ~160 tekens van een beschrijving: met dorpen als het past, anders zonder. */
function fit160(long: string, short: string): string {
  return long.length <= 160 ? long : short
}

export function generateComputerhulpPageMetadata(city: City): Metadata {
  /* Google toont ~60 tekens van een title; lange plaatsnamen krijgen een
     kortere variant zodat de naam nooit wordt afgekapt. */
  const title =
    [
      `Computerhulp aan huis ${city.name} | Meestal binnen 24 uur`,
      `Computerhulp aan huis ${city.name} | Snel bij u thuis`,
    ].find((t) => t.length <= 60) ?? `Computerhulp ${city.name} | Meestal binnen 24 uur`
  return {
    title,
    description: fit160(`Computerhulp aan huis in ${city.name}${villageSuffix(city)}: computer, laptop, printer en wifi. Meestal binnen 24 uur bij u thuis. Bel ${BUSINESS.PHONE}.`,
      `Computerhulp aan huis in ${city.name}: computer, laptop, printer en wifi. Meestal binnen 24 uur bij u thuis. Bel ${BUSINESS.PHONE}.`),
    openGraph: {
      images: OG_IMAGE,
      title: `Computerhulp aan huis ${city.name} | Meestal binnen 24 uur`,
      description: `Computerhulp aan huis in ${city.name}. Computer, laptop, printer, wifi, smartphone, tablet en camera. Meestal binnen 24 uur bij u thuis.`,
      type: 'website',
      url: `https://computerhulpzh.nl/computerhulp-aan-huis-${city.slug}`,
    },
    alternates: {
      canonical: `https://computerhulpzh.nl/computerhulp-aan-huis-${city.slug}`,
    },
  }
}

export function generateStudentPageMetadata(city: City): Metadata {
  /* Zoekers op 'student aan huis [plaats]' vergelijken met abonnementsdiensten: de titel en
     omschrijving noemen daarom wat ons onderscheidt (HBO-student, geen abonnement, prijs). */
  const title =
    [
      `Student aan huis ${city.name} | HBO-student, geen abonnement`,
      `Student aan huis ${city.name} | Geen abonnement`,
      `Student aan huis ${city.name} | Meestal binnen 24 uur`,
    ].find((t) => t.length <= 60) ?? `Student aan huis ${city.name}`
  return {
    title,
    description: fit160(`Student aan huis in ${city.name}${villageSuffix(city)}: een geduldige HBO-student voor computer, laptop en wifi. ${PRICING.PER_QUARTER} per kwartier, geen abonnement.`,
      `Student aan huis in ${city.name}: een geduldige HBO-student voor computer, laptop en wifi. ${PRICING.PER_QUARTER} per kwartier, geen abonnement.`),
    openGraph: {
      images: OG_IMAGE,
      title: `Student aan huis ${city.name} | Geen abonnement`,
      description: `Student aan huis in ${city.name}. Computerhulp door HBO-studenten. Meestal binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
      type: 'website',
      url: `https://computerhulpzh.nl/student-aan-huis-${city.slug}`,
    },
    alternates: {
      canonical: `https://computerhulpzh.nl/student-aan-huis-${city.slug}`,
    },
  }
}

// ─── Structured data ─────────────────────────────────────────────────────────

function generateStructuredData(city: City, variant: CityPageVariant) {
  const config = getConfig(variant)
  const baseUrl = 'https://computerhulpzh.nl'
  const pageUrl = `${baseUrl}/${config.urlPrefix}-${city.slug}`
  const serviceName = `${config.serviceName} ${city.name}`
  const content = getCityContent(city.slug)

  const cityDescription = variant === 'computerhulp'
    ? (content
        ? `Professionele computerhulp aan huis in ${city.name} (${content.region}). ${content.description.split('.')[0]}. Hulp bij computer, laptop, printer, wifi, smartphone, tablet, camera en smart home, opgelost bij u thuis.`
        : `Professionele computerhulp aan huis in ${city.name}. Hulp bij computer, laptop, printer, wifi, smartphone, tablet, camera en smart home. Meestal binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten.`)
    : (content
        ? `HBO-studenten aan huis in ${city.name} (${content.region}). ${content.description.split('.')[0]}. Computerhulp door geduldige HBO-studenten bij u thuis.`
        : `Computerhulp aan huis door HBO-studenten in ${city.name} en omgeving. Hulp bij computer, laptop, tablet, smartphone en internet.`)

  const serviceDescription = variant === 'computerhulp'
    ? `Professionele computerhulp aan huis in ${city.name}. Hulp bij computer, laptop, printer, wifi, smartphone, tablet, camera en smart home. Meestal binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten.`
    : `HBO-studenten komen bij u thuis in ${city.name} voor computerhulp. Hulp bij laptop, pc, tablet en smartphoneproblemen. Meestal binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten.`

  const localBusiness: Record<string, unknown> = {
    '@type': 'LocalBusiness',
    // Eigen ID per pagina: het bedrijf is één, maar de stadsvermelding (naam, plaats, coördinaten)
    // verschilt per pagina en mag niet onder één gedeeld ID botsen.
    '@id': `${pageUrl}#localbusiness`,
    name: variant === 'computerhulp' ? `Computerhulp aan Huis ${city.name}` : 'Computerhulp Zuid-Holland',
    url: baseUrl,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    description: cityDescription,
    logo: `${baseUrl}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: 'Zuid-Holland',
      addressCountry: 'NL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: String(city.latitude),
      longitude: String(city.longitude)
    },
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '22:00'
      }
    ],
    areaServed: {
      '@type': 'City',
      name: city.name
    }
  }

  if (variant === 'student') {
    localBusiness.image = `${baseUrl}/hero-student.webp`
  }

  const serviceEntity: Record<string, unknown> = {
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    serviceType: variant === 'computerhulp' ? 'Computerhulp aan Huis' : serviceName,
    name: serviceName,
    description: serviceDescription,
    url: pageUrl,
    provider: { '@id': `${pageUrl}#localbusiness` },
    areaServed: { '@type': 'City', name: city.name },
    offers: {
      '@type': 'Offer',
      price: '14.99',
      priceCurrency: 'EUR',
      ...(variant === 'computerhulp' ? { availability: 'https://schema.org/InStock' } : {}),
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '14.99',
        priceCurrency: 'EUR',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: '15',
          unitCode: 'MIN',
          unitText: 'minuten'
        },
        ...(variant === 'computerhulp' ? { minPrice: '44.97' } : {}),
        description: `Minimaal 3 kwartier (${PRICING.MINIMUM_TOTAL} totaal)`
      }
    }
  }

  const breadcrumbName = variant === 'computerhulp'
    ? city.name
    : `${config.serviceName} ${city.name}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      localBusiness,
      serviceEntity,
      ...(variant === 'computerhulp'
        ? generateComputerhulpFaqEntities(city)
        : [{ '@type': 'FAQPage', mainEntity: generateStudentFaqQuestions(city) }]),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: config.serviceName,
            item: `${baseUrl}/${config.urlPrefix}`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: breadcrumbName,
            item: pageUrl
          }
        ]
      }
    ]
  }
}

// ─── FAQ structured data (computerhulp variant) ─────────────────────────────

function generateComputerhulpFaqEntities(city: City) {
  const content = getCityContent(city.slug)

  const faqEntities: Array<{ '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }> = [
    {
      '@type': 'Question',
      name: `Wat kost computerhulp aan huis in ${city.name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Computerhulp aan huis in ${city.name} kost ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL} totaal). Voorrijden kost slechts ${PRICING.TRAVEL}.`
      }
    },
    {
      '@type': 'Question',
      name: `Hoe snel kan computerhulp aan huis in ${city.name} komen?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Onze computerhulp aan huis komt meestal binnen 24 uur bij u in ${city.name}. Bij acute problemen vaak nog dezelfde dag. We zijn 7 dagen per week beschikbaar.`
      }
    },
    {
      '@type': 'Question',
      name: `Welke problemen lost computerhulp aan huis in ${city.name} op?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Wij lossen problemen op met computer, laptop, printer, wifi, smartphone, tablet, smart-tv, camera, e-mail en smart home bij u thuis in ${city.name}. Van trage computers en een computer die weer schoon en snel moet tot printerinstallatie, wifi-optimalisatie en het instellen van een nieuwe smartphone of camera.`
      }
    },
    {
      '@type': 'Question',
      name: 'Zijn er voorrijkosten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Voorrijden kost slechts ${PRICING.TRAVEL} voor computerhulp aan huis in ${city.name} en heel Zuid-Holland. U betaalt alleen voor de daadwerkelijke hulp.`
      }
    }
  ]

  if (content && content.neighborhoods.length >= 3) {
    faqEntities.push({
      '@type': 'Question',
      name: `In welke wijken van ${city.name} bieden jullie computerhulp aan?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Wij bieden computerhulp aan huis in alle wijken van ${city.name}, waaronder ${content.neighborhoods.slice(0, 5).join(', ')}. In de hele regio ${content.region} is voorrijden slechts ${PRICING.TRAVEL}.`
      }
    })
  }

  return [{
    '@type': 'FAQPage',
    mainEntity: faqEntities
  }]
}

// ─── FAQ structured data (student variant) ──────────────────────────────────

function generateStudentFaqQuestions(city: City) {
  const content = getCityContent(city.slug)

  const questions: Array<Record<string, unknown>> = [
    {
      '@type': 'Question',
      name: `Wat kost student aan huis in ${city.name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Student aan huis in ${city.name} kost ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL} totaal). Voorrijden kost slechts ${PRICING.TRAVEL} in ${city.name} en omgeving. U betaalt na afloop via pin of Tikkie.`
      }
    },
    {
      '@type': 'Question',
      name: `Hoe snel kan een HBO-student in ${city.name} langskomen?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `In de meeste gevallen kunnen onze HBO-studenten binnen 24 uur bij u thuis zijn in ${city.name}. Bij urgente problemen proberen we dezelfde dag langs te komen. We zijn 7 dagen per week beschikbaar, ook 's avonds.`
      }
    },
    {
      '@type': 'Question',
      name: 'Waar helpen jullie HBO-studenten mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze HBO-studenten helpen met laptop- en computerproblemen, wifi en internet, printers, e-mail, tablets en smartphones, smart home-apparaten en persoonlijke training. Van trage computers tot nieuwe apparaten instellen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt de betaling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U betaalt na afloop van het bezoek. Dit kan via pin of Tikkie. U krijgt vooraf een inschatting van de tijd, zodat u weet waar u aan toe bent. Geen verborgen kosten, geen abonnementen.'
      }
    },
    {
      '@type': 'Question',
      name: `Komen jullie ook 's avonds en in het weekend in ${city.name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Ja, onze HBO-studenten zijn 7 dagen per week beschikbaar in ${city.name}, ook 's avonds tot 22:00 uur. Perfect als u overdag werkt en 's avonds of in het weekend hulp nodig heeft.`
      }
    }
  ]

  if (content && content.neighborhoods.length >= 3) {
    questions.push({
      '@type': 'Question',
      name: `In welke wijken van ${city.name} komen jullie HBO-studenten?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Onze HBO-studenten komen in alle wijken van ${city.name}, waaronder ${content.neighborhoods.slice(0, 5).join(', ')}. Voorrijden kost slechts ${PRICING.TRAVEL} in de hele regio ${content.region}.`
      }
    })
  }

  return questions
}

// ─── FAQ display data ────────────────────────────────────────────────────────

function getComputerhulpFaqDisplayData(city: City) {
  const content = getCityContent(city.slug)
  const items = [
    {
      question: `Wat kost computerhulp aan huis in ${city.name}?`,
      answer: `U betaalt ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost slechts ${PRICING.TRAVEL}, u betaalt dus alleen voor de hulp zelf.`
    },
    {
      question: `Hoe snel kunnen jullie in ${city.name} komen?`,
      answer: `Meestal zijn we binnen 24 uur bij u. Is het dringend? Dan proberen we het vaak nog dezelfde dag te regelen. We zijn 7 dagen per week bereikbaar.`
    },
    {
      question: `Waar kunnen jullie mee helpen?`,
      answer: `Met bijna alles rondom uw computer, laptop, printer, wifi, smartphone, tablet, smart-tv, camera, e-mail of smart home. Denk aan een trage computer, een printer die niet wil, wifi-problemen, het instellen van een nieuwe smartphone of camera, of hulp bij uw e-mail.`
    },
    {
      question: 'Zijn er voorrijkosten?',
      answer: `Voorrijden kost slechts ${PRICING.TRAVEL} in ${city.name} en heel Zuid-Holland. U betaalt alleen voor de hulp zelf.`
    },
  ]
  if (content && content.neighborhoods.length >= 3) {
    items.push({
      question: `Komen jullie ook in mijn wijk in ${city.name}?`,
      answer: `Ja, we komen in alle wijken van ${city.name}, zoals ${content.neighborhoods.slice(0, 5).join(', ')}. Voorrijden kost slechts ${PRICING.TRAVEL}.`
    })
  }
  return items
}

function getStudentFaqDisplayData(city: City) {
  const content = getCityContent(city.slug)
  const items = [
    {
      question: `Wat kost student aan huis in ${city.name}?`,
      answer: `U betaalt ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost slechts ${PRICING.TRAVEL}. Betalen doet u achteraf, via pin of Tikkie.`
    },
    {
      question: `Hoe snel kunnen jullie in ${city.name} langskomen?`,
      answer: `Meestal zijn we binnen 24 uur bij u. Is het dringend? Dan proberen we het vaak nog dezelfde dag te regelen. We zijn 7 dagen per week bereikbaar, ook 's avonds.`
    },
    {
      question: 'Waar kunnen jullie mee helpen?',
      answer: 'Eigenlijk met alles rondom uw computer, laptop, tablet, smartphone, printer, wifi of e-mail. Of u nu een traag apparaat heeft of iets nieuws wilt instellen, wij helpen u graag.'
    },
    {
      question: 'Hoe werkt de betaling?',
      answer: 'U betaalt pas na afloop, via pin of Tikkie. Vooraf krijgt u een inschatting van de tijd, zodat u weet waar u aan toe bent. Geen verborgen kosten.'
    },
    {
      question: `Komen jullie ook 's avonds en in het weekend?`,
      answer: `Ja, we zijn 7 dagen per week beschikbaar, ook 's avonds tot 22:00 uur. Handig als u overdag werkt.`
    }
  ]

  if (content && content.neighborhoods.length >= 3) {
    items.push({
      question: `Komen jullie ook in mijn wijk in ${city.name}?`,
      answer: `Ja, we komen in alle wijken van ${city.name}, zoals ${content.neighborhoods.slice(0, 5).join(', ')}. Voorrijden kost slechts ${PRICING.TRAVEL}.`
    })
  }

  return items
}

// ─── Content section (computerhulp variant) ──────────────────────────────────

function ComputerhulpContentSection({ city }: { city: City }) {
  const content = getCityContent(city.slug)
  const populationText = content ? getPopulationDescription(content.population) : ''
  const neighborhoodText = content ? formatNeighborhoods(content.neighborhoods, city.name) : ''
  // De stadsbeschrijving is sinds september 2026 150-250 woorden; op de pagina
  // tonen we de eerste zin in de openingsalinea en de rest in alinea's van drie zinnen.
  const descSentences = content
    ? (content.description.match(/[^.!?]+[.!?]+/g) ?? [content.description]).map((s) => s.trim())
    : []
  const descLead = descSentences[0] ?? ''
  const descParas: string[] = []
  for (let i = 1; i < descSentences.length; i += 3) {
    descParas.push(descSentences.slice(i, i + 3).join(' '))
  }

  return (
    <section className="panel-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 panel panel-pad">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - City-specific Content */}
          <div>
            <span className="section-label">Over ons</span>
            <h2 className="section-title-lg mt-4 mb-8">
              Waarom computerhulp aan huis in {city.name}?
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              {content ? (
                <>
                  <p>
                    <strong className="text-gray-900">Computerhulp aan huis in {city.name}</strong>: {descLead} In een gemeente met {populationText} helpen wij regelmatig mensen met hun computer, laptop, printer, wifi, smartphone, tablet of camera. Gewoon bij u aan de keukentafel.
                  </p>
                  <p>
                    {neighborhoodText}, onze HBO-student komt meestal binnen 24 uur bij u langs. Ook in de avonduren en in het weekend. U hoeft nergens naartoe, wij komen naar u toe.
                  </p>
                  {descParas.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                  {content.highlights.length > 0 && (
                    <p>
                      Wij kennen {city.name} en de regio {content.region} goed. Of het nu gaat om een trage computer, een printer die niet wil, wifi die wegvalt of een nieuwe smartphone die ingesteld moet worden, wij zoeken het rustig uit en zorgen dat het weer werkt.
                    </p>
                  )}
                  <p>
                    Veelvoorkomende problemen die wij in {city.name} tegenkomen zijn trage computers door verouderde software, printers die na een update niet meer verbinden, wifi die op bepaalde plekken wegvalt, smartphones en tablets die ingesteld moeten worden, smart-tv&apos;s die niet met streamingdiensten verbinden, en e-mailprogramma&apos;s die opnieuw geconfigureerd moeten worden. Dit soort problemen lossen onze HBO-studenten dagelijks op.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong className="text-gray-900">Computerhulp aan huis in {city.name}</strong>: handig als uw computer, laptop, printer, wifi, smartphone, tablet of camera niet meer doet wat u wilt. U hoeft nergens naartoe, wij komen gewoon bij u thuis.
                  </p>
                  <p>
                    Of u nu in het centrum van {city.name} woont of wat verder weg, meestal zijn we binnen 24 uur bij u. Ook in de avonduren en in het weekend.
                  </p>
                  <p>
                    Of het nu gaat om een trage computer, een printer die niet wil, wifi die wegvalt of een nieuwe smartphone of camera die ingesteld moet worden, wij zoeken het rustig uit en zorgen dat alles weer werkt.
                  </p>
                  <p>
                    Veelvoorkomende problemen die wij tegenkomen zijn trage computers door verouderde software, printers die na een update niet meer verbinden, wifi die op bepaalde plekken wegvalt, smartphones en tablets die ingesteld moeten worden, smart-tv&apos;s die niet met streamingdiensten verbinden, en e-mailprogramma&apos;s die opnieuw geconfigureerd moeten worden. Dit soort problemen lossen onze HBO-studenten dagelijks op.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Uw voordelen
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="check" className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Gewoon thuis blijven</div>
                  <div className="text-gray-600">U hoeft nergens naartoe, wij komen bij u in {city.name}.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="check" className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Snel geregeld</div>
                  <div className="text-gray-600">Meestal is het probleem in één bezoek opgelost.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="check" className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Rustige uitleg</div>
                  <div className="text-gray-600">We nemen de tijd om alles duidelijk uit te leggen.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="check" className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{PRICING.TRAVEL} voorrijkosten</div>
                  <div className="text-gray-600">Computerhulp in heel {city.name} zonder extra kosten.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Content section (student variant) ───────────────────────────────────────

function StudentContentSection({ city }: { city: City }) {
  const content = getCityContent(city.slug)
  const populationText = content ? getPopulationDescription(content.population) : ''
  const studyCities = content ? (STUDY_CITIES[content.region] ?? 'Den Haag, Rotterdam, Leiden en Delft') : 'Den Haag, Rotterdam, Leiden en Delft'
  // De computerhulp-variant toont de hele stadsbeschrijving; hier alleen het middenstuk
  // (wat we er doen), zodat beide pagina's van dezelfde stad niet dezelfde tekst dragen.
  const sentences = content
    ? (content.description.match(/[^.!?]+[.!?]+/g) ?? [content.description]).map((x) => x.trim())
    : []
  const middle = sentences.slice(3, 7).join(' ')
  const kernen = content && content.neighborhoods.length >= 2
    ? `${content.neighborhoods.slice(0, 3).join(', ')} en de andere wijken en kernen van ${city.name}`
    : `alle wijken van ${city.name}`

  return (
    <section className="panel-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
        <p className="section-eyebrow">Student aan huis in {city.name}</p>
        <h2 className="section-title mb-6">
          Wie komt er bij u thuis in {city.name}?
        </h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Een HBO-student uit de buurt.</strong> {city.name} ligt op korte afstand van de hogescholen en universiteiten in {studyCities}, waar veel van onze studenten een technische opleiding volgen, zoals ICT of Informatica. Daardoor kunnen we snel schakelen: meestal staat er binnen 24 uur iemand bij u aan de deur, ook ’s avonds en in het weekend.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            U krijgt vooraf de naam van de student en een tijdvak. De student komt naar {kernen}, luistert eerst naar wat u dwarszit en gaat dan pas aan de slag, op uw eigen{' '}
            <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:text-blue-800 font-medium">computer of laptop</Link>,{' '}
            <Link href="/diensten/smartphone-hulp-aan-huis" className="text-blue-600 hover:text-blue-800 font-medium">tablet of telefoon</Link>{' '}of{' '}
            <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:text-blue-800 font-medium">wifi</Link>. Ondertussen vertelt hij of zij in gewone woorden wat er gebeurt, zodat u het de volgende keer zelf kunt.
          </p>
          {middle && (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Wat we in {city.name} vaak doen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">{middle}</p>
            </>
          )}
          {populationText && (
            <p className="text-gray-700 leading-relaxed mb-6">
              In een gemeente met {populationText} zijn de vragen heel verschillend, maar de aanpak is steeds dezelfde: rustig, in uw tempo en zonder dat u iets hoeft te kopen. Wilt u dezelfde student terug voor een volgende keer? Zeg het bij het maken van de afspraak.
            </p>
          )}

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            Wat u van de student mag verwachten
          </h3>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="check-list-item">
              <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
              <span><strong>U bepaalt:</strong> wanneer, hoe lang en wat er gedaan wordt. Geen verplichtingen, geen abonnement.</span>
            </li>
            <li className="check-list-item">
              <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
              <span><strong>Geen verrassingen:</strong> u krijgt vooraf een inschatting van de tijd en de kosten.</span>
            </li>
            <li className="check-list-item">
              <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
              <span><strong>Uitleg terwijl hij werkt:</strong> de student laat zien wat hij doet en schrijft de belangrijkste stappen desgewenst voor u op.</span>
            </li>
            <li className="check-list-item">
              <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
              <span><strong>Betalen achteraf:</strong> pas na afloop, via pin of Tikkie. {PRICING.TRAVEL} voorrijkosten in {city.name}.</span>
            </li>
            <li className="check-list-item">
              <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
              <span>
                <strong>Ook voor:</strong>{' '}
                <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:text-blue-800">de printer</Link>,{' '}
                <Link href="/diensten/tv-installatie" className="text-blue-600 hover:text-blue-800">de televisie</Link>,{' '}
                <Link href="/diensten/email-hulp" className="text-blue-600 hover:text-blue-800">e-mail</Link> en{' '}
                <Link href="/diensten/computercursus-ouderen" className="text-blue-600 hover:text-blue-800">een computerles aan huis</Link>.
              </span>
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Kunnen wij u helpen in {city.name}? Bel gerust{' '}
            <a href={BUSINESS.PHONE_HREF} className="text-blue-600 hover:text-blue-800 font-semibold">{BUSINESS.PHONE}</a>{' '}
            of{' '}
            <Link href="/afspraak-maken" className="text-blue-600 hover:text-blue-800 font-semibold">vraag online een afspraak aan</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}


// ─── Cross-link section (student variant only) ──────────────────────────────

function StudentCrossLinkSection({ city }: { city: City }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Computerhulp in {city.name}
        </h2>
        <p className="text-gray-600 mb-6">
          Bekijk ook onze andere hulp in {city.name}:
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/computerhulp-aan-huis-${city.slug}`}
            className="city-tag-link"
          >
            Computerhulp aan huis {city.name}
          </Link>
          <Link
            href="/diensten/computer-laptop-hulp"
            className="city-tag-link"
          >
            Computer- en laptophulp
          </Link>
          <Link
            href="/diensten/wifi-internet-hulp"
            className="city-tag-link"
          >
            Wifi- en internethulp
          </Link>
          <Link
            href="/diensten/smartphone-hulp-aan-huis"
            className="city-tag-link"
          >
            Smartphone- en tablethulp
          </Link>
          <Link
            href="/diensten/computercursus-ouderen"
            className="city-tag-link"
          >
            Computercursus aan huis
          </Link>
          <Link
            href="/student-aan-huis"
            className="bg-blue-50 px-4 py-2 rounded-full text-sm font-medium text-blue-600 border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            Alle plaatsen met een student aan huis →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function CityPageTemplate({ city, variant }: CityPageTemplateProps) {
  const config = getConfig(variant)
  const structuredData = generateStructuredData(city, variant)
  const faqItems = variant === 'computerhulp'
    ? getComputerhulpFaqDisplayData(city)
    : getStudentFaqDisplayData(city)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero
        trustLine=""
        pills={[
          { icon: 'academic-cap', label: 'Betrouwbare HBO-studenten' },
          { icon: 'money', label: 'Betaalbare tarieven' },
          { icon: 'clock', label: 'Meestal binnen 24 uur' },
          { icon: 'calendar', label: '7 dagen per week' },
        ]}
        imageSrc={config.heroImage}
        imageAlt={config.heroAlt(city.name)}
        eyebrow={`${BUSINESS.REVIEW_COUNT} tevreden klanten`}
        title={config.heroTitle(city.name)}
        descriptions={[config.heroDescription(city.name)]}
      />

      {/* Vaste volgorde voor beide varianten: feiten → diensten → reviews
          → terugbellen → hoe → waarom. Wat per variant verschilt zit in config. */}
      <ServicesSection
        eyebrow="Onze hulp"
        title={variant === 'computerhulp' ? `Waar wij u mee helpen in ${city.name}` : `Waar de student u in ${city.name} mee helpt`}
        subtitle="Kies wat u herkent. U hoeft niet te weten wat er technisch aan de hand is."
        photoCards={true}
        limitServices={6}
        showAllButton={true}
      />

      <TestimonialsSection
        testimonials={HUB_TESTIMONIALS}
      />

      <CallbackSection cityName={city.name} />

      <HowItWorksSection />

      <ComfortSection cityName={city.name} variant={variant} />

      {/* FAQ */}
      <section className="panel-section" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <header className="text-center mb-10">
            <p className="section-eyebrow">FAQ</p>
            <h2 id="faq-heading" className="section-title">Veelgestelde vragen</h2>
          </header>
          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <details key={idx} className="group faq-item-white">
                <summary className="faq-summary">
                  {faq.question}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                </summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific SEO content */}
      {variant === 'computerhulp'
        ? <ComputerhulpContentSection city={city} />
        : <StudentContentSection city={city} />
      }

      {/* Neighborhoods, alleen als er echte neighborhood data is */}
      {(() => {
        const content = getCityContent(city.slug)
        if (!content || content.neighborhoods.length < 3) return null

        return (
          <section className="panel-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 panel panel-pad">
              <h2 className="section-title">
                {config.neighborhoodsSectionTitle(city, content.region)}
              </h2>
              <p className="section-subtitle mb-8">
                {config.neighborhoodsSectionDescription(city.name, content.region)}
              </p>
              <div className="flex flex-wrap gap-3">
                {content.neighborhoods.map((neighborhood) => (
                  <span key={neighborhood} className="city-tag">{neighborhood}</span>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* Dorpen en kernen van deze gemeente: ze hebben geen eigen pagina meer, maar zoekers
          uit die plaatsen moeten zichzelf hier herkennen (en Google ook). */}
      {(() => {
        const vs = getVillagesOf(city.slug)
        if (vs.length === 0) return null
        const names = vs.map(v => v.name)
        const lijst = names.length > 1 ? `${names.slice(0, -1).join(', ')} en ${names[names.length - 1]}` : names[0]
        return (
          <section className="panel-section" aria-labelledby="dorpen-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 panel panel-pad">
              <h2 id="dorpen-heading" className="section-title">
                {variant === 'computerhulp' ? `Ook computerhulp aan huis in ${lijst}` : `Ook een student aan huis in ${lijst}`}
              </h2>
              <p className="section-subtitle mb-8">
                De gemeente {city.name} bestaat uit meer dan één kern. Wij komen in alle dorpen en wijken
                van {city.name}, voor dezelfde prijs en meestal binnen 24 uur. Voorrijden kost {PRICING.TRAVEL},
                waar u in {city.name} ook woont.
              </p>
              <div className="flex flex-wrap gap-3">
                {names.map((n) => (
                  <span key={n} className="city-tag">{n}</span>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* Nearby cities, discovery vóór de final CTA */}
      <NearbyCities currentCity={city.slug} pageType={config.urlPrefix} />

      {/* Cross-link section (student variant only) */}
      {variant === 'student' && <StudentCrossLinkSection city={city} />}

      {/* Final CTA, consistent met hub pages */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">
            Kunnen wij u helpen in {city.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of stuur een berichtje. We komen graag bij u langs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-cta-dark">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />
              {HOURS.DAYS}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />
              Ook avonden tot {HOURS.CLOSE}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />
              Meestal binnen 24 uur geholpen
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
