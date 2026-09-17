import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import AutopilotDemo from '@/components/AutopilotDemo'
import { getFaqPageSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'Autopilot with limits — AI that posts to your books, with a brake | Poof',
  description:
    'Let Poof post categorizations to your ledger on its own, inside limits you set: a confidence bar, a minimum history, a dollar ceiling, and a rule that pauses itself the first time you correct it. Off by default. Never sends anything to a customer.',
  alternates: { canonical: 'https://www.poofai.com/autopilot' },
  openGraph: {
    title: 'Autopilot with limits',
    description: 'AI that posts to your books on its own, inside limits you set, and stops itself when it is wrong.',
    url: 'https://www.poofai.com/autopilot',
    siteName: 'Poof',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'Is Autopilot on by default?',
    answer: 'No. Every new account asks about everything. Autopilot is a setting you turn on, with a confidence bar, a minimum merchant history, and a dollar ceiling you set. Standing rules are granted one at a time from work you already reviewed, never from a settings screen.',
  },
  {
    question: 'What does Autopilot need before it posts a transaction on its own?',
    answer: 'Four things, all checked by code, not by the model. The category must not be a new account the chart does not have yet. The amount must be under your ceiling. The merchant must have at least your minimum number of prior reviewed transactions, and every one of them must carry the same category. And the AI\'s self-reported confidence must clear your bar. If any one fails, the transaction waits on a card with the reason it was held.',
  },
  {
    question: 'Why does merchant history matter more than the AI\'s confidence?',
    answer: 'Because the confidence number comes from the model describing itself, and self-reported confidence is weakly calibrated. Merchant history is a deterministic database check: has this merchant been categorized this way, unanimously, enough times by a person. A merchant categorized three different ways is exactly the one a person should look at, even if a naive count would wave it through.',
  },
  {
    question: 'What happens when Autopilot gets one wrong?',
    answer: 'Correct it. Any correction to a transaction a rule is about pauses that rule, records which correction stopped it, and notifies you. The rule covers nothing until you resume or revoke it. Its earlier work stands, with the rule\'s name on each entry, so you can review what it touched.',
  },
  {
    question: 'Can Autopilot send an invoice or an email to a customer?',
    answer: 'No. No rule, however it was granted, can send anything to a customer. Invoices and credit notes are always a person\'s decision. A rule that writes to the ledger must carry a dollar limit, and anything over the limit goes to the inbox rather than being dropped.',
  },
  {
    question: 'How is this different from a QuickBooks bank rule?',
    answer: 'A QuickBooks rule matches text and posts, and it keeps posting until somebody notices it is wrong. A Poof rule is derived from work you reviewed, checks the merchant\'s history agrees, carries a dollar ceiling and a daily cap, and stops itself the first time you contradict it.',
  },
]

const gates: { k: string; t: string; reason: string; posts?: boolean }[] = [
  { k: 'Not a new account', t: 'If the AI suggests a category the chart of accounts does not have yet, the transaction waits. The chart may not cover it, and that is a person\'s call.', reason: 'AI suggested a new account — the chart may not cover this yet' },
  { k: 'Under your ceiling', t: 'You set a dollar limit. Anything over it goes to the inbox with the reason. Nothing is dropped.', reason: '$2,310.00 is over the $2,000.00 auto-post ceiling' },
  { k: 'The merchant agrees with itself', t: 'At least your minimum number of prior reviewed transactions for this merchant, and every one of them carrying the same category. Unanimity is the load-bearing check.', reason: 'this merchant has been categorized more than one way before (7 prior transactions)' },
  { k: 'Enough history', t: 'A merchant seen once is a merchant a person should see. The default is three prior transactions; you can raise it.', reason: 'only 1 prior transaction for this merchant, 3 required' },
  { k: 'Confidence clears your bar', t: 'The model reports a confidence. It is never enough on its own, because it is the model describing itself. It is the last check, not the first.', reason: 'confidence 82% is below the 90% bar' },
  { k: 'Or: it replays your own correction', t: 'If a person already corrected this exact merchant once, Poof replays that answer. That path is deterministic and trusted on its own.', reason: 'replays a prior human correction for this merchant', posts: true },
]

