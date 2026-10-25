import type { CSSProperties } from 'react'
import Image from 'next/image'

/**
 * Standaard uitsnede per foto op de telefoon.
 *
 * Een 16:9-foto in de staande herobak van een telefoon toont nog maar zo'n
 * 29% van zijn breedte, gecentreerd. Bij de foto's met mensen erop staat het
 * onderwerp rechts in beeld, dus die vielen er op mobiel volledig buiten: van
 * de oude homepagehero bleef een witte deur met een half hoofd over. De
 * dienstfoto's zijn close-ups en staan vanzelf goed, die horen hier niet in.
 *
 * Het hoort bij de foto en niet bij de pagina, dus staat het hier en niet in
 * elke aanroep. Een pagina kan het alsnog overschrijven met positionMobile.
 * Een foto met een eigen mobiel bestand heeft hier niets te zoeken: die
 * uitsnede zit al in het bestand.
 *
 * Sinds alle hero's de tafelfoto gebruiken staat hier niemand meer op; de
 * gemeten waarden blijven staan omdat de foto's nog in de repo zitten en
 * elders gebruikt worden.
 */
const MOBILE_POSITION: Record<string, string> = {
  '/hero-computerhulp.webp': '89% center',
  '/hero-student.webp': '70% center',
  '/hero-locaties.webp': '70% center',
}

export interface HeroPhotoProps {
  src: string
  alt: string
  /**
   * Eigen, vooraf bijgesneden bestand voor onder 768px.
   *
   * next/image schaalt de hele foto naar schermbreedte en snijdt pas daarna
   * bij, dus een telefoon kreeg zo'n 235 bronpixels uitgesmeerd over 780 -
   * de resolutie van het origineel hielp daar niets aan. Een losse uitsnede
   * is zowel scherper als lichter: de telefoon haalt alleen nog dat bestand
   * op in plaats van een brede desktopvariant.
   */
  srcMobile?: string
  /** object-position op de computer, bv. "center 58%". Standaard gecentreerd. */
  position?: string
  /** object-position onder 768px. Zonder srcMobile valt hij terug op de tabel hierboven. */
  positionMobile?: string
  /** Extra klassen naast .hero-photo. */
  className?: string
}

/**
 * De foto achter een hero, op beide schermformaten goed uitgesneden.
 *
 * Gedeeld door de shared Hero en door de twee pagina's met een eigen
 * heroblok (/diensten en /locaties), zodat de uitsnede-regels op één plek
 * staan en niet op drie.
 */
export default function HeroPhoto({
  src,
  alt,
  srcMobile,
  position,
  positionMobile,
  className = '',
}: HeroPhotoProps) {
  // Is er een eigen mobiel bestand, dan zit de uitsnede daar al in en zou
  // een object-position er nog een tweede keer overheen gaan.
  const mobile = srcMobile ? undefined : positionMobile ?? MOBILE_POSITION[src]

  // Custom properties in plaats van een kale objectPosition: de mobiele
  // uitsnede moet uit een media query komen, en die kan geen inline style zijn.
  const style = {
    '--hero-pos': position ?? '50% 50%',
    ...(mobile ? { '--hero-pos-mobile': mobile } : {}),
  } as CSSProperties

  if (!srcMobile) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`hero-photo ${className}`.trim()}
        style={style}
        priority
        fetchPriority="high"
        quality={65}
        sizes="100vw"
      />
    )
  }

  // <picture> en niet twee <Image>'en met display:none: een verborgen <img>
  // wordt door de browser alsnog opgehaald, dus dat zou beide bestanden
  // downloaden. De bestanden zijn al als webp geoptimaliseerd, dus next/image
  // heeft hier niets meer toe te voegen.
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={src} />
      <img
        src={srcMobile}
        alt={alt}
        className={`hero-photo absolute inset-0 h-full w-full ${className}`.trim()}
        style={style}
        fetchPriority="high"
        decoding="async"
      />
    </picture>
  )
}
