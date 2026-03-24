'use client'

import { useState, useRef, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { featureGroups } from '@/lib/featureData'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'

const groupIcons: Record<string, JSX.Element> = {
  sparkles: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
    </svg>
  ),
  ai: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
    </svg>
  ),
  invoice: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,12L16,16H13.5V19H10.5V16H8L12,12Z"/>
    </svg>
  ),
  expense: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,2A3,3 0 0,1 15,5V7H19A1,1 0 0,1 20,8V19A3,3 0 0,1 17,22H7A3,3 0 0,1 4,19V8A1,1 0 0,1 5,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4M6,9V19A1,1 0 0,0 7,20H17A1,1 0 0,0 18,19V9H6Z"/>
    </svg>
  ),
  bank: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.5,1L2,6V8H21V6M16,10V17H19V19H5V17H8V10H10V17H14V10M2,22H21V20H2V22Z"/>
    </svg>
  ),
  report: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
  ),
  security: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9V17H10Z"/>
    </svg>
  ),
  productivity: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13,2.05V5.08C16.39,5.57 19,8.47 19,12C19,12.9 18.82,13.75 18.5,14.54L21.12,16.07C21.68,14.83 22,13.45 22,12C22,6.82 18.05,2.55 13,2.05M12,19A7,7 0 0,1 5,12C5,8.47 7.61,5.57 11,5.08V2.05C5.94,2.55 2,6.81 2,12A10,10 0 0,0 12,22C15.3,22 18.23,20.39 20.05,17.91L17.45,16.38C16.17,18 14.21,19 12,19Z"/>
    </svg>
  ),
  poof: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
      <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
    </svg>
  ),
  budget: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 3C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5M5 5H19V19H5V5M7 7V9H17V7H7M7 11V13H14V11H7M7 15V17H17V15H7Z"/>
    </svg>
  ),
}

// Short labels for tabs
const tabLabels: Record<string, string> = {
  'AI-Powered Automation': 'AI Automation',
  'Invoicing & Payments': 'Invoicing',
  'Expense & Bill Management': 'Expenses',
  'Banking & Reconciliation': 'Banking',
  'Accounting & Reporting': 'Reporting',
  'Budgeting & Forecasting': 'Budgeting',
  'Team & Security': 'Security',
  'Productivity & Workflow': 'Productivity',
  'Poof AI Capabilities': 'Poof AI',
}

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(0)
  const tabBarRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  // Scroll active tab into view in the tab bar
  useEffect(() => {
    const activeButton = tabRefs.current[activeTab]
    if (activeButton && tabBarRef.current) {
      const container = tabBarRef.current
      const scrollLeft = activeButton.offsetLeft - container.offsetWidth / 2 + activeButton.offsetWidth / 2
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }, [activeTab])

  const activeGroup = featureGroups[activeTab]

  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title={<>Everything You Need. <span className="text-gradient-gold">Nothing You Don&apos;t.</span></>}
        subtitle="68 features, one flat price — $29/mo for everything QuickBooks charges $38+ for. AI-powered categorization, budgeting, forecasting, invoicing, and 13 reports — all included."
      >
        <Link
          href="https://app.poofai.com/register"
          className="bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-400 shadow-gold text-lg mt-8 inline-block px-8 py-4"
        >
          Start Free Trial →
        </Link>
      </PageHero>

      {/* Sticky Tab Bar — lives outside sections so it sticks across the full page */}
      <div className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={tabBarRef}
            className="flex gap-2 overflow-x-auto py-3 scrollbar-hide"
          >
            {featureGroups.map((group, index) => (
              <button
                key={index}
                ref={(el) => { tabRefs.current[index] = el }}
                onClick={() => {
                  setActiveTab(index)
                  sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  activeTab === index
                    ? 'bg-gold-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                }`}
              >
                <span className={activeTab === index ? 'text-white' : 'text-slate-400'}>
                  {groupIcons[group.icon] || groupIcons.sparkles}
                </span>
                {tabLabels[group.name] || group.name}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === index
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  {group.features.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Groups Content */}
      <section className="py-24 bg-white" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Active Group Content */}
          <div>
            <AnimateOnScroll animation="fade-up" key={activeTab}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-400 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <span className="scale-[1.6]">
                    {groupIcons[activeGroup.icon] || groupIcons.sparkles}
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-slate-900">{activeGroup.name}</h2>
                  <p className="text-slate-500 text-sm mt-1">{activeGroup.features.length} features</p>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeGroup.features.map((feature, featureIndex) => (
                <AnimateOnScroll key={`${activeTab}-${featureIndex}`} animation="fade-up" delay={80 + featureIndex * 60} className="h-full">
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm h-full hover:border-gold-200 hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Tab navigation hints */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-100">
              <button
                onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
                disabled={activeTab === 0}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  activeTab === 0 ? 'text-slate-300 cursor-default' : 'text-slate-500 hover:text-gold-500'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {activeTab > 0 ? tabLabels[featureGroups[activeTab - 1].name] || featureGroups[activeTab - 1].name : 'Previous'}
              </button>
              <span className="text-sm text-slate-400">{activeTab + 1} of {featureGroups.length}</span>
              <button
                onClick={() => setActiveTab(prev => Math.min(featureGroups.length - 1, prev + 1))}
                disabled={activeTab === featureGroups.length - 1}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  activeTab === featureGroups.length - 1 ? 'text-slate-300 cursor-default' : 'text-slate-500 hover:text-gold-500'
                }`}
              >
                {activeTab < featureGroups.length - 1 ? tabLabels[featureGroups[activeTab + 1].name] || featureGroups[activeTab + 1].name : 'Next'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Connection Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold font-display text-slate-800 mb-6">
              Connect All Your Bank Accounts
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Powered by Plaid, Poof securely connects to over 12,000 banks and credit unions across the US.
              Your financial data syncs automatically and stays up-to-date.
            </p>
          </AnimateOnScroll>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {[
                {
                  icon: <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9V17H10Z"/>,
                  title: 'Secure by Design',
                  desc: 'Encrypted in transit, read-only bank access through Plaid',
                },
                {
                  icon: <path d="M11.5,1L2,6V8H21V6M16,10V17H19V19H5V17H8V10H10V17H14V10M2,22H21V20H2V22Z"/>,
                  title: '12,000+ Banks',
                  desc: 'Works with virtually any US bank, credit union, or credit card',
                },
                {
                  icon: <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>,
                  title: 'Automatic Sync',
                  desc: 'Transactions sync automatically to keep your books current',
                },
              ].map((item, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 100}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold font-display text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Ready to Try All 68 Features?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Start your 30-day free trial. All features included, starting at $14.50/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.poofai.com/register"
                className="bg-gold-500 text-white font-semibold px-8 py-4 rounded-lg shadow-gold hover:bg-gold-400 transition-all duration-300 text-lg"
              >
                Start Free Trial →
              </Link>
              <Link
                href="/demo"
                className="border-2 border-slate-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
