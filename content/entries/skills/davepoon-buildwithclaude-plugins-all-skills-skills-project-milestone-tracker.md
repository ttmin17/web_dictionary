---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-project-milestone-tracker
name: project-milestone-tracker
tagline: "项目管理里程碑跟踪器（Project Milestone
  Tracker）——当用户要求代理在代码库/项目会话中规划、跟踪里程碑、记录承诺或事件、生成进度报告时使用。核心：三层里程碑规则（文件依据/客户提供/待确\
  认）+ 原话+时间戳事件记录。Project milestone tracker: pl"
summary: "Use this skill when the user asks the agent to: - Plan milestones for
  a project / break work into tracked milestones - Track milestone progress and
  mark items done - Record a promise, decision, or event with original..."
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/all-skills/skills/project-milestone-tracker
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/all-skills/skills/project-milestone-tracker/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.593Z
  truncated: false
type: agent_skill
skill:
  skill_name: project-milestone-tracker
  description: "项目管理里程碑跟踪器（Project Milestone
    Tracker）——当用户要求代理在代码库/项目会话中规划、跟踪里程碑、记录承诺或事件、生成进度报告时使用。核心：三层里程碑规则（文件依据/客户提供/\
    待确认）+ 原话+时间戳事件记录。Project milestone tracker: plan and track project
    milestones, record events with original text + timestamp, generate status
    reports, using a three-tier milestone rule (contract-sourced /
    stakeholder-stated / pending-confirmation)."
  folder_path: plugins/all-skills/skills/project-milestone-tracker
  extra_files:
    - scripts/pm_track.py
    - templates/milestone-checklist.md
    - templates/status-report.md
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Project Milestone Tracker 项目管理里程碑跟踪器
A self-contained local tracker for planning and tracking project work in a repo session — no external service, no cloud, pure local files (Python stdlib only).

## When to Use

Use this skill when the user asks the agent to:
- Plan milestones for a project / break work into tracked milestones
- Track milestone progress and mark items done
- Record a promise, decision, or event with **original text + timestamp** (traceable claims)
- Generate a project status report (markdown)

It is designed for **repo-session work**: the agent runs local commands and keeps state in a local JSON file.

## Three-Tier Milestone Rule (三层里程碑规则)

Never invent milestone dates. Every milestone must carry a source tier:

| Tier | source | Meaning | Behavior |
|------|--------|---------|----------|
| 1 | `file` | Extracted from a contract/document | Authoritative; note the source document |
| 2 | `client` | Stated verbally by stakeholder | Recorded as stated; suggest written confirmation |
| 3 | `pending` | No milestone info yet | Flag "ask the client" — never self-plan |

## How to Use

All commands run via the bundled script (stdlib only, no install):

```bash
python3 scripts/pm_track.py --file .pm.json init "东区改造项目"
python3 scripts/pm_track.py --file .pm.json add-milestone "3月15日竣工验收" --source file --due 2026-03-15 --note "依据合同第四章"
python3 scripts/pm_track.py --file .pm.json add-milestone "甲方口头承诺月底回款" --source client --due 2026-03-31
python3 scripts/pm_track.py --file .pm.json add-milestone "材料进场节点待确认" --source pending
python3 scripts/pm_track.py --file .pm.json add-event "甲方说马上回款" --who 王总 --when "2026-03-10 14:30"
python3 scripts/pm_track.py --file .pm.json status
python3 scripts/pm_track.py --file .pm.json report   # markdown report
python3 scripts/pm_track.py --file .pm.json done 1
```

## Commands

| Command | What it does |
|---------|--------------|
| `init <name>` | Initialize a project tracker file |
| `add-milestone <title> --source file\|client\|pending [--due] [--note]` | Add a milestone with a source tier |
| `add-event <text> [--who] [--when]` | Record an event with original text + timestamp |
| `done <id>` | Mark a milestone done |
| `status` | Show all milestones + events + pending warnings |
| `report` | Print a markdown progress report |

## Example

```bash
$ python3 scripts/pm_track.py --file .pm.json init "门店装修"
$ python3 scripts/pm_track.py --file .pm.json add-milestone "6月10日完工验收" --source file --due 2026-06-10
$ python3 scripts/pm_track.py --file .pm.json add-milestone "水电改造完成" --source client
$ python3 scripts/pm_track.py --file .pm.json add-event "甲方电话说马上回款" --who 李总
$ python3 scripts/pm_track.py --file .pm.json status
📋 Project: 门店装修
=== 里程碑 (2 open) ===
  ⬜ #1 [file  ] 6月10日完工验收  (due 2026-06-10)
  ⬜ #2 [client] 水电改造完成
=== 事件记录 (1) ===
  • [2026-08-25 15:20] (李总) 甲方电话说马上回款
```

## Data & Portability

- State is stored in a local JSON file (default `.project-tracker.json`, or pass `--file`).
- Pure Python 3.8+ stdlib (`argparse`, `json`, `datetime`) — no pip installs, no network.
- Works anywhere the agent has a shell. The JSON file can be committed to the repo or git-ignored.

## Templates

A milestone planning checklist and a status report template live in `templates/` — copy and adapt.

## Pitfalls

- **Never invent due dates for `pending` milestones** — the whole point of the three-tier rule is that the agent asks the client instead of guessing.
- **Store original text, not paraphrases** — events keep `text` verbatim plus `when`/`who` so claims are traceable.
- `report` prints markdown to stdout; pipe to a file (`> report.md`) to save.
