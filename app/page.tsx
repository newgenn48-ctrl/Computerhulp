import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Icon } from '@/components/icons'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import ServicesSection from '@/components/ServicesSection'

const PricingSection = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div className="py-20 bg-gradient-to-b from-white to-gray-50" aria-busy="true"><div className="max-w-4xl mx-auto px-4 text-center"><div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse" /><div className="h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse" /></div></div>
})

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Zuid-Holland | Binnen 24u | Vanaf €43,50',
  description: 'Computerproblemen? Computerhulp aan huis in Zuid-Holland. Laptop, WiFi, printer en meer. Binnen 24 uur, gratis voorrijkosten. Bel 085-8002006.',
  openGraph: {
    title: 'Computerhulp Zuid-Holland | IT-student aan Huis',
    description: 'Computerhulp Zuid-Holland: uw IT-student aan huis. Binnen 24 uur bij u thuis. Gratis voorrijkosten. €14,50 per kwartier.',
    type: 'website',
    url: 'https://computerhulpzh.nl',
    siteName: 'Computerhulp Zuid-Holland',
    locale: 'nl_NL',
    images: [
      {
        url: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp Zuid-Holland - IT Hulp aan Huis'},
    ]},
  alternates: {
    canonical: 'https://computerhulpzh.nl'},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1}}}

// Organization Schema
const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://computerhulpzh.nl/#organization',
  name: 'Computerhulp Zuid-Holland',
  url: 'https://computerhulpzh.nl',
  logo: {
    '@type': 'ImageObject',
    url: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
    width: 200,
    height: 60
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+31858002006',
    contactType: 'customer service',
    availableLanguage: 'Dutch',
    areaServed: 'NL'
  }
}

// LocalBusiness Schema (enhanced)
const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://computerhulpzh.nl/#localbusiness',
  name: 'Computerhulp Zuid-Holland',
  description: 'Professionele computerhulp aan huis in Zuid-Holland. Wij lossen computer-, laptop-, printer- en WiFi-problemen snel op. Binnen 24 uur bij u thuis, gratis voorrijkosten.',
  url: 'https://computerhulpzh.nl',
  telephone: '+31858002006',
  email: 'info@computerhulpzh.nl',
  logo: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
  image: [
    'https://computerhulpzh.nl/Student%20aan%20huis.webp',
    'https://computerhulpzh.nl/Computerhulp%20aan%20huis.webp'
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Zuid-Holland',
    addressCountry: 'NL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.0116,
    longitude: 4.3571
  },
  areaServed: [
    { '@type': 'City', name: 'Den Haag' },
    { '@type': 'City', name: 'Rotterdam' },
    { '@type': 'City', name: 'Leiden' },
    { '@type': 'City', name: 'Delft' },
    { '@type': 'City', name: 'Zoetermeer' },
    { '@type': 'City', name: 'Dordrecht' },
    { '@type': 'State', name: 'Zuid-Holland' }
  ],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Computerhulp Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Computer & Laptop Hulp', description: 'Hulp bij trage computers, crashes en opstartproblemen' }
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'WiFi & Internet Hulp', description: 'WiFi installatie, bereik verbeteren en internetproblemen oplossen' }
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Printer & Scanner Hulp', description: 'Printer installeren, aansluiten en printproblemen oplossen' }
      }
    ]
  }
}

// WebSite Schema with SearchAction
const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://computerhulpzh.nl/#website',
  name: 'Computerhulp Zuid-Holland',
  url: 'https://computerhulpzh.nl',
  publisher: { '@id': 'https://computerhulpzh.nl/#organization' },
  inLanguage: 'nl-NL'
}

// Service Schema
const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://computerhulpzh.nl/#service',
  name: 'Computerhulp aan Huis',
  serviceType: 'Computer Repair Service',
  provider: { '@id': 'https://computerhulpzh.nl/#localbusiness' },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  description: 'Professionele computerhulp aan huis voor particulieren en kleine ondernemers in Zuid-Holland. Wij lossen computer, laptop, printer, WiFi en andere IT-problemen snel en vakkundig op.',
  offers: {
    '@type': 'Offer',
    price: '14.50',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '14.50',
      priceCurrency: 'EUR',
      unitText: 'per kwartier'
    },
    validFrom: '2025-01-01'
  }
}

