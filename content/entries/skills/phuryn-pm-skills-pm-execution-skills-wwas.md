---
slug: phuryn-pm-skills-pm-execution-skills-wwas
name: wwas
tagline: Create product backlog items in Why-What-Acceptance format —
  independent, valuable, testable items with strategic context. Use when writing
  structured
summary: "Use when: Writing backlog items, creating product increments, breaking
  features into work items, or communicating strategic intent to teams."
categories:
  - productivity-ops
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-execution/skills/wwas
  official_vendor: false
  license: MIT
signals:
  stars: 27797
  last_commit: 2026-11-08T23:10:04Z
  stars_delta_7d: 88
  stars_growth_pct: 0.3
  trending_score: 88.28
  velocity_source: snapshot_delta
  sparkline_4w:
    - 27192
    - 27381
    - 27709
    - 27797
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-execution/skills/wwas/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:57.926Z
  truncated: false
type: agent_skill
skill:
  skill_name: wwas
  description: Create product backlog items in Why-What-Acceptance format —
    independent, valuable, testable items with strategic context. Use when
    writing structured backlog items, breaking features into work items, or
    using the WWA format.
  folder_path: pm-execution/skills/wwas
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

# Why-What-Acceptance (WWA)
Create product backlog items in Why-What-Acceptance format. Produces independent, valuable, testable items with strategic context.

**Use when:** Writing backlog items, creating product increments, breaking features into work items, or communicating strategic intent to teams.

**Arguments:**
- `$PRODUCT`: The product or system name
- `$FEATURE`: The new feature or capability
- `$DESIGN`: Link to design files (Figma, Miro, etc.)
- `$ASSUMPTIONS`: Key assumptions and strategic context

## Step-by-Step Process

1. **Define the strategic Why** - Connect work to business and team objectives
2. **Describe the What** - Keep descriptions concise, reference designs
3. **Write Acceptance Criteria** - High-level, not detailed specifications
4. **Ensure independence** - Items can be developed in any order
5. **Keep items negotiable** - Invite team conversation, not constraints
6. **Make items valuable** - Each delivers measurable user or business value
7. **Ensure testability** - Outcomes are observable and verifiable
8. **Size appropriately** - Small enough for one sprint estimate

## Item Template

**Title:** [What will be delivered]

**Why:** [1-2 sentences connecting to strategic context and team objectives]

**What:** [Short description and design link. 1-2 paragraphs maximum. A reminder of discussion, not detailed specification.]

**Acceptance Criteria:**
- [Observable outcome 1]
- [Observable outcome 2]
- [Observable outcome 3]
- [Observable outcome 4]

## Example WWA Item

**Title:** Implement Real-Time Spending Tracker

**Why:** Users need immediate feedback on spending to make conscious budget decisions. This directly supports our goal to improve financial awareness and reduce overspending.

**What:** Add a real-time spending tracker that updates as users log expenses. The tracker displays their current week's spending against their set budget. Designs available in [Figma link]. This is a reminder of our discussions - detailed specifications will emerge during development conversations with the team.

**Acceptance Criteria:**
- Spending totals update within 2 seconds of logging an expense
- Budget progress is visually indicated with a progress bar
- Users can see remaining budget amount at a glance
- System handles multiple expense categories correctly

## Output Deliverables

- Complete set of backlog items for the feature
- Each item includes Why, What, and Acceptance Criteria sections
- Items are independent and deliverable in any order
- Items are sized for estimation and completion in one sprint
- Strategic context is clear for team decision-making
- Design references are included for implementation guidance

---

### Further Reading

- [How to Write User Stories: The Ultimate Guide](https://www.productcompass.pm/p/how-to-write-user-stories)
