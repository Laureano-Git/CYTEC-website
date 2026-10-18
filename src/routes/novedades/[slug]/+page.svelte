<!-- src/routes/novedades/[slug]/+page.svelte -->
<script>
let { data } = $props();
let noticia = $derived(data.noticia);
</script>

<svelte:head>
<title>{noticia.titulo} — CYTEC La Plata</title>
<meta name="description" content={noticia.resumen} />
</svelte:head>

<header class="articulo-hero">
<div class="contenedor">
    <nav class="breadcrumb" aria-label="Migas de pan">
    <a href="/">Inicio</a> <span>/</span>
    <a href="/novedades">Novedades</a> <span>/</span>
    <strong>{noticia.categoria}</strong>
    </nav>
    <div class="meta-articulo">
    <span class="badge-fecha">{noticia.fecha}</span>
    <span class="badge-cat">{noticia.categoria}</span>
    </div>
    <h1>{noticia.titulo}</h1>
</div>
</header>

<article class="contenedor contenido-articulo">
<!-- 📸 Imagen destacada arriba de todo el cuerpo del texto -->
<div class="banner-destacado-articulo">
    <img 
    src={noticia.imagen} 
    alt={noticia.titulo}
    decoding="async" 
    />
</div>

<div class="cuerpo-lectura">
    {#each noticia.cuerpo as parrafo}
    <p>{parrafo}</p>
    {/each}

    <div class="pie-articulo">
    <a href="/novedades" class="btn btn-volver">← Volver a Novedades</a>
    </div>
</div>
</article>

<style>
.articulo-hero {
    background: linear-gradient(135deg, var(--primario) 0%, var(--primario-oscuro) 100%);
    color: var(--blanco);
    padding: 3.5rem 0 3rem;
    margin-bottom: 3rem;
}
.breadcrumb { font-size: 0.85rem; margin-bottom: 1.25rem; opacity: 0.9; }
.breadcrumb a { color: var(--blanco); text-decoration: underline; }
.breadcrumb span { margin: 0 0.5rem; }

.meta-articulo { display: flex; gap: 0.75rem; margin-bottom: 1rem; }
.badge-fecha {
    background: var(--acento);
    color: var(--blanco);
    padding: 0.25rem 0.7rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 700;
}
.badge-cat {
    background: rgba(255, 255, 255, 0.2);
    color: var(--blanco);
    padding: 0.25rem 0.7rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
}

.articulo-hero h1 {
    font-size: clamp(2rem, 4vw, 2.8rem);
    margin: 0;
    line-height: 1.25;
}

.contenido-articulo {
    max-width: 860px;
    margin-bottom: 6rem;
}

/* Marco de la imagen destacada superior */
.banner-destacado-articulo {
    width: 100%;
    max-height: 440px;
    border-radius: var(--radio);
    overflow: hidden;
    margin-bottom: 2.5rem;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    background: var(--gris-claro);
}

.banner-destacado-articulo img {
    width: 100%;
    height: 100%;
    max-height: 440px;
    object-fit: cover;
    display: block;
}

.cuerpo-lectura p {
    font-size: 1.1rem;
    line-height: 1.85;
    color: var(--texto);
    margin-bottom: 1.75rem;
}

.pie-articulo {
    margin-top: 3.5rem;
    padding-top: 2rem;
    border-top: 1px solid var(--gris-borde);
}

.btn-volver {
    display: inline-block;
}
</style>