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
  /** Foto bij de sectie. Moet verschillen van de hero op dezelfde pagina:
   *  tweemaal dezelfde keukentafel binnen één scroll valt op. */
  imageSrc?: string
  imageAlt?: string
  /** object-position van de foto. De mensen staan rechts in beeld; in deze
   *  hoge kolom snijdt een gecentreerde uitsnede ze er juist af. */
  imagePosition?: string
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
  imageSrc = '/hero-student.webp',
  imagePosition = '90% center',
  imageAlt = 'Student legt aan de keukentafel rustig iets uit op een laptop aan een oudere klant',
}: ComfortSectionProps) {
  const waar = cityName ? ` in ${cityName}` : ''

  // De twee varianten stonden hier op één woord na dezelfde tekst, terwijl ze
  // op dezelfde stad mikken. De computerhulp-pagina gaat over wat er kapot is,
  // de studentpagina over wie er voor u staat.
  const points = variant === 'student'
    ? [
        {
          icon: 'academic-cap',
          title: 'Een student, geen monteur',
          desc: 'Hij neemt de tijd en praat niet over uw hoofd heen.',
        },
        {
          icon: 'home',
          title: 'Aan uw eigen keukentafel',
          desc: `Hij werkt bij u thuis${waar}, op uw eigen apparaat.`,
        },
        {
          icon: 'chat',
          title: 'U mag alles vragen',
          desc: 'Ook die ene van vorige week. Zo vaak als u wilt.',
        },
        {
          icon: 'shield',
          title: 'U zit nergens aan vast',
          desc: 'Geen abonnement. U rekent achteraf af.',
        },
      ]
    : [
        {
          icon: 'chat',
          title: 'Gewone taal, geen vaktermen',
          desc: 'Snapt u het niet? Dan leggen we het nog een keer uit.',
        },
        {
          icon: 'home',
          title: 'Aan uw eigen tafel',
          desc: `Wij komen bij u thuis${waar}. U hoeft niets mee te nemen.`,
        },
        {
          icon: 'heart',
          title: 'Geen vraag is te klein',
          desc: 'Een knop die u niet kunt vinden telt net zo goed.',
        },
        {
          icon: 'shield',
          title: 'U hoeft niets te kopen',
          desc: 'Geen abonnement. U betaalt pas achteraf.',
        },
      ]

  return (
    <section className="panel-section" aria-labelledby="comfort-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="panel overflow-hidden">
          <div className="grid lg:grid-cols-[1.05fr_1fr]">
            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
              <Image
                src={imageSrc}
                alt={`${imageAlt}${waar}`}
                fill
                className="object-cover"
                style={{ objectPosition: imagePosition }}
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
                      <h3 className="font-bold text-gray-900 text-xl leading-snug">{p.title}</h3>
                      <p className="body-copy text-gray-600 mt-1">{p.desc}</p>
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
