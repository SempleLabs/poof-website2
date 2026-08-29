# Search Console automation — setup

Pulls Search Console data and writes a review-ready report to `.gsc-reports/latest.md`.
Zero dependencies: no `npm install`, no Python packages.

## One-time setup (~10 minutes, you have to do this part)

These steps create credentials and change account access, so they need to be done by you
in your own Google account.

### 1. Create a service account

1. Go to https://console.cloud.google.com/
2. Create a project (or pick an existing one) — name it anything, e.g. `poof-seo`
3. **APIs & Services → Library** → search **"Google Search Console API"** → **Enable**
4. **APIs & Services → Credentials → Create credentials → Service account**
   - Name: `gsc-reader`. No roles needed — it gets access via Search Console, not IAM.
5. Open the new service account → **Keys → Add key → Create new key → JSON** → download it
6. Move the file somewhere private and lock it down:

   ```
   mkdir -p ~/.config/poof
   mv ~/Downloads/<the-key>.json ~/.config/poof/gsc-service-account.json
   chmod 600 ~/.config/poof/gsc-service-account.json
   ```

   Do not put it in this repo. `.gsc-reports/` and `*service-account*.json` are gitignored,
   but the safest place is outside the repo entirely.

### 2. Give it read access to your property

1. Copy the service-account email — it looks like
   `gsc-reader@poof-seo.iam.gserviceaccount.com`
2. In **Search Console → Settings → Users and permissions → Add user**
3. Paste the email, permission **Full** (or **Restricted** — read is all the script needs)

### 3. Point the script at it

Add to `~/.zshrc`:

```sh
export GSC_SA_KEY="$HOME/.config/poof/gsc-service-account.json"
export GSC_SITE="sc-domain:poofai.com"
```

Then `source ~/.zshrc`.

> `sc-domain:poofai.com` is the Domain property. If you use the URL-prefix property instead,
> it is `https://www.poofai.com/` with the trailing slash. The Domain property is what was
> verified via DNS TXT, so `sc-domain:` is almost certainly right.

## Run it

```sh
node scripts/gsc/gsc.mjs            # last 28 days vs the previous 28
node scripts/gsc/gsc.mjs --days 90  # last 90 vs the previous 90
```

Writes `.gsc-reports/gsc-<date>.md` and `.gsc-reports/latest.md`.

## What the report covers

| Section | What it is for |
|---|---|
| Headline | Clicks, impressions, CTR, average position vs the previous window |
| Striking distance | Position 8–20 with real volume — the cheapest wins available |
| Demand not captured | ≥50 impressions and zero clicks, labelled ranking problem vs CTR problem |
| Position gains / losses | Queries that moved 3+ places either way |
| Cannibalization | One query, several of our pages — the signal-splitting problem |
| Top pages | Impression change per page, and anything new |

## Weekly, automatically (macOS)

`scripts/gsc/com.poof.gsc-weekly.plist` runs it Mondays at 8:07am. Install:

```sh
cp scripts/gsc/com.poof.gsc-weekly.plist ~/Library/LaunchAgents/
launchctl load ~/Library/LaunchAgents/com.poof.gsc-weekly.plist
```

Edit the paths inside the plist first if the repo ever moves. To stop it:

```sh
launchctl unload ~/Library/LaunchAgents/com.poof.gsc-weekly.plist
```

## Getting it reviewed, not just generated

A report nobody reads is worse than no report. In Claude Code:

```
/gsc-review
```

That reads the newest report, compares it against what changed on the site since the last
one, and comes back with a ranked list of what to do — not a data dump.

## Troubleshooting

| Error | Fix |
|---|---|
| `GSC_SA_KEY is not set` | `source ~/.zshrc`, or the export is missing |
| `403` / `User does not have sufficient permission` | Step 2 was skipped, or the wrong email was added |
| `404` on the query | `GSC_SITE` is wrong — check Domain (`sc-domain:`) vs URL-prefix property |
| Empty rows | Normal for a brand-new property, or the window is inside the ~2-day reporting lag |
