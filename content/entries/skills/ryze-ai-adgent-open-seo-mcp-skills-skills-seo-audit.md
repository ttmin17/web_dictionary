---
slug: ryze-ai-adgent-open-seo-mcp-skills-skills-seo-audit
name: seo-audit
tagline: Full SEO audit of a site from its real Search Console + GA4 data —
  indexation health, CTR anomalies, decaying pages, striking-distance keywords,
  quick
summary: "The free Ryze MCP connector (https://connector.get-ryze.ai/mcp).
  Claude Code: claude mcp add ryze --transport http
  https://connector.get-ryze.ai/mcp. claude.ai / Desktop / Cursor: add it as a
  custom connector with the..."
categories:
  - browser-web
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
  subpath: skills/seo-audit
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
  path: skills/seo-audit/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:58.912Z
  truncated: false
type: agent_skill
skill:
  skill_name: seo-audit
  description: Full SEO audit of a site from its real Search Console + GA4 data —
    indexation health, CTR anomalies, decaying pages, striking-distance
    keywords, quick wins. Use when asked to "audit my site", "SEO audit", "why
    is my organic traffic down", or "SEO health check".
  folder_path: skills/seo-audit
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ryze-ai-adgent-open-seo-mcp-skills
---

# SEO Audit
## Requires

The free Ryze MCP connector (`https://connector.get-ryze.ai/mcp`). Claude Code: `claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp`. claude.ai / Desktop / Cursor: add it as a custom connector with the same URL. Setup: https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp

Audit the user's site using their own data via the Ryze MCP. No estimates — everything below comes from their actual GSC/GA4.

## Workflow

1. **Pick the property.** `google_search_console__listSites`. If several, use the one matching the user's domain; confirm only when ambiguous.
2. **Indexation.** `google_search_console__getIndexationSummary` — indexed vs not-indexed counts and reasons. Flag anything unusual (large "Crawled — currently not indexed", spikes in excluded pages).
3. **Performance baseline.** `google_search_console__runRawSearchAnalytics`: last 90 days vs previous 90, dimensions `query` and `page` (two calls each period). Compute clicks/impressions/CTR/position deltas.
4. **Find the problems:**
   - **Decaying pages** — pages whose clicks dropped >30% period-over-period
   - **CTR anomalies** — queries with position ≤ 5 but CTR < 2% (title/meta problem)
   - **Striking distance** — queries at position 8–20 with high impressions (one push from page 1)
   - **Cannibalization** — same query, multiple ranking pages splitting clicks
5. **Spot-check pages.** For the 3–5 worst pages, `google_search_console__inspectUrl` — canonical, indexing state, last crawl.
6. **Cross-check traffic.** `google_analytics__runRawReport` — organic sessions + conversions by landing page, same periods. A page can hold rankings but lose revenue; call that out.
7. **AI traffic.** `google_analytics__getAIReferrals` for the same window — note whether AI engines are becoming a meaningful channel for this site.

## Output

A report with: verdict up top (one paragraph, is the site healthy or not and the #1 issue), then sections — Indexation, Losers, Quick wins (striking distance + CTR fixes, ranked by impressions), Cannibalization — each with a table and the specific fix. End with a prioritized 5-item action list.

## Fallbacks

If GSC isn't connected, say so and point to Ryze connector setup (https://help.get-ryze.ai/claude/connect) — do not substitute third-party estimates for the site's own data.
