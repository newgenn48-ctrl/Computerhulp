import Link from 'next/link'
import Image from 'next/image'

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
                className="object-contain brightness-0 invert hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Al meer dan 10 jaar dé specialist in computerhulp, printerhulp, en IT-ondersteuning
              aan huis in heel Zuid-Holland. Binnen 24 uur bij u thuis.
            </p>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="font-bold text-lg mb-4">Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/computerhulp-aan-huis" className="text-gray-400 hover:text-white transition">
                  Computerhulp aan Huis
                </Link>
              </li>
              <li>
                <Link href="/student-aan-huis" className="text-gray-400 hover:text-white transition">
                  Student aan Huis
                </Link>
              </li>
              <li>
                <Link href="/website-laten-maken" className="text-gray-400 hover:text-white transition">
                  Website Laten Maken
                </Link>
              </li>
              <li>
                <Link href="/diensten/computer-laptop-hulp" className="text-gray-400 hover:text-white transition">
                  Computer & Laptop
                </Link>
              </li>
              <li>
                <Link href="/diensten/printer-scanner-hulp" className="text-gray-400 hover:text-white transition">
                  Printer & Scanner
                </Link>
              </li>
              <li>
                <Link href="/diensten/wifi-internet-hulp" className="text-gray-400 hover:text-white transition">
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
                <a href="tel:+31642548451" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  06-42548451
                </a>
              </li>
              <li>
                <a href="mailto:info@computerhulpzh.nl" className="text-gray-400 hover:text-white transition flex items-center gap-2">
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
            <ul className="space-y-3 text-sm text-gray-400">
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
          <div className="text-sm text-gray-400 mb-3">We werken in heel Zuid-Holland, waaronder:</div>
          <div className="flex flex-wrap gap-2">
            {['Den Haag', 'Rotterdam', 'Leiden', 'Delft', 'Zoetermeer', 'Gouda', 'Dordrecht', 'Alphen aan den Rijn', 'Westland', 'Capelle aan den IJssel'].map(stad => (
              <span key={stad} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                {stad}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {currentYear} Computerhulp Zuid-Holland. Alle rechten voorbehouden.
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end">
              <Link href="/over-ons" className="hover:text-white transition">
                Over Ons
              </Link>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="hover:text-white transition">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
