import type { Metadata } from 'next'
import IndustryPage, { COST_ANSWER, PERSON_ANSWER, SWITCH_ANSWER } from '@/components/IndustryPage'

export const metadata: Metadata = {
  title: 'Poof for HVAC shops: bookkeeping from the service call to the per-job P&L | Poof',
  description:
    'HVAC bookkeeping that starts at the call: the tech closes the job from a text, the invoice drafts itself, maintenance plans are earned per tune-up, install deposits stay unearned, and every job has a P&L. Poof is free; Poof Agent is $49/mo.',
  alternates: { canonical: 'https://www.poofai.com/hvac' },
  openGraph: {
    images: ['/og-image.png'],
    title: 'Poof for HVAC shops',
    description: 'From the no-heat call to the per-job P&L. Poof is free; Poof Agent is $49 a month.',
    url: 'https://www.poofai.com/hvac',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function HvacPage() {
  return (
    <IndustryPage
      slug="hvac"
      eyebrow="For HVAC shops"
      h1={<>From the no-heat call to the per-job P&amp;L.</>}
      lede={
        <>
          The tech closes the job from a text, the invoice drafts itself in their words, maintenance plans earn as the
          tune-ups get done, and <b className="text-ink font-semibold">every install and service call has its own P&amp;L</b>.
          Poof is free; Poof Agent is $49 a month.
        </>
      }
      demoNote="Or open a live demo of a Texas heating-and-plumbing shop"
      stepsEyebrow="One call, start to finish"
      stepsH2="A January no-heat call. One chain in the books."
      steps={[
        [
          'The call is booked',
          'With the receptionist add-on, Poof answers when nobody can and books against your techs’ real windows. No heat below 45°F and no cool above 95°F are emergencies by rule, and so are a gas smell, carbon monoxide and smoke: the caller hears “leave the building, call 911” and the call goes straight to the shop. Without it, the job goes on the same board by hand.',
        ],
        [
          'The tech works it from a text',
          'No app, no password. On my way, arrived and completed are stamped when they happen. The tech taps the furnace from the equipment on file at that address (make, model and serial follow the unit), logs readings, and takes before, after and nameplate photos.',
        ],
        [
          'The invoice writes itself',
          'Parts come off your price list at catalogue cost, labor is tagged by the tech, and Complete leaves a draft invoice in the office with diagnosis, work performed and recommended follow-up under real headings. A person reviews it and sends it, or the customer pays on site by card or bank.',
        ],
        [
          'The job has its own P&L',
          'Completing the visit creates the job and tags the invoice to it. Revenue, parts, the tech’s labor at what payroll actually cost, and the supply-house receipt land on that job, quoted against actual, with a card when a job runs over.',
        ],
      ]}
      builtForEyebrow="Built for how HVAC is billed"
      builtForH2="The parts QuickBooks leaves to a spreadsheet."
      builtFor={[
        [
          'Maintenance plans that earn per tune-up',
          'Annual prepaid plans are deferred at the sale and earned visit by visit, to the penny, when the tech completes the tune-up. Spring tune-ups go out as one weekly card, and member pricing shows on visits and quotes.',
          '/features#memberships',
          'See plans',
        ],
        [
          'Install deposits that stay unearned',
          'Good, better, best on one quote, signed online. A deposit is held as a liability and released to that job’s revenue when the change-out is done, with a warning if the job was also invoiced.',
          '/features#quotes-and-progress-billing',
          'See quotes and deposits',
        ],
        [
          'Financed installs at their real margin',
          'When an install is sold through dealer financing, the dealer fee is a cost of that job, so a financed change-out doesn’t show a margin it never earned.',
          '/features#job-costing-month-end-close-and-payments',
          'See job costing',
        ],
        [
          'Truck stock you can count',
          'Each van is its own stock location. Count from a phone, post it, and parts used on jobs go to those jobs while the rest shows as shrinkage. Purchase orders, partial receipts and bills matched to the PO.',
          '/features#purchasing-and-truck-stock',
          'See truck stock',
        ],
        [
          'Equipment history by address',
          'Units stay on file at the address with their make, model and serial, and readings sit beside the last visit’s, with out-of-range ones flagged. The next tech starts where the last one stopped.',
          '/features#field-service-and-job-handoff',
          'See the tech’s link',
        ],
        [
          'Your subs’ 1099s, filed by Poof',
          'The W-9 goes out at a sub’s first payment, so January is one approval. Poof files with the IRS and mails the copies. The first 3 forms a year are free, then $2.49 a form.',
          '/1099s',
          'File your 1099s',
        ],
      ]}
      reportAsk="show me the P&L by job this quarter, worst margin first"
      reportFollowUp="Change it by asking (“just installs over $8,000”)."
      guides={[
        ['HVAC chart of accounts, with a free CSV template', '/blog/hvac-chart-of-accounts', '49 numbered accounts, why each one exists, and the setup mistakes that hide your margins.'],
        ['HVAC bookkeeping: the complete guide', '/blog/hvac-bookkeeping-guide', 'Job costing, the monthly close, and what each way of keeping the books costs a shop your size.'],
        ['How HVAC shops should track per-job profitability', '/blog/hvac-per-job-profitability', 'What to capture on every job, how to spread overhead, and where financed installs hide their cost.'],
        ['Job margin check', '/job-margin-check', 'Put in one job’s numbers and see what it really made.'],
      ]}
      faqH2="What HVAC owners ask first."
      faqs={[
        { question: 'Do I have to give up Housecall Pro or Jobber?', answer: SWITCH_ANSWER('the tool your techs already know if you like it, and send Poof its exports') },
        {
          question: 'How does Poof handle prepaid maintenance agreements?',
          answer:
            'An annual plan paid up front is deferred revenue at the sale. Each tune-up the tech completes earns its share, to the penny, on its own. A repair call for a plan customer doesn’t count against the plan. Monthly plans are earned as they are billed. Renewals and cancellations each arrive as a card a person decides.',
        },
        {
          question: 'Will my techs actually use it?',
          answer:
            'They don’t install anything. The tech gets each job as a link in a text, replies YES once, and works the job from the phone: on my way, arrived, readings, photos, parts, the customer’s signature. What a part cost the shop comes from your price list, never from the tech.',
        },
        { question: 'What does it cost?', answer: COST_ANSWER('the dispatch board, the tech’s link, maintenance plans, per-job P&L') },
        { question: 'Can someone just do the books for us?', answer: PERSON_ANSWER },
        {
          question: 'Who is this for?',
          answer:
            'Residential and light commercial HVAC shops that run service, maintenance and change-outs, from one truck to ten. If your month is no-heat calls in January, tune-ups in the spring and installs that take a deposit, Poof is built for that shape.',
        },
      ]}
    />
  )
}
