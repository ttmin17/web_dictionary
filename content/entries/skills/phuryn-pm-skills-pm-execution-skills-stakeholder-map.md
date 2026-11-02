---
slug: phuryn-pm-skills-pm-execution-skills-stakeholder-map
name: stakeholder-map
tagline: Build a stakeholder map using a power/interest grid, identify
  communication strategies per quadrant, and generate a communication plan. Use
  when manag
summary: Map stakeholders on a Power × Interest grid and create a tailored
  communication plan for each group.
categories:
  - domain-research
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-execution/skills/stakeholder-map
  official_vendor: false
  license: MIT
signals:
  stars: 27614
  last_commit: 2026-10-29T19:09:57Z
  stars_delta_7d: 233
  stars_growth_pct: 0.9
  trending_score: 234.98
  velocity_source: snapshot_delta
  sparkline_4w:
    - 26957
    - 27192
    - 27381
    - 27614
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-execution/skills/stakeholder-map/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:41.829Z
  truncated: false
type: agent_skill
skill:
  skill_name: stakeholder-map
  description: Build a stakeholder map using a power/interest grid, identify
    communication strategies per quadrant, and generate a communication plan.
    Use when managing stakeholders, preparing for a launch, aligning
    cross-functional teams, or planning stakeholder engagement.
  folder_path: pm-execution/skills/stakeholder-map
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

## Stakeholder Mapping & Communication Plan

Map stakeholders on a Power × Interest grid and create a tailored communication plan for each group.

### Context

You are helping build a stakeholder map for **$ARGUMENTS**.

If the user provides files (org charts, project briefs, team rosters), read them first. If they describe the product or initiative, use that context to infer likely stakeholders.

### Instructions

1. **Identify stakeholders**: List all relevant individuals and groups — executives, engineering leads, designers, marketing, sales, support, legal, finance, external partners, and end users.

2. **Classify each stakeholder** on two dimensions:
   - **Power** (High/Low): Their ability to influence decisions, resources, or outcomes
   - **Interest** (High/Low): How much the project directly affects them or how engaged they are

3. **Place stakeholders in the Power × Interest grid**:

   | | High Interest | Low Interest |
   |---|---|---|
   | **High Power** | **Manage Closely** — Regular 1:1s, involve in decisions, seek their input early | **Keep Satisfied** — Periodic updates, escalate only critical issues |
   | **Low Power** | **Keep Informed** — Regular status updates, invite to demos, gather feedback | **Monitor** — Light-touch updates, available on request |

4. **For each quadrant**, recommend:
   - Communication frequency (daily, weekly, bi-weekly, monthly)
   - Communication format (1:1, email, Slack, meeting, dashboard)
   - Key messages and framing
   - Potential risks if this stakeholder is neglected

5. **Create a communication plan table**:

   | Stakeholder | Role | Power | Interest | Strategy | Frequency | Channel | Key Message |
   |---|---|---|---|---|---|---|---|

6. **Flag potential conflicts**: Identify stakeholders with competing interests and suggest alignment strategies.

Think step by step. Save the stakeholder map as a markdown document.

---

### Further Reading

- [The Product Management Frameworks Compendium + Templates](https://www.productcompass.pm/p/the-product-frameworks-compendium)
- [Team Topologies: A Handbook to Set and Scale Product Teams](https://www.productcompass.pm/p/team-topologies-a-handbook-to-set)
