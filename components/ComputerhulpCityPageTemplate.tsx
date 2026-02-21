import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import PricingSection from '@/components/PricingSection'
import ExtraBenefitsSection from '@/components/ExtraBenefitsSection'
import NearbyCities from '@/components/NearbyCities'
import ServicesSection from '@/components/ServicesSection'
import { Icon } from '@/components/icons'
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
        logo: `${baseUrl}/Computerhulp%20Zuid%20Holland%20Logo.webp`,
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
          }
        }
      },
      ...generateFaqEntities(city),
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
    ]
  }
}

function generateFaqEntities(city: City) {
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

  return [{
    '@type': 'FAQPage',
    mainEntity: faqEntities
  }]
}

export default function ComputerhulpCityPageTemplate({ city }: ComputerhulpCityPageTemplateProps) {
  const structuredData = generateStructuredData(city)

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
            src="/Student aan huis.webp"
            alt={`Computerhulp aan huis in ${city.name}`}
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
            <h1 className="hero-title">
              Computerhulp aan Huis <span className="text-blue-600">{city.name}</span>
            </h1>

            <p className="hero-description">
              <strong className="text-gray-900">Betrouwbare computerhulp aan huis in {city.name}</strong> voor al uw computerproblemen. Onze IT-studenten komen bij u thuis en lossen het <strong className="text-gray-900">snel en vakkundig</strong> op — zonder gedoe.
            </p>

            {/* USP Badges */}
            <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
              {['Binnen 24 uur geholpen', 'Gratis voorrijkosten', 'Betaalbare tarieven'].map((usp) => (
                <span key={usp} className="usp-badge">
                  <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                  {usp}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak-maken"
                className="btn-primary"
              >
                Hulp aanvragen
                <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
              </Link>
              <a
                href="tel:+31858002006"
                className="btn-secondary"
              >
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
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
            <span className="section-label">Werkwijze</span>
            <h2 className="section-title-lg mt-4">
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
                <div className="step-number group-hover:scale-110 transition-transform">
                  01
                </div>
                <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">U belt of mailt ons</h3>
              <p className="text-gray-600 leading-relaxed">Vertel kort wat er aan de hand is. Geen ingewikkeld formulier, gewoon even bellen of een berichtje sturen.</p>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="step-number group-hover:scale-110 transition-transform">
                  02
                </div>
                <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We spreken een moment af</h3>
              <p className="text-gray-600 leading-relaxed">Samen zoeken we een tijdstip dat u uitkomt. Meestal kan het al de volgende dag.</p>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="step-number group-hover:scale-110 transition-transform">
                  03
                </div>
                <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We komen bij u thuis</h3>
              <p className="text-gray-600 leading-relaxed">Onze IT-student komt langs in {city.name} en gaat rustig aan de slag.</p>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="step-number-done group-hover:scale-110 transition-transform">
                  <Icon name="check" className="w-7 h-7" strokeWidth={2.5} />
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
              <h2 className="section-title">
                Computerhulp in de regio {content.region}
              </h2>
              <p className="section-subtitle mb-8">
                Wij komen in alle wijken en buurten van {city.name}. Waar u ook woont in de regio {content.region} — we zijn er snel.
              </p>
              <div className="flex flex-wrap gap-3">
                {content.neighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="city-tag"
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
                <h2 className="section-title">
                  Veelgestelde vragen
                </h2>
                <p className="section-subtitle">
                  Dit krijgen wij vaak gevraagd
                </p>
              </div>
              <div className="space-y-4">
                {faqItems.map((faq, idx) => (
                  <details key={idx} className="group faq-item shadow-sm">
                    <summary className="faq-summary">
                      {faq.question}
                      <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" strokeWidth={2} />
                    </summary>
                    <div className="faq-answer">
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
              <span className="section-label">Ervaringen</span>
              <h2 className="section-title-lg mt-4">
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
                    <Icon key={i} name="star" className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-500">gemiddelde score</div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="quote" className="w-6 h-6 text-gray-400" />
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
                      <Icon key={i} name="star" className="w-4 h-4 text-yellow-400" />
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
                  className="btn-cta-white text-gray-900"
                >
                  Hulp aanvragen
                  <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a
                  href="tel:+31858002006"
                  className="btn-cta-ghost"
                >
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <span className="trust-indicator">
                  <Icon name="check-circle" className="w-4 h-4 text-green-500" />
                  7 dagen per week
                </span>
                <span className="trust-indicator">
                  <Icon name="check-circle" className="w-4 h-4 text-green-500" />
                  Ook avonden
                </span>
                <span className="trust-indicator">
                  <Icon name="check-circle" className="w-4 h-4 text-green-500" />
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
