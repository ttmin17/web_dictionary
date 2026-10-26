---
slug: alpic-ai-skybridge-skills-chatgpt-app-builder
name: chatgpt-app-builder
tagline: >-
  Guide developers through creating and updating ChatGPT plugins.

  Covers the full lifecycle: brainstorming ideas against UX guidelines,
  bootstrapping pr
summary: "⚠️ The plugin is consumed by two users at once: the human and the
  ChatGPT LLM. They collaborate through the view—the human interacts with it,
  the LLM sees its state. Internalize this before writing code: the view is
  y..."
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
  subpath: skills/chatgpt-app-builder
  official_vendor: false
  license: MIT
signals:
  stars: 2178
  last_commit: 2026-10-23T13:48:04Z
  stars_delta_7d: 15
  stars_growth_pct: 0.7
  trending_score: 15.1
  rank_current: 119
  rank_delta: -9
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
  path: skills/chatgpt-app-builder/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:03.167Z
  truncated: false
type: agent_skill
skill:
  skill_name: chatgpt-app-builder
  description: >
    Guide developers through creating and updating ChatGPT plugins.

    Covers the full lifecycle: brainstorming ideas against UX guidelines,
    bootstrapping projects, implementing tools/views, debugging, running dev
    servers, deploying and connecting plugins to ChatGPT.

    Use when a user wants to create or update a ChatGPT plugin (formerly called
    a ChatGPT app) / MCP server for ChatGPT, or use the Skybridge framework.
  folder_path: skills/chatgpt-app-builder
  extra_files:
    - evals/README.md
    - evals/architecture.json
    - evals/communicate-with-host.json
    - evals/discover.json
    - evals/fetch-and-render-data.json
    - evals/open-external-links.json
    - evals/skill.json
    - evals/state-and-context.json
    - evals/ui-guidelines.json
    - evals/update-existing.json
  pack_total_skills: 3
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alpic-ai-skybridge
---

# Creating Plugins For LLMs
ChatGPT plugins are conversational experiences that extend ChatGPT through tools and custom UI views. They're built as MCP servers invoked during conversations.

⚠️ The plugin is consumed by two users at once: the **human** and the **ChatGPT LLM**. They collaborate through the view—the human interacts with it, the LLM sees its state. Internalize this before writing code: the view is your shared surface.

SPEC.md keeps track of the plugin's requirements and design decisions. Keep it up to date as you work on the plugin.

**Building an ecommerce plugin?** → Read [ecommerce.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/ecommerce.md) first.

**No SPEC.md?** → Read [discover.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/discover.md) first. Nothing else until SPEC.md exists.

**SPEC.md exists?** → Read SPEC.md, then follow [architecture.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/architecture.md) to design the change. Update SPEC.md, then read the relevant Implementation references below before writing code.

**Migrating from Skybridge `< 0.36.x`?** → Read [migrate-to-v1.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/migrate-to-v1.md) first. Users may reference `skybridge >= 0.36.x` as v1.

**Migrating from Skybridge `1.x` to `2.x`?** → Fetch the [v2.0.0 release notes](https://github.com/alpic-ai/skybridge/releases/tag/v2.0.0) first and follow them.

## Setup

1. **Copy template** → [copy-template.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/copy-template.md): when starting a new project with ready SPEC.md
2. **Run locally** → [run-locally.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/run-locally.md): when ready to test, need dev server or ChatGPT connection
3. **Evals** → [evals.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/evals.md): when checking that a real model reaches the right tools from natural prompts, in a test

## Architecture

Design or evolve UX flows and API shape → [architecture.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/architecture.md)

## Implementation

- **Fetch and render data** → [fetch-and-render-data.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/fetch-and-render-data.md): when implementing server handlers and view data fetching
- **State and context** → [state-and-context.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/state-and-context.md): when persisting view UI state and updating LLM context
- **Prompt LLM** → [prompt-llm.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/prompt-llm.md): when view needs to trigger LLM response
- **UI guidelines** → [ui-guidelines.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/ui-guidelines.md): display modes, layout constraints, theme, device, and locale
- **External links** → [open-external-links.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/open-external-links.md): when redirecting to external URLs or setting "open in app" target
- **OAuth** → [oauth.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/oauth.md): when tools need user authentication to access user-specific data
- **Assets and styling** → [assets-and-styling.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/assets-and-styling.md): when adding images, fonts or CSS to views
- **CSP** → [csp.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/csp.md): when declaring allowed domains for fetch, assets, redirects, or iframes
- **Events** → [events.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/events.md): when ChatGPT should react to activity in the app without the user, such as new comments or incidents
- **OpenAI MCP extensions** → [openai-extensions.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/openai-extensions.md): when the view should open from the ChatGPT sidebar, a conversation side panel, a file, or a deep link, or use ChatGPT at-mentions, titled messages or local files

## Deploy

- **Ship to production** → [deploy.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/deploy.md): when ready to deploy via Alpic
- **Publish to ChatGPT Directory** → [publish.md](https://github.com/alpic-ai/skybridge/blob/main/skills/chatgpt-app-builder/references/publish.md): when ready to submit for review

Full API docs: [https://docs.skybridge.tech/api-reference.md](https://docs.skybridge.tech/api-reference.md)

Release notes & changelog: [https://skybridge.tech/changelog.md](https://skybridge.tech/changelog.md)
