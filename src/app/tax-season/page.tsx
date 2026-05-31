import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Behind on Your Bookkeeping? Get Caught Up Fast | Poof',
  description: 'Haven\'t done your bookkeeping all year? Poof analyzes your bank statements, categorizes every transaction, and gets your books tax-ready in days, not weeks.',
  keywords: 'catch up bookkeeping, behind on bookkeeping, tax season bookkeeping, last minute bookkeeping, get books ready for taxes',
  alternates: {
    canonical: 'https://www.poofai.com/tax-season',
  },
  openGraph: {
    title: 'Behind on Your Bookkeeping? Get Caught Up Fast | Poof',
    description: 'Tax deadline approaching and your books are a mess? We\'ll get them sorted in days.',
    url: 'https://www.poofai.com/tax-season',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Your books are a mess. Tax deadline is coming. Let\'s fix this.',
    highlightedWord: 'Let\'s fix this',
    subheadline: 'We\'ll analyze your entire year of transactions, categorize everything, identify deductions you\'re missing, and get your books tax-ready — in days, not weeks.',
    ctaText: 'Get Caught Up Now',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'Sound Familiar?',
    items: [
      'You haven\'t categorized a single transaction all year and tax season is here',
      'Bank statements, receipts, and invoices are scattered across apps, folders, and email',
      'You\'re dreading the call with your accountant because you have nothing organized',
      'You know you\'re missing deductions but don\'t have time to find them all',
      'Last year you filed late (or extended) because your books weren\'t ready',
      'You keep saying "I\'ll set up a system" but it never happens',
    ],
  },
  whatsIncluded: {
    title: 'What Your Catch-Up Analysis Covers',
    items: [
      { label: 'Full-Year Transaction Review', description: 'Every transaction from the past 12 months categorized and organized — income, expenses, transfers, all of it.' },
      { label: 'Missing Deduction Scan', description: 'AI identifies deductible expenses you probably missed — home office, mileage, software, equipment, meals, and more.' },
      { label: 'Income Reconciliation', description: 'Match your bank deposits to your invoices and 1099s so nothing is missing or double-counted.' },
      { label: 'P&L and Tax Summary', description: 'A clean Profit & Loss statement your accountant can actually use — no more shoebox of receipts.' },
      { label: 'Ongoing Automation Plan', description: 'So you never have to do this again. Auto-categorization, bank sync, and monthly reporting on autopilot.' },
      { label: 'Accountant-Ready Package', description: 'Everything organized in a format your CPA or tax preparer needs — hand it off and you\'re done.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply now — seriously, now', description: 'Fill out the form below. The sooner you start, the less stressful this gets. We\'ve seen it all.' },
      { number: '2', title: 'Share your bank statements', description: 'Upload CSVs or PDFs, or connect your bank directly. We\'ll pull everything in and start sorting.' },
      { number: '3', title: 'Receive your catch-up analysis', description: 'Get your full year categorized, deductions identified, and books organized into a tax-ready package.' },
      { number: '4', title: 'Never do this again', description: 'Set up Poof for $29/mo and your books stay clean automatically. Next tax season, your accountant gets a clean handoff.' },
    ],
  },
  socialProof: {
    title: 'What Procrastinators Are Saying',
    items: [],
  },
  cta: {
    headline: 'Stop Stressing. Start Here.',
    subheadline: 'Every day you wait makes it worse. Apply now and we\'ll get your books in order before the deadline.',
    buttonText: 'Get Caught Up Now',
    buttonHref: '#apply',
  },
  faqs: [
    { question: 'I\'m months behind and my books are a mess. Can you catch me up and reconcile everything before the deadline?', answer: 'Yes. We pull in your full year of transactions from bank statements or a direct bank connection, categorize everything, and match deposits and withdrawals against your income and expenses so the totals tie out — typically in days, not weeks. Even if you haven\'t touched your books all year, we start from your raw statements, so there\'s nothing for you to untangle first. Our Tax Season Bookkeeping Checklist on the blog walks through the same catch-up steps in more detail.' },
    { question: 'What documents will my CPA or tax preparer need from me?', answer: 'At minimum, a clean, properly categorized Profit & Loss statement, your reconciled bank and card activity for the year, and records of income like 1099s. The catch-up analysis assembles all of that into an accountant-ready package you can hand off — Poof gets the books ready, then you or your CPA files the return.' },
    { question: 'Do I need to issue 1099-NEC forms, and when are they due?', answer: 'Generally you must issue a 1099-NEC to any non-incorporated contractor or vendor you paid $600 or more for services during the year, and they\'re due to both the recipient and the IRS by January 31. As we clean up and categorize your year, we surface contractor and vendor payments so you can spot who likely needs one — though we don\'t file the forms for you.' },
    { question: 'What is the free financial analysis, and how do I get one?', answer: 'It\'s a complimentary, operational review of your year\'s numbers that scans for commonly missed deductions like home office, mileage, software, and equipment — not a CPA audit or tax filing. Apply using the form on this page; spots are limited, and once you share your statements we typically return your results in about 5 to 7 days.' },
    { question: 'How much does Poof cost after the analysis, and is there a trial?', answer: 'Poof is $29/month flat for all 69 features — no tiers, no add-ons — with a launch special of $14.50/month for your first 3 months. There\'s a 30-day free trial with no credit card required, so you can keep your books clean automatically and never fall this far behind again.' },
  ],
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function TaxSeasonPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="tax-season" />
      <Footer />
    </main>
  )
}
