import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import CallbackSection from '@/components/sections/CallbackSection'
import { articles, ArticleCategory } from '@/lib/kennisbank'
import { BUSINESS, OG_IMAGE } from '@/lib/constants'

const TITLE = 'Kennisbank: uitleg over computerproblemen aan huis'
const CANONICAL = `${BUSINESS.URL}/kennisbank`

export const metadata: Metadata = {
  title: TITLE,
  description: `Uitleg over klachten die wij thuis tegenkomen: wat u merkt, waar het meestal aan ligt en wanneer u er iemand naar laat kijken. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: 'Begrijpelijke uitleg over computer-, wifi-, printer- en e-mailklachten aan huis.',
    type: 'website',
    url: CANONICAL,
  },
  alternates: { canonical: CANONICAL },
}

/* Vaste volgorde van de rubrieken: begint bij de klachten waar de meeste
   zoekvraag op zit (computer, wifi, printer) en eindigt bij de smallere. */
const CATEGORY_ORDER: ArticleCategory[] = [
  'Computer en laptop',
  'Internet en wifi',
  'Printer',
  'E-mail',
  'Veiligheid',
  'Bestanden',
  'Televisie',
  'Telefoon en tablet',
]

const CATEGORY_ICON: Record<ArticleCategory, string> = {
  'Computer en laptop': 'laptop',
  'Internet en wifi': 'wifi',
  'Printer': 'printer',
  'E-mail': 'email',
  'Veiligheid': 'shield',
  'Bestanden': 'database',
  'Televisie': 'tv',
  'Telefoon en tablet': 'mobile',
}

export default function KennisbankPage() {
  const groups = CATEGORY_ORDER.map(category => ({
    category,
    items: articles.filter(a => a.category === category),
  })).filter(g => g.items.length > 0)

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.URL },
      { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: CANONICAL },
    ],
  }

  const collectionData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: TITLE,
    description: 'Uitleg over computer-, wifi-, printer- en e-mailklachten die wij bij mensen thuis tegenkomen.',
    url: CANONICAL,
    inLanguage: 'nl-NL',
    publisher: { '@type': 'LocalBusiness', name: BUSINESS.NAME, telephone: BUSINESS.PHONE, url: BUSINESS.URL },
    hasPart: articles.map(a => ({
      '@type': 'Article',
      headline: a.title,
      description: a.excerpt,
      url: `${CANONICAL}/${a.slug}`,
      datePublished: a.datePublished,
      dateModified: a.dateModified,
      author: { '@type': 'Organization', name: BUSINESS.NAME },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionData) }} />

      <div className="pb-20">
        <section className="bg-surface pt-28 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="eyebrow">Kennisbank</span>
            <h1 className="section-title-lg mb-4">
              Wat is er <span className="text-blue-600">aan de hand</span> met uw apparaat?
            </h1>
            <p className="section-subtitle max-w-2xl mx-auto mb-8">
              Hieronder leest u per klacht wat u merkt, waar het in de praktijk meestal aan ligt en
              waarom het verstandig is er iemand naar te laten kijken. Geen vaktaal, gewoon uitleg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BUSINESS.PHONE_HREF} translate="no" className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                {BUSINESS.PHONE}
              </a>
              <Link href="/afspraak-maken" className="btn-secondary">
                Afspraak maken
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="panel-section">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 panel panel-pad">
            {groups.map(group => (
              <div key={group.category} className="mb-14 last:mb-0">
                <h2 className="section-title flex items-center gap-3">
                  <Icon
                    name={CATEGORY_ICON[group.category]}
                    className="w-7 h-7 text-blue-600 flex-shrink-0"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {group.category}
                </h2>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.items.map(article => (
                    <li key={article.slug} className="card-bezel">
                      <article className="card-bezel-inner p-5 h-full flex flex-col">
                        <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2">
                          <Link
                            href={`/kennisbank/${article.slug}`}
                            className="hover:text-blue-700 transition-colors"
                          >
                            {article.title}
                          </Link>
                        </h3>
                        <p className="body-copy text-gray-600 mb-4">{article.excerpt}</p>
                        <p className="mt-auto flex items-center gap-2 text-sm text-gray-500">
                          <Icon name="clock" className="w-4 h-4 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                          <span>{article.readingMinutes} minuten lezen</span>
                        </p>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Waarom hier geen stappenplannen staan. Eerlijk benoemd in plaats van
            onuitgesproken: dat leest beter dan een kennisbank die halve
            instructies geeft en de lezer laat vastlopen. */}
        <section className="panel-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
            <p className="section-eyebrow">Hoe u dit leest</p>
            <h2 className="section-title mb-6">Uitleg, geen klusinstructies</h2>

            <p className="body-copy text-gray-700 mb-6">
              In deze kennisbank vindt u geen stappenplannen. Dat is een bewuste keuze. Een algemene
              instructie weet niet welk apparaat u heeft, welke updates er zijn blijven liggen en wat
              er bij u thuis aan hangt, en juist daar gaat het mis. Wij komen wekelijks bij mensen die
              een handleiding van internet hebben gevolgd en daardoor meer kwijt zijn dan waarmee ze
              begonnen.
            </p>

            <p className="body-copy text-gray-700 mb-6">
              Wat u hier wél vindt: waar een klacht meestal op wijst, wat het risico is als u ermee
              doorgaat, en waar wij naar kijken als we bij u langskomen. Zo weet u voordat u belt
              waar het gesprek over gaat, en hoeft u niet uit te leggen wat u technisch niet weet.
            </p>

            <p className="body-copy text-gray-700">
              Een geduldige HBO IT-student komt bij u thuis, lost het op en legt in gewone woorden uit
              wat hij doet. Bel{' '}
              <a href={BUSINESS.PHONE_HREF} translate="no" className="text-blue-600 hover:text-blue-800 font-semibold">{BUSINESS.PHONE}</a>{' '}
              of bekijk eerst{' '}
              <Link href="/diensten" className="text-blue-600 hover:text-blue-800 font-semibold">waar wij u mee helpen</Link>{' '}
              en{' '}
              <Link href="/tarieven" className="text-blue-600 hover:text-blue-800 font-semibold">wat het kost</Link>.
            </p>
          </div>
        </section>

        <CallbackSection />
      </div>
    </>
  )
}
