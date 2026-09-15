# Poof Brand Kit

> **Living document** — Last updated: September 15, 2026
> Hand this file to website creators, social media managers, and content creators so they have everything they need.

> **⭐ TWO BUSINESSES (decided 2026-09-12; charter in `TWO_BUSINESSES.md`, which sits above this file).**
> **Poof is the software.** Its customer is the bookkeeper, controller, or firm — and the businesses they keep books for, who are Poof's tenants. Poof speaks as a product: "AI is a tool, never a persona."
> **The Augmented Operator is the managed service and the persona.** It runs the trades bookkeeping practice — HVAC, plumbing, electrical shops at $1,200 / $1,500 / Pro $2,400 — *on Poof*, and it speaks as Austin, first person, building in public. It is Poof's distribution: bookkeepers learn the practice model; Poof is what the practice runs on.
> **What this means for copy:** the trades positioning in [Section 14](#vertical-positioning-trade-contractors-hvac-plumbing-electrical) is still right and still live — it is The Augmented Operator's, delivered on Poof. Until `theaugmentedoperator.com` exists (domain not yet registered as of 2026-09-15), the offer stays on poofai.com/trades and the homepage keeps leading with it, because it is the only offer generating calls. When the AO site is up, `/trades` moves there and poofai.com becomes the product site with firm pricing (an open decision: per client-org, or per firm with a cap). Do not put first-person copy on the Poof site; do not put a product changelog on the persona. How each refers to the other: Poof — *"Built by a practitioner. Runs The Augmented Operator."* AO — *"Runs on Poof."*
> Restaurants/multi-unit were deprioritized (features remain in the code but are not marketed).

---

## ⚠️ Outstanding website corrections (verified against the site repo 2026-09-15)

**Read this before writing any copy.** These are live pages that contradict this document.
**Re-check the page before acting on a line here.** This table has twice carried rows that were
already fixed on the site and simply never deleted, and the stale list got repeated back as though
it were current. A correction list nobody prunes becomes a source of false urgency.

| Page | What's wrong now | Should be |
|---|---|---|
| *(none open as of 2026-09-15 — the 2026-09-08 site update, which had sat uncommitted in the site repo for a week, was committed and deployed with the 2026-09-15 update; the narrow "correct something the rule did" wording it still carried in three places was widened in the same push)* | | |

**On the count.** The site states **128 features across 13 groups** as of 2026-09-15; `featureData.ts`
sums to 128. Verify the number by summing the groups, not by reading this table — this table has
been wrong about the site twice.

**Verified correct on 2026-08-27, do not re-raise:** `/trades` advertises the **$750 Job Margin &
Recovery Audit** (the $250 pilot is gone), and the tiers read $1,200 / $1,500 with $1,500 onboarding
and Pro from $2,400. `/poof-vs-quickbooks` compares against **QuickBooks Online Plus at $140/mo**
and footnotes **"as of August 2026, following Intuit's August 1, 2026 increase"**.

**Already correct, do not "fix":** the comparison page's Poof pricing ($79, $39.50 launch) is
current. The /trades tier prices ($1,200 / $1,500) and their revenue bands are current. The
**$2,400 Pro tier is deliberately not a third column** — see
[pricing](#vertical-pricing-tier--poof-managed-for-trades).

---

### Shipped to the site — do not re-raise as "to add"

| Shipped | What the site now says |
|---|---|
| 2026-08-27 · field service | `/trades`, `/hvac`, `/plumbing`, `/electrical` carry **"Your tech closes the job from a text. The invoice writes itself."** via the shared `FieldServiceSection`, including a completed service call becoming a job on its own |
| 2026-09-01 · unearned revenue | The same four pages carry **"A down payment isn't revenue until the job is done. A plan isn't revenue until the visit happens."** via `UnearnedRevenueSection`, with cancellation framed as a recorded refund-or-forfeit decision |
| 2026-09-08 · approvals & autonomy | The same four pages **plus the homepage** carry **"Nothing reaches your books without you seeing it first."** via `ApprovalsSection` — the evidence on the card, partial batch approval, rejection reasons, rules derived from reviewed work, and the self-pausing rule. `/poof-vs-quickbooks` gained an **Approvals & AI Autonomy** comparison category and a prose block on the bank-rule contrast; three FAQs were added to `featureData`; the three QuickBooks blog posts carry the bank-rule caution |
| 2026-09-15 · the close is a record; the reconciliation ties | The same four pages carry **"The close is a checklist with due dates, and the books tick it off themselves."** via `CloseRunSection` — the close as one record, the evidence-bound checklist, the nudge, and a reconciliation that carries outstanding items forward and shows one figure. `featureData` gained 10 features (118 → 128) across four groups; `/poof-vs-quickbooks` gained the close-checklist and carry-forward rows |
| Receptionist wording | Described as booking **and** dispatching, with both switches (auto-assignment, auto-text) independently disableable. Since 2026-09-14 the same booking, move and cancel are available from the assistant drawer, where they stage as cards |

> **What is proven, and what is still not.** As of 2026-09-08 the loop runs end to end against a
> real Postgres in CI: a sweep stages, a rule executes the rows it covers and leaves the rest, a
> correction pauses it, a paused rule covers nothing, a resumed one covers again, and a revoked one
> is inert while its earlier work stands. Everything in Group 13 may be described as working.
>
> **Still hold "handles it overnight on its own."** No nightly sweep has yet been watched doing
> this on live books. The mechanism is proven; the habit is not. Say what a rule *does*, not what a
> morning *feels like*, until one has been seen.
>
> **Proven 2026-09-14, and how.** The month-end close as a record, the checklist, and the rebuilt
> reconciliation were walked end to end on a real August close from a phone — the founder's own
> books, not a demo — and every defect that walk found was fixed the same day (ten PRs). Both are
> also covered by DB-backed integration tests (a July→August→September carry-forward; a close from
> start to signature to reopen). The nudge's mechanism is proven in the same suite; a live message
> has not yet been watched arriving. Say "a late task shows up in Approvals and on your phone";
> hold "it nagged me at 3am" until it has.

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
15. [Technical & Partner Positioning](#technical--partner-positioning)
16. [Changelog](#changelog)

---

## What is Poof?

**Poof is AI bookkeeping software built for the person who signs the close.** It does the work — categorization, reconciliation, job costing, the month-end close — and puts every write in front of a person before it reaches the books. A bookkeeper, controller, or firm runs their clients on it; a shop owner can run their own. The close is a record with a checklist that the books tick off themselves, the reconciliation carries last month's outstanding items forward and shows one figure, and nothing an AI proposes lands without someone seeing it first ([Group 13](#13-approvals--ai-autonomy-9-features)). It can also **answer the phone**: an AI receptionist triages the call, books a real slot on a real tech's calendar, dispatches the tech, and escalates anything unsafe to a human ([Group 11](#11-ai-receptionist--dispatch-12-features)) — and the same booking works from the assistant drawer.

**The managed service is a separate business.** *The Augmented Operator* runs a trades bookkeeping practice — HVAC, plumbing, and electrical shops doing $750K–$3M — on Poof, with a former controller signing every monthly close. Its positioning, pricing, and landing-page spec are in [Section 14](#vertical-positioning-trade-contractors-hvac-plumbing-electrical). It lives on poofai.com/trades until its own site is up. See `TWO_BUSINESSES.md` for which business a piece of copy belongs to.

**One-liner (brand):** "The work disappears. The evidence doesn't."
**One-liner (Poof):** "Bookkeeping that does itself — and shows its work before it lands."
**One-liner (self-serve, still in use):** "Bookkeeping that does itself."
**One-liner (The Augmented Operator, trades):** "Know which jobs make money — every month, from a real controller."

**Website:** poofai.com (product). theaugmentedoperator.com (the practice — not yet registered as of 2026-09-15).

---

## Positioning

### Who Poof Is For

**Primary — the person who signs the close (Poof, the software):**
- Bookkeepers and controllers who run several clients' books and want one place where the AI's work waits for their approval
- Firms adopting an AI practice model: the queue, the evidence, the rules they grant, and the record of who allowed what
- (Firm mode — one console over N client orgs — is the product shape Poof is growing into. Firm pricing is an open decision. Do not describe a firm console on the site until it exists.)

**Through The Augmented Operator — trade contractors (the managed service):**
- HVAC, plumbing, and electrical shop owners doing $750K–$3M who wait 2–3 weeks for last month's P&L
- Owner-operators who have no idea which jobs actually made money
- Shops paying a part-time bookkeeper $500–$1,500/mo and frustrated with slow, generic reports
- (Full profile in [Section 14](#vertical-positioning-trade-contractors-hvac-plumbing-electrical). They are Poof tenants like any firm's clients.)

**Self-serve software (any small business):**
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
3. **One price, everything included** — no tiers, no add-ons, no per-feature upsell. QuickBooks splits the same capability set across three plans and charges for the ones you grow into

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
| AI receptionist | "Every call answered. Every job on the board." |
| Deterministic safety triage | "A gas-smell call never gets booked for Tuesday." |

---

## Brand Identity

**The idea in one sentence: "The work disappears. The evidence doesn't."** Poof is a magic trick that shows its method: the work vanishes, the record stays. The name is the vanish; the period is the record. Everything below — the wordmark, the mark, the palette, the type, the voice — is that sentence set down in a different material.

### Personality
- **On the record** — Poof speaks the way a controller writes: short, declarative, dollar-specific sentences. The evidence, not the assertion. "Five prior transactions, all Job Materials" beats "smart categorization."
- **Direct** — Says what the product does, in the order it does it, with the figure attached. No warm-up sentence; no adjective doing the work a number should.
- **Specific** — Names the account, the amount, the date, the source. A claim without a figure is not finished.
- **Confident without hedging** — "The close is a record." "The reconciliation ties." Not "we aim to make closing easier." The product delivers; the copy states it.

**The ground is a ledger pad, not a stage.** Pale green paper under everything, white working surfaces on top of it, ink for text, one green for the accent, and red only for corrections. Nothing glows, nothing shimmers, nothing is a gradient. Poof is a set of books, and the brand looks like the page they are kept on.

### Brand Values
1. **Shows its work** — Nothing lands without a person seeing it first. Every proposal carries its evidence; every rule was derived from work someone reviewed ([Group 13](#13-approvals--ai-autonomy-9-features))
2. **Small Business First** — Every decision optimized for 1–50 employee businesses
3. **Trust & Security** — Bank-grade security, SOC 2 audit logging, 2FA, RBAC
4. **One figure** — The reconciliation ties; the close is a record. When the number on the screen and the number in the record are the same number, the month is done

### AI Assistant — Ask Poof
The assistant is a tool, not a persona. There is no separate character and no name other than the product's. It has no icon of its own — **the mark is its icon** — no sparkle, and no animation. Its header is flat paper with a rule and the mark.

It lives in a right-hand sidebar, is always one click away, and is context-aware — it knows your company name, industry, business type, location, and timezone. It gives concise, action-oriented responses (2–4 sentences) and can carry out the assistant's full set of actions (the count is in [Key Numbers & Claims](#key-numbers--claims)): preparing invoices, estimates, expenses, bills, credit notes, deposits, customers, vendors, and products; setting up the chart of accounts; recording journal entries; configuring recurring depreciation schedules; building budgets and forecasts; generating all 13 financial reports; sending invoices and credit notes via email; importing bank statement PDFs; booking, moving, or cancelling a visit; answering where things stand; and guiding users through onboarding and the month-end close. Uploaded receipts and invoices are automatically scanned and attached to the records it prepares.

**It shows its steps and says "preparing," never "created."** Nothing is written until a person approves it. What the assistant produces is a card in Approvals with the evidence on it, and the page that approves the card is the page that settles it ([Group 13](#13-approvals--ai-autonomy-9-features)). Copy about the assistant follows the same rule — "Poof prepared the invoice," "the entry is staged," never "Poof created" — and never gives it feelings, a face, or a first person. When creating content, refer to it as "the assistant," "Ask Poof," or simply "Poof."

The assistant supports **multi-session conversations** — users can create, rename, switch between, and delete multiple chat sessions. Sessions display relative timestamps (time of day for today, "Yesterday", "Xd ago") in the user's company timezone. Conversations can be organized into **folders** (similar to ChatGPT Projects) with full CRUD: create, rename, expand/collapse, and delete. Sessions are moved between folders via **drag-and-drop** (desktop expanded mode) or a **"Move to" menu** (all views). Deleting a folder prompts a warning and removes all conversations inside it. Collapsed folder state persists across sessions via localStorage.

The assistant has three view modes:
- **Sidebar** (default) — resizable right-hand panel (350–700px) with a dropdown session/folder picker
- **Full-screen expanded mode** (desktop) — full-page layout with a persistent left panel showing folders and conversations with drag-and-drop support
- **Mobile** — full-width drawer below the app bar with a dedicated full-screen session list for managing conversations and folders

Navigating to another page (via sidebar nav, wordmark, or browser) automatically collapses expanded mode back to the sidebar on desktop, or fully closes the assistant on mobile.

### Retired — do not reintroduce
The violet → indigo → teal gradient, gradient text, the sparkle icon and its animation, glow, shimmer, vapor, the swirl mark, the gold cloud, Righteous, Cabinet Grotesk, Inter, teal, indigo, violet, and the words "magic" and "magical" in copy. If a design or a sentence has any of these in it, it is the old brand.

---

## Logo Usage

Poof has two marks: the **wordmark** (the word, set in type, with a drawn period) and the **mark** (a full stop, boxed). Neither is a picture of the word. The wordmark is a component, not an image file.

### The Wordmark
Lowercase **poof** in Bricolage Grotesque 800, ink on paper. The period is the only colored element, and it is drawn, not typed.

| Property | Value |
|---|---|
| **Word** | `poof` — lowercase, always |
| **Font** | Bricolage Grotesque, weight 800 |
| **Tracking** | -0.05em |
| **Line-height** | 0.9 |
| **Color** | Ink `#12211A` on paper; paper `#EEF2EA` when on ink |
| **The period** | Drawn: a circle 0.2em wide, sitting on the baseline, 0.07em after the *f*, filled ledger green `#1B5E3F` (light green `#A9D8B8` when the wordmark is on ink) |
| **Desktop header** | 28px |
| **Phone header** | 22px |
| **Auth pages** | 44px |
| **Footer** | 26px |

- **Bricolage's own full stop is an oval and must not be used.** Never type `poof.`; the component draws the dot.
- The period is the story — *Poof. It's done.* The work vanishes and the dot is what stays. That is why it is green, and why it is the only color in the word.
- In running text, **Poof** is capitalized as a word ("Poof prepares the invoice"). The wordmark is not.

### The Mark
A full stop, boxed. A hard-cornered square outline in ink with a centered ledger-green dot. Two shapes, so it reads at 16px.

| Property | Value |
|---|---|
| **viewBox** | `0 0 64 64` |
| **Box** | `rect` from 2 to 62 (60 × 60), stroke 4, square corners. On paper: ink `#12211A` stroke, white fill. On ink: paper `#EEF2EA` stroke, ink fill |
| **Dot** | Circle at the center, `r` 12.16 — about 38% of the box. Ledger green `#1B5E3F` on paper; light green `#A9D8B8` on ink |
| **App icon** | The same mark. Platform rounding produces the rounded version; do not draw one. The maskable icon has the mark inset 14% on paper |
| **Stamp** | A rubber-stamp impression of the mark is a motif for "Signed." states and print only. It is never the primary mark |

### Clear Space and Pairing
- Minimum clear space around either mark: **the height of the o.**
- The wordmark and the mark are not locked up into one unit. They appear together only when one is the icon and the other is the name — a favicon beside a header, the OG image.
- The mark is also the assistant's icon. There is no other icon for Poof.

### Do's and Don'ts
- **Do** set the wordmark ink on paper or paper on ink. Those are the only two.
- **Do** let the period be the only colored element. The word itself is never green.
- **Do** use the component (`PoofWordmark`) or the SVG (`poof-mark.svg`) — never a screenshot, never a re-typed version.
- **Don't** put either mark on a photograph, a gradient, or a busy background.
- **Don't** type the period. Bricolage's full stop is an oval.
- **Don't** pair the wordmark with the old swirl or sparkle, or with any icon other than the mark.
- **Don't** stretch, outline, shadow, tint, or animate either mark.

### Where the Components Live

| Surface | Wordmark | Mark | Notes |
|---|---|---|---|
| Website (`poof-website2`) | `src/components/PoofWordmark.tsx` | `src/components/PoofMark.tsx` | The CSS class `.poof-wm` in `src/app/globals.css` sets the face, tracking, and draws the period; `.on-ink` flips it |
| App (`apps/poof-web`) | `PoofWordmark` | `PoofMark` | Same geometry; colors come from `src/theme/shared-theme.ts` |

---

## Color Palette

Two colors carry meaning. Everything else is paper, ink, and the lines between them.

### The Palette

| Name | Hex | Usage |
|---|---|---|
| **Ledger paper** | `#EEF2EA` | Page ground (site); app shell ground |
| **Paper 2** | `#F5F7F2` | Alternate surfaces, hover rows |
| **White** | `#FFFFFF` | Cards, working surfaces, the app's tables and forms |
| **Ink** | `#12211A` | All primary text; dark surfaces |
| **Muted** | `#5B6660` | Secondary text and labels |
| **Rule** | `#C9D3C6` | Every hairline and border |
| **Ledger green** | `#1B5E3F` | Accent text, links, active nav, the wordmark's period, icons in the on state |
| **Press green** | `#1F7A4F` | The primary button — one per view — with white text on it |
| **Green tint** | `#DCEBDF` | Evidence and approved surfaces, selected states |
| **Audit red** | `#B3261E` | Corrections, rejections, emergencies, destructive actions, the double red margin rule on records |
| **Red tint** | `#F6E3E0` | Rejection surfaces |
| **Light green** | `#A9D8B8` | Accent on ink only — the period and links when the ground is ink |

### App Only

| Name | Hex | Usage |
|---|---|---|
| **Warning** | `#9A6B1F` on `#F5ECD9` | Pending states in the app. Never on marketing surfaces |
| **Chart series** | `#3E6B8A` · `#9A6B1F` · `#5B6660` · `#7A5C8A` · `#8C6E4E` · `#4E7F8C` · `#B08968` · `#6E8B5B` | Chart series, in this order. Green and red are never a generic series — they keep their meaning |

### Rules
1. **Only two colors carry meaning.** Green = signed, tied, approved, covered. Red = corrected, rejected, escalated. Anything that is not one of those is ink, muted, or a rule.
2. **Two neutrals, not three.** Muted for text and labels; Rule for lines. There is no third gray.
3. **One pressable thing per view** gets press green. Every other action is ink text, an outlined button, or a ledger-green link.
4. **No gradients anywhere.** Not on buttons, not on text, not on backgrounds, not at 5% opacity.
5. **Not QuickBooks' green.** QuickBooks is a bright kelly green (`#2CA01C`) on white. Poof's green stays deep ink-green on pale ruled paper. Never use a bright green.

### Contrast (WCAG 2.1)

| Pair | Ratio | AA |
|---|---|---|
| Ink on paper | 14.7:1 | Pass |
| Ledger green text on paper | 6.8:1 | Pass |
| White on press green | 5.3:1 | Pass |
| Muted on paper | 5.3:1 | Pass |
| Audit red on paper | 5.8:1 | Pass |
| Light green on ink | 10.5:1 | Pass |

### In Code

**Site (Tailwind).** The `ledger` scale plus named tokens. The `slate` scale is overridden to green-biased neutrals so every existing `slate-*` class lands on the system without a rewrite.

| Token | Hex |
|---|---|
| `ledger-50` | `#F5F7F2` |
| `ledger-100` | `#EEF2EA` |
| `ledger-200` | `#DCEBDF` |
| `ledger-300` | `#C9D3C6` |
| `ledger-400` | `#A9D8B8` |
| `ledger-500` | `#1F7A4F` |
| `ledger-600` | `#1B5E3F` |
| `ledger-700` | `#174F35` |
| `ledger-800` | `#12211A` |
| `ledger-900` | `#0D1A14` |
| `paper` / `paper-2` | `#EEF2EA` / `#F5F7F2` |
| `ink` / `muted` / `rule` | `#12211A` / `#5B6660` / `#C9D3C6` |
| `audit` / `audit-100` | `#B3261E` / `#F6E3E0` |

**App.** `apps/poof-web/src/theme/shared-theme.ts` is the source of truth, mirrored in `poof-variables.css` and `poof-design-tokens.json`. Change the TypeScript file; the other two follow.

**Retired.** Every color that is not on these tables is the old brand. The list is under [Brand Identity](#brand-identity).

---

## Typography

Three families, each with one job. Display is Bricolage Grotesque; text is IBM Plex Sans; every figure is IBM Plex Mono. All three are open source on Google Fonts.

### Font Families

| Use | Font | Weights | Rules |
|---|---|---|---|
| **Display** | Bricolage Grotesque | 800 | The wordmark, H1, H2, and the few words stamped large ("Ties.", "Signed."). Never below 22px. Never running text |
| **Text and UI** | IBM Plex Sans | 400 / 500 / 600 | Body, UI, and headings below 22px. Semibold for the one emphasized phrase in a paragraph |
| **Figures** | IBM Plex Mono | 400 / 500 | Every number, date, amount, hex, eyebrow, and label — always with `tabular-nums`. Right-aligned table cells are always mono |

- **Eyebrows** are IBM Plex Mono, 11.5–12px, caps, 0.08em tracking.
- **Fallbacks:** `system-ui, sans-serif` behind both sans faces; `monospace` behind Plex Mono.
- **Retired:** Righteous, Cabinet Grotesk, Inter, JetBrains Mono.

### Font Weights

| Weight | Value | Usage |
|---|---|---|
| Regular | 400 | Body (Plex Sans); figures (Plex Mono) |
| Medium | 500 | Labels and emphasis in mono |
| Semibold | 600 | UI and headings below 22px (Plex Sans) |
| Extra bold | 800 | Display only (Bricolage Grotesque) |

There is no 300 and no 700. Bold inside body copy is 600.

### Font Sizes

| Step | Face | Where |
|---|---|---|
| 12px | Plex Mono / Plex Sans | Eyebrows (11.5–12px), table labels, footnotes |
| 14px | Plex Sans / Plex Mono | UI text, table cells, secondary copy |
| 16px | Plex Sans | Body |
| 18px | Plex Sans | Lead paragraphs, larger UI |
| 22px | Bricolage 800 or Plex Sans 600 | The floor for display; the app's H3 is Plex Sans 600 at this size |
| 28px | Bricolage 800 | The app's H2; the desktop header wordmark |
| 36px | Bricolage 800 | The app's H1 |
| 44px | Bricolage 800 | The auth-page wordmark; large display |
| `clamp()` | Bricolage 800 | The site's H1, scaling with the viewport |

**App:** h1 36 / h2 28 in Bricolage Grotesque; h3 22 and below in IBM Plex Sans 600.

### Loading

| Surface | How |
|---|---|
| Site | `next/font`: `Bricolage_Grotesque` 800, `IBM_Plex_Sans` 400/500/600, `IBM_Plex_Mono` 400/500 |
| App | `@fontsource`, self-hosted — no runtime requests to Google |
| Graphics, video, print | Download from Google Fonts: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque), [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) |

---

## Key Messaging & Taglines

### Primary
- **"The work disappears. The evidence doesn't."** — The brand sentence and the primary line. Use it wherever Poof is introduced in one line: the OG image, a deck cover, the closing line of a post. Poof is a magic trick that shows its method — the work vanishes, the record stays
- **"Bookkeeping That Does Itself"** — The self-serve hero line; still the headline on the product hero
- **"Poof. It's done."** — Not a headline. It is the story behind the wordmark's period: the work vanishes and the dot is what stays. A caption or a closing line, never a hero
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
- "118 features, one flat price — $79/mo" (self-serve tier)
- "See where your cash is headed — 12 months out"

### Tone of Voice
- Conversational, not corporate
- Confident, not arrogant
- Simple, not dumbed-down
- On the record, not gimmicky

### Messaging Don'ts
- Don't use "magical" or "magic" anywhere in copy; the magic is one animation on the homepage and one sentence.
- Don't lead with a mood in a headline — use an outcome-oriented headline instead.
- Don't list features without tying them to a customer outcome
- Don't mention tiers, plans, or "Basic/Pro" — Poof has one plan with everything included
- Don't use accounting jargon without explaining it

---

## Product Overview

### What Poof Does
Poof automates ~90% of bookkeeping tasks for small businesses (1–50 employees, 100–10,000 monthly transactions). Users connect their bank accounts, and the AI handles categorization, reconciliation, invoicing, estimating, budgeting, forecasting, and reporting.

### 128 Features in 13 Groups

#### 1. AI-Powered Automation (9 features)
1. AI transaction categorization (BRAID engine)
2. Poof AI assistant (sidebar-based, context-aware, 62 tools, the mark as its icon, flat paper header, multi-session conversations with folder organization)
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

#### 4. Banking & Reconciliation (8 features)
1. Bank connection via Plaid (12,000+ banks, syncs last 30 days, optional liability accounts for broader institution support)
2. Bank statement import (CSV/PDF, up to 25MB, AI-powered parsing with GPT-4o Vision for PDFs, intelligent column mapping, bank name auto-detection, duplicate prevention) — also importable via AI chat by uploading a PDF
3. Reconciliation (multi-step wizard, auto-match, hand match and unmatch, completion report, export and email, history with reopen and delete) — works on a phone
4. Auto-reconciliation (opt-in, weekly or monthly, with notifications). It signs a period only when the difference is under a penny; anything else becomes cards in Approvals, one per uncertain match. It takes the period **after the last one completed**, so a month it missed is caught up
5. **Outstanding items carry forward** — a check written in July that clears in August is on August's book side, and a first reconciliation lists what was still open from before it (never the opening balance, which both sides already agree on). Cleared rows stay cleared when someone later fixes the entry's memo or date
6. **One figure, on the screen and in the record** — the unexplained difference is statement ending, less the books at period end, plus what is booked but not on the statement, less what is on the statement but not booked. The screen reads it from the server; completion stores the same number; the close's bank-reconciliation check reads that. A row added during the reconciliation counts even though auto-match never saw it. A reconciliation on which a later one rests cannot be reopened first
7. Deposits
8. Multi-account support

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

#### 7. Team & Security (9 features)
1. Team management — 5 roles: Owner / Admin / Accountant / Bookkeeper / Viewer
2. Two-factor authentication (TOTP with QR code setup and 8 backup codes)
3. Audit logs (SOC 2 compliant, PII masking)
4. Session management (30-minute timeout, active session viewer)
5. GDPR/CCPA-compliant account deletion
6. Email verification
7. Role-based permissions (RBAC) — 26 granular permissions
8. Bot-abuse gate on registration — Cloudflare Turnstile challenge on public sign-up, stopping scraped-address subscription bombing
9. AI privacy chokepoint ("Gateway") — every model call is PII-redacted before it leaves the process, routed to the configured destination, and logged with destination, model, redaction count, and token usage for the audit trail

#### 8. Productivity & Workflow (6 features)
1. Personalized dashboard — AI-generated daily briefing with "Reply to Poof" action, time-aware greeting, 4 animated KPIs, Y-axis dollar labels on all chart tiles, proactive "Needs Your Attention" alerts, drag-and-drop reorderable tiles with staggered animations, actionable empty states, quick-action buttons, semantic color coding, and a global date filter
2. Global search (across transactions, invoices, bills, expenses)
3. Notification center (in-app and email)
4. Transaction approval workflows
5. Command bar (Cmd+K) — natural language navigation
6. AI chat folders — organize conversations into folders (create, rename, delete, move), with drag-and-drop on desktop and move menu on mobile, collapsible sections, and persistent state

#### 9. Poof AI Capabilities (19 features)
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
16. **Approve without leaving the conversation** — ask Poof to invoice someone and the same approval card appears in the chat, with the same evidence and the same buttons as the inbox. One card, defined once, wherever it turns up. No browser alert asking whether you are sure about a sentence you already read
17. **It shows its work while it works** — "Looking up invoices — August 2026", "Preparing an invoice — Smith Residential", arriving as each step runs rather than a silent pause followed by an answer. The steps say *preparing*, never *created*, because nothing has been written yet
18. **Ask where things stand** — "Is August ready to close?", "what's open on the cash plan?", "which bills are due this week?", "what do we owe Ferguson?", "show me the accrual schedules", "how did July go?" — the close's status and checklist, transaction search, A/P aging, open bills, the 13-week cash plan, accrual schedules, and a month's summary are answered from the books, with the model told to narrate the numbers and never compute new ones. The same reads are what an outside agent gets over MCP
19. **Book, move, or cancel a visit from the chat** — "book Smith Tuesday 2pm", "can we do Thursday afternoon?", "move the Rivera visit to Friday". Open slots and the appointment list answer at once; the booking itself becomes a card, and approving it runs the same handler the phone line runs — the tech gets the same text, the board updates the same way. No rule can ever approve a visit

#### 10. Job Costing, Month-End Close & Payments (20 features)
1. Job costing & per-job profitability — tag transactions, bills, and invoices to jobs; see profit per job (**the trades headline feature**). For shops using the receptionist and field link, a completed service call **becomes a job on its own** and its revenue, parts, and labor land on it without anyone tagging anything ([Group 12](#12-field-service--job-handoff-10-features))
2. AP cash planner — forward-looking view of upcoming bills so you know what's due, when, and whether cash covers it
3. Period close & locking — close and lock a month so entries can't change after sign-off, with an immutable trial-balance snapshot
4. AI close narrative — plain-English month-end summary of what moved and why, generated automatically
5. Monthly financial package — one-click close package (P&L, balance sheet, cash flow, variance) ready to review and send
6. Books-integrity checks — automated general-ledger integrity sweep that flags imbalances and posting errors
7. Proactive insights engine — auto-detected issues and opportunities (margin dips, unusual spend, cash risks) surfaced without being asked
8. Accept online payments — customers pay invoices by ACH or card via Stripe; payments reconcile to the ledger automatically
9. Inbound email capture — forward receipts and bills to a dedicated Poof address; AI extracts the data and files them
10. Per-job labor allocation — spread technician labor cost across the jobs it was spent on, so a job's margin includes the hours, not just the materials
11. Financing gross-up — when a job is sold through dealer financing, the dealer fee is recognized as a cost of that job instead of quietly inflating its margin
12. Peer benchmarks on the Per-Job P&L — see how a job's margin compares to similar jobs, with the outliers called out
13. Period tie-out engine — a standing check dashboard that proves the period actually ties before it is closed, not after. A clean run proves the books *as they stood*: a transaction reviewed or an entry posted after it turns the step to "run the checks again" rather than reading "tied" off a stale result
14. Accrual roll-forward subledger — deposits, deferrals, and accrued items carried forward period to period with their own schedule
15. Document playbooks — forwarded files learn per-sender handling, so the second invoice from a supply house files itself the way the first one was corrected
16. Customer deposits released on completion — a down payment on an install is held as a liability, not booked as revenue on the day it lands, and released to that job's revenue when the job is done. The release previews first, refuses a deposit that isn't categorised as a deposit, and warns if the job was also invoiced
17. Maintenance plans earn as visits are performed — a prepaid plan sale is deferred and each performed visit earns its share to the penny, **automatically when the tech completes a maintenance visit** (a repair call on a plan customer does not count; two open plans on one customer is left for the office to pick). Cancelling is a recorded decision — refund or forfeit — never a silent write-off, and a visit that was both released and invoiced is flagged at month-end close
18. **The close is a record** — each month's close is one object: who started it and when, where it stands (not started / in progress / ready / signed / reopened — derived from the books, never typed), and what it took. Locking the period is the signature; at that moment the close captures its activity — transactions reviewed, entries posted, decisions made by a person and by a rule, corrections, hours from start to signature — and a price and tier per close, so a practice can say "August: signed Sep 5, $1,500, 60 hours" instead of guessing. Reopening keeps the signature on record
19. **A checklist with due dates that the books tick off themselves** — a template per organization (the trades default is 17 tasks: feeds reviewed by day 2, bank reconciled and draft entries posted by day 3, staged materials relieved and deposits released by day 3, accruals, A/R, A/P, plan visits, job costs and categories tied by day 4, vendor bills cut off and the tie-out clean by day 5, narrative reviewed day 6, signed day 7, package sent day 8 — business days after month end). Twelve of the tasks are **evidence-bound**: they complete themselves when the books prove them and cannot be ticked by hand; each open one says why in a sentence ("2 completed jobs still hold $1,500 of customer deposits") and links to the screen that fixes it. Manual tasks are a person's tick, recorded with who and when. Every close stamps its own copy of the list, so a later template edit does not rewrite history
20. **The nudge** — a task past its due date on an open close is an insight, a card in Approvals (with a one-tap "mark done" for a manual task), and **one message per close per day** on the channels the shop subscribed to — Telegram, SMS, Slack, email — naming every task late on it. The sweep re-reads the books before it decides what is late, so it never nags about a bank account reconciled that afternoon

#### 11. AI Receptionist & Dispatch (12 features)

> **Availability note:** operator-installed as part of the managed service — Poof staff provision the number and the voice agent. It is **not self-serve**; a shop owner cannot sign up and switch it on. Market it as part of "Poof Managed for Trades," never as a button in the app. See the caveats at the end of this group.

1. AI phone receptionist — answers the shop's line, knows the shop's name, hours, and service area, understands the caller's problem, and books the job
2. Deterministic safety triage — gas smell, carbon monoxide, smoke, sparking, or an active alarm trigger an immediate emergency escalation and a scripted "leave the building, call 911" response. No-heat below 45°F and no-cool above 95°F are emergencies too. **These are rules in code, not instructions to a language model** — the AI narrates the call, it never decides whether something is an emergency
3. Real-calendar booking — availability computed from technicians, their weekly windows, and their time off, minus existing appointments, respecting drive-time buffer. Skills are a **preference, not a gate**: a tech tagged for the work is preferred, an untagged tech is next, and a shop that has tagged nobody is never told it has no availability. The database refuses overlapping bookings outright, so two calls arriving at once cannot double-book a tech
4. Rule-based human escalation — safety trigger, after-hours emergency, no slot inside the urgency window, caller asks for a person, repeat caller within 24 hours, cancellation threat, or low agent confidence
5. Multi-channel notifications — one event fans out to the channels a shop configures: SMS, email, push, Slack, Telegram, or a webhook, with every delivery attempt logged
6. Dispatch board, call log, and technician management — see the day's board, every call with its transcript, outcome, duration, and cost, and manage who can be dispatched
7. Receptionist settings — greeting, hours, timezone, service area, urgency SLA windows, booking rules, and notification channels, all configurable by the shop
8. Manual or automatic dispatch — two independent switches: whether the AI picks *who* goes, and whether the system texts them. A shop that wants a human staffing the board keeps the booking and the customer's promised window, and the job simply lands under "Needs a tech"
9. Customer record on the first call — the caller becomes a customer record when the job is booked, not when they are eventually invoiced, and is matched on the last ten digits of their number, so the same household calling from a different phone format is one customer, not two
10. Automatic technician dispatch — the assigned tech is texted their job with a link that opens it, and a reschedule re-sends a fresh one. A dispatcher can re-send it by hand from the board at any time
11. Work spread evenly across the crew — when several techs are free for the same slot, the job goes to whoever has the fewest jobs that day, then the fewest that week. No one quietly absorbs every call
12. A job nobody is going to raises the alarm — an appointment approaching its start time with no technician assigned escalates to the shop, whether that is because the shop dispatches by hand or because nobody was free when it was booked. Emergencies are always assigned automatically, no matter how the shop has set the switches

**What it does not do (do not imply otherwise):** **customer-facing** outbound texts — booking confirmations, reminders, and "your tech is on the way" — are **not built yet**. (Outbound texts to the *technician* are; see 10 above and Group 12. Do not blur the two.) It does not take payment on the call, does not optimize routes across a day's board, and does not clone the owner's voice. There are no autonomous outbound sales calls.

#### 12. Field Service & Job Handoff (10 features)

> **Availability note:** part of the trades managed service, alongside Group 11. The technician's page needs no account and no app install, which is the point — see the caveat at the end of this group.

1. Technician field link — the tech opens their job from a text message. **No account, no password, no app install.** The link is signed, opens exactly one job, and can be revoked; rescheduling invalidates it automatically. This is the answer to "my guys won't use another app"
2. Arrival tracking — on-my-way, arrived, and completed times are **recorded when they happen**, not estimated afterwards. That is the number that gets argued about with a customer six weeks later
3. Field report — what was wrong, what was done, and what still needs doing, written on the phone at the jobsite
4. Equipment on file — the units at that address are on a list the tech taps to attach (several taps for a two-system house); an unlisted unit is typed once and is on file for whoever attends next. Make, model, and serial follow the unit, not the visit
5. Jobsite photos — before, after, nameplate, and receipt, taken through the same link. Each one is opted in or out of the customer's invoice individually, so the supply-house receipt showing what the shop paid can never reach the customer by accident
6. Parts and labor logged in the field — each line tagged as labor, part, or fee **by the person who knows**, parts picked from the shop's own price list so the invoice line lands on the right sales account, and the part's cost rides in from the catalogue — never from the tech's form, because a tech on a roof should not be looking up landed cost. That is what makes the margin on the job real instead of inferred from a description afterwards
7. **The invoice writes itself** — the tech taps Complete and a draft invoice exists in the office, with their own words on it, ready for review. Nobody retypes a paper ticket
8. Trade-format invoice — diagnosis, work performed, recommended follow-up, equipment, and warranty print under real headings, with the opted-in jobsite photos beneath them. Not a one-line "HVAC service call — $458"
9. **A service call becomes a job** — completing a visit creates the job, links it to the customer, and tags the invoice to it, so the work reaches the Per-Job P&L without anybody remembering to tag anything
10. Office review before it reaches the customer — the dispatcher opens the field report from the board: what the tech wrote, the photos, the parts and labor, the customer's sign-off, the draft invoice it produced, and — on a maintenance visit — the plan visit it earned, or a one-click way to record one. The tech's internal notes are shown marked as never reaching the customer. Nothing goes out until a person sends it

**What it does not do (do not imply otherwise):** the tech's page does not do GPS tracking, does not take payment on site, does not capture a drawn signature (it records a typed name and the time), and does not work offline — it needs a signal. It does not schedule or re-route; that is the dispatch board's job.

---

#### 13. Approvals & AI Autonomy (9 features)

> **Availability note:** the approvals inbox is on for everyone — it is how every AI write reaches
> the books. Autonomy is **off until a person grants it**, one rule at a time. There is no default
> and no global "let the AI do it" switch.

1. **The approvals inbox** — every write an AI proposes, from any surface, stages as a card and waits. The nightly categorization sweep, a request typed into Ask Poof, a detector that noticed a job losing money: all of them land in the same place, and nothing reaches the books until a person approves it. **Approving runs exactly what is on the card** — the stored request, never a fresh interpretation of it
2. **The evidence, not the assertion** — each card shows what Poof looked up to justify itself: the customer it resolved and their email, the prior transactions for that merchant and whether they were all categorized the same way, the amount, the account. Gathered by code, never judged by the model. A card that says "no history for this merchant" is telling you why it is asking
3. **Approve part of a batch** — a forty-row card is not all-or-nothing. Untick the three you want to look at and approve the rest in one tap; the unticked ones stay waiting. The ones you approved run, the ones you did not are still there tomorrow
4. **Reject with a reason** — and the reason is recorded, not discarded. It is the signal that stops a rule covering that kind of work, and the record of why
5. **Standing rules, granted from a card you already read** — not a form you fill in from scratch. Poof derives the rule from the work in front of you: the merchant these share, the agreement in their history, a limit above the largest one. It shows the rule in plain sentences, tells you how much of the card it covers, and shows your own record with that kind of change over the last 30 days before you commit
6. **A rule that is wrong stops itself** — correct anything a rule is about — not only the rows it happened to touch — or reject the kind of work it covers, and it pauses, tells you which correction stopped it, and waits for you to resume or revoke. Every rule lives on one page with what it has handled and who granted it, and revoking is instant
7. **Five queues, one inbox** — the app used to have five separate approve-or-dismiss screens. Now an inbox playbook run, a reconciliation match the scheduled job was unsure of, a POS deposit that came in short, a bill the cash planner put on hold, and a late close task are all cards in the same Approvals inbox, each with the evidence that produced it. The original pages still work; deciding there is the same decision
8. **The page settles the card** — a card raised by a pipeline, a detector, or the scheduled job is about a record that is still there, so it waits thirty days (a chat draft waits one). Confirm the match on the Reconcile page, match the deposit, decide the bill, tick the task, review the transaction — the card closes with what you did. Do something *different* from what the card proposed and it is recorded as a correction, the same as a Reject: the learning loop sees it, and any rule that would have approved it pauses
9. **A playbook graduates as a rule** — "Approve all like this" on an inbox-run card makes a standing rule pinned to that playbook, only while the forwarded file keeps the columns it had, and under a ceiling from the run's total. A drifted file, a bigger total, or another playbook still waits for a person. The playbook's confirmation counter stays as a label; the grant is the rule

**What it does not do (do not imply otherwise):** no rule can ever send anything to a customer — invoices and credit notes are always a human's decision, whatever a rule says. A rule that writes to the ledger **must** carry a dollar limit; one without does not run. Rules cannot be created from a settings screen, only from work someone reviewed. And autonomy is never on by default: a new account asks about everything until its owner decides otherwise.

---

## Key Numbers & Claims

| Claim | Value |
|---|---|
| Total features | 128 (all included in every plan) |
| Bank connections | 12,000+ (via Plaid) |
| Financial reports | 13 |
| AI assistant tools | 62 offered to the chat, from one registry of 100 shared with the phone line and MCP (create, update, search, send, generate, import, ask where things stand, book a visit) |
| AI accuracy rate | 95% |
| Setup time | 5 minutes |
| Manual entry reduction | 90% |
| Plaid sync window | Last 30 days (use bank statement import for older transactions) |
| Team roles | 5 (Owner, Admin, Accountant, Bookkeeper, Viewer) |
| Granular permissions | 26 |
| Free trial | 30 days |
| Cash flow forecast horizon | 12 months with confidence bands |
| Receptionist notification channels | 6 (SMS, email, push, Slack, Telegram, webhook) |
| Close checklist (trades default) | 17 tasks, 12 evidence-bound, signed on business day 7 |
| Producer cards wait | 30 days (a chat draft: 24 hours) |
| Managed close SLA | Books closed by the 15th business day |
| Managed job-costing SLA | Every completed job costed within 5 business days |
| Managed response SLA | Controller responds within 1 business day |

---

## Pricing

**One plan. Every feature. No surprises.**

Poof has a single plan called **Poof Professional**. There are no tiers, no "Basic" or "Pro" distinctions, and no features locked behind upgrades. Every customer gets every feature.

| Billing | Price | Notes |
|---|---|---|
| Monthly | **$79/mo** | All 118 features included (self-serve tier) |
| Monthly (launch special) | **$39.50/mo** | 50% off first 3 months |
| Annual | **$790/year ($65.83/mo)** | Save $158 |

- **No feature tiers** — never reference "Basic," "Pro," or "Enterprise" plans in any customer-facing content
- 30-day free trial, **no credit card required** — every new organization gets it automatically
- Launch special: 50% off first 3 months
- Cancel anytime, 30-day money-back guarantee

### Pricing Messaging
- Lead with capability, not undercutting: **"One price. Every feature. No plan you have to grow into."**
- Emphasize: "One plan. Every feature. No surprises."
- On comparison pages, frame it as scope, not discount — Poof's single plan covers what QuickBooks splits across its mid and upper tiers plus add-ons.
- **Do not repeat the old "$29/mo vs QuickBooks' $38" line.** It is untrue at $79, and it argues on the axis Poof loses.
- **Compare against QuickBooks Plus ($140/mo), not Simple Start ($38/mo)** — see [QuickBooks pricing, verified](#quickbooks-pricing-verified-2026-08-23) for why this is the honest comparison and the stronger one.

---

## Competitive Positioning

QuickBooks is the primary competitive alternative. Thread this contrast throughout all marketing — not just on a comparison page. Every feature claim is stronger when framed as "unlike QuickBooks, which..."

### QuickBooks pricing, verified 2026-08-23

**Intuit raised prices on August 1, 2026.** Any comparison written before that date is wrong.

| QuickBooks Online plan | Monthly list | Change on Aug 1, 2026 |
|---|---|---|
| Simple Start | **$38** | +$3 (from $35) |
| Essentials | **$85** | +$10 (from $75) |
| Plus | **$140** | **+$25 (from $115) — a 22% jump** |
| Advanced | **$340** | **+$65 (from $275) — a 24% jump** |

*Verified 2026-08-23 against three independent sources plus Intuit's own product-update announcement. Re-check before any campaign; Intuit has now raised prices twice in 2026.*

#### Which plan to compare against — this is the whole argument

**Compare Poof to QuickBooks Plus ($140), not Simple Start ($38).** Simple Start is single-user,
with no team roles, no budgets, and a fraction of the reporting. A business that needs what Poof
does cannot run on it. Comparing $79 to $38 makes Poof look like the expensive option by
measuring it against a plan that does not do the job — and it is the comparison a QuickBooks
salesperson would choose for us.

Against the plan that actually matches Poof's capability, the story inverts:

- **Poof $79 flat vs QuickBooks Plus $140** — Poof is **44% cheaper** and adds the AI assistant,
  budgeting, forecasting, and job costing that Plus does not have at any price.
- Poof's 5 roles and 26 granular permissions, plus SOC 2 audit logging with PII masking, are
  **Advanced-tier ($340) capabilities** at QuickBooks. That contrast is worth making explicitly.
- **Intuit's own increase is the argument.** Plus users just absorbed +22% and Advanced users
  +24%, with no new capability attached. "Your bookkeeping software raised its price 22% this
  month. Poof is $79, flat, with everything included" is a campaign, not just a table row.

**Always state the plan being compared and the date checked**, in the table footnote. It is the
difference between a comparison and a claim.

### Poof vs QuickBooks

| | Poof | QuickBooks |
|---|---|---|
| **Starting price** | $79/mo — all features ($39.50/mo launch special) | $38 Simple Start / $85 Essentials / **$140 Plus** / $340 Advanced (verified 2026-08-23; compare against Plus) |
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
| **AI phone receptionist + dispatch** | Yes (managed service; triage, real-calendar booking, escalation) | No |
| **Per-job labor allocation** | Yes | No |
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
- **2026** — Reimagining bookkeeping with AI: budgeting & forecasting, recurring invoices with automated follow-ups, estimates, receipt scanning, recurring charge detection, bank statement import (CSV/PDF including AI-powered PDF parsing via chat), AI-powered account management and depreciation setup, personalized dashboard with AI daily briefing, report drill-down, scheduled report delivery, multi-session AI chat with folder organization, 13 reports, job costing, month-end close, online payments, an AI phone receptionist that books and dispatches, and a field-service loop where the technician closes the job from a texted link and the invoice writes itself — 108 features. Pivoted the go-to-market to managed bookkeeping for trade contractors (HVAC/plumbing/electrical)

---

## Content Guidelines

### Voice
- **Controller's sentences.** Short, declarative, dollar-specific. "Five prior transactions, all Job Materials" beats "smart categorization."
- **The evidence, not the assertion.** Say what was found, where, and how much. If a sentence has no number, account, or date in it, ask what it is for.
- **No exclamation points.** Anywhere.
- **No "magical," no "magic."** The magic is one animation on the homepage and one sentence. The copy is the method.
- **Claims carry a date and a source.** "As of August 2026, following Intuit's August 1, 2026 increase." The claims we will not make yet are listed with the rest — in [Key Numbers & Claims](#key-numbers--claims) and the "what is proven" notes at the top of this file — and they are held until they are proven.

### Imagery
Three kinds only.

| Kind | What it is | Rules |
|---|---|---|
| **Real screenshots** | The product, taken from real books | Light mode, on white. Never a mockup, never generated UI |
| **Real photographs** | Real people — Austin, at a shop or by a window | Never at a laptop |
| **Props** | Paper on the ledger pad, a truck at dusk, a hand with a phone | Photographed or generated. Generated props are graded to the palette afterwards |

**Never:** generated people, generated UI, stock handshakes, sparkles, glowing orbs, robots, anything purple, text inside an image. Wordmarks are typeset in the font, never drawn by a model.

**Prop look:** top-down or three-quarter; soft window light, with one pool of warmer light on the subject; ledger paper or a worn workbench as the ground; shallow depth of field.

### Motifs
- **The ledger ground** — pale green paper under everything.
- **The period** — the green dot from the wordmark. The only place the brand is a shape.
- **The double red margin rule** — two thin audit-red lines down the left of anything that *is a record*: a close, a job's P&L, a signed reconciliation. Nothing else gets it.
- **Figures in mono** — every number on the page is IBM Plex Mono, tabular.
- **One spotlight, once per page,** in the hero. The rest of the page is flat paper.
- **The evidence card** — a white card with a green left rule: the shape of a proposal and what it rests on.

### When Creating Social Media / Video Content
- Ground: ledger paper `#EEF2EA`. Text: ink `#12211A`. Accent: ledger green `#1B5E3F`, sparingly.
- Wordmark: typeset in Bricolage Grotesque 800, lowercase, with the drawn period — never typed with a full stop, never an image of an old logo.
- Body text in IBM Plex Sans; every figure in IBM Plex Mono.
- No gradients, no sparkle overlays, no glow.
- The app UI is **light mode** — white working surfaces on the paper ground. App screenshots are light mode on white and sit well on the green paper; frame them on it, and they read clean on both light and dark feeds.

### Hashtags & Keywords
- #Poof #PoofBookkeeping #AIBookkeeping #SmallBusinessBookkeeping
- #BookkeepingAutomation #SmallBusinessFinance #AIAccounting
- Keywords: AI bookkeeping, automated bookkeeping, small business bookkeeping, bookkeeping software, QuickBooks alternative

---

## Available Logo Files

**The wordmark is not an image file anywhere. It is a component** (`PoofWordmark`) — see [Logo Usage](#logo-usage). The files below are the mark and the icons derived from it.

### Site repo — `public/`

| File | What it is |
|---|---|
| `poof-mark.svg` | The mark. Source for everything below |
| `favicon.ico` | 16 + 32 PNG-in-ICO |
| `favicon-16x16.png` | 16px |
| `favicon-32x32.png` | 32px |
| `apple-touch-icon.png` | 180px |
| `favicon-192x192.png` | 192px |
| `favicon-512x512.png` | 512px |
| `icon-512-maskable.png` | 512px, the mark inset 14% on paper, for maskable icons |
| `og-image.png` | 1200 × 630 — wordmark + the brand sentence + the mark, typeset on the ledger texture |
| `ledger-texture.jpg` | The generated ledger paper used under the OG image |

**Removed — do not reference:** `poof-logo.png`, `poof-logo2.png`, `poof-logo-cloud.png`, `poof-logo-gold.png`, `poof-logo-purple-to-blue.png`, `poof-logo-with-purple-background.png`.

### App repo — `apps/poof-web/public/`

| File | What it is |
|---|---|
| `poof-mark.svg` | The mark |
| `favicon.ico` | 16 + 32 PNG-in-ICO |
| `favicon-16.png`, `favicon-32.png` | Favicons |
| `icon-180.png`, `icon-192.png`, `icon-512.png` | App icons — platform rounding does the rounded version |
| `icon-512-maskable.png` | The mark inset 14% on paper |
| `og-image.png` | OG image |

If you need the wordmark as an image — a slide, a print piece — render it from the component, or typeset it in Bricolage Grotesque 800 with the drawn period per [Logo Usage](#logo-usage). Do not screenshot the header.

---

## Vertical Positioning: Trade Contractors (HVAC, Plumbing, Electrical)

> **⭐ THIS SECTION IS THE AUGMENTED OPERATOR'S (as of 2026-09-12).** The managed service for HVAC, plumbing, and electrical contractors — the tiers, the $750 audit, the controller who signs — is a separate business that runs on Poof. Everything below is still right; it just belongs to that business, and when its own site exists this section moves there with `/trades`. Until then it stays on poofai.com, and the homepage keeps leading with it because it is the offer that generates calls. Where the copy says "Poof Managed for Trades", the service's name is now **The Augmented Operator**; use "Poof Managed for Trades" only where the live site still does, and change both together. (July 2026 guidance that "trades is Poof's primary positioning" is superseded by `TWO_BUSINESSES.md`: Poof's primary customer is the person who signs the close; trades shops reach Poof through the operator.)

### Why This Vertical
Independent service contractors are Poof's first vertical focus because they (1) answer cold outreach, (2) have 15–25% net margins so they can afford a $1,200/mo managed service, (3) universally hate the gap between Jobber/HCP and QBO, and (4) talk to each other at supply houses and trade associations. Austin's 10+ years of audit and controller experience translate directly — these owners trust accounting credentials over "AI startup" pitches.

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
> **that** delivers per-job profitability and books closed by the 15th business day, every month — using your existing Jobber/Housecall Pro exports and bank data, with an AI receptionist answering the shop's phone if you want it.
> **Unlike** outsourced bookkeepers who rekey job data manually and cost $800 – $1,500/mo for slow monthly reports, or field-service-first tools like Workyard and ServiceTitan that bolt on accounting as an afterthought,
> **Poof's agents** handle categorization and reconciliation, with a credentialed human reviewing every customer-facing action — so the answer to "did the Henderson install make money?" comes with your monthly close, from a controller you can text — instead of never.

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
| Job costing | "Know which jobs make money — every month, from your actual books." |
| Jobber / Housecall Pro integration | "Your field-service data, in your books. Automatically." |
| Monthly close | "Your May P&L by mid-June — not the end of July." |
| AI transaction categorization | "Stop labeling 'HOME DEPOT' transactions one at a time." |
| Plaid bank sync | "Bank, credit cards, and Jobber — all speaking to your books." |
| Receipt scan | "Snap a receipt at the supply house. We do the rest." |
| Managed-service review layer | "AI does the work. A controller reviews the calls that matter." |
| 1099 contractor tracking | "1099-ready, every January." |
| Sales tax on materials | "Materials sales tax tracked automatically, by job and state." |
| A controller you can text | "Text a question about your business. Get a straight answer from a real controller." |
| Cash flow forecasting | "Know your shoulder-season cash position 90 days out." |
| AI receptionist | "The phone gets answered at 9pm. The job's on the board before you wake up." |
| Safety triage | "A gas-smell call gets 911 and a callback — not a Tuesday appointment." |
| Per-job labor allocation | "Your techs' hours land on the jobs they were spent on." |
| Financing gross-up | "That financed install wasn't a 40% job. Here's what the dealer fee really cost you." |
| Peer benchmarks | "This install ran 12 points under your other installs. Here's why." |

### Vertical Pricing Tier — "Poof Managed for Trades"
Distinct from the $79/mo Poof Professional self-serve product.

| Plan | Price | Best for | Includes |
|---|---|---|---|
| **Job Margin & Recovery Audit** | **$750 (paid, one week)** | **The front door — lead with this** | A one-week paid diagnostic that hands the owner a dollar number in five days. Credits against the $1,500 onboarding if he signs within 30 days |
| **Poof Managed for Trades** | **$1,200/mo** | 2 – 4 truck shops, $750K – $1.5M revenue | All Poof Professional features + monthly per-job P&L + monthly close + we bring your Jobber/HCP data into your books + a controller you can text or email + monthly variance review |
| **Poof Managed for Trades Plus** | **$1,500/mo** | 5+ truck shops, $1.5M – $3M revenue | Everything above + multi-location reporting + quarterly review call + priority response |
| **Poof Managed for Trades Pro** | **$2,400/mo** | Shops **above $3M** revenue — above the core ICP, sold on exception | Everything above; scope agreed per shop at this size |
| **Onboarding (one-time)** | **$1,500** | All managed customers | Historical cleanup (up to 18 months), QBO/Xero migration, Jobber/HCP setup, chart of accounts aligned to your trade |

**About the $2,400 Pro tier (decided 2026-08-23).** It sits **above** the $750K–$3M ICP, not
inside it. The two lower tiers already span the whole target band, and their boundaries — live
on `poofai.com/trades` — are unchanged by it. Three consequences worth holding onto:

- **It is priced on revenue alone.** Truck count is the sizing proxy for the two lower tiers;
  above $3M it stops tracking cleanly, so do not attach a truck number to this one.
- **It is not a reason to prospect above $3M.** Outreach, the landing page, and the persona work
  all stay aimed at $750K–$3M. This tier exists for shops that grow into it and for inbound that
  arrives already there — not as permission to chase bigger shops. Above $3M is ServiceTitan's
  buyer, a different sale, and the whole rationale for picking this vertical
  ([Why This Vertical](#why-this-vertical)) assumes the smaller operator.
- **Scope is agreed per shop.** At this size the work is not a bigger version of the $1,500 tier,
  so the plan row says so rather than implying the same deliverable at a higher price.

**On the website:** lead with $1,200 and $1,500. Show Pro as an "above $3M? let's talk" line, not
as a third column competing for attention — it would pull the eye toward the price the target
buyer is *not* paying.

**The $750 audit replaces the $250 refundable pilot.** The pilot asked a contractor to commit a month of onboarding before he saw anything; the audit hands him a number in five days. It is simultaneously the sales pitch, the case study, the first slice of onboarding work, and the qualification filter. **Do not discount it** — a free audit attracts people who will never buy.

**The SLAs, stated as commitments** (these are the promise; do not soften or inflate them):
- Books closed by the **15th business day**, every month
- Every completed job costed within **5 business days**
- **Unbilled-work report every Friday**
- Controller responds within **1 business day**
- Monthly variance review; text access to your controller

**Pricing messaging:**
- "$1,200/mo replaces a $1,000 – $1,500/mo bookkeeper *and* gives you per-job profitability they can't provide"
- "Cheaper than your current QBO + bookkeeper + manual handoff. Faster and more accurate."
- Never quote managed-service pricing alongside the $79/mo Professional plan on the same page — different products, different audiences.
- **Never present a recovery share or contingency fee.** The recovery number is the argument, not a billing mechanism.

### Competitive Alternatives (Trade-Specific)
On HVAC landing pages, reference these competitors — NOT QuickBooks (their issue isn't QBO, it's the *handoff to* QBO).

| Alternative | What it is | Why owners switch to Poof |
|---|---|---|
| **Part-time / outsourced bookkeeper** ($500 – $1,500/mo) | A person who logs into QBO once a month, sends a PDF P&L | Slow, no per-job visibility, manually rekeys Jobber data, expensive |
| **Workyard** ($50/mo base + $6 – $16 per user) | Field-service time tracking with job costing | Priced per user, so it scales with headcount; built for the field, accounting is an afterthought; no managed service. An 8-person shop lands near $180/mo **plus** accounting |
| **Knowify** ($179 / $349 / $549 per month) | Construction accounting (general contractors) | Designed for general contractors, not service trades; complex for HVAC service work, and the useful tier is $349+ |
| **ServiceTitan** ($245 – $500 **per technician** per month) | Enterprise field-service platform | Priced per tech, not per location — a 6-tech shop is roughly $1,800 – $2,400/mo before the $5K – $15K implementation and a 12-month minimum contract. Purpose-built for 20+ tech shops doing $5M+; it gates small operators out by design |
| **QBO + Jobber/HCP DIY** | Owner reconciles + categorizes themselves | The handoff is the daily pain; owner's time isn't free |
| **Answering service** ($200 – $600/mo) | Humans take a message, maybe book into a calendar | They take a message; they don't know your books, your techs' skills, or which calls are emergencies. Poof's receptionist books against real availability and costs the job it creates |

*Competitor pricing verified 2026-08-23. ServiceTitan and Knowify both price per user or per
technician, so a flat monthly figure understates them at shop scale — always convert to the
prospect's actual headcount before quoting a contrast. Re-verify before any campaign.*

### Tone & Language Shifts for This Vertical
The Poof brand voice ("on the record": direct, specific, the evidence not the assertion) still applies, but on HVAC landing pages and outreach, lean into these shifts:

- **Use trade vocabulary:** "shops" instead of "businesses," "techs" instead of "employees," "trucks" as a sizing proxy, "service calls" instead of "appointments"
- **Talk in specific dollars:** "$1,200 a month for a bookkeeper" beats "high bookkeeping costs"
- **Reference their actual tools:** Jobber, Housecall Pro, ServiceTitan, FieldEdge — by name. They use them daily; vague language signals you don't know their world
- **Reference their daily reality:** "between service calls," "the 4pm rush," "shoulder season," "supply house run," "the Henderson install"
- **Skip startup language:** Avoid "founders," "entrepreneurs," "creators," "side hustle" — these readers built a real business from the ground up and don't identify with that vocabulary
- **Use "owner-operator" or "shop owner"** — not "small business owner" (too generic), not "executive" (too formal)
- **Direct:** The "poof, it's done" line still works but pair it with concrete outcomes. ("Poof. Per-job profit on every job, every month.")
- **No exclamation points in marketing copy.** Trades audience reads them as inauthentic.

### Key Differentiators for the Trades Vertical
What HVAC owners get with Poof that no alternative offers all together:

1. **Per-job profitability with every monthly close** — most bookkeepers never provide it at all
2. **Your Jobber + Housecall Pro data brought into your books** — we handle the import from your monthly export; you never rekey anything
3. **Managed-service tier** — owner doesn't have to use the software themselves
4. **Former controller reviewing every customer-facing decision** — not just AI guessing
5. **A controller you can text or email** — owners get answers about their business without logging into yet another portal
6. **Audit-grade ledger underneath** — built on proper double-entry bookkeeping with reversal entries; survives any IRS or insurance audit
7. **Built for $750K – $3M shops specifically** — not enterprise overkill, not solo-truck underpowered
8. **Replaces your current bookkeeper at lower cost** — and delivers faster, more granular books
9. **An AI receptionist that answers the phone and books the job** — no other bookkeeping service touches the shop's revenue at the moment it walks in the door. Safety triage is deterministic, so a gas-smell call is escalated, never booked
10. **Labor lands on the job it was spent on** — most job-costing setups cost materials and guess at hours
11. **Financing fees are costed to the job** — a financed install stops looking more profitable than it was

### Trust & Social Proof Elements (for HVAC Landing Page)
- **Lead with Austin's credentials:** "Built by Austin Semple, a former controller with 10+ years of audit and controller experience working with small service businesses."
- **Anchor on accounting rigor:** "Real double-entry bookkeeping with reversal entries — not just AI guessing categories"
- **Emphasize the human layer:** "AI does the work. A credentialed human signs off on every customer-facing decision."
- **30-day money-back guarantee** on the managed-service trial — reduces perceived risk
- **Founder-led onboarding** for the first 50 customers — Austin personally handles every new shop, position as a perk
- **"Replace your current bookkeeper"** — concrete swap, not abstract upgrade

### What the HVAC Landing Page Must Include
For the website project building `/hvac` or a dedicated subdomain:

1. **Hero section** with HVAC-specific headline (e.g. *"The bookkeeping service for HVAC and plumbing shops. Know which jobs make money — every month, from a real controller."*) — show a sample per-job P&L screenshot, not the general Poof dashboard
2. **Three-up "the pain you have today"** — late P&L, no per-job visibility, manual Jobber/QBO handoff
3. **"How it works in 60 seconds"** — connect Plaid + send us your monthly Jobber/HCP export + your monthly close lands in your inbox, with a controller on call
4. **Per-job P&L sample** — screenshot or animated mockup of a real per-job report
5. **Pricing table** — the $750 Job Margin & Recovery Audit as the headline entry point, then **two** columns: Managed for Trades $1,200 and Plus $1,500, plus the $1,500 onboarding. State the SLAs beside the price. The $2,400 Pro tier is a single "above $3M? let's talk" line beneath the table, **not** a third column — it is above the ICP and a third price pulls the target buyer's eye off the one he is actually paying
6. **"Replaces your current bookkeeper"** swap-out diagram (current vs Poof)
7. **Austin's bio section** — controller background, why he built Poof for trades
8. **FAQs aimed at HVAC objections** — "Do I need to switch from Jobber?" (no), "What if I'm on ServiceTitan?" (we'll talk), "Will my CPA still work with me?" (yes — we coordinate at year-end), "Is this real bookkeeping or just AI guessing?" (real, with controller review), "What if I want to leave?" (export your full QBO file anytime)
9. **CTA:** "Book a 20-minute call" → Calendly. Secondary CTA: **"Start the $750 Job Margin & Recovery Audit"** — the audit is the offer to push once the page is mature, not a free trial
10. **Receptionist section** (if selling it) — "every call answered, every job on the board," with the safety-triage rule stated plainly as a trust element. Do **not** show it as something the owner switches on himself; it is installed as part of the managed service

### Outreach Voice (Cold Email & LinkedIn)
The cold outreach voice should match the landing page voice. Drafts already produced separately; in BRAND_KIT terms:
- Personalize one specific thing per email (city, truck count, or job type)
- Lead with their pain, not Poof's features
- Specific dollar amounts in the body and subject
- Always include AI-drafting disclosure in the P.S.
- One CTA — a specific call time, never "let me know if interested"

---

## Technical & Partner Positioning

> **Audience gate — read this first.** Nothing in this section belongs on the trades landing
> page, in shop-owner outreach, or on social. An HVAC owner-operator does not buy "an MCP
> server," and the trades tone rules in [Section 14](#tone--language-shifts-for-this-vertical)
> explicitly rule out this vocabulary. **Use this section only for:** investor conversations and
> decks, technical or partner discussions, developer-facing content, and any "why is Poof built
> for the agent era" question. Everywhere else, it is noise.

### The agent surface (MCP)

Poof exposes its own books to outside AI agents through a **Model Context Protocol server** —
live and tested against a real third-party agent since August 2026. An agent the customer
already uses can read their financial data through org-scoped, permissioned tools instead of
screen-scraping or being handed a database password.

**Why it matters, stated for a technical audience:** most accounting software treats AI as a
feature it ships. Poof treats agents as a client class it serves. The bet is that the interface
to financial data stops being a dashboard and becomes an agent, and the software that survives
is the software an agent can safely call.

**What an agent can read, as of 2026-09-14:** the same reads the chat has — the close's status and
checklist, transaction search, A/P aging, open bills, the cash plan, accrual schedules, a month's
summary, P&L, job profitability, A/R aging, open invoices — plus the approvals inbox: an agent can
list and read proposals and request a link the human taps to approve. **An agent can never approve
anything.** Every tool comes from one registry shared with the chat and the phone line, and a test
proves the MCP surface is read-only.

**The honest limits — state these, do not skip them:**
- **It is provisioned by Poof, not self-serve.** There is no screen in the app where a customer
  creates an agent credential; there are zero MCP references in the frontend. Access is granted
  by Poof staff. Same posture as the AI receptionist.
- Do not describe it as a published, open, or generally available API. It is a working surface
  with real users, not a developer platform with docs and sign-up.

### The privacy chokepoint (Gateway)

Every AI call Poof makes — all of them, on one path — is PII-redacted before it leaves the
process, routed to a configured destination, and logged with destination, model, redaction
count, latency, and token usage. It runs automatically for every customer; nothing to
configure.

**Why it matters:** it is what makes the agent surface defensible rather than reckless, and it
is the honest answer to "where does my financial data go when your AI touches it?" For a
regulated or security-conscious audience, this is the strongest technical claim in the product,
because it is enforced at a chokepoint rather than promised per feature.

Gateway is also listed as a customer-facing feature (Group 7, #9), because unlike MCP it
requires nothing of the customer and benefits every one of them.

### What stays internal

Not for any external audience, technical ones included: the AI learning-loop internals
(correction traces), the Business Central connector, the Reddit lead-gen tool, the test
dashboard, and the Firm Console (planned, on hold, nothing built).

---

## Changelog

### September 15, 2026 (later) — the ledger-green rebrand
- **Identity.** The violet "magical" brand is retired. The idea is now one sentence — *"The work
  disappears. The evidence doesn't."* — a magic trick that shows its method: the work vanishes,
  the record stays. Personality is a controller's: on the record, direct, specific, confident
  without hedging. The ground is a ledger pad, not a stage. "Effortless" became **Shows its
  work**; "Continuous Learning" became **One figure**. §2 Brand Identity, §3 Logo Usage, §4 Color
  Palette, §5 Typography, §12 Content Guidelines and §13 Available Logo Files were rewritten. §1
  gained the brand one-liner. §6's Primary block now leads with the sentence, keeps "Bookkeeping
  That Does Itself" as the self-serve hero line, and demotes "Poof. It's done." to the story
  behind the wordmark's period. "Magical, not gimmicky" in Tone of Voice became "On the record,
  not gimmicky"; a new Messaging Don't bans "magic"/"magical" in copy.
- **Wordmark.** Lowercase `poof` in Bricolage Grotesque 800, tracking -0.05em, line-height 0.9,
  ink on paper. The period is drawn — a 0.2em circle on the baseline, 0.07em after the *f*, in
  ledger green — never typed, because Bricolage's full stop is an oval. It is a component
  (`PoofWordmark`), not an image file. 28px desktop header, 22px phone, 44px auth, 26px footer.
- **Mark.** A full stop, boxed: a hard-cornered ink square (viewBox 64, rect 2..62, stroke 4)
  with a centered green dot (r 12.16, about 38% of the box). Two shapes, so it reads at 16px. It
  is the favicon, the app icon, and the assistant's icon; a rubber-stamp impression of it is a
  motif for "Signed." states and print only.
- **Palette.** Ledger paper `#EEF2EA`, paper 2 `#F5F7F2`, white working surfaces, ink `#12211A`,
  muted `#5B6660`, rule `#C9D3C6`; ledger green `#1B5E3F` for accent and the period, press green
  `#1F7A4F` for the one button per view, green tint `#DCEBDF` for evidence; audit red `#B3261E`
  and red tint `#F6E3E0` for corrections only; light green `#A9D8B8` on ink only. App-only
  warning and an eight-color chart series that never uses green or red. Two colors carry
  meaning, two neutrals, no gradients; every pair passes WCAG AA. Site: a `ledger` Tailwind
  scale, with `slate` overridden to green-biased neutrals. App: `shared-theme.ts` is the source
  of truth, mirrored in `poof-variables.css` and `poof-design-tokens.json`.
- **Type.** Bricolage Grotesque 800 for display (wordmark, H1, H2, the words stamped large; never
  below 22px), IBM Plex Sans 400/500/600 for text and UI, IBM Plex Mono 400/500 for every figure,
  tabular. Loaded via `next/font` on the site and `@fontsource` in the app.
- **AI assistant.** A tool, not a persona: no sparkle, no animation, no gradient header — flat
  paper with a rule and the mark. It shows its steps and says "preparing," never "created,"
  because nothing is written until a person approves it.
- **Retired, do not reintroduce:** the violet → indigo → teal gradient, gradient text, the
  sparkle icon and animation, glow, shimmer, vapor, the swirl mark, the gold cloud, Righteous,
  Cabinet Grotesk, Inter, JetBrains Mono, teal, indigo, violet, and "magic"/"magical" in copy.
  The old PNG logos (`poof-logo*.png`) were deleted from the site repo.
- **Where it stands.** The app is re-themed on an open PR. The website is re-themed on the
  `rebrand/ledger-green` branch: wordmark and mark components, tokens, fonts, favicons, OG image.
  Older changelog entries below still describe the violet system as it was — that is history,
  not guidance.
- **Not changed:** feature counts, prices, dates, claims, competitive positioning, the trades
  section, the technical section, and the outstanding-corrections table.

### September 15, 2026 — two businesses; the close is a record; the reconciliation ties
- **Positioning.** The header, §1 and "Who Poof Is For" now follow `TWO_BUSINESSES.md` (decided
  2026-09-12): Poof is the software, its customer is the person who signs the close; the trades
  managed service is The Augmented Operator, which runs on Poof. Section 14 is unchanged in
  content and relabeled as AO's. The site keeps leading with the trades offer until AO's site
  exists — that is a sequencing fact, not a positioning one.
- **Added 10 features: 118 → 128.** Group 4 +2 (outstanding items carry forward; one figure on
  the screen and in the record). Group 9 +2 (ask where things stand; book, move or cancel a visit
  from the chat). Group 10 +3 (the close is a record; a checklist with due dates the books tick
  off; the nudge). Group 13 +3 (five queues, one inbox; the page settles the card; a playbook
  graduates as a rule). Group 4's auto-reconciliation and Group 10's tie-out engine reworded for
  what they now do. Group 13 item 6 carries the wider "anything the rule is about" claim.
- **Key numbers:** AI assistant tools 30+ → 62 (one registry of 100). Two rows added.
- **What was proven, and how** (top of the file): the close and the reconciliation were walked
  on the founder's real August books from a phone, and both are under DB-backed integration
  tests. Hold "it nagged me" until a live nudge has been seen.
- **Not marketed, for the record:** a security re-audit of everything shipped since the close
  run landed (2026-09-14) closed a set of pre-existing cross-tenant joins and permission grades,
  and the reconciliation rebuild fixed three money bugs a first-month shop would have hit. None
  of it is a feature; all of it is why the claims above can be made.
- **Site repo:** the 2026-09-08 update (118 features, the Approvals group) was found uncommitted
  in the site repo a week later. Committed and deployed with this update.

### September 1, 2026 — money that isn't earned yet stays unearned

- **Added 2 features to Group 10: 108 → 110.** Customer deposits are held as a liability and
  released to the job's revenue on completion; prepaid maintenance plans are deferred and earn
  per visit — **automatically when the tech taps Complete** on a maintenance visit.
  - **Lead with the controller's sentence:** "A down payment isn't revenue until the job is done.
    A plan isn't revenue until the visit happens." That is the whole managed-service argument in
    one line, and it is now literally what the product does.
  - **Cancellation is a decision, not a write-off.** When a plan customer leaves, the office
    records refund or forfeit and the books show which. Never say "automatically" here — the
    product deliberately refuses to decide this for the shop.
  - **Do not overclaim monthly plans.** Prepaid (annual) plans are what ships. Monthly-billed
    plans are a separate piece of work; do not put "monthly" in copy about plan revenue.
- **Group 12 wording tightened (count unchanged):** equipment is a per-address registry the tech
  taps, parts come from the shop's price list with cost from the catalogue, and the office's
  visit review shows the plan visit a tune-up earned.
- **Pruned a stale correction row:** the comparison page has said 108 since before 2026-09-01;
  the open gap is now 108 → 110.

### September 8, 2026 (later) — the loop is proven, and proving it found three defects

- **Phase 4's own acceptance test now runs in CI against a real Postgres**, and Group 13 can be
  described as working rather than built. Seven cases: nothing runs without a rule; a rule takes
  the covered row and leaves the one over its ceiling and the one from another merchant; the daily
  cap counts the run in progress and the overflow waits; a correction pauses it with the reason in
  the human's words; a paused rule covers nothing; a resumed one covers again; a revoked one is
  inert while its earlier work stands.
- **It found three defects in two runs, all invisible to 1,399 unit tests.** Worth knowing when
  weighing how much to trust a green suite:
  - A correction only paused a rule if the rule had personally touched the corrected record.
    Correct a *different* Ferguson transaction and the Ferguson rule carried on. The claim "a rule
    stops itself the first time you correct it" was, for about six hours, half true.
  - A categorization rule could never execute anything at all: the ceiling was read from the top
    of the evidence while an update keeps its amount on the `before` row, so every item failed
    closed. A rule would have sat in Settings looking active and done nothing.
  - A failed write told the person "Please try again" instead of "Bank account not linked to chart
    of accounts" — on the card, where the reason was the only useful thing it could have said.
- **Why they were invisible:** every unit test of those paths handed the code evidence it had
  written itself. None let the service build the evidence the way a sweep does.

### September 8, 2026 — the books stop being something the AI can write to unasked

- **Added feature Group 13 — Approvals & AI Autonomy (6 features).** Every AI write, from any
  surface, now stages as a card and waits for a person: the nightly categorization sweep, a
  request typed into Ask Poof, a detector that spotted a job losing money. Approving runs the
  stored request, not a fresh interpretation of it. **Live 2026-09-08.**
  - **The sales line is the default, not the feature.** "Nothing reaches your books without you
    seeing it first" is now literally true of every AI path in the product, and it is the thing
    an owner who has been burned by software actually wants to hear.
  - **The evidence is the part that earns trust.** A card does not say "categorize this as Job
    Materials"; it says what it looked up — five prior Ferguson transactions, all categorized the
    same way — or admits it found nothing, which is why it is asking. Gathered by code, never
    judged by the model.
  - **Against QuickBooks, the difference is not that we have rules.** QBO has bank rules and they
    auto-post. The difference is that a QBO rule which is wrong keeps being wrong until somebody
    notices, and a Poof rule **stops itself the first time you contradict it**, says which
    correction stopped it, and waits to be resumed or revoked. Also: a mandatory dollar ceiling
    separate from the match, a daily cap with the overflow going to the inbox rather than being
    dropped, a requirement that prior human decisions agreed, and a rule that stops working if its
    author loses the permission. None of that exists in a bank rule.
  - **Rules are derived, not authored.** A QBO rule is a form you guess at. Poof builds the rule
    from work you just reviewed — the merchant those rows share, the agreement in their history, a
    limit above the largest one — shows it in plain sentences, says how much of the card it covers,
    and puts your own 30-day approve/reject record on the button before you commit.
- **Added 2 features to Group 9:** the approval card appears inside the assistant conversation with
  the same evidence and buttons as the inbox, and the assistant shows its steps as it works
  ("Looking up invoices — August 2026") instead of going silent and then answering. The steps say
  *preparing*, never *created* — nothing is written until someone approves.
- **Feature count 110 → 118.** The open website correction is now a single edit, 108 → 118, rather
  than the 108 → 110 it was this morning.
- **One claim deliberately withheld.** The rules, the pausing and the notifications are live, but a
  nightly sweep has not yet been watched executing items under a rule end to end. "Handles it
  overnight on its own" does not go on the site until it has been seen happening once. The kit has
  been wrong before by describing a path that was built rather than one that had run.

### August 27, 2026 — the field-service loop: a tech closes the job, the invoice writes itself

- **Added feature Group 12 — Field Service & Job Handoff (9 features).** The technician opens their job from a texted link with **no account and no app install**, records arrival, writes what was wrong / what was done / what still needs doing, captures equipment and jobsite photos, logs parts and labor tagged by type, and taps Complete — and a draft invoice exists in the office carrying their own words. Verified end to end against the live demo shop on August 27.
  - **The sales point is the no-login part.** "My guys won't use another app" is the objection every owner raises about field software, and the honest answer here is that there is no app.
  - **Photos are opted in per photo.** The supply-house receipt showing what the shop paid for a part defaults to *not* printing on the customer's invoice. Say this out loud — it is the detail that tells an owner somebody thought about their margin.
- **The headline promise now actually closes.** "Know which jobs make money" previously depended on somebody remembering to tag work to a job — and nothing in the product created a job at all. A booked, dispatched, completed, invoiced service call could never reach the Per-Job P&L. Completing a visit now creates the job, links it to the customer, and tags the invoice to it. This was a real hole in the thing the product is sold on; it is closed.
- **Added 3 features to Group 11:** manual-or-automatic dispatch (two independent switches), a customer record created on the **first call** rather than at invoicing (matched on the last ten digits of the number, so one household is one customer), and automatic technician dispatch texts carrying the field link.
- **Jobs now belong to customers.** "Every job we've done for this customer" was a name comparison and is now a real link, so it survives a rename or a typo.
- Updated feature count **93 → 105** (11 → 12 groups).
- **Added 2 more to Group 11 and 1 to Group 12 (later the same day): 105 → 108.**
  - **Work is spread across the crew.** When several techs are free for the same slot the job goes
    to whoever has the fewest jobs that day. Previously the tie was broken by an internal id, which
    meant the same tech won every contested slot forever — invisible, and it got worse as a shop grew.
  - **A job nobody is going to now raises the alarm.** An appointment approaching its start with no
    tech assigned escalates. This is the honest answer to the one objection to manual dispatch, and
    emergencies are auto-assigned regardless of how the shop has set its switches.
  - **The office can read the field report before the customer sees anything.** The dispatcher opens
    what the tech wrote, the photos, the parts and labor and the draft invoice from the board.
    Without this, Group 12 #5's per-photo invoice opt-in had no screen to happen on.
- **Corrected in this pass:** the Key Numbers table still said **93** while the rest of the document
  said 105, and Group 11 #3 described skill matching as a gate. Skills are a **preference with a
  fallback** — a shop that has tagged nobody is never told it has no availability, and a tag nobody
  carries never blocks a booking. Do not write copy implying tags are required.
- **Honesty guardrails, do not cross:** the tech page does **no GPS tracking**, takes **no payment on site**, captures a typed name and timestamp rather than a drawn signature, and **needs a signal** — it does not work offline. **Customer-facing** texts (booking confirmation, reminder, "your tech is on the way") are still **not built**; only the technician gets texted. Do not blur those two.

### August 23, 2026 — AI receptionist, list price $79, the $750 audit replaces the pilot

- **Corrected the self-serve list price: $29/mo → $79/mo, $290/yr → $790/yr.** This changed in the product on August 2 and this doc was wrong for three weeks. Launch special is now **$39.50/mo** (still 50% off first 3 months). Display price is centralized in `apps/poof-web/src/config/pricing.ts`; the amount actually charged comes from the Stripe price IDs.
- **Retired the "$29 vs QuickBooks' $38" price-undercut line.** At $79 it is false and it argues on the axis Poof loses. Positioning axis 3 is now "one price, everything included" — scope, not discount. (The stale February figures were then verified and replaced the same day — see the pricing bullets below.)
- **Added feature Group 11 — AI Receptionist & Dispatch (7 features):** AI phone receptionist, deterministic safety triage, real-calendar booking with database-enforced no-double-booking, rule-based human escalation, six notification channels (SMS/email/push/Slack/Telegram/webhook), dispatch board + call log + technician management, and receptionist settings. Live on a real phone number since August 22.
  - **Honesty guardrails, do not cross:** outbound confirmations/reminders/"on my way" texts are **not built**. The receptionist is **operator-installed, not self-serve** — a shop owner cannot sign up and turn it on. No payment collection on the call, no route optimization, no voice cloning, no outbound sales calls.
  - The safety rule is the trust story and it is literally true: gas smell, CO, smoke, sparking, or an active alarm are handled by rules in code, not by a prompt. The AI narrates; it never decides what counts as an emergency.
- **Added 6 features to Group 10:** per-job labor allocation, financing gross-up (dealer fees costed to the job), peer benchmarks on the Per-Job P&L, period tie-out engine, accrual roll-forward subledger, document playbooks.
- **Added 2 features to Group 7:** Cloudflare Turnstile bot gate on registration (stopped a real subscription-bombing campaign), and the AI privacy chokepoint ("Gateway") that PII-redacts, routes, and logs every model call.
- Updated feature count **78 → 93** (10 → 11 groups).
- **Trades pricing restructured.** The **$750 Job Margin & Recovery Audit** replaces the $250 refundable pilot as the front door — a paid one-week diagnostic that hands the owner a dollar number in five days and credits against the $1,500 onboarding. Managed tiers are now **$1,200 / $1,500 / $2,400** by revenue tier (was $1,200 / $1,500). Do not discount the audit; do not present a recovery share or contingency fee.
- **Added the managed-service SLAs as stated commitments:** books closed by the 15th business day, every completed job costed within 5 business days, an unbilled-work report every Friday, controller responds within 1 business day. These replace the vaguer "faster and cleaner than a part-time bookkeeper's." They are promises now — do not soften or inflate them.
- Added **answering services** ($200–$600/mo) to the trades competitive alternatives, now that the receptionist competes with them.
- Corrected the logo file path: `frontend/public/` → `apps/poof-web/public/`.
- Confirmed the 30-day free trial requires **no credit card** and is granted to every new organization automatically.
- **Added Section 15 — Technical & Partner Positioning**, covering the **MCP agent surface** and the **Gateway** privacy chokepoint. MCP is deliberately *not* one of the 93 customer-facing features: there is no screen where a customer creates an agent credential (zero MCP references in the frontend), so listing it as a feature would repeat exactly the over-promise the July 31 pass cleaned up. It is real, live-tested against a third-party agent, and a genuine differentiator — for **investors, technical/partner conversations, and developer-facing content only**. It stays off the trades landing page and out of shop-owner outreach, where the vocabulary is noise and the tone rules forbid it.
- **Defined the $2,400 Pro tier: shops above $3M revenue, above the core ICP, sold on exception.** The figure had appeared exactly once in the repo with no band beside it; the two lower tiers already spanned the whole stated $750K–$3M ICP, so the alternative reading would have re-cut the $1,200/$1,500 boundaries that are live on `poofai.com/trades`. Austin chose the band that leaves those untouched. Priced on revenue alone — truck count stops tracking above $3M — with scope agreed per shop. **It is explicitly not a mandate to prospect above $3M:** outreach and the landing page stay aimed at $750K–$3M, because above that is ServiceTitan's buyer and a different sale. On the site it belongs as an "above $3M? let's talk" line, not a third pricing column.
- **Verified every competitor price in this doc (2026-08-23) and added a dated block for QuickBooks.** Intuit raised prices **August 1, 2026**: Plus $115 → **$140** (+22%), Advanced $275 → **$340** (+24%), Essentials $75 → **$85**, Simple Start $35 → **$38**. The kit's February figures ($38/$65/$200) were badly stale — Advanced alone was off by $140.
- **Changed which QuickBooks plan we compare against: Plus ($140), not Simple Start ($38).** Simple Start is single-user with no team roles, no budgets, and a fraction of the reporting — a business that needs Poof cannot run on it. Comparing $79 to $38 measures Poof against a plan that does not do the job and makes it look expensive; it is the comparison a QuickBooks rep would pick for us. Against Plus, Poof is **44% cheaper and does more**. Poof's RBAC and audit logging are Advanced-tier ($340) capabilities. Every comparison must state the plan compared and the date checked.
- **Verified the trades competitors too.** Knowify is $179/$349/$549 (was written as "~$186–$450"); ServiceTitan is **$245–$500 per technician per month** — per *tech*, not per location as this doc said — so a 6-tech shop is ~$1,800–$2,400/mo before a $5K–$15K implementation and a 12-month minimum. Workyard is $50/mo base plus $6–$16 per user. Per-seat pricing is the contrast to draw: Poof's managed fee does not scale with headcount.
- Kept OUT of every external audience, technical ones included: the AI learning-loop internals, the Business Central connector, the Reddit lead-gen tool, the test dashboard, and the Firm Console (planned, on hold — nothing built).

### July 31, 2026 — Trades as PRIMARY go-to-market; feature refresh
- **Repositioned Poof's primary focus to trade contractors** (HVAC/plumbing/electrical), sold as the managed service "Poof Managed for Trades." The website should now **lead** with the Section 14 trades positioning; the horizontal self-serve product is the underlying engine and a secondary offering. Supersedes the earlier "trades is a parallel `/hvac` page alongside a horizontal homepage" guidance.
- **Deprioritized restaurants / multi-unit.** Restaurant features (Toast import, deposit matching, prime-cost flash, margin-watch, multi-unit P&L) remain in the codebase but are no longer marketed. (Came from a job interview that didn't convert; not part of the plan.)
- **Added feature Group 10 — Job Costing, Month-End Close & Payments (9 features):** job costing & per-job profitability, AP cash planner, period close & locking, AI close narrative, monthly financial package, books-integrity checks, proactive insights engine, accept online payments (ACH/card via Stripe), inbound email capture.
- Updated feature count **69 → 78** (9 → 10 groups).
- Kept OUT of customer-facing marketing (internal/demo only): Reddit lead-gen tool, AI learning-loop internals (correction traces), Business Central connector, test dashboard page.
- **Pricing set:** managed-service tiers standardized to **$1,200/mo** (2–4 trucks, $750K–$1.5M) and **$1,500/mo** (5+ trucks, $1.5M–$3M), matching the live `poofai.com/trades` offer. Section 14 pricing table, "why this vertical," pricing messaging, and landing-page spec all aligned. (Was $999/$1,499.)
- **Honesty reconciliation of Section 14:** removed unbuilt over-promises that had already been stripped from the live site (poof-website2) back on 2026-05-31 but still lingered in this doc — "per-job P&L in 48 hrs," "monthly close in 24 hrs," "dedicated Slack channel," "direct Jobber/HCP sync," "real time." Now matches the honest promise: **monthly close + per-job P&L + a controller you can text or email**, with Jobber/HCP data brought in via **monthly export** (not live sync). **Do not re-introduce the dropped claims.**
- Infra (not brand): production cut over to the new platform at `app.poofai.com` on 2026-07-31.

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
