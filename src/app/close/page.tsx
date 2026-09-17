import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import { getFaqPageSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'The close — a checklist the books tick off themselves | Poof',
  description:
    'Month-end close as a record: 17 tasks with due dates, 13 of them proven by the books and ticked automatically, a reconciliation that ties to one figure, and a signature that locks the period. Closed within five business days or the next month is free.',
  alternates: { canonical: 'https://www.poofai.com/close' },
  openGraph: {
    title: 'The close, as a record',
    description: 'A checklist the books tick off themselves, a reconciliation that ties to one figure, and a signature. Five business days, guaranteed.',
    url: 'https://www.poofai.com/close',
    siteName: 'Poof',
    type: 'website',
  },
}

// The trades default template, as the product defines it (close-tasks.math.ts).
const TASKS: { day: number; name: string; what: string; kind: 'evidence' | 'person' }[] = [
  { day: 2, name: 'Bank feeds reviewed', what: 'Every bank transaction dated in the month is categorized and reviewed.', kind: 'evidence' },
  { day: 3, name: 'Bank accounts reconciled', what: 'Each active bank account has a completed reconciliation through month end.', kind: 'evidence' },
  { day: 3, name: 'Draft entries posted', what: 'No journal entry dated in the month is still a draft.', kind: 'evidence' },
  { day: 3, name: 'Staged materials relieved on completed jobs', what: 'Materials staged to a job that finished in the month have been relieved to it.', kind: 'evidence' },
  { day: 3, name: 'Customer deposits released on completed jobs', what: 'Deposits held for jobs that finished by month end have been released to revenue.', kind: 'evidence' },
  { day: 4, name: 'Accruals rolled forward', what: 'Every accrual schedule ties to its ledger balance at month end.', kind: 'evidence' },
  { day: 4, name: 'A/R ties to open invoices', what: 'The receivables control account equals the open invoice balance.', kind: 'evidence' },
  { day: 4, name: 'A/P ties to open bills', what: 'The payables control account equals the open bill balance.', kind: 'evidence' },
  { day: 4, name: 'Plan visits not double-counted', what: 'No maintenance-plan visit was also invoiced.', kind: 'evidence' },
  { day: 4, name: 'Job costs tagged to a job', what: 'Cost of goods sold in the month carries a job tag, so per-job margins are real.', kind: 'evidence' },
  { day: 4, name: 'Every category maps to an account', what: 'No activity in the month sits in a category that reaches no ledger account.', kind: 'evidence' },
  { day: 4, name: 'Completed jobs invoiced', what: 'Every job finished in the month has an invoice, or a plan visit that earned it.', kind: 'evidence' },
  { day: 5, name: 'Vendor bills through month end entered', what: 'Supplier invoices dated in the month have arrived and are in.', kind: 'person' },
  { day: 5, name: 'Tie-out checks run clean', what: 'The full check suite has run for the month with no blocking failure.', kind: 'evidence' },
  { day: 6, name: 'Close narrative reviewed', what: 'The month-end narrative has been read and its action items noted.', kind: 'person' },
  { day: 7, name: 'Period locked and signed', what: 'The period is locked; the close is signed.', kind: 'evidence' },
  { day: 8, name: 'Close package sent to the owner', what: 'The signed package has gone to the person who pays for it.', kind: 'person' },
]

const faqs = [
  { question: 'What does "the close is a record" mean?', answer: 'Each month\'s close is one object in Poof: who started it and when, where it stands, and what it took. The status is derived from the books, never typed. When you lock the period, the close captures its own activity: transactions reviewed, entries posted, decisions made by a person and by a rule, corrections, and hours from start to signature. Reopening keeps the signature on record.' },
  { question: 'Which tasks tick themselves?', answer: 'Thirteen of the seventeen in the default template are evidence-bound. They complete when the books prove them and cannot be ticked by hand: feeds reviewed, bank reconciled, drafts posted, deposits released, accruals tied, A/R and A/P tied, job costs tagged, and so on. Each open one says why in a sentence and links to the screen that fixes it. The other four are a person\'s tick, recorded with who and when.' },
  { question: 'How does the reconciliation work?', answer: 'Statement ending balance, less the books at period end, plus what is booked but not on the statement, less what is on the statement but not booked. One figure. The screen reads it from the server, completion stores the same number, and the close\'s bank-reconciliation check reads that. Outstanding items carry forward: a check written in July that clears in August is on August\'s book side, and a first reconciliation lists what was still open from before it.' },
  { question: 'What is the five-day guarantee?', answer: 'Your books closed within five business days of month end, or the next month is free. It starts with your first close after a complete calendar month with your feeds connected. Historical cleanup and migrations are scoped separately. A close is ready when feeds are reviewed, the bank reconciles to one figure, and every card in Approvals is decided; cards left waiting past day five pause the clock.' },
  { question: 'Can I change the checklist?', answer: 'Yes. A person can rename tasks, re-date them, deactivate ones that do not apply, and add manual rows. Evidence-bound tasks keep their evidence. Every close stamps its own copy of the template, so a later edit never rewrites history.' },
  { question: 'What happens when a task is late?', answer: 'A task past its due date on an open close is an insight, a card in Approvals with a one-tap "mark done" for a manual task, and one message per close per day on the channels you subscribe to: Telegram, SMS, Slack, or email. The sweep re-reads the books before it decides what is late, so it never nags about a bank account you reconciled that afternoon.' },
]

