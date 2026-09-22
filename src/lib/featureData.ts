export interface Feature {
  title: string
  description: string
}

export interface FeatureGroup {
  name: string
  icon: string
  features: Feature[]
  /** Optional availability caveat rendered with the group (e.g. setup we do for you) */
  note?: string
}

export const featureGroups: FeatureGroup[] = [
  {
    name: "Job Costing, Month-End Close & Payments",
    icon: "jobs",
    features: [
      {
        title: "Job Costing & Per-Job Profitability",
        description: "Tag transactions, bills, and invoices to jobs and see profit per job — know which jobs actually made money, every month. For shops using the receptionist and the technician field link, a completed service call becomes a job on its own, and its revenue, parts, and labor land on it without anyone tagging anything"
      },
      {
        title: "AP Cash Planner",
        description: "Forward-looking view of upcoming bills so you know what's due, when, and whether cash covers it"
      },
      {
        title: "Period Close & Locking",
        description: "Close and lock a month so entries can't change after sign-off, with an immutable trial-balance snapshot"
      },
      {
        title: "AI Close Narrative",
        description: "A plain-English month-end summary of what moved and why, generated automatically with every close"
      },
      {
        title: "Monthly Financial Package",
        description: "One-click close package — P&L, balance sheet, cash flow, and variance — ready to review and send"
      },
      {
        title: "Books-Integrity Checks",
        description: "Automated general-ledger integrity sweep that flags imbalances and posting errors before they become problems"
      },
      {
        title: "Proactive Insights Engine",
        description: "Auto-detected issues and opportunities — margin dips, unusual spend, cash risks — surfaced without being asked"
      },
      {
        title: "Accept Online Payments",
        description: "Customers pay invoices by ACH or card via Stripe; payments reconcile to the ledger automatically"
      },
      {
        title: "Inbound Email Capture",
        description: "Forward receipts and bills to a dedicated Poof address; AI extracts the data and files them"
      },
      {
        title: "Per-Job Labor Allocation",
        description: "Spread technician labor cost across the jobs it was actually spent on, so a job's margin includes the hours — not just the materials"
      },
      {
        title: "Financing Gross-Up",
        description: "When a job is sold through dealer financing, the dealer fee is recognized as a cost of that job instead of quietly inflating its margin"
      },
      {
        title: "Peer Benchmarks on the Per-Job P&L",
        description: "See how a job's margin compares to similar jobs, with the outliers called out"
      },
      {
        title: "Period Tie-Out Engine",
        description: "A standing check dashboard that proves the period actually ties before it's closed — not after. A clean run proves the books as they stood: a transaction reviewed or an entry posted after it turns the step to \u201crun the checks again\u201d rather than reading \u201ctied\u201d off a stale result"
      },
      {
        title: "Accrual Roll-Forward Subledger",
        description: "Deposits, deferrals, and accrued items carried forward period to period with their own schedule"
      },
      {
        title: "Document Playbooks",
        description: "Forwarded files learn per-sender handling, so the second invoice from a supply house files itself the way the first one was corrected"
      },
      {
        title: "Customer Deposits Released on Completion",
        description: "A down payment on an install is held as a liability, not booked as revenue the day it lands, and released to that job's revenue when the job is done. The release previews first, refuses a deposit that isn't categorized as a deposit, and warns if the job was also invoiced"
      },
      {
        title: "Maintenance Plans Earn as Visits Are Performed",
        description: "A prepaid plan sale is deferred, and each performed visit earns its share to the penny — automatically when the tech completes a maintenance visit. A repair call on a plan customer doesn't count, and two open plans on one customer is left for the office to pick. Cancelling is a recorded decision — refund or forfeit — never a silent write-off, and a visit that was both released and invoiced is flagged at month-end close"
      },
      {
        title: "The Close Is a Record",
        description: "Each month\u2019s close is one object: who started it and when, where it stands \u2014 not started, in progress, ready, signed, reopened \u2014 derived from the books, and what it took. Locking the period is the signature; at that moment the close captures its activity (transactions reviewed, entries posted, decisions by a person and by a rule, corrections, hours from start to signature) and a price and tier per close. Reopening keeps the signature on record"
      },
      {
        title: "A Checklist With Due Dates That Ticks Itself",
        description: "A template per organization \u2014 the trades default is 17 tasks dated in business days after month end, signed on day 7. Twelve are evidence-bound: they complete when the books prove them and cannot be ticked by hand, and each open one says why in a sentence and links to the screen that fixes it. Manual tasks are a person\u2019s tick, with who and when. Every close stamps its own copy of the list"
      },
      {
        title: "The Nudge",
        description: "A task past its due date on an open close is an insight, a card in Approvals with a one-tap mark-done for a manual task, and one message per close per day on the channels the shop subscribed to \u2014 Telegram, SMS, Slack, email \u2014 naming every task late on it. The sweep re-reads the books before it decides what is late"
      }
    ]
  },
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
        description: "Built-in AI assistant with 30+ tools that lives in the sidebar, and is context-aware — it knows your company name, industry, business type, location, and timezone. Supports multi-session conversations with folder organization"
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
      },
      {
        title: "Approve Without Leaving the Conversation",
        description: "Ask Poof to invoice someone and the approval card appears in the chat itself \u2014 the same evidence and the same buttons as the inbox. One card, defined once, wherever it turns up. No browser alert asking whether you are sure about a sentence you just read"
      },
      {
        title: "It Shows Its Work While It Works",
        description: "\u201cLooking up invoices \u2014 August 2026.\u201d \u201cPreparing an invoice \u2014 Smith Residential.\u201d Each step arrives as it runs, instead of a silent pause followed by an answer. The steps say preparing, never created, because nothing has been written yet"
      },
      {
        title: "Ask Where Things Stand",
        description: "\u201cIs August ready to close?\u201d \u201cWhich bills are due this week?\u201d \u201cWhat do we owe Ferguson?\u201d \u201cHow did July go?\u201d The close\u2019s status and checklist, transaction search, A/P aging, open bills, the 13-week cash plan, accrual schedules, and a month\u2019s summary are answered from the books \u2014 the model narrates the numbers and never computes new ones"
      },
      {
        title: "Book, Move, or Cancel a Visit From the Chat",
        description: "\u201cBook Smith Tuesday 2pm.\u201d \u201cCan we do Thursday afternoon?\u201d \u201cMove the Rivera visit to Friday.\u201d Open slots and the appointment list answer at once; the booking itself becomes a card, and approving it runs the same handler the phone line runs \u2014 the tech gets the same text, the board updates the same way. No rule can ever approve a visit"
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
        description: "Multi-step wizard with auto-match, hand match and unmatch, a completion report you can export or email, and a history with reopen and delete \u2014 and it works on a phone"
      },
      {
        title: "Auto-Reconciliation",
        description: "Opt-in, weekly or monthly, with notifications. It signs a period only when the difference is under a penny; anything else becomes cards in Approvals, one per uncertain match. It takes the period after the last one completed, so a month it missed is caught up"
      },
      {
        title: "Outstanding Items Carry Forward",
        description: "A check written in July that clears in August is on August\u2019s book side, and a first reconciliation lists what was still open from before it \u2014 never the opening balance, which both sides already agree on. Cleared rows stay cleared when someone later fixes the entry\u2019s memo or date"
      },
      {
        title: "One Figure, On the Screen and In the Record",
        description: "The unexplained difference is statement ending, less the books at period end, plus what is booked but not on the statement, less what is on the statement but not booked. The screen reads it from the server; completion stores the same number; the close\u2019s bank-reconciliation check reads that. A row added mid-reconciliation counts even though auto-match never saw it"
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
        description: "Budget vs actual comparison with bar charts, percent variance, status indicators (on track, approaching, over budget, critical), top variance items with clickable status filters, and monthly spending pace"
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
        description: "Comprehensive audit trail with timestamped logging of all user actions and PII masking"
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
      },
      {
        title: "Bot-Abuse Gate on Registration",
        description: "A Cloudflare Turnstile challenge on public sign-up that stops scraped-address subscription bombing before it reaches your inbox"
      },
      {
        title: "AI Privacy Chokepoint (Gateway)",
        description: "Every model call is PII-redacted before it leaves the process, routed to the configured destination, and logged with destination, model, redaction count, and token usage for the audit trail. Runs automatically — nothing to configure"
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
  {
    name: "AI Receptionist & Dispatch",
    icon: "phone",
    note: "We provision the number and the voice agent for you \u2014 it is not a switch you flip yourself. Customer-facing outbound texts \u2014 booking confirmations, reminders, and \u201cyour tech is on the way\u201d \u2014 are not built yet; the technician does get texted their job. The receptionist does not take payment on the call.",
    features: [
      {
        title: "AI Phone Receptionist",
        description: "Answers the shop's line, knows the shop's name, hours, and service area, understands the caller's problem, and books the job"
      },
      {
        title: "Deterministic Safety Triage",
        description: "Gas smell, carbon monoxide, smoke, sparking, or an active alarm trigger an immediate emergency escalation and a scripted \u201cleave the building, call 911\u201d response. No-heat below 45\u00b0F and no-cool above 95\u00b0F are emergencies too. These are rules in code, not instructions to a language model — the AI narrates the call, it never decides whether something is an emergency"
      },
      {
        title: "Real-Calendar Booking",
        description: "Availability is computed from your technicians, their weekly windows, and their time off, minus existing appointments, respecting drive-time buffer. Skills are a preference, not a gate: a tech tagged for the work is preferred and an untagged tech is next, so a shop that has tagged nobody is never told it has no availability. The database refuses overlapping bookings outright, so two calls arriving at once can't double-book a tech"
      },
      {
        title: "Rule-Based Human Escalation",
        description: "A safety trigger, an after-hours emergency, no slot inside the urgency window, a caller who asks for a person, a repeat caller within 24 hours, a cancellation threat, or low agent confidence all hand the call to a human"
      },
      {
        title: "Multi-Channel Notifications",
        description: "One event fans out to the channels you configure — SMS, email, push, Slack, Telegram, or a webhook — with every delivery attempt logged"
      },
      {
        title: "Dispatch Board, Call Log & Technician Management",
        description: "See the day's board, every call with its transcript, outcome, duration, and cost, and manage who can be dispatched"
      },
      {
        title: "Receptionist Settings",
        description: "Greeting, hours, timezone, service area, urgency SLA windows, booking rules, and notification channels — all configurable for your shop"
      },
      {
        title: "Manual or Automatic Dispatch",
        description: "Two independent switches: whether the AI picks who goes, and whether the system texts them. A shop that wants a human staffing the board keeps the booking and the customer's promised window — the job simply lands under \u201cNeeds a tech\u201d"
      },
      {
        title: "Customer Record on the First Call",
        description: "The caller becomes a customer record when the job is booked, not when they are eventually invoiced — and is matched on the last ten digits of their number, so the same household calling from a different phone format is one customer, not two"
      },
      {
        title: "Automatic Technician Dispatch",
        description: "The assigned tech is texted their job with a link that opens it, and a reschedule re-sends a fresh one. A dispatcher can re-send it by hand from the board at any time"
      },
      {
        title: "Work Spread Evenly Across the Crew",
        description: "When several techs are free for the same slot, the job goes to whoever has the fewest jobs that day, then the fewest that week. No one quietly absorbs every call"
      },
      {
        title: "A Job Nobody Is Going To Raises the Alarm",
        description: "An appointment approaching its start time with no technician assigned escalates to the shop — whether that is because the shop dispatches by hand or because nobody was free when it was booked. Emergencies are always assigned automatically, no matter how the shop has set the switches"
      }
    ]
  },
  {
    name: "Field Service & Job Handoff",
    icon: "field",
    note: "Part of Poof for shops, alongside the AI receptionist \u2014 the same $79 plan. The technician's page needs no account and no app install \u2014 that is the point. It does not do GPS tracking, does not take payment on site, records a typed name and timestamp rather than a drawn signature, and needs a signal: it does not work offline.",
    features: [
      {
        title: "Technician Field Link",
        description: "The tech opens their job from a text message — no account, no password, no app install. The link is signed, opens exactly one job, and can be revoked; rescheduling invalidates it automatically. This is the answer to \u201cmy guys won't use another app\u201d"
      },
      {
        title: "Arrival Tracking",
        description: "On-my-way, arrived, and completed times are recorded when they happen, not estimated afterwards — which is the number that gets argued about with a customer six weeks later"
      },
      {
        title: "Field Report",
        description: "What was wrong, what was done, and what still needs doing, written on the phone at the jobsite"
      },
      {
        title: "Equipment on File",
        description: "The units at that address are on a list the tech taps to attach — several taps for a two-system house. An unlisted unit is typed once and is on file for whoever attends next. Make, model, and serial follow the unit, not the visit"
      },
      {
        title: "Jobsite Photos",
        description: "Before, after, nameplate, and receipt, taken through the same link. Each one is opted in or out of the customer's invoice individually, so the supply-house receipt showing what the shop paid can never reach the customer by accident"
      },
      {
        title: "Parts & Labor Logged in the Field",
        description: "Each line tagged as labor, part, or fee by the person who knows. Parts are picked from the shop's own price list so the invoice line lands on the right sales account, and the part's cost rides in from the catalogue — never from the tech's form, because a tech on a roof should not be looking up landed cost. That is what makes the margin on the job real instead of inferred from a description afterwards"
      },
      {
        title: "The Invoice Writes Itself",
        description: "The tech taps Complete and a draft invoice exists in the office, with their own words on it, ready for review. Nobody retypes a paper ticket"
      },
      {
        title: "Trade-Format Invoice",
        description: "Diagnosis, work performed, recommended follow-up, equipment, and warranty print under real headings, with the opted-in jobsite photos beneath them — not a one-line \u201cHVAC service call \u2014 $458\u201d"
      },
      {
        title: "A Service Call Becomes a Job",
        description: "Completing a visit creates the job, links it to the customer, and tags the invoice to it, so the work reaches the Per-Job P&L without anybody remembering to tag anything"
      },
      {
        title: "Office Review Before It Reaches the Customer",
        description: "The dispatcher opens the field report from the board — what the tech wrote, the photos, the parts and labor, the customer's sign-off, the draft invoice it produced, and — on a maintenance visit — the plan visit it earned, or a one-click way to record one. The tech's internal notes are shown marked as never reaching the customer. Nothing goes out until a person sends it"
      }
    ]
  },
  {
    name: "Approvals & AI Autonomy",
    icon: "approvals",
    note: "The approvals inbox is on for everyone \u2014 it is how every AI write reaches the books. Autonomy is off until a person grants it, one rule at a time: there is no default, and no global \u201clet the AI do it\u201d switch. No ledger rule can ever send anything to a customer, and a rule that writes to the ledger must carry a dollar limit or it does not run. The phone is a separate channel a shop opts into, and nothing granted here can reach it.",
    features: [
      {
        title: "The Approvals Inbox",
        description: "Every write an AI proposes, from any surface, stages as a card and waits. The nightly categorization sweep, a request typed into Ask Poof, a detector that noticed a job losing money \u2014 all of them land in the same place, and nothing reaches the books until a person approves it. Approving runs exactly what is on the card: the stored request, never a fresh interpretation of it"
      },
      {
        title: "The Evidence, Not the Assertion",
        description: "Each card shows what Poof looked up to justify itself \u2014 the customer it resolved and their email, the prior transactions for that merchant and whether they were all categorized the same way, the amount, the account. Gathered by code, never judged by the model. A card that says \u201cno history for this merchant\u201d is telling you why it is asking"
      },
      {
        title: "Approve Part of a Batch",
        description: "A forty-row card is not all-or-nothing. Untick the three you want to look at and approve the rest in one tap. The ones you approved run; the ones you unticked are still waiting tomorrow"
      },
      {
        title: "Reject With a Reason",
        description: "And the reason is recorded, not discarded. It is the signal that stops a rule covering that kind of work, and the record of why"
      },
      {
        title: "Standing Rules, Granted From a Card You Already Read",
        description: "Not a form you fill in from scratch. Poof derives the rule from the work in front of you \u2014 the merchant those rows share, the agreement in their history, a limit above the largest one \u2014 shows it in plain sentences, tells you how much of the card it covers, and puts your own record with that kind of change over the last 30 days in front of you before you commit"
      },
      {
        title: "A Rule That Is Wrong Stops Itself",
        description: "Correct anything a rule is about \u2014 not only the rows it happened to touch \u2014 or reject the kind of work it covers, and the rule pauses, tells you which correction stopped it, and waits for you to resume or revoke it. Every rule lives on one page with what it has handled and who granted it, and revoking is instant"
      },
      {
        title: "Five Queues, One Inbox",
        description: "An inbox playbook run, a reconciliation match the scheduled job was unsure of, a POS deposit that came in short, a bill the cash planner put on hold, and a late close task are all cards in the same Approvals inbox, each with the evidence that produced it. The original pages still work; deciding there is the same decision"
      },
      {
        title: "The Page Settles the Card",
        description: "A card raised by a pipeline, a detector, or the scheduled job is about a record that is still there, so it waits thirty days (a chat draft waits one). Confirm the match, match the deposit, decide the bill, tick the task, review the transaction on its own page \u2014 the card closes with what you did. Do something different from what the card proposed and it is recorded as a correction, the same as a Reject"
      },
      {
        title: "A Playbook Graduates as a Rule",
        description: "\u201cApprove all like this\u201d on an inbox-run card makes a standing rule pinned to that playbook, only while the forwarded file keeps the columns it had, and under a ceiling from the run\u2019s total. A drifted file, a bigger total, or another playbook still waits for a person"
      }
    ]
  },
]

