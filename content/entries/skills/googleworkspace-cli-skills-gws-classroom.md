---
slug: googleworkspace-cli-skills-gws-classroom
name: gws-classroom
tagline: "Google Classroom: Manage classes, rosters, and coursework."
summary: "- create — Creates a course. The user specified in ownerId is the
  owner of the created course and added as a teacher. A non-admin requesting
  user can only create a course with themselves as the owner. Domain admins
  ca..."
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-agent
  - automation
  - cli
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-classroom
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 32123
  last_commit: 2026-11-03T01:37:22Z
  stars_delta_7d: 883
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 31448
    - 31663
    - 32123
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: googleworkspace/cli
  path: skills/gws-classroom/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.199Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-classroom
  description: "Google Classroom: Manage classes, rosters, and coursework."
  folder_path: skills/gws-classroom
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# classroom (v1)
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

```bash
gws classroom <resource> <method> [flags]
```

## API Resources

### courses

  - `create` — Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user.
  - `delete` — Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
  - `get` — Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
  - `getGradingPeriodSettings` — Returns the grading period settings in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user isn't permitted to access the grading period settings in the requested course or for access errors. * `NOT_FOUND` if the requested course does not exist.
  - `list` — Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.
  - `patch` — Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied.
  - `update` — Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * CourseTitleCannotContainUrl
  - `updateGradingPeriodSettings` — Updates grading period settings of a course. Individual grading periods can be added, removed, or modified using this method. The requesting user and course owner must be eligible to modify Grading Periods. For details, see [licensing requirements](https://developers.google.com/workspace/classroom/grading-periods/manage-grading-periods#licensing_requirements).
  - `aliases` — Operations on the 'aliases' resource
  - `announcements` — Operations on the 'announcements' resource
  - `courseWork` — Operations on the 'courseWork' resource
  - `courseWorkMaterials` — Operations on the 'courseWorkMaterials' resource
  - `posts` — Operations on the 'posts' resource
  - `studentGroups` — Operations on the 'studentGroups' resource
  - `students` — Operations on the 'students' resource
  - `teachers` — Operations on the 'teachers' resource
  - `topics` — Operations on the 'topics' resource

### invitations

  - `accept` — Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors.
  - `create` — Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION`: * if the requested user's account is disabled.
  - `delete` — Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
  - `get` — Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
  - `list` — Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.

### registrations

  - `create` — Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored.
  - `delete` — Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.

### userProfiles

  - `get` — Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.
  - `guardianInvitations` — Operations on the 'guardianInvitations' resource
  - `guardians` — Operations on the 'guardians' resource

## Discovering Commands

Before calling any API method, inspect it:

```bash
# Browse resources and methods
gws classroom --help

# Inspect a method's required params, types, and defaults
gws schema classroom.<resource>.<method>
```

Use `gws schema` output to build your `--params` and `--json` flags.
