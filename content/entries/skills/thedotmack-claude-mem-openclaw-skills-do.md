---
slug: thedotmack-claude-mem-openclaw-skills-do
name: do
tagline: Execute a phased implementation plan using subagents. Use when asked to
  execute, run, or carry out a plan — especially one created by make-plan.
summary: "- Each phase uses fresh subagents where noted (or when context is
  large/unclear) - Assign one clear objective per subagent and require evidence
  (commands run, outputs, files changed) - Do not advance to the next step..."
categories:
  - databases-memory
tags:
  - ai-agents
  - ai-memory
  - anthropic
  - artificial-intelligence
status: active
quality_percentile: 72
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: thedotmack/claude-mem
  subpath: openclaw/skills/do
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 103202
  last_commit: 2026-10-25T21:00:05Z
  stars_delta_7d: 1527
  stars_growth_pct: 1.5
  trending_score: 1549.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 97519
    - 100334
    - 101675
    - 103202
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: thedotmack/claude-mem
  path: openclaw/skills/do/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:14.401Z
  truncated: false
type: agent_skill
skill:
  skill_name: do
  description: Execute a phased implementation plan using subagents. Use when
    asked to execute, run, or carry out a plan — especially one created by
    make-plan.
  folder_path: openclaw/skills/do
  extra_files: []
  pack_total_skills: 33
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: thedotmack-claude-mem
---

# Do Plan
You are an ORCHESTRATOR. Deploy subagents to execute *all* work. Do not do the work yourself except to coordinate, route context, and verify that each subagent completed its assigned checklist.

## Execution Protocol

### Rules

- Each phase uses fresh subagents where noted (or when context is large/unclear)
- Assign one clear objective per subagent and require evidence (commands run, outputs, files changed)
- Do not advance to the next step until the assigned subagent reports completion and the orchestrator confirms it matches the plan

### During Each Phase

Deploy an "Implementation" subagent to:
1. Execute the implementation as specified
2. COPY patterns from documentation, don't invent
3. Cite documentation sources in code comments when using unfamiliar APIs
4. If an API seems missing, STOP and verify — don't assume it exists

### After Each Phase

Deploy subagents for each post-phase responsibility:
1. **Run verification checklist** — Deploy a "Verification" subagent to prove the phase worked
2. **Anti-pattern check** — Deploy an "Anti-pattern" subagent to grep for known bad patterns from the plan
3. **Code quality review** — Deploy a "Code Quality" subagent to review changes
4. **Commit only if verified** — Deploy a "Commit" subagent *only after* verification passes; otherwise, do not commit

### Between Phases

Deploy a "Branch/Sync" subagent to:
- Push to working branch after each verified phase
- Prepare the next phase handoff so the next phase's subagents start fresh but have plan context

## Failure Modes to Prevent

- Don't invent APIs that "should" exist — verify against docs
- Don't add undocumented parameters — copy exact signatures
- Don't skip verification — deploy a verification subagent and run the checklist
- Don't commit before verification passes (or without explicit orchestrator approval)
