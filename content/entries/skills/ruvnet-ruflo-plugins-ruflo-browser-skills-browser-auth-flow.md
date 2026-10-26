---
slug: ruvnet-ruflo-plugins-ruflo-browser-skills-browser-auth-flow
name: browser-auth-flow
tagline: Probe a site's authentication flow for redirect leaks, missing CSRF,
  weak session cookies, and OAuth misconfiguration; produces an auth findings.md
summary: "- Pre-deployment audit of a new auth flow. - Investigating a suspected
  token leak or redirect issue. - Establishing a baseline for ongoing regression
  checks."
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-browser/skills/browser-auth-flow
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-browser/skills/browser-auth-flow/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.542Z
  truncated: false
type: agent_skill
skill:
  skill_name: browser-auth-flow
  description: Probe a site's authentication flow for redirect leaks, missing
    CSRF, weak session cookies, and OAuth misconfiguration; produces an auth
    findings.md
  folder_path: plugins/ruflo-browser/skills/browser-auth-flow
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Browser Auth Flow
Adversarial probe of a site's authentication. Drives the login flow once, records the trajectory, then runs a configurable set of probes against the captured artifacts and live page. Output is a structured `findings.md` inside the RVF container.

## When to use

- Pre-deployment audit of a new auth flow.
- Investigating a suspected token leak or redirect issue.
- Establishing a baseline for ongoing regression checks.

## Steps

1. **Open a recorded session** via `browser-record`.
2. **Drive the auth flow** as in `browser-login` (credentials come from `--credentials <handle>` referencing `browser-cookies` if the run is a re-auth probe).
3. **Run probes**:

   - **`csrf`**: inspect the login POST in the trajectory; verify a same-origin token field is present and non-empty.
   - **`redirect`**: watch `browser_get-url` after each nav for cross-origin redirects with auth state in the URL or fragment. Flag any token-bearing URL that crosses an origin boundary.
   - **`cookie`**: `document.cookie` exposes only name=value of non-`HttpOnly` cookies; it cannot show `Secure`, `SameSite` or expiry. Via `browser_eval`, return only each visible cookie's name, value length and entropy estimate (never the values themselves), and flag any session-looking name that is visible at all, because a visible cookie is by definition not `HttpOnly`. For `Secure`/`HttpOnly`/`SameSite`/expiry, read the `Set-Cookie` response headers (for example `curl -sS -D - -o /dev/null <login-url>` for pre-auth cookies); post-login attributes are not observable with these tools, so mark them `not-assessed` and ask for a HAR or devtools export instead of guessing.
   - **`oauth`**: if the flow involves a third-party provider, capture the authorization request, verify `state` and `nonce` are present and high-entropy, verify `redirect_uri` matches the registered callback domain.

4. **Quarantine** any token / credential / PII captured during probing — it stays inside the RVF container's findings, never returns to the model unredacted (`aidefence_is_safe` gate from `browser-extract` applies if you read the findings back).
5. **Write `findings.md`** with one section per probe, severity rating per finding, and a `verdict` (pass / warn / fail).
6. **Index** the session in `browser-sessions` with `tag: auth-probe` so future audits compare against it.

## Caveats

- **Authorization first.** Only probe a site you own or have written permission to test; state which in the report. The skill must refuse third-party production sites.

- This skill probes; it does not exploit. Do not chain follow-up requests using a captured token.
- Credentials must come from a vaulted handle or interactive entry. Never hardcode them in the field map.
- Some probes require multiple page loads. Trajectory step count for an auth probe typically lands at 15–40 steps; budget accordingly.
- The output is structured for human review. Do not auto-act on findings without surfacing them to the user first.
