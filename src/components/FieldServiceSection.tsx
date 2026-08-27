import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'

const steps = [
  {
    number: '1',
    title: 'The tech gets a text',
    body: 'A link that opens exactly their job. No account, no password, no app to install — which is the honest answer to “my guys won’t use another app.” The link is signed and can be revoked, and rescheduling invalidates it automatically.',
  },
  {
    number: '2',
    title: 'They work the job from their phone',
    body: 'On-my-way, arrived, and completed times recorded when they happen, not guessed at afterwards. What was wrong, what was done, what still needs doing. Equipment make, model, and serial. Photos — before, after, nameplate, receipt.',
  },
  {
    number: '3',
    title: 'Parts and labor get logged by the person who knows',
    body: 'Each line tagged as labor, part, or fee at the jobsite by the tech who put it there. That is what makes the margin on the job real, instead of something the office infers from a description a week later.',
  },
  {
    number: '4',
    title: 'They tap Complete, and the invoice exists',
    body: 'A draft invoice is waiting in the office with the tech’s own words on it, ready for review. Nobody retypes a paper ticket. And the completed call becomes a job — linked to the customer, with the invoice tagged to it, so it reaches your Per-Job P&L without anyone remembering to tag anything.',
  },
  {
    number: '5',
    title: 'Your office reads it before your customer does',
    body: 'The dispatcher opens the field report from the board — what the tech wrote, the photos, the parts and labor, the customer’s sign-off, and the draft invoice it produced. The tech’s internal notes are shown marked as never reaching the customer. Nothing goes out until a person sends it.',
  },
]

export default function FieldServiceSection() {
  return (
    <section id="field-service" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Part of Poof Managed for Trades
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Your tech closes the job from a text.{' '}
              <span className="text-gradient-gold">The invoice writes itself.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The gap between the work getting done and the work getting billed is where trade shops lose money
              and time. Poof closes it without asking your techs to learn anything.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-0 mb-10">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} animation="fade-up" delay={i * 100}>
              <div className="flex gap-5 items-start relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 w-px h-[calc(100%-2rem)] bg-gradient-to-b from-violet-300 to-slate-200" />
                )}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-600 text-white flex items-center justify-center font-bold text-lg shadow-gold relative z-10">
                  {step.number}
                </div>
                <div className="pb-10">
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimateOnScroll animation="fade-up">
            <GlowCard className="bg-slate-50 border border-slate-200 rounded-xl p-6 h-full">
              <h3 className="font-semibold text-slate-900 mb-2 leading-snug">
                Your supply-house receipt stays yours
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every jobsite photo is opted in or out of the customer&apos;s invoice individually, and the
                receipt showing what you paid for the part defaults to <strong>not</strong> printing. A photo of
                your cost can never reach a customer by accident.
              </p>
            </GlowCard>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <GlowCard className="bg-slate-50 border border-slate-200 rounded-xl p-6 h-full">
              <h3 className="font-semibold text-slate-900 mb-2 leading-snug">
                An invoice that looks like trade work
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Diagnosis, work performed, recommended follow-up, equipment, and warranty print under real
                headings, with the opted-in photos beneath them. Not a one-line &ldquo;HVAC service call &mdash;
                $458&rdquo; that invites a phone call about what it was for.
              </p>
            </GlowCard>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fade-up">
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">
              What the tech&apos;s page does not do
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No GPS tracking &mdash; we are not building a way to watch your crew. It does not take payment on
              site. It records a typed name and a timestamp rather than a drawn signature. And it needs a
              signal: there is no offline mode, so a basement with no bars means the tech fills it in when they
              are back in the truck. Scheduling and re-routing stay on the dispatch board, not the tech&apos;s
              phone.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
