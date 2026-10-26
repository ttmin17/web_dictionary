---
slug: wshobson-agents-plugins-frontend-mobile-development-skills-react-native-architecture
name: react-native-architecture
tagline: "Build production React Native apps with Expo, navigation, native
  modules, offline sync, and cross-platform patterns. Use when developing mobile
  apps, "
summary: "- Starting a new React Native or Expo project - Implementing complex
  navigation patterns - Integrating native modules and platform APIs - Building
  offline-first mobile applications - Optimizing React Native performanc..."
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
  subpath: plugins/frontend-mobile-development/skills/react-native-architecture
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
  path: plugins/frontend-mobile-development/skills/react-native-architecture/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.197Z
  truncated: false
type: agent_skill
skill:
  skill_name: react-native-architecture
  description: Build production React Native apps with Expo, navigation, native
    modules, offline sync, and cross-platform patterns. Use when developing
    mobile apps, implementing native integrations, or architecting React Native
    projects.
  folder_path: plugins/frontend-mobile-development/skills/react-native-architecture
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# React Native Architecture
Production-ready patterns for React Native development with Expo, including navigation, state management, native modules, and offline-first architecture.

## When to Use This Skill

- Starting a new React Native or Expo project
- Implementing complex navigation patterns
- Integrating native modules and platform APIs
- Building offline-first mobile applications
- Optimizing React Native performance
- Setting up CI/CD for mobile releases

## Core Concepts

### 1. Project Structure

```
src/
├── app/                    # Expo Router screens
│   ├── (auth)/            # Auth group
│   ├── (tabs)/            # Tab navigation
│   └── _layout.tsx        # Root layout
├── components/
│   ├── ui/                # Reusable UI components
│   └── features/          # Feature-specific components
├── hooks/                 # Custom hooks
├── services/              # API and native services
├── stores/                # State management
├── utils/                 # Utilities
└── types/                 # TypeScript types
```

### 2. Expo vs Bare React Native

| Feature            | Expo           | Bare RN        |
| ------------------ | -------------- | -------------- |
| Setup complexity   | Low            | High           |
| Native modules     | EAS Build      | Manual linking |
| OTA updates        | Built-in       | Manual setup   |
| Build service      | EAS            | Custom CI      |
| Custom native code | Config plugins | Direct access  |

## Quick Start

```bash
# Create new Expo project
npx create-expo-app@latest my-app -t expo-template-blank-typescript

# Install essential dependencies
npx expo install expo-router expo-status-bar react-native-safe-area-context
npx expo install @react-native-async-storage/async-storage
npx expo install expo-secure-store expo-haptics
```

```typescript
// app/_layout.tsx
import { Stack } from 'expo-router'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { QueryProvider } from '@/providers/QueryProvider'

export default function RootLayout() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </ThemeProvider>
    </QueryProvider>
  )
}
```

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

### Do's

- **Use Expo** - Faster development, OTA updates, managed native code
- **FlashList over FlatList** - Better performance for long lists
- **Memoize components** - Prevent unnecessary re-renders
- **Use Reanimated** - 60fps animations on native thread
- **Test on real devices** - Simulators miss real-world issues

### Don'ts

- **Don't inline styles** - Use StyleSheet.create for performance
- **Don't fetch in render** - Use useEffect or React Query
- **Don't ignore platform differences** - Test on both iOS and Android
- **Don't store secrets in code** - Use environment variables
- **Don't skip error boundaries** - Mobile crashes are unforgiving
