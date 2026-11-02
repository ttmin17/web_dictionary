---
slug: cocoindex-io-cocoindex-dev-agent-skills-upgrade-examples
name: upgrade-examples
tagline: This skill should be used when upgrading the cocoindex package version
  in all example pyproject.toml files. It uses regex-based sed commands to
  effici
summary: "Example: /upgrade-examples 1.0.0a5"
categories:
  - databases-memory
tags:
  - agentic-data-framework
  - ai-agents
  - change-data-capture
  - codebase-intelligence
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: cocoindex-io/cocoindex
  subpath: dev/agent-skills/upgrade-examples
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11811
  last_commit: 2026-11-02T01:17:58Z
  stars_delta_7d: 57
  stars_growth_pct: 0.5
  trending_score: 57.28
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11720
    - 11754
    - 11811
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: cocoindex-io/cocoindex
  path: dev/agent-skills/upgrade-examples/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:02.416Z
  truncated: false
type: agent_skill
skill:
  skill_name: upgrade-examples
  description: This skill should be used when upgrading the cocoindex package
    version in all example pyproject.toml files. It uses regex-based sed
    commands to efficiently update version constraints across multiple files at
    once.
  folder_path: dev/agent-skills/upgrade-examples
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cocoindex-io-cocoindex
---

# Upgrade Example Dependencies
Upgrade the cocoindex version in all example `pyproject.toml` files.

## Usage

```
/upgrade-examples <version>
```

Example: `/upgrade-examples 1.0.0a5`

## Instructions

To upgrade all example dependencies (replace `VERSION` with the actual version, e.g., `1.0.0a10`):

1. Create a new branch for the changes:

```bash
git checkout -b ex-dep-VERSION
```

2. Run the following command to update all example pyproject.toml files.

**Important:** Use the literal version string directly in the sed command. Do not use shell variables as quoting issues can cause the version to be omitted.

```bash
find examples -name "pyproject.toml" -not -path "*/.venv/*" -exec grep -l "cocoindex" {} \; | xargs sed -i '' 's/cocoindex\([^>]*\)>=[0-9][0-9a-zA-Z.]*/cocoindex\1>=VERSION/g'
```

3. Verify the changes show the correct version:

```bash
grep -r "cocoindex.*>=" examples --include="pyproject.toml" | grep -v ".venv"
```

4. Commit and push the changes:

```bash
git add examples/*/pyproject.toml
git commit -m "chore: upgrade examples deps to cocoindex-VERSION"
git push -u origin ex-dep-VERSION
```

5. Create a PR using the `gh` CLI and capture the PR URL from its output:

```bash
gh pr create --base v1 --title "chore: upgrade examples deps to cocoindex-VERSION" --body ""
```

6. Switch back to the previous branch and delete the local branch:

```bash
git checkout v1
git branch -d ex-dep-VERSION
```

7. Report the number of files updated and provide the PR link from the `gh pr create` output to the user.
