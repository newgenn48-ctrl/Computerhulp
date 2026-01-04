import Link from 'next/link'
import ServicesImageCards from '@/components/ServicesImageCards'
import PricingSection from '@/components/PricingSection'
import ExtraBenefitsSection from '@/components/ExtraBenefitsSection'
import NearbyCities from '@/components/NearbyCities'
import { City } from '@/lib/cities'

interface StudentCityPageTemplateProps {
  city: City
}

const testimonials = [
  {
    quote: 'Zo fijn om door een jongere geholpen te worden! Hij legde WhatsApp uit op een manier die ik begreep. En zo geduldig!',
    initials: 'EJ',
    name: 'Mevrouw De Jong',
    location: 'Den Haag'
  },
  {
    quote: 'Onze kleinzoon studeert ook IT. Deze jongen had dezelfde energie. Alles werkt nu en ik snapte zijn uitleg perfect.',
    initials: 'HV',
    name: 'Henk V.',
    location: 'Rotterdam'
  },
  {
    quote: 'Student aan huis was perfect! Modern, snel en enthousiast. Mijn laptop is weer als nieuw. Aanrader!',
    initials: 'MB',
    name: 'Maria B.',
    location: 'Leiden'
  }
]

export function generateStructuredData(city: City) {
  const baseUrl = 'https://computerhulpzh.nl'
  const pageUrl = `${baseUrl}/student-aan-huis-${city.slug}`
  const serviceName = `Student aan Huis ${city.name}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#organization`,
        name: `Student aan Huis ${city.name}`,
        url: baseUrl,
        telephone: '+31642548451',
        email: 'info@computerhulpzh.nl',
        logo: {
          '@type': 'ImageObject',
          '@id': `${baseUrl}/#logo`,
          url: `${baseUrl}/Computerhulp%20Zuid%20Holland%20Logo.webp`,
          contentUrl: `${baseUrl}/Computerhulp%20Zuid%20Holland%20Logo.webp`,
          caption: `Student aan Huis ${city.name} Logo`
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: city.name,
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
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: serviceName,
        name: serviceName,
        description: `Jonge IT-studenten komen bij u thuis in ${city.name} voor computerhulp. Geduldig, modern en kundig. Binnen 24 uur bij u thuis.`,
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
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${serviceName} | Binnen 24 Uur | EUR 14,50`,
        description: `Student aan huis in ${city.name}. Jonge IT-studenten komen bij u thuis voor computerhulp. Geduldig en kundig. Geen voorrijkosten.`,
        isPartOf: {
          '@id': `${baseUrl}/#website`
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
  const pageUrl = `${baseUrl}/student-aan-huis-${city.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wat is student aan huis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Student aan huis betekent dat jonge IT-studenten bij u thuis komen voor computerhulp. Ze zijn geduldig, energiek en leggen alles rustig uit. Perfect voor wie liever met een jongere werkt.'
        }
      },
      {
        '@type': 'Question',
        name: `Hoe snel kan een student aan huis in ${city.name} komen?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `In de meeste gevallen kunnen onze IT-studenten binnen 24 uur bij u thuis zijn in ${city.name}. Bij acute problemen proberen we vaak nog dezelfde dag langs te komen. We werken 7 dagen per week, ook in de avonduren.`
        }
      },
      {
        '@type': 'Question',
        name: `Wat kost student aan huis in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Student aan huis kost EUR 14,50 per kwartier met een minimum van 3 kwartier (EUR 43,50 totaal). Er zijn geen voorrijkosten in ${city.name} en omgeving.`
        }
      },
      {
        '@type': 'Question',
        name: 'Zijn de studenten wel kundig genoeg?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absoluut! Onze IT-studenten zijn goed opgeleid en hebben ruime ervaring. Ze studeren IT of Informatica en zijn up-to-date met de nieuwste technieken. Perfect voor alle computer, laptop en internet problemen.'
        }
      }
    ]
  }
}

