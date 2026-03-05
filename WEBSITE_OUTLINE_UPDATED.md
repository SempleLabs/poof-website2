# Poof Website Outline (poofai.com) — UPDATED March 2026

> **Note for developer:** Items marked with NEW are new additions. Items marked with CHANGED have been updated from the previous outline. Items marked with REMOVED should be removed or corrected. Unmarked items are unchanged.
>
> **POSITIONING UPDATE (March 2, 2026):** The brand messaging has been overhauled. Key changes:
> - Hero headline changed from "Magical Bookkeeping for Small Business" to **"Bookkeeping That Does Itself"**
> - All feature section headers should be **outcome-oriented** (see BRAND_KIT.md > Positioning > Messaging Principle)
> - QuickBooks contrast should be threaded throughout the entire site, not just the comparison page
> - Never reference "Basic," "Pro," or "Enterprise" tiers — Poof has one plan
> - See BRAND_KIT.md for the full positioning framework, headline table, and messaging don'ts

---

## Global Components

**Header** — Logo, nav links (Features, Pricing, How it Works, Resources, About), Sign In, Demo button, mobile menu

**Footer** — Site links, newsletter subscription form

---

## 1. Home Page (/)

**[CHANGED] Hero:**
- **Headline:** "Bookkeeping That Does Itself" (was "Magical Bookkeeping for Small Business")
- **Tagline:** "Poof. It's done."
- **Subhead:** "AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again."

**Badges:**
- 5-minute setup
- 90% fewer manual entries
- 30-day free trial

**Launch Special:** 50% off first 3 months

**CTAs:** Start Free Trial, Request Demo

**[NEW] Who Poof Is For section:**
- Solo founders and freelancers tired of spreadsheet bookkeeping
- Small business owners who dread reconciling their books each month
- Service businesses that want invoicing + bookkeeping in one place
- Anyone who's been told "just use QuickBooks" and found it overwhelming

**What is Poof — Animated stat counters:**
- [CHANGED] **40+ features** (was 30+)
- 12,000+ bank connections
- [CHANGED] **13 reports** (was 12)
- 95% accuracy

**[CHANGED] Features highlight** — Use outcome-oriented headers from BRAND_KIT.md (e.g., "Wake up to categorized books — every morning" instead of "AI Transaction Categorization")

**Comparison section** — Thread QuickBooks contrast: "$29/mo for everything QuickBooks charges $38+ for"

**Product demo section**

**FAQ**

**CTA**

---

## 2. Features Page (/features)

**Hero** — [CHANGED] "**Everything You Need. Nothing You Don't.**" (was "30+ Features for Effortless Bookkeeping") / 40+ features, one flat price — $29/mo

**[CHANGED] Layout:** Tabbed category UI with sticky tab bar below header. One category visible at a time (not a long scrolling list). Tab bar is horizontally scrollable on mobile. Prev/Next navigation below feature cards.

**[CHANGED] Note:** Each feature group header should use outcome-oriented copy. See BRAND_KIT.md > Positioning > Messaging Principle for the full headline table.

### 40+ Features in 9 groups:

#### "Wake Up to Clean Books — Every Morning" (AI-Powered Automation, 9 features)
1. AI transaction categorization (BRAID engine)
2. Preston AI assistant
3. AI chart of accounts generation
4. Automated daily bookkeeping
5. AI-powered recurring charge detection — frequency analysis, confidence scoring, next payment prediction
6. Receipt & invoice scanning (OCR) — data extraction, vendor ID, duplicate detection, HEIC/HEIF support
7. Smart transaction matching — invoices to deposits, bills to payments, partial payment support
8. AI-guided onboarding — Preston walks users through setup
9. AI budget & forecast generation — natural language goal input, AI builds line items and 12-month projections

#### "Send Invoices on Autopilot — Follow-Ups Included" (Invoicing & Payments, 7 features)
1. Professional invoicing (PDF export, email delivery, custom branding/logo, line-item tax & discounts)
2. Credit notes
3. Payment tracking & payment receipts
4. Products & services catalog
5. Customer management — full database with contact info, billing/shipping addresses, sales reporting
6. Recurring invoices — weekly, monthly, quarterly, yearly with auto-generation and auto-send
7. Automated invoice follow-ups — reminders at due date, 3, 7, 14, 30 days past due with smart pause on payment

