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
        description: "Automatically categorizes bank transactions using the BRAID engine that learns your business patterns"
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
      },
      {
        title: "AI Recurring Charge Detection",
        description: "Automatic detection of recurring transactions with frequency analysis (weekly, biweekly, monthly, quarterly, annual), confidence scoring, and next payment date prediction"
      },
      {
        title: "Receipt & Invoice Scanning (OCR)",
        description: "Upload photos of receipts and invoices for automatic data extraction, vendor identification, category suggestion, and duplicate detection. Supports HEIC/HEIF images"
      },
      {
        title: "Smart Transaction Matching",
        description: "AI-powered matching between invoices and bank deposits, bills and payments, credit notes and overpayments, with partial payment support and confidence-based recommendations"
      },
      {
        title: "AI-Guided Onboarding",
        description: "Preston walks new users through setup, analyzes uploaded documents, generates your chart of accounts, and calculates opening balances"
      }
    ]
  },
  {
    name: "Invoicing & Payments",
    icon: "invoice",
    features: [
      {
        title: "Professional Invoicing",
        description: "Create, customize, and send invoices with PDF export, email delivery, custom branding/logo, and line-item tax and discounts"
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
      },
      {
        title: "Customer Management",
        description: "Full customer database with contact info, billing/shipping addresses, and customer sales reporting"
      }
    ]
  },
  {
    name: "Expense & Bill Management",
    icon: "expense",
    features: [
      {
        title: "Expense Tracking",
        description: "Track expenses with receipt uploads, category management, and detailed reporting"
      },
      {
        title: "Mileage Tracking",
        description: "Built-in mileage calculation for business travel expenses"
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
        description: "Connect to 12,000+ financial institutions via Plaid for automatic transaction syncing of the last 30 days"
      },
      {
        title: "Bank Statement Import",
        description: "Upload CSV or PDF bank statements (up to 25MB) with intelligent column mapping, transaction extraction, duplicate prevention, and batch import preview. Use this for transactions older than 30 days"
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
        title: "12 Financial Reports",
        description: "Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail, AR Aging, AP Aging, Customer Sales, Vendor Expenses, Sales by Product/Service, and Expenses by Category"
      },
      {
        title: "Financial Import",
        description: "Bulk import chart of accounts, transactions, customers/vendors, and invoices from Excel, CSV, or PDF"
      },
      {
        title: "Accrual & Cash Basis",
        description: "Toggle between accrual and cash basis reporting"
      },
      {
        title: "Recurring Journal Entry Templates",
        description: "Set up recurring entries (daily, weekly, monthly, quarterly, annually) with timezone-aware automatic posting"
      },
      {
        title: "Reversing Journal Entries",
        description: "Automatically create reversing entries for accrual adjustments"
      }
    ]
  },
  {
    name: "Team & Security",
    icon: "security",
    features: [
      {
        title: "Team Management",
        description: "Invite team members with role-based access control — 5 roles: Owner, Admin, Accountant, Bookkeeper, and Viewer"
      },
      {
        title: "Two-Factor Authentication",
        description: "TOTP-based MFA with backup codes"
      },
      {
        title: "Audit Logs",
        description: "Timestamped audit trail of all user actions"
      },
      {
        title: "Session Management",
        description: "View and manage active sessions across devices"
      },
      {
        title: "GDPR/CCPA Account Deletion",
        description: "Full data removal on request for privacy compliance"
      },
      {
        title: "Email Verification",
        description: "Secure account verification and email change confirmation"
      },
      {
        title: "Role-Based Permissions (RBAC)",
        description: "26 granular permissions across financial, invoicing, customer management, and admin categories"
      }
    ]
  },
  {
    name: "Productivity & Workflow",
    icon: "productivity",
    features: [
      {
        title: "Dashboard with KPIs",
        description: "Financial overview with cash flow charts, profit/loss tracking, and top expense categories"
      },
      {
        title: "Global Search",
        description: "Search across transactions, invoices, bills, and expenses"
      },
      {
        title: "Notification Center",
        description: "In-app and email notifications for categorization, invoice reminders, bill due dates, trial expiration, and more"
      },
      {
        title: "Transaction Approval Workflows",
        description: "Review and approve automated transactions before they post"
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
    answer: "Poof uses the BRAID engine to analyze your bank transactions and automatically assign them to the correct categories in your chart of accounts. The AI learns your business patterns over time, improving accuracy with every correction you make. It also detects recurring charges and matches transactions to invoices and bills automatically."
  },
  {
    question: "Can I send invoices with Poof?",
    answer: "Yes. Poof includes full invoicing with PDF generation, email delivery, custom branding, payment tracking, credit notes, and a products/services catalog. You can track invoice status (draft, sent, paid, overdue) and view customer payment history."
  },
  {
    question: "Does Poof connect to my bank?",
    answer: "Yes. Poof connects to over 12,000 financial institutions in the US via Plaid, syncing the last 30 days of transactions. For older transactions, you can upload CSV or PDF bank statements. You can manage multiple bank accounts and credit cards from one dashboard."
  },
  {
    question: "What reports does Poof generate?",
    answer: "Poof generates 12 financial reports: Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail, AR Aging, AP Aging, Customer Sales, Vendor Expenses, Sales by Product/Service, and Expenses by Category. You can toggle between accrual and cash basis, select custom date ranges, and export to PDF or Excel."
  },
  {
    question: "Is Poof secure?",
    answer: "Yes. All data is encrypted in transit via HTTPS/TLS. Poof includes two-factor authentication (TOTP-based MFA with backup codes), role-based access controls with 5 roles and 26 granular permissions, audit logging, session management, and email verification. Bank connections are read-only through Plaid — Poof never stores your bank login credentials or has the ability to move money."
  },
  {
    question: "How does Poof compare to QuickBooks?",
    answer: "Poof is built specifically for small businesses that want AI-powered automation without complexity. Unlike QuickBooks, Poof includes a built-in AI assistant (Preston), receipt scanning with OCR, recurring charge detection, smart transaction matching, and generates your chart of accounts automatically. Poof costs $29/month vs QuickBooks Simple Start at $38/month."
  },
  {
    question: "Can my accountant access Poof?",
    answer: "Yes. Poof supports team management with role-based access control. You can invite your accountant or bookkeeper with a specific role (Owner, Admin, Accountant, Bookkeeper, or Viewer) so they can review your books, run reports, and make adjustments as needed."
  },
  {
    question: "What is AI bookkeeping?",
    answer: "AI bookkeeping uses artificial intelligence to automate routine bookkeeping tasks like categorizing transactions, scanning receipts, matching payments to invoices, and generating financial reports. Instead of manually entering data, AI learns your business patterns and handles the work automatically — saving small business owners hours every week."
  },
  {
    question: "What's the difference between bookkeeping and accounting?",
    answer: "Bookkeeping is the day-to-day recording of financial transactions — categorizing expenses, reconciling bank statements, and maintaining accurate records. Accounting is the higher-level analysis, reporting, and tax preparation based on those records. Poof automates the bookkeeping so you or your accountant can focus on the accounting."
  }
]
