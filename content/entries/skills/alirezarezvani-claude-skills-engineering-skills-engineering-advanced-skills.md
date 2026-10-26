---
slug: alirezarezvani-claude-skills-engineering-skills-engineering-advanced-skills
name: engineering-advanced-skills
tagline: Index of 37 advanced engineering agent skills for Claude Code, Codex,
  Gemini CLI, Cursor, OpenClaw. Use when browsing or choosing among the
  POWERFUL-t
summary: "Note: release management merged into changelog-generator/ (version
  bumper + hotfix/rollback procedures live there now)."
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
  subpath: engineering/skills/engineering-advanced-skills
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 523
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
  path: engineering/skills/engineering-advanced-skills/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.261Z
  truncated: false
type: agent_skill
skill:
  skill_name: engineering-advanced-skills
  description: "Index of 37 advanced engineering agent skills for Claude Code,
    Codex, Gemini CLI, Cursor, OpenClaw. Use when browsing or choosing among the
    POWERFUL-tier engineering skills: agent design, RAG, MCP servers, CI/CD,
    database design, observability, security auditing, changelog/release
    automation, reliability (SLO/chaos/flags/operators), platform ops."
  folder_path: engineering/skills/engineering-advanced-skills
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Engineering Advanced Skills (POWERFUL Tier)
37 advanced engineering skills for complex architecture, automation, reliability, and platform operations.

## Quick Start

### Claude Code
```
/read engineering/skills/agent-designer/SKILL.md
```

### Codex CLI
```bash
npx agent-skills-cli add alirezarezvani/claude-skills/engineering
```

## Skills Overview

| Skill | Folder | Focus |
|-------|--------|-------|
| Agent Designer | `agent-designer/` | Multi-agent architecture: plan, schema-generate, evaluate |
| Agent Workflow Designer | `agent-workflow-designer/` | Workflow orchestration scaffolds |
| API Design Reviewer | `api-design-reviewer/` | REST/GraphQL linting, breaking changes |
| API Test Suite Builder | `api-test-suite-builder/` | API test generation |
| Browser Automation | `browser-automation/` | Playwright/Selenium automation patterns |
| Changelog Generator | `changelog-generator/` | Changelogs, semantic version bumps, hotfix/rollback discipline |
| Chaos Engineering | `chaos-engineering/` | Experiment design, blast-radius, postmortems |
| CI/CD Pipeline Builder | `ci-cd-pipeline-builder/` | Pipeline generation |
| Codebase Onboarding | `codebase-onboarding/` | New dev onboarding guides |
| Database Designer | `database-designer/` | Schema analysis, index optimization, migrations |
| Database Schema Designer | `database-schema-designer/` | ERD, normalization |
| Dependency Auditor | `dependency-auditor/` | Dependency security scanning |
| Env Secrets Manager | `env-secrets-manager/` | Secrets rotation, vault |
| Feature Flags Architect | `feature-flags-architect/` | Flag debt, rollout plans, kill switches |
| Focused Fix | `focused-fix/` | Systematic feature/module repair |
| Full Page Screenshot | `full-page-screenshot/` | Full-page capture tooling |
| Git Worktree Manager | `git-worktree-manager/` | Parallel branch workflows |
| Interview System Designer | `interview-system-designer/` | Hiring pipeline design |
| Kubernetes Operator | `kubernetes-operator/` | CRD validation, reconcile linting |
| MCP Server Builder | `mcp-server-builder/` | MCP tool creation |
| Migration Architect | `migration-architect/` | System migration planning |
| Monorepo Navigator | `monorepo-navigator/` | Monorepo tooling |
| Observability Designer | `observability-designer/` | Dashboards, alert noise (SLOs → slo-architect) |
| Performance Profiler | `performance-profiler/` | CPU, memory, load profiling |
| PR Review Expert | `pr-review-expert/` | Pull request analysis |
| RAG Architect | `rag-architect/` | RAG design, chunking, retrieval evaluation |
| Runbook Generator | `runbook-generator/` | Operational runbooks |
| Secrets Vault Manager | `secrets-vault-manager/` | Vault patterns, HCL |
| Self-Eval | `self-eval/` | Honest work-quality scoring |
| Ship Gate | `ship-gate/` | Pre-production audit (89 checks) |
| Skill Security Auditor | `skill-security-auditor/` | Skill vulnerability scanning |
| Skill Tester | `skill-tester/` | Skill quality evaluation |
| SLO Architect | `slo-architect/` | SLO/SLI design, error budgets, burn-rate alerts |
| Spec-Driven Workflow | `spec-driven-workflow/` | Spec-first development gates |
| SQL Database Assistant | `sql-database-assistant/` | Query optimization, 4 dialects |
| TC Tracker | `tc-tracker/` | Task context lifecycle + handoffs |
| Tech Debt Tracker | `tech-debt-tracker/` | Debt scan → prioritize → dashboard |

Note: release management merged into `changelog-generator/` (version bumper + hotfix/rollback procedures live there now).

## Rules

- Load only the specific skill SKILL.md you need
- These are advanced skills — combine with engineering-team/ core skills as needed
