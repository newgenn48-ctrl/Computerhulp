import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PricingSection from '@/components/PricingSection'
import ExtraBenefitsSection from '@/components/ExtraBenefitsSection'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Zuid-Holland | Binnen 24u bij u Thuis',
  description: 'Professionele computerhulp aan huis in Zuid-Holland. Binnen 24 uur bij u thuis voor computer, laptop, printer en WiFi problemen. Geen voorrijkosten. Bel 06-42548451.',
  keywords: 'computerhulp aan huis, computer hulp thuis, laptop hulp aan huis, IT hulp thuis, computer reparatie aan huis, thuishulp computer, Zuid-Holland, Den Haag, Rotterdam, Leiden',
  openGraph: {
    title: 'Computerhulp aan Huis Zuid-Holland | Binnen 24u bij u Thuis',
    description: 'Binnen 24 uur bij u thuis in Zuid-Holland. Computer, laptop, printer, WiFi problemen opgelost. Geen voorrijkosten. Bel 06-42548451',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis',
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
        url: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
        contentUrl: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
        caption: 'Computerhulp Zuid-Holland - Professionele IT Service'
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
        },
        {
          '@type': 'City',
          name: 'Delft',
          '@id': 'https://www.wikidata.org/wiki/Q33433'
        },
        {
          '@type': 'City',
          name: 'Zoetermeer',
          '@id': 'https://www.wikidata.org/wiki/Q9927'
        },
        {
          '@type': 'City',
          name: 'Gouda',
          '@id': 'https://www.wikidata.org/wiki/Q33456'
        },
        {
          '@type': 'City',
          name: 'Dordrecht',
          '@id': 'https://www.wikidata.org/wiki/Q26421'
        }
      ]
    },
    {
      '@type': 'Service',
      '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#service',
      serviceType: 'Computerhulp aan Huis',
      name: 'Computerhulp aan Huis Zuid-Holland',
      description: 'Professionele computerhulp aan huis in heel Zuid-Holland. We komen binnen 24 uur bij u thuis voor computer, laptop, printer, WiFi en email problemen.',
      url: 'https://computerhulpzh.nl/computerhulp-aan-huis',
      provider: {
        '@id': 'https://computerhulpzh.nl/#organization'
      },
      areaServed: {
        '@id': 'https://www.wikidata.org/wiki/Q694'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Computerhulp Diensten',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Computer Reparatie aan Huis',
              description: 'Volledige computer reparatie bij u thuis'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Laptop Hulp aan Huis',
              description: 'Laptop problemen oplossen bij u thuis'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Printer Installatie aan Huis',
              description: 'Printer installeren en configureren bij u thuis'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'WiFi Problemen Oplossen',
              description: 'WiFi en netwerk problemen oplossen bij u thuis'
            }
          }
        ]
      },
      offers: {
        '@type': 'Offer',
        price: '14.50',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        availableDeliveryMethod: 'https://schema.org/OnSitePickup',
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
      },
      termsOfService: 'https://computerhulpzh.nl/algemene-voorwaarden',
      audience: {
        '@type': 'Audience',
        audienceType: 'Particulieren en bedrijven in Zuid-Holland',
        geographicArea: {
          '@type': 'State',
          name: 'Zuid-Holland'
        }
      }
    },
    {
      '@type': 'WebPage',
      '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#webpage',
      url: 'https://computerhulpzh.nl/computerhulp-aan-huis',
      name: 'Computerhulp aan Huis Zuid-Holland | Binnen 24 Uur | €14,50',
      description: 'Computerhulp aan huis in heel Zuid-Holland. Computer, laptop, printer of WiFi problemen? Wij komen binnen 24 uur bij u thuis. Geen voorrijkosten.',
      isPartOf: {
        '@id': 'https://computerhulpzh.nl/#website'
      },
      about: {
        '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#service'
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
  '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#faq',
  mainEntity: [
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#faq-wat-is',
      name: 'Wat is computerhulp aan huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Computerhulp aan huis betekent dat wij bij u thuis komen om uw computer, laptop, printer of WiFi problemen op te lossen. U hoeft niet naar een winkel te komen - wij komen naar u toe met alle benodigde tools en kennis.'
      }
    },
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#faq-snelheid',
      name: 'Hoe snel kunnen jullie bij mij thuis komen voor computerhulp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen we binnen 24 uur bij u thuis zijn voor computerhulp aan huis. Bij acute problemen proberen we vaak nog dezelfde dag langs te komen. We werken 7 dagen per week, ook in de avonduren.'
      }
    },
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#faq-prijs',
      name: 'Wat kost computerhulp aan huis in Zuid-Holland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze computerhulp aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in heel Zuid-Holland.'
      }
    },
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#faq-weekend',
      name: 'Komen jullie ook in het weekend bij mij thuis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, onze computerhulp aan huis is beschikbaar 7 dagen per week, ook in het weekend en in de avonduren tot 22:00 uur. Perfect als u doordeweeks werkt. We passen ons aan uw agenda aan.'
      }
    },
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#faq-gebied',
      name: 'In welke plaatsen bieden jullie computerhulp aan huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We bieden computerhulp aan huis in heel Zuid-Holland, inclusief Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht, Alphen aan den Rijn en alle kleinere plaatsen. Overal zonder voorrijkosten.'
      }
    }
  ]
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#breadcrumb',
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
      name: 'Computerhulp aan Huis',
      item: {
        '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis',
        name: 'Computerhulp aan Huis Zuid-Holland'
      }
    }
  ]
}

