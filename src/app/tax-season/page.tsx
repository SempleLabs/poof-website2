import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Behind on Your Bookkeeping? Get Caught Up Fast | Poof',
  description: 'Haven\'t done your bookkeeping all year? Poof analyzes your bank statements, categorizes every transaction, and gets your books tax-ready in days, not weeks.',
  keywords: 'catch up bookkeeping, behind on bookkeeping, tax season bookkeeping, last minute bookkeeping, get books ready for taxes',
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
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function TaxSeasonPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="tax-season" />
      <Footer />
    </main>
  )
}
