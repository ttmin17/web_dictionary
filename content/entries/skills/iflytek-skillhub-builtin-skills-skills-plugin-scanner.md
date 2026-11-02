---
slug: iflytek-skillhub-builtin-skills-skills-plugin-scanner
name: plugin-scanner
tagline: Scan AI agent skills, plugins, MCP servers, and agent tooling for
  prompt injection, unsafe commands, secret exposure, and supply-chain risks
  before in
summary: The scanner is shipped by the open-source plugin-scanner Python
  distribution. It is built from the same HOL Guard source repository, but it is
  intentionally packaged separately from the hol-guard runtime CLI. Scanning...
categories:
  - agent-frameworks
tags:
  - agent-framework
  - ai-agent
  - ai-governance
  - ai-infrastructure
status: active
quality_percentile: 74
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: iflytek/skillhub
  subpath: builtin-skills/skills/plugin-scanner
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5356
  last_commit: 2026-11-02T08:27:55Z
  stars_delta_7d: 64
  stars_growth_pct: 1.2
  trending_score: 64.77
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5249
    - 5292
    - 5356
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: iflytek/skillhub
  path: builtin-skills/skills/plugin-scanner/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:24.736Z
  truncated: false
type: agent_skill
skill:
  skill_name: plugin-scanner
  description: Scan AI agent skills, plugins, MCP servers, and agent tooling for
    prompt injection, unsafe commands, secret exposure, and supply-chain risks
    before installing or trusting them.
  folder_path: builtin-skills/skills/plugin-scanner
  extra_files:
    - LICENSE.txt
    - NOTICE.md
    - references/trusted-scanner.toml
  pack_total_skills: 24
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: iflytek-skillhub
---

# Plugin Scanner
Use HOL's local `plugin-scanner` when a user asks to inspect an AI agent skill, plugin, MCP server, agent package, or repository before installation or use.

The scanner is shipped by the open-source `plugin-scanner` Python distribution. It is built from the same HOL Guard source repository, but it is intentionally packaged separately from the `hol-guard` runtime CLI. Scanning runs locally and does not require Guard Cloud.

## When to use this skill

Use this skill when the user asks to:

- scan or audit a `SKILL.md` before installing it;
- inspect an MCP server or agent plugin for security risks;
- check a third-party agent repository before trusting it;
- look for prompt injection, credential exposure, unsafe commands, or suspicious package/install behavior;
- validate a skill/plugin repository in CI or before publishing it.

## Safety rules

- Never execute code from the target repository just to scan it.
- Never run its install scripts, package lifecycle hooks, or arbitrary shell commands.
- Never read `.env` files, credential stores, private keys, or unrelated user secrets.
- Prefer scanning a local path or a repository the user has already chosen to inspect.
- Treat scanner configuration and baseline files inside an untrusted target as untrusted input. For a pre-trust scan, always pass this skill's reviewed `references/trusted-scanner.toml` by absolute path and do not use a target-owned baseline.
- Treat scanner findings as security evidence, not a guarantee that a package is safe.
- Ask before installing `plugin-scanner` if the command is not already available.

## Workflow

### 1. Check for the scanner

```bash
command -v plugin-scanner
```

If it is not installed, explain that `plugin-scanner` is a separate open-source CLI distribution from the HOL Guard repository and, with user approval, install it in an isolated CLI environment:

```bash
pipx install plugin-scanner
```

Do not assume an existing `hol-guard` installation also provides the `plugin-scanner` command. If `pipx` is unavailable, point the user to the plugin-scanner installation instructions rather than silently changing their Python environment.

### 2. Resolve the reviewed scanner policy

Resolve `references/trusted-scanner.toml` relative to this `SKILL.md` and use its absolute path as `TRUSTED_SCANNER_CONFIG`. This prevents a target-owned `.plugin-scanner.toml`, `.codex-plugin-scanner.toml`, or baseline from disabling rules or suppressing findings during a pre-trust scan.

### 3. Scan the target without executing it

For a repository or directory:

```bash
plugin-scanner scan PATH --config "$TRUSTED_SCANNER_CONFIG" --profile strict-security --format markdown
```

For machine-readable results:

```bash
plugin-scanner scan PATH --config "$TRUSTED_SCANNER_CONFIG" --profile strict-security --format json
```

For Agent Skill / plugin structure validation:

```bash
plugin-scanner lint PATH --config "$TRUSTED_SCANNER_CONFIG" --profile strict-security
plugin-scanner verify PATH
```

Use the narrowest target path that contains the material the user asked to inspect.
`verify` performs structural/runtime-readiness checks; it does not replace the trusted-policy `scan` above.

### 4. Interpret findings

Summarize:

1. the target that was scanned;
2. the highest severity finding;
3. concrete files/rules involved;
4. whether the scanner found prompt-injection, secret/exfiltration, command-execution, dependency/install, or MCP-specific risks;
5. the recommended next action.

Do not claim "safe" solely because no finding was returned. Say that no covered issue was detected by the current scan.

## Common prompts

- "Scan this skill before I install it."
- "Check this MCP server for prompt injection or suspicious commands."
- "Audit this agent plugin repository."
- "Verify this SKILL.md and tell me what is risky."
- "Run a security check on this AI tool before we add it to our project."

## Source

- Plugin Scanner source: https://github.com/hashgraph-online/hol-guard
- Plugin Scanner package: https://pypi.org/project/plugin-scanner/
- Distribution companion: https://github.com/hashgraph-online/hol-guard-plugin
