---
slug: affaan-m-ecc-pi-core-skills-android-clean-architecture
name: android-clean-architecture
tagline: Clean Architecture patterns for Android and Kotlin Multiplatform
  projects — module structure, dependency rules, UseCases, Repositories, and
  data layer
summary: "- Structuring Android or KMP project modules - Implementing UseCases,
  Repositories, or DataSources - Designing data flow between layers (domain,
  data, presentation) - Setting up dependency injection with Koin or Hilt..."
categories:
  - productivity-ops
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: pi/core/skills/android-clean-architecture
  official_vendor: false
  license: MIT
signals:
  stars: 295040
  last_commit: 2026-11-02T04:56:08Z
  stars_delta_7d: 5968
  stars_growth_pct: 2.1
  trending_score: 6091.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 278380
    - 283494
    - 289072
    - 295040
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: pi/core/skills/android-clean-architecture/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:05.416Z
  truncated: false
type: agent_skill
skill:
  skill_name: android-clean-architecture
  description: Clean Architecture patterns for Android and Kotlin Multiplatform
    projects — module structure, dependency rules, UseCases, Repositories, and
    data layer patterns. Use when structuring modules, layers, or data flow in
    an Android or KMP project.
  folder_path: pi/core/skills/android-clean-architecture
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Android Clean Architecture
Clean Architecture patterns for Android and KMP projects. Covers module boundaries, dependency inversion, UseCase/Repository patterns, and data layer design with Room, SQLDelight, and Ktor.

## When to Activate

- Structuring Android or KMP project modules
- Implementing UseCases, Repositories, or DataSources
- Designing data flow between layers (domain, data, presentation)
- Setting up dependency injection with Koin or Hilt
- Working with Room, SQLDelight, or Ktor in a layered architecture

## Module Structure

### Recommended Layout

```
project/
├── app/                  # Android entry point, DI wiring, Application class
├── core/                 # Shared utilities, base classes, error types
├── domain/               # UseCases, domain models, repository interfaces (pure Kotlin)
├── data/                 # Repository implementations, DataSources, DB, network
├── presentation/         # Screens, ViewModels, UI models, navigation
├── design-system/        # Reusable Compose components, theme, typography
└── feature/              # Feature modules (optional, for larger projects)
    ├── auth/
    ├── settings/
    └── profile/
```

### Dependency Rules

```
app → presentation, domain, data, core
presentation → domain, design-system, core
data → domain, core
domain → core (or no dependencies)
core → (nothing)
```

**Critical**: `domain` must NEVER depend on `data`, `presentation`, or any framework. It contains pure Kotlin only.

## Domain Layer

### UseCase Pattern

Each UseCase represents one business operation. Use `operator fun invoke` for clean call sites:

```kotlin
class GetItemsByCategoryUseCase(
    private val repository: ItemRepository
) {
    suspend operator fun invoke(category: String): Result<List<Item>> {
        return repository.getItemsByCategory(category)
    }
}

// Flow-based UseCase for reactive streams
class ObserveUserProgressUseCase(
    private val repository: UserRepository
) {
    operator fun invoke(userId: String): Flow<UserProgress> {
        return repository.observeProgress(userId)
    }
}
```

### Domain Models

Domain models are plain Kotlin data classes — no framework annotations:

```kotlin
data class Item(
    val id: String,
    val title: String,
    val description: String,
    val tags: List<String>,
    val status: Status,
    val category: String
)

enum class Status { DRAFT, ACTIVE, ARCHIVED }
```

### Repository Interfaces

Defined in domain, implemented in data:

```kotlin
interface ItemRepository {
    suspend fun getItemsByCategory(category: String): Result<List<Item>>
    suspend fun saveItem(item: Item): Result<Unit>
    fun observeItems(): Flow<List<Item>>
}
```

## Data Layer

### Repository Implementation

Coordinates between local and remote data sources:

```kotlin
class ItemRepositoryImpl(
    private val localDataSource: ItemLocalDataSource,
    private val remoteDataSource: ItemRemoteDataSource
) : ItemRepository {

    override suspend fun getItemsByCategory(category: String): Result<List<Item>> {
        return runCatching {
            val remote = remoteDataSource.fetchItems(category)
            localDataSource.insertItems(remote.map { it.toEntity() })
            localDataSource.getItemsByCategory(category).map { it.toDomain() }
        }
    }

    override suspend fun saveItem(item: Item): Result<Unit> {
        return runCatching {
            localDataSource.insertItems(listOf(item.toEntity()))
        }
    }

    override fun observeItems(): Flow<List<Item>> {
        return localDataSource.observeAll().map { entities ->
            entities.map { it.toDomain() }
        }
    }
}
```

### Mapper Pattern

Keep mappers as extension functions near the data models:

