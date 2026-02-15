import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import PricingSection from '@/components/PricingSection'
import ExtraBenefitsSection from '@/components/ExtraBenefitsSection'
import NearbyCities from '@/components/NearbyCities'
import ServicesSection from '@/components/ServicesSection'
import { City } from '@/lib/cities'
import { getCityContent, getPopulationDescription, formatNeighborhoods } from '@/lib/cityContent'

interface ComputerhulpCityPageTemplateProps {
  city: City
}

export function generateComputerhulpPageMetadata(city: City): Metadata {
  return {
    title: `Computerhulp aan Huis ${city.name} | Binnen 24u`,
    description: `Computerhulp aan huis in ${city.name}. Hulp met computer, laptop, printer, WiFi en meer. Gratis voorrijkosten, binnen 24 uur. Bel 085-8002006.`,
    openGraph: {
      title: `Computerhulp aan Huis ${city.name} | Binnen 24u`,
      description: `Computerhulp aan huis in ${city.name}. Computer-, laptop- en WiFi-hulp. Binnen 24u, gratis voorrijkosten.`,
      type: 'website',
      url: `https://computerhulpzh.nl/computerhulp-aan-huis-${city.slug}`,
    },
    alternates: {
      canonical: `https://computerhulpzh.nl/computerhulp-aan-huis-${city.slug}`,
    },
  }
}

const testimonials = [
  {
    quote: 'Mijn laptop was gehackt en ik durfde nergens meer op te klikken. De technicus heeft alles schoongemaakt, beveiligd en mij uitgelegd waar ik op moet letten. Ik voel me weer veilig online.',
    initials: 'B',
    name: 'Mevrouw Bea',
    location: 'Voorburg'
  },
  {
    quote: 'Nieuwe printer aangesloten, scanner ingesteld en meteen laten zien hoe ik dubbelzijdig kan printen. Dat scheelt papier! Heel vriendelijk en op tijd.',
    initials: 'T',
    name: 'De heer Theo',
    location: 'Barendrecht'
  },
  {
    quote: 'Ons hele thuisnetwerk werkte niet meer na een storing. Binnen een uur alles weer online: computers, tablets en de smart-TV. Heel kundig en duidelijke uitleg achteraf.',
    initials: 'S',
    name: 'Mevrouw Sonja',
    location: 'Gouda'
  }
]

export function generateStructuredData(city: City) {
  const baseUrl = 'https://computerhulpzh.nl'
  const pageUrl = `${baseUrl}/computerhulp-aan-huis-${city.slug}`
  const serviceName = `Computerhulp aan Huis ${city.name}`
  const content = getCityContent(city.slug)
  const cityDescription = content
    ? `Professionele computerhulp aan huis in ${city.name} (${content.region}). ${content.description.split('.')[0]}. Computer, laptop, printer, WiFi problemen opgelost bij u thuis.`
    : `Professionele computerhulp aan huis in ${city.name}. Computer, laptop, printer, WiFi problemen opgelost. Binnen 24 uur, gratis voorrijkosten.`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#organization`,
        name: `Computerhulp aan Huis ${city.name}`,
        url: baseUrl,
        telephone: '+31858002006',
        email: 'info@computerhulpzh.nl',
        description: cityDescription,
        logo: {
          '@type': 'ImageObject',
          '@id': `${baseUrl}/#logo`,
          url: `${baseUrl}/Computerhulp%20Zuid%20Holland%20Logo.webp`,
          contentUrl: `${baseUrl}/Computerhulp%20Zuid%20Holland%20Logo.webp`,
          caption: `Computerhulp ${city.name} Logo`
        },
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
        priceRange: '$$',
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
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: 'Computerhulp aan Huis',
        name: serviceName,
        description: `Professionele computerhulp aan huis in ${city.name}. Computer, laptop, printer, WiFi problemen opgelost. Binnen 24 uur, gratis voorrijkosten.`,
        url: pageUrl,
        provider: {
          '@id': `${baseUrl}/#organization`
        },
        areaServed: {
          '@type': 'City',
          name: city.name
        },
        offers: {
          '@type': 'Offer',
          price: '14.50',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '14.50',
            priceCurrency: 'EUR',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '15',
              unitCode: 'MIN',
              unitText: 'minuten'
            },
            minPrice: '43.50',
            description: 'Minimaal 3 kwartier (EUR 43,50 totaal)'
          },
          seller: {
            '@id': `${baseUrl}/#organization`
          }
        }
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Computerhulp aan Huis ${city.name} | Binnen 24u`,
        description: `Computerhulp aan huis in ${city.name}. Computer-, laptop-, printer- en WiFi-hulp. Binnen 24 uur bij u thuis, gratis voorrijkosten.`,
        isPartOf: {
          '@id': `${baseUrl}/#website`
        },
        about: {
          '@id': `${pageUrl}#service`
        },
        datePublished: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        inLanguage: 'nl-NL'
      }
    ]
  }
}

