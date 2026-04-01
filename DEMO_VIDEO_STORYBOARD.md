# Poof Demo Video — Storyboard & Script

## Overview

| Detail              | Value                                      |
| ------------------- | ------------------------------------------ |
| **Target Length**    | 75 seconds (homepage cut)                  |
| **Extended Cut**    | 2:30 (shareable version, same footage)     |
| **Tone**            | Confident, calm, conversational — not salesy |
| **Voiceover**       | You (Austin) or professional VO            |
| **Music**           | Subtle, modern lo-fi or ambient underscore |
| **Recording Tool**  | ScreenStudio or Loom (ScreenStudio preferred) |
| **Resolution**      | 1920x1080 minimum, 4K preferred            |

---

## Homepage Cut (75 seconds) — Shot-by-Shot

---

### SHOT 1 — The Pain (0:00–0:08)

**On Screen:**
Quick-cut montage (2 seconds each):
- A messy spreadsheet full of transaction rows
- A QuickBooks pricing page showing $38 / $65 / $200 tiers
- A pile of receipts on a desk (stock photo or staged)
- Someone rubbing their temples at a laptop

**Voiceover:**
> "You started a business to do what you love — not to spend your nights categorizing transactions."

**Build Requirements:** None (stock footage / staged photos). Can also be simple text cards with the pain statements if you want to keep it all-digital.

---

### SHOT 2 — Introducing Poof (0:08–0:14)

**On Screen:**
Poof logo animation, then transition to the Poof login/landing screen. User clicks "Start Free Trial" or is already logged in. We see the app load into the **onboarding flow**.

**Voiceover:**
> "Meet Poof. Bookkeeping that does itself."

**Build Requirements:**
- [ ] Login or welcome screen
- [ ] Smooth transition into the app (post-login state)

---

### SHOT 3 — Connect Your Bank (0:14–0:24)

**On Screen:**
1. Onboarding step: "Connect your bank account"
2. Click "Connect" — Plaid modal opens (or a mockup of it)
3. Select a bank (e.g., Chase), show it connecting
4. Success state: bank connected, transactions start flowing in
5. Brief flash: "12,000+ banks supported"

**Voiceover:**
> "Connect your bank in seconds. Poof syncs your transactions automatically — from over twelve thousand supported banks."

**Build Requirements:**
- [ ] Bank connection onboarding step UI
- [ ] Plaid modal (real or realistic mockup)
- [ ] Bank connected success state
- [ ] Transactions populating after connection (can be seeded demo data)

---

### SHOT 4 — AI Categorization Magic (0:24–0:40) ★ THE HERO MOMENT

**On Screen:**
1. Transaction list with 8-12 uncategorized transactions visible
2. Click a button or toggle like "Run AI Categorization" (or it happens automatically)
3. **The magic moment:** Transactions get categorized one-by-one in a smooth cascade animation — each row gets a category badge (Office Supplies, Software, Meals & Entertainment, etc.)
4. A small "95% accuracy" badge or confidence indicator appears
5. One transaction is highlighted where the user can see the AI's reasoning or quickly approve/adjust

**Voiceover:**
> "Poof's AI reads every transaction, learns your patterns, and categorizes everything automatically. Ninety-five percent accuracy — and it gets smarter over time."

**Build Requirements:**
- [ ] Transaction list view with 8-12 realistic demo transactions
- [ ] Uncategorized → categorized animation/transition (cascade effect)
- [ ] Category badges on each transaction row
- [ ] Visual indicator of AI confidence or accuracy
- [ ] Ability to click a transaction and see/adjust the category

**Notes:** This is the most important shot. Spend time making the animation feel satisfying. The cascade of categories appearing should feel like magic — like the "Poof" brand moment.

---

### SHOT 5 — Meet Poof AI Assistant (0:40–0:55) ★ KEY DIFFERENTIATOR

**On Screen:**
1. User clicks the Poof chat icon (sidebar opens with sparkle animation)
2. Poof greets with context: "Hi Austin! Your books are looking good this month."
3. User types: **"Create an invoice for Acme Corp for $2,500 for consulting services"**
4. Poof responds: "Done! I've created Invoice #1004 for Acme Corp — $2,500 for Consulting Services. Want me to send it?"
5. Brief flash of the created invoice preview

