---
slug: github-github-mcp-server
name: github-mcp-server
tagline: GitHub's official MCP Server
summary: "- Repository Management: Browse and query code, search files, analyze
  commits, and understand project structure across any repository you have
  access to. - Issue & PR Automation: Create, update, and manage issues and..."
categories:
  - coding-agents
tags:
  - github
status: active
quality_percentile: 99
selection_reason: official_vendor
first_seen: 2025-03-04T16:42:04
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: github/github-mcp-server
  official_vendor: true
  license: MIT
signals:
  stars: 33962
  last_commit: 2026-10-23T21:21:33Z
  stars_delta_7d: 217
  stars_growth_pct: 0.6
  trending_score: 218.4
  rank_current: 10
  rank_delta: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 33427
    - 33579
    - 33745
    - 33962
language: en
needs_keys: false
prerequisites:
  - Network access (HTTP MCP server)
readme_source:
  repo: github/github-mcp-server
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.870Z
  truncated: true
type: mcp_server
launch:
  transport: http
  remote_url: https://api.githubcopilot.com/mcp/
  args: []
  env_vars: []
  confidence: manifest
---

# GitHub MCP Server
The GitHub MCP Server connects AI tools directly to GitHub's platform. This gives AI agents, assistants, and chatbots the ability to read repositories and code files, manage issues and PRs, analyze code, and automate workflows. All through natural language interactions.

### Use Cases

- Repository Management: Browse and query code, search files, analyze commits, and understand project structure across any repository you have access to.
- Issue & PR Automation: Create, update, and manage issues and pull requests. Let AI help triage bugs, review code changes, and maintain project boards.
- CI/CD & Workflow Intelligence: Monitor GitHub Actions workflow runs, analyze build failures, manage releases, and get insights into your development pipeline.
- Code Analysis: Examine security findings, review Dependabot alerts, understand code patterns, and get comprehensive insights into your codebase.
- Team Collaboration: Access discussions, manage notifications, analyze team activity, and streamline processes for your team.

Built for developers who want to connect their AI tools to GitHub context and capabilities, from simple natural language queries to complex multi-step agent workflows.

### Using the Go module

The Go module path is `github.com/github/github-mcp-server/v2`. Library consumers
must use this prefix in imports, for example
`github.com/github/github-mcp-server/v2/pkg/github`, and in `go get` commands.
No `/v2` subdirectory is needed when building from a repository checkout.

The existing `v2.0.0` tag predates this module-path correction and cannot be used
as a Go module. After this change is merged, a new release such as `v2.0.1` must
be tagged from a commit containing the corrected module path. Until then,
consumers can use a pseudo-version from a commit containing this change.

---

## Remote GitHub MCP Server

[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_Server-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=github&config=%7B%22type%22%3A%20%22http%22%2C%22url%22%3A%20%22https%3A%2F%2Fapi.githubcopilot.com%2Fmcp%2F%22%7D) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install_Server-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=github&config=%7B%22type%22%3A%20%22http%22%2C%22url%22%3A%20%22https%3A%2F%2Fapi.githubcopilot.com%2Fmcp%2F%22%7D&quality=insiders) [![Install in Visual Studio](https://img.shields.io/badge/Visual_Studio-Install_Server-C16FDE?style=flat-square&logo=visualstudio&logoColor=white)](https://aka.ms/vs/mcp-install?%7B%22name%22%3A%22github%22%2C%22gallery%22%3Atrue%2C%22url%22%3A%22https%3A%2F%2Fapi.githubcopilot.com%2Fmcp%2F%22%7D)

The remote GitHub MCP Server is hosted by GitHub and provides the easiest method for getting up and running. If your MCP host does not support remote MCP servers, don't worry! You can use the [local version of the GitHub MCP Server](https://github.com/github/github-mcp-server?tab=readme-ov-file#local-github-mcp-server) instead.

### Prerequisites

1. A compatible MCP host with remote server support (VS Code 1.101+, Claude Desktop, Cursor, Windsurf, etc.)
2. Any applicable [policies enabled](https://github.com/github/github-mcp-server/blob/main/docs/policies-and-governance.md)

### Install in VS Code

For quick installation, use one of the one-click install buttons above. Once you complete that flow, toggle Agent mode (located by the Copilot Chat text input) and the server will start. Make sure you're using [VS Code 1.101](https://code.visualstudio.com/updates/v1_101) or [later](https://code.visualstudio.com/updates) for remote MCP and OAuth support.

Alternatively, to manually configure VS Code, choose the appropriate JSON block from the examples below and add it to your host configuration:

<table>
<tr><th>Using OAuth</th><th>Using a GitHub PAT</th></tr>
<tr><th align=left colspan=2>VS Code (version 1.101 or greater)</th></tr>
<tr valign=top>
<td>

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/"
    }
  }
}
```

</td>
<td>

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer ${input:github_mcp_pat}"
      }
    }
  },
  "inputs": [
    {
      "type": "promptString",
      "id": "github_mcp_pat",
      "description": "GitHub Personal Access Token",
      "password": true
    }
  ]
}
```

