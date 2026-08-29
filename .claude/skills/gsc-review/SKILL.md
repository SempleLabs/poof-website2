---
name: gsc-review
description: Review the latest Google Search Console report and decide what to change on the site. Use when the user asks to review search performance, SEO activity, GSC data, rankings, or "what should we improve" about search traffic.
---

# Search Console review

Turn the newest GSC report into a short ranked list of changes worth making — not a data dump.
The user can already see the numbers; the value is the judgement.

## 1. Get the data

```sh
node scripts/gsc/gsc.mjs
```

If it fails on credentials, point at `scripts/gsc/SETUP.md` and stop — do not fake a review.
Then read `.gsc-reports/latest.md`, and the previous report in `.gsc-reports/` if one exists,
so you can say what actually changed since last time.

## 2. Correlate with what shipped

```sh
git log --since="5 weeks ago" --format="%ad %h %s" --date=short
```

Movement usually traces to a specific deploy. Say which one. If a page moved and nothing
shipped that touches it, say that too — it is probably Google, not us.

## 3. What to look for, in priority order

1. **Striking distance** (position 8–20, real volume). Cheapest wins. Check the page's title
   and H1 actually match the query's intent before suggesting anything more elaborate.
2. **Cannibalization.** Two of our pages on one query splits the signal. Check the two titles.
   The usual fix is to give the commercial page commercial modifiers ("service", "outsourced",
   "cost", "done for you") and let the informational page keep the bare head term.
3. **High impressions, zero clicks.** Above position ~30 this is a ranking problem and no
   amount of title editing fixes it — say so rather than suggesting a rewrite.
4. **Losses.** A page that dropped 3+ positions is worth a look before chasing new wins.
5. **New pages.** Did recently shipped pages get indexed and start ranking? How fast?

## 4. Rules

- **Verify before recommending.** Read the actual page's metadata and copy before proposing a
  change to it. Never recommend editing a title you have not looked at.
- **Separate ranking problems from CTR problems.** They have different fixes and confusing
  them wastes effort.
- **Seasonality matters here.** Tax-season and cleanup queries peak roughly December–April.
  A drop in August is the calendar, not a regression.
- **Small numbers are noisy.** This site gets tens of clicks a month. Do not narrate a swing
  of 3 clicks as a trend. Say when a change is inside the noise.
- **Brand vs non-brand.** `poof ai` and similar carry most clicks and tell you nothing about
  SEO progress. Report non-brand separately.
- Anything that cannot be fixed on-page — authority, backlinks, directory listings — say so
  plainly instead of proposing an on-page substitute that will not work.

## 5. Output

Lead with the single most important thing. Then at most 3–5 recommendations, each with:
what to change, which file or page, why the data supports it, and how confident you are.
Offer to make the high-confidence ones. Note explicitly what you are choosing NOT to do.