#### "Track Every Dollar Without Lifting a Finger" (Expense & Bill Management, 5 features)
1. Expense tracking
2. Mileage tracking — business travel expense calculation
3. Bill management
4. Vendor management
5. Transaction matching

#### "Connect Your Bank. AI Handles the Rest." (Banking & Reconciliation, 6 features)
1. Bank connection (Plaid) — 12,000+ banks, syncs last 30 days of transactions
2. Bank statement import — CSV or PDF (up to 25MB), intelligent column mapping, duplicate prevention. For transactions older than 30 days.
3. Bank reconciliation — multi-step wizard, reconciliation reports, history
4. Auto-reconciliation — opt-in weekly or monthly automatic reconciliation with notifications
5. Deposits
6. Multi-account support

#### "Know Exactly Where Your Money Went — in 30 Seconds" (Accounting & Reporting, 6 features)
1. Double-entry accounting
2. **13 financial reports**: Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail, AR Aging, AP Aging, Customer Sales, Vendor Expenses, Sales by Product/Service, Expenses by Category, Budget vs Actual
3. Financial import (bulk chart of accounts, transactions, customers/vendors, invoices)
4. Accrual & cash basis toggle
5. Recurring journal entry templates — daily, weekly, monthly, quarterly, annually with timezone-aware posting
6. Reversing journal entries — automatic accrual reversals

#### "Describe Your Goal. Get a Budget in Seconds." (Budgeting & Forecasting, 5 features)
1. Budget creation — manual or AI-generated from natural language goal (e.g., "20% revenue growth")
2. Budget lifecycle management — Draft → Active → Locked → Archived with clone support
3. Variance dashboard — budget vs actual with bar charts, percent variance, status indicators
4. Cash flow forecasting — AI-generated 12-month projections with confidence bands, seasonal adjustments
5. Budget alerts — proactive spending alerts when approaching or exceeding thresholds

#### "Bank-Grade Security, Built for Small Teams" (Team & Security, 7 features)
1. Team management — 5 roles: Owner / Admin / Accountant / Bookkeeper / Viewer
2. 2FA (TOTP with QR code setup and 8 backup codes)
3. Audit logs (SOC 2 compliant, PII masking)
4. Session management (30-minute timeout, active session viewer)
5. GDPR/CCPA-compliant account deletion
6. Email verification
7. Role-based permissions (RBAC) — 26 granular permissions

#### "Spend Less Time in the App, More Time on Your Business" (Productivity & Workflow, 5 features)
1. Drag-and-drop dashboard with KPIs — cash flow charts, P&L, top expenses, budget status, forecast summary
2. Global search — across transactions, invoices, bills, expenses
3. Notification center — in-app and email
4. Transaction approval workflows
5. Command bar (Cmd+K) — natural language navigation

#### "Ask a Question, Get an Answer — Not a Help Article" (Preston AI Capabilities, 6 features)
1. Business-context-aware chat — knows company, industry, timezone
2. Books health check & month-end close guidance
3. Invoice creation, editing, and payment receipt recording
4. Budgeting, variance, and forecasting guidance
5. Recurring charge analysis and questions
6. Chart of accounts setup (upload, manual, auto-generate, or guided)

**Bank Connection section** — Plaid-powered, 12,000+ banks

**CTA** — Start Free Trial / Schedule Demo

---

## 3. Pricing Page (/pricing)

**[CHANGED] Hero** — "Everything You Need. One Price." (was "Simple, Honest Pricing") / One plan, 30-day free trial

**Billing toggle** — Monthly vs Annual

**Poof Professional plan** (single plan — never show tiers):
- Monthly: $29 → $14.50/mo (50% off first 3 months)
- Annual: $290/year ($24.17/mo, save $58)
- [CHANGED] Updated included features list to reflect 40+ features
- [CHANGED] Add contrast line: "$29/mo for everything QuickBooks charges $38+ for"

**[CHANGED] Value props** — "Why Small Businesses Switch to Poof" with QuickBooks contrast subtitle. Three outcome-oriented cards: Wake Up to Clean Books, Set Up in 5 Minutes, Bank-Grade Security

**[CHANGED] 9 FAQs** — Trial, security, accountant access, cancellation, vs QuickBooks, reports, integrations, bookkeeping software cost, do I need a bookkeeper

**CTA**

---

## 4. About Page (/about)

**Hero** — "Bookkeeping That Actually Makes Sense"

