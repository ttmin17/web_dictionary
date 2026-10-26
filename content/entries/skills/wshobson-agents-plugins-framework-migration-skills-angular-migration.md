---
slug: wshobson-agents-plugins-framework-migration-skills-angular-migration
name: angular-migration
tagline: Migrate from AngularJS to Angular using hybrid mode, incremental
  component rewriting, and dependency injection updates. Use when upgrading
  AngularJS a
summary: "- Migrating AngularJS (1.x) applications to Angular (2+) - Running
  hybrid AngularJS/Angular applications - Converting directives to components -
  Modernizing dependency injection - Migrating routing systems - Updating..."
categories:
  - agent-frameworks
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
  subpath: plugins/framework-migration/skills/angular-migration
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
  path: plugins/framework-migration/skills/angular-migration/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.196Z
  truncated: false
type: agent_skill
skill:
  skill_name: angular-migration
  description: Migrate from AngularJS to Angular using hybrid mode, incremental
    component rewriting, and dependency injection updates. Use when upgrading
    AngularJS applications, planning framework migrations, or modernizing legacy
    Angular code.
  folder_path: plugins/framework-migration/skills/angular-migration
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

# Angular Migration
Master AngularJS to Angular migration, including hybrid apps, component conversion, dependency injection changes, and routing migration.

## When to Use This Skill

- Migrating AngularJS (1.x) applications to Angular (2+)
- Running hybrid AngularJS/Angular applications
- Converting directives to components
- Modernizing dependency injection
- Migrating routing systems
- Updating to latest Angular versions
- Implementing Angular best practices

## Migration Strategies

### 1. Big Bang (Complete Rewrite)

- Rewrite entire app in Angular
- Parallel development
- Switch over at once
- **Best for:** Small apps, green field projects

### 2. Incremental (Hybrid Approach)

- Run AngularJS and Angular side-by-side
- Migrate feature by feature
- ngUpgrade for interop
- **Best for:** Large apps, continuous delivery

### 3. Vertical Slice

- Migrate one feature completely
- New features in Angular, maintain old in AngularJS
- Gradually replace
- **Best for:** Medium apps, distinct features

## Hybrid App Setup

```typescript
// main.ts - Bootstrap hybrid app
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { UpgradeModule } from "@angular/upgrade/static";
import { AppModule } from "./app/app.module";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    const upgrade = platformRef.injector.get(UpgradeModule);
    // Bootstrap AngularJS
    upgrade.bootstrap(document.body, ["myAngularJSApp"], { strictDi: true });
  });
```

```typescript
// app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";

@NgModule({
  imports: [BrowserModule, UpgradeModule],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    // Bootstrapped manually in main.ts
  }
}
```

## Component Migration

### AngularJS Controller → Angular Component

```javascript
// Before: AngularJS controller
angular
  .module("myApp")
  .controller("UserController", function ($scope, UserService) {
    $scope.user = {};

    $scope.loadUser = function (id) {
      UserService.getUser(id).then(function (user) {
        $scope.user = user;
      });
    };

    $scope.saveUser = function () {
      UserService.saveUser($scope.user);
    };
  });
```

```typescript
// After: Angular component
import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-user",
  template: `
    <div>
      <h2>{{ user.name }}</h2>
      <button (click)="saveUser()">Save</button>
    </div>
  `,
})
export class UserComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUser(1);
  }

  loadUser(id: number) {
    this.userService.getUser(id).subscribe((user) => {
      this.user = user;
    });
  }

  saveUser() {
    this.userService.saveUser(this.user);
  }
}
```

### AngularJS Directive → Angular Component

```javascript
// Before: AngularJS directive
angular.module("myApp").directive("userCard", function () {
  return {
    restrict: "E",
    scope: {
      user: "=",
      onDelete: "&",
    },
    template: `
      <div class="card">
        <h3>{{ user.name }}</h3>
        <button ng-click="onDelete()">Delete</button>
      </div>
    `,
  };
});
```

```typescript
// After: Angular component
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user-card",
  template: `
    <div class="card">
      <h3>{{ user.name }}</h3>
      <button (click)="delete.emit()">Delete</button>
    </div>
  `,
})
export class UserCardComponent {
  @Input() user: any;
  @Output() delete = new EventEmitter<void>();
}

// Usage: <app-user-card [user]="user" (delete)="handleDelete()"></app-user-card>
```

## Service Migration

```javascript
// Before: AngularJS service
angular.module("myApp").factory("UserService", function ($http) {
  return {
    getUser: function (id) {
      return $http.get("/api/users/" + id);
    },
    saveUser: function (user) {
      return $http.post("/api/users", user);
    },
  };
});
```

```typescript
// After: Angular service
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<any> {
    return this.http.get(`/api/users/${id}`);
  }

  saveUser(user: any): Observable<any> {
    return this.http.post("/api/users", user);
  }
}
```

## Dependency Injection Changes

### Downgrading Angular → AngularJS

```typescript
// Angular service
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class NewService {
  getData() {
    return "data from Angular";
  }
}

// Make available to AngularJS
import { downgradeInjectable } from "@angular/upgrade/static";

angular.module("myApp").factory("newService", downgradeInjectable(NewService));

// Use in AngularJS
angular.module("myApp").controller("OldController", function (newService) {
  console.log(newService.getData());
});
```

### Upgrading AngularJS → Angular

```typescript
// AngularJS service
angular.module('myApp').factory('oldService', function() {
  return {
    getData: function() {
      return 'data from AngularJS';
    }
  };
});

// Make available to Angular
import { InjectionToken } from '@angular/core';

export const OLD_SERVICE = new InjectionToken<any>('oldService');

@NgModule({
  providers: [
    {
      provide: OLD_SERVICE,
      useFactory: (i: any) => i.get('oldService'),
      deps: ['$injector']
    }
  ]
})

// Use in Angular
@Component({...})
export class NewComponent {
  constructor(@Inject(OLD_SERVICE) private oldService: any) {
    console.log(this.oldService.getData());
  }
}
```

## Routing Migration

```javascript
// Before: AngularJS routing
angular.module("myApp").config(function ($routeProvider) {
  $routeProvider
    .when("/users", {
      template: "<user-list></user-list>",
    })
    .when("/users/:id", {
      template: "<user-detail></user-detail>",
    });
});
```

```typescript
// After: Angular routing
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "users", component: UserListComponent },
  { path: "users/:id", component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Additional patterns and templates

More detailed templates and worked examples live in `references/details.md`. Read that file for the full pattern library.
