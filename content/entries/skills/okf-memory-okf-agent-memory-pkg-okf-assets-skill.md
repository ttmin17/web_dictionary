---
slug: okf-memory-okf-agent-memory-pkg-okf-assets-skill
name: okf-agent-memory
tagline: Maintain persistent, domain-neutral project memory for AI agents using
  Open Knowledge Format (OKF) v0.2 bundles and the deterministic okf Go
  toolchain
summary: 'Default bundle: ./knowledge. For custom paths, pass bundle="path/to/bundle".'
categories:
  - databases-memory
status: active
quality_percentile: 39
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: okf-memory/okf-agent-memory
  subpath: pkg/okf/assets/skill
  official_vendor: false
  license: MIT
signals:
  stars: 771
  last_commit: 2026-10-12T10:08:28Z
  stars_delta_7d: 76
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 771
    - 771
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: okf-memory/okf-agent-memory
  path: pkg/okf/assets/skill/SKILL.md
  branch: develop
  fetched_at: 2026-10-14T14:55:10.286Z
  truncated: false
type: agent_skill
skill:
  skill_name: okf-agent-memory
  description: Maintain persistent, domain-neutral project memory for AI agents
    using Open Knowledge Format (OKF) v0.2 bundles and the deterministic okf Go
    toolchain. Use whenever project knowledge, decisions, runbooks, research,
    client notes, or domain discoveries must survive conversational resets.
  folder_path: pkg/okf/assets/skill
  extra_files:
    - discovery.md
    - examples.md
    - relationships.md
    - remember.md
    - update.md
tags:
  - memory
---

# OKF Agent Memory Skill (AAG Spec v0.1)
Teaches AI agents deterministic interaction with an Open Knowledge Format (OKF v0.2) bundle (`knowledge/`).

## 0. Project & Domain Codex
- GOAL: maintain(high_factual_integrity, domain_neutrality, strict_determinism)
- FORMAT: diagrams => ASSERT(syntax == mermaid, ELSE=STOP("Mermaid required; ASCII/box art prohibited."))

## 1. Behavioral Invariants (RFC 2119)
- MUST execute `okf_search(query=keywords, limit=3)` before proposing architecture changes or creating concepts.
- NEVER scan `knowledge/` via `list_dir`, `grep_search`, or raw file readers.
- NEVER forge human verification (`verified:` is human-only; declare `generated: { by: "<actor>", at: "<iso-time>" }`).
- PREFER native `okf_*` MCP tools OVER CLI fallback commands.
- PREFER `okf_update` OVER `okf_create` when mutating existing domain entities.
- NEVER persist scratchpads, raw chain-of-thought, or speculative chatter to knowledge corpus.

## 2. Guard Clauses & Scope Governance
- ON edit(@path/):
    IF first_visit(@path/) => okf_search(for_path=@path/)
    IF governance == "hold" => STOP("Subsystem frozen by governance. Confirm with user.")
    IF governance == "constraint" => MUST adhere to all listed invariants
    IF governance == "context" => proceed with awareness
- ON user_query(architecture | requirements | conventions | domain_facts):
    okf_search(query=keywords, limit=3) => evaluate summary description
    IF relevant => okf_show(concept_id) ONLY on demand

## 3. Completion Pipeline (Sequential Assertion Gates)
1. IF arch_decisions_made => MUST okf_create(architecture/*, type="decision", title=..., desc=...)
2. IF requirements_discovered => MUST okf_update(concept_id)
3. IF concepts_mutated => MUST sync(knowledge/log.md, knowledge/index.md)
4. ASSERT(okf_validate(strict=true, drift=true) == {errors: 0, warnings: 0}, ELSE=fix_before_exit)

---## 4. Tooling Reference (Dual-Mode: MCP & CLI)

Default bundle: `./knowledge`. For custom paths, pass `bundle="path/to/bundle"`.

| Task | Preferred: Native MCP Tool | Fallback: Deterministic CLI (`--json`) |
| :--- | :--- | :--- |
| **Search Knowledge** | `okf_search(query="<query>", limit=3)` | `okf search "<query>" knowledge --limit 3 --json` |
| **Discover Code Constraints** | `okf_search(for_path="<file-path>")` | `okf search --for-path <file-path> knowledge --json` |
| **Inspect Concept** | `okf_show(concept_id="<id>")` | `okf show <id> knowledge --json` |
| **Create Concept** | `okf_create(concept_id="<id>", type="<type>", title="<title>", description="<desc>")` | `okf create <id> knowledge --type <type> --title "<title>" --desc "<desc>" --json` |
| **Update Concept** | `okf_update(concept_id="<id>", description="<desc>", title="<title>")` | `okf update <id> knowledge --desc "<desc>" --json` |
| **Relate Concepts** | `okf_relate(source_id="<src>", target_id="<tgt>", description="<prose>")` | `okf relate <src> <tgt> knowledge --desc "<prose>" --json` |
| **Validate Bundle** | `okf_validate(strict=true)` | `okf validate knowledge --strict --drift --json` |

---## 5. Workflow Guides (Progressive Disclosure)

- Discovery & Retrieval: [discovery.md](https://github.com/okf-memory/okf-agent-memory/blob/develop/pkg/okf/assets/skill/discovery.md)
- Persistence Decisions: [remember.md](https://github.com/okf-memory/okf-agent-memory/blob/develop/pkg/okf/assets/skill/remember.md)
- Updating & Mutations: [update.md](https://github.com/okf-memory/okf-agent-memory/blob/develop/pkg/okf/assets/skill/update.md)
- Relationship Topology: [relationships.md](https://github.com/okf-memory/okf-agent-memory/blob/develop/pkg/okf/assets/skill/relationships.md)
- Multi-Domain Reference: [examples.md](https://github.com/okf-memory/okf-agent-memory/blob/develop/pkg/okf/assets/skill/examples.md)
