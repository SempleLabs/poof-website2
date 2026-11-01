import Header from '@/components/Header'
import HomeShow from '@/components/HomeShow'
import HomeFaqShort from '@/components/HomeFaqShort'
import BackOfficeSection from '@/components/BackOfficeSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getSoftwareApplicationSchema } from '@/lib/jsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSoftwareApplicationSchema()) }}
      />
      <Header />

      <div className="pt-16" />

      <HomeShow />

      {/* Three ways to get the books done (owners first, 2026-11-01) */}
      <section className="max-w-[1020px] mx-auto px-4 sm:px-6 pt-16 pb-6 border-t border-rule" id="three-ways">
        <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Three ways to get the books done</p>
        <h2 className="font-display text-3xl sm:text-4xl leading-[1] tracking-[-0.035em] text-ink mb-6 text-balance">Do them free, let Poof Agent do them, or hand them to a person.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-rule p-5 flex flex-col">
            <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">Free · for good</p>
            <p className="font-mono text-3xl text-ink mt-2 mb-3 tabular">$0</p>
            <p className="text-[15px] text-muted flex-grow">You do the books; Poof keeps them. The ledger, invoices, bills, every report, the close and 1099 prep, with your rules sorting what they cover. Each month, 25 Ask Poof questions and 25 receipt reads.</p>
            <Link href="https://app.poofai.com/register" className="mt-4 inline-block text-center rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Start free</Link>
          </div>
          <div className="bg-white border border-ledger-600 border-l-4 p-5 flex flex-col">
            <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-ledger-600">Poof Agent · 30 days free</p>
            <p className="font-mono text-3xl text-ink mt-2 mb-3 tabular">$79<span className="text-base text-muted">/mo</span></p>
            <p className="text-[15px] text-muted flex-grow">The AI does the work: the bank sorted overnight, every receipt read, the reminders and the month&apos;s write-up drafted, Ask Poof with no limit. Every entry waits on a card for your OK.</p>
            <Link href="https://app.poofai.com/register" className="mt-4 inline-block text-center rounded-lg bg-ledger-500 text-white font-semibold text-[15px] px-[18px] py-[11px] hover:bg-ledger-600 transition-colors">Start free</Link>
          </div>
          <div className="bg-white border border-rule p-5 flex flex-col">
            <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">A person · quoted</p>
            <p className="font-display text-[26px] leading-[1.05] tracking-[-0.03em] text-ink mt-2 mb-3">Want a person to do your books?</p>
            <p className="text-[15px] text-muted flex-grow">A bookkeeper who works in Poof. Tell us how far behind you are and what you need; we usually get back to you within a business day with a quote for the job.</p>
            <Link href="/bookkeeper" className="mt-4 inline-block text-center rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Ask for a bookkeeper</Link>
          </div>
        </div>
      </section>

      {/* What Poof is, in plain words, for people and for answer engines */}
      <section className="max-w-[780px] mx-auto px-4 sm:px-6 pt-16 pb-6" id="what-is-poof">
        <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">What Poof is</p>
        <h2 className="font-display text-3xl sm:text-4xl leading-[1] tracking-[-0.035em] text-ink mb-4 text-balance">The back office, run by AI. Signed by you.</h2>
        <p className="text-lg text-muted max-w-[62ch] leading-[1.45]">
          Poof is free software that runs the back office for a small business. It keeps the books, sends the invoices, plans the cash, files the 1099s and closes the month, and for service shops it carries the job from the phone call to the truck and back. Every write an AI proposes waits on a card with the evidence it found, and nothing lands until a person has seen it. Poof Agent, the AI that does the work while you sleep, is $79 a month. When you would rather not do the books at all, a bookkeeper who works in Poof does them, and every job is quoted.
        </p>
        <p className="text-lg text-muted max-w-[62ch] leading-[1.45] mt-3">
          Run a service shop? <Link href="/trades" className="text-ledger-600 font-semibold hover:text-ledger-700">Poof for shops</Link> adds the dispatch board and the technician&apos;s field link to the same account, free, and the AI receptionist as an add-on at $99 a month.
        </p>
        <div className="flex flex-wrap gap-2.5 mt-6">
          <Link href="/features" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">All 270 features</Link>
          <Link href="/pricing" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Pricing</Link>
          <Link href="/1099s" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">File your 1099s</Link>
          <Link href="/poof-vs-quickbooks" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Poof vs QuickBooks</Link>
          <Link href="/how-it-works" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">How it works</Link>
        </div>
      </section>

      <BackOfficeSection />

      {/* January's front door: Poof files the 1099s */}
      <section className="max-w-[820px] mx-auto px-4 sm:px-6 pt-16 pb-6 border-t border-rule" id="file-1099s">
        <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">1099s · due February 1, 2027</p>
        <h2 className="font-display text-3xl sm:text-4xl leading-[1] tracking-[-0.035em] text-ink mb-4 text-balance">Tell Poof who you paid. Poof files the 1099s.</h2>
        <p className="text-lg text-muted max-w-[62ch] leading-[1.45]">
          Type your contractors in, upload a spreadsheet, or connect the bank and tick the ones Poof finds. Poof collects their W-9s, files with the IRS after you approve, and emails or mails every contractor their copy. Your first 3 forms each year are free; after that it&apos;s $2.49 a form, and $1.79 for each copy Poof mails.
        </p>
        <p className="mt-5"><Link href="/1099s" className="text-ledger-600 font-semibold hover:text-ledger-700">File your 1099s with Poof →</Link></p>
      </section>

      <HomeFaqShort />
      <CtaSection />
      <Footer />
    </main>
  )
}
