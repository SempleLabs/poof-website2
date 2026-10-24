import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type Post = { slug: string; title: string; excerpt: string; category: string; readTime: string; date: string }

function getBlogPosts(): Post[] {
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
  title: 'Resources: Tax Season Guides, Chart of Accounts Templates, Checklists | Poof',
  description: 'Free small business bookkeeping and tax resources: the 2026 tax deadlines, 1099 and estimated tax guides, chart of accounts templates for twelve trades, and checklists written by a controller. No email required.',
  keywords: 'small business tax deadlines 2027, 1099 threshold 2026, quarterly estimated taxes, chart of accounts template, bookkeeping checklist',
  alternates: {
    canonical: 'https://www.poofai.com/resources',
  },
  openGraph: {
    title: 'Poof Resources: tax season, templates, checklists',
    description:
      'The 2026 tax deadlines, 1099 and estimated tax guides, chart of accounts templates by trade, and checklists written by a controller. No email required.',
    url: 'https://www.poofai.com/resources',
    siteName: 'Poof',
    type: 'website',
  },
}

const eyebrow = 'font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3'
const h2 = 'font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance'
const lede = 'text-[17px] text-muted max-w-[62ch] leading-relaxed mb-7'

// Tax year 2026, filed in 2027. Dates that fall on a weekend are shown on the business day they move to.
const deadlines = [
  { date: 'Jan 15', what: 'Fourth-quarter estimated tax for 2026', who: 'Owners of pass-throughs, on a 1040-ES' },
  { date: 'Feb 1', what: '1099-NEC and W-2s to the IRS and to the people you paid', who: 'Anyone who paid a contractor $2,000 or more in 2026' },
  { date: 'Mar 15', what: 'S-corp (1120-S) and partnership (1065) returns, or the extension', who: 'S-corps and multi-member LLCs' },
  { date: 'Apr 15', what: 'Schedule C and C-corp returns, first 2027 estimate, Texas property rendition', who: 'Sole proprietors, single-member LLCs, C-corps' },
  { date: 'May 17', what: 'Texas franchise tax report (May 15 is a Saturday)', who: 'Texas LLCs and corporations' },
]

// Articles by what the reader is trying to do. Chart of accounts posts live with their templates above.
const topics: { title: string; blurb: string; slugs: string[] }[] = [
  {
    title: 'Taxes and year end',
    blurb: 'What to have ready, what changed for 2026, and what to set aside.',
    slugs: ['1099-threshold-2026', 'quarterly-estimated-taxes', 'how-much-to-set-aside-for-taxes', 'what-your-cpa-needs-at-year-end', 'texas-franchise-tax-small-business', 'texas-business-personal-property-rendition', 'tax-season-bookkeeping-checklist'],
  },
  {
    title: 'Leaving QuickBooks',
    blurb: 'The 2026 prices, the alternatives, and the bank rule that keeps posting.',
    slugs: ['quickbooks-price-increase-2026', 'quickbooks-too-expensive-alternatives', 'best-quickbooks-alternatives-small-business', 'quickbooks-bank-rules-auto-post', 'mercury-books-vs-poof'],
  },
  {
    title: 'Running a service shop',
    blurb: 'Job margin, the trade guides, and the calls you miss after hours.',
    slugs: ['hvac-bookkeeping-guide', 'plumbing-bookkeeping-guide', 'electrical-contractor-bookkeeping-guide', 'hvac-per-job-profitability', 'dealer-financing-job-margin', 'after-hours-calls-trade-shops'],
  },
  {
    title: 'AI and your books',
    blurb: 'What AI should and should not do to a ledger, and a close in five days.',
    slugs: ['should-ai-post-to-your-books', 'ai-bookkeeping-small-business', 'do-i-need-bookkeeper-or-ai', 'how-to-automate-small-business-bookkeeping', 'close-your-books-in-five-days'],
  },
  {
    title: 'Getting started',
    blurb: 'A new LLC, a first chart of accounts, and payouts that never match.',
    slugs: ['how-to-set-up-bookkeeping-new-llc', 'ecommerce-bookkeeping-stripe-shopify-fees'],
  },
]

