---
slug: the-open-agent-openagent-skills-apple-reminders
name: apple-reminders
tagline: Manage Apple Reminders via remindctl CLI (list, add, edit, complete,
  delete). Supports lists, date filters, and JSON/plain output.
summary: '- User explicitly mentions "reminder" or "Reminders app" - Creating
  personal to-dos with due dates that sync to iOS - Managing Apple Reminders
  lists - User wants tasks to appear in their iPhone/iPad Reminders app'
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/apple-reminders
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
  path: skills/apple-reminders/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.201Z
  truncated: false
type: agent_skill
skill:
  skill_name: apple-reminders
  description: Manage Apple Reminders via remindctl CLI (list, add, edit,
    complete, delete). Supports lists, date filters, and JSON/plain output.
  folder_path: skills/apple-reminders
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# Apple Reminders CLI (remindctl)
Use `remindctl` to manage Apple Reminders directly from the terminal.

## When to Use

✅ **USE this skill when:**

- User explicitly mentions "reminder" or "Reminders app"
- Creating personal to-dos with due dates that sync to iOS
- Managing Apple Reminders lists
- User wants tasks to appear in their iPhone/iPad Reminders app

## When NOT to Use

❌ **DON'T use this skill when:**

- Scheduling OpenClaw tasks or alerts → use `cron` tool with systemEvent instead
- Calendar events or appointments → use Apple Calendar
- Project/work task management → use Notion, GitHub Issues, or task queue
- One-time notifications → use `cron` tool for timed alerts
- User says "remind me" but means an OpenClaw alert → clarify first

## Setup

- Install: `brew install steipete/tap/remindctl`
- macOS-only; grant Reminders permission when prompted
- Check status: `remindctl status`
- Request access: `remindctl authorize`

## Common Commands

### View Reminders

```bash
remindctl                    # Today's reminders
remindctl today              # Today
remindctl tomorrow           # Tomorrow
remindctl week               # This week
remindctl overdue            # Past due
remindctl all                # Everything
remindctl 2026-01-04         # Specific date
```

### Manage Lists

```bash
remindctl list               # List all lists
remindctl list Work          # Show specific list
remindctl list Projects --create    # Create list
remindctl list Work --delete        # Delete list
```

### Create Reminders

```bash
remindctl add "Buy milk"
remindctl add --title "Call mom" --list Personal --due tomorrow
remindctl add --title "Meeting prep" --due "2026-02-15 09:00"
```

### Complete/Delete

```bash
remindctl complete 1 2 3     # Complete by ID
remindctl delete 4A83 --force  # Delete by ID
```

### Output Formats

```bash
remindctl today --json       # JSON for scripting
remindctl today --plain      # TSV format
remindctl today --quiet      # Counts only
```

## Date Formats

Accepted by `--due` and date filters:

- `today`, `tomorrow`, `yesterday`
- `YYYY-MM-DD`
- `YYYY-MM-DD HH:mm`
- ISO 8601 (`2026-01-04T12:34:56Z`)

## Example: Clarifying User Intent

User: "Remind me to check on the deploy in 2 hours"

**Ask:** "Do you want this in Apple Reminders (syncs to your phone) or as an OpenClaw alert (I'll message you here)?"

- Apple Reminders → use this skill
- OpenClaw alert → use `cron` tool with systemEvent
