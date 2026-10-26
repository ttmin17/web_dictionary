---
slug: ryze-ai-adgent-open-seo-mcp-skills-skills-content-brief
name: content-brief
tagline: SERP-driven content brief for a target keyword — what ranks, what to
  cover, headings, questions, internal links from your own data. Use when asked
  for
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
  subpath: skills/content-brief
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
  path: skills/content-brief/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:58.912Z
  truncated: false
type: agent_skill
skill:
  skill_name: content-brief
  description: SERP-driven content brief for a target keyword — what ranks, what
    to cover, headings, questions, internal links from your own data. Use when
    asked for a "content brief", "outline to rank for X", "what should this
    article cover", or before writing any SEO page.
  folder_path: skills/content-brief
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ryze-ai-adgent-open-seo-mcp-skills
---

# Content Brief
## Requires

The free Ryze MCP connector (`https://connector.get-ryze.ai/mcp`). Claude Code: `claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp`. claude.ai / Desktop / Cursor: add it as a custom connector with the same URL. Setup: https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp

A brief grounded in the live SERP plus the site's own data — not a generic outline.

## Workflow

1. **The SERP.** If the workspace exposes DataForSEO SERP tools, pull the live Google top 10 for the target keyword (`native__get_provider_docs`, provider `dataforseo`, for the request shape) — titles, URLs, SERP features (featured snippet, PAA, video). If unavailable, fetch the top results via web search instead; the brief must be built from a real SERP either way.
2. **Read the top 3.** Fetch and skim the top-ranking pages: their structure, depth, angle, what they all cover (table stakes) and what none cover (the opening).
3. **Keyword set.** `google_ads__generateKeywordIdeas` seeded with the target — secondary keywords and question variants worth folding in, with volumes via `google_ads__generateKeywordHistoricalMetrics`.
4. **Your existing foothold.** `google_search_console__runRawSearchAnalytics` filtered to the topic — queries the site already gets impressions for (work them into headings), and existing pages on adjacent topics (internal-link sources; also flag if one already half-covers this and should be expanded instead of a new page).
5. **Assemble the brief:**
   - Target keyword + secondaries with volumes
   - Search intent and required format (guide/listicle/comparison/tool page), inferred from what actually ranks
   - Proposed title + meta (write for the CTR, under 60/155 chars)
   - H2/H3 outline with a one-line note per section on what it must say
   - Questions to answer (PAA + question keywords)
   - Table stakes vs the differentiating angle
   - Internal links: 3–5 existing pages to link from, with anchors
   - Target length: match the ranking median, don't pad

## Output

The brief, ready to hand to a writer (or to write from directly). No preamble.
