---
name: complaint-review
description: Review the latest QuickBooks complaint-listening report and decide what to change on the site. Use when the user asks about competitor complaints, Reddit/X chatter, QuickBooks pain points, what customers are frustrated by, or what content to write about QuickBooks.
---

# Complaint listening review

Turn the newest listening report into a short ranked list of changes worth making.
The user can read the threads themselves; the value is the judgement about what to do.

**The default answer to "should we write a post about this theme" is no.** This site already
has five QuickBooks URLs and an authority problem, not a content-volume problem. Most of the
value here is rewriting copy that exists and answering live threads.

## 1. Get the data

```sh
node scripts/listen/listen.mjs --window week
```

If it fails on credentials, point at `scripts/listen/SETUP.md` and stop — do not fake a
review or substitute your own guesses about what people complain about. Then read
`.listen-reports/latest.md`, and the previous dated report if one exists, so you can say
what actually changed.

If `.gsc-reports/latest.md` exists, read it too. **A theme with complaint volume *and*
search demand is the only combination that justifies a new page.** Complaint volume alone
justifies copy changes and thread replies, nothing more.

## 2. Filter to the ICP before anything else

The report ranks by trade signal for a reason. Raw volume on Reddit is freelancers, retail
and bookkeepers — the secondary self-serve product at best. A theme with 40 general threads
and 1 trade thread is not a priority no matter how loud it is.

Per the brand kit, trades is primary. Recommendations that pull the site back toward
self-serve are working against the positioning, and the Sept 2026 homepage review already
flagged that confusion as the site's biggest clarity problem.

## 3. What to look for, in priority order

1. **Language mismatches.** A theme the site already covers, where the report's verbatim
   phrasing is nothing like the page's copy. Cheapest win available: retitle, rewrite the
   H1, add an FAQ using their words. Check `/quickbooks-alternative` first — its pain-point
   bullets in `src/app/quickbooks-alternative/page.tsx` were written from imagination.
2. **Threads worth answering.** Live, on-ICP, under two weeks old. This is distribution, and
   it is the lever that does not depend on ranking. Draft the reply if asked; never post it.
3. **Gaps with search demand.** A theme in "no page" *and* showing impressions in GSC.
   Rare. This is the only route to recommending a new URL.
4. **Themes that contradict the site.** If shops complain about something Poof genuinely
   does not do, say so — that is a positioning correction, not a content idea.
5. **New themes since the last run.** Sudden volume usually means Intuit shipped or broke
   something. Time-sensitive, and the value decays fast.

## 4. Rules

- **Verify before recommending.** Read the actual page copy before proposing a change to it.
  Never recommend editing a headline you have not looked at. `BRAND_KIT.md`'s outstanding-
  corrections table is known to hold stale rows — re-check against the live page.
- **Cannibalization is the standing risk.** Three URLs already compete on "quickbooks
  alternative": `/quickbooks-alternative`,
  `/blog/best-quickbooks-alternatives-small-business`, `/blog/quickbooks-too-expensive-alternatives`.
  Adding a fourth makes it worse. Consolidating them is a legitimate recommendation.
- **The bar for a new URL:** trade volume in the report, search demand in GSC, and no
  existing page whose intent it would split. All three, or it is a section in an existing
  post instead. This is the same call that killed the second tax-season article and turned
  a labor-allocation post into an update of `hvac-per-job-profitability`.
- **Never invent a complaint.** Every claim about what people say must trace to a quote in
  the report. If the report is thin, say it is thin.
- **Reddit is not a representative sample.** It skews angry and technical. Say "12 threads
  mentioned this" — never "shops are saying" as though it were measured demand.
- **Small numbers are noisy.** A theme moving from 3 to 6 threads is not a trend.
- **Honesty guardrails apply to anything drafted from this.** Before proposing copy, check
  it against the banned claims: no "per-job P&L in 48 hrs", no "monthly close in 24 hrs",
  no "dedicated Slack channel", no "direct Jobber/HCP sync", no "real time". Customer-facing
  texts are not built; technician-facing ones are. Skills are a preference, not a gate.
  A generated draft is exactly how a retired claim gets back onto the site.
- **Pricing facts are canonical.** QBO Plus $140 (verified 2026-08-23), always compared
  against Plus and never Simple Start, always with the date stated. Poof Professional $79;
  Managed for Trades $1,200/$1,500; the $750 audit is the front door and is never discounted.
- **Replies are Austin's, in the controller voice.** Answer the person's actual question
  first and completely, with no link. Mention Poof only if it is genuinely the answer, and
  disclose it. A reply that reads as marketing costs more than the thread is worth.

## 5. Output

Lead with the single most important thing. Then at most 3–5 recommendations, each with:
what to change, which file or page, which quotes support it, and how confident you are.

Separate them into **copy changes** (do these), **threads to answer** (the user does these),
and **new pages** (usually empty — say so explicitly rather than padding the list).

Offer to make the high-confidence copy changes. Note what you are choosing not to do and why.
