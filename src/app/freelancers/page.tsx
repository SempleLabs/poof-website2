import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bookkeeping for Freelancers & Solo Founders | Poof',
  description: 'Stop spending nights and weekends on your books. Poof automates categorization, reconciliation, and reporting so you can focus on your business.',
  alternates: {
    canonical: 'https://www.poofai.com/freelancers',
  },
  openGraph: {
    title: 'Bookkeeping for Freelancers & Solo Founders | Poof',
    description: 'Automated bookkeeping built for one-person businesses. Get clean books without the manual work.',
    url: 'https://www.poofai.com/freelancers',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Freelancers: stop doing your own bookkeeping at midnight.',
    highlightedWord: 'stop doing your own bookkeeping',
    subheadline: 'We analyze your finances to uncover where you\'re overspending, under-billing, and wasting time on manual work — then give you a clear plan to fix it.',
    ctaText: 'Apply for Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The Freelancer Finance Problem',
    items: [
      'Revenue is growing but you have no idea where the money goes',
      'Bookkeeping piles up and you dread tax season',
      'Tracking expenses across multiple clients and tools is chaos',
      'You\'re not sure which clients or projects are actually profitable',
      'Invoicing, categorizing, reconciling — it all falls on you',
      'No clear picture of cash flow or what you can afford to invest',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'Income & Expense Breakdown', description: 'See exactly where your money is coming from and where it\'s going each month.' },
      { label: 'Cash Flow Review', description: 'Identify timing gaps between when you invoice and when you get paid.' },
      { label: 'Spend Efficiency Analysis', description: 'Find subscriptions, tools, and costs that can be cut or consolidated.' },
      { label: 'Client & Project Profitability', description: 'Understand which work is worth your time and which is costing you.' },
      { label: 'Automation Opportunity Map', description: 'See which manual bookkeeping tasks can be automated with Poof.' },
      { label: '30-Day Action Plan', description: 'A prioritized plan to clean up your books and keep them clean going forward.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We work with freelancers and solo founders who want clean books without the busywork.' },
      { number: '2', title: 'Share your financial data securely', description: 'Connect your bank accounts or accounting software. All data is encrypted and confidential.' },
      { number: '3', title: 'Receive your analysis', description: 'Get a clear report breaking down your finances with specific, actionable recommendations.' },
      { number: '4', title: 'Decide on next steps', description: 'Implement the fixes yourself or let Poof automate your bookkeeping for $29/mo.' },
    ],
  },
  socialProof: {
    title: 'What Freelancers Are Saying',
    items: [],
  },
  cta: {
    headline: 'Get Your Finances Under Control',
    subheadline: 'Limited spots available each month. Apply now and get clarity on your freelance finances within days.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  faqs: [
    { question: 'I run business and personal spending through one bank account — how do I separate it for my books?', answer: 'Open a dedicated business checking account and route all client payments and business expenses through it going forward. Poof connects to your accounts through Plaid (read-only) and helps you categorize transactions so business and personal spending stay cleanly separated, even while you untangle the old account.' },
    { question: 'How do I track income across multiple clients, and what counts toward a 1099-NEC?', answer: 'Poof pulls every deposit from your connected bank accounts automatically, so income from all your clients sits in one place instead of scattered invoices and spreadsheets. A 1099-NEC reports what a client paid you, and any client who paid you $600 or more generally sends one — but even unreported income still counts, so an accurate record keeps you covered. We don\'t file taxes or give tax advice, so confirm specifics with your tax pro.' },
    { question: 'Do I need to pay quarterly estimated taxes and self-employment tax, and which deductions can I track?', answer: 'No one withholds taxes for you as a freelancer, so the IRS generally expects quarterly estimated payments, plus self-employment tax for Social Security and Medicare. Poof automatically categorizes expenses so common deductions like a home office, software, equipment, and mileage are captured year-round — but we don\'t calculate or file taxes, so work with a tax professional on amounts, deadlines, and what qualifies.' },
    { question: 'Do I really need a bookkeeper, or is software enough for a one-person business?', answer: 'Most solo freelancers don\'t need to pay for a human bookkeeper — Poof automates categorization, reconciliation, and reporting, which covers what a one-person business actually needs across 13 financial reports. If things get complex you can add a professional later, but software handles the day-to-day for $29/mo.' },
    { question: 'What is the free financial analysis, how do I get one, and what does Poof cost after?', answer: 'It\'s a free operational review of your freelance finances — income, expenses, cash flow, and client profitability — delivered as a clear report with a 30-day action plan; it is not a CPA audit or tax filing. Spots are limited each month, so apply through the form on this page, and once you securely share your data results typically come back in about 5 to 7 days. If you then want Poof, it\'s a flat $29/mo for all 69 features (launch special $14.50/mo for your first 3 months) with a 30-day free trial and no credit card required.' },
  ],
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function FreelancersPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="freelancers" />
      <Footer />
    </main>
  )
}
