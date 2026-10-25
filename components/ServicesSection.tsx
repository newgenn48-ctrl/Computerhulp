import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/icons'

export const services = [
  {
    title: 'Computer & Laptop',
    shortTitle: 'Computer',
    description: 'Trage computer of laptop weer snel: opschonen, updates, opstartproblemen en rustige uitleg.',
    icon: 'laptop',
    image: '/dienst-computer-laptop.webp',
    imageAlt: 'Student wijst iets aan op de laptop van een oudere man aan de eettafel',
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
    shortTitle: 'Wifi & internet',
    description: 'Traag internet, wegvallende wifi of slechte dekking in huis: wij lossen het op en verbeteren het bereik.',
    icon: 'wifi',
    image: '/dienst-wifi.webp',
    imageAlt: 'Student sluit de wifi-router aan terwijl de bewoonster meekijkt',
    slug: '/diensten/wifi-internet-hulp',
    features: [
      'Wifi router installeren en instellen',
      'Bereik en snelheid verbeteren',
      'Apparaten verbinden met uw wifi',
      'Uw wifi veilig maken'
    ]
  },
  {
    title: 'Printer installeren',
    shortTitle: 'Printer',
    description: 'Nieuwe printer aansluiten, draadloos printen, scanner instellen en printerstoringen oplossen.',
    icon: 'printer',
    image: '/dienst-printer-scanner.webp',
    imageAlt: 'Student laat een vers afgedrukte foto zien aan een oudere vrouw bij de printer',
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
    shortTitle: 'E-mail',
    description: 'E-mail instellen op computer of telefoon, weer toegang krijgen en ongewenste mail stoppen.',
    icon: 'email',
    image: '/dienst-email.webp',
    imageAlt: 'Student legt aan tafel de e-mail uit terwijl de oudere man zelf typt',
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
    shortTitle: 'Tablet & telefoon',
    description: 'Nieuwe tablet of telefoon instellen, apps, foto’s overzetten en videobellen, rustig uitgelegd.',
    icon: 'mobile',
    image: '/dienst-tablet-smartphone.webp',
    imageAlt: 'Student wijst iets aan op de tablet van een oudere vrouw',
    slug: '/diensten/smartphone-hulp-aan-huis',
    features: [
      'Nieuwe tablet of telefoon instellen',
      'Apps installeren en instellen',
      'Alle merken tablets en telefoons',
      'Foto\'s en contacten overzetten'
    ]
  },
  {
    title: 'Televisie & streamen',
    shortTitle: 'Televisie',
    description: 'Smart-tv instellen, zenders op volgorde, decoder en Netflix werkend, soundbar aangesloten.',
    icon: 'tv',
    image: '/dienst-tv.webp',
    imageAlt: 'Student legt de smart-tv uit aan een man in zijn stoel',
    slug: '/diensten/tv-installatie',
    features: [
      'Smart-tv installeren en instellen',
      'Zenders instellen en sorteren',
      'Decoder en mediabox instellen',
      'Soundbar aansluiten',
      'Netflix, YouTube en andere apps instellen'
    ]
  },
  {
    title: 'Computerhulp voor senioren',
    shortTitle: 'Voor senioren',
    description: 'Rustige hulp in uw tempo, op uw eigen apparaat. Geen vraag is te klein en u hoeft niets te kopen.',
    icon: 'users',
    image: '/dienst-senioren.webp',
    imageAlt: 'Oudere vrouw werkt zelf op de laptop, de student kijkt naast haar mee',
    slug: '/diensten/computerhulp-senioren',
    features: [
      'Alles in gewone taal uitgelegd',
      'Stappen op papier om na te lezen',
      'Geen haast, geen verkooppraatjes',
      'Ook voor kleine vragen'
    ]
  },
  {
    title: 'Smart Home',
    shortTitle: 'Smart home',
    description: 'Slimme lampen, deurbel of speakers, wij koppelen alles en lossen storingen op.',
    icon: 'lightbulb',
    image: '/dienst-smart-home.webp',
    imageAlt: 'Student stelt de slimme thermostaat in terwijl de bewoner meekijkt',
    slug: '/diensten/smart-home-domotica',
    features: [
      'Smart-tv installeren en koppelen',
      'Slimme verlichting instellen',
      'Slimme speakers instellen',
      'Videodeurbel installeren'
    ]
  },
  {
    title: 'Foto’s en bestanden veilig',
    shortTitle: 'Foto’s & back-up',
    description: 'Bestanden kwijt na een storing? Wij halen terug wat kan en zetten een automatische back-up op.',
    icon: 'database',
    image: '/dienst-dataherstel.webp',
    imageAlt: 'Student sluit een harde schijf aan naast het fotoalbum van een oudere vrouw',
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
    shortTitle: 'Computerles',
    description: 'Computerles aan huis: stap voor stap leren werken met uw apparaten, in uw tempo en in gewone taal.',
    icon: 'academic-cap',
    image: '/dienst-training.webp',
    imageAlt: 'Oudere man schrijft een stap op terwijl de student de laptop uitlegt',
    slug: '/diensten/computercursus-ouderen',
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
  /** Toon korte beschrijving onder de titel, gebruikt voor zelf-kwalificatie op landingspagina's. */
  showDescription?: boolean
  /** Grote fotokaarten met dubbele rand. Op elke foto staat een student
      samen met een klant bij het apparaat: wie er komt is voor deze
      doelgroep overtuigender dan het apparaat alleen. */
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {displayServices.map((service, idx) => (
              <Link key={idx} href={service.slug} className="group service-tile">
                <div className="relative aspect-square overflow-hidden bg-surface">
                  {/* De foto is hier decoratief: de naam eronder zegt al
                      waar de tegel over gaat, dus een alt-tekst zou de
                      linknaam alleen verdubbelen. */}
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Tekst links uitgelijnd, niet gecentreerd: een beschrijving van
                    vier regels midden op de kaart leest slecht, zeker voor wie
                    wat ouder is. De naam blijft de blikvanger. */}
                <div className="flex flex-1 flex-col px-4 py-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors text-balance">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-1.5 text-gray-600 text-pretty">
                    {service.description}
                  </p>
                </div>
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
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-1.5">
                    {service.title}
                  </h3>
                  <p className="body-copy text-gray-600">
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