**Mission statement** — "Every small business owner deserves financial clarity..."

**Timeline:**
- 2015–2025 (auditing/controller journey)
- June 2025 (Poof born)
- 2026 — Reimagining bookkeeping with AI: budgeting & forecasting, recurring invoices with automated follow-ups, receipt scanning, recurring charge detection, bank statement import, 13 reports, 40+ features

**4 Values** — Effortless, Small Business First, Trust & Security, Continuous Learning

**Founder section** — Austin Semple, CEO & Founder, 10+ years auditing/controller experience

**CTA**

---

## 5. How It Works (/how-it-works)

**Hero** — "How Poof Works" / 3 simple steps

**3 Steps:**
1. **Upload & Connect (2–5 min)** — [CHANGED] Import bank statements (CSV/PDF), Excel, or connect via Plaid. **Upload receipts and invoices for automatic scanning.**
2. **AI Does the Work (automated)** — [CHANGED] Categorizes transactions, learns patterns, **detects recurring charges, matches transactions to invoices/bills, and scans receipts**
3. **Run Your Business (ongoing)** — Insights, invoices, informed decisions

**Feature deep dives:**
- Financial import & AI mapping
- Professional invoicing
- Real-time reporting
- [NEW] **Receipt scanning & OCR**
- [NEW] **Recurring charge detection**
- [NEW] **Bank statement import**

**Trust indicators** — 30-day trial, no setup fees, 10+ years experience

**6 FAQs**

**CTA**

---

## 6. Demo Request (/demo)

**Hero** — "See Poof in Action" / 30-min personalized demo

**Form fields:** First name, last name, business email, company name, phone, preferred time (morning/afternoon/evening), timezone, business type (9 options), challenges (optional)

**Success state** — Confirms receipt, explains next steps (walkthrough, live AI demo, Q&A)

*(No changes)*

---

## 7. Contact (/contact)

**Hero** — "Get in Touch"

**Form fields:** Name, email, message

**Alt contact:** support@poof.ai

**Cards** — Schedule a Demo, Resources

**Success state** — Confirms receipt, response within 24 hours

*(No changes)*

---

## 8. Security (/security)

**Hero** — "Security at Poof"

[CHANGED] **8 Feature cards (was 6):**
1. 2FA (TOTP)
2. [CHANGED] RBAC — Now with **5 roles and 26 granular permissions** (was 4 roles)
3. Audit Logs
4. Encrypted Bank Connections
5. Read-Only Bank Access
6. Session Management
7. [NEW] **Email Verification** — Secure account activation and email change verification
8. [NEW] **GDPR/CCPA Account Deletion** — Full data removal on user request

**Plaid section** — 12,000+ banks, HTTPS/TLS, read-only

[NEW] **Additional security details:**
- Rate limiting (10 auth attempts/15min, 100 API requests/min)
- CSRF protection
- Security headers (Helmet.js)
- PII sanitization in logs
- JWT authentication with expiration

**CTA** — Contact Us / Start Free Trial

---

## 9. Resources (/resources)

**Hero** — "Bookkeeping Resources"

**4 Guides/Templates:**
1. Small Business Bookkeeping Setup Guide
2. Expense Categorization Cheat Sheet
3. Monthly Bookkeeping Checklist
4. Year-End Closing Procedures

**Quick links** — How it Works, Features, vs QuickBooks, Security

**CTA**

*(No changes — consider adding guides for new features like bank statement import and receipt scanning)*

---

## 10. Poof vs QuickBooks (/poof-vs-quickbooks)

**Hero** — Side-by-side pricing comparison

Poof: $14.50/mo (all features) vs QuickBooks: $38/mo+ (tiered)

[CHANGED] **Feature comparison table (updated):**

**Poof advantages:**
- AI assistant (Preston)
- Auto chart of accounts generation
- [CHANGED] RBAC (now 5 roles, 26 permissions)
- Audit logs
- Flat pricing
- [NEW] **AI recurring charge detection**
- [NEW] **Receipt scanning & OCR**
- [NEW] **Bank statement import (CSV/PDF)**
- [NEW] **Smart transaction matching**
- [NEW] **Recurring journal templates**
- [NEW] **4 additional business reports** (Customer Sales, Vendor Expenses, Sales by Product/Service, Expenses by Category)
- [NEW] **Transaction approval workflows**

