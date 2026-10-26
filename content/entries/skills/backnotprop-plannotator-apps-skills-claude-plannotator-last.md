---
slug: backnotprop-plannotator-apps-skills-claude-plannotator-last
name: last
tagline: Agent skill from backnotprop/plannotator
summary: Agent skill from backnotprop/plannotator
categories:
  - coding-agents
tags:
  - agents
  - claude-code
  - code-review
  - codex
status: active
quality_percentile: 65
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: backnotprop/plannotator
  subpath: apps/skills/claude/plannotator-last
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9647
  last_commit: 2026-10-26T07:14:52Z
  stars_delta_7d: 141
  stars_growth_pct: 1.5
  trending_score: 143.09
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9194
    - 9393
    - 9506
    - 9647
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: backnotprop/plannotator
  path: apps/skills/claude/plannotator-last/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:55.157Z
  truncated: false
type: agent_skill
skill:
  skill_name: last
  description: Agent skill from backnotprop/plannotator
  folder_path: apps/skills/claude/plannotator-last
  extra_files: []
  pack_total_skills: 7
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: backnotprop-plannotator
---

# Plannotator Last
## Message annotations

!`plannotator annotate-last $ARGUMENTS`

## Your task

The output above will be one of:

1. The exact text `The user approved.`, an "Approved with Notes" message, OR a JSON object with `"decision": "approved"`. The user approved your last message. If it is the Approved with Notes message, or that object also carries a `"feedback"` field, the user approved *with notes*: read them and carry them into subsequent work — they are non-blocking guidance, not a request to revise the message. Otherwise acknowledge with a single sentence ("Approved.") and stop. Either way, do not begin any work.
2. Empty, OR a JSON object with `"decision": "dismissed"`. The user closed the session without requesting changes. Acknowledge with a single sentence ("Annotation session closed.") and stop. Do not begin any work.
3. Plaintext annotation feedback, OR a JSON object with `"decision": "annotated"` and a `"feedback"` field. Address the feedback. The user has reviewed your last message and provided specific annotations and comments.
