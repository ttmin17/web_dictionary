---
slug: wshobson-agents-plugins-startup-business-analyst-skills-market-sizing-analysis
name: market-sizing-analysis
tagline: Calculate TAM/SAM/SOM for market opportunities using top-down,
  bottom-up, and value theory methodologies. Use this skill when sizing markets,
  estimati
summary: "Market sizing provides the foundation for startup strategy,
  fundraising, and business planning. Calculate market opportunity using three
  complementary methodologies: top-down (industry reports), bottom-up (customer
  se..."
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
  subpath: plugins/startup-business-analyst/skills/market-sizing-analysis
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
  path: plugins/startup-business-analyst/skills/market-sizing-analysis/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.205Z
  truncated: false
type: agent_skill
skill:
  skill_name: market-sizing-analysis
  description: Calculate TAM/SAM/SOM for market opportunities using top-down,
    bottom-up, and value theory methodologies. Use this skill when sizing
    markets, estimating addressable revenue, validating market opportunity for a
    new venture, or building investor-ready market analysis for a startup pitch
    or business plan.
  folder_path: plugins/startup-business-analyst/skills/market-sizing-analysis
  extra_files:
    - examples/saas-market-sizing.md
    - references/data-sources.md
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Market Sizing Analysis
Comprehensive market sizing methodologies for calculating Total Addressable Market (TAM), Serviceable Available Market (SAM), and Serviceable Obtainable Market (SOM) for startup opportunities.

## Overview

Market sizing provides the foundation for startup strategy, fundraising, and business planning. Calculate market opportunity using three complementary methodologies: top-down (industry reports), bottom-up (customer segment calculations), and value theory (willingness to pay).

## Core Concepts

### The Three-Tier Market Framework

**TAM (Total Addressable Market)**

- Total revenue opportunity if achieving 100% market share
- Defines the universe of potential customers
- Used for long-term vision and market validation
- Example: All email marketing software revenue globally

**SAM (Serviceable Available Market)**

- Portion of TAM targetable with current product/service
- Accounts for geographic, segment, or capability constraints
- Represents realistic addressable opportunity
- Example: AI-powered email marketing for e-commerce in North America

**SOM (Serviceable Obtainable Market)**

- Realistic market share achievable in 3-5 years
- Accounts for competition, resources, and market dynamics
- Used for financial projections and fundraising
- Example: 2-5% of SAM based on competitive landscape

### When to Use Each Methodology

**Top-Down Analysis**

- Use when established market research exists
- Best for mature, well-defined markets
- Validates market existence and growth
- Starts with industry reports and narrows down

**Bottom-Up Analysis**

- Use when targeting specific customer segments
- Best for new or niche markets
- Most credible for investors
- Builds from customer data and pricing

**Value Theory**

- Use when creating new market categories
- Best for disruptive innovations
- Estimates based on value creation
- Calculates willingness to pay for problem solution

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.
