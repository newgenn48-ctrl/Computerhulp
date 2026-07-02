import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS } from '@/lib/constants'

export interface HeroPill {
  icon: string
  label: string
}

interface HeroProps {
  /** Achtergrondfoto — priority=true, sizes="100vw" */
  imageSrc: string
  imageAlt: string
  /** Section aria-label — bv. "IT hulp aan huis hero" */
  ariaLabel?: string
  /** Kleine tekst boven H1 — meestal "5000+ tevreden klanten" */
  eyebrow: string
  /** H1-inhoud — JSX toegestaan zodat je een <span className="text-blue-300"> highlight kunt inzetten */
  title: ReactNode
  /** 1 of 2 paragrafen. Elke item wordt in eigen <p className="hero-description"> gerenderd */
  descriptions?: ReactNode[]
  /** Optionele trust-pills onder de CTAs */
  pills?: HeroPill[]
}

/**
 * Eén shared Hero voor alle landingspagina's.
 * CTA-volgorde is vast: witte bel-knop primair, gradient Afspraak Maken secundair.
 */
export default function Hero({
  imageSrc,
  imageAlt,
  ariaLabel,
  eyebrow,
  title,
  descriptions = [],
  pills,
}: HeroProps) {
  return (
    <section className="hero-wrapper" aria-label={ariaLabel}>
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay-mobile" />
        <div className="hero-overlay-desktop-r" />
        <div className="hero-overlay-desktop-b" />
      </div>

      <div className="hero-content">
        <div className="max-w-2xl">
          <p className="hero-eyebrow">{eyebrow}</p>
          <h1 className="hero-title">{title}</h1>

          {descriptions.map((desc, i) => (
            <p key={i} className="hero-description">{desc}</p>
          ))}

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href={BUSINESS.PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-bold text-blue-700 bg-white hover:bg-blue-50 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-black/30"
              aria-label={`Bel ${BUSINESS.PHONE}`}
            >
              <Icon name="phone" className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
              {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-hero-primary">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          {pills && pills.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {pills.map((pill, i) => (
                <span key={i} className="hero-pill">
                  <Icon name={pill.icon} className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                  {pill.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
