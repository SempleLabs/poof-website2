import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'QuickBooks Alternative for Small Business | Poof',
  description: 'Frustrated with QuickBooks? Get a free financial analysis that shows you exactly what you\'re overpaying for and how to simplify your bookkeeping.',
  alternates: {
    canonical: 'https://www.poofai.com/quickbooks-alternative',
  },
  openGraph: {
    title: 'QuickBooks Alternative for Small Business | Poof',
    description: 'Same power, fraction of the cost, none of the complexity. See why small businesses are switching from QuickBooks to Poof.',
    url: 'https://www.poofai.com/quickbooks-alternative',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'QuickBooks is overkill. Your bookkeeping doesn\'t have to be this hard.',
    highlightedWord: 'doesn\'t have to be this hard',
    subheadline: 'We\'ll analyze your current setup to show you what you\'re overpaying for, what\'s overcomplicating your workflow, and how to get clean books in a fraction of the time.',
    ctaText: 'Apply for Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The QuickBooks Problem',
    items: [
      'You\'re paying for features you never use and don\'t understand',
      'Simple tasks feel like they require an accounting degree',
      'Prices keep going up every year with no added value',
      'Your books are still messy because QuickBooks doesn\'t do the work for you',
      'You need a bookkeeper just to operate the software',
      'Reports are confusing and don\'t tell you what you actually need to know',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'Current Tool Audit', description: 'See exactly what you\'re paying for in QuickBooks and what you actually use.' },
      { label: 'Workflow Complexity Review', description: 'Identify steps in your bookkeeping process that are unnecessarily complicated.' },
      { label: 'Cost Comparison', description: 'Side-by-side breakdown of what you\'re spending now vs. what you\'d spend with Poof.' },
      { label: 'Data Migration Plan', description: 'A clear path to move your books off QuickBooks without losing anything.' },
      { label: 'Automation Opportunity Map', description: 'See which manual tasks QuickBooks makes you do that Poof handles automatically.' },
      { label: '30-Day Transition Plan', description: 'Step-by-step roadmap to switch from QuickBooks to automated bookkeeping.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We help small businesses that are fed up with overpriced, overcomplicated bookkeeping.' },
      { number: '2', title: 'Share your financial data securely', description: 'Connect your QuickBooks account or upload your data. Everything is encrypted and confidential.' },
      { number: '3', title: 'Receive your analysis', description: 'Get a clear report showing what you can simplify, save, and automate — with a migration plan.' },
      { number: '4', title: 'Decide on next steps', description: 'Switch to Poof at $29/mo or use the insights to optimize your current setup.' },
    ],
  },
  socialProof: {
    title: 'What QuickBooks Switchers Are Saying',
    items: [],
  },
  cta: {
    headline: 'There\'s a Simpler Way to Do Your Books',
    subheadline: 'Limited spots available each month. Apply now and see how much time and money you can save.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  faqs: [
    { question: 'Can I move my QuickBooks Online history into Poof without losing my past transactions?', answer: 'Yes. The transition plan walks you through exporting your existing transaction history so it comes with you, rather than starting from a blank slate. You keep your record of where your business has been.' },
    { question: 'Can I run QuickBooks and Poof side by side while I switch over?', answer: 'You can. Many people keep QuickBooks active for a billing cycle or two while they get comfortable in Poof and confirm the numbers match before fully cutting over. There is a 30-day free trial with no credit card, so you can run them in parallel at no extra cost.' },
    { question: 'What does Poof include that QuickBooks Online charges extra for or locks behind a higher plan?', answer: 'Poof is one flat plan at $29/mo with all 69 features and 13 reports included, no tiers or add-ons. With QuickBooks Online, deeper reporting and capabilities typically mean upgrading from Simple Start ($38/mo) to Essentials ($75/mo) or Plus ($115/mo). Note that neither Poof nor QuickBooks files your taxes, and Poof does not run payroll.' },
    { question: 'I am not an accountant. Is Poof easier to learn than QuickBooks?', answer: 'That is the point. QuickBooks was built for accountants, so everyday tasks can feel like they need an accounting degree. Poof is AI bookkeeping that does the categorizing for you, so there is far less software to learn. You connect your accounts and review, rather than operate a complex tool.' },
    { question: 'Can I bring over my chart of accounts and opening balances?', answer: 'Yes. Your existing chart of accounts and opening balances can be imported so your books continue cleanly from where QuickBooks left off, instead of forcing you to rebuild your categories from scratch.' },
    { question: 'How does the free financial analysis on this page work?', answer: 'Apply using the form below and, if accepted, securely share your data. We review your current QuickBooks setup and return results in roughly 5 to 7 days. Spots are limited each month, and this is an operational financial analysis, not a CPA audit or tax filing.' },
    { question: 'What does Poof itself cost, and is there a trial?', answer: 'Poof is $29/mo flat for everything, with a 30-day free trial and no credit card required to start. There is also a launch special of $14.50/mo for your first three months. Your bank connections run read-only through Plaid, which supports over 12,000 banks.' },
  ],
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function QuickBooksAlternativePage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="quickbooks-alternative" />
      <Footer />
    </main>
  )
}
