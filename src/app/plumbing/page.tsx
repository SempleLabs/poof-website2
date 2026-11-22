import type { Metadata } from 'next'
import IndustryPage, { COST_ANSWER, PERSON_ANSWER, SWITCH_ANSWER } from '@/components/IndustryPage'

export const metadata: Metadata = {
  title: 'Poof for plumbing shops: bookkeeping from the service call to the per-job P&L | Poof',
  description:
    'Plumbing bookkeeping built for a high count of small tickets: the tech closes the job from a text, parts come off your price list at cost, the van is counted from a phone, and every job has a P&L. Poof is free; Poof Agent is $49/mo.',
  alternates: { canonical: 'https://www.poofai.com/plumbing' },
  openGraph: {
    images: ['/og-image.png'],
    title: 'Poof for plumbing shops',
    description: 'Hundreds of small tickets a month, each with its own P&L. Poof is free; Poof Agent is $49 a month.',
    url: 'https://www.poofai.com/plumbing',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function PlumbingPage() {
  return (
    <IndustryPage
      slug="plumbing"
      eyebrow="For plumbing shops"
      h1={<>Every ticket on its own P&amp;L. Even the $340 ones.</>}
      lede={
        <>
          A plumbing month is hundreds of small jobs, and the margin hides in the parts. Poof puts{' '}
          <b className="text-ink font-semibold">the parts at cost, the tech’s labor and the supply-house receipt on each job</b>{' '}
          without anyone tagging them. Poof is free; Poof Agent is $49 a month.
        </>
      }
      demoNote="Or open a live demo of a Texas heating-and-plumbing shop"
      stepsEyebrow="One ticket, start to finish"
      stepsH2="A water heater on a Tuesday. One chain in the books."
      steps={[
        [
          'The call is booked',
          'With the receptionist add-on, Poof answers when the office can’t and books against your techs’ real windows, preferring a tech tagged for the work. A gas smell is an emergency by rule: the caller hears “leave the building, call 911” and the call goes straight to the shop. Without the add-on, the job goes on the same board by hand.',
        ],
        [
          'The tech quotes it on site',
          'Good, better, best from the tech’s phone, with member prices, and the customer accepts in person. The accepted quote becomes the job at the accepted total.',
        ],
        [
          'Parts come off the van at cost',
          'The tech picks parts from your price list, so the invoice line lands on the right sales account and the part’s cost rides in from the catalogue. A receipt from a supply-house run is texted to Poof as a photo and becomes an expense card on the job.',
        ],
        [
          'The invoice writes itself, and the job closes',
          'Complete leaves a draft invoice in the office with what was wrong, what was done and the warranty under real headings. The customer can pay on site by card or bank. The job’s P&L shows the ticket, the parts, the labor and the receipt, quoted against actual.',
        ],
      ]}
      builtForEyebrow="Built for how plumbing is billed"
      builtForH2="Small tickets, big parts counts, real margins."
      builtFor={[
        [
          'The van is a stock location',
          'Each truck and the warehouse is its own location. Count from a phone, post it, and parts used on jobs go to those jobs while the rest is shrinkage. An insight speaks up when shrinkage climbs.',
          '/features#purchasing-and-truck-stock',
          'See truck stock',
        ],
        [
          'Restock that follows what was used',
          'Techs request parts from their link, and a weekly replace-what-was-used restock can be turned on per van. Purchase orders, partial receipts with a packing-slip photo, and bills matched to the PO.',
          '/features#purchasing-and-truck-stock',
          'See purchase orders',
        ],
        [
          'Callbacks you can see',
          'Ask how the month went and Poof answers with close rate, average ticket, top tech and callbacks, from the same numbers the screens show.',
          '/features#poof-ai-capabilities',
          'See Ask Poof',
        ],
        [
          'Repipes and remodels billed in draws',
          'Deposit and balance, 30/40/30, or up to six draws on the quote. A card asks to bill each draw, and change orders are billed now, with the final, or spread over the bills left.',
          '/features#quotes-and-progress-billing',
          'See progress billing',
        ],
        [
          'Members priced the way you sold them',
          'A percentage off repairs and the included visit at $0, on visits, quotes and drafts. Prepaid plans are deferred and earned per visit.',
          '/features#memberships',
          'See plans',
        ],
        [
          'Your subs’ 1099s, filed by Poof',
          'The W-9 goes out at a sub’s first payment, so January is one approval. Poof files with the IRS and mails the copies. The first 3 forms a year are free, then $2.49 a form.',
          '/1099s',
          'File your 1099s',
        ],
      ]}
      reportAsk="show me parts cost as a share of revenue, by month, this year"
      reportFollowUp="Change it by asking (“put last year beside it”)."
      guides={[
        ['Plumbing chart of accounts, with a free CSV template', '/blog/plumbing-chart-of-accounts', '58 numbered accounts, why each one exists, and the mistakes that bury parts cost in expenses.'],
        ['Plumbing bookkeeping: the complete guide', '/blog/plumbing-bookkeeping-guide', 'Job costing when the average ticket is $340, tracking callbacks and warranty work, and what each option costs.'],
        ['How to track per-job profitability', '/blog/hvac-per-job-profitability', 'Written for HVAC, and it works the same for plumbing: what to capture on every job and how to spread overhead.'],
        ['Job margin check', '/job-margin-check', 'Put in one job’s numbers and see what it really made.'],
      ]}
      faqH2="What plumbing owners ask first."
      faqs={[
        { question: 'Do I have to give up Housecall Pro or Jobber?', answer: SWITCH_ANSWER('the tool your techs already know if you like it, and send Poof its exports') },
        {
          question: 'Can Poof keep up with 300 tickets a month?',
          answer:
            'That is the case it is built for. A completed visit becomes a job on its own, with its invoice tagged to it, so nobody tags tickets by hand. Overnight, Poof Agent sorts the day’s bank and card transactions and leaves them on one card for your OK in the morning.',
        },
        {
          question: 'How do parts get costed if my techs don’t know what we paid?',
          answer:
            'They don’t need to. The tech picks the part from your price list and the cost comes from the catalogue, never from the tech’s form. When a supply-house bill arrives, a difference from the purchase order becomes a card to accept or dispute.',
        },
        { question: 'What does it cost?', answer: COST_ANSWER('the dispatch board, the tech’s link, truck stock, per-job P&L') },
        { question: 'Can someone just do the books for us?', answer: PERSON_ANSWER },
        {
          question: 'Who is this for?',
          answer:
            'Residential and light commercial plumbing shops that run service calls, drains, water heaters and repipes, from one truck to ten. If your month is a lot of small tickets and a van full of parts, Poof is built for that shape.',
        },
      ]}
    />
  )
}
