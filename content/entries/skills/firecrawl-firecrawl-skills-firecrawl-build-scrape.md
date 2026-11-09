---
slug: firecrawl-firecrawl-skills-firecrawl-build-scrape
name: build-scrape
tagline: Integrate Firecrawl `/scrape` into product code for single-page
  extraction. Use when an app already has a URL and needs markdown, HTML, links,
  screens
summary: "- the feature starts from a known URL - you need page content for
  retrieval, summarization, enrichment, or monitoring - you want the default
  extraction primitive before considering /interact"
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
  subpath: skills/firecrawl-build-scrape
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 199930
  last_commit: 2026-11-09T07:08:31Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
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
  path: skills/firecrawl-build-scrape/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:07.943Z
  truncated: false
type: agent_skill
skill:
  skill_name: build-scrape
  description: Integrate Firecrawl `/scrape` into product code for single-page
    extraction. Use when an app already has a URL and needs markdown, HTML,
    links, screenshots, metadata, or structured page output. Prefer this skill
    over broader crawl patterns when the feature is page-level.
  folder_path: skills/firecrawl-build-scrape
  extra_files:
    - references/freshness-and-liveness.md
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: firecrawl-firecrawl
---

# Firecrawl Build Scrape
Use this when the application already has the URL and needs content from one page.

## Use This When

- the feature starts from a known URL
- you need page content for retrieval, summarization, enrichment, or monitoring
- you want the default extraction primitive before considering `/interact`

## Default Recommendations

- Return `markdown` unless the feature truly needs another format.
- Use `onlyMainContent` for article-like pages where nav and chrome add noise.
- Add waits or other rendering options only when the page needs them.

## Freshness and Liveness

- Firecrawl reuses recently indexed content, which is what makes repeat reads of the same URL fast. Set `maxAge` (milliseconds) to bound how old a reused copy may be, or `maxAge: 0` to skip index reuse for a freshness-critical read.
- Read `metadata.cacheState` and `metadata.cachedAt` to see what you actually got.
- A successful scrape reports what the page returned. Whether the thing the page describes is still active is a source-specific judgment your code makes.
- See [references/freshness-and-liveness.md](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-scrape/references/freshness-and-liveness.md) for the tradeoff, the metadata, and the decision rule.

## Common Product Patterns

- knowledge ingestion from known URLs
- enrichment from a company, product, or docs page
- pricing, changelog, and documentation extraction
- page-level quality checks or monitoring

## Escalation Rules

- If you do not have the URL yet, start with [firecrawl-build-search](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-scrape/../firecrawl-build-search/SKILL.md).
- If content requires clicks, typing, or multi-step navigation, escalate to [firecrawl-build-interact](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-scrape/../firecrawl-build-interact/SKILL.md).

## Implementation Notes

- Keep the integration narrow: one feature, one URL, one extraction contract.
- Treat `/scrape` as the default primitive for downstream LLM or indexing pipelines.
- Request richer formats only when the consumer needs them, such as links, screenshots, or branding data.

## Docs (Source of Truth)

Read the source-of-truth page for your project language before writing integration code:

- **Node / TypeScript**: [docs.firecrawl.dev/agent-source-of-truth/node](https://docs.firecrawl.dev/agent-source-of-truth/node)
- **Python**: [docs.firecrawl.dev/agent-source-of-truth/python](https://docs.firecrawl.dev/agent-source-of-truth/python)
- **Rust**: [docs.firecrawl.dev/agent-source-of-truth/rust](https://docs.firecrawl.dev/agent-source-of-truth/rust)
- **Java**: [docs.firecrawl.dev/agent-source-of-truth/java](https://docs.firecrawl.dev/agent-source-of-truth/java)
- **Elixir**: [docs.firecrawl.dev/agent-source-of-truth/elixir](https://docs.firecrawl.dev/agent-source-of-truth/elixir)
- **cURL / REST**: [docs.firecrawl.dev/agent-source-of-truth/curl](https://docs.firecrawl.dev/agent-source-of-truth/curl)

## See Also

- [firecrawl-build](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-scrape/../firecrawl-build/SKILL.md)
- [firecrawl-build-search](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-scrape/../firecrawl-build-search/SKILL.md)
- [firecrawl-build-interact](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-scrape/../firecrawl-build-interact/SKILL.md)