**Voiceover:**
> "Need help? Just ask Poof — your built-in AI assistant. Create invoices, check your books health, get answers — all in plain English."

**Build Requirements:**
- [ ] Poof AI sidebar with sparkle open animation
- [ ] Chat interface with message history
- [ ] Contextual greeting (knows user name, business context)
- [ ] Invoice creation via chat — Poof receives the request and confirms
- [ ] Invoice preview that appears after creation
- [ ] Smooth, responsive chat typing/response animation

---

### SHOT 6 — Dashboard & Reports (0:55–1:05)

**On Screen:**
1. Navigate to Dashboard — show the customizable KPI tiles:
   - Cash flow chart (line graph trending up)
   - Monthly P&L summary tile
   - Top expenses tile
   - Outstanding invoices count
2. Quick click into a **Profit & Loss report** — clean, professional, with real-looking numbers
3. Optional: drag a tile to reposition it (showing customizability)

**Voiceover:**
> "Your dashboard shows everything that matters at a glance. Thirteen financial reports — generated in seconds, not hours."

**Build Requirements:**
- [ ] Dashboard with 4-6 KPI tiles populated with demo data
- [ ] Cash flow line chart (trending positively)
- [ ] P&L summary tile with monthly figures
- [ ] Outstanding invoices tile
- [ ] Top expenses tile
- [ ] Clickable Profit & Loss report with realistic demo numbers
- [ ] (Optional) Drag-and-drop tile repositioning

---

### SHOT 7 — The Close (1:05–1:15)

**On Screen:**
1. Return to dashboard or a clean Poof-branded screen
2. Text overlay or animated text:
   - **"69 features. One price. $29/month."**
   - **"Start your free trial today."**
3. Poof logo + tagline: **"Poof. It's done."**
4. CTA button: "Start Free Trial →"

**Voiceover:**
> "Sixty features. One price. No surprises. Start your free trial — and get your nights back. Poof. It's done."

**Build Requirements:**
- [ ] Clean branded closing screen or overlay
- [ ] Animated text appearance for pricing/CTA

---

## Extended Cut (2:30) — Additional Shots

These shots go **between Shot 6 and Shot 7** in the longer shareable version.

---

### SHOT 6A — Invoicing Workflow (after Shot 5 in extended cut)

**On Screen:**
1. Navigate to Invoices section
2. Show a list of invoices with statuses (Sent, Paid, Overdue)
3. Click "New Invoice" — show the invoice builder
4. Fill in a line item, add tax, see the total calculate
5. Click "Send" — show the confirmation

**Voiceover:**
> "Professional invoices in seconds. Track payments, send automatic reminders, and never chase a client again."

**Build Requirements:**
- [ ] Invoice list view with status badges (Sent, Paid, Overdue, Draft)
- [ ] Invoice creation form (customer, line items, tax, discounts)
- [ ] Invoice preview / PDF view
- [ ] Send confirmation

---

### SHOT 6B — Receipt Scanning

**On Screen:**
1. Click "Upload Receipt" or drag a receipt image
2. OCR processes it — show a brief loading/scanning animation
3. Fields auto-populate: vendor, amount, date, category
4. User confirms with one click

**Voiceover:**
> "Snap a photo of any receipt. Poof's OCR reads it, extracts the details, and files it — automatically."

**Build Requirements:**
- [ ] Receipt upload UI (drag-and-drop or file picker)
- [ ] OCR scanning animation
- [ ] Auto-populated fields from receipt data
- [ ] One-click confirm/save

---

### SHOT 6C — Bank Reconciliation

**On Screen:**
1. Navigate to Reconciliation
2. Show the reconciliation wizard — bank balance vs. book balance
3. A few transactions get matched automatically
4. Difference reaches $0.00 — "Reconciled!" success state

**Voiceover:**
> "Reconciliation used to take hours. Now Poof matches your transactions and balances your books — while you sleep."

**Build Requirements:**
- [ ] Reconciliation wizard UI (bank balance, book balance, difference)
- [ ] Transaction matching interface (checkboxes or auto-match indicators)
- [ ] $0.00 difference / success state animation

