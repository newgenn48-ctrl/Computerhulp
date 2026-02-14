import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import PricingSection from '@/components/PricingSection'
import ExtraBenefitsSection from '@/components/ExtraBenefitsSection'
import NearbyCities from '@/components/NearbyCities'
import ServicesSection from '@/components/ServicesSection'
import { City } from '@/lib/cities'

interface StudentCityPageTemplateProps {
  city: City
}

// Metadata generator - used by all 52 city page files
export function generateStudentPageMetadata(city: City): Metadata {
  return {
    title: `Student aan Huis ${city.name} | IT Hulp aan Huis | Vanaf €43,50`,
    description: `Student aan huis in ${city.name} voor computerhulp, laptophulp en IT-problemen. IT-studenten komen binnen 24 uur bij u thuis. Geen voorrijkosten. Bel 085-8002006.`,
    keywords: `student aan huis ${city.name}, IT-student ${city.name}, computerhulp aan huis ${city.name}, laptophulp ${city.name}, pc-hulp ${city.name}, hulp bij computerproblemen ${city.name}, Zuid-Holland`,
    openGraph: {
      title: `Student aan Huis ${city.name} | IT Hulp aan Huis`,
      description: `Student aan huis in ${city.name}. Computerhulp door IT-studenten. Binnen 24 uur, geen voorrijkosten. Bel 085-8002006.`,
      type: 'website',
      url: `https://computerhulpzh.nl/student-aan-huis-${city.slug}`,
    },
    alternates: {
      canonical: `https://computerhulpzh.nl/student-aan-huis-${city.slug}`,
    },
  }
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

function generateStructuredData(city: City) {
  const baseUrl = 'https://computerhulpzh.nl'
  const pageUrl = `${baseUrl}/student-aan-huis-${city.slug}`
  const serviceName = `Student aan Huis ${city.name}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#organization`,
        name: 'Computerhulp Zuid-Holland',
        url: baseUrl,
        telephone: '+31858002006',
        email: 'info@computerhulpzh.nl',
        logo: {
          '@type': 'ImageObject',
          '@id': `${baseUrl}/#logo`,
          url: `${baseUrl}/Computerhulp%20Zuid%20Holland%20Logo.webp`,
          contentUrl: `${baseUrl}/Computerhulp%20Zuid%20Holland%20Logo.webp`,
          caption: 'Computerhulp Zuid-Holland Logo'
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Zuid-Holland',
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
        image: `${baseUrl}/Student%20aan%20huis.webp`,
        description: `Computerhulp aan huis door IT-studenten in ${city.name} en omgeving. Hulp bij computer, laptop, tablet, smartphone en internet.`,
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
        description: `IT-studenten komen bij u thuis in ${city.name} voor computerhulp. Hulp bij laptop, pc, tablet en smartphoneproblemen. Binnen 24 uur, geen voorrijkosten.`,
        url: pageUrl,
        provider: { '@id': `${baseUrl}/#organization` },
        areaServed: { '@type': 'City', name: city.name },
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
            description: 'Minimaal 3 kwartier (EUR 43,50 totaal)'
          }
        }
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${serviceName} | IT Hulp aan Huis | Vanaf €43,50`,
        description: `Student aan huis in ${city.name}. IT-studenten komen bij u thuis voor computerhulp. Binnen 24 uur, geen voorrijkosten.`,
        about: { '@id': `${pageUrl}#service` },
        isPartOf: { '@id': `${baseUrl}/#website` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${baseUrl}/Student%20aan%20huis.webp`
        },
        datePublished: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        inLanguage: 'nl-NL'
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: generateFaqQuestions(city)
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Computerhulp Zuid-Holland',
        publisher: { '@id': `${baseUrl}/#organization` },
        inLanguage: 'nl-NL'
      },
      {
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
            name: 'Student aan Huis',
            item: `${baseUrl}/student-aan-huis`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `Student aan Huis ${city.name}`,
            item: pageUrl
          }
        ]
      }
    ]
  }
}

