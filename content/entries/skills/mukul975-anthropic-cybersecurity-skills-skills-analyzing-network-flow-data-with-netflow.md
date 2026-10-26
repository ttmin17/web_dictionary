---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-network-flow-data-with-netflow
name: analyzing-network-flow-data-with-netflow
tagline: Parse NetFlow v9 and IPFIX records to detect volumetric anomalies, port
  scanning, data exfiltration, and C2 beaconing patterns. Uses the Python netflo
summary: "- When investigating security incidents that require analyzing network
  flow data with netflow - When building detection rules or threat hunting
  queries for this domain - When SOC analysts need structured procedures fo..."
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
  subpath: skills/analyzing-network-flow-data-with-netflow
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
  path: skills/analyzing-network-flow-data-with-netflow/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.326Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-network-flow-data-with-netflow
  description: Parse NetFlow v9 and IPFIX records to detect volumetric anomalies,
    port scanning, data exfiltration, and C2 beaconing patterns. Uses the Python
    netflow library to decode flow records, builds traffic baselines, and
    applies statistical analysis to identify flows with abnormal byte counts,
    connection durations, and periodic timing patterns.
  folder_path: skills/analyzing-network-flow-data-with-netflow
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

# Analyzing Network Flow Data with Netflow
## When to Use

- When investigating security incidents that require analyzing network flow data with netflow
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Familiarity with network security concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Instructions

1. Install dependencies: `pip install netflow`
2. Collect NetFlow/IPFIX data from routers or use the built-in collector: `python -m netflow.collector -p 9995`
3. Parse captured flow data using `netflow.parse_packet()`.
4. Analyze flows for:
   - Port scanning: single source to many destinations on same port
   - Data exfiltration: high byte-count outbound flows to unusual destinations
   - C2 beaconing: periodic connections with consistent intervals
   - Volumetric anomalies: traffic spikes beyond baseline thresholds
5. Generate a prioritized findings report.

```bash
python scripts/agent.py --flow-file captured_flows.json --output netflow_report.json
```

## Examples

### Parse NetFlow v9 Packet
```python
import netflow
data, _ = netflow.parse_packet(raw_bytes, templates={})
for flow in data.flows:
    print(flow.IPV4_SRC_ADDR, flow.IPV4_DST_ADDR, flow.IN_BYTES)
```