export default function ClosePage() {
  const auto = TASKS.filter((t) => t.kind === 'evidence').length
  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqs)) }} />
      <Header />

      <section className="pt-32 pb-10">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">The close</p>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[76px] leading-[1] tracking-[-0.035em] text-ink mb-5 text-balance">A checklist the books tick off themselves.</h1>
          <p className="text-lg sm:text-xl text-muted max-w-[58ch] leading-[1.45]">
            Seventeen tasks with due dates. <b className="text-ink font-semibold">{auto} of them complete when the books prove them</b> and cannot be ticked by hand. The rest are a person&apos;s tick, recorded with who and when. Locking the period is the signature.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            <Link href="https://app.poofai.com/register" className="inline-block rounded-lg bg-ledger-500 text-white font-semibold text-[15px] px-[18px] py-[11px] hover:bg-ledger-600 transition-colors">Start free trial</Link>
            <Link href="/#act3" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Try the reconciliation</Link>
          </div>
          <p className="text-sm text-ink mt-5 max-w-[60ch] border-l-[3px] border-ledger-600 pl-3">Closed within five business days of month end, or the next month is free. <a href="/#guarantee" className="text-ledger-600 font-semibold">The fine print</a></p>
        </div>
      </section>

      {/* the template */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">The default template · business days after month end</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance">Day two to day eight, and the books do most of it.</h2>
          <p className="text-[17px] text-muted max-w-[60ch] leading-relaxed mb-7">This is the trades default, as the product defines it. Rename tasks, re-date them, or add your own; every close keeps its own copy, so edits never rewrite history.</p>
          <ol className="border-t border-ink">
            {TASKS.map((t) => (
              <li key={t.name} className="grid grid-cols-[56px_24px_1fr] gap-3 py-3.5 border-b border-rule items-start">
                <span className="font-mono tabular text-xs text-muted pt-1">day {t.day}</span>
                <span className={`w-[17px] h-[17px] mt-0.5 rounded-[3px] border-[1.5px] ${t.kind === 'evidence' ? 'border-ledger-600 bg-ledger-200' : 'border-muted'}`} aria-hidden="true" />
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-semibold text-ink text-[15.5px]">{t.name}</span>
                    <span className="font-mono text-[10.5px] tracking-[0.06em] uppercase text-muted">{t.kind === 'evidence' ? 'ticks itself' : "a person's tick"}</span>
                  </div>
                  <p className="text-sm text-muted mt-0.5 max-w-[64ch]">{t.what}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-muted mt-4">An open evidence task says why in a sentence: &ldquo;2 completed jobs still hold $1,500 of customer deposits,&rdquo; and links to the screen that fixes it.</p>
        </div>
      </section>

      {/* one figure */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">The reconciliation</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance">One figure. It ties or it doesn&apos;t.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-ink mt-6">
            {[
              ['Statement, less books, less outstanding', 'Statement ending balance, less the books at period end, plus what is booked but not on the statement, less what is on the statement but not booked. That is the whole formula, and there is no second one.'],
              ['Read once, stored once, checked once', 'The screen reads the figure from the server. Completion stores the same number. The close\'s bank check reads that. A row you add during the reconciliation counts even though auto-match never saw it.'],
              ['Outstanding items carry forward', 'A check written in July that clears in August is on August\'s book side. A first reconciliation lists what was still open from before it, never the opening balance, which both sides already agree on.'],
              ['Cleared stays cleared', 'Fixing a memo or a date on an entry later does not un-clear it. A reconciliation a later one rests on cannot be reopened first.'],
              ['Auto-reconciliation, with a limit', 'Opt in, weekly or monthly. It signs a period only when the difference is under a penny; anything else becomes cards in Approvals, one per uncertain match. It takes the period after the last one completed, so a missed month is caught up.'],
              ['Proven on real books', 'Walked end to end on the founder\'s own August close from a phone, and covered by a July → August → September carry-forward test.'],
            ].map(([h, t]) => (
              <div key={h} className="py-5 border-b border-rule">
                <h3 className="font-semibold text-ink text-[16px]">{h}</h3>
                <p className="text-sm text-muted leading-relaxed mt-1.5 max-w-[48ch]">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* the record */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">The record</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance">Signing captures what the month took.</h2>
          <p className="text-[17px] text-muted max-w-[60ch] leading-relaxed mb-6">At the moment you lock the period, the close records its own activity, so a practice can say &ldquo;August: signed Sep 5, 60 hours&rdquo; instead of guessing.</p>
          <div className="bg-white border border-ink border-l-4 border-l-audit [border-left-style:double] px-5 py-[18px] max-w-[520px]">
            <h3 className="font-display text-2xl tracking-[-0.035em] mb-2.5">August 2026 · signed</h3>
            <dl className="grid grid-cols-[auto_1fr] gap-x-[18px] gap-y-1.5 text-[14.5px]">
              {[['Started', 'Sep 1 by the owner'], ['Signed', 'Sep 5 by the controller'], ['Took', '60 hours, start to signature'], ['Reviewed', '128 transactions'], ['Decisions', '41 by a person · 12 by rules they granted'], ['Corrections', '3'], ['Tasks', '17 · 13 ticked themselves · 4 by a person']].map(([k, v]) => (
                <div key={k} className="contents"><dt className="font-mono text-xs tracking-[0.06em] uppercase text-muted pt-0.5">{k}</dt><dd className="font-mono tabular">{v}</dd></div>
              ))}
            </dl>
            <p className="text-xs text-muted mt-3">A demo record. Reopening keeps the signature on file.</p>
          </div>
          <p className="text-sm text-muted mt-6">Every AI entry on the way to this record waited on a card. See how on <Link href="/autopilot" className="text-ledger-600 font-semibold hover:text-ledger-700">Autopilot with limits</Link>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Six questions</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-8 text-balance">What a controller asks first.</h2>
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
