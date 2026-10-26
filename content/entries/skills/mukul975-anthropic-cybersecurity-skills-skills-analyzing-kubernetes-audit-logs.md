---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-kubernetes-audit-logs
name: analyzing-kubernetes-audit-logs
tagline: Parses Kubernetes API server audit logs (JSON lines) to detect
  exec-into-pod, secret access, RBAC modifications, privileged pod creation, and
  anonymou
summary: "- When investigating security incidents that require analyzing
  kubernetes audit logs - When building detection rules or threat hunting
  queries for this domain - When SOC analysts need structured procedures for
  this an..."
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
  subpath: skills/analyzing-kubernetes-audit-logs
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
  path: skills/analyzing-kubernetes-audit-logs/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.323Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-kubernetes-audit-logs
  description: >-
    Parses Kubernetes API server audit logs (JSON lines) to detect
    exec-into-pod, secret access, RBAC modifications, privileged pod creation,
    and anonymous API access, and builds SIEM detection rules from the event
    patterns. Use when investigating a suspected cluster compromise,
    reconstructing what an attacker did through the API server, or writing
    Kubernetes-specific detection content. Keywords: audit policy, audit log,
    kube-apiserver, exec into pod, RBAC change, anonymous access, detection
    rules. Do not use for syscall-level detection inside a running container -
    use detecting-container-runtime-threats-with-falco.

    '
  folder_path: skills/analyzing-kubernetes-audit-logs
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

# Analyzing Kubernetes Audit Logs
## When to Use

- When investigating security incidents that require analyzing kubernetes audit logs
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Familiarity with container security concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Instructions

Parse Kubernetes audit log files (JSON lines format) to detect security-relevant
events including unauthorized access, privilege escalation, and data exfiltration.

```python
import json

with open("/var/log/kubernetes/audit.log") as f:
    for line in f:
        event = json.loads(line)
        verb = event.get("verb")
        resource = event.get("objectRef", {}).get("resource")
        user = event.get("user", {}).get("username")
        if verb == "create" and resource == "pods/exec":
            print(f"Pod exec by {user}")
```

Key events to detect:
1. pods/exec and pods/attach (shell into containers)
2. secrets access (get/list/watch)
3. clusterrolebindings creation (RBAC escalation)
4. Privileged pod creation
5. Anonymous or system:unauthenticated access

## Examples

```python
# Detect secret enumeration
if verb in ("get", "list") and resource == "secrets":
    print(f"Secret access: {user} -> {event['objectRef'].get('name')}")
```
