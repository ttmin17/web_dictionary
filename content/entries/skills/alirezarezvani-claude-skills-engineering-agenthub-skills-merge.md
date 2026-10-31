---
slug: alirezarezvani-claude-skills-engineering-agenthub-skills-merge
name: merge
tagline: Merge the winning agent's branch into base, archive losers, and clean
  up worktrees. Use when the user runs /hub:merge or asks to land the winning
  Agen
summary: "If --agent specified, use that. Otherwise, use the #1 ranked agent
  from the most recent /hub:eval."
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
  subpath: engineering/agenthub/skills/merge
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
  path: engineering/agenthub/skills/merge/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.255Z
  truncated: false
type: agent_skill
skill:
  skill_name: merge
  description: Merge the winning agent's branch into base, archive losers, and
    clean up worktrees. Use when the user runs /hub:merge or asks to land the
    winning AgentHub result and tidy the session.
  folder_path: engineering/agenthub/skills/merge
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /hub:merge — Merge Winner
Merge the best agent's branch into the base branch, archive losing branches via git tags, and clean up worktrees.

## Usage

```
/hub:merge                                       # Merge winner of latest session
/hub:merge 20260317-143022                       # Merge winner of specific session
/hub:merge 20260317-143022 --agent agent-2       # Explicitly choose winner
```

## What It Does

### 1. Identify Winner

If `--agent` specified, use that. Otherwise, use the #1 ranked agent from the most recent `/hub:eval`.

### 2. Merge Winner

```bash
git checkout {base_branch}
git merge --no-ff hub/{session-id}/{winner}/attempt-1 \
  -m "hub: merge {winner} from session {session-id}

Task: {task}
Winner: {winner}
Session: {session-id}"
```

### 3. Archive Losers

For each non-winning agent:

```bash
# Create archive tag (preserves commits forever)
git tag hub/archive/{session-id}/{agent-id} hub/{session-id}/{agent-id}/attempt-1

# Delete branch ref (commits preserved via tag)
git branch -D hub/{session-id}/{agent-id}/attempt-1
```

### 4. Clean Up Worktrees

```bash
python {skill_path}/scripts/session_manager.py --cleanup {session-id}
```

### 5. Post Merge Summary

Write `.agenthub/board/results/merge-summary.md`:

```markdown
---author: coordinator
timestamp: {now}
channel: results
---
## Merge Summary

- **Session**: {session-id}
- **Winner**: {winner}
- **Merged into**: {base_branch}
- **Archived**: {loser-1}, {loser-2}, ...
- **Worktrees cleaned**: {count}
```

### 6. Update State

```bash
python {skill_path}/scripts/session_manager.py --update {session-id} --state merged
```

## Safety

- **Confirm with user** before merging — show the diff summary first
- **Never force-push** — merge is always `--no-ff` for clear history
- **Archive, don't delete** — losing agents' commits are preserved via tags
- **Clean worktrees** — don't leave orphan directories on disk

## After Merge

Tell the user:
- Winner merged into `{base_branch}`
- Losers archived with tags `hub/archive/{session-id}/agent-{N}`
- Worktrees cleaned up
- Session state: `merged`
