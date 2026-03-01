# Poof Brand Kit

> **Living document** — Last updated: February 28, 2026
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
14. [Changelog](#changelog)

---

## What is Poof?

Poof is an AI-powered bookkeeping app for small businesses. It automates the tedious parts of bookkeeping — transaction categorization, reconciliation, invoicing, receipt scanning, budgeting, and cash flow forecasting — so business owners can spend less time on the books and more time running their business.

**One-liner:** "Magical bookkeeping for small business."

**Website:** poofai.com

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

### AI Assistant — "Preston"
Poof includes a built-in AI assistant named **Preston**. Preston lives in the sidebar, is always one click away, and is context-aware — he knows your company name, industry, business type, location, and timezone. Preston helps with onboarding, answers bookkeeping questions, and can perform actions like creating invoices, categorizing transactions, running a books health check, and guiding you through month-end close. He features a signature sparkle animation effect. When creating content, Preston can be referenced as "your AI bookkeeper" or "Poof's AI assistant, Preston."

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
- **"Magical Bookkeeping for Small Business"** — Main hero headline
- **"Poof. It's done."** — Primary tagline

### Supporting Messages
- "Bookkeeping That Actually Makes Sense"
- "Every small business owner deserves financial clarity"
- "5-minute setup, 90% fewer manual entries"
- "AI-powered bookkeeping that learns your business"
- "Tell AI your goal, get a budget in seconds"
- "See where your cash is headed — 12 months out"

### Tone of Voice
- Conversational, not corporate
- Confident, not arrogant
- Simple, not dumbed-down
- Magical, not gimmicky

---

## Product Overview

### What Poof Does
Poof automates ~90% of bookkeeping tasks for small businesses (1–50 employees, 100–10,000 monthly transactions). Users connect their bank accounts, and the AI handles categorization, reconciliation, invoicing, budgeting, forecasting, and reporting.

### 40+ Features in 9 Groups

#### 1. AI-Powered Automation (9 features)
1. AI transaction categorization (BRAID engine)
2. Preston AI assistant (sidebar-based, context-aware, with sparkle animation)
3. AI chart of accounts generation
4. Automated daily bookkeeping
5. AI-powered recurring charge detection (frequency analysis, confidence scoring, next payment prediction)
6. Receipt & invoice scanning (OCR) — photo upload, data extraction, vendor ID, duplicate detection, HEIC/HEIF support
7. Smart transaction matching — AI matches invoices to deposits, bills to payments, with partial payment support
8. AI-guided onboarding — Preston walks new users through setup
9. AI-powered budget & forecast generation — natural language goal input, AI builds line items and 12-month projections

#### 2. Invoicing & Payments (7 features)
1. Invoicing (PDF export, email delivery, custom branding/logo, line-item tax & discounts)
2. Credit notes
3. Payment tracking & payment receipts
4. Products & services catalog
5. Customer management (full database with contact info, billing/shipping addresses, sales reporting)
6. Recurring invoices — weekly, monthly, quarterly, or yearly schedules with auto-generation and auto-send
7. Automated invoice follow-ups — configurable reminders at due date, 3, 7, 14, and 30 days past due with smart pause on payment

#### 3. Expense & Bill Management (5 features)
1. Expense tracking
2. Mileage tracking (business travel)
3. Bill management
4. Vendor management
5. Transaction matching

#### 4. Banking & Reconciliation (6 features)
1. Bank connection via Plaid (12,000+ banks, 2-year transaction history on first sync)
2. Bank statement import (CSV/PDF, up to 25MB, AI-powered parsing, intelligent column mapping, duplicate prevention)
3. Reconciliation (multi-step wizard, reconciliation reports, history)
4. Auto-reconciliation (opt-in, weekly or monthly, with notifications)
5. Deposits
6. Multi-account support

#### 5. Accounting & Reporting (6 features)
1. Double-entry accounting
2. 13 financial reports: Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail Report, AR Aging, AP Aging, Customer Sales, Vendor Expenses, Sales by Product/Service, Expenses by Category, Budget vs Actual
3. Financial import (bulk chart of accounts, transactions, customers/vendors, invoices)
4. Accrual & cash basis toggle
5. Recurring journal entry templates (daily, weekly, monthly, quarterly, annually)
6. Reversing journal entries (automatic accrual reversals)

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

#### 8. Productivity & Workflow (5 features)
1. Drag-and-drop dashboard with KPIs (cash flow charts, P&L tracking, top expense categories, budget status, forecast summary — all tiles reorderable)
2. Global search (across transactions, invoices, bills, expenses)
3. Notification center (in-app and email)
4. Transaction approval workflows
5. Command bar (Cmd+K) — natural language navigation

#### 9. Preston AI Capabilities (6 features)
1. Business-context-aware chat (knows your company, industry, timezone)
2. Books health check & month-end close guidance
3. Invoice creation, editing, and payment receipt recording
4. Budgeting, variance, and forecasting guidance
5. Recurring charge analysis and questions
6. Chart of accounts setup (upload, manual, auto-generate, or guided)

---

## Key Numbers & Claims

| Claim | Value |
|---|---|
| Total features | 40+ (all included in every plan) |
| Bank connections | 12,000+ (via Plaid) |
| Financial reports | 13 |
| AI accuracy rate | 95% |
| Setup time | 5 minutes |
| Manual entry reduction | 90% |
| Plaid sync window | 2-year transaction history on first connect (use bank statement import for older transactions) |
| Team roles | 5 (Owner, Admin, Accountant, Bookkeeper, Viewer) |
| Granular permissions | 26 |
| Free trial | 30 days |
| Cash flow forecast horizon | 12 months with confidence bands |

---

## Pricing

**One plan. All features. Simple.**

| Billing | Price | Notes |
|---|---|---|
| Monthly | $29/mo | |
| Monthly (launch special) | **$14.50/mo** | 50% off first 3 months |
| Annual | $290/year ($24.17/mo) | Save $58 |

- No feature tiers — every plan gets everything
- 30-day free trial, no credit card required
- Launch special: 50% off first 3 months

---

## Competitive Positioning

### Poof vs QuickBooks

| | Poof | QuickBooks |
|---|---|---|
| **Starting price** | $14.50/mo (all features) | $38/mo+ (tiered, features locked behind higher plans) |
| **AI assistant** | Preston (built-in, context-aware) | No |
| **AI budgeting & forecasting** | Yes (natural language goal input, 12-month projections) | No |
| **Auto chart of accounts** | Yes | No |
| **Receipt scanning + OCR** | Yes (with duplicate detection) | Yes (but limited in lower tiers) |
| **Recurring charge detection** | Yes (AI-powered) | No |
| **Recurring invoices** | Yes (with automated follow-ups) | Yes (but limited in lower tiers) |
| **Smart transaction matching** | Yes | Limited |
| **Cash flow forecasting** | Yes (AI-generated with confidence bands) | Limited (higher tiers only) |
| **RBAC** | 5 roles, 26 permissions | Limited |
| **Audit logs** | Yes (SOC 2, PII masking) | Limited |
| **Drag-and-drop dashboard** | Yes (reorderable tiles) | No |
| **Pricing model** | Flat — one plan | Tiered — must upgrade for features |

### Key Differentiators (What Poof Has That QuickBooks Doesn't)
1. AI assistant (Preston) with business-context awareness and books health checks
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
13. Drag-and-drop customizable dashboard

---

## Founder

**Austin Semple** — CEO & Founder
- 10+ years of auditing and controller experience
- Built Poof to solve the bookkeeping pain points he witnessed firsthand working with small businesses

### Company Timeline
- **2015–2025** — Austin's auditing and controller career
- **June 2025** — Poof is born
- **2026** — Reimagining bookkeeping with AI: budgeting & forecasting, recurring invoices with automated follow-ups, receipt scanning, recurring charge detection, bank statement import, 13 reports, 40+ features

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

## Changelog

### February 28, 2026 — Major feature update
- Added **Budgeting & Forecasting** as new feature group (5 features): AI-generated budgets, budget lifecycle, variance dashboard, cash flow forecasting, budget alerts
- Added **Recurring Invoices** and **Automated Invoice Follow-ups** to Invoicing group
- Added **Auto-reconciliation** to Banking group
- Added **Budget vs Actual** report (13 total reports now)
- Added **Preston AI Capabilities** as dedicated feature group: business-context awareness, books health check, sparkle animation
- Updated **Dashboard** to reflect drag-and-drop tile layout, budget status card, and forecast summary card
- Updated **Plaid sync** from 30 days to 2-year transaction history on first connect
- Updated **Competitive Positioning** with 13 differentiators (was 8)
- Updated feature count from 30+ to 40+
- Added **Command bar** (Cmd+K) to Productivity group

### February 24, 2026 — Initial brand kit created
- Consolidated brand colors, typography, logo specs, and product overview into single document
- Source: theme files (`shared-theme.ts`, `poofTheme.ts`, `poof-variables.css`), `PoofLogo.tsx`, `WEBSITE_OUTLINE_UPDATED.md`, `README.md`

---

*This document should be updated whenever there are changes to: branding/colors, logo, features, pricing, messaging, or competitive positioning.*
