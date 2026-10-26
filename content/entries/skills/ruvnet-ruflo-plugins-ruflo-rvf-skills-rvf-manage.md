---
slug: ruvnet-ruflo-plugins-ruflo-rvf-skills-rvf-manage
name: rvf-manage
tagline: Manage RVF (Ruflo Vector Format) files for portable agent memory and
  cross-platform transfer
summary: When you need to export agent memory to RVF format for backup, transfer
  between projects, or share knowledge between teams.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-rvf/skills/rvf-manage
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-rvf/skills/rvf-manage/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.549Z
  truncated: false
type: agent_skill
skill:
  skill_name: rvf-manage
  description: Manage RVF (Ruflo Vector Format) files for portable agent memory
    and cross-platform transfer
  folder_path: plugins/ruflo-rvf/skills/rvf-manage
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# RVF Management
Manage RVF files for portable, transferable agent memory.

## When to use

When you need to export agent memory to RVF format for backup, transfer between projects, or share knowledge between teams.

## Steps

1. **List memories** — call `mcp__plugin_ruflo-core_ruflo__memory_list` to see all stored memories
2. **Export** — `npx @claude-flow/cli@latest memory export -o <file> [-n <namespace>] [-f json|csv|binary]` (vectors included by default; `--include-vectors false` to drop them). Pick the output path inside the project, never an existing file you have not read
3. **Import** — `npx @claude-flow/cli@latest memory import -i <file> [-n <namespace>]` (merges and skips duplicates by default), or call `mcp__plugin_ruflo-core_ruflo__memory_import_claude` to pull in Claude Code auto-memories
4. **Migrate** — call `mcp__plugin_ruflo-core_ruflo__memory_migrate` for format upgrades
5. **Stats** — call `mcp__plugin_ruflo-core_ruflo__memory_stats` for storage metrics

## RVF format

RVF (Ruflo Vector Format) stores:
- Vector embeddings (384-dim ONNX)
- Metadata (timestamps, namespaces, tags)
- Causal relationships between entries
- Session context and agent scope

## Transfer between projects

Copy patterns from another local project (nothing leaves the machine):

```bash
npx @claude-flow/cli@latest hooks transfer from-project --source /path/to/other/project
```

`hooks transfer store` is different: it is the pattern **marketplace** on the public IPFS registry (`list`, `search`, `download`, `publish`). Never run `publish` for project memory unless the user asks for it, and scan the content for PII and secrets first (`mcp__plugin_ruflo-core_ruflo__transfer_detect-pii`). Anything published may be cached and cannot be recalled.

Exported files are not encrypted by the at-rest setting (see the plugin README); treat them as sensitive if the memory is.