</td>
</tr>
</table>

### Install in other MCP hosts

- **[Copilot CLI](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-copilot-cli.md)** - Installation guide for GitHub Copilot CLI
- **[GitHub Copilot in other IDEs](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-other-copilot-ides.md)** - Installation for JetBrains, Visual Studio, Eclipse, and Xcode with GitHub Copilot
- **[Claude Applications](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-claude.md)** - Installation guide for Claude Desktop and Claude Code CLI
- **[Codex](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-codex.md)** - Installation guide for OpenAI Codex
- **[Cursor](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-cursor.md)** - Installation guide for Cursor IDE
- **[OpenCode](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-opencode.md)** - Installation guide for the OpenCode terminal agent
- **[Windsurf](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-windsurf.md)** - Installation guide for Windsurf IDE
- **[Zed](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-zed.md)** - Installation guide for Zed editor
- **[Rovo Dev CLI](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-rovo-dev-cli.md)** - Installation guide for Rovo Dev CLI

> **Note:** Each MCP host application needs to configure a GitHub App or OAuth App to support remote access via OAuth. Any host application that supports remote MCP servers should support the remote GitHub server with PAT authentication. Configuration details and support levels vary by host. Make sure to refer to the host application's documentation for more info.

### Configuration

#### Toolset configuration

See [Remote Server Documentation](https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md) for full details on remote server configuration, toolsets, headers, and advanced usage. This file provides comprehensive instructions and examples for connecting, customizing, and installing the remote GitHub MCP Server in VS Code and other MCP hosts.

When no toolsets are specified, [default toolsets](#default-toolset) are used.

#### Insiders Mode

> **Try new features early!** The remote server offers an insiders version with early access to new features and experimental tools.

<table>
<tr><th>Using URL Path</th><th>Using Header</th></tr>
<tr valign=top>
<td>

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/insiders"
    }
  }
}
```

</td>
<td>

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "X-MCP-Insiders": "true"
      }
    }
  }
}
```

</td>
</tr>
</table>

