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
  title: 'Dataherstel & Backup aan Huis Zuid-Holland | Binnen 24u',
  description: `Bestanden kwijt of harde schijf kapot? Wij redden uw data en maken backups aan huis in ${BUSINESS.REGION}. ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Dataherstel & Backup aan Huis',
    description: `Bestanden kwijt of harde schijf kapot? Wij redden uw data en maken backups aan huis in ${BUSINESS.REGION}.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/dataherstel-backup'},
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/dataherstel-backup'}}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dataherstel & Backup',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY }
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: { '@type': 'Offer', price: PRICING.PER_QUARTER_NUM.toString(), priceCurrency: 'EUR' },
  description: 'Professionele dataherstel en backup service aan huis. Verloren bestanden terughalen, foto\'s redden en automatische backups instellen. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Dataherstel & Backup', item: 'https://computerhulpzh.nl/diensten/dataherstel-backup' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie mijn verwijderde bestanden terughalen?', acceptedAnswer: { '@type': 'Answer', text: 'In veel gevallen wel. Als bestanden recent zijn verwijderd en de schijf nog werkt, is de kans groot dat we ze kunnen herstellen.' } },
    { '@type': 'Question', name: 'Wat voor backupoplossingen bieden jullie?', acceptedAnswer: { '@type': 'Answer', text: 'We installeren automatische backups naar de cloud of naar een externe schijf. Zo bent u altijd beschermd.' } },
    { '@type': 'Question', name: 'Kunnen jullie data van een kapotte harde schijf redden?', acceptedAnswer: { '@type': 'Answer', text: 'Vaak wel. We maken een diagnose en geven u een eerlijk advies over de mogelijkheden voordat we beginnen.' } },
    { '@type': 'Question', name: 'Hoe lang duurt dataherstel?', acceptedAnswer: { '@type': 'Answer', text: 'Dit hangt af van de situatie. Simpele recovery kan binnen een uur, complexere gevallen kunnen langer duren. We geven vooraf een inschatting.' } },
    { '@type': 'Question', name: 'Kunnen jullie mijn data overzetten naar een nieuwe computer?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we zetten al uw bestanden, foto\'s, documenten en zelfs e-mail en programma-instellingen veilig over naar uw nieuwe computer.' } }
  ]
}

const heroImage = '/Data herstel.webp'

const services = [
  'Verwijderde bestanden terughalen',
  'Data redden van kapotte harde schijf',
  'Verloren foto\'s en video\'s herstellen',
  'Automatische cloud-backup instellen (OneDrive, iCloud, Google Drive)',
  'Externe harde schijf als backup configureren',
  'Data overzetten naar nieuwe computer',
  'Bestanden redden na ransomware',
  'Schijf klonen voor vervanging',
]

const faqs = [
  { question: 'Kunnen jullie mijn verwijderde bestanden terughalen?', answer: 'In veel gevallen wel. Als bestanden recent zijn verwijderd en de schijf nog werkt, is de kans groot dat we ze kunnen herstellen. We maken eerst een diagnose voordat we beginnen.' },
  { question: 'Wat voor backupoplossingen bieden jullie?', answer: 'We installeren automatische backups naar de cloud of naar een externe schijf. We zorgen dat alles automatisch werkt zonder dat u er omkijken naar heeft.' },
  { question: 'Kunnen jullie data van een kapotte harde schijf redden?', answer: 'Vaak wel. We maken een diagnose en geven u een eerlijk advies over de mogelijkheden. Bij ernstige fysieke schade verwijzen we door naar een gespecialiseerd data recovery lab.' },
  { question: 'Hoe lang duurt dataherstel?', answer: 'Dit hangt af van de situatie. Simpele recovery kan binnen een uur, complexere gevallen kunnen langer duren. We geven vooraf een inschatting.' },
  { question: 'Kunnen jullie mijn data overzetten naar een nieuwe computer?', answer: 'Ja, we zetten al uw bestanden, foto\'s, documenten en zelfs e-mail en programma-instellingen veilig over naar uw nieuwe computer.' }
]

export default function DataherstelBackupPage() {
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
                <span className="text-blue-600">Bestanden</span> of foto&apos;s kwijt?
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Harde schijf defect, per ongeluk verwijderd, computer start niet meer op? We maken eerst <strong className="text-gray-900">een eerlijke diagnose</strong> — pas als herstel realistisch is, gaan we aan de slag.
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
                <Image src={heroImage} alt="Dataherstel en backup IT-student aan het werk" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
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
            <p className="section-subtitle">Data redden, backups instellen, verloren bestanden terughalen.</p>
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
            <p className="section-subtitle">Over dataherstel en backup aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Uw Data Is Kostbaar — Wij Beschermen Het</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Niets is zo vervelend als het verliezen van belangrijke bestanden, dierbare foto&apos;s of zakelijke documenten. Of uw harde schijf nu defect is geraakt, u per ongeluk bestanden heeft verwijderd, of uw computer niet meer opstart — er is vaak meer te redden dan u denkt.</p>
            <p>Onze IT-studenten komen bij u thuis en maken een grondige diagnose. We zijn altijd eerlijk over de mogelijkheden voordat we beginnen. Daarnaast helpen we u met het opzetten van een betrouwbaar backupsysteem, zodat u in de toekomst nooit meer data kwijtraakt. We werken met zowel lokale backups als cloud-oplossingen.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="dataherstel-backup" serviceName="Dataherstel & Backup" />


      <AvailableInCities serviceLabel="Dataherstel" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Data Kwijt of Backup Nodig?</h2>
          <p className="text-xl text-blue-100 mb-10">We helpen u direct. Bel nu en we komen vandaag of morgen al langs!</p>
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
