---
slug: orchestratorinc-agent-orchestrator-backend-internal-skillassets-using-ao
name: using-ao
tagline: Agent skill from OrchestratorInc/agent-orchestrator
summary: Agent skill from OrchestratorInc/agent-orchestrator
categories:
  - agent-frameworks
tags:
  - agent-fleet
  - agent-ide
  - agent-orchestration
  - agent-swarm
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: OrchestratorInc/agent-orchestrator
  subpath: backend/internal/skillassets/using-ao
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 13656
  last_commit: 2026-10-26T07:29:59Z
  stars_delta_7d: 317
  stars_growth_pct: 2.4
  trending_score: 324.53
  rank_current: 46
  rank_delta: 4
  velocity_source: snapshot_delta
  sparkline_4w:
    - 12863
    - 13138
    - 13339
    - 13656
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: OrchestratorInc/agent-orchestrator
  path: backend/internal/skillassets/using-ao/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:42.297Z
  truncated: false
type: agent_skill
skill:
  skill_name: using-ao
  description: Agent skill from OrchestratorInc/agent-orchestrator
  folder_path: backend/internal/skillassets/using-ao
  extra_files:
    - commands/automation.md
    - commands/browser-remote.md
    - commands/browser.md
    - commands/cue.md
    - commands/doctor.md
    - commands/import.md
    - commands/orchestrator.md
    - commands/preview.md
    - commands/project.md
    - commands/render.md
  pack_total_skills: 1
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: orchestratorinc-agent-orchestrator
---

# AO CLI Catalog
`ao` is a thin CLI over the local AO daemon. Every command is `ao <command> --help` for the authoritative flag list.

| Command | What it does | When to use | Details |
|---|---|---|---|
| `spawn` | Spawn a project worker, orchestrator, or projectless standalone worker | Starting a new task or issue | [commands/spawn.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/spawn.md) |
| `session` | Manage agent sessions (list, kill, rename, restore, etc.) | Inspecting or controlling running/terminated sessions | [commands/session.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/session.md) |
| `agent` | Inspect installed harnesses and launch readiness | Choosing or diagnosing an agent harness | `ao agent ls --refresh` |
| `pr` | Merge a PR or resolve its review threads | Completing a reviewed change | `ao pr merge` / `ao pr resolve-comments` |
| `project` | Register, inspect, configure, or remove projects | Setting up or managing repos AO knows about | [commands/project.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/project.md) |
| `automation` | Manage durable recurring session automations | Creating, editing, disabling, deleting, and inspecting scheduled runs | [commands/automation.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/automation.md) |
| `cue` | Create or list reusable project Cues | Saving a repetitive command or agent task at the user's request | [commands/cue.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/cue.md) |
| `orchestrator` | List orchestrator sessions | Viewing which sessions are orchestrators | [commands/orchestrator.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/orchestrator.md) |
| `review` | Start, list, cancel, or submit AO's native reviewer for a worker's PR (default: this session) | Getting an adversarial review of an AO session's PR; never spawn a worker to review | [commands/review.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/review.md) |
| `send` | Send a message to a running agent session | Correcting or directing a live agent | [commands/send.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/send.md) |
| `report` | Persist a meaningful worker report | Checkpoints, blockers, decisions, outputs, and completion | [commands/report.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/report.md) |
| `preview` | Start a session-owned app or open an exact URL/file | Running and showing the worker's relevant app, Markdown, HTML, PDF, or image | [commands/preview.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/preview.md) |
| `render` | Show a self-contained HTML page inline in a chat thread | Answering with a chart, table, diagram, or mockup | [commands/render.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/render.md) |
| `browser` | Inspect and control the session's shared live browser | Verifying a web app through snapshots, interactions, waits, screenshots, console, and errors | [commands/browser.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/browser.md) |
| `start` | Fetch (if needed) and open the AO desktop app | Launching the app | [commands/start.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/start.md) |
| `stop` | Stop the AO daemon | Shutting down AO | [commands/stop.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/stop.md) |
| `status` | Show daemon status | Verifying the daemon is up and healthy | [commands/status.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/status.md) |
| `doctor` | Run local health checks | Diagnosing AO setup problems | [commands/doctor.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/doctor.md) |
| `import` | Import projects from a legacy AO install | Migrating from the old flat-file store | [commands/import.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/import.md) |
| `version` | Print version information | Checking installed version | - |
| `completion` | Generate shell completion scripts | Setting up tab completion | - |

## Conventions

- Most read commands accept `--json` for machine-readable output.
- `-p / --project` scopes session subcommand lookups to one project.
- Session and project ids are shown by `ao session ls` and `ao project ls`.
- To refer to a session in AO Chat or the AO terminal, use the canonical in-app
  link `ao://sessions/{project-id}/{session-id}`. Read
  [commands/session.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/session.md) for identity, encoding, and safety
  rules before constructing one.
- When the user asks to save a repeatable task as a Cue, use `ao cue list --json` to check existing definitions, then `ao cue create`. An agent Cue stores a reusable instruction; a command Cue stores an exact shell command. This agent-facing command can create and read Cues, but cannot edit or delete them. Direct the user to project settings for changes to existing Cues.
- `--agent` is an alias for `--harness` on `ao spawn`.
- Every command accepts `-h / --help` for the full flag list.
- For frontend launch, preview selection, or artifact handoff, read
  [commands/preview.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/preview.md) before acting. Its static-file,
  project-runtime, and automatic-handoff rules are load-bearing.
- For page inspection, interaction, or request diagnosis, read
  [commands/browser.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/browser.md). It defines shared-tab behavior
  and the opt-in network policy.

Use [references.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/references.md) only when a natural-language request does
not map clearly to a command above.
