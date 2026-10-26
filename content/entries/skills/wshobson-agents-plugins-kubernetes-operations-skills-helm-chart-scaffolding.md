---
slug: wshobson-agents-plugins-kubernetes-operations-skills-helm-chart-scaffolding
name: helm-chart-scaffolding
tagline: Design, organize, and manage Helm charts for templating and packaging
  Kubernetes applications with reusable configurations. Use when creating Helm
  cha
summary: This skill provides step-by-step instructions for building
  production-ready Helm charts, including chart structure, templating patterns,
  values management, and validation strategies.
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/kubernetes-operations/skills/helm-chart-scaffolding
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/kubernetes-operations/skills/helm-chart-scaffolding/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.198Z
  truncated: false
type: agent_skill
skill:
  skill_name: helm-chart-scaffolding
  description: Design, organize, and manage Helm charts for templating and
    packaging Kubernetes applications with reusable configurations. Use when
    creating Helm charts, packaging Kubernetes applications, or implementing
    templated deployments.
  folder_path: plugins/kubernetes-operations/skills/helm-chart-scaffolding
  extra_files:
    - assets/Chart.yaml.template
    - assets/values.yaml.template
    - references/chart-structure.md
    - references/details.md
    - scripts/validate-chart.sh
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Helm Chart Scaffolding
Comprehensive guidance for creating, organizing, and managing Helm charts for packaging and deploying Kubernetes applications.

## Purpose

This skill provides step-by-step instructions for building production-ready Helm charts, including chart structure, templating patterns, values management, and validation strategies.

## When to Use This Skill

Use this skill when you need to:

- Create new Helm charts from scratch
- Package Kubernetes applications for distribution
- Manage multi-environment deployments with Helm
- Implement templating for reusable Kubernetes manifests
- Set up Helm chart repositories
- Follow Helm best practices and conventions

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **Use semantic versioning** for chart and app versions
2. **Document all values** in values.yaml with comments
3. **Use template helpers** for repeated logic
4. **Validate charts** before packaging
5. **Pin dependency versions** explicitly
6. **Use conditions** for optional resources
7. **Follow naming conventions** (lowercase, hyphens)
8. **Include NOTES.txt** with usage instructions
9. **Add labels** consistently using helpers
10. **Test installations** in all environments

## Troubleshooting

**Template rendering errors:**

```bash
helm template my-app ./my-app --debug
```

**Dependency issues:**

```bash
helm dependency update
helm dependency list
```

**Installation failures:**

```bash
helm install my-app ./my-app --dry-run --debug
kubectl get events --sort-by='.lastTimestamp'
```


## Related Skills

- `k8s-manifest-generator` - For creating base Kubernetes manifests
- `gitops-workflow` - For automated Helm chart deployments