export default function ComputerhulpAanHuisPage() {
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

      {/* Hero Section - Premium Full-Width Design */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Full-width background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/Student aan huis.webp"
            alt="Computerhulp aan huis specialist helpt klant thuis"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Mobile: stronger overlay for readability */}
          <div className="absolute inset-0 bg-white/80 md:hidden"></div>
          {/* Desktop: subtle gradient to show photo */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-white/30 via-transparent to-white/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24 min-h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Computerhulp
              <span className="block">aan Huis</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Wij lossen uw <strong className="text-gray-900 font-semibold">computer, laptop, printer, WiFi en andere digitale problemen</strong> vakkundig op. Bij u thuis, wanneer het u uitkomt.
            </p>

            {/* USP Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Binnen 24 uur
              </div>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Geen voorrijkosten
              </div>
              <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                7 dagen per week
              </div>
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
                href="tel:+31642548451"
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>



      {/* Services Section - Premium Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Onze expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Waar wij u mee helpen
            </h2>
            <p className="text-xl text-gray-600">
              Van eenvoudige vragen tot complexe problemen — wij komen bij u thuis en lossen het direct op.
            </p>
          </div>

          {/* Services Grid - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Featured Card */}
            <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0">
                <Image src="/Computer & Laptop Hulp.webp" alt="Computer & Laptop Hulp aan huis" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 66vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              </div>
              <div className="relative p-8 sm:p-10 flex flex-col justify-end min-h-[400px]">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 w-fit">Meest gevraagd</span>
                <h3 className="text-3xl font-bold text-white mb-3">Computer & Laptop Hulp</h3>
                <p className="text-white/80 text-lg mb-6 max-w-xl">Trage computer? Opstartproblemen? Virus? Wij lossen alle computer- en laptopproblemen snel en vakkundig op.</p>
                <Link href="/diensten/computer-laptop-hulp" className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                  Meer informatie
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* WiFi Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0">
                <Image src="/WiFi & Netwerk Hulp.webp" alt="WiFi en Netwerk hulp aan huis" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              </div>
              <div className="relative p-8 flex flex-col justify-end min-h-[400px]">
                <h3 className="text-2xl font-bold text-white mb-2">WiFi & Netwerk</h3>
                <p className="text-white/80 mb-4">Slecht bereik of traag internet? Wij optimaliseren uw netwerk.</p>
                <Link href="/diensten/wifi-internet-hulp" className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                  Bekijken <span className="text-xl">→</span>
                </Link>
              </div>
            </div>

            {/* Printer Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0">
                <Image src="/Printer & Randapparatuur.webp" alt="Printer en Scanner hulp aan huis" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              </div>
              <div className="relative p-8 flex flex-col justify-end min-h-[300px]">
                <h3 className="text-2xl font-bold text-white mb-2">Printer & Scanner</h3>
                <p className="text-white/80 mb-4">Installatie, configuratie en probleemoplossing.</p>
                <Link href="/diensten/printer-scanner-hulp" className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                  Bekijken <span className="text-xl">→</span>
                </Link>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0">
                <Image src="/E-mail Hulp.webp" alt="E-mail hulp en configuratie aan huis" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              </div>
              <div className="relative p-8 flex flex-col justify-end min-h-[300px]">
                <h3 className="text-2xl font-bold text-white mb-2">E-mail Hulp</h3>
                <p className="text-white/80 mb-4">Outlook, Gmail, configuratie en problemen oplossen.</p>
                <Link href="/diensten/email-hulp" className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                  Bekijken <span className="text-xl">→</span>
                </Link>
              </div>
            </div>

            {/* Tablet & Smartphone */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0">
                <Image src="/Tablet & Smartphone Hulp.webp" alt="Tablet en Smartphone hulp aan huis" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              </div>
              <div className="relative p-8 flex flex-col justify-end min-h-[300px]">
                <h3 className="text-2xl font-bold text-white mb-2">Tablet & Smartphone</h3>
                <p className="text-white/80 mb-4">iPad, iPhone, Android — wij helpen u op weg.</p>
                <Link href="/diensten/tablet-smartphone-hulp" className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                  Bekijken <span className="text-xl">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <Link href="/diensten" className="inline-flex items-center gap-3 text-gray-900 font-semibold text-lg hover:gap-5 transition-all">
              Bekijk alle diensten
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works - Premium Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Hoe het werkt</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
              In 4 stappen geholpen
            </h2>
            <p className="text-xl text-gray-600">
              Van eerste contact tot opgelost probleem — wij maken het u zo makkelijk mogelijk.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  01
                </div>
                <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Neem contact op
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bel ons of vul het formulier in. Beschrijf kort uw probleem.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  02
                </div>
                <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Afspraak plannen
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Wij plannen samen een moment. Vaak al binnen 24 uur mogelijk.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  03
                </div>
                <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Wij komen langs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Onze specialist komt bij u thuis en lost het probleem direct op.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Opgelost
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Alles werkt weer perfect. Betalen kan na afloop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing */}
      <PricingSection />

      {/* Content section - Premium SEO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Content */}
            <div>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Waarom wij</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-8">
                Computerhulp aan huis in Zuid-Holland
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Computerhulp aan huis is dé oplossing wanneer uw computer, laptop, printer of WiFi problemen geeft. In plaats van uw apparatuur naar een winkel te brengen, komen wij bij u thuis.
                </p>
                <p>
                  In heel Zuid-Holland bieden wij professionele computerhulp aan huis. Of u nu in Den Haag, Rotterdam, Leiden, Delft of Zoetermeer woont - we komen bij u langs. Binnen 24 uur na uw aanvraag staan we bij u op de stoep.
                </p>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Voordelen van onze service
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Geen transport nodig</div>
                    <div className="text-gray-600">Wij komen bij u thuis met alle benodigde tools en kennis.</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
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
                  <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
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
                  <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Heel Zuid-Holland</div>
                    <div className="text-gray-600">Beschikbaar in de hele provincie zonder voorrijkosten.</div>
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
                Meer dan 500 tevreden klanten in heel Zuid-Holland
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
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {testimonial.quote}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold">
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

      {/* FAQ Section - Visible for SEO */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Veelgestelde vragen</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
              FAQ over Computerhulp aan Huis
            </h2>
            <p className="text-xl text-gray-600">
              Antwoorden op de meest gestelde vragen over onze service
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Wat is computerhulp aan huis?',
                a: 'Computerhulp aan huis betekent dat wij bij u thuis komen om uw computer, laptop, printer of WiFi problemen op te lossen. U hoeft niet naar een winkel te komen - wij komen naar u toe met alle benodigde tools en kennis. Dit is ideaal voor mensen die hun apparatuur niet willen verslepen of liever in hun eigen omgeving geholpen worden.'
              },
              {
                q: 'Hoe snel kunnen jullie bij mij thuis komen voor computerhulp?',
                a: 'In de meeste gevallen kunnen we binnen 24 uur bij u thuis zijn voor computerhulp aan huis. Bij acute problemen proberen we vaak nog dezelfde dag langs te komen. We werken 7 dagen per week, ook in de avonduren tot 22:00 uur.'
              },
              {
                q: 'Wat kost computerhulp aan huis in Zuid-Holland?',
                a: 'Onze computerhulp aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in heel Zuid-Holland. U betaalt alleen voor de tijd die we nodig hebben om uw probleem op te lossen.'
              },
              {
                q: 'Komen jullie ook in het weekend bij mij thuis?',
                a: 'Ja, onze computerhulp aan huis is beschikbaar 7 dagen per week, ook in het weekend en in de avonduren tot 22:00 uur. Perfect als u doordeweeks werkt. We passen ons aan uw agenda aan, zonder extra kosten voor avond- of weekendservice.'
              },
              {
                q: 'In welke plaatsen bieden jullie computerhulp aan huis?',
                a: 'We bieden computerhulp aan huis in heel Zuid-Holland. Dit omvat onder andere Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht, Alphen aan den Rijn, Westland, Schiedam, Vlaardingen en nog 40+ andere gemeenten. Overal zonder voorrijkosten.'
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-gray-900 hover:bg-gray-100 transition-colors">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Ons werkgebied</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Computerhulp aan Huis in heel Zuid-Holland
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij komen bij u thuis in meer dan 50 gemeenten. Geen voorrijkosten, waar u ook woont.
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
              { name: 'Maassluis', slug: 'maassluis' },
              { name: 'Rijswijk', slug: 'rijswijk' },
              { name: 'Katwijk', slug: 'katwijk' },
              { name: 'Leidschendam-Voorburg', slug: 'leidschendam-voorburg' },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/computerhulp-aan-huis-${city.slug}`}
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
              href="/computerhulp-aan-huis"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              Bekijk alle 50+ locaties
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Extra benefits / reassurance */}
      <ExtraBenefitsSection />

      {/* Final CTA - Premium */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden bg-gray-900 rounded-[2.5rem] px-8 py-16 sm:px-16 sm:py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Klaar om uw probleem op te lossen?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Neem vandaag nog contact op en wij komen bij u thuis in Zuid-Holland
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
                  href="tel:+31642548451"
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
    </>
  )
}

const testimonials = [
  {
    quote: 'Super blij met de computerhulp aan huis! Mijn computer deed het helemaal niet meer. Binnen 2 uur kwam er iemand bij mij thuis en alles werkte weer. Al mijn foto\'s van de kleinkinderen zijn gered!',
    initials: 'MV',
    name: 'Mevrouw Van Dijk',
    location: 'Den Haag'
  },
  {
    quote: 'Eindelijk computerhulp aan huis die normaal uitlegt zonder ingewikkelde termen! Printer werkt nu perfect en ik weet nu ook precies hoe ik hem moet gebruiken. Heel fijn dat ze bij me thuis kwamen.',
    initials: 'JB',
    name: 'Jan Bakker',
    location: 'Rotterdam'
  },
  {
    quote: 'WiFi werkte niet, email deed het niet. De computerhulp aan huis heeft alles in één keer opgelost bij mij thuis. Eerlijke prijs en geen gedoe. Binnen een dag geholpen, top service!',
    initials: 'LH',
    name: 'Linda Hendriks',
    location: 'Leiden'
  }
]
