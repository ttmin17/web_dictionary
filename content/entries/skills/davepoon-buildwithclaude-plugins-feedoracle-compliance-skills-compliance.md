---
slug: davepoon-buildwithclaude-plugins-feedoracle-compliance-skills-compliance
name: feedoracle-compliance
tagline: MiCA compliance evidence and stablecoin risk scoring. Use when the user
  asks about stablecoin compliance, MiCA status, peg stability, or needs verifia
summary: "MiCA compliance: micastatus for single token, micafullpack for full
  evidence, micamarketoverview for market-wide"
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
  subpath: plugins/feedoracle-compliance/skills/compliance
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
  path: plugins/feedoracle-compliance/skills/compliance/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.616Z
  truncated: false
type: agent_skill
skill:
  skill_name: feedoracle-compliance
  description: MiCA compliance evidence and stablecoin risk scoring. Use when the
    user asks about stablecoin compliance, MiCA status, peg stability, or needs
    verifiable evidence for audit workflows.
  folder_path: plugins/feedoracle-compliance/skills/compliance
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# FeedOracle Compliance Intelligence
You have access to FeedOracle's 27 MCP tools for compliance evidence in regulated tokenized markets. Every response is ES256K-signed and JWKS-verifiable.

## Tool Selection Guide

**MiCA compliance:** mica_status for single token, mica_full_pack for full evidence, mica_market_overview for market-wide

**Stablecoin risk:** peg_deviation for current peg, peg_history for 30-day trend, compliance_preflight for PASS/WARN/BLOCK

**Reserve and custody:** reserve_quality for composition, custody_risk for custodian analysis

**Audit trail:** audit_verify to check chain integrity, audit_query to list decisions, audit_log to log (user-initiated only)

**Natural language:** ai_query routes to the right evidence API automatically

## Response Guidelines

1. Always cite the request_id and status from tool responses
2. Reference ES256K signature and JWKS URL for verifiability
3. Present data factually - let the user draw conclusions
4. For write tools (audit_log, kya_register): only invoke on explicit user request
