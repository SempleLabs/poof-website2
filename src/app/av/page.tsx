import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import { getFaqPageSchema, getBreadcrumbSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'Poof for AV integrators — the books from signed proposal to project P&L | Poof',
  description:
    'Deposits held until the install is done, equipment ordered and received against the project, draws and change orders, and a P&L for every project: equipment, labor and subs, quoted against actual. Poof is free; Poof Agent is $49/mo.',
  alternates: { canonical: 'https://www.poofai.com/av' },
  openGraph: {
    images: ['/og-image.png'],
    title: 'Poof for AV integrators',
    description: 'The books from the signed proposal to the project P&L. Poof is free; Poof Agent is $49 a month.',
    url: 'https://www.poofai.com/av',
    siteName: 'Poof',
    type: 'website',
  },
}

const REGISTER = 'https://app.poofai.com/register'

// One project, start to finish. Every line here is a feature that is live in the product (see /features).
const STEPS: [string, string][] = [
  [
    'The proposal is signed',
    'Up to three options on one quote, good, better and best, and the customer picks one and signs online. The deposit is paid by card or bank, or recorded, and held as a liability: it is not revenue the day it lands. Acceptance creates the job at the accepted total.',
  ],
  [
    'The equipment is ordered and received',
    'Order from the quote and the purchase order fills itself. Email it to the distributor, receive partial shipments with a photo of the packing slip, and see what is still on order beside the cost on the job. When the bill comes in, a difference from the PO becomes a card to accept or dispute.',
  ],
  [
    'The install is billed as it goes',
    'Deposit and balance, 30/40/30, or up to six draws, set on the quote. A card asks to bill the draw when the install starts and when it finishes, and a person decides. Change orders are billed now, with the final, or spread over the bills left.',
  ],
  [
    'Every project has its own P&L',
    'Revenue, equipment, materials, labor and subs, quoted against actual, with a card when a project runs over its quote. The deposit is released to that project’s revenue when the work is done, and month-end checks that nothing was released and invoiced twice.',
  ],
]

const BUILT_FOR: [string, string, string, string][] = [
  [
    'Weeks between the deposit and the install',
    'Long projects make cash look like profit. Poof holds deposits as a liability and shows what is left to bill, the backlog, and A/R by project, with three checks at month-end.',
    '/features#quotes-and-progress-billing',
    'See progress billing',
  ],
  [
    'Equipment received but not billed',
    'Gear that arrives before the distributor’s invoice is accrued from a card at month-end, and the entry reverses on the 1st. One bill can be split across several projects, line by line, to the cent.',
    '/features#purchasing-and-truck-stock',
    'See purchase orders',
  ],
  [
    'Support agreements that earn as they should',
    'Monthly support and monitoring plans are earned as they are billed. Annual prepaid plans are deferred and earned per visit. Renewals and cancellations arrive as cards a person decides.',
    '/features#memberships',
    'See plans',
  ],
  [
    'Sales tax on gear, not on labor',
    'What is taxable is set by the kind of work, so equipment and labor on one invoice can be taxed differently. Exempt customers keep their certificates and expiry dates on file. You file the return; Poof ties it out.',
    '/features#sales-tax',
    'See sales tax',
  ],
  [
    'Commissions your salespeople can check',
    'Credit for who sold each project, split if two people did, with plans on revenue or on margin, earned when the invoice is paid in full. Commissions accrue on the books and show on the project’s P&L.',
    '/features#sales-credit-and-commissions',
    'See commissions',
  ],
  [
    'Your installers’ 1099s, filed by Poof',
    'The W-9 goes out at a sub’s first payment, so January is one approval. Poof files with the IRS and mails the copies. The first 3 forms a year are free, then $2.49 a form.',
    '/1099s',
    'File your 1099s',
  ],
]

