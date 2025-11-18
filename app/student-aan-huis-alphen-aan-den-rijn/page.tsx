import { Metadata } from 'next'
import Link from 'next/link'
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection'
import ExtraBenefitsSection from '@/components/ExtraBenefitsSection'
import NearbyCities from '@/components/NearbyCities'

export const metadata: Metadata = {
  title: 'Student aan Huis Alphen aan den Rijn | IT-Student Binnen 24u',
  description: '🎓 Student aan huis in Alphen aan den Rijn. Jonge, geduldige IT-studenten binnen 24u bij u thuis! ✓ Computer, laptop, WiFi hulp ✓ Rustig uitleggen ✓ Vanaf €43,50. Bel 06-42548451.',
  openGraph: {
    title: 'Student aan Huis Alphen aan den Rijn | IT-Studenten Binnen 24u',
    description: 'Jonge, geduldige IT-studenten binnen 24u bij u thuis in Alphen aan den Rijn. Geduldig uitleggen, rustig helpen. Vanaf €43,50. Bel 06-42548451',
    type: 'website',
    url: 'https://computerhulpzh.nl/student-aan-huis-alphen-aan-den-rijn',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/student-aan-huis-alphen-aan-den-rijn',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://computerhulpzh.nl/#organization',
      name: 'Computerhulp Alphen aan den Rijn',
      url: 'https://computerhulpzh.nl',
      telephone: '+31642548451',
      email: 'info@computerhulpzh.nl',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://computerhulpzh.nl/#logo',
        url: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
        contentUrl: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
        caption: 'Computerhulp Alphen aan den Rijn Logo'
      },
      image: {
        '@type': 'ImageObject',
        '@id': 'https://computerhulpzh.nl/#primaryImage',
        url: 'https://computerhulpzh.nl/og-image.jpg',
        contentUrl: 'https://computerhulpzh.nl/og-image.jpg',
        caption: 'Computerhulp Alphen aan den Rijn - Student aan Huis Alphen aan den Rijn'
      },
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Alphen aan den Rijn',
        addressCountry: 'NL'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '52.1285',
        longitude: '4.6573'
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
        name: 'Alphen aan den Rijn'
      }
    },
    {
      '@type': 'Service',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#service',
      serviceType: 'Student aan Huis Computerhulp',
      name: 'Student aan Huis - Computerhulp door IT-Studenten',
      description: 'Computerhulp door jonge IT-studenten aan huis in Alphen aan den Rijn. Geduldig, betaalbaar en kundig. Perfect voor wie liever met een jongere werkt.',
      url: 'https://computerhulpzh.nl/student-aan-huis-alphen-aan-den-rijn',
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
        }}
    },
    {
      '@type': 'WebPage',
      '@id': 'https://computerhulpzh.nl/student-aan-huis#webpage',
      url: 'https://computerhulpzh.nl/student-aan-huis-alphen-aan-den-rijn',
      name: 'Student aan Huis | Computerhulp Alphen aan den Rijn',
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
      dateModified: '2025-01-08',
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
        text: 'Een student aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in heel Alphen aan den Rijn. Dezelfde prijs als reguliere computerhulp.'
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
        name: 'Computerhulp Alphen aan den Rijn'
      }
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Student aan Huis Alphen aan den Rijn',
      item: {
        '@id': 'https://computerhulpzh.nl/student-aan-huis-alphen-aan-den-rijn',
        name: 'Student aan Huis Alphen aan den Rijn'
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

      {/* 1. Hero Section - Problem + solution */}
      <section className="relative text-white pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/Student%20aan%20huis.webp)',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-slate-900/85"></div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span className="text-sm font-medium text-blue-100">
                Jonge IT-Studenten aan Huis
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{
                color: 'white',
                background: 'none',
                WebkitTextFillColor: 'white',
                backgroundClip: 'unset',
                WebkitBackgroundClip: 'unset'
              }}
            >
              Student aan huis<br/>
              in Alphen aan den Rijn
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Hulp nodig met computer, laptop of internet? Onze jonge IT-studenten komen bij u thuis
              in <strong className="text-white">Alphen aan den Rijn</strong>. Geduldig uitleggen, rustig helpen.
              Perfect voor wie liever met een jongere werkt!
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Jong & Energiek</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Geduldig Uitleggen</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Moderne Kennis</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+31642548451"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Direct
              </a>
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                Afspraak Maken
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* 3. Services overview - compact */}
      <ServicesSection
        title="Waar Onze Studenten U Mee Helpen"
        description="Van simpel tot complex - onze IT-studenten helpen overal mee"
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
        'Geen voorrijkosten in heel Alphen aan den Rijn',
        'Ook avonds en in het weekend beschikbaar',
        'Betalen via pin, contant of Tikkie',
        'Jong maar zeer kundig',
        'Geduldig uitleggen inbegrepen'
      ]} />

      {/* 5.5 SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Waarom Kiezen Voor Student aan Huis in Alphen aan den Rijn?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Student aan huis</strong> is een unieke vorm van computerhulp waarbij jonge IT-studenten
              bij u thuis komen voor computer, laptop en internet problemen. In heel Alphen aan den Rijn bieden wij
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
              De grote voordelen van student aan huis computerhulp in Alphen aan den Rijn zijn duidelijk:
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
                  <strong>Heel Alphen aan den Rijn:</strong> Van Den Haag tot Rotterdam, van Leiden tot Delft -
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
              enthousiaste IT-professionals. Bel vandaag nog <a href="tel:+31642548451" className="text-blue-600 hover:text-blue-800 font-semibold">06-42548451</a> en
              ontdek waarom zoveel mensen in Alphen aan den Rijn vertrouwen op onze student aan huis service.
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

      {/* 7. Extra benefits / reassurance */}
      <ExtraBenefitsSection />

      {/* 8. Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Klaar Voor Een Student aan Huis?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Bel nu en we sturen een jonge IT-student bij u langs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+31642548451"
              className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-2xl shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06-42548451
            </a>

            <Link
              href="/afspraak-maken"
              className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:scale-105 transition-all border-2 border-white/30"
            >
              Of Plan een Afspraak
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="text-blue-100 text-sm">
            Ma-Zo: 08:00 - 22:00 • Ook avonden en weekenden • Geen voorrijkosten
          </div>
        </div>
      </section>
      <NearbyCities currentCity="alphen-aan-den-rijn" pageType="student-aan-huis" />

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
