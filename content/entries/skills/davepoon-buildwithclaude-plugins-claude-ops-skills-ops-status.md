---
slug: davepoon-buildwithclaude-plugins-claude-ops-skills-ops-status
name: ops-status
tagline: Lightweight green/red status panel for every configured integration. No
  gather, no actions.
summary: "1. Preferences: cat
  ${CLAUDEPLUGINDATADIR:-$HOME/.claude/plugins/data/ops-ops-marketplace}/prefer\
  ences.json — determines which integrations are configured 2. Daemon health:
  cat ${CLAUDEPLUGINDATADIR}/daemon-health.jso..."
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
  subpath: plugins/claude-ops/skills/ops-status
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
  path: plugins/claude-ops/skills/ops-status/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.609Z
  truncated: false
type: agent_skill
skill:
  skill_name: ops-status
  description: Lightweight green/red status panel for every configured
    integration. No gather, no actions.
  folder_path: plugins/claude-ops/skills/ops-status
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: davepoon-buildwithclaude
---

# OPS ► STATUS
Compact health panel for every configured integration. Much lighter than `/ops:go` — **no gathering, no actions, no heavy API probes.** Each row is tagged with `✓` (ok) / `○` (not configured) / `✗` (missing) / `─` (category unused).

## Runtime Context

Before rendering, load:

1. **Preferences**: `cat ${CLAUDE_PLUGIN_DATA_DIR:-$HOME/.claude/plugins/data/ops-ops-marketplace}/preferences.json` — determines which integrations are configured
2. **Daemon health**: `cat ${CLAUDE_PLUGIN_DATA_DIR}/daemon-health.json` — tells the panel whether the daemon row should show `✓ running` or `○ not running`

Both are consumed by the `bin/ops-status` script internally — this skill does not parse them itself.

## CLI/API Reference

### bin/ops-status

| Command | Usage | Output |
|---------|-------|--------|
| `${CLAUDE_PLUGIN_ROOT}/bin/ops-status` | Render the pretty text panel | ASCII panel with one row per category |
| `${CLAUDE_PLUGIN_ROOT}/bin/ops-status --json` | Machine-readable output | Flat JSON: `{clis, channels, mcps, commerce, voice, monitoring, daemon, registry, generated_at}` |

Each integration resolves to one of four status strings:

| Status | Meaning | Rendered as |
|--------|---------|-------------|
| `ok` | Installed / credentialed / running | `✓` |
| `not-configured` | Known slot, no credential recorded | `○` |
| `missing` | Required but not resolvable | `✗` |
| `skipped` | User explicitly opted out via `/ops:setup` | `○` |

The script is designed to run in **under 1 second** with no network calls.

---
## What this skill does

1. Run the status script and print its output verbatim:

```!
${CLAUDE_PLUGIN_ROOT}/bin/ops-status $ARGUMENTS
```

2. If `$ARGUMENTS` contains `--json`, pass it through — the script emits machine-readable JSON instead of the pretty panel.

3. **Do NOT** probe any integration beyond what the script already did. **Do NOT** spawn a doctor / fix agent. **Do NOT** run API calls. If the user wants deeper checks, point them at:
   - `/ops:doctor` — full health check + auto-repair
   - `/ops:go` — full morning briefing with live data

---
## Example output

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 OPS ► STATUS — Mon 14 Apr 2026 09:45 UTC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CLIs         ✓ gh   ✓ aws  ✓ jq   ✓ node   ✗ wacli
 Channels     ✓ gog   ✓ slack  ○ telegram   ✗ whatsapp
 MCPs         ✓ linear  ✓ sentry  ✓ vercel  ○ gmail
 Commerce     ○ shopify
 Voice        ─ (not configured)
 Monitoring   ✓ datadog  ○ newrelic
 Daemon       ✓ running (6 services, last-sync 2m ago)
 Registry     ✓ 3 projects
──────────────────────────────────────────────────────
```

## JSON shape

```json
{
  "clis": {"gh": "ok", "aws": "ok", "jq": "ok", "node": "ok", "wacli": "missing"},
  "channels": {"whatsapp": "ok", "slack": "ok", "telegram": "not-configured"},
  "mcps": {"linear": "ok", "sentry": "ok", "vercel": "ok", "gmail": "not-configured"},
  "commerce": {"shopify": "not-configured"},
  "voice": {},
  "monitoring": {"datadog": "ok", "newrelic": "not-configured"},
  "daemon": {"state": "ok", "services": 6, "last_sync": "2026-04-14T09:43:00Z"},
  "registry": {"state": "ok", "projects": 3},
  "generated_at": "2026-04-14T09:45:12Z"
}
```

## When to use this vs other skills

| If you want... | Use |
|----------------|-----|
| A quick "is everything connected?" glance | `/ops:status` |
| The full morning briefing with real data | `/ops:go` |
| Deep diagnostics + auto-repair | `/ops:doctor` |
| An interactive dashboard with hotkeys | `/ops:dash` |