export interface FaqItem {
  question: string
  answer: string
  category: string
  /** Who the question is for. Omitted = everyone. 'trades' items render only on the trade pages. */
  audience?: 'trades'
}

export const faqData: FaqItem[] = [
  {
    question: "What is Poof?",
    answer: "Poof is a platform to run a small business, with the books at the center. Connect your bank and card accounts and the AI reads the feeds, matches invoices to deposits and bills to payments, categorizes, and drafts the month-end close. Every entry it proposes waits on a card with the evidence it found, and nothing reaches the books until a person approves it or a rule that person granted covers it. It also invoices, takes payments, budgets, forecasts cash, and for trade shops answers the phone and lets a technician close a job from a text. One plan, every feature, $79 a month, and a close within five business days or the next month is free.",
    category: "General"
  },
  {
    question: "How is Poof different from Mercury Books?",
    answer: "Mercury Books is bookkeeping built into a Mercury bank account, free for Mercury customers through the end of 2026 and $35 a month after. Poof works with any bank and card through Plaid, and it is built around one thing Mercury does not do: every entry the AI proposes waits on a card with its evidence, and nothing posts until a person approves it or a rule that person granted covers it. If you bank with Mercury and want your books to stay inside the bank, Mercury is the simpler choice. If you want books you can defend, with a close that ticks itself off a checklist and a rule that stops itself when it is wrong, that is Poof.",
    category: "Pricing & Plans"
  },
  {
    question: "What does the five-day close guarantee cover?",
    answer: "Your books closed within five business days of month end, or the next month is free. It starts with your first close after a complete calendar month with your feeds connected; the partial month you joined in is not covered, and historical cleanup or a migration is scoped separately. A close is ready when feeds are reviewed, the bank reconciles to one figure, and every card in Approvals is decided. Cards left waiting past day five pause the clock. The remedy is the next month free on your subscription.",
    category: "Pricing & Plans"
  },
  {
    question: "What is Poof for shops?",
    answer: "The same Poof, set up for a service shop: the AI receptionist that answers the line and books the job, the technician's field link that writes the invoice, and per-job profitability on every close. You bring your Jobber or Housecall Pro export and your bank feeds; the books close on the same five-day checklist. It is the same one plan at $79 a month \u2014 there is no shop tier and no per-truck pricing.",
    category: "General",
    audience: "trades"
  },
  {
    question: "Do I have to run the software myself?",
    answer: "Somebody has to, but it is minutes a day rather than a job. The AI proposes every entry and stages it on a card with its evidence; you, your office manager, or your bookkeeper decide the cards and sign the close. Your team keeps using Jobber or Housecall Pro exactly as they do today.",
    category: "General",
    audience: "trades"
  },
  {
    question: "Can the AI change my books without asking me?",
    answer: "No. Every write an AI proposes stages as a card in your approvals inbox and waits \u2014 the nightly categorization sweep, a request you typed into chat, a detector that noticed a job losing money. Nothing reaches your books until a person approves it, and approving runs exactly what is on the card rather than a fresh interpretation of it. Each card also shows the evidence behind it: the customer it resolved, the prior transactions for that merchant and whether they were all categorized the same way, the amount, the account. That evidence is gathered by code, never judged by the model \u2014 a card that says \u201cno history for this merchant\u201d is telling you why it is asking.",
    category: "AI & Automation"
  },
  {
    question: "How are Poof's rules different from QuickBooks bank rules?",
    answer: "QuickBooks bank rules auto-post: you write one from a blank form, guess at the conditions, and it applies from then on \u2014 so a QuickBooks rule that is wrong keeps being wrong until somebody notices. Poof derives a rule from work you just reviewed instead of a form, shows it to you in plain sentences with your own 30-day record before you grant it, and then adds four things a bank rule does not have: a mandatory dollar ceiling separate from the match (a rule without one does not run), a daily cap whose overflow goes to your inbox rather than being dropped, a requirement that prior human decisions agreed, and self-pausing \u2014 correct anything the rule is about \u2014 not only the rows it touched \u2014 and it stops, tells you which correction stopped it, and waits for you to resume or revoke it.",
    category: "AI & Automation"
  },
  {
    question: "Is AI autonomy on by default?",
    answer: "No. Autonomy is off until you grant it, one rule at a time. There is no default and no global \u201clet the AI run\u201d switch \u2014 a new account asks about everything until its owner decides otherwise. No ledger rule can ever send anything to a customer: invoices and credit notes are always a human's decision, whatever a rule says. The phone is a separate channel a shop opts into: the receptionist talks to callers and books jobs inside rules written in code, and nothing granted in the books can reach it. Rules cannot be created from a settings screen either, only from work someone actually reviewed. Every rule lives on one page showing what it has handled and who granted it, revoking is instant, and \u201cwhat did AI change this month, and who allowed it\u201d is a single page for your accountant.",
    category: "AI & Automation"
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
    answer: "Yes. All data is encrypted in transit via HTTPS/TLS. Poof includes two-factor authentication (TOTP-based MFA with backup codes), role-based access controls with 5 roles and 26 granular permissions, audit logging with PII masking, session management, and email verification. Bank connections are read-only through Plaid — Poof never stores your bank login credentials or has the ability to move money.",
    category: "Security & Data"
  },
  {
    question: "How does Poof compare to QuickBooks?",
    answer: "Poof is built specifically for small businesses that want AI-powered automation without complexity. Unlike QuickBooks, Poof includes a built-in AI assistant with 30+ tools that creates records, updates invoices, generates all 13 reports, and imports bank statement PDFs — all through conversation. Poof also offers AI-powered budgeting and cash flow forecasting, recurring invoices with automated follow-ups, estimates, auto-reconciliation, receipt scanning with OCR, recurring charge detection, smart transaction matching, report drill-down, scheduled report delivery, and a personalized dashboard with AI daily briefing. Poof is one plan at $79/month with all 128 features included ($39.50/month for your first 3 months). The fair QuickBooks comparison is Plus at $140/month — the tier that carries job costing, budgets, and full reporting — not Simple Start at $38/month, which is single-user and can't do this work.",
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
    answer: "For freelancers, the best bookkeeping app is one that automates the tedious work and doesn't require accounting knowledge. Poof is built specifically for solo founders and freelancers — AI categorizes your transactions automatically, sends recurring invoices on autopilot, scans receipts from your phone, and generates 13 financial reports including P&L and cash flow statements. It's $79/mo with everything included (no tiers) — while QuickBooks locks project profitability, budgets, and comprehensive reporting behind its $140/mo Plus plan.",
    category: "General"
  },
  {
    question: "Do I need QuickBooks for my small business?",
    answer: "No. QuickBooks is the default choice, but it's not the only option — and it's often more complex and expensive than small businesses need. QuickBooks starts at $38/mo with tiered pricing that locks features behind its $85/mo Essentials and $140/mo Plus plans (Intuit raised prices on August 1, 2026). Alternatives like Poof offer AI-powered automation (transaction categorization, receipt scanning, recurring charge detection, budgeting) at $79/mo with every feature included in one plan. If you've tried QuickBooks and found it overwhelming, Poof is designed to be simpler.",
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
    answer: "If price alone is the criterion, Wave has a free plan. But the honest comparison is feature-for-feature. As of August 2026, QuickBooks charges $38/mo for Simple Start, $85/mo for Essentials, $140/mo for Plus, and $340/mo for Advanced — and Plus is the tier you need for project profitability and budgets. Poof is $79/mo for all 128 features in one plan — 44% less than Plus — including what QuickBooks reserves for its upper tiers, plus AI-powered budgeting, cash flow forecasting, auto-reconciliation, and a built-in AI assistant that QuickBooks doesn't offer at any tier. There's also a 50% launch discount ($39.50/mo for the first 3 months) and a 30-day free trial with no credit card required.",
    category: "Pricing & Plans"
  },
  {
    question: "How much does bookkeeping cost for a small business?",
    answer: "Traditional bookkeeping costs vary widely: hiring a part-time bookkeeper typically runs $500-$2,000/month, while a full-time in-house bookkeeper can cost $3,000-$5,000/month plus benefits. Outsourced bookkeeping firms charge $200-$500/month for basic services. AI-powered bookkeeping software like Poof costs $79/month (or $39.50/month with the launch discount) and handles most of the work automatically — transaction categorization, bank reconciliation, invoicing, receipt scanning, and financial reporting. For most small businesses, Poof replaces the need for a dedicated bookkeeper at a fraction of the cost.",
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
    answer: "Poof offers a 30-day free trial with full access to all 128 features — no credit card required to start. When your trial ends, you can subscribe at $79/month (or $39.50/month with the 50% launch discount for the first 3 months). If you choose not to subscribe, your data remains accessible in read-only mode so you can export your records. There are no long-term contracts — you can cancel anytime and your data stays yours.",
    category: "Pricing & Plans"
  },
  {
    question: "Does Poof work on mobile?",
    answer: "Poof is a web-based application that works on any device with a modern browser — desktop, tablet, or phone. The interface is fully responsive, so you can review transactions, send invoices, scan receipts, chat with the AI assistant, and check your dashboard from your phone. Upload receipt photos directly from your mobile camera for instant OCR scanning and categorization. No app download required — just log in at app.poofai.com from any browser.",
    category: "General"
  },
  {
    question: "How does AI bookkeeping save money?",
    answer: "AI bookkeeping saves money in three ways: it eliminates the cost of a dedicated bookkeeper ($500-$2,000/month), it reduces errors that lead to costly tax mistakes or missed deductions, and it frees up your time to focus on revenue-generating activities. Poof automates transaction categorization, bank reconciliation, receipt scanning, invoice follow-ups, and report generation — tasks that would take a bookkeeper hours each week. At $79/month, Poof replaces thousands of dollars in annual bookkeeping costs while delivering faster, more consistent results.",
    category: "Pricing & Plans"
  },
  {
    question: "Is my financial data safe with AI bookkeeping?",
    answer: "Yes. Poof takes data security seriously. All data is encrypted in transit via HTTPS/TLS, and bank connections go through Plaid with read-only access — Poof never sees or stores your bank login credentials and cannot move money. Poof includes two-factor authentication, role-based access controls with 26 granular permissions, audit logging with PII masking, and session management. Your financial data is never shared with third parties or used to train AI models. You can manage active sessions, revoke access, and export your data at any time.",
    category: "Security & Data"
  },
]