**Shared:**
- AI categorization
- Invoicing
- Expense tracking
- Double-entry accounting
- Reconciliation
- Plaid bank connections
- Reports
- 2FA

**QuickBooks still missing (from Poof):**
- AI assistant
- Auto chart of accounts
- Bill/vendor management *(verify this is still accurate)*
- RBAC with granular permissions
- Audit logs
- Simple flat pricing
- Receipt scanning with duplicate detection
- Recurring charge detection

**CTA**

---

## 11. Blog (/blog/[slug])

Dynamic MDX-based posts with category, author, date, read time

Article CTA links to /demo

*(No changes)*

---

## Key Claims & Numbers

| Claim | Old Value | New Value |
|---|---|---|
| Features | 24 (all plans) | **40+** (all plans) |
| Bank connections | 12,000+ (Plaid) | 12,000+ (Plaid) *(unchanged)* |
| Financial reports | 8 | **13** (added Customer Sales, Vendor Expenses, Sales by Product/Service, Expenses by Category, Budget vs Actual) |
| Accuracy rate | 95% | 95% *(unchanged)* |
| Setup time | 5 minutes | 5 minutes *(unchanged)* |
| Manual entry reduction | 90% | 90% *(unchanged)* |
| Monthly price | $14.50 (launch) / $29 (regular) | $14.50 (launch) / $29 (regular) *(unchanged)* |
| Annual price | $290/year ($24.17/mo) | $290/year ($24.17/mo) *(unchanged)* |
| Free trial | 30 days | 30 days *(unchanged)* |
| Launch discount | 50% off first 3 months | 50% off first 3 months *(unchanged)* |
| Team roles | 4 (Owner/Admin/Accountant/Viewer) | **5** (Owner/Admin/Accountant/**Bookkeeper**/Viewer) |
| Plaid sync | Not specified | **30 days** (use bank statement import for older transactions) |
| Permissions | Not specified | **26 granular permissions** |

---

## Summary of All Changes for Developer

### New Features to Add to Website (10 major additions):
1. **AI-powered recurring charge detection** — Pattern recognition, frequency analysis, confidence scoring
2. **Receipt & invoice scanning (OCR)** — Photo upload, data extraction, duplicate detection
3. **Bank statement import (CSV/PDF)** — Upload and parse statements with column mapping
4. **Smart transaction matching** — AI matches invoices to deposits, bills to payments
5. **Recurring journal entry templates** — Automated periodic journal posting
6. **Reversing journal entries** — Automatic accrual reversals
7. **4 new reports** — Customer Sales, Vendor Expenses, Sales by Product/Service, Expenses by Category
8. **Mileage tracking** — Business travel expense calculation
9. **Transaction approval workflows** — Review automated entries before posting
10. **GDPR/CCPA account deletion** — Privacy-compliant data removal

### Updated Numbers:
- Features: 24 → **40+**
- Reports: 8 → **13**
- Team roles: 4 → **5** (added Bookkeeper)
- Plaid sync: **30 days** (bank statement import covers older transactions)

### Updated Messaging (March 2, 2026):
- Hero headline: "Magical Bookkeeping for Small Business" → **"Bookkeeping That Does Itself"**
- All feature group headers rewritten to outcome-oriented copy (see above)
- Features page hero: "30+ Features for Effortless Bookkeeping" → **"Everything You Need. Nothing You Don't."**
- Pricing page hero: "Simple, Honest Pricing" → **"Everything You Need. One Price."**
- Added "Who Poof Is For" section to homepage
- QuickBooks contrast threaded through homepage, not just comparison page
- **Never reference Basic/Pro/Enterprise tiers** — one plan only

### Current Feature Groups (9 groups, matching BRAND_KIT.md):
- AI-Powered Automation: **9 features** (includes AI budget & forecast generation)
- Invoicing & Payments: **7 features** (includes recurring invoices, automated follow-ups)
- Expense & Bill Management: **5 features**
- Banking & Reconciliation: **6 features** (includes auto-reconciliation)
- Accounting & Reporting: **6 features** (13 reports including Budget vs Actual)
- Budgeting & Forecasting: **5 features** (budget creation, lifecycle, variance, forecasting, alerts)
- Team & Security: **7 features**
- Productivity & Workflow: **5 features** (includes command bar Cmd+K)
- Preston AI Capabilities: **6 features** (context-aware chat, health check, invoice/payment management)
