---
slug: affaan-m-ecc-skills-delivery-gate
name: delivery-gate
tagline: Stop hook that blocks Claude from finishing until quality checks pass.
  Detects rationalization patterns (surface text heuristics), stale learning
  logs
summary: "This is distinct from reasoning gates (like self-audit): delivery-gate
  checks machine-verifiable facts; self-audit checks output quality across four
  reasoning dimensions. Together they form defense in depth: - deliver..."
categories:
  - productivity-ops
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: skills/delivery-gate
  official_vendor: false
  license: MIT
signals:
  stars: 289072
  last_commit: 2026-10-26T04:56:56Z
  stars_delta_7d: 5578
  stars_growth_pct: 2
  trending_score: 5687.75
  velocity_source: snapshot_delta
  sparkline_4w:
    - 274698
    - 278380
    - 283494
    - 289072
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: skills/delivery-gate/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.035Z
  truncated: false
type: agent_skill
skill:
  skill_name: delivery-gate
  description: Stop hook that blocks Claude from finishing until quality checks
    pass. Detects rationalization patterns (surface text heuristics), stale
    learning logs (filesystem mtime), and low disk space. Complements self-audit
    by mechanically enforcing learning capture habits. Use when Claude should be
    mechanically blocked from declaring work finished before quality checks and
    learning capture actually pass.
  folder_path: skills/delivery-gate
  extra_files:
    - hooks/quality-gate.py
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Delivery Gate — Mechanical Quality Gate for Claude Code
A **Stop hook** that checks three things before Claude can finish a session, using only **deterministic checks** — file modification timestamps, disk usage, and regex patterns on the transcript text. No AI inference.

This is distinct from reasoning gates (like `self-audit`): delivery-gate checks machine-verifiable facts; self-audit checks output quality across four reasoning dimensions. Together they form defense in depth:
- **delivery-gate**: "Was the learning library touched today? Is disk space safe?"
- **self-audit**: "Is the file content correct, complete, and honest?"

This is the same pattern as CI pipeline gates — automated, deterministic checks that verify machine-readable facts rather than trusting self-reported status.

## What It Checks

| Check | Mechanism | On Hit |
|-------|-----------|--------|
| Rationalization patterns | Regex on transcript tail | **Warning only** (never blocks) |
| Stale learning libraries | mtime on 5 configurable paths | Warning if some stale; **Block** on a complex task if >=3 stale OR growth-log stale |
| Disk space < 50GB | `shutil.disk_usage` | Reminder |
| Disk space < 30GB | `shutil.disk_usage` | Warning |
| Disk space < 15GB | `shutil.disk_usage` | **Block** (exit 2), on every Stop |

Rationalization detection warns about patterns like "skip tests for now" and "pre-existing bug" — surface signals that thinking may have been cut short. It never blocks on its own, because regex heuristics can false-positive. The blocking conditions are: disk critical (any session), or, on a complex task (>=3 Edit/Write calls), `>=3 learning libs stale` OR `growth-log` specifically stale. If the project memory directory does not exist, the learning-library checks are skipped: the hook only warns that it cannot verify learning capture, and a complex task is not blocked (the disk checks still apply).

The hook blocks a given Stop at most once. When Claude Code re-runs it with `stop_hook_active: true` (Claude already continued once because of this hook), it exits 0, so a condition the agent cannot fix (such as low disk space) cannot trap the session in an endless loop.

## Why

Claude Code's built-in checks cover code quality (build → type → lint → test). But there's a different failure mode: the agent produces working code while the **session hygiene was neglected** — learning not captured, rationalized shortcuts, disk running out silently.

Over many sessions of "ship and forget," the human hasn't grown. This hook enforces the habit: complex task → must touch learning libraries.

## Install

From the ECC repository root:

```bash
mkdir -p ~/.claude/scripts
cp skills/delivery-gate/hooks/quality-gate.py ~/.claude/scripts/
```

Add to `~/.claude/settings.json`:
```json
{
  "hooks": {
    "Stop": [{
      "hooks": [{
        "type": "command",
        "command": "python3 ~/.claude/scripts/quality-gate.py",
        "timeout": 5
      }]
    }]
  }
}
```

## Learning Libraries

Create these files in your project's memory directory (`~/.claude/projects/<encoded-project-path>/memory/`, where every non-alphanumeric character of the project path becomes `-`). The hook checks which of them were updated today:

```
memory/
├── growth-log/          # Daily learning entries (directory)
├── decisions/log.md     # Decision log
├── output-index.md      # Index of session outputs
├── ratings-tracker.md   # Skill ratings over time
└── tooling_capabilities.md  # Known tools inventory
```

Customize the `LIBS` dict to match your own file structure.

## Configuration

Edit `quality-gate.py`:

| Variable | Default | Purpose |
|----------|---------|---------|
| `RATIONALIZE` | 4 patterns | Regex patterns for rationalization detection |
| `LIBS` | 5 libraries | Files/dirs to check for today's updates |
| `COMPLEX_THRESHOLD` | 3 | Edit/Write calls to classify as complex |
| `DISK_REMIND_GB` | 50 | Remind below this |
| `DISK_WARN_GB` | 30 | Warn below this |
| `DISK_CRIT_GB` | 15 | Block below this |

## Examples

**Simple session — allowed:**
```
edit_count=1 (< 3, not complex) → exit 0
```

**Complex task, learning captured — allowed:**
```
edit_count=5 (complex) → checks LIBS → growth-log + 2 others updated today (2 stale) → exit 0
```

**Complex task, no learning — BLOCKED:**
```
edit_count=4 (complex) → checks LIBS → all 5 stale → exit 2
stderr: "Blocked: complex task but >=3 learning libs stale."
```

**Low disk space — BLOCKED:**
```
disk_free=12GB < 15GB critical → exit 2
stderr: "Blocked: disk space at 12GB (<15GB). Free space before continuing."
```

## Limitations

The hook enforces the **habit** of touching learning libraries, not the **quality** of what was recorded. On a complex task it passes only when `growth-log` was updated today and at most 2 libraries are stale; updating `output-index.md` alone still blocks. Without a project memory directory there is nothing to check, so it only warns. This is by design: mechanical gates check machine-verifiable facts. For content quality verification, pair with `self-audit`.

## Compatibility

- Python 3.8+ (uses `from __future__ import annotations`)
- Cross-platform: Windows, macOS, Linux
- Zero dependencies beyond stdlib

## Quality

This code went through 4 rounds of automated code review (CodeRabbit + Greptile) with 9 real bugs found and fixed.

## See Also

- `self-audit` — Reasoning quality gate (completeness/consistency/groundedness/honesty)
- `verification-loop` — Code quality checks (build/type/lint/test)
- `gateguard` — PreToolUse safety gate
