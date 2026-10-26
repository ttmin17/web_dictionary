---
slug: ruvnet-ruflo-plugins-ruflo-metaharness-skills-harness-mint
name: harness-mint
tagline: Scaffold a custom AI agent harness via `metaharness new {name}
  --template {id} --host {id}`. Defaults to DRY-RUN (no writes) unless --confirm
  is passe
summary: The one write-capable skill in the plugin. Every other skill is
  pure-read. This one calls metaharness new, which writes a new directory tree.
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
  subpath: plugins/ruflo-metaharness/skills/harness-mint
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
  path: plugins/ruflo-metaharness/skills/harness-mint/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.546Z
  truncated: false
type: agent_skill
skill:
  skill_name: harness-mint
  description: Scaffold a custom AI agent harness via `metaharness new {name}
    --template {id} --host {id}`. Defaults to DRY-RUN (no writes) unless
    --confirm is passed. Refuses to write to the calling repo root or anywhere
    inside it. Honors ADR-150 architectural constraint + ruflo's
    "destructive-action confirmation" pattern.
  folder_path: plugins/ruflo-metaharness/skills/harness-mint
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

The one write-capable skill in the plugin. Every other skill is
pure-read. This one calls `metaharness new`, which writes a new
directory tree.

## Safety (load-bearing)

1. **Dry-run by default.** Without `--confirm`, the script prints what
   it would do and exits 0 without touching disk.
2. **Refuses project root.** If `--target` resolves to the current
   working directory OR any path inside it, the script errors out with
   exit 2. Target must be an absolute path OUTSIDE the calling repo
   (default is a fresh `/tmp/ruflo-mint-<ts>-<name>/` dir).
3. **Refuses existing target.** Won't overwrite — must scaffold into a
   non-existent dir.
4. **Subprocess + 60s timeout.** No library import, no in-process
   execution. The mint stays sandboxed from ruflo's runtime.

## Algorithm

Implementation: [`scripts/mint.mjs`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-metaharness/skills/harness-mint/../../scripts/mint.mjs).

1. Validate `--name`, `--template`. Default `--host` to `claude-code`.
2. Resolve `--target` (default: temp dir).
3. Run safety checks (no project-root writes; target must not exist).
4. Without `--confirm`: emit dry-run plan, exit 0.
5. With `--confirm`: shell `npx metaharness new <name> --template <id>
   --host <id> --target <abs> --yes`.

## Templates

`minimal`, `vertical:coding`, `vertical:devops`, `vertical:support`,
`vertical:legal`, `vertical:research`, `vertical:trading`, `vertical:health`,
`vertical:education`, `vertical:sales`, `vertical:business`,
`vertical:crm`, `vertical:marketing`, `vertical:advertising`,
`vertical:ai`, `vertical:agentics`, `vertical:ruview`, `vertical:gaming`,
`vertical:repo-maintainer`, `vertical:exotic`.

## Hosts

`claude-code`, `codex`, `pi-dev`, `hermes`, `openclaw`, `rvm`,
`copilot`, `opencode`, `github-actions`.

## Example dry-run

```
$ node scripts/mint.mjs --name my-harness --template vertical:coding --host claude-code
# harness-mint (dry-run)

- action: metaharness new
- name: my-harness
- template: vertical:coding
- host: claude-code
- target: /tmp/ruflo-mint-1718560000-my-harness
- confirm: false
- willWrite: false

Re-run with `--confirm` to actually scaffold.
```

## Why dry-run by default

Ruflo's behavioral rules say "executing actions with care" — destructive
or repo-touching actions need confirmation. The dry-run output makes the
WHAT visible before the WHEN. A human sees `target`, decides, then
adds `--confirm` if happy.
