---
slug: humanlayer-humanlayer-apps-riptide-rpi-claude-plugin-skills-create-plan
name: create-plan
tagline: Only use when the user explicitly invokes this skill by name.
summary: "1. Read all input files FULLY: - Use Read tool WITHOUT limit/offset to
  read all provided file paths - ls -La .humanlayer/tasks/TASKNAME to find all
  related documents in the task directory. Do NOT use the Grep or Glob..."
categories:
  - other
tags:
  - agents
  - amp
  - claude-code
  - codex
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: humanlayer/humanlayer
  subpath: apps/riptide-rpi-claude-plugin/skills/create-plan
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 12810
  last_commit: 2026-11-02T23:41:54Z
  stars_delta_7d: 282
  stars_growth_pct: 2.3
  trending_score: 288.35
  velocity_source: snapshot_delta
  sparkline_4w:
    - 12528
    - 12810
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: humanlayer/humanlayer
  path: apps/riptide-rpi-claude-plugin/skills/create-plan/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:51.740Z
  truncated: false
type: agent_skill
skill:
  skill_name: create-plan
  description: Only use when the user explicitly invokes this skill by name.
  folder_path: apps/riptide-rpi-claude-plugin/skills/create-plan
  extra_files:
    - references/plan_final_answer.md
    - references/plan_final_answer_disabled.md
    - references/plan_final_answer_in_worktree.md
    - references/plan_template.md
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: humanlayer-humanlayer
---

# Create Plan
You are in the final Plan Writing phase. Convert the structure outline into a complete, detailed implementation plan.

## Steps

1. **Read all input files FULLY**:
   - Use Read tool WITHOUT limit/offset to read all provided file paths
   - `ls -La .humanlayer/tasks/TASKNAME` to find all related documents in the task directory. Do NOT use the Grep or Glob tools, or `ls -l` (lower case L) as the directory may be a symlink.
   - Read everything in the task directory to build full context, excluding research questions documents
   - **DO NOT read research questions documents** - research questions are inputs to the research phase only. Use the completed research document instead.

2. **Read relevant code files**:
   - Read any source files mentioned in the research, design, or structure documents
   - Build context for writing specific code examples

3. **Read the plan template**:

`Read({SKILLBASE}/references/plan_template.md)`

4. **Write the implementation plan**:
   - Write to `.humanlayer/tasks/ENG-XXXX-description/NN-plan-DESCRIPTION.md`
   - **Chronological indexing**: `ls` the task directory, find the highest existing NN- prefix, and use the next number (e.g. `06-plan-add-billing.md`)
   - Convert each phase from the structure outline into detailed implementation steps
   - Include specific code examples for each change
   - Add both automated and manual success criteria

## Plan Writing Guidelines

- Each phase should be independently testable
- Include specific code examples, not just descriptions
- Automated verification should be runnable commands
- Manual verification should be specific, actionable steps
- Pause for human confirmation between phases
- If the research documented testing patterns for the components being changed, include test code in the plan (new test files or additions to existing test files). Follow the existing test patterns found in the research.

## Document Precedence

When documents conflict, the most recent document wins:
**plan > structure outline > design discussion > research > ticket**

The plan is the final authority. Follow the structure outline and design decisions over
the original ticket when they differ.

## Output

1. **Check if worktree setup should be skipped**:

```
Read(.humanlayer/workspace.json)
Read(.humanlayer/workspace.local.json)
Bash(git rev-parse --git-dir)
```

2. **Read the appropriate final output template**:

<condition if=" OR git-dir output contains '.git/worktrees/'">

`Read({SKILLBASE}/references/plan_final_answer_in_worktree.md)`

<else if="disabled is true (workspace.local.json takes precedence over workspace.json)">

Check out the task branch for the user, defaulting to the task slug at .humanlayer/tasks/TASKSLUG

`Bash(git checkout -b [BRANCHNAME])`
`Read({SKILLBASE}/references/plan_final_answer_disabled.md)`

<else>

`Read({SKILLBASE}/references/plan_final_answer.md)`

</condition>

3. Respond following the selected template exactly. Do not include a summary or other information. Include cloud permalinks if available.

<guidance>
## Cloud Permalinks

When you write or edit documents in .humanlayer/tasks/, a cloud permalink is automatically provided in the hook response.
- The permalink appears as `additionalContext` after Write/Edit/MultiEdit/Read operations
- Use this permalink in your final output for easy navigation
- Example format: `http(s)://{DOMAIN}/artifacts/{artifactId}`

## Markdown Formatting

When writing markdown files that contain code blocks showing other markdown (like README examples or SKILL.md templates), use 4 backticks (````) for the outer fence so inner 3-backtick code blocks don't prematurely close it:

````markdown
# Example README
## Installation
```bash
npm install example
```
````

## Validation Design

Not every phase requires manual validation, don't put steps for manual validation just to have them. 
</guidance>
