---
slug: ryze-ai-adgent-open-seo-mcp-skills-skills-rank-tracking
name: rank-tracking
tagline: Rank tracking without a tracker subscription — position movers between
  any two periods from real Search Console data. Use when asked "how are my
  ranki
summary: "The free Ryze MCP connector (https://connector.get-ryze.ai/mcp).
  Claude Code: claude mcp add ryze --transport http
  https://connector.get-ryze.ai/mcp. claude.ai / Desktop / Cursor: add it as a
  custom connector with the..."
categories:
  - domain-research
tags:
  - ai-seo
  - ai-visibility
  - backlinks
  - claude
status: active
quality_percentile: 74
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: Ryze-AI-Adgent/open-seo-mcp-skills
  subpath: skills/rank-tracking
  official_vendor: false
  license: MIT
signals:
  stars: 7305
  last_commit: 2026-10-23T09:50:40Z
  stars_delta_7d: 1227
  stars_growth_pct: 20.2
  trending_score: 1474.7
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5240
    - 6078
    - 7305
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Ryze-AI-Adgent/open-seo-mcp-skills
  path: skills/rank-tracking/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:58.912Z
  truncated: false
type: agent_skill
skill:
  skill_name: rank-tracking
  description: Rank tracking without a tracker subscription — position movers
    between any two periods from real Search Console data. Use when asked "how
    are my rankings", "what moved this week/month", "track my keywords", or "did
    the update hit me".
  folder_path: skills/rank-tracking
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ryze-ai-adgent-open-seo-mcp-skills
---

# Rank Tracking
## Requires

The free Ryze MCP connector (`https://connector.get-ryze.ai/mcp`). Claude Code: `claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp`. claude.ai / Desktop / Cursor: add it as a custom connector with the same URL. Setup: https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp

Rank trackers estimate your position by scraping SERPs daily. Search Console records the position Google actually served you at. Use the real number.

## Workflow

1. **Property.** `google_search_console__listSites` → pick the user's domain.
2. **Two windows.** Default: last 28 days vs previous 28. If the user names an event ("since the March update"), split around that date. GSC data lags ~2 days — never include today.
3. **Pull both periods.** `google_search_console__runRawSearchAnalytics`, dimensions `["query"]`, rowLimit high enough to cover the site (start 5000). Repeat with `["page"]` for page-level movement.
4. **Join and diff.** Match queries across periods, compute position delta, clicks delta, impressions delta.
5. **Classify:**
   - **Winners** — position improved ≥ 2 spots on queries with real impressions
   - **Losers** — dropped ≥ 2 spots (sort by clicks lost, not by delta — a 4→7 drop on a money query beats a 40→80 crash on a nothing query)
   - **New** — queries appearing only in the recent period
   - **Lost** — queries that vanished
6. **Spot-verify (optional).** For the 3–5 most important losers, if DataForSEO SERP tools are exposed in the workspace, pull the live SERP to see who took the spot. Skip if unavailable.

## Output

Verdict first (net up/down and the single biggest move), then four tables: Winners, Losers, New, Lost — query, positions before→after, clicks delta. If the user asked about a specific algorithm update, answer that question explicitly with the before/after evidence.

## Recurring

If the user wants this weekly, suggest scheduling it (Claude Code scheduled tasks / a routine) rather than re-running by hand.
