import Header from '@/components/Header'
import HomeShow from '@/components/HomeShow'
import HomeFaqShort from '@/components/HomeFaqShort'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getSoftwareApplicationSchema, getServiceSchema } from '@/lib/jsonLd'
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceSchema({
              name: 'Poof for shops',
              description:
                'Bookkeeping for HVAC, plumbing, and electrical contractors doing $750K–$3M. Per-job profit on every monthly close, AI-powered and reviewed by a former controller. From $1,200/mo.',
              price: '1200',
              url: 'https://www.poofai.com/trades',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSoftwareApplicationSchema()) }}
      />
      <Header />

      {/* Our own books: the close record is public */}
      <div className="pt-16">
        <div className="bg-ink text-paper text-[13.5px] px-5 py-2 text-center">
          <b className="font-semibold">Your books closed within five business days of month end, or the next month is free.</b>{' '}
          <a href="#guarantee" className="text-ledger-400 underline underline-offset-2">The fine print</a>
        </div>
      </div>

      <HomeShow />

      {/* What Poof is, in plain words, for people and for answer engines */}
      <section className="max-w-[780px] mx-auto px-4 sm:px-6 pt-16 pb-6 border-t border-rule" id="what-is-poof">
        <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">What Poof is</p>
        <h2 className="font-display text-3xl sm:text-4xl leading-[1] tracking-[-0.035em] text-ink mb-4 text-balance">Bookkeeping that does itself, and shows its work before it lands.</h2>
        <p className="text-lg text-muted max-w-[62ch] leading-[1.45]">
          Poof is AI bookkeeping software built for the person who signs the close. It categorizes, reconciles, job-costs, and closes the books, and puts every write in front of a person before it reaches the ledger. Bookkeepers, controllers, and firms run their clients on it; a shop owner can run their own. One plan, every feature, $79 a month.
        </p>
        <p className="text-lg text-muted max-w-[62ch] leading-[1.45] mt-3">
          Run an HVAC, plumbing, or electrical shop and would rather not run the software? <Link href="/trades" className="text-ledger-600 font-semibold hover:text-ledger-700">Bookkeeping</Link> puts a former controller on your close every month.
        </p>
        <div className="flex flex-wrap gap-2.5 mt-6">
          <Link href="/features" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">All 128 features</Link>
          <Link href="/pricing" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Pricing</Link>
          <Link href="/poof-vs-quickbooks" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Poof vs QuickBooks</Link>
          <Link href="/how-it-works" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">How it works</Link>
        </div>
      </section>

      {/* The guarantee, stated as a commitment with its conditions */}
      <section className="max-w-[820px] mx-auto px-4 sm:px-6 pt-16 pb-6 border-t border-rule" id="guarantee">
        <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">The five-day close guarantee</p>
        <h2 className="font-display text-3xl sm:text-4xl leading-[1] tracking-[-0.035em] text-ink mb-4 text-balance">Closed within five business days of month end, or the next month is free.</h2>
        <p className="text-lg text-muted max-w-[62ch] leading-[1.45]">
          The close is a checklist with due dates, and the books tick most of it off themselves. If yours is not ready to sign by the fifth business day, you do not pay for the month after it.
        </p>
        <div className="mt-6 border-l-[3px] border-ledger-600 pl-4 text-[15px] text-muted max-w-[64ch] space-y-2">
          <p><b className="text-ink font-semibold">It starts with your first full month.</b> The guarantee covers the first close after a complete calendar month with your bank and card feeds connected, and every month after that. The partial month you joined in is not covered.</p>
          <p><b className="text-ink font-semibold">Cleanup is a separate job.</b> Historical books that need rebuilding, migrations from another system, and untangling prior months are scoped with you first and have their own timeline. The guarantee applies once the current month is on Poof.</p>
          <p><b className="text-ink font-semibold">Ready to sign means ready.</b> Feeds reviewed, the bank reconciled to one figure, and every card in Approvals decided by you or a rule you granted. Cards you leave waiting past day five pause the clock, because a close cannot sign around a decision nobody made.</p>
          <p><b className="text-ink font-semibold">The remedy is the next month free,</b> applied to your subscription, not a refund. If a late close is our fault two months running, you can cancel with the second month refunded.</p>
        </div>
      </section>

      <HomeFaqShort />
      <CtaSection />
      <Footer />
    </main>
  )
}
