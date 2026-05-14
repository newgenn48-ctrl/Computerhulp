import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/icons'

export const services = [
  {
    title: 'Computer & Laptop',
    description: 'Storing, trage pc of nieuwe laptop instellen — wij lossen het op en maken alles weer snel.',
    icon: 'laptop',
    image: '/Computer & Laptop Hulp.webp',
    slug: '/diensten/computer-laptop-hulp',
    features: [
      'Nieuwe computer installeren en instellen',
      'Trage computer weer snel maken',
      'Schadelijke software opruimen',
      'Programma\'s installeren en bijwerken',
      'Windows, Mac en alle merken'
    ]
  },
  {
    title: 'Printer & Scanner',
    description: 'Printer doet het niet, draadloos printen of nieuwe printer aansluiten — wij lossen het op.',
    icon: 'printer',
    image: '/Printer & Randapparatuur.webp',
    slug: '/diensten/printer-scanner-hulp',
    features: [
      'Nieuwe printer aansluiten en instellen',
      'Scanner instellen',
      'Draadloos printen instellen',
      'Printer doet het niet? Wij fixen het'
    ]
  },
  {
    title: 'E-mail',
    description: 'E-mail werkt niet, instellen of beveiligen — wij lossen storingen op en helpen u op weg.',
    icon: 'email',
    image: '/E-mail Hulp.webp',
    slug: '/diensten/email-hulp',
    features: [
      'E-mail instellen op computer of telefoon',
      'Outlook, Gmail en andere programma\'s',
      'Ongewenste mail stoppen',
      'Wachtwoord herstellen'
    ]
  },
  {
    title: 'WiFi & Netwerk',
    description: 'WiFi-storing, slechte verbinding of dood punt in huis? Wij lossen het op en verbeteren bereik.',
    icon: 'wifi',
    image: '/WiFi & Netwerk Hulp.webp',
    slug: '/diensten/wifi-internet-hulp',
    features: [
      'WiFi router installeren en instellen',
      'Bereik en snelheid verbeteren',
      'Apparaten verbinden met uw WiFi',
      'Uw WiFi veilig maken'
    ]
  },
  {
    title: 'Tablet & Smartphone',
    description: 'Telefoon of tablet werkt niet of nieuwe instellen — wij lossen het op en leggen rustig uit.',
    icon: 'mobile',
    image: '/Tablet & Smartphone Hulp.webp',
    slug: '/diensten/tablet-smartphone-hulp',
    features: [
      'Nieuwe tablet of telefoon instellen',
      'Apps installeren en instellen',
      'Alle merken (Samsung, Apple, etc.)',
      'Foto\'s en contacten overzetten'
    ]
  },
  {
    title: 'Televisie & Radio',
    description: 'TV-storing, decoder of streamen — wij lossen het op en stellen zenders goed in.',
    icon: 'tv',
    image: '/TV hulp.webp',
    slug: '/diensten/televisie-radio',
    features: [
      'Smart TV installeren en instellen',
      'Zenders instellen en sorteren',
      'Decoder en mediabox instellen',
      'Soundbar aansluiten',
      'Netflix, YouTube en andere apps instellen'
    ]
  },
  {
    title: 'Laptop & Computer Reparatie',
    description: 'Kapot scherm, lege accu of andere storing? Wij repareren laptops en pc’s bij u thuis.',
    icon: 'wrench',
    image: '/Reparatie.webp',
    slug: '/diensten/laptop-computer-reparatie',
    features: [
      'Alle merken laptops en computers',
      'Schermreparatie',
      'Accu- en opladerproblemen',
      'Computer sneller maken (SSD upgrade)',
      'Toetsenbord en touchpad'
    ]
  },
  {
    title: 'Smart Home',
    description: 'Slimme lampen, deurbel of speakers — wij koppelen alles en lossen storingen op.',
    icon: 'lightbulb',
    image: '/Smart Home.webp',
    slug: '/diensten/smart-home-domotica',
    features: [
      'Smart TV installeren en koppelen',
      'Slimme verlichting instellen',
      'Slimme speakers instellen',
      'Videodeurbel installeren'
    ]
  },
  {
    title: 'Dataherstel',
    description: 'Foto’s of bestanden kwijt na storing of crash? Wij halen ze terug en zetten een back-up op.',
    icon: 'database',
    image: '/Data herstel.webp',
    slug: '/diensten/dataherstel-backup',
    features: [
      'Verwijderde bestanden terughalen',
      'Bestanden redden van kapotte schijven',
      'Automatische back-up instellen',
      'Uw foto\'s en documenten veiligstellen'
    ]
  },
  {
    title: 'Persoonlijke Training',
    description: 'Stap voor stap leren met uw apparaten — op uw tempo, in gewone taal.',
    icon: 'academic-cap',
    image: '/Student aan huis.webp',
    slug: '/diensten/persoonlijke-training',
    features: [
      'Basistraining voor uw computer',
      'Internet veilig gebruiken',
      'E-mail en sociale media beheren',
      'Foto\'s ordenen en bewerken'
    ]
  }
]

interface ServicesSectionProps {
  title?: string
  subtitle?: string
  eyebrow?: string
  /** @deprecated — cards zijn nu altijd compact (image + titel). Prop blijft voor backwards-compat met callers. */
  showFeatures?: boolean
  /** Toon korte beschrijving onder de titel — gebruikt voor zelf-kwalificatie op landingspagina's. */
  showDescription?: boolean
  limitServices?: number
  showAllButton?: boolean
}

export default function ServicesSection({
  title = 'Onze diensten',
  subtitle,
  eyebrow,
  showDescription = false,
  limitServices = 0,
  showAllButton = false,
}: ServicesSectionProps) {
  const displayServices = limitServices > 0 ? services.slice(0, limitServices) : services

  return (
    <section className="section-bg-soft py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle max-w-2xl mx-auto mt-3">{subtitle}</p>}
        </div>

        {showDescription ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
            {displayServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.slug}
                className="group flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-3 bg-white rounded-2xl p-5 md:p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/60 flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-blue-200/60 transition-colors">
                  <Icon
                    name={service.icon ?? 'check'}
                    className="w-7 h-7 md:w-8 md:h-8 text-blue-600"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col flex-1 min-w-0 md:flex-none md:w-full">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {displayServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.slug}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                  />
                </div>
                <div className="px-3 py-2.5 text-center">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}

        {showAllButton && (
          <div className="text-center mt-10">
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Alle diensten bekijken
              <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
