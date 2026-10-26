---
slug: alirezarezvani-claude-skills-agent-launcher-skills-run-without-you
name: run-without-you
tagline: Phase 4 of building a Claude Managed Agent — make it run without you.
  Turn a graded agent into a recurring scheduled deployment (POSIX-cron), an
  event
summary: See ../../references/loops-and-workflows.md.
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: agent-launcher/skills/run-without-you
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 523
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27812
    - 28112
    - 28730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: agent-launcher/skills/run-without-you/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.234Z
  truncated: false
type: agent_skill
skill:
  skill_name: run-without-you
  description: Phase 4 of building a Claude Managed Agent — make it run without
    you. Turn a graded agent into a recurring scheduled deployment (POSIX-cron),
    an event-driven curl trigger, or confirmed on-demand use, then finalize the
    versioned roadmap. Use when the user says "run it every morning", "put it on
    a schedule", "nightly", "weekly", "automate this", "make it recurring", or
    when the orchestrator routes phase=run-without-you. deployment_builder.py
    builds the POST /v1/deployments payload (initial_events must include
    user.message; optionally nests a user.define_outcome so each firing
    self-grades); cron_validator.py validates the 5-field cron + IANA timezone
    and prints the wall-clock DST note; next_directions_writer.py writes
    NEXT-DIRECTIONS.md. No tool makes API calls — the deployment is created via
    BYOK curl. Distinct from grade-iterate (the in-session loop) and wrap-up
    (closeout).
  folder_path: agent-launcher/skills/run-without-you
  extra_files:
    - README.md
    - scripts/cron_validator.py
    - scripts/deployment_builder.py
    - scripts/next_directions_writer.py
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Phase 4 — Run Without You (the recurring loop)
A **scheduled deployment** fires a fresh session on a cron cadence — the agent
runs without you. Each firing can carry its own outcome, nesting the bounded
grade→iterate loop inside every recurring run.

See [`../../references/loops-and-workflows.md`](https://github.com/alirezarezvani/claude-skills/blob/main/agent-launcher/skills/run-without-you/../../references/loops-and-workflows.md).

## Choose the trigger

| Answer | Shape | Tool |
|---|---|---|
| "every morning / weekly / nightly" | recurring cron deployment | `deployment_builder.py` + `cron_validator.py` |
| "when X happens" | event-driven curl (documented, not scheduled) | `deployment_builder.py` (message only) |
| "only when I ask" | on-demand (no deployment) | none — just re-send a `user.message` |

## Workflow (recurring)

1. **Validate the schedule.**
   ```bash
   python3 scripts/cron_validator.py --cron "0 9 * * *" --timezone Europe/Berlin
   ```
   Invalid cron/timezone → exit 1. Read the **DST note**: wall-clock semantics mean
   spring-forward times are skipped and fall-back times fire twice — avoid
   02:00–03:00 in DST zones if exactly-once matters.
2. **Build the deployment payload.**
   ```bash
   python3 scripts/deployment_builder.py \
     --sheet ./my-agent/build-sheet.json --agent-id agent_123 --env-id env_456 \
     --nest-outcome --out ./my-agent/payloads/deployment.json
   ```
   `--nest-outcome` includes the rubric so **each firing self-grades**. The tool
   prints the BYOK curl to create it and to **test it once** with the manual `run`
   endpoint before trusting the schedule.
3. **Test before you trust.** Fire one manual `run`, read the verdict, only then
   leave the cron in place. Pin the agent version in the deployment once it passes.
4. **Finalize the roadmap.**
   ```bash
   python3 scripts/next_directions_writer.py \
     --sheet ./my-agent/build-sheet.json --loop-shape cron-loop --last-verdict satisfied --out-dir ./my-agent
   ```
5. **Advance + hand to wrap-up.** `goal_state.py set --phase wrap-up`, then invoke
   the `wrap-up` skill.

## Hard rules

- **Test with a manual `run` first.** Never commit a schedule you haven't fired once.
- **Safety rails on by default.** `always_ask` MCP, `limited` networking where you
  can, `read_only` untrusted memory, `max_iterations` per firing, workspace spend
  limit. There is no spend cap inside CMA.
- **DST is wall-clock.** Surface the note; pick safe times.
- **≤1,000 deployments/org.**

## Forcing-question library (recommend + cite)

1. "Cadence, event, or on-request?" *Recommend:* on-request v0 → cadence once graded.
   *Cite:* loops-and-workflows.md.
2. "Should each firing self-grade?" *Recommend:* yes — nest the outcome. *Cite:*
   loops-and-workflows.md (nesting rule).
3. "Which timezone, and is the time DST-safe?" *Recommend:* avoid 02:00–03:00 in
   DST zones. *Cite:* cma-primitives.md (wall-clock DST).
4. "Did you fire one manual run first?" *Recommend:* always. *Cite:* this SKILL.

## Tools

- `scripts/deployment_builder.py` — POST /v1/deployments payload (+ test-run curl).
- `scripts/cron_validator.py` — 5-field cron + IANA tz + DST note.
- `scripts/next_directions_writer.py` — write/refresh NEXT-DIRECTIONS.md.
