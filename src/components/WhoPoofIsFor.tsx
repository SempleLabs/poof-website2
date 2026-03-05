'use client'

import AnimateOnScroll from './AnimateOnScroll'

const personas = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Solo Founders & Freelancers',
    description: 'Tired of spreadsheet bookkeeping? Poof categorizes your transactions automatically — clean books without the manual work.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Small Business Owners',
    description: 'Dread reconciling your books each month? AI handles reconciliation, categorization, and reporting automatically.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Service Businesses',
    description: 'Want invoicing and bookkeeping in one place? Send recurring invoices, track payments, and manage your books — all from Poof.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2a10 10 0 110 20 10 10 0 010-20z" />
      </svg>
    ),
    title: 'QuickBooks Refugees',
    description: 'Been told "just use QuickBooks" and found it overwhelming? Poof gives you the same power at $29/mo — without the complexity.',
  },
]

export default function WhoPoofIsFor() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="text-center mb-14">
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Built for People Who&apos;d Rather
            <span className="text-gradient-gold"> Run Their Business</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            If any of these sound like you, Poof was built for you.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {personas.map((persona, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={100 + i * 80}>
              <div className="flex gap-4 p-6 rounded-2xl border border-slate-200 bg-slate-50/50 h-full">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500">
                  {persona.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
                    {persona.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
