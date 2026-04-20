import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import PricingSection from '@/components/PricingSection'
import NearbyCities from '@/components/NearbyCities'
import ServicesSection from '@/components/ServicesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import { Icon } from '@/components/icons'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { City } from '@/lib/cities'
import { getCityContent, getPopulationDescription, formatNeighborhoods } from '@/lib/cityContent'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'
import SectionDivider from '@/components/ui/SectionDivider'

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
  heroImage: '/Computerhulp aan huis.webp',
  heroAlt: (cityName) => `Computerhulp aan huis in ${cityName}`,
  heroTitle: (cityName) => (
    <>Computerhulp aan Huis <span className="text-accent-400">{cityName}</span></>
  ),
  heroDescription: (cityName) => (
    <>
      Heeft u hulp nodig met uw digitale apparaten? Een ICT-specialist komt bij u thuis in {cityName} en lost het <strong className="text-white">meestal binnen 24 uur</strong> op.
    </>
  ),
  servicesTitle: (cityName) => `Computerhulp aan Huis ${cityName}`,
  servicesDescription: 'Van een simpele vraag tot een lastig probleem — wij helpen u graag',
  whyTitle: 'Waarom klanten voor ons kiezen',
  neighborhoodsSectionTitle: (_city, region) => `Computerhulp in de regio ${region}`,
  neighborhoodsSectionDescription: (cityName, region) =>
    `Wij komen in alle wijken en buurten van ${cityName}. Waar u ook woont in de regio ${region} — we zijn er snel.`,
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
  heroImage: '/Student aan huis.webp',
  heroAlt: (cityName) => `IT-student helpt klant thuis met computer in ${cityName}`,
  heroTitle: (cityName) => (
    <>Student aan Huis <span className="text-accent-400">{cityName}</span></>
  ),
  heroDescription: (cityName) => (
    <>
      Heeft u hulp nodig met uw digitale apparaten? Een jonge IT-student komt bij u thuis in {cityName} en legt alles rustig uit — <strong className="text-white">in gewone taal, op uw tempo</strong>.
    </>
  ),
  servicesTitle: (cityName) => `Waar we u mee helpen in ${cityName}`,
  servicesDescription: 'Van een laptopprobleem tot smart home — onze IT-studenten helpen u graag',
  whyTitle: 'Waarom een student aan huis?',
  benefits: [
    { icon: 'users', title: 'Geduldige IT-studenten', desc: 'Jonge specialisten die uitleggen stap voor stap. Geen vaktermen, wel helder.' },
    { icon: 'clock', title: 'Binnen 24 uur bij u thuis', desc: 'Geen wachtlijst. Meestal de volgende dag al bij u aan de keukentafel.' },
    { icon: 'home', title: 'Gewoon thuis blijven', desc: 'U hoeft nergens naartoe. Wij komen bij u en lossen het ter plekke op.' },
    { icon: 'shield', title: 'Betrouwbaar en verzekerd', desc: `KvK ${BUSINESS.KVK}, volledig verzekerd. Betalen pas na afloop.` },
  ],
  neighborhoodsSectionTitle: (city) => `Student aan huis in alle wijken van ${city.name}`,
  neighborhoodsSectionDescription: (cityName) =>
    `Wij komen in alle wijken en buurten van ${cityName}. Waar u ook woont — voorrijden kost slechts ${PRICING.TRAVEL}.`,
  pricingBenefits: (cityName) => [
    `${PRICING.TRAVEL} voorrijkosten in ${cityName}`,
    'Eerlijke inschatting vooraf, geen verrassingen',
    'Ook \'s avonds en in het weekend beschikbaar',
    'Betalen via pin of Tikkie'
  ],
}

function getConfig(variant: CityPageVariant): VariantConfig {
  return variant === 'computerhulp' ? computerhulpConfig : studentConfig
}

// ─── Metadata generators ─────────────────────────────────────────────────────

export function generateComputerhulpPageMetadata(city: City): Metadata {
  return {
    title: `Computerhulp aan Huis ${city.name} | Binnen 24u bij u Thuis`,
    description: `Betrouwbare computerhulp aan huis in ${city.name}. Computer, laptop, printer en WiFi problemen opgelost. Binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
    openGraph: {
      title: `Computerhulp aan Huis ${city.name} | Binnen 24u`,
      description: `Computerhulp aan huis in ${city.name}. Computer-, laptop- en WiFi-hulp. Binnen 24u, ${PRICING.TRAVEL} voorrijkosten.`,
      type: 'website',
      url: `https://computerhulpzh.nl/computerhulp-aan-huis-${city.slug}`,
    },
    alternates: {
      canonical: `https://computerhulpzh.nl/computerhulp-aan-huis-${city.slug}`,
    },
  }
}

