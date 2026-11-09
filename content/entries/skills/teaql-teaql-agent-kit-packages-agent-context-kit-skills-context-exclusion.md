---
slug: teaql-teaql-agent-kit-packages-agent-context-kit-skills-context-exclusion
name: context-exclusion
tagline: Maintain .agent-no-read.md markers for approved generated directories
  using deterministic scripts. Use when configuring generated-code context
  exclusi
summary: "Run from the project root with an explicitly approved project-relative
  manifest:"
categories:
  - coding-agents
tags:
  - agentic-coding
  - ai-agents
  - ai-coding
  - ai-native
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: teaql/teaql-agent-kit
  subpath: packages/agent-context-kit/skills/context-exclusion
  official_vendor: false
  license: MIT
signals:
  stars: 2819
  last_commit: 2026-11-06T00:37:12Z
  stars_delta_7d: 1
  stars_growth_pct: 0
  trending_score: 1
  rank_current: 133
  rank_delta: 1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 2818
    - 2818
    - 2818
    - 2819
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: teaql/teaql-agent-kit
  path: packages/agent-context-kit/skills/context-exclusion/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:24.388Z
  truncated: false
type: agent_skill
skill:
  skill_name: context-exclusion
  description: Maintain .agent-no-read.md markers for approved generated
    directories using deterministic scripts. Use when configuring generated-code
    context exclusion or restoring markers after regeneration, not for ordinary
    ignore rules or OS permissions.
  folder_path: packages/agent-context-kit/skills/context-exclusion
  extra_files:
    - scripts/markers.mjs
  pack_total_skills: 3
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: teaql-teaql-agent-kit
---

# Generated context exclusion
Use the packaged `scripts/markers.mjs` entry point to maintain `.agent-no-read.md`.
Resolve that script relative to this skill directory; it uses the package's
compiled CLI runtime (or source modules in a checkout), so keep the installed
Agent Context Kit layout intact.

Run from the project root with an explicitly approved project-relative manifest:

```sh
agent-context-markers apply --manifest context-markers.json
agent-context-markers check --manifest context-markers.json
agent-context-markers generate --manifest context-markers.json
```

If the package bin is unavailable, invoke the resolved script with `node` and the
same arguments. No cwd, target-directory, guidance-text or shell-command overrides
are accepted. `apply` creates or updates markers, `check` performs no writes, and
`generate` runs the manifest's fixed generator and restores snapshotted markers in
`finally`, including after command failure or cancellation.

Use existing user/host authorization for the manifest and target directories; this
skill does not authorize arbitrary configuration changes or removal of markers.
Keep the manifest and Markdown guidance outside every generated output directory.
Put stable interface locations, editable source locations and build/test guidance
in the Markdown source. Do not copy implementation details into guidance.

In the dedicated Pi harness, call an already configured fixed build/generation
operation that embeds this script or its SDK helper. This skill does not install a
model-controlled maintenance tool, enable Bash, or bypass the tool allowlist. Treat
`maintenanceFailed` as a failed operation even if generation succeeded; verify or
repair the marker state through the authorized maintenance entry point before
continuing model access. Do not manually read excluded source to diagnose failure.

Read the [maintenance guide](https://github.com/teaql/teaql-agent-kit/blob/main/packages/agent-context-kit/skills/context-exclusion/../../docs/context-marker-maintenance.md) for manifest
format, exit codes, regeneration limits and the runnable end-to-end example.
