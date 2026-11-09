---
slug: backnotprop-plannotator-apps-kiro-cli-skills-plannotator-annotate
name: annotate
tagline: Open Plannotator's annotation UI for a file, folder, or URL, then
  address the returned annotations.
summary: $ARGUMENTS should be a markdown or plain-text config file path (.md,
  .txt, .yaml, .json, .toml, .ini, .csv, .log, …), folder path, html file path,
  or URL.
categories:
  - coding-agents
tags:
  - agents
  - claude-code
  - code-review
  - codex
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: backnotprop/plannotator
  subpath: apps/kiro-cli/skills/plannotator-annotate
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9921
  last_commit: 2026-11-09T08:32:06Z
  stars_delta_7d: 61
  stars_growth_pct: 0.6
  trending_score: 61.38
  rank_current: 81
  rank_delta: -5
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9506
    - 9647
    - 9860
    - 9921
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: backnotprop/plannotator
  path: apps/kiro-cli/skills/plannotator-annotate/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:48.838Z
  truncated: false
type: agent_skill
skill:
  skill_name: annotate
  description: Open Plannotator's annotation UI for a file, folder, or URL, then
    address the returned annotations.
  folder_path: apps/kiro-cli/skills/plannotator-annotate
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: backnotprop-plannotator
---

# Plannotator Annotate (Kiro)
Run:

```bash
PLANNOTATOR_ORIGIN=kiro-cli plannotator annotate $ARGUMENTS
```

`$ARGUMENTS` should be a markdown or plain-text config file path (.md, .txt, .yaml, .json, .toml, .ini, .csv, .log, …), folder path, html file path, or URL.

If the command reports that the arguments could not be resolved to a file, URL, or folder, work out which target the user means and re-run the command yourself with that concrete path or URL.

If the session closes without feedback (the output is empty, or a JSON object with `"decision": "dismissed"`), acknowledge it in one sentence and stop. Do not begin any work: closing the session is not approval.
