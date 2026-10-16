<!-- src/lib/components/Pacs.svelte -->
<script>
import { pacsData } from '$lib/datos.js';
</script>

<section class="seccion pacs-seccion" id="pacs" aria-labelledby="titulo-pacs">
<div class="contenedor">
    <header class="encabezado-seccion">
    <h2 id="titulo-pacs">{pacsData.titulo}</h2>
    <p class="subtitulo">{pacsData.subtitulo}</p>
    </header>

    <div class="pacs-intro">
    <p>{pacsData.introduccion}</p>
    </div>

    <!-- Grilla de Beneficios / Características del Sistema -->
    <div class="grilla tres pacs-grilla">
    {#each pacsData.caracteristicas as item}
        <article class="pacs-card">
        <div class="indicador-circulo" aria-hidden="true"></div>
        <h3>{item.titulo}</h3>
        <p>{item.descripcion}</p>
        </article>
    {/each}
    </div>

    <!-- Caja de Ingreso al Portal -->
    <aside class="pacs-cta" aria-label="Acceso al portal">
    <div class="cta-info">
        <h3>Portal de Estudios en Línea</h3>
        <p>{pacsData.acceso.mensaje}</p>
    </div>
    <a 
        href={pacsData.acceso.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn btn-pacs"
    >
        {pacsData.acceso.textoBoton} ↗
    </a>
    </aside>
</div>
</section>

<style>
.pacs-seccion {
    scroll-margin-top: 80px; /* Offset del Header fijo */
    background: var(--blanco);
}

.encabezado-seccion {
    text-align: center;
    margin-bottom: 1.5rem;
}

.subtitulo {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--primario-oscuro);
    max-width: 750px;
    margin: 0 auto;
}

.pacs-intro {
    max-width: 820px;
    margin: 0 auto 3rem;
    text-align: center;
}

.pacs-intro p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--texto);
    margin: 0;
}

.pacs-grilla {
    margin-bottom: 3rem;
}

.pacs-card {
    background: var(--gris-claro);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 2rem 1.5rem;
    position: relative;
    transition: transform var(--transicion), box-shadow var(--transicion);
}

.pacs-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.indicador-circulo {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primario);
    margin-bottom: 1rem;
}

.pacs-card h3 {
    font-size: 1.15rem;
    color: var(--primario-oscuro);
    margin: 0 0 0.5rem 0;
}

.pacs-card p {
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--texto);
    margin: 0;
}

  /* Banner de Conexión al Portal */
.pacs-cta {
    background: linear-gradient(135deg, var(--primario) 0%, var(--primario-oscuro) 100%);
    color: var(--blanco);
    border-radius: var(--radio);
    padding: 2.25rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    box-shadow: 0 8px 24px rgba(10, 127, 181, 0.2);
}

.cta-info h3 {
    color: var(--blanco);
    font-size: 1.35rem;
    margin: 0 0 0.35rem 0;
}

.cta-info p {
    margin: 0;
    font-size: 0.95rem;
    opacity: 0.92;
}

.btn-pacs {
    background: var(--blanco);
    color: var(--primario-oscuro);
    font-weight: 700;
    padding: 0.9rem 1.8rem;
    white-space: nowrap;
    border-radius: var(--radio);
}

.btn-pacs:hover {
    background: var(--gris-claro);
    color: var(--primario);
}

@media (max-width: 768px) {
    .pacs-cta {
    flex-direction: column;
    text-align: center;
    padding: 1.75rem;
    }

    .btn-pacs {
    width: 100%;
    text-align: center;
    }
}
</style>