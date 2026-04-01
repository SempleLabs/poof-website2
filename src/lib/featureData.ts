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
        title: "Poof AI Assistant",
        description: "Built-in AI assistant with 30+ tools that lives in the sidebar, is always one click away, and is context-aware — it knows your company name, industry, business type, location, and timezone. Supports multi-session conversations with folder organization"
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
        description: "Poof walks new users through setup, analyzes uploaded documents, generates your chart of accounts, and calculates opening balances"
      },
      {
        title: "AI Budget & Forecast Generation",
        description: "Describe your goal in plain English (e.g., '20% revenue growth') and AI builds line items, allocations, and 12-month cash flow projections automatically"
      }
    ]
  },
  {
    name: "Poof AI Capabilities",
    icon: "poof",
    features: [
      {
        title: "Business-Context-Aware Chat",
        description: "Poof knows your company name, industry, business type, location, and timezone — every response is concise, action-oriented, and tailored to your specific business. Supports multi-session conversations and folder organization"
      },
      {
        title: "Books Health Check & Month-End Close",
        description: "Ask Poof to audit your books for missing categorizations, unreconciled transactions, and open items — then get step-by-step guidance through month-end close"
      },
      {
        title: "Invoice, Estimate & Credit Note Creation",
        description: "Create invoices, estimates, and credit notes through conversation — Poof creates, edits, and sends them via email. Tell Poof 'we received two checks covering invoices 1001 and 1003' and it handles the rest"
      },
      {
        title: "Record Creation via Natural Language",
        description: "Create expenses, bills, deposits, customers, vendors, and products through conversation — tell Poof what you need and it creates the record instantly"
      },
      {
        title: "Record Updates",
        description: "Update existing invoices, customers, vendors, expenses, bills, and transactions through conversation — no need to navigate to each record manually"
      },
      {
        title: "Budgeting & Forecasting Guidance",
        description: "Ask Poof about your budget variance, spending trends, or cash flow outlook — get instant answers with data-backed insights"
      },
      {
        title: "Recurring Charge Analysis",
        description: "Ask Poof about your recurring charges, subscription costs, and payment patterns — it surfaces insights from your transaction history"
      },
      {
        title: "Chart of Accounts Setup",
        description: "Upload your existing chart of accounts, set it up manually, let AI auto-generate one, or have Poof guide you through it step by step"
      },
      {
        title: "Account Search & Creation",
        description: "Poof can look up and create chart of accounts entries autonomously — no need to provide account numbers"
      },
      {
        title: "Journal Entry Creation with Account Validation",
        description: "Poof verifies that accounts exist in your chart of accounts before posting journal entries — preventing errors and ensuring accuracy"
      },
      {
        title: "Recurring Journal Entry Setup",
        description: "Tell Poof about depreciation, amortization, rent, or insurance and it calculates periodic amounts, creates the necessary accounts, and sets up recurring journal entry templates automatically"
      },
      {
        title: "Financial Report Generation",
        description: "Ask Poof to generate any of the 13 financial reports — Income Statement, Balance Sheet, Cash Flow, and more — instantly from conversation"
      },
      {
        title: "Bank Statement PDF Import via Chat",
        description: "Upload a bank statement PDF to Poof and it parses the transactions automatically, presents a summary, and imports them to your selected bank account with AI categorization"
      },
      {
        title: "Guided Onboarding Walkthrough",
        description: "Poof navigates the UI, highlights elements, and walks new users through setup step by step — from connecting your bank to categorizing your first transactions"
      },
      {
        title: "File Attachment Handling",
        description: "Receipts, invoices, and documents uploaded in chat are automatically scanned and attached to any record Poof creates"
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
        title: "Estimates & Quotes",
        description: "Create professional estimates and quotes, send them to clients for approval, and convert approved estimates to invoices with one click. Track status through Draft, Sent, Approved, Declined, and Converted stages — with PDF export, email delivery, and custom branding"
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
        description: "Connect to 12,000+ financial institutions via Plaid for automatic syncing of the last 30 days of transactions, with optional liability accounts for broader institution support"
      },
      {
        title: "Bank Statement Import",
        description: "Upload CSV or PDF bank statements (up to 25MB) with AI-powered parsing, intelligent column mapping, bank name auto-detection, duplicate prevention, and batch import preview — also importable via AI chat by uploading a PDF"
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
        title: "Report Drill-Down",
        description: "Click any account in Balance Sheet, Income Statement, or Trial Balance to see underlying journal entries — then click a journal entry to edit it directly"
      },
      {
        title: "Shareable Report URLs",
        description: "Report filter state — date range, basis, and hide-zero-balances — persists in the URL so you can bookmark and share filtered reports"
      },
      {
        title: "Scheduled Report Delivery",
        description: "Automated email delivery of any of the 13 reports on a daily, weekly, monthly, or quarterly schedule as PDF or CSV to multiple recipients"
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
        description: "Set up recurring entries (daily, weekly, monthly, quarterly, annually) with timezone-aware automatic posting and reversing journal entry support"
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
        title: "Personalized Dashboard",
        description: "AI-generated daily briefing with 'Reply to Poof' action, time-aware greeting, 4 animated KPIs with Y-axis dollar labels, proactive 'Needs Your Attention' alerts, drag-and-drop reorderable tiles with staggered animations, actionable empty states, quick-action buttons, semantic color coding, and a global date filter"
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
      },
      {
        title: "AI Chat Folders",
        description: "Organize AI conversations into folders — create, rename, delete, and move sessions between folders with drag-and-drop on desktop or a move menu on mobile. Collapsible sections with persistent state"
      }
    ]
  },
]

