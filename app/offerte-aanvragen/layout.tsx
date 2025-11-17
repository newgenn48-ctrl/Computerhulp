import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offerte Aanvragen | Website Laten Maken | Computerhulp Zuid-Holland',
  description: 'Vraag een vrijblijvende offerte aan voor uw nieuwe website. We maken websites op maat met custom code of WordPress, Shopify, Wix. Vanaf €795.',
  openGraph: {
    title: 'Offerte Aanvragen | Website Laten Maken',
    description: 'Vraag een vrijblijvende offerte aan voor uw nieuwe website. Vanaf €795.',
    type: 'website',
    url: 'https://computerhulpzh.nl/offerte-aanvragen',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/offerte-aanvragen',
  },
}

export default function OfferteAanvragenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
