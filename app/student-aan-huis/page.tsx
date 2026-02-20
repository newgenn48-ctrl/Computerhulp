import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection'
import ExtraBenefitsSection from '@/components/ExtraBenefitsSection'

export const metadata: Metadata = {
  title: 'Student aan Huis | IT-Studenten Binnen 24u',
  description: 'Student aan huis voor computerhulp in Zuid-Holland. Geduldige IT-studenten binnen 24 uur bij u thuis. Gratis voorrijkosten, ook in het weekend. Bel 085-8002006.',
  openGraph: {
    title: 'Student aan Huis | IT-Studenten Binnen 24u',
    description: 'Jonge, geduldige IT-studenten binnen 24u bij u thuis. Geduldig uitleggen, rustig helpen. Vanaf €43,50. Bel 085-8002006',
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
      description: 'Jonge, geduldige IT-studenten komen bij u thuis voor computerhulp. Vanaf €43,50. Bel 085-8002006.',
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
        text: 'Een student aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Voorrijden is gratis in heel Zuid-Holland. Dezelfde prijs als reguliere computerhulp.'
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
        text: 'Onze studenten komen in heel Zuid-Holland bij u thuis. Dit omvat Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht en nog 50+ andere gemeenten. Overal zonder voorrijkosten.'
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
          <div className="absolute inset-0 bg-blue-50/70 md:hidden"></div>
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-blue-50/90 via-blue-50/60 to-transparent"></div>
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-blue-50/30 via-transparent to-blue-50/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 md:pb-20 min-h-[70vh] md:min-h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Student aan Huis
              <span className="block text-blue-600">Zuid-Holland</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed max-w-xl">
              <strong className="text-gray-900">Betrouwbare student aan huis</strong> voor computerhulp in Zuid-Holland. Onze IT-studenten komen bij u thuis en lossen uw problemen <strong className="text-gray-900">geduldig en vakkundig</strong> op — zonder gedoe.
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
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
              >
                Hulp aanvragen
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
              </Link>
              <a
                href="tel:+31858002006"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 transition-all hover:scale-105"
              >
                <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
                Bel 085-8002006
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* 3. Services overview */}
      <ServicesSection
        title="Waar we u mee helpen"
        description="Van een simpele vraag tot een lastig probleem — onze IT-studenten helpen u graag"
        showFeatures={true}
        limitServices={6}
        showAllButton={true}
      />

      {/* 4. How it works */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Zo werkt het
            </h2>
            <p className="text-lg text-gray-600">
              In vier stappen — simpel en overzichtelijk
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                U belt of mailt ons
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vertel kort wat er aan de hand is. Gewoon even bellen of een berichtje sturen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                We spreken een moment af
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Samen zoeken we een tijdstip dat u uitkomt. Meestal kan het al de volgende dag.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                We komen bij u thuis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Onze IT-student komt langs en gaat rustig aan de slag. U kijkt gewoon mee.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6 shadow-xl">
                ✓
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
      <PricingSection benefits={[
        'Gratis voorrijkosten in heel Zuid-Holland',
        'Ook \'s avonds en in het weekend beschikbaar',
        'Betalen via pin, contant of Tikkie'
      ]} />

      {/* 5.5 SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Waarom mensen ons bellen
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Student aan huis</strong> — een IT-student komt bij u thuis voor hulp met uw computer, laptop of internet. Onze studenten zijn geduldig, nemen de tijd en leggen alles rustig uit in gewone taal. In heel Zuid-Holland.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Wat maakt onze studenten anders?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Onze IT-studenten volgen een technische opleiding en weten hoe de nieuwste apparaten en software werken. Ze nemen de tijd, leggen alles rustig uit en helpen u op een manier die bij u past. Of het nu gaat om uw smartphone, laptop of thuisnetwerk.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} />
                <span className="text-gray-700">
                  <strong>Actuele kennis:</strong> Onze studenten weten hoe de nieuwste apparaten en apps werken
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} />
                <span className="text-gray-700">
                  <strong>Rustig uitleggen:</strong> Ze nemen de tijd en leggen alles uit in gewone taal
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} />
                <span className="text-gray-700">
                  <strong>Betaalbaar:</strong> €14,50 per kwartier, gratis voorrijkosten in heel Zuid-Holland
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} />
                <span className="text-gray-700">
                  <strong>Overal in Zuid-Holland:</strong> Van Den Haag tot Dordrecht, van Leiden tot Gouda
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={2} />
                <span className="text-gray-700">
                  <strong>Flexibel:</strong> Ook &apos;s avonds en in het weekend, wanneer het u uitkomt
                </span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Kunnen wij u helpen? Bel gerust <a href="tel:+31858002006" className="text-blue-600 hover:text-blue-800 font-semibold">085-8002006</a> of
              <Link href="/afspraak-maken" className="text-blue-600 hover:text-blue-800 font-semibold"> maak een afspraak online</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat onze klanten zeggen
            </h2>
            <p className="text-lg text-gray-600">
              Wij helpen dagelijks mensen in heel Zuid-Holland
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" className="w-5 h-5 text-yellow-400" />
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
              Veelgestelde vragen
            </h2>
            <p className="text-lg text-gray-600">
              Dit krijgen wij vaak gevraagd
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Wat is student aan huis?',
                a: 'Een IT-student komt bij u thuis om te helpen met uw computer, laptop of internet. Onze studenten zijn geduldig, nemen de tijd en leggen alles rustig uit.'
              },
              {
                q: 'Wat is het verschil met gewone computerhulp?',
                a: 'Onze studenten volgen een technische opleiding en weten hoe de nieuwste apparaten werken. Ze nemen de tijd om alles uit te leggen. Dezelfde kwaliteit en prijs, maar met een frisse aanpak.'
              },
              {
                q: 'Wat kost een student aan huis?',
                a: 'U betaalt €14,50 per kwartier, met een minimum van drie kwartier (€43,50). Voorrijden is gratis in heel Zuid-Holland. Betalen doet u achteraf — via pin, contant of Tikkie.'
              },
              {
                q: 'Weten de studenten wel genoeg?',
                a: 'Ja, onze IT-studenten zijn goed opgeleid en hebben ervaring. Ze studeren IT of Informatica en weten hoe de nieuwste apparaten en software werken.'
              },
              {
                q: 'Waar komen jullie?',
                a: 'In heel Zuid-Holland: Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht en meer dan 50 andere gemeenten. Voorrijden is altijd gratis.'
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Waar we komen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wij helpen mensen in meer dan 50 gemeenten in Zuid-Holland
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
              Bekijk alle locaties
              <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
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
            Kunnen wij u helpen?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Bel ons gerust of stuur een berichtje. We komen graag bij u langs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-2xl shadow-xl shadow-blue-600/25 hover:scale-105 transition-all"
            >
              <Icon name="chat" className="w-8 h-8" strokeWidth={2} />
              Hulp vragen
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
            Ma-Zo: 08:00 - 22:00 • Ook avonden en weekenden • Gratis voorrijkosten
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
