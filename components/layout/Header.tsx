'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dienstenOpen, setDienstenOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
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
            <div className="relative h-14 w-auto -translate-y-1">
              <Image
                src="/Computerhulp Zuid Holland Logo.webp"
                alt="Computerhulp Zuid-Holland"
                width={180}
                height={56}
                className="object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Hoofdnavigatie">
            {/* Diensten Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setDienstenOpen(true)}
                onMouseLeave={() => setDienstenOpen(false)}
                aria-label="Diensten menu"
                aria-expanded={dienstenOpen}
                aria-haspopup="true"
              >
                Diensten
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                  dienstenOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                role="menu"
                aria-label="Diensten submenu"
                onMouseEnter={() => setDienstenOpen(true)}
                onMouseLeave={() => setDienstenOpen(false)}
              >
                <Link href="/diensten/computer-laptop-hulp" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  💻 Computer & Laptop Hulp
                </Link>
                <Link href="/diensten/printer-scanner-hulp" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  🖨️ Printer & Scanner Hulp
                </Link>
                <Link href="/diensten/wifi-internet-hulp" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  📶 WiFi & Internet Hulp
                </Link>
                <Link href="/diensten/email-hulp" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  📧 E-mail Hulp
                </Link>
                <Link href="/diensten/tablet-smartphone-hulp" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  📱 Tablet & Smartphone Hulp
                </Link>
                <Link href="/diensten/persoonlijke-training" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  🎓 Persoonlijke Training
                </Link>
                <Link href="/diensten/televisie-radio" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  📺 Televisie & Radio
                </Link>
                <Link href="/diensten/smart-home-domotica" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  🏠 Smart Home & Domotica
                </Link>
                <Link href="/diensten/dataherstel-backup" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  💾 Dataherstel & Backup
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <Link href="/website-laten-maken" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                  🌐 Website Laten Maken
                </Link>
              </div>
            </div>

            <Link href="/over-ons" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Over Ons
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
            <Link
              href="/afspraak-maken"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Hulp Vragen
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2 pt-4" aria-label="Mobiele navigatie">
              <Link href="/diensten/computer-laptop-hulp" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                💻 Computer & Laptop Hulp
              </Link>
              <Link href="/diensten/printer-scanner-hulp" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                🖨️ Printer & Scanner Hulp
              </Link>
              <Link href="/diensten/wifi-internet-hulp" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                📶 WiFi & Internet Hulp
              </Link>
              <Link href="/diensten/email-hulp" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                📧 E-mail Hulp
              </Link>
              <Link href="/diensten/tablet-smartphone-hulp" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                📱 Tablet & Smartphone Hulp
              </Link>
              <Link href="/diensten/persoonlijke-training" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                🎓 Persoonlijke Training
              </Link>
              <Link href="/diensten/televisie-radio" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                📺 Televisie & Radio
              </Link>
              <Link href="/diensten/smart-home-domotica" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                🏠 Smart Home & Domotica
              </Link>
              <Link href="/diensten/dataherstel-backup" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                💾 Dataherstel & Backup
              </Link>
              <div className="border-t border-gray-100 my-2"></div>
              <Link href="/website-laten-maken" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
                🌐 Website Laten Maken
              </Link>
              <div className="border-t border-gray-100 my-2"></div>
              <Link href="/over-ons" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
                Over Ons
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
                Contact
              </Link>
              <Link
                href="/afspraak-maken"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg"
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
