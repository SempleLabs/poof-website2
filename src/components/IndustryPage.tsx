import type { ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import { getFaqPageSchema, getBreadcrumbSchema } from '@/lib/jsonLd'

const REGISTER = 'https://app.poofai.com/register'
const DEMO = 'https://app.poofai.com/demo'

export interface IndustryPageProps {
  /** Path without the leading slash, e.g. "hvac". */
  slug: string
  /** "For HVAC shops": the eyebrow, and the breadcrumb's last item. */
  eyebrow: string
  h1: ReactNode
  lede: ReactNode
  /** The line under the buttons, beside "No card." */
  demoNote?: string
  stepsEyebrow: string
  stepsH2: string
  /** One job, start to finish. Every line must be a feature that is live in the product (see /features). */
  steps: [string, string][]
  builtForEyebrow: string
  builtForH2: string
  /** [heading, body, href, link text] */
  builtFor: [string, string, string, string][]
  /** A sentence someone would type into Ask Poof, without the quotes. */
  reportAsk: string
  reportFollowUp: string
  /** Free guides and templates for this trade: [title, href, one line]. */
  guides: [string, string, string][]
  faqH2: string
  faqs: { question: string; answer: string }[]
}

/** The page for one industry. /av is the model; the trade pages share this layout so each one is only its copy. */
export default function IndustryPage(p: IndustryPageProps) {
  const url = `https://www.poofai.com/${p.slug}`
  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(p.faqs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.poofai.com' },
              { name: 'Poof for shops', url: 'https://www.poofai.com/trades' },
              { name: p.eyebrow, url },
            ])
          ),
        }}
      />
      <Header />

      <section className="pt-32 pb-10">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">{p.eyebrow}</p>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[76px] leading-[1] tracking-[-0.035em] text-ink mb-5 text-balance">
            {p.h1}
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-[58ch] leading-[1.45]">{p.lede}</p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            <Link href={REGISTER} className="inline-block rounded-lg bg-ledger-500 text-white font-semibold text-[15px] px-[18px] py-[11px] hover:bg-ledger-600 transition-colors">Start free</Link>
            <Link href="/bookkeeper" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Ask for a bookkeeper</Link>
          </div>
          <p className="text-sm text-muted mt-4 max-w-[60ch]">
            No card. Poof Agent is free for your first 30 days.{' '}
            <Link href={DEMO} className="font-semibold text-ledger-600 hover:text-ledger-700">
              {p.demoNote ?? 'Or open a live demo, no sign-up'} →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">{p.stepsEyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-6 text-balance">{p.stepsH2}</h2>
          <ol className="border-t border-ink">
            {p.steps.map(([h, t], i) => (
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
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">{p.builtForEyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance">{p.builtForH2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-ink mt-6">
            {p.builtFor.map(([h, t, href, cta]) => (
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
            Type “{p.reportAsk}” and Poof builds it from your books. {p.reportFollowUp} Tap Save, and it runs on today’s
            books every time you open it, or lands in your inbox on the 1st. Running and scheduling a saved report is free.
          </p>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Free, no sign-up</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-6 text-balance">
            Guides and templates for your trade.
          </h2>
          <ul className="border-t border-ink">
            {p.guides.map(([title, href, line]) => (
              <li key={href} className="py-4 border-b border-rule">
                <Link href={href} className="font-semibold text-ink hover:text-ledger-600">{title} →</Link>
                <p className="text-sm text-muted leading-relaxed mt-1 max-w-[62ch]">{line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Questions</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-8 text-balance">{p.faqH2}</h2>
          <dl className="border-t border-ink">
            {p.faqs.map((f) => (
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

/** Shared FAQ answers, so the price and the person are said the same way on every trade page. */
export const COST_ANSWER = (included: string) =>
  `Poof is free, including ${included} and the close. Poof Agent, the AI that reads every receipt, sorts every transaction and answers anything you ask, is $49 a month, and your first 30 days of it are free. The price doesn’t change with trucks or technicians. The AI receptionist is a separate add-on: $99 a month with 1,000 minutes, then 12¢ a minute.`

export const PERSON_ANSWER =
  'Yes. Ask for a bookkeeper who works in Poof: say how far behind the books are, roughly how many transactions you have a month, and whether you run payroll. A person usually gets back to you within a business day with a quote for the job.'

export const SWITCH_ANSWER = (tools: string) =>
  `No. Keep ${tools}. Bring the export (your price list, customers and service addresses, equipment and members) by email or dropped into Ask Poof; each file shows a preview and becomes a card to approve. Moving from QuickBooks works the same way, starting from the trial balance. Connect the bank and start the month in Poof. If the books are behind, a bookkeeper who works in Poof can catch them up first.`
