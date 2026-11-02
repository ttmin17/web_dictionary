---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-feishu
name: feishu
tagline: Work with Feishu or Lark bots, docs, sheets, bitables, approval flows,
  and OpenAPI/MCP setup without hardcoding credentials.
summary: "- Feishu China APIs use open.feishu.cn; Lark international APIs use
  open.larksuite.com. - Never hardcode app secrets, webhook secrets, tenant
  tokens, or user tokens. Use environment variables such as FEISHUAPPID,
  FEIS..."
categories:
  - coding-agents
tags:
  - agent-orchestration
  - ai-agent
  - cli
  - codewhale
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/feishu
  official_vendor: false
  license: MIT
signals:
  stars: 41169
  last_commit: 2026-11-02T08:01:40Z
  stars_delta_7d: 51
  stars_growth_pct: 0.1
  trending_score: 51.06
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41169
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/feishu/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:06.535Z
  truncated: false
type: agent_skill
skill:
  skill_name: feishu
  description: Work with Feishu or Lark bots, docs, sheets, bitables, approval
    flows, and OpenAPI/MCP setup without hardcoding credentials.
  folder_path: crates/skills/assets/skills/feishu
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
---

# Feishu / Lark
Use this skill when the user asks for Feishu, Lark, or "飞书" integration work.

## Ground Rules

- Feishu China APIs use `open.feishu.cn`; Lark international APIs use
  `open.larksuite.com`.
- Never hardcode app secrets, webhook secrets, tenant tokens, or user tokens.
  Use environment variables such as `FEISHU_APP_ID`,
  `FEISHU_APP_SECRET`, `FEISHU_WEBHOOK_URL`, and
  `FEISHU_WEBHOOK_SECRET`.
- If credentials are unavailable, produce setup instructions or a local stub
  instead of pretending the integration is live.

## Common Use Cases

- Bot webhook messages
- App access token and tenant access token flows
- Docs, Sheets, Wiki, and Bitable reads/writes
- Approval or workflow status updates
- Feishu/Lark MCP server configuration

## Workflow

1. Clarify whether the target is Feishu or Lark.
2. Identify the credential type: webhook, internal app, marketplace app, or
   OAuth user token.
3. Prefer official OpenAPI endpoints and signed webhooks when secrets are
   configured.
4. For MCP, build or configure a server that exposes narrow tools such as
   `send_message`, `read_doc`, `append_sheet_row`, or `query_bitable`.
5. Register the MCP server with `codewhale mcp add`, then run
   `codewhale mcp validate` and `codewhale mcp tools`.
6. Verify with a dry run, sandbox document, or read-back call before sending
   externally visible messages.

Ask for confirmation before sending messages, writing production documents, or
changing approval/workflow state.
