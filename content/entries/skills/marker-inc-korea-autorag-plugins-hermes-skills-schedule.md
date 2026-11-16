---
slug: marker-inc-korea-autorag-plugins-hermes-skills-schedule
name: schedule
tagline: Keep the AutoRAG index fresh and watch for duplicate files on their
  own, using Hermes cron. Use when the user wants indexing to run automatically
  ("re
summary: The scan only reads files. It never moves, edits or deletes anything,
  and the message says so.
categories:
  - databases-memory
tags:
  - agentic-rag
  - ai-agents
  - document-parser
  - embeddings
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: Marker-Inc-Korea/AutoRAG
  subpath: plugins/hermes/skills/schedule
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5874
  last_commit: 2026-11-14T16:48:55Z
  stars_delta_7d: 39
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 5874
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Marker-Inc-Korea/AutoRAG
  path: plugins/hermes/skills/schedule/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:15:10.332Z
  truncated: false
type: agent_skill
skill:
  skill_name: schedule
  description: Keep the AutoRAG index fresh and watch for duplicate files on their
    own, using Hermes cron. Use when the user wants indexing to run
    automatically ("re-index every night", "only while charging", "only between
    10pm and 7am") or wants to be told when duplicate documents appear ("check
    my Documents for duplicates every morning"), or wants to list or remove such
    schedules. Not for one-off searches (use the search skill), not for
    first-time setup (use the setup skill), and not for reacting to a file the
    moment it appears (use the automate skill).
  folder_path: plugins/hermes/skills/schedule
  extra_files:
    - scripts/autorag_schedule.py
  pack_total_skills: 8
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: marker-inc-korea-autorag
---

# Scheduled indexing and duplicate checks for Hermes
Two kinds of Hermes cron job, both **no-agent**: the script is the job, no model runs, and a script that prints
nothing delivers nothing. They cost no tokens and say nothing unless there is something to say.

| Kind | What it does | Speaks when |
| --- | --- | --- |
| `index` | Runs `autorag watch --once` so the index stays current. Power, time window and weekday rules are AutoRAG's own. | A refresh fails. A closed window or a battery skip is recorded, not delivered. |
| `duplicates` | Runs `autorag duplicates --json` and compares with what it reported last time. | A duplicate group is new or has grown. Never twice for the same group. |

The scan only reads files. It never moves, edits or deletes anything, and the message says so.

## Set one up

Ask for what is missing, then run the helper. Do not guess a schedule the user did not give; offer the default.

```bash
# keep the index fresh, only while plugged in and overnight
python3 "${HERMES_SKILL_DIR}/scripts/autorag_schedule.py" index \
  --id nightly --schedule "every 1h" --power ac --window 22:00-07:00

# tell me about new duplicates every morning at 9
python3 "${HERMES_SKILL_DIR}/scripts/autorag_schedule.py" duplicates \
  --id docs --schedule "0 9 * * *" --path ~/Documents --deliver telegram
```

- `--id` is letters, digits, `_` and `-`. The cron job is named `autorag-index-<id>` or `autorag-duplicates-<id>`.
- `--schedule` is Hermes' own grammar: `30m`, `every 2h`, or a cron expression. Defaults: `every 1h` (index) and
  `0 9 * * *` (duplicates). For the index job it is how often the gate is *checked*; `--window`, `--days` and
  `--power` decide whether a check actually indexes.
- `--window HH:MM-HH:MM` is local time and repeatable; `22:00-07:00` wraps midnight. `--days mon,tue,...`.
- `--deliver` is where a message goes: `local` (default, visible in `hermes cron list` and the job's output),
  `telegram`, `discord`, and so on. Pick it from what the user says ("message me" is their messaging app).
- `--path` for `duplicates` is a folder to scan (repeatable). Without it the configured AutoRAG search paths are scanned.
- Running the same command again with the same `--id` **updates** the job instead of adding a second one.

The helper prints JSON. If it exits non-zero, show the user its `error` and stop; do not retry with guessed flags.
If it says no AutoRAG CLI was found, run the plugin's search pane once (it installs a resident copy) or pass
`--autorag-cli npx -y -p @autorag/librarian@2.13.12 autorag`.

## Check, list, remove

```bash
python3 "${HERMES_SKILL_DIR}/scripts/autorag_schedule.py" list
python3 "${HERMES_SKILL_DIR}/scripts/autorag_schedule.py" remove --kind index --id nightly
```

`list` shows each job, its schedule and the last result the script recorded (`refreshed`, `skipped` with the reason,
`failed`, or `scanned` with the group counts). `remove` deletes the cron job, the script and its state, and leaves other
jobs alone. To run one now: `hermes cron run <job id>`, then `hermes cron tick`.

## Things to tell the user

- The index job indexes the folders and archives AutoRAG is configured for; it does not add folders.
- On a laptop `--power ac` pauses indexing on battery. If the power state cannot be read, AutoRAG lets the run
  proceed rather than stopping indexing silently.
- Duplicate reports list paths only. Decide what to do with the copies together with the user; do not remove any.
- Hermes cron only fires while a gateway (or `hermes cron tick`) is running. `hermes cron status` shows whether one is.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Nothing ever happens | `hermes cron status`: no gateway serving the profile means no job fires. |
| Index job never indexes | `list`: `last.outcome` is `skipped` with `battery`, `outside-window` or `outside-day`. Loosen the rule. |
| A message says "AutoRAG index refresh failed" | Its text is the CLI's own error. A first refresh downloads models and can be slow; the job gives up after 55 minutes. |
| A message says "AutoRAG duplicate scan failed" | The scan's own error. The previous report is remembered, so the next good run does not repeat it. |
| Same duplicates reported again | They changed (a group gained a file, or went away and returned). Unchanged groups are never repeated. |
