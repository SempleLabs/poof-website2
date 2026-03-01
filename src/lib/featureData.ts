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
        description: "Automatically categorizes bank transactions using the BRAID engine that learns your business patterns over time"
      },
      {
        title: "Preston AI Assistant",
        description: "Built-in AI bookkeeper that lives in the sidebar, is always one click away, and is context-aware — he knows your company name, industry, business type, location, and timezone"
      },
      {
        title: "AI Chart of Accounts Generation",
        description: "Generates a customized chart of accounts based on your business type, industry, and size — no manual setup required"
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
      },
      {
        title: "AI Budget & Forecast Generation",
        description: "Describe your goal in plain English (e.g., '20% revenue growth') and AI builds line items, allocations, and 12-month cash flow projections automatically"
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
        description: "Issue credit notes for returns, adjustments, or overpayments with automatic application to outstanding invoices"
      },
      {
        title: "Payment Tracking & Payment Receipts",
        description: "Track invoice status (draft, sent, paid, overdue) with customer payment history and automatic payment receipt generation"
      },
      {
        title: "Products & Services Catalog",
        description: "Manage your product/service catalog for quick invoice line items with saved pricing and descriptions"
      },
      {
        title: "Customer Management",
        description: "Full customer database with contact info, billing/shipping addresses, and customer sales reporting"
      },
      {
        title: "Recurring Invoices",
        description: "Set up weekly, monthly, quarterly, or yearly invoice schedules with auto-generation and auto-send — never miss a billing cycle"
      },
      {
        title: "Automated Invoice Follow-ups",
        description: "Configurable payment reminders at due date, 3, 7, 14, and 30 days past due with smart pause on payment — stop chasing late payments manually"
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
        description: "Maintain vendor profiles with contact info, payment terms, and 1099 tracking"
      },
      {
        title: "Transaction Matching",
        description: "Match bank transactions to expenses, bills, and invoices for accurate reconciliation and clean books"
      }
    ]
  },
  {
    name: "Banking & Reconciliation",
    icon: "bank",
    features: [
      {
        title: "Bank Connection",
        description: "Connect to 12,000+ financial institutions via Plaid for automatic syncing of the last 30 days of transactions — no manual entry needed"
      },
      {
        title: "Bank Statement Import",
        description: "Upload CSV or PDF bank statements (up to 25MB) with AI-powered parsing, intelligent column mapping, duplicate prevention, and batch import preview. Use this for transactions older than the Plaid sync window"
      },
      {
        title: "Bank Reconciliation",
        description: "Multi-step reconciliation wizard with deposit tracking, reconciliation reports, and complete history"
      },
      {
        title: "Auto-Reconciliation",
        description: "Opt-in automatic reconciliation on a weekly or monthly schedule with notifications — your books stay balanced without lifting a finger"
      },
      {
        title: "Deposits",
        description: "Record and track deposits with automatic matching to bank transactions and invoices"
      },
      {
        title: "Multi-Account Support",
        description: "Manage multiple bank accounts and credit cards from one unified dashboard"
      }
    ]
  },
  {
    name: "Accounting & Reporting",
    icon: "report",
    features: [
      {
        title: "Double-Entry Accounting",
        description: "Full general ledger with manual journal entries and recurring templates for accurate, audit-ready books"
      },
      {
        title: "13 Financial Reports",
        description: "Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail, AR Aging, AP Aging, Customer Sales, Vendor Expenses, Sales by Product/Service, Expenses by Category, and Budget vs Actual"
      },
      {
        title: "Financial Import",
        description: "Bulk import chart of accounts, transactions, customers/vendors, and invoices from Excel, CSV, or PDF"
      },
      {
        title: "Accrual & Cash Basis Toggle",
        description: "Switch between accrual and cash basis reporting with a single click"
      },
      {
        title: "Recurring Journal Entry Templates",
        description: "Set up recurring entries (daily, weekly, monthly, quarterly, annually) with timezone-aware automatic posting"
      },
      {
        title: "Reversing Journal Entries",
        description: "Automatically create reversing entries for accrual adjustments at period end"
      }
    ]
  },
  {
    name: "Budgeting & Forecasting",
    icon: "budget",
    features: [
      {
        title: "Budget Creation",
        description: "Create budgets manually or let AI generate one from a natural language goal — tell Poof '20% revenue growth' and get a complete budget in seconds"
      },
      {
        title: "Budget Lifecycle Management",
        description: "Move budgets through Draft → Active → Locked → Archived stages with clone support for quick iteration"
      },
      {
        title: "Variance Dashboard",
        description: "Budget vs actual comparison with bar charts, percent variance, and status indicators — on track, approaching, over budget, or critical"
      },
      {
        title: "Cash Flow Forecasting",
        description: "AI-generated 12-month cash flow projections with confidence bands, seasonal adjustments, and rolling forecast refresh"
      },
      {
        title: "Budget Alerts",
        description: "Proactive spending alerts when you're approaching or exceeding budget thresholds — catch overruns before they become problems"
      }
    ]
  },
  {
    name: "Team & Security",
    icon: "security",
    features: [
      {
        title: "Team Management",
        description: "Invite team members with 5 roles: Owner, Admin, Accountant, Bookkeeper, and Viewer"
      },
      {
        title: "Two-Factor Authentication",
        description: "TOTP-based MFA with QR code setup and 8 backup codes for account recovery"
      },
      {
        title: "Audit Logs",
        description: "SOC 2 compliant audit trail with timestamped logging of all user actions and PII masking"
      },
      {
        title: "Session Management",
        description: "30-minute timeout with active session viewer — monitor and revoke sessions across devices"
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
        title: "Drag-and-Drop Dashboard",
        description: "Customizable dashboard with reorderable KPI tiles — cash flow charts, P&L tracking, top expense categories, budget status, and forecast summary"
      },
      {
        title: "Global Search",
        description: "Search across transactions, invoices, bills, and expenses instantly"
      },
      {
        title: "Notification Center",
        description: "In-app and email notifications for categorization, invoice reminders, bill due dates, budget alerts, and more"
      },
      {
        title: "Transaction Approval Workflows",
        description: "Review and approve automated transactions before they post to your books"
      },
      {
        title: "Command Bar (Cmd+K)",
        description: "Navigate anywhere in Poof instantly with natural language — type what you need and get there in one keystroke"
      }
    ]
  },
  {
    name: "Preston AI Capabilities",
    icon: "preston",
    features: [
      {
        title: "Business-Context-Aware Chat",
        description: "Preston knows your company name, industry, business type, location, and timezone — every response is tailored to your specific business"
      },
      {
        title: "Books Health Check & Month-End Close",
        description: "Ask Preston to audit your books for missing categorizations, unreconciled transactions, and open items — then get step-by-step guidance through month-end close"
      },
      {
        title: "Invoice & Payment Management",
        description: "Create invoices, edit records, and record payments through conversation — tell Preston 'we received two checks covering invoices 1001 and 1003' and he handles the rest, including journal entries"
      },
      {
        title: "Budgeting & Forecasting Guidance",
        description: "Ask Preston about your budget variance, spending trends, or cash flow outlook — get instant answers with data-backed insights"
      },
      {
        title: "Recurring Charge Analysis",
        description: "Ask Preston about your recurring charges, subscription costs, and payment patterns — he surfaces insights from your transaction history"
      },
      {
        title: "Chart of Accounts Setup",
        description: "Upload your existing chart of accounts, set it up manually, let AI auto-generate one, or have Preston guide you through it step by step"
      }
    ]
  }
]

