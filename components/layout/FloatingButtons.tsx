'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

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
    const handleScroll = () => {
      // Lower threshold for mobile (100px) vs desktop (300px)
      const threshold = window.innerWidth < 768 ? 100 : 300
      setShow(window.scrollY > threshold)
    }

    // Show immediately on mobile after small delay
    if (window.innerWidth < 768) {
      const timer = setTimeout(() => setShow(true), 1000)
      window.addEventListener('scroll', handleScroll)
      return () => {
        clearTimeout(timer)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Don't render on afspraak-maken page
  if (isAfspraakMakenPage) {
    return null
  }

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-50 transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      role="complementary"
      aria-label="Snelle actieknoppen"
    >
      {/* Bel Button */}
      <a
        href="tel:+31642548451"
        className="group relative w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl hover:shadow-green-500/50 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Direct bellen naar 06-42548451"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Bel: 06-42548451
        </span>
      </a>

      {/* Contact Button */}
      <a
        href={contactLink}
        className="group relative w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center transition-all hover:scale-110"
        aria-label={contactLabel}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          {contactLabel}
        </span>
      </a>
    </div>
  )
}
