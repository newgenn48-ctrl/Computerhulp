import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection'
import ExtraBenefitsSection from '@/components/ExtraBenefitsSection'
import NearbyCities from '@/components/NearbyCities'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Molenlanden | Binnen 24u bij u Thuis',
  description: '💻 Computerhulp aan huis in Molenlanden. Binnen 24 uur bij u thuis! ✓ Computer, laptop, printer, WiFi ✓ Geen voorrijkosten ✓ Transparant tarief. Bel 06-42548451.',
  openGraph: {
    title: 'Computerhulp aan Huis Molenlanden | Binnen 24u bij u Thuis',
    description: 'Binnen 24 uur bij u thuis in Molenlanden. Computer, laptop, printer, WiFi problemen opgelost. Geen voorrijkosten. Bel 06-42548451',
    type: 'website',
    url: 'https://computerhulpzh.nl/computerhulp-aan-huis-molenlanden',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/computerhulp-aan-huis-molenlanden',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://computerhulpzh.nl/#organization',
      name: 'Computerhulp Molenlanden',
      url: 'https://computerhulpzh.nl',
      telephone: '+31642548451',
      email: 'info@computerhulpzh.nl',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://computerhulpzh.nl/#logo',
        url: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
        contentUrl: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
        caption: 'Computerhulp Molenlanden Logo'
      },
      image: {
        '@type': 'ImageObject',
        '@id': 'https://computerhulpzh.nl/#primaryImage',
        url: 'https://computerhulpzh.nl/og-image.jpg',
        contentUrl: 'https://computerhulpzh.nl/og-image.jpg',
        caption: 'Computerhulp Molenlanden - Professionele IT Service'
      },
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Molenlanden',
        addressCountry: 'NL'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '51.8833',
        longitude: '4.8333'
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
        name: 'Molenlanden'
      },
      sameAs: [
        'https://www.facebook.com/computerhulpzh',
        'https://www.linkedin.com/company/computerhulp-zuid-holland'
      ]
    },
    {
      '@type': 'Service',
      '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#service',
      serviceType: 'Computerhulp aan Huis',
      name: 'Computerhulp aan Huis Molenlanden',
      description: 'Professionele computerhulp aan huis in heel Molenlanden. We komen binnen 24 uur bij u thuis voor computer, laptop, printer, WiFi en email problemen. Geen voorrijkosten, transparante prijzen van €14,50 per kwartier.',
      url: 'https://computerhulpzh.nl/computerhulp-aan-huis-molenlanden',
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
        }},
      termsOfService: 'https://computerhulpzh.nl/algemene-voorwaarden',
      audience: {
        '@type': 'Audience',
        audienceType: 'Particulieren en bedrijven in Molenlanden',
        geographicArea: {
          '@type': 'State',
          name: 'Molenlanden'
        }
      }
    },
    {
      '@type': 'WebPage',
      '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis#webpage',
      url: 'https://computerhulpzh.nl/computerhulp-aan-huis-molenlanden',
      name: 'Computerhulp aan Huis Molenlanden | Binnen 24 Uur | €14,50',
      description: 'Computerhulp aan huis in heel Molenlanden. Computer, laptop, printer of WiFi problemen? Wij komen binnen 24 uur bij u thuis. Geen voorrijkosten. Bel direct: 06-42548451',
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
      dateModified: '2025-01-08',
      inLanguage: 'nl-NL'
    },
    {
      '@type': 'WebSite',
      '@id': 'https://computerhulpzh.nl/#website',
      url: 'https://computerhulpzh.nl',
      name: 'Computerhulp Molenlanden',
      description: 'Professionele computerhulp aan huis in Molenlanden',
      publisher: {
        '@id': 'https://computerhulpzh.nl/#organization'
      },
      inLanguage: 'nl-NL',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://computerhulpzh.nl/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
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
      name: 'Wat kost computerhulp aan huis in Molenlanden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze computerhulp aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in heel Molenlanden.'
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
        text: 'We bieden computerhulp aan huis in heel Molenlanden, inclusief Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht, Alphen aan den Rijn en alle kleinere plaatsen. Overal zonder voorrijkosten.'
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
        name: 'Computerhulp Molenlanden'
      }
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Computerhulp aan Huis',
      item: {
        '@id': 'https://computerhulpzh.nl/computerhulp-aan-huis-molenlanden',
        name: 'Computerhulp aan Huis Molenlanden'
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

      {/* 1. Hero Section - Problem + solution */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Computerhulp Zuid Holland Over ons.webp')"
            }}
          />
        </div>

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center"
              style={{
                color: 'white',
                background: 'none',
                WebkitTextFillColor: 'white',
                backgroundClip: 'unset',
                WebkitBackgroundClip: 'unset'
              }}
            >
              Computerhulp aan huis<br/>
              in Molenlanden
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Computer, laptop, printer of WiFi problemen in <strong className="text-white">Molenlanden</strong>?
              Onze computerhulp aan huis service komt binnen 24 uur bij u thuis en lost het direct op. Geen gedoe met wegbrengen.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Binnen 24 uur bij u</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Geen voorrijkosten</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Ook avond & weekend</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
              >
                Hulp Vragen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+31642548451"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Direct CTA / Contact options (3 cards) */}
      <section className="bg-white py-12 border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Telefoon */}
            <a
              href="tel:+31642548451"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-500 transition-all hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1">Direct Bellen</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">06-42548451</div>
                  <div className="text-sm text-gray-600">Ma-Zo: 08:00 - 22:00</div>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/31642548451"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-2xl p-6 border-2 border-green-200 hover:border-green-500 transition-all hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-1">WhatsApp</div>
                  <div className="text-xl font-bold text-gray-900 mb-1">Chat Direct</div>
                  <div className="text-sm text-gray-600">Snel antwoord</div>
                </div>
              </div>
            </a>

            {/* Contact formulier */}
            <Link
              href="/afspraak-maken"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-500 transition-all hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-1">Formulier</div>
                  <div className="text-xl font-bold text-gray-900 mb-1">Hulp Vragen</div>
                  <div className="text-sm text-gray-600">Snel antwoord</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Services overview - compact */}
      <ServicesSection
        title="Waar We U Mee Helpen Bij U Thuis"
        description="Van simpele vragen tot complexe problemen - wij komen bij u thuis en lossen het direct op"
      />

      {/* 4. How it works - 4 steps */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hoe Werkt Onze Computerhulp aan Huis?
            </h2>
            <p className="text-lg text-gray-600">
              In 4 simpele stappen van probleem naar oplossing bij u thuis
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
      <PricingSection />

      {/* 5.5 Content section - SEO optimized */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Waarom Kiezen Voor Computerhulp aan Huis in Molenlanden?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Computerhulp aan huis is dé oplossing wanneer uw computer, laptop, printer of WiFi problemen geeft. In plaats van uw apparatuur naar een winkel te brengen, komen wij bij u thuis. Dit bespaart u tijd, gedoe en zorgt ervoor dat uw probleem direct ter plekke wordt opgelost.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In heel Molenlanden bieden wij professionele computerhulp aan huis. Of u nu in Den Haag, Rotterdam, Leiden, Delft, Zoetermeer of een andere plaats woont - we komen bij u langs. Binnen 24 uur na uw aanvraag staan we bij u op de stoep, ook in de avonduren en in het weekend.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Voordelen van Computerhulp aan Huis
            </h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Geen transport:</strong> U hoeft uw computer niet te vervoeren. Wij komen bij u thuis met alle benodigde tools.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Direct opgelost:</strong> Computerhulp aan huis betekent dat we het probleem meteen bij u oplossen. Geen dagen wachten.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Persoonlijke uitleg:</strong> We nemen de tijd om alles rustig uit te leggen in uw eigen vertrouwde omgeving.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Hele provincie:</strong> Onze computerhulp aan huis is beschikbaar in heel Molenlanden zonder voorrijkosten.</span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed">
              Met meer dan 10 jaar ervaring in computerhulp aan huis weten we precies hoe we uw probleem snel en effectief oplossen. Of het nu gaat om een trage computer, een printer die niet werkt, WiFi problemen of email instellen - wij helpen u graag bij u thuis.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ervaringen met Onze Computerhulp aan Huis
            </h2>
            <p className="text-lg text-gray-600">
              Meer dan 500 tevreden klanten geholpen bij hen thuis in Molenlanden
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

      {/* 7. Extra benefits / reassurance */}
      <ExtraBenefitsSection />

      {/* 8. Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Computerhulp aan Huis Nodig? Bel Direct!
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            We komen vandaag of morgen al bij u thuis in Molenlanden. Geen voorrijkosten, binnen 24 uur geholpen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-2xl shadow-2xl hover:scale-105 transition-all"
            >
              Hulp Vragen
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <a
              href="tel:+31642548451"
              className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:scale-105 transition-all border-2 border-white/30"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel Direct
            </a>
          </div>

          <div className="text-blue-100 text-sm">
            Ma-Zo: 08:00 - 22:00 • Ook avonden en weekenden • Geen voorrijkosten
          </div>
        </div>
      </section>
      <NearbyCities currentCity="molenlanden" pageType="computerhulp-aan-huis" />

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
