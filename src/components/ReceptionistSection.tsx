import AnimateOnScroll from './AnimateOnScroll'
import GlowCard from './GlowCard'

const capabilities = [
  {
    title: 'It answers, and it books',
    body: 'The agent knows your shop’s name, hours, and service area. It works out what the caller needs and puts the job on the board — at 9pm, on a Saturday, or while every tech is on a roof.',
  },
  {
    title: 'Safety calls are decided in code, not by AI',
    body: 'Gas smell, carbon monoxide, smoke, sparking, or an active alarm trigger an immediate emergency escalation and a scripted “leave the building, call 911” response. No heat below 45°F and no cool above 95°F are emergencies too. These are rules in the software — the AI narrates the call, it never decides what counts as an emergency.',
  },
  {
    title: 'It books against real availability',
    body: 'Slots come from your technicians, their weekly windows, and their time off, minus what is already booked — with drive-time buffer and skill match respected. The database refuses overlapping bookings outright, so two calls landing at once cannot double-book a tech.',
  },
  {
    title: 'It knows when to hand off',
    body: 'A safety trigger, an after-hours emergency, no slot inside the urgency window, a caller who asks for a person, a repeat caller within 24 hours, a cancellation threat, or low confidence — any of these route the call to a human.',
  },
  {
    title: 'Then it dispatches — or waits for you',
    body: 'Two independent switches: whether the AI picks who goes, and whether the system texts them. Leave both on and the assigned tech gets their job on their phone. Turn the first off and the booking still stands with the customer’s promised window — the job just lands under “Needs a tech” for whoever staffs your board.',
  },
  {
    title: 'The caller becomes a customer immediately',
    body: 'A booked job creates the customer record on the first call, not weeks later when someone finally invoices it. Matching runs on the last ten digits of the number, so the same household calling from a different phone format stays one customer instead of becoming two.',
  },
]

export default function ReceptionistSection() {
  return (
    <section id="receptionist" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-500/15 border border-violet-400/30 text-violet-200 font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Part of Poof Managed for Trades
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Every call answered. <span className="text-gradient-gold">Every job on the board.</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Managed customers can have Poof answer the shop&apos;s line. An AI receptionist picks up, works out
              what the caller needs, books a real slot on a real tech&apos;s calendar, dispatches the tech, and
              escalates anything unsafe to a person. The revenue that used to go to voicemail lands on the board
              instead &mdash; and the job it creates gets costed like every other job on your P&amp;L.
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
          <div className="rounded-xl border border-violet-400/30 bg-violet-500/10 p-6 mb-5">
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Versus an answering service
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              An answering service runs $200&ndash;$600/mo to take a message and, on a good day, drop it into a
              calendar. It doesn&apos;t know your books, which of your techs is certified for the work, or which calls
              are emergencies. Poof&apos;s receptionist books against real availability, escalates the unsafe ones by
              rule, and the job it creates gets costed like every other job on your P&amp;L.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up">
          <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6">
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              What it does not do
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We install it for you as part of the managed service &mdash; we provision the number and the voice
              agent. It is not a switch you flip yourself. <strong className="text-slate-100">Customer-facing
              texts are not built yet</strong>: no booking confirmation, no reminder, no &ldquo;your tech is on
              the way.&rdquo; Your technician does get texted their job &mdash; your customer does not. It does not
              take payment on the call, does not optimize routes across the day&apos;s board, and does not clone
              your voice. There are no outbound sales calls. We would rather tell you that now than after you
              have signed.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
