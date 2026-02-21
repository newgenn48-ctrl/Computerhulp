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

interface StudentCityPageTemplateProps {
  city: City
}

// Metadata generator - used by all 52 city page files
export function generateStudentPageMetadata(city: City): Metadata {
  return {
    title: `Student aan Huis ${city.name} | Vanaf €43,50`,
    description: `Student aan huis in ${city.name} voor computerhulp en IT-problemen. Binnen 24 uur bij u thuis. Gratis voorrijkosten. Bel 085-8002006.`,
    openGraph: {
      title: `Student aan Huis ${city.name} | Vanaf €43,50`,
      description: `Student aan huis in ${city.name}. Computerhulp door IT-studenten. Binnen 24 uur, gratis voorrijkosten. Bel 085-8002006.`,
      type: 'website',
      url: `https://computerhulpzh.nl/student-aan-huis-${city.slug}`,
    },
    alternates: {
      canonical: `https://computerhulpzh.nl/student-aan-huis-${city.slug}`,
    },
  }
}

const testimonials = [
  {
    quote: 'Die jongen had zoveel geduld! Hij heeft mij stap voor stap leren videobellen met mijn dochter in Australië. Nu bellen we elke week. Geweldig!',
    initials: 'WP',
    name: 'Mevrouw Willems',
    location: 'Delft'
  },
  {
    quote: 'Mijn iPad deed helemaal niks meer. De student had het binnen een half uur weer werkend en legde uit hoe ik foto\'s kan delen. Heel vriendelijk!',
    initials: 'PK',
    name: 'De heer Piet',
    location: 'Dordrecht'
  },
  {
    quote: 'Fijn dat er ook \'s avonds iemand kon komen. De student heeft mijn e-mail en agenda ingesteld en alles rustig uitgelegd. Echt een aanrader voor senioren!',
    initials: 'JV',
    name: 'Mevrouw Jannie',
    location: 'Schiedam'
  }
]

function generateStructuredData(city: City) {
  const baseUrl = 'https://computerhulpzh.nl'
  const pageUrl = `${baseUrl}/student-aan-huis-${city.slug}`
  const serviceName = `Student aan Huis ${city.name}`
  const content = getCityContent(city.slug)
  const cityDescription = content
    ? `IT-studenten aan huis in ${city.name} (${content.region}). ${content.description.split('.')[0]}. Computerhulp door geduldige IT-studenten bij u thuis.`
    : `Computerhulp aan huis door IT-studenten in ${city.name} en omgeving. Hulp bij computer, laptop, tablet, smartphone en internet.`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#organization`,
        name: 'Computerhulp Zuid-Holland',
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
        priceRange: '€€',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '08:00',
            closes: '22:00'
          }
        ],
        image: `${baseUrl}/Student%20aan%20huis.webp`,
        areaServed: {
          '@type': 'City',
          name: city.name
        }
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: serviceName,
        name: serviceName,
        description: `IT-studenten komen bij u thuis in ${city.name} voor computerhulp. Hulp bij laptop, pc, tablet en smartphoneproblemen. Binnen 24 uur, gratis voorrijkosten.`,
        url: pageUrl,
        provider: { '@id': `${baseUrl}/#organization` },
        areaServed: { '@type': 'City', name: city.name },
        offers: {
          '@type': 'Offer',
          price: '14.50',
          priceCurrency: 'EUR',
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
            description: 'Minimaal 3 kwartier (EUR 43,50 totaal)'
          }
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: generateFaqQuestions(city)
      },
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
            name: 'Student aan Huis',
            item: `${baseUrl}/student-aan-huis`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `Student aan Huis ${city.name}`,
            item: pageUrl
          }
        ]
      }
    ]
  }
}

function generateFaqQuestions(city: City) {
  const content = getCityContent(city.slug)

  const questions: Array<Record<string, unknown>> = [
    {
      '@type': 'Question',
      name: `Wat kost student aan huis in ${city.name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Student aan huis in ${city.name} kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Voorrijden is gratis in ${city.name} en omgeving. U betaalt na afloop via pin, contant of Tikkie.`
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
        text: 'U betaalt na afloop van het bezoek. Dit kan via pin, contant of Tikkie. U krijgt vooraf een inschatting van de tijd, zodat u weet waar u aan toe bent. Geen verborgen kosten, geen abonnementen.'
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
        text: `Onze IT-studenten komen in alle wijken van ${city.name}, waaronder ${content.neighborhoods.slice(0, 5).join(', ')}. Voorrijden is gratis in de hele regio ${content.region}.`
      }
    })
  }

  return questions
}

function getFaqDisplayData(city: City) {
  const content = getCityContent(city.slug)
  const items = [
    {
      question: `Wat kost student aan huis in ${city.name}?`,
      answer: `U betaalt \u20AC14,50 per kwartier, met een minimum van drie kwartier (\u20AC43,50). Voorrijden is gratis. Betalen doet u achteraf — via pin, contant of Tikkie.`
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
      answer: 'U betaalt pas na afloop, via pin, contant of Tikkie. Vooraf krijgt u een inschatting van de tijd, zodat u weet waar u aan toe bent. Geen verborgen kosten.'
    },
    {
      question: `Komen jullie ook 's avonds en in het weekend?`,
      answer: `Ja, we zijn 7 dagen per week beschikbaar, ook 's avonds tot 22:00 uur. Handig als u overdag werkt.`
    }
  ]

  if (content && content.neighborhoods.length >= 3) {
    items.push({
      question: `Komen jullie ook in mijn wijk in ${city.name}?`,
      answer: `Ja, we komen in alle wijken van ${city.name}, zoals ${content.neighborhoods.slice(0, 5).join(', ')}. Voorrijden is altijd gratis.`
    })
  }

  return items
}

