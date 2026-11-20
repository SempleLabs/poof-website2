import type { Metadata } from 'next'
import IndustryPage, { COST_ANSWER, PERSON_ANSWER } from '@/components/IndustryPage'

export const metadata: Metadata = {
  title: 'Poof for roofing contractors: deposits, materials, sub crews and a P&L for every roof | Poof',
  description:
    'Roofing bookkeeping from the signed contract to the job P&L: deposits held until the roof is on, materials ordered and received against the job, decking change orders, sub crews’ 1099s, and reps’ commissions. Poof is free; Poof Agent is $49/mo.',
  alternates: { canonical: 'https://www.poofai.com/roofing' },
  openGraph: {
    images: ['/og-image.png'],
    title: 'Poof for roofing contractors',
    description: 'Deposits, materials, sub crews and a P&L for every roof. Poof is free; Poof Agent is $49 a month.',
    url: 'https://www.poofai.com/roofing',
    siteName: 'Poof',
    type: 'website',
  },
}

export default function RoofingPage() {
  return (
    <IndustryPage
      slug="roofing"
      eyebrow="For roofing contractors"
      h1={<>A P&amp;L for every roof, from the deposit to the dumpster.</>}
      lede={
        <>
          Deposits held until the roof is on, materials ordered and received against the job, the decking change order
          billed, the sub crew’s pay and the haul-off on the job, and{' '}
          <b className="text-ink font-semibold">what each roof actually made</b>. Poof is free; Poof Agent is $49 a month.
        </>
      }
      stepsEyebrow="One roof, start to finish"
      stepsH2="A re-roof in March. One chain in the books."
      steps={[
        [
          'The contract is signed',
          'Good, better, best on one quote (three shingle lines, say), signed online with a record that can’t change, or in person from a phone. The deposit is held as a liability: it is not revenue the day it lands. Acceptance creates the job at the accepted total.',
        ],
        [
          'Materials are ordered and delivered',
          'Order from the quote and a draft purchase order fills itself in. Email it to the supply house, receive the delivery with a photo of the slip, and see what’s still on order beside the job’s cost. When the bill comes, a difference from the PO is a card to accept or dispute.',
        ],
        [
          'Tear-off finds rotten decking',
          'The change order is billed now, with the final, or spread over the bills left. The sub crew’s bill, the dumpster and the permit go on the job, and one supply-house bill can be split across several roofs, line by line.',
        ],
        [
          'The roof is on, and the job closes',
          'A person sends the final invoice, the deposit is released to that job’s revenue, and the job’s P&L shows materials, labor and subs, quoted against actual, with a card when a roof runs over its quote.',
        ],
      ]}
      builtForEyebrow="Built for how roofing is billed"
      builtForH2="The parts a general ledger leaves to a spreadsheet."
      builtFor={[
        [
          'Deposits that wait for the roof',
          'A deposit is held as a liability and released to that job’s revenue when the work is done. The release previews first and warns if the job was also invoiced, and month-end checks that nothing was released and invoiced twice.',
          '/features#job-costing-month-end-close-and-payments',
          'See deposits',
        ],
        [
          'Sub crews paid, and their 1099s filed',
          'The W-9 goes out at a crew’s first payment, so January is one approval. Poof files with the IRS and mails the copies. The first 3 forms a year are free, then $2.49 a form.',
          '/1099s',
          'File your 1099s',
        ],
        [
          'Reps’ commissions they can check',
          'Credit for who sold each roof, split if two people did, with plans on revenue or on margin, earned when the invoice is paid in full. Commissions accrue on the books and show on the job’s P&L.',
          '/features#sales-credit-and-commissions',
          'See commissions',
        ],
        [
          'Financed roofs at their real margin',
          'When a roof is sold through dealer financing, the dealer fee is a cost of that job, so a financed job that looked like 40 percent shows what it really made.',
          '/features#job-costing-month-end-close-and-payments',
          'See job costing',
        ],
        [
          'Materials received but not billed',
          'On accrual books, shingles delivered before the supply-house invoice are accrued from a card at month-end, and the entry reverses on the 1st, so March’s roofs carry March’s materials.',
          '/features#purchasing-and-truck-stock',
          'See purchase orders',
        ],
        [
          'A chart of accounts that sees insurance work',
          'Start from the roofing template: insurance claim revenue apart from supplements, claims receivable apart from homeowner A/R, and dumpsters and permits as job costs instead of overhead.',
          '/blog/roofing-chart-of-accounts',
          'See the roofing chart',
        ],
      ]}
      reportAsk="show me the P&L by job this year, lowest margin first"
      reportFollowUp="Change it by asking (“only jobs over $20,000”)."
      guides={[
        ['Roofing chart of accounts, with a free CSV template', '/blog/roofing-chart-of-accounts', '57 numbered accounts: replacement, repair, insurance and supplements apart, and COGS built around materials by the square, sub crews and haul-off.'],
        ['General contractor chart of accounts', '/blog/general-contractor-chart-of-accounts', 'For roofers who also take on siding, gutters and remodel work.'],
        ['Dealer financing and your job margin', '/blog/dealer-financing-job-margin', 'Why a financed job made less than the invoice says, and how to book the fee.'],
        ['Contractor or employee?', '/blog/contractor-or-employee-trade-shop', 'How to tell whether a crew you pay by the square is a sub or on payroll.'],
      ]}
      faqH2="What roofing contractors ask first."
      faqs={[
        {
          question: 'Do I have to give up the software we sell and measure roofs in?',
          answer:
            'No. Keep the tools your reps use to measure and sell. Poof is where the books live: the bank, the bills, the invoices, the deposits, the job P&L and the close. If you’d rather quote in Poof, its quotes take options, deposits, payment schedules and photos, and an accepted quote becomes the job. Moving from QuickBooks starts from a trial balance export, with customers, vendors, open invoices and bills.',
        },
        {
          question: 'How do insurance jobs show up in the books?',
          answer:
            'With the roofing chart of accounts, claim revenue and supplement revenue are separate income accounts and the carrier’s balance sits in its own receivable, apart from homeowner A/R. Each insurance roof is still a job with its own P&L, so you see what storm work paid next to retail work.',
        },
        {
          question: 'Our crews are subs paid by the square. Does that work?',
          answer:
            'Yes. A crew’s bill goes on the job it was for, as subcontract labor, so it counts against that roof’s margin and not your overhead. Poof requests the crew’s W-9 at the first payment and files their 1099s in January.',
        },
        { question: 'What does it cost?', answer: COST_ANSWER('quotes and deposits, purchase orders, change orders, per-job P&L') },
        { question: 'Can someone just do the books for us?', answer: PERSON_ANSWER },
        {
          question: 'Who is this for?',
          answer:
            'Residential and light commercial roofing contractors doing replacements, repairs and storm work, from an owner-and-one-crew shop to several crews and a sales team.',
        },
      ]}
    />
  )
}
