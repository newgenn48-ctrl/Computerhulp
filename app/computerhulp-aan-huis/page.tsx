import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'
import ExtraBenefitsSection from '@/components/ExtraBenefitsSection'
import ServicesSection from '@/components/ServicesSection'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Zuid-Holland | Binnen 24u bij u Thuis',
  description: 'Professionele computerhulp aan huis in Zuid-Holland. Binnen 24 uur bij u thuis voor computer, laptop, printer en WiFi. Gratis voorrijkosten. Bel 085-8002006.',
  openGraph: {
    title: 'Computerhulp aan Huis Zuid-Holland | Binnen 24u bij u Thuis',
    description: 'Binnen 24 uur bij u thuis in Zuid-Holland. Computer, laptop, printer, WiFi problemen opgelost. Gratis voorrijkosten. Bel 085-8002006',
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
      telephone: '+31858002006',
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
      description: 'Professionele computerhulp aan huis in heel Zuid-Holland. We komen binnen 24 uur bij u thuis voor computer, laptop, printer, WiFi en e-mail problemen.',
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
      termsOfService: 'https://computerhulpzh.nl/voorwaarden',
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
      description: 'Computerhulp aan huis in heel Zuid-Holland. Computer, laptop, printer of WiFi problemen? Wij komen binnen 24 uur bij u thuis. Gratis voorrijkosten.',
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
        text: 'Onze computerhulp aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Voorrijden is gratis in heel Zuid-Holland.'
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
      <section className="relative min-h-[70vh] md:min-h-screen bg-white overflow-hidden">
        {/* Full-width background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/Student aan huis.webp"
            alt="Computerhulp aan huis IT-student helpt klant thuis"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Mobile: blue overlay for readability */}
          <div className="absolute inset-0 bg-blue-50/70 md:hidden"></div>
          {/* Desktop: subtle blue gradient to show photo */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-blue-50/90 via-blue-50/60 to-transparent"></div>
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-blue-50/30 via-transparent to-blue-50/50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 md:pb-20 min-h-[70vh] md:min-h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Computerhulp
              <span className="block text-blue-600">aan Huis</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed max-w-xl">
              <strong className="text-gray-900">Betrouwbare computerhulp aan huis</strong> in heel Zuid-Holland. Onze IT-studenten komen bij u thuis en lossen uw computerproblemen <strong className="text-gray-900">snel en vakkundig</strong> op — zonder gedoe.
            </p>

            {/* USP Badges */}
            <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                Binnen 24 uur geholpen
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                Gratis voorrijkosten
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
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
                <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
              </Link>
              <a
                href="tel:+31858002006"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-200 hover:border-blue-600 transition-all"
              >
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                Bel 085-8002006
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



      {/* Services Section */}
      <ServicesSection
        title="Waar wij u mee helpen"
        description="Van een simpele vraag tot een lastig probleem — wij komen bij u thuis en helpen u graag"
        showFeatures={true}
        limitServices={6}
        showAllButton={true}
      />

      {/* How it works - Premium Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Hoe het werkt</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Zo werkt het
            </h2>
            <p className="text-xl text-gray-600">
              In vier stappen — simpel en overzichtelijk.
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
                U belt of mailt ons
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vertel kort wat er aan de hand is. Gewoon even bellen of een berichtje sturen.
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
                We spreken een moment af
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Samen zoeken we een tijdstip dat u uitkomt. Meestal kan het al de volgende dag.
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
                We komen bij u thuis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Onze IT-student komt langs en gaat rustig aan de slag.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Icon name="check" className="w-7 h-7" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Alles werkt weer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                U kunt weer verder. Betalen doet u pas achteraf — via pin, contant of Tikkie.
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
                Computerhulp bij u thuis
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Doet uw computer, laptop, printer of WiFi niet wat u wilt? Dan komen wij gewoon bij u thuis. U hoeft nergens naartoe — wij regelen het aan uw keukentafel.
                </p>
                <p>
                  Wij helpen mensen in heel Zuid-Holland. Of u nu in Den Haag, Rotterdam, Leiden, Delft of Zoetermeer woont — meestal zijn we binnen 24 uur bij u.
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
                  <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="check" className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Gewoon thuis blijven</div>
                    <div className="text-gray-600">U hoeft nergens naartoe — wij komen bij u thuis.</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="check" className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Snel geregeld</div>
                    <div className="text-gray-600">Meestal is het probleem in één bezoek opgelost.</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="check" className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Rustige uitleg</div>
                    <div className="text-gray-600">We nemen de tijd om alles duidelijk uit te leggen.</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="check" className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Gratis voorrijkosten</div>
                    <div className="text-gray-600">In heel Zuid-Holland, zonder extra kosten voor het voorrijden.</div>
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
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="quote" className="w-6 h-6 text-gray-400" />
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
                      <Icon key={i} name="star" className="w-4 h-4 text-yellow-400" />
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
              Veelgestelde vragen
            </h2>
            <p className="text-xl text-gray-600">
              Dit krijgen wij vaak gevraagd
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Wat is computerhulp aan huis?',
                a: 'Wij komen gewoon bij u thuis om uw computer, laptop, printer of WiFi te repareren of in te stellen. U hoeft nergens naartoe — wij nemen alles mee wat nodig is.'
              },
              {
                q: 'Wat nemen jullie mee bij een huisbezoek?',
                a: 'Onze IT-studenten nemen gereedschap, kabels, adapters en veelgebruikte onderdelen mee. Zo kunnen we de meeste problemen ter plekke oplossen, zonder dat uw apparaat mee hoeft.'
              },
              {
                q: 'Wat als mijn computer niet ter plekke gerepareerd kan worden?',
                a: 'Dat komt zelden voor, maar als het nodig is nemen we uw apparaat mee. We bespreken dat altijd eerst met u. Meestal heeft u het binnen een paar werkdagen terug.'
              },
              {
                q: 'Komen jullie ook in het weekend?',
                a: 'Ja, we zijn 7 dagen per week beschikbaar, ook in de avonduren tot 22:00 uur. Handig als u doordeweeks werkt. Geen extra kosten voor avond- of weekendbezoeken.'
              },
              {
                q: 'Kan ik ook even bellen voor een snelle vraag?',
                a: 'Natuurlijk. Bel gerust naar 085-8002006. Soms kunnen we een klein probleem al telefonisch oplossen. Is een bezoek nodig, dan plannen we dat meteen in.'
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-gray-900 hover:bg-gray-100 transition-colors">
                  {faq.q}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
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
              Waar we komen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij helpen mensen in meer dan 50 gemeenten in Zuid-Holland. Voorrijden is altijd gratis.
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
                <Icon name="location-pin" className="w-5 h-5 text-blue-600" strokeWidth={2} />
                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/locaties"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              Bekijk alle 50+ locaties
              <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
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
                Kunnen wij u ergens mee helpen?
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
                  <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
                </Link>

                <a
                  href="tel:+31858002006"
                  className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white px-10 py-5 rounded-full font-semibold text-lg border-2 border-white/30 hover:border-white/60 transition-all"
                >
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Icon name="check-circle" className="w-4 h-4 text-green-500" />
                  7 dagen per week
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="check-circle" className="w-4 h-4 text-green-500" />
                  Ook avonden
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="check-circle" className="w-4 h-4 text-green-500" />
                  Gratis voorrijkosten
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
    quote: 'Ik had al weken last van een trage computer. De monteur kwam \'s avonds langs en binnen een uur was alles weer snel. Hij legde ook uit hoe ik mijn pc schoon kan houden. Fijne service!',
    initials: 'A',
    name: 'Mevrouw Agnes',
    location: 'Zoetermeer'
  },
  {
    quote: 'Moest dringend bij mijn e-mail kunnen voor werk, maar Outlook deed het niet meer. Dezelfde dag nog geholpen, alles werkt weer perfect. Erg blij dat ze ook \'s avonds komen.',
    initials: 'R',
    name: 'De heer Rob',
    location: 'Vlaardingen'
  },
  {
    quote: 'Na een verhuizing werkten onze twee computers en de printer niet meer op het nieuwe netwerk. Alles in één bezoek weer aangesloten en werkend. Heel prettig dat ze aan huis komen.',
    initials: 'M',
    name: 'Mevrouw Marieke',
    location: 'Alphen aan den Rijn'
  }
]
