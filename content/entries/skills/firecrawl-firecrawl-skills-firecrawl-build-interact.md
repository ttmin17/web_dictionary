---
slug: firecrawl-firecrawl-skills-firecrawl-build-interact
name: build-interact
tagline: Integrate Firecrawl `/interact` into product code for dynamic pages and
  browser actions after scraping. Use when a feature needs clicks, form fills, p
summary: "- content appears only after clicks, typing, or navigation - the
  feature needs forms, pagination, filters, or multi-step flows - the product
  must stay in the same browser context after scraping"
categories:
  - browser-web
tags:
  - ai-agents
  - ai-crawler
  - ai-scraping
  - ai-search
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: firecrawl/firecrawl
  subpath: skills/firecrawl-build-interact
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 199930
  last_commit: 2026-11-09T07:08:31Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  rank_current: 135
  rank_delta: -101
  velocity_source: snapshot_delta
  sparkline_4w:
    - 192877
    - 195411
    - 7765
    - 199930
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: firecrawl/firecrawl
  path: skills/firecrawl-build-interact/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:07.943Z
  truncated: false
type: agent_skill
skill:
  skill_name: build-interact
  description: Integrate Firecrawl `/interact` into product code for dynamic pages
    and browser actions after scraping. Use when a feature needs clicks, form
    fills, pagination, authentication-aware flows, or other multi-step
    interactions that plain `/scrape` cannot complete.
  folder_path: skills/firecrawl-build-interact
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: firecrawl-firecrawl
---

# Firecrawl Build Interact
Use this when `/scrape` is not enough because the feature needs to act on the page.

## Use This When

- content appears only after clicks, typing, or navigation
- the feature needs forms, pagination, filters, or multi-step flows
- the product must stay in the same browser context after scraping

## Default Recommendations

- Start with `/scrape`, then escalate to `/interact`.
- Keep `/interact` scoped to the smallest browser workflow that unlocks the data.
- Use persistent profiles only when the feature truly needs authenticated state across sessions.

## Common Product Patterns

- search forms and faceted filters
- paginated result sets
- login-gated dashboards or tools
- flows where the page must be explored before extraction is complete

## Implementation Notes

- `/interact` is the right tool when the page must be manipulated, not just read.
- Keep prompts or action code specific to the product flow.
- If the use case is fully open-ended browser automation, evaluate whether a browser sandbox is a better product fit.

## Escalation Rules

- If the page can be read directly, stay on [firecrawl-build-scrape](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-interact/../firecrawl-build-scrape/SKILL.md).

## Docs (Source of Truth)

Read the source-of-truth page for your project language before writing integration code:

- **Node / TypeScript**: [docs.firecrawl.dev/agent-source-of-truth/node](https://docs.firecrawl.dev/agent-source-of-truth/node)
- **Python**: [docs.firecrawl.dev/agent-source-of-truth/python](https://docs.firecrawl.dev/agent-source-of-truth/python)
- **Rust**: [docs.firecrawl.dev/agent-source-of-truth/rust](https://docs.firecrawl.dev/agent-source-of-truth/rust)
- **Java**: [docs.firecrawl.dev/agent-source-of-truth/java](https://docs.firecrawl.dev/agent-source-of-truth/java)
- **Elixir**: [docs.firecrawl.dev/agent-source-of-truth/elixir](https://docs.firecrawl.dev/agent-source-of-truth/elixir)
- **cURL / REST**: [docs.firecrawl.dev/agent-source-of-truth/curl](https://docs.firecrawl.dev/agent-source-of-truth/curl)

## See Also

- [firecrawl-build](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-interact/../firecrawl-build/SKILL.md)
- [firecrawl-build-scrape](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-interact/../firecrawl-build-scrape/SKILL.md)
- [firecrawl-build-search](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-interact/../firecrawl-build-search/SKILL.md)
