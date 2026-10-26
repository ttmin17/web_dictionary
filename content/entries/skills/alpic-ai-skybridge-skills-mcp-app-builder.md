---
slug: alpic-ai-skybridge-skills-mcp-app-builder
name: mcp-app-builder
tagline: >-
  Guide developers through creating and updating MCP Apps.

  Covers the full lifecycle: brainstorming ideas against UX guidelines,
  bootstrapping projects,
summary: "⚠️ The app is consumed by two users at once: the human and the AI
  Assistant LLM. They collaborate through the view—the human interacts with it,
  the LLM sees its state. Internalize this before writing code: the view is..."
categories:
  - agent-frameworks
tags:
  - apps-sdk
  - chatgpt
  - claude
  - claude-code
status: active
quality_percentile: 54
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alpic-ai/skybridge
  subpath: skills/mcp-app-builder
  official_vendor: false
  license: MIT
signals:
  stars: 2178
  last_commit: 2026-10-23T13:48:04Z
  stars_delta_7d: 15
  stars_growth_pct: 0.7
  trending_score: 15.1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 2160
    - 2163
    - 2178
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alpic-ai/skybridge
  path: skills/mcp-app-builder/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:03.167Z
  truncated: false
type: agent_skill
skill:
  skill_name: mcp-app-builder
  description: >
    Guide developers through creating and updating MCP Apps.

    Covers the full lifecycle: brainstorming ideas against UX guidelines,
    bootstrapping projects, implementing tools/views, debugging, running dev
    servers, deploying and connecting apps to ChatGPT.

    Use when a user wants to create or update a MCP App, MCP server or use the
    Skybridge framework.
  folder_path: skills/mcp-app-builder
  extra_files:
    - references
  pack_total_skills: 3
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alpic-ai-skybridge
---

# Creating MCP Apps
Those are conversational experiences that extend AI assistants through tools and custom UI views. They're built as MCP servers invoked during conversations.

⚠️ The app is consumed by two users at once: the **human** and the **AI Assistant LLM**. They collaborate through the view—the human interacts with it, the LLM sees its state. Internalize this before writing code: the view is your shared surface.

SPEC.md keeps track of the app's requirements and design decisions. Keep it up to date as you work on the app.

**No SPEC.md?** → Read [discover.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/discover.md) first. Nothing else until SPEC.md exists.

**SPEC.md exists?** → Read SPEC.md, then follow [architecture.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/architecture.md) to design the change. Update SPEC.md, then read the relevant Implementation references below before writing code.

**Migrating from Skybridge `< 0.36.x`?** → Read [migrate-to-v1.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/migrate-to-v1.md) first. Users may reference `skybridge >= 0.36.x` as v1.

**Migrating from Skybridge `1.x` to `2.x`?** → Fetch the [v2.0.0 release notes](https://github.com/alpic-ai/skybridge/releases/tag/v2.0.0) first and follow them.

**Building an ecommerce app?** → Read [ecommerce.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/ecommerce.md) first.

## Setup

1. **Copy template** → [copy-template.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/copy-template.md): when starting a new project with ready SPEC.md
2. **Run locally** → [run-locally.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/run-locally.md): when ready to test, need dev server or ChatGPT/Claude connection
3. **Evals** → [evals.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/evals.md): when checking that a real model reaches the right tools from natural prompts, in a test

## Architecture

Design or evolve UX flows and API shape → [architecture.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/architecture.md)

## Implementation

- **Fetch and render data** → [fetch-and-render-data.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/fetch-and-render-data.md): when implementing server handlers and view data fetching
- **State and context** → [state-and-context.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/state-and-context.md): when persisting view UI state and updating LLM context
- **Prompt LLM** → [prompt-llm.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/prompt-llm.md): when view needs to trigger LLM response
- **UI guidelines** → [ui-guidelines.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/ui-guidelines.md): display modes, layout constraints, theme, device, and locale
- **External links** → [open-external-links.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/open-external-links.md): when redirecting to external URLs or setting "open in app" target
- **Download file** → [download-file.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/download-file.md): when saving content to the user's filesystem
- **OAuth** → [oauth.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/oauth.md): when tools need user authentication to access user-specific data
- **CSP** → [csp.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/csp.md): when declaring allowed domains for fetch, assets, redirects, or iframes

## Deploy

- **Ship to production** → [deploy.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/deploy.md): when ready to deploy via Alpic
- **Publish to ChatGPT/Claude Directories** → [publish.md](https://github.com/alpic-ai/skybridge/blob/main/skills/mcp-app-builder/references/publish.md): when ready to submit for review

Full API docs: [https://docs.skybridge.tech/api-reference.md](https://docs.skybridge.tech/api-reference.md)

Release notes & changelog: [https://skybridge.tech/changelog.md](https://skybridge.tech/changelog.md)
