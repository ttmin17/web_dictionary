---
slug: awslabs-cli-agent-orchestrator
name: cli-agent-orchestrator
tagline: Multi-agent orchestration for AI coding CLIs — Claude Code, Kiro,
  Codex, and more, coordinated in isolated tmux sessions
summary: "<!-- An absolute raw URL, not a repo-relative path: this file is also
  the PyPI long description (see readme in pyproject.toml) and PyPI cannot
  resolve relative paths."
categories:
  - agent-frameworks
tags:
  - agent-orchestration
  - ai-agents
  - ai-coding-assistant
  - antigravity
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: awslabs/cli-agent-orchestrator
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1473
  last_commit: 2026-10-26T06:54:46Z
  stars_delta_7d: 22
  stars_growth_pct: 1.5
  trending_score: 22.33
  rank_current: 60
  rank_delta: -29
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1394
    - 1418
    - 1451
    - 1473
language: en
needs_keys: false
prerequisites:
  - Python >= 3.10
  - uv
readme_source:
  repo: awslabs/cli-agent-orchestrator
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:38:13.375Z
  truncated: false
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - cli-agent-orchestrator
  env_vars: []
  confidence: manifest
---

<!-- An absolute raw URL, not a repo-relative path: this file is also the PyPI
     long description (see `readme` in pyproject.toml) and PyPI cannot resolve
     relative paths.

     The banner is used rather than the bare mark because it supplies its own
     background, so the mark's navy never has to survive a backdrop it cannot
     see. The bare mark would need a <picture>/prefers-color-scheme swap, since
     that navy contrasts at only 1.77:1 on GitHub's dark theme, and PyPI allows
     <img> but not <picture>, so that markup would either be dropped or escaped
     into visible tag soup depending on how it sanitizes.

     The same constraint means the banner cannot be swapped per theme either.
     It is light, matching PyPI and GitHub's light theme, and it shows as a
     bright panel on GitHub's dark theme. That is a deliberate trade, not an
     oversight. Keep in sync with README.zh-CN.md. -->
<p align="center">
  <img src="https://raw.githubusercontent.com/awslabs/cli-agent-orchestrator/main/docusaurus/static/img/cao-social-card.png"
       alt="" width="640">
</p>

# CLI Agent Orchestrator (CAO)

