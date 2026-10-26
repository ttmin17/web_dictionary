---
slug: agricidaniel-claude-seo-extensions-bing-webmaster-skills-seo-bing
name: seo-bing
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-seo
  subpath: extensions/bing-webmaster/skills/seo-bing
  official_vendor: false
  license: MIT
signals:
  stars: 21373
  last_commit: 2026-10-22T16:47:40Z
  stars_delta_7d: 2161
  stars_growth_pct: 11.2
  trending_score: 2404.07
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
  path: extensions/bing-webmaster/skills/seo-bing/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:42.111Z
  truncated: false
type: agent_skill
skill:
  skill_name: seo-bing
  description: Agent skill from AgriciDaniel/claude-seo
  folder_path: extensions/bing-webmaster/skills/seo-bing
  extra_files: []
  pack_total_skills: 33
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-seo
---

# seo-bing
The non-Google indexing surface. Google still rejects IndexNow (per
Gary Illyes, multiple SOTR episodes 2024-2025), so this skill is
specifically for **Amazon/Bing/Naver/Seznam.cz/Yandex/Yep indexing** and
**Microsoft Copilot AI citation** (which pulls from the Bing index).

## Prerequisites

- Run `extensions/bing-webmaster/install.sh` or `install.ps1`.
- A Bing Webmaster Tools API key.
- Optional: an IndexNow host key (32+ chars) published at the URL
  declared as `INDEXNOW_KEY_LOCATION`.

## Routing

| Command | Underlying script |
|---|---|
| `/seo bing links <url>` | `"${CLAUDE_PLUGIN_ROOT}/scripts/claude-seo" run bing_webmaster.py links <url>` |
| `/seo bing compare <urlA> <urlB>` | `"${CLAUDE_PLUGIN_ROOT}/scripts/claude-seo" run bing_webmaster.py compare <urlA> <urlB>`; both properties must be registered to the API account |
| `/seo bing submit <url>` (single URL) | `"${CLAUDE_PLUGIN_ROOT}/scripts/claude-seo" run indexnow_submit.py --host ... --urls <url>` |
| `/seo bing submit-batch <file>` | `"${CLAUDE_PLUGIN_ROOT}/scripts/claude-seo" run indexnow_submit.py --host ... --urls-file <file>` |
| `/seo bing verify-indexnow` | `"${CLAUDE_PLUGIN_ROOT}/scripts/claude-seo" run indexnow_submit.py --host ... --verify-only` |

## When this skill applies

- The user is publishing new pages and wants Microsoft Copilot
  citation eligibility (Bing index ingestion).
- The user wants to nudge Amazon/Bing/Naver/Seznam.cz/Yandex/Yep indexing for fresh
  URLs.
- The user manages both properties and wants to compare their Bing link data.
  For an arbitrary competitor, route to DataForSEO, Moz, or Common Crawl.

## Cross-skill delegation

- For Google indexing (very different model, sitemap-driven, no
  IndexNow), use `seo-google indexing`.
- For multi-source backlink confidence weighting, fall back to
  `seo-backlinks` which already integrates Bing + Moz + CC.
