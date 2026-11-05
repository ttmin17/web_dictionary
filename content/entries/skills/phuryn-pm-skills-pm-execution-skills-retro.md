---
slug: phuryn-pm-skills-pm-execution-skills-retro
name: retro
tagline: Facilitate a structured sprint retrospective — what went well, what
  didn't, and prioritized action items with owners and deadlines. Use when
  running a
summary: Run a structured retrospective that surfaces insights and produces
  actionable improvements.
categories:
  - productivity-ops
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-execution/skills/retro
  official_vendor: false
  license: MIT
signals:
  stars: 27709
  last_commit: 2026-10-29T19:09:57Z
  stars_delta_7d: 328
  stars_growth_pct: 1.2
  trending_score: 331.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 26957
    - 27192
    - 27381
    - 27709
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-execution/skills/retro/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.698Z
  truncated: false
type: agent_skill
skill:
  skill_name: retro
  description: Facilitate a structured sprint retrospective — what went well, what
    didn't, and prioritized action items with owners and deadlines. Use when
    running a retrospective, reflecting on a sprint, creating action items from
    team feedback, or learning how to run effective retros.
  folder_path: pm-execution/skills/retro
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

## Sprint Retrospective Facilitator

Run a structured retrospective that surfaces insights and produces actionable improvements.

### Context

You are facilitating a retrospective for **$ARGUMENTS**.

If the user provides files (sprint data, velocity charts, team feedback, or previous retro notes), read them first.

### Instructions

1. **Choose a retro format** based on context (or let the user pick):

   **Format A — Start / Stop / Continue**:
   - **Start**: What should we begin doing?
   - **Stop**: What should we stop doing?
   - **Continue**: What's working well that we should keep?

   **Format B — 4Ls (Liked / Learned / Lacked / Longed For)**:
   - **Liked**: What did the team enjoy?
   - **Learned**: What new knowledge was gained?
   - **Lacked**: What was missing?
   - **Longed For**: What do we wish we had?

   **Format C — Sailboat**:
   - **Wind (propels us)**: What's driving us forward?
   - **Anchor (holds us back)**: What's slowing us down?
   - **Rocks (risks)**: What dangers lie ahead?
   - **Island (goal)**: Where are we trying to get to?

2. **If the user provides raw feedback** (e.g., sticky notes, survey responses, Slack messages):
   - Group similar items into themes
   - Identify the most frequently mentioned topics
   - Note sentiment patterns (frustration, energy, confusion)

3. **Analyze the sprint performance**:
   - Sprint goal: achieved or not?
   - Velocity vs. commitment (over-committed? under-committed?)
   - Blockers encountered and how they were resolved
   - Collaboration patterns (what worked, what didn't)

4. **Generate prioritized action items**:

   | Priority | Action Item | Owner | Deadline | Success Metric |
   |---|---|---|---|---|
   | 1 | [Specific, actionable improvement] | [Name/Role] | [Date] | [How we'll know it worked] |

   - Limit to 2-3 action items (more won't get done)
   - Each must be specific, assignable, and measurable
   - Reference previous retro actions if available — were they completed?

5. **Create the retro summary**:
   ```
   ## Sprint [X] Retrospective — [Date]

   ### Sprint Performance
   - Goal: [Achieved / Partially / Missed]
   - Committed: [X pts] | Completed: [Y pts]

   ### Key Themes
   1. [Theme] — [summary]

   ### Action Items
   1. [Action] — [Owner] — [By date]

   ### Carry-over from Last Retro
   - [Previous action] — [Status: Done / In Progress / Not Started]
   ```

Save as markdown. Keep the tone constructive — the goal is improvement, not blame.
