'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WebsiteLatenMakenPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(3deg); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes slide-in {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .perspective-card {
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .card-tilt:hover {
          transform: rotateX(5deg) rotateY(-5deg) scale(1.02);
        }
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Hero Section - 2 Columns */}
        <section className="relative flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <div
                style={{
                  animation: 'slide-in 0.8s ease-out'
                }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Website Laten Maken
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    in Zuid-Holland
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Wilt u een professionele <strong>website laten maken</strong>? Van visitekaartje tot webshop - wij maken websites op maat met <strong>custom code</strong> of met populaire platformen zoals <strong>WordPress, Shopify en Wix</strong>. Ú kiest de technologie die past bij uw wensen en budget.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Link
                    href="/offerte-aanvragen"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  >
                    Vraag Offerte Aan
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>

                  <a
                    href="tel:+31858002006"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all hover:border-blue-500"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>Bel 085-8002006</a>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vanaf €795
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    2-3 weken levering
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    100% op maat
                  </div>
                </div>
              </div>

              {/* Right Column - 3D Visual (Desktop & Mobile) */}
              <div className="relative w-full">
                <div className="relative perspective-1000">
                  {/* Desktop Browser Mockup */}
                  <div
                    className="relative z-20"
                    style={{
                      animation: 'float 6s ease-in-out infinite',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Browser Window */}
                    <div className="relative bg-white rounded-t-lg sm:rounded-t-xl shadow-2xl overflow-hidden border border-gray-200 transform hover:scale-[1.02] transition-transform duration-500"
                      style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>

                      {/* Browser Chrome */}
                      <div className="bg-gray-100 px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 border-b border-gray-200">
                        {/* Traffic lights */}
                        <div className="flex gap-1 sm:gap-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-sm"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-sm"></div>
                        </div>

                        {/* URL bar */}
                        <div className="flex-1 flex items-center gap-1 sm:gap-2">
                          <div className="flex-1 bg-white rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-2 shadow-sm">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span className="text-[10px] sm:text-xs text-gray-600 font-medium truncate">uwbedrijf.nl</span>
                          </div>
                          <div className="hidden sm:flex w-8 h-8 rounded-lg bg-white shadow-sm items-center justify-center">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Website Content Preview */}
                      <div className="aspect-video bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
                        {/* Hero section simulation */}
                        <div className="absolute inset-0 p-3 sm:p-6 lg:p-8 flex flex-col">
                          <div className="space-y-1.5 sm:space-y-2 lg:space-y-3 mb-3 sm:mb-4 lg:mb-6">
                            <div className="h-2 sm:h-3 lg:h-4 bg-white/90 rounded-lg w-2/3 shadow-sm"></div>
                            <div className="h-2 sm:h-3 lg:h-4 bg-white/80 rounded-lg w-1/2"></div>
                            <div className="h-1.5 sm:h-2 lg:h-3 bg-white/60 rounded-lg w-3/4"></div>
                          </div>

                          {/* CTA buttons */}
                          <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
                            <div className="h-6 w-20 sm:h-8 sm:w-28 lg:h-10 lg:w-32 bg-white rounded-md sm:rounded-lg shadow-lg"></div>
                            <div className="h-6 w-20 sm:h-8 sm:w-28 lg:h-10 lg:w-32 bg-white/30 rounded-md sm:rounded-lg backdrop-blur-sm border border-white/50 sm:border-2"></div>
                          </div>

                          {/* Feature cards */}
                          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3 mt-auto">
                            <div className="bg-white/20 backdrop-blur-sm rounded-md sm:rounded-lg p-1.5 sm:p-2 lg:p-3 border border-white/30 shadow-lg">
                              <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-white/40 rounded-md sm:rounded-lg mb-1 sm:mb-1.5 lg:mb-2"></div>
                              <div className="h-1 sm:h-1.5 lg:h-2 bg-white/60 rounded w-full mb-0.5 sm:mb-1"></div>
                              <div className="h-1 sm:h-1.5 lg:h-2 bg-white/40 rounded w-2/3"></div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-md sm:rounded-lg p-1.5 sm:p-2 lg:p-3 border border-white/30 shadow-lg">
                              <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-white/40 rounded-md sm:rounded-lg mb-1 sm:mb-1.5 lg:mb-2"></div>
                              <div className="h-1 sm:h-1.5 lg:h-2 bg-white/60 rounded w-full mb-0.5 sm:mb-1"></div>
                              <div className="h-1 sm:h-1.5 lg:h-2 bg-white/40 rounded w-2/3"></div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-md sm:rounded-lg p-1.5 sm:p-2 lg:p-3 border border-white/30 shadow-lg">
                              <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-white/40 rounded-md sm:rounded-lg mb-1 sm:mb-1.5 lg:mb-2"></div>
                              <div className="h-1 sm:h-1.5 lg:h-2 bg-white/60 rounded w-full mb-0.5 sm:mb-1"></div>
                              <div className="h-1 sm:h-1.5 lg:h-2 bg-white/40 rounded w-2/3"></div>
                            </div>
                          </div>
                        </div>

                        {/* Sparkle effects */}
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-ping"></div>
                        <div className="absolute top-6 sm:top-12 right-4 sm:right-8 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute bottom-4 sm:bottom-8 left-3 sm:left-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>

                    {/* Browser Base */}
                    <div className="h-2 sm:h-3 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-lg sm:rounded-b-xl border-x border-b border-gray-300"
                      style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}></div>
                  </div>

                  {/* Mobile Phone Mockup - Only on larger screens */}
                  <div
                    className="hidden lg:block absolute bottom-0 -left-12 z-30 w-32"
                    style={{
                      animation: 'float 5s ease-in-out infinite',
                      animationDelay: '0.5s'
                    }}
                  >
                    <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl border-4 border-gray-800"
                      style={{ boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)' }}>
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-2xl z-10"></div>

                      {/* Screen */}
                      <div className="aspect-[9/19] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl relative overflow-hidden">
                        <div className="p-3 space-y-2">
                          <div className="h-2 bg-white/80 rounded w-3/4"></div>
                          <div className="h-2 bg-white/60 rounded w-1/2"></div>
                          <div className="h-12 bg-white/30 rounded mt-3"></div>
                          <div className="grid grid-cols-2 gap-1.5 mt-2">
                            <div className="h-8 bg-white/30 rounded"></div>
                            <div className="h-8 bg-white/30 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Code Elements */}
                  <div className="absolute top-4 -left-4 lg:-left-8 z-40"
                    style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '0.3s' }}>
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-2xl p-2 lg:p-3 border border-blue-500 backdrop-blur-sm">
                      <div className="text-white/90 font-mono text-[10px] lg:text-xs space-y-1">
                        <div className="flex gap-1">
                          <span className="text-pink-300">&lt;div</span>
                          <span className="text-blue-200">className</span>
                          <span>=</span>
                        </div>
                        <div className="flex gap-1 pl-2 lg:pl-3">
                          <span className="text-yellow-200">&quot;hero&quot;</span>
                          <span className="text-pink-300">&gt;</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Design Icon */}
                  <div className="absolute top-1/3 -right-3 lg:-right-6 z-40"
                    style={{ animation: 'float 4.5s ease-in-out infinite', animationDelay: '1s' }}>
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-14 h-14 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl shadow-2xl flex items-center justify-center text-2xl lg:text-4xl transform rotate-12 border-2 border-white/20">
                      🎨
                    </div>
                  </div>

                  {/* Floating Speed Icon */}
                  <div className="absolute bottom-20 -right-4 lg:-right-8 z-40"
                    style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1.5s' }}>
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl shadow-2xl flex items-center justify-center text-2xl lg:text-3xl transform -rotate-12 border-2 border-white/20">
                      ⚡
                    </div>
                  </div>

                  {/* Floating SEO Icon */}
                  <div className="absolute -bottom-4 left-1/4 lg:left-1/3 z-40"
                    style={{ animation: 'float 4.8s ease-in-out infinite', animationDelay: '2s' }}>
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-10 h-10 lg:w-14 lg:h-14 rounded-lg lg:rounded-xl shadow-2xl flex items-center justify-center text-xl lg:text-2xl border-2 border-white/20">
                      🔍
                    </div>
                  </div>

                  {/* Background glow effects */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                      style={{ animation: 'pulse-ring 4s ease-out infinite' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
                      style={{ animation: 'pulse-ring 4s ease-out infinite', animationDelay: '2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features - Bento Grid Style */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Waarom Uw Website Laten Maken Bij Ons?
              </h2>
              <p className="text-xl text-gray-600">
                Professionele websites die converteren en resultaat opleveren
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🎨', title: 'Maatwerk Design', desc: 'Uniek design dat perfect past bij uw merk', color: 'from-blue-500 to-cyan-500', size: 'col-span-1' },
                { icon: '⚙️', title: 'Uw Keuze', desc: 'Custom code óf WordPress, Shopify, Wix - wat u wilt', color: 'from-purple-500 to-pink-500', size: 'col-span-1' },
                { icon: '📱', title: 'Mobile First', desc: 'Perfect op alle schermformaten', color: 'from-orange-500 to-red-500', size: 'col-span-1' },
                { icon: '🔍', title: 'SEO Proof', desc: 'Bovenaan in Google vanaf dag 1', color: 'from-green-500 to-emerald-500', size: 'col-span-1' },
                { icon: '⚡', title: 'Supersnel', desc: 'Optimale performance gegarandeerd', color: 'from-indigo-500 to-blue-500', size: 'col-span-1' },
                { icon: '💬', title: 'Direct Contact', desc: 'Persoonlijk aanspreekpunt, altijd', color: 'from-pink-500 to-rose-500', size: 'col-span-1' }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className={`${feature.size} group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-tilt perspective-card overflow-hidden`}
                  style={{
                    animation: `fade-in 0.5s ease-out ${idx * 0.1}s both`
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process - Visual Timeline */}
        <section className="py-32 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Hoe Werkt Website Laten Maken?
              </h2>
              <p className="text-xl text-gray-600">
                Van concept tot lancering: uw website in 5 eenvoudige stappen
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { num: '1', title: 'Intake', desc: 'Gratis kennismaking', icon: '💬', color: 'bg-blue-500' },
                { num: '2', title: 'Ontwerp', desc: 'Visueel concept', icon: '🎨', color: 'bg-purple-500' },
                { num: '3', title: 'Bouwen', desc: 'Ontwikkeling', icon: '⚙️', color: 'bg-pink-500' },
                { num: '4', title: 'Testen', desc: 'Alles nakijken', icon: '🔍', color: 'bg-orange-500' },
                { num: '5', title: 'Live!', desc: 'Publiceren', icon: '🚀', color: 'bg-green-500' }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="relative"
                  style={{
                    animation: `fade-in 0.5s ease-out ${idx * 0.15}s both`
                  }}
                >
                  <div className="text-center">
                    <div className={`${step.color} w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-xl transform hover:scale-110 hover:rotate-6 transition-all`}>
                      {step.icon}
                    </div>
                    <div className="text-sm font-bold text-gray-400 mb-1">STAP {step.num}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                  {idx < 4 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-gray-300 to-gray-200 -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Options Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Website Laten Maken: Kies Uw Technologie
              </h2>
              <p className="text-xl text-gray-600">
                Custom code of WordPress, Shopify, Wix - wij bieden beide opties. Ú bepaalt wat het beste past bij uw situatie
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Custom Code Option */}
              <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-blue-200 hover:border-blue-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 transition-all">
                  💻
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Code (Op Maat)</h3>
                <p className="text-gray-600 mb-6">
                  Uw website laten maken met volledig maatwerk, geprogrammeerd volgens uw specifieke wensen. Perfect voor unieke projecten die standaard oplossingen niet kunnen bieden.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Ultiem snel en geoptimaliseerd</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Volledig unieke functionaliteiten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Geen maandelijkse licentiekosten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Beste SEO prestaties</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 font-semibold">Ideaal voor:</p>
                  <p className="text-sm text-gray-600">Bedrijven en ZZP&apos;ers die een moderne, unieke website willen zonder standaard templates. Perfect voor wie specifieke eisen heeft, hoge traffic verwacht, of maximale controle wil</p>
                </div>
              </div>

              {/* Platform Option */}
              <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-purple-200 hover:border-purple-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 transition-all">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform (WordPress, Shopify, Wix)</h3>
                <p className="text-gray-600 mb-6">
                  Uw website laten maken op gebruiksvriendelijke platformen waarmee u zelf eenvoudig aanpassingen kunt doen. Perfect voor snelle lancering en flexibel beheer.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Zelf eenvoudig content aanpassen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Snelle lancering mogelijk</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Toegang tot plugins en templates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Lagere initiële investering</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 font-semibold">Ideaal voor:</p>
                  <p className="text-sm text-gray-600">Startups, kleine bedrijven, webshops, en wie zelf content wil beheren zonder technische kennis</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-blue-50 rounded-2xl border border-blue-200">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 font-medium">
                  Niet zeker welke optie het beste past voor uw website laten maken? Geen probleem! We adviseren u graag tijdens een gratis kennismakingsgesprek.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing - Offerte Section */}
        <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Wat Kost Het Om Een Website Te Laten Maken?
              </h2>
              <p className="text-xl text-gray-600">
                Elke website is uniek - daarom maken we graag een offerte op maat. Vanaf €795 kunt u al een professionele website laten maken
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-gray-100">
              <div className="text-center mb-12">
                <div className="inline-flex items-baseline gap-2 mb-4">
                  <span className="text-2xl text-gray-600">Vanaf</span>
                  <span className="text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    €795
                  </span>
                </div>
                <p className="text-gray-600 text-lg">
                  Afhankelijk van uw wensen en functionaliteiten
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wat beïnvloedt de prijs?</h3>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Aantal pagina&apos;s</p>
                      <p className="text-sm text-gray-600">Meer pagina&apos;s = meer ontwikkeltijd</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Functionaliteiten</p>
                      <p className="text-sm text-gray-600">Webshop, reserveringssysteem, integraties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Design complexiteit</p>
                      <p className="text-sm text-gray-600">Eenvoudig template of volledig maatwerk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Technologie keuze</p>
                      <p className="text-sm text-gray-600">WordPress, Wix of custom code</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wat is altijd inbegrepen?</h3>
                  <div className="space-y-3">
                    {[
                      'Modern & Professioneel Design',
                      'Mobile Responsive (werkt op alle apparaten)',
                      'SEO Geoptimaliseerd',
                      'Contactformulier',
                      'Google Analytics',
                      'SSL Certificaat',
                      'Instructie & Uitleg',
                      'Nazorg & Support'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center space-y-6">
                <p className="text-lg text-gray-700 font-medium">
                  Wilt u weten wat het kost om uw website te laten maken?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/offerte-aanvragen"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    Vraag Gratis Offerte Aan
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <a
                    href="tel:+31858002006"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white border-2 border-gray-300 text-gray-900 rounded-xl font-bold text-lg hover:border-blue-500 hover:shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Bel 085-8002006
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  Geen verplichtingen • Gratis adviesgesprek • Offerte binnen 24 uur
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                Veelgestelde Vragen Over Website Laten Maken
              </h2>
              <p className="text-xl text-gray-600">
                Alles wat u moet weten over een website laten maken
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'Hoeveel kost het om een website te laten maken?',
                  a: 'De kosten voor een website laten maken beginnen vanaf €795. De exacte prijs hangt af van uw wensen: aantal pagina\'s, functionaliteiten (zoals een webshop of reserveringssysteem), en of u kiest voor custom code of een platform zoals WordPress. We maken altijd eerst een vrijblijvende offerte op maat.'
                },
                {
                  q: 'Hoe lang duurt het om een website te laten maken?',
                  a: 'Een gemiddelde website laten maken duurt 2-3 weken van start tot lancering. Dit omvat de intake, ontwerp, ontwikkeling, testen en publicatie. Voor grotere projecten zoals een uitgebreide webshop kan dit 4-6 weken duren. We houden u tijdens het hele proces op de hoogte.'
                },
                {
                  q: 'Wat is het verschil tussen een custom website en WordPress?',
                  a: 'Bij een custom website laten maken wordt alles op maat geprogrammeerd. Dit is sneller, veiliger en biedt meer mogelijkheden. WordPress is gebruiksvriendelijker voor wie zelf content wil beheren. Beide opties zijn geschikt, afhankelijk van uw situatie en budget. We adviseren u graag welke optie het beste past.'
                },
                {
                  q: 'Kan ik mijn website later zelf aanpassen?',
                  a: 'Ja! Bij WordPress, Shopify of Wix kunt u zelf eenvoudig teksten en afbeeldingen aanpassen zonder technische kennis. Bij custom websites kunnen we een CMS (contentbeheersysteem) toevoegen. We geven altijd volledige instructies en uitleg, zodat u zelfstandig aan de slag kunt.'
                },
                {
                  q: 'Is mijn website ook op mobiel goed zichtbaar?',
                  a: 'Absoluut! Alle websites die we maken zijn volledig responsive. Dit betekent dat uw website perfect werkt op alle apparaten: desktop, tablet en smartphone. Dit is essentieel, want meer dan 60% van de bezoekers komt via mobiel. Mobile-first design is standaard bij ons.'
                },
                {
                  q: 'Krijg ik ook SEO bij mijn website?',
                  a: 'Ja, elke website die we maken is standaard SEO-geoptimaliseerd. Dit betekent: snelle laadtijden, goede technische basis, mobiel-vriendelijk, en correcte meta-tags. Zo start u direct goed in Google. Voor meer geavanceerde SEO (zoals content optimalisatie en linkbuilding) kunnen we een apart SEO-pakket aanbieden.'
                },
                {
                  q: 'Wat heb ik nodig om te starten met een website laten maken?',
                  a: 'Om te starten hebben we alleen uw ideeën en wensen nodig! We begeleiden u door het hele proces: van het kiezen van een domeinnaam tot het leveren van content. Heeft u al logo\'s, foto\'s of teksten? Perfect! Heeft u die nog niet? Geen probleem, we helpen u ook daarmee.'
                },
                {
                  q: 'Bieden jullie ook onderhoud en support na oplevering?',
                  a: 'Ja, na oplevering bieden we nazorg en support. Kleine aanpassingen in de eerste maand zijn gratis. Voor doorlopend onderhoud, updates en backup\'s kunnen we een onderhoudscontract aanbieden. U bent nooit alleen - we staan altijd klaar om te helpen wanneer nodig.'
                }
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    aria-expanded={openFaqIndex === idx}
                  >
                    <h3 className="text-xl font-bold text-gray-900 flex-1">
                      {faq.q}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Heeft u nog andere vragen over een website laten maken?
              </p>
              <Link
                href="/offerte-aanvragen"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Stel Uw Vraag
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">
              Klaar Om Uw Website Te Laten Maken?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Vraag een gratis offerte aan of plan een kennismakingsgesprek. We helpen u graag met het maken van uw professionele website
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/offerte-aanvragen"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-purple-600 rounded-xl font-black text-xl shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all"
              >
                Vraag Offerte Aan
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <a
                href="tel:+31858002006"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-bold text-xl hover:bg-white/20 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>Bel 085-8002006</a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Geen verborgen kosten
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Persoonlijk advies
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Snelle levering
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
