# CYTEC La Plata — Plataforma Web Institucional

Sitio web y catálogo de servicios médicos para centro de diagnóstico por imágenes de alta complejidad.
Desarrollado con arquitectura moderna orientada a datos utilizando **SvelteKit** y **Svelte 5 (Runes)**.

---

## 🚀 Características Principales

- **Arquitectura Data-Driven:** Contenido clínico, equipamiento, sedes y noticias centralizados en `src/lib/datos.js` para facilitar el mantenimiento y la escalabilidad.
- **Rutas Dinámicas (`/servicios/[slug]`):** Plantilla unificada para estudios de alta complejidad (PET-CT, Tomografía, RMN, Ecografía, Espirometría, etc.) con preparación previa y equipamiento técnico.
- **Módulos Especializados:**
  - `/bebe` — Unidad Pediátrica Integral con pautas familiares y protocolos ALARA.
  - `/deportes` — Diagnóstico avanzado en traumatología y medicina del deporte.
  - `/coberturas` — Buscador interactivo en tiempo real de obras sociales y prepagas.
  - `/novedades` — Blog institucional con paginación reactiva y vistas de lectura completa (`/novedades/[slug]`).
- **Navegación e Interacción:**
  - Barra superior (*TopBar*) con accesos directos tripartitos y líneas prioritarias de WhatsApp.
  - Menú multinivel responsive (dropdown en desktop y hamburguesa accesible en mobile).
  - Paneles laterales fijos (*Sticky Sidebar*) que acompañan el scroll del usuario sin generar espacios en blanco.

---

## 🛠️ Stack Tecnológico

- **Framework:** [SvelteKit](https://kit.svelte.dev/) (v2)
- **Motor Reactivo:** [Svelte 5](https://svelte.dev/) con *Runes* (`$state`, `$derived`, `$props`).
- **Herramienta de Construcción:** [Vite](https://vitejs.dev/)
- **Estilos:** CSS Vanilla modular basado en variables de diseño (*Design Tokens* en `app.css`), sin frameworks pesados para garantizar tiempos de carga inmediatos.

---

## 💻 Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/Laureano-Git/CYTEC-website.git](https://github.com/Laureano-Git/CYTEC-website.git)
   cd CYTEC-website
