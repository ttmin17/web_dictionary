---
slug: agricidaniel-claude-seo-extensions-ahrefs-skills-seo-ahrefs
name: seo-ahrefs
tagline: Agent skill from AgriciDaniel/claude-seo
summary: Agent skill from AgriciDaniel/claude-seo
categories:
  - browser-web
tags:
  - ai-seo
  - claude-code
  - claude-code-skill
  - marketing-automation
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-02-07T08:17:38
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-seo
  subpath: extensions/ahrefs/skills/seo-ahrefs
  official_vendor: false
  license: MIT
signals:
  stars: 21373
  last_commit: 2026-10-22T16:47:40Z
  stars_delta_7d: 2161
  stars_growth_pct: 11.2
  trending_score: 2404.07
  rank_current: 13
  rank_delta: 21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 18470
    - 18843
    - 19212
    - 21373
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-seo
  path: extensions/ahrefs/skills/seo-ahrefs/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:42.110Z
  truncated: false
type: agent_skill
skill:
  skill_name: seo-ahrefs
  description: Agent skill from AgriciDaniel/claude-seo
  folder_path: extensions/ahrefs/skills/seo-ahrefs
  extra_files: []
  pack_total_skills: 33
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-seo
---

# seo-ahrefs
Live Ahrefs data via the tested `@ahrefs/mcp@0.0.11` server.
Package check (2026-07-10): verify the current Ahrefs MCP package source before changing this tested version.

## Prerequisites

- Run `extensions/ahrefs/install.sh` (Linux/macOS) or `install.ps1` (Windows) before using this skill.
- An Ahrefs API token (https://ahrefs.com/api).
- Node 18+ on `$PATH` for the MCP server.

Before calling any Ahrefs tool, verify the MCP is connected by checking
that any Ahrefs MCP tool is available in this session. If tools are
not available, tell the user the extension is not installed and
provide the install command above.

## Routing

| Command | Action |
|---|---|
| `/seo ahrefs metrics <url>` | Domain / URL rating, referring domain count, organic traffic estimate |
| `/seo ahrefs backlinks <url>` | Top referring domains, anchor distribution, follow/nofollow ratio |
| `/seo ahrefs organic <url>` | Organic keywords, ranking distribution, traffic by country |
| `/seo ahrefs content <topic>` | Content Explorer top results, social shares, referring domains |

## Output conventions

- Cite the data source on every metric: "Ahrefs (live, confidence 1.00)".
- When Ahrefs and Moz disagree on the same metric, trust Ahrefs and note the discrepancy in the report.
- Toxic link assessment: combine Ahrefs backlink quality signals with the existing seo-backlinks Common Crawl + verify crawler signals.

## Cross-skill delegation

- For multi-source confidence weighting across Moz + Bing + Common Crawl + Ahrefs, hand back to `seo-backlinks`.
- For SERP-feature analysis where Ahrefs and DataForSEO overlap, prefer DataForSEO for live SERP data.

## Cost guardrails

Ahrefs API usage is metered per unit. Before running a batch (>= 50 URLs):

1. Estimate cost with `"${CLAUDE_PLUGIN_ROOT}/scripts/claude-seo" run dataforseo_costs.py` (the cost-tracker module is generic and supports Ahrefs unit accounting).
2. Surface the estimate to the orchestrator.
3. Log actual cost after each call.

This is the same workflow the seo-dataforseo skill uses.