export default function AutopilotPage() {
  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqs)) }} />
      <Header />

      <section className="pt-32 pb-10">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Autopilot with limits</p>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[76px] leading-[1] tracking-[-0.035em] text-ink mb-5 text-balance">Let it post. Keep the brake.</h1>
          <p className="text-lg sm:text-xl text-muted max-w-[58ch] leading-[1.45]">
            Everyone is shipping AI that writes to your books on its own. Poof does too, with one difference that matters when it is wrong: <b className="text-ink font-semibold">it posts inside limits you set, and it stops itself the first time you correct it.</b>
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            <Link href="https://app.poofai.com/register" className="inline-block rounded-lg bg-ledger-500 text-white font-semibold text-[15px] px-[18px] py-[11px] hover:bg-ledger-600 transition-colors">Start free trial</Link>
            <a href="#demo" className="inline-block rounded-lg border-[1.5px] border-ink text-ink font-semibold text-[15px] px-[18px] py-[11px] hover:bg-paper-2 transition-colors">Watch a night of it</a>
          </div>
          <p className="text-sm text-muted mt-5 max-w-[60ch]">Off by default. Every new account asks about everything until its owner turns this on.</p>
        </div>
      </section>

      {/* the four gates, as the product enforces them */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Before it posts on its own</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance">Every gate is code. None of them is the model's opinion.</h2>
          <p className="text-[17px] text-muted max-w-[60ch] leading-relaxed mb-7">A transaction posts by itself only when all of these pass. If one fails, it waits on a card, and the card says which one, in the words the system actually uses.</p>
          <ol className="border-t border-ink">
            {gates.map((g, i) => (
              <li key={g.k} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-b border-rule">
                <span className="font-mono tabular text-sm text-muted pt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-semibold text-ink text-[17px]">{g.k}</h3>
                  <p className="text-[15px] text-muted leading-relaxed mt-1 max-w-[62ch]">{g.t}</p>
                  <p className={`mt-2 inline-block font-mono text-[12.5px] border px-2.5 py-1 ${g.posts ? 'bg-ledger-200 border-ledger-300 text-ledger-600' : 'bg-white border-rule text-ink'}`}>{g.posts ? 'posted' : 'held'}: {g.reason}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* the demo */}
      <section className="py-14 border-t border-rule" id="demo">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">One night, replayed</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance">Turn it on, set the limits, and watch a sweep run.</h2>
          <p className="text-[17px] text-muted max-w-[60ch] leading-relaxed mb-7">Move the ceiling and the history bar and see which rows post and which wait. Then correct one, and watch the rule stop.</p>
          <AutopilotDemo />
        </div>
      </section>

      {/* standing rules */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Standing rules</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-3 text-balance">Rules are derived, not authored.</h2>
          <p className="text-[17px] text-muted max-w-[60ch] leading-relaxed mb-7">Autopilot handles the categorization sweep. For anything beyond it, you grant a standing rule from a card you already read, and it carries its own limits.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-ink">
            {[
              ['Built from reviewed work', 'Poof derives the rule from the card in front of you: the merchant these rows share, the agreement in their history, a limit above the largest one. It shows the rule in plain sentences and how much of the card it covers before you grant it.'],
              ['A ceiling, always', 'A rule that writes to the ledger must carry a dollar limit. One without a limit does not run. Anything over goes to the inbox.'],
              ['A daily cap', 'A rule has a daily count. The overflow waits for the next day or for you; it is never dropped.'],
              ['It stops itself', 'Correct anything the rule is about, not only a row it touched, and it pauses, names the correction that stopped it, and waits. Revoking is instant; its earlier work stands with its name on it.'],
              ['Never a customer', 'No rule can send an invoice, a credit note, or a message to a customer. That is always a person\'s decision.'],
              ['Tied to a person', 'A rule stops working if the person who granted it loses the permission it needs. Every rule lives on one page with what it has handled and who allowed it.'],
            ].map(([h, t]) => (
              <div key={h} className="py-5 border-b border-rule">
                <h3 className="font-semibold text-ink text-[16px]">{h}</h3>
                <p className="text-sm text-muted leading-relaxed mt-1.5 max-w-[48ch]">{t}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted mt-6">See the rule pause itself on the <Link href="/#act2" className="text-ledger-600 font-semibold hover:text-ledger-700">homepage demo</Link>, or read <Link href="/blog/quickbooks-bank-rules-auto-post" className="text-ledger-600 font-semibold hover:text-ledger-700">what a QuickBooks bank rule costs you</Link>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 border-t border-rule">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-muted mb-3">Six questions</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.035em] text-ink mb-8 text-balance">What people ask before they turn it on.</h2>
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
