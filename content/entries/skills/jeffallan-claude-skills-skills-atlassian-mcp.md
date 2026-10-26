---
slug: jeffallan-claude-skills-skills-atlassian-mcp
name: atlassian-mcp
tagline: Agent skill from Jeffallan/claude-skills
summary: Agent skill from Jeffallan/claude-skills
categories:
  - other
tags:
  - ai-agents
  - claude
  - claude-code
  - claude-marketplace
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: Jeffallan/claude-skills
  subpath: skills/atlassian-mcp
  official_vendor: false
  license: MIT
signals:
  stars: 12062
  last_commit: 2026-10-26T03:10:49Z
  stars_delta_7d: 125
  stars_growth_pct: 1
  trending_score: 126.31
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11759
    - 11852
    - 11937
    - 12062
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Jeffallan/claude-skills
  path: skills/atlassian-mcp/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:54.114Z
  truncated: false
type: agent_skill
skill:
  skill_name: atlassian-mcp
  description: Agent skill from Jeffallan/claude-skills
  folder_path: skills/atlassian-mcp
  extra_files:
    - references/authentication-patterns.md
    - references/common-workflows.md
    - references/confluence-operations.md
    - references/jira-queries.md
    - references/mcp-server-setup.md
  pack_total_skills: 67
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jeffallan-claude-skills
---

# Atlassian MCP Expert
## When to Use This Skill

- Querying Jira issues with JQL filters
- Searching or creating Confluence pages
- Automating sprint workflows and backlog management
- Setting up MCP server authentication (OAuth/API tokens)
- Syncing meeting notes to Jira tickets
- Generating documentation from issue data
- Debugging Atlassian API integration issues
- Choosing between official vs open-source MCP servers

## Core Workflow

1. **Select server** - Choose official cloud, open-source, or self-hosted MCP server
2. **Authenticate** - Configure OAuth 2.1, API tokens, or PAT credentials
3. **Design queries** - Write JQL for Jira, CQL for Confluence; validate with `maxResults=1` before full execution
4. **Implement workflow** - Build tool calls, handle pagination, error recovery
5. **Verify permissions** - Confirm required scopes with a read-only probe before any write or bulk operation
6. **Deploy** - Configure IDE integration, test permissions, monitor rate limits

## Reference Guide

Load detailed guidance based on context:

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Server Setup | `references/mcp-server-setup.md` | Installation, choosing servers, configuration |
| Jira Operations | `references/jira-queries.md` | JQL syntax, issue CRUD, sprints, boards, issue linking |
| Confluence Ops | `references/confluence-operations.md` | CQL search, page creation, spaces, comments |
| Authentication | `references/authentication-patterns.md` | OAuth 2.0, API tokens, permission scopes |
| Common Workflows | `references/common-workflows.md` | Issue triage, doc sync, sprint automation |

## Quick-Start Examples

### JQL Query Samples
```
# Open issues assigned to current user in a sprint
project = PROJ AND status = "In Progress" AND assignee = currentUser() ORDER BY priority DESC

# Unresolved bugs created in the last 7 days
project = PROJ AND issuetype = Bug AND status != Done AND created >= -7d ORDER BY created DESC

# Validate before bulk: test with maxResults=1 first
project = PROJ AND sprint in openSprints() AND status = Open ORDER BY created DESC
```

### CQL Query Samples
```
# Find pages updated in a specific space recently
space = "ENG" AND type = page AND lastModified >= "2024-01-01" ORDER BY lastModified DESC

# Search page text for a keyword
space = "ENG" AND type = page AND text ~ "deployment runbook"
```

### Minimal MCP Server Configuration
```json
{
  "mcpServers": {
    "atlassian": {
      "command": "npx",
      "args": ["-y", "@sooperset/mcp-atlassian"],
      "env": {
        "JIRA_URL": "https://your-domain.atlassian.net",
        "JIRA_EMAIL": "user@example.com",
        "JIRA_API_TOKEN": "${JIRA_API_TOKEN}",
        "CONFLUENCE_URL": "https://your-domain.atlassian.net/wiki",
        "CONFLUENCE_EMAIL": "user@example.com",
        "CONFLUENCE_API_TOKEN": "${CONFLUENCE_API_TOKEN}"
      }
    }
  }
}
```
> **Note:** Always load `JIRA_API_TOKEN` and `CONFLUENCE_API_TOKEN` from environment variables or a secrets manager — never hardcode credentials.

## Constraints

### MUST DO
- Respect user permissions and workspace access controls
- Validate JQL/CQL queries before execution (use `maxResults=1` probe first)
- Handle rate limits with exponential backoff
- Use pagination for large result sets (50-100 items per page)
- Implement error recovery for network failures
- Log API calls for debugging and audit trails
- Test with read-only operations first
- Document required permission scopes
- Confirm before any write or bulk operation against production data

### MUST NOT DO
- Hardcode API tokens or OAuth secrets in code
- Ignore rate limit headers from Atlassian APIs
- Create issues without validating required fields
- Skip input sanitization on user-provided query strings
- Deploy without testing permission boundaries
- Update production data without confirmation prompts
- Mix different authentication methods in same session
- Expose sensitive issue data in logs or error messages

## Output Templates

When implementing Atlassian MCP features, provide:
1. MCP server configuration (JSON/environment vars)
2. Query examples (JQL/CQL with explanations)
3. Tool call implementation with error handling
4. Authentication setup instructions
5. Brief explanation of permission requirements

Maintained by [@jeffallan](https://github.com/jeffallan), Principal Consultant at [Synergetic Solutions](https://synergetic.solutions)

[Documentation](https://jeffallan.github.io/claude-skills/skills/platform/atlassian-mcp/)
