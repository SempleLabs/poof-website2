import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bookkeeping for Service Businesses | Poof',
  description: 'Agencies, consultants, and service pros: get a financial analysis that uncovers where you\'re leaking profit and wasting time on manual bookkeeping.',
  alternates: {
    canonical: 'https://www.poofai.com/service-businesses',
  },
  openGraph: {
    title: 'Bookkeeping for Service Businesses | Poof',
    description: 'Invoicing, expense tracking, and bookkeeping in one place. Built for service businesses.',
    url: 'https://www.poofai.com/service-businesses',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Service businesses: your books shouldn\'t take more time than your clients.',
    highlightedWord: 'more time than your clients',
    subheadline: 'We analyze your finances to uncover billing gaps, expense bloat, and manual processes that are costing you time and money — then give you a plan to fix it.',
    ctaText: 'Apply for Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The Service Business Finance Problem',
    items: [
      'Invoicing clients and chasing payments eats up your week',
      'Recurring expenses and subscriptions are piling up unchecked',
      'Books are months behind and reconciliation is a nightmare',
      'No clear view of profitability by client or project',
      'Bookkeeper or accountant is expensive and still needs your input',
      'Cash flow is unpredictable — feast or famine every month',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'Revenue & Billing Review', description: 'See where revenue is coming from and identify gaps in your billing process.' },
      { label: 'Client Profitability Breakdown', description: 'Know which clients drive profit and which ones cost you more than they\'re worth.' },
      { label: 'Recurring Expense Audit', description: 'Every subscription, tool, and vendor evaluated for ROI and potential savings.' },
      { label: 'Cash Flow Timing Analysis', description: 'Map your cash inflows vs. outflows so you can plan ahead instead of reacting.' },
      { label: 'Automation Opportunity Map', description: 'Identify invoicing, categorization, and reconciliation tasks that can run on autopilot.' },
      { label: '30-Day Action Plan', description: 'A clear, prioritized roadmap to clean up your books and streamline operations.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We work with agencies, consultants, and service businesses of all sizes.' },
      { number: '2', title: 'Share your financial data securely', description: 'Connect your bank accounts or accounting software. All data is encrypted and confidential.' },
      { number: '3', title: 'Receive your analysis', description: 'Get a detailed report with actionable insights, plus an optional Loom walkthrough.' },
      { number: '4', title: 'Decide on next steps', description: 'Implement the fixes yourself or let Poof handle your bookkeeping for $29/mo.' },
    ],
  },
  socialProof: {
    title: 'What Service Business Owners Are Saying',
    items: [],
  },
  cta: {
    headline: 'Spend Less Time on Books, More on Clients',
    subheadline: 'Limited spots available each month. Apply now and get clarity on your service business finances within days.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  faqs: [
    { question: 'Can I see profitability by client, project, or job?', answer: 'Yes. Poof categorizes your income and expenses so you can see which clients and projects actually make money and which ones quietly drain your time. That visibility is exactly what the free analysis on this page surfaces first.' },
    { question: 'Will this help me get invoices paid faster and stay on top of AR aging?', answer: 'Poof keeps your books current so you always know who owes you, how much, and how overdue it is. Clean, up-to-date records make it far easier to chase late payments and spot accounts receivable that are slipping into trouble.' },
    { question: 'Should service businesses use cash or accrual accounting?', answer: 'Many small service providers start on cash basis because it\'s simpler, but accrual gives a truer picture when you bill on retainers or long projects. Poof tracks your transactions cleanly either way, and your analysis will flag which approach fits how you actually get paid.' },
    { question: 'How do I handle client deposits and retainers I haven\'t earned yet?', answer: 'Deposits and retainers are unearned revenue until the work is delivered, so counting them as income too early overstates your profit. Poof helps you keep that money clearly tracked so your reports reflect what you\'ve truly earned, not just what\'s in the bank.' },
    { question: 'Does Poof help me keep subcontractor payments organized for 1099s?', answer: 'Yes. Poof tracks and categorizes what you pay each subcontractor across the year, so the totals you need for 1099 reporting are easy to pull. Note that Poof is bookkeeping software and does not file taxes or run payroll for you.' },
    { question: 'What does the free financial analysis include, and how fast do I get it?', answer: 'It\'s an operational financial analysis covering your billing, client profitability, recurring expenses, cash flow timing, and automation opportunities, with results typically in about 5 to 7 days. Spots are limited each month, so apply using the form below to be considered.' },
    { question: 'How much is Poof, and is there a free trial?', answer: 'Poof is a flat $29 a month with all 69 features included, no tiers or add-ons, plus a launch special of $14.50 a month for your first 3 months. You can start with a 30-day free trial and no credit card required.' },
  ],
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function ServiceBusinessesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="service-businesses" />
      <Footer />
    </main>
  )
}
