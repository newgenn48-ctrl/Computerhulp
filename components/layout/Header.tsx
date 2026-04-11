'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/icons'

export default function Header() {
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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-32 sm:h-14 sm:w-[180px] -translate-y-1">
              <Image
                src="/Computerhulp Zuid Holland Logo.webp"
                alt="Computerhulp Zuid-Holland"
                fill
                sizes="180px"
                className="object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Hoofdnavigatie">
            <Link href="/diensten" className="nav-link">
              Diensten
            </Link>
            <Link href="/tarieven" className="nav-link">
              Tarieven
            </Link>
            <Link href="/over-ons" className="nav-link">
              Over Ons
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <a href="tel:+31858002006" className="nav-link font-semibold text-blue-600 flex items-center gap-2">
              <Icon name="phone" className="w-4 h-4" strokeWidth={2} />
              085-8002006
            </a>
            <Link
              href="/afspraak-maken"
              className="btn-header-cta"
            >
              Hulp Vragen
            </Link>
          </nav>

          {/* Mobile: Phone + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+31858002006"
              className="p-3 text-blue-600 hover:text-blue-700"
              aria-label="Bel 085-8002006"
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
              <Link href="/diensten" onClick={() => setMobileMenuOpen(false)} className="nav-mobile-link font-medium">
                Diensten
              </Link>
              <Link href="/tarieven" onClick={() => setMobileMenuOpen(false)} className="nav-mobile-link font-medium">
                Tarieven
              </Link>
              <Link href="/over-ons" onClick={() => setMobileMenuOpen(false)} className="nav-mobile-link font-medium">
                Over Ons
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="nav-mobile-link font-medium">
                Contact
              </Link>
              <a href="tel:+31858002006" onClick={() => setMobileMenuOpen(false)} className="nav-mobile-link font-medium text-blue-600 flex items-center gap-2">
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                Bel 085-8002006
              </a>
              <Link
                href="/afspraak-maken"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-header-cta-mobile mt-2"
              >
                Hulp Vragen
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