[English](https://github.com/awslabs/cli-agent-orchestrator/blob/main/README.md) | [简体中文](https://github.com/awslabs/cli-agent-orchestrator/blob/main/README.zh-CN.md)

[![PyPI version](https://img.shields.io/pypi/v/cli-agent-orchestrator.svg)](https://pypi.org/project/cli-agent-orchestrator/)
[![Python versions](https://img.shields.io/pypi/pyversions/cli-agent-orchestrator.svg)](https://pypi.org/project/cli-agent-orchestrator/)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/awslabs/cli-agent-orchestrator)

**CLI Agent Orchestrator (CAO)** coordinates multiple AI coding CLIs so a
supervisor can delegate work to specialist agents in parallel or sequence.

📚 **[Documentation](https://awslabs.github.io/cli-agent-orchestrator/)** —
guides, reference, and two interactive courses.

## What CAO does

CAO runs a local `cao-server`, starts provider CLIs in isolated terminal
sessions, and gives a supervisor tools for coordinating workers. The agents
remain full CLI processes with their native authentication and capabilities.
See [CODEBASE.md](https://github.com/awslabs/cli-agent-orchestrator/blob/main/CODEBASE.md) for the runtime architecture and package layout.

## Prerequisites

Install:

- Python 3.10 or later
- tmux 3.3 or later
- [uv](https://docs.astral.sh/uv/)
- At least one supported provider CLI, authenticated before you launch CAO:
  [Kiro CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/kiro-cli.md), [Claude Code](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/claude-code.md),
  [Codex CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/codex-cli.md), [Antigravity CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/antigravity-cli.md),
  [Hermes](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/hermes.md), [Kimi CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/kimi-cli.md),
  [MiniMax Code](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/minimax-code.md),
  [GitHub Copilot CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/copilot-cli.md),
  [OpenCode CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/opencode-cli.md), [Oh My Pi(OMP) CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/omp-cli.md),
  [Cursor CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/cursor-cli.md), or
  [Grok Build CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/grok-cli.md)

The focused provider guides contain installation, authentication, and
provider-specific behavior.

## Install CAO

Install the current `main` branch as a uv tool:

```bash
uv tool install git+https://github.com/awslabs/cli-agent-orchestrator.git@main --upgrade
cao --help
```

For a tagged release, install
[`cli-agent-orchestrator` from PyPI](https://pypi.org/project/cli-agent-orchestrator/).
See [DEVELOPMENT.md](https://github.com/awslabs/cli-agent-orchestrator/blob/main/DEVELOPMENT.md) for a source checkout.
For container-based installation, see the
[devcontainer feature](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/devcontainer-feature.md).

To update an existing CAO installation:

```bash
cao update
```

See [Updating CAO](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/updating.md) for source-aware behavior and edge cases.

## First supervisor launch

The unqualified commands below use CAO's default Kiro CLI provider. If you
installed a different provider, follow its focused guide above for the
provider override while keeping the same sequence.

1. Install the built-in supervisor profile:

   ```bash
   cao install code_supervisor
   ```

2. In terminal A, start the local server and leave it running:

   ```bash
   cao-server
   ```

3. In terminal B, change to the project directory the agents should work in,
   then launch the supervisor:

   ```bash
   cd /path/to/your/project
   cao launch --agents code_supervisor
   ```

4. Observe the supervisor in the attached launch terminal, open the
   [Web UI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/web-ui.md) at `http://localhost:9889`, or follow the
   [tmux guide](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/tmux.md) to attach to its session.

5. Stop the named session when finished:

   ```bash
   cao shutdown --session {session-name}
   ```

   To stop every CAO session instead, run `cao shutdown --all`.

## Where to go next

### Operate CAO

- [Control-plane selection](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/control-planes.md): choose the Web UI, shell
  CLI, operations MCP server, or plugins.
- [Web UI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/web-ui.md) and [MCP Apps](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/mcp-apps.md): browser and
  host-rendered fleet interfaces.
- [Flows](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/flows.md) and [workflows](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/workflows.md): scheduled runs and
  multi-step pipelines.
- [Launch decisions](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/decisions.md): local routing settings and content-free records.
- [Skills](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/skills.md): install, scope, and author reusable agent guidance.
- [Skills lifecycle example](https://github.com/awslabs/cli-agent-orchestrator/blob/main/examples/skills/README.md): install, discover,
  load, apply, update, and remove a reusable skill in an isolated home.
- [Memory](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/memory.md) and [self-learning](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/self-learning.md):
  persistent cross-session memory, and the opt-in loop that turns workflow
  outcomes into lessons and promoted instructions.
- [AI-DLC portfolio example](https://github.com/awslabs/cli-agent-orchestrator/blob/main/examples/aidlc-portfolio/README.md): coordinate
  parallel AI-DLC intents across repositories and isolated worktrees.
- [Cross-zone robot transport](https://github.com/awslabs/cli-agent-orchestrator/blob/main/examples/robotics/cross-zone-transport/README.md):
  coordinate simulated transport, measured custody handoffs, and independent checks.
- [Self-hosted decision model](https://github.com/awslabs/cli-agent-orchestrator/blob/main/examples/decision-model-host/README.md): run the open
  JevK5-4B decision model locally or on AWS (CDK), behind a loopback-only `/v1/systemone` API.
- [Tool restrictions](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/tool-restrictions.md): roles, allowlists, and
  provider enforcement.
- [Kubernetes deployment](https://github.com/awslabs/cli-agent-orchestrator/blob/main/examples/cao-clusters/kubernetes/eks/README.md): run a supervisor and worker fleet on
  Amazon EKS, with shared workspace, per-pod state, and credential delivery.
- [Updating CAO](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/updating.md): update an installed uv tool.

### Configure and integrate

- [Ephemeral agents](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/ephemeral-agents.md): opt-in create-only profiles and their limits.
- [Agent profiles](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/agent-profile.md): profile schema, discovery, provider
  selection, and overrides.
- [HTTP API and PTY WebSocket](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/api.md): route-family overview and terminal
  streaming contract.
- [Agent plugins](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/agent-plugins.md): installing portable Agent Plugins
  1.0.0 packages, and CAO's own operator and contributor packages. Every
  surface — the CLI, TUI, web panel, and the `/plugins*` HTTP routes — is built
  but **gated off by default** pending a naming decision. Set
  `CAO_AGENT_PLUGINS_ENABLED` to open it; until then the routes answer `404`,
  exactly as an unregistered path would.
- [Event plugins](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/plugins.md): outbound events, installation, and authoring.
- Provider behavior:
  [Kiro CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/kiro-cli.md), [Claude Code](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/claude-code.md),
  [Codex CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/codex-cli.md), [Antigravity CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/antigravity-cli.md),
  [Hermes](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/hermes.md), [Kimi CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/kimi-cli.md),
  [MiniMax Code](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/minimax-code.md),
  [GitHub Copilot CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/copilot-cli.md),
  [OpenCode CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/opencode-cli.md), [Oh My Pi(OMP) CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/omp-cli.md),
  [Cursor CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/cursor-cli.md), and
  [Grok Build CLI](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/grok-cli.md).
- [Security policy](https://github.com/awslabs/cli-agent-orchestrator/blob/main/SECURITY.md): vulnerability reporting and deployment
  guidance.

### Contribute

- [Codebase guide](https://github.com/awslabs/cli-agent-orchestrator/blob/main/CODEBASE.md): runtime surfaces, package ownership, and data
  flow.
- [Development guide](https://github.com/awslabs/cli-agent-orchestrator/blob/main/DEVELOPMENT.md): local setup, testing, and verification.
- [Release guide](https://github.com/awslabs/cli-agent-orchestrator/blob/main/docs/RELEASING.md): maintainer release process.

## Contributing

See [CONTRIBUTING.md](https://github.com/awslabs/cli-agent-orchestrator/blob/main/CONTRIBUTING.md) and [DEVELOPMENT.md](https://github.com/awslabs/cli-agent-orchestrator/blob/main/DEVELOPMENT.md)
before submitting changes. Documentation changes must also follow the
[documentation maintenance rule](https://github.com/awslabs/cli-agent-orchestrator/blob/main/CODEBASE.md#documentation-maintenance).

## License

This project is licensed under the Apache License 2.0. See
[LICENSE](https://github.com/awslabs/cli-agent-orchestrator/blob/main/LICENSE).
