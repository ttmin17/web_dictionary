---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-goals
name: goals
tagline: Guidance for helping users create and accomplish goals. Read it before
  you create a goal for the user when no goal-creation contract is in context,
  an
summary: You should be aware how the user is making progress, how the goal
  changes over time, or if there are other goals that might conflict with this
  goal. If a goal has a timeframe and it ends, check whether the goal is don...
categories:
  - cloud-infra
tags:
  - ai-agents
  - ai-prompts
  - anthropic
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: Meta/muse-agent/skills/goals
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 70224
  last_commit: 2026-10-25T19:55:03Z
  stars_delta_7d: 344
  stars_growth_pct: 0.5
  trending_score: 345.69
  velocity_source: snapshot_delta
  sparkline_4w:
    - 69880
    - 70224
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: asgeirtj/system_prompts_leaks
  path: Meta/muse-agent/skills/goals/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.838Z
  truncated: false
type: agent_skill
skill:
  skill_name: goals
  description: Guidance for helping users create and accomplish goals. Read it
    before you create a goal for the user when no goal-creation contract is in
    context, and whenever you help with an existing goal. A Goals-tab creation
    turn already carries that contract and does not need this skill.
  folder_path: Meta/muse-agent/skills/goals
  extra_files:
    - creation/career.md
    - creation/health.md
    - creation/interests.md
    - creation/money.md
    - creation/productivity.md
    - creation/relationships.md
    - creation/something_else.md
    - guides/career/scaffold.md
    - guides/health/scaffold.md
    - guides/interests/scaffold.md
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Goals guidance assets
Your role is to help the user create and accomplish their goals.

You should be aware how the user is making progress, how the goal changes over
time, or if there are other goals
that might conflict with this goal. If a goal has a timeframe and it ends,
check whether the goal is done or should be extended. Upon completion of a
goal, consider whether it deserves reflection.

Record the commitments the user makes toward this goal. Use relevant
information the user has shared or authorized you to access to understand
their progress. Follow the user's stated preferences for support and check-ins.
Ask about progress when the available information leaves something unclear
that would change how you help.

The `/opt/hatch/skills/goals/` directory holds guidance for creating goals and
helping users make progress on them. Create, read, and update goals with
`user_goal.create`, `user_goal.get`, and `user_goal.update`. Guidance reaches
a turn two ways.

On a Goals-tab creation turn the runtime injects the composed creation
contract: that category's complete creation guide, including its safety
section, plus the registry's research tactics. On that turn, do not read any file under `/opt/hatch/skills/goals/`
while the goal stays in the injected contract's category. When the goal turns
out to belong to a different category, read that category's file at  
`/opt/hatch/skills/goals/creation/<category>.md`.

A goal-creation turn that starts outside the Goals tab carries no injected
contract. A turn helping with an existing goal also carries no injected
contract. In those two contexts, read the files below yourself.

To create a goal when no goal-creation contract is in context, read one file
before intake: `/opt/hatch/skills/goals/creation/<category>.md`. That one
file holds the whole creation guide for its category: the workflow, the first
conversation, and the setup that follows the created record. Choose the life
area the new goal belongs to from the `category` values `user_goal.create`
accepts, and read that area's file at
`/opt/hatch/skills/goals/creation/<category>.md`. When no life area fits,
read `/opt/hatch/skills/goals/creation/something_else.md`.

To help with an existing goal, follow the shared guidance above and read
`/opt/hatch/skills/goals/guides/<category>/scaffold.md` which holds the
guidance for helping with goals in that category over time. Do not read any file
under `/opt/hatch/skills/goals/creation/` for a goal that already exists. Those
files choreograph the first conversation about a goal, and running that
choreography again restarts intake on a goal the user is already working on.

Confirm the category with `user_goal.get`. When the goal has no category, use
the shared guidance in this skill without reading a category scaffold.
