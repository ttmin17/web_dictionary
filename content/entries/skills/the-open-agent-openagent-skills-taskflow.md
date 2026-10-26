---
slug: the-open-agent-openagent-skills-taskflow
name: taskflow
tagline: Use when work should span one or more detached tasks but still behave
  like one job with a single owner context. TaskFlow is the durable flow
  substrate
summary: "- Multi-step background work with one owner - Work that waits on
  detached ACP or subagent tasks - Jobs that may need to emit one clear update
  back to the owner - Jobs that need small persisted state between steps -
  Pl..."
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
  subpath: skills/taskflow
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
  path: skills/taskflow/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.204Z
  truncated: false
type: agent_skill
skill:
  skill_name: taskflow
  description: Use when work should span one or more detached tasks but still
    behave like one job with a single owner context. TaskFlow is the durable
    flow substrate under authoring layers like Lobster, ACPX, plugins, or plain
    code. Keep conditional logic in the caller; use TaskFlow for flow identity,
    child-task linkage, waiting state, revision-checked mutations, and
    user-facing emergence.
  folder_path: skills/taskflow
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# TaskFlow
Use TaskFlow when a job needs to outlive one prompt or one detached run, but you still want one owner session, one return context, and one place to inspect or resume the work.

## When to use it

- Multi-step background work with one owner
- Work that waits on detached ACP or subagent tasks
- Jobs that may need to emit one clear update back to the owner
- Jobs that need small persisted state between steps
- Plugin or tool work that must survive restarts and revision conflicts cleanly

## What TaskFlow owns

- flow identity
- owner session and requester origin
- `currentStep`, `stateJson`, and `waitJson`
- linked child tasks and their parent flow id
- finish, fail, cancel, waiting, and blocked state
- revision tracking for conflict-safe mutations

It does **not** own branching or business logic. Put that in Lobster, acpx, or the calling code.

## Current runtime shape

Canonical plugin/runtime entrypoint:

- `api.runtime.tasks.flow`
- `api.runtime.taskFlow` still exists as an alias, but `api.runtime.tasks.flow` is the canonical shape

Binding:

- `api.runtime.tasks.flow.fromToolContext(ctx)` when you already have trusted tool context with `sessionKey`
- `api.runtime.tasks.flow.bindSession({ sessionKey, requesterOrigin })` when your binding layer already resolved the session and delivery context

Managed-flow lifecycle:

1. `createManaged(...)`
2. `runTask(...)`
3. `setWaiting(...)` when waiting on a person or an external system
4. `resume(...)` when work can continue
5. `finish(...)` or `fail(...)`
6. `requestCancel(...)` or `cancel(...)` when the whole job should stop

## Design constraints

- Use **managed** TaskFlows when your code owns the orchestration.
- One-task **mirrored** flows are created by core runtime for detached ACP/subagent work; this skill is mainly about managed flows.
- Treat `stateJson` as the persisted state bag. There is no separate `setFlowOutput` or `appendFlowOutput` API.
- Every mutating method after creation is revision-checked. Carry forward the latest `flow.revision` after each successful mutation.
- `runTask(...)` links the child task to the flow. Use it instead of manually creating detached tasks when you want parent orchestration.

## Example shape

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

const classify = taskFlow.runTask({
  flowId: created.flowId,
  runtime: "acp",
  childSessionKey: "agent:main:subagent:classifier",
  runId: "inbox-classify-1",
  task: "Classify inbox messages",
  status: "running",
  startedAt: Date.now(),
  lastEventAt: Date.now(),
});

if (!classify.created) {
  throw new Error(classify.reason);
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
  currentStep: "finalize",
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

## Keep conditionals above the runtime

Use the flow runtime for state and task linkage. Keep decisions in the authoring layer:

- `business` → post to Slack and wait
- `personal` → notify the owner now
- `later` → append to an end-of-day summary bucket

## Operational pattern

- Store only the minimum state needed to resume.
- Put human-readable wait reasons in `blockedSummary` or structured wait metadata in `waitJson`.
- Use `getTaskSummary(flowId)` when the orchestrator needs a compact health view of child work.
- Use `requestCancel(...)` when a caller wants the flow to stop scheduling immediately.
- Use `cancel(...)` when you also want active linked child tasks cancelled.

## Examples

- See `skills/taskflow/examples/inbox-triage.lobster`
- See `skills/taskflow/examples/pr-intake.lobster`
- See `skills/taskflow-inbox-triage/SKILL.md` for a concrete routing pattern
