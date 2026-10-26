---
slug: ryze-ai-adgent-open-seo-mcp-skills-skills-ai-visibility
name: ai-visibility
tagline: Measure real AI-engine visibility — traffic from ChatGPT, Perplexity,
  Claude, Gemini and which pages they cite — from actual GA4 referral data, not
  pr
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
  subpath: skills/ai-visibility
  official_vendor: false
  license: MIT
signals:
  stars: 7305
  last_commit: 2026-10-23T09:50:40Z
  stars_delta_7d: 1227
  stars_growth_pct: 20.2
  trending_score: 1474.7
  rank_current: 22
  rank_delta: -3
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
  path: skills/ai-visibility/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:58.912Z
  truncated: false
type: agent_skill
skill:
  skill_name: ai-visibility
  description: Measure real AI-engine visibility — traffic from ChatGPT,
    Perplexity, Claude, Gemini and which pages they cite — from actual GA4
    referral data, not prompt sampling. Use when asked "AI visibility", "GEO/AEO
    check", "do LLMs cite us", "traffic from ChatGPT", or "how do we show up in
    AI search".
  folder_path: skills/ai-visibility
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ryze-ai-adgent-open-seo-mcp-skills
---

# AI Visibility
## Requires

The free Ryze MCP connector (`https://connector.get-ryze.ai/mcp`). Claude Code: `claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp`. claude.ai / Desktop / Cursor: add it as a custom connector with the same URL. Setup: https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp

Every "AI visibility tracker" samples prompts and guesses. GA4 records the actual clicks AI engines send. Measure the real thing first, then diagnose.

## Workflow

1. **Traffic by engine.** `google_analytics__getAiTrafficByEngine` — sessions per AI source (ChatGPT, Perplexity, Gemini, Claude, Copilot…), current vs previous period.
2. **Trend.** `google_analytics__getAiTrafficDaily` — is AI traffic growing, and did anything spike (a spike = something started citing you; find it).
3. **Cited pages.** `google_analytics__getAiLandingPages` — which URLs AI engines actually send people to. These are your proven-citable pages.
4. **Referral detail.** `google_analytics__getAIReferrals` for source-level detail and conversions — is AI traffic converting better or worse than organic.
5. **Diagnose the winners.** Read the top 2–3 cited pages (fetch them). Note the pattern: direct answers high on the page, stats/definitions, clean headings, schema. That pattern is the citation recipe for this site.
6. **Find the misses.** Cross-reference with `google_search_console__runRawSearchAnalytics`: pages with strong organic queries but zero AI referrals — candidates to restructure toward the citation recipe from step 5.

## Output

Verdict (AI traffic share of organic, trend, top engine), then: engine table, cited-pages table with conversions, the citation recipe observed on winning pages, and a top-5 list of pages to restructure. Keep it concrete — name the pages and the exact change.

## Fallback

If the GA4 AI-traffic tools aren't available in the workspace, build the same report with `google_analytics__runRawReport` filtered on `sessionSource` matching known AI referrers (chatgpt.com, perplexity.ai, gemini.google.com, claude.ai, copilot.microsoft.com).
