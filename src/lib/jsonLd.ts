export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Poof',
    url: 'https://poof.ai',
    logo: 'https://poof.ai/poof-logo.png',
    description: 'Bookkeeping that does itself. AI categorizes transactions, reconciles accounts, and closes your books — 60 features, 13 reports, $29/mo.',
    sameAs: [
      'https://twitter.com/poofai',
      'https://linkedin.com/company/poofai'
    ],
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Austin Semple',
      jobTitle: 'CEO & Founder'
    }
  }
}

export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Poof',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'Bookkeeping that does itself. AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again. 60 features including budgeting, forecasting, invoicing, estimates, and 13 financial reports.',
    url: 'https://poof.ai',
    offers: {
      '@type': 'Offer',
      price: '29',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: 'https://poof.ai/pricing'
    },
    featureList: [
      'AI Transaction Categorization',
      'Poof AI Assistant',
      'AI Chart of Accounts Generation',
      'Automated Daily Bookkeeping',
      'AI Recurring Charge Detection',
      'Receipt & Invoice Scanning (OCR)',
      'Smart Transaction Matching',
      'AI-Guided Onboarding',
      'AI Budget & Forecast Generation',
      'Professional Invoicing & Credit Notes',
      'Estimates & Quotes',
      'Recurring Invoices with Auto-Send',
      'Automated Invoice Follow-ups',
      'Payment Tracking & Payment Receipts',
      'Products & Services Catalog',
      'Customer Management',
      'Expense Tracking',
      'Mileage Tracking',
      'Bill Management',
      'Vendor Management',
      'Bank Connection (12,000+ institutions)',
      'Bank Statement Import (CSV/PDF)',
      'Bank Reconciliation',
      'Auto-Reconciliation',
      'Multi-Account Support',
      'Double-Entry Accounting',
      '13 Financial Reports',
      'Financial Import (Excel, CSV, PDF)',
      'Accrual & Cash Basis Reporting',
      'Recurring Journal Entry Templates',
      'Reversing Journal Entries',
      'AI-Powered Budget Creation',
      'Budget Lifecycle Management',
      'Budget vs Actual Variance Dashboard',
      'AI Cash Flow Forecasting (12-month projections)',
      'Budget Alerts',
      'Team Management with RBAC (5 roles, 26 permissions)',
      'Two-Factor Authentication',
      'SOC 2 Audit Logs',
      'Session Management',
      'Personalized Dashboard with Morning Brief',
      'Global Search',
      'Notification Center',
      'Transaction Approval Workflows',
      'Command Bar (Cmd+K)',
      'Business-Context-Aware AI Chat',
      'Books Health Check & Month-End Close Guidance',
      'Account Search & Creation',
      'Journal Entry Creation with Account Validation',
      'AI Recurring Journal Entry Setup'
    ]
  }
}

export function getFaqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}