const faqs = [
  {
    question: 'Do I have to stop using the software I design and quote in?',
    answer:
      'No. Keep the tool your team designs systems and builds proposals in. Poof is where the books live: the bank, the bills, the invoices, the project P&L and the close. If you would rather quote in Poof, its quotes take options, deposits, payment schedules and photos, and an accepted quote becomes the job.',
  },
  {
    question: 'Poof says “jobs.” Are those my projects?',
    answer:
      'Yes. In Poof a project is a job: everything earned and spent on it, the deposit, the draws, the equipment on order and the change orders, all on one P&L. Ask for “the P&L by project this year” and Poof builds the report from your books.',
  },
  {
    question: 'We are on QuickBooks. How do we move?',
    answer:
      'Bring a QuickBooks export: the trial balance, customers and vendors import from files, with no limit on imports. Connect the bank and start the month in Poof. If the books are behind, a bookkeeper who works in Poof can catch them up first.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Poof is free, including quotes, purchase orders, progress billing, project P&Ls, sales tax and the close. Poof Agent, the AI that reads every receipt, sorts every transaction and answers anything you ask, is $49 a month, and your first 30 days of it are free. There is no per-user or per-project pricing.',
  },
  {
    question: 'Can someone just do the books for us?',
    answer:
      'Yes. Ask for a bookkeeper who works in Poof: say how far behind the books are, roughly how many transactions you have a month, and whether you run payroll. A person usually gets back to you within a business day with a quote for the job.',
  },
  {
    question: 'Who is this for?',
    answer:
      'AV integrators who sell, install and support systems: commercial AV, video walls, conference rooms, home theater and automation, from a two-person shop to a twenty-person team. If your work is a signed proposal, equipment ordered against it, an install and a support agreement after, Poof is built for that shape.',
  },
]

export default function AvPage() {
  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.poofai.com' },
              { name: 'For AV integrators', url: 'https://www.poofai.com/av' },
            ])
          ),
        }}
      />
      <Header />

      <section className="pt-32 pb-10">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">For AV integrators</p>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[76px] leading-[1] tracking-[-0.035em] text-ink mb-5 text-balance">
            From the signed proposal to the project P&amp;L.
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-[58ch] leading-[1.45]">
            Deposits held until the install is done, equipment ordered and received against the project, draws and change
            orders billed as the work moves, and <b className="text-ink font-semibold">a P&amp;L for every project</b>, quoted
            against actual. Poof is free; Poof Agent is $49 a month.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            <Link href={REGISTER} className="inline-block rounded-lg bg-ledger-500 text-white font-semibold text-[15px] px-[18px] py-[11px] hover:bg-ledger-600 transition-colors">Start free</Link>
            <Link href="/bookkeeper" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Ask for a bookkeeper</Link>
          </div>
          <p className="text-sm text-muted mt-4 max-w-[60ch]">No card. Poof Agent is free for your first 30 days.</p>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">One project, start to finish</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-6 text-balance">
            Ten weeks of work. One chain in the books.
          </h2>
          <ol className="border-t border-ink">
            {STEPS.map(([h, t], i) => (
              <li key={h} className="grid grid-cols-[40px_1fr] gap-3 py-5 border-b border-rule items-start">
                <span className="font-mono tabular text-sm text-muted pt-0.5">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-ink text-[16px]">{h}</h3>
                  <p className="text-[15px] text-muted leading-relaxed mt-1 max-w-[62ch]">{t}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-[15px] text-muted mt-6 max-w-[62ch]">
            Nothing reaches the books on its own. Each step waits on a card with what Poof found, and a person says yes.
          </p>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Built for how AV work is billed</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance">
            The parts a general ledger leaves to a spreadsheet.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-ink mt-6">
            {BUILT_FOR.map(([h, t, href, cta]) => (
              <div key={h} className="py-5 border-b border-rule">
                <h3 className="font-semibold text-ink text-[16px]">{h}</h3>
                <p className="text-sm text-muted leading-relaxed mt-1.5 max-w-[48ch]">{t}</p>
                <Link href={href} className="inline-block text-sm font-semibold text-ledger-600 hover:text-ledger-700 mt-2">{cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Reports by asking</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-4 text-balance">
            Ask for the report the way you would ask your controller.
          </h2>
          <p className="text-[15px] text-muted leading-relaxed max-w-[62ch]">
            Type “show me the P&amp;L by project this year” and Poof builds it from your books. Change it by asking
            (“make it quarterly”), tap Save, and it runs on today’s books every time you open it, or
            lands in your inbox on the 1st. Running and scheduling a saved report is free.
          </p>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Questions</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-8 text-balance">What integrators ask first.</h2>
          <dl className="border-t border-ink">
            {faqs.map((f) => (
              <div key={f.question} className="py-5 border-b border-rule">
                <dt className="font-semibold text-ink">{f.question}</dt>
                <dd className="text-[15px] text-muted leading-relaxed mt-2 max-w-[68ch]">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
