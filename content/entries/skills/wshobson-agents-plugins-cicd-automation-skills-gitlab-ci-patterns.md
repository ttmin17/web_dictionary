---
slug: wshobson-agents-plugins-cicd-automation-skills-gitlab-ci-patterns
name: gitlab-ci-patterns
tagline: Build GitLab CI/CD pipelines with multi-stage workflows, caching, and
  distributed runners for scalable automation. Use when implementing GitLab
  CI/CD,
summary: Create efficient GitLab CI pipelines with proper stage organization,
  caching, and deployment strategies.
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
  subpath: plugins/cicd-automation/skills/gitlab-ci-patterns
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
  path: plugins/cicd-automation/skills/gitlab-ci-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.192Z
  truncated: false
type: agent_skill
skill:
  skill_name: gitlab-ci-patterns
  description: Build GitLab CI/CD pipelines with multi-stage workflows, caching,
    and distributed runners for scalable automation. Use when implementing
    GitLab CI/CD, optimizing pipeline performance, or setting up automated
    testing and deployment.
  folder_path: plugins/cicd-automation/skills/gitlab-ci-patterns
  extra_files: []
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# GitLab CI Patterns
Comprehensive GitLab CI/CD pipeline patterns for automated testing, building, and deployment.

## Purpose

Create efficient GitLab CI pipelines with proper stage organization, caching, and deployment strategies.

## When to Use

- Automate GitLab-based CI/CD
- Implement multi-stage pipelines
- Configure GitLab Runners
- Deploy to Kubernetes from GitLab
- Implement GitOps workflows

## Basic Pipeline Structure

```yaml
stages:
  - build
  - test
  - deploy

variables:
  DOCKER_DRIVER: overlay2
  DOCKER_TLS_CERTDIR: "/certs"

build:
  stage: build
  image: node:20
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/
    expire_in: 1 hour
  cache:
    key: ${CI_COMMIT_REF_SLUG}
    paths:
      - node_modules/

test:
  stage: test
  image: node:20
  script:
    - npm ci
    - npm run lint
    - npm test
  coverage: '/Lines\s*:\s*(\d+\.\d+)%/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml

deploy:
  stage: deploy
  image: bitnami/kubectl:1.31
  script:
    - kubectl apply -f k8s/
    - kubectl rollout status deployment/my-app
  only:
    - main
  environment:
    name: production
    url: https://app.example.com
```

## Docker Build and Push

```yaml
build-docker:
  stage: build
  image: docker:24
  services:
    - docker:24-dind
  before_script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
  script:
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - docker build -t $CI_REGISTRY_IMAGE:latest .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
    - docker push $CI_REGISTRY_IMAGE:latest
  only:
    - main
    - tags
```

## Multi-Environment Deployment

Set `KUBE_CA_CERT_FILE` as a GitLab file variable containing the cluster CA certificate,
and provide `KUBE_TOKEN` through a protected, masked CI variable. The file variable
contains a path that kubectl uses to verify the API server certificate. Protect both
`develop` and `main` so the deployment jobs can read the protected token.

```yaml
.deploy_template: &deploy_template
  image: bitnami/kubectl:1.31
  before_script:
    - kubectl config set-cluster k8s --server="$KUBE_URL" --certificate-authority="$KUBE_CA_CERT_FILE" --embed-certs=true
    - kubectl config set-credentials admin --token="$KUBE_TOKEN"
    - kubectl config set-context default --cluster=k8s --user=admin
    - kubectl config use-context default

deploy:staging:
  <<: *deploy_template
  stage: deploy
  script:
    - kubectl apply -f k8s/ -n staging
    - kubectl rollout status deployment/my-app -n staging
  environment:
    name: staging
    url: https://staging.example.com
  only:
    - develop

deploy:production:
  <<: *deploy_template
  stage: deploy
  script:
    - kubectl apply -f k8s/ -n production
    - kubectl rollout status deployment/my-app -n production
  environment:
    name: production
    url: https://app.example.com
  when: manual
  only:
    - main
```

## Terraform Pipeline

```yaml
stages:
  - validate
  - plan
  - apply

variables:
  TF_ROOT: ${CI_PROJECT_DIR}/terraform
  TF_VERSION: "1.6.0"

before_script:
  - cd ${TF_ROOT}
  - terraform --version

validate:
  stage: validate
  image: hashicorp/terraform:${TF_VERSION}
  script:
    - terraform init -backend=false
    - terraform validate
    - terraform fmt -check

plan:
  stage: plan
  image: hashicorp/terraform:${TF_VERSION}
  script:
    - terraform init
    - terraform plan -out=tfplan
  artifacts:
    paths:
      - ${TF_ROOT}/tfplan
    expire_in: 1 day

apply:
  stage: apply
  image: hashicorp/terraform:${TF_VERSION}
  script:
    - terraform init
    - terraform apply -auto-approve tfplan
  dependencies:
    - plan
  when: manual
  only:
    - main
```

## Security Scanning

```yaml
include:
  - template: Security/SAST.gitlab-ci.yml
  - template: Security/Dependency-Scanning.gitlab-ci.yml
  - template: Security/Container-Scanning.gitlab-ci.yml

trivy-scan:
  stage: test
  image: aquasec/trivy:0.58.0
  script:
    - trivy image --exit-code 1 --severity HIGH,CRITICAL $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
  allow_failure: true
```

## Caching Strategies

```yaml
# Cache node_modules
build:
  cache:
    key: ${CI_COMMIT_REF_SLUG}
    paths:
      - node_modules/
    policy: pull-push

# Global cache
cache:
  key: ${CI_COMMIT_REF_SLUG}
  paths:
    - .cache/
    - vendor/

# Separate cache per job
job1:
  cache:
    key: job1-cache
    paths:
      - build/

job2:
  cache:
    key: job2-cache
    paths:
      - dist/
```

## Dynamic Child Pipelines

```yaml
generate-pipeline:
  stage: build
  script:
    - python generate_pipeline.py > child-pipeline.yml
  artifacts:
    paths:
      - child-pipeline.yml

trigger-child:
  stage: deploy
  trigger:
    include:
      - artifact: child-pipeline.yml
        job: generate-pipeline
    strategy: depend
```


## Best Practices

1. **Use specific image tags** (node:20, not node:latest)
2. **Cache dependencies** appropriately
3. **Use artifacts** for build outputs
4. **Implement manual gates** for production
5. **Use environments** for deployment tracking
6. **Enable merge request pipelines**
7. **Use pipeline schedules** for recurring jobs
8. **Implement security scanning**
9. **Use CI/CD variables** for secrets
10. **Monitor pipeline performance**

## Related Skills

- `github-actions-templates` - For GitHub Actions
- `deployment-pipeline-design` - For architecture
- `secrets-management` - For secrets handling
