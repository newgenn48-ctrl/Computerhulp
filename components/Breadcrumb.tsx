'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb() {
  const pathname = usePathname()

  // Don't show breadcrumb on homepage
  if (pathname === '/') {
    return null
  }

  const pathSegments = pathname.split('/').filter(segment => segment)

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ]

  // Build breadcrumb trail
  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`

    // Format segment for display
    let label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    // Special cases for better labels
    if (segment.startsWith('student-aan-huis')) {
      if (segment === 'student-aan-huis') {
        label = 'Student aan Huis'
      } else {
        const city = segment.replace('student-aan-huis-', '')
        const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        breadcrumbItems.push({ label: 'Student aan Huis', href: '/student-aan-huis' })
        label = cityName
      }
    } else if (segment.startsWith('computerhulp-aan-huis')) {
      if (segment === 'computerhulp-aan-huis') {
        label = 'Computerhulp aan Huis'
      } else {
        const city = segment.replace('computerhulp-aan-huis-', '')
        const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        breadcrumbItems.push({ label: 'Computerhulp aan Huis', href: '/computerhulp-aan-huis' })
        label = cityName
      }
    } else if (segment === 'diensten') {
      label = 'Diensten'
    } else if (segment === 'over-ons') {
      label = 'Over Ons'
    } else if (segment === 'afspraak-maken') {
      label = 'Afspraak Maken'
    } else if (segment === 'offerte-aanvragen') {
      label = 'Offerte Aanvragen'
    } else if (segment === 'website-laten-maken') {
      label = 'Website Laten Maken'
    }

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

  // Schema.org structured data for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `https://computerhulpzh.nl${item.href}` })
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition-colors"
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
