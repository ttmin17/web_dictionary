---
slug: davepoon-buildwithclaude-plugins-origin-skills-init
name: init
tagline: Frictionless setup. Detects missing daemon, installs it, configures
  local memory, and verifies the full plugin → MCP → daemon round-trip. Run
  after `/
summary: Run in order. Stop and report at the first failure that needs human
  attention. Otherwise, push through automatically.
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/origin/skills/init
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/origin/skills/init/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.622Z
  truncated: false
type: agent_skill
skill:
  skill_name: init
  description: >
    Frictionless setup. Detects missing daemon, installs it, configures local
    memory, and verifies the full plugin → MCP → daemon round-trip. Run after
    `/plugin install origin@7xuanlu`, or any time the user says "set up origin",
    "is origin working", "fix origin".
  folder_path: plugins/origin/skills/init
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# /init
Self-healing setup. Goal: 30 seconds, two user actions max (install plugin,
type /init). Default backend is local memory — no local model, no API key, no
prompts. Local model and Anthropic key are opt-in upgrades documented in
`/help`.

## Steps

Run in order. Stop and report at the first failure that needs human
attention. Otherwise, push through automatically.

### 1. Daemon health probe

```
Bash: curl -fsS -m 1 http://127.0.0.1:7878/api/health
```

- 200 OK → skip to step 4.
- Anything else → step 2.

### 2. Bootstrap (auto-install if missing)

Detect whether the `origin` CLI is on PATH:

```
Bash: command -v origin >/dev/null 2>&1 && echo present || echo absent
```

If `absent`, run the installer (no human prompts):

```
Bash: curl -fsSL https://raw.githubusercontent.com/7xuanlu/origin/v0.6.1/install.sh | bash
```

Then add it to PATH for the current session and configure local memory
non-interactively:

```
Bash: export PATH="$HOME/.origin/bin:$PATH" && origin setup --basic && origin install
```

If `present` (CLI exists, daemon down), just install + start:

```
Bash: origin setup --basic 2>/dev/null || true; origin install
```

`origin setup --basic` is idempotent — safe to re-run. `origin install`
writes the launchd plist and starts the daemon.

### 3. Re-probe daemon health

```
Bash: for i in 1 2 3 4 5; do curl -fsS -m 1 http://127.0.0.1:7878/api/health && break; sleep 1; done
```

If the daemon still isn't reachable after ~5s, surface the error and stop.
Likely cause: launchd plist load failure, port 7878 occupied by another
process, or macOS Tahoe Metal init issue (daemon degrades but still binds —
check `lsof -ti :7878`).

### 4. Doctor (verify backend)

Call the `origin` MCP server's `doctor` tool:

```
doctor()
```

Expected: local memory configured (no model, no key). Capture the mode
string for the final report.

### 5. MCP round-trip

```
context()
```

Pass → continue. Fail → MCP not wired. Tell user:
"origin-mcp didn't respond. Restart Claude Code so the plugin's
`.mcp.json` re-spawns the server."

### 6. Ready report

Print:

```
Origin ready.
  Daemon:   up on 127.0.0.1:7878
  Mode:     <mode from doctor()>
  MCP:      connected
  Data:     ~/.origin/  (pages, sessions, db symlink)
  Try:      /brief, /capture <thing>, /recall <query>, /help
```

If this was the first /init invocation in the session, dispatch `/help`
once so the user sees the verb cheat-sheet without asking.

## Optional upgrades (don't auto-run)

Mention these in the ready report only if the user explicitly asks for
"richer features" or asks about model-backed extraction:

- `origin model install` — local Qwen for distill cycles.
- `origin key set anthropic` — Anthropic for stronger synthesis.

Default flow ignores both. Storage, search, recall, and MCP memory all
work in local memory mode.

## When to use

- Right after `/plugin install origin@7xuanlu`.
- Hook printed "daemon down — run /origin:init".
- User says "set up origin", "is it working", "reinstall origin".

## When NOT to use

- Daemon already verified this session → `/brief` instead.
- Editing one config field → `origin doctor` or settings file directly.