export function generateStudentPageMetadata(city: City): Metadata {
  return {
    title: `Student aan Huis ${city.name} | IT-Hulp Binnen 24u bij u Thuis`,
    description: `IT-student aan huis in ${city.name}. Geduldige hulp bij computer, laptop, WiFi en meer. Binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
    openGraph: {
      title: `Student aan Huis ${city.name} | Vanaf ${PRICING.MINIMUM_TOTAL}`,
      description: `Student aan huis in ${city.name}. Computerhulp door IT-studenten. Binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
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
        ? `Professionele computerhulp aan huis in ${city.name} (${content.region}). ${content.description.split('.')[0]}. Computer, laptop, printer, WiFi problemen opgelost bij u thuis.`
        : `Professionele computerhulp aan huis in ${city.name}. Computer, laptop, printer, WiFi problemen opgelost. Binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten.`)
    : (content
        ? `IT-studenten aan huis in ${city.name} (${content.region}). ${content.description.split('.')[0]}. Computerhulp door geduldige IT-studenten bij u thuis.`
        : `Computerhulp aan huis door IT-studenten in ${city.name} en omgeving. Hulp bij computer, laptop, tablet, smartphone en internet.`)

  const serviceDescription = variant === 'computerhulp'
    ? `Professionele computerhulp aan huis in ${city.name}. Computer, laptop, printer, WiFi problemen opgelost. Binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten.`
    : `IT-studenten komen bij u thuis in ${city.name} voor computerhulp. Hulp bij laptop, pc, tablet en smartphoneproblemen. Binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten.`

  const localBusiness: Record<string, unknown> = {
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
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
    priceRange: variant === 'computerhulp' ? '$$' : '€€',
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
    localBusiness.image = `${baseUrl}/Student%20aan%20huis.webp`
  }

  const serviceEntity: Record<string, unknown> = {
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    serviceType: variant === 'computerhulp' ? 'Computerhulp aan Huis' : serviceName,
    name: serviceName,
    description: serviceDescription,
    url: pageUrl,
    provider: { '@id': `${baseUrl}/#localbusiness` },
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
        text: `Wij lossen alle computer-, laptop-, printer-, WiFi-, e-mail- en tabletproblemen op bij u thuis in ${city.name}. Van trage computers tot virusverwijdering en van printerinstallatie tot WiFi-optimalisatie.`
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
      name: `Hoe snel kan een IT-student in ${city.name} langskomen?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `In de meeste gevallen kunnen onze IT-studenten binnen 24 uur bij u thuis zijn in ${city.name}. Bij urgente problemen proberen we dezelfde dag langs te komen. We zijn 7 dagen per week beschikbaar, ook 's avonds.`
      }
    },
    {
      '@type': 'Question',
      name: 'Waar helpen jullie IT-studenten mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze IT-studenten helpen met laptop- en computerproblemen, WiFi en internet, printers, e-mail, tablets en smartphones, smart home-apparaten en persoonlijke training. Van trage computers tot nieuwe apparaten instellen.'
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
        text: `Ja, onze IT-studenten zijn 7 dagen per week beschikbaar in ${city.name}, ook 's avonds tot 22:00 uur. Perfect als u overdag werkt en 's avonds of in het weekend hulp nodig heeft.`
      }
    }
  ]

  if (content && content.neighborhoods.length >= 3) {
    questions.push({
      '@type': 'Question',
      name: `In welke wijken van ${city.name} komen jullie IT-studenten?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Onze IT-studenten komen in alle wijken van ${city.name}, waaronder ${content.neighborhoods.slice(0, 5).join(', ')}. Voorrijden kost slechts ${PRICING.TRAVEL} in de hele regio ${content.region}.`
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
      answer: `U betaalt ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost slechts ${PRICING.TRAVEL} — u betaalt dus alleen voor de hulp zelf.`
    },
    {
      question: `Hoe snel kunnen jullie in ${city.name} komen?`,
      answer: `Meestal zijn we binnen 24 uur bij u. Is het dringend? Dan proberen we het vaak nog dezelfde dag te regelen. We zijn 7 dagen per week bereikbaar.`
    },
    {
      question: `Waar kunnen jullie mee helpen?`,
      answer: `Eigenlijk met alles rondom uw computer, laptop, printer, WiFi, e-mail of tablet. Denk aan een trage computer, een printer die niet wil, WiFi-problemen of hulp bij het instellen van uw e-mail.`
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
      answer: `U betaalt ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost slechts ${PRICING.TRAVEL}. Betalen doet u achteraf — via pin of Tikkie.`
    },
    {
      question: `Hoe snel kunnen jullie in ${city.name} langskomen?`,
      answer: `Meestal zijn we binnen 24 uur bij u. Is het dringend? Dan proberen we het vaak nog dezelfde dag te regelen. We zijn 7 dagen per week bereikbaar, ook 's avonds.`
    },
    {
      question: 'Waar kunnen jullie mee helpen?',
      answer: 'Eigenlijk met alles rondom uw computer, laptop, tablet, smartphone, printer, WiFi of e-mail. Of u nu een traag apparaat heeft of iets nieuws wilt instellen — wij helpen u graag.'
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

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                    <strong className="text-gray-900">Computerhulp aan huis in {city.name}</strong> — {content.description} In een gemeente met {populationText} helpen wij regelmatig mensen met hun computer, laptop, printer of WiFi. Gewoon bij u aan de keukentafel.
                  </p>
                  <p>
                    {neighborhoodText} — onze IT-student komt meestal binnen 24 uur bij u langs. Ook in de avonduren en in het weekend. U hoeft nergens naartoe, wij komen naar u toe.
                  </p>
                  {content.highlights.length > 0 && (
                    <p>
                      Wij kennen {city.name} en de regio {content.region} goed. Of het nu gaat om een trage computer, een printer die niet wil of WiFi die steeds wegvalt — wij zoeken het rustig uit en zorgen dat het weer werkt.
                    </p>
                  )}
                  <p>
                    Veelvoorkomende problemen die wij in {city.name} tegenkomen zijn trage computers door verouderde software, printers die niet meer verbinden na een Windows-update, WiFi die op bepaalde plekken in huis wegvalt en e-mailprogramma&apos;s die niet goed zijn ingesteld. Dit soort problemen lossen onze IT-studenten dagelijks op.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong className="text-gray-900">Computerhulp aan huis in {city.name}</strong> — handig als uw computer, laptop, printer of WiFi niet meer doet wat u wilt. U hoeft nergens naartoe, wij komen gewoon bij u thuis.
                  </p>
                  <p>
                    Of u nu in het centrum van {city.name} woont of wat verder weg — meestal zijn we binnen 24 uur bij u. Ook in de avonduren en in het weekend.
                  </p>
                  <p>
                    Of het nu gaat om een trage computer, een printer die niet wil of WiFi die wegvalt — wij zoeken het rustig uit en zorgen dat alles weer werkt.
                  </p>
                  <p>
                    Veelvoorkomende problemen die wij tegenkomen zijn trage computers door verouderde software, printers die niet meer verbinden na een Windows-update, WiFi die op bepaalde plekken in huis wegvalt en e-mailprogramma&apos;s die niet goed zijn ingesteld. Dit soort problemen lossen onze IT-studenten dagelijks op.
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
                  <div className="text-gray-600">U hoeft nergens naartoe — wij komen bij u in {city.name}.</div>
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
  const neighborhoodText = content ? formatNeighborhoods(content.neighborhoods, city.name) : ''

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="section-title mb-6">
          Waarom mensen ons bellen in {city.name}
        </h2>

        <div className="prose prose-lg max-w-none">
          {content ? (
            <>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Student aan huis in {city.name}</strong> — persoonlijke hulp bij u thuis, door geduldige IT-studenten die de tijd nemen om alles rustig uit te leggen. In een gemeente met {populationText} helpen wij regelmatig mensen met hun{' '}
                <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:text-blue-800 font-medium">
                  computer of laptop
                </Link>,{' '}
                <Link href="/diensten/tablet-smartphone-hulp" className="text-blue-600 hover:text-blue-800 font-medium">
                  tablet
                </Link>{' '}of{' '}
                <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:text-blue-800 font-medium">
                  WiFi
                </Link>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {neighborhoodText} — onze IT-studenten komen gewoon bij u thuis. Ze volgen een technische opleiding en weten hoe de nieuwste apparaten en software werken. En het fijne is: ze leggen alles rustig uit, in gewone taal.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Student aan huis in {city.name}</strong> — u belt, we spreken een moment af, en een IT-student komt bij u thuis.
                Geen ingewikkelde procedures, geen abonnementen. Gewoon iemand die uw{' '}
                <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:text-blue-800 font-medium">
                  computer of laptop
                </Link>,{' '}
                <Link href="/diensten/tablet-smartphone-hulp" className="text-blue-600 hover:text-blue-800 font-medium">
                  tablet
                </Link>{' '}of{' '}
                <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:text-blue-800 font-medium">
                  WiFi
                </Link>{' '}weer aan de praat krijgt.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Onze IT-studenten volgen een technische opleiding en weten hoe de nieuwste apparaten en software werken.
                En het fijne is: ze nemen de tijd om alles rustig uit te leggen, in gewone taal.
              </p>
            </>
          )}

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            Wat u van ons mag verwachten
          </h3>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="check-list-item">
              <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
              <span><strong>U bepaalt:</strong> Wanneer, hoe lang en wat er gedaan wordt. Geen verplichtingen, geen abonnementen.</span>
            </li>
            <li className="check-list-item">
              <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
              <span><strong>Geen verrassingen:</strong> U krijgt vooraf een inschatting van de tijd en kosten. Zo weet u waar u aan toe bent.</span>
            </li>
            <li className="check-list-item">
              <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
              <span><strong>Rustig uitgelegd:</strong> Onze studenten leggen stap voor stap uit wat ze doen. U leert er zelf ook van.</span>
            </li>
            <li className="check-list-item">
              <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
              <span><strong>Betalen achteraf:</strong> Pas na afloop betalen via pin of Tikkie. {PRICING.TRAVEL} voorrijkosten in {city.name}.</span>
            </li>
            <li className="check-list-item">
              <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
              <span>
                <strong>Voor van alles:</strong> Van{' '}
                <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:text-blue-800">printerproblemen</Link> tot{' '}
                <Link href="/diensten/smart-home-domotica" className="text-blue-600 hover:text-blue-800">smart home-installatie</Link>,{' '}
                <Link href="/diensten/email-hulp" className="text-blue-600 hover:text-blue-800">e-mailhulp</Link> en{' '}
                <Link href="/diensten/dataherstel-backup" className="text-blue-600 hover:text-blue-800">dataherstel</Link>.
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
            Computerhulp aan Huis {city.name}
          </Link>
          <Link
            href="/diensten/computer-laptop-hulp"
            className="city-tag-link"
          >
            Computer &amp; Laptop Hulp
          </Link>
          <Link
            href="/diensten/wifi-internet-hulp"
            className="city-tag-link"
          >
            WiFi &amp; Internet Hulp
          </Link>
          <Link
            href="/diensten/tablet-smartphone-hulp"
            className="city-tag-link"
          >
            Tablet &amp; Smartphone Hulp
          </Link>
          <Link
            href="/diensten/persoonlijke-training"
            className="city-tag-link"
          >
            Persoonlijke Training
          </Link>
          <Link
            href="/student-aan-huis"
            className="bg-blue-50 px-4 py-2 rounded-full text-sm font-medium text-blue-600 border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            Alle locaties Student aan Huis →
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

      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="absolute inset-0">
          <Image
            src={config.heroImage}
            alt={config.heroAlt(city.name)}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-mobile"></div>
          <div className="hero-overlay-desktop-r"></div>
          <div className="hero-overlay-desktop-b"></div>
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <p className="hero-eyebrow">{config.serviceName} · {city.name}</p>
            <h1 className="hero-title">
              {config.heroTitle(city.name)}
            </h1>

            <p className="hero-description">
              {config.heroDescription(city.name)}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href={BUSINESS.PHONE_HREF} className="btn-hero-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                Bel {BUSINESS.PHONE}
              </a>
              <Link href="/afspraak-maken" className="btn-hero-secondary">
                Afspraak maken
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="hero-pill">
                <Icon name="money" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                Betaalbare tarieven
              </span>
              <span className="hero-pill">
                <Icon name="thumbs-up" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                Vertrouwd door {BUSINESS.REVIEW_COUNT} klanten
              </span>
              <span className="hero-pill">
                <Icon name="check" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                7 dagen per week
              </span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="soft-curve" topColor="#1c1917" bottomColor="#fafafa" />

      <ServicesSection
        title="Waar wij mee helpen"
        showFeatures={false}
        limitServices={6}
        showAllButton={true}
      />

      <WhyChooseUsSection title={config.whyTitle} benefits={config.benefits} />

      <PricingSection />

      {/* Testimonials — na prijs: social proof valideert beslissing */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <p className="section-eyebrow">Klanten aan het woord</p>
            <h2 id="testimonials-heading" className="section-title">
              Wat onze klanten zeggen
            </h2>
            <p className="section-subtitle">
              Dagelijks helpen we mensen in heel {BUSINESS.REGION}
            </p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">
              ← Swipe voor meer reviews →
            </p>
          </header>
          <TestimonialsCarousel testimonials={HUB_TESTIMONIALS} />
        </div>
      </section>

      <HowItWorksSection background="white" />

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
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

      {/* Neighborhoods — alleen als er echte neighborhood data is */}
      {(() => {
        const content = getCityContent(city.slug)
        if (!content || content.neighborhoods.length < 3) return null

        return (
          <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

      {/* Nearby cities — discovery vóór de final CTA */}
      <NearbyCities currentCity={city.slug} pageType={config.urlPrefix} />

      {/* Cross-link section (student variant only) */}
      {variant === 'student' && <StudentCrossLinkSection city={city} />}

      {/* Final CTA — consistent met hub pages */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Kunnen wij u helpen in {city.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of stuur een berichtje. We komen graag bij u langs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              Bel {BUSINESS.PHONE}
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
              Binnen 24 uur geholpen
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
