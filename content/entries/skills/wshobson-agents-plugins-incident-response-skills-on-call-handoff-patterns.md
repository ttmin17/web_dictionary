---
slug: wshobson-agents-plugins-incident-response-skills-on-call-handoff-patterns
name: on-call-handoff-patterns
tagline: Master on-call shift handoffs with context transfer, escalation
  procedures, and documentation. Use this skill when transitioning on-call
  responsibilit
summary: "- Transitioning on-call responsibilities - Writing shift handoff
  summaries - Documenting ongoing investigations - Establishing on-call rotation
  procedures - Improving handoff quality - Onboarding new on-call engineers"
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/incident-response/skills/on-call-handoff-patterns
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/incident-response/skills/on-call-handoff-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.198Z
  truncated: false
type: agent_skill
skill:
  skill_name: on-call-handoff-patterns
  description: Master on-call shift handoffs with context transfer, escalation
    procedures, and documentation. Use this skill when transitioning on-call
    responsibilities between engineers and ensuring the incoming responder has
    full situational awareness, when writing a shift summary that captures
    active incidents, ongoing investigations, and recent changes, when handing
    off mid-incident so a fresh engineer can take over the incident commander
    role without losing context, when onboarding a new engineer to the on-call
    rotation for the first time, or when auditing and improving the quality of
    existing handoff processes across teams.
  folder_path: plugins/incident-response/skills/on-call-handoff-patterns
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# On-Call Handoff Patterns
Effective patterns for on-call shift transitions, ensuring continuity, context transfer, and reliable incident response across shifts.

## When to Use This Skill

- Transitioning on-call responsibilities
- Writing shift handoff summaries
- Documenting ongoing investigations
- Establishing on-call rotation procedures
- Improving handoff quality
- Onboarding new on-call engineers

## Core Concepts

### 1. Handoff Components

| Component                  | Purpose                 |
| -------------------------- | ----------------------- |
| **Active Incidents**       | What's currently broken |
| **Ongoing Investigations** | Issues being debugged   |
| **Recent Changes**         | Deployments, configs    |
| **Known Issues**           | Workarounds in place    |
| **Upcoming Events**        | Maintenance, releases   |

### 2. Handoff Timing

```
Recommended: 30 min overlap between shifts

Outgoing:
├── 15 min: Write handoff document
└── 15 min: Sync call with incoming

Incoming:
├── 15 min: Review handoff document
├── 15 min: Sync call with outgoing
└── 5 min: Verify alerting setup
```

## Templates and detailed worked examples

Full template library and detailed worked examples live in `references/details.md`. Read that file when you need the concrete templates.

## Troubleshooting

**Incoming engineer misses a critical issue because the handoff document was incomplete.**
Use the outgoing checklist as a gate: do not mark handoff complete until every section has at least one entry (or an explicit "none"). Make incomplete handoffs a blameless postmortem action item.

**A 30-minute sync call is not possible due to timezone gaps.**
Fall back to the async quick handoff template (Template 2). Supplement with a short Loom or voice memo walking through the watch list. Ensure the incoming engineer has a direct contact method if they have follow-up questions.

**The incoming engineer inherits a mid-incident and is immediately overwhelmed.**
Use the incident handoff template (Template 3) specifically. The outgoing engineer should remain available on Slack for 15 minutes after handoff, even if off-call, to answer clarifying questions.

**On-call handoff documents are inconsistently formatted across teams.**
Adopt the shift handoff template organization-wide and store completed handoffs in a shared location (wiki, Notion, Confluence). Link each handoff from the on-call schedule entry in PagerDuty.

**Incoming engineer cannot verify their alerting is working before the outgoing engineer logs off.**
Add a standard step: outgoing engineer fires a test alert and confirms incoming engineer receives it in PagerDuty and Slack before ending the overlap window.

## Related Skills

- [incident-runbook-templates](https://github.com/wshobson/agents/blob/main/plugins/incident-response/skills/on-call-handoff-patterns/../incident-runbook-templates/SKILL.md) — Runbooks for the incidents that are handed over mid-response
- [postmortem-writing](https://github.com/wshobson/agents/blob/main/plugins/incident-response/skills/on-call-handoff-patterns/../postmortem-writing/SKILL.md) — Turn resolved incidents from the shift into structured postmortems
