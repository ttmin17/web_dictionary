---
slug: affaan-m-ecc-skills-token-card
name: token-card
tagline: Render a token-usage stat card from local Claude Code, Codex, Gemini
  CLI, and OpenCode session logs and commit it into the repository as a file.
  Use w
summary: The card is a committed artifact rather than a hosted image, so it
  renders from the repository itself and does not depend on a third-party
  endpoint staying up.
categories:
  - security-auth
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
  subpath: skills/token-card
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
  path: skills/token-card/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.040Z
  truncated: false
type: agent_skill
skill:
  skill_name: token-card
  description: Render a token-usage stat card from local Claude Code, Codex,
    Gemini CLI, and OpenCode session logs and commit it into the repository as a
    file. Use when someone wants a current usage figure in a README, or asks for
    a shareable card of their coding-agent activity.
  folder_path: skills/token-card
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Token Card
Produce an SVG card summarising this machine's AI coding agent usage — total tokens,
equivalent API cost, current streak, and the split across agents — and write it into the
working tree as a file the README can reference.

The card is a committed artifact rather than a hosted image, so it renders from the
repository itself and does not depend on a third-party endpoint staying up.

## When to Activate

- Someone wants a usage figure visible in a README or docs page.
- Someone asks for a shareable summary of their agent activity across tools.

Use `/cost-report` instead when the question is "what did I spend this week". The two read
different sources and produce different things:

| | `/cost-report` | Token Card |
|---|---|---|
| Source | `~/.claude/metrics/costs.jsonl`, written by ECC's `stop:cost-tracker` hook | The agents' own session logs |
| Agents | Claude Code | Claude Code, Codex, Gemini CLI, OpenCode |
| Output | Terminal summary, optional CSV | An SVG file committed to the repo |

## The tool this runs

`@tokenchit/cli`, MIT licensed: <https://github.com/iyashjayesh/tokenchit>

**Pinned to an exact version, deliberately.** `@latest` resolves to whatever the registry
currently serves, and this tool reads local session logs — so a compromised future release
would be executed with access to them before anyone had reviewed it. Pin, and raise the pin
knowingly:

```bash
TOKENCHIT_VERSION=0.10.0
```

To check the pinned artifact before running it the first time:

```bash
npm view @tokenchit/cli@0.10.0 dist.integrity dist.tarball
```

## Workflow

1. **Ask before the first download.** `npx` fetches the package from the npm registry and
   executes it. That is a remote download of code that will read local logs, so get explicit
   confirmation from the user before the first run on a machine. If they decline, stop here
   and say what would have run.

2. **Configure, unless this is a dry run.** If `.tokenchit.json` is absent, run:

   ```bash
   npx -y @tokenchit/cli@0.10.0 init
   ```

   It detects which agents have logs on this machine and records them. The file is meant to
   be committed and never contains a credential.

   **Skip this entirely when the user passed `--dry-run`**, and report that `.tokenchit.json`
   *would* be created. A preview that writes a config file is not a preview.

3. **Render the card.** The bare command writes to the configured output — `tokenchit.svg`
   unless `.tokenchit.json` names another path:

   ```bash
   npx -y @tokenchit/cli@0.10.0 sync
   ```

   Append only the flags the user actually asked for, each spelled exactly as below. Do not
   copy a placeholder into the command — `sync` ignores an unrecognised positional argument
   rather than refusing it, so a bracketed `[--dry-run]` reaches the CLI as junk and the card
   is written anyway, which is the opposite of what was asked.

   | Flag | Effect |
   |---|---|
   | `--out <path>` | Write somewhere other than the configured output |
   | `--theme auto` \| `light` \| `dark` | Card theme; `auto` adapts to the reader's system |
   | `--dry-run` | Print what would be written and touch nothing |

   `sync` reads local files and sends nothing: no prompts, no code, no file contents leave
   the machine, and it transmits nothing to any server. The npx invocation around it is a
   registry download — that is the network access in this workflow, and step 1 is where it
   is agreed.

4. **Report and offer.** Print the figures it produced — tokens, equivalent cost, streak,
   per-agent split — and the path written. If the repository has a README that does not yet
   reference the card, offer to add:

   ```markdown
   ![tokenchit](https://raw.githubusercontent.com/affaan-m/ECC/main/skills/token-card/tokenchit.svg)
   ```

   `sync` prints the path relative to the repository root. A Markdown image resolves
   relative to the file it sits in, so rewrite it for the README being edited: a card at
   `docs/usage.svg` is `./docs/usage.svg` from the root README but `../usage.svg` from
   `docs/zh-CN/README.md`. Pasting the printed path into a nested README points at
   `docs/zh-CN/docs/usage.svg` and renders broken.

   Do not edit the README without being asked.

Stop after step 4. Publishing to the public leaderboard is a separate `publish` command that
requires explicit opt-in, and is not part of this workflow — run it only if the user asks for
it by name. `unpublish` removes the row and the account again.

## Output

The path of the SVG, the figures it contains, and the markdown snippet for referencing it.
On a dry run: what would have been written, and nothing on disk changed.

## Notes

- Requires Node.js 22 or newer (the package declares `engines: { node: ">=22" }`). Nothing is
  installed globally; `npx` fetches the pinned version per run.
- Reads token counts and timestamps only.
