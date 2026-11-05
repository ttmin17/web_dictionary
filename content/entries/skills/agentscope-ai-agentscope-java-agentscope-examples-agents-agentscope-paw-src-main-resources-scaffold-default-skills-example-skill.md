---
slug: agentscope-ai-agentscope-java-agentscope-examples-agents-agentscope-paw-src-main-resources-scaffold-default-skills-example-skill
name: example-skill
tagline: Starter skill template. Replace the body with your own playbook before
  relying on it; this stub exists only to teach the workspace layout.
summary: Describe the situations in which the agent should reach for this skill.
  Be concrete — the runtime feeds this section back to the agent when it is
  selecting between skills.
categories:
  - agent-frameworks
tags:
  - adk
  - agent-framework
  - agentic
  - agentic-ai
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-examples/agents/agentscope-paw/src/main/resources/scaffold/default/skills/example-skill
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6265
  last_commit: 2026-11-05T08:34:33Z
  stars_delta_7d: 144
  stars_growth_pct: 2.4
  trending_score: 147.39
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6265
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-examples/agents/agentscope-paw/src/main/resources/scaffold/default/skills/example-skill/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:59.722Z
  truncated: false
type: agent_skill
skill:
  skill_name: example-skill
  description: Starter skill template. Replace the body with your own playbook
    before relying on it; this stub exists only to teach the workspace layout.
  folder_path: agentscope-examples/agents/agentscope-paw/src/main/resources/scaffold/default/skills/example-skill
  extra_files: []
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Example Skill
A skill is a named playbook the agent can invoke by referring to this file. The
folder name (`example-skill`) is the skill id.

## When to use

Describe the situations in which the agent should reach for this skill. Be
concrete — the runtime feeds this section back to the agent when it is selecting
between skills.

## Steps

1. State the inputs the skill needs.
2. Describe the work — what files to read, what to write, what to summarize.
3. State the expected output format.

Delete this file once you have authored your own skills.