export default function StudentCityPageTemplate({ city }: StudentCityPageTemplateProps) {
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
            alt={`IT-student helpt klant thuis met computer in ${city.name}`}
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
              Student aan Huis <span className="text-blue-600">{city.name}</span>
            </h1>

            <p className="hero-description">
              <strong className="text-gray-900">Betrouwbare student aan huis in {city.name}</strong> voor computerhulp, laptophulp en IT-problemen.
              Onze IT-studenten komen bij u thuis en lossen het <strong className="text-gray-900">geduldig en vakkundig</strong> op — zonder gedoe.
            </p>

            {/* USP Badges */}
            <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
              {['Binnen 24 uur geholpen', 'Gratis voorrijkosten', 'Betaalbare tarieven'].map((usp) => (
                <span key={usp} className="usp-badge">
                  <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} aria-hidden="true" />
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
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
              <a
                href="tel:+31858002006"
                className="btn-secondary"
              >
                <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
                Bel 085-8002006
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection
        title={`Waar we u mee helpen in ${city.name}`}
        description="Van een laptopprobleem tot smart home — onze IT-studenten helpen u graag"
        showFeatures={true}
        limitServices={6}
        showAllButton={true}
      />

      {/* How it works */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Zo werkt het in {city.name}
            </h2>
            <p className="section-subtitle">
              In vier stappen — simpel en overzichtelijk
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="step-number-round mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">U belt of mailt ons</h3>
              <p className="text-gray-600 leading-relaxed">
                Vertel kort wat er aan de hand is. Geen ingewikkeld formulier, gewoon even bellen of een berichtje sturen.
              </p>
            </div>

            <div className="text-center">
              <div className="step-number-round mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We spreken een moment af</h3>
              <p className="text-gray-600 leading-relaxed">
                Samen zoeken we een tijdstip dat u uitkomt. Meestal kan het al de volgende dag.
              </p>
            </div>

            <div className="text-center">
              <div className="step-number-round mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We komen bij u thuis</h3>
              <p className="text-gray-600 leading-relaxed">
                Onze IT-student komt langs in {city.name} en gaat rustig aan de slag. U kijkt gewoon mee.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6 shadow-xl">
                &#10003;
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alles werkt weer</h3>
              <p className="text-gray-600 leading-relaxed">
                U kunt weer verder. Betalen doet u pas achteraf — gewoon via pin, contant of Tikkie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection benefits={[
        `Gratis voorrijkosten in ${city.name}`,
        'Eerlijke inschatting vooraf, geen verrassingen',
        'Ook \'s avonds en in het weekend beschikbaar',
        'Betalen via pin, contant of Tikkie'
      ]} />

      {/* Waarom Kiezen - SEO Content with city-specific data */}
      {(() => {
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
                    <span><strong>Betalen achteraf:</strong> Pas na afloop betalen via pin, contant of Tikkie. Gratis voorrijkosten in {city.name}.</span>
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
                  <a href="tel:+31858002006" className="text-blue-600 hover:text-blue-800 font-semibold">085-8002006</a>{' '}
                  of{' '}
                  <Link href="/afspraak-maken" className="text-blue-600 hover:text-blue-800 font-semibold">vraag online een afspraak aan</Link>.
                </p>
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
          <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Student aan huis in alle wijken van {city.name}
              </h2>
              <p className="text-gray-600 mb-6">
                Wij komen in alle wijken en buurten van {city.name}. Waar u ook woont — voorrijden is altijd gratis.
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

      {/* FAQ Section - visible */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
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
            {getFaqDisplayData(city).map((faq, idx) => (
              <details key={idx} className="group faq-item-white shadow-sm">
                <summary className="faq-summary">
                  {faq.question}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" strokeWidth={2} aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Wat onze klanten zeggen
            </h2>
            <p className="section-subtitle">
              Wij helpen dagelijks mensen in heel Zuid-Holland
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-1 mb-4" role="img" aria-label="5 van 5 sterren">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra benefits */}
      <ExtraBenefitsSection />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title mb-6">
            Kunnen wij u helpen in {city.name}?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Bel ons gerust of stuur een berichtje. We komen graag bij u langs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-2xl shadow-xl shadow-blue-600/25 hover:scale-105 transition-all"
            >
              <Icon name="chat" className="w-8 h-8" strokeWidth={2} aria-hidden="true" />
              Hulp aanvragen
            </Link>

            <a
              href="tel:+31858002006"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-blue-600 px-10 py-5 rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition-all border-2 border-blue-200"
            >
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            Ma-Zo: 08:00 - 22:00 | Ook avonden en weekenden | Gratis voorrijkosten in {city.name}
          </div>
        </div>
      </section>

      {/* Cross-link to computerhulp version */}
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
              Computer & Laptop Hulp
            </Link>
            <Link
              href="/diensten/wifi-internet-hulp"
              className="city-tag-link"
            >
              WiFi & Internet Hulp
            </Link>
            <Link
              href="/diensten/tablet-smartphone-hulp"
              className="city-tag-link"
            >
              Tablet & Smartphone Hulp
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

      <NearbyCities currentCity={city.slug} pageType="student-aan-huis" />
    </>
  )
}
