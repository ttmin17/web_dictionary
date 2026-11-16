---
slug: juliusbrussee-caveman-plugins-caveman-skills-caveman-stats
name: stats
tagline: Show recorded output and cache-read token usage and mode attribution
  for the current Claude Code session, or locate the host's native usage report.
  Tr
summary: In Claude Code, src/hooks/caveman-mode-tracker.js runs
  src/hooks/caveman-stats.js on /caveman-stats and supplies its report through
  hookSpecificOutput.additionalContext. Print that report verbatim inside a
  fenced code...
categories:
  - agent-frameworks
tags:
  - anthropic
  - caveman
  - claude
  - claude-code
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: JuliusBrussee/caveman
  subpath: plugins/caveman/skills/caveman-stats
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 120573
  last_commit: 2026-11-16T07:30:16Z
  stars_delta_7d: 2099
  stars_growth_pct: 1.8
  trending_score: 2136.19
  velocity_source: snapshot_delta
  sparkline_4w:
    - 115110
    - 117655
    - 118474
    - 120573
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JuliusBrussee/caveman
  path: plugins/caveman/skills/caveman-stats/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:15:44.369Z
  truncated: false
type: agent_skill
skill:
  skill_name: stats
  description: >
    Show recorded output and cache-read token usage and mode attribution for the
    current Claude Code session, or locate the host's native usage report.
    Trigger: /caveman-stats.
  folder_path: plugins/caveman/skills/caveman-stats
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: juliusbrussee-caveman
---

In Claude Code, `src/hooks/caveman-mode-tracker.js` runs `src/hooks/caveman-stats.js` on `/caveman-stats` and supplies its report through `hookSpecificOutput.additionalContext`. Print that report verbatim inside a fenced code block, as the hook instructs. Do not calculate or add numbers yourself.

In Gemini CLI, direct the user to `/stats model` for current session token usage or `/stats session` for session statistics. Gemini custom commands are prompts; they cannot invoke the built-in command or read its live session metrics. Never read Claude Code transcripts as Gemini usage. In other hosts, use a native usage report if one is available; otherwise say that current session usage is unavailable. The Claude reader and its lifetime history apply only to Claude Code. Savings remain unknown in every host without a measured comparison.

The report shows recorded output and cache-read tokens, response counts, and mode attribution where available. Savings are unknown: the transcript has no measured comparison without Caveman. Do not infer saved tokens, percentages, dollars, rule overhead, or a net result from output counts or the current mode.

`--all` and `--since 7d` aggregate the latest recorded output count per session. `--share` reports observed usage with savings unknown. Historical `est_saved_*` fields are ignored; their original history rows remain on disk. The statusline shows the active mode without the retired savings badge.

Original/current memory-file pairs are reported by their measured byte sizes. Those file-size differences do not establish provider token or billing savings. See `docs/HONEST-NUMBERS.md`.
