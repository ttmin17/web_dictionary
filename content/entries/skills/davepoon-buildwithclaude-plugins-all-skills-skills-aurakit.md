---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-aurakit
name: aurakit
tagline: "Sonnet Amplified fullstack engine. 34 modes, SEC-01~15 OWASP security,
  13 runtime hooks, 75% token reduction. Install: npx @smorky85/aurakit"
summary: AuraKit transforms a single /aura command into a complete
  production-grade development pipeline with 34 modes, OWASP-complete security,
  and 75% token reduction.
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
  subpath: plugins/all-skills/skills/aurakit
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
  path: plugins/all-skills/skills/aurakit/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.578Z
  truncated: false
type: agent_skill
skill:
  skill_name: aurakit
  description: "Sonnet Amplified fullstack engine. 34 modes, SEC-01~15 OWASP
    security, 13 runtime hooks, 75% token reduction. Install: npx
    @smorky85/aurakit"
  folder_path: plugins/all-skills/skills/aurakit
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# AuraKit v6
> Sonnet Amplified fullstack development engine for Claude Code.

## Overview

AuraKit transforms a single `/aura` command into a complete production-grade development pipeline with 34 modes, OWASP-complete security, and 75% token reduction.

## Key Features

- **Sonnet Amplifier** — 5-step forced reasoning for Opus-level quality from Sonnet
- **34 Modes** — BUILD/FIX/CLEAN/DEPLOY/REVIEW + 28 extended (TDD, PM, QA, ORCHESTRATE, etc.)
- **SEC-01~15** — OWASP Top 10 complete inline security rules
- **13 Runtime Hooks** — Zero-token security enforcement (security-scan, bash-guard, bloat-check, auto-format, etc.)
- **Tiered Model** — ECO (Sonnet) / PRO (Opus) / MAX (full Opus) with automatic model selection
- **75% Token Reduction** — Verified: 82KB → 20KB per BUILD load
- **10 Language Reviewers** — TypeScript, Python, Go, Java, Rust, Kotlin, C++, Swift, PHP, Perl
- **5 Framework Patterns** — Next.js, Remix, Astro, Nuxt, SvelteKit
- **Instinct Learning** — Project patterns auto-saved and reused across sessions
- **8-Language UI** — Korean, English, Japanese, Chinese, Spanish, French, German, Italian

## Install

```bash
npx @smorky85/aurakit
# or
git clone https://github.com/smorky850612/Aurakit.git && cd Aurakit && bash install.sh
```

## Usage

```bash
/aura 로그인 기능 만들어줘      # BUILD (auto-detect)
/aura fix: TypeError in auth   # FIX mode
/aura review:                  # 4-agent parallel review
/aura! 버튼 색상 변경           # QUICK mode (~60% fewer tokens)
/aura pro 결제 시스템 구현      # PRO tier (Opus builder)
```

## Links

- **GitHub**: https://github.com/smorky850612/Aurakit
- **npm**: https://www.npmjs.com/package/@smorky85/aurakit