See [Remote Server Documentation](https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md#insiders-mode) for more details and examples, and [Insiders Features](https://github.com/github/github-mcp-server/blob/main/docs/insiders-features.md) for a full list of what's available.

#### GitHub Enterprise

##### GitHub Enterprise Cloud with data residency (ghe.com)

GitHub Enterprise Cloud can also make use of the remote server.

Example for `https://octocorp.ghe.com` with GitHub PAT token:

```
{
    ...
    "github-octocorp": {
      "type": "http",
      "url": "https://copilot-api.octocorp.ghe.com/mcp",
      "headers": {
        "Authorization": "Bearer ${input:github_mcp_pat}"
      }
    },
    ...
}
```

> **Note:** When using OAuth with GitHub Enterprise with VS Code and GitHub Copilot, you also need to configure your VS Code settings to point to your GitHub Enterprise instance - see [Authenticate from VS Code](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom)

##### GitHub Enterprise Server

GitHub Enterprise Server does not support remote server hosting. Please refer to [GitHub Enterprise Server and Enterprise Cloud with data residency (ghe.com)](#github-enterprise-server-and-enterprise-cloud-with-data-residency-ghecom) from the local server configuration.

---

## Local GitHub MCP Server

[![Install with Docker in VS Code](https://img.shields.io/badge/VS_Code-Install_Server-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=github&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22-i%22%2C%22--rm%22%2C%22-p%22%2C%22127.0.0.1%3A8085%3A8085%22%2C%22-e%22%2C%22GITHUB_OAUTH_CALLBACK_PORT%22%2C%22ghcr.io%2Fgithub%2Fgithub-mcp-server%22%5D%2C%22env%22%3A%7B%22GITHUB_OAUTH_CALLBACK_PORT%22%3A%228085%22%7D%7D) [![Install with Docker in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install_Server-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=github&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22-i%22%2C%22--rm%22%2C%22-p%22%2C%22127.0.0.1%3A8085%3A8085%22%2C%22-e%22%2C%22GITHUB_OAUTH_CALLBACK_PORT%22%2C%22ghcr.io%2Fgithub%2Fgithub-mcp-server%22%5D%2C%22env%22%3A%7B%22GITHUB_OAUTH_CALLBACK_PORT%22%3A%228085%22%7D%7D&quality=insiders) [![Install with Docker in Visual Studio](https://img.shields.io/badge/Visual_Studio-Install_Server-C16FDE?style=flat-square&logo=visualstudio&logoColor=white)](https://aka.ms/vs/mcp-install?%7B%22name%22%3A%22github%22%2C%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22-i%22%2C%22--rm%22%2C%22-p%22%2C%22127.0.0.1%3A8085%3A8085%22%2C%22-e%22%2C%22GITHUB_OAUTH_CALLBACK_PORT%3D8085%22%2C%22ghcr.io%2Fgithub%2Fgithub-mcp-server%22%5D%7D)

### Prerequisites

1. To run the server in a container, you will need to have [Docker](https://www.docker.com/) installed.
2. Once Docker is installed, you will also need to ensure Docker is running. The Docker image is available at `ghcr.io/github/github-mcp-server`. The image is public; if you get errors on pull, you may have an expired token and need to `docker logout ghcr.io`.
3. **Authentication.** On github.com you don't need to create anything up front — the one-click buttons above log you in with OAuth on first use (a browser-based flow; the token is kept in memory only). The Docker buttons publish a fixed callback port (`127.0.0.1:8085`) so the container's login callback is reachable. See **[Local Server OAuth Login](https://github.com/github/github-mcp-server/blob/main/docs/oauth-login.md)** for how it works, headless/device-code fallback, and bringing your own OAuth or GitHub App (required for GitHub Enterprise Server and `ghe.com`).

   Prefer a token? You can still authenticate with a [GitHub Personal Access Token](https://github.com/settings/personal-access-tokens/new) by setting `GITHUB_PERSONAL_ACCESS_TOKEN` instead (it takes precedence over OAuth). The MCP server can use many of the GitHub APIs, so enable the permissions that you feel comfortable granting your AI tools (to learn more about access tokens, please check out the [documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)).

<details><summary><b>Handling PATs Securely</b></summary>

### Environment Variables (Recommended)

To keep your GitHub PAT secure and reusable across different MCP hosts:

1. **Store your PAT in environment variables**

   ```bash
   export GITHUB_PAT=your_token_here
   ```

   Or create a `.env` file:

   ```env
   GITHUB_PAT=your_token_here
   ```

2. **Protect your `.env` file**

   ```bash
   # Add to .gitignore to prevent accidental commits
   echo ".env" >> .gitignore
   ```

3. **Reference the token in configurations**

   ```bash
   # CLI usage
   claude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=$GITHUB_PAT -- docker run -i --rm -e GITHUB_PERSONAL_ACCESS_TOKEN ghcr.io/github/github-mcp-server

   # In config files (where supported)
   "env": {
     "GITHUB_PERSONAL_ACCESS_TOKEN": "$GITHUB_PAT"
   }
   ```

> **Note**: Environment variable support varies by host app and IDE. Some applications (like Windsurf) require hardcoded tokens in config files.

### Token Security Best Practices

- **Minimum scopes**: Only grant necessary permissions
  - `repo` - Repository operations
  - `read:packages` - Docker image access
  - `read:org` - Organization team access
- **Separate tokens**: Use different PATs for different projects/environments
- **Regular rotation**: Update tokens periodically
- **Never commit**: Keep tokens out of version control
- **File permissions**: Restrict access to config files containing tokens

  ```bash
  chmod 600 ~/.your-app/config.json
  ```

</details>

### GitHub Enterprise Server and Enterprise Cloud with data residency (ghe.com)

The flag `--gh-host` and the environment variable `GITHUB_HOST` can be used to set
the hostname for GitHub Enterprise Server or GitHub Enterprise Cloud with data residency.

- For GitHub Enterprise Server, prefix the hostname with the `https://` URI scheme. HTTPS is required and enforced: non-HTTPS hosts are refused so that credentials are never sent over cleartext (the only exception is a loopback host such as `http://localhost` for local development).
- For GitHub Enterprise Cloud with data residency, use `https://YOURSUBDOMAIN.ghe.com` as the hostname.

``` json
"github": {
    "command": "docker",
    "args": [
    "run",
    "-i",
    "--rm",
    "-e",
    "GITHUB_PERSONAL_ACCESS_TOKEN",
    "-e",
    "GITHUB_HOST",
    "ghcr.io/github/github-mcp-server"
    ],
    "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
        "GITHUB_HOST": "https://<your GHES or ghe.com domain name>"
    }
}
```

## Installation

### Install in GitHub Copilot on VS Code

For quick installation, use one of the one-click install buttons above. Once you complete that flow, toggle Agent mode (located by the Copilot Chat text input) and the server will start.

More about using MCP server tools in VS Code's [agent mode documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers).

Install in GitHub Copilot on other IDEs (JetBrains, Visual Studio, Eclipse, etc.)

Add one of the following JSON blocks to your IDE's MCP settings.

**Log in with OAuth (no token to create or store).** On github.com the official image already includes the app credentials, so you provide none yourself: it runs a browser-based login on first use and keeps the resulting token **in memory only**. In Docker this needs a fixed callback port published to loopback so the container's login callback is reachable:

```json
{
  "mcp": {
    "servers": {
      "github": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-p",
          "127.0.0.1:8085:8085",
          "-e",
          "GITHUB_OAUTH_CALLBACK_PORT",
          "ghcr.io/github/github-mcp-server"
        ],
        "env": {
          "GITHUB_OAUTH_CALLBACK_PORT": "8085"
        }
      }
    }
  }
}
```

See **[Local Server OAuth Login](https://github.com/github/github-mcp-server/blob/main/docs/oauth-login.md)** for the native-binary flow (no fixed port needed), the headless/device-code fallback, GitHub Enterprise Server / `ghe.com`, and bringing your own OAuth or GitHub App.

For non-interactive stdio deployments, see **[GitHub App Authentication](https://github.com/github/github-mcp-server/blob/main/docs/github-app-auth.md)**.

**Or authenticate with a Personal Access Token.** Set `GITHUB_PERSONAL_ACCESS_TOKEN` instead (it takes precedence over OAuth):

```json
{
  "mcp": {
    "inputs": [
      {
        "type": "promptString",
        "id": "github_token",
        "description": "GitHub Personal Access Token",
        "password": true
      }
    ],
    "servers": {
      "github": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-e",
          "GITHUB_PERSONAL_ACCESS_TOKEN",
          "ghcr.io/github/github-mcp-server"
        ],
        "env": {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}"
        }
      }
    }
  }
}
```

Optionally, you can add a similar example (i.e. without the mcp key) to a file called `.vscode/mcp.json` in your workspace. This will allow you to share the configuration with other host applications that accept the same format.

<details>
<summary><b>Example JSON block without the MCP key included</b></summary>
<br>

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "github_token",
      "description": "GitHub Personal Access Token",
      "password": true
    }
  ],
  "servers": {
    "github": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}"
      }
    }
  }
}
```

</details>

### Install in Other MCP Hosts

For other MCP host applications, please refer to our installation guides:

- **[Copilot CLI](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-copilot-cli.md)** - Installation guide for GitHub Copilot CLI
- **[GitHub Copilot in other IDEs](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-other-copilot-ides.md)** - Installation for JetBrains, Visual Studio, Eclipse, and Xcode with GitHub Copilot
- **[Claude Code & Claude Desktop](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-claude.md)** - Installation guide for Claude Code and Claude Desktop
- **[Cursor](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-cursor.md)** - Installation guide for Cursor IDE
- **[Google Gemini CLI](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-gemini-cli.md)** - Installation guide for Google Gemini CLI
- **[OpenCode](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-opencode.md)** - Installation guide for the OpenCode terminal agent
- **[Windsurf](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-windsurf.md)** - Installation guide for Windsurf IDE
- **[Zed](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-zed.md)** - Installation guide for Zed editor

For a complete overview of all installation options, see our **[Installation Guides Index](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides)**.

> **Note:** Any host application that supports local MCP servers should be able to access the local GitHub MCP server. However, the specific configuration process, syntax and stability of the integration will vary by host application. While many may follow a similar format to the examples above, this is not guaranteed. Please refer to your host application's documentation for the correct MCP configuration syntax and setup process.

### Build from source

If you don't have Docker, you can use `go build` to build the binary in the
`cmd/github-mcp-server` directory, and use the `github-mcp-server stdio` command with the `GITHUB_PERSONAL_ACCESS_TOKEN` environment variable set to your token. To specify the output location of the build, use the `-o` flag. You should configure your server to use the built executable as its `command`.

STDIO API requests identify the server as `github-mcp-server/<version>` and retain the upstream MCP client's name/version in parentheses when available. Control characters, quotes, backslashes and parentheses in client metadata are escaped so the HTTP header remains valid; ordinary names, versions, spaces and printable Unicode are preserved. Release builds keep their release version. Source and default Docker builds with revision metadata use `vcs-<full-commit-sha>`. The Docker publishing workflow preserves tag versions, including prereleases, and lets branch, pull-request and nightly builds use the linked source revision. The `-dirty` marker applies only when both the revision and modified state come from embedded VCS metadata, never to a valid, explicitly supplied `main.commit`. This is a VCS build identifier, not a release number.

Build the complete package with `go build -o github-mcp-server ./cmd/github-mcp-server` from a Git checkout to embed its VCS revision. For builds without VCS metadata, supply the actual release with `-ldflags '-X main.version=<release>'` or the full source revision with `-ldflags '-X main.commit=<sha>'`. Valid metadata is selected in this order: explicit release, explicit source revision, embedded VCS revision, then installed main-module version. Valid explicit revisions remain authoritative even if build-context filtering changes embedded VCS metadata. Missing or malformed candidates fall through to the next usable source. If none is available, STDIO still starts with the development label `dev` and emits a warning on stderr, leaving stdout available for the MCP protocol. Supply real release or revision metadata when version-specific attribution is needed.

For example:

```JSON
{
  "mcp": {
    "servers": {
      "github": {
        "command": "/path/to/github-mcp-server",
        "args": ["stdio"],
        "env": {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
        }
      }
    }
  }
}
```

## Tool Configuration

The GitHub MCP Server supports enabling or disabling specific groups of functionalities via the `--toolsets` flag. This allows you to control which GitHub API capabilities are available to your AI tools. Enabling only the toolsets that you need can help the LLM with tool choice and reduce the context size.

_Toolsets are not limited to Tools. Relevant MCP Resources and Prompts are also included where applicable._

When no toolsets are specified, [default toolsets](#default-toolset) are used.

> **Looking for examples?** See the [Server Configuration Guide](https://github.com/github/github-mcp-server/blob/main/docs/server-configuration.md) for common recipes like minimal setups, read-only mode, and combining tools with toolsets.

#### Specifying Toolsets

To specify toolsets you want available to the LLM, you can pass an allow-list in two ways:

1. **Using Command Line Argument**:

   ```bash
   github-mcp-server --toolsets repos,issues,pull_requests,actions,code_security
   ```

2. **Using Environment Variable**:

   ```bash
   GITHUB_TOOLSETS="repos,issues,pull_requests,actions,code_security" ./github-mcp-server
   ```

The environment variable `GITHUB_TOOLSETS` takes precedence over the command line argument if both are provided.

#### Specifying Individual Tools

You can also configure specific tools using the `--tools` flag. Tools can be used independently or combined with toolsets for fine-grained control.

1. **Using Command Line Argument**:

   ```bash
   github-mcp-server --tools get_file_contents,issue_read,create_pull_request
   ```

2. **Using Environment Variable**:

   ```bash
   GITHUB_TOOLS="get_file_contents,issue_read,create_pull_request" ./github-mcp-server
   ```

3. **Combining with Toolsets** (additive):

   ```bash
   github-mcp-server --toolsets repos,issues --tools get_gist
   ```

   This registers all tools from `repos` and `issues` toolsets, plus `get_gist`.

**Important Notes:**

- Tools and toolsets can be used together
- Read-only mode takes priority: write tools are skipped if `--read-only` is set, even if explicitly requested via `--tools`
- Tool names must match exactly (e.g., `get_file_contents`, not `getFileContents`). Invalid tool names will cause the server to fail at startup with an error message
- When tools are renamed, old names are preserved as aliases for backward compatibility. See [Tool Renaming](https://github.com/github/github-mcp-server/blob/main/docs/tool-renaming.md) for details.

### Using Toolsets With Docker

When using Docker, you can pass the toolsets as environment variables:

```bash
docker run -i --rm \
  -e GITHUB_PERSONAL_ACCESS_TOKEN=<your-token> \
  -e GITHUB_TOOLSETS="repos,issues,pull_requests,actions,code_security" \
  ghcr.io/github/github-mcp-server
```

### Using Tools With Docker

When using Docker, you can pass specific tools as environment variables. You can also combine tools with toolsets:

```bash
# Tools only
docker run -i --rm \
  -e GITHUB_PERSONAL_ACCESS_TOKEN=<your-token> \
  -e GITHUB_TOOLS="get_file_contents,issue_read,create_pull_request" \
  ghcr.io/github/github-mcp-server

# Tools combined with toolsets (additive)
docker run -i --rm \
  -e GITHUB_PERSONAL_ACCESS_TOKEN=<your-token> \
  -e GITHUB_TOOLSETS="repos,issues" \
  -e GITHUB_TOOLS="get_gist" \
  ghcr.io/github/github-mcp-server
```

### Special toolsets

#### "all" toolset

The special toolset `all` can be provided to enable all available toolsets regardless of any other configuration:

```bash
./github-mcp-server --toolsets all
```

Or using the environment variable:

```bash
GITHUB_TOOLSETS="all" ./github-mcp-server
```

#### "default" toolset

The default toolset `default` is the configuration that gets passed to the server if no toolsets are specified.

The default configuration is:

- context
- repos
- issues
- pull_requests
- users

To keep the default configuration and add additional toolsets:

```bash
GITHUB_TOOLSETS="default,stargazers" ./github-mcp-server
```

### Insiders Mode

The local GitHub MCP Server offers an insiders version with early access to new features and experimental tools.

1. **Using Command Line Argument**:

   ```bash
   ./github-mcp-server --insiders
   ```

2. **Using Environment Variable**:

   ```bash
   GITHUB_INSIDERS=true ./github-mcp-server
   ```

When using Docker:

```bash
docker run -i --rm \
  -e GITHUB_PERSONAL_ACCESS_TOKEN=<your-token> \
  -e GITHUB_INSIDERS=true \
  ghcr.io/github/github-mcp-server
```

### Available Toolsets

The following sets of tools are available:

<!-- START AUTOMATED TOOLSETS -->
|     | Toolset                 | Description                                                   |
| --- | ----------------------- | ------------------------------------------------------------- |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/person-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/person-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/person-light.png" width="20" height="20" alt="person"></picture> | `context`               | **Strongly recommended**: Tools that provide context about the current user and GitHub context you are operating in |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/workflow-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/workflow-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/workflow-light.png" width="20" height="20" alt="workflow"></picture> | `actions` | GitHub Actions workflows and CI/CD operations |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/code-square-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/code-square-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/code-square-light.png" width="20" height="20" alt="code-square"></picture> | `code_quality` | GitHub Code Quality related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/codescan-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/codescan-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/codescan-light.png" width="20" height="20" alt="codescan"></picture> | `code_security` | Code security related tools, such as GitHub Code Scanning |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/copilot-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/copilot-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/copilot-light.png" width="20" height="20" alt="copilot"></picture> | `copilot` | Copilot related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/copilot-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/copilot-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/copilot-light.png" width="20" height="20" alt="copilot"></picture> | `copilot_issue_intents` | Opt-in Copilot issue assignment tools that carry intent metadata (rationale, confidence, suggestion) |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/dependabot-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/dependabot-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/dependabot-light.png" width="20" height="20" alt="dependabot"></picture> | `dependabot` | Dependabot tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/comment-discussion-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/comment-discussion-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/comment-discussion-light.png" width="20" height="20" alt="comment-discussion"></picture> | `discussions` | GitHub Discussions related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/logo-gist-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/logo-gist-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/logo-gist-light.png" width="20" height="20" alt="logo-gist"></picture> | `gists` | GitHub Gist related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/git-branch-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/git-branch-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/git-branch-light.png" width="20" height="20" alt="git-branch"></picture> | `git` | GitHub Git API related tools for low-level Git operations |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/law-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/law-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/law-light.png" width="20" height="20" alt="law"></picture> | `governance` | Repository governance tools for managing rulesets and custom properties at the repository, organization, and enterprise levels |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/issue-opened-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/issue-opened-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/issue-opened-light.png" width="20" height="20" alt="issue-opened"></picture> | `issues` | GitHub Issues related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/tag-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/tag-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/tag-light.png" width="20" height="20" alt="tag"></picture> | `labels` | GitHub Labels related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/bell-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/bell-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/bell-light.png" width="20" height="20" alt="bell"></picture> | `notifications` | GitHub Notifications related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/organization-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/organization-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/organization-light.png" width="20" height="20" alt="organization"></picture> | `orgs` | GitHub Organization related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/project-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/project-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/project-light.png" width="20" height="20" alt="project"></picture> | `projects` | GitHub Projects related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/git-pull-request-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/git-pull-request-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/git-pull-request-light.png" width="20" height="20" alt="git-pull-request"></picture> | `pull_requests` | GitHub Pull Request related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/repo-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/repo-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/repo-light.png" width="20" height="20" alt="repo"></picture> | `repos` | GitHub Repository related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/shield-lock-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/shield-lock-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/shield-lock-light.png" width="20" height="20" alt="shield-lock"></picture> | `secret_protection` | Secret protection related tools, such as GitHub Secret Scanning |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/shield-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/shield-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/shield-light.png" width="20" height="20" alt="shield"></picture> | `security_advisories` | Security advisories related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/star-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/star-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/star-light.png" width="20" height="20" alt="star"></picture> | `stargazers` | GitHub Stargazers related tools |
| <picture><source media="(prefers-color-scheme: dark)" srcset="pkg/octicons/icons/people-dark.png"><source media="(prefers-color-scheme: light)" srcset="pkg/octicons/icons/people-light.png"><img src="https://raw.githubusercontent.com/github/github-mcp-server/main/pkg/octicons/icons/people-light.png" width="20" height="20" alt="people"></picture> | `users` | GitHub User related tools |
<!-- END AUTOMATED TOOLSETS -->

### Additional Toolsets in Remote GitHub MCP Server

| Toolset                 | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| `copilot` | Copilot related tools (e.g. Copilot Coding Agent) |
| `copilot_spaces` | Copilot Spaces related tools |
| `github_support_docs_search` | Search docs to answer GitHub product and support questions |

*(README truncated for display. [Read the full README on GitHub](https://github.com/github/github-mcp-server)).*
