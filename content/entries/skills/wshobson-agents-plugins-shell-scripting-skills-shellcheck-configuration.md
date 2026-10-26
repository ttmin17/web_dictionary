---
slug: wshobson-agents-plugins-shell-scripting-skills-shellcheck-configuration
name: shellcheck-configuration
tagline: Master ShellCheck static analysis configuration and usage for shell
  script quality. Use when setting up linting infrastructure, fixing code
  issues, or
summary: "- Setting up linting for shell scripts in CI/CD pipelines - Analyzing
  existing shell scripts for issues - Understanding ShellCheck error codes and
  warnings - Configuring ShellCheck for specific project requirements -..."
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/shell-scripting/skills/shellcheck-configuration
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/shell-scripting/skills/shellcheck-configuration/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.205Z
  truncated: false
type: agent_skill
skill:
  skill_name: shellcheck-configuration
  description: Master ShellCheck static analysis configuration and usage for shell
    script quality. Use when setting up linting infrastructure, fixing code
    issues, or ensuring script portability.
  folder_path: plugins/shell-scripting/skills/shellcheck-configuration
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# ShellCheck Configuration and Static Analysis
Comprehensive guidance for configuring and using ShellCheck to improve shell script quality, catch common pitfalls, and enforce best practices through static code analysis.

## When to Use This Skill

- Setting up linting for shell scripts in CI/CD pipelines
- Analyzing existing shell scripts for issues
- Understanding ShellCheck error codes and warnings
- Configuring ShellCheck for specific project requirements
- Integrating ShellCheck into development workflows
- Suppressing false positives and configuring rule sets
- Enforcing consistent code quality standards
- Migrating scripts to meet quality gates

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **Run ShellCheck in CI/CD** - Catch issues before merging
2. **Configure for your target shell** - Don't analyze bash as sh
3. **Document exclusions** - Explain why violations are suppressed
4. **Address violations** - Don't just disable warnings
5. **Enable strict mode** - Use `--enable=all` with careful exclusions
6. **Update regularly** - Keep ShellCheck current for new checks
7. **Use pre-commit hooks** - Catch issues locally before pushing
8. **Integrate with editors** - Get real-time feedback during development
