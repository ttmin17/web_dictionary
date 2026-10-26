---
slug: affaan-m-ecc-skills-deepseek-harness-setup
name: deepseek-harness-setup
tagline: "Install and operate Everything Claude Code (ECC) on the DeepSeek
  Harness (DSH): native skill roots (~/.dsh/skills, .agents/skills), the
  @deepseek-ai/d"
summary: "- Installing ECC skills or hooks on a DeepSeek Harness install. -
  Deciding which ECC surfaces work on DSH and which do not. - Debugging a DSH
  session that does not show ECC skills or does not fire ECC hooks."
categories:
  - agent-frameworks
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: skills/deepseek-harness-setup
  official_vendor: false
  license: MIT
signals:
  stars: 289072
  last_commit: 2026-10-26T04:56:56Z
  stars_delta_7d: 5578
  stars_growth_pct: 2
  trending_score: 5687.75
  velocity_source: snapshot_delta
  sparkline_4w:
    - 274698
    - 278380
    - 283494
    - 289072
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: skills/deepseek-harness-setup/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.035Z
  truncated: false
type: agent_skill
skill:
  skill_name: deepseek-harness-setup
  description: "Install and operate Everything Claude Code (ECC) on the DeepSeek
    Harness (DSH): native skill roots (~/.dsh/skills, .agents/skills), the
    @deepseek-ai/dsh-hooks-claude-code bridge for command hooks, bare-insert
    patch mounting, generator usage, event-support limits, and update workflow.
    Use when setting up ECC on DeepSeek Harness, wiring ECC hooks into a DSH
    profile, or debugging why ECC skills or hooks do not appear in a DSH
    session."
  folder_path: skills/deepseek-harness-setup
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# DeepSeek Harness Setup
Run ECC on the DeepSeek Harness. Full guide: `docs/DEEPSEEK-HARNESS-GUIDE.md`.

## When to Use

- Installing ECC skills or hooks on a DeepSeek Harness install.
- Deciding which ECC surfaces work on DSH and which do not.
- Debugging a DSH session that does not show ECC skills or does not fire ECC hooks.

## How It Works

1. **Skills need no conversion.** DSH reads `SKILL.md` frontmatter
   (name/description) from native skill roots. Link the ECC catalog once:

   ```bash
   ln -s /path/to/ECC/skills/<skill-name> ~/.dsh/skills/<skill-name>
   ```

   Root priority (project `.dsh` and `.agents` roots beat `~/.dsh`): skip
   linking skills whose names already exist in a higher-priority root.
   Substitute real skill names for the placeholders; the angle brackets are
   not shell syntax.

2. **Hooks go through the first-party bridge.** Generate a DSH-format config
   from the canonical ECC hooks file:

   ```bash
   node scripts/dsh/generate-hooks-config.js --ecc-root /path/to/ECC --out ~/.dsh/ecc/hooks-dsh.json
   ```

   The generator lower-cases tool-name matchers, prefixes
   `CLAUDE_PLUGIN_ROOT`/`ECC_PLUGIN_ROOT` inline (the bridge does not export
   the plugin root), preserves timeouts, and skips events DSH cannot bridge:
   `PreCompact`, `PostToolUseFailure`, `SessionEnd`.

3. **Mount with a bare insert** in `~/.dsh/profiles/<profile>/cordis.patch.yml`:

   ```yaml
   - insert:
       - id: ecc-hooks-claude-code
         name: "@deepseek-ai/dsh-hooks-claude-code"
         config:
           configPath: /absolute/path/to/hooks-dsh.json
   ```

   Loader rules that cost debugging time when learned the hard way:
   a plain `- id:` top-level entry is silently dropped; `insert` under an
   existing non-group id is rejected as "not a group"; first-party plugin
   packages need no profile `package.json` entry.

4. **Validate by composing, then verify live.**

   ```bash
   cd ~/.dsh && dsh --profile web --dump-config > /tmp/dump.yml
   grep ecc-hooks /tmp/dump.yml
   ```

   Compose exit status stays 0 even when the loader drops or rejects an
   entry — those problems are only reported on stderr. Confirm the entry id
   appears in the dump and stderr is empty. A live GateGuard denial on the
   session's first edit/write/bash is the visible signal the bridge is
   active.

## Updating

`git pull` reflects into linked skills immediately; regenerate the hooks
config with the same generator command. If the ECC checkout moves, regenerate
(the path is embedded in every hook command) and relink skills.

## Limits

| Surface | Status on DSH |
|---------|---------------|
| Skills | Native discovery; workflows may require host adaptation |
| Hooks | 23 command hooks on 5 of 7 bridge events |
| Slash commands | Not available (Claude Code mechanism); workflows covered by skills |
| Agents | Native dispatch unverified; use canonical prompt guidance only after review |

The validated setup here targets the CLI/web profile. Desktop profiles have a separate
installation-owned runtime and skill discovery must be verified there independently.
Generate hooks only from a reviewed ECC checkout; the linked checkout supplies their runtime.
