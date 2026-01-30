import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { featureGroups } from '@/lib/featureData'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Features — 24 AI Bookkeeping Tools for Small Business | Poof',
  description: 'Explore all 24 Poof features: AI transaction categorization, invoicing, expense tracking, bank reconciliation, financial reports, team roles, and more.',
  keywords: 'AI bookkeeping features, automated categorization, invoicing, expense tracking, bank reconciliation, financial reports, receipt processing, team roles',
}

const groupIcons: Record<string, JSX.Element> = {
  sparkles: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
    </svg>
  ),
  invoice: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,12L16,16H13.5V19H10.5V16H8L12,12Z"/>
    </svg>
  ),
  expense: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,2A3,3 0 0,1 15,5V7H19A1,1 0 0,1 20,8V19A3,3 0 0,1 17,22H7A3,3 0 0,1 4,19V8A1,1 0 0,1 5,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4M6,9V19A1,1 0 0,0 7,20H17A1,1 0 0,0 18,19V9H6Z"/>
    </svg>
  ),
  bank: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.5,1L2,6V8H21V6M16,10V17H19V19H5V17H8V10H10V17H14V10M2,22H21V20H2V22Z"/>
    </svg>
  ),
  report: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
  ),
  security: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9V17H10Z"/>
    </svg>
  ),
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title={<>24 Features for <span className="text-gradient-gold">Effortless Bookkeeping</span></>}
        subtitle="Everything you need to automate your bookkeeping — organized into six capability groups. All features included in every plan, starting at $14.50/month."
      >
        <Link
          href="https://app.poofai.com/register"
          className="bg-gold-500 text-midnight-900 font-semibold rounded-lg hover:bg-gold-400 shadow-gold text-lg mt-8 inline-block px-8 py-4"
        >
          Start Free Trial →
        </Link>
      </PageHero>

      {/* Feature Groups */}
      <section className="py-24 bg-midnight-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {featureGroups.map((group, groupIndex) => (
              <div key={groupIndex} id={group.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                <AnimateOnScroll animation="fade-left" delay={groupIndex * 100}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-400 rounded-2xl flex items-center justify-center text-midnight-900 shadow-lg">
                      {groupIcons[group.icon] || groupIcons.sparkles}
                    </div>
                    <h2 className="text-3xl font-bold font-display text-white">{group.name}</h2>
                  </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {group.features.map((feature, featureIndex) => (
                    <AnimateOnScroll key={featureIndex} animation="fade-up" delay={100 + featureIndex * 80}>
                      <div
                        className="bg-midnight-800 border border-midnight-600 rounded-2xl p-8"
                      >
                        <h3 className="text-xl font-bold font-display text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            ))}
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

          <div className="bg-midnight-800 border border-midnight-600 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {[
                {
                  icon: <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9V17H10Z"/>,
                  title: 'Bank-Level Security',
                  desc: '256-bit encryption and read-only access to your accounts',
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
                    <h3 className="text-lg font-semibold font-display text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-midnight-900 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Ready to Try All 24 Features?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Start your 30-day free trial. All features included, starting at $14.50/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.poofai.com/register"
                className="bg-gold-500 text-midnight-900 font-semibold px-8 py-4 rounded-lg shadow-gold hover:bg-gold-400 transition-all duration-300 text-lg"
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
