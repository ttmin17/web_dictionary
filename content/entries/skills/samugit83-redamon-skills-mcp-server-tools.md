---
slug: samugit83-redamon-skills-mcp-server-tools
name: mcp-server-tools
tagline: Adding, removing or changing a tool on RedAmon's INBOUND MCP server,
  where external agents connect in with a personal access token. The wiki API
  refer
summary: "- Adding, removing or renaming an inbound MCP tool, or changing its
  description, arguments, annotations or scopes. - Changing a token scope, its
  label or blurb, the expiry presets or the token prefix."
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - ai-penetration-testing
  - ai-pentesting
  - autonomous-agents
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: samugit83/redamon
  subpath: skills/mcp-server-tools
  official_vendor: false
  license: MIT
signals:
  stars: 3340
  last_commit: 2026-11-08T10:18:09Z
  stars_delta_7d: 42
  stars_growth_pct: 1.3
  trending_score: 42.53
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3152
    - 3214
    - 3298
    - 3340
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: samugit83/redamon
  path: skills/mcp-server-tools/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:28:34.064Z
  truncated: false
type: agent_skill
skill:
  skill_name: mcp-server-tools
  description: >
    Adding, removing or changing a tool on RedAmon's INBOUND MCP server, where
    external agents connect in with a personal access token. The wiki API
    reference is generated from the server's live tools/list and goes stale
    silently, and each tool's annotations and declared scopes are published to
    connected clients. Trigger: editing a registerTool call in
    webapp/src/lib/mcp/server.ts; editing tools.ts, writeTools.ts, scopeCopy.ts
    or apiReference.ts in webapp/src/lib/mcp/; changing the scope list, default
    scopes, expiry presets or token prefix in webapp/src/lib/mcpAuth.ts.
  folder_path: skills/mcp-server-tools
  extra_files: []
  pack_total_skills: 17
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: samugit83-redamon
---

## When to Use

- Adding, removing or renaming an inbound MCP tool, or changing its description,
  arguments, annotations or scopes.
- Changing a token scope, its label or blurb, the expiry presets or the token prefix.

For a tool RedAmon's OWN agent calls (outbound, `mcp/servers/`), use
`agentic-tool-integration`. For making a recon setting writable over MCP, use
`project-settings-cascade`. The tools that exist are listed by the server itself and by
the generated reference page, never by this skill.

---

## Critical Rules

- **ALWAYS run `npm run docs:mcp` in `webapp/` after any change this skill's trigger
  names, and commit `MCP-API-Reference.md` inside the `redamon.wiki` repo.** A main-repo
  commit moves only the submodule pointer. The page is rendered by
  [apiReference.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/apiReference.ts); a hand edit is overwritten
  by the next run.
- **NEVER set `destructiveHint: false` on a tool that overwrites or aborts existing
  state.** In the MCP spec `false` means only additive updates, and clients use it to
  decide when to ask the user first. No test checks this.
- **ALWAYS add an `EXAMPLE_EXTRA_ARGS` entry in
  [apiReference.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/apiReference.ts) when a tool's body requires
  an argument its JSON Schema marks optional.** The generated example sends only
  schema-required arguments, and the test calls every example.
- **ALWAYS give a new tool an `ONBOARDING_PLAYBOOK` entry and a capability area in
  [playbook.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/playbook.ts).** The Agent Onboarding pack is
  generated from the live `tools/list`, and a coverage test in
  [onboarding.test.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/onboarding.test.ts) fails the moment a
  tool ships without `whenToUse` + gotchas, or sits in zero or two capability areas. Also
  decide whether any profile in [profiles.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/profiles.ts) should
  `leansOn` it; that half is editorial and is not enforced.
- **A tool that reads NO backend must be added to `BACKEND_FREE_TOOLS` in
  [apiReference.test.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/apiReference.test.ts).** That file proves a
  tool's declared scopes are enough by calling it and expecting the generic database failure,
  because every Prisma model is mocked away. A tool derived purely from constants
  (`describe_recon_settings`, `list_recon_presets`) SUCCEEDS instead, and would otherwise read
  as a failure. Do not relax the assertion; name the tool.
