---
slug: davepoon-buildwithclaude-plugins-agent-triforce-skills-security-audit
name: security-audit
tagline: Deep security audit covering OWASP Top 10, authentication,
  authorization, data protection, dependency vulnerabilities, and secrets
  scanning. Delegates
summary: "- Before a release to verify security posture - After significant code
  changes that touch authentication, authorization, or data handling - Periodic
  security review of the codebase - When adding new dependencies or ex..."
categories:
  - security-auth
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
  subpath: plugins/agent-triforce/skills/security-audit
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
  path: plugins/agent-triforce/skills/security-audit/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.576Z
  truncated: false
type: agent_skill
skill:
  skill_name: security-audit
  description: Deep security audit covering OWASP Top 10, authentication,
    authorization, data protection, dependency vulnerabilities, and secrets
    scanning. Delegates to the Centinela (QA) agent.
  folder_path: plugins/agent-triforce/skills/security-audit
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Security Audit
Performs a deep security audit using the Centinela (QA) agent.

## When to Use This Skill

- Before a release to verify security posture
- After significant code changes that touch authentication, authorization, or data handling
- Periodic security review of the codebase
- When adding new dependencies or external integrations

## What This Skill Does

1. Runs the SIGN IN checklist
2. Performs OWASP Top 10 systematic check (A01-A10)
3. Scans for hardcoded secrets, API keys, tokens, and connection strings
4. Audits dependencies for known CVEs
5. Checks smart contracts if Solidity is present (reentrancy, overflow, access control)
6. Runs Security Verification and Quality Verification checklists (TIME OUT)
7. Issues verdict and writes report to `docs/reviews/security-audit-{date}.md`
8. Prepares findings handoff to Dev agent

## How to Use

### Basic Usage

```
/security-audit
```

### Scoped Audit

```
/security-audit src/auth/ src/api/
```

## Example

**User**: `/security-audit src/payments/`

**Output**: A security audit report at `docs/reviews/security-audit-2026-02-23.md` with:
- OWASP Top 10 findings organized by severity
- Secrets scan results
- Dependency vulnerability report
- Verdict: APPROVED or CHANGES REQUIRED
- Fix order recommendation for the Dev agent

## Tips

- If no scope is specified, the entire `src/` directory is audited
- Critical findings trigger the Non-Normal emergency checklist
- The agent will never attempt to fix vulnerabilities — only document them
