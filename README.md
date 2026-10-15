# CYTEC La Plata — Sitio institucional (SvelteKit + Svelte 5)
Contenido basado en cyteclaplata.com.ar; formato inspirado en cimed.com.ar.

## Ejecutar
    npm install
    npm run dev      # http://localhost:5173

## Estructura
- `src/app.css` — tokens de diseño (colores, tipografía, espaciado) y rejilla.
- `src/lib/datos.js` — todo el contenido editable (menú, sedes, servicios…).
- `src/lib/components/` — TopBar, Header, Slider, Modal, Valores, Servicios, Testimonios, Novedades, Footer, Icono.
- `src/routes/+layout.svelte` — marco común; `+page.svelte` — Home.

## Pendientes
Colocar fotos reales en `static/img/` (slide-1.jpg…), logo oficial y páginas internas por servicio (`src/routes/servicios/[slug]`).
