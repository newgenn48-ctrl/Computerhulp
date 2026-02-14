import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offerte Aanvragen | Computerhulp Zuid-Holland',
  description: 'Vraag een offerte aan voor computerhulp of website services. Snel, transparant en persoonlijk advies.',
  openGraph: {
    title: 'Offerte Aanvragen | Computerhulp Zuid-Holland',
    description: 'Vraag een offerte aan. Snel en transparant advies.',
    type: 'website',
    url: 'https://computerhulpzh.nl/offerte-aanvragen',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/offerte-aanvragen',
  },
}

export default function OfferteLayout({ children }: { children: React.ReactNode }) {
  return children
}
