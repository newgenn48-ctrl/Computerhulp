import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Zuid-Holland | Binnen 24u bij u Thuis',
  description: 'Professionele computerhulp aan huis in Zuid-Holland. Binnen 24 uur bij u thuis voor computer, laptop, printer en WiFi. €10 voorrijkosten. Bel 085-8002006.',
  openGraph: {
    title: 'Computerhulp aan Huis Zuid-Holland | Binnen 24u bij u Thuis',
    description: 'Binnen 24 uur bij u thuis in Zuid-Holland. Computer, laptop, printer, WiFi problemen opgelost. €10 voorrijkosten. Bel 085-8002006',
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
        price: '14.99',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        availableDeliveryMethod: 'https://schema.org/OnSitePickup',
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
          minPrice: '44.97',
          description: 'Minimaal 3 kwartier (€44,97 totaal)'
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
      name: 'Computerhulp aan Huis Zuid-Holland | Binnen 24 Uur | €14,99',
      description: 'Computerhulp aan huis in heel Zuid-Holland. Computer, laptop, printer of WiFi problemen? Wij komen binnen 24 uur bij u thuis. €10 voorrijkosten.',
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
      dateModified: '2026-04-10',
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
        text: 'Onze computerhulp aan huis kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97 totaal). Voorrijden kost slechts €10 in heel Zuid-Holland.'
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
        text: 'We bieden computerhulp aan huis in heel Zuid-Holland, inclusief Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht, Alphen aan den Rijn en alle kleinere plaatsen. Overal met slechts €10 voorrijkosten.'
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
          <div className="hero-overlay-mobile"></div>
          {/* Desktop: subtle blue gradient to show photo */}
          <div className="hero-overlay-desktop-r"></div>
          <div className="hero-overlay-desktop-b"></div>
        </div>

        {/* Content */}
        <div className="hero-content">
          <div className="max-w-2xl">
            <h1 className="hero-title">
              Computerhulp aan Huis <span className="text-blue-600">Zuid-Holland</span>
            </h1>

            <p className="hero-description">
              <strong className="text-gray-900">Betrouwbare computerhulp aan huis</strong> in heel Zuid-Holland. Onze IT-studenten komen bij u thuis en lossen uw problemen <strong className="text-gray-900">snel en vakkundig</strong> op — zonder gedoe.
            </p>

            {/* USP Badges */}
            <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
              <span className="usp-badge">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                Binnen 24 uur bij u thuis
              </span>
              <span className="usp-badge">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                Ervaren IT-studenten
              </span>
              <span className="usp-badge">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                7 dagen per week
              </span>
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



      {/* Zo werkt het */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">Zo werkt het</h2>
          </div>

          {/* Mobile: compact lijst */}
          <div className="flex flex-col gap-4 sm:hidden">
            {[
              { step: '1', title: 'U neemt contact op', sub: 'Bel ons of plan online' },
              { step: '2', title: 'We komen bij u thuis', sub: 'Binnen 24 uur' },
              { step: '3', title: 'Probleem opgelost', sub: 'Betalen achteraf' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{item.title}</div>
                  <div className="text-sm sm:text-base text-gray-600">{item.sub}</div>
                </div>
                {idx < 2 && <Icon name="arrow-right" className="w-5 h-5 text-gray-300 ml-auto flex-shrink-0" strokeWidth={2} />}
              </div>
            ))}
          </div>

          {/* Desktop: horizontaal */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'U neemt contact op', sub: 'Bel ons of plan online' },
              { step: '2', title: 'We komen bij u thuis', sub: 'Binnen 24 uur' },
              { step: '3', title: 'Probleem opgelost', sub: 'Betalen achteraf' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection
        title="Onze diensten"
        showFeatures={false}
        limitServices={6}
        showAllButton={true}
      />

      {/* Pricing */}
      <PricingSection />

      {/* Waarom klanten voor ons kiezen */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Waarom klanten voor ons kiezen</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="clock" className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Binnen 24 uur bij u thuis</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Geen weken wachten. Meestal al de volgende dag.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="users" className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Ervaren IT-studenten</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Opgeleid en ervaren met alle soorten computerproblemen.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="home" className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Gewoon thuis blijven</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Wij komen bij u thuis en lossen het ter plekke op.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="shield" className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Betrouwbaar en veilig</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">KvK-geregistreerd en verzekerd. U bent in goede handen.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/afspraak-maken" className="btn-primary">
              Ook geholpen worden?
              <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
            </Link>
            <a href="tel:+31858002006" className="btn-secondary">
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 id="testimonials-heading" className="section-title">
              Wat onze klanten zeggen
            </h2>
            <p className="section-subtitle">
              Wij helpen dagelijks mensen in heel Zuid-Holland
            </p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">
              ← Swipe voor meer reviews →
            </p>
          </header>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Wat is computerhulp aan huis?', a: 'Wij komen gewoon bij u thuis om uw computer, laptop, printer of WiFi te repareren of in te stellen. U hoeft nergens naartoe — wij nemen alles mee wat nodig is.' },
              { q: 'Wat nemen jullie mee bij een huisbezoek?', a: 'Onze IT-studenten nemen gereedschap, kabels, adapters en veelgebruikte onderdelen mee. Zo kunnen we de meeste problemen ter plekke oplossen, zonder dat uw apparaat mee hoeft.' },
              { q: 'Wat als mijn computer niet ter plekke gerepareerd kan worden?', a: 'Dat komt zelden voor, maar als het nodig is nemen we uw apparaat mee. We bespreken dat altijd eerst met u. Meestal heeft u het binnen een paar werkdagen terug.' },
              { q: 'Komen jullie ook in het weekend?', a: 'Ja, we zijn 7 dagen per week beschikbaar, ook in de avonduren tot 22:00 uur. Handig als u doordeweeks werkt. Geen extra kosten voor avond- of weekendbezoeken.' },
              { q: 'Kan ik ook even bellen voor een snelle vraag?', a: 'Natuurlijk. Bel gerust naar 085-8002006. Soms kunnen we een klein probleem al telefonisch oplossen. Is een bezoek nodig, dan plannen we dat meteen in.' },
            ].map((faq, idx) => (
              <details key={idx} className="group faq-item">
                <summary className="faq-summary">
                  {faq.q}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0" strokeWidth={2} />
                </summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Waar we komen</h2>
            <p className="section-subtitle">
              Wij helpen mensen in meer dan 50 gemeenten in Zuid-Holland. Voorrijden kost slechts €10.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
                className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl p-3 sm:p-4 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <Icon name="location-pin" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" strokeWidth={2} />
                <span className="font-medium text-sm sm:text-base text-gray-900 group-hover:text-blue-600 transition-colors">{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locaties"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Bekijk alle 50+ locaties
              <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Kunnen wij u ergens mee helpen?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of stuur een berichtje. We komen graag bij u langs in Zuid-Holland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Afspraak Maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
            <a href="tel:+31858002006" className="btn-cta-dark">
              <Icon name="phone" className="w-7 h-7" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-300" />
              7 dagen per week
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-300" />
              Ook avonden
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-300" />
              Binnen 24 uur geholpen
            </span>
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
    name: 'Mevrouw Agnes'
  },
  {
    quote: 'Moest dringend bij mijn e-mail kunnen voor werk, maar Outlook deed het niet meer. Dezelfde dag nog geholpen, alles werkt weer perfect. Erg blij dat ze ook \'s avonds komen.',
    initials: 'R',
    name: 'De heer Rob'
  },
  {
    quote: 'Na een verhuizing werkten onze twee computers en de printer niet meer op het nieuwe netwerk. Alles in één bezoek weer aangesloten en werkend. Heel prettig dat ze aan huis komen.',
    initials: 'M',
    name: 'Mevrouw Marieke'
  },
  {
    quote: 'Mijn moeder van 82 kon niet meer bij haar foto\'s. De monteur heeft alles weer werkend gemaakt en het haar rustig uitgelegd. Ze belt nu zelf met haar kleinkinderen!',
    initials: 'K',
    name: 'De heer Karel'
  },
  {
    quote: 'Computer gaf vreemde foutmeldingen en was ontzettend langzaam. Bleek vol met rommel te zitten. Na het bezoek start hij weer op in 30 seconden. Verschil van dag en nacht!',
    initials: 'J',
    name: 'Mevrouw José'
  },
  {
    quote: 'WiFi reikte niet tot de slaapkamer. De monteur heeft een mesh-systeem geïnstalleerd en nu heb ik overal bereik. Zelfs in de tuin! Heel blij mee.',
    initials: 'D',
    name: 'De heer Dick'
  },
  {
    quote: 'Nieuwe laptop gekocht maar wist niet hoe ik alles moest overzetten. Binnen twee uur stonden al mijn bestanden, foto\'s en programma\'s erop. Heel handig!',
    initials: 'L',
    name: 'Mevrouw Lies'
  },
  {
    quote: 'Printer en scanner deden het allebei niet meer. Was al drie keer naar de winkel geweest. De monteur had het in een kwartier opgelost. Scheelde mij weer een rit!',
    initials: 'H',
    name: 'De heer Herman'
  }
]
