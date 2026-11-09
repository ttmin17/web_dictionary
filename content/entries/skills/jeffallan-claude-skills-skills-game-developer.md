---
slug: jeffallan-claude-skills-skills-game-developer
name: game-developer
tagline: Use when building game systems, implementing Unity/Unreal Engine
  features, or optimizing game performance. Invoke to implement ECS
  architecture, confi
summary: 1. Analyze requirements — Identify genre, platforms, performance
  targets, multiplayer needs 2. Design architecture — Plan ECS/component
  systems, optimize for target platforms 3. Implement — Build core mechanics,
  graph...
categories:
  - media-creative
tags:
  - ai-agents
  - claude
  - claude-code
  - claude-marketplace
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: Jeffallan/claude-skills
  subpath: skills/game-developer
  official_vendor: false
  license: MIT
signals:
  stars: 12283
  last_commit: 2026-10-30T18:00:19Z
  stars_delta_7d: 54
  stars_growth_pct: 0.4
  trending_score: 54.24
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11937
    - 12062
    - 12229
    - 12283
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Jeffallan/claude-skills
  path: skills/game-developer/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:45.251Z
  truncated: false
type: agent_skill
skill:
  skill_name: game-developer
  description: "Use when building game systems, implementing Unity/Unreal Engine
    features, or optimizing game performance. Invoke to implement ECS
    architecture, configure physics systems and colliders, set up multiplayer
    networking with lag compensation, optimize frame rates to 60+ FPS targets,
    develop shaders, or apply game design patterns such as object pooling and
    state machines. Trigger keywords: Unity, Unreal Engine, game development,
    ECS architecture, game physics, multiplayer networking, game optimization,
    shader programming, game AI."
  folder_path: skills/game-developer
  extra_files:
    - references/ecs-patterns.md
    - references/multiplayer-networking.md
    - references/performance-optimization.md
    - references/unity-patterns.md
    - references/unreal-cpp.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jeffallan-claude-skills
---

# Game Developer
## Core Workflow

1. **Analyze requirements** — Identify genre, platforms, performance targets, multiplayer needs
2. **Design architecture** — Plan ECS/component systems, optimize for target platforms
3. **Implement** — Build core mechanics, graphics, physics, AI, networking
4. **Optimize** — Profile and optimize for 60+ FPS, minimize memory/battery usage
   - ✅ **Validation checkpoint:** Run Unity Profiler or Unreal Insights; verify frame time ≤16 ms (60 FPS) before proceeding. Identify and resolve CPU/GPU bottlenecks iteratively.
5. **Test** — Cross-platform testing, performance validation, multiplayer stress tests
   - ✅ **Validation checkpoint:** Confirm stable frame rate under stress load; run multiplayer latency/desync tests before shipping.

## Reference Guide

Load detailed guidance based on context:

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Unity Development | `references/unity-patterns.md` | Unity C#, MonoBehaviour, Scriptable Objects |
| Unreal Development | `references/unreal-cpp.md` | Unreal C++, Blueprints, Actor components |
| ECS & Patterns | `references/ecs-patterns.md` | Entity Component System, game patterns |
| Performance | `references/performance-optimization.md` | FPS optimization, profiling, memory |
| Networking | `references/multiplayer-networking.md` | Multiplayer, client-server, lag compensation |

## Constraints

### MUST DO
- Target 60+ FPS on all platforms
- Use object pooling for frequent instantiation
- Implement LOD systems for optimization
- Profile performance regularly (CPU, GPU, memory)
- Use async loading for resources
- Implement proper state machines for game logic
- Cache component references (avoid GetComponent in Update)
- Use delta time for frame-independent movement

### MUST NOT DO
- Instantiate/Destroy in tight loops or Update()
- Skip profiling and performance testing
- Use string comparisons for tags (use CompareTag)
- Allocate memory in Update/FixedUpdate loops
- Ignore platform-specific constraints (mobile, console)
- Use Find methods in Update loops
- Hardcode game values (use ScriptableObjects/data files)

## Output Templates

When implementing game features, provide:
1. Core system implementation (ECS component, MonoBehaviour, or Actor)
2. Associated data structures (ScriptableObjects, structs, configs)
3. Performance considerations and optimizations
4. Brief explanation of architecture decisions

## Key Code Patterns

### Object Pooling (Unity C#)
```csharp
public class ObjectPool<T> where T : Component
{
    private readonly Queue<T> _pool = new();
    private readonly T _prefab;
    private readonly Transform _parent;

    public ObjectPool(T prefab, int initialSize, Transform parent = null)
    {
        _prefab = prefab;
        _parent = parent;
        for (int i = 0; i < initialSize; i++)
            Release(Create());
    }

    public T Get()
    {
        T obj = _pool.Count > 0 ? _pool.Dequeue() : Create();
        obj.gameObject.SetActive(true);
        return obj;
    }

    public void Release(T obj)
    {
        obj.gameObject.SetActive(false);
        _pool.Enqueue(obj);
    }

    private T Create() => Object.Instantiate(_prefab, _parent);
}
```

### Component Caching (Unity C#)
```csharp
public class PlayerController : MonoBehaviour
{
    // Cache all component references in Awake — never call GetComponent in Update
    private Rigidbody _rb;
    private Animator _animator;
    private PlayerInput _input;

    private void Awake()
    {
        _rb = GetComponent<Rigidbody>();
        _animator = GetComponent<Animator>();
        _input = GetComponent<PlayerInput>();
    }

    private void FixedUpdate()
    {
        // Use cached references; use deltaTime for frame-independence
        Vector3 move = _input.MoveDirection * (speed * Time.fixedDeltaTime);
        _rb.MovePosition(_rb.position + move);
    }
}
```

### State Machine (Unity C#)
```csharp
public abstract class State
{
    public abstract void Enter();
    public abstract void Tick(float deltaTime);
    public abstract void Exit();
}

public class StateMachine
{
    private State _current;

    public void TransitionTo(State next)
    {
        _current?.Exit();
        _current = next;
        _current.Enter();
    }

    public void Tick(float deltaTime) => _current?.Tick(deltaTime);
}

// Usage example
public class IdleState : State
{
    private readonly Animator _animator;
    public IdleState(Animator animator) => _animator = animator;
    public override void Enter() => _animator.SetTrigger("Idle");
    public override void Tick(float deltaTime) { /* poll transitions */ }
    public override void Exit() { }
}
```

Maintained by [@jeffallan](https://github.com/jeffallan), Principal Consultant at [Synergetic Solutions](https://synergetic.solutions)

[Documentation](https://jeffallan.github.io/claude-skills/skills/specialized/game-developer/)
