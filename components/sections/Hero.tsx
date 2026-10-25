import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/icons'
import HeroPhoto from '@/components/HeroPhoto'
import { BUSINESS, PRICING } from '@/lib/constants'

export interface HeroPill {
  icon: string
  label: string
}

interface HeroProps {
  /** Achtergrondfoto, priority=true, sizes="100vw" */
  imageSrc: string
  imageAlt: string
  /** object-position van de achtergrondfoto, bv. "center 58%". Standaard gecentreerd. */
  imagePosition?: string
  /**
   * Aparte object-position onder 768px. Een 16:9-foto laat in de staande
   * herobak van een telefoon maar ~29% van zijn breedte zien, gecentreerd;
   * staat het onderwerp rechts in beeld, dan valt het er zonder deze waarde
   * buiten. Leeg laten betekent: dezelfde uitsnede als op de computer.
   */
  imagePositionMobile?: string
  /**
   * Eigen, vooraf bijgesneden bestand voor onder 768px.
   *
   * next/image schaalt de hele foto naar schermbreedte en snijdt pas daarna
   * bij, dus een telefoon kreeg zo'n 235 bronpixels uitgesmeerd over 780.
   * Een losse uitsnede is zowel scherper als lichter: de telefoon haalt
   * alleen nog dat bestand op in plaats van een brede desktopvariant.
   * Is deze gezet, dan is de uitsnede al gemaakt en blijft
   * imagePositionMobile buiten beeld.
   */
  imageSrcMobile?: string
  /**
   * Foto die op de telefoon los onder de tekst komt in plaats van erachter.
   *
   * Op de telefoon ligt er een vlakke laag van 70% ink over de hele hero,
   * waardoor een achtergrondfoto daar alleen nog sfeer is. Is deze gezet, dan
   * verdwijnt de achtergrondfoto onder 768px en staat de foto als eigen blok
   * onder de knoppen, onbedekt. Op de computer verandert er niets: imageSrc
   * blijft daar gewoon de achtergrond.
   */
  imageLooseMobile?: string
  /** Section aria-label, bv. "IT hulp aan huis hero" */
  ariaLabel?: string
  /** Kleine tekst boven H1, bijvoorbeeld "In heel Zuid-Holland". JSX toegestaan. */
  eyebrow: ReactNode
  /** H1-inhoud, JSX toegestaan zodat je een <span className="hero-highlight"> highlight kunt inzetten */
  title: ReactNode
  /** 1 of 2 paragrafen. Elke item wordt in eigen <p className="hero-description"> gerenderd */
  descriptions?: ReactNode[]
  /** Optionele voordelen onder de knoppen: korte regels met een groen vinkje, geen vakjes */
  pills?: HeroPill[]
  /** Regel met groen vinkje direct onder de knoppen. Lege string verbergt hem. */
  trustLine?: string
}

/**
 * Eén shared Hero voor alle landingspagina's.
 * CTA-volgorde is vast: witte bel-knop primair, glazen Afspraak maken secundair.
 * De vertrouwensregel noemt de prijs: 'wat kost het' is de eerste vraag van deze doelgroep.
 */
export default function Hero({
  imageSrc,
  imageAlt,
  imagePosition,
  imagePositionMobile,
  imageSrcMobile,
  imageLooseMobile,
  ariaLabel,
  eyebrow,
  title,
  descriptions = [],
  pills,
  trustLine = `Meestal binnen 24 uur bij u thuis · ${PRICING.PER_QUARTER} per kwartier, ${PRICING.TRAVEL} voorrijkosten`,
}: HeroProps) {
  return (
    <section className="hero-wrapper" aria-label={ariaLabel}>
      <div className="absolute inset-0">
        <HeroPhoto
          src={imageSrc}
          srcMobile={imageLooseMobile ? undefined : imageSrcMobile}
          alt={imageAlt}
          position={imagePosition}
          positionMobile={imagePositionMobile}
          desktopOnly={Boolean(imageLooseMobile)}
        />
        {/* Zonder achtergrondfoto op de telefoon is er niets om te dempen:
            .hero-wrapper is daar zelf al ink-900. */}
        {!imageLooseMobile && <div className="hero-overlay-mobile" />}
        <div className="hero-overlay-desktop-r" />
        <div className="hero-overlay-desktop-b" />
      </div>

      {/* Golvende afsluiting. Drie lagen: een lichte waas die net boven de
          hoofdgolf uitkomt, de golf zelf in de paginakleur, en een dunne
          lichtlijn over de kam. preserveAspectRatio="none" plet de viewBox
          tot de hoogte uit .hero-wave, dus de amplitude hieronder is ruim
          gekozen - anders blijft er op mobiel niets van de golf over. */}
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
          <path
            className="hero-wave-haze"
            d="M0,86 C240,14 480,14 720,52 C960,90 1200,90 1440,58 L1440,120 L0,120 Z"
          />
          <path
            className="hero-wave-body"
            d="M0,28 C240,104 480,104 720,56 C960,8 1200,8 1440,44 L1440,120 L0,120 Z"
          />
          <path
            className="hero-wave-crest"
            d="M0,28 C240,104 480,104 720,56 C960,8 1200,8 1440,44"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="hero-content">
        <div className="max-w-2xl">
          <p className="hero-eyebrow">{eyebrow}</p>
          <h1 className="hero-title">{title}</h1>

          {descriptions.map((desc, i) => (
            <p key={i} className="hero-description">{desc}</p>
          ))}

          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <a
              href={BUSINESS.PHONE_HREF}
              className="btn-hero-phone"
              aria-label={`Bel ${BUSINESS.PHONE}`}
            >
              <Icon name="phone" className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
              Bel {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-hero-secondary">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          {trustLine && (
            <p className="flex items-center gap-2 text-sm font-medium text-white mb-5">
              <Icon name="check-circle" className="w-4 h-4 text-green-400" strokeWidth={2.5} aria-hidden="true" />
              {trustLine}
            </p>
          )}

          {pills && pills.length > 0 && (
            <ul className="grid grid-cols-2 lg:flex lg:flex-wrap gap-x-5 gap-y-2.5 max-w-2xl" aria-label="In het kort">
              {pills.map((pill, i) => (
                <li key={i} className="hero-pill">
                  <Icon name="check-circle" className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                  <span>{pill.label}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Onderaan en niet bovenaan: de belknop moet op een telefoon in
              het eerste scherm blijven staan. */}
          {imageLooseMobile && (
            <Image
              src={imageLooseMobile}
              alt={imageAlt}
              width={1000}
              height={750}
              sizes="100vw"
              className="hero-photo-loose"
            />
          )}
        </div>
      </div>
    </section>
  )
}
