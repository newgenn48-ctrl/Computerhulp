// SEO-controle op de gerenderde site: node scripts/seo-check.mjs
// Standaard tegen de live site; lokaal: CHECK_URL=http://localhost:3000 node scripts/seo-check.mjs
//
// Loopt elke URL uit de sitemap langs en controleert titel, description, canonical,
// h1, taal, og:image, geldige JSON-LD, alt-teksten, kapotte interne links en
// hoeveel interne links er naar een pagina wijzen. Dat laatste is voor deze site
// het belangrijkst: pagina's met weinig inkomende links worden door Google wel
// ontdekt maar niet opgehaald.
//
// Idee en opzet overgenomen van het gelijknamige script in het ICT Hulpteam-project.

const BASE = process.env.CHECK_URL || 'https://computerhulpzh.nl'

const xml = await (await fetch(`${BASE}/sitemap.xml`)).text()
const site = xml.match(/<loc>(https?:\/\/[^/<]+)/)?.[1] ?? ''
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(site, ''))

const problems = []
const titles = new Map()
const descs = new Map()
const links = new Set()
const inbound = new Map()

const add = (url, msg) => problems.push(`${url || '/'}: ${msg}`)
const decode = s => s
  .replace(/&amp;/g, '&')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')

for (const path of urls) {
  let html
  try {
    const res = await fetch(`${BASE}${path || '/'}`)
    if (res.status !== 200) {
      add(path, `status ${res.status}`)
      continue
    }
    html = await res.text()
  } catch (e) {
    add(path, `niet op te halen (${e.message})`)
    continue
  }

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '')
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '')
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1]
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0

  if (!title) add(path, 'geen title')
  else if (title.length > 60) add(path, `title te lang (${title.length}): ${title}`)
  else if (title.length < 25) add(path, `title kort (${title.length}): ${title}`)

  if (!desc) add(path, 'geen meta description')
  else if (desc.length > 160 || desc.length < 110) add(path, `description ${desc.length} tekens`)

  if (!canonical) add(path, 'geen canonical')
  else if (canonical !== `${site}${path}` && !(path === '' && canonical === site)) add(path, `canonical wijst naar ${canonical}`)

  if (h1s !== 1) add(path, `${h1s}x h1`)
  if (!/<html lang="nl"/.test(html)) add(path, 'geen lang=nl')
  if (!/property="og:image"/.test(html)) add(path, 'geen og:image')

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1])
    } catch {
      add(path, 'ongeldige JSON-LD')
    }
  }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(m[0])) add(path, 'img zonder alt')
  }

  titles.set(title, [...(titles.get(title) ?? []), path])
  descs.set(desc, [...(descs.get(desc) ?? []), path])

  for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g)) {
    links.add(m[1])
    inbound.set(m[1], (inbound.get(m[1]) ?? 0) + 1)
  }
}

for (const [t, p] of titles) if (p.length > 1) add(p.join(', '), `dubbele title "${t}"`)
for (const [, p] of descs) if (p.length > 1) add(p.join(', '), 'dubbele description')

for (const l of links) {
  try {
    const r = await fetch(`${BASE}${l}`, { redirect: 'manual' })
    if (r.status >= 400) add(l, `kapotte interne link (${r.status})`)
  } catch {
    add(l, 'kapotte interne link (geen antwoord)')
  }
}

for (const path of urls) {
  if (!path) continue
  const n = inbound.get(path) ?? 0
  if (n < 3) add(path, `weinig interne links naartoe (${n})`)
}

console.log(`${urls.length} URL's gecontroleerd, ${links.size} unieke interne links.`)
console.log(problems.length ? problems.join('\n') : 'Geen problemen gevonden.')
process.exitCode = problems.length ? 1 : 0
