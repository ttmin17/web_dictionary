---
slug: zereight-gitlab-mcp
name: gitlab-mcp
tagline: "MCP server for GitLab: 277 tools for projects, MRs, issues, pipelines,
  wikis and more via the GitLab REST/GraphQL API"
summary: 📖 Documentation → · llms.txt · llms-full.txt
categories:
  - coding-agents
tags:
  - claude
  - cursor
  - devtools
  - gitlab
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: zereight/gitlab-mcp
  official_vendor: false
  license: MIT
signals:
  stars: 2065
  last_commit: 2026-10-26T03:36:47Z
  stars_delta_7d: 16
  stars_growth_pct: 0.8
  trending_score: 16.12
  rank_current: 69
  velocity_source: snapshot_delta
  sparkline_4w:
    - 2049
    - 2065
language: en
needs_keys: false
prerequisites:
  - Node.js >= 18
readme_source:
  repo: zereight/gitlab-mcp
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:38:02.920Z
  truncated: true
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@zereight/mcp-gitlab"
  env_vars: []
  confidence: manifest
---

# GitLab MCP Server
[English](https://github.com/zereight/gitlab-mcp/blob/main/README.md) | [한국어](https://github.com/zereight/gitlab-mcp/blob/main/README.ko.md) | [简体中文](https://github.com/zereight/gitlab-mcp/blob/main/README.zh-CN.md) | [Português (Brasil)](https://github.com/zereight/gitlab-mcp/blob/main/README.pt-BR.md)

📖 **[Documentation →](https://zereight.github.io/gitlab-mcp/)** · [llms.txt](https://github.com/zereight/gitlab-mcp/blob/main/llms.txt) · [llms-full.txt](https://github.com/zereight/gitlab-mcp/blob/main/llms-full.txt)

**Default: 40 tools** (38 `core` + `discover_tools` + `help`). 278 tools exist in total (275 in toolsets + `execute_graphql` + `discover_tools` + `help`). Start lean; call `discover_tools` to activate more for this session.

Install the `zereight-mcp-gitlab` binary first with `npm install -g @zereight/mcp-gitlab`, or Homebrew `brew tap zereight/gitlab-mcp https://github.com/zereight/gitlab-mcp` and `brew install zereight/gitlab-mcp/zereight-mcp-gitlab`. Official MCP Registry listing: [`io.github.zereight/gitlab-mcp`](https://registry.modelcontextprotocol.io/?q=io.github.zereight%2Fgitlab-mcp). One-liner: `npx -y @zereight/mcp-gitlab@latest`.

### Without → With

| Without this MCP | With this MCP |
| ---------------- | ------------- |
| Paste MR URLs and diffs into chat | `list_merge_request_changed_files` → batched `get_merge_request_file_diff` |
| Hunt job logs in the GitLab UI | `get_pipeline_job_output` with pagination |
| Re-explain the project path every turn | `project_id=group%2Fproject` and `merge_request_iid=123` |

### Three install paths

| Path | When | How |
| ---- | ---- | --- |
| Local IDE | Cursor, Claude Code, Codex on your machine | stdio + PAT or local OAuth |
| Shared HTTP | Team or hosted MCP | Streamable HTTP URL + remote auth or MCP OAuth |
| Claude.ai | Claude web connectors | Public HTTPS + `GITLAB_MCP_OAUTH` |

### Install

[![Install in Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en/install-mcp?name=zereight.gitlab-mcp&config=eyJ0eXBlIjoic3RkaW8iLCJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB6ZXJlaWdodC9tY3AtZ2l0bGFiQGxhdGVzdCJdLCJlbnYiOnsiR0lUTEFCX1BFUlNPTkFMX0FDQ0VTU19UT0tFTiI6IiR7ZW52OkdJVExBQl9QRVJTT05BTF9BQ0NFU1NfVE9LRU59IiwiR0lUTEFCX0FQSV9VUkwiOiJodHRwczovL2dpdGxhYi5jb20vYXBpL3Y0In19)

Install the binary first (`npm install -g @zereight/mcp-gitlab`, or Homebrew `brew tap zereight/gitlab-mcp https://github.com/zereight/gitlab-mcp` then `brew install zereight/gitlab-mcp/zereight-mcp-gitlab`). Read the token without echo:

```bash
read -rs GITLAB_PERSONAL_ACCESS_TOKEN && export GITLAB_PERSONAL_ACCESS_TOKEN
```

```bash
# Claude Code
claude mcp add gitlab --transport stdio --scope local --env GITLAB_PERSONAL_ACCESS_TOKEN="$GITLAB_PERSONAL_ACCESS_TOKEN" --env GITLAB_API_URL=https://gitlab.com/api/v4 -- zereight-mcp-gitlab

# Codex
codex mcp add gitlab --env GITLAB_PERSONAL_ACCESS_TOKEN="$GITLAB_PERSONAL_ACCESS_TOKEN" --env GITLAB_API_URL=https://gitlab.com/api/v4 -- zereight-mcp-gitlab
```

Other clients: [VS Code](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/vscode.md) · [GitHub Copilot](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/copilot.md) · [JSON clients](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/json-clients.md) · [Cursor details](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/cursor.md)

### Agent paste-prompt

Copy this into an agent that can edit MCP config:

```
Install the GitLab MCP server (@zereight/mcp-gitlab) for this workspace.
Binary: zereight-mcp-gitlab (npm i -g @zereight/mcp-gitlab, or npx -y @zereight/mcp-gitlab@latest).
Auth: GITLAB_PERSONAL_ACCESS_TOKEN plus GITLAB_API_URL=https://gitlab.com/api/v4 (or GITLAB_USE_OAUTH=true).
Local: claude mcp add gitlab --transport stdio --scope local --env GITLAB_PERSONAL_ACCESS_TOKEN="$GITLAB_PERSONAL_ACCESS_TOKEN" --env GITLAB_API_URL=https://gitlab.com/api/v4 -- zereight-mcp-gitlab
Or: codex mcp add gitlab --env GITLAB_PERSONAL_ACCESS_TOKEN="$GITLAB_PERSONAL_ACCESS_TOKEN" --env GITLAB_API_URL=https://gitlab.com/api/v4 -- zereight-mcp-gitlab
Cursor: use the README deeplink or docs/clients/cursor.md.
Remote HTTP: point the client at https://mcp.example.com/mcp (Streamable HTTP). Claude.ai needs GITLAB_MCP_OAUTH on that host.
Default list: 40 tools (38 core + discover_tools + help). Call discover_tools to expand. Do not enable the api toolset unless you accept its bypass risk.
Equal non-MCP path: npx skills add zereight/gitlab-mcp --skill gitlab-mcp-skill plus the zereight-mcp-gitlab CLI.
```

### Remote HTTP

First-class option for a hosted or self-hosted server. Point the client at a Streamable HTTP URL:

```json
{
  "mcpServers": {
    "gitlab": {
      "type": "http",
      "url": "https://mcp.example.com/mcp"
    }
  }
}
```

- Hosted / Claude.ai: `GITLAB_MCP_OAUTH=true` on the server (see [MCP OAuth](#mcp-oauth-setup-claudeai-native-oauth))
- Per-user PAT headers: `REMOTE_AUTHORIZATION=true` (see [Remote Authorization](#using-remote-authorization-remote_authorization))
- Local Docker examples are in [Usage](#usage)

### Skill + CLI (no MCP required)

Skill + CLI is an equal path, not a fallback. Same workflows, full payloads in a terminal, no MCP registration.

```bash
npx skills add zereight/gitlab-mcp --skill gitlab-mcp-skill
zereight-mcp-gitlab user whoami
zereight-mcp-gitlab mr list
```

See [CLI without MCP](https://github.com/zereight/gitlab-mcp/blob/main/docs/getting-started/cli-without-mcp.md) and [`skills/gitlab-mcp/`](https://github.com/zereight/gitlab-mcp/blob/main/skills/gitlab-mcp/).

### MCP vs Human CLI

| Use MCP when | Use the CLI when |
| ------------ | ---------------- |
| The agent needs structured tools in chat | You need the full payload (diffs, logs, artifacts) |
| `jmespath` or compact results are enough | `GITLAB_MCP_COMPACT_RESULTS` is on and you want the rest in a terminal |
| You already registered the server | You have a PAT or ran `auth` and do not want MCP |

Human CLI is never compacted. Destructive tools and `GITLAB_TOOL_POLICY_APPROVE` tools need `--yes`.

### Tips

`project_id` is a numeric ID or a URL-encoded path. Example: group `group`, project `project`, merge request `!123` → `project_id=group%2Fproject`, `merge_request_iid=123`. Nested groups use `%2F` between every segment (`group%2Fsubgroup%2Fproject`).

### FAQ

**How do I authenticate?** Local desktop: `GITLAB_PERSONAL_ACCESS_TOKEN` (or `GITLAB_PERSONAL_ACCESS_TOKEN_FILE`) is the simplest. Local OAuth is `GITLAB_USE_OAUTH=true`. Remote Claude.ai uses `GITLAB_MCP_OAUTH`. Multi-user HTTP uses `REMOTE_AUTHORIZATION` and a per-request token header.

**Why do I only see ~40 tools?** The default `core` toolset is 38 tools plus always-on `discover_tools` and `help`. Call `discover_tools` with no args to list categories, then pass a category (`pipelines`, `wiki`, …) to activate it for this session. `GITLAB_TOOLSETS=all` still does **not** enable `api`.

**Local OAuth vs MCP OAuth vs remote auth?** Local OAuth opens a browser on the same machine as the server. MCP OAuth is for a public HTTPS server and clients such as Claude.ai. Remote authorization forwards the caller's PAT or job token; there is no OAuth dance.

**How do I shrink huge replies?** Pass `jmespath` on any tool call. Or set `GITLAB_MCP_COMPACT_RESULTS=true` so oversized MCP replies become a preview plus a CLI command. Use the CLI when you need the full payload.

**Why is the `api` toolset dangerous?** `gitlab_api_request` bypasses group/project allowlists, other tool filters, and per-tool safety checks. Prompt injection can drive it. Enable it only by listing `api` in `GITLAB_TOOLSETS`. `all`, `discover_tools`, and `GITLAB_TOOLS` do not.

### Cursor rule / CLAUDE.md snippet

```
GitLab merge requests, issues, and pipelines go through this MCP (@zereight/mcp-gitlab).
Start with the default core tools. Call discover_tools to expand.
Prefer list_merge_request_changed_files, then batched get_merge_request_file_diff.
Use jmespath or compact results; use the CLI for full diffs and job logs.
```

[![Star History Chart](https://raw.githubusercontent.com/zereight/gitlab-mcp/main/assets/star-history.png)](https://www.star-history.com/?repos=zereight%2Fgitlab-mcp&type=date&legend=top-left)

## @zereight/mcp-gitlab

**Agent-workflow-optimized GitLab MCP** — manage projects, merge requests, issues, pipelines, wiki, releases, tags, milestones, and more through stdio, SSE, and Streamable HTTP.

Supports PAT, OAuth, read-only mode, dynamic API URLs, and remote authorization for VS Code, Claude, Cursor, Copilot, and other MCP clients.

### Why use this GitLab MCP?

- **Default 40 tools (38 `core` + `discover_tools` + `help`); 278 total** — start lean; call `discover_tools` to activate more without CQRS-style grouping
- **MR 2-step review** — `list_merge_request_changed_files` → batched `get_merge_request_file_diff`
- **Agent Skill built in** — workflow guidance in `skills/gitlab-mcp/`
- **Flexible auth** — Personal Access Token, local OAuth2 browser flow, MCP OAuth proxy, and per-request remote authorization
- **Multiple transports** — stdio for local clients, SSE for legacy clients, and Streamable HTTP for modern remote deployments
- **Client-friendly setup** — examples for Claude Code, Codex, Antigravity, OpenCode, Copilot, Cline, Roo Code, Cursor, Kilo Code, and Amp Code
- **Self-hosted ready** — works with custom GitLab instances, proxy settings, and dynamic API URL routing
- **JMESPath result filtering** — optional `jmespath` on tool calls (see `tools/list`) shrinks JSON results without changing GitLab API requests; when response masking is enabled, JMESPath runs on masked data.

### How we compare

|                | @zereight/mcp-gitlab                                              | GitLab MCP A (community CQRS-style)          | GitLab official MCP server                                                                                                                       |
| -------------- | ----------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Best for**   | AI agent workflows                                                | Enterprise multi-instance / grouped tools    | Built into GitLab, no separate install                                                                                                           |
| **Tool model** | 278 tools: 275 in toolsets + `execute_graphql` + `discover_tools` + `help` | ~50–60 grouped `browse_*` / `manage_*` tools | Toolsets chosen with an HTTP header                                                                                                              |
| **MR review**  | 2-step batched diff                                               | Varies                                       | `get_merge_request` with diffs                                                                                                                   |
| **Node.js**    | >=20.0.0                                                          | Often >=24                                   | Node.js 20+ for stdio via `mcp-remote`                                                                                                           |
| **License**    | MIT                                                               | Varies                                       | Part of GitLab                                                                                                                                   |

### tools/list size (measured 2026-10-24)

A client sends the whole `tools/list` result to the model at session start. Token estimate is UTF-8 bytes / 4.

| Profile | Tools | JSON bytes | Est. tokens |
| ------- | ----: | ---------: | ----------: |
| Default (`core` + `discover_tools` + `help`) | 40 | 50,682 | 12,671 |
| `GITLAB_TOOL_PROFILE=slim` | 39 | 49,646 | 12,412 |
| `GITLAB_TOOLSETS=all` | 276 | 285,677 | 71,420 |

Re-measure with `npm run test:mock` (`test/tools-list-budget.test.ts`) after description or schema changes.

GitLab also ships an [official MCP server](https://docs.gitlab.com/user/model_context_protocol/mcp_server/).

- Free, Premium, and Ultimate. Moved from Premium to Free in GitLab 19.2. Generally available in GitLab 19.5.
- On GitLab.com, a top-level group Owner allows access to the MCP server. On GitLab Self-Managed and GitLab Dedicated, an administrator controls the instance setting. Default rules are on the official page.
- Remote clients use HTTP `https://<gitlab.example.com>/api/v4/mcp` with OAuth 2.0 dynamic client registration.
- stdio goes through `mcp-remote` and needs Node.js 20 or later.
- Toolsets use the `X-Gitlab-Enabled-Mcp-Server-Toolsets` header. An optional `X-Gitlab-Mcp-Server-Tool-Name-Prefix` header keeps the first 32 characters of a tool-name prefix.

[Full comparison with the official GitLab MCP server →](https://github.com/zereight/gitlab-mcp/blob/main/docs/comparison/official-gitlab-mcp.md)

Quick start: choose either Personal Access Token or OAuth2 setup below, install `@zereight/mcp-gitlab`, and use `zereight-mcp-gitlab` in your MCP client configuration.

### Client Setup Guides

- [Claude Code Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/claude-code.md)
- [VS Code Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/vscode.md)
- [GitHub Copilot Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/copilot.md)
- [Codex Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/codex.md)
- [Cursor Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/cursor.md)
- [JSON-Based MCP Clients Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/json-clients.md) - for Factory AI Droid, OpenClaw, and OpenCode style clients
- [OAuth2 Authentication Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/auth/oauth-setup.md)
- [Environment Variables Reference](https://github.com/zereight/gitlab-mcp/blob/main/docs/configuration/environment-variables.md)
- [Stateless Mode — Multi-Pod HPA](https://github.com/zereight/gitlab-mcp/blob/main/docs/configuration/stateless-mode.md)
- [Custom Agents and Multiple PAT Setup](https://github.com/zereight/gitlab-mcp/blob/main/docs/auth/custom-agent-multiple-pat.md)

## Usage

### Setup Overview

#### Authentication Methods

The server supports four authentication methods:

**For local/desktop use** (most common):

1. **Personal Access Token** (`GITLAB_PERSONAL_ACCESS_TOKEN` or `GITLAB_PERSONAL_ACCESS_TOKEN_FILE`) — simplest setup
2. **OAuth2 — Local Browser** (`GITLAB_USE_OAUTH`) — recommended for better security

**For server/remote deployments**:

3. **OAuth2 — MCP Proxy** (`GITLAB_MCP_OAUTH`) — for remote MCP clients such as Claude.ai
4. **Remote Authorization** (`REMOTE_AUTHORIZATION`) — multi-user deployments where each caller provides their own token

#### Quick setup paths

- **Claude Code**: see [Claude Code Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/claude-code.md)
- **VS Code**: see [VS Code Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/vscode.md)
- **GitHub Copilot**: see [GitHub Copilot Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/copilot.md)
- **Codex**: see [Codex Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/codex.md)
- **Cursor**: see [Cursor Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/cursor.md)
- **Factory AI Droid / OpenClaw / OpenCode style clients**: see [JSON-Based MCP Clients Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/clients/json-clients.md)
- **OAuth browser flow details**: see [OAuth2 Authentication Setup Guide](https://github.com/zereight/gitlab-mcp/blob/main/docs/auth/oauth-setup.md)
- **OAuth without a localhost callback** (SSO, remote shell, background clients): run `zereight-mcp-gitlab auth` (GitLab 17.9+ device flow; 17.2–17.8 need `oauth2_device_grant_flow`), then start the server with `GITLAB_USE_OAUTH=true`. See [standalone device-flow command](https://github.com/zereight/gitlab-mcp/blob/main/docs/auth/oauth-setup.md#standalone-device-flow-auth-command).

For the simplest local setup, start with a Personal Access Token. For browser-based local auth, use OAuth2. For remote or multi-user deployments, continue to the MCP OAuth and Remote Authorization sections later in this README.

Install the server once:

```shell
brew tap zereight/gitlab-mcp https://github.com/zereight/gitlab-mcp
brew install zereight/gitlab-mcp/zereight-mcp-gitlab
```

Or with npm:

```shell
npm install -g @zereight/mcp-gitlab
```

Or with Nix, by adding this flake to your own:

```nix
# flake.nix
inputs.gitlab-mcp.url = "github:zereight/gitlab-mcp";

# wherever you configure your MCP client:
command = lib.getExe inputs.gitlab-mcp.packages.${system}.default;
```

The store path is pinned by your lock file; update it with `nix flake update gitlab-mcp`.

The examples use `zereight-mcp-gitlab`, a less collision-prone alias for the legacy `mcp-gitlab` binary. If your MCP client cannot find it, use the absolute path from `which zereight-mcp-gitlab`.

No global install? Pin `npx` to the previous stable release (the version these docs recommend), for example `npx -y @zereight/mcp-gitlab@2.3.10`. If you always want the newest release, use `npx -y @zereight/mcp-gitlab@latest` instead. To try a fix merged to `main` before the next stable release, use `npx -y @zereight/mcp-gitlab@next`, a pre-release build that is not meant for production. The server prints a notice to stderr on startup when a newer version is available (disable with `GITLAB_DISABLE_VERSION_CHECK=true`).

#### Claude Desktop one-click install (MCP Bundle)

Every GitHub release after v2.3.1 ships a `gitlab-mcp.mcpb` [MCP Bundle](https://github.com/modelcontextprotocol/mcpb). Download the [latest bundle](https://github.com/zereight/gitlab-mcp/releases/latest/download/gitlab-mcp.mcpb) and open it with Claude Desktop (or drag it into **Settings → Extensions**). Claude Desktop asks for your Personal Access Token (stored as a sensitive value) and lets you set `GITLAB_API_URL`, `GITLAB_PERMISSION_MODE`, `GITLAB_TOOLSETS`, and `GITLAB_MASKING_ENABLED`. No separate Node.js or npm install is needed.

To build the bundle from source, run `npm run pack:mcpb` (writes `gitlab-mcp.mcpb`).

#### Using CLI Arguments (for clients with env var issues)

Some MCP clients (like GitHub Copilot CLI) have issues with environment variables. Use CLI arguments instead:

```json
{
  "mcpServers": {
    "gitlab": {
      "command": "zereight-mcp-gitlab",
      "args": ["--token=YOUR_GITLAB_TOKEN", "--api-url=https://gitlab.com/api/v4"],
      "tools": ["*"]
    }
  }
}
```

**Available CLI arguments:**

- `--token` - GitLab Personal Access Token (replaces `GITLAB_PERSONAL_ACCESS_TOKEN`)
- `--api-url` - GitLab API URL (replaces `GITLAB_API_URL`)
- `--read-only=true` - Deprecated (removed in next major (v3.0.0)); use `--permission-mode=readonly` instead (replaces `GITLAB_READ_ONLY_MODE`)
- `--permission-mode` - Permission level: `readonly`, `modify` (no delete or teardown tools), or `full` (replaces `GITLAB_PERMISSION_MODE`, default `full`)
- `--toolsets=all` - Enable named toolsets except the explicit-only `api` toolset (replaces `GITLAB_TOOLSETS`; unset uses the lean `core` default). `gitlab_api_request` needs `--toolsets=api`
- `--tools=list_issues` - Add individual tools (replaces `GITLAB_TOOLS`)
- `--use-wiki=true` - Deprecated (removed in next major (v3.0.0)); use `--toolsets=core,wiki` instead (replaces `USE_GITLAB_WIKI`)
- `--use-milestone=true` - Deprecated (removed in next major (v3.0.0)); use `--toolsets=core,milestones` instead (replaces `USE_MILESTONE`)
- `--use-pipeline=true` - Deprecated (removed in next major (v3.0.0)); use `--toolsets=core,pipelines` and append `validate_ci_lint,validate_project_ci_lint` to the existing `--tools` list (or set `--tools=validate_ci_lint,validate_project_ci_lint` when that list is unset) (replaces `USE_PIPELINE`)
- `--disable-version-check=true` - Disable the startup new-version notice (replaces `GITLAB_DISABLE_VERSION_CHECK`)
- `--masking-enabled=true` - Enable text-response masking (replaces `GITLAB_MASKING_ENABLED`)
- `--masking-config` - Path to a masking configuration file (replaces `GITLAB_MASKING_CONFIG`)
- `--masking-policy-file` - Path to a protected managed-policy file (replaces `GITLAB_MASKING_POLICY_FILE`)
- `--masking-workspace-dir` - Directory used to resolve masking files (replaces `GITLAB_MASKING_WORKSPACE_DIR`)
- `--download-dir` - Directory `download_attachment` and `download_job_artifacts` save files under (replaces `GITLAB_DOWNLOAD_DIR`; default `.gitlab-mcp-downloads`)
- `--compact-results=true` - Truncate oversized MCP tool replies and attach a CLI command for the full payload (replaces `GITLAB_MCP_COMPACT_RESULTS`; default off)
- `--compact-result-chars` - Character threshold for compacting (replaces `GITLAB_MCP_COMPACT_RESULT_CHARS`; default `4000`)
- `--compact-tools` - Comma-separated tool names to compact when oversized, without turning global compact on (replaces `GITLAB_MCP_COMPACT_TOOLS`)
- `--tool-profile` - `full` (default) or `slim`. `slim` drops draft notes, emoji reactions, labels, CI catalog tools, and `create_group` from the initial list. Ignored when `GITLAB_TOOLSETS` is set (replaces `GITLAB_TOOL_PROFILE`)

If you already set `GITLAB_TOOLSETS` or `--toolsets`, append `wiki`, `milestones`, or `pipelines` to that list instead of replacing it. If you already set `GITLAB_TOOLS` or `--tools`, append `validate_ci_lint` and `validate_project_ci_lint` to that list instead of replacing it. An explicit list replaces the default `core` toolset; it does not merge.

CLI arguments take precedence over environment variables.

`zereight-mcp-gitlab auth` is a subcommand (not an MCP server flag). It runs GitLab device flow and exits. See [CLI Arguments](https://github.com/zereight/gitlab-mcp/blob/main/docs/getting-started/cli-arguments.md#auth).

The same binary is also a `gh`-style GitLab CLI (`tool <name>` or curated forms such as `mr list`). **No MCP registration is needed** — set a PAT, or run `auth` and set `GITLAB_USE_OAUTH=true`: see [CLI without MCP](https://github.com/zereight/gitlab-mcp/blob/main/docs/getting-started/cli-without-mcp.md). `setup --cursor` / `setup --claude` prints client config; `doctor` checks token, API URL, toolsets, and version. Use it for the full payload in a terminal. MCP replies stay in the chat unless you set `GITLAB_MCP_COMPACT_RESULTS=true` (or `--compact-results`), which replaces oversized tool replies with a preview and a CLI command. Human CLI is never compacted. Same permission mode, toolsets, denied-tools regex, and tool-policy filters. Destructive tools and `GITLAB_TOOL_POLICY_APPROVE` tools need `--yes`. See [Human CLI](https://github.com/zereight/gitlab-mcp/blob/main/docs/getting-started/cli-arguments.md#human-cli).

> **Fine-grained tool filtering:** use `GITLAB_PERMISSION_MODE=modify` to allow create/update while
> blocking every delete tool and the destructive teardown tools (`cancel_pipeline`,
> `cancel_pipeline_job`, `stop_environment`, `stop_stale_environments`, `unprotect_branch`,
> `unprotect_tag`) —
> including destructive mutations (deletion and teardown verbs) through `execute_graphql` and
> `push_files` `delete`/`move` actions — or `GITLAB_PERMISSION_MODE=readonly` for read-only
> access. You can also
> enable toolset groups with `GITLAB_TOOLSETS=<group,…>`, allow-list individual tools with
> `GITLAB_TOOLS=<tool,…>` (e.g. read-only groups plus a few specific write tools), and
> deny-list by pattern with `GITLAB_DENIED_TOOLS_REGEX`. The legacy `USE_GITLAB_WIKI` /
> `USE_MILESTONE` / `USE_PIPELINE` flags are deprecated (removed in next major (v3.0.0)).
> Use `GITLAB_TOOLSETS=core,wiki`, `core,milestones`, or `core,pipelines`
> (`USE_PIPELINE` also needs `validate_ci_lint,validate_project_ci_lint` appended to an existing `GITLAB_TOOLS` list instead of replacing it).
> If you already set `GITLAB_TOOLSETS`, append the toolset to your existing list instead of replacing it.
> If `GITLAB_TOOLS` is unset, set `GITLAB_TOOLS=validate_ci_lint,validate_project_ci_lint`. If it is already set, append `validate_ci_lint,validate_project_ci_lint` instead of replacing that list.
> See [Tools Reference](https://github.com/zereight/gitlab-mcp/blob/main/docs/tools/index.md#feature-toggles) and
> [Environment Variables](https://github.com/zereight/gitlab-mcp/blob/main/docs/configuration/environment-variables.md).

> [!CAUTION]
> `gitlab_api_request` (toolset `api`) bypasses `GITLAB_ALLOWED_GROUPS` and other group restrictions, project allowlists, tool-level restrictions (`GITLAB_TOOLS`, `GITLAB_DENIED_TOOLS_REGEX` on other tools), and individual tool safety checks. The full token permission scope is exposed. Prompt injection can drive this tool. Operators who rely on these restrictions must NOT enable it.
> Enable it only by listing `api` in `GITLAB_TOOLSETS` (`GITLAB_TOOLSETS=all`, `discover_tools`, `GITLAB_TOOLS`, legacy `USE_*` flags, and `GITLAB_TOOL_PROFILE` do not). With `GITLAB_ALLOWED_PROJECT_IDS` or a session project scope, only `/projects/:id` paths for an allowed project are accepted. Endpoints such as `/search`, `/users`, `/groups/:id`, and `/runners` are rejected. Body and query parameters that name another project are not checked. `GITLAB_PROJECT_ID` and OAuth group allowlists are not enforced.

- sse

Pass the variable name only. The Docker client copies the exported `GITLAB_PERSONAL_ACCESS_TOKEN` into the container.

```shell
docker run -i --rm \
  -e HOST=0.0.0.0 \
  -e GITLAB_PERSONAL_ACCESS_TOKEN \
  -e GITLAB_API_URL="https://gitlab.com/api/v4" \
  -e GITLAB_PERMISSION_MODE=readonly \
  -e GITLAB_TOOLSETS=core,wiki,milestones,pipelines \
  -e SSE=true \
  -e SSE_AUTH_TOKEN=your_mcp_sse_token \
  -p 3333:3002 \
  zereight050/gitlab-mcp
```

```json
{
  "mcpServers": {
    "gitlab": {
      "type": "sse",
      "url": "http://localhost:3333/sse",
      "headers": {
        "Authorization": "Bearer your_mcp_sse_token"
      }
    }
  }
}
```

- streamable-http

```shell
docker run -i --rm \
  -e HOST=0.0.0.0 \
  -e REMOTE_AUTHORIZATION=true \
  -e GITLAB_API_URL="https://gitlab.com/api/v4" \
  -e GITLAB_PERMISSION_MODE=readonly \
  -e GITLAB_TOOLSETS=core,wiki,milestones,pipelines \
  -e STREAMABLE_HTTP=true \
  -p 3333:3002 \
  zereight050/gitlab-mcp
```

```json
{
  "mcpServers": {
    "gitlab": {
      "type": "streamable-http",
      "url": "http://localhost:3333/mcp",
      "headers": {
        "Authorization": "Bearer glpat-..."
      }
    }
  }
}
```

#### Using MCP OAuth Proxy (`GITLAB_MCP_OAUTH`)

> **For server/remote deployments only.** This mode requires the MCP server to be deployed with a publicly accessible HTTPS URL. For local/desktop use, see `GITLAB_USE_OAUTH` above.

For remote MCP clients that support the MCP OAuth specification (e.g. Claude.ai).
The server acts as a full OAuth 2.0 authorization server — unauthenticated requests
receive a `401 + WWW-Authenticate` response, which triggers the OAuth browser flow
automatically on the client side.

Remote MCP clients such as OpenCode, MCPJam, and Claude.ai can send their own
callback URL during authorization. If you cannot register every client callback
URL in GitLab, enable `GITLAB_OAUTH_CALLBACK_PROXY=true`. With callback proxy
mode, GitLab only needs one registered redirect URI: `{MCP_SERVER_URL}/callback`.

`GITLAB_OAUTH_REDIRECT_URI` is for local OAuth (`GITLAB_USE_OAUTH`) only. It does
not override remote MCP OAuth client callback URLs and should not be used to fix
remote `Unregistered redirect_uri` errors.

This variable exists because the local OAuth flow starts a browser on the same
machine as the MCP server and listens for the callback on a local HTTP server,
for example `http://127.0.0.1:8888/callback`.

Remote MCP OAuth is different. In `GITLAB_MCP_OAUTH=true` mode, the MCP client
provides its own callback URL during `/authorize`. `GITLAB_OAUTH_REDIRECT_URI`
does not replace that client-provided URL.

| Mode             | Enable with             | Callback variable                  | GitLab redirect URI                                     |
| ---------------- | ----------------------- | ---------------------------------- | ------------------------------------------------------- |
| Local OAuth      | `GITLAB_USE_OAUTH=true` | `GITLAB_OAUTH_REDIRECT_URI`        | `http://127.0.0.1:8888/callback` or your local callback |
| Remote MCP OAuth | `GITLAB_MCP_OAUTH=true` | `GITLAB_OAUTH_CALLBACK_PROXY=true` | `{MCP_SERVER_URL}/callback`                             |

Use `GITLAB_OAUTH_REDIRECT_URI` only when the MCP server itself owns the local
browser callback. Use `GITLAB_OAUTH_CALLBACK_PROXY=true` when a remote MCP client
owns the callback URL.

**How it works**: You deploy this MCP server somewhere with a public HTTPS URL. MCP
clients connect to `{MCP_SERVER_URL}/mcp`. The server handles the OAuth 2.0 flow,
exchanging credentials with GitLab on behalf of the client.

**Prerequisites**:

1. A publicly accessible HTTPS server URL (`MCP_SERVER_URL`) — use [ngrok](https://ngrok.com) for local testing
2. A pre-registered GitLab OAuth application with `api` (or `read_api`) scopes
   — Go to `Admin area` → `Applications`, set Redirect URI to `{MCP_SERVER_URL}/callback`

| Environment Variable          | Required | Description                                                                                                                             |
| ----------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `GITLAB_MCP_OAUTH`            | ✅       | Set to `true` to enable                                                                                                                 |
| `GITLAB_API_URL`              | ✅       | GitLab API base URL. Do not embed credentials (`user:pass@`) in the URL; they are ignored. A comma in a password must be written as `%2C`. |
| `GITLAB_OAUTH_APP_ID`         | ✅       | GitLab OAuth Application ID                                                                                                             |
| `MCP_SERVER_URL`              | ✅       | Public HTTPS URL of this MCP server                                                                                                     |
| `STREAMABLE_HTTP`             | ✅       | Must be `true`                                                                                                                          |
| `GITLAB_OAUTH_CALLBACK_PROXY` | optional | Set to `true` to use the MCP server's fixed `/callback` URL                                                                             |
| `GITLAB_OAUTH_ALLOWED_REDIRECT_URIS` | optional | Client callback URLs that callback proxy mode will redirect to (default: Claude, ChatGPT, Cursor and loopback callbacks; `defaults,<url>` to add one) |
| `GITLAB_OAUTH_SCOPES`         | optional | Comma-separated scopes (default: `api,read_api,read_user`)                                                                              |
| `GITLAB_OAUTH_ALLOWED_GROUPS` | optional | Comma-separated group full paths — only members (and subgroup members) may use the server (replaces deprecated `GITLAB_ALLOWED_GROUPS`) |
| `OAUTH_DISABLE_REFRESH_TOKEN` | optional | Set to `true` to issue no refresh tokens: users re-authorize in the browser each time the GitLab access token expires (2 h), regardless of the session TTL |

When `STREAMABLE_HTTP=true`, server-side GitLab credentials (`GITLAB_PERSONAL_ACCESS_TOKEN`, `GITLAB_JOB_TOKEN`, `GITLAB_AUTH_COOKIE_PATH`, or `GITLAB_USE_OAUTH`) require `REMOTE_AUTHORIZATION=true`, `GITLAB_MCP_OAUTH=true`, or `STREAMABLE_HTTP_AUTH_TOKEN`.

> **Troubleshooting `Unregistered redirect_uri`**
>
> Check the `redirect_uri` in the browser URL. If it points to a client callback
> such as `http://127.0.0.1:xxxxx/.../callback`, enable:
>
> ```env
> GITLAB_OAUTH_CALLBACK_PROXY=true
> ```
>
> Do not fix remote MCP OAuth by changing `GITLAB_OAUTH_REDIRECT_URI`. That
> variable is for local OAuth (`GITLAB_USE_OAUTH`) only.

```shell
docker run -i --rm \
  -e HOST=0.0.0.0 \
  -e GITLAB_MCP_OAUTH=true \
  -e GITLAB_OAUTH_CALLBACK_PROXY=true \
  -e STREAMABLE_HTTP=true \
  -e MCP_SERVER_URL=https://your-server.example.com \
  -e GITLAB_API_URL="https://gitlab.com/api/v4" \
  -e GITLAB_OAUTH_APP_ID=your_app_id \
  -p 3000:3002 \
  zereight050/gitlab-mcp
```

MCP client configuration:

```json
{
  "mcpServers": {
    "gitlab": {
      "type": "http",
      "url": "https://your-server.example.com/mcp"
    }
  }
}
```

#### Using Remote Authorization (`REMOTE_AUTHORIZATION`)

> **For server/remote deployments only.** Each HTTP caller provides their own GitLab token directly in request headers — no OAuth flow involved.

For multi-user or multi-tenant deployments where each caller provides their own
GitLab token in the HTTP request header. No OAuth flow — the MCP server forwards
the token to GitLab on behalf of the caller.

**Header priority**: `Private-Token` > `JOB-TOKEN` > `Authorization: Bearer`

| Environment Variable                          | Required | Description                                                                                                             |
| --------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `REMOTE_AUTHORIZATION`                        | ✅       | Set to `true` to enable                                                                                                 |
| `STREAMABLE_HTTP`                             | ✅       | Must be `true`                                                                                                          |
| `ENABLE_DYNAMIC_API_URL`                      | optional | Allow per-request GitLab URL via `X-GitLab-API-URL` header                                                              |
| `GITLAB_ALLOWED_HOSTS`                        | optional | Comma-separated allowed `X-GitLab-API-URL` hosts; `GITLAB_API_URL` hosts are always allowed. Also trusted as download redirect targets (release assets, job artifacts, uploaded attachments); list private-network hosts here |
| `GITLAB_ALLOW_UNAUTHENTICATED_TOOL_DISCOVERY` | optional | Allow unauthenticated `initialize`, `notifications/initialized`, `tools/list`, and `server/discover` only (tool calls still require auth)  |
| `MCP_SERVER_URL` / `MCP_ALLOWED_HOSTS` / `MCP_ALLOWED_ORIGINS` | optional | Allowed public `/mcp` host/origin values for DNS rebinding protection                                   |
| `MCP_TRUST_PROXY`                             | optional | Trust `Forwarded` / `X-Forwarded-*` headers behind a reverse proxy (download URLs, Express `req.ip`, `/mcp` IP rate limits, OAuth rate limits) |

`GITLAB_ALLOW_UNAUTHENTICATED_TOOL_DISCOVERY=true` is intended for MCP gateways
or admin UIs that need to inspect tool metadata before a user provides a GitLab
token. Leave it disabled unless the tool list is safe to expose in your deployment.

When `MCP_SERVER_URL` is not set, remote download URLs fall back to the local
server address. Set `MCP_TRUST_PROXY=true` only if the server is reachable through a
trusted reverse proxy and direct client access to the MCP server is blocked.
This enables Express `trust proxy` for Streamable HTTP and SSE, derives public
download URLs from `Forwarded` / `X-Forwarded-Proto` / `X-Forwarded-Host` /
`X-Forwarded-Prefix`, and keeps OAuth endpoint rate limiting working when
proxies send `X-Forwarded-For` with a client port (for example `1.2.3.4:5678`).
Existing OAuth+proxy deployments must set this explicitly after the flag was
introduced.

**Example request headers**:

```http
Private-Token: glpat-xxxxxxxxxxxxxxxxxxxx
```

or using a Bearer token:

```http
Authorization: Bearer glpat-xxxxxxxxxxxxxxxxxxxx
```

> ⚠️ `REMOTE_AUTHORIZATION` is **not compatible** with SSE transport. `STREAMABLE_HTTP=true` is required.

### Environment Variables

Use the dedicated reference for the full environment variable list:

- [Environment Variables Reference](https://github.com/zereight/gitlab-mcp/blob/main/docs/configuration/environment-variables.md)

Most users only need one of these starting sets:

- **Local PAT**: `GITLAB_PERSONAL_ACCESS_TOKEN`, `GITLAB_API_URL`
- **Local OAuth**: `GITLAB_USE_OAUTH=true`, `GITLAB_OAUTH_CLIENT_ID`, `GITLAB_OAUTH_REDIRECT_URI`, `GITLAB_API_URL`
- **Remote multi-user HTTP**: `STREAMABLE_HTTP=true`, `REMOTE_AUTHORIZATION=true` (or `GITLAB_MCP_OAUTH=true`), `MCP_TRUST_PROXY=true` (behind a reverse proxy), `MAX_REQUESTS_PER_MINUTE=300`, `MCP_SERVER_URL` or `MCP_ALLOWED_HOSTS`, `HOST`, `PORT`
- **Multiple side-by-side deployments**: set a distinct `MCP_SERVER_NAME` per instance (e.g. `gitlab-selfhosted-readonly`) so clients, logs, and telemetry can tell them apart
- **Multi-pod HPA (stateless)**: above + `OAUTH_STATELESS_MODE=true`, `OAUTH_STATELESS_SECRET` (same across all pods). See [Stateless Mode](https://github.com/zereight/gitlab-mcp/blob/main/docs/configuration/stateless-mode.md).

Commonly referenced variables:

- `GITLAB_API_URL`
- `GITLAB_PERSONAL_ACCESS_TOKEN`
- `GITLAB_USE_OAUTH`
- `REMOTE_AUTHORIZATION`
- `MCP_TRUST_PROXY`
- `MAX_REQUESTS_PER_MINUTE`
- `MAX_SESSIONS`
- `MCP_ALLOWED_HOSTS`
- `MCP_ALLOWED_ORIGINS`
- `GITLAB_MCP_OAUTH`
- `GITLAB_OAUTH_CALLBACK_PROXY`
- `GITLAB_OAUTH_ALLOWED_REDIRECT_URIS`
- `OAUTH_REGISTER_RATE_LIMIT_PER_HOUR`
- `OAUTH_DISABLE_REFRESH_TOKEN`
- `OAUTH_STATELESS_MODE`
- `OAUTH_STATELESS_SECRET`

The reference document also covers:

- auth and OAuth variables
- MCP OAuth proxy variables
- project and tool filtering variables
- dynamic tool discovery via `discover_tools` (on-demand toolset activation)
- transport and session variables
- proxy and TLS variables

For callback proxy mode details, see [GitLab MCP OAuth Callback Proxy](https://github.com/zereight/gitlab-mcp/blob/main/docs/auth/oauth-callback-proxy.md).

#### SSE session limits

`GET /sse` is subject to the same remote-transport controls as Streamable HTTP:

- **Capacity:** at most `MAX_SESSIONS` concurrent SSE sessions (default 1000); further connections get `503`.
- **Creation rate limit:** new connections are limited to `MAX_REQUESTS_PER_MINUTE` per client IP (default 60); excess connections get `429`.
- **Idle timeout:** a session that receives no `POST /messages` request for `SESSION_TIMEOUT_SECONDS` (default 1 hour) is closed, so an idle client must reconnect instead of holding a capacity slot. Unlike Streamable HTTP, holding the SSE stream open does **not** count as activity.
- `/health` returns `503` with `status: "degraded"` while the instance is at capacity.

Tune these with [`MAX_SESSIONS`](https://github.com/zereight/gitlab-mcp/blob/main/docs/configuration/environment-variables.md#max_sessions), `MAX_REQUESTS_PER_MINUTE`, and `SESSION_TIMEOUT_SECONDS`.

### Remote Authorization Setup (Multi-User Support)

When using `REMOTE_AUTHORIZATION=true`, the MCP server can support multiple users, each with their own GitLab token passed via HTTP headers. This is useful for:

- Shared MCP server instances where each user needs their own GitLab access
- IDE integrations that can inject user-specific tokens into MCP requests

**Setup Example:**

```bash
# Start server with remote authorization
docker run -d \
  -e HOST=0.0.0.0 \
  -e STREAMABLE_HTTP=true \
  -e REMOTE_AUTHORIZATION=true \
  -e GITLAB_API_URL="https://gitlab.com/api/v4" \
  -e GITLAB_PERMISSION_MODE=readonly \
  -e SESSION_TIMEOUT_SECONDS=3600 \
  -p 3333:3002 \
  zereight050/gitlab-mcp
```

**Client Configuration:**

Your IDE or MCP client must send one of these headers with each request:

```
Authorization: Bearer glpat-xxxxxxxxxxxxxxxxxxxx
```

or

```
Private-Token: glpat-xxxxxxxxxxxxxxxxxxxx
```

The token is stored per session (identified by `mcp-session-id` header) and reused for subsequent requests in the same session. The session belongs to the GitLab user of that token: a request with another user's token gets `404 Session not found`, and `GET` / `DELETE /mcp` without a token get `401`.

#### Remote Authorization Client Configuration Example with Cursor

```json
{
  "mcpServers": {
    "GitLab": {
      "url": "http(s)://<your_mcp_gitlab_server>/mcp",
      "headers": {
        "Authorization": "Bearer glpat-..."
      }
    }
  }
}
```

**Important Notes:**

- Remote authorization **only works with Streamable HTTP transport**
- Each session is isolated - tokens from one session cannot access another session's data
  Tokens are automatically cleaned up when sessions close
- **Session timeout:** Auth tokens expire after `SESSION_TIMEOUT_SECONDS` (default 1 hour) of inactivity. After timeout, the client must send auth headers again. The transport session remains active.
- Each request resets the timeout timer for that session
- **Rate limiting:** `/mcp` requests are limited to `MAX_REQUESTS_PER_MINUTE` per client IP, and per MCP session when using OAuth or remote authorization (default 60). See [environment-variables.md](https://github.com/zereight/gitlab-mcp/blob/main/docs/configuration/environment-variables.md#max_requests_per_minute).
- **Capacity limit:** Server accepts up to `MAX_SESSIONS` concurrent sessions (default 1000)

### MCP OAuth Setup (Claude.ai Native OAuth)

When using `GITLAB_MCP_OAUTH=true`, the server acts as an OAuth proxy to your GitLab
instance. Claude.ai (and any MCP-spec-compliant client) handles the entire browser
authentication flow automatically — no manual Personal Access Token management needed.

**Prerequisites:**

A **pre-registered GitLab OAuth application** is required. GitLab restricts dynamically
registered (unverified) applications to the `mcp` scope, which is insufficient for API
calls (need `api` or `read_api`).

1. Go to your GitLab instance → **Admin Area > Applications** (instance-wide) or **User Settings > Applications** (personal)
2. Create a new application with:
   - **Confidential**: unchecked
   - **Scopes**: `api`, `read_api`, `read_user` (or whichever scopes you intend to request via `GITLAB_OAUTH_SCOPES`)
3. Save and copy the **Application ID** — this is your `GITLAB_OAUTH_APP_ID`

**How it works:**

1. User adds your MCP server URL in Claude.ai
2. Claude.ai discovers OAuth endpoints via `/.well-known/oauth-authorization-server`
3. Claude.ai registers itself via Dynamic Client Registration (`POST /register`) — handled locally by the MCP server (each client gets a virtual client ID)
4. Claude.ai redirects the user's browser to GitLab's login page using the pre-registered OAuth application
5. User authenticates; GitLab redirects back to `https://claude.ai/api/mcp/auth_callback`
6. Claude.ai sends `Authorization: Bearer <token>` on every MCP request
7. Server validates the token with GitLab and stores it per session

**Server setup:**

```bash
docker run -d \
  -e STREAMABLE_HTTP=true \
  -e GITLAB_MCP_OAUTH=true \
  -e GITLAB_OAUTH_APP_ID="your-gitlab-oauth-app-client-id" \
  -e GITLAB_API_URL="https://gitlab.example.com/api/v4" \
  -e MCP_SERVER_URL="https://your-mcp-server.example.com" \
  -p 3002:3002 \
  zereight050/gitlab-mcp
```

For local development (HTTP allowed):

```bash
MCP_DANGEROUSLY_ALLOW_INSECURE_ISSUER_URL=true \
STREAMABLE_HTTP=true \
GITLAB_MCP_OAUTH=true \
GITLAB_OAUTH_APP_ID=your-gitlab-oauth-app-client-id \
MCP_SERVER_URL=http://localhost:3002 \
GITLAB_API_URL=https://gitlab.com/api/v4 \
node build/index.js
```

**Claude.ai configuration:**

```json
{
  "mcpServers": {
    "GitLab": {
      "url": "https://your-mcp-server.example.com/mcp"
    }
  }
}
```

No `headers` field is needed — Claude.ai obtains the token via OAuth automatically.

**Environment variables:**

| Variable                                    | Required | Description                                                                                                                                                                                                         |
| ------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GITLAB_MCP_OAUTH`                          | Yes      | Set to `true` to enable                                                                                                                                                                                             |
| `GITLAB_OAUTH_APP_ID`                       | Yes      | Client ID of the pre-registered GitLab OAuth application                                                                                                                                                            |
| `MCP_SERVER_URL`                            | Yes      | Public HTTPS URL of your MCP server; also allowed for `/mcp` Host/Origin checks                                                                                                                                     |
| `GITLAB_API_URL`                            | Yes      | Your GitLab instance API URL (e.g. `https://gitlab.com/api/v4`). Do not embed credentials (`user:pass@`) in the URL; they are ignored. A comma in a password must be written as `%2C`.                              |
| `STREAMABLE_HTTP`                           | Yes      | Must be `true` (SSE is not supported)                                                                                                                                                                               |
| `GITLAB_OAUTH_SCOPES`                       | No       | Comma-separated GitLab scopes to request (e.g. `api,read_user`). Defaults to `api` (or `read_api` when the effective permission mode is `readonly`). The pre-registered application must be configured with at least these scopes. |
| `OAUTH_REGISTER_RATE_LIMIT_PER_HOUR`        | No       | Per-IP rolling limit for Dynamic Client Registration (`POST /register`). Default `20`/hour; range `1`–`1000`. Raise when clients (e.g. multiple IDE windows) hit registration throttling. Not a GitLab API limit. |
| `OAUTH_DISABLE_REFRESH_TOKEN`               | No       | Set `true` to drop `refresh_token` from `/token` responses and reject the refresh grant with `invalid_grant`, so users re-authorize in the browser when the GitLab access token expires. Default `false`. In callback proxy mode, MCP clients that follow this server's flow never receive a GitLab refresh token (in passthrough the client can get one from GitLab directly). This is a re-authorization policy for standard MCP clients, not a security boundary. Refresh tokens issued before enabling stay valid until revoked in GitLab under **User Settings → Applications → Authorized applications → Revoke**. |
| `MCP_DANGEROUSLY_ALLOW_INSECURE_ISSUER_URL` | No       | Set `true` for local HTTP dev only                                                                                                                                                                                  |

**Important Notes:**

- MCP OAuth **only works with Streamable HTTP transport** (`SSE=true` is incompatible)
- Each user session stores its own OAuth token — sessions are fully isolated
- Session timeout, rate limiting, and capacity limits apply identically to the
  `REMOTE_AUTHORIZATION` mode (`SESSION_TIMEOUT_SECONDS`, `MAX_REQUESTS_PER_MINUTE`,
  `MAX_SESSIONS`)
- **DCR rate limiting:** `POST /register` is limited to `OAUTH_REGISTER_RATE_LIMIT_PER_HOUR`
  per client IP (default 20/hour). Separate from `/mcp` limits and GitLab API quotas.
  See [environment-variables.md](https://github.com/zereight/gitlab-mcp/blob/main/docs/configuration/environment-variables.md#oauth_register_rate_limit_per_hour).
- **Header auth fallback:** when `Private-Token` or `JOB-TOKEN` request headers are
  present, OAuth validation is skipped and the raw token is used directly for that
  session. This allows PATs and CI job tokens to be used alongside the OAuth flow on
  the same server instance. `Authorization: Bearer` is always treated as an OAuth
  token — use `Private-Token` for PAT-based header auth.

## Agent Skill Files

Skill + CLI is an equal path to MCP (see [Skill + CLI](#skill--cli-no-mcp-required)). Pre-built skill files are available in [`skills/gitlab-mcp/`](https://github.com/zereight/gitlab-mcp/blob/main/skills/gitlab-mcp/) for AI agents that support skill/instruction loading (Claude Code, GitHub Copilot, Cursor, etc.).

- **[SKILL.md](https://github.com/zereight/gitlab-mcp/blob/main/skills/gitlab-mcp/SKILL.md)** — Core guide (~800 tokens) with toolset overview, key workflows, and parameter hints
- **[reference/](https://github.com/zereight/gitlab-mcp/blob/main/skills/gitlab-mcp/reference/)** — Detailed workflow docs for code review, merge requests, issues, pipelines, and vulnerability triage

Install with the `skills` CLI:

```bash
npx skills add zereight/gitlab-mcp --skill gitlab-mcp-skill
```

Register the skill directory in your AI client to get optimal tool usage guidance without relying solely on the full ListTools response.

*(README truncated for display. [Read the full README on GitHub](https://github.com/zereight/gitlab-mcp)).*