- **When a capability flips from "cannot" to "can", sweep the old claims.** Add the old
  claim's phrasing to `STALE_CLAIMS` in
  [toolNameDrift.test.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/toolNameDrift.test.ts), and make sure
  every file carrying agent-facing strings is in its `AGENT_FACING` list: the "nothing here
  can mute" lines outlived the feature in `server.ts` and `profiles.ts`, which were outside it.
- **Keep agent op names out of agent-facing files.** `TOOL_SHAPED` only knows the verbs it
  lists, so a new tool's verb goes there; an op literal such as `list_muted` or `mute_many`
  in an agent-facing file then reads as an unknown tool. Wrap ops in
  [triageGraph.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/triageGraph.ts) helpers instead.
- **Watch the bucket headroom.** [apiReference.test.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/apiReference.test.ts)
  calls every tool with ONE token inside one test. It raises the `write` and `loop` limits
  (`MCP_RATE_WRITE_PER_MIN`, `MCP_RATE_LOOP_PER_MIN`); a new tool on a tighter bucket
  (`exec`, `query`, `start`, `compare`) that overflows must raise that test's limit, not drop a call.
- **A tool behind a deployment switch is withdrawn at registration, and every test that lists
  tools stubs the switch on.** The files that stub `MCP_KALI_EXEC_ENABLED` also stub
  `AGENT_IN_THE_LOOP_ENABLED`; a new switch joins both lists, or its tools vanish from
  `tools/list`, the counts and the generated reference.
- **A required ARRAY argument needs an `EXAMPLE_EXTRA_ARGS` entry.** `placeholderFor` has no
  array branch, so the generated example would name no item (`mute_findings`' `findingIds`).
- **A new scope gates writes; reads go under an existing read scope.** Every `ScopeAccess` in
  [scopeCopy.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/scopeCopy.ts) is `read` or `write` except `kali:exec`,
  the one `read-write` scope. A tool that only reads what a write needs (`get_finding_evidence`
  for `submit_finding_review`) belongs under the read scope, so a read-only token can see
  what an agent would act on.
- **Order the body's checks: `requireScope` first, then no `McpToolError` before the first
  backend read.** The apiReference test proves declared scopes by calling each example and
  expecting the mocked database failure; a refusal on the example's placeholder arguments
  ahead of that read looks like a scope gap. A tool that STARTS something checks access (and
  its own caps) before it spends a rate token, so a refused start costs the caller nothing.
- **Free text a caller writes goes in `UNAUDITED_ARGS`** in
  [server.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/server.ts). `auditDetail` copies every other string
  argument into the audit row, which also prints as a console line; a quote is target text,
  and a reason is recorded, better, by the tool that owns it.

---

## Pattern: registering a tool

Copy the shape of an existing `registerTool` call in
[server.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/server.ts): `annotations`,
`_meta: scopesMeta({ required, conditional })` naming exactly the scopes the tool body
enforces with `requireScope`, and `inputSchema`. A scope that applies only to a
particular argument goes under `conditional`, and the arguments that trigger it need a
`CONDITIONAL_TRIGGERS` entry in
[apiReference.test.ts](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../webapp/src/lib/mcp/apiReference.test.ts).

---

## Commands

```bash
cd webapp
npm run docs:mcp                 # rewrites ../redamon.wiki/MCP-API-Reference.md
npx vitest run src/lib/mcp/      # scope, example-call, onboarding-coverage and stale-page checks

cd ../redamon.wiki
git add MCP-API-Reference.md
git commit -m "docs: regenerate MCP API reference"
```

---

## Resources

- [MCP-Server.md](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../redamon.wiki/MCP-Server.md), section "Regenerating the API reference" - what the page is built from, and the stale-page test
- [README.MCP.SERVER.md](https://github.com/samugit83/redamon/blob/master/skills/mcp-server-tools/../../docs/readmes/README.MCP.SERVER.md) - security model, settings allowlist, deploy wiring; §3.1-3.2 cover Agent Profiles (never an authorization input) and how the onboarding pack is generated
- Related skills: `agentic-tool-integration`, `project-settings-cascade`, `redamon-testing`
