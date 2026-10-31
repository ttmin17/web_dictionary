---
slug: alirezarezvani-claude-skills-engineering-skills-mcp-server-builder
name: mcp-server-builder
tagline: Design and ship production-ready MCP (Model Context Protocol) servers
  from OpenAPI contracts instead of hand-written tool wrappers. Python and
  TypeScr
summary: Use this skill to design and ship production-ready MCP servers from API
  contracts instead of hand-written one-off tool wrappers. It focuses on fast
  scaffolding, schema quality, validation, and safe evolution.
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: engineering/skills/mcp-server-builder
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 1198
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27812
    - 28112
    - 28730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: engineering/skills/mcp-server-builder/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.262Z
  truncated: false
type: agent_skill
skill:
  skill_name: mcp-server-builder
  description: Design and ship production-ready MCP (Model Context Protocol)
    servers from OpenAPI contracts instead of hand-written tool wrappers. Python
    and TypeScript support, schema validation, safe evolution. Use when exposing
    an existing API as an MCP server, building tool integrations for Claude or
    Codex or Cursor, or scaffolding an MCP project from scratch.
  folder_path: engineering/skills/mcp-server-builder
  extra_files:
    - README.md
    - references/openapi-extraction-guide.md
    - references/production-hardening-guide.md
    - references/python-server-template.md
    - references/typescript-server-template.md
    - references/validation-checklist.md
    - scripts/mcp_validator.py
    - scripts/openapi_to_mcp.py
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# MCP Server Builder
**Tier:** POWERFUL · **Category:** Engineering · **Domain:** AI / API Integration

## Overview

Use this skill to design and ship production-ready MCP servers from API contracts instead of hand-written one-off tool wrappers. It focuses on fast scaffolding, schema quality, validation, and safe evolution.

The workflow supports both Python and TypeScript MCP implementations and treats OpenAPI as the source of truth.

## Core Capabilities

- Convert OpenAPI paths/operations into MCP tool definitions
- Generate starter server scaffolds (Python or TypeScript)
- Enforce naming, descriptions, and schema consistency
- Validate MCP tool manifests for common production failures
- Apply versioning and backward-compatibility checks
- Separate transport/runtime decisions from tool contract design

## When to Use

- You need to expose an internal/external REST API to an LLM agent
- You are replacing brittle browser automation with typed tools
- You want one MCP server shared across teams and assistants
- You need repeatable quality checks before publishing MCP tools
- You want to bootstrap an MCP server from existing OpenAPI specs

## Key Workflows

### 1. OpenAPI to MCP Scaffold

1. Start from a valid OpenAPI spec.
2. Generate tool manifest + starter server code.
3. Review naming and auth strategy.
4. Add endpoint-specific runtime logic.

```bash
python3 scripts/openapi_to_mcp.py \
  --input openapi.json \
  --server-name billing-mcp \
  --language python \
  --output-dir ./out \
  --format text
```

Supports stdin as well:

```bash
cat openapi.json | python3 scripts/openapi_to_mcp.py --server-name billing-mcp --language typescript
```

### 2. Validate MCP Tool Definitions

Run validator before integration tests:

```bash
python3 scripts/mcp_validator.py --input out/tool_manifest.json --strict --format text
```

Checks include duplicate names, invalid schema shape, missing descriptions, empty required fields, and naming hygiene.

### 3. Runtime Selection

- Choose **Python** for fast iteration and data-heavy backends.
- Choose **TypeScript** for unified JS stacks and tighter frontend/backend contract reuse.
- Keep tool contracts stable even if transport/runtime changes.

### 4. Harden for Production

Key items before publishing:

- Keep secrets in env vars, not tool schemas
- Prefer outbound host allowlists over open proxies
- Use additive-only changes; never rename tool names in-place

Full hardening guidance: [references/production-hardening-guide.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/skills/mcp-server-builder/references/production-hardening-guide.md).

## Script Interfaces

- `python3 scripts/openapi_to_mcp.py --help`
  - Reads OpenAPI from stdin or `--input`
  - Produces manifest + server scaffold
  - Emits JSON summary or text report
- `python3 scripts/mcp_validator.py --help`
  - Validates manifests and optional runtime config
  - Returns non-zero exit in strict mode when errors exist

## Reference Material

- [references/production-hardening-guide.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/skills/mcp-server-builder/references/production-hardening-guide.md) — auth & safety design, versioning strategy, common pitfalls, best practices, architecture decisions, contract quality gates, testing strategy, deployment practices, security controls
- [references/openapi-extraction-guide.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/skills/mcp-server-builder/references/openapi-extraction-guide.md)
- [references/python-server-template.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/skills/mcp-server-builder/references/python-server-template.md)
- [references/typescript-server-template.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/skills/mcp-server-builder/references/typescript-server-template.md)
- [references/validation-checklist.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/skills/mcp-server-builder/references/validation-checklist.md)
- [README.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/skills/mcp-server-builder/README.md)
