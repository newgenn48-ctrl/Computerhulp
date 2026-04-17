'use client'

import Header from './Header'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'
import StickyMobileBar from './StickyMobileBar'
import Breadcrumb from '@/components/Breadcrumb'
import SkipLink from '@/components/SkipLink'

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <Header />
      <Breadcrumb />
      <main id="main-content" className="min-h-screen pb-20 sm:pb-0">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
      <StickyMobileBar />
    </>
  )
}
