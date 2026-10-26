---
slug: ruvnet-ruflo-plugins-ruflo-browser-skills-browser-record
name: browser-record
tagline: Open a named, traced browser session into an RVF cognitive container
  with a ruvector trajectory recording every action
summary: "- Starting any browser interaction that is not a one-off throwaway
  probe. - Exploring a site interactively while preserving the trace for later
  replay or analysis. - Establishing a reusable session that downstream ski..."
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
  subpath: plugins/ruflo-browser/skills/browser-record
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
  path: plugins/ruflo-browser/skills/browser-record/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: browser-record
  description: Open a named, traced browser session into an RVF cognitive
    container with a ruvector trajectory recording every action
  folder_path: plugins/ruflo-browser/skills/browser-record
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Browser Record
Primitive on which every other browser skill composes. Opens a named browser session, allocates an RVF container for it, and binds every action to a ruvector trajectory step. **You do not run a browser session in this plugin without invoking this skill (or one that wraps it).**

## When to use

- Starting any browser interaction that is not a one-off throwaway probe.
- Exploring a site interactively while preserving the trace for later replay or analysis.
- Establishing a reusable session that downstream skills (`browser-extract`, `browser-form-fill`, `browser-test`) will compose.

## Steps

1. **Allocate session id and RVF container**:
   ```bash
   SID="$(date +%Y%m%d-%H%M%S)-${TASK_SLUG:-record}"
   npx -y ruvector@0.2.27 rvf create "$SID.rvf" --dimension 384
   npx -y ruvector@0.2.27 hooks trajectory-begin --session-id "$SID" --task "$1"
   ```
2. **Open the browser** via `mcp__plugin_ruflo-core_ruflo__browser_open` with the URL.
3. **Snapshot the initial state**: `browser_snapshot` for the accessibility tree, `browser_screenshot` for a baseline image.
4. **For each interaction**, record a trajectory step before and after:
   ```bash
   npx -y ruvector@0.2.27 hooks trajectory-step \
     --session-id "$SID" --action click --args '{"selector":"#login"}' --result ok
   ```
5. **End cleanly**:
   ```bash
   npx -y ruvector@0.2.27 hooks trajectory-end --session-id "$SID" --verdict pass
   npx -y ruvector@0.2.27 rvf compact "$SID.rvf"
   ```
6. **Index in AgentDB** under `browser-sessions`:
   ```bash
   npx -y @claude-flow/cli@latest memory store --namespace browser-sessions \
     --key "$SID" --value "{rvf_id:$SID,host:...,task:...,verdict:pass}"
   ```

## Caveats

- Until the `browser_session_record` MCP tool ships (ADR-0001 §7), this skill drives the lifecycle from inside its own bash steps. Do not call `mcp__plugin_ruflo-core_ruflo__browser_open` directly without these wrappers.
- The session id format is fixed: `<YYYYMMDD-HHMMSS>-<task-slug>`. Downstream `/ruflo-browser ls` parses this.
- `--with-dom` is expensive (full HTML dump per nav). Off by default.
- AIDefence gates apply at extraction time, not at navigation time. `browser-record` is a primitive; redaction is the responsibility of skills that read content (`browser-extract`, `browser-test`).
