import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'

// The August checklist as it reads on the phone: evidence tasks tick themselves
// from the books; the ones a person ticks say so. Business days after month end.
const checklist = [
  { day: 2, task: 'Bank feeds reviewed', state: 'done', by: 'the books' },
  { day: 3, task: 'Bank accounts reconciled', state: 'done', by: 'the books' },
  { day: 3, task: 'Draft entries posted', state: 'done', by: 'the books' },
  { day: 3, task: 'Customer deposits released on completed jobs', state: 'open', by: '2 jobs still hold $1,500' },
  { day: 4, task: 'A/R ties to open invoices', state: 'done', by: 'the books' },
  { day: 5, task: 'Vendor bills through month end entered', state: 'open', by: 'Ferguson lands about day 6' },
  { day: 7, task: 'Period locked and signed', state: 'open', by: 'the signature' },
]

const behaviours = [
  {
    title: 'The close is a record, not a feeling',
    body: 'Each month’s close is one thing: who started it, where it stands — in progress, ready, signed, reopened — and what it took. Locking the period is the signature, and at that moment the close captures its activity: transactions reviewed, entries posted, decisions made by a person and by a rule, hours from start to signature. “August: signed September 5, sixty hours” is a sentence the books can say.',
  },
  {
    title: 'The reconciliation carries last month forward',
    body: 'A check written in July that clears in August is on August’s side, where it can be paired. The screen shows one figure — the same one the record stores — and a row you add mid-way counts. A check you cleared stays cleared when someone fixes the entry’s memo a month later.',
  },
  {
    title: 'A late task finds you',
    body: 'A task past its due date on an open close is a card in Approvals and one message per close per day on the channels you chose — Telegram, text, Slack, email — naming what is late. The sweep re-reads the books first, so it never nags about a bank account you reconciled that afternoon.',
  },
]

export default function CloseRunSection() {
  return (
    <section id="close" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Included in every plan
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              The close is a checklist with due dates,{' '}
              <span className="text-gradient-gold">and the books tick it off themselves.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Seventeen tasks, dated in business days after month end. Twelve of them complete on their own when
              the books prove them &mdash; and cannot be ticked by hand. Each open one says why in a sentence, and
              links to the screen that fixes it.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <AnimateOnScroll animation="fade-up">
            <GlowCard className="bg-white border border-slate-200 rounded-xl p-6 h-full flex flex-col">
              <h3 className="font-semibold text-lg text-slate-900 mb-1">August, as the phone shows it</h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                The trades default. Every organization edits its own template; every close keeps the copy it started with.
              </p>
              <div className="rounded-lg border border-slate-200 overflow-hidden text-sm mb-5">
                {checklist.map((row) => (
                  <div
                    key={row.task}
                    className="flex items-start gap-3 px-4 py-2.5 border-b border-slate-100 last:border-b-0 bg-slate-50"
                  >
                    <span
                      className={
                        row.state === 'done'
                          ? 'mt-0.5 inline-block w-4 h-4 rounded-full bg-emerald-500 flex-shrink-0'
                          : 'mt-0.5 inline-block w-4 h-4 rounded-full border-2 border-slate-300 flex-shrink-0'
                      }
                      aria-label={row.state === 'done' ? 'done' : 'open'}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-slate-900">{row.task}</div>
                      <div className="text-xs text-slate-500">
                        Day {row.day} &middot; {row.state === 'done' ? `ticked by ${row.by}` : row.by}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                <em>Bank accounts reconciled</em> ticks itself when each account has a completed reconciliation
                through month end. <em>Customer deposits released</em> stays open until the deposit on that
                finished install has been released to its revenue &mdash; and tells you which jobs.
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
            <h3 className="font-semibold text-lg mb-2">A clean tie-out proves the books as they stood</h3>
            <p className="text-slate-300 leading-relaxed">
              The thirteen tie-out checks run before a period is signed, not after. Review a transaction or post
              an entry after they ran and the step says <span className="text-white font-medium">run the checks
              again</span> instead of reading &ldquo;tied&rdquo; off a stale result. QuickBooks has no close
              checklist, no evidence-bound tasks, and no idea what a month took.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
