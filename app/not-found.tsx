import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pagina Niet Gevonden (404)',
  description: 'De pagina die u zoekt bestaat niet. Ga terug naar de homepage of neem contact met ons op.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              404
            </h1>
          </div>

          {/* Icon */}
          <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Pagina Niet Gevonden
          </h2>

          <p className="text-xl text-blue-100 mb-8">
            Sorry, de pagina die u zoekt bestaat niet of is verplaatst.
          </p>

          {/* Suggestions */}
          <div className="bg-white/5 rounded-xl p-6 mb-8 text-left">
            <p className="text-blue-200 font-semibold mb-3">Mogelijke oplossingen:</p>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Controleer of het webadres correct gespeld is
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Ga terug naar de homepage en zoek vanaf daar
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Neem contact met ons op als u denkt dat dit een fout is
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Terug naar Home
            </Link>

            <Link
              href="/afspraak-maken"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              Contact Opnemen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Popular Pages */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-blue-200 text-sm mb-4">Populaire pagina&apos;s:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/computerhulp-aan-huis"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Computerhulp aan Huis
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="/student-aan-huis"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Student aan Huis
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="/diensten/computer-laptop-hulp"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Computer Hulp
              </Link>
              <span className="text-white/20">•</span>
              <a
                href="tel:+31858002006"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Bel 085-8002006
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
