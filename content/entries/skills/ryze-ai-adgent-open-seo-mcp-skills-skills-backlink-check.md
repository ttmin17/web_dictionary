---
slug: ryze-ai-adgent-open-seo-mcp-skills-skills-backlink-check
name: backlink-check
tagline: 'Backlink profile for any domain — referring domains, authority,
  anchors, new/lost links, and a side-by-side vs a competitor. Use when asked
  "check my '
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
  subpath: skills/backlink-check
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
  path: skills/backlink-check/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:58.912Z
  truncated: false
type: agent_skill
skill:
  skill_name: backlink-check
  description: Backlink profile for any domain — referring domains, authority,
    anchors, new/lost links, and a side-by-side vs a competitor. Use when asked
    "check my backlinks", "backlink profile of X", "who links to them", or "link
    gap vs competitor".
  folder_path: skills/backlink-check
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ryze-ai-adgent-open-seo-mcp-skills
---

# Backlink Check
## Requires

The free Ryze MCP connector (`https://connector.get-ryze.ai/mcp`). Claude Code: `claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp`. claude.ai / Desktop / Cursor: add it as a custom connector with the same URL. Setup: https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp

## Workflow

1. **Source.** Use the workspace's DataForSEO Backlinks tools (`native__get_provider_docs`, provider `dataforseo`, for exact request shapes): `summary` for the profile, `referring_domains` for the domain list, `anchors` for anchor distribution. If DataForSEO backlinks aren't exposed, fall back to a connected `ahrefs` or `semrush` provider; if neither, stop and say which connection is missing — never fabricate link counts.
2. **Target profile.** Pull summary + top ~100 referring domains by rank for the user's domain: total backlinks, referring domains, dofollow share, authority distribution.
3. **Competitor (if named).** Same pulls for the competitor. Compute the **link gap**: strong domains linking to them but not to the user — that's the outreach list.
4. **Quality read.** Flag: spammy anchor patterns (exact-match commercial anchors at scale), link velocity spikes, a profile dominated by low-authority domains.
5. **Traffic cross-check (own site only).** `google_analytics__runRawReport` — referral sessions by source; note which linking domains actually send visitors.

## Output

Verdict first (profile strength in one paragraph, and the gap vs the competitor if asked), then: profile summary table, top referring domains, anchor distribution, and — when a competitor was given — the link-gap outreach list (domain, authority, page linking to competitor). All third-party numbers labeled as index estimates.
