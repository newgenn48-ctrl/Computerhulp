import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/icons'

export const services = [
  {
    title: 'Computer traag of vastgelopen',
    description: 'Trage computer of laptop weer snel: opschonen, updates, opstartproblemen en rustige uitleg.',
    icon: 'laptop',
    image: '/dienst-computer-laptop.webp',
    imageAlt: 'Open laptop op een eettafel, handen op het toetsenbord',
    slug: '/diensten/computer-laptop-hulp',
    features: [
      'Nieuwe computer installeren en instellen',
      'Trage computer weer snel maken',
      'Computer weer schoon en snel',
      'Programma\'s installeren en bijwerken',
      'Alle merken en systemen'
    ]
  },
  {
    title: 'Wifi & internet',
    description: 'Traag internet, wegvallende wifi of slechte dekking in huis: wij lossen het op en verbeteren het bereik.',
    icon: 'wifi',
    image: '/dienst-wifi.webp',
    imageAlt: 'Witte wifi-router op een kast, hand aan de kabel',
    slug: '/diensten/wifi-internet-hulp',
    features: [
      'WiFi router installeren en instellen',
      'Bereik en snelheid verbeteren',
      'Apparaten verbinden met uw WiFi',
      'Uw WiFi veilig maken'
    ]
  },
  {
    title: 'Printer installeren',
    description: 'Nieuwe printer aansluiten, draadloos printen, scanner instellen en printerstoringen oplossen.',
    icon: 'printer',
    image: '/dienst-printer-scanner.webp',
    imageAlt: 'All-in-one printer met een foto die uit de lade komt',
    slug: '/diensten/printer-scanner-hulp',
    features: [
      'Nieuwe printer aansluiten en instellen',
      'Scanner instellen',
      'Draadloos printen instellen',
      'Printer doet het niet? Wij fixen het'
    ]
  },
  {
    title: 'E-mail & accounts',
    description: 'E-mail instellen op computer of telefoon, weer toegang krijgen en ongewenste mail stoppen.',
    icon: 'email',
    image: '/dienst-email.webp',
    imageAlt: 'Laptopscherm met een geopende e-mail',
    slug: '/diensten/email-hulp',
    features: [
      'E-mail instellen op computer of telefoon',
      'Outlook, Gmail en andere programma\'s',
      'Ongewenste mail stoppen',
      'E-mail weer toegankelijk maken'
    ]
  },
  {
    title: 'Tablet & telefoon',
    description: 'Nieuwe tablet of telefoon instellen, apps, foto’s overzetten en videobellen, rustig uitgelegd.',
    icon: 'mobile',
    image: '/dienst-tablet-smartphone.webp',
    imageAlt: 'Tablet in de handen van een oudere vrouw',
    slug: '/diensten/tablet-smartphone-hulp',
    features: [
      'Nieuwe tablet of telefoon instellen',
      'Apps installeren en instellen',
      'Alle merken tablets en telefoons',
      'Foto\'s en contacten overzetten'
    ]
  },
  {
    title: 'Televisie & streamen',
    description: 'Smart-tv instellen, zenders op volgorde, decoder en Netflix werkend, soundbar aangesloten.',
    icon: 'tv',
    image: '/dienst-tv.webp',
    imageAlt: 'Televisie aan de wand met soundbar eronder',
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
    title: 'Laptop of pc doet het niet',
    description: 'Start niet op, loopt vast of geeft foutmeldingen? Wij kijken bij u thuis wat er aan de hand is.',
    icon: 'wrench',
    image: '/Reparatie.webp',
    imageAlt: 'Geopende laptop met precisieschroevendraaier ernaast',
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
    image: '/dienst-smart-home.webp',
    imageAlt: 'Slimme thermostaat aan de muur, hand aan de knop',
    slug: '/diensten/smart-home-domotica',
    features: [
      'Smart TV installeren en koppelen',
      'Slimme verlichting instellen',
      'Slimme speakers instellen',
      'Videodeurbel installeren'
    ]
  },
  {
    title: 'Foto’s en bestanden veilig',
    description: 'Bestanden kwijt na een storing? Wij halen terug wat kan en zetten een automatische back-up op.',
    icon: 'database',
    image: '/dienst-dataherstel.webp',
    imageAlt: 'Externe harde schijf naast een open fotoalbum',
    slug: '/diensten/dataherstel-backup',
    features: [
      'Verwijderde bestanden terughalen',
      'Bestanden redden van kapotte schijven',
      'Automatische back-up instellen',
      'Uw foto\'s en documenten veiligstellen'
    ]
  },
  {
    title: 'Uitleg en training',
    description: 'Stap voor stap leren werken met uw apparaten, in uw tempo en in gewone taal.',
    icon: 'academic-cap',
    image: '/dienst-training.webp',
    imageAlt: 'Beschreven notitieblok naast een laptop',
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
  /** Toon korte beschrijving onder de titel — gebruikt voor zelf-kwalificatie op landingspagina's. */
  showDescription?: boolean
  /** Grote fotokaarten met dubbele rand. Het apparaat op de foto vertelt
      meteen waar de dienst over gaat — sterker dan een icoon. */
  photoCards?: boolean
  limitServices?: number
  showAllButton?: boolean
}

export default function ServicesSection({
  title = 'Onze diensten',
  subtitle,
  eyebrow,
  showDescription = false,
  photoCards = false,
  limitServices = 0,
  showAllButton = false,
}: ServicesSectionProps) {
  const displayServices = limitServices > 0 ? services.slice(0, limitServices) : services

  return (
    <section className="panel-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle max-w-2xl mx-auto mt-3">{subtitle}</p>}
        </div>

        {photoCards ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {displayServices.map((service, idx) => (
              <Link key={idx} href={service.slug} className="group card-bezel">
                <article className="card-bezel-inner flex flex-col h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <Image
                      src={service.image}
                      alt={service.imageAlt ?? ''}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-snug mb-5 flex-1">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-blue-700">
                      Bekijk deze hulp
                      <span
                        className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2.5} />
                      </span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : showDescription ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
            {displayServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.slug}
                className="group flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-3 bg-white rounded-2xl p-5 md:p-6 shadow-soft hover:shadow-soft-lg transition duration-300 hover:-translate-y-1 border border-gray-100"
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
                  {/* Zichtbare klik-aanwijzing: de hele kaart is een link, maar
                      onze doelgroep ontdekt dat niet via hover. */}
                  <span className="mt-3 inline-flex items-center gap-1.5 self-start md:self-center text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                    Bekijk deze hulp
                    <Icon name="arrow-right-short" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : null}

        {showAllButton && (
          <div className="text-center mt-10">
            <Link href="/diensten" className="btn-secondary">
              Alle diensten bekijken
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
