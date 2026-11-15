import crypto from 'crypto'

/**
 * Stap 1 van het afspraakformulier levert al een bruikbare lead op: naam,
 * telefoonnummer en wat er aan de hand is. Stap 2 (het adres) kan daarna
 * blijven liggen.
 *
 * Om te weten wie stap 1 wél en stap 2 níet afmaakte, moeten die gegevens
 * ergens staan tussen de twee stappen. Dit project heeft geen database en
 * draait serverless, dus een bestand of een variabele in het geheugen
 * overleeft de volgende aanroep niet. Daarom reist de lead mee in een door de
 * server ondertekend token in de browser van de bezoeker:
 *
 *   v1.<base64url van de gegevens>.<HMAC-SHA256 daarover>
 *
 * De ondertekening is wat dit veilig maakt. Zonder zou iedereen willekeurige
 * aanvragen in de mailbox van de eigenaar kunnen schieten door het
 * onvoltooid-endpoint te posten; mét ondertekening kan alleen een token dat
 * deze server zelf heeft uitgegeven een mail veroorzaken.
 */

export interface LeadStap1 {
  id: string
  naam: string
  telefoon: string
  email: string
  probleem: string
  bron: string
  uitgegevenOp: number
}

const SCHEMA = 'v1'

/* Een token dat ouder is dan een dag hoort niet meer bij een lopende sessie.
   Dat begrenst ook hoe lang een onderschept token herbruikbaar is. */
const MAX_LEEFTIJD_MS = 24 * 60 * 60 * 1000

/* Geen nieuwe omgevingsvariabele nodig om dit te laten werken: zonder
   LEAD_TOKEN_SECRET wordt er een sleutel afgeleid uit SMTP_PASS. Die wordt
   niet rechtstreeks gebruikt — er gaat een HMAC over met een vast label, zodat
   het mailwachtwoord zelf nooit de ondertekeningssleutel is. Zet
   LEAD_TOKEN_SECRET als je de twee wilt scheiden; bestaande tokens vervallen
   dan, wat niet erger is dan dat een half ingevuld formulier opnieuw moet. */
function sleutel(): Buffer {
  const ruw = process.env.LEAD_TOKEN_SECRET || process.env.SMTP_PASS || ''
  if (!ruw) throw new Error('Geen LEAD_TOKEN_SECRET en geen SMTP_PASS: kan geen lead-token ondertekenen')
  return crypto.createHmac('sha256', 'chzh-lead-token-v1').update(ruw).digest()
}

export function nieuwLeadId(): string {
  return crypto.randomUUID()
}

export function maakToken(gegevens: Omit<LeadStap1, 'uitgegevenOp'>): string {
  const payload: LeadStap1 = { ...gegevens, uitgegevenOp: Date.now() }
  const body = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
  const sig = crypto.createHmac('sha256', sleutel()).update(`${SCHEMA}.${body}`).digest('base64url')
  return `${SCHEMA}.${body}.${sig}`
}

export function leesToken(token: unknown): LeadStap1 | null {
  if (typeof token !== 'string' || token.length < 10 || token.length > 8192) return null

  const delen = token.split('.')
  if (delen.length !== 3 || delen[0] !== SCHEMA) return null
  const [, body, sig] = delen

  let verwacht: string
  try {
    verwacht = crypto.createHmac('sha256', sleutel()).update(`${SCHEMA}.${body}`).digest('base64url')
  } catch {
    return null
  }

  /* timingSafeEqual eist gelijke lengtes en gooit anders een fout. De
     lengtecontrole vooraf is dus geen optimalisatie maar noodzaak. */
  const gekregen = Buffer.from(sig, 'utf8')
  const juist = Buffer.from(verwacht, 'utf8')
  if (gekregen.length !== juist.length || !crypto.timingSafeEqual(gekregen, juist)) return null

  try {
    const ontleed = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as unknown
    if (!ontleed || typeof ontleed !== 'object') return null
    const q = ontleed as Record<string, unknown>
    if (typeof q.id !== 'string' || typeof q.naam !== 'string' || typeof q.telefoon !== 'string') return null
    if (typeof q.uitgegevenOp !== 'number' || !Number.isFinite(q.uitgegevenOp)) return null
    if (Date.now() - q.uitgegevenOp > MAX_LEEFTIJD_MS) return null
    return {
      id: q.id,
      naam: q.naam,
      telefoon: q.telefoon,
      email: typeof q.email === 'string' ? q.email : '',
      probleem: typeof q.probleem === 'string' ? q.probleem : '',
      bron: typeof q.bron === 'string' ? q.bron : '',
      uitgegevenOp: q.uitgegevenOp,
    }
  } catch {
    return null
  }
}

/** Hoe lang stap 1 al open staat, in minuten, naar beneden afgerond. */
export function leeftijdInMinuten(lead: LeadStap1): number {
  return Math.max(0, Math.floor((Date.now() - lead.uitgegevenOp) / 60000))
}
