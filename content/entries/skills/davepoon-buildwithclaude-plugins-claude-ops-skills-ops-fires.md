---
slug: davepoon-buildwithclaude-plugins-claude-ops-skills-ops-fires
name: ops-fires
tagline: Production incidents dashboard. Reads ECS health, Sentry errors, CI
  failures. Offers to dispatch fix agents for active fires.
summary: "1. Daemon health: Read
  ${CLAUDEPLUGINDATADIR:-$HOME/.claude/plugins/data/ops-ops-marketplace}/daemon\
  -health.json - Check infra-monitor service status — if not running,
  pre-gathered infra data may be stale - If actionn..."
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
  subpath: plugins/claude-ops/skills/ops-fires
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
  path: plugins/claude-ops/skills/ops-fires/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.603Z
  truncated: false
type: agent_skill
skill:
  skill_name: ops-fires
  description: Production incidents dashboard. Reads ECS health, Sentry errors, CI
    failures. Offers to dispatch fix agents for active fires.
  folder_path: plugins/claude-ops/skills/ops-fires
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: davepoon-buildwithclaude
---

# OPS ► FIRES
## Runtime Context

Before executing, load available context:

1. **Daemon health**: Read `${CLAUDE_PLUGIN_DATA_DIR:-$HOME/.claude/plugins/data/ops-ops-marketplace}/daemon-health.json`
   - Check `infra-monitor` service status — if not running, pre-gathered infra data may be stale
   - If `action_needed` is not null → surface it immediately as a potential fire

2. **Secrets**: AWS credentials are required for ECS/CloudWatch queries.
   ### Secret Resolution
   - First: check `$AWS_ACCESS_KEY_ID` / `$AWS_PROFILE` env vars
   - Then: `doppler secrets get AWS_ACCESS_KEY_ID --plain` (if `doppler` configured in prefs)
   - Then: use `password_manager_config.query_cmd` from preferences
   - Sentry token: `$SENTRY_AUTH_TOKEN` → Doppler `SENTRY_AUTH_TOKEN` → vault

3. **Preferences**: Read `${CLAUDE_PLUGIN_DATA_DIR}/preferences.json` for `secrets_manager` config to know which vault to query.

## CLI/API Reference

### aws CLI

| Command | Usage | Output |
|---------|-------|--------|
| `aws ecs list-services --cluster <name> --query 'serviceArns'` | ECS services | ARN list |
| `aws ecs describe-services --cluster <name> --services <arn> --query 'services[0].{status:status,running:runningCount,desired:desiredCount}'` | Service health | JSON |
| `aws logs tail /ecs/<service> --since 1h --format short` | ECS logs | Log lines (use with Monitor for live) |

### gh CLI (GitHub)

| Command | Usage | Output |
|---------|-------|--------|
| `gh run list --limit 20 --json status,conclusion,name,headBranch,createdAt` | Recent CI runs | JSON array |
| `gh run view <id> --repo <repo> --log-failed` | Failed CI logs | Log output |

### sentry-cli / Sentry API

| Command | Usage | Output |
|---------|-------|--------|
| `sentry-cli issues list --project <slug> --status unresolved` | Unresolved issues | Issue list |
| `curl -H "Authorization: Bearer $SENTRY_AUTH_TOKEN" "https://sentry.io/api/0/projects/<org>/<proj>/issues/?query=is:unresolved"` | API fallback when MCP unavailable | JSON array |

---
## Agent Teams support

If `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` is set, use **Agent Teams** when dispatching multiple fix agents simultaneously. This enables:
- Fix agents share findings (e.g., API agent discovers DB is the root cause → infra agent pivots to DB fix)
- You can prioritize: "CRITICAL ECS issue first, then CI failures"
- Real-time progress: agents report as they find root causes, you can merge fixes in optimal order

**Team setup** (only when flag is enabled, dispatch phase):
```
TeamCreate("fire-fixers")
Agent(team_name="fire-fixers", name="fix-[service]", ...)
```

If the flag is NOT set, use standard parallel subagents.

## Pre-gathered infrastructure data

