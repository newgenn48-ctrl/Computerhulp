import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/icons'

const footerCities = [
  { name: 'Den Haag', slug: 'den-haag' },
  { name: 'Rotterdam', slug: 'rotterdam' },
  { name: 'Leiden', slug: 'leiden' },
  { name: 'Delft', slug: 'delft' },
  { name: 'Zoetermeer', slug: 'zoetermeer' },
  { name: 'Gouda', slug: 'gouda' },
  { name: 'Dordrecht', slug: 'dordrecht' },
  { name: 'Alphen aan den Rijn', slug: 'alphen-aan-den-rijn' },
  { name: 'Westland', slug: 'westland' },
  { name: 'Capelle aan den IJssel', slug: 'capelle-aan-den-ijssel' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Bedrijfsinfo */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Computerhulp Zuid Holland Logo.webp"
                alt="Computerhulp Zuid-Holland"
                width={180}
                height={56}
                className="brightness-0 invert hover:opacity-80 transition-opacity"
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
            <p className="text-gray-300 text-sm mb-4 max-w-md">
              Al meer dan 10 jaar uw partner voor computerhulp, printerhulp en IT-ondersteuning
              aan huis in heel Zuid-Holland. Binnen 24 uur bij u thuis.
            </p>
            {/* Info links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/over-ons" className="footer-link">
                Over Ons
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
                <a href="tel:+31858002006" className="footer-link flex items-center gap-2">
                  <Icon name="phone" className="w-4 h-4" strokeWidth={2} />
                  085-8002006
                </a>
              </li>
              <li>
                <a href="mailto:info@computerhulpzh.nl" className="footer-link flex items-center gap-2">
                  <Icon name="email" className="w-4 h-4" strokeWidth={2} />
                  info@computerhulpzh.nl
                </a>
              </li>
            </ul>
          </div>

          {/* Bedrijfsgegevens */}
          <div>
            <h3 className="font-bold text-lg mb-4">Bedrijf</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>KvK: 91310318</li>
              <li>BTW: NL865613461B01</li>
              <li className="pt-2">
                <div className="font-semibold text-white">Werkgebied</div>
                <div>Heel Zuid-Holland</div>
              </li>
              <li>
                <div className="font-semibold text-white">Bereikbaar</div>
                <div>Ma-Zo: 08:00 - 22:00</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Steden */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-300">We werken in heel Zuid-Holland, waaronder:</span>
            <Link href="/locaties" className="text-sm text-blue-400 hover:text-blue-300 transition flex items-center gap-1">
              Alle locaties
              <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {footerCities.map(city => (
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
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs text-gray-400 text-center">
            Computerhulp Zuid-Holland is een onafhankelijke dienstverlener (KvK: 91310318) en is niet gelieerd aan enige fabrikant of softwareleverancier.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <div>
              © {currentYear} Computerhulp Zuid-Holland. Alle rechten voorbehouden.
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