```kotlin
// In data layer
fun ItemEntity.toDomain() = Item(
    id = id,
    title = title,
    description = description,
    tags = tags.split("|"),
    status = Status.valueOf(status),
    category = category
)

fun ItemDto.toEntity() = ItemEntity(
    id = id,
    title = title,
    description = description,
    tags = tags.joinToString("|"),
    status = status,
    category = category
)
```

### Room Database (Android)

```kotlin
@Entity(tableName = "items")
data class ItemEntity(
    @PrimaryKey val id: String,
    val title: String,
    val description: String,
    val tags: String,
    val status: String,
    val category: String
)

@Dao
interface ItemDao {
    @Query("SELECT * FROM items WHERE category = :category")
    suspend fun getByCategory(category: String): List<ItemEntity>

    @Upsert
    suspend fun upsert(items: List<ItemEntity>)

    @Query("SELECT * FROM items")
    fun observeAll(): Flow<List<ItemEntity>>
}
```

### SQLDelight (KMP)

```sql
-- Item.sq
CREATE TABLE ItemEntity (
    id TEXT NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    tags TEXT NOT NULL,
    status TEXT NOT NULL,
    category TEXT NOT NULL
);

getByCategory:
SELECT * FROM ItemEntity WHERE category = ?;

upsert:
INSERT OR REPLACE INTO ItemEntity (id, title, description, tags, status, category)
VALUES (?, ?, ?, ?, ?, ?);

observeAll:
SELECT * FROM ItemEntity;
```

### Ktor Network Client (KMP)

```kotlin
class ItemRemoteDataSource(private val client: HttpClient) {

    suspend fun fetchItems(category: String): List<ItemDto> {
        return client.get("api/items") {
            parameter("category", category)
        }.body()
    }
}

// HttpClient setup with content negotiation
val httpClient = HttpClient {
    install(ContentNegotiation) { json(Json { ignoreUnknownKeys = true }) }
    install(Logging) { level = LogLevel.HEADERS }
    defaultRequest { url("https://api.example.com/") }
}
```

## Dependency Injection

### Koin (KMP-friendly)

```kotlin
// Domain module
val domainModule = module {
    factory { GetItemsByCategoryUseCase(get()) }
    factory { ObserveUserProgressUseCase(get()) }
}

// Data module
val dataModule = module {
    single<ItemRepository> { ItemRepositoryImpl(get(), get()) }
    single { ItemLocalDataSource(get()) }
    single { ItemRemoteDataSource(get()) }
}

// Presentation module
val presentationModule = module {
    viewModelOf(::ItemListViewModel)
    viewModelOf(::DashboardViewModel)
}
```

### Hilt (Android-only)

```kotlin
@Module
@InstallIn(SingletonComponent::class)
abstract class RepositoryModule {
    @Binds
    abstract fun bindItemRepository(impl: ItemRepositoryImpl): ItemRepository
}

@HiltViewModel
class ItemListViewModel @Inject constructor(
    private val getItems: GetItemsByCategoryUseCase
) : ViewModel()
```

## Error Handling

### Result/Try Pattern

Use `Result<T>` or a custom sealed type for error propagation:

```kotlin
sealed interface Try<out T> {
    data class Success<T>(val value: T) : Try<T>
    data class Failure(val error: AppError) : Try<Nothing>
}

sealed interface AppError {
    data class Network(val message: String) : AppError
    data class Database(val message: String) : AppError
    data object Unauthorized : AppError
}

// In ViewModel — map to UI state
viewModelScope.launch {
    when (val result = getItems(category)) {
        is Try.Success -> _state.update { it.copy(items = result.value, isLoading = false) }
        is Try.Failure -> _state.update { it.copy(error = result.error.toMessage(), isLoading = false) }
    }
}
```

## Convention Plugins (Gradle)

For KMP projects, use convention plugins to reduce build file duplication:

```kotlin
// build-logic/src/main/kotlin/kmp-library.gradle.kts
plugins {
    id("org.jetbrains.kotlin.multiplatform")
}

kotlin {
    androidTarget()
    iosX64(); iosArm64(); iosSimulatorArm64()
    sourceSets {
        commonMain.dependencies { /* shared deps */ }
        commonTest.dependencies { implementation(kotlin("test")) }
    }
}
```

Apply in modules:

```kotlin
// domain/build.gradle.kts
plugins { id("kmp-library") }
```

## Anti-Patterns to Avoid

- Importing Android framework classes in `domain` — keep it pure Kotlin
- Exposing database entities or DTOs to the UI layer — always map to domain models
- Putting business logic in ViewModels — extract to UseCases
- Using `GlobalScope` or unstructured coroutines — use `viewModelScope` or structured concurrency
- Fat repository implementations — split into focused DataSources
- Circular module dependencies — if A depends on B, B must not depend on A

## References

See skill: `compose-multiplatform-patterns` for UI patterns.
See skill: `kotlin-coroutines-flows` for async patterns.
