# QuickBooks complaint listening — setup

Pulls public QuickBooks complaints off Reddit and writes a review-ready report to
`.listen-reports/latest.md`. Zero dependencies: no `npm install`.

The point of this is **not** to generate articles. It is to find (a) the literal language
trade shops use about QuickBooks, for titles/H1s/FAQs on pages that already exist, and
(b) live threads worth answering as a controller. See `.claude/skills/complaint-review/`.

## One-time setup (~3 minutes, you have to do this part)

Reddit returns **403 for anonymous requests**, so credentials are not optional.

### 1. Create a Reddit app

1. Log in to Reddit, go to https://www.reddit.com/prefs/apps
2. Scroll down → **create another app…**
3. Fill in:
   - **name**: `poof-listen`
   - **type**: select **script** (this is the important one)
   - **redirect uri**: `http://localhost:8080` — required by the form, never used
4. **create app**
5. Two strings you need:
   - **client id** — the short string directly under the app name, top-left of the box
   - **secret** — labelled `secret`

No Reddit API payment is involved. App-only reads of public posts are free, capped at
100 requests/minute. A full run uses roughly 40.

### 2. Point the script at it

Add to `~/.zshrc`:

```sh
export REDDIT_CLIENT_ID="your_client_id"
export REDDIT_CLIENT_SECRET="your_secret"
export REDDIT_USER_AGENT="poof-listen/1.0 (by /u/YOUR_REDDIT_USERNAME)"
```

Then `source ~/.zshrc`.

> Put your real username in the user agent. Reddit throttles generic agents harder, and a
> descriptive one is what their API terms ask for.

## Run it

```sh
node scripts/listen/listen.mjs                 # last month
node scripts/listen/listen.mjs --window week   # hour|day|week|month|year|all
node scripts/listen/listen.mjs --no-comments   # titles only, about 3x faster
node scripts/listen/listen.mjs --comments 20   # read comments on the top 20 threads
```

Writes `.listen-reports/listen-<date>.md`, `latest.md`, a matching `.json`, and `seen.json`
(post ids already reported, so the next run can say what is new). All gitignored.

Takes about 40 seconds — it deliberately sleeps 700ms between calls to stay inside the
rate limit.

## What the report covers

| Section | What it is for |
|---|---|
| Headline | Threads matched, how many carry trade signal, how many are new |
| Themes | The complaint taxonomy ranked by **trade-shop** volume, with what already covers each |
| Threads worth a reply | Top ICP threads, newest and most engaged first — the distribution play |
| Verbatim language | Real quotes per theme, for titles and `faqs:` frontmatter |
| Phrase frequency | Repeated phrasing across trade threads |
| Themes with no page | Trade volume, nothing on the site answering it |
| Existing QuickBooks URLs | The cannibalization check |

## Where the scoring lives

Everything tunable is at the top of `listen.mjs`:

- `SUBS_TRADES` / `SUBS_BUSINESS` — trade subs are weighted 3x in scoring, because most
  QuickBooks complaining on Reddit is freelancers and retail, which is the secondary product
- `TRADE_SIGNALS` / `PAIN_SIGNALS` — the dictionaries
- `THEMES` — the taxonomy, each with a `covers:` list of URLs already answering it.
  **Keep `covers` current.** It is what stops the report suggesting a sixth QuickBooks page.

## Weekly, automatically (macOS)

`scripts/listen/com.poof.listen-weekly.plist` runs it Mondays at 8:22am — offset from the
GSC job at 8:07 so both reports are waiting when you sit down.

```sh
cp scripts/listen/com.poof.listen-weekly.plist ~/Library/LaunchAgents/
launchctl load ~/Library/LaunchAgents/com.poof.listen-weekly.plist
```

The plist reads credentials from your login shell, so the `~/.zshrc` exports above have to
be in place. To stop it:

```sh
launchctl unload ~/Library/LaunchAgents/com.poof.listen-weekly.plist
```

## Getting it reviewed, not just generated

In Claude Code:

```
/complaint-review
```

Reads the newest report, checks themes against what the site already says, and returns a
ranked list of changes — not a data dump, and not a pile of article ideas.

## Scope and limits

- **Reddit only.** X's usable API tier is ~$200/mo. The `scrape-creators` MCP server is
  configured in this environment but unauthorized; authorize it via `/mcp` if you want to
  add X later.
- **Public posts only.** No posting, voting, messaging, or user profiling. Author handles
  are whatever is already public on the thread.
- **Reddit is not a representative sample.** It skews angry, technical and US-centric.
  A theme trending here is a hypothesis about demand, not a measurement of it.
- **Search is keyword matching, not semantics.** A complaint phrased in a way no dictionary
  covers is invisible to this. Read the raw threads occasionally.

## Troubleshooting

| Error | Fix |
|---|---|
| `403 for anonymous access` | Credentials not set — `source ~/.zshrc`, or step 1 was skipped |
| `Reddit token request failed 401` | Wrong client id or secret, or the app type is not **script** |
| `429` | Rate limited. The script backs off and retries 3x; if it persists, another process is using the same client id |
| Empty themes | Widen with `--window year`, or the sub list is wrong for what you want |
| A sub returns 0 every run | It may be private or renamed — the script skips those silently by design |
