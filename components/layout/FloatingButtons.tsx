'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Icon } from '@/components/icons'

export default function FloatingButtons() {
  const [show, setShow] = useState(false)
  const pathname = usePathname()

  // Hide on afspraak-maken page
  const isAfspraakMakenPage = pathname === '/afspraak-maken'

  // Check if we're on website laten maken page
  const isWebsitePage = pathname === '/website-laten-maken'

  // Determine button link and label based on page
  const contactLink = isWebsitePage ? '/offerte-aanvragen' : '/afspraak-maken'
  const contactLabel = isWebsitePage ? 'Offerte aanvragen' : 'Afspraak maken'

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight

          // Hide in hero section (first 95% of viewport - hero is min-h-[90vh])
          const pastHero = scrollY > windowHeight * 0.95

          // Hide near footer (last 400px of page)
          const nearFooter = scrollY + windowHeight > documentHeight - 400

          // Show only between hero and footer
          setShow(pastHero && !nearFooter)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Don't render on afspraak-maken page
  if (isAfspraakMakenPage) {
    return null
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hallo! Ik heb een vraag over computerhulp aan huis.')
    window.open(`https://wa.me/31642548451?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-50 transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      role="complementary"
      aria-label="Snelle actieknoppen"
    >
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group floating-btn bg-[#25D366] hover:bg-[#128C7E] hover:shadow-green-500/50"
        aria-label="WhatsApp ons"
      >
        <Icon name="whatsapp" className="w-7 h-7" />
        <span className="floating-tooltip">
          WhatsApp
        </span>
      </button>

      {/* Bel Button */}
      <a
        href="tel:+31858002006"
        className="group floating-btn bg-green-600 hover:bg-green-700 hover:shadow-green-500/50"
        aria-label="Direct bellen naar 085-8002006"
      >
        <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
        <span className="floating-tooltip">
          Bel: 085-8002006
        </span>
      </a>

      {/* Contact Button */}
      <Link
        href={contactLink}
        className="group floating-btn bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/50"
        aria-label={contactLabel}
      >
        <Icon name="calendar" className="w-6 h-6" strokeWidth={2} />
        <span className="floating-tooltip">
          {contactLabel}
        </span>
      </Link>
    </div>
  )
}
