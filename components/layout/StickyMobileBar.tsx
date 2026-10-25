'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/icons'
import { BUSINESS } from '@/lib/constants'

/**
 * Sticky call-bar voor mobiel. Verschijnt na 30% scroll,
 * verdwijnt op pure conversiepagina's om ruis te voorkomen.
 */
export default function StickyMobileBar() {
  const [show, setShow] = useState(false)
  const pathname = usePathname()

  const hiddenPaths = ['/afspraak-maken', '/offerte-aanvragen', '/afspraak-bevestiging', '/offerte-bevestiging']
  const isHidden = hiddenPaths.includes(pathname)

  useEffect(() => {
    if (isHidden) {
      setShow(false)
      return
    }
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShow(window.scrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHidden])

  if (isHidden) return null

  return (
    <div
      className={`sm:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      /* inert hoort hier naast aria-hidden: zonder inert bleven de twee links
         in de tabvolgorde staan terwijl de balk buiten beeld stond, en dan
         land je met Tab op iets wat niemand ziet. */
      aria-hidden={!show}
      inert={!show}
    >
      <div className="bg-white border-t border-gray-200 shadow-lg px-3 py-3 flex gap-2" style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}>
        <a
          href={BUSINESS.PHONE_HREF}
          translate="no"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-xl py-3 font-semibold text-base shadow-sm whitespace-nowrap"
          aria-label={`Bel ${BUSINESS.PHONE}`}
        >
          <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
          Bel {BUSINESS.PHONE}
        </a>
        <Link
          href="/afspraak-maken"
          className="inline-flex items-center justify-center gap-1.5 bg-white border-2 border-gray-200 text-gray-900 rounded-xl px-3.5 font-medium text-sm whitespace-nowrap"
          aria-label="Online afspraak maken"
        >
          <Icon name="calendar" className="w-5 h-5 text-blue-600" strokeWidth={2} aria-hidden="true" />
          {/* Onder 390px valt het label weg, anders houdt het telefoonnummer
              in de knop ernaast te weinig ruimte over. Gemeten: met label op
              een scherm van 360px bleef er 4px speling, en het lettertype is
              system-ui, dus op een ander toestel valt dat net anders uit. */}
          <span className="hidden min-[390px]:inline">Afspraak</span>
        </Link>
        {/* WhatsApp zat hiervoor als zweefknop boven deze balk, en dekte daar
            doorlopend een stuk lopende tekst af - een vaste knop verschuift
            niet mee, dus er was geen stand waarin dat niet gebeurde. Wit met
            een groen merkteken: blauw blijft de zwaarste knop in de balk. */}
        <button
          type="button"
          onClick={() => {
            const msg = encodeURIComponent('Hallo! Ik heb een vraag over computerhulp aan huis.')
            // WhatsApp-klik meten als event (geen Ads-conversie: dat blijft bellen en formulier)
            const w = window as Window & { gtag?: (...args: unknown[]) => void }
            if (typeof w.gtag === 'function') {
              w.gtag('event', 'whatsapp_click', { event_category: 'contact', transport_type: 'beacon' })
            }
            window.open(`${BUSINESS.WHATSAPP_HREF}?text=${msg}`, '_blank', 'noopener,noreferrer')
          }}
          className="inline-flex w-12 flex-shrink-0 items-center justify-center bg-white border-2 border-gray-200 rounded-xl"
          aria-label="Stuur ons een WhatsApp-bericht"
        >
          <Icon name="whatsapp" className="w-6 h-6 text-[#25D366]" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
