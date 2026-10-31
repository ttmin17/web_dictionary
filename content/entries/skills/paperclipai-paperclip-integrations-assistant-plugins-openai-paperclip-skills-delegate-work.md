---
slug: paperclipai-paperclip-integrations-assistant-plugins-openai-paperclip-skills-delegate-work
name: paperclip-delegate-work
tagline: Delegate user-requested work to an existing Paperclip agent, with a
  durable task reference and clear execution expectations.
summary: Identify the connected person and company with paperclipconnection.
  List agents and, if relevant, projects. Select the agent suited to the
  requested outcome. Resolve ambiguity about team, scope or assignee with the
  us...
categories:
  - productivity-ops
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: paperclipai/paperclip
  subpath: integrations/assistant-plugins/openai/paperclip/skills/delegate-work
  official_vendor: false
  license: MIT
signals:
  stars: 101411
  last_commit: 2026-10-13T16:17:51Z
  stars_delta_7d: 2339
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 101411
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: paperclipai/paperclip
  path: integrations/assistant-plugins/openai/paperclip/skills/delegate-work/SKILL.md
  branch: master
  fetched_at: 2026-10-14T14:55:11.950Z
  truncated: false
type: agent_skill
skill:
  skill_name: paperclip-delegate-work
  description: Delegate user-requested work to an existing Paperclip agent, with a
    durable task reference and clear execution expectations.
  folder_path: integrations/assistant-plugins/openai/paperclip/skills/delegate-work
  extra_files: []
tags: []
---

Identify the connected person and company with `paperclip_connection`. List agents and, if relevant, projects. Select the agent suited to the requested outcome. Resolve ambiguity about team, scope or assignee with the user before creating work. Report paused or unavailable agents; do not promise they will run.

Prepare a task with the objective, relevant user-provided context, constraints and expected deliverable. Explain that delegation can start autonomous agent work using the team's separately configured execution capacity and budget. The user's request to delegate is sufficient authorization when its scope is clear.

Create one UUID requestId for the intended task, then call `paperclip_create_task`. Reuse that UUID and identical arguments if the same call must be retried. After an unknown outcome or disconnected call, inspect tasks before doing anything else. Never switch to a new requestId to force the action through.

Return the durable task ID and link. Distinguish submitted, running, blocked and completed states based on returned evidence. The task can continue after this conversation closes. Retrieve progress with `paperclip_read_task`; do not poll continuously. Direct setup and approval decisions to Paperclip's UI. Installing the plugin does not create teams or supply model credentials.
