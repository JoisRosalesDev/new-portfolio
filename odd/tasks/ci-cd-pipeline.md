# Feature: CI/CD Pipeline y Testing Suite

**Feature Identity**: `odd/tasks/ci-cd-pipeline.md`
**Engram Mirror**: `odd/ci-cd-pipeline/tasks` (Mirror pending: Engram MCP unavailable in session)
**Status**: Completed
**Mode**: Direct inline (Astro static portfolio with GitHub Actions & Vitest)

## Objetivo
Implementar una tubería automatizada de CI/CD para el portafolio en Astro con GitHub Actions, respaldada por una suite de pruebas automatizadas (análisis estático de tipos con `@astrojs/check` y pruebas unitarias de datos y SEO con `vitest`), asegurando que ningún cambio defectuoso llegue a producción en Vercel.

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~180-220 lines |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single unit |
| Delivery strategy | single-pr |
| Chain strategy | single-pr |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: single-pr
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Focused test command | Runtime harness | Rollback boundary |
|------|------|-----------|----------------------|-----------------|-------------------|
| 1 | Setup test tools, data & SEO tests, build smoke and CI workflow | Single PR | `pnpm run check && pnpm run test && pnpm run build` | GitHub Actions runner / local terminal | Revert workflow and test files |

## Alcance
- Dependencias y scripts: `@astrojs/check`, `typescript`, `@types/node`, `vitest` en `package.json`.
- Configuración de testing: `vitest.config.ts` para resolución de módulos y TypeScript con alias `@/*`.
- Pruebas unitarias:
  - `tests/data/portfolio.test.ts`: Validación de integridad de datos personales, experiencia, proyectos, habilidades y URLs.
  - `tests/seo/schema.test.ts`: Validación de metadatos SEO y estructura de JSON-LD (`generatePersonSchema` y `generateJsonLd`).
- Automatización CI:
  - `.github/workflows/ci.yml`: Workflow para validar tipos (`check`), tests (`test`) y compilación (`build`) en cada push y PR hacia `main`.

## Tareas

### Phase 1: Tooling & Setup
- [x] 1.1 Instalar dependencias de desarrollo `@astrojs/check`, `typescript`, `@types/node` y `vitest` y configurar scripts en `package.json` (`check`, `test`, `test:watch`)
- [x] 1.2 Crear `vitest.config.ts` con soporte para alias de rutas (`src/*`)

### Phase 2: Pruebas Unitarias (Data & SEO)
- [x] 2.1 Crear `tests/data/portfolio.test.ts` para verificar integridad de datos (emails, URLs de GitHub/LinkedIn/CV, estructura de proyectos y experiencia)
- [x] 2.2 Crear `tests/seo/schema.test.ts` para verificar consistencia de metadatos y generación de Schema.org

### Phase 3: Pipeline de CI (GitHub Actions)
- [x] 3.1 Crear `.github/workflows/ci.yml` configurado para ejecutar `pnpm install`, `pnpm run check`, `pnpm run test` y `pnpm run build` en pushes y pull requests a `main`

### Phase 4: Verificación Integral
- [x] 4.1 Ejecutar suite completa localmente (`pnpm run check`, `pnpm run test`, `pnpm run build`) y registrar evidencia

## Evidencia de Verificación

### 1. Typecheck (`pnpm run check`)
```
$ astro check
16:11:49 [types] Generated 81ms
16:11:49 [check] Getting diagnostics for Astro files in C:\Users\rosal\OneDrive\Documentos\Dev\new-portfolio...
Result (28 files): 
- 0 errors
- 0 warnings
- 0 hints
```
Exit code: 0

### 2. Unit Tests (`pnpm run test`)
```
$ vitest run

 RUN  v5.0.3 C:/Users/rosal/OneDrive/Documentos/Dev/new-portfolio

 ✓ tests/data/portfolio.test.ts (13 tests) 8ms
 ✓ tests/seo/schema.test.ts (3 tests) 5ms

 Test Files  2 passed (2)
      Tests  16 passed (16)
   Start at  16:11:57
   Duration  221ms (transform 63%, import 19%, worker 10%, tests 8%)
```
Exit code: 0

### 3. Build (`pnpm run build`)
```
$ astro build
16:12:04 [types] Generated 64ms
16:12:04 [build] output: "static"
16:12:04 [build] mode: "static"
16:12:04 [build] directory: C:\Users\rosal\OneDrive\Documentos\Dev\new-portfolio\dist\
16:12:04 [build] Collecting build info...
16:12:04 [build] ✓ Completed in 100ms.
16:12:04 [build] Building static entrypoints...
16:12:04 [vite] ✓ built in 338ms
16:12:04 [vite] ✓ built in 87ms
16:12:04 [build] Rearranging server assets...

 generating static routes 
16:12:04   ├─ /index.html (+20ms) 
16:12:04 ✓ Completed in 35ms.

16:12:04 [build] ✓ Completed in 508ms.
16:12:04 [build] 1 page(s) built in 613ms
16:12:04 [build] Complete!
```
Exit code: 0

### 4. Work-Unit Commit
- Commit: `4226718da8ce47cd9c341ac8b27b44fa61d5b483` (`feat/ci-cd-pipeline`)
- Message: `ci: setup vitest testing suite and github actions pipeline`

