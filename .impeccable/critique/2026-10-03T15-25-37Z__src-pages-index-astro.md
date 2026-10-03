---
target: src/pages/index.astro
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\rosal\\OneDrive\\Documentos\\Dev\\new-portfolio\\src\\pages\\index.astro"
target_fingerprint: "sha256:c14b620bc06e2c55fa255e7883a2ab41528b268d821faa59e62806dda9d91188"
target_path: "C:\\Users\\rosal\\OneDrive\\Documentos\\Dev\\new-portfolio\\src\\pages\\index.astro"
timestamp: 2026-10-03T15-25-37Z
slug: src-pages-index-astro
closed: true
---
# Design Critique: Portfolio Web (Single-Page)

**Target**: `src/pages/index.astro`  
**Method**: dual-agent (A: af60abc3-5849-4537-8b79-7cffc7f6ac42 · B: d8337482-7247-4a36-8079-8b14db3ef243)  
**Surface Mode**: Persuade / Experience  

## Design Health Score

| # | Heuristic | Score | Key Issue / Justification |
|---|-----------|:-----:|---------------------------|
| 1 | **Visibility of System Status** | 3/4 | Barra de progreso superior y scroll spy sólidos; enlaces externos sin indicación auditiva explícita. |
| 2 | **Match System / Real World** | 2/4 | Disonancia de seniority: Logo dice "Full-Stack Architect" mientras el Hero y CV dicen "Junior Developer". "Astro 7" en footer confunde. |
| 3 | **User Control and Freedom** | 2/4 | Drawer móvil no cierra con Escape ni clic exterior; certificados sin zoom/lightbox. |
| 4 | **Consistency and Standards** | 2/4 | Subtítulo va arriba del título en proyectos y abajo en educación; tarjeta de WhatsApp usa protocolo telefónico `tel:`. |
| 5 | **Error Prevention** | 3/4 | Sin formularios propensos a error; enlace de WhatsApp telefónico genera error en escritorio. |
| 6 | **Recognition Rather Than Recall** | 3/4 | Navegación clara; muro de 34 badges sin sub-agrupación ni anclaje visual. |
| 7 | **Flexibility and Efficiency** | **n/a** | *Superficie Persuade/Experience: layout de lectura de una sola página sin flujos transaccionales.* |
| 8 | **Aesthetic and Minimalist Design** | 3/4 | Paleta obsidian/emerald elegante; bio del hero densa y 34 badges generan sobrecarga cognitiva. |
| 9 | **Error Recovery** | 3/4 | Sitio estático robusto sin mutaciones propensas a fallos. |
| 10 | **Help and Documentation** | **n/a** | *Superficie de portafolio personal: autoexplicativo.* |
| **Total** | | **21/32** | **Acceptable (65.6%)** *(Máximo aplicable: 32)* |

## Design Specificity Verdict

**Evaluación Cualitativa**: El portafolio exhibe una arquitectura visual moderna y pulida (Dark Obsidian con acentos Cyber Emerald), pero sigue el arquetipo estándar de plantilla de desarrollador. El gran diferenciador de Jois —el flujo de **Spec-Driven Development (SDD) & Human-In-The-Loop (HITL)**— se encuentra oculto en badges de texto en lugar de vivirse en la interfaz mediante artefactos interactivos o diagramas arquitectónicos. Además, existe una disonancia de marca crítica: el logotipo proclama "Full-Stack Architect", lo cual genera desconfianza frente a reclutadores técnicos que evalúan a un desarrollador junior.

**Escaneo Determinista CLI**: 5 hallazgos reportados por el detector:
- 1x `gray-on-color` en `Button.astro:37` (`text-slate-950` sobre `bg-emerald-500`): Falso positivo técnico en contraste (8.22:1 AAA), pero tonalmente mejorable usando `text-emerald-950`.
- 3x `overused-font` en `Layout.astro` y `global.css`: Trío ubicuo de IA (Inter, Plus Jakarta Sans, JetBrains Mono).
- 1x `gradient-text` en `global.css:185`: Gradiente animado decorativo en el nombre del Hero (`.text-gradient-emerald`).

## Impresión General
Un portafolio estéticamente disciplinado y sobrio que supera con creces el promedio en cuanto a métricas reales y proyectos complejos (Pipelify, VAULT). Sin embargo, sufre de tres problemas clave: sobrecarga cognitiva en habilidades, fricción en conversión de contacto (WhatsApp telefónico) y disonancia de credibilidad en el seniority del logo.

