'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/icons'
import { BUSINESS } from '@/lib/constants'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft-lg py-3'
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo — fallback-tekst als image faalt */}
          <Link href="/" className="flex items-center group" aria-label={`Naar de homepage van ${BUSINESS.NAME}`}>
            <div className="relative h-12 w-[150px] sm:h-16 sm:w-[220px] flex items-center">
              <Image
                src="/logo.png"
                alt={BUSINESS.NAME}
                fill
                sizes="220px"
                className="object-contain"
                priority
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const next = target.nextElementSibling as HTMLElement | null
                  if (next) next.style.display = 'block'
                }}
              />
              <span className="hidden text-blue-700 font-bold text-base sm:text-lg" aria-hidden="true">
                {BUSINESS.NAME}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Hoofdnavigatie">
            <Link href="/diensten" className="nav-link">Diensten</Link>
            <Link href="/tarieven" className="nav-link">Tarieven</Link>
            <Link href="/over-ons" className="nav-link">Over Ons</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/afspraak-maken" className="nav-link font-medium">Hulp Vragen</Link>
            <a href={BUSINESS.PHONE_HREF} className="btn-header-cta flex items-center gap-2" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-4 h-4" strokeWidth={2} />
              {BUSINESS.PHONE}
            </a>
          </nav>

          {/* Mobile: Phone + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS.PHONE_HREF}
              className="p-3 text-blue-600 hover:text-blue-700"
              aria-label={`Bel ${BUSINESS.PHONE}`}
            >
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
            </a>
            <button
              type="button"
              className="p-3 -mr-2 text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Sluit menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="w-6 h-6" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-1 pt-4" aria-label="Mobiele navigatie">
              <Link href="/diensten" onClick={() => setMobileMenuOpen(false)} className="nav-mobile-link font-medium">Diensten</Link>
              <Link href="/tarieven" onClick={() => setMobileMenuOpen(false)} className="nav-mobile-link font-medium">Tarieven</Link>
              <Link href="/over-ons" onClick={() => setMobileMenuOpen(false)} className="nav-mobile-link font-medium">Over Ons</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="nav-mobile-link font-medium">Contact</Link>
              <a href={BUSINESS.PHONE_HREF} onClick={() => setMobileMenuOpen(false)} className="nav-mobile-link font-medium text-blue-600 flex items-center gap-2">
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                Bel {BUSINESS.PHONE}
              </a>
              <Link href="/afspraak-maken" onClick={() => setMobileMenuOpen(false)} className="btn-header-cta-mobile mt-2">
                Hulp Vragen
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
