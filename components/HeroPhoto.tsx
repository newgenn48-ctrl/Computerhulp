import type { CSSProperties } from 'react'
import Image from 'next/image'

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
  /** object-position onder 768px, voor een foto zonder eigen mobiel bestand. */
  positionMobile?: string
  /**
   * Alleen op de computer een achtergrondfoto, op de telefoon helemaal geen.
   *
   * Voor een hero waar de foto op de telefoon los onder de tekst staat in
   * plaats van erachter. De <source> geldt vanaf 768px; daaronder valt de
   * browser terug op de doorzichtige pixel, zodat een telefoon de brede
   * desktopfoto niet alsnog binnenhaalt. De achtergrond is dan decoratief -
   * de losse foto eronder draagt de beschrijving.
   */
  desktopOnly?: boolean
  /** Extra klassen naast .hero-photo. */
  className?: string
}

/** 1x1 doorzichtige gif: de telefoon haalt dan geen achtergrondfoto op. */
const LEEG = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

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
  desktopOnly = false,
  className = '',
}: HeroPhotoProps) {
  // Is er een eigen mobiel bestand, dan zit de uitsnede daar al in en zou een
  // object-position er nog een tweede keer overheen gaan. Alle hero's hebben er
  // inmiddels een, dus dit is er voor een foto die later zonder aankomt.
  const mobile = srcMobile ? undefined : positionMobile

  // Custom properties in plaats van een kale objectPosition: de mobiele
  // uitsnede moet uit een media query komen, en die kan geen inline style zijn.
  const style = {
    '--hero-pos': position ?? '50% 50%',
    ...(mobile ? { '--hero-pos-mobile': mobile } : {}),
  } as CSSProperties

  if (desktopOnly) {
    return (
      <picture>
        <source media="(min-width: 768px)" srcSet={src} />
        <img
          src={LEEG}
          alt=""
          aria-hidden="true"
          className={`hero-photo absolute inset-0 h-full w-full ${className}`.trim()}
          style={style}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
    )
  }

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
