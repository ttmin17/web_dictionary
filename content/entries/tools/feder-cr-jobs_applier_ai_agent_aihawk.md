---
slug: feder-cr-jobs_applier_ai_agent_aihawk
name: Jobs_Applier_AI_Agent_AIHawk
tagline: Give it your resume, get the jobs that fit, select them and apply. Runs
  in your terminal, with a browser you can watch.
summary: Or uv tool install
  git+https://github.com/feder-cr/JobsApplierAIAgentAIHawk; uv leaves aihawk off
  your PATH until you run uv tool update-shell and open a new terminal. Or, in a
  virtual environment (on Windows, aihawk-...
categories:
  - browser-web
tags:
  - ai-agent
  - ai-agents
  - automation
  - browser-automation
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-11-05
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: feder-cr/Jobs_Applier_AI_Agent_AIHawk
  official_vendor: false
  license: MIT
signals:
  stars: 32390
  last_commit: 2026-11-05T11:46:15Z
  stars_delta_7d: 275
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 32390
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: feder-cr/Jobs_Applier_AI_Agent_AIHawk
  path: README.md
  branch: main
  fetched_at: 2026-11-05T13:13:29.622Z
  truncated: false
type: agent_tool
tool:
  subcategory: coding_agent
  install_command: pip install aihawk
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - aihawk
    env_vars: []
    confidence: manifest
---

# AIHawk
Give it your resume, get the jobs that fit, select them and apply. Runs in your terminal, with a browser you can watch. Needs Python 3.11 or newer.

```sh
pipx install git+https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk
```

Or `uv tool install git+https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk`; uv leaves `aihawk` off your PATH until you run `uv tool update-shell` and open a new terminal. Or, in a virtual environment (on Windows, `aihawk-env\Scripts\pip` and `aihawk-env\Scripts\aihawk`; a `pip install` in a very long folder path can fail there with `OSError [Errno 2]` on openai, and pipx or a short folder avoids that):

```sh
python -m venv aihawk-env
aihawk-env/bin/pip install git+https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk
aihawk-env/bin/aihawk resume.pdf
```

The resume can be anywhere on your disk: a PDF, a `.docx` or a text file. A scanned PDF has no text to read; export it with text, or save it as `.docx`. Captured from a test search, with an invented CV:

![The list of jobs, best first, with their scores](https://raw.githubusercontent.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/main/docs/demo-list.svg)

![One job: its score, gaps and reasons](https://raw.githubusercontent.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/main/docs/demo-job.svg)

The first time, AIHawk asks for an [OrcaRouter](https://orcarouter.ai) key and keeps it in `~/.aihawk/key`; after that, `aihawk` alone reopens your list. To change the key, edit or delete that file, or set `ORCAROUTER_API_KEY`, which wins over the file. If OrcaRouter refuses a key from the file, AIHawk forgets it and asks again.

The first search with each new job database downloads its job index, about 740 MB, into `~/.aihawk/data/index`; a search reads it on your computer. The descriptions of the jobs AIHawk judges are read from the release over the internet.

**Your data.** Your CV, your answers, the postings' texts and the pages' contents, screenshots included, go to the model gateway OrcaRouter and its providers; an application goes to the employer's site. The rest stays in `~/.aihawk`: the CV, the answers, the key (`key`), the proofs (`data/proofs/`), `applied.csv`, the job index and the browser profile with your sign-ins. You need a paid OrcaRouter key. In our measured runs on eleven real sites, with deepseek-v4.1-flash, a form cost 0.4 to 3.3 cents in model calls (1.5 on average), and none of those runs reached the send.

**Responsibility.** Applications go out in your name, and you answer for what is sent. Job sites have their own terms, and some do not allow automated applications: read them before you select their jobs. AIHawk asks once, with a yes, before it sends the selection; as a last resort the model can run a script in the page, which could send a form without asking (see [SECURITY.md](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/SECURITY.md)). The refusal of clicks that would send reads the control's words and type, so a control worded oddly, or a final button that only says Continue, can get past it.

## Keys

| Key | What it does |
|---|---|
| space | select a job |
| enter | the score, the gaps and the reasons |
| a | send the selected jobs, or the current one, after one yes |
| s | the jobs sent, and what each page said |
| o | open the posting in your browser |
| m | score more jobs |
| r | give a new resume |
| l | open the browser to sign in; press Enter in the terminal when done |
| q | quit (Ctrl+C quits too) |

## What it does

- **Reads** your resume, writes a search plan from it, and takes your contact details from it.
- **Finds** the postings whose titles fit the plan, in a job database published as a release and rebuilt daily by [`jobs-database.yml`](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/.github/workflows/jobs-database.yml): about 10.2 million postings. Postings older than 60 days are left out by default.
- **Shortlists** the 100 postings with the best title fit: Jev, the decision model, answers six questions about each, and the best 25 are kept.
- **Scores** each shortlisted job from 1 to 5 against your resume, with its gaps.
- **Applies**: writes a CV for the job and fills the form in a visible browser through [invisible-playwright-mcp](https://github.com/feder-cr/invisible_playwright_mcp). What a form asks and your files do not say, it asks you, and remembers. The first apply or sign-in downloads the browser engine, about 268 MB on Windows.

## Sending

The model fills the form and names the submit button; it is told not to send, and clicks that would send are refused. Your `a` and Enter is the one yes: AIHawk clicks the control the model named. Each send keeps what the page said in `applied.csv` and `data/proofs/`; `s` lists them.

## Sites

Sites vary a lot: Greenhouse, Ashby, Breezy, Recruitee and Teamtailor have one confirmed real send each, the others fill forms without sending, stop at a captcha or at questions, or need an account. [docs/sites.md](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/docs/sites.md) gives each site's status and what stops it. Other postings are listed for applying by hand. The Gmail and Outlook plugins take a code or a link from your mailbox. They tell the model to read only, which is an instruction, not a guarantee: the code refuses only clicks that look like sending, Enter, and visits to sites other than the form's and the mailbox's. A click that deletes or archives mail is not refused. They have not been tried on a real mailbox yet.

A plugin is a Markdown file in [`src/aihawk/plugins/`](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/src/aihawk/plugins) that explains one site's form to the model. Add a site with a file and no code: see [docs/plugins.md](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/docs/plugins.md). Your own go in `~/.aihawk/plugins/`.

## Plan and models

Models go through OrcaRouter: `model` (default `deepseek/deepseek-v4.1-flash`) writes the CV and fills forms; `quick_model` (default `google/gemini-3.5-flash`) writes the plan; `decision_model` (default `typesafe/jev-1.14`, which is Jev) shortlists the jobs; `judge_model` (default `deepseek/deepseek-v4.1-flash`) scores them. `base_url` can name another gateway; it must serve OpenAI's chat API and the decision model's own endpoint, `/systemone`.

- **Update:** `pipx upgrade aihawk`, or `uv tool upgrade aihawk`.
- **Uninstall:** `pipx uninstall aihawk` (or `uv tool uninstall aihawk`), then delete `~/.aihawk`, which holds your CV, key and sign-ins.
- **The search:** the plan is `filters.plan` in `~/.aihawk/aihawk.yaml`; restart `aihawk` after editing it.

More: the [wiki](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/wiki), [configuration](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/docs/configuration.md), [CONTRIBUTING.md](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/CONTRIBUTING.md), [SECURITY.md](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/SECURITY.md), [CHANGELOG.md](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/CHANGELOG.md). The job database merges public sources, whose licences and posting links are in [NOTICE](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/NOTICE) and [docs/data-sources.md](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/docs/data-sources.md). Some sources state no licence, and one asks that its postings not be republished as job listings; the published database includes that source. Each posting belongs to its employer. The report's shape is adapted from [career-ops](https://github.com/santifer/career-ops) (MIT).

[MIT](https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk/blob/main/LICENSE). The former Dots project is at [feder-cr/invisible_dots](https://github.com/feder-cr/invisible_dots).
