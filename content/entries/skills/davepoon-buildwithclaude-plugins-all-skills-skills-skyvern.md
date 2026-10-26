---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-skyvern
name: skyvern
tagline: AI-powered browser automation — navigate sites, fill forms, extract
  structured data, log in with stored credentials, and build reusable multi-step
  wor
summary: "Or add the MCP server directly to your Claude Code config:"
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/all-skills/skills/skyvern
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/all-skills/skills/skyvern/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.596Z
  truncated: false
type: agent_skill
skill:
  skill_name: skyvern
  description: "AI-powered browser automation — navigate sites, fill forms,
    extract structured data, log in with stored credentials, and build reusable
    multi-step workflows using natural language. Install: pip install skyvern &&
    skyvern setup"
  folder_path: plugins/all-skills/skills/skyvern
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Skyvern Browser Automation
Control a real browser with natural language. Skyvern uses Vision LLMs and computer vision instead of brittle XPath/DOM selectors, so automations survive UI changes.

## Setup

**Cloud (recommended):**

```bash
pip install skyvern
skyvern setup  # interactive client selection
```

Or add the MCP server directly to your Claude Code config:

```json
{
  "mcpServers": {
    "skyvern": {
      "type": "streamable-http",
      "url": "https://api.skyvern.com/mcp/",
      "headers": {
        "x-api-key": "YOUR_SKYVERN_API_KEY"
      }
    }
  }
}
```

Get your API key at [app.skyvern.com](https://app.skyvern.com).

## Key Features

- **Natural language actions** — click, type, scroll, hover, drag-and-drop via plain English
- **Structured extraction** — extract data with JSON schema validation and screenshot reasoning
- **Secure login** — credential vault with 2FA/TOTP support (QR, email, SMS)
- **Reusable workflows** — 23 block types, parameterized runs, cached scripts (10-100x faster on repeat)
- **75+ MCP tools** — session management, multi-tab, iframes, network inspection, HAR recording
- **Works with** — Claude Desktop, Claude Code, Cursor, Windsurf, Codex

## Usage

```
"Navigate to example.com and extract all product prices"
"Log into my account and download the latest invoice"
"Fill out the shipping form and click Submit"
"Take a screenshot of the current page"
"Build a workflow that runs this every Monday"
```

## Links

- **Homepage**: https://www.skyvern.com
- **Docs**: https://www.skyvern.com/docs/integrations/mcp
- **GitHub**: https://github.com/Skyvern-AI/skyvern
- **Discord**: https://discord.gg/fG2XXEuQX3
- **License**: AGPL v3.0
