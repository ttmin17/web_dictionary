---
slug: firecrawl-firecrawl-skills-firecrawl-build-search
name: build-search
tagline: Integrate Firecrawl `/search` into product code and agent workflows.
  Use when an app needs discovery before extraction, when the feature starts
  with a
summary: "- the user asks a question and the product must discover sources first
  - the feature needs current web results - you want to turn a search query into
  a shortlist of pages for later scraping"
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
  subpath: skills/firecrawl-build-search
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
  path: skills/firecrawl-build-search/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:07.944Z
  truncated: false
type: agent_skill
skill:
  skill_name: build-search
  description: Integrate Firecrawl `/search` into product code and agent
    workflows. Use when an app needs discovery before extraction, when the
    feature starts with a query instead of a URL, or when the system should
    search the web and optionally hydrate result content.
  folder_path: skills/firecrawl-build-search
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: firecrawl-firecrawl
---

# Firecrawl Build Search
Use this when the application starts with a query, not a URL.

## Use This When

- the user asks a question and the product must discover sources first
- the feature needs current web results
- you want to turn a search query into a shortlist of pages for later scraping

## Default Recommendations

- Use `/search` first when URL discovery is part of the product behavior.
- Keep search and extraction conceptually separate unless scraping search results is clearly required.
- Prefer selective follow-up extraction over broad hydration when cost or latency matters.

## Common Product Patterns

- answer generation with cited sources
- company, competitor, or topic discovery
- research workflows that produce a shortlist of **web pages** before deeper extraction
- query-to-URL pipelines for later `/scrape` or `/interact`

Note that "research workflow" here means discovering web pages. If the product is
searching **published papers**, that is a different surface — see the escalation
rules below.

## Escalation Rules

- If you already have the URL, use [firecrawl-build-scrape](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-search/../firecrawl-build-scrape/SKILL.md).
- If the result page then requires clicks or form interaction, escalate to [firecrawl-build-interact](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-search/../firecrawl-build-interact/SKILL.md).
- If the feature searches **published research papers** — biomedical, clinical, and life-science literature (PubMed, bioRxiv, medRxiv) or arXiv preprints — `/search` is the wrong surface. Use the research paper index instead: [firecrawl-research-index](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-search/../firecrawl-research-index/SKILL.md). Passing `categories: ["research"]` to `/search` does **not** query that index; it filters an ordinary web search to research-affiliated websites (the list includes PubMed, bioRxiv, medRxiv, arXiv, and publisher sites) and returns page results from them — no abstract search, related-paper expansion, or full-text passages.
- If the feature answers developer questions from issues, pull requests, READMEs, or documentation pages, use the developer index instead: [firecrawl-developer-index](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-search/../firecrawl-developer-index/SKILL.md). The same caveat applies to `categories: ["developer"]`.

## Implementation Notes

- Treat `/search` as discovery, ranking, and source selection.
- Be explicit about whether the product needs snippets, URLs, or full result content.
- Keep the query contract stable so downstream scraping logic stays predictable.

## Docs (Source of Truth)

Read the source-of-truth page for your project language before writing integration code:

- **Node / TypeScript**: [docs.firecrawl.dev/agent-source-of-truth/node](https://docs.firecrawl.dev/agent-source-of-truth/node)
- **Python**: [docs.firecrawl.dev/agent-source-of-truth/python](https://docs.firecrawl.dev/agent-source-of-truth/python)
- **Rust**: [docs.firecrawl.dev/agent-source-of-truth/rust](https://docs.firecrawl.dev/agent-source-of-truth/rust)
- **Java**: [docs.firecrawl.dev/agent-source-of-truth/java](https://docs.firecrawl.dev/agent-source-of-truth/java)
- **Elixir**: [docs.firecrawl.dev/agent-source-of-truth/elixir](https://docs.firecrawl.dev/agent-source-of-truth/elixir)
- **cURL / REST**: [docs.firecrawl.dev/agent-source-of-truth/curl](https://docs.firecrawl.dev/agent-source-of-truth/curl)

## See Also

- [firecrawl-build](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-search/../firecrawl-build/SKILL.md)
- [firecrawl-build-scrape](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-search/../firecrawl-build-scrape/SKILL.md)
- [firecrawl-build-interact](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-search/../firecrawl-build-interact/SKILL.md)
- [firecrawl-research-index](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-search/../firecrawl-research-index/SKILL.md)
- [firecrawl-developer-index](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-search/../firecrawl-developer-index/SKILL.md)