export interface FaqItem {
  question: string
  answer: string
  category: string
}

export const faqData: FaqItem[] = [
  {
    question: "What is Poof?",
    answer: "Poof is an AI-powered bookkeeping platform built for small businesses. It automates transaction categorization, invoicing, expense tracking, bank reconciliation, budgeting, cash flow forecasting, and financial reporting — so you spend less time on books and more time growing your business.",
    category: "General"
  },
  {
    question: "How does Poof's AI categorization work?",
    answer: "Poof uses the BRAID engine to analyze your bank transactions and automatically assign them to the correct categories in your chart of accounts. The AI learns your business patterns over time, improving accuracy with every correction you make. It also detects recurring charges and matches transactions to invoices and bills automatically.",
    category: "AI & Automation"
  },
  {
    question: "Can I send invoices with Poof?",
    answer: "Yes. Poof includes full invoicing with PDF generation, email delivery, custom branding, payment tracking, credit notes, and a products/services catalog. You can start with an estimate or quote, convert it to an invoice when your client approves, and set up recurring invoices on weekly, monthly, quarterly, or yearly schedules with automated follow-up reminders for overdue payments.",
    category: "Invoicing & Payments"
  },
  {
    question: "Does Poof connect to my bank?",
    answer: "Yes. Poof connects to over 12,000 financial institutions in the US via Plaid, syncing the last 30 days of transactions. For older transactions, you can upload CSV or PDF bank statements. You can manage multiple bank accounts and credit cards from one dashboard.",
    category: "Getting Started"
  },
  {
    question: "What reports does Poof generate?",
    answer: "Poof generates 13 financial reports: Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail, AR Aging, AP Aging, Customer Sales, Vendor Expenses, Sales by Product/Service, Expenses by Category, and Budget vs Actual. You can toggle between accrual and cash basis, select custom date ranges, and export to PDF or Excel.",
    category: "General"
  },
  {
    question: "Does Poof have budgeting and forecasting?",
    answer: "Yes. Create budgets manually or describe your goal in plain English (e.g., '20% revenue growth') and AI builds the budget for you. Poof includes a variance dashboard with budget vs actual comparison, 12-month AI-generated cash flow forecasting with confidence bands, and proactive budget alerts when you're approaching spending thresholds.",
    category: "AI & Automation"
  },
  {
    question: "Is Poof secure?",
    answer: "Yes. All data is encrypted in transit via HTTPS/TLS. Poof includes two-factor authentication (TOTP-based MFA with backup codes), role-based access controls with 5 roles and 26 granular permissions, SOC 2 compliant audit logging with PII masking, session management, and email verification. Bank connections are read-only through Plaid — Poof never stores your bank login credentials or has the ability to move money.",
    category: "Security & Data"
  },
  {
    question: "How does Poof compare to QuickBooks?",
    answer: "Poof is built specifically for small businesses that want AI-powered automation without complexity. Unlike QuickBooks, Poof includes a built-in AI assistant with 30+ tools that creates records, updates invoices, generates all 13 reports, and imports bank statement PDFs — all through conversation. Poof also offers AI-powered budgeting and cash flow forecasting, recurring invoices with automated follow-ups, estimates, auto-reconciliation, receipt scanning with OCR, recurring charge detection, smart transaction matching, report drill-down, scheduled report delivery, and a personalized dashboard with AI daily briefing. Poof starts at $14.50/month (all 69 features included) vs QuickBooks Simple Start at $38/month with tiered pricing.",
    category: "Pricing & Plans"
  },
  {
    question: "Can my accountant access Poof?",
    answer: "Yes. Poof supports team management with role-based access control. You can invite your accountant or bookkeeper with a specific role (Owner, Admin, Accountant, Bookkeeper, or Viewer) so they can review your books, run reports, and make adjustments as needed — with 26 granular permissions to control exactly what they can access.",
    category: "General"
  },
  {
    question: "What is AI bookkeeping?",
    answer: "AI bookkeeping uses artificial intelligence to automate routine bookkeeping tasks like categorizing transactions, scanning receipts, matching payments to invoices, generating budgets, forecasting cash flow, and creating financial reports. Instead of manually entering data, AI learns your business patterns and handles the work automatically — saving small business owners hours every week.",
    category: "AI & Automation"
  },
  {
    question: "What's the difference between bookkeeping and accounting?",
    answer: "Bookkeeping is the day-to-day recording of financial transactions — categorizing expenses, reconciling bank statements, and maintaining accurate records. Accounting is the higher-level analysis, reporting, and tax preparation based on those records. Poof automates the bookkeeping so you or your accountant can focus on the accounting.",
    category: "General"
  },
  {
    question: "Does Poof support recurring invoices?",
    answer: "Yes. Set up recurring invoices on weekly, monthly, quarterly, or yearly schedules. Poof auto-generates and auto-sends invoices on schedule, and includes automated follow-up reminders at due date, 3, 7, 14, and 30 days past due — with smart pause when payment is received.",
    category: "Invoicing & Payments"
  },
  {
    question: "Can I create estimates and quotes in Poof?",
    answer: "Yes. Create professional estimates, send them to clients, and track status — Draft, Sent, Approved, Declined, or Converted. When approved, convert to an invoice with one click. The full workflow — Estimate → Approval → Invoice → Payment — is built in.",
    category: "Invoicing & Payments"
  },
  {
    question: "Can Poof forecast my cash flow?",
    answer: "Yes. Poof generates AI-powered 12-month cash flow projections with confidence bands, seasonal adjustments, and rolling forecast refresh. See where your cash is headed and make informed decisions about spending, hiring, and growth.",
    category: "AI & Automation"
  },
  {
    question: "Can AI do my bookkeeping for me?",
    answer: "Yes. AI bookkeeping tools like Poof can handle most of your day-to-day bookkeeping automatically — categorizing transactions, reconciling bank accounts, scanning receipts, matching payments to invoices, generating financial reports, and even creating budgets from plain-English goals. You still review and approve the work, but AI eliminates 90% of the manual data entry. For tax filing and complex accounting decisions, you can invite your accountant to collaborate inside Poof.",
    category: "AI & Automation"
  },
  {
    question: "What's the best bookkeeping app for freelancers?",
    answer: "For freelancers, the best bookkeeping app is one that automates the tedious work and doesn't require accounting knowledge. Poof is built specifically for solo founders and freelancers — AI categorizes your transactions automatically, sends recurring invoices on autopilot, scans receipts from your phone, and generates 13 financial reports including P&L and cash flow statements. It's $29/mo with everything included (no tiers), compared to QuickBooks which starts at $38/mo and locks features behind higher plans.",
    category: "General"
  },
  {
    question: "Do I need QuickBooks for my small business?",
    answer: "No. QuickBooks is the default choice, but it's not the only option — and it's often more complex and expensive than small businesses need. QuickBooks starts at $38/mo with tiered pricing that locks features behind $65 and $200/mo plans. Alternatives like Poof offer AI-powered automation (transaction categorization, receipt scanning, recurring charge detection, budgeting) at $29/mo with every feature included in one plan. If you've tried QuickBooks and found it overwhelming, Poof is designed to be simpler.",
    category: "Pricing & Plans"
  },
  {
    question: "How do I automate my bookkeeping?",
    answer: "To automate your bookkeeping: (1) Connect your bank accounts so transactions sync automatically, (2) Use AI-powered software like Poof to categorize transactions, detect recurring charges, and match payments to invoices, (3) Set up recurring invoices so billing happens on autopilot, (4) Upload receipts for automatic OCR scanning instead of manual data entry, and (5) Use AI-generated budgets and cash flow forecasts to stay on top of your finances. With Poof, most businesses go from hours of manual bookkeeping to minutes of reviewing AI-categorized transactions.",
    category: "Getting Started"
  },
  {
    question: "Can I do my own bookkeeping without an accountant?",
    answer: "Yes. Many small business owners handle their own bookkeeping using AI-powered tools like Poof. The AI categorizes transactions, reconciles your bank accounts, generates financial reports, and even creates budgets — tasks that traditionally required a bookkeeper. You don't need accounting knowledge because Poof uses plain language, not accounting jargon. For year-end taxes or complex accounting questions, you can invite your accountant into Poof with role-based access so they can review your books and make adjustments.",
    category: "General"
  },
  {
    question: "What's the cheapest QuickBooks alternative?",
    answer: "Poof is $29/mo for all 69 features — compared to QuickBooks Simple Start at $38/mo, Essentials at $65/mo, and Plus at $200/mo. Poof includes features that QuickBooks locks behind higher tiers: AI-powered budgeting, cash flow forecasting, receipt scanning, recurring invoices, auto-reconciliation, and a built-in AI assistant. Poof also offers a 50% launch discount ($14.50/mo for the first 3 months) and a 30-day free trial with no credit card required.",
    category: "Pricing & Plans"
  },
  {
    question: "How much does bookkeeping cost for a small business?",
    answer: "Traditional bookkeeping costs vary widely: hiring a part-time bookkeeper typically runs $500-$2,000/month, while a full-time in-house bookkeeper can cost $3,000-$5,000/month plus benefits. Outsourced bookkeeping firms charge $200-$500/month for basic services. AI-powered bookkeeping software like Poof costs $29/month (or $14.50/month with the launch discount) and handles most of the work automatically — transaction categorization, bank reconciliation, invoicing, receipt scanning, and financial reporting. For most small businesses, Poof replaces the need for a dedicated bookkeeper at a fraction of the cost.",
    category: "Pricing & Plans"
  },
  {
    question: "What's the difference between bookkeeping software and hiring a bookkeeper?",
    answer: "A bookkeeper is a person who manually categorizes transactions, reconciles accounts, and prepares financial reports — typically costing $500-$2,000/month. Bookkeeping software automates those same tasks using AI. With Poof, the AI categorizes your transactions, reconciles your bank accounts, scans receipts, generates 13 financial reports, and even creates budgets from plain-English goals. You still review and approve the work, but the manual data entry is eliminated. Most small businesses save 5-10 hours per week by switching from a manual bookkeeper to AI-powered software like Poof.",
    category: "General"
  },
  {
    question: "Can I switch from QuickBooks to Poof?",
    answer: "Yes. Poof makes it easy to switch from QuickBooks. You can import your existing chart of accounts, customer and vendor lists, and historical transactions via CSV or Excel files. Poof's AI-guided onboarding walks you through the setup process, analyzes your uploaded documents, generates your chart of accounts, and calculates opening balances. Most businesses complete the migration in under an hour. You can also upload PDF bank statements and let the AI parse them directly in chat.",
    category: "Getting Started"
  },
  {
    question: "Does Poof work for restaurants, ecommerce, contractors, and freelancers?",
    answer: "Yes. Poof is designed for all types of small businesses. The AI generates a customized chart of accounts based on your specific business type and industry — whether you run a restaurant, ecommerce store, contracting business, or freelance practice. Poof's BRAID engine learns your unique transaction patterns over time, so it gets smarter about categorizing expenses specific to your industry. Features like receipt scanning, mileage tracking, recurring invoices, and expense categorization are especially valuable for service-based businesses, while inventory-related categorization and sales tracking help retail and ecommerce owners.",
    category: "General"
  },
  {
    question: "How does Poof handle taxes?",
    answer: "Poof keeps your books organized and tax-ready throughout the year, so you're not scrambling at tax time. It automatically categorizes deductible expenses, tracks mileage, generates P&L and Balance Sheet reports that your accountant needs for tax preparation, and maintains a complete audit trail of every transaction. While Poof doesn't file taxes directly, it produces the accurate financial records your CPA or tax preparer requires. You can invite your accountant into Poof with role-based access so they can pull reports, review categorizations, and make adjustments before filing.",
    category: "General"
  },
  {
    question: "Can I import my data from QuickBooks?",
    answer: "Yes. Poof supports importing financial data from QuickBooks and other bookkeeping platforms via CSV, Excel, and PDF files. Export your chart of accounts, transactions, customer lists, and vendor lists from QuickBooks, then upload them into Poof. The AI-guided onboarding process helps you map your existing accounts and calculates opening balances automatically. For bank statements in PDF format, you can upload them directly into the AI chat and Poof will parse and import the transactions for you.",
    category: "Getting Started"
  },
  {
    question: "What happens after the free trial?",
    answer: "Poof offers a 30-day free trial with full access to all 69 features — no credit card required to start. When your trial ends, you can subscribe at $29/month (or $14.50/month with the 50% launch discount for the first 3 months). If you choose not to subscribe, your data remains accessible in read-only mode so you can export your records. There are no long-term contracts — you can cancel anytime and your data stays yours.",
    category: "Pricing & Plans"
  },
  {
    question: "Does Poof work on mobile?",
    answer: "Poof is a web-based application that works on any device with a modern browser — desktop, tablet, or phone. The interface is fully responsive, so you can review transactions, send invoices, scan receipts, chat with the AI assistant, and check your dashboard from your phone. Upload receipt photos directly from your mobile camera for instant OCR scanning and categorization. No app download required — just log in at app.poofai.com from any browser.",
    category: "General"
  },
  {
    question: "How does AI bookkeeping save money?",
    answer: "AI bookkeeping saves money in three ways: it eliminates the cost of a dedicated bookkeeper ($500-$2,000/month), it reduces errors that lead to costly tax mistakes or missed deductions, and it frees up your time to focus on revenue-generating activities. Poof automates transaction categorization, bank reconciliation, receipt scanning, invoice follow-ups, and report generation — tasks that would take a bookkeeper hours each week. At $29/month, Poof replaces thousands of dollars in annual bookkeeping costs while delivering faster, more consistent results.",
    category: "Pricing & Plans"
  },
  {
    question: "Is my financial data safe with AI bookkeeping?",
    answer: "Yes. Poof takes data security seriously. All data is encrypted in transit via HTTPS/TLS, and bank connections go through Plaid with read-only access — Poof never sees or stores your bank login credentials and cannot move money. Poof includes two-factor authentication, role-based access controls with 26 granular permissions, SOC 2 compliant audit logging with PII masking, and session management. Your financial data is never shared with third parties or used to train AI models. You can manage active sessions, revoke access, and export your data at any time.",
    category: "Security & Data"
  }
]
