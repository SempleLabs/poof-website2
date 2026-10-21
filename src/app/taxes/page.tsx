import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import { getFaqPageSchema, getBreadcrumbSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'Taxes in Poof: tax calendar, tax reserve, quarterly estimates, CPA package | Poof',
  description:
    'Every tax deadline on the day it really falls, how much tax you have built up against what you have set aside, your four quarterly estimates, 1099s at the $2,000 threshold, and one year-end package for your CPA. Poof prepares and reminds; you and your CPA file.',
  alternates: { canonical: 'https://www.poofai.com/taxes' },
  openGraph: {
    title: 'Taxes, kept by the books',
    description: 'The tax calendar, the reserve, the four estimates, 1099s, and a January package your CPA can use. Poof prepares and reminds; you and your CPA file.',
    url: 'https://www.poofai.com/taxes',
    siteName: 'Poof',
    type: 'website',
  },
}

const eyebrow = 'font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3'
const h2 = 'font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance'
const lede = 'text-[17px] text-muted max-w-[60ch] leading-relaxed mb-7'

// A sample S-corp shop in Texas with payroll and contractors, tax year 2026. Kinds follow the product:
// evidence = ticks itself from what Poof has; person = ticked by whoever filed it.
const CALENDAR: { date: string; item: string; who: string; kind: 'evidence' | 'person' }[] = [
  { date: 'Jan 15', item: 'Fourth-quarter estimate', who: 'You, on a 1040-ES', kind: 'evidence' },
  { date: 'Jan 15', item: 'Year-end package to your CPA', who: 'You', kind: 'evidence' },
  { date: 'Jan 20', item: 'Texas sales tax, December', who: 'You', kind: 'evidence' },
  { date: 'Feb 1', item: '1099-NEC to the IRS and to contractors', who: 'Your bookkeeper', kind: 'evidence' },
  { date: 'Feb 1', item: 'W-2s and Form 940', who: 'Your payroll provider', kind: 'person' },
  { date: 'Feb 1', item: 'Form 941, fourth quarter', who: 'Your payroll provider', kind: 'person' },
  { date: 'Mar 15', item: 'Form 1120-S, or the extension', who: 'Your CPA', kind: 'person' },
  { date: 'Apr 15', item: 'Texas property: certification or rendition', who: 'You', kind: 'evidence' },
  { date: 'Apr 15', item: 'First 2027 estimate', who: 'You, on a 1040-ES', kind: 'evidence' },
  { date: 'May 17', item: 'Texas franchise tax report', who: 'Your CPA', kind: 'person' },
]

const ESTIMATES = [
  { q: 'Q1', due: 'Apr 15, 2026', amount: '$5,600', status: 'Paid Apr 13 · found in the bank' },
  { q: 'Q2', due: 'Jun 15, 2026', amount: '$5,600', status: 'Paid Jun 12 · found in the bank' },
  { q: 'Q3', due: 'Sep 15, 2026', amount: '$5,600', status: 'Paid Sep 15 · typed in, paid personally' },
  { q: 'Q4', due: 'Jan 15, 2027', amount: '$5,600', status: 'Not paid yet' },
]

const PACKAGE = [
  ['Your year on the return’s lines', 'Every account mapped to Schedule C or Form 1120-S, confirmed once, tied to the books’ net income.'],
  ['The questions, answered with numbers', 'Meals, penalties, depreciation, officer pay or owner draws, vehicles, and 1099s, each with the books’ figure.'],
  ['The balance sheet at December 31', 'The same one the year-end close signed.'],
  ['The fixed-asset roll-forward', 'What you bought, sold and depreciated, from the asset register.'],
  ['Payroll and sales tax for the year', 'Totals from the pay runs and the returns you recorded.'],
  ['A close task when it’s sent', 'Mark it sent and January’s close knows the CPA has it.'],
]

