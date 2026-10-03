# Feature: Actualizar Portfolio con Nuevo CV

**Feature Identity**: `odd/tasks/actualizar-cv-portfolio.md`
**Engram Mirror**: `odd/actualizar-cv-portfolio/tasks` (Mirror pending: Engram MCP unavailable in session)
**Status**: Completed
**Mode**: Standard (Astro static site, verified via build and types)

## Objetivo
Actualizar de forma minuciosa y fidedigna todo el contenido del portafolio web basándose en el nuevo currículum `CV_Jois_Rosales_FullStack.md`, reflejando con exactitud los títulos, logros con métricas, tecnologías incorporadas, estado de titulación y enlaces actualizados.

## Alcance
- `src/data/portfolio.ts`: Datos personales, experiencia con métricas, proyectos, habilidades e idiomas.
- `public/CV_Jois_Rosales_FullStack.md`: Copia pública accesible del currículum.
- `src/layouts/Layout.astro`: Metadata SEO y Schema.org JSON-LD sincronizados.
- `src/components/organisms/HeroSection.astro` & `EducationSection.astro`: Botón de acceso al CV y sección de idiomas.

## Tareas

- [x] Task 1: Sincronizar datos estructurados en `src/data/portfolio.ts` (perfil, experiencia, proyectos, habilidades e idiomas)
- [x] Task 2: Publicar archivo del CV en `public/CV_Jois_Rosales_FullStack.md` y actualizar `personalInfo.cvUrl`
- [x] Task 3: Actualizar SEO y JSON-LD en `src/layouts/Layout.astro` con nuevo perfil y enlace de LinkedIn
- [x] Task 4: Agregar botón de visualización de CV en `HeroSection.astro` y bloque de idiomas en `EducationSection.astro`
- [x] Task 5: Ejecutar build de producción (`pnpm run build`) y verificar integridad total

## Evidencia de Verificación
- `pnpm run build`: Compilación limpia en 995ms sin errores de tipos ni advertencias.
- Validación de contenido en HTML generado (`dist/index.html`): Métricas de 70 incidencias, 100 correos Redis, titulación Duoc UC, idiomas y nuevo URL de LinkedIn (`in/jois-rosales`) verificadas exitosamente.
