---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-agenttrace-session-audit
name: agenttrace-session-audit
tagline: Audit local AI coding-agent sessions with agenttrace for cost, tokens,
  tool failures, latency, anomalies, health, diffs, and CI gates.
summary: 1. Prefer the installed agenttrace binary when it is available on PATH.
  2. If the binary is not available and the current directory is the
  luoyuctl/agenttrace repository, use cargo run -q -p agenttrace --. 3. Start
  wi...
categories:
  - security-auth
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
  subpath: plugins/all-skills/skills/agenttrace-session-audit
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
  path: plugins/all-skills/skills/agenttrace-session-audit/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.577Z
  truncated: false
type: agent_skill
skill:
  skill_name: agenttrace-session-audit
  description: Audit local AI coding-agent sessions with agenttrace for cost,
    tokens, tool failures, latency, anomalies, health, diffs, and CI gates.
  folder_path: plugins/all-skills/skills/agenttrace-session-audit
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# agenttrace Session Audit
Use this skill when session logs need an operational read: spend, token burn, cache use, tool failures, retry loops, latency, health, anomalies, and CI gate readiness.

## Workflow

1. Prefer the installed `agenttrace` binary when it is available on `PATH`.
2. If the binary is not available and the current directory is the `luoyuctl/agenttrace` repository, use `cargo run -q -p agenttrace --`.
3. Start with discovery unless the user gave a specific file or directory:

```bash
agenttrace --doctor
agenttrace --overview
```

4. For a fast human report, use Markdown:

```bash
agenttrace --overview -f markdown -o agenttrace-overview.md
```

5. For automation or CI, use JSON or health gates:

```bash
agenttrace --overview -f json -o agenttrace-overview.json
agenttrace --overview --fail-under-health 80 --fail-on-critical --max-tool-fail-rate 15
```

6. For a single recent session:

```bash
agenttrace --latest
agenttrace --latest -f json
```

7. For a specific export or session directory:

```bash
agenttrace path/to/session-or-export.json
agenttrace --overview -d path/to/session-dir
```

## Report Focus

- Lead with the highest-risk sessions and the reason they matter.
- Call out token/cost waste, repeated tool failures, retry loops, long gaps, and low health scores.
- When proposing a CI gate, include the exact `agenttrace` command and threshold.
- If no sessions are detected, run `agenttrace --doctor` and report the detected agent directories and next step.
- Report the session capability level (`Detailed`, `Aggregate`, or `Limited`) before relying on latency or step evidence.
- Treat Tool Steps as metadata-only evidence. Do not imply that Aggregate or Limited sources have a complete execution trace.

## Guardrails

- Treat prompts, code, and session contents as local/private data. Do not upload logs to external services.
- Do not invent metrics. If a parser cannot infer cost, model, or latency, say which field is missing.
- Do not compare missing event-level evidence as zero latency or zero failures; mark it unavailable.
- Do not overwrite user reports unless the user asked for that output path.
