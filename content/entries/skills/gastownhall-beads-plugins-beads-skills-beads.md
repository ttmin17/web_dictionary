---
slug: gastownhall-beads-plugins-beads-skills-beads
name: beads-beads
tagline: Dolt-powered issue tracker for multi-session work with dependencies and
  persistent memory across conversation compaction. Use when work spans sessions
summary: 'Decision test: "Will I need this context in 2 weeks?" YES = bd, NO =
  TodoWrite.'
categories:
  - databases-memory
status: active
quality_percentile: 45
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: gastownhall/beads
  subpath: plugins/beads/skills/beads
  official_vendor: false
  license: MIT
signals:
  stars: 27840
  last_commit: 2026-10-13T15:52:10Z
  stars_delta_7d: 133
  stars_growth_pct: 0.5
  trending_score: 133.64
  rank_current: 181
  velocity_source: snapshot_delta
  sparkline_4w:
    - 27707
    - 27840
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: gastownhall/beads
  path: plugins/beads/skills/beads/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:14.635Z
  truncated: false
type: agent_skill
skill:
  skill_name: beads-beads
  description: >
    Dolt-powered issue tracker for multi-session work with dependencies and
    persistent memory across conversation compaction. Use when work spans
    sessions, has blockers, or needs context recovery after compaction. Trigger
    with "create task", "what's ready", "track this work", "resume after
    compaction". Make sure to use this skill whenever managing multi-session
    work, tracking dependencies, or recovering context.
  folder_path: plugins/beads/skills/beads
  extra_files:
    - CLAUDE.md
    - README.md
    - adr/0001-bd-prime-as-source-of-truth.md
    - agents/openai.yaml
    - commands/audit.md
    - commands/blocked.md
    - commands/close.md
    - commands/comments.md
    - commands/compact.md
    - commands/create.md
tags:
  - memory
---

# Beads - Persistent Task Memory for AI Agents
Graph-based issue tracker that survives conversation compaction. Provides persistent memory for multi-session work with complex dependencies.

## bd vs TodoWrite

**Decision test**: "Will I need this context in 2 weeks?" YES = bd, NO = TodoWrite.

| bd (persistent) | TodoWrite (ephemeral) |
|-----------------|----------------------|
| Multi-session, dependencies, compaction survival | Single-session linear tasks |
| Dolt-backed team sync | Conversation-scoped |

See [BOUNDARIES.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/BOUNDARIES.md) for detailed comparison.

## Prerequisites

```bash
bd --version  # Requires v0.60.0+
```

- **bd CLI** installed and in PATH
- **Git repository** (optional — use `BEADS_DIR` + `--stealth` for git-free operation)
- **Initialization**: `bd init` run once (humans do this, not agents)

## CLI Reference

**Run `bd prime`** for AI-optimized workflow context (auto-loaded by hooks).
**Run `bd <command> --help`** for specific command usage.

Essential commands: `bd ready`, `bd create`, `bd show`, `bd update`, `bd close`, `bd dolt push`

## Session Protocol

1. `bd ready` — Find unblocked work
2. `bd show <id>` — Get full context
3. `bd update <id> --claim` — Claim and start work atomically
4. Add notes as you work (critical for compaction survival)
5. `bd close <id> --reason "..."` — Complete task
6. `bd dolt push` — Push to Dolt remote (if configured)

## Output

Append `--json` to any command for structured output. Use `bd show <id> --long` for extended metadata. Status icons: `○` open `◐` in_progress `●` blocked `✓` closed `❄` deferred.

## Error Handling

| Error | Fix |
|-------|-----|
| `database not found` | `bd init <prefix>` in project root |
| `not in a git repository` | `git init` first |
| `disk I/O error (522)` | Move `.beads/` off cloud-synced filesystem |
| Status updates lag | Use server mode: `bd dolt start` |

See [TROUBLESHOOTING.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/TROUBLESHOOTING.md) for full details.

## Examples

**Track a multi-session feature:**
```bash
bd create "OAuth integration" -t epic -p 1 --json
bd create "Token storage" -t task --deps blocks:oauth-id --json
bd ready --json                    # Shows unblocked work
bd update <id> --claim --json      # Claim and start
bd close <id> --reason "Implemented with refresh tokens" --json
```

**Recover after compaction:** `bd list --status in_progress --json` then `bd show <id> --long`

**Discover work mid-task:** `bd create "Found bug" -t bug -p 1 --deps discovered-from:<current-id> --json`

## Advanced Features

| Feature | CLI | Resource |
|---------|-----|----------|
| Molecules (templates) | `bd mol --help` | [MOLECULES.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/MOLECULES.md) |
| Chemistry (pour/wisp) | `bd pour`, `bd wisp` | [CHEMISTRY_PATTERNS.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/CHEMISTRY_PATTERNS.md) |
| Agent beads | `bd agent --help` | [AGENTS.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/AGENTS.md) |
| Async gates | `bd gate --help` | [ASYNC_GATES.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/ASYNC_GATES.md) |
| Worktrees | `bd worktree --help` | [WORKTREES.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/WORKTREES.md) |

## Resources

| Category | Files |
|----------|-------|
| **Getting Started** | [BOUNDARIES.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/BOUNDARIES.md), [CLI_REFERENCE.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/CLI_REFERENCE.md) (live reference pointers), [WORKFLOWS.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/WORKFLOWS.md) |
| **Core Concepts** | [DEPENDENCIES.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/DEPENDENCIES.md), [ISSUE_CREATION.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/ISSUE_CREATION.md), [PATTERNS.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/PATTERNS.md) |
| **Resilience** | [RESUMABILITY.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/RESUMABILITY.md), [TROUBLESHOOTING.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/TROUBLESHOOTING.md) |
| **Advanced** | [MOLECULES.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/MOLECULES.md), [CHEMISTRY_PATTERNS.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/CHEMISTRY_PATTERNS.md), [AGENTS.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/AGENTS.md), [ASYNC_GATES.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/ASYNC_GATES.md), [WORKTREES.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/WORKTREES.md) |
| **Reference** | [STATIC_DATA.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/STATIC_DATA.md), [INTEGRATION_PATTERNS.md](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/resources/INTEGRATION_PATTERNS.md) |

## Validation

If `bd --version` reports newer than `0.60.0`, this skill may be stale. Run `bd prime` for current CLI guidance — it auto-updates with each bd release and is the canonical source of truth ([ADR-0001](https://github.com/gastownhall/beads/blob/main/plugins/beads/skills/beads/adr/0001-bd-prime-as-source-of-truth.md)).
