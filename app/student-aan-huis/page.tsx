import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

export const metadata: Metadata = {
  title: 'Student aan Huis Zuid-Holland | IT-Hulp Binnen 24u bij u Thuis',
  description: 'IT-student aan huis in Zuid-Holland. Geduldige studenten helpen met computer, laptop, WiFi en meer. Binnen 24 uur, €10 voorrijkosten. Bel 085-8002006.',
  openGraph: {
    title: 'Student aan Huis Zuid-Holland | IT-Hulp Binnen 24u bij u Thuis',
    description: 'IT-student aan huis in Zuid-Holland. Geduldige studenten helpen met computer, laptop, WiFi en meer. Binnen 24 uur, €10 voorrijkosten. Bel 085-8002006.',
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
          name: 'Dordrecht',
          '@id': 'https://www.wikidata.org/wiki/Q26421'
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
        price: '14.99',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
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
      }
    },
    {
      '@type': 'WebPage',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#webpage',
      url: 'https://computerhulpzh.nl/student-aan-huis',
      name: 'Student aan Huis | Computerhulp Zuid-Holland',
      description: 'Jonge, geduldige IT-studenten komen bij u thuis voor computerhulp. Vanaf €44,97. Bel 085-8002006.',
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
        text: 'Een student aan huis kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97 totaal). Voorrijden kost slechts €10 in heel Zuid-Holland. Dezelfde prijs als reguliere computerhulp.'
      }
    },
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#faq-kundig',
      name: 'Zijn de studenten wel kundig genoeg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absoluut! Onze IT-studenten zijn goed opgeleid en hebben ruime ervaring. Ze studeren IT of Informatica en zijn up-to-date met de nieuwste technieken. Perfect voor alle computer-, laptop- en internetproblemen.'
      }
    },
    {
      '@type': 'Question',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#faq-plaatsen',
      name: 'In welke plaatsen komt een student aan huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze studenten komen in heel Zuid-Holland bij u thuis. Dit omvat Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht en nog 50+ andere gemeenten. Overal met slechts €10 voorrijkosten.'
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

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Student aan huis.webp"
            alt="Student aan huis helpt klant met computer"
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
              Student aan Huis <span className="text-blue-600">Zuid-Holland</span>
            </h1>

            <p className="hero-description">
              <strong className="text-gray-900">Betrouwbare student aan huis</strong> voor computerhulp in Zuid-Holland. Onze IT-studenten komen bij u thuis en lossen uw problemen <strong className="text-gray-900">geduldig en vakkundig</strong> op — zonder gedoe.
            </p>

            {/* USP Badges */}
            <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
              <span className="usp-badge">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                Binnen 24 uur bij u thuis
              </span>
              <span className="usp-badge">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                Geduldig en duidelijk
              </span>
              <span className="usp-badge">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                7 dagen per week
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/afspraak-maken" className="btn-primary">
                Hulp aanvragen
                <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
              </Link>
              <a href="tel:+31858002006" className="btn-secondary">
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

          <div className="flex flex-col gap-4 sm:hidden">
            {[
              { step: '1', title: 'U neemt contact op', sub: 'Bel ons of plan online' },
              { step: '2', title: 'We komen bij u thuis', sub: 'Binnen 24 uur' },
              { step: '3', title: 'Probleem opgelost', sub: 'Betalen achteraf' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">{item.step}</div>
                <div>
                  <div className="font-bold text-gray-900">{item.title}</div>
                  <div className="text-sm sm:text-base text-gray-600">{item.sub}</div>
                </div>
                {idx < 2 && <Icon name="arrow-right" className="w-5 h-5 text-gray-300 ml-auto flex-shrink-0" strokeWidth={2} />}
              </div>
            ))}
          </div>

          <div className="hidden sm:grid sm:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'U neemt contact op', sub: 'Bel ons of plan online' },
              { step: '2', title: 'We komen bij u thuis', sub: 'Binnen 24 uur' },
              { step: '3', title: 'Probleem opgelost', sub: 'Betalen achteraf' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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
            <h2 className="section-title">Waarom een student aan huis kiezen?</h2>
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
                <h3 className="font-bold text-gray-900 mb-1">Geduldige IT-studenten</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Nemen de tijd en leggen alles uit in gewone taal.</p>
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
            <h2 id="testimonials-heading" className="section-title">Wat onze klanten zeggen</h2>
            <p className="section-subtitle">Wij helpen dagelijks mensen in heel Zuid-Holland</p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">← Swipe voor meer reviews →</p>
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
              { q: 'Wat is student aan huis?', a: 'Een IT-student komt bij u thuis om te helpen met uw computer, laptop of internet. Onze studenten zijn geduldig, nemen de tijd en leggen alles rustig uit.' },
              { q: 'Wat is het verschil met gewone computerhulp?', a: 'Onze studenten volgen een technische opleiding en weten hoe de nieuwste apparaten werken. Ze nemen de tijd om alles uit te leggen. Dezelfde kwaliteit en prijs, maar met een frisse aanpak.' },
              { q: 'Wat kost een student aan huis?', a: 'U betaalt €14,99 per kwartier, met een minimum van drie kwartier (€44,97). Voorrijden kost slechts €10 in heel Zuid-Holland. Betalen doet u achteraf via pin of Tikkie.' },
              { q: 'Weten de studenten wel genoeg?', a: 'Ja, onze IT-studenten zijn goed opgeleid en hebben ervaring. Ze studeren IT of Informatica en weten hoe de nieuwste apparaten en software werken.' },
              { q: 'Waar komen jullie?', a: 'In heel Zuid-Holland: Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht en meer dan 50 andere gemeenten. Voorrijden kost slechts €10.' },
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
            <p className="section-subtitle">Wij helpen mensen in meer dan 50 gemeenten in Zuid-Holland. Voorrijden kost slechts €10.</p>
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
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/student-aan-huis-${city.slug}`}
                className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl p-3 sm:p-4 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <Icon name="location-pin" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" strokeWidth={2} />
                <span className="font-medium text-sm sm:text-base text-gray-900 group-hover:text-blue-600 transition-colors">{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/locaties" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
              Bekijk alle locaties
              <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Kunnen wij u helpen?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Bel ons gerust of stuur een berichtje. We komen graag bij u langs.</p>
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
    quote: 'Zo fijn om door een jongere geholpen te worden! Hij legde alles uit op een manier die ik begreep. En zo geduldig!',
    initials: 'EJ',
    name: 'Mevrouw De Jong'
  },
  {
    quote: 'Onze kleinzoon studeert ook IT. Deze jongen had dezelfde energie. Alles werkt nu en ik snapte zijn uitleg perfect.',
    initials: 'HV',
    name: 'Henk V.'
  },
  {
    quote: 'Student aan huis was perfect! Modern, snel en enthousiast. Mijn laptop is weer als nieuw. Aanrader!',
    initials: 'MB',
    name: 'Maria B.'
  },
  {
    quote: 'De student heeft mij leren werken met mijn nieuwe iPhone. Contacten overgezet, WhatsApp geïnstalleerd en uitgelegd hoe de camera werkt. Heel leerzaam!',
    initials: 'GR',
    name: 'Mevrouw Greetje'
  },
  {
    quote: 'Ik durfde niet meer online te bankieren na een phishing mail. De student heeft alles gecontroleerd en mij tips gegeven om veilig te blijven. Heel fijn!',
    initials: 'WB',
    name: 'De heer Wim'
  },
  {
    quote: 'Mijn tablet was zo vol dat er niks meer op kon. De student heeft alles opgeruimd en laten zien hoe ik foto\'s naar de cloud kan verplaatsen. Top!',
    initials: 'NK',
    name: 'Mevrouw Nel'
  },
  {
    quote: 'Zoom en Teams werkten niet goed voor mijn bridgeclub online. Na het bezoek kan ik probleemloos meedoen. Heel blij!',
    initials: 'RP',
    name: 'De heer Ruud'
  },
  {
    quote: 'De student heeft ons geholpen met het instellen van een slim deurslot en de Ring deurbel. Nu kunnen we alles bedienen vanaf onze telefoon. Geweldig!',
    initials: 'AB',
    name: 'Mevrouw Annie'
  }
]