function generateFaqQuestions(city: City) {
  const baseUrl = 'https://computerhulpzh.nl'
  const pageUrl = `${baseUrl}/student-aan-huis-${city.slug}`

  return [
    {
      '@type': 'Question',
      '@id': `${pageUrl}#faq-1`,
      name: `Wat kost student aan huis in ${city.name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Student aan huis in ${city.name} kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in ${city.name} en omgeving. U betaalt na afloop via pin, contant of Tikkie.`
      }
    },
    {
      '@type': 'Question',
      '@id': `${pageUrl}#faq-2`,
      name: `Hoe snel kan een IT-student in ${city.name} langskomen?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `In de meeste gevallen kunnen onze IT-studenten binnen 24 uur bij u thuis zijn in ${city.name}. Bij urgente problemen proberen we dezelfde dag langs te komen. We zijn 7 dagen per week beschikbaar, ook 's avonds.`
      }
    },
    {
      '@type': 'Question',
      '@id': `${pageUrl}#faq-3`,
      name: 'Waar helpen jullie IT-studenten mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze IT-studenten helpen met laptop- en computerproblemen, WiFi en internet, printers, e-mail, tablets en smartphones, smart home-apparaten en persoonlijke training. Van trage computers tot nieuwe apparaten instellen.'
      }
    },
    {
      '@type': 'Question',
      '@id': `${pageUrl}#faq-4`,
      name: 'Hoe werkt de betaling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U betaalt na afloop van het bezoek. Dit kan via pin, contant of Tikkie. U krijgt vooraf een inschatting van de tijd, zodat u weet waar u aan toe bent. Geen verborgen kosten, geen abonnementen.'
      }
    },
    {
      '@type': 'Question',
      '@id': `${pageUrl}#faq-5`,
      name: `Komen jullie ook 's avonds en in het weekend in ${city.name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Ja, onze IT-studenten zijn 7 dagen per week beschikbaar in ${city.name}, ook 's avonds tot 22:00 uur. Perfect als u overdag werkt en 's avonds of in het weekend hulp nodig heeft.`
      }
    }
  ]
}

const faqDisplayData = [
  {
    question: (city: City) => `Wat kost student aan huis in ${city.name}?`,
    answer: (city: City) => `Student aan huis in ${city.name} kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in ${city.name} en omgeving. U betaalt na afloop via pin, contant of Tikkie.`
  },
  {
    question: (city: City) => `Hoe snel kan een IT-student in ${city.name} langskomen?`,
    answer: (city: City) => `In de meeste gevallen kunnen onze IT-studenten binnen 24 uur bij u thuis zijn in ${city.name}. Bij urgente problemen proberen we dezelfde dag langs te komen. We zijn 7 dagen per week beschikbaar, ook 's avonds.`
  },
  {
    question: () => 'Waar helpen jullie IT-studenten mee?',
    answer: () => 'Onze IT-studenten helpen met laptop- en computerproblemen, WiFi en internet, printers, e-mail, tablets en smartphones, smart home-apparaten en persoonlijke training. Van trage computers tot nieuwe apparaten instellen.'
  },
  {
    question: () => 'Hoe werkt de betaling?',
    answer: () => 'U betaalt na afloop van het bezoek. Dit kan via pin, contant of Tikkie. U krijgt vooraf een inschatting van de tijd, zodat u weet waar u aan toe bent. Geen verborgen kosten, geen abonnementen.'
  },
  {
    question: (city: City) => `Komen jullie ook 's avonds en in het weekend in ${city.name}?`,
    answer: (city: City) => `Ja, onze IT-studenten zijn 7 dagen per week beschikbaar in ${city.name}, ook 's avonds tot 22:00 uur. Perfect als u overdag werkt en 's avonds of in het weekend hulp nodig heeft.`
  }
]

