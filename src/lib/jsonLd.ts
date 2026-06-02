export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Poof',
    url: 'https://www.poofai.com',
    logo: 'https://www.poofai.com/poof-logo.png',
    description: 'Bookkeeping that does itself. AI categorizes transactions, reconciles accounts, and closes your books — 69 features, 13 reports, $29/mo.',
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
    description: 'Bookkeeping that does itself. AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again. 69 features including budgeting, forecasting, invoicing, estimates, and 13 financial reports.',
    url: 'https://www.poofai.com',
    offers: {
      '@type': 'Offer',
      price: '29',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: 'https://www.poofai.com/pricing'
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
      'Report Drill-Down',
      'Shareable Report URLs',
      'Scheduled Report Delivery',
      'AI-Powered Budget Creation',
      'Budget Lifecycle Management',
      'Budget vs Actual Variance Dashboard',
      'AI Cash Flow Forecasting (12-month projections)',
      'Budget Alerts',
      'Team Management with RBAC (5 roles, 26 permissions)',
      'Two-Factor Authentication',
      'Audit Logs with PII Masking',
      'Session Management',
      'Personalized Dashboard with AI Daily Briefing',
      'Global Search',
      'Notification Center',
      'Transaction Approval Workflows',
      'Command Bar (Cmd+K)',
      'Business-Context-Aware AI Chat',
      'Books Health Check & Month-End Close Guidance',
      'Account Search & Creation',
      'Journal Entry Creation with Account Validation',
      'AI Recurring Journal Entry Setup',
      'Invoice, Estimate & Credit Note Creation via AI',
      'Record Creation via Natural Language',
      'Record Updates via AI',
      'Financial Report Generation via AI',
      'Bank Statement PDF Import via AI Chat',
      'Guided Onboarding Walkthrough',
      'File Attachment Handling',
      'AI Chat Folders & Multi-Session Conversations'
    ]
  }
}

export function getSpendScoreToolSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Spend Score Generator',
    url: 'https://www.poofai.com/spend-score',
    description: 'Upload a bank statement (CSV, PDF, or image) and get your free AI-powered Spend Score. AI categorizes your transactions, scores your spending habits, and generates a personalized report with an infographic — in under 60 seconds.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'AI transaction categorization into 15 spending categories',
      'Bank statement parsing (CSV, PDF, image)',
      'AI-generated spending score and financial narrative',
      'AI-generated infographic',
      'Spending breakdown with donut chart',
      'Income vs expense analysis',
      'Top spending category identification',
      'OCR for bank statement images and PDFs',
    ],
    creator: {
      '@type': 'Organization',
      name: 'Poof',
      url: 'https://www.poofai.com',
    },
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Austin Semple',
    jobTitle: 'CEO & Founder',
    description:
      'Founder of Poof. Former controller with 10+ years of audit and controller experience building and running the books for small service businesses.',
    url: 'https://www.poofai.com/about',
    worksFor: {
      '@type': 'Organization',
      name: 'Poof',
      url: 'https://www.poofai.com',
    },
    knowsAbout: [
      'Bookkeeping',
      'Accounting',
      'Financial controllership',
      'Auditing',
      'Small business finance',
      'Tax preparation',
    ],
  }
}

export function getServiceSchema(opts: {
  name: string
  description: string
  price: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Bookkeeping service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'Organization',
      name: 'Poof',
      url: 'https://www.poofai.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    offers: {
      '@type': 'Offer',
      price: opts.price,
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: opts.url,
    },
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
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
