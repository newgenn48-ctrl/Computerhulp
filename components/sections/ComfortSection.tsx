import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS } from '@/lib/constants'

interface ComfortSectionProps {
  /** Plaatsnaam voor de stadspagina's: "…bij u thuis in Den Haag". */
  cityName?: string
  /** Kopregel; standaard de geruststelling die onze doelgroep het meest mist. */
  title?: string
  eyebrow?: string
  /** 'student' zet de nadruk op de student, 'computerhulp' op de hulp zelf. */
  variant?: 'computerhulp' | 'student'
}

/**
 * De sectie die de drempel wegneemt. Wat onze doelgroep tegenhoudt is zelden
 * de prijs, maar de angst om dom gevonden te worden of iets kapot te maken.
 * Eén foto van hoe het er echt uitziet, vier concrete geruststellingen en
 * direct de knop om te bellen. Vervangt de vier losse iconkaarten.
 */
export default function ComfortSection({
  cityName,
  title = 'We leggen het uit alsof we naast u zitten.',
  eyebrow = 'Rustige uitleg aan huis',
  variant = 'computerhulp',
}: ComfortSectionProps) {
  const waar = cityName ? ` in ${cityName}` : ''
  const wie = variant === 'student' ? 'De student' : 'Onze student'

  const points = [
    {
      icon: 'chat',
      title: 'Gewone taal, geen vaktermen',
      desc: `${wie} laat zien waar u moet klikken en waarom. Snapt u het niet? Dan vertellen we het gewoon nog een keer.`,
    },
    {
      icon: 'home',
      title: 'Op uw eigen apparaat, aan uw eigen tafel',
      desc: `We komen bij u thuis${waar}. Niets meenemen, niets opnieuw instellen: alles blijft precies zoals u het gewend bent.`,
    },
    {
      icon: 'heart',
      title: 'Geen vraag is te klein',
      desc: 'Een knop die u niet kunt vinden is net zo goed een reden om te bellen als een computer die niet opstart.',
    },
    {
      icon: 'shield',
      title: 'U hoeft niets te kopen',
      desc: 'Geen abonnement, geen nieuwe apparaten. We lossen op wat u heeft en u betaalt pas achteraf, via pin of Tikkie.',
    },
  ]

  return (
    <section className="panel-section" aria-labelledby="comfort-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="panel overflow-hidden">
          <div className="grid lg:grid-cols-[1.05fr_1fr]">
            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
              <Image
                src="/hero-student.webp"
                alt={`Student legt aan de keukentafel rustig iets uit op een laptop aan een oudere klant${waar}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>

            <div className="p-6 sm:p-10 lg:p-12">
              <p className="section-eyebrow">{eyebrow}</p>
              <h2 id="comfort-heading" className="section-title">{title}</h2>
              <p className="section-subtitle mb-7">
                U krijgt geen snelle technische uitleg, maar duidelijke stappen. We controleren samen of alles
                werkt en schrijven de belangrijkste punten desgewenst kort voor u op.
              </p>

              <ul className="space-y-5">
                {points.map((p) => (
                  <li key={p.title} className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-700/20">
                      <Icon name={p.icon} className="w-5 h-5 text-white" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg leading-snug">{p.title}</h3>
                      <p className="text-gray-600 leading-relaxed mt-1">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2.5 mt-8">
                {['Rustig tempo', 'Uw eigen laptop of printer', 'Geen schaamte bij vragen'].map((t) => (
                  <span key={t} className="comfort-pill">
                    <Icon name="check-circle" className="w-4 h-4 text-blue-600" strokeWidth={2.5} aria-hidden="true" />
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                  {BUSINESS.PHONE}
                </a>
                <Link href="/afspraak-maken" className="btn-secondary">
                  Afspraak maken
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