const templates = [
  { trade: 'HVAC', accounts: 49, href: '/downloads/hvac-chart-of-accounts-template.csv', guide: '/blog/hvac-chart-of-accounts' },
  { trade: 'Plumbing', accounts: 58, href: '/downloads/plumbing-chart-of-accounts-template.csv', guide: '/blog/plumbing-chart-of-accounts' },
  { trade: 'Electrical', accounts: 57, href: '/downloads/electrical-chart-of-accounts-template.csv', guide: '/blog/electrical-chart-of-accounts' },
  { trade: 'Roofing', accounts: 57, href: '/downloads/roofing-chart-of-accounts-template.csv', guide: '/blog/roofing-chart-of-accounts' },
  { trade: 'Pest control', accounts: 54, href: '/downloads/pest-control-chart-of-accounts-template.csv', guide: '/blog/pest-control-chart-of-accounts' },
  { trade: 'Landscaping', accounts: 61, href: '/downloads/landscaping-chart-of-accounts-template.csv', guide: '/blog/landscaping-chart-of-accounts' },
  { trade: 'Garage door', accounts: 54, href: '/downloads/garage-door-chart-of-accounts-template.csv', guide: '/blog/garage-door-chart-of-accounts' },
  { trade: 'Pool service', accounts: 53, href: '/downloads/pool-service-chart-of-accounts-template.csv', guide: '/blog/pool-service-chart-of-accounts' },
  { trade: 'General contractor', accounts: 64, href: '/downloads/general-contractor-chart-of-accounts-template.csv', guide: '/blog/general-contractor-chart-of-accounts' },
  { trade: 'Restoration', accounts: 60, href: '/downloads/restoration-chart-of-accounts-template.csv', guide: '/blog/restoration-chart-of-accounts' },
  { trade: 'Solar installer', accounts: 68, href: '/downloads/solar-installer-chart-of-accounts-template.csv', guide: '/blog/solar-installer-chart-of-accounts' },
  { trade: 'Cleaning', accounts: 62, href: '/downloads/cleaning-company-chart-of-accounts-template.csv', guide: '/blog/cleaning-company-chart-of-accounts' },
]

const downloads = [
  { title: 'Year-End Package for Your CPA', type: 'Checklist', description: 'Everything your CPA asks for in January, in the order they ask, with the questions answered from your books.', href: '/guides/year-end-cpa-package-checklist.html' },
  { title: '1099 Vendor Tracker', type: 'CSV', description: 'One row per contractor: W-9 on file, how you paid them, the year’s total, and whether they cross $2,000.', href: '/downloads/1099-vendor-tracker-2026.csv', download: true },
  { title: 'Monthly Bookkeeping Checklist', type: 'Checklist', description: 'The tasks that keep a month from getting away from you, in the order they depend on each other.', href: '/guides/monthly-bookkeeping-checklist.html' },
  { title: 'Year-End Closing Procedures', type: 'Guide', description: 'Closing the fiscal year: the reconciliations, the adjustments, and the lock.', href: '/guides/year-end-closing-procedures.html' },
  { title: 'Expense Categorization Cheat Sheet', type: 'Cheat sheet', description: 'Common business expenses, the Schedule C line each lands on, and how much is deductible.', href: '/guides/expense-categorization-cheat-sheet.html' },
  { title: 'Small Business Bookkeeping Setup Guide', type: 'Guide', description: 'Setting up the books for a new business, from the bank account to the first close.', href: '/guides/small-business-bookkeeping-setup-guide.html' },
]

const productPages = [
  { title: 'Taxes', description: 'The calendar, the reserve, the four estimates, and a January package for your CPA.', href: '/taxes' },
  { title: 'Poof for shops', description: 'The phone answered, the job on the board, the tech closing it from a text.', href: '/trades' },
  { title: 'The close', description: 'Seventeen tasks with due dates, thirteen ticked by the books themselves.', href: '/close' },
  { title: 'Autopilot with limits', description: 'AI that posts inside a ceiling and a history check, and stops itself when wrong.', href: '/autopilot' },
  { title: 'Poof vs QuickBooks', description: 'Against QuickBooks Plus at $140, row by row.', href: '/poof-vs-quickbooks' },
  { title: 'Security', description: 'How Poof protects the books and every AI call.', href: '/security' },
]

