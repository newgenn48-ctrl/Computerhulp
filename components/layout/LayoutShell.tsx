'use client'

import Header from './Header'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'
import Breadcrumb from '@/components/Breadcrumb'
import SkipLink from '@/components/SkipLink'

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <Header />
      <Breadcrumb />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
