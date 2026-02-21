export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Poof',
    url: 'https://poof.ai',
    logo: 'https://poof.ai/poof-logo.png',
    description: 'AI-powered bookkeeping platform for small businesses',
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
    description: 'AI-powered bookkeeping platform that automates transaction categorization, invoicing, expense tracking, bank reconciliation, and financial reporting for small businesses.',
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
      'Preston AI Assistant',
      'AI Chart of Accounts Generation',
      'Automated Daily Bookkeeping',
      'AI Recurring Charge Detection',
      'Receipt & Invoice Scanning (OCR)',
      'Smart Transaction Matching',
      'AI-Guided Onboarding',
      'Professional Invoicing & Credit Notes',
      'Payment Tracking',
      'Products & Services Catalog',
      'Customer Management',
      'Expense Tracking',
      'Mileage Tracking',
      'Bill Management',
      'Vendor Management',
      'Bank Connection (12,000+ institutions)',
      'Bank Statement Import (CSV/PDF)',
      'Bank Reconciliation & Deposits',
      'Multi-Account Support',
      'Double-Entry Accounting',
      '12 Financial Reports',
      'Financial Import (Excel, CSV, PDF)',
      'Accrual & Cash Basis Reporting',
      'Recurring Journal Entry Templates',
      'Reversing Journal Entries',
      'Team Management with RBAC (5 roles, 26 permissions)',
      'Two-Factor Authentication',
      'Audit Logs',
      'Session Management',
      'Dashboard with KPIs',
      'Global Search',
      'Notification Center',
      'Transaction Approval Workflows'
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
