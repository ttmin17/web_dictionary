---
slug: trpc-group-trpc-agent-go-examples-skillrun-skills-user_file_ops
name: user-file-ops
tagline: Simple operations on user-provided text files including summarization.
summary: Summarize text files that come from the user or from other skills. This
  skill can compute basic statistics (lines, words, bytes) and capture a short
  preview of the file.
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
  subpath: examples/skillrun/skills/user_file_ops
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
  path: examples/skillrun/skills/user_file_ops/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.535Z
  truncated: false
type: agent_skill
skill:
  skill_name: user-file-ops
  description: Simple operations on user-provided text files including summarization.
  folder_path: examples/skillrun/skills/user_file_ops
  extra_files:
    - scripts/summarize_file.sh
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

Overview

Summarize text files that come from the user or from other skills.
This skill can compute basic statistics (lines, words, bytes) and
capture a short preview of the file.

User-provided files are typically exposed under `work/inputs/` (for
example, when a host directory is mounted as inputs, or when the user
uploads a file into the conversation and the framework stages it into
the workspace before scripts run). Files produced by other skills are
usually written under `out/` and can be summarized directly from
there.

Examples

1) Summarize a text file already present in the workspace

   Command:

   bash scripts/summarize_file.sh \
     work/inputs/example.txt \
     out/example_summary.txt

2) Summarize a different file

   Command:

   bash scripts/summarize_file.sh \
     work/inputs/notes.txt \
     out/notes_summary.txt

3) Summarize a file produced by another skill

   Command:

   bash scripts/summarize_file.sh \
     out/sample_fib.txt \
     out/sample_fib_summary.txt

Output Files

- out/example_summary.txt
- out/notes_summary.txt
- out/sample_fib_summary.txt
