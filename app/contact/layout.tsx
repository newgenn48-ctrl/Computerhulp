import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Computerhulp Zuid-Holland | Bel 085-8002006',
  description: 'Neem contact op met Computerhulp Zuid-Holland. Bel 085-8002006 of vul het formulier in. Binnen 3 uur reactie. 7 dagen per week bereikbaar.',
  openGraph: {
    title: 'Contact | Computerhulp Zuid-Holland',
    description: 'Neem contact op voor computerhulp aan huis. Bel 085-8002006 of vul het formulier in. Binnen 3 uur reactie.',
    type: 'website',
    url: 'https://computerhulpzh.nl/contact',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
