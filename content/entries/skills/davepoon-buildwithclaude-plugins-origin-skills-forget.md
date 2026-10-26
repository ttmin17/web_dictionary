---
slug: davepoon-buildwithclaude-plugins-origin-skills-forget
name: forget
tagline: Delete a memory from Origin by ID. Destructive and cannot be undone —
  prefer `/capture` with `supersedes` for corrections. Invoked as `/forget
  <source
summary: You need the sourceid. If the user did not provide it, call /recall
  first to find the matching memory and confirm with the user before deleting.
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
  subpath: plugins/origin/skills/forget
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
  path: plugins/origin/skills/forget/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.622Z
  truncated: false
type: agent_skill
skill:
  skill_name: forget
  description: >
    Delete a memory from Origin by ID. Destructive and cannot be undone — prefer
    `/capture` with `supersedes` for corrections. Invoked as `/forget
    <source_id>`.
  folder_path: plugins/origin/skills/forget
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# /forget
Permanently delete a memory by its `source_id`.

## How to invoke

You need the `source_id`. If the user did not provide it, call
`/recall` first to find the matching memory and confirm with the
user before deleting.

```
forget(memory_id="<source_id>")
```

## When to use

- User says "forget this", "delete that", "that's wrong, remove it".
- User explicitly identifies a memory by ID.

## When NOT to use

- For corrections, prefer storing a new memory with `supersedes` pointing
  at the old one. That preserves history. Use `/capture` with the
  `supersedes` arg instead.
- Bulk deletions — call `/review` first, confirm with the user,
  then delete one at a time.

## Safety

Deletion is destructive. Always confirm with the user before calling forget,
unless the user has already given an explicit, unambiguous instruction in
the same turn (e.g. they pasted the ID and said "delete this").

## Auto-commit ~/.origin/

If the deletion removed a page md (daemon archives the page and
KnowledgeWriter unlinks the file), snapshot the change. Defensive —
silent skip if `git` missing, `~/.origin/` not a repo, or no diff.

```
Bash: git -C ~/.origin add -A && \
      git -C ~/.origin -c user.name=Origin -c user.email=daemon@origin.local \
          commit --quiet -m "forget: <source_id>" 2>/dev/null || \
      (sleep 1 && git -C ~/.origin add -A && \
       git -C ~/.origin -c user.name=Origin -c user.email=daemon@origin.local \
           commit --quiet -m "forget: <source_id>" 2>/dev/null) || true
```

The retry handles index.lock races — the daemon may be writing to
`~/.origin/` at the same moment (auto-commit from captures). One-second
wait is enough for the daemon to release the lock.
