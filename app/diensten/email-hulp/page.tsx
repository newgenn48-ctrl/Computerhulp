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
  title: 'E-mail Hulp aan Huis Zuid-Holland | Outlook & Gmail | 24u',
  description: `E-mail problemen? Wachtwoord vergeten of mailbox vol? Wij komen bij u thuis in ${BUSINESS.REGION}. ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'E-mail Hulp aan Huis',
    description: `E-mail problemen? Wachtwoord vergeten? We komen bij u thuis in ${BUSINESS.REGION}. Binnen 24 uur geholpen.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/email-hulp'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/email-hulp'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'E-mail Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY }
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: { '@type': 'Offer', price: PRICING.PER_QUARTER_NUM.toString(), priceCurrency: 'EUR' },
  description: 'Professionele e-mail hulp aan huis. Alle e-mailprogramma\'s configureren en problemen oplossen. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'E-mail Hulp', item: 'https://computerhulpzh.nl/diensten/email-hulp' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie mijn e-mail wachtwoord herstellen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we helpen u bij het herstellen van wachtwoorden voor alle e-mailproviders. We zorgen ook dat uw account weer veilig is.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met e-mail op mijn telefoon?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we stellen uw e-mail in op al uw apparaten: computer, laptop, tablet en telefoon. Zo heeft u overal toegang tot uw mail.' } },
    { '@type': 'Question', name: 'Mijn mailbox is vol, wat nu?', acceptedAnswer: { '@type': 'Answer', text: 'We helpen u uw mailbox op te ruimen door oude en onnodige e-mails te verwijderen. Ook kunnen we uw opslag uitbreiden of e-mails archiveren.' } },
    { '@type': 'Question', name: 'Ik krijg veel spam, kunnen jullie dat stoppen?', acceptedAnswer: { '@type': 'Answer', text: 'We configureren uw spamfilter optimaal en leren u hoe u spam kunt herkennen en blokkeren. Bij ernstige gevallen kunnen we extra maatregelen nemen.' } },
    { '@type': 'Question', name: 'Kan ik mijn oude e-mails overzetten naar een nieuw e-mailadres?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we kunnen e-mails, contacten en agenda\'s migreren naar een nieuw e-mailadres, ongeacht de provider.' } }
  ]
}

const heroImage = '/E-mail Hulp.webp'

const services = [
  'E-mail instellen op computer, tablet en telefoon',
  'Outlook of Gmail configureren',
  'Wachtwoord herstellen',
  'Spam en ongewenste mail filteren',
  'Volle mailbox opruimen',
  'Mail migreren naar andere provider',
  'Afwezigheid of handtekening instellen',
  'Mail-archief maken',
]

const faqs = [
  { question: 'Kunnen jullie mijn e-mail wachtwoord herstellen?', answer: 'Ja, we helpen u bij het herstellen van wachtwoorden voor alle e-mailproviders. We zorgen ook dat uw account weer veilig is.' },
  { question: 'Helpen jullie ook met e-mail op mijn telefoon?', answer: 'Ja, we stellen uw e-mail in op al uw apparaten: computer, laptop, tablet en telefoon. Zo heeft u overal toegang tot uw mail.' },
  { question: 'Mijn mailbox is vol, wat nu?', answer: 'We helpen u uw mailbox op te ruimen door oude en onnodige e-mails te verwijderen. Ook kunnen we uw opslag uitbreiden of e-mails archiveren.' },
  { question: 'Ik krijg veel spam, kunnen jullie dat stoppen?', answer: 'We configureren uw spamfilter optimaal en leren u hoe u spam kunt herkennen en blokkeren. Bij ernstige gevallen kunnen we extra maatregelen nemen.' },
  { question: 'Kan ik mijn oude e-mails overzetten naar een nieuw e-mailadres?', answer: 'Ja, we kunnen e-mails, contacten en agenda\'s migreren naar een nieuw e-mailadres, ongeacht de provider.' }
]

export default function EmailHulpPage() {
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
                Hulp nodig met uw <span className="text-blue-600">e-mail</span>?
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Wachtwoord kwijt, volle mailbox of spam die maar blijft komen? Wij stellen Outlook, Gmail, Ziggo of KPN Mail opnieuw in — <strong className="text-gray-900">meestal in een halfuur klaar</strong>.
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
                <Image src={heroImage} alt="E-mail hulp aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
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
            <p className="section-subtitle">E-mailklussen die we regelmatig oplossen.</p>
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
            <p className="section-subtitle">Over e-mail hulp aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">E-mailproblemen Snel en Vakkundig Opgelost</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>E-mail is voor veel mensen het belangrijkste communicatiemiddel. Als uw e-mail niet werkt, uw wachtwoord kwijt is, of u overspoeld wordt met spam, dan kan dat enorm veel stress opleveren. Onze IT-studenten helpen u met alle e-mailproviders: Outlook, Gmail, Yahoo, Ziggo, KPN en meer.</p>
            <p>We stellen uw e-mail in op al uw apparaten — computer, laptop, tablet en telefoon — zodat u overal bij uw berichten kunt. Ook helpen we met het migreren van e-mails naar een nieuwe provider, het opruimen van een volle mailbox, en het instellen van goede spam-filters. Alles bij u thuis, met duidelijke uitleg.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="email-hulp" serviceName="E-mail Hulp" />


      <AvailableInCities serviceLabel="E-mailhulp" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">E-mailproblemen?</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
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
