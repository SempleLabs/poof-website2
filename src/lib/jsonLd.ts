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
      'Professional Invoicing',
      'Credit Notes',
      'Payment Tracking',
      'Products & Services Catalog',
      'Expense Tracking',
      'Bill Management',
      'Vendor Management',
      'Transaction Matching',
      'Bank Connection (12,000+ institutions)',
      'Bank Reconciliation',
      'Bank Deposits',
      'Multi-Account Support',
      'Double-Entry Accounting',
      '8 Financial Reports',
      'Financial Import (Excel, CSV, PDF)',
      'Accrual & Cash Basis Reporting',
      'Team Management with RBAC',
      'Two-Factor Authentication',
      'Audit Logs',
      'Session Management'
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
