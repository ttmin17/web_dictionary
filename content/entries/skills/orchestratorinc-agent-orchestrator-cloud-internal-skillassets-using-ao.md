---
slug: orchestratorinc-agent-orchestrator-cloud-internal-skillassets-using-ao
name: internal-using-ao
tagline: "Catalog of the AO Cloud `ao` CLI available inside a cloud sandbox:
  spawning worker sessions, listing them, messaging them, reporting to the
  orchestrat"
summary: "- ao list --json prints machine-readable output; --all includes
  terminated workers (hidden by default). - --agent is an alias for --harness on
  ao spawn. - Session ids are UUIDs shown by ao list. - Every session runs i..."
categories:
  - cloud-infra
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: OrchestratorInc/agent-orchestrator
  subpath: cloud/internal/skillassets/using-ao
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 13138
  last_commit: 2026-10-13T16:22:22Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  rank_current: 151
  velocity_source: snapshot_delta
  sparkline_4w:
    - 12863
    - 13138
    - 13339
    - 13138
  rank_delta: -101
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: OrchestratorInc/agent-orchestrator
  path: cloud/internal/skillassets/using-ao/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:15.227Z
  truncated: false
type: agent_skill
skill:
  skill_name: internal-using-ao
  description: "Catalog of the AO Cloud `ao` CLI available inside a cloud sandbox:
    spawning worker sessions, listing them, messaging them, reporting to the
    orchestrator, killing them, claiming pull requests, and starting AO reviews.
    Use when orchestrating or coordinating AO cloud sessions with the ao CLI."
  folder_path: cloud/internal/skillassets/using-ao
  extra_files:
    - commands/orchestration.md
    - commands/pull-requests.md
tags: []
---

# AO Cloud CLI Catalog
`ao` inside a cloud sandbox is a thin client over the AO control plane. It is a
different, smaller CLI than the desktop `ao`: there is no `ao session`,
`ao project`, `ao status`, `ao preview`, or `ao browser` here. Every command is
`ao help` for the authoritative list.

| Command | What it does | Who can run it | Details |
|---|---|---|---|
| `spawn` | Create a worker session in its own fresh sandbox | Orchestrators only | [commands/orchestration.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/cloud/internal/skillassets/using-ao/commands/orchestration.md) |
| `list` (`ls`, `status`) | List the workers this orchestrator spawned, with branch, status, and PR facts | Orchestrators only | [commands/orchestration.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/cloud/internal/skillassets/using-ao/commands/orchestration.md) |
| `send` | Send a message into a worker's conversation | Orchestrators only | [commands/orchestration.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/cloud/internal/skillassets/using-ao/commands/orchestration.md) |
| `kill` (`delete`, `rm`) | Terminate a worker session and its sandbox | Orchestrators only | [commands/orchestration.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/cloud/internal/skillassets/using-ao/commands/orchestration.md) |
| `report` | Send a message to the orchestrator that spawned this session | Workers with an orchestrator parent | [commands/orchestration.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/cloud/internal/skillassets/using-ao/commands/orchestration.md) |
| `claim-pr` | Attach an existing pull request to this session | Any session | [commands/pull-requests.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/cloud/internal/skillassets/using-ao/commands/pull-requests.md) |
| `review trigger` | Start AO's reviewer on this session's open pull requests | Any session | [commands/pull-requests.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/cloud/internal/skillassets/using-ao/commands/pull-requests.md) |

## Conventions

- `ao list --json` prints machine-readable output; `--all` includes terminated
  workers (hidden by default).
- `--agent` is an alias for `--harness` on `ao spawn`.
- Session ids are UUIDs shown by `ao list`.
- Every session runs in its own isolated sandbox. Never try to reach another
  session's sandbox directly (no ssh, no shared filesystem); the `ao` commands
  above are the only channel between sessions.
- A `send` to a worker whose sandbox is still provisioning is queued by the
  control plane and delivered when the worker's agent is ready — check
  `runtimeConnected` in `ao list --json` to see whether a worker is live.
- Spawning and messaging are idempotent server-side; a command that prints a
  success line has been durably accepted even if the effect is not visible yet.
- Opening pull requests and submitting review verdicts use socket helpers
  described in [commands/pull-requests.md](https://github.com/OrchestratorInc/agent-orchestrator/blob/main/cloud/internal/skillassets/using-ao/commands/pull-requests.md);
  claiming a PR and starting an AO review use `ao`.
