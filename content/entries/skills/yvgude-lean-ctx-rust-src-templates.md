---
slug: yvgude-lean-ctx-rust-src-templates
name: lean-ctx
tagline: Use LeanCTX Context Gateway tools to select task-relevant code context,
  apply supported controls, reuse local knowledge and inspect recorded evidence.
summary: "lean-ctx shapes context before it reaches you: cached reads,
  compressed shell output, focused search, recovery to exact source. Two rules
  beat every detail:"
categories:
  - security-auth
tags:
  - agentic-coding
  - ai-agents
  - ai-coding
  - ai-governance
status: active
quality_percentile: 73
selection_reason: quality_percentile
first_seen: 2026-03-23T19:48:59
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: yvgude/lean-ctx
  subpath: rust/src/templates
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 3901
  last_commit: 2026-10-26T05:30:24Z
  stars_delta_7d: 13
  stars_growth_pct: 0.3
  trending_score: 13.04
  rank_current: 125
  rank_delta: -23
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3866
    - 3875
    - 3888
    - 3901
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: yvgude/lean-ctx
  path: rust/src/templates/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:59.943Z
  truncated: false
type: agent_skill
skill:
  skill_name: lean-ctx
  description: Use LeanCTX Context Gateway tools to select task-relevant code
    context, apply supported controls, reuse local knowledge and inspect
    recorded evidence. Use when lean-ctx MCP tools (ctx_*) are available or
    file, search or command output needs a focused view.
  folder_path: rust/src/templates
  extra_files:
    - CLAUDE.md
    - CLAUDE_GLOBAL.md
    - PI_AGENTS.md
    - PI_AGENTS_REPLACE.md
    - claude_mod/cockpit.d.ts
    - claude_mod/cockpit.tsx
    - claude_mod/hooks.json
    - claude_mod/plugin.json
    - claude_mod/register.ts
    - claude_mod/render.tsx
  pack_total_skills: 2
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: yvgude-lean-ctx
---

# LeanCTX — Context Gateway for AI Systems
Control what your AI can see. LeanCTX Engine provides local context selection,
supported access and content controls, and evidence of observed context operations
for existing agents: Select → Control → Learn → Prove. Learn means local task and
knowledge continuity, not model training. Recovery depends on source or
archive availability and access permissions. LeanCTX SDK is the separate
integration surface for applications.

lean-ctx shapes context before it reaches you: cached reads, compressed shell
output, focused search, recovery to exact source. Two rules beat every detail:

1. **Fewer round trips beat smaller outputs.** One call that answers the
   question is cheaper than three small ones. Never add a call just to save a
   few hundred tokens.
2. **Never wait by polling.** Do not loop `sleep` + status checks (see below).

## Intent → tool

| You want to… | Call |
|---|---|
| Understand how something works (unknown location) | `ctx_compose(task)` — ranked files + source in one call; use it FIRST instead of search→read→read |
| Find the exact definition of a symbol | `ctx_search(action="symbol", name=…)` |
| Find code by meaning | `ctx_search(action="semantic", query=…)` |
| Find a text/regex pattern | `ctx_search(pattern=…, path=…)` |
| Who calls X / what calls X makes | `ctx_callgraph(action="callers"|"callees", symbol=…)` |
| Read a file you will edit | `ctx_read(path, mode="anchored")` → edit with the host's native edit tool, or `ctx_call(name="ctx_patch", arguments={…})` |
| Read a file only for context | `ctx_read(path, mode="signatures"|"map")`; a range: `mode="lines:N-M"` |
| Re-check a file after editing | `ctx_read(path, mode="diff")` |
| Run a command (build, test, git, …) | `ctx_shell(command)` — output is compressed |
| List files / directory shape | `ctx_glob(pattern)` / `ctx_tree(path, depth)` |
| Remember across sessions | `ctx_session(action="finding"|"decision"|"task", value=…)`; durable project facts: `ctx_call(name="ctx_knowledge", arguments={"action": "remember", …})` |

Do not read or search through `ctx_shell` (`cat`, `sed -n`, `grep`, `rg`):
that bypasses the read cache and symbol index. Use `ctx_read` / `ctx_search`.

## Deferred tools (ToolSearch)

If the host lists lean-ctx tools by name only (Claude Code's ToolSearch), load
what the task needs in **one** call, e.g.
`select:mcp__lean-ctx__ctx_compose,mcp__lean-ctx__ctx_search,mcp__lean-ctx__ctx_read`.
Do not fall back to `ctx_shell` for everything because it happens to be loaded.
A tool named here that your tool list lacks (the default profile shows a
small core) is still callable: `ctx_call(name="ctx_knowledge", arguments={…})`.
`ctx_call(name="ctx_discover_tools", arguments={"query": "…"})` lists all of them.

## Long-running commands

- Prefer the host's own background execution that notifies on completion
  (Claude Code: `Bash` with `run_in_background`, or `Monitor`). Start it, then
  continue other work or end the turn — you will be told when it finishes.
- `ctx_shell(run_in_background=true)` jobs do not notify by themselves. Check
  a job at most once when you actually need its result; never `sleep` in a loop.

## Truncated output

Compressed or archived output ends with a recovery handle. Fetch only the
slice you need: `ctx_expand(id, search=… | head=N | json_path=…)`, or
`ctx_read(path, raw=true)` for exact bytes. Do not re-run the command.

## Without MCP (CLI)

```bash
lean-ctx read <file> -m signatures    # or map | diff | lines:N-M
lean-ctx grep <pattern> [path]
lean-ctx -c "<command>"               # only where the shell is not already wrapped
lean-ctx raw "<command>"              # exact, uncompressed output
```

## Setup

```bash
which lean-ctx || curl -fsSL https://raw.githubusercontent.com/yvgude/lean-ctx/main/skills/lean-ctx/scripts/install.sh | bash
lean-ctx setup        # editor wiring, hooks, rules, this skill
lean-ctx doctor       # verify
```

Docs: https://leanctx.com/docs
