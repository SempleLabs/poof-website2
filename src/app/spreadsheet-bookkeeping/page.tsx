import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Stop Doing Bookkeeping in Spreadsheets | Poof',
  description: 'Still tracking finances in Excel or Google Sheets? Get an analysis that shows what it\'s costing you and how to automate everything in minutes.',
  keywords: 'spreadsheet bookkeeping, Excel bookkeeping, Google Sheets accounting, automate bookkeeping, bookkeeping automation',
  openGraph: {
    title: 'Stop Doing Bookkeeping in Spreadsheets | Poof',
    description: 'Your spreadsheet is costing you hours every week. See what automated bookkeeping looks like.',
    url: 'https://www.poofai.com/spreadsheet-bookkeeping',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Your spreadsheet isn\'t bookkeeping. It\'s a ticking time bomb.',
    highlightedWord: 'ticking time bomb',
    subheadline: 'We analyze your current spreadsheet setup to show you what it\'s really costing you in time, errors, and missed deductions — then give you a plan to automate everything.',
    ctaText: 'Apply for Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The Spreadsheet Problem',
    items: [
      'You built a system that works until it doesn\'t — and tax season is when it breaks',
      'Manually entering transactions takes hours every week that could go to clients',
      'One wrong formula or missed row means your numbers are wrong and you don\'t know it',
      'No automatic categorization — you\'re sorting every transaction by hand',
      'Bank reconciliation means comparing your spreadsheet to your bank line by line',
      'You can\'t generate a real P&L, balance sheet, or cash flow statement from a spreadsheet',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'Time Cost Analysis', description: 'Calculate how many hours per month your spreadsheet bookkeeping actually takes — and what that time is worth.' },
      { label: 'Error & Risk Assessment', description: 'Identify where your spreadsheet is most likely wrong: missed transactions, formula errors, uncategorized expenses.' },
      { label: 'Tax Readiness Check', description: 'See if your records are clean enough for tax filing or if you\'re leaving deductions on the table.' },
      { label: 'Automation Mapping', description: 'Every manual task you do in your spreadsheet matched to the Poof feature that eliminates it.' },
      { label: 'Migration Plan', description: 'A clear path to move from your spreadsheet to automated bookkeeping without losing any historical data.' },
      { label: '30-Day Transition Plan', description: 'Step-by-step roadmap: week 1 you set up, week 2 you\'re automated, week 4 your books are cleaner than they\'ve ever been.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We help business owners who\'ve outgrown spreadsheets but don\'t want the complexity of QuickBooks.' },
      { number: '2', title: 'Share your current setup', description: 'Send us your spreadsheet and connect your bank. We\'ll see exactly what you\'re dealing with.' },
      { number: '3', title: 'Receive your analysis', description: 'Get a clear report on what your spreadsheet bookkeeping is costing you in time, risk, and missed opportunities.' },
      { number: '4', title: 'Decide on next steps', description: 'Keep the spreadsheet with better practices, or let Poof automate everything for $29/mo. Your choice.' },
    ],
  },
  socialProof: {
    title: 'What Former Spreadsheet Users Are Saying',
    items: [],
  },
  cta: {
    headline: 'Find Out What Your Spreadsheet Is Really Costing You',
    subheadline: 'Limited spots available each month. Apply now and see how much time and money you can save by automating your books.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function SpreadsheetBookkeepingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="spreadsheet-bookkeeping" />
      <Footer />
    </main>
  )
}
