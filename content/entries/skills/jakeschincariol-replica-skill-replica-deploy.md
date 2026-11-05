---
slug: jakeschincariol-replica-skill-replica-deploy
name: replica-deploy
tagline: "Ships an app clone live on the user's own domain: a preflight gate
  (tests green, parity must-haves done, rebrand sweep clean, listing linted,
  legal pa"
summary: "- Nothing goes live without the user's go. Show the preflight results
  and ask. - The user buys and signs in. Claude never buys a domain, enters a
  card, types a password or pastes a live key. Claude writes the exact DN..."
categories:
  - security-auth
tags:
  - agent-skills
  - app-clone
  - claude
  - claude-code
status: active
quality_percentile: 62
selection_reason: quality_percentile
first_seen: 2026-11-05
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: Jakeschincariol/replica-skill
  subpath: replica-deploy
  official_vendor: false
  license: MIT
signals:
  stars: 7706
  last_commit: 2026-10-03T12:07:53Z
  stars_delta_7d: 1033
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 7706
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Jakeschincariol/replica-skill
  path: replica-deploy/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:10.440Z
  truncated: false
type: agent_skill
skill:
  skill_name: replica-deploy
  description: "Ships an app clone live on the user's own domain: a preflight gate
    (tests green, parity must-haves done, rebrand sweep clean, listing linted,
    legal pages up), production database and env vars, the host, DNS records for
    the domain and for email, Stripe live mode, OAuth redirects, monitoring, and
    mobile builds to TestFlight and Play. Use when the user says \"deploy it\",
    \"ship it\", \"put it live\", \"connect my domain\", \"go to production\",
    \"publish the app\", or after /replica-launch."
  folder_path: replica-deploy
  extra_files:
    - preflight.md
  pack_total_skills: 11
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jakeschincariol-replica-skill
---

# replica-deploy
Reads everything in `replica/`. Writes `replica/deploy.md` (the checklist in
`preflight.md` in this folder, filled in).

## The rules

- **Nothing goes live without the user's go.** Show the preflight results and
  ask.
- **The user buys and signs in.** Claude never buys a domain, enters a card,
  types a password or pastes a live key. Claude writes the exact DNS records,
  env var names and commands; the user does the account steps.
- **Not until it is rebranded.** The sweep must be clean. No exceptions.

## Step 1: preflight

Run every check and paste the results into `deploy.md`:

```bash
npx playwright test                                                  # replica-test
python3 ../replica-diff/parity.py replica/features.csv               # must-haves done
python3 ../replica-brand/sweep.py . --config replica/brand.json      # exit 0: clean
python3 ../replica-launch/listing.py replica/launch/listing.json     # if shipping to stores
npm run build                                                        # production build passes
```

(Paths are relative to wherever the pack is installed. Under
`~/.claude/skills/` that is `~/.claude/skills/replica-diff/parity.py` and so
on.)

Plus by hand: no open S1 or S2 bugs, privacy policy and terms pages live
(listing every processor), cookie banner if you use non-essential cookies in
the EU or UK, account deletion works, the favicon, titles and OG image are
yours.

Any failure stops the deploy. Say which and why.

## Step 2: production services

- A **separate production project** for the database (never the dev one),
  backups on, migrations run by the deploy, not by hand.
- Env vars set in the host for production, matching `.env.example`. Live
  keys only here.
- **Stripe**: switch to live mode, recreate products and prices, add the
  production webhook endpoint and its signing secret, test one real
  purchase and refund it.
- **OAuth**: add the production domain to every provider's redirect URIs and
  authorised origins. Google scopes that need verification must be approved,
  or only test users can sign in.
- **Email**: the sending domain verified with the provider.

## Step 3: host and domain

Default: Vercel for Next.js (Netlify, Cloudflare Pages, Fly or Render
otherwise). Connect the repo so `main` deploys and pull requests get preview
URLs.

The domain, after the user buys it at any registrar:

| record | name | value |
| --- | --- | --- |
| A | @ | the host's apex IP (Vercel: shown in the domain settings) |
| CNAME | www | the host's target (Vercel: `cname.vercel-dns.com`) |
| TXT | @ or a subdomain | the host's verification value, if asked |

Email DNS from the email provider: SPF (TXT), DKIM (CNAME or TXT), and a
DMARC record starting at `v=DMARC1; p=none; rua=mailto:you@yourdomain` then
tightened to `quarantine` once reports are clean. Without these, your
confirmation emails go to spam.

Pick one canonical host (apex or www) and redirect the other. HTTPS is
automatic on the hosts above; check it.

## Step 4: watch it

Error tracking (Sentry or the host's), uptime checks on the home page and the
core flow's API, logs kept, analytics (a privacy-friendly one avoids the
cookie banner), and an alert to the user's email or phone. Then do the core
flow on the live site yourself, and ask the user to do it on their phone.

## Step 5: mobile, if there is an app

Expo: `eas build` then `eas submit` to TestFlight and Play internal testing.
Native: archive in Xcode, upload to App Store Connect; Gradle bundle to Play
Console. The user owns the developer accounts ($99 a year for Apple, $25 once
for Google). Beta first, then review with the listing from replica-launch.

## Output

`replica/deploy.md` with every check and its result, the live URL, the DNS
records set, and what to watch in the first week. The clone is now an app
with your name on it.