export function generateFaqData(city: City) {
  const baseUrl = 'https://computerhulpzh.nl'
  const pageUrl = `${baseUrl}/computerhulp-aan-huis-${city.slug}`
  const content = getCityContent(city.slug)

  const faqEntities: Array<{ '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }> = [
    {
      '@type': 'Question',
      name: `Wat kost computerhulp aan huis in ${city.name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Computerhulp aan huis in ${city.name} kost EUR 14,50 per kwartier met een minimum van 3 kwartier (EUR 43,50 totaal). Voorrijden is gratis.`
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
        text: `Nee, voorrijden is gratis voor computerhulp aan huis in ${city.name} en heel Zuid-Holland. U betaalt alleen voor de daadwerkelijke hulp.`
      }
    }
  ]

  if (content && content.neighborhoods.length >= 3) {
    faqEntities.push({
      '@type': 'Question',
      name: `In welke wijken van ${city.name} bieden jullie computerhulp aan?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Wij bieden computerhulp aan huis in alle wijken van ${city.name}, waaronder ${content.neighborhoods.slice(0, 5).join(', ')}. In de hele regio ${content.region} is voorrijden gratis.`
      }
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqEntities
  }
}

export function generateBreadcrumbData(city: City) {
  const baseUrl = 'https://computerhulpzh.nl'
  const pageUrl = `${baseUrl}/computerhulp-aan-huis-${city.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
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
        name: 'Computerhulp aan Huis',
        item: `${baseUrl}/computerhulp-aan-huis`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.name,
        item: pageUrl
      }
    ]
  }
}

export default function ComputerhulpCityPageTemplate({ city }: ComputerhulpCityPageTemplateProps) {
  const structuredData = generateStructuredData(city)
  const faqData = generateFaqData(city)
  const breadcrumbData = generateBreadcrumbData(city)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Student aan huis.webp"
            alt={`Computerhulp aan huis in ${city.name}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-blue-50/70 md:hidden"></div>
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-blue-50/90 via-blue-50/60 to-transparent"></div>
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-blue-50/30 via-transparent to-blue-50/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 md:pb-20 min-h-[70vh] md:min-h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Computerhulp aan Huis <span className="text-blue-600">{city.name}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed max-w-xl">
              <strong className="text-gray-900">Betrouwbare computerhulp aan huis in {city.name}</strong> voor al uw computerproblemen. Onze IT-studenten komen bij u thuis en lossen het <strong className="text-gray-900">snel en vakkundig</strong> op — zonder gedoe.
            </p>

            {/* USP Badges */}
            <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Binnen 24 uur geholpen
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Gratis voorrijkosten
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Betaalbare tarieven
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl shadow-blue-600/25"
              >
                Hulp aanvragen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+31858002006"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-200 hover:border-blue-600 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel 085-8002006
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection
        title={`Computerhulp aan Huis ${city.name}`}
        description="Van een simpele vraag tot een lastig probleem — wij helpen u graag"
        showFeatures={true}
        limitServices={6}
        showAllButton={true}
      />

      {/* How it works - Premium Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Werkwijze</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Computerhulp aan huis in {city.name}
            </h2>
            <p className="text-xl text-gray-600">
              Zo werkt het — in vier stappen.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  01
                </div>
                <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">U belt of mailt ons</h3>
              <p className="text-gray-600 leading-relaxed">Vertel kort wat er aan de hand is. Geen ingewikkeld formulier, gewoon even bellen of een berichtje sturen.</p>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  02
                </div>
                <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We spreken een moment af</h3>
              <p className="text-gray-600 leading-relaxed">Samen zoeken we een tijdstip dat u uitkomt. Meestal kan het al de volgende dag.</p>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  03
                </div>
                <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We komen bij u thuis</h3>
              <p className="text-gray-600 leading-relaxed">Onze IT-student komt langs in {city.name} en gaat rustig aan de slag.</p>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alles werkt weer</h3>
              <p className="text-gray-600 leading-relaxed">U kunt weer verder. Betalen doet u pas achteraf — gewoon via pin, contant of Tikkie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection benefits={[
        `Gratis voorrijkosten in ${city.name}`,
        'Ook \'s avonds en in het weekend beschikbaar',
        'Betalen via pin, contant of Tikkie'
      ]} />

      {/* Content section - Premium SEO with city-specific content */}
      {(() => {
        const content = getCityContent(city.slug)
        const populationText = content ? getPopulationDescription(content.population) : ''
        const neighborhoodText = content ? formatNeighborhoods(content.neighborhoods, city.name) : ''

        return (
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - City-specific Content */}
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Over ons</span>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-8">
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
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Gewoon thuis blijven</div>
                        <div className="text-gray-600">U hoeft nergens naartoe — wij komen bij u in {city.name}.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Snel geregeld</div>
                        <div className="text-gray-600">Meestal is het probleem in één bezoek opgelost.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Rustige uitleg</div>
                        <div className="text-gray-600">We nemen de tijd om alles duidelijk uit te leggen.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Gratis voorrijkosten</div>
                        <div className="text-gray-600">Computerhulp in heel {city.name} zonder extra kosten.</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )
      })()}

      {/* Neighborhoods Section - City-specific */}
      {(() => {
        const content = getCityContent(city.slug)
        if (!content || content.neighborhoods.length < 3) return null

        return (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Computerhulp in de regio {content.region}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Wij komen in alle wijken en buurten van {city.name}. Waar u ook woont in de regio {content.region} — we zijn er snel.
              </p>
              <div className="flex flex-wrap gap-3">
                {content.neighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* FAQ Section */}
      {(() => {
        const content = getCityContent(city.slug)
        const faqItems = [
          {
            question: `Wat kost computerhulp aan huis in ${city.name}?`,
            answer: `U betaalt \u20AC14,50 per kwartier, met een minimum van drie kwartier (\u20AC43,50). Voorrijden is gratis — u betaalt dus alleen voor de hulp zelf.`
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
            answer: `Nee, voorrijden is gratis in ${city.name} en heel Zuid-Holland. U betaalt alleen voor de hulp zelf.`
          },
        ]
        if (content && content.neighborhoods.length >= 3) {
          faqItems.push({
            question: `Komen jullie ook in mijn wijk in ${city.name}?`,
            answer: `Ja, we komen in alle wijken van ${city.name}, zoals ${content.neighborhoods.slice(0, 5).join(', ')}. Voorrijden is altijd gratis.`
          })
        }

        return (
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Veelgestelde vragen
                </h2>
                <p className="text-lg text-gray-600">
                  Dit krijgen wij vaak gevraagd
                </p>
              </div>
              <div className="space-y-4">
                {faqItems.map((faq, idx) => (
                  <details key={idx} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                      {faq.question}
                      <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* Testimonials - Premium Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div className="max-w-2xl mb-8 lg:mb-0">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Ervaringen</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Wat onze klanten zeggen
              </h2>
              <p className="text-xl text-gray-600">
                Wij helpen dagelijks mensen in heel Zuid-Holland
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm">
              <div className="text-4xl font-bold text-gray-900">4.9</div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-gray-500">gemiddelde score</div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">{testimonial.quote}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra benefits */}
      <ExtraBenefitsSection />

      {/* Final CTA - Premium */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden bg-gray-900 rounded-[2.5rem] px-8 py-16 sm:px-16 sm:py-24">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Kunnen wij u helpen in {city.name}?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Bel ons gerust of stuur een berichtje. We komen graag bij u langs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link
                  href="/afspraak-maken"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                >
                  Hulp aanvragen
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+31858002006"
                  className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white px-10 py-5 rounded-full font-semibold text-lg border-2 border-white/30 hover:border-white/60 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Bel 085-8002006
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  7 dagen per week
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ook avonden
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Gratis voorrijkosten
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyCities currentCity={city.slug} pageType="computerhulp-aan-huis" />
    </>
  )
}
