---
slug: orchestratorinc-agent-orchestrator-backend-internal-skillassets-using-ao
name: using-ao
tagline: Use the Orchestrator `ao` CLI to manage workers, sessions, projects,
  Cues, messages, browser previews, and daemon control. Also covers importing
  exist
summary: "- For importing existing agent conversations from outside
  Orchestrator, read commands/import.md. This includes Claude Code and Codex
  terminal sessions. - Most read commands accept --json for machine-readable
  output. -..."
categories:
  - agent-frameworks
tags:
  - agent-fleet
  - agent-ide
  - agent-orchestration
  - agent-swarm
status: active
quality_percentile: 79
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: OrchestratorInc/agent-orchestrator
  subpath: backend/internal/skillassets/using-ao
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 14784
  last_commit: 2026-11-16T09:03:35Z
  stars_delta_7d: 470
  stars_growth_pct: 3.3
  trending_score: 485.43
  velocity_source: snapshot_delta
  sparkline_4w:
    - 13656
    - 14127
    - 14314
    - 14784
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: OrchestratorInc/agent-orchestrator
  path: backend/internal/skillassets/using-ao/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:04.584Z
  truncated: false
type: agent_skill
skill:
  skill_name: using-ao
  description: Use the Orchestrator `ao` CLI to manage workers, sessions,
    projects, Cues, messages, browser previews, and daemon control. Also covers
    importing existing agent sessions.
  folder_path: backend/internal/skillassets/using-ao
  extra_files:
    - commands/account.md
    - commands/artifact.md
    - commands/automation.md
    - commands/browser-remote.md
    - commands/browser.md
    - commands/conductor.md
    - commands/cua.md
    - commands/cue.md
    - commands/doctor.md
    - commands/import.md
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: orchestratorinc-agent-orchestrator
---

# Orchestrator CLI Catalog
`ao` is a thin CLI over the local Orchestrator daemon. Every command is `ao <command> --help` for the authoritative flag list.

