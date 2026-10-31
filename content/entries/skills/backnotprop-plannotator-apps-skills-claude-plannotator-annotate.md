---
slug: backnotprop-plannotator-apps-skills-claude-plannotator-annotate
name: skills-plannotator-annotate
tagline: Open Plannotator's annotation UI for a markdown file, HTML file, URL,
  or folder and then respond to the returned annotations.
summary: "!plannotator annotate $ARGUMENTS"
categories:
  - media-creative
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: backnotprop/plannotator
  subpath: apps/skills/claude/plannotator-annotate
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9393
  last_commit: 2026-10-13T16:08:41Z
  stars_delta_7d: 199
  stars_growth_pct: 2.2
  trending_score: 203.31
  rank_current: 139
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9194
    - 9393
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: backnotprop/plannotator
  path: apps/skills/claude/plannotator-annotate/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:16.397Z
  truncated: false
type: agent_skill
skill:
  skill_name: skills-plannotator-annotate
  description: Open Plannotator's annotation UI for a markdown file, HTML file,
    URL, or folder and then respond to the returned annotations.
  folder_path: apps/skills/claude/plannotator-annotate
  extra_files: []
tags: []
---

# Plannotator Annotate
## Markdown annotations

!`plannotator annotate $ARGUMENTS`

## Your task

The output above will be one of:

1. The exact text `The user approved.`, an "Approved with Notes" message, OR a JSON object with `"decision": "approved"`. The user approved the markdown file(s). If it is the Approved with Notes message, or that object also carries a `"feedback"` field, the user approved *with notes*: read them and carry them into subsequent work — they are non-blocking guidance, not a request to revise the file. Otherwise acknowledge with a single sentence ("Approved.") and stop. Either way, do not begin any work.
2. Empty, OR a JSON object with `"decision": "dismissed"`. The user closed the session without requesting changes. Acknowledge with a single sentence ("Annotation session closed.") and stop. Do not begin any work.
3. Plaintext annotation feedback, OR a JSON object with `"decision": "annotated"` and a `"feedback"` field. Address the feedback. The user has reviewed the markdown file(s) and provided specific annotations and comments.
4. A message that the arguments could not be resolved to a file, URL, or folder. The user described what to annotate in natural language: work out which file, URL, or folder they mean, run `plannotator annotate <path-or-url>` yourself with that concrete target (keeping any flags the message echoes), then handle its output per cases 1-3.
