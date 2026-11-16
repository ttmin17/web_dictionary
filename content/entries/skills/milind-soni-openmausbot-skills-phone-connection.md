---
slug: milind-soni-openmausbot-skills-phone-connection
name: phone-connection
tagline: Why the MausBot phone app can't reach the person's computer, and what
  fixes it. Use when their phone stops connecting, works only on the same Wi-Fi,
  o
summary: "- Same Wi-Fi: the phone and the computer are on the same network.
  Every version of the phone app can use it. - Anywhere, through MausBot: from
  anywhere, through MausBot Relay, end-to-end encrypted. Only a phone app wi..."
categories:
  - cloud-infra
tags:
  - ai-agents
  - claude-code
  - codex
  - computer-use
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: milind-soni/OpenMausBot
  subpath: skills/phone-connection
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 23784
  last_commit: 2026-11-16T09:07:36Z
  stars_delta_7d: 4789
  stars_growth_pct: 25.2
  trending_score: 5996.4
  velocity_source: snapshot_delta
  sparkline_4w:
    - 12583
    - 18995
    - 23784
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: milind-soni/OpenMausBot
  path: skills/phone-connection/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:03.198Z
  truncated: false
type: agent_skill
skill:
  skill_name: phone-connection
  description: Why the MausBot phone app can't reach the person's computer, and
    what fixes it. Use when their phone stops connecting, works only on the same
    Wi-Fi, or shows No route to your computer.
  folder_path: skills/phone-connection
  extra_files:
    - manifest.json
  pack_total_skills: 6
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: milind-soni-openmausbot
---

# When the phone can't reach their computer
The MausBot phone app reaches the person's computer, where the OpenMausBot
desktop app runs, in the ways turned on in Settings → Phone & devices:

- **Same Wi-Fi**: the phone and the computer are on the same network. Every
  version of the phone app can use it.
- **Anywhere, through MausBot**: from anywhere, through MausBot Relay, end-to-end
  encrypted. Only a phone app with the encrypted connection can use it.
- **Tailscale**, under More ways in, for people who use it.

Older phone apps reached the computer away from home through an older secure
link instead, and that link is being switched off. Once it has ended for a
computer, a phone with an older app still works on the same Wi-Fi, but away from
it shows "No route to your computer at …" and keeps retrying. The phone app
can't tell why.

## What to say

1. Look in your instructions for a line that starts "Phone link:". It is there
   only when this computer's secure link for older phone apps has ended and a
   paired phone still has an older app. Then that is the cause. Tell them to
   update the MausBot app on that phone from its app store, then open it once
   on the same Wi-Fi as this computer: that upgrades its pairing by itself. If
   that doesn't reconnect it, they pair it again in Settings → Phone & devices
   (the phone's row there has Pair again), then remove its old entry.
2. With no such line, never say the link ended or that their app is too old.
   Check the usual things, one at a time: the computer is on and awake with
   OpenMausBot open; on the same Wi-Fi the phone connects; Anywhere, through
   MausBot is on in Settings → Phone & devices; the phone is in the paired list
   and its Connect from is Anywhere, not Wi-Fi and Tailscale only.
3. If you run on My Cloud, phones reach the Cloud through its own web address,
   not these ways: this guide is about the desktop app on their computer.

For an older app after the link ended, none of these help, so don't suggest
them: turning Anywhere, through MausBot off and on, Try reconnecting,
force-quitting the app away from that Wi-Fi, reinstalling the same app version,
restarting the computer, or checking for a VPN.
