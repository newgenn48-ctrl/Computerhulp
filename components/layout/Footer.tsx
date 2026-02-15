import Link from 'next/link'
import Image from 'next/image'

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
              <Link href="/over-ons" className="text-gray-300 hover:text-white transition">
                Over Ons
              </Link>
              <Link href="/faq" className="text-gray-300 hover:text-white transition">
                FAQ
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="text-gray-300 hover:text-white transition">
                Voorwaarden
              </Link>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="font-bold text-lg mb-4">Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/computerhulp-aan-huis" className="text-gray-300 hover:text-white transition">
                  Computerhulp aan Huis
                </Link>
              </li>
              <li>
                <Link href="/student-aan-huis" className="text-gray-300 hover:text-white transition">
                  Student aan Huis
                </Link>
              </li>
              <li>
                <Link href="/website-laten-maken" className="text-gray-300 hover:text-white transition">
                  Website Laten Maken
                </Link>
              </li>
              <li>
                <Link href="/diensten/computer-laptop-hulp" className="text-gray-300 hover:text-white transition">
                  Computer & Laptop
                </Link>
              </li>
              <li>
                <Link href="/diensten/printer-scanner-hulp" className="text-gray-300 hover:text-white transition">
                  Printer & Scanner
                </Link>
              </li>
              <li>
                <Link href="/diensten/wifi-internet-hulp" className="text-gray-300 hover:text-white transition">
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
                <a href="tel:+31858002006" className="text-gray-300 hover:text-white transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  085-8002006
                </a>
              </li>
              <li>
                <a href="mailto:info@computerhulpzh.nl" className="text-gray-300 hover:text-white transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {footerCities.map(city => (
              <Link
                key={city.slug}
                href={`/computerhulp-aan-huis-${city.slug}`}
                className="bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-full text-xs transition-colors"
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
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
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
