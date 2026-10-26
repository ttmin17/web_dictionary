---
slug: trpc-group-trpc-agent-go-examples-skillrun-skills-python_math
name: python-math
tagline: Small Python utilities for math and text files.
summary: Run short Python scripts inside the skill workspace. Results can be
  returned as text and saved as output files.
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
  subpath: examples/skillrun/skills/python_math
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
  path: examples/skillrun/skills/python_math/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.535Z
  truncated: false
type: agent_skill
skill:
  skill_name: python-math
  description: Small Python utilities for math and text files.
  folder_path: examples/skillrun/skills/python_math
  extra_files:
    - scripts/fib.py
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

Overview

Run short Python scripts inside the skill workspace. Results can be
returned as text and saved as output files.

Examples

1) Print the first N Fibonacci numbers

   Command:

   python3 scripts/fib.py 10 > out/fib.txt

2) Sum a list of integers

   Command:

   python3 - <<'PY'
from sys import stdin
nums = [int(x) for x in stdin.read().split()]
print(sum(nums))
PY

Output Files

- out/fib.txt
