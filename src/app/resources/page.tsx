import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Resources - Small Business Bookkeeping Guides | Poof',
  description: 'Free resources for small business bookkeeping. Guides, templates, and tips to help you manage your finances better.',
  keywords: 'small business bookkeeping guides, financial templates, accounting resources, bookkeeping tips',
}

export default function ResourcesPage() {
  const guides = [
    {
      title: 'Small Business Bookkeeping Setup Guide',
      description: 'Step-by-step guide to setting up bookkeeping for your new business.',
      type: 'Guide',
      href: '/guides/small-business-bookkeeping-setup-guide.html',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Expense Categorization Cheat Sheet',
      description: 'Quick reference for properly categorizing common business expenses.',
      type: 'Cheat Sheet',
      href: '/guides/expense-categorization-cheat-sheet.html',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Monthly Bookkeeping Checklist',
      description: 'Never miss important bookkeeping tasks with this monthly checklist.',
      type: 'Checklist',
      href: '/guides/monthly-bookkeeping-checklist.html',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Year-End Closing Procedures',
      description: 'Complete guide to closing your books at the end of the fiscal year.',
      type: 'Guide',
      href: '/guides/year-end-closing-procedures.html',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const quickLinks = [
    {
      title: 'How Poof Works',
      description: 'See how Poof automates your bookkeeping in 3 simple steps.',
      href: '/how-it-works',
      linkText: 'Learn more →',
    },
    {
      title: 'All 30+ Features',
      description: 'Explore every feature included in your Poof subscription.',
      href: '/features',
      linkText: 'View features →',
    },
    {
      title: 'Poof vs QuickBooks',
      description: 'See how Poof compares to QuickBooks for small businesses.',
      href: '/poof-vs-quickbooks',
      linkText: 'Compare →',
    },
    {
      title: 'Security',
      description: 'Learn how Poof protects your financial data.',
      href: '/security',
      linkText: 'Read more →',
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title={<>Bookkeeping <span className="text-gradient-gold">Resources</span></>}
        subtitle="Free guides and templates to help you master small business bookkeeping."
      />

      {/* Downloadable Guides */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">Free Guides &amp; Templates</h2>
              <p className="text-xl text-slate-600">Practical resources to improve your bookkeeping</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 100}>
                <div className="bg-white border border-slate-200 rounded-xl p-8 flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gold-50 rounded-xl flex items-center justify-center text-gold-500">
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-display text-slate-900 mb-2">{guide.title}</h3>
                    <p className="text-slate-600 mb-3">{guide.description}</p>
                    <div className="text-sm text-slate-500 mb-4">
                      Free {guide.type}
                    </div>
                    <a
                      href={guide.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gold-500 text-white text-sm font-semibold hover:bg-gold-400 shadow-gold transition-colors"
                    >
                      View Guide →
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">From the Blog</h2>
              <p className="text-xl text-slate-600">Articles on AI bookkeeping, small business finance, and more</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <Link href="/blog/ai-bookkeeping-small-business" className="block bg-white border border-slate-200 rounded-xl p-8 h-full hover:border-gold-300 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gold-50 text-gold-600">
                    AI &amp; Automation
                  </span>
                  <span className="text-sm text-slate-500">8 min read</span>
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">AI Bookkeeping for Small Business: What It Is, How It Works, and Why It Matters</h3>
                <p className="text-slate-600 mb-4">AI bookkeeping automates transaction categorization, receipt scanning, and financial reporting — saving small business owners hours every week.</p>
                <span className="text-gold-600 font-medium text-sm">Read article →</span>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">Learn More About Poof</h2>
              <p className="text-xl text-slate-600">Explore our product pages for detailed information</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={100 + index * 80}>
                <Link href={link.href} className="block bg-white border border-slate-200 rounded-xl p-6 h-full">
                  <h3 className="text-lg font-bold font-display text-slate-900 mb-2">{link.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{link.description}</p>
                  <span className="text-gold-600 font-medium text-sm">{link.linkText}</span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-slow" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Ready to Try Poof?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your 30-day free trial. 50% off your first 3 months — only $14.50/mo.
            </p>
            <Link
              href="https://app.poofai.com/register"
              className="bg-gold-500 text-white font-semibold px-8 py-4 rounded-lg shadow-gold hover:bg-gold-400 transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
            >
              Start Free Trial →
            </Link>
            <p className="text-white/80 text-sm mt-4">
              30-day free trial &bull; Cancel anytime
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