// FAQ Schema (enhanced)
const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kunnen jullie langskomen voor computerhulp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen komen we binnen 24 uur bij u langs voor computerhulp aan huis. Bij spoed proberen we vaak nog dezelfde dag te komen. We werken 7 dagen per week, ook in de avonduren tot 22:00.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat kost computerhulp aan huis in Zuid-Holland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze computerhulp aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50). Voorrijden is gratis in heel Zuid-Holland. Betalen kan na afloop via pin, contant of Tikkie.'
      }
    },
    {
      '@type': 'Question',
      name: 'Welke computerproblemen kunnen jullie oplossen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij helpen met alle IT-problemen: trage computers, laptop reparatie, printers installeren, WiFi problemen, e-mailconfiguratie, tablets, smartphones, software-installatie, virusverwijdering en dataherstel. Ook voor persoonlijke uitleg en training kunt u bij ons terecht.'
      }
    },
    {
      '@type': 'Question',
      name: 'In welke plaatsen bieden jullie computerhulp aan huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bieden computerhulp aan huis in heel Zuid-Holland, waaronder Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Dordrecht, Gouda, Alphen aan den Rijn, Westland, Schiedam, Vlaardingen en meer dan 50 andere gemeenten.'
      }
    },
    {
      '@type': 'Question',
      name: 'Moet ik iets voorbereiden voor de computerhulp afspraak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, u hoeft niets voor te bereiden. Zorg alleen dat u eventuele wachtwoorden bij de hand heeft en dat de apparatuur bereikbaar is. Wij nemen al het gereedschap mee dat nodig is voor de computerhulp.'
      }
    }
  ]
}

// HowTo Schema
const howToData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Computerhulp aan huis aanvragen',
  description: 'Zo vraagt u computerhulp aan huis aan bij Computerhulp Zuid-Holland',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Neem contact op',
      text: 'Bel 085-8002006 of maak een afspraak via de website. Vertel kort wat het probleem is.'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Afspraak maken',
      text: 'We plannen samen een moment dat u uitkomt. Vaak kunnen we binnen 24 uur langskomen.'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Probleem oplossen',
      text: 'We komen bij u thuis en lossen het probleem direct op. Betalen na afloop.'
    }
  ],
  totalTime: 'PT24H'
}

// BreadcrumbList
const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' }
  ]
}

const testimonials = [
  {
    quote: 'Mijn computer deed het helemaal niet meer. Binnen 2 uur stond hij weer aan en al mijn foto\'s waren gered. Ontzettend blij!',
    name: 'Mevrouw Gerda',
    location: 'Den Haag',
    initials: 'G'
  },
  {
    quote: 'Eindelijk iemand die normaal uitlegt! Geen ingewikkelde termen. Printer werkt nu perfect.',
    name: 'De heer Jan',
    location: 'Rotterdam',
    initials: 'J'
  },
  {
    quote: 'WiFi werkte niet, e-mail deed het niet. Alles in één keer opgelost. Eerlijke prijs, top service!',
    name: 'Mevrouw Linda',
    location: 'Leiden',
    initials: 'L'
  },
  {
    quote: 'Heel geduldig uitgelegd hoe ik mijn tablet moet gebruiken. Nu kan ik zelf foto\'s maken en versturen naar mijn kleinkinderen!',
    name: 'De heer Henk',
    location: 'Delft',
    initials: 'H'
  },
  {
    quote: 'Laptop was zo traag geworden. Na het bezoek werkt hij weer als nieuw. Fijne jongen, nam de tijd voor uitleg.',
    name: 'Mevrouw Ria',
    location: 'Zoetermeer',
    initials: 'R'
  },
  {
    quote: 'Mijn nieuwe smart TV kon ik niet aansluiten. Binnen een uur Netflix, Videoland én de foto\'s van mijn telefoon erop. Geweldig!',
    name: 'De heer Peter',
    location: 'Gouda',
    initials: 'P'
  },
  {
    quote: 'Al jaren last van een trage computer. Eindelijk iemand die het écht oplost. Scheelt mij zoveel ergernis. Aanrader!',
    name: 'Mevrouw Corrie',
    location: 'Dordrecht',
    initials: 'C'
  },
  {
    quote: 'Virus op mijn laptop en al mijn wachtwoorden kwijt. Alles hersteld én nu goed beveiligd. Zeer tevreden!',
    name: 'De heer Willem',
    location: 'Schiedam',
    initials: 'W'
  }
]

