'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/icons'
import { BUSINESS } from '@/lib/constants'

const NAV_ITEMS: { href: string; label: string; desktopClass?: string }[] = [
  { href: '/diensten', label: 'Diensten' },
  { href: '/tarieven', label: 'Tarieven' },
  { href: '/locaties', label: 'Locaties', desktopClass: 'hidden lg:inline' },
  { href: '/over-ons', label: 'Over Ons', desktopClass: 'hidden lg:inline' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Actieve pagina markeren, ook voor subpaden (/diensten/wifi-internet-hulp)
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

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

  // Sluit mobile menu met Escape, voorkomt focus-trap voor toetsenbordgebruikers
  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [mobileMenuOpen])

  // Body scroll lock, voorkomt dat achtergrond scrollt terwijl menu open is
  useEffect(() => {
    if (!mobileMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft-lg py-2'
          : 'bg-white py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo, fallback-tekst als image faalt */}
          <Link href="/" className="flex items-center group" aria-label={`Naar de homepage van ${BUSINESS.NAME}`}>
            <div className="relative h-10 w-[140px] md:h-11 md:w-[160px] lg:h-12 lg:w-[180px] flex items-center">
              <Image
                src="/logo.png"
                alt={BUSINESS.NAME}
                fill
                sizes="180px"
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

          {/* Desktop Navigation, toont vanaf md (768px) zodat ook smallere laptops items zien */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-5" aria-label="Hoofdnavigatie">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`nav-link text-sm lg:text-base ${item.desktopClass ?? ''} ${
                  isActive(item.href) ? 'nav-link-active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={BUSINESS.PHONE_HREF}
              translate="no"
              className="nav-link flex items-center gap-1.5 font-medium text-sm lg:text-base whitespace-nowrap"
              aria-label={`Bel ${BUSINESS.PHONE}`}
            >
              <Icon name="phone" className="w-4 h-4" strokeWidth={2} />
              {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-header-cta flex items-center gap-2 text-sm lg:text-base">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} />
            </Link>
          </nav>

          {/* Mobile: Phone + Menu */}
          <div className="flex items-center gap-2 md:hidden">
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
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 relative z-10 bg-white">
            <nav className="flex flex-col gap-1 pt-4" aria-label="Mobiele navigatie">
              {NAV_ITEMS.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`nav-mobile-link font-medium ${
                    isActive(item.href) ? 'nav-mobile-link-active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a href={BUSINESS.PHONE_HREF} onClick={() => setMobileMenuOpen(false)} className="nav-mobile-link font-medium text-blue-600 flex items-center gap-2">
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                {BUSINESS.PHONE}
              </a>
              <Link href="/afspraak-maken" onClick={() => setMobileMenuOpen(false)} className="btn-header-cta-mobile mt-2">
                Hulp vragen
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Backdrop, sluit menu bij tap buiten */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-full bg-black/40 -z-10"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
