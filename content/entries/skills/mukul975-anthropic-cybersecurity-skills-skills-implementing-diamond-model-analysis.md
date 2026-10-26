---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-diamond-model-analysis
name: implementing-diamond-model-analysis
tagline: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
summary: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
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
  subpath: skills/implementing-diamond-model-analysis
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
  path: skills/implementing-diamond-model-analysis/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-diamond-model-analysis
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/implementing-diamond-model-analysis
  extra_files:
    - LICENSE
    - assets/template.md
    - references/api-reference.md
    - references/standards.md
    - references/workflows.md
    - scripts/agent.py
    - scripts/process.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Implementing Diamond Model Analysis
## Overview

The Diamond Model of Intrusion Analysis provides a structured framework for analyzing cyber intrusions by examining four core features: Adversary, Capability, Infrastructure, and Victim. This skill covers implementing the Diamond Model programmatically to classify and correlate intrusion events, build activity threads linking related events, create activity-attack graphs, and generate pivot-ready intelligence from intrusion data.


## When to Use

- When deploying or configuring implementing diamond model analysis capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Python 3.9+ with `networkx`, `stix2`, `graphviz` libraries
- Understanding of the Diamond Model core and meta-features
- Access to threat intelligence data (MISP/OpenCTI events)
- Familiarity with MITRE ATT&CK for capability mapping

## Key Concepts

### Diamond Model Core Features
- **Adversary**: The threat actor or operator conducting the intrusion
- **Capability**: The tools, techniques, and malware used (maps to ATT&CK)
- **Infrastructure**: C2 servers, domains, email addresses, hosting providers
- **Victim**: Target organization, system, person, or data asset

### Meta-Features
- **Timestamp**: When the event occurred
- **Phase**: Kill chain stage (recon, delivery, exploitation, etc.)
- **Result**: Success, failure, or unknown
- **Direction**: Adversary-to-infrastructure, infrastructure-to-victim, etc.
- **Methodology**: Social engineering, technical exploit, insider threat
- **Resources**: Financial, human, technical resources required

### Activity Threads and Groups
- **Activity Thread**: Sequence of Diamond events from a single adversary operation
- **Activity Group**: Cluster of threads attributed to the same adversary

## Workflow

### Step 1: Define Diamond Event Data Structure

```python
from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional
import json
import uuid

@dataclass
class DiamondEvent:
    adversary: str = ""
    capability: str = ""
    infrastructure: str = ""
    victim: str = ""
    timestamp: str = ""
    phase: str = ""
    result: str = ""
    direction: str = ""
    methodology: str = ""
    confidence: int = 0
    notes: str = ""
    event_id: str = field(default_factory=lambda: str(uuid.uuid4())[:8])
    mitre_techniques: list = field(default_factory=list)
    iocs: list = field(default_factory=list)

    def to_dict(self):
        return {
            "event_id": self.event_id,
            "adversary": self.adversary,
            "capability": self.capability,
            "infrastructure": self.infrastructure,
            "victim": self.victim,
            "timestamp": self.timestamp,
            "phase": self.phase,
            "result": self.result,
            "direction": self.direction,
            "methodology": self.methodology,
            "confidence": self.confidence,
            "mitre_techniques": self.mitre_techniques,
            "iocs": self.iocs,
            "notes": self.notes,
        }
```

### Step 2: Build Activity Thread from Events

```python
import networkx as nx

class DiamondAnalysis:
    def __init__(self):
        self.events = []
        self.graph = nx.DiGraph()

    def add_event(self, event: DiamondEvent):
        self.events.append(event)
        self.graph.add_node(event.event_id, **event.to_dict())

    def build_activity_thread(self):
        """Link events chronologically into activity threads."""
        sorted_events = sorted(self.events, key=lambda e: e.timestamp)
        for i in range(len(sorted_events) - 1):
            self.graph.add_edge(
                sorted_events[i].event_id,
                sorted_events[i + 1].event_id,
                relationship="followed_by",
            )

    def find_pivots(self):
        """Find pivot points where events share infrastructure or capabilities."""
        pivots = {"infrastructure": {}, "capability": {}, "adversary": {}}

        for event in self.events:
            if event.infrastructure:
                pivots["infrastructure"].setdefault(event.infrastructure, []).append(event.event_id)
            if event.capability:
                pivots["capability"].setdefault(event.capability, []).append(event.event_id)
            if event.adversary:
                pivots["adversary"].setdefault(event.adversary, []).append(event.event_id)

        return {
            k: {pk: pv for pk, pv in v.items() if len(pv) > 1}
            for k, v in pivots.items()
        }

    def generate_report(self):
        return {
            "total_events": len(self.events),
            "unique_adversaries": len(set(e.adversary for e in self.events if e.adversary)),
            "unique_victims": len(set(e.victim for e in self.events if e.victim)),
            "unique_infrastructure": len(set(e.infrastructure for e in self.events if e.infrastructure)),
            "pivots": self.find_pivots(),
            "events": [e.to_dict() for e in self.events],
        }
```

## Validation Criteria

- Diamond events capture all four core features with meta-features
- Activity threads link related events chronologically
- Pivot analysis identifies shared infrastructure and capabilities across events
- Graph visualization renders the activity-attack graph correctly
- Events map to MITRE ATT&CK techniques for capability classification

## References

- [Diamond Model Paper](https://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf)
- [MITRE ATT&CK](https://attack.mitre.org/)
- [STIX 2.1 Campaign Object](https://docs.oasis-open.org/cti/stix/v2.1/stix-v2.1.html)
