import { Metadata } from 'next'
import Link from 'next/link'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import { SHORT_TESTIMONIALS } from '@/lib/testimonials'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/sections/PricingSection'
import Hero from '@/components/sections/Hero'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING, OG_IMAGE } from '@/lib/constants'
import AvailableInCities from '@/components/sections/AvailableInCities'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Dataherstel en back-up aan huis | Foto’s en bestanden terug',
  description: `Bestanden kwijt of harde schijf kapot? Wij redden uw data en maken backups aan huis in ${BUSINESS.REGION}. ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: 'Dataherstel en back-up aan huis',
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

const services = [
  'Verwijderde bestanden terughalen',
  'Data redden van kapotte harde schijf',
  'Verloren foto\'s en video\'s herstellen',
  'Automatische cloud-backup instellen (OneDrive, iCloud, Google Drive)',
  'Externe harde schijf als backup configureren',
  'Data overzetten naar nieuwe computer',
  'Bestanden redden na een vastgelopen systeem',
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
      <Hero
        imageSrc="/dienst-dataherstel-16x9.webp"
        imageLooseMobile="/dienst-dataherstel-los.webp"
        imageAlt="Student sluit een harde schijf aan naast het fotoalbum van een oudere vrouw"
        ariaLabel="Dataherstel aan huis hero"
        eyebrow={<>Dataherstel · {BUSINESS.REGION}</>}
        title={<><span className="hero-highlight">Bestanden</span> of foto&apos;s kwijt?</>}
        descriptions={[
          <>Heeft u hulp nodig bij het terughalen van uw bestanden of foto's? Een defecte harde schijf, of een pc die niet meer opstart? We maken eerst een <strong>eerlijke diagnose</strong>: pas als herstel realistisch is, gaan we aan de slag.</>,
        ]}
        trustLine=""
        pills={[
          { icon: 'money', label: 'Betaalbare tarieven' },
          { icon: 'book', label: 'HBO-opgeleide studenten' },
          { icon: 'check', label: '7 dagen per week' },
        ]}
      />


      {/* Wat wij voor u doen, check-list */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-eyebrow">Onze hulp</p>
            <h2 className="section-title">Wat wij voor u doen</h2>
            <p className="section-subtitle">Data redden, backups instellen, verloren bestanden terughalen.</p>
          </div>
          <div className="card-bezel max-w-3xl mx-auto">
            <div className="card-bezel-inner p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 py-1">
                <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />

      {/* Testimonials - Swipeable Carousel */}
      <TestimonialsSection
        testimonials={SHORT_TESTIMONIALS}
        subtitle="Wij helpen dagelijks mensen in heel Zuid-Holland"
      />
      <PricingSection />

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-eyebrow">FAQ</p>
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
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="content-title mb-4">Uw data is kostbaar, wij beschermen het</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Niets is zo vervelend als het verliezen van belangrijke bestanden, dierbare foto&apos;s of zakelijke documenten. Of uw harde schijf nu defect is geraakt, u per ongeluk bestanden heeft verwijderd, of uw computer niet meer opstart, er is vaak meer te redden dan u denkt.</p>
            <p>Onze HBO-studenten komen bij u thuis en maken een grondige diagnose. We zijn altijd eerlijk over de mogelijkheden voordat we beginnen. Daarnaast helpen we u met het opzetten van een betrouwbaar backupsysteem, zodat u in de toekomst nooit meer data kwijtraakt. We werken met zowel lokale backups als cloud-oplossingen.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="dataherstel-backup" serviceName="Dataherstel & Backup" />


      <AvailableInCities serviceLabel="Dataherstel" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">Data kwijt of backup nodig?</h2>
          <p className="text-xl text-blue-100 mb-10">We helpen u direct. Bel nu en we komen vandaag of morgen al langs!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
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
