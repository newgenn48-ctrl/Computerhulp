import Link from 'next/link'
import Image from 'next/image'
import PricingSection from '@/components/PricingSection'
import ExtraBenefitsSection from '@/components/ExtraBenefitsSection'
import NearbyCities from '@/components/NearbyCities'
import ServicesSection from '@/components/ServicesSection'
import { City } from '@/lib/cities'

interface ComputerhulpCityPageTemplateProps {
  city: City
}

const testimonials = [
  {
    quote: 'Super blij met de computerhulp aan huis! Mijn computer deed het helemaal niet meer. Binnen 2 uur kwam er iemand bij mij thuis en alles werkte weer.',
    initials: 'MV',
    name: 'Mevrouw Van Dijk',
    location: 'Den Haag'
  },
  {
    quote: 'Eindelijk iemand die normaal uitlegt zonder ingewikkelde termen! Printer werkt nu perfect en ik weet precies hoe ik hem moet gebruiken.',
    initials: 'JB',
    name: 'Jan Bakker',
    location: 'Rotterdam'
  },
  {
    quote: 'WiFi werkte niet, e-mail deed het niet. Alles in een keer opgelost bij mij thuis. Eerlijke prijs en geen gedoe. Top service!',
    initials: 'LH',
    name: 'Linda Hendriks',
    location: 'Leiden'
  }
]

export function generateStructuredData(city: City) {
  const baseUrl = 'https://computerhulpzh.nl'
  const pageUrl = `${baseUrl}/computerhulp-aan-huis-${city.slug}`
  const serviceName = `Computerhulp aan Huis ${city.name}`

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
        description: `Professionele computerhulp aan huis in ${city.name}. Computer, laptop, printer, WiFi problemen opgelost. Binnen 24 uur, geen voorrijkosten.`,
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
        description: `Computerhulp aan huis in ${city.name}. Computer, laptop, printer, WiFi hulp. Binnen 24 uur bij u thuis, geen voorrijkosten.`,
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

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: `Wat kost computerhulp aan huis in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Computerhulp aan huis in ${city.name} kost EUR 14,50 per kwartier met een minimum van 3 kwartier (EUR 43,50 totaal). Er zijn geen voorrijkosten.`
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
          text: `Nee, er zijn geen voorrijkosten voor computerhulp aan huis in ${city.name} en heel Zuid-Holland. U betaalt alleen voor de daadwerkelijke hulp.`
        }
      }
    ]
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
              Computerhulp aan Huis
              <span className="block text-blue-600">{city.name}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed max-w-xl">
              Heb je hulp nodig bij je computer, tablet, smartphone of een ander digitaal apparaat? Onze specialisten in {city.name} lossen het <strong className="text-gray-900">snel en vakkundig</strong> op - bij u thuis.
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
                Geen voorrijkosten
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                7 dagen per week
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
                Direct bellen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection
        title={`Computerhulp aan Huis ${city.name}`}
        description="Van eenvoudige vragen tot complexe problemen — alles lossen wij ter plekke op"
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
              In 4 eenvoudige stappen van probleem naar oplossing.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Neem contact op</h3>
              <p className="text-gray-600 leading-relaxed">Bel ons of vul het formulier in. Beschrijf kort uw probleem.</p>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  02
                </div>
                <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Afspraak plannen</h3>
              <p className="text-gray-600 leading-relaxed">Wij plannen samen een moment. Vaak al binnen 24 uur mogelijk.</p>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  03
                </div>
                <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wij komen langs</h3>
              <p className="text-gray-600 leading-relaxed">Onze specialist komt bij u thuis in {city.name} en lost het probleem direct op.</p>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Opgelost</h3>
              <p className="text-gray-600 leading-relaxed">Alles werkt weer perfect. Betalen kan na afloop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection benefits={[
        `Geen voorrijkosten in ${city.name}`,
        'Ook \'s avonds en in het weekend beschikbaar',
        'Betalen via pin, contant of Tikkie'
      ]} />

      {/* Content section - Premium SEO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Content */}
            <div>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Over ons</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-8">
                Waarom computerhulp aan huis in {city.name}?
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Computerhulp aan huis in {city.name}</strong> is dé oplossing wanneer uw computer, laptop, printer of WiFi problemen geeft. Geen gedoe met apparatuur wegbrengen — wij komen naar u toe.
                </p>
                <p>
                  Of u nu in het centrum van {city.name} woont of aan de rand — binnen 24 uur staan we bij u op de stoep. Ook in de avonduren en in het weekend.
                </p>
                <p>
                  Met meer dan 10 jaar ervaring lossen we uw probleem snel en effectief op. Van trage computers tot printerinstallatie, van WiFi-problemen tot e-mailconfiguratie.
                </p>
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
                    <div className="font-semibold text-gray-900 mb-1">Geen transport nodig</div>
                    <div className="text-gray-600">Wij komen bij u thuis in {city.name} met alle benodigde tools.</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Direct opgelost</div>
                    <div className="text-gray-600">We lossen het probleem meteen op. Geen dagen wachten.</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Persoonlijke uitleg</div>
                    <div className="text-gray-600">We leggen alles rustig uit in uw eigen vertrouwde omgeving.</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Geen voorrijkosten</div>
                    <div className="text-gray-600">Computerhulp in heel {city.name} zonder extra kosten.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
                Meer dan 500 tevreden klanten in Zuid-Holland
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
                Computerhulp aan huis {city.name} nodig?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Neem vandaag nog contact op en wij komen bij u thuis
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
                  Direct bellen
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
                  Geen voorrijkosten
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
