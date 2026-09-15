import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CtaSection from '@/components/CtaSection'
import { getFaqPageSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'How It Works — Connect, propose, approve, sign | Poof',
  description:
    'How Poof does the books: you connect the feeds, the AI proposes every entry on a card with its evidence, you approve or reject, and the month closes as a signed record. The plain-words version of the homepage.',
  keywords: 'how AI bookkeeping works, approvals inbox, month-end close, bank reconciliation, AI categorization, Poof setup',
  alternates: {
    canonical: 'https://www.poofai.com/how-it-works',
  },
  openGraph: {
    title: 'How Poof Works — Connect, propose, approve, sign',
    description:
      'The AI proposes every entry with its evidence. A person approves it. The month closes as a record. Nothing reaches the books unseen.',
    url: 'https://www.poofai.com/how-it-works',
    siteName: 'Poof',
    type: 'website',
  },
}

const steps = [
  {
    n: '01',
    title: 'Connect the feeds',
    when: 'Five minutes, once',
    body: 'Link your bank and card accounts through Plaid, or import statements as CSV or PDF for anything older than the 30-day sync window. Forward receipts and bills to your Poof address, or snap them on a phone. Bring your Jobber or Housecall Pro export if you run a shop.',
    detail: 'Bank access is read-only. Poof can see transactions; it cannot move money.',
  },
  {
    n: '02',
    title: 'The AI proposes',
    when: 'Every night, and whenever you ask',
    body: 'Poof categorizes the new transactions, matches invoices to deposits and bills to payments, spots recurring charges, and drafts the entries. Each proposal lands as a card in the Approvals inbox with the evidence it found: the prior transactions for that merchant, the customer it resolved, the amount, the account.',
    detail: 'A card that says "no history for this merchant" is telling you why it is asking instead of guessing. The evidence is gathered by code, never judged by the model.',
  },
  {
    n: '03',
    title: 'You approve',
    when: 'A few minutes a day',
    body: 'Approve a card, approve part of a batch, or reject it with a reason that gets recorded. When you have approved the same kind of work a few times, grant a standing rule from the card in front of you. Poof writes the rule in plain sentences, tells you how much of the card it covers, and stops the rule itself the first time you contradict it.',
    detail: 'Nothing reaches your books without a person seeing it first. A rule can never send anything to a customer, and a rule that writes to the ledger must carry a dollar limit.',
  },
  {
    n: '04',
    title: 'The month closes as a record',
    when: 'Business days one to seven',
    body: 'The close is a checklist with due dates. Twelve of the seventeen tasks tick themselves when the books prove them: feeds reviewed, bank reconciled to one figure, deposits released on completed jobs, job costs tied to payroll. The rest are a person’s tick, recorded with who and when. Locking the period is the signature, and the package goes out after it.',
    detail: 'The reconciliation carries last month’s outstanding items forward and shows one unexplained difference. It ties or it doesn’t.',
  },
]

const afterward = [
  { title: '13 reports, on request or on a schedule', body: 'P&L, balance sheet, cash flow, trial balance, aging, and the rest, with drill-down to the entries behind any number and email delivery on the cadence you choose.' },
  { title: 'Per-job profitability', body: 'Tag work to jobs, or let a completed service call become a job on its own. Labor lands on the job it was spent on; dealer financing fees are costed to the install they financed.' },
  { title: 'Invoices, estimates, and payments', body: 'Send invoices and estimates, convert an estimate in one click, follow up automatically, and take card or ACH through Stripe. Payments reconcile to the ledger by themselves.' },
  { title: 'Budgets and the cash plan', body: 'Describe a goal and get a budget. See twelve months of cash with confidence bands, and a forward view of the bills coming due against the cash to cover them.' },
  { title: 'Ask Poof', body: 'Ask where things stand: is August ready to close, what do we owe Ferguson, which bills are due this week. Ask it to invoice someone and the same approval card appears in the chat.' },
  { title: 'The books, as evidence', body: 'Double-entry with reversing entries, an immutable trial-balance snapshot at each close, SOC 2 audit logging, five roles and 26 permissions. Built to survive an audit, not just a tax return.' },
]

