'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/icons'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb() {
  const pathname = usePathname()

  // Niet op de homepage en niet op de pure conversiepagina's
  const hiddenPaths = ['/', '/afspraak-maken', '/offerte-aanvragen', '/afspraak-bevestiging', '/offerte-bevestiging']

  /* En niet op pagina's die met een fotohero beginnen. Daar stond de
     breadcrumb onzichtbaar achter de vaste header en kostte hij 47px boven
     de vouw, precies de ruimte die de belknop nodig heeft. Die pagina's
     leveren hun breadcrumb-spoor zelf in de JSON-LD, dus Google ziet het
     nog steeds, en de bezoeker heeft er een H1 die de plaats al noemt. */
  const heroPrefixes = ['/computerhulp-aan-huis', '/student-aan-huis', '/regio/', '/diensten', '/over-ons', '/locaties']
  if (hiddenPaths.includes(pathname) || heroPrefixes.some(prefix => pathname.startsWith(prefix))) {
    return null
  }

  const pathSegments = pathname.split('/').filter(segment => segment)

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ]

  /* Labels waar de slug zelf niet goed leest. De rest krijgt zinskapitaal:
     in het Nederlands krijgt alleen het eerste woord een hoofdletter, dus
     "Website laten maken" en niet "Website Laten Maken". Dat geldt ook voor
     de kennisbankslugs, want dat zijn hele zinnen. */
  const LABELS: Record<string, string> = {
    faq: 'Veelgestelde vragen',
    'waarom-ons': 'Waarom ons',
  }

  const zinskapitaal = (slug: string) => {
    const woorden = slug.split('-').join(' ')
    return woorden.charAt(0).toUpperCase() + woorden.slice(1)
  }

  // Build breadcrumb trail
  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`

    const label = LABELS[segment] ?? zinskapitaal(segment)

    // Add to breadcrumb trail (only if not already added)
    const isLastSegment = index === pathSegments.length - 1
    const alreadyAdded = breadcrumbItems.some(item => item.label === label)

    if (!alreadyAdded) {
      breadcrumbItems.push({
        label,
        href: isLastSegment ? undefined : currentPath
      })
    } else if (isLastSegment) {
      // If last segment and already added as parent, remove href from last item
      breadcrumbItems[breadcrumbItems.length - 1].href = undefined
    }
  })

  // Geen eigen BreadcrumbList-schema meer: de pagina's leveren die zelf in hun
  // JSON-LD-graph, en twee lijsten met verschillende labels op één pagina botsen.

  return (
    <>
      {/* pt-[4.75rem] houdt de vaste header (74px) vrij. Zonder die ruimte
          viel de hele balk achter de header en was hij op geen enkele pagina
          te zien. De pagina's die hierop volgen hebben hun eigen bovenmarge
          daarom kleiner gekregen. */}
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-gray-200 pt-[4.75rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1">
          <ol className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <Icon name="chevron-right" className="w-4 h-4 text-gray-400" strokeWidth={2} />
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center min-h-[44px] px-1 -mx-1 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-gray-900">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
