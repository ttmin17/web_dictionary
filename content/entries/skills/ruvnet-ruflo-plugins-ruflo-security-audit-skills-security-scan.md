---
slug: ruvnet-ruflo-plugins-ruflo-security-audit-skills-security-scan
name: security-scan
tagline: Run full security scans on the codebase using Ruflo security tools. Use
  when reviewing PRs for security regressions, auditing auth/input-handling code
summary: Run a security scan at the specified depth.
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
  subpath: plugins/ruflo-security-audit/skills/security-scan
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
  path: plugins/ruflo-security-audit/skills/security-scan/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.549Z
  truncated: false
type: agent_skill
skill:
  skill_name: security-scan
  description: Run full security scans on the codebase using Ruflo security tools.
    Use when reviewing PRs for security regressions, auditing
    auth/input-handling code, before production deploys, or when the user asks
    for a security check at quick/standard/deep depth.
  folder_path: plugins/ruflo-security-audit/skills/security-scan
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Run a security scan at the specified depth.

Via CLI:
```bash
npx @claude-flow/cli@latest security scan --depth DEPTH --output json
npx @claude-flow/cli@latest security cve --list
npx @claude-flow/cli@latest security threats --model stride --export md
```

What the scan really does (`v3/@claude-flow/cli/src/commands/security.ts`): phase 1 runs `npm audit` for dependencies, phase 2 greps for hard-coded secrets, phase 3 greps source for risky code patterns. `--type deps|code|all` picks phases; `--depth` only sets how many directory levels phases 2 and 3 descend:

| Depth | Dependencies | Secrets (levels) | Code patterns (levels) |
|-------|--------------|------------------|------------------------|
| quick | yes | 3 | skipped |
| standard | yes | 5 | 5 |
| deep | yes | 10 | 10 |

It is a pattern scanner, not a taint or auth-flow analyser, and `security threats` is a separate STRIDE/DREAD/PASTA template, not a scan of your code. Treat every finding as a lead, not a verdict: open the file at the reported line before reporting it, and drop matches in comments, error strings, generated bundles (`coverage/`, `playwright-report/`) and test fixtures. Say which of the phases above you ran and which you did not.

Store findings via MCP: `mcp__plugin_ruflo-core_ruflo__memory_store({ key: "scan-findings", value: "SUMMARY", namespace: "security-findings" })`

Train patterns: `mcp__plugin_ruflo-core_ruflo__hooks_post-task({ taskId: "security-scan", success: true, storeResults: true })`
