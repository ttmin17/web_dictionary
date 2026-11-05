---
slug: nvidia-nemoclaw-skills-nemoclaw-user-guide
name: user-guide
tagline: Find official NemoClaw documentation for installation, configuration,
  operation, or troubleshooting. Also handles requested docs MCP setup.
summary: 1. If the NemoClaw docs MCP server is already configured, use its
  read-only searchDocs tool to find task-relevant docs. 2. Otherwise, use the
  Markdown index and pages below. Docs lookup does not require installing or...
categories:
  - agent-frameworks
tags:
  - ai-agents
  - deep-agents
  - hermes
  - nvidia
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: NVIDIA/NemoClaw
  subpath: skills/nemoclaw-user-guide
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 22952
  last_commit: 2026-11-05T13:00:39Z
  stars_delta_7d: 108
  stars_growth_pct: 0.5
  trending_score: 108.51
  rank_current: 92
  rank_delta: -2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 22767
    - 22844
    - 22952
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: NVIDIA/NemoClaw
  path: skills/nemoclaw-user-guide/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:30.683Z
  truncated: false
type: agent_skill
skill:
  skill_name: user-guide
  description: Find official NemoClaw documentation for installation,
    configuration, operation, or troubleshooting. Also handles requested docs
    MCP setup.
  folder_path: skills/nemoclaw-user-guide
  extra_files:
    - evals/evals.json
    - references/docs-access.md
  pack_total_skills: 2
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nvidia-nemoclaw
---

# NemoClaw Docs for AI Agents
Use the canonical NemoClaw documentation as your source of truth.
Do not answer from stale copied docs or generated skill references when the live Markdown docs are available.

## Retrieval Order

1. If the NemoClaw docs MCP server is already configured, use its read-only `searchDocs` tool to find task-relevant docs.
2. Otherwise, use the Markdown index and pages below. Docs lookup does not require installing or configuring MCP.
3. If MCP is not available, fetch the AI documentation index first: `https://docs.nvidia.com/nemoclaw/llms.txt`.
4. Fetch the specific `.md` page listed in the index or returned by docs search for the user's task.
5. If you only find an HTML documentation URL, replace the `.html` suffix with `.md`, or append `.md` to the route when the URL has no suffix.
6. Prefer the user's selected agent variant. Do not mix variant-specific instructions unless you explain why.

## Optional setup and starting pages

Read [Docs Access](https://github.com/NVIDIA/NemoClaw/blob/main/skills/nemoclaw-user-guide/references/docs-access.md) when the user requests MCP configuration or when
starting an installation needs direct links for the selected agent variant. Ordinary docs questions
can use the index without reading that reference.

## How to Help the User

- Use the selected agent variant from the request or current sandbox. Ask when it cannot be determined and changes the instructions. Check the selected release's support status, including Pi activation.
- Ask only for missing operating-system, provider, model, endpoint, policy, or channel choices that affect the requested task.
- Run commands within the user's requested scope and the environment's permissions. Explain material effects; request authorization only for effects outside that scope.
- Summarize important command output instead of asking the user to paste terminal output into chat.
- Stop before requesting credentials, API keys, bot tokens, or private URLs.
- Never ask the user to paste secrets into chat.
- Use redacted placeholders such as `<PASTE_YOUR_API_KEY_HERE>` in examples.

## Common Task Routing

- Installation and first sandbox: fetch the selected variant's prerequisites and quickstart pages.
- Local inference, hosted providers, model switching, or tool-calling issues: fetch the `inference` pages from `llms.txt`.
- Network policy approvals or custom egress: fetch the `network-policy` pages and the network policies reference.
- Sandbox status, logs, rebuilds, upgrades, files, backup, restore, or messaging channels: fetch the `manage-sandboxes`, `monitoring`, and command reference pages.
- Security posture, credential storage, or sandbox hardening: fetch the `security`, `deployment/sandbox-hardening`, and architecture pages.
- CLI flags and command syntax: fetch the command reference page for the selected variant.
- Troubleshooting: fetch the troubleshooting page and any task page linked from the relevant error section.

## Response Requirements

- Cite the documentation pages used with direct source links.
- Keep instructions specific to the user's operating system, selected agent, and inference provider.
- Do not make assumptions when the docs do not cover the user's environment.
- Verify the requested setup or recovery outcome with the relevant documented check.
