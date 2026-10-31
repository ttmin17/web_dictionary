---
slug: kevinpbuckley-vibeue-content-skills-animation-editing
name: animation-editing
tagline: Preview, validate, and bake bone-rotation edits on AnimSequences with
  constraint awareness and retarget safety. Use when the user asks to
  edit/pose/ad
summary: Covers the profile → preview → validate → bake workflow for safe bone
  edits with correct bone-space handling and constraint validation.
categories:
  - media-creative
tags:
  - ai-tools
  - automation
  - blueprint
  - claude
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: kevinpbuckley/VibeUE
  subpath: Content/Skills/animation-editing
  official_vendor: false
  license: MIT
signals:
  stars: 788
  last_commit: 2026-10-24T02:30:54Z
  stars_delta_7d: 7
  stars_growth_pct: 0.9
  trending_score: 7.06
  velocity_source: snapshot_delta
  sparkline_4w:
    - 745
    - 781
    - 788
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: kevinpbuckley/VibeUE
  path: Content/Skills/animation-editing/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:54.120Z
  truncated: false
type: agent_skill
skill:
  skill_name: animation-editing
  description: Preview, validate, and bake bone-rotation edits on AnimSequences
    with constraint awareness and retarget safety. Use when the user asks to
    edit/pose/adjust an animation's bones, raise an arm, create a
    swing/wave/dance/pose, mirror or copy a pose, set joint limits, or learn
    bone constraints. Load together with animsequence (keyframes) and skeleton
    (structure).
  folder_path: Content/Skills/animation-editing
  extra_files:
    - api-reference.md
    - common-mistakes.md
    - scripts/learn_constraints.txt
    - scripts/mirror_pose.txt
    - scripts/multi_bone_edit.txt
    - scripts/preview_validate_bake.txt
    - scripts/safe_discovery.txt
    - workflows.md
  pack_total_skills: 39
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: kevinpbuckley-vibeue
---

> 🧠 **Brains complement:** IF an `unreal-engine-skills-manager` tool (external MCP) exists in this session, call it with `{action: "load", skill: "animation-system"}` for UE domain knowledge on this topic — correct APIs, architecture, best practices — and treat it as the rubric for any review / "best practices" question. If no such tool is available (e.g. running under Claude Code or Codex without that MCP), skip this line entirely and proceed with this skill alone — do NOT attempt the call.

# Animation Editing Skill

Covers the **profile → preview → validate → bake** workflow for safe bone edits with correct
bone-space handling and constraint validation.

> **Load companion skills:** `animsequence` (basic keyframe creation), `skeleton` (structure,
> retargeting), `animation-blueprint` (state machines / AnimGraph). Skills load via the engine's
> `AgentSkillToolset` (`ListSkills` / `GetSkills`) — there is no `vibeue-skills-manager` tool. Run the
> VibeUE services below with `execute_python_code` (`unreal.<Service>.<method>()`).

> **🛡️ Safe discovery — never `unreal.load_asset()` in loops (memory crash 0xC0000005).**
> Use `SkeletonService.list_skeletons(path)`, `AnimSequenceService.find_animations_for_skeleton(skeleton)`,
> `AnimSequenceService.list_anim_sequences(path, skeleton_filter)` — they query metadata without loading.

## ⚠️ Critical Rules

### 1. Always specify bone space
Every bone rotation must state its coordinate space. **Default to `"local"` for user intent.**

| Space | Relative to | Use for |
|-------|-------------|---------|
| `"local"` | parent bone | most edits (default) |
| `"component"` | mesh root | cross-bone coordination |
| `"world"` | world | rarely |

```python
unreal.AnimSequenceService.preview_bone_rotation(path, "upperarm_r", unreal.Rotator(0, 30, 0), "local", 0)
```

### 2. Use preview → validate → bake (never edit blind)
```python
ass = unreal.AnimSequenceService
ass.preview_bone_rotation(anim_path, "upperarm_r", unreal.Rotator(0, 45, 0), "local", 0)
v = ass.validate_pose(anim_path, True)             # True = learned constraints
if v.is_valid:
    ass.bake_preview_to_keyframes(anim_path, 0, -1, "cubic")
else:
    ass.cancel_preview(anim_path)                  # or accept clamped values
```

### 3. Build a skeleton profile before editing
```python
profile = unreal.SkeletonService.create_skeleton_profile("/Game/SK_Mannequin")
if not profile.has_learned_constraints:
    unreal.SkeletonService.learn_from_animations("/Game/SK_Mannequin", 50, 10)
```
Without a profile there are no constraints to validate against.

### 4. Euler for intent, quaternions internally
Express user intent as `unreal.Rotator(roll, pitch, yaw)` (degrees); the service uses quaternions
internally to avoid gimbal lock. Inspect with `quat_to_euler(quat)`. Don't guess axis orientation —
read the reference pose first (`get_reference_pose`).

---
## Task Index

| Task | Workflow | Sample script |
|------|----------|---------------|
| Discover skeletons/animations safely | `workflows.md` → Inspect skeleton | `scripts/safe_discovery.txt` |
| Build a skeleton profile | `workflows.md` → Inspect skeleton | — |
| Edit one bone (preview/validate/bake) | `workflows.md` → single bone edit | `scripts/preview_validate_bake.txt` |
| Edit a bone chain atomically | `workflows.md` → multi-bone edit | `scripts/multi_bone_edit.txt` |
| Set manual joint constraints | `workflows.md` → set constraints | — |
| Learn constraints from animations | `workflows.md` → learn constraints | `scripts/learn_constraints.txt` |
| Copy / mirror a pose | `workflows.md` → copy/mirror | `scripts/mirror_pose.txt` |
| Retarget preview | `workflows.md` → retargeting | — |

## Sub-docs

- **`workflows.md`** — step-by-step workflows for every task above.
- **`api-reference.md`** — full SkeletonService/AnimSequenceService method list + data structures.
- **`common-mistakes.md`** — bone-space, validation, axis-guessing, and the load-in-loops crash.

## Verification

Confirm `AnimationEditResult.success` and inspect `was_clamped`; gate baking on
`validate_pose(...).is_valid`; `cancel_preview` on failure; `save_asset` after a successful bake.
