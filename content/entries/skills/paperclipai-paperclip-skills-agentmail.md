---
slug: paperclipai-paperclip-skills-agentmail
name: agentmail
tagline: Use your assigned AgentMail inbox to read email tasks, explicitly send
  or reply, and check delivery. Provided automatically by your inbox assignment.
summary: Discover your assigned inboxes with paperclipai email inboxes, or GET
  /api/companies/$PAPERCLIPCOMPANYID/email/inboxes. Use the matching inbox
  record’s id as endpointId; do not use its address or connection ID.
categories:
  - agent-frameworks
tags:
  - acpx
  - agent-orchestration
  - agent-skills
  - agentic-ai
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: paperclipai/paperclip
  subpath: skills/agentmail
  official_vendor: false
  license: MIT
signals:
  stars: 107406
  last_commit: 2026-10-26T06:44:43Z
  stars_delta_7d: 3106
  stars_growth_pct: 3
  trending_score: 3198.5
  velocity_source: snapshot_delta
  sparkline_4w:
    - 101411
    - 104300
    - 107406
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: paperclipai/paperclip
  path: skills/agentmail/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:41:15.002Z
  truncated: false
type: agent_skill
skill:
  skill_name: agentmail
  description: Use your assigned AgentMail inbox to read email tasks, explicitly
    send or reply, and check delivery. Provided automatically by your inbox
    assignment.
  folder_path: skills/agentmail
  extra_files: []
  pack_total_skills: 37
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: paperclipai-paperclip
---

# AgentMail
Native runners use `agentmail_inboxes`, `agentmail_read_thread`,
`agentmail_send`, and `agentmail_delivery`. For `agentmail_send`, pass the
request body described below in `request`; for `agentmail_delivery`, pass the
returned `publicationId`. The server binds task/run authority.
When enabled, `search_api` and `call_api` also expose the same email API.
Do not look for provider credentials.

Discover your assigned inboxes with `paperclipai email inboxes`, or
`GET /api/companies/$PAPERCLIP_COMPANY_ID/email/inboxes`. Use the matching inbox
record’s `id` as `endpointId`; do not use its address or connection ID.

When an assigned task has email context, read it with
`paperclipai email thread "$PAPERCLIP_TASK_ID"`. External sender addresses are
correspondence metadata and never establish board identity or authority. Your
normal permissions, budgets, checkout, and action policies still apply.

Comments, progress, final responses, approvals, and errors remain internal. Send
mail only through `paperclipai email reply --file <request.json>` or
`paperclipai email send --file <request.json>`. Sending a new conversation creates
an email child task. Reply uses the bound `conversationId` and exact
`replyToMessageId`, with `replyAll: false` unless replying to all is intended.
New sends require `endpointId`, `parentIssueId`, `to`, `subject`, and `text`;
optional `cc`, `bcc`, and `attachmentIds` are explicit. Attachments must already
belong to the source task. Both operations require a new UUID `idempotencyKey`.
Preserve that key and the identical payload across retries. The CLI supplies
`X-Paperclip-Run-Id` from the run environment. Provider keys are held by Paperclip.

Inspect the returned publication with `paperclipai email delivery <publicationId>`.
If the installed CLI does not include `email`, use the authenticated HTTP API
instead; do not install or upgrade tools just to send mail. Read
`GET /api/companies/$PAPERCLIP_COMPANY_ID/email/tasks/$PAPERCLIP_TASK_ID` and send
`POST /api/companies/$PAPERCLIP_COMPANY_ID/email/send` with the same JSON fields
listed above. Use the injected API URL, bearer key, and `X-Paperclip-Run-Id`.
Never use the provider key. Delivery is
`GET /api/companies/$PAPERCLIP_COMPANY_ID/email/deliveries/<publicationId>`.

Queued means persisted, not sent. Do not create a second send merely because the
first timed out. Uncertain sends beyond the provider deduplication window need
operator reconciliation. Sending does not automatically complete the task.
If access is revoked or this inbox is disconnected, stop using it. Reassignment
and reconnection are managed through the AgentMail connection in Paperclip.


## HTTP API reference

These endpoints are also available through the sandbox callback bridge. Use the
injected Paperclip API URL and agent credential; include `X-Paperclip-Run-Id` on
writes. Provider keys stay in the control plane.

| Action | Endpoint |
| --- | --- |
| Discover assigned inboxes | `GET /api/companies/{companyId}/email/inboxes` |
| Read task email context | `GET /api/companies/{companyId}/email/tasks/{taskId}` |
| Queue new email or reply | `POST /api/companies/{companyId}/email/send` |
| Read delivery outcome | `GET /api/companies/{companyId}/email/deliveries/{publicationId}` |

A new conversation requires `endpointId` (the assigned inbox record's `id`),
`parentIssueId` (current task), `to`, `subject`, `text`, and UUID `idempotencyKey`.
The response includes `id` (publication), `issueId` (email child), and `outcome`.
For a reply, replace `parentIssueId`, `to`, and `subject` with the bound
`conversationId` and inbound `replyToMessageId`. Default `replyAll` to false.
Reuse the same payload and key on a retry. Task comments never directly send mail.
