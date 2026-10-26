---
slug: wanshuiyin-auto-claude-code-research-in-sleep-skills-feishu-notify
name: feishu-notify
tagline: Send notifications to Feishu/Lark. Internal utility used by other
  skills, or manually via /feishu-notify. Use when user says "发飞书", "notify
  feishu", o
summary: This skill provides Feishu/Lark integration for ARIS. It is designed as
  an internal utility — other skills call it at key events (experiment done,
  review scored, checkpoint waiting). It can also be invoked manually.
categories:
  - domain-research
tags:
  - ai-research
  - ai-tools
  - aris
  - autonomous-agent
status: active
quality_percentile: 91
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wanshuiyin/Auto-claude-code-research-in-sleep
  subpath: skills/feishu-notify
  official_vendor: false
  license: MIT
signals:
  stars: 18088
  last_commit: 2026-10-24T15:48:19Z
  stars_delta_7d: 395
  stars_growth_pct: 2.2
  trending_score: 403.82
  velocity_source: snapshot_delta
  sparkline_4w:
    - 17090
    - 17411
    - 17693
    - 18088
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wanshuiyin/Auto-claude-code-research-in-sleep
  path: skills/feishu-notify/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:53.544Z
  truncated: false
type: agent_skill
skill:
  skill_name: feishu-notify
  description: Send notifications to Feishu/Lark. Internal utility used by other
    skills, or manually via /feishu-notify. Use when user says "发飞书", "notify
    feishu", or other skills need to send status updates.
  folder_path: skills/feishu-notify
  extra_files: []
  pack_total_skills: 87
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wanshuiyin-auto-claude-code-research-in-sleep
---

# Feishu/Lark Notification
Send a notification: **$ARGUMENTS**

## Overview

This skill provides Feishu/Lark integration for ARIS. It is designed as an **internal utility** — other skills call it at key events (experiment done, review scored, checkpoint waiting). It can also be invoked manually.

**Zero-impact guarantee**: If no `feishu.json` config exists, this skill does nothing and returns silently. All existing workflows are completely unaffected.

## Configuration

The skill reads `~/.claude/feishu.json`. If this file does not exist, **all Feishu functionality is disabled** — skills behave exactly as before.

### Config Format

```json
{
  "mode": "push",
  "webhook_url": "https://open.feishu.cn/open-apis/bot/v2/hook/YOUR_WEBHOOK_ID",
  "interactive": {
    "bridge_url": "http://localhost:5000",
    "timeout_seconds": 300
  }
}
```

### Modes

| Mode | `"mode"` value | What it does | Requires |
|------|----------------|--------------|----------|
| **Off** | `"off"` or file absent | Nothing. Pure CLI as-is | Nothing |
| **Push only** | `"push"` | Send webhook notifications at key events. Mobile push, no reply | Feishu bot webhook URL |
| **Interactive** | `"interactive"` | Full bidirectional. Approve/reject from Feishu, reply to checkpoints | [feishu-claude-code](https://github.com/joewongjc/feishu-claude-code) running |

## Workflow

### Step 1: Read Config

```bash
cat ~/.claude/feishu.json 2>/dev/null
```

- **File not found** → return silently, do nothing
- **`"mode": "off"`** → return silently, do nothing
- **`"mode": "push"`** → proceed to Step 2 (push)
- **`"mode": "interactive"`** → proceed to Step 3 (interactive)

### Step 2: Push Notification (webhook)

Send a rich card to the Feishu webhook:

```bash
curl -s -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "msg_type": "interactive",
    "card": {
      "header": {
        "title": {"tag": "plain_text", "content": "TITLE"},
        "template": "COLOR"
      },
      "elements": [
        {"tag": "markdown", "content": "BODY"}
      ]
    }
  }'
```

**Card templates by event type:**

| Event | Title | Color | Body |
|-------|-------|-------|------|
| `experiment_done` | Experiment Complete | `green` | Results table, delta vs baseline |
| `review_scored` | Review Round N: X/10 | `blue` (≥6) / `orange` (<6) | Score, verdict, top 3 weaknesses |
| `checkpoint` | Checkpoint: Waiting for Input | `yellow` | Question, options, context |
| `error` | Error: [type] | `red` | Error message, what failed |
| `pipeline_done` | Pipeline Complete | `purple` | Final summary, deliverables |
| `custom` | Custom | `blue` | Free-form message from $ARGUMENTS |

**Return immediately after curl** — push mode never waits for a response.

### Step 3: Interactive Notification (bidirectional)

Interactive mode uses [feishu-claude-code](https://github.com/joewongjc/feishu-claude-code) as a bridge:

1. **Send message** to the bridge:
   ```bash
   curl -s -X POST "$BRIDGE_URL/send" \
     -H "Content-Type: application/json" \
     -d '{"type": "EVENT_TYPE", "title": "TITLE", "body": "BODY", "options": ["approve", "reject", "custom"]}'
   ```

2. **Wait for reply** (with timeout):
   ```bash
   curl -s "$BRIDGE_URL/poll?timeout=$TIMEOUT_SECONDS"
   ```
   Returns: `{"reply": "approve"}` or `{"reply": "reject"}` or `{"reply": "user typed message"}` or `{"timeout": true}`

3. **On timeout**: Fall back to `AUTO_PROCEED` behavior (proceed with default option).

4. **Return the user's reply** to the calling skill so it can act on it.

### Step 4: Verify Delivery

- **Push mode**: Check curl exit code. If non-zero, log warning but do NOT block the workflow.
- **Interactive mode**: If bridge is unreachable, fall back to push mode (if webhook configured) or skip silently.

## Helper Function (for other skills)

Other skills should use this pattern to send notifications:

```markdown
### Feishu Notification (if configured)

Check if `~/.claude/feishu.json` exists and mode is not "off":
- If **push** mode: send webhook notification with event summary
- If **interactive** mode: send notification and wait for user reply
- If **off** or file absent: skip entirely (no-op)
```

**This check is always guarded.** If the config file doesn't exist, the skill skips the notification block entirely — zero overhead, zero side effects.

## Event Catalog

Skills send these events at these moments:

| Skill | Event | When |
|-------|-------|------|
| `/auto-review-loop` | `review_scored` | After each round's review score |
| `/auto-review-loop` | `pipeline_done` | Loop complete (positive or max rounds) |
| `/auto-paper-improvement-loop` | `review_scored` | After each round's review score |
| `/auto-paper-improvement-loop` | `pipeline_done` | All rounds complete |
| `/run-experiment` | `experiment_done` | Screen session finishes |
| `/idea-discovery` | `checkpoint` | Between phases (if interactive) |
| `/idea-discovery` | `pipeline_done` | Final report ready |
| `/monitor-experiment` | `experiment_done` | Results collected |
| `/research-pipeline` | `checkpoint` | Between workflow stages |
| `/research-pipeline` | `pipeline_done` | Full pipeline complete |

## Key Rules

- **NEVER block a workflow** because Feishu is unreachable. Always fail open.
- **NEVER require Feishu config** — all skills must work without it.
- **Config file absent = mode off.** No error, no warning, no log.
- **Push mode is fire-and-forget.** Send curl, check exit code, move on.
- **Interactive timeout = auto-proceed.** Don't hang forever waiting for a reply.
- **Respect `AUTO_PROCEED`**: In interactive mode, if the user doesn't reply within timeout, use the same auto-proceed logic as the calling skill.
- **No secrets in notifications.** Never include API keys, tokens, or passwords in Feishu messages.
