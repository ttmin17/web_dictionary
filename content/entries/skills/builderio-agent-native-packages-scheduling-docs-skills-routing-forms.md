---
slug: builderio-agent-native-packages-scheduling-docs-skills-routing-forms
name: routing-forms
tagline: ChiliPiper-style pre-booking forms that route prospects to the right
  event type based on their answers.
summary: "- Fields — text, email, phone, number, select, multi - Rules — ordered
  list of {conditions, action} - Fallback — action taken when no rule matches"
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agent-native
  - agentic-ai
  - agents
status: active
quality_percentile: 68
selection_reason: quality_percentile
first_seen: 2026-11-05
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: BuilderIO/agent-native
  subpath: packages/scheduling/docs/skills/routing-forms
  official_vendor: false
  license: MIT
signals:
  stars: 7621
  last_commit: 2026-11-05T11:55:08Z
  stars_delta_7d: 224
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 7621
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: BuilderIO/agent-native
  path: packages/scheduling/docs/skills/routing-forms/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:55.516Z
  truncated: false
type: agent_skill
skill:
  skill_name: routing-forms
  description: ChiliPiper-style pre-booking forms that route prospects to the
    right event type based on their answers.
  folder_path: packages/scheduling/docs/skills/routing-forms
  extra_files: []
  pack_total_skills: 23
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: builderio-agent-native
---

# Routing forms
## Shape

- **Fields** — text, email, phone, number, select, multi
- **Rules** — ordered list of `{conditions, action}`
- **Fallback** — action taken when no rule matches

## Rule conditions

`conditions: [{fieldId, op, value}, …]` — all ANDed together. Ops:
- `equals`, `not-equals`, `contains`, `starts-with`, `in` (value is array)

## Rule actions

- `{kind: "event-type", eventTypeId, teamId?}` → redirect to Booker
- `{kind: "external-url", url}` → redirect off-site
- `{kind: "custom-message", message}` → render message, no booking

## Public URL

`/forms/:formId` renders the form. On submit:
1. Walk rules in order; first match wins.
2. If none match, use `fallback`.
3. Record the response in `routing_form_responses` with `matchedRuleId`.
4. If the action is `event-type`, redirect to Booker with prefilled
   `name` / `email` / custom-field values from the form answers.

## Common tasks

| User | Action |
|---|---|
| "Route enterprise prospects to Bob" | `create-routing-form` with a rule matching company size → Bob's event type |
| "See submissions" | `list-routing-form-responses --formId <id>` |
