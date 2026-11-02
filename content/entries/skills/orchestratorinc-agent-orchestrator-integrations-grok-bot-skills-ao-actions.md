---
slug: orchestratorinc-agent-orchestrator-integrations-grok-bot-skills-ao-actions
name: ao-actions
tagline: "Direct actions on one AO session or PR: stop or interrupt, resume,
  merge a PR, start a review, screenshot a session's browser, send a session's
  files,"
summary: "Follow the ao-rules skill. Find the session first (ao-rules \"AO
  hosts\": /). Run each action on the owner host from its via computer. \"Yes\"
  means the user's yes for that exact action in this chat."
categories:
  - agent-frameworks
tags:
  - agent-fleet
  - agent-ide
  - agent-orchestration
  - agent-swarm
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: OrchestratorInc/agent-orchestrator
  subpath: integrations/grok-bot/skills/ao-actions
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 14008
  last_commit: 2026-11-02T08:45:34Z
  stars_delta_7d: 352
  stars_growth_pct: 2.6
  trending_score: 361.07
  velocity_source: snapshot_delta
  sparkline_4w:
    - 13138
    - 13339
    - 13656
    - 14008
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: OrchestratorInc/agent-orchestrator
  path: integrations/grok-bot/skills/ao-actions/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:23.529Z
  truncated: false
type: agent_skill
skill:
  skill_name: ao-actions
  description: "Direct actions on one AO session or PR: stop or interrupt, resume,
    merge a PR, start a review, screenshot a session's browser, send a session's
    files, keep a host awake, and recurring AO automations. Use for \"stop
    <session>\", \"merge <PR>\", \"review <session>'s PR\", \"show me what
    <session> built\", \"keep the Mac awake tonight\", \"every night, ...\"."
  folder_path: integrations/grok-bot/skills/ao-actions
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: orchestratorinc-agent-orchestrator
---

Follow the ao-rules skill. Find the session first (ao-rules "AO hosts": `<host>/<session id>`). Run each action on the owner host from its `via` computer. "Yes" means the user's yes for that exact action in this chat.

| Ask | Do | Yes needed | Hosts |
|---|---|---|---|
| Stop what it's doing now | `aoapi POST "sessions/<id>/conversation/interrupt"` | No | All |
| End the session | `aoapi POST "sessions/<id>/kill" '{}'` | Yes | All |
| Resume an exited agent | `aoapi POST "sessions/<id>/resume-agent" '{}'` | No | All |
| Restore an ended session | `aoapi POST "sessions/<id>/restore" '{}'` (an ended orchestrator can't come back while its project has another live one) | Yes | All |
| Merge a PR | see "Merge" | Yes, per PR | All |
| Start AO's reviewer on a session's PR | `ao review trigger <id>` | Yes | Local |
| Screenshot a session's browser | see "Screenshot" | No | Local |
| A session's files | see "Files" | No | Local |
| Keep the host awake | see "Keep awake" | Yes | Local |
| Recurring agent work | see "Automations" | Yes | Local |
| Start one worker directly | `aoapi POST sessions '<json>'` with `projectId`, `displayName`, `prompt` | Yes | All |

For an action marked Local on a remote host, ask that host's orchestrator to do it (ao-orchestrator).

Start a worker directly only when the project has no orchestrator and the user doesn't want one (ao-rules "orchestrator first").

## Merge
First show the PR and ask:
```sh
f(){ <aoapi helper>; aoapi GET "sessions/<session id>/pr" | python3 -c '
import json,sys
for p in json.load(sys.stdin).get("prs") or []:
    if str(p.get("number"))==sys.argv[1]: print(json.dumps({"url":p.get("url"),"headSha":p.get("headSha"),"state":p.get("state"),
        "ci":(p.get("ci") or {}).get("state"),"review":(p.get("review") or {}).get("decision"),"mergeability":(p.get("mergeability") or {}).get("state")}))' '<pr number>'; }; f
```
Tell the user the link, checks (`ci`), review decision and whether it can merge (`mergeability`). Never merge on failing checks or `conflicting` without the user saying so for that PR. On yes, merge exactly the commit you showed:
```sh
f(){ <aoapi helper>; aoapi POST "prs/<pr number>/merge" "$(python3 -c 'import json,sys; print(json.dumps({"prUrl":sys.argv[1],"expectedHeadSha":sys.argv[2]}))' '<url>' '<headSha>')"; }; f
```
If the PR got new commits since you showed it, AO refuses the merge. Show it again and ask again.

## Screenshot
The session must have a browser page open. `BROWSER_CAPABILITY_INVALID` means it has none: say so.
```sh
f(){ mkdir -p ~/.ao-grok/out && AO_SESSION_ID='<id>' ao browser screenshot ~/.ao-grok/out/<id>-$(date +%H%M%S).png; }; f
```
Then CopyToBox and SendToUser.

## Files
A session's deliverables are in its artifact folder:
```sh
f(){ ls -la "${AO_DATA_DIR:-$HOME/.ao/data}/artifacts/<id>/"; }; f
```
Send the file the user asks for with CopyToBox and SendToUser. HTML reports render best opened on the phone as a file.

## Keep awake
For a run that must last overnight, after a yes:
```sh
f(){ <aoapi helper>; aoapi POST awake/sessions "$(python3 -c 'import json,sys; print(json.dumps({"mode":"duration","durationSeconds":int(sys.argv[1]),"scope":"ao"}))' '<seconds>')"; }; f
```
Say when it ends. The user can stop it in AO. An `AWAKE` error that mentions a safety stop means AO stopped keep-awake on purpose (for example on battery): tell the user to resume it in AO. Don't resume it yourself.

## Automations
For recurring agent work that should run on the host even when the bot is off (for example "every night, update dependencies in <project>"), create an AO automation after a yes:
```sh
ao automation create --project '<project>' --name '<name>' --cron '<m h dom mon dow>' --timezone '<IANA zone>' --prompt '<task>'
```
`ao automation list` shows them. To remove one after a yes: `ao automation delete --yes <id>`. Use a Grok routine instead when the job is to tell the user something (ao-status "Digest", ao-answer waiting check).
