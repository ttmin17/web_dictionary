---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-container-image-minimal-base-with-distroless
name: implementing-container-image-minimal-base-with-distroless
tagline: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
summary: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
categories:
  - security-auth
tags:
  - ai-agents
  - claude-code
  - cloud-security
  - cybersecurity
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: mukul975/Anthropic-Cybersecurity-Skills
  subpath: skills/implementing-container-image-minimal-base-with-distroless
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 35031
  last_commit: 2026-08-31T04:32:44Z
  stars_delta_7d: 353
  stars_growth_pct: 1
  trending_score: 356.59
  velocity_source: snapshot_delta
  sparkline_4w:
    - 33900
    - 34367
    - 34678
    - 35031
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mukul975/Anthropic-Cybersecurity-Skills
  path: skills/implementing-container-image-minimal-base-with-distroless/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-container-image-minimal-base-with-distroless
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/implementing-container-image-minimal-base-with-distroless
  extra_files:
    - LICENSE
    - assets/template.md
    - references/api-reference.md
    - references/standards.md
    - references/workflows.md
    - scripts/agent.py
    - scripts/process.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Implementing Container Image Minimal Base with Distroless
## Overview

Google distroless images contain only your application and its runtime dependencies, without package managers, shells, or other programs found in standard Linux distributions. By eliminating unnecessary OS components, distroless images achieve up to 95% reduction in attack surface compared to traditional base images like ubuntu or debian. Major projects including Kubernetes itself, Knative, and Tekton use distroless images in production. As of 2025, Docker also offers Hardened Images (DHI) as an open-source alternative for minimal container bases.


## When to Use

- When deploying or configuring implementing container image minimal base with distroless capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Docker 20.10+ or compatible container build tool (Buildah, Kaniko)
- Multi-stage Dockerfile knowledge
- Application compiled as a static binary or with runtime bundled
- Container registry for image storage

## Available Distroless Images

| Image | Use Case | Size |
|-------|----------|------|
| `gcr.io/distroless/static-debian12` | Statically compiled binaries (Go, Rust) | ~2MB |
| `gcr.io/distroless/base-debian12` | Dynamically linked binaries needing glibc | ~20MB |
| `gcr.io/distroless/cc-debian12` | C/C++ applications needing libstdc++ | ~25MB |
| `gcr.io/distroless/java21-debian12` | Java 21 applications | ~220MB |
| `gcr.io/distroless/python3-debian12` | Python 3 applications | ~50MB |
| `gcr.io/distroless/nodejs22-debian12` | Node.js 22 applications | ~130MB |

## Multi-Stage Build Patterns

### Go Application

```dockerfile
# Build stage
FROM golang:1.22-bookworm AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /server ./cmd/server

# Runtime stage - static distroless
FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=builder /server /server
USER nonroot:nonroot
ENTRYPOINT ["/server"]
```

### Java Application

```dockerfile
# Build stage
FROM maven:3.9-eclipse-temurin-21 AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

# Runtime stage - Java distroless
FROM gcr.io/distroless/java21-debian12:nonroot
COPY --from=builder /app/target/app.jar /app.jar
USER nonroot:nonroot
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Python Application

```dockerfile
# Build stage
FROM python:3.12-bookworm AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir --target=/deps -r requirements.txt
COPY . .

# Runtime stage - Python distroless
FROM gcr.io/distroless/python3-debian12:nonroot
WORKDIR /app
COPY --from=builder /deps /deps
COPY --from=builder /app /app
ENV PYTHONPATH=/deps
USER nonroot:nonroot
ENTRYPOINT ["python3", "/app/main.py"]
```

### Node.js Application

```dockerfile
# Build stage
FROM node:22-bookworm AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .

# Runtime stage - Node distroless
FROM gcr.io/distroless/nodejs22-debian12:nonroot
WORKDIR /app
COPY --from=builder /app .
USER nonroot:nonroot
CMD ["server.js"]
```

## Security Benefits

### Attack Surface Comparison

| Component | Ubuntu | Alpine | Distroless |
|-----------|--------|--------|-----------|
| Shell (bash/sh) | Yes | Yes | No |
| Package manager | apt | apk | No |
| coreutils | Full | BusyBox | No |
| curl/wget | Yes | Yes | No |
| User management | Yes | Yes | No |
| Known CVEs (typical) | 50-200+ | 5-20 | 0-5 |
| Image size (base) | ~77MB | ~7MB | ~2-20MB |

### Security Implications

- **No shell**: Attackers cannot exec into containers to run commands
- **No package manager**: Cannot install additional tools or malware
- **No coreutils**: No `cat`, `ls`, `find`, `curl` for reconnaissance
- **Minimal CVEs**: Fewer packages means fewer vulnerabilities to patch
- **Non-root by default**: `:nonroot` tag runs as UID 65534

## Debugging Distroless Containers

Since distroless has no shell, use these techniques for debugging:

### Debug Image Variant

```dockerfile
# Use debug variant in non-production environments only
FROM gcr.io/distroless/base-debian12:debug
# Includes busybox shell at /busybox/sh
```

```bash
# Exec into debug variant
kubectl exec -it pod-name -- /busybox/sh
```

### Ephemeral Debug Containers (Kubernetes 1.25+)

```bash
# Attach a debug container with full tooling
kubectl debug -it pod-name --image=busybox:1.36 --target=app-container
```

### Crane/Dive for Image Inspection

```bash
# Inspect image layers without running
crane export gcr.io/distroless/static-debian12 - | tar -tf - | head -50

# Analyze image layers
dive gcr.io/distroless/static-debian12
```

## Image Scanning Results

Typical vulnerability comparison using Trivy:

```bash
# Scan Ubuntu-based image
trivy image myapp:ubuntu
# Result: 47 vulnerabilities (3 CRITICAL, 12 HIGH)

# Scan Distroless-based image
trivy image myapp:distroless
# Result: 2 vulnerabilities (0 CRITICAL, 0 HIGH)
```

## References

- [GoogleContainerTools/distroless GitHub](https://github.com/GoogleContainerTools/distroless)
- [Distroless Images - Docker Documentation](https://docs.docker.com/dhi/core-concepts/distroless/)
- [Alpine, Distroless, or Scratch? - Google Cloud](https://medium.com/google-cloud/alpine-distroless-or-scratch-caac35250e0b)
- [Docker Hardened Images](https://www.infoq.com/news/2025/12/docker-hardened-images/)
