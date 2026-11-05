---
slug: harnessmd-munder-difflin-resources-skills-md-hive-sync
name: md-hive-sync
tagline: |-
  Munder Difflin hive sync — runs the start-of-task hive protocol steps:
  reads memory.md, checks inbox/ for new messages, and reminds you to record
  dura
summary: 1. Read memory — Read $AGENTDIR/memory.md for durable context from
  prior sessions.
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-orchestration
  - agents
  - ai-agents
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: HarnessMD/munder-difflin
  subpath: resources/skills/md-hive-sync
  official_vendor: false
  license: MIT
signals:
  stars: 9378
  last_commit: 2026-11-05T12:23:50Z
  stars_delta_7d: 309
  stars_growth_pct: 3.4
  trending_score: 319.53
  velocity_source: snapshot_delta
  sparkline_4w:
    - 8726
    - 8896
    - 9069
    - 9378
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: HarnessMD/munder-difflin
  path: resources/skills/md-hive-sync/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:55.062Z
  truncated: false
type: agent_skill
skill:
  skill_name: md-hive-sync
  description: |
    Munder Difflin hive sync — runs the start-of-task hive protocol steps:
    reads memory.md, checks inbox/ for new messages, and reminds you to record
    durable facts in memory.md and write coordination files before ending.
    Use when asked to "sync with the hive", "check my inbox", "hive status",
    or "hive sync".
    Proactively suggest at the start of a new task if you haven't checked your
    hive inbox in this conversation. (munder-difflin)
  folder_path: resources/skills/md-hive-sync
  extra_files: []
  pack_total_skills: 17
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: harnessmd-munder-difflin
---

## Hive Sync

Run the mandatory hive start-of-task steps:

1. **Read memory** — `Read $AGENT_DIR/memory.md` for durable context from prior sessions.

2. **Check inbox** — list and read all files in `$AGENT_DIR/inbox/` that are NOT in `inbox/.done/`. For each message:
   - Act on the message.
   - Move the handled file into `$AGENT_DIR/inbox/.done/` with `mv`.

3. **Report** — summarize what you found in memory and any new inbox messages. Note any tasks assigned to you or information relevant to the current session.

4. **End-of-task reminder** — before closing this conversation, append durable facts, decisions, and outcomes to `$AGENT_DIR/memory.md` so future-you remembers.

Run `echo $AGENT_DIR` if the variable is not set to locate your agent directory under the hive root.
