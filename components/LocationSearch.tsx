'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/icons'

interface Place {
  slug: string
  name: string
  /** Voor dorpen: de gemeentepagina waar ze onder vallen. */
  municipality?: string
  municipalityName?: string
}

interface LocationSearchProps {
  places: Place[]
}

/**
 * Zoekvak voor de locatiepagina. Onze doelgroep scrolt niet door 51 plaatsen
 * en 118 dorpen; ze typen hun woonplaats. Dorpen zonder eigen pagina worden
 * gevonden en verwijzen naar hun gemeente, zodat "Naaldwijk" ook iets oplevert.
 */
export default function LocationSearch({ places }: LocationSearchProps) {
  const [query, setQuery] = useState('')

  const normalized = (s: string) => s.toLowerCase().replace(/['’-]/g, ' ').replace(/\s+/g, ' ').trim()
  const q = normalized(query)

  const results = useMemo(() => {
    if (q.length < 2) return []
    return places
      .filter((p) => normalized(p.name).includes(q))
      .sort((a, b) => {
        const aStarts = normalized(a.name).startsWith(q) ? 0 : 1
        const bStarts = normalized(b.name).startsWith(q) ? 0 : 1
        return aStarts - bStarts || a.name.localeCompare(b.name)
      })
      .slice(0, 8)
  }, [q, places])

  return (
    <div className="max-w-xl">
      <label htmlFor="plaats-zoeken" className="block text-sm font-semibold text-gray-700 mb-2">
        Typ uw woonplaats
      </label>
      <div className="relative">
        <Icon name="location-pin" className="w-5 h-5 text-blue-600 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth={2} aria-hidden="true" />
        <input
          id="plaats-zoeken"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Bijvoorbeeld Delft of Naaldwijk"
          autoComplete="off"
          className="w-full rounded-2xl border border-gray-300 bg-white pl-12 pr-4 py-4 text-lg text-gray-900 shadow-soft focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500"
        />
      </div>

      {q.length >= 2 && (
        <ul className="mt-3 rounded-2xl bg-white shadow-soft-lg border border-gray-100 divide-y divide-gray-100 overflow-hidden" aria-live="polite">
          {results.length === 0 && (
            <li className="p-4 text-gray-600">
              Geen plaats gevonden. We komen in heel Zuid-Holland: bel gerust, dan kijken we samen.
            </li>
          )}
          {results.map((p) => {
            const target = p.municipality ?? p.slug
            return (
              <li key={p.slug}>
                <Link href={`/computerhulp-aan-huis-${target}`} className="flex items-center justify-between gap-4 p-4 hover:bg-blue-50 transition-colors">
                  <span>
                    <span className="font-semibold text-gray-900">{p.name}</span>
                    {p.municipalityName && (
                      <span className="block text-sm text-gray-500">Valt onder gemeente {p.municipalityName}</span>
                    )}
                  </span>
                  <Icon name="arrow-right-short" className="w-5 h-5 text-blue-600 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
