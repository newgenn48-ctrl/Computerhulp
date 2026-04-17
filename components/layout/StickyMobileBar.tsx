'use client'

import { useState, useEffect } from 'react'
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
          const scrolled = window.scrollY
          const pageHeight = document.documentElement.scrollHeight - window.innerHeight
          const pct = pageHeight > 0 ? scrolled / pageHeight : 0
          setShow(pct > 0.1 && scrolled > 300)
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
      aria-hidden={!show}
    >
      <div className="bg-white border-t border-gray-200 shadow-lg px-3 py-3 flex gap-2">
        <a
          href={BUSINESS.PHONE_HREF}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold text-base shadow-sm"
          aria-label={`Bel ${BUSINESS.PHONE}`}
        >
          <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
          Bel {BUSINESS.PHONE}
        </a>
        <a
          href="/afspraak-maken"
          className="inline-flex items-center justify-center gap-1 bg-white border-2 border-gray-200 text-gray-900 rounded-xl px-4 font-medium text-sm"
          aria-label="Online afspraak maken"
        >
          <Icon name="calendar" className="w-5 h-5 text-blue-600" strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
