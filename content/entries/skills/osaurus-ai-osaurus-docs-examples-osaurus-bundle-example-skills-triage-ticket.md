---
slug: osaurus-ai-osaurus-docs-examples-osaurus-bundle-example-skills-triage-ticket
name: triage-ticket
tagline: Triage an Acme support ticket - set priority, area and next step using
  Acme's priority matrix.
summary: 1. Read the ticket and its latest comments. 2. Pick the priority from
  references/priority-matrix.md. When two rows match, take the higher priority.
  3. Name the product area in one or two words. 4. Write the next step...
categories:
  - agent-frameworks
tags:
  - anthropic
  - apple-foundation-models
  - apple-intelligence
  - apple-neural-engine
status: active
quality_percentile: 79
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: osaurus-ai/osaurus
  subpath: docs/examples/osaurus-bundle-example/skills/triage-ticket
  official_vendor: false
  license: MIT
signals:
  stars: 8131
  last_commit: 2026-11-05T11:48:59Z
  stars_delta_7d: 55
  stars_growth_pct: 0.7
  trending_score: 55.37
  rank_current: 106
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 8076
    - 8131
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: osaurus-ai/osaurus
  path: docs/examples/osaurus-bundle-example/skills/triage-ticket/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:11:42.903Z
  truncated: false
type: agent_skill
skill:
  skill_name: triage-ticket
  description: Triage an Acme support ticket - set priority, area and next step
    using Acme's priority matrix.
  folder_path: docs/examples/osaurus-bundle-example/skills/triage-ticket
  extra_files:
    - references/priority-matrix.md
  pack_total_skills: 1
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: osaurus-ai-osaurus
---

# Triage a ticket
Use this when the user asks you to triage, prioritize or sort support tickets.

1. Read the ticket and its latest comments.
2. Pick the priority from `references/priority-matrix.md`. When two rows match, take the higher priority.
3. Name the product area in one or two words.
4. Write the next step as one sentence a teammate can act on.

Reply with exactly:

```
Priority: P1|P2|P3|P4
Area: <area>
Next step: <one sentence>
Why: <one sentence that cites the matrix row>
```

Do not promise the customer a fix date.
