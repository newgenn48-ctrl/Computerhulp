import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import ComfortSection from '@/components/sections/ComfortSection'
import CallbackSection from '@/components/sections/CallbackSection'
import { regionSlugs, getRegionBySlug, regionWithArticle } from '@/lib/regions'
import { getCityContent } from '@/lib/cityContent'
import { BUSINESS, OG_IMAGE, HOURS } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return regionSlugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const region = getRegionBySlug(slug)
  if (!region) return {}

  const inRegio = regionWithArticle(region.name)
  const langeTitel = `Computerhulp aan huis in ${region.name} | ${region.cities.length} gemeenten`
  const title = langeTitel.length <= 60 ? langeTitel : `Computerhulp aan huis in ${region.name}`

  return {
    title,
    description: `Computerhulp aan huis in ${inRegio}: ${region.cities.slice(0, 4).map(c => c.name).join(', ')} en meer. Een HBO IT-student komt bij u thuis, meestal binnen 24 uur. Bel ${BUSINESS.PHONE}.`,
    openGraph: {
      images: OG_IMAGE,
      title,
      description: `Computerhulp aan huis in ${inRegio}. Meestal binnen 24 uur bij u thuis.`,
      type: 'website',
      url: `${BUSINESS.URL}/regio/${region.slug}`,
    },
    alternates: { canonical: `${BUSINESS.URL}/regio/${region.slug}` },
  }
}

