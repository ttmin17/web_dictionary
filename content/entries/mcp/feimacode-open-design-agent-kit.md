---
slug: feimacode-open-design-agent-kit
name: open-design-agent-kit
tagline: Make posters, social posts, slides and landing pages in the coding
  agent or chat you already use (Copilot, Claude, Codex, Cursor), with 198
  design sys
summary: Pro-grade design, built right into the coding agent you already use.
categories:
  - media-creative
tags:
  - agent-skills
  - ai-design
  - claude-code
  - claude-design
status: active
quality_percentile: 48
selection_reason: quality_percentile
first_seen: 2026-11-09
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: feimacode/open-design-agent-kit
  official_vendor: false
  license: MIT
signals:
  stars: 1071
  last_commit: 2026-11-09T09:06:27Z
  stars_delta_7d: 149
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 1071
language: en
needs_keys: false
prerequisites:
  - Node.js >= 18
readme_source:
  repo: feimacode/open-design-agent-kit
  path: README.md
  branch: main
  fetched_at: 2026-11-09T09:27:12.755Z
  truncated: false
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@feimacode/open-design-agent-kit"
  env_vars: []
  confidence: readme
---

# Open Design Agent Kit
English | [简体中文](https://github.com/feimacode/open-design-agent-kit/blob/main/README.zh-CN.md) | [日本語](https://github.com/feimacode/open-design-agent-kit/blob/main/README.ja.md)

**Pro-grade design, built right into the coding agent you already use.**

Open Design Agent Kit brings [Open Design](https://github.com/nexu-io/open-design)'s design skills, brand design systems, and remixable examples into **GitHub Copilot Chat, Claude Code, Codex, Cursor**, and any other MCP-capable agent. Ask for a pitch deck, landing page, dashboard, or mobile prototype in the chat you already have open. Your agent's own model builds it with its own file tools, guided by a library that keeps the result from looking AI-generated.

**No desktop app. No daemon. No extra account, API key, or model settings.** Install it, ask, and the files show up in your repo.

## Why built-in beats another app

Open Design itself is a full local-first desktop app with its own daemon, project database, and model setup. It's excellent, but it's one more thing to install, keep running, configure, and switch into. Most of what makes it valuable day to day isn't the app. It's the **content**: 181 skills, 114 design templates, 198 brand design systems, 193 remixable example artifacts, and 13 craft docs (typography, color, accessibility, anti-"AI slop"). Agent Kit takes that content and the generation workflow around it and builds them directly into your agent:

| | Open Design desktop app | Open Design Agent Kit |
|---|---|---|
| **Install** | Desktop app plus a background daemon | One VS Code extension, Claude Code plugin, or `npx` command |
| **Where you work** | A separate app window | The agent chat you already have open |
| **Model** | Chosen and configured in the app | Whatever model your agent already uses, with no second key or bill |
| **Setup** | Providers, keys, and projects set up in the app | Nothing to configure. Your active design system is remembered per workspace. |
| **Output** | Stored in the app's project database | Plain files in your repo: diff, review, and commit them like any other code |
| **Getting to production** | Export and hand off | Promote the prototype into your real app's components, in the same session |

## What makes it different

- **Native to each agent.** It isn't a wrapper or a separate UI; each integration uses the agent's own mechanism. In Copilot, that's VS Code `languageModelTools`, chat instructions, and slash commands. In Claude Code, it's a plugin with skills and a bundled MCP server. In Codex, it's `.agents/skills` plus MCP. The agent finds the tools on its own, so you just describe what you want.
- **A curated library, not a prompt.** Task-specific recipes, brand-accurate design tokens, and hard-won craft rules. That's the difference between "a generic gradient card layout" and something that looks designed.
- **Remix, don't start blank.** Start from any of 193 real rendered examples, plus a growing community catalog, and let the model adapt one instead of inventing from scratch.
- **Brand-consistent by default.** Pick a design system once (bundled, invented from a brief, or imported from your own) and every generation after that uses it.
- **Grounded in your codebase, and headed there.** Generation looks at your real components first. When the prototype is right, one tool call ports it into your app as idiomatic production code.
- **Checked before it's done.** The agent renders every design in a real browser, fixes what the checks find (clipped text, low contrast, missing focus states, print bleed, a generic "AI" look), then asks a critic with fresh eyes for a verdict. It asks at most three questions up front, and keeps new designs from all looking alike.
- **Everything is a file.** Artifacts, manifests, comments, and custom design systems are plain files in your workspace. There's no database, no lock-in, and nothing to export.

Ways in:

- **[VS Code extension](https://github.com/feimacode/open-design-agent-kit/blob/main/packages/vscode/README.md)**: native tools for GitHub Copilot Chat, plus a gallery, a live artifact preview with comments, WYSIWYG editing and a Tweaks panel, multi-screen collections and explorations, and an Integrations view.
- **[Claude Code plugin](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/claude-code.md)**: `/plugin install open-design` gives you skills that trigger on design requests (including social posts, posters, campaigns, explorations and decks from documents), 27 curated `/open-design:*` commands, and the MCP server, registered automatically.
- **[Claude Desktop](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/claude-desktop.md)**: the same plugin in the Code tab, Chat and Cowork, with designs shown inline in the conversation. An optional desktop extension (`.mcpb`) needs no Node.js and works in a Chat with no folder.
- **[ChatGPT desktop](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/chatgpt-desktop.md)**: a desktop plugin for the Work and Codex tabs, installed with one `npx` command.
- **[Claude and ChatGPT on the web](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/claude-and-chatgpt-web.md)**: a hosted connector, nothing to install, for when you can't run anything locally.
- **[Codex CLI](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/codex.md)**: the same skills in Codex's own `.agents/skills` format, plus the MCP server.
- **[One-command project setup](https://github.com/feimacode/open-design-agent-kit/blob/main/packages/cli/README.md)**: `npx @feimacode/open-design-agent-kit init` wires Claude Code and/or Codex into your project.
- **[MCP server](https://github.com/feimacode/open-design-agent-kit/blob/main/packages/mcp-server/README.md)**: `npx @feimacode/open-design-agent-kit-mcp` for Cursor or any other MCP-capable agent.
- **Any agent via [`npx skills add`](https://github.com/vercel-labs/skills)**: `npx skills add https://github.com/feimacode/open-design-agent-kit/tree/main/packages/claude-plugin/skills/open-design` drops the same skill into any of the 75+ agents `skills` supports (Cursor, OpenCode, Cline, and more). It registers the MCP server itself the first time you ask it to design something — nothing else to run first.

Published under the **feimacode** entity; the VS Code extension's publisher id is `feima`.

## See what it builds

Six of the ~280 vendored skills and templates, rendered exactly as-is — no retouching, no cherry-picked crops:

<table>
<tr>
<td width="50%" valign="top">
<img src="https://raw.githubusercontent.com/feimacode/open-design-agent-kit/main/docs/screenshots/examples/dating-web.png" alt="Consumer dating-app dashboard, editorial typography, left-rail navigation" width="100%"/><br/>
<sub><b>"Design a dating-site dashboard — mutuals, match rate, a 30-day trend."</b><br/>Editorial dashboard, left-rail nav, one restrained accent color.</sub>
</td>
<td width="50%" valign="top">
<img src="https://raw.githubusercontent.com/feimacode/open-design-agent-kit/main/docs/screenshots/examples/gamified-app.png" alt="Gamified habit-tracking mobile app, three phone frames" width="100%"/><br/>
<sub><b>"A habit-tracking app with daily quests and XP."</b><br/>Three-screen mobile prototype, vivid quest tiles, level bar.</sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<img src="https://raw.githubusercontent.com/feimacode/open-design-agent-kit/main/docs/screenshots/examples/deck-swiss-international.png" alt="Board strategy deck, Swiss International style, cover slide" width="100%"/><br/>
<sub><b>"A board-ready strategy deck, Swiss International style."</b><br/>Decision-grade corporate deck — this is slide one of ten.</sub>
</td>
<td width="50%" valign="top">
<img src="https://raw.githubusercontent.com/feimacode/open-design-agent-kit/main/docs/screenshots/examples/data-report.png" alt="Weekly metrics report with KPI cards and trend charts" width="100%"/><br/>
<sub><b>"Turn this CSV into a weekly metrics report."</b><br/>KPI cards, trend charts, and a raw-data table.</sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<img src="https://raw.githubusercontent.com/feimacode/open-design-agent-kit/main/docs/screenshots/examples/card-xiaohongshu.png" alt="Xiaohongshu-style swipeable knowledge card" width="100%"/><br/>
<sub><b>"5 tips, as a Xiaohongshu-style swipeable card carousel."</b><br/>Social-native knowledge cards, ready to export as images.</sub>
</td>
<td width="50%" valign="top">
<img src="https://raw.githubusercontent.com/feimacode/open-design-agent-kit/main/docs/screenshots/examples/resume-modern.png" alt="Modern minimal resume, single A4 page" width="100%"/><br/>
<sub><b>"A modern, print-ready resume."</b><br/>Single A4 page, ready for PDF export.</sub>
</td>
</tr>
</table>

Every one of these started from `remix_open_design_example` (copy a real example, then modify it) or `prepare_open_design_brief` (compose instructions and generate from scratch) — the same two tools regardless of which surface below you use.

## Get started

- **VS Code (GitHub Copilot Chat):** install "Open Design Agent Kit" from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=feima.open-design-agent-kit). See the [getting-started guide](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/vscode.md).
- **Claude Code:** `/plugin marketplace add feimacode/open-design-agent-kit`, then `/plugin install open-design`. Or run `npx @feimacode/open-design-agent-kit init --tools claude` in your project. See the [getting-started guide](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/claude-code.md).
- **Claude Desktop:** install the same plugin from **Customize → Plugins**, then use it in the Code tab or in a Chat with a folder. Optionally add the desktop extension (`open-design-<version>.mcpb` from the [releases](https://github.com/feimacode/open-design-agent-kit/releases/latest)) for the tools without Node.js, a Figma token form, and Chat without a folder. See the [getting-started guide](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/claude-desktop.md).
- **ChatGPT desktop (macOS, Windows):** `npx @feimacode/open-design-agent-kit install chatgpt`, restart ChatGPT, and turn on Open Design under **Plugins → Personal**. Works in the Work and Codex tabs; needs Node.js. See the [getting-started guide](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/chatgpt-desktop.md).
- **Claude or ChatGPT on the web, or your phone:** add the hosted connector `https://open-design.feimacode.com/mcp`. See the [getting-started guide](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/claude-and-chatgpt-web.md).
- **Codex CLI:** `npx @feimacode/open-design-agent-kit init --tools codex`. See the [getting-started guide](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/codex.md).
- **Any MCP agent (Cursor and others):** register `npx -y @feimacode/open-design-agent-kit-mcp` as a stdio MCP server. See the [MCP server README](https://github.com/feimacode/open-design-agent-kit/blob/main/packages/mcp-server/README.md).
- **Any of the [75+ agents `skills` supports](https://github.com/vercel-labs/skills):** `npx skills add https://github.com/feimacode/open-design-agent-kit/tree/main/packages/claude-plugin/skills/open-design` (add `--agent <name>` to target one directly). The skill wires up the MCP server on its own the first time it runs.
- **Scripts and CI:** `npx @feimacode/open-design-agent-kit export …`, `check …` and `render-video …`. See the [CLI guide](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/cli.md).

## Works with the tools you already use

When your agent is connected to one of these services' official MCP servers, Open Design's workflows use it directly instead of handing you a file to upload: importing into Canva, pushing designs into Figma, saving to Drive, posting through a scheduler. Nothing is installed without your yes. See [Connect other services](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/integrations.md).

<!-- integrations:start -->
| Integration | What your agent can do with it |
|---|---|
| Canva | Import a design, upload assets, export, read brand kits |
| Figma | Read frames into code, push designs in as editable layers, export and upload assets |
| Notion | Read pages, create pages, upload files |
| Google Drive | Search, read and save files |
| Slack | Share a message or image in a channel |
| Buffer | Draft and schedule posts on X, LinkedIn, Instagram, Facebook, Threads, Bluesky, Mastodon, TikTok, Pinterest, YouTube |
| Metricool | Schedule posts on Instagram, Facebook, LinkedIn, TikTok, YouTube |
| X | Post through X's own server |
| Shopify | Update products and descriptions in your store |
<!-- integrations:end -->

## Documentation

Everything lives in [`docs/`](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/README.md):

- **Getting started:** [VS Code](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/vscode.md), [Claude Code](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/claude-code.md), [Claude Desktop](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/claude-desktop.md), [ChatGPT desktop](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/chatgpt-desktop.md), [Claude and ChatGPT on the web](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/claude-and-chatgpt-web.md), [Codex](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/codex.md), [command line](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/getting-started/cli.md).
- **Guides:**
  - [generate a design](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/generate-a-design.md), [explore design directions](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/explore-directions.md), [turn a document into a deck](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/deck-from-a-document.md), [diagrams of your code](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/diagrams.md), [3D objects](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/3d-objects.md), [3D scenes](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/3d-scenes.md), [engineering documents](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/engineering-docs.md);
  - [design systems](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/design-systems.md), [remix and the gallery](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/remix-and-gallery.md), [community designs](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/community-designs.md);
  - [preview, comment and edit](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/preview-comments-edit.md) (VS Code), [browser preview](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/browser-preview.md), [inline preview in Claude Desktop](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/inline-preview.md), [Figma](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/figma.md), [promote to app code](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/promote-to-app-code.md), [build a component set](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/component-library.md), [work with Impeccable](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/impeccable.md), [connect other services](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/integrations.md);
  - [social media posts](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/social-posts.md), [HTML email](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/html-email.md), [paste into WeChat, Notion and newsletters](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/paste-html.md), [posters and print](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/posters.md), [sell what you make](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/sell-what-you-make.md), [run a campaign](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/campaigns.md), [YouTube videos](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/youtube-video.md);
  - [export images](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/export-images.md), [export decks and PDFs](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/export-decks.md), [export animations](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/export-animations.md), [share and publish](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/share-and-publish.md), [recurring design jobs](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/guides/recurring-jobs.md).
- **Reference:** [tools](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/reference/tools.md), [prompts and commands](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/reference/prompts-and-commands.md), [CLI](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/reference/cli.md), [settings and environment variables](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/reference/settings-and-env.md), [artifact manifest](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/reference/artifact-manifest.md), [hosted server](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/reference/remote-server.md).
- **Help:** [troubleshooting](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/troubleshooting.md), [privacy policy](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/legal/privacy.md), [terms](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/legal/terms.md).
- **Automation:** [social media pipeline](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/automation/social-pipeline.md).
- **Contributing:** [architecture](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/contributing/architecture.md), [content sync](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/contributing/content-sync.md), [adding a skill or prompt](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/contributing/adding-a-skill-or-prompt.md), [upstream ports](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/contributing/upstream-ports.md), [releasing](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/contributing/releasing.md), [evals](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/contributing/README.md#evals).

## Community

- **Gallery:** browse every bundled example and design system in the [online gallery](https://feimacode.github.io/open-design-agent-kit/), with prompts to remix one or add a design system to Claude Design. Remixable designs from the community live in [awesome-open-design](https://github.com/feimacode/awesome-open-design). Made something good? Add it there.
- **Questions and show-and-tell:** [GitHub Discussions](https://github.com/feimacode/open-design-agent-kit/discussions).
- **Bugs and requests:** [open an issue](https://github.com/feimacode/open-design-agent-kit/issues/new/choose).
- **Contributing:** start with [CONTRIBUTING.md](https://github.com/feimacode/open-design-agent-kit/blob/main/CONTRIBUTING.md) and the [`good first issue`](https://github.com/feimacode/open-design-agent-kit/labels/good%20first%20issue) label.

## Provenance

Some code is adapted from open-design (Apache-2.0): the artifact manifest logic, parts of the preview editor, and deck export. See [Upstream ports](https://github.com/feimacode/open-design-agent-kit/blob/main/docs/contributing/upstream-ports.md), and [`packages/core/src/vendored/SOURCE.md`](https://github.com/feimacode/open-design-agent-kit/blob/main/packages/core/src/vendored/SOURCE.md) for the exact record.

## License

MIT — see [LICENSE](https://github.com/feimacode/open-design-agent-kit/blob/main/LICENSE). Skill/design-system/craft/example content is vendored from [open-design](https://github.com/nexu-io/open-design), licensed Apache-2.0; see [Provenance](#provenance) above for which files that applies to.
