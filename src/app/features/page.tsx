import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'
import FeatureLedger from '@/components/FeatureLedger'

export default function FeaturesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <Header />

      <PageHero
        title={<>Every feature. <span className="text-ledger-600">One price.</span></>}
        subtitle="128 features in 13 groups, all on this page, nothing you have to grow into. $79/mo, every feature, 30-day trial with no card."
      >
        <Link
          href="https://app.poofai.com/register"
          className="bg-ledger-500 text-white font-semibold rounded-lg hover:bg-ledger-600 text-lg mt-8 inline-block px-8 py-4"
        >
          Start free trial
        </Link>
      </PageHero>

      <section className="pb-20">
        <FeatureLedger />
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

          <div className="bg-white border border-slate-200 rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
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
                    <div className="w-16 h-16 bg-ledger-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-ledger-600" fill="currentColor" viewBox="0 0 24 24">
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

      {/* Spend Score CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="bg-ledger-100 border border-ledger-300 rounded-xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-ledger-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-ledger-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold font-display text-slate-900 mb-1">Get your free Spend Score — see what AI finds in your transactions</h3>
                <p className="text-slate-600">Upload a bank statement and get your AI-powered spending score in 60 seconds. No sign-up required.</p>
              </div>
              <Link
                href="/spend-score"
                className="bg-ledger-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-ledger-500 transition-all whitespace-nowrap flex-shrink-0"
              >
                Get Your Spend Score →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CtaSection />

      <Footer />
    </main>
  )
}
