---
slug: trpc-group-trpc-agent-go-openclaw-skills-gemini
name: gemini
tagline: Gemini CLI for one-shot Q&A, summaries, and generation.
summary: '- gemini "Answer this question..." - gemini --model "Prompt..." -
  gemini --output-format json "Return JSON"'
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: openclaw/skills/gemini
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1877
  last_commit: 2026-10-26T06:16:05Z
  stars_delta_7d: 7
  stars_growth_pct: 0.4
  trending_score: 7.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: openclaw/skills/gemini/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.536Z
  truncated: false
type: agent_skill
skill:
  skill_name: gemini
  description: Gemini CLI for one-shot Q&A, summaries, and generation.
  folder_path: openclaw/skills/gemini
  extra_files: []
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# Gemini CLI
Use Gemini in one-shot mode with a positional prompt (avoid interactive mode).

Quick start

- `gemini "Answer this question..."`
- `gemini --model <name> "Prompt..."`
- `gemini --output-format json "Return JSON"`

Extensions

- List: `gemini --list-extensions`
- Manage: `gemini extensions <command>`

Notes

- If auth is required, run `gemini` once interactively and follow the login flow.
- Avoid `--yolo` for safety.
