---
slug: asgeirtj-system_prompts_leaks-meta-muse-code-skills-python-env
name: python-env
tagline: Setting up or installing into a Python environment. One rule applies
  whether or not you read the body - the environment belongs with the project,
  so c
summary: "Create it inside the project directory — .venv at the project root is
  the convention nearly every editor and tool auto-detects:"
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
  subpath: Meta/muse-code/skills/python-env
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
  path: Meta/muse-code/skills/python-env/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.848Z
  truncated: false
type: agent_skill
skill:
  skill_name: python-env
  description: Setting up or installing into a Python environment. One rule
    applies whether or not you read the body - the environment belongs with the
    project, so create it inside the project directory (.venv) or let uv manage
    it, and never in a scratch directory like /tmp and never by forcing an
    install into the system interpreter. Load the body before creating a
    virtualenv, choosing an installer, or writing run instructions for a Python
    project.
  folder_path: Meta/muse-code/skills/python-env
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Python environments
The environment is part of the project, not scratch space. A user who opens the
project tomorrow, or clones it on another machine, should find the environment
where their editor, their tooling, and their habits expect it.

## Where it goes

Create it **inside the project directory** — `.venv` at the project root is the
convention nearly every editor and tool auto-detects:

```
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
```

For a greenfield project, prefer `uv`, which manages a project-local `.venv` for
you and is much faster:

```
uv venv
uv pip install -e .      # or `uv sync` when there is a lockfile
uv run python -m yourpkg # runs in the project env without activating
```

Never put the environment in `/tmp`, `~/envs`, or any other scratch location
outside the project. It is invisible to the user's tooling, it is not what they
will look for, and on `/tmp` it is deleted out from under them.

## PEP 668: "externally-managed-environment"

Homebrew, Debian, and Ubuntu mark the system interpreter as externally managed,
so `pip install` outside a virtualenv refuses with:

```
error: externally-managed-environment
```

That is the signal to create the project environment — not an obstacle to work
around. Do **not** pass `--break-system-packages`, set
`PIP_BREAK_SYSTEM_PACKAGES`, or delete the `EXTERNALLY-MANAGED` marker: those
mutate an interpreter the OS owns, leave the project with no environment of its
own, and can break other software on the machine.

## Hand off commands the user can run

Write the run instructions against the project environment, so they work from a
fresh shell in the project directory:

```
source .venv/bin/activate
python -m yourpkg ...
```

or, with uv, `uv run python -m yourpkg ...`.

Do not hand back absolute paths into an environment outside the project
(`/tmp/whatever/bin/python -m yourpkg`). Even when they work right now, they
tell the user their project has no environment of its own.

## Respect what is already there

If the project already has an environment or a declared tool — a `.venv`, a
`uv.lock`, Poetry, Pipenv, conda — use it rather than introducing a second one.
Check before creating.
