---
slug: agentscope-ai-agentscope-java-agentscope-examples-agents-agentscope-paw-src-main-resources-templates-customer-support-skills-triage-ticket
name: triage-ticket
tagline: First-response playbook for an inbound customer message — classifies
  the ticket, restates the issue, gathers missing context, and routes the reply.
summary: A customer message has arrived and you have not yet replied to it.
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
  subpath: agentscope-examples/agents/agentscope-paw/src/main/resources/templates/customer-support/skills/triage-ticket
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
  path: agentscope-examples/agents/agentscope-paw/src/main/resources/templates/customer-support/skills/triage-ticket/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:59.722Z
  truncated: false
type: agent_skill
skill:
  skill_name: triage-ticket
  description: First-response playbook for an inbound customer message —
    classifies the ticket, restates the issue, gathers missing context, and
    routes the reply.
  folder_path: agentscope-examples/agents/agentscope-paw/src/main/resources/templates/customer-support/skills/triage-ticket
  extra_files: []
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Triage an inbound ticket
A playbook for the first response to a new customer message.

## When to use

A customer message has arrived and you have not yet replied to it.

## Steps

1. **Classify.** Pick exactly one of:
   - `bug` — something is broken or behaving unexpectedly,
   - `question` — the customer wants information,
   - `feature` — a request for new behavior,
   - `escalation` — out-of-policy, refund > $100, abusive, legal, or
     compliance-flavored.
2. **Restate.** Reply to the customer with: a one-sentence empathy line, then
   "Just to make sure I understand: …" with the issue in your own words.
3. **Gather.** If the ticket id is missing, ask for it now. If you need
   reproduction steps, account email, or order number, ask for them as a
   numbered list.
4. **Respond.**
   - For `bug` or `question`: search workspace docs (`grep_files`,
     `memory_search`) and prior sessions (`session_search`) for an existing
     answer; reply with the solution and a citation.
   - For `feature`: thank them, log the request in your reply (the runtime
     captures it), and set expectations.
   - For `escalation`: hand off to `escalation-router` and tell the customer
     a human will follow up within one business day.
5. **Close.** Apply the closing rules from `AGENTS.md`.

## Output

A single customer-facing message. Do not include the classification label in
the message body — keep it as the first line of your internal scratch.
