import { Metadata } from 'next'
import { OG_IMAGE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Website offerte aanvragen | Vrijblijvend',
  description: 'Vraag een vrijblijvende offerte aan voor een website. Snel, transparant en persoonlijk advies.',
  openGraph: {
    images: OG_IMAGE,
    title: 'Website offerte aanvragen | Vrijblijvend',
    description: 'Vraag een vrijblijvende website offerte aan. Snel en transparant advies.',
    type: 'website',
    url: 'https://computerhulpzh.nl/offerte-aanvragen',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/offerte-aanvragen',
  },
  robots: { index: false, follow: true },
}

export default function OfferteLayout({ children }: { children: React.ReactNode }) {
  return children
}
