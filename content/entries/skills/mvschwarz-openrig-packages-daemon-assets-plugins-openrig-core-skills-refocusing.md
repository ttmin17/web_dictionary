---
slug: mvschwarz-openrig-packages-daemon-assets-plugins-openrig-core-skills-refocusing
name: refocusing
tagline: Use when a long-running agent may have lost the product outcome, when
  context was compacted, when work has crossed a major boundary, or when a fresh
  p
summary: Refocus preserves a long session's earned expertise while re-grounding
  it in current intent and lived context. It is not a restart, wake, or phase
  checkpoint.
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-orchestration
  - agent-skills
  - ai-coding
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: mvschwarz/openrig
  subpath: packages/daemon/assets/plugins/openrig-core/skills/refocusing
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 8648
  last_commit: 2026-11-05T13:06:48Z
  stars_delta_7d: 450
  stars_growth_pct: 5.5
  trending_score: 474.7
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7377
    - 7831
    - 8198
    - 8648
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mvschwarz/openrig
  path: packages/daemon/assets/plugins/openrig-core/skills/refocusing/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:57.372Z
  truncated: false
type: agent_skill
skill:
  skill_name: refocusing
  description: Use when a long-running agent may have lost the product outcome,
    when context was compacted, when work has crossed a major boundary, or when
    a fresh path-based trace is needed before the next consequential action. Not
    for fresh-session orientation, waking an idle seat, or checkpoints.
  folder_path: packages/daemon/assets/plugins/openrig-core/skills/refocusing
  extra_files:
    - references/refocus.md
    - scripts/trace-to-root.py
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mvschwarz-openrig
---

# Refocusing
Invoke the skill as `refocusing`, its frontmatter name. OpenRig seeds it in the
Claude and Codex global skill roots and includes selected plugin skills in managed
loadouts. Existing externally managed copies remain authoritative. If the harness
has not discovered it yet, read this installed skill file and run its script directly;
hook registration alone does not prove native skill discovery.

Refocus preserves a long session's earned expertise while re-grounding it in current intent and
lived context. It is not a restart, wake, or phase checkpoint.

During an actionable managed restore, consume the current topology and work trace
that actually arrived with the request. Do not rerun Python merely to duplicate it.
If no current trace arrived, name that delivery gap. A packet pointer, compact
summary or truncated extract is not a full source read. Use the native file-read
tool for required notes and full sources, and complete the existing restore audit;
partial file reads do not establish completed refocus or restoration.

For a new trace outside that delivered context, follow the command guidance below.
Resolve the bundled script's absolute path from the directory of this loaded skill.
Stay in your current working directory; do not `cd` into the skill directory, which
can change the inferred work node. Run the trace as **one plain command**, replacing
the example path with the actual absolute path written out in the tool call:

```bash
python3 "/absolute/path/to/refocusing/scripts/trace-to-root.py" --trees both --depth light
```

Do not combine this command with shell variables, environment assignments, command
substitution, exit-status printing or file-reading loops. Read the named source
files separately with the native read tool. Combined shell loops or variables can
require native approval even when the intended operations are read-only; a plain
command is not a guarantee that approval will never be needed.

For managed compaction, refocus during the restore request or its read-depth
audit. The earlier acknowledgement-only boundary is not permission to restore.

Use `--trees topology|work|both` to select context domains and `--depth light|full` to control how
much each node contributes. Light work traces compose `intent:` and name notes; full traces include
the complete node and notes bodies. The script resolves `topology.root` and `workspace.root` with
`rig config get`. When a known current node must be supplied, pass `--work-start` or
`--topology-start` with its literal absolute path in the same plain command. Do not
substitute the project root for a mission or slice node and claim that mission was traced.

The trace walks the topology and work trees. For the project's own declared context (intent, context files,
skills), `rig context work-install` lists it; read what the next action needs.

Read [references/refocus.md](https://github.com/mvschwarz/openrig/blob/main/packages/daemon/assets/plugins/openrig-core/skills/refocusing/references/refocus.md) when changing the automatic hook or its content
ladder. A missing chain file is evidence: report the gap and continue; never follow pointers to invent
a second parent.