```!
${CLAUDE_PLUGIN_ROOT}/bin/ops-infra 2>/dev/null || echo '{"clusters":[],"error":"infra check failed"}'
```

## CI failures (last 24h)

```!
${CLAUDE_PLUGIN_ROOT}/bin/ops-ci 2>/dev/null || echo '[]'
```

## External projects health

```!
${CLAUDE_PLUGIN_ROOT}/bin/ops-external 2>/dev/null || echo '[]'
```

## Your task

Analyze the pre-gathered data — including external projects. Then run parallel checks:

1. **ECS health** — parse infra data for unhealthy services, stopped tasks, failed deployments.
2. **Sentry** — if Sentry MCP is connected, query recent unresolved errors. Otherwise note it's unavailable.
3. **CI** — parse CI data for failing pipelines, broken main/dev branches.
4. **GitHub Actions** — `gh run list --limit 20 --json status,conclusion,name,headBranch,createdAt 2>/dev/null`
5. **External projects** — parse ops-external data. Flag `auth_expired` as HIGH (credential rotation needed), `unreachable`/`degraded` as MEDIUM, `not_configured` as LOW.

Classify each issue by severity:

| Severity | Criteria                                          |
| -------- | ------------------------------------------------- |
| CRITICAL | Service down, DB unreachable, auth broken         |
| HIGH     | Elevated error rate, deploy stuck, CI main broken |
| MEDIUM   | Non-critical service degraded, flaky tests        |
| LOW      | Warning-level, non-urgent                         |

---
## Output format

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 OPS ► FIRES DASHBOARD — [timestamp]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL
[service] — [issue] — [since]

HIGH
[service] — [issue] — [since]

MEDIUM
[service] — [issue] — [since]

ECS HEALTH
[cluster] [service] [desired/running] [status]

CI STATUS
[repo] [branch] [workflow] [status] [last run]

SENTRY (top errors, 24h)
[error] [count] [first seen] [project]

EXTERNAL PROJECTS
[alias] [source] [status] [details — e.g. auth_expired, unreachable]

──────────────────────────────────────────────────────
```

Use **batched AskUserQuestion calls** (max 4 options each). Only show relevant actions (e.g., skip dispatch options if no issues found):

AskUserQuestion call 1:
```
  [Dispatch fix agent for [top critical issue]]
  [Dispatch fix agent for [second issue]]
  [View logs for [service]]
  [More...]
```

AskUserQuestion call 2 (only if "More..."):
```
  [Open Sentry dashboard]
  [Open GitHub Actions]
  [All clear — nothing to do]
```

If no fires: show "ALL SYSTEMS OPERATIONAL" with last-checked timestamps.

---
## Dispatch fix agent

When user selects to fix an issue, use `AskUserQuestion` to confirm the scope before dispatching:

```
Dispatch fix agent for: [issue title]
  Severity: [CRITICAL/HIGH/MEDIUM]
  Repo: [repo]
  Error: [brief description]
  
  The agent will:
  - Investigate root cause in [repo]
  - Create feature branch with fix
  - Open PR for review

  [Dispatch agent]  [Show me the logs first]  [Skip — I'll fix manually]
```

On confirmation, spawn an Agent with:

- The error details and logs
- Access to the relevant repo
- Instruction to create a feature branch, fix, and open a PR
- Report back when done or blocked

Use the `agents/infra-monitor.md` agent definition for infra issues.

If `$ARGUMENTS` contains a project alias, filter to that project's services only.

---
## Native tool usage

### Monitor — live service health

Use `Monitor` to stream ECS task logs or GitHub Actions runs when investigating fires:
```
Monitor(command: "aws logs tail /ecs/<service> --follow --since 5m")
```

### Tasks — incident tracking

Use `TaskCreate` for each active fire. Update with `TaskUpdate` as fires are investigated/fixed/escalated.

### WebFetch — status pages

When diagnosing fires, use `WebFetch` to check AWS status page (`https://health.aws.amazon.com/health/status`), Vercel status, or third-party API status pages.

### WebSearch — known outage patterns

Use `WebSearch` to find if the error pattern matches a known AWS/infrastructure issue (e.g., "ECS task stopped CannotPullContainerError" → known ECR throttling).
