---
slug: googleworkspace-cli-skills-gws-events
name: gws-events
tagline: Subscribe to Google Workspace events.
summary: "- stream — SendStreamingMessage is a streaming call that will return a
  stream of task update events until the Task is in an interrupted or terminal
  state."
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-agent
  - automation
  - cli
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-events
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 32055
  last_commit: 2026-10-30T16:06:54Z
  stars_delta_7d: 890
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 31448
    - 31663
    - 32055
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: googleworkspace/cli
  path: skills/gws-events/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:42.261Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-events
  description: Subscribe to Google Workspace events.
  folder_path: skills/gws-events
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# events (v1)
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

```bash
gws events <resource> <method> [flags]
```

## Helper Commands

| Command | Description |
|---------|-------------|
| [`+subscribe`](https://github.com/googleworkspace/cli/blob/main/skills/gws-events/../gws-events-subscribe/SKILL.md) | Subscribe to Workspace events and stream them as NDJSON |
| [`+renew`](https://github.com/googleworkspace/cli/blob/main/skills/gws-events/../gws-events-renew/SKILL.md) | Renew/reactivate Workspace Events subscriptions |

## API Resources

### message

  - `stream` — SendStreamingMessage is a streaming call that will return a stream of task update events until the Task is in an interrupted or terminal state.

### operations

  - `get` — Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### subscriptions

  - `create` — Creates a Google Workspace subscription. To learn how to use this method, see [Create a Google Workspace subscription](https://developers.google.com/workspace/events/guides/create-subscription).
  - `delete` — Deletes a Google Workspace subscription. To learn how to use this method, see [Delete a Google Workspace subscription](https://developers.google.com/workspace/events/guides/delete-subscription).
  - `get` — Gets details about a Google Workspace subscription. To learn how to use this method, see [Get details about a Google Workspace subscription](https://developers.google.com/workspace/events/guides/get-subscription).
  - `list` — Lists Google Workspace subscriptions. To learn how to use this method, see [List Google Workspace subscriptions](https://developers.google.com/workspace/events/guides/list-subscriptions).
  - `patch` — Updates or renews a Google Workspace subscription. To learn how to use this method, see [Update or renew a Google Workspace subscription](https://developers.google.com/workspace/events/guides/update-subscription).
  - `reactivate` — Reactivates a suspended Google Workspace subscription. This method resets your subscription's `State` field to `ACTIVE`. Before you use this method, you must fix the error that suspended the subscription. This method will ignore or reject any subscription that isn't currently in a suspended state. To learn how to use this method, see [Reactivate a Google Workspace subscription](https://developers.google.com/workspace/events/guides/reactivate-subscription).

### tasks

  - `cancel` — Cancel a task from the agent. If supported one should expect no more task updates for the task.
  - `get` — Get the current state of a task from the agent.
  - `subscribe` — TaskSubscription is a streaming call that will return a stream of task update events. This attaches the stream to an existing in process task. If the task is complete the stream will return the completed task (like GetTask) and close the stream.
  - `pushNotificationConfigs` — Operations on the 'pushNotificationConfigs' resource

## Discovering Commands

Before calling any API method, inspect it:

```bash
# Browse resources and methods
gws events --help

# Inspect a method's required params, types, and defaults
gws schema events.<resource>.<method>
```

Use `gws schema` output to build your `--params` and `--json` flags.