| Command | What it does | When to use | Details |
|---|---|---|---|
| `spawn` | Spawn a project worker, orchestrator, or projectless standalone worker | Starting a new task or issue | [commands/spawn.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/spawn.md) |
| `session` | Manage agent sessions (list, kill, rename, restore, history, etc.) | Inspecting or controlling running/terminated sessions, or reading the full conversation after taking over from another agent | [commands/session.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/session.md) |
| `account` | List Claude Code and Codex subscription accounts, set the default, show or move a session's account | Starting work on a specific account, or moving a session off an account that hit its limit | [commands/account.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/account.md) |
| `agent` | Inspect installed harnesses and launch readiness | Choosing or diagnosing an agent harness | `ao agent ls --refresh` |
| `pr` | Merge a PR or resolve its review threads | Completing a reviewed change | `ao pr merge` / `ao pr resolve-comments` |
| `project` | Register, inspect, configure, or remove projects | Setting up or managing repos Orchestrator knows about | [commands/project.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/project.md) |
| `automation` | Manage durable recurring session automations | Creating, editing, disabling, deleting, and inspecting scheduled runs | [commands/automation.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/automation.md) |
| `cue` | Create or list reusable project Cues | Saving a repetitive command or agent task at the user's request | [commands/cue.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/cue.md) |
| `orchestrator` | List orchestrator sessions | Viewing which sessions are orchestrators | [commands/orchestrator.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/orchestrator.md) |
| `review` | Start, list, cancel, or submit Orchestrator's native reviewer for a worker's PR (default: this session) | Reviewing implementation PRs owned by workers. For someone else's PR, use a worker that claims it with automatic fixing off | [commands/review.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/review.md) |
| `send` | Send a message to a running agent session | Messaging a live agent; use `--steer` to correct it mid-turn | [commands/send.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/send.md) |
| `report` | Persist a meaningful worker report | Checkpoints, blockers, decisions, outputs, and completion | [commands/report.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/report.md) |
| `artifact` | Register files in the artifact directory as deliverables | Making a finished file appear as one of the session's artifacts | [commands/artifact.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/artifact.md) |
| `preview` | Start a session-owned app or open an exact URL/file | Running and showing the worker's relevant app, Markdown, HTML, PDF, or image | [commands/preview.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/preview.md) |
| `pane` | Split this session's tabs in the desktop window and run commands in its terminal tabs (Developer Mode preview) | Putting a terminal, file or reviewer beside the chat, or running a command in a terminal the user can see | [commands/pane.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/pane.md) |
| `render` | Show a self-contained HTML page inline in a chat thread | Answering with a chart, table, diagram, or mockup | [commands/render.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/render.md) |
| `browser` | Inspect and control the session's shared live browser | Verifying a web app through snapshots, interactions, waits, screenshots, console, and errors | [commands/browser.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/browser.md) |
| `browser` (remote host) | Drive the host's shared remote Chromium, used when `AO_AGENT_BROWSER_URL` is set | Same browser verification on a self-hosted remote host; one browser is shared across sessions | [commands/browser-remote.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/browser-remote.md) |
| `remote-host` | Link this machine to the user's Orchestrator account, or turn its remote access on or off | Setting up a VM or other headless machine so the user's desktops and phones can use it | [commands/remote-host.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/remote-host.md) |
| `start` | Fetch (if needed) and open the Orchestrator desktop app | Launching the app | [commands/start.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/start.md) |
| `stop` | Stop the Orchestrator daemon | Shutting down Orchestrator | [commands/stop.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/stop.md) |
| `status` | Show daemon status | Verifying the daemon is up and healthy | [commands/status.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/status.md) |
| `triage` | Collect diagnostics and draft a problem report, even offline | Reporting a bug | [commands/triage.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/triage.md) |
| `doctor` | Run local health checks | Diagnosing Orchestrator setup problems | [commands/doctor.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/doctor.md) |
| `import` | Import projects from a legacy Orchestrator install | Migrating from the old flat-file store | [commands/import.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/import.md) |
| `version` | Print version information | Checking installed version | - |
| `completion` | Generate shell completion scripts | Setting up tab completion | - |

## Conventions

- For importing existing agent conversations from outside Orchestrator, read [commands/import.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/import.md). This includes Claude Code and Codex terminal sessions.
- Most read commands accept `--json` for machine-readable output.
- `-p / --project` scopes session subcommand lookups to one project.
- Session and project ids are shown by `ao session ls` and `ao project ls`.
- To refer to a session in Orchestrator Chat or the Orchestrator terminal, use the canonical in-app
  link `ao://sessions/{project-id}/{session-id}`. Read
  [commands/session.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/session.md) for identity, encoding, and safety
  rules before constructing one.
- When the user asks to save a repeatable task as a Cue, use `ao cue list --json` to check existing definitions, then `ao cue create`. An agent Cue stores a reusable instruction; a command Cue stores an exact shell command. This agent-facing command can create and read Cues, but cannot edit or delete them. Direct the user to project settings for changes to existing Cues.
- When the user asks to bring a repository's Conductor settings (scripts, run actions, environment variables, prompt) into Orchestrator, read [commands/conductor.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/conductor.md) first.
- `--agent` is an alias for `--harness` on `ao spawn`.
- Every command accepts `-h / --help` for the full flag list.
- For frontend launch or preview selection, read
  [commands/preview.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/preview.md) before acting. Its static-file,
  project-runtime, and artifact rules are load-bearing: artifacts render in the
  Artifacts tab after `ao artifact add`, never through `ao preview` unless the
  user explicitly asks to see one in the Browser panel.
- For page inspection, interaction, or request diagnosis, read
  [commands/browser.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/commands/browser.md). It defines shared-tab behavior
  and the opt-in network policy.

Use [references.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/backend/internal/skillassets/using-ao/references.md) only when a natural-language request does
not map clearly to a command above.
