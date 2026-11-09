---
slug: nimbalyst-nimbalyst-packages-extensions-developer-claude-plugin-skills-git-commit
name: git-commit
tagline: "Create git commits using Nimbalyst's interactive commit proposal
  widget. ONLY use when the user explicitly clicks \"Commit with AI\" button or
  asks for "
summary: "IMPORTANT: Only use this when: - The user clicks the \"Commit with
  AI\" button (you'll see a message asking you to use
  developergitcommitproposal) - The user explicitly asks for \"smart commit\" or
  \"commit with AI\""
categories:
  - coding-agents
tags:
  - agentic-ai
  - agentic-ide
  - ai-agents
  - ai-coding-assistant
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: nimbalyst/nimbalyst
  subpath: packages/extensions/developer/claude-plugin/skills/git-commit
  official_vendor: false
  license: MIT
signals:
  stars: 2047
  last_commit: 2026-11-04T07:28:07Z
  stars_delta_7d: 24
  stars_growth_pct: 1.2
  trending_score: 24.28
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1931
    - 1975
    - 2023
    - 2047
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nimbalyst/nimbalyst
  path: packages/extensions/developer/claude-plugin/skills/git-commit/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:27.662Z
  truncated: false
type: agent_skill
skill:
  skill_name: git-commit
  description: Create git commits using Nimbalyst's interactive commit proposal
    widget. ONLY use when the user explicitly clicks "Commit with AI" button or
    asks for "smart commit". For regular commit requests, use standard git
    commands instead.
  folder_path: packages/extensions/developer/claude-plugin/skills/git-commit
  extra_files: []
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: nimbalyst-nimbalyst
---

# Git Commit Workflow in Nimbalyst
This skill is for the "Commit with AI" feature which provides an interactive commit proposal widget.

**IMPORTANT: Only use this when:**
- The user clicks the "Commit with AI" button (you'll see a message asking you to use developer_git_commit_proposal)
- The user explicitly asks for "smart commit" or "commit with AI"

**Do NOT use this for:**
- Generic commit requests like "commit this", "commit the changes", "make a commit"
- For those, use standard git commands: `git add` and `git commit`

## Required Steps

1. **Check if file context is already provided in the prompt**
   When the user clicks "Commit with AI", the prompt includes a pre-fetched list of session-edited files with uncommitted changes. If you see a file list in the prompt (lines like `- path/to/file.ts (modified)`), skip step 2 and go directly to step 3 using those files.

2. **Get session-edited files (fallback only)**
   Only if no file list was provided in the prompt:
   Call `mcp__nimbalyst__get_session_edited_files` to get ALL files you edited during this AI session, then cross-reference with git status.

3. **Propose the commit**
   Call `mcp__nimbalyst__developer_git_commit_proposal` with:
   - `filesToStage`: ALL session-edited files that have changes (do not cherry-pick a subset)
   - `commitMessage`: A well-crafted commit message following the guidelines below
   - `reasoning`: Explanation of why these files were selected

## Commit Message Guidelines

- Start with type prefix: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`
- **Focus on IMPACT and WHY, not implementation details**
- Title describes user-visible outcome or bug fixed
- Use bullet points (dash prefix) only for multiple distinct changes
- Keep lines under 72 characters
- No emojis
- Lead with problem solved or capability added, not technique used

### Good vs Bad Examples

**BAD**: "feat: add pre-edit tagging for non-agentic AI providers"
**GOOD**: "fix: OpenAI/LMStudio diffs now persist across app restarts"

**BAD**: "refactor: extract helper function for validation"
**GOOD**: "fix: prevent crash when user input is empty"

## Important

- Do NOT run `git add` or `git commit` commands directly
- Do NOT add "Co-Authored-By" or attribution lines
- Do NOT add marketing taglines or links
- Include ALL session-edited files that have changes - the user can deselect files in the widget if needed
- The widget allows users to review, edit the message, and select/deselect files before confirming
