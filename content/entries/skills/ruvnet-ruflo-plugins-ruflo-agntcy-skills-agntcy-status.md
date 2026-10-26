---
slug: ruvnet-ruflo-plugins-ruflo-agntcy-skills-agntcy-status
name: agntcy-status
tagline: Show AGNTCY/SLIM/CASA integration status — whether the optional SLIM
  runtime package is installed, whether a SLIM endpoint is configured, which
  transp
summary: Report what can be measured on this machine, and say "unknown" for
  anything that cannot. Never invent a healthy status.
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
  subpath: plugins/ruflo-agntcy/skills/agntcy-status
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
  path: plugins/ruflo-agntcy/skills/agntcy-status/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.542Z
  truncated: false
type: agent_skill
skill:
  skill_name: agntcy-status
  description: Show AGNTCY/SLIM/CASA integration status — whether the optional
    SLIM runtime package is installed, whether a SLIM endpoint is configured,
    which transport is the default, and what the agntcy mod has seen this
    session. Use when the user asks "is AGNTCY configured?", "show SLIM/CASA
    status", or "is AGNTCY/IOC integration active?". Read-only; makes no network
    call.
  folder_path: plugins/ruflo-agntcy/skills/agntcy-status
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Report what can be measured on this machine, and say "unknown" for anything that cannot. Never invent a healthy status.

## Steps

1. **Endpoint** — run `test -n "$RUFLO_AGNTCY_SLIM_ENDPOINT" && echo set || echo unset`. Report only set or unset; do not print the value (an endpoint can carry credentials).
2. **Runtime package** — run `npm ls @agntcy/slim-bindings 2>&1 | tail -3` from the project root. `(empty)` or `ERR! missing` means not installed (the supported default: the package is an `optionalDependency`). Do not `import()` it from the shell; resolving a package runs its code.
3. **Active transport** — local in-process transport is the default. There is no read-only transport status command: `ruflo transport` with no arguments only prints help, and `ruflo transport use slim` is a switch that contacts the configured endpoint, so do not run it just to check status. Report "local (default)" unless the user says they switched.
4. **Mod counters** — `Read` `.claude-flow/agntcy-mod/status.json` if it exists (`calls`, `blocked`, `guard`, `updatedMs`). Missing file means the mod has not run in this project yet.
5. **CASA, IOC events, identity attributes** — the CASA policy compiler ships in this plugin (`src/casa`), but runtime enforcement is not wired into the ruflo CLI (no CASA reference in `v3/@claude-flow/*/src`), and Layer 9 events and OTel attributes are design items in ADR-380 §§4-5. Report these as "compiler present, enforcement not wired in the CLI" and "not implemented"; do not report them as enabled.

## Output

One short table: endpoint (set/unset), package (installed version or absent), transport (local/slim), mod counters, CASA/IOC/identity (state from step 5). If the endpoint is set but the package is absent, say the transport falls back to local and point to ADR-380 §1 for setup.
