---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-memory-forensics-with-lime-and-volatility
name: analyzing-memory-forensics-with-lime-and-volatility
tagline: "Performs Linux memory acquisition using LiME (Linux Memory Extractor)
  kernel module and analysis with Volatility 3 framework. Extracts process
  lists, "
summary: "- When investigating security incidents that require analyzing memory
  forensics with lime and volatility - When building detection rules or threat
  hunting queries for this domain - When SOC analysts need structured pr..."
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
  subpath: skills/analyzing-memory-forensics-with-lime-and-volatility
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
  path: skills/analyzing-memory-forensics-with-lime-and-volatility/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.325Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-memory-forensics-with-lime-and-volatility
  description: >
    Performs Linux memory acquisition using LiME (Linux Memory Extractor) kernel
    module and analysis with Volatility 3 framework. Extracts process lists,
    network connections, bash history, loaded kernel modules, and injected code
    from Linux memory images. Use when performing incident response on
    compromised Linux systems.
  folder_path: skills/analyzing-memory-forensics-with-lime-and-volatility
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

# Analyzing Memory Forensics with LiME and Volatility
## When to Use

- When investigating security incidents that require analyzing memory forensics with lime and volatility
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Familiarity with security operations concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Instructions

Acquire Linux memory using LiME kernel module, then analyze with Volatility 3
to extract forensic artifacts from the memory image.

```bash
# LiME acquisition
insmod lime-$(uname -r).ko "path=/evidence/memory.lime format=lime"

# Volatility 3 analysis
vol3 -f /evidence/memory.lime linux.pslist
vol3 -f /evidence/memory.lime linux.bash
vol3 -f /evidence/memory.lime linux.sockstat
```

```python
import volatility3
from volatility3.framework import contexts, automagic
from volatility3.plugins.linux import pslist, bash, sockstat

# Programmatic Volatility 3 usage
context = contexts.Context()
automagics = automagic.available(context)
```

Key analysis steps:
1. Acquire memory with LiME (format=lime or format=raw)
2. List processes with linux.pslist, compare with linux.psscan
3. Extract bash command history with linux.bash
4. List network connections with linux.sockstat
5. Check loaded kernel modules with linux.lsmod for rootkits

## Examples

```bash
# Full forensic workflow
vol3 -f memory.lime linux.pslist | grep -v "\[kthread\]"
vol3 -f memory.lime linux.bash
vol3 -f memory.lime linux.malfind
vol3 -f memory.lime linux.lsmod
```
