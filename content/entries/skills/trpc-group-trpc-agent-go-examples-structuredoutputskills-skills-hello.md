---
slug: trpc-group-trpc-agent-go-examples-structuredoutputskills-skills-hello
name: hello
tagline: Agent skill from trpc-group/trpc-agent-go
summary: "name: hello description: Run a tiny script and print a deterministic message."
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 85
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/structuredoutputskills/skills/hello
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1931
  last_commit: 2026-11-16T07:59:48Z
  stars_delta_7d: 16
  stars_growth_pct: 0.8
  trending_score: 16.13
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1877
    - 1906
    - 1915
    - 1931
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/structuredoutputskills/skills/hello/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:15:31.915Z
  truncated: false
type: agent_skill
skill:
  skill_name: hello
  description: Agent skill from trpc-group/trpc-agent-go
  folder_path: examples/structuredoutputskills/skills/hello
  extra_files:
    - scripts/hello.sh
  pack_total_skills: 24
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

name: hello
description: Run a tiny script and print a deterministic message.

Use this skill when you need a stable, local command result.

## Run

Run the demo script:

```bash
bash scripts/hello.sh
```
