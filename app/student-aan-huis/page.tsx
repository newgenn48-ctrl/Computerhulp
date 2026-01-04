import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServicesImageCards from '@/components/ServicesImageCards'
import PricingSection from '@/components/PricingSection'
import ExtraBenefitsSection from '@/components/ExtraBenefitsSection'

export const metadata: Metadata = {
  title: 'Student aan Huis Zuid-Holland | IT-Studenten Binnen 24u',
  description: 'Student aan huis voor computerhulp in Zuid-Holland. Geduldige IT-studenten komen binnen 24 uur bij u thuis. Geen voorrijkosten, ook in het weekend. Bel 06-42548451.',
  keywords: 'student aan huis, IT student, computerhulp student, goedkope computerhulp, computer student, geduldige hulp, senioren hulp, Zuid-Holland',
  openGraph: {
    title: 'Student aan Huis Zuid-Holland | IT-Studenten Binnen 24u',
    description: 'Jonge, geduldige IT-studenten binnen 24u bij u thuis. Geduldig uitleggen, rustig helpen. Vanaf €43,50. Bel 06-42548451',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://computerhulpzh.nl/#organization',
      name: 'Computerhulp Zuid-Holland',
      url: 'https://computerhulpzh.nl',
      telephone: '+31642548451',
      email: 'info@computerhulpzh.nl',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://computerhulpzh.nl/#logo',
        url: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
        contentUrl: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
        caption: 'Computerhulp Zuid-Holland Logo'
      },
      image: {
        '@type': 'ImageObject',
        '@id': 'https://computerhulpzh.nl/#primaryImage',
        url: 'https://computerhulpzh.nl/Student%20aan%20huis.webp',
        contentUrl: 'https://computerhulpzh.nl/Student%20aan%20huis.webp',
        caption: 'Computerhulp Zuid-Holland - Student aan Huis'
      },
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Zuid-Holland',
        addressCountry: 'NL'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '52.0705',
        longitude: '4.3007'
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
      areaServed: [
        {
          '@type': 'State',
          name: 'Zuid-Holland',
          '@id': 'https://www.wikidata.org/wiki/Q694'
        },
        {
          '@type': 'City',
          name: 'Den Haag',
          '@id': 'https://www.wikidata.org/wiki/Q36600'
        },
        {
          '@type': 'City',
          name: 'Rotterdam',
          '@id': 'https://www.wikidata.org/wiki/Q34370'
        },
        {
          '@type': 'City',
          name: 'Leiden',
          '@id': 'https://www.wikidata.org/wiki/Q43631'
        }
      ]
    },
    {
      '@type': 'Service',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#service',
      serviceType: 'Student aan Huis Computerhulp',
      name: 'Student aan Huis - Computerhulp door IT-Studenten',
      description: 'Computerhulp door jonge IT-studenten aan huis in Zuid-Holland. Geduldig, betaalbaar en kundig. Perfect voor wie liever met een jongere werkt.',
      url: 'https://computerhulpzh.nl/student-aan-huis',
      provider: {
        '@id': 'https://computerhulpzh.nl/#organization'
      },
      areaServed: {
        '@id': 'https://www.wikidata.org/wiki/Q694'
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
          description: 'Minimaal 3 kwartier (€43,50 totaal)'
        },
        seller: {
          '@id': 'https://computerhulpzh.nl/#organization'
        },
        validFrom: '2024-01-01',
        priceValidUntil: '2026-12-31'
      }
    },
    {
      '@type': 'WebPage',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#webpage',
      url: 'https://computerhulpzh.nl/student-aan-huis',
      name: 'Student aan Huis | Computerhulp Zuid-Holland',
      description: 'Jonge, geduldige IT-studenten komen bij u thuis voor computerhulp. Vanaf €43,50. Bel 06-42548451',
      isPartOf: {
        '@id': 'https://computerhulpzh.nl/#website'
      },
      about: {
        '@id': 'https://computerhulpzh.nl/student-aan-huis#service'
      },
      primaryImageOfPage: {
        '@id': 'https://computerhulpzh.nl/#primaryImage'
      },
      datePublished: '2024-01-01',
      dateModified: '2026-01-02',
      inLanguage: 'nl-NL'
    },
    {
      '@type': 'WebSite',
      '@id': 'https://computerhulpzh.nl/#website',
      url: 'https://computerhulpzh.nl',
      name: 'Computerhulp Zuid-Holland',
      description: 'Professionele computerhulp aan huis in Zuid-Holland',
      publisher: {
        '@id': 'https://computerhulpzh.nl/#organization'
      },
      inLanguage: 'nl-NL'
    }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://computerhulpzh.nl/student-aan-huis#faq',
  mainEntity: [
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#faq-wat-is',
      name: 'Wat is student aan huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Student aan huis betekent dat jonge IT-studenten bij u thuis komen voor computerhulp. Ze zijn geduldig, energiek en leggen alles rustig uit. Perfect voor wie liever met een jongere werkt.'
      }
    },
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#faq-verschil',
      name: 'Wat is het verschil met reguliere computerhulp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze studenten zijn jonge IT-professionals in opleiding. Ze zijn vaak geduldiger, nemen de tijd en leggen dingen op een andere manier uit. Dezelfde kwaliteit, maar met een frisse kijk en betaalbaar.'
      }
    },
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#faq-prijs',
      name: 'Wat kost een student aan huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een student aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in heel Zuid-Holland. Dezelfde prijs als reguliere computerhulp.'
      }
    },
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#faq-kundig',
      name: 'Zijn de studenten wel kundig genoeg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absoluut! Onze IT-studenten zijn goed opgeleid en hebben ruime ervaring. Ze studeren IT of Informatica en zijn up-to-date met de nieuwste technieken. Perfect voor alle computer, laptop en internet problemen.'
      }
    },
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#faq-plaatsen',
      name: 'In welke plaatsen komt een student aan huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze studenten komen in heel Zuid-Holland bij u thuis. Dit omvat Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht en nog 40+ andere gemeenten. Overal zonder voorrijkosten.'
      }
    }
  ]
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://computerhulpzh.nl/student-aan-huis#breadcrumb',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: {
        '@id': 'https://computerhulpzh.nl',
        name: 'Computerhulp Zuid-Holland'
      }
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Student aan Huis',
      item: {
        '@id': 'https://computerhulpzh.nl/student-aan-huis',
        name: 'Student aan Huis Zuid-Holland'
      }
    }
  ]
}