export const faqData = [
  {
    question: "What is Poof?",
    answer: "Poof is an AI-powered bookkeeping platform built for small businesses. It automates transaction categorization, invoicing, expense tracking, bank reconciliation, budgeting, cash flow forecasting, and financial reporting — so you spend less time on books and more time growing your business."
  },
  {
    question: "How does Poof's AI categorization work?",
    answer: "Poof uses the BRAID engine to analyze your bank transactions and automatically assign them to the correct categories in your chart of accounts. The AI learns your business patterns over time, improving accuracy with every correction you make. It also detects recurring charges and matches transactions to invoices and bills automatically."
  },
  {
    question: "Can I send invoices with Poof?",
    answer: "Yes. Poof includes full invoicing with PDF generation, email delivery, custom branding, payment tracking, credit notes, and a products/services catalog. You can also set up recurring invoices on weekly, monthly, quarterly, or yearly schedules with automated follow-up reminders for overdue payments."
  },
  {
    question: "Does Poof connect to my bank?",
    answer: "Yes. Poof connects to over 12,000 financial institutions in the US via Plaid, syncing the last 30 days of transactions. For older transactions, you can upload CSV or PDF bank statements. You can manage multiple bank accounts and credit cards from one dashboard."
  },
  {
    question: "What reports does Poof generate?",
    answer: "Poof generates 13 financial reports: Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail, AR Aging, AP Aging, Customer Sales, Vendor Expenses, Sales by Product/Service, Expenses by Category, and Budget vs Actual. You can toggle between accrual and cash basis, select custom date ranges, and export to PDF or Excel."
  },
  {
    question: "Does Poof have budgeting and forecasting?",
    answer: "Yes. Create budgets manually or describe your goal in plain English (e.g., '20% revenue growth') and AI builds the budget for you. Poof includes a variance dashboard with budget vs actual comparison, 12-month AI-generated cash flow forecasting with confidence bands, and proactive budget alerts when you're approaching spending thresholds."
  },
  {
    question: "Is Poof secure?",
    answer: "Yes. All data is encrypted in transit via HTTPS/TLS. Poof includes two-factor authentication (TOTP-based MFA with backup codes), role-based access controls with 5 roles and 26 granular permissions, SOC 2 compliant audit logging with PII masking, session management, and email verification. Bank connections are read-only through Plaid — Poof never stores your bank login credentials or has the ability to move money."
  },
  {
    question: "How does Poof compare to QuickBooks?",
    answer: "Poof is built specifically for small businesses that want AI-powered automation without complexity. Unlike QuickBooks, Poof includes Preston — an AI bookkeeper that records payments, updates records, and generates reports through conversation. Poof also offers AI-powered budgeting and cash flow forecasting, recurring invoices with automated follow-ups, auto-reconciliation, receipt scanning with OCR, recurring charge detection, smart transaction matching, and a drag-and-drop customizable dashboard. Poof starts at $14.50/month (all features included) vs QuickBooks Simple Start at $38/month with tiered pricing."
  },
  {
    question: "Can my accountant access Poof?",
    answer: "Yes. Poof supports team management with role-based access control. You can invite your accountant or bookkeeper with a specific role (Owner, Admin, Accountant, Bookkeeper, or Viewer) so they can review your books, run reports, and make adjustments as needed — with 26 granular permissions to control exactly what they can access."
  },
  {
    question: "What is AI bookkeeping?",
    answer: "AI bookkeeping uses artificial intelligence to automate routine bookkeeping tasks like categorizing transactions, scanning receipts, matching payments to invoices, generating budgets, forecasting cash flow, and creating financial reports. Instead of manually entering data, AI learns your business patterns and handles the work automatically — saving small business owners hours every week."
  },
  {
    question: "What's the difference between bookkeeping and accounting?",
    answer: "Bookkeeping is the day-to-day recording of financial transactions — categorizing expenses, reconciling bank statements, and maintaining accurate records. Accounting is the higher-level analysis, reporting, and tax preparation based on those records. Poof automates the bookkeeping so you or your accountant can focus on the accounting."
  },
  {
    question: "Does Poof support recurring invoices?",
    answer: "Yes. Set up recurring invoices on weekly, monthly, quarterly, or yearly schedules. Poof auto-generates and auto-sends invoices on schedule, and includes automated follow-up reminders at due date, 3, 7, 14, and 30 days past due — with smart pause when payment is received."
  },
  {
    question: "Can Poof forecast my cash flow?",
    answer: "Yes. Poof generates AI-powered 12-month cash flow projections with confidence bands, seasonal adjustments, and rolling forecast refresh. See where your cash is headed and make informed decisions about spending, hiring, and growth."
  }
]
