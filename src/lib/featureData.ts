export interface Feature {
  title: string
  description: string
}

export interface FeatureGroup {
  name: string
  icon: string
  features: Feature[]
}

export const featureGroups: FeatureGroup[] = [
  {
    name: "AI-Powered Automation",
    icon: "ai",
    features: [
      {
        title: "AI Transaction Categorization",
        description: "Automatically categorizes bank transactions using AI that learns your business patterns"
      },
      {
        title: "Preston AI Assistant",
        description: "Built-in AI assistant with specialist agents for accounting, invoicing, expenses, reports, and banking questions"
      },
      {
        title: "AI Chart of Accounts Generation",
        description: "Generates a customized chart of accounts based on your business type"
      },
      {
        title: "Automated Daily Bookkeeping",
        description: "Schedule daily, weekly, or monthly automation runs with email summary reports"
      }
    ]
  },
  {
    name: "Invoicing & Payments",
    icon: "invoice",
    features: [
      {
        title: "Professional Invoicing",
        description: "Create, customize, and send invoices with PDF generation and email delivery"
      },
      {
        title: "Credit Notes",
        description: "Issue credit notes linked to invoices"
      },
      {
        title: "Payment Tracking",
        description: "Track invoice status (draft, sent, paid, overdue) with customer payment history"
      },
      {
        title: "Products & Services Catalog",
        description: "Manage your product/service catalog for quick invoice line items"
      }
    ]
  },
  {
    name: "Expense & Bill Management",
    icon: "expense",
    features: [
      {
        title: "Expense Tracking",
        description: "Track expenses with receipt uploads, mileage tracking, and category management"
      },
      {
        title: "Bill Management",
        description: "Receive, track, and pay vendor bills with AP aging reports"
      },
      {
        title: "Vendor Management",
        description: "Maintain vendor profiles with 1099 tracking"
      },
      {
        title: "Transaction Matching",
        description: "Automatically match bank transactions to invoices and bills"
      }
    ]
  },
  {
    name: "Banking & Reconciliation",
    icon: "bank",
    features: [
      {
        title: "Bank Connection",
        description: "Connect to 12,000+ financial institutions via Plaid for automatic transaction syncing"
      },
      {
        title: "Bank Reconciliation",
        description: "Multi-step reconciliation workflow with history and reports"
      },
      {
        title: "Bank Deposits",
        description: "Track and manage bank deposits"
      },
      {
        title: "Multi-Account Support",
        description: "Manage multiple bank accounts and credit cards"
      }
    ]
  },
  {
    name: "Accounting & Reporting",
    icon: "report",
    features: [
      {
        title: "Double-Entry Accounting",
        description: "Full general ledger with manual journal entries and recurring templates"
      },
      {
        title: "8 Financial Reports",
        description: "Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail, AR Aging, AP Aging"
      },
      {
        title: "Financial Import",
        description: "Import trial balances, P&L statements, and balance sheets from Excel, CSV, or PDF"
      },
      {
        title: "Accrual & Cash Basis",
        description: "Toggle between accrual and cash basis reporting"
      }
    ]
  },
  {
    name: "Team & Security",
    icon: "security",
    features: [
      {
        title: "Team Management",
        description: "Invite team members with role-based access control (Owner, Admin, Accountant, Viewer)"
      },
      {
        title: "Two-Factor Authentication",
        description: "TOTP-based MFA with backup codes"
      },
      {
        title: "Audit Logs",
        description: "SOC 2 compliant audit trail of all user actions"
      },
      {
        title: "Session Management",
        description: "View and manage active sessions across devices"
      }
    ]
  }
]

export const faqData = [
  {
    question: "What is Poof?",
    answer: "Poof is an AI-powered bookkeeping platform built for small businesses. It automates transaction categorization, invoicing, expense tracking, bank reconciliation, and financial reporting — so you spend less time on books and more time growing your business."
  },
  {
    question: "How does Poof's AI categorization work?",
    answer: "Poof uses machine learning to analyze your bank transactions and automatically assign them to the correct categories in your chart of accounts. The AI learns your business patterns over time, improving accuracy with every correction you make. You can also schedule daily, weekly, or monthly automation runs."
  },
  {
    question: "Can I send invoices with Poof?",
    answer: "Yes. Poof includes full invoicing with PDF generation, email delivery, payment tracking, credit notes, and a products/services catalog. You can track invoice status (draft, sent, paid, overdue) and view customer payment history."
  },
  {
    question: "Does Poof connect to my bank?",
    answer: "Yes. Poof connects to over 12,000 financial institutions in the US via Plaid. Transactions sync automatically, and you can manage multiple bank accounts and credit cards from one dashboard."
  },
  {
    question: "What reports does Poof generate?",
    answer: "Poof generates 8 financial reports: Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail, AR Aging, and AP Aging. You can toggle between accrual and cash basis, select custom date ranges, and export to PDF or Excel."
  },
  {
    question: "Is Poof secure?",
    answer: "Yes. Poof uses AES-256 encryption, two-factor authentication (TOTP-based MFA with backup codes), SOC 2 compliant audit logs, and session management. Bank connections are read-only through Plaid — Poof never stores your bank login credentials or has the ability to move money."
  },
  {
    question: "How does Poof compare to QuickBooks?",
    answer: "Poof is built specifically for small businesses that want AI-powered automation without complexity. Unlike QuickBooks, Poof automatically categorizes transactions using AI, includes a built-in AI assistant (Preston), and generates your chart of accounts automatically. QuickBooks requires more manual setup and data entry. Poof costs $29/month vs QuickBooks Simple Start at $30/month."
  },
  {
    question: "Can my accountant access Poof?",
    answer: "Yes. Poof supports team management with role-based access control. You can invite your accountant with a specific role (Owner, Admin, Accountant, or Viewer) so they can review your books, run reports, and make adjustments as needed."
  }
]
