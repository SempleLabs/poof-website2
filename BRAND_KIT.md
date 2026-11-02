# Poof Brand Kit

> **Living document** — Last updated: November 2, 2026
> Hand this file to website creators, social media managers, and content creators so they have everything they need.

> **⭐ WHERE THINGS STAND (2026-11-01) — read this first; it overrides anything older below.**
> - **Poof is free.** The app is free for good: the books, invoices and quotes, bills, every report, approvals and rules, the close, payroll and 1099 prep, sales tax, the dispatch board and the tech's link, and the Claude and ChatGPT connector. No card, no time limit, and nothing goes read-only. Each month Free also gets a taste of the agent: **25 Ask Poof questions, 25 receipt or document reads, 2 bank feeds and 100 texts to the team.**
> - **Poof Agent is the paid plan: $79 a month, or $790 a year.** It is every piece of AI work: the overnight sort, reading every receipt, bill and check, Ask Poof with no limit, the reminders and month-end write-up it drafts, every bank feed, and texts to customers. Every new company gets **30 days of Poof Agent, no card**, then stays on Free unless it keeps the agent.
> - **Or a person does the books.** *"Want a person to do your books?"* A bookkeeper who works in Poof. **No price is shown anywhere.** The owner says how far behind they are, a person usually gets back to them within a business day, and every job is quoted. The offer has **no name** (decided 2026-11-01): describe it plainly, never brand it. It is in the app (Settings → Billing, For Review when the backlog is long, Ask Poof) and, from this pass, on the site.
> - **Poof files 1099s.** Prep is free. Poof files 1099-NEC and 1099-MISC with the IRS and sends every contractor their copy: **the first 3 forms each year free, then $2.49 a form; $1.79 for each copy Poof mails; emailed copies free.** A bookkeeper filing for clients pays $2.49 a form up to 25 a year, then $1.49. This is the January front door for businesses that don't keep their books in Poof yet.
> - **Bookkeeping firms:** every client company is free. Poof Agent is **$29 a month ($290 a year) for each client the firm switches it on for**, billed to the firm.
> - **The AI receptionist** is an add-on for service shops: **$99 a month with 1,000 minutes included, then 12¢ a minute.** A shop turns it on and buys it itself in Settings → Receptionist (live 2026-10-26).
> - **Owners first** (decided 2026-11-01). The brand and the homepage speak to the person who owns the business. Bookkeepers have their own door (`/close`), service shops theirs (`/trades`), and 1099s theirs.
> - **The headline is the free plan:** **"Poof is free. Poof Agent does the books while you sleep."** The brand sentence stays underneath it: **"The work disappears. The evidence doesn't."** The October tagline, "The back office, run by AI. Signed by you.", is no longer the headline; it is the line for approvals.
> - **Retired, never write again:** "one plan, every feature", "no tiers", "Poof Professional", the $39.50 launch special, the 30-day money-back guarantee, "Start free trial" (it is **Start free**), a trial that ends read-only, the five-day close guarantee, and the managed tiers ($750 audit, $1,200, $1,500, $2,400) as public prices.
> - **270 features in 24 groups** (246 in 22 on 10-21). New: **File your 1099s** (Group 23, 13) and **Free, Poof Agent & a person** (Group 24, 4), plus seven lines across Groups 4, 9–13. See the [changelog](#changelog).
>
> **Austin's background is two years as an auditor, then seven as a controller** (nine in total). Always state the split. Never write "ten years of audit", "10+ years of audit experience", or "ten years as an auditor and controller"; all three read as ten years of each.

> **History, not instruction.** On 2026-09-12 Poof and the managed service were split into two businesses (`TWO_BUSINESSES.md`), and from 10-06 the site sold the software only. **On 2026-10-30 Austin brought bookkeeping by a person back inside Poof**: no name, no price, every job quoted, the work done under the services LLC. Where older sections below say "the managed service" or "The Augmented Operator", read it as that history.
> Restaurants/multi-unit were deprioritized, and the restaurant reports and tools were **removed from the product** in October 2026 (app PR #350). Do not mention them anywhere.

---

## ⚠️ Outstanding website corrections (checked against the site repo 2026-11-01)

**Read this before writing any copy.** Re-check the page before acting on a line here — this
table has carried already-fixed rows before, and a stale list repeated back reads as urgency.

Everything in this table was fixed by site PR #30 (merged 2026-11-01). Site PR #31 (2026-11-02) removed retired code and the SOC 2 / "bank-grade" wording, and the 2026-11-02 copy pass rewrote the homepage hero (the real inbox beside the headline), `/trades` (about 40% shorter), `/about`, and the close counts (19 tasks, 15 proven by the books). Kept as history; check the page before reopening a row.

| Where | What's wrong now | Should be |
|---|---|---|
| Homepage | Hero "Last night, Poof ran the back office."; a black banner and a `#guarantee` section promising a close in five business days or the next month free | Hero **"Poof is free. Poof Agent does the books while you sleep."**, the brand sentence under it, the three ways (free, the agent, a person), audience links under the buttons; the guarantee gone |
| `/close`, `/trades`, `TradesShow`, `featureData` FAQs, `HomeFaqShort`, llms.txt, 14 blog footers, `mercury-books-vs-poof` | The five-day close guarantee | Removed. The close is still a checklist with due dates (19 tasks since October); nothing is promised about a day |
| Nowhere | No way to ask for a person | `/bookkeeper`: "Want a person to do your books?", no price, quoted, a reply usually within a business day; on the homepage, `/pricing`, `/trades` and llms.txt |
| `BackOfficeSection`, `/taxes`, `featureData` (1099s group, Taxes note), llms.txt, `1099-threshold-2026`, `what-your-cpa-needs-at-year-end` | "A summary your filer enters in the IRS's IRIS portal"; "you, your bookkeeper or your CPA file" for 1099s | **Poof files them**: one signature, no filer code, copies emailed or mailed, the IRS receipt back. A `/1099s` page with the prices. Income taxes stay "Poof prepares and reminds" |
| `/pricing` | No 1099 prices; no person; "The iPhone app" listed under Free (it is not on the App Store — lookup by bundle id empty on 11-01); "posts the ones it's sure of" stated as default | 1099 prices; a third block for a person (no price); the iPhone app removed until it is released; the overnight sort leaves a card unless the owner turned on auto-post |
| `/terms` | "Free trial & billing" | **"Plans & billing"**: Free, Poof Agent and its 30 days, firms, the add-on, 1099 filing per form, bookkeeping quoted separately |
| `/producthunt` | "90 days free" of "everything" | 90 days of **Poof Agent** with code PRODUCTHUNT at Poof Agent's checkout; Poof itself is free anyway |
| llms.txt | "one product on two plans"; "Money-back guarantee: 30 days"; "There is no done-for-you bookkeeping service" | Free, Poof Agent, a person (quoted), 1099 filing, the receptionist add-on; no guarantee line |
| Every count | 246 features in 22 groups; 113 assistant tools | **270 in 24**; 115 tools in the chat, 160 in the registry, 19 on MCP |

**For Austin to confirm before or right after the site merges** (none of these blocks the PR):
- **`STRIPE_MONTHLY_COUPON_ID`.** If it is still set on Railway, every monthly Poof Agent checkout still auto-applies the old launch coupon, and Stripe's checkout shows no promo-code box, so PRODUCTHUNT can't be entered. Unset it.
- **PRODUCTHUNT in Stripe** should be 100% off for 3 months on the Poof Agent price.
- **Firm billing on**: migration 184 and `STRIPE_FIRM_CLIENT_PRICE_ID` (+ annual) on Railway. `/pricing` has advertised $29 a client since site PR #29.
- **PostGrid live key** before January, or Poof can't mail Copy Bs.
- **The iPhone app**: tell the site when it is released; it goes back on `/pricing` then.

**Limits to keep with every new claim (the site states what it does, and never lists what it withholds):**
- **Free:** 25 Ask Poof questions, 25 reads (a receipt, bill, check, PDF statement or forwarded email read by AI), 2 bank feeds and 100 texts to the team a month, on the company's own calendar. File imports have no limit. When an allowance runs out it comes back on the 1st; nothing else stops. Never say "unlimited" about Free. Customer emails on Free: a verified owner, 50 a day to 10 addresses. Texts to customers are Poof Agent.
- **Poof Agent's overnight sort** leaves the night's transactions on one card for a person's OK. It posts on its own only where the owner switched on auto-post (with a confidence bar, a history bar and a dollar limit) or granted a rule. Never write that the agent closes the month, files anything, pays anyone or moves money on its own.
- **A person to do your books:** no price, range or "from $X" anywhere, ever. Never name the person or the practice on the site; "a bookkeeper who works in Poof". Never invent bookkeepers, profiles, reviews or credentials. A firm's client is never offered the request: its books are its firm's.
- **1099s:** Poof files **1099-NEC and 1099-MISC** with the IRS, after the year ends, for a business that signs the authorization; the forms for 2026 are filed in January 2027 (due **February 1, 2027**). It mails paper copies first-class to contractors who didn't agree to email. No TIN matching (the format is checked). No state filing claims, no 1099-K/INT/DIV, no W-2s. Never write "e-file instantly" or "filed today".
- **Taxes:** Poof **prepares and reminds**. It never files a return, never pays the IRS, and never moves money; the CPA prepares the return from Poof's package. Return lines cover **Schedule C and Form 1120-S** (partnerships and C-corps are next). Estimates are **federal only**. **Texas** is the only state covered (franchise tax and business personal property). 1099s are the one filing Poof does.
- **Sales tax:** Poof tracks, reports and ties it. **Poof never files.**
- **Payroll:** Poof posts pay runs from your provider's reports and ties the tax forms to them. It is **not a payroll processor** and pays no one; it is off until the owner turns it on.
- **Timesheets and commissions:** Poof records hours and calculates, books and exports commissions. It pays no one, and timesheets are off until the owner turns them on. No GPS.
- **Customer messages:** booking confirmations, reminders, "on my way" and the missed-call text are **off until an owner or admin turns them on**, and go by email until the shop's Poof line is registered for business texting. No texts 9pm–8am; STOP works. Technicians reply YES before Poof texts them jobs.
- **Payment on site and refunds:** need Stripe online payments switched on. Cash collected by a tech is a card the office approves, never posted from the tech's link.
- **Quote deposits** are off by default (a company setting with a per-quote override). Progress-billing schedules are off by default company-wide.
- **QuickBooks:** switching is by **file import** (trial balance, customers/vendors, open invoices and bills). There is **no live QuickBooks connection**.
- **Rules:** Poof *offers* a rule, or a person asks for one in a sentence ("always put Lowe's under materials"); either way an owner or admin approves the rule as a card. There is no settings form for writing rules. A rule never acts above its ceiling — "the rule is the rule".
- **Voice** is opt-in per device, not on by default.
- **The iPhone app** is built and submitted (2026-10-26) but **not on the App Store**. Don't mention it on the site until Austin says it is released.
- **Not claimable yet:** assistant domain scopes (`AI_DOMAIN_SCOPES` is off), AI apps drafting cards from Claude or ChatGPT (`MCP_CARD_APPS` is off), the ChatGPT app listing (in review), per-company AI cost ceilings, and nightly backups.

**On the count.** Verify by summing the groups, not by reading this table.

---

### Shipped to the site — do not re-raise as "to add"

| Shipped | What the site now says |
|---|---|
| 2026-10-29 · Poof is free (PR #29) | `/pricing` shows Free and Poof Agent side by side ($79/mo, $790/yr, 30 days free, nothing read-only), firms at $29 a client, the receptionist at $99 with 1,000 minutes then 12¢. Every "Start free trial" reads **Start free**; JSON-LD carries two offers; posts and FAQs say "Poof is free; Poof Agent is $79/mo" |
| 2026-10-24 · `/ai` (PRs #24, #27, #28) | Ask Claude, ChatGPT or Grok about your books: Claude users add **Poof Bookkeeping** from Claude's directory (published 2026-10-24); a privacy-policy section on what is shared |
| 2026-10-21 · Taxes and 246 features (PR #25) | A Taxes group on `/features`, a `/taxes` page, the receptionist as an add-on, the October corrections (customer messages, payment on site, signatures, 6 roles and 46 permissions, 90 days of history) and a rebuilt `/resources` |
| 2026-10-06 · software only (PR #16) | The managed tiers, the $750 audit and the trade landing pages are off the site; `/hvac`, `/plumbing`, `/electrical` 301 to `/trades` |
| 2026-10-06 · `/poof-vs-quickbooks` (PR #21) | Compared against QuickBooks **Plus**, with Plus marked yes for Intuit Assist, estimates, recurring invoices, reminders, bills, budgets, recurring journal entries, CSV import, drill-down, scheduled report emails, the audit log, 1099 prep and sales tax by location |
| 2026-08-27 → 09-15 · the trades sections | `FieldServiceSection`, `UnearnedRevenueSection`, `ApprovalsSection` and `CloseRunSection` on `/trades` (and approvals on the homepage) |

> **What is proven, and what is still not.** As of 2026-09-08 the loop runs end to end against a
> real Postgres in CI: a sweep stages, a rule executes the rows it covers and leaves the rest, a
> correction pauses it, a paused rule covers nothing, a resumed one covers again, and a revoked one
> is inert while its earlier work stands. Everything in Group 13 may be described as working.
>
> **The headline and the overnight sort (decided 2026-11-01).** The headline says Poof Agent "does
> the books while you sleep". The sentence after it must say what that means: it sorts the night's
> transactions, reads what came in and drafts what's due, and leaves it for your OK in the morning.
> Say what a rule *does*, not what a morning *feels like*: "Poof Agent sorted 41 transactions
> overnight; 38 match your history" is a claim; "you'll never think about your books again" is not.
> **This is a rule for writers, not a sentence for the site: the site never lists what it does not
> claim** (decided 2026-09-16; a homepage line that named two withheld claims read as a confession
> and was removed).
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
2. [Positioning](#positioning)
3. [Brand Identity](#brand-identity)
4. [Logo Usage](#logo-usage)
5. [Color Palette](#color-palette)
6. [Typography](#typography)
7. [Key Messaging & Taglines](#key-messaging--taglines)
8. [Product Overview](#product-overview)
9. [Key Numbers & Claims](#key-numbers--claims)
10. [Pricing](#pricing)
11. [Competitive Positioning](#competitive-positioning)
12. [Founder](#founder)
13. [Content Guidelines](#content-guidelines)
14. [Available Logo Files](#available-logo-files)
15. [Trade Contractors](#trade-contractors-hvac-plumbing-electrical)
16. [Technical & Partner Positioning](#technical--partner-positioning)
17. [Changelog](#changelog)

---

## What is Poof?

**Poof is free bookkeeping software with an agent you can hire.** The app is free for good: the ledger, invoices and quotes, bills, every report, the close, payroll and 1099 prep, sales tax, the dispatch board. **Poof Agent**, $79 a month, is the AI that does the work: it sorts the bank overnight, reads the receipts, drafts the reminders and writes the month up, and what it prepares waits on a card for a person's OK. When the owner would rather not touch the books at all, **a bookkeeper who works in Poof** does them, quoted per job.

**Three ways to get the books done, in one set of books:**
1. **Do them yourself, free.** Poof keeps the ledger, your rules keep sorting, every report builds itself.
2. **Let Poof Agent do them,** $79 a month. It does the work; you approve it.
3. **Hand them to a person.** A bookkeeper who works in Poof. No price on the site; every job is quoted.

Whichever way, nothing an AI proposes lands without someone seeing it first ([Group 13](#13-approvals--ai-autonomy-15-features)), the close is a record with a checklist the books tick off themselves, and the reconciliation shows one figure.

**It keeps the whole back office, not just the bank feed.** Poof posts **payroll** from your provider's reports and ties the 941s and W-2s to it, tracks **sales tax** by city, runs a **fixed-asset register** with depreciation, **vehicle and equipment loans** and trade-ins, counts **parts on the trucks**, and keeps the **taxes** (every deadline, the year on the return's lines, the CPA package, the reserve, the four estimates; Poof prepares and reminds, it never files a return). Quotes are accepted online with good/better/best options, deposits and progress billing; memberships bill and schedule their tune-ups; purchase orders, receiving, timesheets and commissions land on the job and the books. A service shop can add an **AI receptionist** that answers the phone, books a real slot and dispatches the tech ([Group 11](#11-ai-receptionist--dispatch-16-features)).

**And it files the 1099s.** Tell Poof who you paid; it collects the W-9s, files with the IRS and sends every contractor their copy ([Group 23](#23-file-your-1099s-13-features)).

**One-liner (headline, from 2026-11-01):** "Poof is free. Poof Agent does the books while you sleep."
**One-liner (brand):** "The work disappears. The evidence doesn't."
**One-liner (the three ways):** "Do your books free, let Poof Agent do them, or hand them to a person."
**One-liner (Poof Agent):** "Your AI works when you're talking to it. Poof's agent works while you sleep."
**One-liner (approvals):** "The back office, run by AI. Signed by you."
**One-liner (1099s):** "Tell Poof who you paid. Poof files the 1099s."
**One-liner (a person):** "Want a person to do your books?"

**Website:** poofai.com — the software, Poof Agent, a person to do your books, and 1099 filing.

---

## Positioning

### Who Poof Is For

**Primary — the owner of a small business (decided 2026-11-01).**
- Owners keeping their own books in spreadsheets or QuickBooks who'd rather not pay for software to do it → **Free**
- Owners who want the books done without doing them → **Poof Agent**, or **a person**
- Owners who are behind — a few months, or a year — and need someone to catch them up → **a person** (the request asks how far behind)
- **Service shops** — HVAC, plumbing, electrical and other trades: the dispatch board, the tech's link, deposits and plans, truck stock, the close, and the receptionist add-on (`/trades`)
- Anyone who paid contractors and needs **1099s filed in January** → **File your 1099s**, the door for businesses that don't keep their books in Poof yet; the monthly line and "your books, from the same bank — free" bring them the rest of the way
- Solo founders, freelancers and service businesses who want invoicing and the books in one place

**The second door — bookkeepers and firms** (`/close`):
- Bookkeepers and controllers who run several clients' books and want one place where the AI's work waits for their approval
- Every client company is free; the firm pays $29 a month only for the clients it switches Poof Agent on for; every client's 1099s on one page, the owner signing by emailed link
- **A firm's clients are its own.** Poof never offers a firm's client the "person to do your books" request and never routes one to the bookkeeping team

### Positioning Statement
> **For** small-business owners who keep their own books, or keep meaning to,
> **Poof is** bookkeeping software that is free, with an AI agent for $79 a month and a person when you'd rather hand it off,
> **that** keeps the ledger, sends the invoices, files the 1099s and closes the month, with every entry waiting for your OK.
> **Unlike** QuickBooks, whose free plan stops at 2 invoices a month and whose paid plans run $38 to $340 a month depending on which features you need,
> **Poof** gives the software away and charges only for the work done.

### Primary Competitive Alternative
**QuickBooks** is the default choice for most small businesses. Poof positions against it on three axes:
1. **Price** — Poof is free. QuickBooks Free stops at 1 user, 2 invoices a month, one bank account and 3 reports, with no accountant access; Simple Start is $38 a month for one user, Plus $140. What costs money at Poof is the agent's work, not features
2. **The agent does the work** — QuickBooks gives you tools to do the work; Poof Agent does it and puts the evidence on every card
3. **A person when you want one, in the same books** — no new software for a bookkeeper to learn, no shared QuickBooks login. (Intuit sells bookkeeping too, as QuickBooks Live. Never claim QuickBooks has no human option.)

The free alternatives (Wave, Zoho Books' free plan) are the new comparison set; see [Competitive Positioning](#competitive-positioning).

### Messaging Principle: Outcomes Over Features
Always lead with what changes in the customer's life, not what the product does. The feature name can appear as a label, but the **headline should be the outcome.**

| Feature | Outcome-Oriented Headline |
|---|---|
| Free plan | "The books are free. You pay only for the work." |
| Poof Agent | "Wake up to sorted books — every morning, waiting for your OK" |
| A person to do your books | "Behind on your books? Ask for a person." |
| 1099 filing | "Tell Poof who you paid. Poof files the 1099s." |
| Poof AI assistant | "Ask a question, get an answer — not a help article" |
| Receipt & invoice scanning | "Snap a photo. Never type an expense again." |
| Smart transaction matching | "Invoices match to payments while you sleep" |
| Budgeting & forecasting | "Describe your goal. Get a budget in seconds." |
| 14 financial reports | "Know exactly where your money went — in 30 seconds" |
| Report drill-down | "Click any number. See exactly what's behind it." |
| Scheduled reports | "Your reports, delivered to your inbox — automatically." |
| Reconciliation | "Reconciliation that takes minutes, not hours" |
| Recurring invoices | "Send invoices on autopilot — follow-ups included" |
| Estimates | "Send a quote. Convert to an invoice in one click." |
| Bank connection | "Connect your bank. Poof Agent handles the rest." |
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
1. **Shows its work** — Nothing lands without a person seeing it first. Every proposal carries its evidence; every rule is approved by an owner or admin as a card, whether Poof offered it from reviewed work or someone asked for it in a sentence ([Group 13](#13-approvals--ai-autonomy-15-features))
2. **Small Business First** — Every decision optimized for 1–50 employee businesses
3. **Trust & Security** — Bank and tax data encrypted, two-step sign-in, an audit log with personal details masked, and six roles that decide who sees what
4. **One figure** — The reconciliation ties; the close is a record. When the number on the screen and the number in the record are the same number, the month is done
5. **Free means free** — The software never locks and never holds a feature back. What costs money is work done: the agent's, or a person's

### AI Assistant — Ask Poof
The assistant is a tool, not a persona. There is no separate character and no name other than the product's. It has no icon of its own — **the mark is its icon** — no sparkle, and no animation. Its header is flat paper with a rule and the mark.

It lives in a right-hand sidebar, is always one click away, and is context-aware — it knows your company name, industry, business type, location, and timezone. It gives concise, action-oriented responses (2–4 sentences) and can carry out the assistant's full set of actions (the count is in [Key Numbers & Claims](#key-numbers--claims)): preparing invoices, estimates, expenses, bills, credit notes, deposits, customers, vendors, and products; setting up the chart of accounts; recording journal entries; configuring recurring depreciation schedules; building budgets and forecasts; generating all 14 financial reports; sending invoices and credit notes via email; importing bank statement PDFs; booking, moving, or cancelling a visit; answering where things stand; and guiding users through onboarding and the month-end close. Uploaded receipts and invoices are automatically scanned and attached to the records it prepares.

**It shows its steps and says "preparing," never "created."** Nothing is written until a person approves it. What the assistant produces is a card in Approvals with the evidence on it, and the page that approves the card is the page that settles it ([Group 13](#13-approvals--ai-autonomy-15-features)). Copy about the assistant follows the same rule — "Poof prepared the invoice," "the entry is staged," never "Poof created" — and never gives it feelings, a face, or a first person. When creating content, refer to it as "the assistant," "Ask Poof," or simply "Poof."

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

> **Decided 2026-09-17.** The boxed full stop and the drawn period are retired. Poof's mark is **the dispersing disc**: a solid half disc whose right side breaks into particles, and one green particle that stayed. The wordmark is the word alone, with no period; the mark carries the sentence.

Poof has a **mark** (the dispersing disc) and a **wordmark** (the word, set in type). The lockup is the mark beside the word. The wordmark is a component, not an image file; the mark is an SVG.

### The Mark
A disc dispersing into particles. *The work disappears. The evidence doesn't.* The solid half is the work; the particles are it leaving; the single green particle at the far edge is what stayed.

| Property | Value |
|---|---|
| **viewBox** | `0 0 64 64` |
| **Disc** | Half disc, center (30, 32), radius 22, flat edge at x = 30, filled ink `#12211A` (paper `#E8EFE9` when on ink) |
| **Main particles** | Five, same fill as the disc: (38, 12) r 3.6 · (45.5, 20) r 3.4 · (49, 32) r 3.2 · (45.5, 44) r 3.4 · (38, 52) r 3.6 |
| **Trailers** | Two, same fill: (53, 16) r 2 · (53, 48) r 2 |
| **The survivor** | One particle at (58.5, 32), radius 2.6, ledger green `#1B5E3F` (light green `#A9D8B8` on ink). It is the only colored element and it never touches another particle |
| **Spacing rule** | These coordinates are the design, approved 2026-09-17 as "D1". **Do not re-derive them from an arc formula**; a re-derivation shipped once and was reverted the same day. Minimum gap between any two particles is 3.1 units |
| **Mono** | When one color is available, the survivor is ink like the rest |
| **App icon** | The mark on an ink tile, inset 6 units. The maskable icon is inset 9 units |
| **Favicon** | The mark alone on transparent; 16 and 32 px PNGs, and `favicon.ico` carrying both |

### The Wordmark
Lowercase **poof** in Bricolage Grotesque 800, ink on paper. **No period.** The mark is the period.

| Property | Value |
|---|---|
| **Word** | `poof` — lowercase, always, no punctuation |
| **Font** | Bricolage Grotesque, weight 800 |
| **Tracking** | -0.05em |
| **Line-height** | 0.9 |
| **Color** | Ink `#12211A` on paper; paper `#EEF2EA` when on ink |
| **Lockup** | The mark, at 1.15× the type size, then a gap of 0.32em, then the word. Mark and word share a vertical center |
| **Desktop header** | 28px type (mark 32px) |
| **Phone header** | 22px type (mark 25px) |
| **Auth pages** | 44px type |
| **Footer** | 26px type |

- In running text, **Poof** is capitalized as a word ("Poof prepares the invoice"). The wordmark is not.
- The word alone, without the mark, is allowed where the mark already appears nearby (a favicon beside a header title, a stamp).

### Clear Space and Pairing
- Minimum clear space around the lockup or the mark alone: **the height of the o.**
- The mark is also the assistant's icon and the only icon for Poof.
- On social banners and the OG image the mark sits at the right edge, the wordmark and sentence at the left; they are not joined.

### Do's and Don'ts
- **Do** set the lockup ink on paper or paper on ink. Those are the only two.
- **Do** keep the survivor the only colored element. The disc and the other particles are never green.
- **Do** use the component (`PoofWordmark`, `PoofMark`) or the SVG (`poof-mark.svg`) — never a screenshot, never a re-drawn version.
- **Don't** type a period after poof.
- **Don't** put the mark on a photograph, a gradient, or a busy background.
- **Don't** pair the wordmark with the old swirl, the sparkle, or the boxed dot.
- **Don't** stretch, outline, shadow, tint, rotate, or add particles to the mark. The particle count and positions are fixed.
- **Don't** animate the mark on the site. The vanish on the homepage is the one animation; the mark stays still.

### Where the Components Live

| Surface | Lockup | Mark | Notes |
|---|---|---|---|
| Website (`poof-website2`) | `src/components/PoofWordmark.tsx` | `src/components/PoofMark.tsx`, `public/poof-mark.svg`, `public/poof-mark-on-ink.svg` | Favicons, app icons, and `og-image.png` are generated from the SVG |
| App (`apps/poof-web`) | `PoofWordmark` | `PoofMark`, `public/poof-mark.svg` | Same geometry; colors from `src/theme/shared-theme.ts` |

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
- **"Poof is free. Poof Agent does the books while you sleep."** — The homepage headline (decided 2026-11-01). Two sentences, in this order: free first, then the agent. Where only one fits, use "Poof is free." The next sentence says what the agent does in figures and that the entries wait for your OK (see *the headline and the overnight sort* at the top)
- **"The work disappears. The evidence doesn't."** — The brand sentence. It sits under the headline, on the OG image, a deck cover, the closing panel of every page. Poof is a magic trick that shows its method — the work vanishes, the record stays
- **"Your AI works when you're talking to it. Poof's agent works while you sleep."** — The Poof Agent line, against the chat AI the reader already has
- **"Want a person to do your books?"** — The exact words for the human offer, in the app and on the site. Never followed by a price
- **"The back office, run by AI. Signed by you."** — The site tagline until 2026-11-01; now the line for the approvals section
- **"Poof. It's done."** — Not a headline. A caption or a closing line, never a hero

### Supporting Headlines (use on feature sections, ads, social)
- "Free for good. No card, no time limit, nothing read-only."
- "Your books, sorted every morning — waiting for your OK"
- "QuickBooks Free: 3 reports. Poof Free: every report."
- "Behind on your books? Ask for a person."
- "Snap a photo. Never type an expense again."
- "Describe your goal. Get a budget in seconds."

### Headlines for the November groups (2026-11-01)
Outcome first, the limit kept in the body copy (see *Limits to keep* at the top).
- **1099 filing:** "Tell Poof who you paid. Poof files the 1099s." · "W-9s collected, forms filed, copies mailed — and the IRS receipt in your inbox." · "Your first three forms are free." · Body limit: 1099-NEC and MISC, filed after the year ends; due February 1.
- **Next year's 1099s:** "The W-9 goes out at the first payment, so January is one approval."
- **For bookkeepers:** "Every client's 1099s on one page. The owner signs from an email."
- **Free:** "The books are free. You pay only for the work." · "Nothing locks. Ever."
- **Poof Agent:** "Last night, Poof Agent sorted the bank, read the receipts and drafted the reminders. This morning it's waiting for you."
- **A person:** "A bookkeeper who works in Poof. Tell us how far behind you are; we'll quote the job." · Body: a reply usually within a business day; no price on the page.
- **Texts:** "Your tech texts the receipt. It's an expense card before they're back in the truck." · "Missed the call? Poof texts them the booking link."

### Headlines for the October groups (2026-10-06 and 10-21)
- **Approvals:** "Approve it twice, and Poof offers to do it for you." · "See everything your rules did — and undo any of it."
- **Payroll:** "Your payroll provider pays them. Poof makes the books and the 941 agree."
- **Sales tax:** "Sales tax by city, exemptions on file, and a return that ties."
- **Fixed assets & loans:** "The van, its loan and its depreciation — on the books without a spreadsheet." · "Trade in the truck in one entry."
- **Truck stock:** "Count the van from your phone. Poof knows what went on jobs and what went missing."
- **Taxes:** "Every tax deadline, the reserve, the four estimates, and a January package your CPA can use." · "How much tax you've built up, next to how much you've set aside." · Body limit: Poof prepares and reminds; you and your CPA file and pay.
- **Quotes:** "The customer picks good, better or best, signs online, and the job is on the board." · "Quoted against actual, on every job."
- **Progress billing:** "Bill the install in draws. Change orders land on the bills that are left."
- **Memberships:** "Members billed, tune-ups scheduled, renewals on a card." · Body limit: renewals and cancellations are always a person's decision.
- **Purchasing:** "Order from the quote, receive at the van, match the bill to the PO." · Body limit: tech screens show no prices.
- **Commissions:** "Commissions earned when the invoice is paid, on the books before payday." · Body limit: Poof calculates and books; your payroll pays.

### Supporting Messages
- "Every small business owner deserves financial clarity"
- "270 features, free. The agent that does the work is $79 a month."
- "See where your cash is headed — 12 months out"
- "Do your books free, let Poof Agent do them, or hand them to a person."

### Tone of Voice
- Conversational, not corporate
- Confident, not arrogant
- Simple, not dumbed-down
- On the record, not gimmicky

### Messaging Don'ts
- Don't use "magical" or "magic" anywhere in copy; the magic is one animation on the homepage and one sentence.
- Don't lead with a mood in a headline — use an outcome-oriented headline instead.
- Don't list features without tying them to a customer outcome.
- **Name only what exists:** Free, Poof Agent, the receptionist add-on, 1099 filing per form, and a person (quoted). No Basic, Pro, Premium or Enterprise; no "freemium"; no "upgrade to unlock".
- **Don't call Free a trial** or say features are held back on it. The software is free; what's metered is AI work. The 30 days are of Poof Agent, not of Poof.
- **Never put a price on the human bookkeeping** — no figure, range, "from", "starting at", or "less than a bookkeeper costs".
- Don't say Poof Agent posts, closes, files or pays on its own. It prepares; a person approves, or a rule or auto-post the owner turned on does exactly what it was granted.
- Don't use accounting jargon without explaining it.
- **Don't say SOC 2, "bank-grade", "airtight" or "never leaves".** Poof has no SOC 2 report; name what it does instead — encrypted bank and tax data, two-step sign-in, an audit log, roles.

---

## Product Overview

### What Poof Does
Poof keeps the books for small businesses (1–50 employees, 100–10,000 monthly transactions). The software is free. With **Poof Agent**, users connect their bank accounts and the AI handles categorization, receipts, reconciliation matching, reminders and the month's write-up, each as cards for a person's OK; on Free, the owner's rules keep sorting and the rest waits for a person. Or a bookkeeper who works in Poof does it.

### 270 Features in 24 Groups

#### 1. AI-Powered Automation (11 features)
1. AI transaction categorization (BRAID engine)
2. Poof AI assistant (sidebar-based, context-aware, the tool count in [Key Numbers](#key-numbers--claims), the mark as its icon, flat paper header, multi-session conversations with folder organization)
3. AI chart of accounts generation
4. Automated daily bookkeeping
5. AI-powered recurring charge detection (frequency analysis, confidence scoring, next payment prediction)
6. Receipt & invoice scanning (OCR) — photo upload, data extraction, vendor ID, duplicate detection, HEIC/HEIF support
7. Smart transaction matching — AI matches invoices to deposits, bills to payments, with partial payment support
8. AI-guided onboarding — Poof walks new users through setup with interactive survey and getting-started checklist
9. AI-powered budget generation — natural language goal input, AI builds the budget's line items; the 12-month cash projection comes from the deterministic cash engine (Group 6)
10. **The first ten minutes** — a company's first bank connection pulls 90 days of history, and about a minute later Poof sorts up to 250 rows onto one "Categorize N" card (it never auto-posts). For the first two weeks a "first look" in dollars sits at the top of Needs Attention: money in and out, what's waiting for an OK, recurring charges, what's past due
11. **"A double charge?"** — the same merchant, the same amount over $25, on the same account within 3 days, raised as a question. It stages nothing, and it stays quiet when a third one in the month makes it a habit

#### 2. Invoicing & Payments (14 features)
1. Invoicing (PDF export, email delivery via AI or UI, custom branding/logo, line-item tax & discounts; preview before Send now; void a sent invoice, delete a draft)
2. Credit notes (create, send via email, AI-assisted)
3. Payment tracking & payment receipts — record a check, cash, transfer or part payment from the invoice itself
4. Products & services catalog — with "your cost" and a margin on each item
5. Customer management (full database with contact info, billing/shipping addresses, sales reporting; an "Owes" column and one view per customer of invoices, payments and credits)
6. Recurring invoices — weekly, monthly, quarterly, or yearly schedules. The default is **"make a draft for me to review"**; sending automatically is an option the owner picks
7. Automated invoice follow-ups — configurable reminders at due date, 3, 7, 14, and 30 days past due with smart pause on payment
8. **Reminders written from the customer's history** — each one drafted by AI and checked by a code guard before it goes; a daily collections summary by email, Telegram or Slack
9. **Replies are read** — a customer's answer to a reminder shows on the invoice, and "says they paid", "disputes it" or "has a question" becomes a card
10. **A hold stops every reminder** — put a customer on hold and no sender (sweep, follow-up, Send now) writes to them
11. **Scan a check** — snap it on the phone, approve it, and it waits in Undeposited Funds until the deposit clears it; the routing and account numbers are blacked out on the phone before anything is sent
12. **Customer credits** — an overpayment is kept as the customer's credit, to use on an invoice or refund, with Undo; a standalone credit note can be refunded
13. **Refunds and chargebacks reach the books** — a Stripe refund or dispute updates the invoice and A/R and pauses reminders; refund to card or bank from an approval card (owner or admin only, never a rule; needs online payments)
14. **Bundles** — several parts sold as one customer line at the bundle's price, with each part's cost still reaching job cost, commissions and inventory. No cost ever reaches the tech or office roles

#### 3. Expense & Bill Management (14 features)
1. Expense tracking
2. Mileage tracking (business travel)
3. Bill management
4. Vendor management
5. Transaction matching
6. **One bank payment can pay several bills** — a check that covers three invoices from the same supplier is matched once, to all three
7. **Capture from anywhere** — a "+" button in the app, and a Receipt / Check bar on the tech's job link
8. **Pay one bill or several, in full or in part** — from the Bills screen; every bill carries a balance and payments are listed with Undo. Poof records the payment; it does not move the money
9. **"That withdrawal pays BILL-123 — match it?"** — a card in any channel, raised only for one clear bill, so a bill payment is never booked as a second expense
10. **One bill across several jobs** — each line with its own account and job, adding up to the cent
11. **Bills and expenses carry their job** — coded to job costs, overhead, fixed assets or inventory
12. **Vendor credits and returns** — a restocking fee as its own line; use a credit on a bill, or close the rest
13. **Supplier refund checks matched to the credit** — an overpaid bill's extra kept as a vendor credit, and the refund nets in the vendor's 1099
14. **Emailed supplier invoices become bills to approve** — not paid expenses: due date, invoice number, job, a duplicate warning, and the PDF attached

#### 4. Banking & Reconciliation (12 features)
1. Bank connection via Plaid (12,000+ banks; **90 days of history on the first connection, refreshed on its own every day** for every connected bank, reaching back up to 90 days when a feed has stalled — true from 2026-10-20; a connection made since 2026-10-29 can also bring in payments back to January 1 for 1099s, kept out of the books; optional liability accounts for broader institution support). Free connects 2 banks; Poof Agent, any number
2. Bank statement import (CSV/PDF, up to 25MB, AI-powered parsing with GPT-4o Vision for PDFs, intelligent column mapping, bank name auto-detection, duplicate prevention) — also importable via AI chat by uploading a PDF
3. Reconciliation (multi-step wizard, auto-match, hand match and unmatch, completion report, export and email, history with reopen and delete) — works on a phone; a credit card reconciles to the balance owed
4. Auto-reconciliation (opt-in, weekly or monthly, with notifications). It signs a period only when the difference is under a penny; anything else becomes cards in Approvals, one per uncertain match. It takes the period **after the last one completed**, so a month it missed is caught up
5. **Outstanding items carry forward** — a check written in July that clears in August is on August's book side, and a first reconciliation lists what was still open from before it (never the opening balance, which both sides already agree on). Cleared rows stay cleared when someone later fixes the entry's memo or date
6. **One figure, on the screen and in the record** — the unexplained difference is statement ending, less the books at period end, plus what is booked but not on the statement, less what is on the statement but not booked. The screen reads it from the server; completion stores the same number; the close's bank-reconciliation check reads that. A row added during the reconciliation counts even though auto-match never saw it. A reconciliation on which a later one rests cannot be reopened first
7. Deposits
8. Multi-account support
9. **Reconnect a bank whose login expired** — flagged on Banking and in Needs Attention
10. **Transfers between your own accounts post once** — card payments, savings and a line of credit, with a "Match both" card; different-day transfers go through Transfers in Transit, and the close warns when that account holds anything stale
11. **Pending holds wait until they post** — a transaction the bank removes is set aside, and a booked one the bank stops showing raises a card
12. **Pending at the bank** — "Pending at the bank: 3 (−$412.18)" under each account and on Transactions, never booked; **Sync Now** asks the bank for the latest first (app #499)

#### 5. Accounting & Reporting (13 features)
1. Double-entry accounting
2. 14 financial reports: Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, General Ledger, Account Detail Report, AR Aging (also by job), AP Aging, Customer Sales, Vendor Expenses, Sales by Product/Service, Expenses by Category, Budget vs Actual, Progress Billing
3. Report drill-down — click any account in Balance Sheet, Income Statement, or Trial Balance to see underlying journal entries; click a journal entry to edit it
4. Shareable report URLs — filter state (date range, basis, hide-zero-balances) persists in URL for bookmarking and sharing
5. Scheduled report delivery — automated email delivery of any report (daily, weekly, monthly, or quarterly) as PDF or CSV to multiple recipients
6. Financial import (bulk chart of accounts, transactions, customers/vendors, invoices)
7. Accrual & cash basis toggle (cash basis follows QuickBooks' rule)
8. Recurring journal entry templates (daily, weekly, monthly, quarterly, annually) with reversing journal entry support
9. **Accounts Poof uses** — every automatic entry (invoices, bills, sales tax, loans, depreciation…) posts to an account you can see and change on the Chart of Accounts page; if one is missing, Poof creates it once with the standard name and number, and a category that isn't in your chart is held for review, never posted somewhere else
10. **Switch from QuickBooks by file** — the trial balance, customers and vendors, and open invoices and unpaid bills come in as opening balances, tied to the trial balance and never counted twice
11. **Compare the P&L** — to the previous period or the same period last year (gross margin change in points), or split by job type
12. **Download the company's books** — the whole company in one Excel workbook: ledger lines, chart, bank rows, quotes, jobs, visits, equipment, memberships, price book and time. Pay stays owner-only
13. **Bring it over from Housecall Pro, Jobber or QuickBooks** — price list, customers and service addresses, equipment, and members, each previewed and then a card to approve; exports can be emailed in or dropped into Ask Poof. File import only

#### 6. Budgeting & Forecasting (9 features)
1. Budget creation — manual or AI-generated from a natural language goal (e.g., "20% revenue growth")
2. Budget lifecycle management — Draft → Active → Locked → Archived, with clone support
3. Variance dashboard — budget vs actual comparison with bar charts, percent variance, and status indicators (on track, approaching, over budget, critical)
4. Cash flow forecasting — 12-month projections with confidence bands, seasonal adjustments, and a rolling option, computed by a **deterministic cash engine** (the same books give the same forecast every time); AI writes only the insights about it
5. Budget alerts — proactive spending alerts when approaching or exceeding thresholds
6. **Plan → Simulations** — seven levers (hire a tech, buy a van cash or financed, lose a customer, change prices, slower collections, slow season, one-time money in or out), showing lowest cash and its week and cash in 12 or 18 months; every default says where it came from
7. **Save and compare up to 3 scenarios** — a saved scenario re-runs on today's books
8. **Ask a what-if in a sentence** — "can I afford a second van at $52k, 8%?" answered with its arithmetic in words and a link to Simulations. It never gives a verdict and saves nothing
9. **"Cash goes below zero the week of …"** — a card for the next 13 weeks, and projected vs actual cash in each month's close narrative

#### 7. Team & Security (11 features)
1. Team management — 6 roles: Owner / Admin / Accountant / Bookkeeper / Office manager / Viewer
2. Two-factor authentication (TOTP with QR code setup and 8 backup codes; five wrong codes and it waits)
3. Audit logs (PII masking)
4. Session management (30-minute timeout, active session viewer)
5. GDPR/CCPA-compliant account deletion
6. Email verification
7. Role-based permissions (RBAC) — 46 granular permissions
8. Bot-abuse gate on registration — Cloudflare Turnstile challenge on public sign-up, stopping scraped-address subscription bombing
9. AI privacy chokepoint ("Gateway") — every model call goes through one place: the text is scrubbed of identifiers like Social Security, card and bank numbers before it leaves, and every call is logged with destination, model, redaction count, and token usage for the audit trail (photos and PDFs go as they are)
10. **Office manager role** — invoices, quotes, customers, dispatch and hours, but no books; they land on the Board, and Ask Poof, the chat apps and Approvals follow the role
11. **Add a company from the company menu** — you own it; the first company a person owns gets 30 days of Poof Agent, and later ones start on Free (app #481)

#### 8. Productivity & Workflow (7 features)
1. Personalized dashboard — AI-generated daily briefing with "Reply to Poof" action, time-aware greeting, 4 animated KPIs, Y-axis dollar labels on all chart tiles, proactive "Needs Your Attention" alerts, drag-and-drop reorderable tiles with staggered animations, actionable empty states, quick-action buttons, semantic color coding, and a global date filter
2. Global search (across transactions, invoices, bills, expenses)
3. Notification center (in-app and email)
4. Transaction approval workflows
5. Command bar (Cmd+K) — natural language navigation
6. AI chat folders — organize conversations into folders (create, rename, delete, move), with drag-and-drop on desktop and move menu on mobile, collapsible sections, and persistent state
7. **"This month" on Home** — close rate, average ticket, top 3 techs by revenue, callbacks, active members and renewals due, and backlog; hidden when the company has none of that data

#### 9. Poof AI Capabilities (23 features)
1. Business-context-aware chat (knows your company, industry, timezone) with concise, action-oriented responses, multi-session support, and folder organization
2. Books health check & month-end close guidance
3. Invoice, quote, and credit note creation — AI prepares, edits, and sends via email, including good/better/best quote drafts from templates
4. Expense, bill, deposit, customer, vendor, and product creation — AI creates any record via natural language
5. Record updates — AI can update existing invoices, customers, vendors, expenses, bills, and transactions
6. Budgeting, variance, and forecasting guidance
7. Recurring charge analysis and questions
8. Chart of accounts setup (upload, manual, auto-generate, or guided)
9. Account search & creation — AI can look up and create chart of accounts entries autonomously
10. Journal entry creation with account validation — AI verifies accounts exist before posting
11. Recurring journal entry setup — AI handles depreciation, amortization, rent, and insurance schedules (calculates periodic amounts, creates accounts, sets up the recurring template)
12. Financial report generation — AI generates all 14 reports on request
13. Bank statement PDF import via chat — upload a PDF, AI extracts transactions with GPT-4o Vision, presents summary, and imports to selected bank account with BRAID auto-categorization
14. Guided onboarding walkthrough — AI navigates the UI, highlights elements, and walks new users through setup step by step
15. File attachment handling — receipts, invoices, and documents uploaded in chat are automatically scanned and attached to any record the AI creates
16. **Approve without leaving the conversation** — ask Poof to invoice someone and the same approval card appears in the chat, with the same evidence and the same buttons as the inbox. One card, defined once, wherever it turns up. No browser alert asking whether you are sure about a sentence you already read
17. **It shows its work while it works** — "Looking up invoices — August 2026", "Preparing an invoice — Smith Residential", arriving as each step runs rather than a silent pause followed by an answer. The steps say *preparing*, never *created*, because nothing has been written yet
18. **Ask where things stand** — "Is August ready to close?", "what's open on the cash plan?", "which bills are due this week?", "what do we owe Ferguson?", "show me the accrual schedules", "how did July go?" — the close's status and checklist, transaction search, A/P aging, open bills, the 13-week cash plan, accrual schedules, and a month's summary are answered from the books, with the model told to narrate the numbers and never compute new ones. The same reads are what an outside agent gets over MCP
19. **Book, move, or cancel a visit from the chat** — "book Smith Tuesday 2pm", "can we do Thursday afternoon?", "move the Rivera visit to Friday". Open slots and the appointment list answer at once; the booking itself becomes a card, and approving it runs the same handler the phone line runs — the tech gets the same text, the board updates the same way. No rule can ever approve a visit
20. **Talk to Poof in Telegram and Slack** — ask, get answers, and approve or reject cards right in the chat; every copy of a card stays in step
21. **A morning summary where you work** — what needs your OK today, delivered to the chat app you use
22. **Ask how the business is doing** — close rate, average ticket, top tech, callbacks, members, utilization, P&L, A/R aging and job profitability; the numbers equal the screens, and tests check that they do. Also "how's the Garcia job vs the quote?", requests, and hours
23. **Use Poof from Claude, ChatGPT or Grok** — "Sign in with Poof": a consent page names the app, the company and the person, the app gets only what that person's role can read, and Settings → Chat apps disconnects it. **Poof Bookkeeping is in Claude's directory** (published 2026-10-24); the ChatGPT app is in review (app #459, #469)

#### 10. Job Costing, Month-End Close & Payments (23 features)
1. Job costing & per-job profitability — tag transactions, bills, and invoices to jobs; see profit per job (**the trades headline feature**). For shops using the receptionist and field link, a completed service call **becomes a job on its own** and its revenue, parts, and labor land on it without anyone tagging anything ([Group 12](#12-field-service--job-handoff-15-features))
2. AP cash planner — forward-looking view of upcoming bills so you know what's due, when, and whether cash covers it
3. Period close & locking — close and lock a month so entries can't change after sign-off, with an immutable trial-balance snapshot
4. AI close narrative — plain-English month-end summary of what moved and why, generated automatically
5. Monthly financial package — one-click close package (P&L, balance sheet, cash flow, variance) ready to review and send
6. Books-integrity checks — automated general-ledger integrity sweep that flags imbalances and posting errors
7. Proactive insights engine — auto-detected issues and opportunities (margin dips, unusual spend, cash risks) surfaced without being asked
8. Accept online payments — customers pay invoices by bank (ACH) or card via Stripe; payments reconcile to the ledger automatically, and an hourly catch-up records any payment whose Stripe notice never arrived
9. Inbound email capture — forward receipts and bills to a dedicated Poof address; AI extracts the data. Receipts become expenses; supplier invoices become **bills to approve** in A/P (Group 3)
10. Per-job labor allocation — spread technician labor cost across the jobs it was spent on, so a job's margin includes the hours, not just the materials
11. Financing gross-up — when a job is sold through dealer financing, the dealer fee is recognized as a cost of that job instead of quietly inflating its margin
12. Peer benchmarks on the Per-Job P&L — see how a job's margin compares to similar jobs, with the outliers called out
13. Period tie-out engine — a standing check dashboard that proves the period actually ties before it is closed, not after. A clean run proves the books *as they stood*: a transaction reviewed or an entry posted after it turns the step to "run the checks again" rather than reading "tied" off a stale result
14. Accrual roll-forward subledger — deposits, deferrals, and accrued items carried forward period to period with their own schedule
15. Document playbooks — forwarded files learn per-sender handling, so the second invoice from a supply house files itself the way the first one was corrected
16. Customer deposits released on completion — a down payment on an install is held as a liability, not booked as revenue on the day it lands, and released to that job's revenue when the job is done. The release previews first, refuses a deposit that isn't categorised as a deposit, and warns if the job was also invoiced
17. Maintenance plans earn as visits are performed — a prepaid plan sale is deferred and each performed visit earns its share to the penny, **automatically when the tech completes a maintenance visit** (a repair call on a plan customer does not count; two open plans on one customer is left for the office to pick). Cancelling is a recorded decision — refund or forfeit — never a silent write-off, and a visit that was both released and invoiced is flagged at month-end close
18. **The close is a record** — each month's close is one object: who started it and when, where it stands (not started / in progress / ready / signed / reopened — derived from the books, never typed), and what it took. Locking the period is the signature; at that moment the close captures its activity — transactions reviewed, entries posted, decisions made by a person and by a rule, corrections, hours from start to signature — and a price and tier per close, so a practice can say "August: signed Sep 5, $1,500, 60 hours" instead of guessing. Reopening keeps the signature on record
19. **A checklist with due dates that the books tick off themselves** — a template per organization (the trades default is 19 monthly tasks: feeds reviewed by day 2, bank reconciled and draft entries posted by day 3, staged materials relieved and deposits released by day 3, accruals, A/R, A/P, plan visits, job costs and categories tied by day 4, vendor bills cut off and the tie-out clean by day 5, narrative reviewed day 6, signed day 7, package sent day 8 — business days after month end). Fifteen of the tasks are **evidence-bound**: they complete themselves when the books prove them and cannot be ticked by hand; each open one says why in a sentence ("2 completed jobs still hold $1,500 of customer deposits") and links to the screen that fixes it. Manual tasks are a person's tick, recorded with who and when. Every close stamps its own copy of the list, so a later template edit does not rewrite history
20. **The nudge** — a task past its due date on an open close is an insight, a card in Approvals (with a one-tap "mark done" for a manual task), and **one message per close per day** on the channels the shop subscribed to — Telegram, SMS, Slack, email — naming every task late on it. The sweep re-reads the books before it decides what is late, so it never nags about a bank account reconciled that afternoon
21. **Quoted vs actual on every job** — revenue, equipment, materials, labor, subs, gross profit and margin, quoted against actual, with an "over quote" card and how much cost isn't tagged to any job
22. **The books reviewer** — books that balance but look wrong: a merchant filed somewhere unusual, an owner's draw booked as an expense, fuel, rent or insurance booked as office supplies, a monthly bill that stopped. A finding with one clear fix is a one-tap card
23. **Stripe payouts tie out** — Stripe's own fees are booked, and a payout's bank deposit is matched to the payout's entry, never booked twice (app #478, #501)

#### 11. AI Receptionist & Dispatch (16 features)

> **Availability note:** the phone receptionist (1–12 and 16: the number, the voice agent, triage, booking by phone, the call log, the receptionist settings, the missed-call text) is an **add-on: $99 a month with 1,000 minutes included, then 12¢ a minute**. A shop turns it on and buys it itself in Settings → Receptionist (self-serve since 2026-10-26, app #479; the prices live in Stripe). The Board, the Requests inbox and customer messages (13–15) are in the app for everyone; customer texts go from the shop's own registered Poof line, so a shop without one gets them by email, and on Free they are email only. Technician texts go from Poof's platform number once the tech replies YES (Group 12); Free has 100 team texts a month, Poof Agent no limit. See the caveats at the end of this group.

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
13. **Messages to your customers** — booking confirmations ("Reply C to confirm"), moved and cancelled notices, a day-before reminder, and "On my way". **Off until an owner or admin turns them on**; they go by email until the shop's Poof line is registered for business texting (A2P 10DLC). No texts 9pm–8am, and STOP works
14. **Board week view** — load per tech ("2 / 9h"), drag or "Move to another day", and the customer's history while booking
15. **Requests inbox** — unbooked calls, web-form submissions and texts, with Book, Call back and Close, plus a public booking form with an embed (the form is off until the shop turns it on). The office confirms; nothing books itself
16. **Missed-call text-back** — a call that ends without a booking gets one text with the booking link, within 15 minutes. Off until the owner turns it on; needs the shop's line registered for texting; never after an emergency or escalated call, at most once a week per number (app #497)

**What it does not do (do not imply otherwise):** **customer-facing** messages are built (13 and 16 above) but **off by default** and email-only until the shop's line is registered for business texting — never say a shop's customers are being texted today. Technician dispatch texts are separate (10 above). It does not take payment on the call, does not optimize routes across a day's board (the week view's map is a placeholder), and does not clone the owner's voice. There are no autonomous outbound sales calls.

#### 12. Field Service & Job Handoff (15 features)

> **Availability note:** in the app for every shop. The technician's page needs no account and no app install, which is the point — see the caveat at the end of this group.

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
11. **Get paid on site** — a QR code or pay link, by card or bank, that flips the job to "Paid" when the money lands (needs Stripe online payments; a texted pay link also needs the shop's line registered). Cash becomes a card the office approves, never posted from the tech's link
12. **Visit checklists with readings per unit** — out-of-range readings flagged next to the last reading; three starter lists (spring tune-up, fall tune-up, install commissioning). A blank required item asks "Complete anyway?" and never blocks the visit
13. **A finger signature and a visit report the customer gets** — the customer signs on the tech's phone; the report is on for membership visits and off for others, and nothing is sent while customer messages are off
14. **Techs say YES first** — Poof texts each tech once and holds job texts until they reply YES; the team list shows who's on, who's waiting and who texted STOP (app #487)
15. **Text a receipt to Poof** — a tech with job texts on texts a receipt photo to Poof's number and it is an expense card in Approvals, on the job or not (app #505)

**What it does not do (do not imply otherwise):** the tech's page does not do GPS tracking and does not work offline — it needs a signal. Payment on site needs Stripe online payments switched on. It does not schedule or re-route; that is the dispatch board's job. Tech screens never show costs or prices from the shop's books.

---

#### 13. Approvals & AI Autonomy (15 features)

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
10. **Poof offers the rule** — approve the same change on several cards (four approvals across two cards in 90 days, none edited or rejected) and Poof offers to do it for you; nothing is granted until a person says yes
11. **Done by rules** — everything your rules did on their own, grouped by rule, with "Looks right" or Undo on each change; Undo takes the entry off the ledger and puts the row back
12. **Change a rule's limits** — the ceiling and daily cap in Settings → Automation; a rule never acts above its ceiling
13. **Ask for a rule in a sentence** — in Ask Poof, Telegram or Slack ("always put Lowe's under materials"), or from a decided card or a Transactions row; rules can match description, amount range or bank account, and "also file the N rows waiting now" comes with Undo. An owner or admin approves the rule card
14. **Everyday decisions as cards in any channel** — a payment received to match, a customer credit to apply, a transfer, a draft invoice to send when a tech completes a visit, an accepted quote to convert, a quiet quote to remind
15. **Cards read as decisions** — a headline, what will happen, the button's word, the checks that passed, one caution if there is one; the details folded away (app #467, #486)

**What it does not do (do not imply otherwise):** no ledger rule can ever send anything to a customer — invoices and credit notes are always a human's decision, whatever a rule says. (Scheduled messages the shop switches on — invoice reminders, quote follow-ups, booking confirmations — are settings with previews, not rules; on the site say "no ledger rule".) A rule that writes to the ledger **must** carry a dollar limit; one without does not run. Rules cannot be written in a settings form: they come from reviewed work or a sentence asking for one, and an owner or admin approves each as a card. And autonomy is never on by default: a new account asks about everything until its owner decides otherwise.

#### 14. Fixed Assets & Loans (8 features)
1. **Asset register** — vehicles, tools, office equipment and more, with straight-line depreciation by class and an editable capitalization threshold ($2,500 by default)
2. **Monthly depreciation as one card** — the month's figure, by class, approved once; it can run on a rule while the register hasn't changed
3. **Start from your CPA's schedule** — read from a CSV or spreadsheet into one card, with opening pools, a fresh start when there's no schedule, and the year's roll-forward for the CPA
4. **Capital purchases spotted** — equipment bought on a bill or card that looks like an asset becomes a card to put it on the register
5. **Sold, scrapped, stolen or wrecked** — take an asset off the books with the gain or loss worked out, including insurance payouts
6. **Vehicle and equipment loans** — each payment split into principal and interest; on-schedule payments can run on a rule
7. **Trade-ins in one entry** — the old van out, its loan paid off, the new van and its loan in, with the entry shown before it posts
8. **The lender's statement** — true up a loan to what the lender says, and a "loan or a lease?" question for steady monthly payees

#### 15. 1099s & Vendors (8 features)

> Preparing 1099s is free. **Filing them is Group 23.**
1. **Books → 1099s** — every contractor's year so far, by how they were paid, against the year's legal threshold ($2,000 for 2026)
2. **Every payment has a payee** — "who is this?" cards link unknown bank payees and checks to vendors
3. **W-9s by link** — the vendor fills it in online; a filled-in W-9 PDF fills the vendor record, read inside Poof
4. **Tax IDs sealed** — stored encrypted, shown as the last four digits, and never erased by an edit; the signed W-9 itself, which carries the whole number, opens for an owner or admin only
5. **Prepare the year** — each contractor's copy (emailed to those who consented; mailed by Poof, or printed, for the rest) and a summary PDF for the CPA
6. **Mark filed or rejected** — the IRS receipt ID, or its reason; a change after filing is flagged as a correction
7. **"Who files your 1099s?"** — **Poof files them** first; your bookkeeper, your CPA or you under "Other ways", with the filer-code checklist and the checks the IRS rejects a file for; reminders from October 1 to the due date, never mentioning a filer code
8. **The January check** — a card for checks written in December and cleared in January, and a close task for the filing

#### 16. Payroll & Time (11 features)

> Timesheets (7–11) are **off until an owner or admin turns them on**. Poof records hours; your payroll provider pays.
1. **Post a pay run from your provider's reports** — the register and liability report become one entry, with accounts mapped once and Unpost if it's wrong
2. **Payroll withdrawals matched** — the bank's payroll and tax debits tie to the pay run that caused them
3. **Month-end wage accrual** — wages earned but not yet paid land in the right month
4. **Tax forms tied to the books** — the 941s, W-2s, 940 and state returns checked against the pay runs, with quarter-end and year-end close tasks
5. **Payroll by email** — forward your provider's payroll report and it becomes a pay run
6. **Labor onto jobs** — technicians' hours allocated to jobs at what payroll actually cost, by approved hours; officer pay gets its own account (for 1120-S line 7), and a pay run clears accrued commissions
7. **Clock in from the phone** — a per-tech link with breaks and "Clock in & on my way"; no app, no GPS
8. **Timesheets screen** — overtime, fixes with a reason, and an append-only trail
9. **Forgotten clock-outs and weekly approval as cards** — Poof never clocks anyone out on its own
10. **Export for payroll** — a CSV from approved weeks; nothing posts
11. **Paid hours vs approved hours** — a close check, with labor accrued by approved hours (hours only, never dollars)

#### 17. Sales Tax (5 features)
1. **Rates by city** — on customers, locations and invoices, with what's taxable set by kind of work (Arizona and Texas presets the owner confirms)
2. **Exemptions on file** — exempt customers with their certificates and expiry dates
3. **Sales tax report** — what was charged, by jurisdiction, for the period
4. **Record the return** — enter what was filed, match its payment from the bank, and the close ties it out
5. **Use tax** — tracked on materials bought without sales tax

#### 18. Purchasing & Truck Stock (9 features)
1. **Vans and locations** — each truck and the warehouse as a stock location
2. **Count from a phone** — a Count screen for the tech or office, saved as a draft until posted
3. **Post the count** — parts used on jobs go to those jobs; the rest is shrinkage; a count can be reversed
4. **The close knows** — when each van was last counted, year-end evidence, and a shrinkage insight when it climbs
5. **Purchase orders** — make one, email the PDF to the supplier or mark it sent; "on order" sits beside cost on every job, and "Order from the quote" fills a draft
6. **Receiving** — partial receipts and a packing-slip photo, from the office, the tech's link or the clock link; tech screens show no prices
7. **Bills matched to their PO** — variances become cards to accept or dispute
8. **Received but not billed at month end** — an accrual card that reverses on the 1st (accrual books only)
9. **Parts requests and van restock** — techs request parts from their link; a weekly "replace what was used" restock per van, off until turned on

#### 19. Quotes & Progress Billing (12 features)
1. **Quotes** — create, send and convert to an invoice in one click (PDF, email, custom branding), numbered per company, with an expiry date
2. **The customer accepts online** — a branded quote page where a typed name and "I agree" make a signed record that cannot change, or Decline with a reason; views are tracked, and acceptance creates a job at the accepted total
3. **Quote follow-ups on their own** — days 2, 5 and 10 after sending, with a preview and a switch per quote
4. **Deposit on acceptance** — a percent or a fixed amount, paid online by card or bank or recorded, held as a liability and applied when the quote converts (off by default, with a per-quote override)
5. **Good, better, best** — up to three options; the customer picks one
6. **Quote templates and photos** — start from a template; photos added to a quote one at a time, by choice
7. **Quotes from the tech's phone** — good/better/best with member prices, accepted in person once the visit is Arrived
8. **"Convert it?" and "Remind them?"** — an accepted quote and a quiet one each become a card
9. **A payment schedule on the quote** — deposit plus balance, 30/40/30, or 2–6 custom draws, billed as draws on the job; accepting books no revenue (off by default company-wide, on per quote)
10. **Draw cards when the install starts and finishes** — never approved by a rule
11. **Change orders** — spread over the bills that are left, billed with the final, or billed now; a tech's "Extra — bill it" becomes one
12. **Progress billing report** — left to bill, backlog and A/R by job, with three close checks

#### 20. Memberships (4 features)
1. **Plans and members** — annual prepaid (deferred, earned per visit; Group 10.17) or monthly (earned as billed); "Add member" sends the first invoice, and one card a month sends them all
2. **Tune-ups as one weekly card** — "Schedule 8 spring tune-ups", with each visit linked and counted x of y
3. **Renewals, term end and cancellations as cards** — never a rule; a refund is by check
4. **Member pricing** — a percent off repairs and the included tune-up at $0, on visits, quotes and drafts

#### 21. Sales Credit & Commissions (5 features)

> Owner only. Poof calculates, books and exports commissions; your payroll pays them.

1. **Who sold it** — splits, turnover credit, and comfort advisors who only sell
2. **Plans** — spiffs, or a percent of revenue or margin, earned only once the invoice is paid in full, with a 90-day take-back
3. **A pay-period approval card** — and an owner-only file; nobody is paid below $0
4. **Accrued on the books** — cleared by the pay run, and shown on the job's P&L
5. **By person** — a report for the owner, techs see their own, and Ask Poof answers the owner in the app

#### 22. Taxes (8 features)

> Poof **prepares and reminds** — it never files a return, never pays the IRS, and never moves money. Return lines: Schedule C and Form 1120-S. Estimates: federal. State: Texas. Shown under Books → Taxes for every role except the office manager.

1. **Books → Taxes calendar** — every deadline the business has (the return and its extension, estimates, 941s, W-2s and the 940, 1099s, sales tax, Texas), on the day it really falls after weekends and holidays, with who files each one and a reminder two weeks ahead; it ticks itself where Poof has the evidence (1099s marked filed, a sales tax return recorded, an estimate paid, the package sent, a Texas certification on file)
2. **The year on your return's lines** — every account mapped to Schedule C or Form 1120-S (with 1125-A), confirmed once and carried forward, tied to the books' net income, downloadable for the CPA (partnerships and C-corps are next)
3. **Questions for your CPA, with the numbers** — meals, entertainment, penalties, depreciation, officer pay vs distributions or owner draws, vehicles and 1099s, each with the books' figure; tax judgments (§179 and bonus elections, reasonable compensation, accounting method) stay the CPA's
4. **The year-end package** — one PDF for the CPA: the mapped year and its tie, the questions, the balance sheet at December 31, the fixed-asset roll-forward, payroll and sales tax for the year; "Mark sent" ticks the calendar and January's close task
5. **Tax reserve** — "owed so far" from this year's profit times a rate (25% to start, labelled a starting guess) against "set aside" in the bank account you name, on the dashboard, with a monthly nudge when it falls behind; Poof never moves money
6. **Quarterly estimates** — the safe-harbor amount (the smaller of 90% of this year and 100% of last year's tax, 110% above $150,000 AGI), four payments on their real due dates (a C-corp's fourth is Dec 15), and who pays them: you on a 1040-ES, or the company through EFTPS; the CPA's figure wins when entered
7. **Estimate payments recognized** — IRS and EFTPS payments in the bank feed offered for the right quarter, a person confirms each, payments from a personal account typed in, and on a pass-through a payment booked as an expense flagged as a draw
8. **Texas franchise tax and property** — last year's revenue against the no-tax-due threshold and which report to file by May 15; what the business owned on January 1, at cost, against the $125,000 business personal property exemption, with the certification or a Form 50-144 list for the appraisal district

#### 23. File your 1099s (13 features)

> **Poof files 1099-NEC and 1099-MISC with the IRS** for a business that signs the authorization, after the year ends (2026's forms in January 2027, due February 1). Prep is free; filing is **$2.49 a form after the first 3 each year**, a mailed copy **$1.79**, an emailed copy free. No IRS filer code (TCC) is ever asked of the customer: Poof files under its own. No TIN matching (the format is checked); no state filing, 1099-K, INT, DIV or W-2s. App #488, #511, #516–#531.

1. **"File my 1099s"** — one page in five steps (your business, who you paid, their W-9s, review and approve, Poof files), and a choice at sign-up that lands on it
2. **Poof files them with the IRS** — one signature (name, title, "I agree") authorizes Poof and approves the forms; it can be withdrawn
3. **Tell Poof who you paid** — type contractors in or upload a spreadsheet; an amount you enter is labelled "entered by you", beside what the books show
4. **Last year from your bank** — a new bank connection brings in payments back to January 1, counted toward the 1099s and kept out of the books
5. **Add a bank payee as a contractor** — straight from "who is this?" on a bank payment
6. **Every W-9 in one click** — emailed to every contractor, or a link for the owner to text, and a board of who's in, who's been asked and whose link ran out
7. **Reminders until they answer** — every 5 days, up to 3 times, with a fresh link; who's still missing in Needs Attention from December 1
8. **Poof mails the paper copies** — first-class, to contractors who didn't agree to email; each form shows the day it went, and a bad address is listed with the reason
9. **The IRS receipt, emailed** — the owner hears "accepted, receipt …" or exactly what to fix
10. **Priced per form** — the first 3 forms each year free, then $2.49; $1.79 a mailed copy; emailed copies free; paid in one checkout
11. **The W-9 at the first payment** — and a line on the 1st of each month: who's been paid, how much, how many W-9s are in. December: "your 1099s are ready to look over"
12. **A bookkeeper's clients on one page** — every client's forms, missing W-9s and signature; "Send for signature" emails the owner a one-use link, no login
13. **One checkout for every client** — $2.49 a form up to 25 a year, then $1.49; each client's first 3 stay free

#### 24. Free, Poof Agent & a Person (4 features)

> The plans are features because what a customer can do depends on them. Prices are in [Pricing](#pricing).

1. **Free for good** — the whole app, no card, no time limit, nothing read-only; each month 25 Ask Poof questions, 25 reads, 2 bank feeds and 100 team texts, with the meters in Settings → Billing. File imports have no limit
2. **Poof Agent** — every piece of AI work with no monthly limit; 30 days of it for every new company, then Free unless it's kept; a banner counts the days left
3. **Firms switch the agent on client by client** — every client free, $29 a month only for the ones it's on for, with a running total
4. **"Want a person to do your books?"** — in Settings → Billing, on For Review when 50 or more are waiting, and in Ask Poof: how far behind, roughly how many transactions a month, payroll or not. A bookkeeper who works in Poof usually gets back within a business day and quotes the job. No price is shown

---

## Key Numbers & Claims

| Claim | Value |
|---|---|
| Total features | 270 in 24 groups. The software is free; the AI work in them is Poof Agent's, and the receptionist (Group 11) is an add-on |
| Bank connections | 12,000+ (via Plaid); 2 on Free, any number on Poof Agent |
| Financial reports | 14 |
| AI assistant tools | 115 offered to the chat, from one registry of 160 shared with the phone line and MCP (19 read tools on MCP) — counted 2026-11-01 |
| AI accuracy rate | 95% |
| Setup time | 5 minutes |
| Manual entry reduction | 90% (with Poof Agent) |
| Plaid history | 90 days on the first connection, refreshed daily; for 1099s, back to January 1 (use bank statement import for older transactions) |
| Team roles | 6 (Owner, Admin, Accountant, Bookkeeper, Office manager, Viewer) |
| Granular permissions | 46 |
| Free plan, each month | 25 Ask Poof questions · 25 reads · 2 bank feeds · 100 team texts · customer emails 50 a day to 10 addresses; file imports unlimited |
| Poof Agent trial | 30 days for a new company, no card; the first company a person owns; then Free, nothing locked |
| 1099 filing | First 3 forms a year free, then $2.49 a form; $1.79 a mailed copy; emailed copies free; firms $1.49 a form past 25 a year |
| A person to do your books | A reply usually within a business day; quoted per job; no price shown |
| Cash flow forecast horizon | 12 months with confidence bands |
| Receptionist notification channels | 6 (SMS, email, push, Slack, Telegram, webhook) |
| Close checklist (trades default) | 19 tasks, 15 evidence-bound, signed on business day 7 |
| Producer cards wait | 30 days (a chat draft: 24 hours) |

The old managed-service SLAs (a close by the 15th business day, jobs costed in 5, a reply in 1) left this table with the published tiers. A quote may promise its own terms; the site states none.

---

## Pricing

**The software is free. The agent is $79. A person is quoted.**

| | Price | What it is |
|---|---|---|
| **Free** | **$0, for good** | The whole app. Each month: 25 Ask Poof questions, 25 receipt or document reads, 2 bank feeds, 100 team texts. File imports have no limit. No card |
| **Poof Agent** | **$79/mo**, or **$790/yr** (two months free) | Every piece of AI work, no monthly limits: the overnight sort, every receipt, bill and check read, Ask Poof in the app, Telegram, Slack and by voice, reminders and the month-end write-up, every bank feed, texts to customers. **30 days free** for a new company, no card |
| **Poof Agent for firms** | **$29 per client/mo**, or $290/yr, billed to the firm | Every client company is free; the firm pays for each client it switches the agent on for. The firm's trial covers 3 clients |
| **AI receptionist** (add-on) | **$99/mo** with 1,000 minutes, then **12¢ a minute** | For service shops. Turned on and bought in Settings → Receptionist |
| **1099 filing** | Prep free; **first 3 forms a year free, then $2.49 a form**; **$1.79 a mailed copy**; emailed copies free | Firms: $2.49 a form up to 25 a year, then $1.49; each client's first 3 free |
| **A person to do your books** | **No price shown. Every job is quoted.** | A bookkeeper who works in Poof. The owner says how far behind they are, roughly how many transactions a month and whether they run payroll; a person usually replies within a business day |

**Rules for every page:**
- **Free is not a trial.** Say "free for good" or "free, no time limit". The 30 days are of Poof Agent, and when they end the company stays on Free with every screen, rule and number. Nothing is ever read-only.
- **Two plans, one add-on, one per-form service, and a person.** Never invent a tier, a bundle or a "Pro".
- **Never state, imply or range a price for the human bookkeeping.** Not on the site, in a post, an ad, llms.txt or JSON-LD. "Every job is quoted" is the whole price story.
- **No launch special and no money-back guarantee.** Refunds are what the terms say. Cancel anytime: Poof Agent runs to the end of the paid period, then the company is on Free.
- **Product Hunt:** 90 days of Poof Agent free with code `PRODUCTHUNT`, entered at Poof Agent's checkout. Poof itself is free anyway; never write "90 days free" as if the software were paid.
- **The iPhone app shows no prices and no purchase buttons** (App Store rule 3.1.3(f)). App Store copy, screenshots and the app itself never mention Poof Agent's price, the receptionist's or the 1099 fees.

### Pricing Messaging
- **Lead with free:** "Poof is free." Then the agent's price as the price of work: "Poof Agent, the AI that does the work, is $79 a month."
- **Against QuickBooks, the free plan's scope is the argument now:** "QuickBooks Free stops at 2 invoices a month and one bank account, with no accountant access. Poof's free plan has every report, two bank feeds and your accountant." **Never write "QuickBooks has no free plan"** (false since 2026; see [QuickBooks pricing](#quickbooks-pricing-verified-2026-08-23-re-checked-2026-11-01)). When the reader needs the agent, "Poof Agent is $79; QuickBooks Plus, the tier with budgets and job costing, is $140."
- **Against the free tools,** scope is the argument: a free plan with job costing, approvals, the close, payroll and 1099 prep, sales tax and dispatch, and a person when you want one.
- **Do not repeat the old "$29/mo vs QuickBooks' $38" line** or anything written for the single $79 plan.
- **Compare against QuickBooks Plus ($140/mo), not Simple Start ($38/mo), whenever Poof Agent's price is on the page** — see [QuickBooks pricing](#quickbooks-pricing-verified-2026-08-23-re-checked-2026-11-01). On a page about Free, compare Poof Free with QuickBooks Free's limits, and Simple Start as the first paid plan.

---

## Competitive Positioning

QuickBooks is the primary competitive alternative. Thread this contrast throughout all marketing — not just on a comparison page. Since 2026-10-29 the first contrast is the price: Poof is free.

### QuickBooks pricing, verified 2026-08-23, re-checked 2026-11-01

**Intuit raised prices on August 1, 2026.** Any comparison written before that date is wrong.

| QuickBooks Online plan | Monthly list | Users | Change on Aug 1, 2026 |
|---|---|---|---|
| Simple Start | **$38** | 1 | +$3 (from $35) |
| Essentials | **$85** | 3 | +$10 (from $75) |
| Plus | **$140** | 5 | **+$25 (from $115) — a 22% jump** |
| Advanced | **$340** | 25 | **+$65 (from $275) — a 24% jump** |

**QuickBooks Free, $0 (Intuit's pricing, compare and Solopreneur pages, checked 2026-11-02):** 1 user, no accountant access, 2 invoices a month (unlimited if you qualify for and turn on QuickBooks Payments), 1 estimate a month, 2 receipts a month, 5 mileage trips, 1 connected bank account, 3 reports (P&L, balance sheet, account quick report), 1099s for 1 contractor (e-file fees apply), chat support. The Solopreneur page also lists **Lite at $20/mo**. On 2026-11-02 Intuit showed 50% off for 3 months on every paid plan.

*Verified 2026-08-23 against three independent sources plus Intuit's own product-update announcement. Re-checked 2026-11-01 against third-party pages dated October 2026, which still show $38/$85/$140/$340 (Intuit's own page was not opened that day). Re-check before any campaign; Intuit raised prices twice in 2026.*

#### Which plan to compare against

- **On a page about Free:** compare with **QuickBooks Free**, and name its limits: 1 user, no accountant access, 2 invoices and 1 estimate a month (unlimited invoices only with QuickBooks Payments), 2 receipts a month, 1 connected bank account, 3 reports, 1099s for 1 contractor. The first paid plans are Lite ($20, on the Solopreneur page) and Simple Start ($38). Do not write "QuickBooks starts at $38" or "the cheapest QuickBooks is $38".
- **When Poof Agent's $79 is on the page:** compare to **Plus ($140)**. Simple Start is single-user, with no team roles, no budgets and a fraction of the reporting; measuring $79 against it makes Poof look expensive against a plan that doesn't do the job. Against Plus, Poof Agent is **44% cheaper** and adds the approvals inbox, AI-built budgets, a 12-month cash forecast with confidence bands, and a close the books tick off themselves. (Plus does have budgets, project profitability and an AI assistant, Intuit Assist. Checked 2026-10-06.)
- Poof's 6 roles and 46 granular permissions are **Advanced-tier ($340) capabilities** at QuickBooks (custom roles), and so is fixed-asset depreciation. Every QuickBooks plan has an audit log; what Poof adds is PII masking in it and in every AI call.
- **Intuit's own increase is still a campaign:** "Your bookkeeping software raised its price 22% this August. Poof is free."

**Always state the plan being compared and the date checked**, in the table footnote. It is the difference between a comparison and a claim.

### The free alternatives

Free bookkeeping software exists; Poof is not the first. The contrast is scope and the agent, never "the only free option".

| Alternative | What it is (verify before quoting a number) | The honest contrast |
|---|---|---|
| **QuickBooks Free** | $0: 1 user, 2 invoices a month, 1 bank account, 3 reports, no accountant access (Intuit's page, 2026-11-02) | Poof's free plan has every report, 2 bank feeds, and 6 roles including your accountant |
| **Wave** | A free Starter plan with unlimited invoices and no bank feed; Pro, $19/mo or $190/yr (Wave's page, 2026-11-02), carries bank feeds, auto-categorization and receipt scanning; payroll extra; Wave Advisors sells bookkeeping, published from about $149–199/mo | Poof's free plan connects 2 banks and carries job costing, approvals, the close, payroll and 1099 prep, sales tax and dispatch. Poof never publishes a bookkeeping price; Wave does |
| **Zoho Books** | A free plan while revenue stays under $50,000 a year: 1 user plus an accountant, 1,000 invoices a year, reconciliation, no bank feeds; Standard $20/mo or $15/mo yearly (Zoho's US page, 2026-11-02) | Poof's free plan has no revenue cap and 6 roles |
| **Balances** | Agent-native books at about $20–40/mo | Poof's software is free; the agent is the paid part, and every write waits on a card |
| **SlowBooks Pro** | A free, local QuickBooks-2003-style app with an API an agent can drive | Poof is hosted, multi-user, with bank feeds, approvals and a person available |

*QuickBooks Free, Wave and Zoho were checked on their own pricing pages on 2026-11-02; Balances is from third-party pages and Austin's own notes. Open the vendor's page and date the check before any of them appears on the site.*

### Poof vs QuickBooks

| | Poof | QuickBooks |
|---|---|---|
| **Starting price** | **Free**; Poof Agent $79/mo | $38 Simple Start / $85 Essentials / **$140 Plus** / $340 Advanced (re-checked 2026-11-01) |
| **AI assistant** | Ask Poof (built-in, context-aware, 115 tools; every change staged for approval); 25 questions a month on Free | Intuit Assist AI agents |
| **AI budgeting & forecasting** | Yes (natural language goal input, 12-month projections) | Budgets on Plus, built by hand |
| **Auto chart of accounts** | Yes | No |
| **Receipt scanning + OCR** | Yes (with duplicate detection; 25 reads a month on Free) | Yes (but limited in lower tiers) |
| **Recurring charge detection** | Yes (AI-powered) | No |
| **Recurring invoices** | Yes (with automated follow-ups) | Yes (but limited in lower tiers) |
| **Smart transaction matching** | Yes | Limited |
| **Cash flow forecasting** | Yes (deterministic engine, confidence bands) | Limited (higher tiers only) |
| **Report drill-down** | Yes (click any account → see journal entries) | Yes |
| **Scheduled report delivery** | Yes (daily/weekly/monthly/quarterly, PDF or CSV, email) | Yes (Essentials and up) |
| **Bank statement PDF import via AI** | Yes | No |
| **RBAC** | 6 roles, 46 permissions | Custom roles on Advanced only |
| **Audit logs** | Yes (PII masking) | Yes (no PII masking) |
| **Estimates** | Yes (online acceptance with a signed record, good/better/best, deposits, follow-ups, progress billing, quoted vs actual) | Yes (acceptance, deposits and progress invoicing vary by plan; check before claiming a difference) |
| **1099s** | Prep free; Poof files them with the IRS and mails copies, per form | 1099 prep and e-file (check Intuit's current per-form terms before contrasting) |
| **A person to do your books** | Yes, in the same books, quoted | QuickBooks Live, sold separately |
| **AI phone receptionist + dispatch** | Add-on, $99/mo | No |
| **Per-job labor allocation** | Yes | No |
| **Pricing model** | Software free; pay for the agent's work | Tiered — must upgrade for features |

### Key Differentiators (What Poof Has That QuickBooks Doesn't)
> **Checked against QuickBooks Plus 2026-10-06.** Plus has an AI assistant (Intuit Assist), automatic invoice reminders, estimates, report drill-down, scheduled report emails and 1099 e-file. Don't claim those as differences.

1. **A free plan** — QuickBooks has none
2. **Every AI write staged as a card with its evidence** — the approvals inbox, partial batch approval, rules offered from reviewed work, a rule that pauses itself when corrected
3. **The close as a record** — a checklist the books tick off themselves, a reconciliation with one figure, the signature that locks the period
4. **AI-built budgets** and a 12-month cash forecast with confidence bands
5. **Reminders written from the customer's history**, with replies read
6. **6 roles and 46 permissions** below Advanced's price, and PII masking in the audit log and in every AI call
7. **Field service in the books** — the dispatch board, the tech's link, the invoice that writes itself, a service call that becomes a job
8. **Bank statement PDF import via chat**, recurring charge detection, auto chart of accounts
9. **A person to do your books in the same software**, quoted, without a shared login

---

## Founder

**Austin Semple** — CEO & Founder
- Two years as an auditor, then seven as a controller (nine in total; always state the split)
- Built Poof to solve the bookkeeping pain points he witnessed firsthand working with small businesses

### Company Timeline
- **2015–2025** — Austin's auditing and controller career
- **June 2025** — Poof is born
- **2026** — Reimagining bookkeeping with AI: budgeting & forecasting, recurring invoices with automated follow-ups, estimates, receipt scanning, recurring charge detection, bank statement import (CSV/PDF including AI-powered PDF parsing via chat), AI-powered account management and depreciation setup, personalized dashboard with AI daily briefing, report drill-down, scheduled report delivery, multi-session AI chat with folder organization, 13 reports, job costing, month-end close, online payments, an AI phone receptionist that books and dispatches, and a field-service loop where the technician closes the job from a texted link and the invoice writes itself — 108 features. Pivoted the go-to-market to managed bookkeeping for trade contractors (HVAC/plumbing/electrical)
- **October 2026** — Poof goes free, with Poof Agent as the paid plan; Poof files 1099s with the IRS; bookkeeping by a person comes inside Poof, quoted

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
- Keywords: free bookkeeping software, AI bookkeeping, automated bookkeeping, small business bookkeeping, file 1099s online, QuickBooks alternative, bookkeeper for small business

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

## Trade Contractors (HVAC, Plumbing, Electrical)

> **⭐ What this section is (2026-11-01).** Trade shops are Poof's first vertical: the `/trades` page sells them the free software, Poof Agent and the receptionist add-on, and — since 2026-10-30 — a person to do the books, quoted, with no price on the page. Austin's own outreach to shops uses the same voice. The published managed tiers (the $750 audit, $1,200, $1,500, $2,400, the $1,500 onboarding) and the name "Poof Managed for Trades" are **retired**; jobs are quoted one at a time, and quoting is Austin's, never the site's. The old tier table is in the changelog as history.

### Why This Vertical
Independent service contractors are Poof's first vertical focus because they (1) answer cold outreach, (2) have 15–25% net margins, (3) universally hate the gap between Jobber/HCP and QBO, and (4) talk to each other at supply houses and trade associations. Austin's two years in audit and seven as a controller translate directly — these owners trust accounting credentials over "AI startup" pitches.

### Target Customer
- **Business type:** Residential HVAC service contractors (primary), plumbing service contractors, electrical service contractors
- **Revenue:** $750K – $3M annually
- **Employees:** 4 – 15 (owner + dispatcher + 2 – 10 service techs)
- **Trucks:** 2 – 6 service vehicles
- **Geography:** US sunbelt states — TX, FL, AZ, NC, SC, TN, GA, NV (priority); national over time
- **Persona:** 35 – 55 year-old owner-operator who built the business from a service truck. Technical enough to use software, doesn't enjoy it. Values time over features. Active in Facebook groups and at supply houses (Ferguson, Winsupply, Johnstone).
- **Current setup:** QuickBooks Online + Jobber or Housecall Pro + a part-time bookkeeper they're frustrated with

### Vertical Positioning Statement
> **For** HVAC, plumbing, and electrical shop owners doing $750K – $3M who are tired of waiting weeks for last month's P&L,
> **Poof is** free software that runs the shop's back office — the dispatch board, the tech's link, job costing, the close — with Poof Agent to do the bookkeeping, an AI receptionist to answer the phone, and a bookkeeper who works in Poof when the owner wants a person,
> **that** follows every job from the phone call to the P&L without anybody typing it twice.
> **Unlike** a part-time bookkeeper who rekeys Jobber data into QuickBooks once a month, or field-service platforms like ServiceTitan that are priced per technician and built for shops three times the size,
> **Poof** puts the job, the books and the evidence in one place, and charges for the work rather than the seats.

### Pain Points (in order of magnitude)
1. **Monthly P&L lands 2 – 3 weeks late.** Pricing decisions on this week's bids are made blind.
2. **Zero visibility into per-job profitability.** That big commercial install might have been a loss — and you won't know for a month.
3. **Bookkeeper rekeys Jobber/HCP data into QBO manually.** Slow, error-prone, expensive.
4. **Cash flow surprises during shoulder seasons.** Spring and fall lulls hit harder than expected.
5. **Sales tax on materials is a recurring headache.** Tracking varies by state and job type.
6. **1099s at year-end are a fire drill.** Subs scattered across QBO, spreadsheets and the bookkeeper's notes — now one approval in January, with Poof filing.

### Outcome-Oriented Headlines (`/trades` and outreach)
Always lead with the outcome the owner cares about, never the feature.

| Feature / Capability | Trades Outcome Headline |
|---|---|
| Job costing | "Know which jobs make money — every month, from your actual books." |
| Field link + invoice | "Your tech closes the job from a text. The invoice writes itself." |
| Monthly close | "A close with a checklist the books tick off themselves." |
| AI transaction categorization | "Stop labeling 'HOME DEPOT' transactions one at a time." |
| Receipt by text | "Your tech texts the receipt. It's on the job before they're back in the truck." |
| 1099s | "Your subs' 1099s, filed by Poof. The W-9 goes out at the first payment." |
| Sales tax on materials | "Materials sales tax tracked by job and city." |
| A person to do your books | "Rather not do the books? A bookkeeper who works in Poof will. Every job quoted." |
| Cash flow forecasting | "Know your shoulder-season cash position 90 days out." |
| AI receptionist | "The phone gets answered at 9pm. The job's on the board before you wake up." |
| Missed-call text-back | "Missed the call? Poof texts them the booking link." |
| Safety triage | "A gas-smell call gets 911 and a callback — not a Tuesday appointment." |
| Per-job labor allocation | "Your techs' hours land on the jobs they were spent on." |
| Financing gross-up | "That financed install wasn't a 40% job. Here's what the dealer fee really cost you." |

### Pricing for shops
The same as everyone's ([Pricing](#pricing)): the software free, Poof Agent $79, the receptionist $99 with 1,000 minutes, 1099s per form, a person quoted. **The price does not change with technicians or trucks** — that is the contrast with ServiceTitan and Workyard. Never put a price next to the human bookkeeping, and never restate the retired tiers.

### Competitive Alternatives (Trade-Specific)
On trades pages, reference these competitors — NOT QuickBooks (their issue isn't QBO, it's the *handoff to* QBO).

| Alternative | What it is | Why owners switch to Poof |
|---|---|---|
| **Part-time / outsourced bookkeeper** ($500 – $1,500/mo) | A person who logs into QBO once a month, sends a PDF P&L | Slow, no per-job visibility, rekeys Jobber data. With Poof the bookkeeper (theirs or one who works in Poof) works where the jobs already are |
| **Workyard** ($50/mo base + $6 – $16 per user) | Field-service time tracking with job costing | Priced per user, so it scales with headcount; accounting is an afterthought. An 8-person shop lands near $180/mo **plus** accounting |
| **Knowify** ($179 / $349 / $549 per month) | Construction accounting (general contractors) | Designed for general contractors, not service trades; the useful tier is $349+ |
| **ServiceTitan** ($245 – $500 **per technician** per month) | Enterprise field-service platform | A 6-tech shop is roughly $1,800 – $2,400/mo before a $5K – $15K implementation and a 12-month contract. Built for 20+ tech shops doing $5M+ |
| **QBO + Jobber/HCP DIY** | Owner reconciles + categorizes themselves | The handoff is the daily pain; owner's time isn't free |
| **Answering service** ($200 – $600/mo) | Humans take a message, maybe book into a calendar | They take a message; they don't know your techs' skills or which calls are emergencies. Poof's receptionist books against real availability and costs the job it creates |

*Competitor pricing verified 2026-08-23. ServiceTitan and Knowify both price per user or per
technician, so a flat monthly figure understates them at shop scale — always convert to the
prospect's actual headcount before quoting a contrast. Re-verify before any campaign.*

### Tone & Language Shifts for This Vertical
The Poof brand voice ("on the record": direct, specific, the evidence not the assertion) still applies, but on trades pages and outreach, lean into these shifts:

- **Use trade vocabulary:** "shops" instead of "businesses," "techs" instead of "employees," "trucks" as a sizing proxy, "service calls" instead of "appointments"
- **Talk in specific dollars:** "$1,200 a month for a bookkeeper" beats "high bookkeeping costs" — about *their* costs, never as Poof's price for a person
- **Reference their actual tools:** Jobber, Housecall Pro, ServiceTitan, FieldEdge — by name
- **Reference their daily reality:** "between service calls," "the 4pm rush," "shoulder season," "supply house run," "the Henderson install"
- **Skip startup language:** Avoid "founders," "entrepreneurs," "creators," "side hustle"
- **Use "owner-operator" or "shop owner"** — not "small business owner" (too generic), not "executive" (too formal)
- **No exclamation points in marketing copy.** Trades audience reads them as inauthentic.

### Key Differentiators for the Trades Vertical
1. **The job follows itself to the P&L** — phone call, board, tech's link, invoice, job, per-job margin, with nobody retyping it
2. **Per-job profitability every month** — most bookkeepers never provide it at all
3. **The software is free; the price doesn't grow with techs or trucks**
4. **A bookkeeper who works in Poof, when the owner wants one** — quoted, in the same books
5. **An AI receptionist that answers the phone and books the job** — safety triage is deterministic, so a gas-smell call is escalated, never booked
6. **Labor lands on the job it was spent on**; **financing fees are costed to the job**
7. **Audit-grade ledger underneath** — double-entry with reversal entries, every AI write on the record
8. **1099s filed by Poof**, with the W-9 collected at the sub's first payment

### Trust & Social Proof Elements
- **Lead with Austin's credentials:** "Built by Austin Semple: two years as an auditor, then seven as a controller."
- **Anchor on accounting rigor:** "Real double-entry bookkeeping with reversal entries — not just AI guessing categories"
- **Emphasize the human check:** "Nothing reaches your books without you seeing it first."
- **No guarantees** — the money-back and five-day close guarantees are retired
- **Real people only.** No invented bookkeepers, testimonials or shop logos. A quote from a real shop needs that shop's yes

### Outreach Voice (Cold Email & LinkedIn)
- Personalize one specific thing per email (city, truck count, or job type)
- Lead with their pain, not Poof's features
- Specific dollar amounts in the body and subject — never a price for Austin's bookkeeping in a first email; a quote follows a conversation
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
live and tested against a real third-party agent since August 2026, and listed in **Claude's
directory as "Poof Bookkeeping"** since 2026-10-24. An agent the customer
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
anything.** Every tool comes from one registry shared with the chat and the phone line (19 read
tools on MCP, 2026-11-01). Built and **off until `MCP_CARD_APPS` is set**: an AI app can *draft*
cards (a bill, an expense, an invoice draft, a payment received, a customer…) that a person approves
on Poof's card, in the chat or in Approvals — never by a rule, never by the agent (app #482).

**The honest limits — state these, do not skip them:**
- **Sign in with Poof (app #459, live):** a customer connects Claude, ChatGPT or Grok to their own
  company through an OAuth consent page, with tools scoped by their role, and manages it under
  Settings → Chat apps → AI assistants. **Claude's directory: published 2026-10-24** (the site's
  `/ai` page says so). **ChatGPT: in review** since 2026-10-25 — don't say Poof is in ChatGPT's apps
  until Austin publishes it.
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

### November 2, 2026 — QuickBooks has a free plan

- **Claim that became false, corrected:** "QuickBooks has no free plan." Intuit's pricing page lists **QuickBooks Free at $0** (1 user, no accountant access, 2 invoices and 1 estimate a month, 1 bank account, 3 reports, 1099s for 1 contractor), checked 2026-11-02. The positioning sentence, the price axis, the supporting headline, the pricing messaging and the which-plan rules now compare against QuickBooks Free's limits. Wave and Zoho figures now come from their own pages. Site: PR #35.

### November 1, 2026 — Poof is free; owners first; a person to do your books; Poof files 1099s (270 features)

- **Decided by Austin (2026-10-27 → 11-01):** the app is free for good and the paid plan is **Poof Agent**, every model call ($79/mo, $790/yr; $29 per firm client with the agent on). On 10-30 he brought bookkeeping by a person back inside Poof: **no name, no price anywhere, every job quoted**. On 11-01: the brand and homepage lead with **owners**; the headline is built on the free plan (**"Poof is free. Poof Agent does the books while you sleep."**) with "The work disappears. The evidence doesn't." under it; the human offer stays unnamed; the four leftover public claims are rewritten (terms → "Plans & billing", the five-day close guarantee removed, Product Hunt → 90 days of Poof Agent, the money-back line removed).
- **Added 24 features: 246 → 270, 22 → 24 groups.** New Group 23 **File your 1099s** (13: Poof files NEC and MISC with the IRS, one signature, no filer code, W-9 board and reminders, last year from the bank, copies mailed, the receipt emailed, per-form prices, the W-9 at the first payment, the monthly line, a bookkeeper's clients on one page, one checkout for every client; app #488, #511, #516–#531). New Group 24 **Free, Poof Agent & a person** (4; app #490, #500, #502, #504, #508, #510, #524). Seven lines added to existing groups: pending at the bank (4, #499), Sign in with Poof for Claude, ChatGPT and Grok (9, #459, #469), Stripe payouts tie out (10, #478, #501), missed-call text-back (11, #497), techs say YES first and text a receipt to Poof (12, #487, #505), cards read as decisions (13, #467, #486).
- **Claims that became false, corrected:** "one plan, every feature" and "Poof Professional" → Free and Poof Agent; a trial that ended read-only → 30 days of the agent, then Free, nothing locked; "add a company … its own 30-day trial" → the first company a person owns gets the trial (#481); 1099s "not e-filed yet" → Poof files them; "Who uploads your 1099s?" → "Who files", Poof first; the receptionist "not self-serve, price to confirm" → self-serve at $99 with 1,000 minutes, then 12¢ (#479); assistant tools 113/158 → 115/160 (19 on MCP); the managed SLAs and tiers left Key Numbers and Section 14.
- **Limits added:** Free's allowances and sending limits, the overnight sort leaves a card unless auto-post or a rule was granted, no price ever for the person, 1099 filing's scope (NEC and MISC, after the year, no TIN matching, no state claims), the iPhone app not on the App Store yet.
- **Competitive:** QuickBooks prices re-checked against third-party pages (unchanged, $38/$85/$140/$340); a *free alternatives* table (Wave, Zoho Books, Balances, SlowBooks), every figure marked to verify before use. Free is compared to Simple Start; Poof Agent to Plus.
- **Section 14** is now *Trade Contractors*, the audience for `/trades` and outreach, with the managed tiers retired (history below, 08-23 and earlier).
- **Not claimable yet:** domain scopes, AI apps drafting cards (`MCP_CARD_APPS`), the ChatGPT listing, the iPhone app, AI cost ceilings, nightly backups.
- **Site:** all of the above in site PR #30 (`brand-pass-owners-first`) (not merged yet). The repo's kit and the site's copy are identical again once it merges.
- **Fixed in passing:** a duplicated, broken table under *Where the Components Live* in Logo Usage.

### October 21, 2026 — the AI receptionist is a separate add-on

- **Decided by Austin:** the AI receptionist is not in the $79 plan. It is an add-on, priced
  separately, set up with the shop. The price is to confirm (draft app PR #244: $99/mo, 1,000
  minutes included, 12¢ a minute after; not live). The site states no price and no self-serve
  purchase, and says "every feature in the plan" instead of "all 246 features included". The
  count stays 246, and Group 11 marks which features are the add-on. The open decision on how to
  describe receptionist setup is closed.

### October 21, 2026 — Taxes, and the front of the business (246 features)

- **Added 74 features: 172 → 246, 18 → 22 groups.** Taxes is new (8, Group 22): the tax
  calendar, the year on Schedule C or Form 1120-S lines, questions for the CPA with the numbers,
  the year-end package, the tax reserve, quarterly estimates, estimate payments found in the bank,
  and Texas franchise tax and business personal property (app PRs #254–#265, merged 2026-10-08).
  The other 66 came from app PRs merged 2026-10-06 → 10-21: Quotes & Progress Billing (12, Group
  19, with the old estimates line moved in), Memberships (4, Group 20), Sales Credit &
  Commissions (5, Group 21), timesheets folded into **Payroll & Time** (6 → 11), purchase orders
  and receiving in **Purchasing & Truck Stock** (4 → 9), and additions to Groups 1–13.
- **Limits added:** Taxes (prepares and reminds; never files, pays or moves money; Schedule C and
  1120-S; federal estimates; Texas only), timesheets and commissions (pay no one), customer
  messages (off by default, email until 10DLC), payment on site (needs online payments), quote
  deposits and progress billing (off by default). The 1099 line now says the forms are keyed into
  IRIS from the CPA summary until the IRS publishes its upload template.
- **Claims that became false, corrected:** Plaid "last 30 days" → 90 days on the first
  connection, refreshed daily (true from 2026-10-20); 5 roles → 6 (Office manager); 26
  permissions → 46 (it was already 37 on 10-06); 85/115 tools → 113/158 (19 on MCP); 13 reports
  → 14 (Progress Billing); recurring invoices default to a draft for review, not auto-send; the
  12-month forecast comes from a deterministic cash engine, with AI writing only the insights;
  emailed supplier invoices become bills to approve, not paid expenses; customer texts are built
  (off by default); the tech page takes payment on site and captures a finger signature; rules
  can be asked for in a sentence, still approved by an owner or admin as a card; restaurant
  features removed from the product (#350); an ended trial is read-only; MCP has "Sign in with
  Poof" for Claude and ChatGPT.
- **Not claimable yet:** assistant domain scopes, the firm plan, AI cost ceilings and tracking,
  nightly backups.
- **Open for Austin:** how the site describes receptionist setup now that "Poof Managed for
  Trades" is retired and self-serve is still a draft.
- **Site:** all of the above is being built in site PR `taxes-and-resources` (not merged yet),
  with a `/taxes` page, a rebuilt `/resources` page and six tax posts.

### October 6, 2026 — software only on the site; the whole back office in the product (172 features)
- **This repo's copy caught up first.** It still described the retired violet identity; it now
  starts from the site repo's Sept 17 kit (ledger green, the dispersing-disc mark), then adds the
  below. The two copies should be identical again once the site copies this one.
- **Positioning.** poofai.com sells the software only — one $79 plan, "Start free trial" and "Book
  a demo" — once the site's `refocus-software` branch merges (built 09-22 → 10-06; the live site
  still shows the managed tiers and the $750 audit until then). The managed service continues as
  Austin's separate, not-yet-named services company, sold directly; Section 14 is its outreach
  reference. Names dropped: The Augmented Operator, Poof Managed Bookkeeping (site), Setpoint.
- **Added 44 features: 128 → 172, 13 → 18 groups.** New groups 14 Fixed Assets & Loans (8),
  15 1099s & Vendors (8), 16 Payroll (6), 17 Sales Tax (5), 18 Inventory: Truck Stock (4).
  Group 2 +4 (reminders from history, replies read, holds, check scanning), Group 3 +2 (one payment,
  many bills; capture from anywhere), Group 5 +2 (Accounts Poof uses; QuickBooks by file), Group 9
  +2 (Telegram and Slack; the morning summary), Group 13 +3 (Poof offers the rule; Done by rules
  with Undo; rule limits).
- **Key numbers:** assistant tools 62 → 85 offered to the chat, from one registry of 115.
- **Pricing:** the "All 118 features" line was stale; it reads 172. The launch special is stated
  in one order everywhere: 30 days free, then $39.50 for three paid months, then $79.
- **Limits written down with the claims** (top of file): 1099s prepared, not e-filed; sales tax
  never filed; payroll posted and tied, not processed; QuickBooks by file; rules offered, never
  self-granted, never above their ceiling; voice opt-in.
- **Later the same day (site):** `refocus-software` merged (PR #16); the corrections table shipped in PR #21 and was cleared. The QuickBooks comparison here and on `/poof-vs-quickbooks` was re-checked against Plus. Plus has Intuit Assist, budgets, estimates, recurring invoices, invoice reminders, report drill-down, scheduled report emails and an audit log, so those are no longer claimed as differences. Fixed-asset depreciation and custom roles are Advanced-only.
- **Not marketed, for the record:** a nightly watchdog now checks every company's books and the
  system each morning and messages the operator only when something is wrong — it is why the
  claims above can stay true, not a customer feature.

### September 17, 2026 — the mark is the dispersing disc
- **The boxed full stop and the drawn period are retired.** Austin rejected the dot-in-a-box ("just a dot, not creative at all") and two further rounds of period-shaped and pictorial marks, then wrote his own brief: abstract, geometric, the vanish built into the form. Of six geometric directions and six iterations on the disc, he chose **D1, the dispersing disc**: a half disc whose right side breaks into seven particles on clean spokes, and one green particle standing alone at the far edge.
- **The wordmark loses its period.** `poof`, no punctuation; the mark carries the sentence. The lockup is mark, gap, word.
- Assets regenerated from the master SVG: favicon (16/32, ico), Apple touch icon, 192/512, maskable, the OG image, and the six social banners. The app receives the same SVG and geometry.
- Logo Usage section rewritten with the exact geometry so no one redraws it by eye.

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
