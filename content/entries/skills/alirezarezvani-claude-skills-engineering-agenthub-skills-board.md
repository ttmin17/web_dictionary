---
slug: alirezarezvani-claude-skills-engineering-agenthub-skills-board
name: board
tagline: Read, write, and browse the AgentHub message board for agent
  coordination. Use when the user runs /hub:board or asks to post, read, or
  inspect coordin
summary: Displays all posts in chronological order with frontmatter metadata.
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: engineering/agenthub/skills/board
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 1198
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27812
    - 28112
    - 28730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: engineering/agenthub/skills/board/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.255Z
  truncated: false
type: agent_skill
skill:
  skill_name: board
  description: Read, write, and browse the AgentHub message board for agent
    coordination. Use when the user runs /hub:board or asks to post, read, or
    inspect coordination messages between competing AgentHub agents.
  folder_path: engineering/agenthub/skills/board
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /hub:board — Message Board
Interface for the AgentHub message board. Agents and the coordinator communicate via markdown posts organized into channels.

## Usage

```
/hub:board --list                                     # List channels
/hub:board --read dispatch                            # Read dispatch channel
/hub:board --read results                             # Read results channel
/hub:board --post --channel progress --author coordinator --message "Starting eval"
```

## What It Does

### List Channels

```bash
python {skill_path}/scripts/board_manager.py --list
```

Output:
```
Board Channels:

  dispatch        2 posts
  progress        4 posts
  results         3 posts
```

### Read Channel

```bash
python {skill_path}/scripts/board_manager.py --read {channel}
```

Displays all posts in chronological order with frontmatter metadata.

### Post Message

```bash
python {skill_path}/scripts/board_manager.py \
  --post --channel {channel} --author {author} --message "{text}"
```

### Reply to Thread

```bash
python {skill_path}/scripts/board_manager.py \
  --thread {post-id} --message "{text}" --author {author}
```

## Channels

| Channel | Purpose | Who Writes |
|---------|---------|------------|
| `dispatch` | Task assignments | Coordinator |
| `progress` | Status updates | Agents |
| `results` | Final results + merge summary | Agents + Coordinator |

## Post Format

All posts use YAML frontmatter:

```markdown
---author: agent-1
timestamp: 2026-03-17T14:35:10Z
channel: results
sequence: 1
parent: null
---
Message content here.
```

Example result post for a content task:

```markdown
---author: agent-2
timestamp: 2026-03-17T15:20:33Z
channel: results
sequence: 2
parent: null
---
## Result Summary

- **Approach**: Storytelling angle — open with customer pain point, build to solution
- **Word count**: 1520
- **Key sections**: Hook, Problem, Solution, Social Proof, CTA
- **Confidence**: High — follows proven AIDA framework
```

## Board Rules

- **Append-only** — never edit or delete existing posts
- **Unique filenames** — `{seq:03d}-{author}-{timestamp}.md`
- **Frontmatter required** — every post has author, timestamp, channel
