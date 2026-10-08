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
### Phase 5: CI Hardening (Estándar de la Industria & Skill)
- [x] 5.1 Resolver vulnerabilidades en dependencias y habilitar `pnpm audit --audit-level=high`
- [x] 5.2 Incorporar métricas de cobertura de código con `@vitest/coverage-v8` (`pnpm run test:coverage`)
- [x] 5.3 Excluir directorio `coverage/` en `.gitignore` y `tsconfig.json` para evitar interferencias con `astro check`
- [x] 5.4 Actualizar `.github/workflows/ci.yml` con los quality gates adicionales

## Evidencia de Verificación

### 1. Security Audit (`pnpm audit --audit-level=high`)
```
No known vulnerabilities found
```
Exit code: 0

### 2. Typecheck (`pnpm run check`)
```
$ astro check
Result (28 files): 
- 0 errors
- 0 warnings
- 0 hints
```
Exit code: 0

### 3. Unit Tests & Coverage (`pnpm run test:coverage`)
```
$ vitest run --coverage
Test Files  2 passed (2)
     Tests  16 passed (16)
Coverage:
- Stmts: 100%
- Branch: 90%
- Funcs: 100%
- Lines: 100%
```
Exit code: 0

### 4. Build (`pnpm run build`)
```
$ astro build
Complete! 1 page(s) built in ~800ms
```
Exit code: 0

### 5. Work-Unit Commits
- `84df921`: `ci: setup vitest testing suite and github actions pipeline`
- `f9896fa` & `196afa8`: `fix(ci): pin pnpm version 11 and use packageManager canonical source`


