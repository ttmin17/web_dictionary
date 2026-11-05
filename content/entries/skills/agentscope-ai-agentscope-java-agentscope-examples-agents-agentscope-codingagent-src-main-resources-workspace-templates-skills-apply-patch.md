---
slug: agentscope-ai-agentscope-java-agentscope-examples-agents-agentscope-codingagent-src-main-resources-workspace-templates-skills-apply-patch
name: apply-patch
tagline: Apply multi-file or tricky edits atomically with git apply instead of
  many fragile edit_file calls. Use when changing several files at once or when
  ed
summary: "1. Write the unified diff to a file in the sandbox (use writefile or a
  heredoc via execute):"
categories:
  - agent-frameworks
tags:
  - adk
  - agent-framework
  - agentic
  - agentic-ai
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/apply-patch
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6265
  last_commit: 2026-11-05T08:34:33Z
  stars_delta_7d: 144
  stars_growth_pct: 2.4
  trending_score: 147.39
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6265
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/apply-patch/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:59.722Z
  truncated: false
type: agent_skill
skill:
  skill_name: apply-patch
  description: Apply multi-file or tricky edits atomically with git apply instead
    of many fragile edit_file calls. Use when changing several files at once or
    when edit_file fails to match.
  folder_path: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/apply-patch
  extra_files: []
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Apply Patch
The built-in `edit_file` does an exact string match on a single file and has no fuzzy
tolerance. For multi-file changes, or when `edit_file` keeps failing to find the string,
construct a unified diff and apply it atomically with git.

## Procedure

1. Write the unified diff to a file in the sandbox (use `write_file` or a heredoc via `execute`):

   ```
   diff --git a/path/to/file b/path/to/file
   --- a/path/to/file
   +++ b/path/to/file
   @@ -10,7 +10,7 @@ context line
   -old line
   +new line
   ```

2. Validate before applying: `git apply --check changes.patch`
3. Apply: `git apply changes.patch` (use `-p0` if paths are not `a/`...`b/`...).
4. If `git apply` rejects the hunk, the surrounding context is stale — `read_file` the exact
   lines again, regenerate the diff with correct context, and retry.

## When to prefer this

- Editing 3+ files for one logical change (atomic, all-or-nothing).
- Repetitive or whitespace-sensitive edits where `edit_file` exact-match struggles.
- Re-applying a patch produced elsewhere (e.g. from a PR or `git diff`).

Always run the verify-changes skill afterwards.
