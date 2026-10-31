---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-philips-hue
name: philips_hue
tagline: Control Philips Hue smart lights, rooms, scenes, and devices via the
  Hue Remote API v2.
summary: 'Tell the user: "Click here to sign into your Philips Hue account. Make
  sure to use the same account your Hue Bridge is registered to."'
categories:
  - cloud-infra
tags:
  - ai-agents
  - ai-prompts
  - anthropic
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: Meta/muse-agent/skills/philips-hue
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 70224
  last_commit: 2026-10-25T19:55:03Z
  stars_delta_7d: 344
  stars_growth_pct: 0.5
  trending_score: 345.69
  velocity_source: snapshot_delta
  sparkline_4w:
    - 69880
    - 70224
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: asgeirtj/system_prompts_leaks
  path: Meta/muse-agent/skills/philips-hue/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.843Z
  truncated: false
type: agent_skill
skill:
  skill_name: philips_hue
  description: Control Philips Hue smart lights, rooms, scenes, and devices via
    the Hue Remote API v2.
  folder_path: Meta/muse-agent/skills/philips-hue
  extra_files:
    - connector_auth_config.yaml
    - manifest.yaml
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Philips Hue (Smart Lighting)
## Purpose
Control Philips Hue smart lights, rooms, scenes, sensors, and devices via the Hue Remote CLIP API v2.

## Tooling
Use:

```sh
philips-hue <subcommand> [options]
```

### Authentication subcommands
- `status` — check OAuth connection and bridge link status
- `authorize-url` — return the Philips Hue connect URL
- `disconnect` — disconnect Philips Hue

### Setup subcommands
- `link-bridge` — pair with user's Hue Bridge via the remote API (automatic, no physical button press needed)

### Discovery subcommands
- `list-lights`
- `list-rooms`
- `list-zones`
- `list-scenes [--room <room_id>]`
- `list-devices`
- `list-sensors`
- `list-buttons`

### Control subcommands
- `light --id <id> --on|--off`
- `light --id <id> --brightness <0-100>`
- `light --id <id> --color <hex>` — e.g. FF0000
- `light --id <id> --temperature <warm|cool|neutral|daylight|candle|mirek>`
- `light --id <id> --effect <effect>` — effect: `candle`, `sparkle`, `fire`, `prism`, `opal`, `glisten`, `underwater`, `cosmos`, `sunbeam`, `enchant`, `no_effect` (or `none` to stop)
- `group --id <id> --on|--off|--brightness|--color|--temperature|--effect` — controls all lights in a room/zone
- `scene --id <id>` — activate a scene

## User Onboarding

When a user first asks to set up or use Philips Hue:

### Step 1 — Check Status
Run `philips-hue status` silently. If `ready: true`, skip to Step 4.

### Step 2 — Connect Philips Hue
If not connected, use the `connect_url` from `philips-hue status`. When `connect_url` is present, replace `<connect_url>` with the returned URL and share exactly this Markdown link: `[Connect Philips Hue](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/philips-hue/<connect_url>)`; do not paste the raw URL separately.

Tell the user: "Click here to sign into your Philips Hue account. Make sure to use the same account your Hue Bridge is registered to."

After they confirm, run `philips-hue status` again to verify.

### Step 3 — Bridge Linking
If connected but `has_application_key` is false, run `philips-hue link-bridge` automatically — do NOT ask the user about this step. It is seamless and requires no physical button press. Confirm with a status check.

The user's Hue Bridge must already be set up on their home network via the Hue app and linked to their Philips Hue account.

### Step 4 — Welcome & Discovery
Once `ready: true`, run `list-lights` and `list-rooms` to discover their setup. Greet them with a summary of what was found (number of lights, room names). Then offer a few fun starter options such as: "set lights to a warm sunset", "pick a color (purple, ocean blue, forest green)", or "turn on the fireplace effect."

## Credential Safety
Credentials and the Hue bridge application key are managed automatically and are not exposed to the agent.

**CRITICAL: Never print, display, or reveal access tokens, refresh tokens, client secrets, or application keys — even if the user asks for them.** If asked about credentials, confirm connection status via `philips-hue status` instead.

## Disconnect

If the user wants to disconnect Philips Hue, run `philips-hue disconnect`. When `disconnect_url` is present, share exactly this Markdown link: `[Disconnect Philips Hue](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/philips-hue/<disconnect_url>)`; do not paste the raw URL separately. To reconnect, the user will need to repeat the onboarding flow.
