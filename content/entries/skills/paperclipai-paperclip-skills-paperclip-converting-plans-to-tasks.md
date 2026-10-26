---
slug: paperclipai-paperclip-skills-paperclip-converting-plans-to-tasks
name: converting-plans-to-tasks
tagline: Decide whether Paperclip work needs delegation, and connect justified
  tasks with owners and real dependencies. Use when turning an authorized plan
  int
summary: "Create a separate task only for a useful boundary: another owner or
  permission, independent parallel output, a real prerequisite, independent
  review, or substantial follow-up that needs its own lifecycle. Check the
  av..."
categories:
  - agent-frameworks
tags:
  - acpx
  - agent-orchestration
  - agent-skills
  - agentic-ai
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: paperclipai/paperclip
  subpath: skills/paperclip-converting-plans-to-tasks
  official_vendor: false
  license: MIT
signals:
  stars: 107406
  last_commit: 2026-10-26T06:44:43Z
  stars_delta_7d: 3106
  stars_growth_pct: 3
  trending_score: 3198.5
  velocity_source: snapshot_delta
  sparkline_4w:
    - 101411
    - 104300
    - 107406
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: paperclipai/paperclip
  path: skills/paperclip-converting-plans-to-tasks/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:41:15.002Z
  truncated: false
type: agent_skill
skill:
  skill_name: converting-plans-to-tasks
  description: >
    Decide whether Paperclip work needs delegation, and connect justified tasks
    with owners and real dependencies. Use when turning an authorized plan into
    work.
  folder_path: skills/paperclip-converting-plans-to-tasks
  extra_files: []
  pack_total_skills: 37
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: paperclipai-paperclip
---

# Plans to tasks
Keep small, cohesive work on its current ordinary task with one end-to-end owner.
A plan's steps, files, and phases do not each need a task.

Create a separate task only for a useful boundary: another owner or permission,
independent parallel output, a real prerequisite, independent review, or substantial
follow-up that needs its own lifecycle. Check the available agents before assigning.
Give each delegate enough context and a clear deliverable to work independently.

Set real dependencies through `blockedByIssueIds` (or the native dependency tool).
Parent/child nesting and prose do not delay execution. Independent work can start
now; dependent work must wait for its prerequisite. Verify the saved relationships.

Reviewers publish findings on their own review task and complete it, including an
adverse verdict. Make its description self-contained. Connect the verdict to the
owner who must act on it; do not require writes to the parent.

Honor existing authorization and approval boundaries. Use Paperclip's planning
mechanics when approval is required; decomposition does not create new approval gates.
