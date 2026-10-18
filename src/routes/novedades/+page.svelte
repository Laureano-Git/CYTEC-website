<!-- src/routes/novedades/+page.svelte -->
<!-- Si se modifica este archivo recordar modificar src/lib/componentes/novedades.svelte y la seccion novedades en datos.js -->
<script>
import { novedades } from '$lib/datos.js';

// Svelte 5: Estados reactivos para la paginación
let paginaActual = $state(1);
const articulosPorPagina = 3;

// Derivados reactivos automáticos
let totalPaginas = $derived(Math.ceil(novedades.length / articulosPorPagina));
let indiceInicio = $derived((paginaActual - 1) * articulosPorPagina);
let indiceFin = $derived(indiceInicio + articulosPorPagina);
let articulosVisibles = $derived(novedades.slice(indiceInicio, indiceFin));

function cambiarPagina(nuevaPagina) {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
    paginaActual = nuevaPagina;
      // Scroll suave hacia la cabecera al pasar de página
    if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }
}
</script>

<svelte:head>
<title>Novedades y Noticias — CYTEC La Plata</title>
<meta name="description" content="Noticias institucionales, avances tecnológicos y novedades en diagnóstico por imágenes de CYTEC." />
</svelte:head>

<!-- Hero Institucional de Novedades -->
<header class="novedades-hero">
<div class="contenedor">
    <nav class="breadcrumb" aria-label="Migas de pan">
    <a href="/">Inicio</a> <span>/</span>
    <strong>Novedades</strong>
    </nav>
    <span class="badge-seccion">Actualidad Médica</span>
    <h1>Novedades y Artículos</h1>
    <p class="hero-subtitulo">Avances científicos, eventos de la comunidad, novedades tecnológicas e información para la salud.</p>
</div>
</header>

<main class="contenedor seccion-novedades">
<!-- Grilla de Tarjetas de Noticias -->
<div class="grilla tres">
    {#each articulosVisibles as item (item.slug)}
    <article class="card-noticia">
        <div class="portada-noticia">
            <!-- 📸 Imagen real de la publicación -->
            <img 
                src={item.imagen} 
                alt={item.titulo} 
                loading="lazy" 
                decoding="async" 
            />
            <div class="etiquetas-flotantes">
                <span class="etiqueta-fecha">{item.fecha}</span>
                <span class="etiqueta-categoria">{item.categoria}</span>
            </div>
        </div>
        <div class="cuerpo-noticia">
        <h2>{item.titulo}</h2>
        <p>{item.resumen}</p>
        <a href="/novedades/{item.slug}" class="btn-leer-mas">
            Leer más <span>→</span>
        </a>
        </div>
    </article>
    {/each}
</div>

<!-- Barra de Paginación Numérica Interactiva -->
{#if totalPaginas > 1}
    <nav class="paginador-contenedor" aria-label="Paginación de novedades">
    <!-- Botón Anterior -->
    <button 
        class="btn-nav" 
        disabled={paginaActual === 1}
        onclick={() => cambiarPagina(paginaActual - 1)}
        aria-label="Página anterior"
    >
        ‹ Anterior
    </button>

    <!-- Botones Numéricos Dinámicos -->
    <div class="numeros-lista">
        {#each Array(totalPaginas) as _, i}
        {@const num = i + 1}
        <button 
            class="btn-numero" 
            class:activo={paginaActual === num}
            onclick={() => cambiarPagina(num)}
            aria-current={paginaActual === num ? 'page' : undefined}
        >
            {num}
        </button>
        {/each}
    </div>

    <!-- Botón Siguiente -->
    <button 
        class="btn-nav" 
        disabled={paginaActual === totalPaginas}
        onclick={() => cambiarPagina(paginaActual + 1)}
        aria-label="Página siguiente"
    >
        Siguiente ›
    </button>
    </nav>
{/if}
</main>

<style>
.novedades-hero {
    background: linear-gradient(135deg, var(--primario) 0%, var(--primario-oscuro) 100%);
    color: var(--blanco);
    padding: 3.5rem 0 3rem;
    margin-bottom: 3.5rem;
}
.breadcrumb { font-size: 0.85rem; margin-bottom: 1.25rem; opacity: 0.9; }
.breadcrumb a { color: var(--blanco); text-decoration: underline; }
.breadcrumb span { margin: 0 0.5rem; }
.badge-seccion {
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.35rem 0.85rem;
    border-radius: 9999px;
    margin-bottom: 0.75rem;
}
.novedades-hero h1 { font-size: clamp(2.2rem, 4.5vw, 3rem); margin: 0 0 0.5rem 0; }
.hero-subtitulo { font-size: 1.15rem; max-width: 750px; margin: 0; opacity: 0.95; line-height: 1.5; }
.seccion-novedades { margin-bottom: 6rem; }

.card-noticia {
    background: var(--blanco);
    border-radius: var(--radio);
    overflow: hidden;
    border: 1px solid var(--gris-borde);
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  }
.card-noticia:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(10, 127, 181, 0.12);
}
.card-noticia:hover .portada-noticia img {
    transform: scale(1.04);
}

.portada-noticia {
    height: 190px;
    position: relative;
    overflow: hidden;
    background: var(--gris-claro);
}

.portada-noticia img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform var(--transicion);
}

.etiquetas-flotantes {
    position: absolute;
    top: 0.85rem;
    left: 0.85rem;
    right: 0.85rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
}

.etiqueta-fecha {
    background: var(--acento);
    color: var(--blanco);
    padding: 0.25rem 0.65rem;
    border-radius: 4px;
    font-weight: 700;
    font-size: 0.78rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.25);
}

.etiqueta-categoria {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    color: var(--blanco);
    padding: 0.25rem 0.65rem;
    border-radius: 4px;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
}

.cuerpo-noticia { padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; }
.cuerpo-noticia h2 { font-size: 1.2rem; color: var(--primario-oscuro); margin: 0 0 0.75rem 0; line-height: 1.35; }
.cuerpo-noticia p { font-size: 0.92rem; line-height: 1.6; color: var(--texto); margin: 0 0 1.5rem 0; flex-grow: 1; }

.btn-leer-mas {
    align-self: flex-start;
    color: var(--primario);
    font-weight: 700;
    font-size: 0.88rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: color var(--transicion), transform var(--transicion);
}
.btn-leer-mas:hover { color: var(--primario-oscuro); transform: translateX(4px); }

.paginador-contenedor { display: flex; justify-content: center; align-items: center; gap: 0.75rem; margin-top: 4rem; flex-wrap: wrap; }
.numeros-lista { display: flex; gap: 0.4rem; }
.btn-numero, .btn-nav {
    font-family: var(--fuente);
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    color: var(--texto);
    border-radius: var(--radio);
    cursor: pointer;
    font-weight: 600;
    transition: all var(--transicion);
}
.btn-numero { width: 42px; height: 42px; display: grid; place-items: center; font-size: 0.95rem; }
.btn-numero:hover, .btn-nav:hover:not(:disabled) { border-color: var(--primario); color: var(--primario); background: var(--gris-claro); }
.btn-numero.activo { background: var(--primario); color: var(--blanco); border-color: var(--primario); }
.btn-nav { padding: 0 1.25rem; height: 42px; font-size: 0.88rem; }
.btn-nav:disabled { opacity: 0.4; cursor: not-allowed; }
</style>