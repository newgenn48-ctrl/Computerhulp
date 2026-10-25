'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/icons'

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

          // Eerder tonen: na een kwart scherm in plaats van een half, zodat de knop
          // niet pas onder de vouw en achter de cookie-banner verschijnt
          const pastHero = scrollY > windowHeight * 0.25
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
      /* Alleen vanaf sm. Op de telefoon zweefde hier een WhatsApp-knop die
         doorlopend een stuk lopende tekst afdekte; die zit nu in
         StickyMobileBar, waar hij niets bedekt.

         floating-cta: globals.css houdt deze knop weg zolang er nog geen
         cookiekeuze is gemaakt. Zonder dat stond hij onder de cookiebalk
         (z-40 tegen z-60) en keek je naar een knop die half onder een witte
         balk uitkwam. inert houdt hem ook buiten de tabvolgorde zolang hij
         onzichtbaar is. */
      className={`floating-cta hidden sm:block fixed sm:bottom-6 sm:right-6 z-40 transition duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      role="complementary"
      aria-label="Snelle actieknoppen"
      inert={!show}
    >
      {/* Computer en tablet: afspraak maken. Het telefoonnummer staat op deze
          schermen al permanent in de header; een tel:-link is daar weinig waard.
          Op de telefoon houdt StickyMobileBar het belnummer vooraan. */}
      <Link
        href="/afspraak-maken"
        className="inline-flex items-center gap-2.5 h-14 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-lg shadow-2xl transition duration-200 hover:-translate-y-0.5 whitespace-nowrap"
        aria-label="Online een afspraak maken"
      >
        <Icon name="calendar" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
        Afspraak maken
        <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
      </Link>
    </div>
  )
}
