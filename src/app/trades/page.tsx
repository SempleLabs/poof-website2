import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import TradesShow from '@/components/TradesShow'
import Footer from '@/components/Footer'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import GlowCard from '@/components/GlowCard'
import ReceptionistSection from '@/components/ReceptionistSection'
import FieldServiceSection from '@/components/FieldServiceSection'
import UnearnedRevenueSection from '@/components/UnearnedRevenueSection'
import ApprovalsSection from '@/components/ApprovalsSection'
import CloseRunSection from '@/components/CloseRunSection'
import CtaSection from '@/components/CtaSection'
import { getFaqPageSchema, getBreadcrumbSchema } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: 'Poof for shops — the back office for HVAC, plumbing, and electrical | Poof',
  description:
    'The phone answered, the job on the board, the tech closing it from a text, and the invoice on a per-job P&L. One plan, every feature: 30 days free, then $39.50/mo for three months, then $79/mo.',
  alternates: {
    canonical: 'https://www.poofai.com/trades',
  },
  openGraph: {
    title: 'Poof for shops — the back office for HVAC, plumbing, and electrical',
    description:
      'From the 9:40pm call to the per-job P&L, with a person on every entry. $79 a month, every feature.',
    url: 'https://www.poofai.com/trades',
    siteName: 'Poof',
    type: 'website',
  },
}

const loop = [
  {
    number: '1',
    title: 'The phone gets answered',
    body: 'Poof answers your line when nobody can, works out what the caller needs, and books the job against real availability — your techs, their windows, their time off, minus what is already booked. Gas smell, smoke, sparking, an active alarm: those are rules in code, not a prompt, and they escalate instead of booking.',
  },
  {
    number: '2',
    title: 'The tech closes the job from a text',
    body: 'The assigned tech gets their job as a link. No account, no app to install. On my way, arrived, parts used, photos, a typed name at the end. The office reviews it before anything reaches the customer.',
  },
  {
    number: '3',
    title: 'The invoice writes itself',
    body: 'Parts come from your price list at catalogue cost, labor from the tech\'s own timestamps. The draft invoice lands in the office in the tech\'s words, and a person sends it.',
  },
  {
    number: '4',
    title: 'The job lands on a per-job P&L',
    body: 'Revenue, parts, labor, and the supply-house receipt tie to the job that earned them. Nobody types it in twice. At month end the close runs on a checklist with evidence on each task.',
  },
]

const builtFor = [
  {
    title: 'A chart of accounts tuned to your trade',
    body: 'Templates for HVAC, plumbing, electrical, roofing, pest control, landscaping, garage door, and pool service — free to download, or the starting point when you set up your books in Poof.',
    href: '/resources',
    cta: 'Get the templates',
  },
  {
    title: 'Deposits and plans that stay unearned',
    body: 'A deposit on an install is held as a liability from the day it lands and released to that job\'s revenue when the job is done. Prepaid maintenance plans are deferred at the sale and earned per completed visit.',
    href: '/features#unearned',
    cta: 'See how it works',
  },
  {
    title: 'A close you can sign in five days',
    body: 'Seventeen tasks, thirteen of them tied to evidence in the ledger, four that need a person. Closed within five business days of month end, or the next month is free.',
    href: '/close',
    cta: 'See the close',
  },
]

