---
slug: ryze-ai-adgent-open-seo-mcp-skills-skills-competitor-gap
name: competitor-gap
tagline: "Find keywords a competitor ranks for that the user's site doesn't —
  the content gap, prioritized by volume and winnability. Use when asked \"what
  does "
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
  subpath: skills/competitor-gap
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
  path: skills/competitor-gap/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:58.912Z
  truncated: false
type: agent_skill
skill:
  skill_name: competitor-gap
  description: Find keywords a competitor ranks for that the user's site doesn't —
    the content gap, prioritized by volume and winnability. Use when asked "what
    does competitor.com rank for", "keyword gap vs X", "steal competitor
    keywords", or "why do they outrank us".
  folder_path: skills/competitor-gap
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ryze-ai-adgent-open-seo-mcp-skills
---

# Competitor Gap
## Requires

The free Ryze MCP connector (`https://connector.get-ryze.ai/mcp`). Claude Code: `claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp`. claude.ai / Desktop / Cursor: add it as a custom connector with the same URL. Setup: https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp

Their rankings are estimates (DataForSEO), yours are real (GSC). Diff them.

## Workflow

1. **Competitor's keywords.** Via the workspace's DataForSEO tools — Labs `ranked_keywords` for the competitor domain (request shape: `native__get_provider_docs`, provider `dataforseo`). Pull top ~500 by volume. If DataForSEO isn't exposed in this workspace, check for connected `ahrefs`/`semrush` providers and use their organic-keywords endpoint instead; if none, stop and say which connection is missing.
2. **Competitor overview.** Labs `domain_rank_overview` — their estimated organic traffic and keyword count, for context.
3. **Your keywords.** `google_search_console__runRawSearchAnalytics`, dimension `["query"]`, last 90 days, high rowLimit — the full set of queries the user's site gets impressions for.
4. **Diff into three buckets:**
   - **Gap** — competitor ranks top 20, you have zero impressions → new content needed
   - **Behind** — you both rank but they're ≥ 5 spots ahead → improve existing page
   - **Ahead** — you outrank them (report briefly; it's the moat)
5. **Prioritize** the Gap and Behind buckets by volume × relevance to the user's product. Drop branded competitor terms unless the user wants comparison pages — then list them separately as "vs / alternative" page candidates.

## Output

Verdict (how big the gap is, in keywords and estimated traffic), then: Gap table (keyword, their position, volume, suggested page), Behind table (keyword, their pos, your pos, your page, fix), and a top-10 action list. Note explicitly which numbers are estimates (theirs) vs real (yours).