const howItWorksFaqs = [
  {
    question: 'How long does it take to set up?',
    answer: 'Connecting accounts takes about five minutes. The first night’s sweep proposes categories for everything it can see, and your first session in the Approvals inbox is where Poof learns how you file things. Most people are approving in batches within a week.',
  },
  {
    question: 'What if the AI categorizes something wrong?',
    answer: 'It never posts on its own. A wrong proposal is a card you reject with a reason, and that reason is recorded. If a standing rule made the mistake, correcting any transaction the rule is about pauses the rule, tells you which correction stopped it, and waits for you to resume or revoke it.',
  },
  {
    question: 'Does anything get written to my books without me?',
    answer: 'Only what a rule you granted covers, within the dollar limit you set, and only work of the same kind you already approved. Everything else waits on a card. There is no global switch that lets the AI do whatever it wants, and autonomy is off for every new account until its owner grants a rule.',
  },
  {
    question: 'Can I import my existing bookkeeping data?',
    answer: 'Yes. Poof imports from QuickBooks, Xero, and CSV files: the chart of accounts, transactions, customers and vendors, and invoices. Upload CSV or PDF bank statements for anything older than the 30-day Plaid sync window.',
  },
  {
    question: 'How does the reconciliation work?',
    answer: 'Statement ending balance, less the books at period end, less what is still outstanding. Checks written last month that clear this month carry forward automatically. The screen reads one figure from the server, completion stores the same figure, and the close checks that figure. Auto-reconciliation signs a period only when the difference is under a penny; anything else becomes cards.',
  },
  {
    question: 'What types of receipts can I process?',
    answer: 'Photos of paper receipts, PDFs, and forwarded email receipts in JPG, PNG, HEIC, or PDF. Poof reads the vendor, amount, date, and likely category, checks for duplicates, and attaches the file to the record it creates.',
  },
]

export default function HowItWorksPage() {
  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(howItWorksFaqs)) }}
      />
      <Header />

      <PageHero
        title={<>Connect. Propose. Approve. <span className="text-ledger-600">Sign.</span></>}
        subtitle="The plain-words version of the homepage. Four steps, and the AI never takes the third one."
      >
        <p className="text-sm text-muted mt-6">
          Prefer to press the buttons? <Link href="/" className="text-ledger-600 font-semibold hover:text-ledger-700">The homepage is a working demo</Link>.
        </p>
      </PageHero>

      {/* The four steps */}
      <section className="pb-16">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <ol className="border-t border-ink">
            {steps.map((s) => (
              <li key={s.n} className="grid grid-cols-[48px_1fr] sm:grid-cols-[72px_1fr] gap-4 sm:gap-6 py-9 border-b border-rule">
                <span className="font-mono tabular text-sm text-muted pt-2">{s.n}</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h2 className="font-display text-2xl sm:text-[30px] leading-[1.05] tracking-[-0.03em] text-ink">{s.title}</h2>
                    <span className="font-mono text-xs tracking-[0.06em] uppercase text-muted">{s.when}</span>
                  </div>
                  <p className="text-[17px] text-muted leading-relaxed mt-3 max-w-[64ch]">{s.body}</p>
                  <p className="text-sm text-ink mt-3 max-w-[64ch] border-l-[3px] border-ledger-600 pl-3">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What you get after the fourth step */}
      <section className="py-16 border-t border-rule">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">After the signature</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-8 max-w-[24ch] text-balance">Everything downstream reads from books a person signed.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 border-t border-ink">
            {afterward.map((a) => (
              <div key={a.title} className="py-5 border-b border-rule">
                <h3 className="font-semibold text-ink text-[16px]">{a.title}</h3>
                <p className="text-sm text-muted leading-relaxed mt-1.5">{a.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted mt-6">
            All 128 features, searchable, on the <Link href="/features" className="text-ledger-600 font-semibold hover:text-ledger-700">features page</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Six questions</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-8 text-balance">What people ask before they connect a bank.</h2>
          <dl className="border-t border-ink">
            {howItWorksFaqs.map((f) => (
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
