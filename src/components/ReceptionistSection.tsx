import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'

const capabilities = [
  {
    title: 'It answers, and it books',
    body: 'It knows your shop’s name, hours and service area, works out what the caller needs, and books a real slot on a real tech’s calendar: at 9pm, on a Saturday, or while every tech is on a roof. The caller becomes a customer on the first call.',
  },
  {
    title: 'Safety is a rule, not a guess',
    body: 'A gas smell, carbon monoxide, smoke, sparking or an active alarm gets a scripted “leave the building and call 911” and goes straight to a person. No heat below 45°F or no cooling above 95°F is an emergency too. Those are rules in the software; the AI never decides what counts as an emergency.',
  },
  {
    title: 'It hands off when it should',
    body: 'A caller who asks for a person, a repeat caller, someone threatening to cancel, no open slot in time, or a call it isn’t sure about goes to a human instead of getting a guess.',
  },
  {
    title: 'Then it dispatches, or waits for you',
    body: 'Let it pick who goes and text them the job, or keep that for your dispatcher and the booking lands under “Needs a tech.” Work spreads evenly across the crew, and a job nobody has been assigned raises the alarm before it’s due.',
  },
]

export default function ReceptionistSection() {
  return (
    <section id="receptionist" className="py-20 bg-slate-900 relative overflow-hidden">

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-ledger-500/15 border border-ledger-400/30 text-ledger-300 font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Poof for shops
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Every call answered. <span className="text-ledger-600">Every job on the board.</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Poof can answer the shop&apos;s line. The AI receptionist picks up, works out what the caller
              needs, books a real slot on a real tech&apos;s calendar, and sends anything unsafe to a person.
              Calls that used to go to voicemail land on the board instead, and every job they create is costed
              like the rest.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {capabilities.map((c, i) => (
            <AnimateOnScroll key={c.title} animation="fade-up" delay={i * 100}>
              <GlowCard className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 h-full">
                <h3 className="font-semibold text-white mb-2 leading-snug">{c.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{c.body}</p>
              </GlowCard>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up">
          <div className="rounded-xl border border-ledger-400/30 bg-ledger-500/10 p-6 mb-5">
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Versus an answering service
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              An answering service runs $200&ndash;$600 a month to take a message. Poof&apos;s receptionist books
              against your techs&apos; real availability, sends the unsafe calls to a person by rule, and puts the
              job straight into the same books as everything else.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up">
          <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6">
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              What it costs, and what it doesn&apos;t do
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              An add-on: $99 a month with 1,000 minutes of calls included, then 12&cent; a minute. You turn it on
              and buy it yourself in Settings &rarr; Receptionist. <strong className="text-slate-100">Messages to
              your customers stay off until you turn them on</strong> (a booking confirmation, a day-before
              reminder, &ldquo;on my way&rdquo;), and go by email until your Poof line is registered for texting.
              It doesn&apos;t take payment on the call, doesn&apos;t plan routes, and never makes sales calls.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