## Fortalezas
1. **Disciplina de Color Obsidian**: Fondo `#090d16` y tarjetas `rgba(13, 19, 33, 0.82)` sin bordes blancos quemados ni saturación excesiva.
2. **Métricas de Impacto Técnico**: Puntos cuantitativos de alto valor (70 incidencias derivadas, 100 correos en colas Redis, 4 repositorios Dockerizados).
3. **Calibre de Proyectos**: Pipelify (ETL visual reactivo) y VAULT (OAuth con Prisma y PostgreSQL) demuestran destreza full-stack real.

## Problemas Prioritarios

- **[P1] Disonancia de Seniority en Marca Personal**
  - **Qué**: `Logo.astro` reza *"Full-Stack Architect"* mientras el Hero y el CV declaran *"Desarrollador Full-Stack Junior"*.
  - **Por qué importa**: Un Tech Lead (Alex) desconfía de inmediato al ver la palabra "Architect" en un perfil junior, catalogándolo de arrogante o poco riguroso.
  - **Arreglo**: Alinear el monograma a `"Software Engineer"` o `"Full-Stack Developer"`.
  - **Comando sugerido**: `/impeccable distill`

- **[P1] Fricción de Contacto en WhatsApp**
  - **Qué**: La tarjeta de WhatsApp usa `href="tel:+56931466378"`.
  - **Por qué importa**: En Chile y LatAm, WhatsApp es el canal preferido de reclutamiento. Un enlace `tel:` abre un marcador de voz que falla en escritorio y frustra a quien busca chatear.
  - **Arreglo**: Usar `https://wa.me/56931466378?text=Hola%20Jois,%20vi%20tu%20portafolio...` con target `_blank`.
  - **Comando sugerido**: `/impeccable shape`

- **[P2] Muro Cognitivo de 34 Badges en Habilidades**
  - **Qué**: Se muestran 34 etiquetas simultáneas sin sub-categorización ni anclas visuales.
  - **Por qué importa**: Rompe la regla de memoria de trabajo (≤4 ítems), forzando escaneo rápido sin retención.
  - **Arreglo**: Agrupar en sub-filas compactas (Core vs Secundarias) o por dominios técnicos claros.
  - **Comando sugerido**: `/impeccable distill`

- **[P2] Duplicación y Falta de Verificación en Educación**
  - **Qué**: El título Duoc UC se muestra en Educación y luego se duplica como tarjeta en Certificaciones. Las certificaciones no tienen enlaces de verificación externa ni modal de lectura.
  - **Por qué importa**: La redundancia resta seriedad y las miniaturas recortadas no permiten leer los certificados.
  - **Arreglo**: Eliminar la tarjeta redundante de título en la grilla; añadir modal lightbox o enlaces de verificación externa.
  - **Comando sugerido**: `/impeccable polish`

- **[P2] Degradación de Rendimiento en `pointermove` y A11y de Movimiento**
  - **Qué**: `Navbar.astro` ejecuta `getBoundingClientRect()` en todas las tarjetas en cada movimiento del mouse; GSAP en `index.astro` ignora `prefers-reduced-motion`.
  - **Por qué importa**: Causa layout thrashing en monitores de 120Hz/144Hz y pantallas táctiles, e incumple pautas WCAG para usuarios con trastornos vestibulares.
  - **Arreglo**: Throttlear el spotlight y respetar `prefersReducedMotion()` en el contexto GSAP.
  - **Comando sugerido**: `/impeccable optimize`

## Alertas por Arquetipo de Usuario (Personas)
- **Jordan (Reclutadora)**: Frustrada al hacer clic en WhatsApp desde la laptop porque el navegador intenta hacer una llamada telefónica en vez de abrir WhatsApp Web.
- **Alex (Tech Lead)**: Detecta "Full-Stack Architect" en el logo y "Astro 7" en el footer; sospecha de inflado de credenciales.
- **Casey (Reclutador Móvil)**: La tarjeta de habilidades es un scroll infinito de etiquetas diminutas; el menú móvil no se cierra al hacer clic fuera.

## Preguntas Provocativas
- ¿Qué pasaría si en lugar de listar SDD/HITL en badges de texto, mostramos un componente interactivo antes/después de un spec técnico a código?
- ¿Por qué arriesgar que un reclutador se vaya sin contactarte cuando un botón directo a WhatsApp Web acelera la entrevista?
