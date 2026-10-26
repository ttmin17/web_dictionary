---
slug: ruvnet-ruflo-plugins-ruflo-browser-skills-browser-form-fill
name: browser-form-fill
tagline: Fill a web form by mapping field-name → value, with optional template
  lookup from browser-templates for known forms
summary: "- Submitting a known form (signup, contact, checkout) where field
  names are stable. - Re-using a stored template for a recurring submission. -
  Authoring a new template for a site by recording the resolved selectors."
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
  subpath: plugins/ruflo-browser/skills/browser-form-fill
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
  path: plugins/ruflo-browser/skills/browser-form-fill/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: browser-form-fill
  description: Fill a web form by mapping field-name → value, with optional
    template lookup from browser-templates for known forms
  folder_path: plugins/ruflo-browser/skills/browser-form-fill
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Browser Form Fill
Fill a form using a structured field map (`{"first_name": "Ada", "company": "..."}`). When a `browser-templates` entry exists for the host, use it to resolve field names → CSS selectors automatically; otherwise resolve via the page accessibility snapshot.

## When to use

- Submitting a known form (signup, contact, checkout) where field names are stable.
- Re-using a stored template for a recurring submission.
- Authoring a new template for a site by recording the resolved selectors.

## Steps

1. **Open a recorded session** via `browser-record`.
2. **Resolve selectors**:
   - **Template path** (`--template <name>`): pull `{field_name → selector}` from `browser-templates`.
   - **Snapshot path**: call `browser_snapshot`, walk the accessibility tree, match each input's accessible name / label to the field map keys.
3. **AIDefence PII gate**: every value in the field map passes `aidefence_has_pii` before any keystroke; record `pii_in_form: true` in the session manifest. **Do not** record the values themselves in the trajectory; record only the field names + a redacted placeholder.
4. **Fill** with `browser_fill` / `browser_type` / `browser_select` / `browser_check` per input type.
5. **Submit** if `--submit`: locate the submit button via the snapshot, `browser_click`, then `browser_wait` for navigation.
6. **Persist the template** if a new mapping was discovered:
   ```bash
   npx -y @claude-flow/cli@latest memory store --namespace browser-templates \
     --key "<host>:<form-name>" \
     --value "{field_map:{...}, submit_selector:..., post_submit_url_pattern:...}"
   ```
7. **Verify** post-submit state if a verification snippet was provided in the field map's `_assert` key.

## Caveats

- Trajectory steps for fills MUST redact values. The PII gate is the contract.
- For inputs that require typing simulation (e.g., autocomplete reactions), use `browser_type` (simulates keystrokes) rather than `browser_fill` (sets value programmatically). Record which one was used in the trajectory step.
- Multi-step forms are a sequence of `browser-form-fill` invocations; chain them via the same session id.
- If the form has a CAPTCHA, surface the request to the user — do not attempt to bypass.
