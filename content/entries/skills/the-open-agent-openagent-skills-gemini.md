---
slug: the-open-agent-openagent-skills-gemini
name: gemini
tagline: Gemini CLI for one-shot Q&A, summaries, and generation.
summary: '- gemini "Answer this question..." - gemini --model "Prompt..." -
  gemini --output-format json "Return JSON"'
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/gemini
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5730
  last_commit: 2026-11-02T01:23:53Z
  stars_delta_7d: 18
  stars_growth_pct: 0.3
  trending_score: 18.06
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5688
    - 5698
    - 5712
    - 5730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/gemini/SKILL.md
  branch: master
  fetched_at: 2026-11-05T13:11:58.405Z
  truncated: false
type: agent_skill
skill:
  skill_name: gemini
  description: Gemini CLI for one-shot Q&A, summaries, and generation.
  folder_path: skills/gemini
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - antigravity
  pack_slug: the-open-agent-openagent
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
