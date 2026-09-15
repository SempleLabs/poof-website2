import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'

const evidence = [
  { label: 'Merchant', value: 'Ferguson Plumbing Supply' },
  { label: 'Amount', value: '$1,284.19' },
  { label: 'Proposed account', value: 'Job materials · COGS' },
  { label: 'What Poof looked up', value: '5 prior Ferguson charges — all categorized to Job materials' },
]

const behaviours = [
  {
    title: 'Approve part of a batch',
    body: 'A forty-row card is not all-or-nothing. Untick the three you want to look at and approve the rest in one tap. The ones you approved run; the ones you unticked are still waiting tomorrow.',
  },
  {
    title: 'Reject with a reason',
    body: 'And the reason is kept, not thrown away. It is the signal that stops a rule from covering that kind of work again, and the record of why it stopped.',
  },
  {
    title: 'Rules come from work you already read',
    body: 'Not a form you fill in from scratch and guess at. Poof derives the rule from the card in front of you — the merchant those rows share, the agreement in their history, a limit above the largest one — and shows your own 30-day record with that kind of change before you commit.',
  },
]

export default function ApprovalsSection() {
  return (
    <section id="approvals" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-ledger-100 border border-ledger-300 text-ledger-700 font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Included in every plan
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Nothing reaches your books{' '}
              <span className="text-ledger-600">without you seeing it first.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every write an AI proposes — the nightly categorization sweep, a request you typed into chat, a
              detector that noticed a job losing money — stages as a card and waits. Approving runs exactly what
              is on the card: the stored request, never a fresh interpretation of it.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <AnimateOnScroll animation="fade-up">
            <GlowCard className="bg-white border border-slate-200 rounded-xl p-6 h-full flex flex-col">
              <h3 className="font-semibold text-lg text-slate-900 mb-1">The evidence, not the assertion</h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                A card does not tell you what it decided. It shows you what it looked up.
              </p>
              <div className="rounded-lg border border-slate-200 overflow-hidden text-sm mb-5">
                {evidence.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-start justify-between gap-4 px-4 py-2.5 border-b border-slate-100 last:border-b-0 bg-slate-50"
                  >
                    <div className="text-xs uppercase tracking-wide text-slate-500 whitespace-nowrap pt-0.5">
                      {row.label}
                    </div>
                    <div className="font-medium text-slate-900 text-right">{row.value}</div>
                  </div>
                ))}
                <div className="flex gap-2 px-4 py-3 bg-white border-t border-slate-100">
                  <span className="text-xs font-semibold text-white bg-ledger-500 px-3 py-1.5 rounded">Approve</span>
                  <span className="text-xs font-semibold text-slate-600 border border-slate-300 px-3 py-1.5 rounded">
                    Reject with a reason
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                The customer it resolved, the prior transactions for that merchant and whether they agreed, the
                amount, the account — gathered by code, never judged by the model. A card that says{' '}
                <em>no history for this merchant</em> is telling you why it is asking.
              </p>
            </GlowCard>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-5">
            {behaviours.map((b, i) => (
              <AnimateOnScroll key={b.title} animation="fade-up" delay={(i + 1) * 100}>
                <GlowCard className="bg-white border border-slate-200 rounded-xl p-6 h-full">
                  <h3 className="font-semibold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{b.body}</p>
                </GlowCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <AnimateOnScroll animation="fade-up">
          <div className="rounded-xl bg-slate-900 p-6 sm:p-8 text-white">
            <h3 className="font-semibold text-lg mb-2">A rule that is wrong stops itself</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              A QuickBooks bank rule that is wrong keeps being wrong until somebody notices. Correct anything a
              Poof rule is about — not only the rows it happened to touch — or reject the kind of work it covers,
              and the rule pauses, tells you which correction stopped it, and waits for you to resume or revoke it. Every rule lives on one page with
              what it has handled and who granted it, and revoking is instant.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Autonomy is off until you grant it, one rule at a time. There is no global &ldquo;let the AI
              run&rdquo; switch, no rule can ever send anything to a customer, and a rule that writes to your
              ledger must carry a dollar limit or it does not run.{' '}
              <span className="text-white font-medium">
                What did AI change this month, and who allowed it
              </span>{' '}
              is one page — the question your accountant will ask.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