const faqs = [
  {
    q: 'What does Poof for shops cost?',
    a: 'The same as every other Poof account: $79 a month, all 128 features. You start with 30 days free, and your first three paid months are half price at $39.50. There is no shop tier and no per-truck or per-technician pricing — the fee does not grow when you hire. Compare that to the field-service tools quoted per technician per month.',
  },
  {
    q: 'Is the AI receptionist something I turn on myself?',
    a: 'Not yet. The phone number and the voice agent are provisioned for you as part of setting up Poof for shops; there is no button in the app for a shop owner to flip. If that matters to your timeline, say so when you start a trial and we will tell you where it stands.',
  },
  {
    q: 'Does the AI text my customers?',
    a: 'No. Customer-facing texts — booking confirmations, reminders, "your tech is on the way" — are not built. The dispatched technician is texted their job link; that part is built and running. Those two are different things and we do not blur them. On the books side, no ledger rule can send anything to a customer either: invoices and credit notes are always a person\'s decision.',
  },
  {
    q: 'Do I have to switch off Jobber or Housecall Pro?',
    a: 'No. Keep using what your techs use today. You bring your Jobber or Housecall Pro export and your bank feeds into Poof; your dispatcher and techs see no change. What Poof replaces is the handoff into the books, not the tool your crew already knows.',
  },
  {
    q: 'What happens to a customer\'s deposit, or a prepaid maintenance plan, in my books?',
    a: 'It stays unearned until you have earned it. A deposit on an install is held as a liability from the day it lands and released to that job\'s revenue when the job is done — previewed first, with a warning if the job was also invoiced, and it refuses to release money that was never categorized as a deposit. A prepaid plan is deferred at the sale and earned per completed visit, automatically when the tech taps Complete. Cancellation is a refund-or-forfeit decision someone records, never automatic.',
  },
  {
    q: 'Does the technician need an account or an app?',
    a: 'Neither, and that is the point — it is the answer to "my guys will not use another app." The tech taps a link in a text. It does no GPS tracking, takes no payment on site, records a typed name and timestamp rather than a drawn signature, and needs a signal; there is no offline mode. Jobsite photos are opted into the customer invoice one photo at a time, and the supply-house receipt showing your cost defaults to not printing.',
  },
  {
    q: 'Who is this actually for?',
    a: 'Service shops that run on inbound calls and want the job, the invoice, and the books to be one chain instead of three. Most of the shops we built this with run 2 to 10 trucks. Nothing stops a one-truck shop or a larger one from using it — it is the same $79 plan either way.',
  },
]

export default function TradesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.poofai.com' },
              { name: 'For shops', url: 'https://www.poofai.com/trades' },
            ])
          ),
        }}
      />
      <Header />

      <div className="pt-16" />
      <TradesShow />

      <ReceptionistSection />

      <FieldServiceSection />

      <UnearnedRevenueSection />

      <ApprovalsSection />

      <CloseRunSection />

      {/* The loop, stated plainly for anyone who skipped the demo */}
      <section id="loop" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-3">
              One chain, from the call to the P&amp;L
            </h2>
            <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
              Count how many times somebody types the job in. Zero.
            </p>
          </AnimateOnScroll>

          <div className="space-y-0">
            {loop.map((step, i) => (
              <AnimateOnScroll key={step.number} animation="fade-up" delay={i * 100}>
                <div className="flex gap-5 items-start relative">
                  {i < loop.length - 1 && (
                    <div className="absolute left-6 top-14 w-px h-[calc(100%-2rem)] bg-ledger-300" />
                  )}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ledger-500 text-white flex items-center justify-center font-bold text-lg relative z-10">
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
        </div>
      </section>

      {/* What a shop gets that a general ledger doesn't give you */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Built for how shop work actually gets billed
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {builtFor.map((b, i) => (
              <AnimateOnScroll key={b.title} animation="fade-up" delay={i * 100}>
                <GlowCard className="bg-slate-50 border border-slate-200 rounded-xl p-6 card-hover-lift h-full flex flex-col">
                  <h3 className="font-semibold text-slate-900 mb-2 leading-snug">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{b.body}</p>
                  <Link href={b.href} className="text-sm font-semibold text-ledger-600 hover:text-ledger-700">
                    {b.cta} →
                  </Link>
                </GlowCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing: the same one plan as everywhere else */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              One plan. $79 a month.
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every feature, including the receptionist, the field loop, and per-job profitability. It does not
              go up when you add a truck or a tech — the field-service tools shops compare us to are priced per
              technician per month. Thirty days free, then $39.50 a month for your first three paid months.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="https://app.poofai.com/register"
                className="bg-ledger-500 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-ledger-600 transition-colors"
              >
                Start free trial
              </Link>
              <Link
                href="/pricing"
                className="border-[1.5px] border-slate-900 text-slate-900 font-semibold px-8 py-3.5 rounded-lg hover:bg-white transition-colors"
              >
                See pricing
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Questions shop owners ask
            </h2>
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <AnimateOnScroll key={f.q} animation="fade-up" delay={i * 50}>
                <details className="group bg-slate-50 border border-slate-200 rounded-xl p-6 open:bg-white open:border-ledger-300 transition-colors">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-slate-900 leading-snug">{f.q}</h3>
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed text-sm">{f.a}</p>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
