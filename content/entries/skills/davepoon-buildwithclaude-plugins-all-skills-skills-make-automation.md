---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-make-automation
name: make-automation
tagline: "Automate Make (Integromat) tasks via Rube MCP (Composio): operations,
  enums, language and timezone lookups. Always search tools first for current
  sche"
summary: "Toolkit docs: composio.dev/toolkits/make"
categories:
  - productivity-ops
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
  subpath: plugins/all-skills/skills/make-automation
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
  path: plugins/all-skills/skills/make-automation/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.589Z
  truncated: false
type: agent_skill
skill:
  skill_name: make-automation
  description: "Automate Make (Integromat) tasks via Rube MCP (Composio):
    operations, enums, language and timezone lookups. Always search tools first
    for current schemas."
  folder_path: plugins/all-skills/skills/make-automation
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Make Automation via Rube MCP
Automate Make (formerly Integromat) operations through Composio's Make toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/make](https://composio.dev/toolkits/make)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Make connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `make`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `make`
3. If connection is not ACTIVE, follow the returned auth link to complete Make authentication
4. Confirm connection status shows ACTIVE before running any workflows

## Core Workflows

### 1. Get Operations Data

**When to use**: User wants to retrieve operation logs or usage data from Make scenarios

**Tool sequence**:
1. `MAKE_GET_OPERATIONS` - Retrieve operation records [Required]

**Key parameters**:
- Check current schema via RUBE_SEARCH_TOOLS for available filters
- May include date range, scenario ID, or status filters

**Pitfalls**:
- Operations data may be paginated; check for pagination tokens
- Date filters must match expected format from schema
- Large result sets should be filtered by date range or scenario

### 2. List Available Languages

**When to use**: User wants to see supported languages for Make scenarios or interfaces

**Tool sequence**:
1. `MAKE_LIST_ENUMS_LANGUAGES` - Get all supported language codes [Required]

**Key parameters**:
- No required parameters; returns complete language list

**Pitfalls**:
- Language codes follow standard locale format (e.g., 'en', 'fr', 'de')
- List is static and rarely changes; cache results when possible

### 3. List Available Timezones

**When to use**: User wants to see supported timezones for scheduling Make scenarios

**Tool sequence**:
1. `MAKE_LIST_ENUMS_TIMEZONES` - Get all supported timezone identifiers [Required]

**Key parameters**:
- No required parameters; returns complete timezone list

**Pitfalls**:
- Timezone identifiers use IANA format (e.g., 'America/New_York', 'Europe/London')
- List is static and rarely changes; cache results when possible
- Use these exact timezone strings when configuring scenario schedules

### 4. Scenario Configuration Lookup

**When to use**: User needs to configure scenarios with correct language and timezone values

**Tool sequence**:
1. `MAKE_LIST_ENUMS_LANGUAGES` - Get valid language codes [Required]
2. `MAKE_LIST_ENUMS_TIMEZONES` - Get valid timezone identifiers [Required]

**Key parameters**:
- No parameters needed for either call

**Pitfalls**:
- Always verify language and timezone values against these enums before using in configuration
- Using invalid values in scenario configuration will cause errors

## Common Patterns

### Enum Validation

Before configuring any Make scenario properties that accept language or timezone:
```
1. Call MAKE_LIST_ENUMS_LANGUAGES or MAKE_LIST_ENUMS_TIMEZONES
2. Verify the desired value exists in the returned list
3. Use the exact string value from the enum list
```

### Operations Monitoring

```
1. Call MAKE_GET_OPERATIONS with date range filters
2. Analyze operation counts, statuses, and error rates
3. Identify failed operations for troubleshooting
```

### Caching Strategy for Enums

Since language and timezone lists are static:
```
1. Call MAKE_LIST_ENUMS_LANGUAGES once at workflow start
2. Store results in memory or local cache
3. Validate user inputs against cached values
4. Refresh cache only when starting a new session
```

### Operations Analysis Workflow

For scenario health monitoring:
```
1. Call MAKE_GET_OPERATIONS with recent date range
2. Group operations by scenario ID
3. Calculate success/failure ratios per scenario
4. Identify scenarios with high error rates
5. Report findings to user or notification channel
```

### Integration with Other Toolkits

Make workflows often connect to other apps. Compose multi-tool workflows:
```
1. Call RUBE_SEARCH_TOOLS to find tools for the target app
2. Connect required toolkits via RUBE_MANAGE_CONNECTIONS
3. Use Make operations data to understand workflow execution patterns
4. Execute equivalent workflows directly via individual app toolkits
```

## Known Pitfalls

**Limited Toolkit**:
- The Make toolkit in Composio currently has limited tools (operations, languages, timezones)
- For full scenario management (creating, editing, running scenarios), consider using Make's native API
- Always call RUBE_SEARCH_TOOLS to check for newly available tools
- The toolkit may be expanded over time; re-check periodically

**Operations Data**:
- Operation records may have significant volume for active accounts
- Always filter by date range to avoid fetching excessive data
- Operation counts relate to Make's pricing tiers and quota usage
- Failed operations should be investigated; they may indicate scenario configuration issues

**Response Parsing**:
- Response data may be nested under `data` key
- Enum lists return arrays of objects with code and label fields
- Operations data includes nested metadata about scenario execution
- Parse defensively with fallbacks for optional fields

**Rate Limits**:
- Make API has rate limits per API token
- Avoid rapid repeated calls to the same endpoint
- Cache enum results (languages, timezones) as they rarely change
- Operations queries should use targeted date ranges

**Authentication**:
- Make API uses token-based authentication
- Tokens may have different permission scopes
- Some operations data may be restricted based on token scope
- Check that the authenticated user has access to the target organization

## Quick Reference

| Task | Tool Slug | Key Params |
|------|-----------|------------|
| Get operations | MAKE_GET_OPERATIONS | (check schema for filters) |
| List languages | MAKE_LIST_ENUMS_LANGUAGES | (none) |
| List timezones | MAKE_LIST_ENUMS_TIMEZONES | (none) |

## Additional Notes

### Alternative Approaches

Since the Make toolkit has limited tools, consider these alternatives for common Make use cases:

| Make Use Case | Alternative Approach |
|--------------|---------------------|
| Trigger a scenario | Use Make's native webhook or API endpoint directly |
| Create a scenario | Use Make's scenario management API directly |
| Schedule execution | Use RUBE_MANAGE_RECIPE_SCHEDULE with composed workflows |
| Multi-app workflow | Compose individual toolkit tools via RUBE_MULTI_EXECUTE_TOOL |
| Data transformation | Use RUBE_REMOTE_WORKBENCH for complex processing |

### Composing Equivalent Workflows

Instead of relying solely on Make's toolkit, build equivalent automation directly:
1. Identify the apps involved in your Make scenario
2. Search for each app's tools via RUBE_SEARCH_TOOLS
3. Connect all required toolkits
4. Build the workflow step-by-step using individual app tools
5. Save as a recipe via RUBE_CREATE_UPDATE_RECIPE for reuse

---
*Powered by [Composio](https://composio.dev)*
