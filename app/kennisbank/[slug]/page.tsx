import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/icons'
import CallbackSection from '@/components/sections/CallbackSection'
import { services } from '@/components/ServicesSection'
import { articleSlugs, getArticle, getRelatedArticles, ArticleBlock } from '@/lib/kennisbank'
import { BUSINESS, OG_IMAGE, HOURS } from '@/lib/constants'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return articleSlugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}

  const canonical = `${BUSINESS.URL}/kennisbank/${article.slug}`

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      images: OG_IMAGE,
      title: article.metaTitle,
      description: article.excerpt,
      type: 'article',
      url: canonical,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
    alternates: { canonical },
  }
}

const datumNL = (iso: string) =>
  new Intl.DateTimeFormat('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso))

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="section-title scroll-mt-28 mt-10 mb-4">{block.text}</h2>
    case 'ul':
      return (
        <ul className="mb-6 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Icon
                name="check-circle"
                className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <span className="body-copy text-gray-700 min-w-0">{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'let-op':
      return (
        <aside className="mb-6 rounded-2xl border border-amber-200/80 bg-amber-50 p-5 shadow-sm">
          <p className="flex items-center gap-2 font-bold text-amber-900 mb-1.5">
            <Icon name="lightbulb" className="w-5 h-5 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
            Let op
          </p>
          <p className="body-copy text-amber-900/90">{block.text}</p>
        </aside>
      )
    default:
      return <p className="body-copy text-gray-700 mb-6">{block.text}</p>
  }
}

export default async function KennisbankArtikelPage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const canonical = `${BUSINESS.URL}/kennisbank/${article.slug}`
  const dienst = services.find(s => s.slug === `/diensten/${article.service}`)
  const related = getRelatedArticles(article.slug)

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.URL },
      { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: `${BUSINESS.URL}/kennisbank` },
      { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
    ],
  }

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    url: canonical,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    inLanguage: 'nl-NL',
    articleSection: article.category,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { '@type': 'Organization', name: BUSINESS.NAME, url: BUSINESS.URL },
    publisher: {
      '@type': 'LocalBusiness',
      name: BUSINESS.NAME,
      telephone: BUSINESS.PHONE,
      url: BUSINESS.URL,
      areaServed: { '@type': 'AdministrativeArea', name: BUSINESS.REGION },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />

      <div className="pb-20">
        <section className="bg-surface pt-6 pb-10 sm:pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <span className="eyebrow">{article.category}</span>
            <h1 className="section-title-lg mb-4" style={{ textWrap: 'balance' }}>
              {article.title}
            </h1>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Icon name="clock" className="w-4 h-4 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                {article.readingMinutes}&nbsp;minuten lezen
              </span>
              <span>
                Bijgewerkt op <time dateTime={article.dateModified}>{datumNL(article.dateModified)}</time>
              </span>
            </p>
          </div>
        </section>

        <article className="panel-section">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 panel panel-pad">
            {/* Kort antwoord bovenaan: wie alleen dit leest weet al waar het
                aan ligt en dat het thuis bekeken moet worden. */}
            <div className="rounded-2xl border border-blue-200/80 bg-blue-50 p-5 sm:p-6 mb-8">
              <p className="section-eyebrow mb-2">In het kort</p>
              <p className="body-copy text-gray-800 font-medium">{article.answer}</p>
            </div>

            {article.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            {/* Belblok middenin het artikel, niet pas onderaan: wie hier is
                beland heeft een klacht en wil weten wat de volgende stap is. */}
            <div className="mt-10 rounded-2xl bg-gray-900 p-6 sm:p-8 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ textWrap: 'balance' }}>
                Laat het bij u thuis nakijken
              </h2>
              <p className="body-copy text-gray-200 mb-6">
                Een geduldige HBO IT-student komt langs, kijkt wat er bij ú speelt en legt in gewone
                woorden uit wat hij doet. Bereikbaar van {HOURS.OPEN} tot {HOURS.CLOSE},{' '}
                {HOURS.DAYS}, meestal binnen 24 uur bij u thuis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS.PHONE_HREF}
                  translate="no"
                  className="btn-cta-white"
                  aria-label={`Bel ${BUSINESS.PHONE}`}
                >
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                  {BUSINESS.PHONE}
                </a>
                <Link href="/afspraak-maken" className="btn-cta-dark">
                  Afspraak maken
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {dienst && (
              <p className="body-copy text-gray-700 mt-8">
                Meer over wat wij hierin doen en wat het kost, staat op{' '}
                <Link
                  href={dienst.slug}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {dienst.title.toLowerCase()} aan huis
                </Link>
                . Liever eerst de tarieven zien? Die staan op{' '}
                <Link href="/tarieven" className="text-blue-600 hover:text-blue-800 font-semibold">
                  de tarievenpagina
                </Link>
                .
              </p>
            )}
          </div>
        </article>

        {related.length > 0 && (
          <section className="panel-section" aria-labelledby="lees-ook-heading">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 panel panel-pad">
              <p className="section-eyebrow">Kennisbank</p>
              <h2 id="lees-ook-heading" className="section-title mb-6">Lees ook</h2>

              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map(other => (
                  <li key={other.slug} className="card-bezel">
                    <div className="card-bezel-inner p-5 h-full flex flex-col">
                      <p className="text-sm font-semibold text-blue-700 mb-1.5">{other.category}</p>
                      <h3 className="font-bold text-gray-900 leading-snug mb-2">
                        <Link
                          href={`/kennisbank/${other.slug}`}
                          className="flex items-center min-h-[44px] hover:text-blue-700 transition-colors"
                        >
                          {other.title}
                        </Link>
                      </h3>
                      <p className="body-copy text-gray-600 line-clamp-3">{other.excerpt}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-6">
                <Link
                  href="/kennisbank"
                  className="inline-flex items-center gap-2 min-h-[44px] font-semibold text-blue-700 hover:text-blue-800"
                >
                  Alle onderwerpen in de kennisbank
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </Link>
              </p>
            </div>
          </section>
        )}

        <CallbackSection />
      </div>
    </>
  )
}
