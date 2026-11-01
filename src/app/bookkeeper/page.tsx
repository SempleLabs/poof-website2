import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import { getFaqPageSchema, getBreadcrumbSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'Want a person to do your books? A bookkeeper who works in Poof | Poof',
  description:
    'Behind on your books, or done doing them yourself? Ask for a bookkeeper who works in Poof. Say how far behind you are; a person usually gets back to you within a business day with a quote. Every job is quoted, and Poof stays free.',
  alternates: { canonical: 'https://www.poofai.com/bookkeeper' },
  openGraph: {
    title: 'Want a person to do your books?',
    description: 'A bookkeeper who works in Poof. Tell us how far behind you are; we quote the job.',
    url: 'https://www.poofai.com/bookkeeper',
    siteName: 'Poof',
    type: 'website',
  },
}

// The sign-up link carries the reason for coming, so the new account opens on the request.
const ASK = 'https://app.poofai.com/register?for=bookkeeper'

const STEPS: [string, string][] = [
  ['Tell us where things stand', 'How far behind the books are (up to date, a few months, a year or more), roughly how many transactions you have a month, whether you run payroll, and where the books are kept today. It takes a minute.'],
  ['A person gets back to you', 'Within a business day, by email, or by phone if you leave a number. They ask what they need to and send a quote for the job.'],
  ['The work happens in your Poof company', 'Your bank feeds, your books, your approvals. Everything they do is on the record with who did it and when, and you can remove their access whenever you like.'],
]

const ASKS: [string, string][] = [
  ['Catch up', 'Months, or a year, of books that never got done, brought up to today.'],
  ['Keep them every month', 'The bank sorted, the bills and invoices matched, the month closed and signed.'],
  ['Payroll on the books', 'Pay runs posted from your provider’s reports, with the tax forms tied to them.'],
  ['Ready for your CPA', 'The year mapped to your return’s lines, the 1099s filed, and one package for your CPA.'],
]

const faqs = [
  { question: 'How much does it cost?', answer: 'Every job is quoted, because jobs differ: a year of catch-up is not the same work as keeping a tidy month, and 40 transactions a month is not 2,000. Tell us where things stand and the quote usually comes within a business day. Nothing starts until you have agreed to it, and Poof itself stays free.' },
  { question: 'Who is the bookkeeper?', answer: 'A bookkeeper who works in Poof. They introduce themselves when they get back to you, and they work in your Poof company with the access you give them, like anyone else you invite.' },
  { question: 'Do I have to use Poof?', answer: 'Yes. The work happens in your Poof company, which is free, and that is what lets you see everything they do: every entry, every reconciliation, every close, with who did it and when.' },
  { question: 'I already have a bookkeeper. Can they use Poof?', answer: 'Yes. Invite them into Poof with their own role. Bookkeepers who keep books for several clients have their own page, and their clients are theirs: Poof never offers a firm’s client this request.' },
]

export default function BookkeeperPage() {
  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.poofai.com' },
              { name: 'A person to do your books', url: 'https://www.poofai.com/bookkeeper' },
            ])
          ),
        }}
      />
      <Header />

      <section className="pt-32 pb-10">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">A person to do your books</p>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[76px] leading-[1] tracking-[-0.035em] text-ink mb-5 text-balance">Want a person to do your books?</h1>
          <p className="text-lg sm:text-xl text-muted max-w-[58ch] leading-[1.45]">
            A bookkeeper who works in Poof. Tell us how far behind you are, roughly how many transactions you have a month, and whether you run payroll. <b className="text-ink font-semibold">A person usually gets back to you within a business day</b> with a quote for the job.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            <Link href={ASK} className="inline-block rounded-lg bg-ledger-500 text-white font-semibold text-[15px] px-[18px] py-[11px] hover:bg-ledger-600 transition-colors">Ask for a bookkeeper</Link>
            <Link href="/demo" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Talk first</Link>
          </div>
          <p className="text-sm text-muted mt-4 max-w-[60ch]">You make a free Poof account first, and the request is the first thing it asks. No card.</p>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">How it works</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-6 text-balance">A minute to ask. A business day to hear back.</h2>
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
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">What you can ask for</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance">Say what you need. The quote says what&apos;s in it.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-ink mt-6">
            {ASKS.map(([h, t]) => (
              <div key={h} className="py-5 border-b border-rule">
                <h3 className="font-semibold text-ink text-[16px]">{h}</h3>
                <p className="text-sm text-muted leading-relaxed mt-1.5 max-w-[48ch]">{t}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-muted mt-6 max-w-[62ch]">
            There is no price list on this page because no two jobs are alike. Doing them yourself instead? Poof is free, and <Link href="/pricing" className="text-ledger-600 font-semibold hover:text-ledger-700">Poof Agent</Link> does most of the work for $79 a month.
          </p>
        </div>
      </section>

      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Four questions</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-8 text-balance">What owners ask first.</h2>
          <dl className="border-t border-ink">
            {faqs.map((f) => (
              <div key={f.question} className="py-5 border-b border-rule">
                <dt className="font-semibold text-ink">{f.question}</dt>
                <dd className="text-[15px] text-muted leading-relaxed mt-2 max-w-[68ch]">{f.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-muted mt-4">Keep books for clients yourself? <Link href="/close" className="text-ledger-600 font-semibold hover:text-ledger-700">Poof for bookkeepers</Link>.</p>
        </div>
      </section>

      <CtaSection person={false} />
      <Footer />
    </main>
  )
}
