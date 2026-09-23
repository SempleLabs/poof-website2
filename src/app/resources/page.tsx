import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PageHero from '@/components/PageHero'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), 'content', 'blog')
  if (!fs.existsSync(blogDir)) return []

  return fs.readdirSync(blogDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf8')
      const { data } = matter(content)
      return {
        slug: file.replace('.mdx', ''),
        title: data.title,
        excerpt: data.excerpt,
        category: data.category,
        readTime: data.readTime,
        date: data.date,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const metadata: Metadata = {
  title: 'Resources - Small Business Bookkeeping Guides | Poof',
  description: 'Free resources for small business bookkeeping. Guides, templates, and tips to help you manage your finances better.',
  keywords: 'small business bookkeeping guides, financial templates, accounting resources, bookkeeping tips',
  alternates: {
    canonical: 'https://www.poofai.com/resources',
  },
  openGraph: {
    title: 'Poof Resources — Small Business Bookkeeping Guides',
    description:
      'Free guides and templates on AI bookkeeping, automating your finances, taxes, and keeping clean books for your small business.',
    url: 'https://www.poofai.com/resources',
    siteName: 'Poof',
    type: 'website',
  },
}

export default async function ResourcesPage() {
  const blogPosts = getBlogPosts()
  const templates = [
    { trade: 'HVAC', accounts: 49, href: '/downloads/hvac-chart-of-accounts-template.csv', guide: '/blog/hvac-chart-of-accounts' },
    { trade: 'Plumbing', accounts: 58, href: '/downloads/plumbing-chart-of-accounts-template.csv', guide: '/blog/plumbing-chart-of-accounts' },
    { trade: 'Electrical', accounts: 57, href: '/downloads/electrical-chart-of-accounts-template.csv', guide: '/blog/electrical-chart-of-accounts' },
    { trade: 'Roofing', accounts: 57, href: '/downloads/roofing-chart-of-accounts-template.csv', guide: '/blog/roofing-chart-of-accounts' },
    { trade: 'Pest control', accounts: 54, href: '/downloads/pest-control-chart-of-accounts-template.csv', guide: '/blog/pest-control-chart-of-accounts' },
    { trade: 'Landscaping', accounts: 61, href: '/downloads/landscaping-chart-of-accounts-template.csv', guide: '/blog/landscaping-chart-of-accounts' },
    { trade: 'Garage door', accounts: 54, href: '/downloads/garage-door-chart-of-accounts-template.csv', guide: '/blog/garage-door-chart-of-accounts' },
    { trade: 'Pool service', accounts: 53, href: '/downloads/pool-service-chart-of-accounts-template.csv', guide: '/blog/pool-service-chart-of-accounts' },
  ]

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
      title: 'Poof for shops',
      description: 'The phone answered, the job on the board, the tech closing it from a text, and the invoice on a per-job P&L.',
      href: '/trades',
      linkText: 'See Poof for shops →',
    },
    {
      title: 'The close',
      description: 'Seventeen tasks with due dates, thirteen ticked by the books themselves, and a five-day guarantee.',
      href: '/close',
      linkText: 'See the close →',
    },
    {
      title: 'Autopilot with limits',
      description: 'AI that posts to your books on its own, inside a ceiling and a history check, and stops itself when it is wrong.',
      href: '/autopilot',
      linkText: 'See the gates →',
    },
    {
      title: 'How Poof works',
      description: 'Connect, the AI proposes, you approve, the month closes as a record.',
      href: '/how-it-works',
      linkText: 'Four steps →',
    },
    {
      title: 'All 128 Features',
      description: 'Explore every feature included in your Poof subscription.',
      href: '/features',
      linkText: 'View features →',
    },
    {
      title: 'Poof vs QuickBooks',
      description: 'Against QuickBooks Plus at $140, and what a bank rule costs you.',
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
    <main id="main-content" className="min-h-screen">
      <Header />

      <PageHero
        title={<>Resources, <span className="text-ledger-600">no email required.</span></>}
        subtitle="Chart of accounts templates by trade, guides written by a controller, and the posts people actually find us by. Download, read, import."
      />

      {/* Chart of accounts templates */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Chart of accounts templates</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance">A chart of accounts built for your trade, ready to import.</h2>
          <p className="text-[17px] text-muted max-w-[62ch] leading-relaxed mb-7">Numbered accounts with types and subtypes in the columns QuickBooks Online and Xero expect, and a one-line reason each account exists. Each comes with a guide that walks the structure.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-ink">
            {templates.map((t) => (
              <div key={t.trade} className="py-5 pr-6 border-b border-rule">
                <h3 className="font-semibold text-ink text-[17px]">{t.trade}</h3>
                <p className="font-mono tabular text-xs text-muted mt-1">{t.accounts} accounts · CSV</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <a href={t.href} download className="text-ledger-600 font-semibold hover:text-ledger-700">Download</a>
                  <Link href={t.guide} className="text-ink font-semibold hover:text-ledger-700">Read the guide</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  <div className="flex-shrink-0 w-16 h-16 bg-ledger-100 rounded-xl flex items-center justify-center text-ledger-600">
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
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-ledger-500 text-white text-sm font-semibold hover:bg-ledger-600 transition-colors"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimateOnScroll key={post.slug} animation="fade-up" delay={100 + index * 80}>
                <Link href={`/blog/${post.slug}`} className="block bg-white border border-slate-200 rounded-xl p-8 h-full hover:border-ledger-300 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-ledger-100 text-ledger-600">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-2">{post.title}</h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <span className="text-ledger-600 font-medium text-sm">Read article →</span>
                </Link>
              </AnimateOnScroll>
            ))}
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
                  <span className="text-ledger-600 font-medium text-sm">{link.linkText}</span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Ready to Try Poof?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your 30-day free trial. Then $39.50 a month for your first three paid months, and $79 after — every feature included.
            </p>
            <Link
              href="https://app.poofai.com/register"
              className="bg-ledger-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-ledger-600 transform hover:-translate-y-0.5 transition-all duration-300 text-lg"
            >
              Start free trial →
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
