---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-ethereum-smart-contract-vulnerabilities
name: analyzing-ethereum-smart-contract-vulnerabilities
tagline: Perform static and symbolic analysis of Solidity smart contracts using
  Slither and Mythril to detect reentrancy, integer overflow, access control,
  and
summary: Smart contract vulnerabilities have led to billions of dollars in
  losses across DeFi protocols. Unlike traditional software, deployed smart
  contracts are immutable and handle real financial assets, making
  pre-deployme...
categories:
  - security-auth
tags:
  - ai-agents
  - claude-code
  - cloud-security
  - cybersecurity
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: mukul975/Anthropic-Cybersecurity-Skills
  subpath: skills/analyzing-ethereum-smart-contract-vulnerabilities
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 35031
  last_commit: 2026-08-31T04:32:44Z
  stars_delta_7d: 353
  stars_growth_pct: 1
  trending_score: 356.59
  velocity_source: snapshot_delta
  sparkline_4w:
    - 33900
    - 34367
    - 34678
    - 35031
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mukul975/Anthropic-Cybersecurity-Skills
  path: skills/analyzing-ethereum-smart-contract-vulnerabilities/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.323Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-ethereum-smart-contract-vulnerabilities
  description: Perform static and symbolic analysis of Solidity smart contracts
    using Slither and Mythril to detect reentrancy, integer overflow, access
    control, and other vulnerability classes before deployment to Ethereum
    mainnet.
  folder_path: skills/analyzing-ethereum-smart-contract-vulnerabilities
  extra_files:
    - LICENSE
    - references/api-reference.md
    - scripts/agent.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Analyzing Ethereum Smart Contract Vulnerabilities
## Overview

Smart contract vulnerabilities have led to billions of dollars in losses across DeFi protocols. Unlike traditional software, deployed smart contracts are immutable and handle real financial assets, making pre-deployment security analysis critical. Slither performs fast static analysis using an intermediate representation to detect over 90 vulnerability patterns in seconds, while Mythril uses symbolic execution and SMT solving to discover complex execution path vulnerabilities like reentrancy and integer overflows. This skill covers running both tools against Solidity contracts, interpreting results, triaging findings by severity, and generating audit reports.


## When to Use

- When investigating security incidents that require analyzing ethereum smart contract vulnerabilities
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Python 3.10+ with pip
- Slither (pip install slither-analyzer) and solc compiler
- Mythril (pip install mythril) with solc-select for compiler version management
- Solidity source code or compiled contract bytecode
- Foundry or Hardhat development framework (optional, for project-level analysis)

## Steps

### Step 1: Run Slither Static Analysis

Execute Slither against the contract codebase to identify vulnerability patterns, optimization opportunities, and code quality issues using its 90+ built-in detectors.

### Step 2: Run Mythril Symbolic Execution

Run Mythril deep analysis to explore execution paths and discover reentrancy, unchecked external calls, and arithmetic vulnerabilities that require path-sensitive analysis.

### Step 3: Triage and Correlate Findings

Combine results from both tools, deduplicate findings, assess severity based on exploitability and financial impact, and filter false positives.

### Step 4: Generate Audit Report

Produce a structured audit report with vulnerability descriptions, affected code locations, exploit scenarios, and remediation recommendations.

## Expected Output

JSON report listing vulnerabilities with SWC (Smart Contract Weakness Classification) identifiers, severity ratings, affected functions, and suggested fixes.
