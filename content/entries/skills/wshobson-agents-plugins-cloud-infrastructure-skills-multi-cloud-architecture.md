---
slug: wshobson-agents-plugins-cloud-infrastructure-skills-multi-cloud-architecture
name: multi-cloud-architecture
tagline: Design multi-cloud architectures using a decision framework to select
  and integrate services across AWS, Azure, GCP, and OCI. Use when building
  multi-
summary: Design cloud-agnostic architectures and make informed decisions about
  service selection across cloud providers.
categories:
  - cloud-infra
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
  subpath: plugins/cloud-infrastructure/skills/multi-cloud-architecture
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
  path: plugins/cloud-infrastructure/skills/multi-cloud-architecture/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.193Z
  truncated: false
type: agent_skill
skill:
  skill_name: multi-cloud-architecture
  description: Design multi-cloud architectures using a decision framework to
    select and integrate services across AWS, Azure, GCP, and OCI. Use when
    building multi-cloud systems, avoiding vendor lock-in, or leveraging
    best-of-breed services from multiple providers.
  folder_path: plugins/cloud-infrastructure/skills/multi-cloud-architecture
  extra_files:
    - references/multi-cloud-patterns.md
    - references/service-comparison.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Multi-Cloud Architecture
Decision framework and patterns for architecting applications across AWS, Azure, GCP, and OCI.

## Purpose

Design cloud-agnostic architectures and make informed decisions about service selection across cloud providers.

## When to Use

- Design multi-cloud strategies
- Migrate between cloud providers
- Select cloud services for specific workloads
- Implement cloud-agnostic architectures
- Optimize costs across providers

## Cloud Service Comparison

### Compute Services

| AWS     | Azure               | GCP             | OCI                 | Use Case           |
| ------- | ------------------- | --------------- | ------------------- | ------------------ |
| EC2     | Virtual Machines    | Compute Engine  | Compute             | IaaS VMs           |
| ECS     | Container Instances | Cloud Run       | Container Instances | Containers         |
| EKS     | AKS                 | GKE             | OKE                 | Kubernetes         |
| Lambda  | Functions           | Cloud Functions | Functions           | Serverless         |
| Fargate | Container Apps      | Cloud Run       | Container Instances | Managed containers |

### Storage Services

| AWS     | Azure           | GCP             | OCI            | Use Case       |
| ------- | --------------- | --------------- | -------------- | -------------- |
| S3      | Blob Storage    | Cloud Storage   | Object Storage | Object storage |
| EBS     | Managed Disks   | Persistent Disk | Block Volumes  | Block storage  |
| EFS     | Azure Files     | Filestore       | File Storage   | File storage   |
| Glacier | Archive Storage | Archive Storage | Archive Storage | Cold storage   |

### Database Services

| AWS         | Azure            | GCP           | OCI                 | Use Case        |
| ----------- | ---------------- | ------------- | ------------------- | --------------- |
| RDS         | SQL Database     | Cloud SQL     | MySQL HeatWave      | Managed SQL     |
| DynamoDB    | Cosmos DB        | Firestore     | NoSQL Database      | NoSQL           |
| Aurora      | PostgreSQL/MySQL | Cloud Spanner | Autonomous Database | Distributed SQL |
| ElastiCache | Cache for Redis  | Memorystore   | OCI Cache           | Caching         |

**Reference:** See `references/service-comparison.md` for complete comparison

## Multi-Cloud Patterns

### Pattern 1: Single Provider with DR

- Primary workload in one cloud
- Disaster recovery in another
- Database replication across clouds
- Automated failover

### Pattern 2: Best-of-Breed

- Use best service from each provider
- AI/ML on GCP
- Enterprise apps on Azure
- Regulated data platforms on OCI
- General compute on AWS

### Pattern 3: Geographic Distribution

- Serve users from nearest cloud region
- Data sovereignty compliance
- Global load balancing
- Regional failover

### Pattern 4: Cloud-Agnostic Abstraction

- Kubernetes for compute
- PostgreSQL for database
- S3-compatible storage (MinIO)
- Open source tools

## Cloud-Agnostic Architecture

### Use Cloud-Native Alternatives

- **Compute:** Kubernetes (EKS/AKS/GKE/OKE)
- **Database:** PostgreSQL/MySQL (RDS/SQL Database/Cloud SQL/MySQL HeatWave)
- **Message Queue:** Apache Kafka or managed streaming (MSK/Event Hubs/Confluent/OCI Streaming)
- **Cache:** Redis (ElastiCache/Azure Cache/Memorystore/OCI Cache)
- **Object Storage:** S3-compatible API
- **Monitoring:** Prometheus/Grafana
- **Service Mesh:** Istio/Linkerd

### Abstraction Layers

```
Application Layer
    ↓
Infrastructure Abstraction (Terraform)
    ↓
Cloud Provider APIs
    ↓
AWS / Azure / GCP / OCI
```

## Cost Comparison

### Compute Pricing Factors

- **AWS:** On-demand, Reserved, Spot, Savings Plans
- **Azure:** Pay-as-you-go, Reserved, Spot
- **GCP:** On-demand, Committed use, Preemptible
- **OCI:** Pay-as-you-go, annual commitments, burstable/flexible shapes, preemptible instances

### Cost Optimization Strategies

1. Use reserved/committed capacity (30-70% savings)
2. Leverage spot/preemptible instances
3. Right-size resources
4. Use serverless for variable workloads
5. Optimize data transfer costs
6. Implement lifecycle policies
7. Use cost allocation tags
8. Monitor with cloud cost tools

**Reference:** See `references/multi-cloud-patterns.md`

## Migration Strategy

### Phase 1: Assessment

- Inventory current infrastructure
- Identify dependencies
- Assess cloud compatibility
- Estimate costs

### Phase 2: Pilot

- Select pilot workload
- Implement in target cloud
- Test thoroughly
- Document learnings

### Phase 3: Migration

- Migrate workloads incrementally
- Maintain dual-run period
- Monitor performance
- Validate functionality

### Phase 4: Optimization

- Right-size resources
- Implement cloud-native services
- Optimize costs
- Enhance security

## Best Practices

1. **Use infrastructure as code** (Terraform/OpenTofu)
2. **Implement CI/CD pipelines** for deployments
3. **Design for failure** across clouds
4. **Use managed services** when possible
5. **Implement comprehensive monitoring**
6. **Automate cost optimization**
7. **Follow security best practices**
8. **Document cloud-specific configurations**
9. **Test disaster recovery** procedures
10. **Train teams** on multiple clouds


## Related Skills

- `terraform-module-library` - For IaC implementation
- `cost-optimization` - For cost management
- `hybrid-cloud-networking` - For connectivity
