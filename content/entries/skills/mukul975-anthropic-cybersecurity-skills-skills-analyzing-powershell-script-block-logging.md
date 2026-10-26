---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-powershell-script-block-logging
name: analyzing-powershell-script-block-logging
tagline: Parse Windows PowerShell Script Block Logs (Event ID 4104) from EVTX
  files to detect obfuscated commands, encoded payloads, and living-off-the-land
  te
summary: "- When investigating security incidents that require analyzing
  powershell script block logging - When building detection rules or threat
  hunting queries for this domain - When SOC analysts need structured procedures
  f..."
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
  subpath: skills/analyzing-powershell-script-block-logging
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
  path: skills/analyzing-powershell-script-block-logging/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.327Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-powershell-script-block-logging
  description: Parse Windows PowerShell Script Block Logs (Event ID 4104) from
    EVTX files to detect obfuscated commands, encoded payloads, and
    living-off-the-land techniques. Uses python-evtx to extract and reconstruct
    multi-block scripts, applies entropy analysis and pattern matching for
    Base64-encoded commands, Invoke-Expression abuse, download cradles, and AMSI
    bypass attempts.
  folder_path: skills/analyzing-powershell-script-block-logging
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

# Analyzing PowerShell Script Block Logging
## When to Use

- When investigating security incidents that require analyzing powershell script block logging
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Familiarity with security operations concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Instructions

1. Install dependencies: `pip install python-evtx lxml`
2. Collect PowerShell Operational logs: `Microsoft-Windows-PowerShell%4Operational.evtx`
3. Parse Event ID 4104 entries using python-evtx to extract ScriptBlockText, ScriptBlockId, and MessageNumber/MessageTotal for multi-part script reconstruction.
4. Apply detection heuristics:
   - Base64-encoded commands (`-EncodedCommand`, `FromBase64String`)
   - Download cradles (`DownloadString`, `DownloadFile`, `Invoke-WebRequest`, `Net.WebClient`)
   - AMSI bypass patterns (`AmsiUtils`, `amsiInitFailed`)
   - Obfuscation indicators (high entropy, tick-mark insertion, string concatenation)
5. Generate a report with reconstructed scripts, risk scores, and MITRE ATT&CK mappings.

```bash
python scripts/agent.py --evtx-file /path/to/PowerShell-Operational.evtx --output ps_analysis.json
```

## Examples

### Detect Encoded Command Execution
```python
import base64
if "-encodedcommand" in script_text.lower():
    encoded = script_text.split()[-1]
    decoded = base64.b64decode(encoded).decode("utf-16-le")
```

### Reconstruct Multi-Block Script
Scripts split across multiple 4104 events share a `ScriptBlockId`. Concatenate blocks ordered by `MessageNumber` to recover the full script.