export default async function RegioPage({ params }: PageProps) {
  const { slug } = await params
  const region = getRegionBySlug(slug)
  if (!region) notFound()

  const inRegio = regionWithArticle(region.name)

  /* Plaatsnamen in lopende tekst: geeft de pagina eigen inhoud in plaats van
     een kale lijst links, en dekt de zoekvraag "<dienst> <plaats>". */
  const namen = region.cities.map(c => c.name)
  const namenZin = namen.length > 1
    ? `${namen.slice(0, -1).join(', ')} en ${namen[namen.length - 1]}`
    : namen[0]

  const grootste = [...region.cities]
    .sort((a, b) => (getCityContent(b.slug)?.population ?? 0) - (getCityContent(a.slug)?.population ?? 0))
    .slice(0, 3)
    .map(c => c.name)

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.URL },
      { '@type': 'ListItem', position: 2, name: 'Locaties', item: `${BUSINESS.URL}/locaties` },
      { '@type': 'ListItem', position: 3, name: region.name, item: `${BUSINESS.URL}/regio/${region.slug}` },
    ],
  }

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Computerhulp aan huis',
    provider: { '@type': 'LocalBusiness', name: BUSINESS.NAME, telephone: BUSINESS.PHONE, url: BUSINESS.URL },
    areaServed: region.cities.map(c => ({ '@type': 'City', name: c.name })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />

      <Hero
        imageSrc="/hero-computerhulp.webp"
        imageAlt={`HBO IT-student helpt een bewoner thuis met de computer in ${region.name}`}
        ariaLabel={`Computerhulp aan huis in ${region.name}`}
        eyebrow={`${region.cities.length} gemeenten in ${inRegio}`}
        title={<>Computerhulp aan huis in <span className="hero-highlight">{region.name}</span></>}
        descriptions={[
          <>Heeft u hulp nodig bij uw computer, printer, internet, e-mail, tablet of telefoon? Een geduldige HBO IT-student komt bij u thuis in {inRegio}, lost het op en legt het rustig uit. <strong className="text-white">Meestal binnen 24 uur.</strong></>,
        ]}
      />

      {/* Alle gemeenten van de regio: dit is waar de pagina voor bestaat, dus
          staat het direct onder de hero in plaats van onderaan. */}
      <section className="panel-section" aria-labelledby="gemeenten-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 panel panel-pad">
          <div className="text-center mb-10">
            <p className="section-eyebrow">Werkgebied</p>
            <h2 id="gemeenten-heading" className="section-title">Waar wij komen in {region.name}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Kies uw gemeente voor de details, of bel gewoon. Voorrijden kost overal hetzelfde.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {region.cities.map(city => (
              <li key={city.slug} className="card-bezel">
                <div className="card-bezel-inner p-4">
                  <Link
                    href={`/computerhulp-aan-huis-${city.slug}`}
                    className="group flex items-center gap-2 font-bold text-gray-900 text-lg hover:text-blue-700 transition-colors"
                  >
                    <Icon name="location-pin" className="w-5 h-5 text-blue-600 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                    <span className="min-w-0 truncate">Computerhulp {city.name}</span>
                  </Link>
                  <Link
                    href={`/student-aan-huis-${city.slug}`}
                    className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Student aan huis in {city.name}
                    <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServicesSection
        eyebrow="Onze hulp"
        title={`Waar wij u mee helpen in ${region.name}`}
        subtitle="Kies wat u herkent. U hoeft niet te weten wat er technisch aan de hand is."
        photoCards={true}
        limitServices={6}
        showAllButton={true}
      />

      <TestimonialsSection
        testimonials={HUB_TESTIMONIALS}
        subtitle={<>Dagelijks helpen we mensen in heel {BUSINESS.REGION}</>}
      />

      <HowItWorksSection />

      <ComfortSection />

      <CallbackSection />

      {/* Lopende tekst onderaan: dekt de zoekvraag per plaatsnaam zonder de
          bovenkant van de pagina vol te zetten. */}
      <section className="panel-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <p className="section-eyebrow">Over deze regio</p>
          <h2 className="section-title mb-6">Computerhulp aan huis in {inRegio}</h2>

          <p className="body-copy text-gray-700 mb-6">
            Wij komen in {region.cities.length} gemeenten in {inRegio}: {namenZin}. Of u nu in{' '}
            {grootste.join(' of ')} woont of in een kleinere kern ertussen, u betaalt hetzelfde
            voorrijtarief en we zijn er meestal binnen 24 uur.
          </p>

          <p className="body-copy text-gray-700 mb-6">
            Een geduldige HBO IT-student komt bij u thuis en gaat pas aan de slag als duidelijk is
            wat u dwarszit. Terwijl hij werkt legt hij in gewone woorden uit wat er gebeurt, zodat u
            het de volgende keer zelf kunt. Dat geldt voor{' '}
            <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:text-blue-800 font-medium">computer en laptop</Link>,{' '}
            <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:text-blue-800 font-medium">wifi en internet</Link>,{' '}
            <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:text-blue-800 font-medium">printer en scanner</Link>,{' '}
            <Link href="/diensten/email-hulp" className="text-blue-600 hover:text-blue-800 font-medium">e-mail</Link>,{' '}
            <Link href="/diensten/smartphone-hulp-aan-huis" className="text-blue-600 hover:text-blue-800 font-medium">telefoon en tablet</Link> en{' '}
            <Link href="/diensten/tv-installatie" className="text-blue-600 hover:text-blue-800 font-medium">de televisie</Link>.
          </p>

          <p className="body-copy text-gray-700 mb-6">
            We zijn bereikbaar van {HOURS.OPEN} tot {HOURS.CLOSE}, {HOURS.DAYS}, ook in de avond en
            het weekend zonder toeslag. U betaalt pas achteraf, via pin of Tikkie.
          </p>

          <p className="body-copy text-gray-700">
            Kunnen wij u helpen in {inRegio}? Bel{' '}
            <a href={BUSINESS.PHONE_HREF} translate="no" className="text-blue-600 hover:text-blue-800 font-semibold">{BUSINESS.PHONE}</a>{' '}
            of <Link href="/afspraak-maken" className="text-blue-600 hover:text-blue-800 font-semibold">vraag online een afspraak aan</Link>.
            Liever eerst alle plaatsen zien? Bekijk{' '}
            <Link href="/locaties" className="text-blue-600 hover:text-blue-800 font-semibold">het volledige werkgebied</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