---

### SHOT 6D — Budgeting & Forecasting

**On Screen:**
1. Navigate to Budgets
2. Show the AI budget generator — user types "20% revenue growth this year"
3. AI generates a complete monthly budget
4. Flip to the variance dashboard — bar chart showing budget vs. actual
5. Quick flash of the 12-month cash flow forecast with confidence bands

**Voiceover:**
> "Tell Poof your goals in plain English — and get a complete budget in seconds. Track variance in real time, and see twelve months into the future with AI-powered forecasting."

**Build Requirements:**
- [ ] Budget creation screen with natural language input
- [ ] AI-generated budget output (monthly breakdown)
- [ ] Variance dashboard with bar charts (budget vs actual)
- [ ] Cash flow forecast chart with confidence bands (high/low range)

---

## Build Checklist (All Screens Needed)

### Must-Have for Homepage Cut (75s)

| # | Screen / State | Priority |
|---|----------------|----------|
| 1 | Login / Welcome screen | Medium |
| 2 | Bank connection onboarding + Plaid modal | High |
| 3 | Transaction list (uncategorized state) | **Critical** |
| 4 | Transaction list (AI-categorized state with animation) | **Critical** |
| 5 | Poof AI sidebar chat (open/close with sparkle) | **Critical** |
| 6 | Poof: invoice creation conversation | High |
| 7 | Invoice preview (generated by Poof) | Medium |
| 8 | Dashboard with KPI tiles (populated) | High |
| 9 | Profit & Loss report (populated) | High |
| 10 | Branded closing screen | Low |

### Additional for Extended Cut (2:30)

| # | Screen / State | Priority |
|---|----------------|----------|
| 11 | Invoice list with statuses | Medium |
| 12 | Invoice creation form | Medium |
| 13 | Receipt upload + OCR scanning | Medium |
| 14 | Reconciliation wizard | Medium |
| 15 | Budget AI generator | Medium |
| 16 | Variance dashboard | Medium |
| 17 | Cash flow forecast chart | Medium |

---

## Demo Data You'll Need

Seed your demo environment with realistic data:

- **Company:** A fictional small business (e.g., "Riverside Design Co." or use your own)
- **Transactions:** 30-50 realistic transactions over 2-3 months
  - Mix of: rent, software subscriptions, office supplies, client payments, meals, utilities, payroll
- **Invoices:** 4-6 invoices in various states (Draft, Sent, Paid, Overdue)
- **Customers:** 3-4 fictional customers (Acme Corp, Riverside Properties, etc.)
- **Bank Account:** One checking account with a realistic balance ($12,000-$45,000)
- **Reports:** P&L and Balance Sheet should calculate correctly from the seeded transactions
- **Budget:** One active budget with some months having actual data for variance comparison

---

## Recording Tips

1. **Use ScreenStudio** ($89 one-time) — it auto-zooms on clicks, smooths cursor movement, and makes screen recordings look cinematic with zero editing skill
2. **Record at 2x your target resolution** if possible, then downscale for sharpness
3. **Use a clean browser** — no bookmarks bar, no extensions, no notifications
4. **Slow down your clicks** — move deliberately, pause 0.5s before each click so viewers can follow
5. **Record each shot separately** — easier to edit and re-record individual sections
6. **Hide your dock and menu bar** on Mac (System Settings → Desktop & Dock)
7. **Record the voiceover separately** — use a decent mic (AirPods Pro work in a pinch), record in a quiet room, speak slightly slower than normal conversation pace
8. **Background music:** Search "SaaS demo background music" on Epidemic Sound or Artlist — look for something minimal and modern, not corporate

---

## Tone Guide for Voiceover

- **Do:** Sound like you're showing a friend something cool you built
- **Don't:** Sound like a car commercial or infomercial
- **Pace:** ~140 words per minute (slightly slower than conversation)
- **Energy:** Confident and warm, not hyped up
- **Key moments to emphasize:**
  - "Does itself" (hero line)
  - "Ninety-five percent accuracy" (proof point)
  - "Plain English" (accessibility)
  - "Poof. It's done." (closer — let it land with a beat of silence)
