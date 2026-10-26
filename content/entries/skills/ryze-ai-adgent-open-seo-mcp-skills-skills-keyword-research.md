---
slug: ryze-ai-adgent-open-seo-mcp-skills-skills-keyword-research
name: keyword-research
tagline: Keyword research from a seed topic — ideas, real Google volume/CPC,
  intent, difficulty, clustered into a plan. Use when asked to "find keywords",
  "key
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: Ryze-AI-Adgent/open-seo-mcp-skills
  subpath: skills/keyword-research
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
  path: skills/keyword-research/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:58.912Z
  truncated: false
type: agent_skill
skill:
  skill_name: keyword-research
  description: Keyword research from a seed topic — ideas, real Google volume/CPC,
    intent, difficulty, clustered into a plan. Use when asked to "find
    keywords", "keyword research for X", "what should I rank for", or "build a
    keyword plan".
  folder_path: skills/keyword-research
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ryze-ai-adgent-open-seo-mcp-skills
---

# Keyword Research
## Requires

The free Ryze MCP connector (`https://connector.get-ryze.ai/mcp`). Claude Code: `claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp`. claude.ai / Desktop / Cursor: add it as a custom connector with the same URL. Setup: https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp

Seed → ideas → metrics → clusters. Volumes come from Google Ads planner data (the source everyone else resells), enriched with DataForSEO intent/difficulty.

## Workflow

1. **Expand the seed.** `google_ads__generateKeywordIdeas` with the seed keyword(s) and/or the user's URL. Collect up to ~200 ideas.
2. **Metrics.** `google_ads__generateKeywordHistoricalMetrics` on the candidate list — monthly volume, competition, CPC range, 12-month trend.
3. **Intent + difficulty (optional enrich).** If the workspace exposes DataForSEO tools, call the Labs `keyword_overview` endpoint for the top ~50 (search intent, keyword difficulty, SERP features). Request shape: `native__get_provider_docs` provider `dataforseo`. Skip silently if unavailable — Google metrics alone are enough for a v1 plan.
4. **What they already rank for.** `google_search_console__runRawSearchAnalytics` (dimension `query`, filtered to the topic) — mark keywords the site already has positions for; those are optimize-not-create.
5. **Cluster.** Group by intent and topic into content clusters: pillar + supporting pages. For each cluster: target keyword, supporting keywords, total volume, intent, existing page (if any) or "new page".

## Output

One table per cluster (keyword, volume, CPC, intent, current position if any), then a ranked plan: which clusters to attack first and why (volume × winnability — favor clusters where the site already has striking-distance positions). Plain language, no filler.

## Rules

- Never invent volumes. If a metrics call fails, show the keyword without numbers and say why.
- CPC belongs in the output — it tells the user what the traffic is worth, and this doubles as an ads negative-keyword source.
