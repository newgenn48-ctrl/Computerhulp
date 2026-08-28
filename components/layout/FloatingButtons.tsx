'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/icons'
import { BUSINESS } from '@/lib/constants'

export default function FloatingButtons() {
  const [show, setShow] = useState(false)
  const pathname = usePathname()

  const isAfspraakMakenPage = pathname === '/afspraak-maken'

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight

          const pastHero = scrollY > windowHeight * 0.5
          const nearFooter = scrollY + windowHeight > documentHeight - 400

          setShow(pastHero && !nearFooter)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isAfspraakMakenPage) return null

  return (
    <div
      className={`fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-40 transition duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      role="complementary"
      aria-label="Snelle actieknoppen"
    >
      {/* Mobile: alleen WhatsApp (phone & afspraak zitten in StickyMobileBar) */}
      <div className="flex flex-col gap-3 sm:hidden">
        <button
          onClick={() => {
            const msg = encodeURIComponent('Hallo! Ik heb een vraag over computerhulp aan huis.')
            window.open(`${BUSINESS.WHATSAPP_HREF}?text=${msg}`, '_blank', 'noopener,noreferrer')
          }}
          className="group floating-btn bg-[#25D366] hover:bg-[#128C7E] shadow-2xl"
          aria-label="WhatsApp ons"
        >
          <Icon name="whatsapp" className="w-7 h-7" />
        </button>
      </div>

      {/* Desktop: het belnummer zelf, leesbaar. Een tel:-link is op een
          laptop weinig waard, het nummer kunnen aflezen wel. De agenda-CTA
          staat op desktop al permanent in de header. */}
      <div className="hidden sm:block">
        <a
          href={BUSINESS.PHONE_HREF}
          translate="no"
          className="inline-flex items-center gap-2.5 h-14 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-lg shadow-2xl transition duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          aria-label={`Bel ${BUSINESS.PHONE}`}
        >
          <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
          {BUSINESS.PHONE}
        </a>
      </div>
    </div>
  )
}
