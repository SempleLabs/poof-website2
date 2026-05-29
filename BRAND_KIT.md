# Poof Brand Kit

> **Living document** — Last updated: May 28, 2026
> Hand this file to website creators, social media managers, and content creators so they have everything they need.

---

## Table of Contents

1. [What is Poof?](#what-is-poof)
2. [Brand Identity](#brand-identity)
3. [Logo Usage](#logo-usage)
4. [Color Palette](#color-palette)
5. [Typography](#typography)
6. [Key Messaging & Taglines](#key-messaging--taglines)
7. [Product Overview](#product-overview)
8. [Key Numbers & Claims](#key-numbers--claims)
9. [Pricing](#pricing)
10. [Competitive Positioning](#competitive-positioning)
11. [Founder](#founder)
12. [Content Guidelines](#content-guidelines)
13. [Available Logo Files](#available-logo-files)
14. [Vertical Positioning: Trade Contractors](#vertical-positioning-trade-contractors-hvac-plumbing-electrical)
15. [Changelog](#changelog)

---

## What is Poof?

Poof is an AI-powered bookkeeping app for small businesses. It automates the tedious parts of bookkeeping — transaction categorization, reconciliation, invoicing, receipt scanning, budgeting, and cash flow forecasting — so business owners can spend minutes on their books instead of hours.

**One-liner:** "Bookkeeping that does itself."

**Website:** poofai.com

---

## Positioning

### Who Poof Is For
- Solo founders and freelancers tired of spreadsheet bookkeeping
- Small business owners who dread reconciling their books each month
- Service businesses that want invoicing + bookkeeping in one place
- Anyone who's been told "just use QuickBooks" and found it overwhelming

### Positioning Statement
> **For** small business owners who've been doing their own bookkeeping in spreadsheets or struggling with QuickBooks,
> **Poof is** an AI-powered bookkeeping app
> **that** handles categorization, reconciliation, and reporting automatically — so you spend minutes on your books instead of hours.
> **Unlike** QuickBooks, which charges more for features behind paywalls and requires accounting knowledge,
> **Poof** includes everything in one plan and uses AI to do the work you'd normally hire a bookkeeper for.

### Primary Competitive Alternative
**QuickBooks** is the default choice for most small businesses. Poof positions directly against QuickBooks on three axes:
1. **Simplicity** — One flat price, no feature tiers, no accounting jargon
2. **AI-first automation** — Poof does the work; QuickBooks gives you tools to do the work yourself
3. **Price** — $29/mo for everything vs. $38+/mo for tiered, gated features

### Messaging Principle: Outcomes Over Features
Always lead with what changes in the customer's life, not what the product does. The feature name can appear as a label, but the **headline should be the outcome.**

| Feature | Outcome-Oriented Headline |
|---|---|
| AI transaction categorization | "Wake up to categorized books — every morning" |
| Poof AI assistant | "Ask a question, get an answer — not a help article" |
| Receipt & invoice scanning | "Snap a photo. Never type an expense again." |
| Smart transaction matching | "Invoices match to payments while you sleep" |
| Budgeting & forecasting | "Describe your goal. Get a budget in seconds." |
| 13 financial reports | "Know exactly where your money went — in 30 seconds" |
| Report drill-down | "Click any number. See exactly what's behind it." |
| Scheduled reports | "Your reports, delivered to your inbox — automatically." |
| Reconciliation | "Reconciliation that takes minutes, not hours" |
| Recurring invoices | "Send invoices on autopilot — follow-ups included" |
| Estimates | "Send a quote. Convert to an invoice in one click." |
| Bank connection | "Connect your bank. AI handles the rest." |
| Flat pricing | "Everything you need. Nothing you don't. One price." |

---

## Brand Identity

### Personality
- **Magical but professional** — We use "magic" as a metaphor (things just happen, like *poof*), but the product is serious, accurate, and trustworthy
- **Clean and modern** — White backgrounds, violet accents, generous spacing. Not cluttered or flashy
- **Approachable** — We're built for small business owners who aren't accountants. The language is friendly and jargon-free
- **Confident** — "Poof. It's done." We don't hedge; the product delivers

### Brand Values
1. **Effortless** — Bookkeeping should feel easy
2. **Small Business First** — Every decision optimized for 1–50 employee businesses
3. **Trust & Security** — Bank-grade security, SOC 2 audit logging, 2FA, RBAC
4. **Continuous Learning** — The AI gets smarter over time

### AI Assistant — Poof
Poof's AI assistant is the product itself — there is no separate character or persona name. The AI lives in a right-hand sidebar (with a branded purple-to-teal gradient header), is always one click away, and is context-aware — it knows your company name, industry, business type, location, and timezone. Poof gives concise, action-oriented responses (2–4 sentences) and can perform 30+ actions: creating invoices, estimates, expenses, bills, credit notes, deposits, customers, vendors, and products; setting up chart of accounts; recording journal entries; configuring recurring depreciation schedules; building budgets and forecasts; generating all 13 financial reports; sending invoices and credit notes via email; importing bank statement PDFs; and guiding users through onboarding and month-end close. Uploaded receipts and invoices are automatically scanned and attached to the records Poof creates. It features a signature sparkle animation icon. When creating content, the AI can be referenced as "your AI bookkeeper" or simply "Poof."

The assistant supports **multi-session conversations** — users can create, rename, switch between, and delete multiple chat sessions. Sessions display relative timestamps (time of day for today, "Yesterday", "Xd ago") in the user's company timezone. Conversations can be organized into **folders** (similar to ChatGPT Projects) with full CRUD: create, rename, expand/collapse, and delete. Sessions are moved between folders via **drag-and-drop** (desktop expanded mode) or a **"Move to" menu** (all views). Deleting a folder prompts a warning and removes all conversations inside it. Collapsed folder state persists across sessions via localStorage.

The assistant has three view modes:
- **Sidebar** (default) — resizable right-hand panel (350–700px) with a dropdown session/folder picker
- **Full-screen expanded mode** (desktop) — full-page layout with a persistent left panel showing folders and conversations with drag-and-drop support
- **Mobile** — full-width drawer below the app bar with a dedicated full-screen session list for managing conversations and folders

Navigating to another page (via sidebar nav, logo, or browser) automatically collapses expanded mode back to the sidebar on desktop, or fully closes the assistant on mobile.

---

## Logo Usage

### Primary Logo (In-App Header)
The logo that appears in the top-left corner of the app at all times uses the **imageText** variant: the Poof logo icon followed by the word "Poof."

| Property | Value |
|---|---|
| **Logo font** | "Righteous" (primary), "Inter" / "Roboto" (fallbacks) |
| **Font weight** | 700 (bold) |
| **Font size (desktop)** | 3rem (48px) |
| **Font size (mobile)** | 1.5rem (24px) |
| **Text color** | `#8b5cf6` (solid violet — not a gradient) |
| **Letter spacing** | -0.01em |

### Logo + Icon Spacing
- The logo icon and "Poof" text sit with **zero gap** between them
- The logo image actually has a **negative right margin** (-8px on desktop, -4px on mobile) so the icon and text nestle closely together
- This tight pairing is intentional — the icon and wordmark should feel like one unit, not two separate elements

### Logo Variants Available

| Variant | Description | When to Use |
|---|---|---|
| **imageText** | Logo icon + "Poof" text | Primary usage: app header, website header, marketing materials |
| **image** | Logo icon only | Favicons, app icons, small spaces, social media profile pictures |
| **text** | Just "Poof" in gradient text | Mobile app header, tight layouts |
| **icon** | Sparkle icon in violet circle | Loading states, small UI elements |
| **full** | Sparkle icon + gradient "Poof" text | Alternative marketing usage |

### Do's and Don'ts
- **Do** use the violet logo on white/light backgrounds
- **Do** use `poof-logo-purple.png` or `poof-logo-with-purple-background.png` when you need the logo on dark backgrounds
- **Don't** stretch or distort the logo
- **Don't** place the logo on busy backgrounds without sufficient contrast
- **Don't** change the color of the wordmark — it should always be `#8b5cf6` or white (on dark backgrounds)

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|---|---|---|
| **Violet 500 (Brand Primary)** | `#8b5cf6` | Primary brand color, buttons, logo text, key accents |
| Violet 400 (Light) | `#a78bfa` | Hover states, lighter accents |
| Violet 600 (Dark) | `#7c3aed` | Pressed states, darker accents |
| Violet 100 | `#ede9fe` | Very light backgrounds, tags |
| Violet 50 | `#f5f3ff` | Subtle tinted backgrounds |

### Secondary Colors

| Name | Hex | Usage |
|---|---|---|
| **Indigo 500** | `#6366f1` | Secondary accents, complementary to violet |
| Indigo 400 | `#818cf8` | Lighter secondary |
| Indigo 600 | `#4f46e5` | Darker secondary |

### Accent

| Name | Hex | Usage |
|---|---|---|
| **Teal 500** | `#14b8a6` | Accent color, used in the brand gradient endpoint |

### Semantic / Status Colors

| Name | Hex | Usage |
|---|---|---|
| **Success** | `#10b981` | Positive states, confirmations, revenue |
| **Error** | `#ef4444` | Errors, destructive actions, expenses |
| **Warning** | `#f59e0b` | Warnings, pending states |

### Neutral / Text Colors

| Name | Hex | Usage |
|---|---|---|
| **Slate 900** | `#0f172a` | Primary text color |
| **Slate 600** | `#475569` | Secondary/muted text |
| **Slate 200** | `#e2e8f0` | Borders, dividers |
| **Slate 50** | `#f8fafc` | Alternate backgrounds |
| **White** | `#ffffff` | Primary background |

### Gradients

| Name | CSS Value | Usage |
|---|---|---|
| **Primary** | `linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)` | Buttons, icon backgrounds, CTA elements |
| **Brand / Magical** | `linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #14b8a6 100%)` | Special decorative elements, hero sections, gradient text |
| **AI Assistant Header** | `linear-gradient(135deg, rgba(139,92,246,0.25) 0%, rgba(99,102,241,0.18) 50%, rgba(20,184,166,0.25) 100%)` | AI assistant sidebar header — soft brand gradient at ~25% opacity |
| **CTA** | `linear-gradient(160deg, #0f172a 0%, #1e293b 100%)` | Dark call-to-action sections |
| **Glass** | `linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(99,102,241,0.05) 100%)` | Subtle glass-effect backgrounds |

---

## Typography

### Font Families

| Use | Font | Fallbacks |
|---|---|---|
| **Body text** | Inter | system-ui, sans-serif |
| **Headings** | Cabinet Grotesk | system-ui, sans-serif |
| **Logo wordmark** | Righteous | Inter, Roboto, sans-serif |
| **Code / Monospace** | JetBrains Mono | monospace |

### Font Weights

| Weight | Value | Usage |
|---|---|---|
| Light | 300 | Rarely used |
| Regular | 400 | Body text |
| Medium | 500 | Subtitles, emphasized body |
| Semibold | 600 | Headings, buttons |
| Bold | 700 | Logo, primary headings |

### Font Sizes

| Name | Size | Pixels |
|---|---|---|
| xs | 0.75rem | 12px |
| sm | 0.875rem | 14px |
| base | 1rem | 16px |
| lg | 1.125rem | 18px |
| xl | 1.25rem | 20px |
| 2xl | 1.5rem | 24px |
| 3xl | 1.875rem | 30px |
| 4xl | 2.25rem | 36px |
| 5xl | 3rem | 48px |

---

## Key Messaging & Taglines

### Primary
- **"Bookkeeping That Does Itself"** — Main hero headline
- **"Poof. It's done."** — Primary tagline
- **"AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again."** — Hero subhead

### Supporting Headlines (use on feature sections, ads, social)
- "Stop doing your own bookkeeping"
- "Your books, done — every morning"
- "All the power of QuickBooks. None of the complexity."
- "Everything you need. Nothing you don't. One price."
- "Describe your goal. Get a budget in seconds."
- "Snap a photo. Never type an expense again."

### Supporting Messages
- "Bookkeeping That Actually Makes Sense"
- "Every small business owner deserves financial clarity"
- "5-minute setup, 90% fewer manual entries"
- "69 features, one flat price — $29/mo"
- "See where your cash is headed — 12 months out"

### Tone of Voice
- Conversational, not corporate
- Confident, not arrogant
- Simple, not dumbed-down
- Magical, not gimmicky

### Messaging Don'ts
- Don't lead with "magical" in headlines — let the product *feel* magical through the experience. Use outcome-oriented headlines instead.
- Don't list features without tying them to a customer outcome
- Don't mention tiers, plans, or "Basic/Pro" — Poof has one plan with everything included
- Don't use accounting jargon without explaining it

---

## Product Overview

### What Poof Does
Poof automates ~90% of bookkeeping tasks for small businesses (1–50 employees, 100–10,000 monthly transactions). Users connect their bank accounts, and the AI handles categorization, reconciliation, invoicing, estimating, budgeting, forecasting, and reporting.

### 69 Features in 9 Groups

#### 1. AI-Powered Automation (9 features)
1. AI transaction categorization (BRAID engine)
2. Poof AI assistant (sidebar-based, context-aware, 30+ tools, branded gradient header with sparkle icon, multi-session conversations with folder organization)
3. AI chart of accounts generation
4. Automated daily bookkeeping
5. AI-powered recurring charge detection (frequency analysis, confidence scoring, next payment prediction)
6. Receipt & invoice scanning (OCR) — photo upload, data extraction, vendor ID, duplicate detection, HEIC/HEIF support
7. Smart transaction matching — AI matches invoices to deposits, bills to payments, with partial payment support
8. AI-guided onboarding — Poof walks new users through setup with interactive survey and getting-started checklist
9. AI-powered budget & forecast generation — natural language goal input, AI builds line items and 12-month projections

#### 2. Invoicing & Payments (8 features)
1. Invoicing (PDF export, email delivery via AI or UI, custom branding/logo, line-item tax & discounts)
2. Estimates — create, send, and convert estimates to invoices in one click (PDF export, email delivery, custom branding)
3. Credit notes (create, send via email, AI-assisted)
4. Payment tracking & payment receipts
5. Products & services catalog
6. Customer management (full database with contact info, billing/shipping addresses, sales reporting)
7. Recurring invoices — weekly, monthly, quarterly, or yearly schedules with auto-generation and auto-send
8. Automated invoice follow-ups — configurable reminders at due date, 3, 7, 14, and 30 days past due with smart pause on payment

#### 3. Expense & Bill Management (5 features)
1. Expense tracking
2. Mileage tracking (business travel)
3. Bill management
4. Vendor management
5. Transaction matching

#### 4. Banking & Reconciliation (6 features)
1. Bank connection via Plaid (12,000+ banks, syncs last 30 days, optional liability accounts for broader institution support)
2. Bank statement import (CSV/PDF, up to 25MB, AI-powered parsing with GPT-4o Vision for PDFs, intelligent column mapping, bank name auto-detection, duplicate prevention) — also importable via AI chat by uploading a PDF
3. Reconciliation (multi-step wizard, reconciliation reports, history)
4. Auto-reconciliation (opt-in, weekly or monthly, with notifications)
5. Deposits
6. Multi-account support

#### 5. Accounting & Reporting (8 features)
1. Double-entry accounting
2. 13 financial reports: Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail Report, AR Aging, AP Aging, Customer Sales, Vendor Expenses, Sales by Product/Service, Expenses by Category, Budget vs Actual
3. Report drill-down — click any account in Balance Sheet, Income Statement, or Trial Balance to see underlying journal entries; click a journal entry to edit it
4. Shareable report URLs — filter state (date range, basis, hide-zero-balances) persists in URL for bookmarking and sharing
5. Scheduled report delivery — automated email delivery of any report (daily, weekly, monthly, or quarterly) as PDF or CSV to multiple recipients
6. Financial import (bulk chart of accounts, transactions, customers/vendors, invoices)
7. Accrual & cash basis toggle
8. Recurring journal entry templates (daily, weekly, monthly, quarterly, annually) with reversing journal entry support

#### 6. Budgeting & Forecasting (5 features)
1. Budget creation — manual or AI-generated from a natural language goal (e.g., "20% revenue growth")
2. Budget lifecycle management — Draft → Active → Locked → Archived, with clone support
3. Variance dashboard — budget vs actual comparison with bar charts, percent variance, and status indicators (on track, approaching, over budget, critical)
4. Cash flow forecasting — AI-generated 12-month projections with confidence bands, seasonal adjustments, and rolling forecast option
5. Budget alerts — proactive spending alerts when approaching or exceeding thresholds

#### 7. Team & Security (7 features)
1. Team management — 5 roles: Owner / Admin / Accountant / Bookkeeper / Viewer
2. Two-factor authentication (TOTP with QR code setup and 8 backup codes)
3. Audit logs (SOC 2 compliant, PII masking)
4. Session management (30-minute timeout, active session viewer)
5. GDPR/CCPA-compliant account deletion
6. Email verification
7. Role-based permissions (RBAC) — 26 granular permissions

#### 8. Productivity & Workflow (6 features)
1. Personalized dashboard — AI-generated daily briefing with "Reply to Poof" action, time-aware greeting, 4 animated KPIs, Y-axis dollar labels on all chart tiles, proactive "Needs Your Attention" alerts, drag-and-drop reorderable tiles with staggered animations, actionable empty states, quick-action buttons, semantic color coding, and a global date filter
2. Global search (across transactions, invoices, bills, expenses)
3. Notification center (in-app and email)
4. Transaction approval workflows
5. Command bar (Cmd+K) — natural language navigation
6. AI chat folders — organize conversations into folders (create, rename, delete, move), with drag-and-drop on desktop and move menu on mobile, collapsible sections, and persistent state

#### 9. Poof AI Capabilities (15 features)
1. Business-context-aware chat (knows your company, industry, timezone) with concise, action-oriented responses, multi-session support, and folder organization
2. Books health check & month-end close guidance
3. Invoice, estimate, and credit note creation — AI creates, edits, and sends via email
4. Expense, bill, deposit, customer, vendor, and product creation — AI creates any record via natural language
5. Record updates — AI can update existing invoices, customers, vendors, expenses, bills, and transactions
6. Budgeting, variance, and forecasting guidance
7. Recurring charge analysis and questions
8. Chart of accounts setup (upload, manual, auto-generate, or guided)
9. Account search & creation — AI can look up and create chart of accounts entries autonomously
10. Journal entry creation with account validation — AI verifies accounts exist before posting
11. Recurring journal entry setup — AI handles depreciation, amortization, rent, and insurance schedules (calculates periodic amounts, creates accounts, sets up the recurring template)
12. Financial report generation — AI generates all 13 reports on request
13. Bank statement PDF import via chat — upload a PDF, AI extracts transactions with GPT-4o Vision, presents summary, and imports to selected bank account with BRAID auto-categorization
14. Guided onboarding walkthrough — AI navigates the UI, highlights elements, and walks new users through setup step by step
15. File attachment handling — receipts, invoices, and documents uploaded in chat are automatically scanned and attached to any record the AI creates

---

## Key Numbers & Claims

| Claim | Value |
|---|---|
| Total features | 69 (all included in every plan) |
| Bank connections | 12,000+ (via Plaid) |
| Financial reports | 13 |
| AI assistant tools | 30+ (create, update, search, send, generate, import) |
| AI accuracy rate | 95% |
| Setup time | 5 minutes |
| Manual entry reduction | 90% |
| Plaid sync window | Last 30 days (use bank statement import for older transactions) |
| Team roles | 5 (Owner, Admin, Accountant, Bookkeeper, Viewer) |
| Granular permissions | 26 |
| Free trial | 30 days |
| Cash flow forecast horizon | 12 months with confidence bands |

---

## Pricing

**One plan. Every feature. No surprises.**

Poof has a single plan called **Poof Professional**. There are no tiers, no "Basic" or "Pro" distinctions, and no features locked behind upgrades. Every customer gets every feature.

| Billing | Price | Notes |
|---|---|---|
| Monthly | $29/mo | All 69 features included |
| Monthly (launch special) | **$14.50/mo** | 50% off first 3 months |
| Annual | $290/year ($24.17/mo) | Save $58 |

- **No feature tiers** — never reference "Basic," "Pro," or "Enterprise" plans in any customer-facing content
- 30-day free trial, no credit card required
- Launch special: 50% off first 3 months
- Cancel anytime, 30-day money-back guarantee

### Pricing Messaging
- Lead with: "$29/mo for everything QuickBooks charges $38+ for"
- Emphasize: "One plan. Every feature. No surprises."
- On comparison pages: highlight that QuickBooks locks features behind $38, $65, and $200/mo tiers

---

## Competitive Positioning

QuickBooks is the primary competitive alternative. Thread this contrast throughout all marketing — not just on a comparison page. Every feature claim is stronger when framed as "unlike QuickBooks, which..."

### Poof vs QuickBooks

| | Poof | QuickBooks |
|---|---|---|
| **Starting price** | $29/mo — all features ($14.50/mo launch special) | $38/mo+ (tiered, features locked behind higher plans) |
| **AI assistant** | Poof (built-in, context-aware, 30+ tools) | No |
| **AI budgeting & forecasting** | Yes (natural language goal input, 12-month projections) | No |
| **Auto chart of accounts** | Yes | No |
| **Receipt scanning + OCR** | Yes (with duplicate detection) | Yes (but limited in lower tiers) |
| **Recurring charge detection** | Yes (AI-powered) | No |
| **Recurring invoices** | Yes (with automated follow-ups) | Yes (but limited in lower tiers) |
| **Smart transaction matching** | Yes | Limited |
| **Cash flow forecasting** | Yes (AI-generated with confidence bands) | Limited (higher tiers only) |
| **Report drill-down** | Yes (click any account → see journal entries) | No |
| **Scheduled report delivery** | Yes (daily/weekly/monthly/quarterly, PDF or CSV, email) | No |
| **Bank statement PDF import via AI** | Yes (upload PDF to AI, auto-parsed with GPT-4o Vision) | No |
| **RBAC** | 5 roles, 26 permissions | Limited |
| **Audit logs** | Yes (SOC 2, PII masking) | Limited |
| **Estimates** | Yes (create, send, convert to invoice) | Yes (higher tiers only) |
| **AI depreciation & recurring entries** | Yes (AI sets up accounts and schedules) | No |
| **Personalized dashboard** | Yes (AI briefing, attention alerts, animations, reorderable tiles) | No |
| **AI chat organization** | Yes (multi-session, folders, drag-and-drop, 3 view modes) | No |
| **Pricing model** | Flat — one plan | Tiered — must upgrade for features |

### Key Differentiators (What Poof Has That QuickBooks Doesn't)
1. AI assistant (Poof) with 30+ tools, business-context awareness, and books health checks
2. AI-powered budgeting — describe your goal in plain English, AI builds the budget
3. AI cash flow forecasting with confidence bands and rolling refresh
4. AI-powered auto chart of accounts generation
5. Recurring charge detection with frequency analysis
6. Receipt scanning with intelligent duplicate detection
7. Automated invoice follow-ups with smart pause on payment
8. Budget vs actual variance dashboard with spending alerts
9. 26 granular RBAC permissions
10. SOC 2 audit logging with PII masking
11. Simple, flat pricing (no tiers)
12. Transaction approval workflows
13. Personalized dashboard with AI-generated daily briefing, proactive attention alerts, count-up animations, and drag-and-drop tiles
14. AI account management — AI creates chart of accounts entries, validates journal entries, and sets up recurring depreciation/amortization schedules autonomously
15. Estimates with one-click conversion to invoices
16. Report drill-down — click any account row in key reports to see the underlying journal entries
17. Scheduled report delivery — automated email delivery of any of the 13 reports on a recurring schedule
18. Bank statement PDF import via AI chat — upload a PDF, AI parses and imports transactions automatically
19. AI chat organization — multi-session conversations with folder management, drag-and-drop, three view modes (sidebar, full-screen, mobile), and navigation-aware auto-collapse

---

## Founder

**Austin Semple** — CEO & Founder
- 10+ years of auditing and controller experience
- Built Poof to solve the bookkeeping pain points he witnessed firsthand working with small businesses

### Company Timeline
- **2015–2025** — Austin's auditing and controller career
- **June 2025** — Poof is born
- **2026** — Reimagining bookkeeping with AI: budgeting & forecasting, recurring invoices with automated follow-ups, estimates, receipt scanning, recurring charge detection, bank statement import (CSV/PDF including AI-powered PDF parsing via chat), AI-powered account management and depreciation setup, personalized dashboard with AI daily briefing, report drill-down, scheduled report delivery, multi-session AI chat with folder organization, 13 reports, 69 features

---

## Content Guidelines

### When Creating Social Media / Video Content
- Use `#8b5cf6` (violet) as the primary brand color in overlays, text, and graphics
- The app UI is **light mode** — white backgrounds with violet accents. Screenshots will look clean on both light and dark social media feeds
- Use the **Righteous** font for any "Poof" wordmark in graphics (Google Fonts: [Righteous](https://fonts.google.com/specimen/Righteous))
- Use **Inter** for body text in graphics (Google Fonts: [Inter](https://fonts.google.com/specimen/Inter))
- Use **Cabinet Grotesk** for headlines if available (Fontshare: [Cabinet Grotesk](https://www.fontshare.com/fonts/cabinet-grotesk))
- The brand gradient (violet → indigo → teal) works great for backgrounds and decorative elements
- When showing the app, the overall aesthetic is: clean, airy, modern, with subtle violet glow effects on hover/interaction

### Hashtags & Keywords
- #Poof #PoofBookkeeping #AIBookkeeping #SmallBusinessBookkeeping
- #BookkeepingAutomation #SmallBusinessFinance #AIAccounting
- Keywords: AI bookkeeping, automated bookkeeping, small business bookkeeping, bookkeeping software, QuickBooks alternative

---

## Available Logo Files

All files located in `frontend/public/`:

| File | Description |
|---|---|
| `poof-logo.png` | **Primary logo** — used in app header and throughout the product |
| `poof-logo2.png` | Alternative logo version |
| `poof-logo-purple.png` | Purple-tinted variant |
| `poof-logo-gold.png` | Gold variant |
| `poof-logo-with-purple-background.png` | Logo on a purple background (good for dark contexts) |

---

## Vertical Positioning: Trade Contractors (HVAC, Plumbing, Electrical)

> **Use this section to spin up dedicated vertical landing pages** for HVAC, plumbing, and electrical service contractors. This is a **managed-service tier** that sits ALONGSIDE the horizontal Poof Professional product — different audience, different pricing, different promise. Do not replace the general Poof positioning with this; create a parallel HVAC landing page (e.g. `poofai.com/hvac` or a dedicated subdomain).

### Why This Vertical
Independent service contractors are Poof's first vertical focus because they (1) answer cold outreach, (2) have 15–25% net margins so they can afford a $999/mo managed service, (3) universally hate the gap between Jobber/HCP and QBO, and (4) talk to each other at supply houses and trade associations. Austin's 10+ years of audit and controller experience translate directly — these owners trust accounting credentials over "AI startup" pitches.

### Target Customer
- **Business type:** Residential HVAC service contractors (primary), plumbing service contractors, electrical service contractors
- **Revenue:** $750K – $3M annually
- **Employees:** 4 – 15 (owner + dispatcher + 2 – 10 service techs)
- **Trucks:** 2 – 6 service vehicles
- **Geography:** US sunbelt states — TX, FL, AZ, NC, SC, TN, GA, NV (priority); national over time
- **Persona:** 35 – 55 year-old owner-operator who built the business from a service truck. Technical enough to use software, doesn't enjoy it. Values time over features. Active in Facebook groups and at supply houses (Ferguson, Winsupply, Johnstone).
- **Current setup:** QuickBooks Online + Jobber or Housecall Pro + a part-time bookkeeper they pay $400 – $1,200/mo and are frustrated with

### Vertical Positioning Statement
> **For** HVAC, plumbing, and electrical service contractor owners doing $750K – $3M who are tired of waiting 2 – 3 weeks for last month's P&L from a part-time bookkeeper,
> **Poof Managed for Trades is** a managed bookkeeping service powered by AI agents and reviewed by a former controller
> **that** delivers per-job profitability within 48 hours and closes your monthly books in 24 hours — using your existing Jobber/Housecall Pro and bank data.
> **Unlike** outsourced bookkeepers who rekey job data manually and cost $800 – $1,500/mo for slow monthly reports, or field-service-first tools like Workyard and ServiceTitan that bolt on accounting as an afterthought,
> **Poof's agents** do categorization and reconciliation in real time, with a credentialed human reviewing every customer-facing action — and the answer to "did the Henderson install make money?" comes Friday, not three weeks later.

### Pain Points (in order of magnitude)
1. **Monthly P&L lands 2 – 3 weeks late.** Pricing decisions on this week's bids are made blind.
2. **Zero visibility into per-job profitability.** That big commercial install might have been a loss — and you won't know for a month.
3. **Bookkeeper rekeys Jobber/HCP data into QBO manually.** Slow, error-prone, expensive.
4. **Cash flow surprises during shoulder seasons.** Spring and fall lulls hit harder than expected.
5. **Sales tax on materials is a recurring headache.** Tracking varies by state and job type.
6. **1099 management at year-end is a fire drill.** Subs and 1099 employees scattered across QBO, spreadsheets, and the bookkeeper's notes.

### Outcome-Oriented Headlines (HVAC Landing Page)
Always lead with the outcome the owner cares about, never the feature.

| Feature / Capability | HVAC-Specific Outcome Headline |
|---|---|
| Job costing | "Know which jobs make money — 48 hours after the truck leaves." |
| Jobber / Housecall Pro integration | "Your field-service data, in your books. Automatically." |
| Monthly close in 24 hours | "Your May P&L by June 2nd. Not by June 20th." |
| AI transaction categorization | "Stop labeling 'HOME DEPOT' transactions one at a time." |
| Plaid bank sync | "Bank, credit cards, and Jobber — all speaking to your books." |
| Receipt scan | "Snap a receipt at the supply house. We do the rest." |
| Managed-service review layer | "AI does the work. A controller reviews the calls that matter." |
| 1099 contractor tracking | "1099-ready, every January." |
| Sales tax on materials | "Materials sales tax tracked automatically, by job and state." |
| Slack-based interface | "Ask a question in Slack. Get an answer about your business." |
| Cash flow forecasting | "Know your shoulder-season cash position 90 days out." |

### Vertical Pricing Tier — "Poof Managed for Trades"
Distinct from the $29/mo Poof Professional self-serve product.

| Plan | Price | Best for | Includes |
|---|---|---|---|
| **Poof Managed for Trades** | **$999/mo** | 2 – 4 truck shops, $750K – $1.5M revenue | All Poof Professional features + per-job P&L within 48 hrs + monthly close in 24 hrs + dedicated Slack channel + Jobber/HCP sync + monthly variance review |
| **Poof Managed for Trades Plus** | **$1,499/mo** | 5+ truck shops, $1.5M – $3M revenue | Everything above + multi-location reporting + quarterly review call + priority response |
| **Onboarding (one-time)** | **$1,500** | All managed customers | Historical cleanup (up to 18 months), QBO/Xero migration, Jobber/HCP setup, chart of accounts aligned to your trade |
| **Trade pilot** | **$250 (refundable)** | First-time customers | 30-day full-service trial, fully refundable if not delighted |

**Pricing messaging:**
- "$999/mo replaces a $1,000 – $1,500/mo bookkeeper *and* gives you per-job profitability they can't provide"
- "Cheaper than your current QBO + bookkeeper + manual handoff. Faster and more accurate."
- Never quote managed-service pricing alongside the $29/mo Professional plan on the same page — different products, different audiences.

### Competitive Alternatives (Trade-Specific)
On HVAC landing pages, reference these competitors — NOT QuickBooks (their issue isn't QBO, it's the *handoff to* QBO).

| Alternative | What it is | Why owners switch to Poof |
|---|---|---|
| **Part-time / outsourced bookkeeper** ($500 – $1,500/mo) | A person who logs into QBO once a month, sends a PDF P&L | Slow, no per-job visibility, manually rekeys Jobber data, expensive |
| **Workyard** (~$186/mo + accounting) | Field-service tool with bolt-on accounting | Built for the field, accounting is an afterthought; no managed service |
| **Knowify** (~$186 – $450/mo) | Construction accounting (general contractors) | Designed for general contractors, not service trades; complex for HVAC service work |
| **ServiceTitan + accounting add-on** ($300 – $1,000+/loc/mo) | Enterprise field-service platform | Built for 30+ tech shops, not 4 – 15 tech operators; price gates small shops out |
| **QBO + Jobber/HCP DIY** | Owner reconciles + categorizes themselves | The handoff is the daily pain; owner's time isn't free |

### Tone & Language Shifts for This Vertical
The horizontal Poof brand voice ("magical but professional") still applies, but on HVAC landing pages and outreach, lean into these shifts:

- **Use trade vocabulary:** "shops" instead of "businesses," "techs" instead of "employees," "trucks" as a sizing proxy, "service calls" instead of "appointments"
- **Talk in specific dollars:** "$1,200 a month for a bookkeeper" beats "high bookkeeping costs"
- **Reference their actual tools:** Jobber, Housecall Pro, ServiceTitan, FieldEdge — by name. They use them daily; vague language signals you don't know their world
- **Reference their daily reality:** "between service calls," "the 4pm rush," "shoulder season," "supply house run," "the Henderson install"
- **Skip startup language:** Avoid "founders," "entrepreneurs," "creators," "side hustle" — these readers built a real business from the ground up and don't identify with that vocabulary
- **Use "owner-operator" or "shop owner"** — not "small business owner" (too generic), not "executive" (too formal)
- **Direct, not magical:** The "poof, it's done" line still works but pair it with concrete numbers. ("Poof. Per-job P&L within 48 hours.")
- **No exclamation points in marketing copy.** Trades audience reads them as inauthentic.

### Key Differentiators for the Trades Vertical
What HVAC owners get with Poof that no alternative offers all together:

1. **Per-job profitability within 48 hours of job completion** (not weeks)
2. **Direct Jobber + Housecall Pro sync** — no manual rekeying
3. **Managed-service tier** — owner doesn't have to use the software themselves
4. **Former controller reviewing every customer-facing decision** — not just AI guessing
5. **Slack-based interface** — owners get answers about their business without logging into yet another portal
6. **Audit-grade ledger underneath** — built on proper double-entry bookkeeping with reversal entries; survives any IRS or insurance audit
7. **Built for $750K – $3M shops specifically** — not enterprise overkill, not solo-truck underpowered
8. **Replaces your current bookkeeper at lower cost** — and delivers faster, more granular books

### Trust & Social Proof Elements (for HVAC Landing Page)
- **Lead with Austin's credentials:** "Built by Austin Semple, a former controller with 10+ years of audit and controller experience working with small service businesses."
- **Anchor on accounting rigor:** "Real double-entry bookkeeping with reversal entries — not just AI guessing categories"
- **Emphasize the human layer:** "AI does the work. A credentialed human signs off on every customer-facing decision."
- **30-day money-back guarantee** on the managed-service trial — reduces perceived risk
- **Founder-led onboarding** for the first 50 customers — Austin personally handles every new shop, position as a perk
- **"Replace your current bookkeeper"** — concrete swap, not abstract upgrade

### What the HVAC Landing Page Must Include
For the website project building `/hvac` or a dedicated subdomain:

1. **Hero section** with HVAC-specific headline (e.g. *"The bookkeeping service for HVAC and plumbing shops. Per-job profitability in 48 hours. Monthly close in 24."*) — show a sample per-job P&L screenshot, not the general Poof dashboard
2. **Three-up "the pain you have today"** — late P&L, no per-job visibility, manual Jobber/QBO handoff
3. **"How it works in 60 seconds"** — Plaid connect + Jobber/HCP connect + monthly close lands in Slack
4. **Per-job P&L sample** — screenshot or animated mockup of a real per-job report
5. **Pricing table** — Managed for Trades $999, Managed for Trades Plus $1,499, $1,500 onboarding, $250 refundable pilot
6. **"Replaces your current bookkeeper"** swap-out diagram (current vs Poof)
7. **Austin's bio section** — controller background, why he built Poof for trades
8. **FAQs aimed at HVAC objections** — "Do I need to switch from Jobber?" (no), "What if I'm on ServiceTitan?" (we'll talk), "Will my CPA still work with me?" (yes — we coordinate at year-end), "Is this real bookkeeping or just AI guessing?" (real, with controller review), "What if I want to leave?" (export your full QBO file anytime)
9. **CTA:** "Book a 20-minute call" → Calendly. Secondary CTA: "Start the $250 pilot" (after page is mature)

### Outreach Voice (Cold Email & LinkedIn)
The cold outreach voice should match the landing page voice. Drafts already produced separately; in BRAND_KIT terms:
- Personalize one specific thing per email (city, truck count, or job type)
- Lead with their pain, not Poof's features
- Specific dollar amounts in the body and subject
- Always include AI-drafting disclosure in the P.S.
- One CTA — a specific call time, never "let me know if interested"

---

## Changelog

### May 28, 2026 — Vertical positioning: Trade Contractors (HVAC, Plumbing, Electrical)
- Added the **Vertical Positioning** section above for HVAC, plumbing, and electrical service contractors
- Established **Poof Managed for Trades** tier at **$999/mo** (1.5M shops) and **$1,499/mo** (1.5 – 3M shops) — separate product from the $29/mo Poof Professional self-serve plan
- Defined HVAC-specific positioning statement, outcome headlines, pain points, and competitive alternatives (Workyard, Knowify, ServiceTitan, part-time bookkeepers — NOT QuickBooks)
- Established tone shifts for trades audience (direct, dollar-specific, trade vocabulary, no exclamation points)
- Leveraged Austin's controller credentials as core trust element — "AI does the work, a controller reviews the calls that matter"
- Strategic rationale: trades chosen over restaurants after objective re-evaluation of cold-email response rates, margins, peer-referral culture, and competitive density. Managed-service positioning IS the moat, not software features
- For the website project: create a dedicated HVAC landing page (`/hvac` route or subdomain) using the spec at the end of the Vertical Positioning section. Do NOT replace the general Poof landing page

### March 31, 2026 — AI chat folders, multi-session management, mobile navigation redesign
- Added **AI Chat Folders** — organize conversations into folders (like ChatGPT Projects) with full CRUD: create, rename, expand/collapse, and delete. Deleting a folder shows a warning with conversation count and removes all contained sessions. Collapsed folder state persists via localStorage.
- Added **Multi-Session Conversations** — create, rename, switch between, and delete multiple AI chat sessions. Sessions display relative timestamps (time of day for today, "Yesterday", "Xd ago") in the user's company timezone.
- Added **Drag-and-Drop Session Management** — in desktop expanded mode, drag sessions between folders or to "Unfiled" using @dnd-kit. Pointer sensor with 8px activation distance prevents accidental drags.
- Added **"Move to" Menu** — available across all views (desktop dropdown hover, mobile session list, expanded mode), allows moving sessions between folders or to unfiled via a context menu.
- Added **Three AI Chat View Modes**: sidebar (resizable 350–700px with dropdown session/folder picker), full-screen expanded mode (persistent left panel with drag-and-drop), and mobile (full-width drawer with dedicated session list).
- Added **Navigation-Aware Chat Behavior** — navigating to another page via sidebar nav, logo click, or browser back/forward automatically collapses expanded mode to sidebar on desktop, or fully closes the assistant on mobile.
- Redesigned **Mobile Navigation Drawer** — now full-screen width with a branded header (PoofLogo + close button), replacing the previous partial-width drawer with inaccessible top bar. Create dropdown z-index corrected to render above the nav drawer.
- Backend: new `chat_folders` table with RLS policies, 5 new API routes (folder CRUD + session move), `folderId` column on `chat_sessions` with `ON DELETE SET NULL`
- Updated **Competitive Positioning** with 19 differentiators (was 18)
- Updated feature count from 68 to 69

### March 22, 2026 — Scheduled reports, report drill-down, AI expansion, performance overhaul
- Added **Scheduled Report Delivery** — automated email delivery of any of the 13 financial reports on a daily, weekly, monthly, or quarterly schedule as PDF or CSV to multiple recipients. Managed from Settings with enable/disable toggles, manual trigger, and edit/delete. Cron-based execution with timezone support.
- Added **Report Drill-Down** — click any account row in Balance Sheet, Income Statement, or Trial Balance to see underlying journal entries in a modal; click a journal entry to open the edit modal. Running balances use natural-balance convention.
- Added **Shareable Report URLs** — report filter state (date range, basis, hide-zero-balances) persists in URL search params via new `useUrlFilters` hook, enabling bookmarkable and shareable filtered reports
- Expanded **Poof AI Capabilities** from 9 to 15 features:
  - AI can now create estimates, expenses, bills, credit notes, deposits, customers, vendors, and products via natural language
  - AI can send invoices and credit notes via email (`send_invoice`, `send_credit_note` tools)
  - AI can update existing records (invoices, customers, vendors, expenses, bills, transactions)
  - AI generates all 13 financial reports on request
  - AI imports bank statement PDFs via chat — upload a PDF, AI parses with GPT-4o Vision (Puppeteer + pdf.js for PDF-to-image conversion), presents transaction summary, imports to selected bank account with BRAID auto-categorization
  - AI provides guided onboarding walkthrough with UI navigation and element highlighting
  - Uploaded files (receipts, invoices, PDFs) are automatically attached to any record the AI creates
- Tuned **AI assistant personality** — responses are now concise and action-oriented (2–4 sentences, max_tokens reduced from 1000 to 600)
- Added **"Reply to Poof" chip** on dashboard below AI briefing summary — opens chat sidebar with one click
- Restyled **AI assistant sidebar header** from flat gray (`#e4e4e8`) to a branded purple-to-teal gradient at ~25% opacity
- Removed floating magic icon overlay from assistant toggle button for cleaner UI
- Enhanced **Dashboard charts** with Y-axis dollar labels ($0, $5K, $12.5K, $1.2M) on all chart tiles
- Fixed **Expenses by Category** dashboard tile to include Plaid-synced and bank statement-imported transactions (not just manual expenses/bills)
- Added **skip option for opening balance** during Plaid account setup (useful when importing full transaction history)
- Fixed **Plaid liability accounts** — made liabilities an optional Plaid product so institutions without credit products (e.g., Wells Fargo checking-only) don't error
- Fixed **duplicate detection** — payments no longer incorrectly match with reversals (added transaction type to duplicate matching query)
- Fixed **invoice sending by number** — backend now supports sending invoices and credit notes by invoice number (e.g., "INV-016"), not just UUID
- Added **bank name auto-detection** for statement PDF uploads (pattern matching for Wells Fargo, Chase, Citi, BofA, Capital One, PNC, etc.)
- **UI performance overhaul** — disabled MUI ripple globally, replaced `transition: 'all'` with specific property transitions across 25+ components (buttons 0.3s → 0.15s, cards 0.2s, list items 0.12s), reduced sidebar layout shift from 225ms to 150ms, reduced count-up animation from 800ms to 400ms, extracted keyframes to module-level constants
- Added **Onboarding survey** (8-question progressive flow: role, business type, team size, priorities, current tools, tech comfort, industry, referral source) with conditional logic
- Updated **Competitive Positioning** with 18 differentiators (was 15, now 19)
- Updated feature count from 60 to 68
- Added **AI Assistant Header** gradient to Color Palette

### March 5, 2026 — Estimates, dashboard redesign, AI assistant upgrade
- Added **Estimates** to Invoicing & Payments (create, send, convert to invoice with PDF export and custom branding)
- Added **Estimate** to Create dropdown menu
- Redesigned **Dashboard** with personalized morning brief (time-aware greeting, 4 animated KPIs with count-up effect), proactive "Needs Your Attention" alerts, global date filter (replaces per-tile filters), P&L spanning full width, staggered fade-in tile animations, semantic color system, actionable empty states with CTAs, and quick-action buttons
- Upgraded **Poof AI assistant** with 3 new tools: `search_accounts` (look up chart of accounts), `create_account` (create new accounts autonomously), `create_recurring_journal` (set up depreciation, amortization, rent, and insurance schedules)
- Fixed **journal entry creation** — AI now validates that accounts exist in the chart of accounts before posting entries
- Updated AI system prompt so Poof handles accounting setup autonomously without asking users for account numbers
- Renamed internal AI references from "Preston" to "Poof" / "assistant" across backend and frontend
- Updated feature count from 56 to 60 (was listed as "40+" — corrected to actual count)
- Updated **Competitive Positioning** with 15 differentiators (was 13)

### March 2, 2026 — Positioning overhaul (Obviously Awesome framework)
- **New hero headline:** "Bookkeeping That Does Itself" (replaces "Magical Bookkeeping for Small Business")
- **New hero subhead:** "AI categorizes your transactions, reconciles your accounts, and closes your books — so you never touch a spreadsheet again."
- Added **Positioning** section with positioning statement, target customer profiles, competitive framing, and outcome-oriented headline table
- Added **Supporting Headlines** for feature sections, ads, and social
- Added **Messaging Don'ts** to prevent common positioning mistakes
- Updated **Pricing** section to explicitly prohibit tier language (Basic/Pro/Enterprise) in customer-facing content
- Added **Pricing Messaging** guidance for comparison framing against QuickBooks
- Updated **Competitive Positioning** intro to emphasize threading contrast through all marketing
- Updated **meta description** and **OG tags** in index.html
- Rewrote **SubscriptionPaywall** component to single plan (was incorrectly showing Basic $29 / Pro $59 tiers)
- Updated **one-liner** from "Magical bookkeeping for small business" to "Bookkeeping that does itself"

### February 28, 2026 — Major feature update
- Added **Budgeting & Forecasting** as new feature group (5 features): AI-generated budgets, budget lifecycle, variance dashboard, cash flow forecasting, budget alerts
- Added **Recurring Invoices** and **Automated Invoice Follow-ups** to Invoicing group
- Added **Auto-reconciliation** to Banking group
- Added **Budget vs Actual** report (13 total reports now)
- Added **Poof AI Capabilities** as dedicated feature group: business-context awareness, books health check, sparkle animation
- Updated **Dashboard** to reflect drag-and-drop tile layout, budget status card, and forecast summary card
- Confirmed **Plaid sync** remains at 30 days (use bank statement import for older data)
- Updated **Competitive Positioning** with 13 differentiators (was 8)
- Updated feature count from 30+ to 40+
- Added **Command bar** (Cmd+K) to Productivity group

### February 24, 2026 — Initial brand kit created
- Consolidated brand colors, typography, logo specs, and product overview into single document
- Source: theme files (`shared-theme.ts`, `poofTheme.ts`, `poof-variables.css`), `PoofLogo.tsx`, `WEBSITE_OUTLINE_UPDATED.md`, `README.md`

---

*This document should be updated whenever there are changes to: branding/colors, logo, features, pricing, messaging, or competitive positioning.*