export default function StudentAanHuisPage() {
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
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-100/50 to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2 mb-6 shadow-lg shadow-blue-600/25">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-sm font-medium">IT-Studenten aan Huis</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Student aan Huis
                <span className="block text-blue-600">Zuid-Holland</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Hulp nodig met uw <strong className="text-gray-900">computer, laptop, tablet of andere digitale apparaten</strong>? Onze deskundige IT-studenten komen bij u thuis en lossen het probleem rustig en vakkundig op.
              </p>

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

            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 aspect-[4/5]">
                  <Image
                    src="/Student aan huis.webp"
                    alt="IT-student helpt klant thuis met computer in Zuid-Holland"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
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
                      <div className="text-sm text-gray-500">Heel Zuid-Holland</div>
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



      {/* 3. Services overview - with images */}
      <ServicesImageCards
        title="Waar Onze Studenten U Mee Helpen"
        description="Van simpel tot complex - onze IT-studenten helpen u met alle technische problemen"
      />

      {/* 4. How it works */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hoe Het Werkt
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Neem Contact Op
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bel ons of vul het formulier in. Vertel kort wat het probleem is.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Plan Een Afspraak
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We plannen samen een moment dat u uitkomt. Vaak al binnen 24 uur.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                We Komen Langs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We komen bij u thuis en lossen het probleem direct op.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6 shadow-xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Probleem Opgelost
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Alles werkt weer en u weet precies hoe. Betalen na afloop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing */}
      <PricingSection benefits={[
        'Geen voorrijkosten in heel Zuid-Holland',
        'Ook avonds en in het weekend beschikbaar',
        'Betalen via pin, contant of Tikkie'
      ]} />

      {/* 5.5 SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Waarom Kiezen Voor Student aan Huis Zuid-Holland?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Student aan huis</strong> is een unieke vorm van computerhulp waarbij jonge IT-studenten
              bij u thuis komen voor computer, laptop en internet problemen. In heel Zuid-Holland bieden wij
              deze moderne aanpak van computerhulp aan. Onze IT-studenten zijn energiek, geduldig en beschikken
              over up-to-date kennis. Perfect voor wie liever door een jongere wordt geholpen of gewoon een
              frisse kijk op technologie waardeert.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Het Verschil Van Student aan Huis Computerhulp
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Een <strong>student aan huis</strong> combineert jeugdig enthousiasme met professionele kennis.
              Onze IT-studenten volgen actuele opleidingen in Informatica en IT, waardoor ze perfect op de
              hoogte zijn van de nieuwste ontwikkelingen. Ze nemen de tijd om rustig uit te leggen, werken
              met moderne methodes en snappen precies hoe u als klant het beste geholpen wordt. Of het nu gaat
              om het instellen van je nieuwe smartphone, problemen met je laptop of het beveiligen van je
              thuisnetwerk - onze student aan huis service staat voor kwaliteit tegen een eerlijke prijs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              De grote voordelen van student aan huis computerhulp in Zuid-Holland zijn duidelijk:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong>Moderne kennis:</strong> Onze student aan huis professionals zijn up-to-date met
                  de allernieuwste technologieën en apps
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong>Geduldig uitleggen:</strong> Jongeren hebben vaak een natuurlijk talent voor rustig
                  uitleggen en begrijpen hoe u het beste leert
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong>Betaalbaar:</strong> Student aan huis betekent dezelfde prijs als reguliere computerhulp,
                  maar met extra voordelen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong>Heel Zuid-Holland:</strong> Van Den Haag tot Rotterdam, van Leiden tot Delft -
                  overal komen onze studenten bij u thuis
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong>Flexibel:</strong> Ook &apos;s avonds en in het weekend beschikbaar, want student aan huis
                  service past zich aan uw agenda aan
                </span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Kies voor <strong>student aan huis</strong> en ervaar het verschil van computerhulp door jonge,
              enthousiaste IT-professionals. Bel vandaag nog <a href="tel:+31642548451" className="text-blue-600 hover:text-blue-800 font-semibold">Bel Direct</a> en
              ontdek waarom zoveel mensen in Zuid-Holland vertrouwen op onze student aan huis service.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dit Zeggen Onze Klanten
            </h2>
            <p className="text-lg text-gray-600">
              Ervaring met onze studenten aan huis
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

      {/* FAQ Section - Visible for SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen over Student aan Huis
            </h2>
            <p className="text-lg text-gray-600">
              Alles wat u wilt weten over onze IT-studenten service
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Wat is student aan huis?',
                a: 'Student aan huis betekent dat jonge IT-studenten bij u thuis komen voor computerhulp. Ze zijn geduldig, energiek en leggen alles rustig uit. Perfect voor wie liever met een jongere werkt of een frisse kijk op technologie waardeert.'
              },
              {
                q: 'Wat is het verschil met reguliere computerhulp?',
                a: 'Onze studenten zijn jonge IT-professionals in opleiding. Ze zijn vaak geduldiger, nemen de tijd en leggen dingen op een andere manier uit. Dezelfde kwaliteit en prijs, maar met een frisse kijk en actuele kennis van de nieuwste technologieën.'
              },
              {
                q: 'Wat kost een student aan huis?',
                a: 'Een student aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in heel Zuid-Holland. Dezelfde prijs als reguliere computerhulp, maar met extra voordelen.'
              },
              {
                q: 'Zijn de studenten wel kundig genoeg?',
                a: 'Absoluut! Onze IT-studenten zijn goed opgeleid en hebben ruime ervaring. Ze studeren IT of Informatica en zijn up-to-date met de nieuwste technieken. Perfect voor alle computer, laptop, tablet en internet problemen.'
              },
              {
                q: 'In welke plaatsen komt een student aan huis?',
                a: 'Onze studenten komen in heel Zuid-Holland bij u thuis. Dit omvat Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht en nog 40+ andere gemeenten. Overal zonder voorrijkosten.'
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Werkgebied Section met interne links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Student aan Huis in heel Zuid-Holland
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Onze IT-studenten komen bij u thuis in meer dan 50 gemeenten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
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
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/student-aan-huis-${city.slug}`}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/student-aan-huis"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              Bekijk alle locaties
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Extra benefits / reassurance */}
      <ExtraBenefitsSection />

      {/* 8. Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Klaar Voor Een Student aan Huis?
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
            Ma-Zo: 08:00 - 22:00 • Ook avonden en weekenden • Geen voorrijkosten
          </div>
        </div>
      </section>
    </>
  )
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
