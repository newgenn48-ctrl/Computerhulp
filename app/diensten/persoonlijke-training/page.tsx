import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { SHORT_TESTIMONIALS } from '@/lib/testimonials'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING } from '@/lib/constants'
import TrustBadges from '@/components/TrustBadges'
import AvailableInCities from '@/components/sections/AvailableInCities'

export const metadata: Metadata = {
  title: 'Computer Training aan Huis | Persoonlijke Les | Zuid-Holland',
  description: `Computer basics leren, internet veilig gebruiken of Word en Excel leren? Persoonlijke training aan huis in ${BUSINESS.REGION}. ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,

  openGraph: {
    title: 'Persoonlijke Training aan Huis',
    description: `Computer basics leren, internet veilig gebruiken of Word en Excel onder de knie krijgen? We komen bij u thuis in ${BUSINESS.REGION}. Bel ${BUSINESS.PHONE}.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/persoonlijke-training'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/persoonlijke-training'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Persoonlijke Computer Training',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY }
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: { '@type': 'Offer', price: PRICING.PER_QUARTER_NUM.toString(), priceCurrency: 'EUR' },
  description: 'Persoonlijke computer training aan huis. Van computer basics tot Word, Excel, internet en online bankieren. Op uw tempo, bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Persoonlijke Training', item: 'https://computerhulpzh.nl/diensten/persoonlijke-training' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is de training geschikt voor beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, onze training is speciaal afgestemd op beginners. We beginnen bij de basis en werken op uw tempo.' } },
    { '@type': 'Question', name: 'Kunnen jullie mij leren online te bankieren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we leren u veilig online bankieren, van inloggen tot overmaken. We leggen ook uit hoe u phishing herkent.' } },
    { '@type': 'Question', name: 'Geven jullie ook les in Word en Excel?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we geven les in Word voor brieven en Excel voor tabellen en berekeningen. Op uw niveau en tempo.' } },
    { '@type': 'Question', name: 'Kan ik meerdere lessen boeken?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, u kunt zoveel lessen boeken als u wilt. Veel klanten boeken een serie van 3-5 lessen om de stof goed onder de knie te krijgen.' } },
    { '@type': 'Question', name: 'Leren jullie ook videobellen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we leren u videobellen met alle gangbare programma\'s. Zo kunt u met kinderen, kleinkinderen of vrienden beeldbellen.' } }
  ]
}

const heroImage = '/Student aan huis.webp'

const services = [
  'Basistraining voor uw computer',
  'Internet veilig gebruiken',
  'E-mail leren gebruiken',
  'Online bankieren zonder zorgen',
  'Videobellen met familie (WhatsApp, Zoom)',
  'Foto\'s ordenen, bewaren en delen',
  'Sociale media (Facebook, Instagram)',
  'Word, Excel en andere programma\'s',
]

const faqs = [
  { question: 'Is de training geschikt voor absolute beginners?', answer: 'Ja, onze training is speciaal afgestemd op beginners. We beginnen bij de basis en werken op uw tempo. Er is geen voorkennis nodig.' },
  { question: 'Kunnen jullie mij leren online te bankieren?', answer: 'Ja, we leren u veilig online bankieren, van inloggen met DigiD tot overmaken. We leggen ook uit hoe u phishing en oplichting herkent en voorkomt.' },
  { question: 'Geven jullie ook les in Word en Excel?', answer: 'Absoluut! We geven les in Word voor brieven en documenten, en Excel voor tabellen en berekeningen. We stemmen de les af op uw niveau en tempo.' },
  { question: 'Kan ik meerdere lessen boeken?', answer: 'Ja, u kunt zoveel lessen boeken als u wilt. Veel klanten boeken een serie van 3-5 lessen om de stof goed onder de knie te krijgen.' },
  { question: 'Leren jullie ook videobellen?', answer: 'Ja, we leren u videobellen met alle gangbare programma\'s. Zo kunt u met kinderen, kleinkinderen of vrienden beeldbellen.' }
]

export default function PersoonlijkeTrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero - Split Layout */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5 md:mb-6 leading-[1.04] tracking-display-tight">
                Meer <span className="text-blue-600">leren</span> over uw computer?
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Hulp nodig met je computer, tablet of smartphone? Onze IT-studenten lossen het <strong className="text-gray-900">snel, slim en betrouwbaar</strong> voor je op.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                  Bel {BUSINESS.PHONE}
                </a>
                <Link href="/afspraak-maken" className="btn-secondary">
                  Afspraak maken
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="Persoonlijke computer training aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="shield" className="w-6 h-6 text-green-600" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Gecertificeerd</div>
                    <div className="text-xs text-gray-500">10+ jaar ervaring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Wat wij voor u doen — check-list */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">Wat wij voor u doen</h2>
            <p className="section-subtitle">Wat we u kunnen leren.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 py-1">
                <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksSection />
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
          <TestimonialsCarousel testimonials={SHORT_TESTIMONIALS} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen</h2>
            <p className="section-subtitle">Over persoonlijke computer training aan huis</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group faq-item">
                <summary className="faq-summary">
                  {faq.question}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Computerles op Uw Eigen Tempo</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Technologie hoeft niet ingewikkeld te zijn. Met onze persoonlijke training leert u stap voor stap werken met uw eigen computer, tablet of smartphone. We komen bij u thuis, zodat u leert op uw eigen apparaat in uw eigen omgeving. Geen klaslokaal, geen haast, geen jargon.</p>
            <p>Onze trainingen zijn geschikt voor alle leeftijden en niveaus. Of u nu wilt leren e-mailen, videobellen met familie, veilig internetten, of werken met specifieke programma&apos;s — we passen de les volledig aan op uw wensen en tempo. Na de training kunt u zelfstandig verder en heeft u altijd een aanspreekpunt als u ergens niet uitkomt.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="persoonlijke-training" serviceName="Persoonlijke Training" />


      <AvailableInCities serviceLabel="Persoonlijke training" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Computer Vaardigheden Verbeteren?</h2>
          <p className="text-xl text-blue-100 mb-10">Bel nu voor persoonlijke training bij u thuis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              Bel {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-cta-dark">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