export default function StudentCityPageTemplate({ city }: StudentCityPageTemplateProps) {
  const structuredData = generateStructuredData(city)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Student aan huis.webp"
            alt={`IT-student helpt klant thuis met computer in ${city.name}`}
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
              <span className="block text-blue-600">{city.name}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed max-w-xl">
              <strong className="text-gray-900">Student aan huis in {city.name}</strong> voor computerhulp, laptophulp en IT-problemen.
              Onze IT-studenten komen bij u thuis en lossen het <strong className="text-gray-900">geduldig en vakkundig</strong> op.
              Binnen 24 uur geholpen.
            </p>

            {/* USP Badges */}
            <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
              {['Binnen 24 uur geholpen', 'Geen voorrijkosten', '7 dagen per week', 'Vanaf €43,50'].map((usp) => (
                <span key={usp} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {usp}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
              >
                Hulp Aanvragen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+31858002006"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection
        title={`Waar We U Mee Helpen in ${city.name}`}
        description="Van laptopproblemen tot smart home-installatie — onze IT-studenten helpen u met alle technische vragen"
        showFeatures={true}
        limitServices={6}
        showAllButton={true}
      />

      {/* How it works */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hoe Student aan Huis Werkt in {city.name}
            </h2>
            <p className="text-lg text-gray-600">
              In 4 stappen van probleem naar oplossing
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Neem Contact Op</h3>
              <p className="text-gray-600 leading-relaxed">
                Bel ons of vraag online hulp aan. Vertel kort wat er aan de hand is - we stellen een paar vragen om het probleem te begrijpen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kies Uw Moment</h3>
              <p className="text-gray-600 leading-relaxed">
                We plannen een afspraak op een moment dat u uitkomt. Vaak al dezelfde dag of de volgende dag. U kiest zelf het tijdstip.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Komt Langs</h3>
              <p className="text-gray-600 leading-relaxed">
                Onze IT-student komt bij u thuis in {city.name}. U kijkt mee terwijl het probleem wordt opgelost en stap voor stap uitgelegd.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6 shadow-xl">
                &#10003;
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Probleem Opgelost</h3>
              <p className="text-gray-600 leading-relaxed">
                Uw apparaat werkt weer en u weet precies wat er gedaan is. Betalen na afloop - geen verborgen kosten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection benefits={[
        `Geen voorrijkosten in ${city.name}`,
        'Eerlijke inschatting vooraf, geen verrassingen',
        'Ook \'s avonds en in het weekend beschikbaar',
        'Betalen via pin, contant of Tikkie'
      ]} />

      {/* Waarom Kiezen - SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Waarom Kiezen Voor Student aan Huis in {city.name}?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Student aan huis in {city.name}</strong> werkt anders dan u misschien gewend bent.
              U belt, we plannen samen een moment dat u uitkomt, en een IT-student komt bij u thuis.
              Geen ingewikkelde procedures, geen abonnementen. Gewoon iemand die uw{' '}
              <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:text-blue-800 font-medium">
                computer of laptop
              </Link>,{' '}
              <Link href="/diensten/tablet-smartphone-hulp" className="text-blue-600 hover:text-blue-800 font-medium">
                tablet
              </Link>{' '}of{' '}
              <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:text-blue-800 font-medium">
                internetprobleem
              </Link>{' '}oplost en uitlegt wat er aan de hand was.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Onze IT-studenten volgen actuele technische opleidingen en zijn vertrouwd met de nieuwste
              apparaten, software en apps. Ze nemen de tijd om rustig uit te leggen wat ze doen en waarom -
              in begrijpelijke taal, zonder vakjargon.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Wat u kunt verwachten
            </h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>U houdt de regie:</strong> U bepaalt wanneer, hoe lang en wat er gedaan wordt. Geen verplichtingen, geen abonnementen.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Vooraf duidelijkheid:</strong> U krijgt een inschatting van de tijd en kosten voordat we beginnen. Geen verrassingen achteraf.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Rustig uitgelegd:</strong> Onze studenten leggen stap voor stap uit wat ze doen. U leert er zelf ook van.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Betalen achteraf:</strong> Pas na afloop betalen via pin, contant of Tikkie. Geen voorrijkosten in {city.name}.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Breed inzetbaar:</strong> Van{' '}
                  <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:text-blue-800">printerproblemen</Link> tot{' '}
                  <Link href="/diensten/smart-home-domotica" className="text-blue-600 hover:text-blue-800">smart home-installatie</Link>,{' '}
                  <Link href="/diensten/email-hulp" className="text-blue-600 hover:text-blue-800">e-mailhulp</Link> en{' '}
                  <Link href="/diensten/dataherstel-backup" className="text-blue-600 hover:text-blue-800">dataherstel</Link>.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Hulp nodig met uw computer, laptop of ander apparaat in {city.name}? Bel{' '}
              <a href="tel:+31858002006" className="text-blue-600 hover:text-blue-800 font-semibold">085-8002006</a>{' '}
              of{' '}
              <Link href="/afspraak-maken" className="text-blue-600 hover:text-blue-800 font-semibold">vraag online een afspraak aan</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - visible */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen
            </h2>
            <p className="text-lg text-gray-600">
              Over student aan huis in {city.name}
            </p>
          </div>

          <div className="space-y-4">
            {faqDisplayData.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {faq.question(city)}
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer(city)}
                </div>
              </details>
            ))}
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
                <div className="flex items-center gap-1 mb-4" role="img" aria-label="5 van 5 sterren">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
            Bel nu of vraag online hulp aan - vaak al dezelfde dag geholpen
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-2xl shadow-xl shadow-blue-600/25 hover:scale-105 transition-all"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Hulp Aanvragen
            </Link>

            <a
              href="tel:+31858002006"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-blue-600 px-10 py-5 rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition-all border-2 border-blue-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel Direct
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            Ma-Zo: 08:00 - 22:00 | Ook avonden en weekenden | Geen voorrijkosten in {city.name}
          </div>
        </div>
      </section>

      {/* Cross-link to computerhulp version */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Computerhulp in {city.name}
          </h2>
          <p className="text-gray-600 mb-6">
            Bekijk ook onze andere diensten in {city.name} en omgeving:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/computerhulp-aan-huis-${city.slug}`}
              className="bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              Computerhulp aan Huis {city.name}
            </Link>
            <Link
              href="/diensten/computer-laptop-hulp"
              className="bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              Computer & Laptop Hulp
            </Link>
            <Link
              href="/diensten/wifi-internet-hulp"
              className="bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              WiFi & Internet Hulp
            </Link>
            <Link
              href="/diensten/tablet-smartphone-hulp"
              className="bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              Tablet & Smartphone Hulp
            </Link>
            <Link
              href="/diensten/persoonlijke-training"
              className="bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              Persoonlijke Training
            </Link>
            <Link
              href="/student-aan-huis"
              className="bg-blue-50 px-4 py-2 rounded-full text-sm font-medium text-blue-600 border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              Alle locaties Student aan Huis →
            </Link>
          </div>
        </div>
      </section>

      <NearbyCities currentCity={city.slug} pageType="student-aan-huis" />
    </>
  )
}
