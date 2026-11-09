---
slug: mcp-use-mcp-use-skills-manufact-cloud
name: manufact-cloud
tagline: Deploy and manage MCP servers on Manufact Cloud with the mcp-use CLI,
  including authentication, projects, environments, deployments, domains,
  organiza
summary: Install or refresh the bundled guidance with mcp-use skills install. It
  copies the installed version's skills into .agents/skills, .claude/skills, and
  .cursor/skills in the selected project and works offline.
categories:
  - agent-frameworks
tags:
  - agent-plugins
  - agentic-framework
  - apps-sdk
  - chatgpt
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2026-11-09
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: mcp-use/mcp-use
  subpath: skills/manufact-cloud
  official_vendor: false
  license: MIT
signals:
  stars: 10859
  last_commit: 2026-11-07T20:09:55Z
  stars_delta_7d: 11
  stars_growth_pct: 0.1
  trending_score: 11.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 10785
    - 10814
    - 10848
    - 10859
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mcp-use/mcp-use
  path: skills/manufact-cloud/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:26:52.183Z
  truncated: false
type: agent_skill
skill:
  skill_name: manufact-cloud
  description: Deploy and manage MCP servers on Manufact Cloud with the mcp-use
    CLI, including authentication, projects, environments, deployments, domains,
    organizations, publishing checks, and YAML alerts.
  folder_path: skills/manufact-cloud
  extra_files:
    - references/alerts.md
    - references/cloud-commands.md
    - references/deployments.md
    - references/management.md
  pack_total_skills: 7
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mcp-use-mcp-use
---

# Manufact Cloud CLI
Use the CLI executable selected by the user (normally `mcp-use`). Cloud commands
work with any MCP framework.
Check `mcp-use <command> --help` before using unfamiliar flags; this skill ships
with the CLI version whose commands it describes.

Install or refresh the bundled guidance with `mcp-use skills install`. It copies
the installed version's skills into `.agents/skills`, `.claude/skills`, and
`.cursor/skills` in the selected project and works offline.

## Choose output for the task

- For a human reviewing results or taking screenshots, omit `--json`. Commands
  print readable summaries and tables; narrow tables become labeled records.
  Deploy and checklist waits show a spinner in an interactive terminal.
- For an agent parsing results or a CI script, use `--json` and the exit code.
  JSON output stays machine-readable and suppresses spinners. Do not parse
  terminal columns or depend on colors or human wording.
- Checklist reports group results by category, expand findings and fix guidance,
  and show **Client Readiness**. `checklist get <run-id> --verbose` includes all
  passing checks and full finding details. Read the checklist reference below
  before interpreting readiness or a raw failed check as a publishing blocker.

## Agent workflow

- Pass `--json` when consuming output. A command writes one JSON value to
  stdout, including errors. Exit 0 means success, 1 operational failure, and
  2 invalid or missing input. Errors contain `error.code`, `error.message`,
  and `error.nextSteps` with commands to resolve the problem.
- In CI, provide `MANUFACT_TOKEN` through the secret store. `MCP_USE_API_KEY`
  is the fallback. Check identity with `mcp-use whoami --json`.
- Without a terminal, `mcp-use login --json` returns a device code and exits.
  Present the verification URL and user code, then run the returned
  `login --device-code <code>` command after approval. An onboarding prompt
  may already include an approved device code.
- Resolve project context before changing a server. `link --server <id-or-slug>`
  saves `.manufact/project.json`. Server selection is `--server`,
  `MANUFACT_SERVER`, then that link. Organization selection is `--org`,
  `MANUFACT_ORG`, the link, the saved active organization, then the account
  default. Use `org use <id-or-slug>` to change the active organization.
- `deploy` waits for completion by default. With `--no-wait`, retain the
  returned deployment ID and inspect `deployments get <id> --json` later.
  Use `logs <id> --build` to diagnose a failed build or start.
- Use the returned `dashboardUrl` when a human needs the dashboard. Keep
  credentials and environment variable values out of chat, logs, and commits.

## Choose a command

- **Deploy or redeploy:** read [deployment workflows](https://github.com/mcp-use/mcp-use/blob/main/skills/manufact-cloud/references/deployments.md).
- **Environment variables and configuration:** read
  [server management](https://github.com/mcp-use/mcp-use/blob/main/skills/manufact-cloud/references/management.md).
- **Domains, GitHub, organizations, and publishing checks:** read
  [other Cloud commands](https://github.com/mcp-use/mcp-use/blob/main/skills/manufact-cloud/references/cloud-commands.md).
- **Create or update alerts:** read [alert rules](https://github.com/mcp-use/mcp-use/blob/main/skills/manufact-cloud/references/alerts.md) for the
  dashboard YAML format, metric selection, and useful recovery conditions.

`rm` is the destructive verb, with `remove` as an alias. Confirm the target
organization and server from the user's request before running destructive
commands. Use existing authorization when the user already requested the change.