const cities = ['Den Haag', 'Rotterdam', 'Leiden', 'Delft', 'Zoetermeer', 'Dordrecht', 'Gouda', 'Alphen aan den Rijn', 'Westland', 'Schiedam', 'Vlaardingen', 'Capelle aan den IJssel']

export default function HomePage() {
  return (
    <>
      {/* Structured Data - Consolidated @graph */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          organizationData,
          localBusinessData,
          websiteData,
          serviceData,
          faqData,
          howToData,
          breadcrumbData,
        ].map(({ '@context': _, ...rest }) => rest)
      }) }} />

      {/* Premium Hero Section */}
      <section className="hero-wrapper" aria-label="Computerhulp Zuid-Holland hero">
        <div className="absolute inset-0">
          <Image
            src="/Student aan huis.webp"
            alt="Computerhulp IT-student helpt klant thuis met laptop in Zuid-Holland"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-mobile" />
          <div className="hero-overlay-desktop-r" />
          <div className="hero-overlay-desktop-b" />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <h1 className="hero-title">
              Computerhulp aan Huis
              <span className="block text-blue-600">Zuid-Holland</span>
            </h1>

            <p className="hero-description">
              Betrouwbare computerhulp aan huis door heel Zuid-Holland. Onze IT-studenten lossen het <strong className="text-gray-900">snel en vakkundig</strong> op — bij u thuis.
            </p>

            {/* USP Badges */}
            <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
              <span className="usp-badge">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                Binnen 24 uur geholpen
              </span>
              <span className="usp-badge">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                Gratis voorrijkosten
              </span>
              <span className="usp-badge">
                <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />
                Betaalbare tarieven
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak-maken"
                className="btn-primary"
                aria-label="Vraag computerhulp aan huis aan"
              >
                Hulp aanvragen
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
              </Link>
              <a
                href="tel:+31858002006"
                className="btn-secondary"
                aria-label="Bel ons voor computerhulp: 085-8002006"
              >
                <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
                Bel 085-8002006
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400" aria-hidden="true">
          <span className="text-sm">Scroll</span>
          <Icon name="arrow-down" className="w-5 h-5 animate-bounce" strokeWidth={2} />
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection
        title="Onze Diensten"
        showFeatures={true}
        limitServices={6}
        showAllButton={true}
      />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials - Swipeable Carousel */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
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

      {/* SEO Content Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="seo-content-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <article>
              <h2 id="seo-content-heading" className="section-title mb-6">
                Computerhulp bij u thuis
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Loopt uw <strong>computer, laptop, printer of WiFi</strong> niet lekker? Dat is vervelend, maar geen reden tot stress. Wij komen gewoon bij u thuis en helpen het oplossen. Of u nu in <Link href="/computerhulp-aan-huis-den-haag" className="text-blue-600 hover:underline">Den Haag</Link>, <Link href="/computerhulp-aan-huis-rotterdam" className="text-blue-600 hover:underline">Rotterdam</Link>, <Link href="/computerhulp-aan-huis-leiden" className="text-blue-600 hover:underline">Leiden</Link>, <Link href="/computerhulp-aan-huis-delft" className="text-blue-600 hover:underline">Delft</Link> of ergens anders in Zuid-Holland woont — wij staan meestal binnen een dag bij u aan de deur.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Waarom mensen ons bellen</h3>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Snel bij u thuis:</strong> Meestal binnen een dag. Bij spoed vaak nog dezelfde dag.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Transparante prijzen:</strong> €14,50 per kwartier, gratis voorrijkosten in heel Zuid-Holland.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Alle merken:</strong> Windows, Apple, Samsung — het maakt niet uit, wij helpen u.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Gewoon duidelijk:</strong> Wij leggen alles rustig uit, zonder vaktermen.</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Waar kunnen wij u mee helpen? Onder andere met: <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:underline">een trage computer</Link>, <Link href="/diensten/laptop-computer-reparatie" className="text-blue-600 hover:underline">een kapotte laptop</Link>, <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:underline">een printer die niet werkt</Link>, <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:underline">WiFi dat hapert</Link>, <Link href="/diensten/email-hulp" className="text-blue-600 hover:underline">e-mail instellen</Link>, <Link href="/diensten/tablet-smartphone-hulp" className="text-blue-600 hover:underline">tablet en telefoon</Link>, <Link href="/diensten/smart-home-domotica" className="text-blue-600 hover:underline">slimme apparaten</Link> en <Link href="/diensten/dataherstel-backup" className="text-blue-600 hover:underline">bestanden terughalen</Link>.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Bel ons gerust op <a href="tel:+31858002006" className="text-blue-600 font-semibold hover:underline">085-8002006</a> of <Link href="/afspraak-maken" className="text-blue-600 font-semibold hover:underline">maak een afspraak online</Link>. Wij zijn elke dag bereikbaar van 08:00 tot 22:00 uur — ook in het weekend.
                </p>
              </div>
            </article>

            <aside>
              <div className="sticky top-24">
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                  <Image
                    src="/Computerhulp aan huis.webp"
                    alt="Computerhulp IT-student aan het werk bij klant thuis"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Waar we komen</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cities.map((city, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                        {city}
                      </span>
                    ))}
                  </div>
                  <Link href="/computerhulp-aan-huis" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    Bekijk alle 50+ locaties
                    <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
            <h2 id="faq-heading" className="section-title">
              Veelgestelde vragen
            </h2>
          </header>

          <div className="space-y-4">
            {[
              { q: 'Hoe snel kunnen jullie langskomen?', a: 'Meestal staan we binnen een dag bij u aan de deur. Heeft u haast? Dan proberen we vaak nog dezelfde dag langs te komen. We zijn elke dag bereikbaar, ook in de avond.' },
              { q: 'Wat kost het?', a: 'We rekenen €14,50 per kwartier, met een minimum van drie kwartier (€43,50). Voorrijden is gratis in heel Zuid-Holland. U betaalt pas achteraf, gewoon via pin, contant of Tikkie.' },
              { q: 'Waar kunnen jullie mee helpen?', a: 'Eigenlijk met alles wat met een scherm te maken heeft. Een trage computer, een printer die niet werkt, WiFi-problemen, e-mail instellen, uw tablet of telefoon, slimme apparaten — u noemt het. En als u gewoon iets wilt leren, helpen we daar ook graag bij.' },
              { q: 'Komen jullie ook in mijn woonplaats?', a: 'Wij komen in heel Zuid-Holland bij u thuis. Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Dordrecht, Gouda en meer dan 50 andere gemeenten. Overal gratis voorrijkosten.' },
              { q: 'Moet ik iets voorbereiden?', a: 'Nee hoor, daar hoeft u zich geen zorgen over te maken. Het enige dat handig is: leg eventuele wachtwoorden alvast klaar. Verder nemen wij alles mee wat nodig is.' },
            ].map((faq, idx) => (
              <details key={idx} className="group faq-item">
                <summary className="faq-summary">
                  {faq.q}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="faq-answer">
                  {faq.a}
                </div>
              </details>
            ))}
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
            Bel ons gerust of plan een afspraak in. Wij komen bij u thuis en helpen het oplossen — rustig en zonder gedoe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak-maken"
              className="btn-cta-white"
            >
              Afspraak Maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
            <a
              href="tel:+31858002006"
              className="btn-cta-dark"
            >
              <Icon name="phone" className="w-7 h-7" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
