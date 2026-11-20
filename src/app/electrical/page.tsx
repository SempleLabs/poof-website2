import type { Metadata } from 'next'
import IndustryPage, { COST_ANSWER, PERSON_ANSWER, SWITCH_ANSWER } from '@/components/IndustryPage'

export const metadata: Metadata = {
  title: 'Poof for electrical contractors: service calls and project work in one set of books | Poof',
  description:
    'Electrical contractor bookkeeping for shops that run service and projects: service calls closed from a text, panel and generator jobs with deposits and draws, change orders, crew hours on the job, and a P&L for every job. Poof is free; Poof Agent is $49/mo.',
  alternates: { canonical: 'https://www.poofai.com/electrical' },
  openGraph: {
    images: ['/og-image.png'],
    title: 'Poof for electrical contractors',
    description: 'Service calls and project work, each on its own P&L. Poof is free; Poof Agent is $49 a month.',
    url: 'https://www.poofai.com/electrical',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function ElectricalPage() {
  return (
    <IndustryPage
      slug="electrical"
      eyebrow="For electrical contractors"
      h1={<>Service calls and project work. One set of books.</>}
      lede={
        <>
          Most electrical shops run two businesses: the service van and the panel, generator and build-out work. Poof keeps
          both in one place, with <b className="text-ink font-semibold">a P&amp;L for every job</b>, deposits held until the
          work is done, and draws billed as it moves. Poof is free; Poof Agent is $49 a month.
        </>
      }
      stepsEyebrow="One project, start to finish"
      stepsH2="A whole-home generator. One chain in the books."
      steps={[
        [
          'The quote is signed',
          'Good, better, best on one quote, accepted online with a signed record that can’t change. A deposit is paid by card or bank, or recorded, and held as a liability. Acceptance creates the job at the accepted total, with its payment schedule.',
        ],
        [
          'The gear is ordered and received',
          'Order from the quote and a draft purchase order fills itself in. Receive partial shipments with a packing-slip photo, see what’s still on order beside the job’s cost, and when the bill comes a difference from the PO is a card to accept or dispute.',
        ],
        [
          'The crew’s hours land on the job',
          'With timesheets on, each electrician clocks in from a link on their phone, with no app and no location tracking. Approved hours put labor on the job at what payroll actually cost. A tech’s “Extra, bill it” from the field becomes a change order.',
        ],
        [
          'The draws are billed, and the job closes',
          'A card asks to bill the draw when the install starts and when it finishes, and a person decides. When the work is done the deposit is released to that job’s revenue, and the job’s P&L shows equipment, materials, labor and subs, quoted against actual.',
        ],
      ]}
      builtForEyebrow="Built for how electrical work is billed"
      builtForH2="The parts a general ledger leaves to a spreadsheet."
      builtFor={[
        [
          'Service calls closed from a text',
          'The tech opens the job from a link, logs parts from your price list and labor, takes photos and the customer’s signature, and Complete leaves a draft invoice in the office. A completed call becomes a job on its own.',
          '/features#field-service-and-job-handoff',
          'See the tech’s link',
        ],
        [
          'Financed generators at their real margin',
          'When a job is sold through dealer financing, the dealer fee is a cost of that job, not a bank fee, so a financed generator doesn’t show a margin it never earned.',
          '/features#job-costing-month-end-close-and-payments',
          'See job costing',
        ],
        [
          'Backlog and what’s left to bill',
          'The progress billing report shows what’s left to bill, the backlog, and A/R by job, with three checks at month-end so nothing is released and invoiced twice.',
          '/features#quotes-and-progress-billing',
          'See progress billing',
        ],
        [
          'Commissions for whoever sold it',
          'Credit for who sold each job, split if two people did, with plans on revenue or on margin, earned when the invoice is paid in full. Commissions accrue on the books and show on the job’s P&L.',
          '/features#sales-credit-and-commissions',
          'See commissions',
        ],
        [
          'Wire and gear received but not billed',
          'On accrual books, material that arrives before the supplier’s invoice is accrued from a card at month-end, and the entry reverses on the 1st. One bill can be split across several jobs, line by line.',
          '/features#purchasing-and-truck-stock',
          'See purchase orders',
        ],
        [
          'Your subs’ 1099s, filed by Poof',
          'The W-9 goes out at a sub’s first payment, so January is one approval. Poof files with the IRS and mails the copies. The first 3 forms a year are free, then $2.49 a form.',
          '/1099s',
          'File your 1099s',
        ],
      ]}
      reportAsk="show me the P&L by job this year, biggest jobs first"
      reportFollowUp="Change it by asking (“make it quarterly”)."
      guides={[
        ['Electrical contractor chart of accounts, with a free CSV template', '/blog/electrical-chart-of-accounts', '57 numbered accounts, including the lines most templates miss: subcontractors, retainage and financing fees.'],
        ['Electrical contractor bookkeeping: the complete guide', '/blog/electrical-contractor-bookkeeping-guide', 'Job costing across service and construction, prevailing wage, subcontractor 1099s, and what each option costs.'],
        ['How to track per-job profitability', '/blog/hvac-per-job-profitability', 'Written for HVAC, and it works the same for electrical: what to capture on every job and how to spread overhead.'],
        ['Contractor or employee?', '/blog/contractor-or-employee-trade-shop', 'How to tell whether the helper you pay by the job is a sub or an employee.'],
      ]}
      faqH2="What electrical contractors ask first."
      faqs={[
        { question: 'Do I have to give up the software we quote and dispatch in?', answer: SWITCH_ANSWER('the tool your team quotes and dispatches in if you like it; from Housecall Pro or Jobber, send Poof the exports') },
        {
          question: 'Can one set of books handle service calls and construction-style projects?',
          answer:
            'Yes. A service call becomes a job when the tech completes it. A project is a job too, created when its quote is accepted, with a deposit, draws and change orders. Both land on the same per-job P&L.',
        },
        {
          question: 'How do my electricians’ hours get onto jobs?',
          answer:
            'With timesheets on, each one clocks in from a link on the phone, with breaks and “clock in & on my way”, and the office approves the week. Approved hours put labor on each job at what payroll actually cost, and approved hours export to your payroll provider. Poof doesn’t run payroll; it posts the pay run from your provider’s reports.',
        },
        { question: 'What does it cost?', answer: COST_ANSWER('quotes, purchase orders, progress billing, per-job P&L') },
        { question: 'Can someone just do the books for us?', answer: PERSON_ANSWER },
        {
          question: 'Who is this for?',
          answer:
            'Electrical contractors that run service calls alongside panel upgrades, generators, EV chargers and light commercial build-outs, from a two-person shop to a twenty-person crew.',
        },
      ]}
    />
  )
}