const faqs = [
  { question: 'Does Poof file my taxes?', answer: 'No. Poof prepares and reminds. It keeps the calendar, works out the reserve and the estimates, prepares your 1099s, and builds the year-end package your CPA uses to prepare the return. You, your bookkeeper, your payroll provider, or your CPA file and pay, and each calendar row says which one. Poof never moves money.' },
  { question: 'How does Poof work out my quarterly estimates?', answer: 'With the safe-harbor rule. Poof takes the smaller of 90% of this year’s tax, estimated from the books’ profit so far, and 100% of last year’s tax, or 110% if last year’s adjusted gross income was over $150,000. It splits that into four payments on their real due dates. If your CPA gives you a number, the CPA’s number wins. Estimates are federal; state estimates are not calculated yet.' },
  { question: 'What is the tax reserve?', answer: 'Two numbers side by side: how much tax this year’s profit has built up so far, and how much is sitting in the bank account you set aside for taxes. The rate starts at 25% as a starting guess and you or your CPA can change it. When the reserve falls behind, a monthly reminder says by how much. You move the money yourself.' },
  { question: 'Which entity types does Poof support?', answer: 'The calendar covers sole proprietors, single-member LLCs, S-corps, partnerships, and C-corps. The return-line mapping covers Schedule C and Form 1120-S today; partnerships and C-corps are next. The year-end package works for every entity type.' },
  { question: 'Do I still need a CPA?', answer: 'Yes, and Poof is built to make that relationship cheaper. The package answers the questions a CPA asks every January with your books’ numbers, so the CPA spends their hours on tax judgments, not on chasing a mileage log. Those judgments, like Section 179 or bonus depreciation elections and reasonable compensation, stay with the CPA.' },
  { question: 'What does Poof do for Texas businesses?', answer: 'It checks last year’s revenue against the franchise tax no-tax-due threshold and tells you which report to file by the May deadline, and it lists what the business owned on January 1 against the $125,000 business personal property exemption, so you know whether to file the one-time certification or a rendition. The Texas tab appears for a business with a Texas address.' },
]

