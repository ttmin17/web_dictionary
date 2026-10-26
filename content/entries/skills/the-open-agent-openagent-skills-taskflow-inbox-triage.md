---
slug: the-open-agent-openagent-skills-taskflow-inbox-triage
name: taskflow-inbox-triage
tagline: Example TaskFlow authoring pattern for inbox triage. Use when messages
  need different treatment based on intent, with some routes notifying
  immediatel
summary: "Triage inbox items with one owner flow:"
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/taskflow-inbox-triage
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5712
  last_commit: 2026-10-25T13:57:48Z
  stars_delta_7d: 14
  stars_growth_pct: 0.2
  trending_score: 14.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5688
    - 5698
    - 5712
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/taskflow-inbox-triage/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.204Z
  truncated: false
type: agent_skill
skill:
  skill_name: taskflow-inbox-triage
  description: Example TaskFlow authoring pattern for inbox triage. Use when
    messages need different treatment based on intent, with some routes
    notifying immediately, some waiting on outside answers, and others rolling
    into a later summary.
  folder_path: skills/taskflow-inbox-triage
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# TaskFlow inbox triage
This is a concrete example of how to think about TaskFlow without turning the core runtime into a DSL.

## Goal

Triage inbox items with one owner flow:

- business → post to Slack and wait for reply
- personal → notify the owner now
- everything else → keep for end-of-day summary

## Pattern

1. Create one flow for the inbox batch.
2. Run one detached task to classify new items.
3. Persist the routing state in `stateJson`.
4. Move to `waiting` only when an outside reply is required.
5. Resume the flow when classification or human input completes.
6. Finish when the batch has been routed.

## Suggested `stateJson` shape

```json
{
  "businessThreads": [],
  "personalItems": [],
  "eodSummary": []
}
```

Suggested `waitJson` when blocked on Slack:

```json
{
  "kind": "reply",
  "channel": "slack",
  "threadKey": "slack:thread-1"
}
```

## Minimal runtime calls

```ts
const taskFlow = api.runtime.tasks.flow.fromToolContext(ctx);

const created = taskFlow.createManaged({
  controllerId: "my-plugin/inbox-triage",
  goal: "triage inbox",
  currentStep: "classify",
  stateJson: {
    businessThreads: [],
    personalItems: [],
    eodSummary: [],
  },
});

const child = taskFlow.runTask({
  flowId: created.flowId,
  runtime: "acp",
  childSessionKey: "agent:main:subagent:classifier",
  task: "Classify inbox messages",
  status: "running",
  startedAt: Date.now(),
  lastEventAt: Date.now(),
});

if (!child.created) {
  throw new Error(child.reason);
}

const waiting = taskFlow.setWaiting({
  flowId: created.flowId,
  expectedRevision: created.revision,
  currentStep: "await_business_reply",
  stateJson: {
    businessThreads: ["slack:thread-1"],
    personalItems: [],
    eodSummary: [],
  },
  waitJson: {
    kind: "reply",
    channel: "slack",
    threadKey: "slack:thread-1",
  },
});

if (!waiting.applied) {
  throw new Error(waiting.code);
}

const resumed = taskFlow.resume({
  flowId: waiting.flow.flowId,
  expectedRevision: waiting.flow.revision,
  status: "running",
  currentStep: "route_items",
  stateJson: waiting.flow.stateJson,
});

if (!resumed.applied) {
  throw new Error(resumed.code);
}

taskFlow.finish({
  flowId: resumed.flow.flowId,
  expectedRevision: resumed.flow.revision,
  stateJson: resumed.flow.stateJson,
});
```

## Related example

- `skills/taskflow/examples/inbox-triage.lobster`
