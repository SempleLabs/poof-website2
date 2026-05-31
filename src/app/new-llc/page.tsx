import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bookkeeping for New LLCs & First-Time Business Owners | Poof',
  description: 'Just started an LLC? Set up your books the right way from day one. AI-powered bookkeeping that handles categorization, reconciliation, and reporting automatically.',
  keywords: 'new LLC bookkeeping, how to set up bookkeeping for LLC, new business accounting, first-time business owner bookkeeping, LLC bookkeeping software',
  alternates: {
    canonical: 'https://www.poofai.com/new-llc',
  },
  openGraph: {
    title: 'Bookkeeping for New LLCs & First-Time Business Owners | Poof',
    description: 'Just formed your LLC? Get your books set up in 5 minutes with AI-powered bookkeeping.',
    url: 'https://www.poofai.com/new-llc',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Just started an LLC? Your books don\'t have to be the hard part.',
    highlightedWord: 'don\'t have to be the hard part',
    subheadline: 'We\'ll analyze your financial setup, show you what you need (and what you don\'t), and give you a clear plan to keep your books clean from day one — before bad habits start.',
    ctaText: 'Apply for Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The New Business Owner Problem',
    items: [
      'You formed your LLC but have no idea how to set up bookkeeping',
      'You\'re mixing personal and business expenses because you haven\'t separated them yet',
      'Tax obligations, deductions, and quarterly payments are confusing and stressful',
      'Everyone says "just use QuickBooks" but it\'s overwhelming and expensive',
      'You\'re shoving receipts in a folder and hoping your accountant can sort it out later',
      'You don\'t know what a chart of accounts is — and you shouldn\'t have to',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'Business Setup Review', description: 'Are your business and personal finances properly separated? We\'ll check and fix it if not.' },
      { label: 'Chart of Accounts Setup', description: 'AI generates the right account categories for your specific business type — no accounting knowledge needed.' },
      { label: 'Expense & Deduction Audit', description: 'Find tax deductions you\'re already eligible for but probably missing — home office, mileage, software, meals.' },
      { label: 'Tool Recommendation', description: 'Stop paying for tools you don\'t need. We\'ll show you the minimum stack to keep clean books.' },
      { label: 'Automation Setup Plan', description: 'Connect your bank, auto-categorize transactions, and set up invoicing so bookkeeping runs itself from day one.' },
      { label: '30-Day Foundation Plan', description: 'A step-by-step plan: week 1 separate your accounts, week 2 connect everything, week 4 your books are running on autopilot.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We help new business owners who want clean books without the learning curve.' },
      { number: '2', title: 'Share your current setup', description: 'Tell us what you\'re working with — bank accounts, existing tools, how you\'re tracking things now. No judgment.' },
      { number: '3', title: 'Receive your setup analysis', description: 'Get a clear report on what you need, what you don\'t, and exactly how to set up your books the right way.' },
      { number: '4', title: 'Decide on next steps', description: 'Set it up yourself with our plan, or let Poof handle everything automatically for $29/mo.' },
    ],
  },
  socialProof: {
    title: 'What New Business Owners Are Saying',
    items: [],
  },
  cta: {
    headline: 'Start Your Business With Clean Books',
    subheadline: 'Don\'t wait until tax season to figure this out. Apply now and get your bookkeeping set up the right way from the start.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  faqs: [
    { question: 'I just formed my LLC — when should I actually start bookkeeping?', answer: 'Start the day your business has its first dollar in or out, including formation fees and startup costs. Tracking from day one means a clean record at tax time and no scramble to reconstruct months of transactions later. Our free guide on setting up bookkeeping for a new LLC walks through the first steps.' },
    { question: 'Do I really need a separate business bank account for my LLC?', answer: 'Yes. Keeping business and personal money in one account (commingling funds) can weaken the liability protection your LLC provides — sometimes called piercing the corporate veil. A dedicated business checking account keeps your books clean and your personal assets better separated. We are not a law firm, so confirm specifics with an attorney.' },
    { question: 'Do I need an EIN to set up my books?', answer: 'You can apply for an EIN for free directly from the IRS, and most banks require one to open a business account. You do not strictly need it to begin tracking transactions, but getting it early lets you separate finances and stay organized from the start. Poof does not file paperwork or give legal advice on formation.' },
    { question: 'Should a new LLC use cash or accrual accounting?', answer: 'Most brand-new, single-owner LLCs start with cash-basis accounting because it is simpler — you record income when money lands and expenses when you pay them. Some businesses with inventory or higher revenue use accrual. A CPA can confirm the right fit, and Poof works with whichever method you choose.' },
    { question: 'What does the free financial analysis on this page include, and how fast do I hear back?', answer: 'It is a no-cost operational review of your setup — account separation, chart of accounts, missed deductions, and a 30-day foundation plan. Apply using the form below; spots are limited, and results typically come back within about 5 to 7 days. It is not a CPA audit or tax filing service.' },
    { question: 'How much does Poof cost after I set up my books?', answer: 'Poof is flat $29 a month with all 69 features included — no tiers, add-ons, or surprise upgrades — plus a 30-day free trial that needs no credit card. New users can get a launch special of $14.50 a month for the first three months. It connects read-only to 12,000+ banks through Plaid; note that Poof does not run payroll or file taxes.' },
  ],
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function NewLlcPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="new-llc" />
      <Footer />
    </main>
  )
}