export default function TaxesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: 'Home', url: 'https://www.poofai.com' }, { name: 'Taxes', url: 'https://www.poofai.com/taxes' }])) }} />
      <Header />

      <section className="pt-32 pb-10">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className={eyebrow}>Taxes</p>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[76px] leading-[1] tracking-[-0.035em] text-ink mb-5 text-balance">Tax season, kept by the books.</h1>
          <p className="text-lg sm:text-xl text-muted max-w-[58ch] leading-[1.45]">
            Every deadline on the day it really falls. How much tax you have built up, next to what you have set aside. Your four estimates, your 1099s, and <b className="text-ink font-semibold">one package your CPA can use in January</b>. Poof prepares and reminds; you and your CPA file and pay.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            <Link href="https://app.poofai.com/register" className="inline-block rounded-lg bg-ledger-500 text-white font-semibold text-[15px] px-[18px] py-[11px] hover:bg-ledger-600 transition-colors">Start free trial</Link>
            <Link href="/demo" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Book a demo</Link>
          </div>
        </div>
      </section>

      {/* the calendar */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className={eyebrow}>Books → Taxes · the calendar</p>
          <h2 className={h2}>Every deadline you have, and who files it.</h2>
          <p className={lede}>Poof builds the calendar from what the business is: its entity type, whether it runs payroll, whether it pays contractors, where it collects sales tax, and its state. Dates move off weekends and holidays. A reminder lands two weeks ahead, and a row ticks itself where Poof has the evidence.</p>
          <ol className="border-t border-ink">
            {CALENDAR.map((t) => (
              <li key={t.date + t.item} className="grid grid-cols-[64px_24px_1fr] gap-3 py-3.5 border-b border-rule items-start">
                <span className="font-mono tabular text-xs text-muted pt-1">{t.date}</span>
                <span className={`w-[17px] h-[17px] mt-0.5 rounded-[3px] border-[1.5px] ${t.kind === 'evidence' ? 'border-ledger-600 bg-ledger-200' : 'border-muted'}`} aria-hidden="true" />
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-semibold text-ink text-[15.5px]">{t.item}</span>
                    <span className="font-mono text-[10.5px] tracking-[0.06em] uppercase text-muted">{t.kind === 'evidence' ? 'ticks itself' : "a person's tick"}</span>
                  </div>
                  <p className="text-sm text-muted mt-0.5">{t.who}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-muted mt-4">A sample S-corp in Texas with payroll and contractors, tax year 2026. A row ticks itself from evidence: 1099s marked filed, a sales tax return recorded, an estimate paid, the package sent, a Texas certification on file.</p>
        </div>
      </section>

      {/* reserve and estimates */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className={eyebrow}>The reserve and the estimates</p>
          <h2 className={h2}>What you owe so far, what you set aside, and four payments.</h2>
          <p className={lede}>The reserve is this year&apos;s profit times your rate, next to the balance of the account you set aside for taxes. The estimates use the safe-harbor rule, and payments to the IRS are found in the bank feed and counted toward the right quarter.</p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-5">
            <div className="bg-white border border-rule px-5 py-[18px]">
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">Tax reserve · through Sep 30</p>
              <dl className="mt-3 space-y-3">
                <div><dt className="text-sm text-muted">Owed so far</dt><dd className="font-display text-4xl tracking-[-0.03em] tabular">$22,400</dd></div>
                <div><dt className="text-sm text-muted">Set aside</dt><dd className="font-display text-4xl tracking-[-0.03em] tabular text-ledger-600">$18,450</dd></div>
              </dl>
              <p className="text-[13.5px] text-ink mt-3 border-l-[3px] border-audit pl-3">$3,950 behind. You move the money; the reminder stays until the reserve covers it.</p>
            </div>
            <div className="bg-white border border-rule">
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted px-5 pt-[18px]">2026 federal estimates · safe harbor $22,400</p>
              <ul className="mt-2">
                {ESTIMATES.map((e) => (
                  <li key={e.q} className="grid grid-cols-[36px_1fr_auto] gap-3 px-5 py-3 border-t border-rule text-[14.5px] items-baseline">
                    <span className="font-mono text-xs text-muted">{e.q}</span>
                    <span><span className="font-semibold text-ink">{e.due}</span><span className="block text-[13px] text-muted">{e.status}</span></span>
                    <span className="font-mono tabular">{e.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted mt-4">Sample figures. A payment booked to an expense on a pass-through is flagged as an owner draw, which is what it is.</p>
        </div>
      </section>

      {/* the package */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className={eyebrow}>The year-end package</p>
          <h2 className={h2}>One PDF for your CPA, instead of an email chain.</h2>
          <p className={lede}>The questions your CPA asks every January, already answered with your books&apos; numbers. The judgments stay with the CPA: depreciation elections, reasonable compensation, accounting method.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-ink">
            {PACKAGE.map(([h, t]) => (
              <div key={h} className="py-5 border-b border-rule">
                <h3 className="font-semibold text-ink text-[16px]">{h}</h3>
                <p className="text-sm text-muted leading-relaxed mt-1.5 max-w-[48ch]">{t}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted mt-4">Prefer to do it by hand? The <a href="/guides/year-end-cpa-package-checklist.html" className="text-ledger-600 font-semibold hover:text-ledger-700">year-end package checklist</a> is free.</p>
        </div>
      </section>

      {/* 1099s and Texas */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className={eyebrow}>1099s</p>
            <h2 className="font-display text-2xl sm:text-3xl leading-[1.05] tracking-[-0.03em] text-ink mb-3 text-balance">January’s 1099s, at the new $2,000 line.</h2>
            <p className="text-[15.5px] text-muted leading-relaxed">Every contractor’s year from the payments in the books, W-9s collected by link, each contractor’s copy, and a summary your filer enters in the IRS’s IRIS portal, with Poof’s checklist beside them.</p>
            <Link href="/features#1099s-and-vendors" className="inline-block text-[14px] text-ledger-600 font-semibold hover:text-ledger-700 mt-3">The 1099 features</Link>
          </div>
          <div>
            <p className={eyebrow}>Texas</p>
            <h2 className="font-display text-2xl sm:text-3xl leading-[1.05] tracking-[-0.03em] text-ink mb-3 text-balance">Franchise tax and property, worked out from the books.</h2>
            <p className="text-[15.5px] text-muted leading-relaxed">Last year’s revenue against the no-tax-due threshold and which report to file, and what you owned on January 1 against the $125,000 property exemption, with the list for the appraisal district.</p>
            <Link href="/blog/texas-franchise-tax-small-business" className="inline-block text-[14px] text-ledger-600 font-semibold hover:text-ledger-700 mt-3">Texas franchise tax, explained</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className={eyebrow}>Six questions</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-8 text-balance">What owners ask before January.</h2>
          <dl className="border-t border-ink">
            {faqs.map((f) => (
              <div key={f.question} className="py-5 border-b border-rule">
                <dt className="font-semibold text-ink">{f.question}</dt>
                <dd className="text-[15px] text-muted leading-relaxed mt-2 max-w-[68ch]">{f.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-muted mt-6">More in <Link href="/resources#tax-season" className="text-ledger-600 font-semibold hover:text-ledger-700">tax season resources</Link>: the 2027 deadlines, the 1099 threshold, estimates, and what to set aside.</p>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
