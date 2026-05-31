import type { Metadata } from 'next'
import Header from '@/components/Header'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bookkeeping for Content Creators & Influencers | Poof',
  description: 'YouTube, TikTok, podcast, and social media creators: see your real income after platform fees, sponsorships, and taxes. AI bookkeeping built for creator businesses.',
  keywords: 'content creator bookkeeping, influencer accounting, YouTube bookkeeping, creator tax deductions, social media business finances',
  alternates: {
    canonical: 'https://www.poofai.com/creators',
  },
  openGraph: {
    title: 'Bookkeeping for Content Creators & Influencers | Poof',
    description: 'Multiple revenue streams, 1099s everywhere, business vs personal expenses — we sort it all out automatically.',
    url: 'https://www.poofai.com/creators',
    siteName: 'Poof',
    type: 'website',
  },
}

const config = {
  hero: {
    headline: 'Creators: you have 6 income streams and zero idea what you actually keep.',
    highlightedWord: 'zero idea what you actually keep',
    subheadline: 'We analyze your creator finances — sponsorships, ad revenue, merch, affiliates, platform payouts — to show you what you\'re really earning, what you\'re overspending on, and what you\'re missing at tax time.',
    ctaText: 'Apply for Analysis',
    ctaHref: '#apply',
  },
  painPoints: {
    title: 'The Creator Finance Problem',
    items: [
      'Revenue comes from 5+ places — YouTube, Patreon, sponsorships, merch, affiliates — and none of them talk to each other',
      'You don\'t know your real income after platform fees, agent cuts, and self-employment tax',
      'Business and personal expenses are hopelessly tangled in one bank account',
      '1099s show up in January and you have no idea if the numbers are right',
      'You\'re missing deductions on equipment, software, home office, travel, and meals',
      'You hired an accountant but they don\'t understand the creator business model',
    ],
  },
  whatsIncluded: {
    title: 'What Your Analysis Covers',
    items: [
      { label: 'Revenue Stream Breakdown', description: 'Every income source mapped and totaled — see which platforms and deals actually make you money after fees.' },
      { label: 'True Take-Home Calculation', description: 'Your real income after platform fees, agent/manager cuts, and estimated self-employment tax.' },
      { label: 'Expense & Deduction Audit', description: 'Find every deductible expense you\'re missing — equipment, software, home office, travel, meals, internet, phone.' },
      { label: 'Business vs Personal Separation', description: 'A clear plan to untangle your finances so tax time isn\'t a nightmare.' },
      { label: 'Tax Readiness Check', description: 'Are you setting aside enough for quarterly taxes? Are your 1099s going to match your records? We\'ll find out.' },
      { label: '30-Day Action Plan', description: 'Step-by-step: separate accounts, connect platforms, auto-categorize expenses, and set up quarterly tax savings.' },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { number: '1', title: 'Apply and get accepted', description: 'Fill out the form below. We work with creators who are earning real money but don\'t have their finances figured out yet.' },
      { number: '2', title: 'Share your financial data', description: 'Connect your bank, share platform payouts, sponsorship invoices — whatever you have. We\'ll work with it.' },
      { number: '3', title: 'Receive your creator finance analysis', description: 'Get a clear report showing your true take-home, missing deductions, and exactly where money is leaking.' },
      { number: '4', title: 'Decide on next steps', description: 'Use the plan yourself or let Poof automate your bookkeeping — auto-categorize every transaction, track deductions, generate reports — for $29/mo.' },
    ],
  },
  socialProof: {
    title: 'What Creators Are Saying',
    items: [],
  },
  cta: {
    headline: 'Find Out What You\'re Really Earning',
    subheadline: 'Limited spots each month. Apply now and finally get clarity on your creator finances.',
    buttonText: 'Apply for Analysis',
    buttonHref: '#apply',
  },
  faqs: [
    { question: 'Can Poof track all my different income streams in one place?', answer: 'Yes. Connect your bank and Poof automatically pulls in payouts from YouTube ad revenue, Patreon, sponsorships, merch sales, and affiliate programs through one read-only Plaid connection covering 12,000+ banks. You\'ll see every revenue source mapped and totaled instead of guessing across a dozen platform dashboards.' },
    { question: 'How do I separate business and personal expenses if everything\'s in one account?', answer: 'Poof auto-categorizes each transaction as business or personal as it imports, so you can start cleaning things up immediately even before you open a dedicated business account. Since the income Poof reads from your bank already reflects platform fees, agent cuts, and processing costs, your reports also show your true net take-home rather than inflated platform gross numbers.' },
    { question: 'What creator deductions can Poof help me capture?', answer: 'Poof flags and categorizes common creator write-offs like cameras and gear, editing and design software, your home office, internet and phone, travel, and meals tied to your work. It tracks these throughout the year so you\'re not scrambling to reconstruct them in April.' },
    { question: 'Does Poof handle my 1099s and quarterly self-employment taxes?', answer: 'Poof keeps your income and expense records organized so they match the 1099s you receive and so you can see what to set aside for quarterly estimated and self-employment taxes. Note that Poof does not file taxes or give formal tax advice — it gives you and your accountant clean, reliable numbers to work from.' },
    { question: 'What is the free analysis, and what does Poof cost after?', answer: 'The free creator finance analysis is an operational review — you apply, spots are limited, and you get your results in about 5-7 days; it is not a CPA audit or tax filing. If you continue with the software, Poof is $29/mo flat (currently $14.50/mo for your first 3 months) with all 69 features and 13 reports included, no tiers or add-ons, plus a 30-day free trial with no credit card.' },
  ],
  complianceNote: 'This is not a CPA audit, attestation, tax, or assurance service. It is an operational financial analysis designed to help business owners understand their numbers and identify improvement opportunities.',
}

export default function CreatorsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />
      <LandingPageTemplate config={config} />
      <IntakeForm source="creators" />
      <Footer />
    </main>
  )
}