export function generateBreadcrumbData(city: City) {
  const baseUrl = 'https://computerhulpzh.nl'
  const pageUrl = `${baseUrl}/student-aan-huis-${city.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: {
          '@id': baseUrl,
          name: 'Computerhulp Zuid-Holland'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Student aan Huis',
        item: {
          '@id': `${baseUrl}/student-aan-huis`,
          name: 'Student aan Huis'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.name,
        item: {
          '@id': pageUrl,
          name: `Student aan Huis ${city.name}`
        }
      }
    ]
  }
}

export default function StudentCityPageTemplate({ city }: StudentCityPageTemplateProps) {
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

      {/* Hero Section - Modern Split Layout */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-100/50 to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2 mb-6 shadow-lg shadow-blue-600/25">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-sm font-medium">
                  IT-Studenten aan Huis in {city.name}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Student aan Huis
                <span className="block text-blue-600">{city.name}</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Hulp nodig met uw <strong className="text-gray-900">computer, laptop, tablet of andere digitale apparaten</strong> in {city.name}? Onze deskundige IT-studenten komen bij u thuis en lossen het probleem rustig en vakkundig op.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold">Binnen 24 uur</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold">Geen voorrijkosten</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-semibold">7 dagen per week</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/afspraak-maken"
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/30 transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Hulp vragen
                </Link>
                <a
                  href="tel:+31642548451"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Direct bellen
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">JK</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">MV</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">TS</div>
                  </div>
                  <span>500+ tevreden klanten</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
                  <img
                    src="/Student aan huis.webp"
                    alt={`IT-student helpt klant thuis in ${city.name}`}
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Card - Rating */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">4.9/5</div>
                      <div className="text-sm text-gray-500">500+ klanten</div>
                    </div>
                  </div>
                </div>

                {/* Floating Card - Free benefit */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">Geen voorrijkosten</div>
                      <div className="text-sm text-gray-500">in {city.name}</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Images */}
      <ServicesImageCards
        title="Waar Onze Studenten U Mee Helpen"
        description="Van simpel tot complex - onze IT-studenten helpen u met alle technische problemen"
      />

      {/* How it works */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hoe Student aan Huis Werkt in {city.name}
            </h2>
            <p className="text-lg text-gray-600">
              In 4 simpele stappen van probleem naar oplossing
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Neem Contact Op</h3>
              <p className="text-gray-600 leading-relaxed">
                Bel ons of vul het formulier in. Vertel kort wat het probleem is.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plan Een Afspraak</h3>
              <p className="text-gray-600 leading-relaxed">
                We plannen samen een moment dat u uitkomt. Vaak al binnen 24 uur.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Komt Langs</h3>
              <p className="text-gray-600 leading-relaxed">
                Onze IT-student komt bij u thuis in {city.name} en lost het probleem op.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6 shadow-xl">
                &#10003;
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Probleem Opgelost</h3>
              <p className="text-gray-600 leading-relaxed">
                Alles werkt weer en u weet precies hoe. Betalen na afloop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection benefits={[
        `Geen voorrijkosten in ${city.name}`,
        'Ook avonds en in het weekend beschikbaar',
        'Betalen via pin, contant of Tikkie'
      ]} />

      {/* SEO Content section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Waarom Kiezen Voor Student aan Huis in {city.name}?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Student aan huis in {city.name}</strong> biedt een unieke vorm van computerhulp waarbij
              jonge IT-studenten bij u thuis komen. Of u nu in het centrum van {city.name} woont of aan de rand -
              onze studenten komen binnen 24 uur bij u langs voor alle computer, laptop en internet problemen.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Het grote voordeel van student aan huis is de combinatie van jeugdig enthousiasme met professionele
              kennis. Onze IT-studenten volgen actuele opleidingen en zijn perfect op de hoogte van de nieuwste
              ontwikkelingen. Ze nemen de tijd om rustig uit te leggen - precies wat veel mensen in {city.name} zoeken.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Voordelen van Student aan Huis in {city.name}
            </h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Geduldig uitleggen:</strong> Onze studenten nemen de tijd om alles rustig uit te leggen in begrijpelijke taal.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Moderne kennis:</strong> Up-to-date met de allernieuwste technologie en apps.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Geen voorrijkosten:</strong> Student aan huis in heel {city.name} zonder extra kosten.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Flexibele tijden:</strong> Ook &apos;s avonds en in het weekend beschikbaar.</span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Kies voor student aan huis in {city.name} en ervaar het verschil. Bel vandaag nog{' '}
              <a href="tel:+31642548451" className="text-blue-600 hover:text-blue-800 font-semibold">06-42548451</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ervaringen met Student aan Huis
            </h2>
            <p className="text-lg text-gray-600">
              Wat klanten zeggen over onze IT-studenten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Student aan Huis Nodig in {city.name}?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Bel nu en we sturen een jonge IT-student bij u langs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-2xl shadow-xl shadow-blue-600/25 hover:scale-105 transition-all"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Hulp vragen
            </Link>

            <a
              href="tel:+31642548451"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-blue-600 px-10 py-5 rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition-all border-2 border-blue-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Direct bellen
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            Ma-Zo: 08:00 - 22:00 | Ook avonden en weekenden | Geen voorrijkosten in {city.name}
          </div>
        </div>
      </section>

      <NearbyCities currentCity={city.slug} pageType="student-aan-huis" />
    </>
  )
}
