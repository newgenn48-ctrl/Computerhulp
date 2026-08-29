import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/icons'
import { BUSINESS, HOURS } from '@/lib/constants'
import { TOP_CITIES } from '@/lib/cities'


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Bedrijfsinfo */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt={BUSINESS.NAME}
                width={220}
                height={87}
                className="brightness-0 invert hover:opacity-80 transition-opacity"
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
            <p className="text-gray-300 text-sm mb-4 max-w-md">
              Al meer dan {BUSINESS.YEARS_ACTIVE} jaar uw partner voor computerhulp, printerhulp en IT-ondersteuning
              aan huis in heel {BUSINESS.REGION}. Binnen 24 uur bij u thuis.
            </p>
            {/* Info links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/over-ons" className="footer-link">
                Over Ons
              </Link>
              <Link href="/waarom-ons" className="footer-link">
                Waarom Ons
              </Link>
              <Link href="/tarieven" className="footer-link">
                Tarieven
              </Link>
              <Link href="/faq" className="footer-link">
                FAQ
              </Link>
              <Link href="/privacy" className="footer-link">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="footer-link">
                Voorwaarden
              </Link>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="font-bold text-lg mb-4">Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/computerhulp-aan-huis" className="footer-link">
                  Computerhulp aan Huis
                </Link>
              </li>
              <li>
                <Link href="/student-aan-huis" className="footer-link">
                  Student aan Huis
                </Link>
              </li>
              <li>
                <Link href="/it-hulp" className="footer-link">
                  IT-Hulp aan Huis
                </Link>
              </li>
              <li>
                <Link href="/website-laten-maken" className="footer-link">
                  Website Laten Maken
                </Link>
              </li>
              <li>
                <Link href="/diensten/computer-laptop-hulp" className="footer-link">
                  Computer & Laptop
                </Link>
              </li>
              <li>
                <Link href="/diensten/printer-scanner-hulp" className="footer-link">
                  Printer & Scanner
                </Link>
              </li>
              <li>
                <Link href="/diensten/wifi-internet-hulp" className="footer-link">
                  WiFi & Internet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={BUSINESS.PHONE_HREF} translate="no" className="footer-link flex items-center gap-2 whitespace-nowrap">
                  <Icon name="phone" className="w-4 h-4" strokeWidth={2} />
                  {BUSINESS.PHONE}
                </a>
              </li>
              <li>
                <a href={BUSINESS.EMAIL_HREF} className="footer-link flex items-center gap-2">
                  <Icon name="email" className="w-4 h-4" strokeWidth={2} />
                  {BUSINESS.EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link flex items-center gap-2 whitespace-nowrap"
                >
                  <Icon name="whatsapp" className="w-4 h-4" />
                  <span translate="no">{BUSINESS.WHATSAPP}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Bedrijfsgegevens */}
          <div>
            <h3 className="font-bold text-lg mb-4">Bedrijf</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>KvK: {BUSINESS.KVK}</li>
              <li>BTW: {BUSINESS.BTW}</li>
              <li className="pt-2">
                <div className="font-semibold text-white">Werkgebied</div>
                <div>Heel {BUSINESS.REGION}</div>
              </li>
              <li>
                <div className="font-semibold text-white">Bereikbaar</div>
                <div>Ma–zo · {HOURS.OPEN}–{HOURS.CLOSE}</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Steden */}
        <div className="mt-10 pt-8 border-t border-ink-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-300">We werken in heel Zuid-Holland, waaronder:</span>
            <Link href="/locaties" className="text-sm text-blue-400 hover:text-blue-300 transition flex items-center gap-1">
              Alle locaties
              <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {TOP_CITIES.map(city => (
              <Link
                key={city.slug}
                href={`/computerhulp-aan-huis-${city.slug}`}
                className="footer-city-tag"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-ink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs text-gray-400 text-center">
            {BUSINESS.NAME} is een onafhankelijke dienstverlener (KvK: {BUSINESS.KVK}) en is niet gelieerd aan enige fabrikant of softwareleverancier.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <div>
              © {currentYear} {BUSINESS.NAME}. Alle rechten voorbehouden.
            </div>
            <div className="flex items-center gap-1">
              Made with{' '}
              <Icon name="heart" className="w-4 h-4 text-red-500" />
              {' '}by{' '}
              <a
                href="https://startbeheer.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                Start Beheer Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
