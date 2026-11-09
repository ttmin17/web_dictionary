---
slug: the-open-agent-openagent-skills-nano-pdf
name: nano-pdf
tagline: Edit PDFs with natural-language instructions using the nano-pdf CLI.
summary: "- Page numbers are 0-based or 1-based depending on the tool’s
  version/config; if the result looks off by one, retry with the other. - Always
  sanity-check the output PDF before sending it out."
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 85
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/nano-pdf
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5736
  last_commit: 2026-11-06T13:17:10Z
  stars_delta_7d: 6
  stars_growth_pct: 0.1
  trending_score: 6.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5698
    - 5712
    - 5730
    - 5736
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/nano-pdf/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:27:08.041Z
  truncated: false
type: agent_skill
skill:
  skill_name: nano-pdf
  description: Edit PDFs with natural-language instructions using the nano-pdf CLI.
  folder_path: skills/nano-pdf
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# nano-pdf
Use `nano-pdf` to apply edits to a specific page in a PDF using a natural-language instruction.

## Quick start

```bash
nano-pdf edit deck.pdf 1 "Change the title to 'Q3 Results' and fix the typo in the subtitle"
```

Notes:

- Page numbers are 0-based or 1-based depending on the tool’s version/config; if the result looks off by one, retry with the other.
- Always sanity-check the output PDF before sending it out.