export default async function ResourcesPage() {
  const posts = getBlogPosts()
  const bySlug = new Map(posts.map((p) => [p.slug, p]))
  const placed = new Set(topics.flatMap((t) => t.slugs))
  const more = posts.filter((p) => !placed.has(p.slug) && !p.slug.endsWith('chart-of-accounts'))
  const groups = [
    ...topics.map((t) => ({ ...t, posts: t.slugs.map((s) => bySlug.get(s)).filter((p): p is Post => !!p) })),
    ...(more.length ? [{ title: 'More articles', blurb: 'Everything else from the blog.', slugs: [], posts: more }] : []),
  ].filter((g) => g.posts.length)

  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <Header />

      <PageHero
        title={<>Resources, <span className="text-ledger-600">no email required.</span></>}
        subtitle="The 2026 tax deadlines and what changed, chart of accounts templates for twelve trades, and checklists written by a controller. Download, read, import."
      />

      {/* Tax season: dated, so it is the first thing on the page from October to May */}
      <section className="py-14 border-t border-rule" id="tax-season">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={eyebrow}>Tax season · the 2026 tax year, filed in 2027</p>
          <h2 className={h2}>Five dates between now and May, and what each one needs.</h2>
          <p className={lede}>The 1099 threshold moved from $600 to $2,000 for payments made in 2026, so January will look different. Here is the calendar for a calendar-year business, and the guides behind each date.</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-ink">
            {deadlines.map((d) => (
              <li key={d.date} className="py-5 pr-5 border-b border-rule lg:border-b-0">
                <p className="font-display text-[28px] leading-none tracking-[-0.03em] text-ink tabular">{d.date}</p>
                <p className="font-semibold text-ink text-[15px] mt-2 leading-snug">{d.what}</p>
                <p className="text-[13.5px] text-muted mt-1">{d.who}</p>
              </li>
            ))}
          </ol>
          <p className="text-[13px] text-muted mt-4 max-w-[70ch]">General information, not tax advice. Fiscal-year businesses and states other than Texas have their own dates; your CPA has the final word. Poof keeps this calendar for your business, with who files each item. <Link href="/taxes" className="text-ledger-600 font-semibold hover:text-ledger-700">See Taxes in Poof</Link></p>
        </div>
      </section>

      {/* Chart of accounts templates */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={eyebrow}>Chart of accounts templates</p>
          <h2 className={h2}>A chart of accounts built for your trade, ready to import.</h2>
          <p className={lede}>Numbered accounts with types and subtypes in the columns QuickBooks Online and Xero expect, and a one-line reason each account exists. Each comes with a guide that walks the structure.</p>
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

      {/* Checklists and downloads */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={eyebrow}>Checklists and downloads</p>
          <h2 className={h2}>Print it, fill it in, hand it to your CPA.</h2>
          <p className={lede}>Written by a former controller, for owners who keep their own books and the bookkeepers who keep them for clients.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-ink">
            {downloads.map((g) => (
              <div key={g.title} className="py-5 pr-6 border-b border-rule">
                <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-ledger-600">{g.type}</p>
                <h3 className="font-semibold text-ink text-[17px] mt-1">{g.title}</h3>
                <p className="text-[15px] text-muted mt-1 leading-[1.5] max-w-[46ch]">{g.description}</p>
                {g.download ? (
                  <a href={g.href} download className="inline-block text-sm text-ledger-600 font-semibold hover:text-ledger-700 mt-2">Download</a>
                ) : (
                  <a href={g.href} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-ledger-600 font-semibold hover:text-ledger-700 mt-2">Open</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles, by what the reader is trying to do */}
      <section className="py-14 border-t border-rule" id="articles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={eyebrow}>From the blog · {posts.length} articles</p>
          <h2 className={h2}>Articles, by what you are trying to do.</h2>
          <div className="mt-8 space-y-12">
            {groups.map((g) => (
              <div key={g.title} className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-x-10 gap-y-3">
                <div>
                  <h3 className="font-display text-2xl tracking-[-0.02em] text-ink">{g.title}</h3>
                  <p className="text-[15px] text-muted mt-1 max-w-[34ch]">{g.blurb}</p>
                </div>
                <ul className="border-t border-ink">
                  {g.posts.map((p) => (
                    <li key={p.slug} className="border-b border-rule">
                      <Link href={`/blog/${p.slug}`} className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-4">
                        <span>
                          <span className="block font-semibold text-ink text-[16.5px] leading-snug group-hover:text-ledger-700">{p.title}</span>
                          <span className="block text-[14.5px] text-muted mt-1 leading-[1.5] line-clamp-2 max-w-[78ch]">{p.excerpt}</span>
                        </span>
                        <span className="font-mono text-xs text-muted whitespace-nowrap sm:pt-1">{p.readTime}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product pages */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={eyebrow}>How Poof does it</p>
          <h2 className={h2}>The same work, done by the books and signed by you.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-ink mt-6">
            {productPages.map((l) => (
              <Link key={l.href} href={l.href} className="group py-5 pr-6 border-b border-rule">
                <h3 className="font-semibold text-ink text-[17px] group-hover:text-ledger-700">{l.title}</h3>
                <p className="text-[15px] text-muted mt-1 leading-[1.5] max-w-[44ch]">{l.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
