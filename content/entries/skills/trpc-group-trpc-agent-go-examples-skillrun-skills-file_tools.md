---
slug: trpc-group-trpc-agent-go-examples-skillrun-skills-file_tools
name: file-tools
tagline: Simple shell utilities for files and archives.
summary: Use these examples to explore basic shell commands inside a skill
  workspace. The assistant can run them and return results and files.
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
  subpath: examples/skillrun/skills/file_tools
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
  path: examples/skillrun/skills/file_tools/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.535Z
  truncated: false
type: agent_skill
skill:
  skill_name: file-tools
  description: Simple shell utilities for files and archives.
  folder_path: examples/skillrun/skills/file_tools
  extra_files:
    - USAGE.md
    - scripts/write_sample.sh
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

Overview

Use these examples to explore basic shell commands inside a skill
workspace. The assistant can run them and return results and files.

Examples

1) List files in the workspace

   Command:

   ls -la

2) Write a sample file to out/sample.txt

   Command:

   bash scripts/write_sample.sh "Hello from skill" out/sample.txt

3) Create a tar.gz archive of the out/ folder

   Command:

   tar -czf out/sample.tgz -C out .

Output Files

- out/sample.txt
- out/sample.tgz
