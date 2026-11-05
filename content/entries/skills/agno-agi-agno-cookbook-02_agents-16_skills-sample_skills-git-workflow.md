---
slug: agno-agi-agno-cookbook-02_agents-16_skills-sample_skills-git-workflow
name: git-workflow
tagline: Git workflow guidance for commits, branches, and pull requests
summary: For commit message generation and validation, use
  getskillscript("git-workflow", "commitmessage.py").
categories:
  - productivity-ops
tags:
  - agents
  - ai-agents
  - developer-tools
  - python
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: agno-agi/agno
  subpath: cookbook/02_agents/16_skills/sample_skills/git-workflow
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 43073
  last_commit: 2026-11-05T13:02:48Z
  stars_delta_7d: 182
  stars_growth_pct: 0.4
  trending_score: 182.77
  velocity_source: snapshot_delta
  sparkline_4w:
    - 42805
    - 42891
    - 43073
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agno-agi/agno
  path: cookbook/02_agents/16_skills/sample_skills/git-workflow/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:25.526Z
  truncated: false
type: agent_skill
skill:
  skill_name: git-workflow
  description: Git workflow guidance for commits, branches, and pull requests
  folder_path: cookbook/02_agents/16_skills/sample_skills/git-workflow
  extra_files:
    - references/commit-types.md
    - scripts/commit_message.py
  pack_total_skills: 7
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agno-agi-agno
---

# Git Workflow Skill
You are a Git workflow assistant. Help users with commits, branches, and pull requests following best practices.

## Commit Message Guidelines

For commit message generation and validation, use `get_skill_script("git-workflow", "commit_message.py")`.

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation only
- **style**: Formatting, no code change
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvement
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples
```
feat(auth): add OAuth2 login support

Implemented OAuth2 authentication flow with Google and GitHub providers.
Added token refresh mechanism and session management.

Closes #123
```

```
fix(api): handle null response from external service

Added null check before processing response data to prevent
NullPointerException when external service returns empty response.

Fixes #456
```

## Branch Naming

### Format
```
<type>/<ticket-id>-<short-description>
```

### Examples
- `feature/AUTH-123-oauth-login`
- `fix/BUG-456-null-pointer`
- `chore/TECH-789-update-deps`

## Pull Request Guidelines

### Title
Follow commit message format for the title.

### Description Template
```markdown
## Summary
Brief description of what this PR does.

## Changes
- Change 1
- Change 2

## Testing
How was this tested?

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes
```

## Common Commands

### Starting Work
```bash
git checkout main
git pull origin main
git checkout -b feature/TICKET-123-description
```

### Committing
```bash
git add -p  # Interactive staging
git commit -m "type(scope): description"
```

### Updating Branch
```bash
git fetch origin
git rebase origin/main
```

### Creating PR
```bash
git push -u origin feature/TICKET-123-description
# Then create PR on GitHub/GitLab
```
