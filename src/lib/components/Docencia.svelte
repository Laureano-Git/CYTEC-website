<!-- src/lib/components/Docencia.svelte -->
<script>
import { formacionData } from '$lib/datos.js';
</script>

<section class="seccion docencia-section" id="formacion" aria-labelledby="titulo-formacion">
<div class="contenedor">
    <header class="encabezado-seccion">
    <h2 id="titulo-formacion">{formacionData.titulo}</h2>
    <p class="subtitulo">{formacionData.subtitulo}</p>
    </header>

    <div class="grilla-dual">
    {#each formacionData.bloques as bloque}
        <article class="tarjeta-academica" id={bloque.id}>
        <div class="badge-academico">{bloque.badge}</div>
        <h3>{bloque.titulo}</h3>
        <p class="texto-descripcion">{bloque.cuerpo}</p>

        <dl class="datos-meta">
            {#each bloque.datosClave as item}
            <div class="meta-item">
                <dt>{item.etiqueta}:</dt>
                <dd>{item.valor}</dd>
            </div>
            {/each}
        </dl>
        </article>
    {/each}
    </div>
</div>
</section>

<style>
.docencia-section {
    scroll-margin-top: 80px;
    background-color: var(--gris-claro);
}

.encabezado-seccion {
    text-align: center;
    margin-bottom: 2.5rem;
}

.subtitulo {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--primario-oscuro);
    margin-top: -0.5rem;
}

  /* Disposición de 2 columnas balanceadas */
.grilla-dual {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

@media (max-width: 860px) {
    .grilla-dual {
    grid-template-columns: 1fr;
    }
}

.tarjeta-academica {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 2.25rem 2rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
    transition: transform var(--transicion), box-shadow var(--transicion);
}

.tarjeta-academica:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
}

.badge-academico {
    align-self: flex-start;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--primario);
    background-color: rgba(10, 127, 181, 0.08);
    padding: 0.35rem 0.75rem;
    border-radius: 9999px;
    margin-bottom: 1rem;
}

.tarjeta-academica h3 {
    color: var(--primario-oscuro);
    font-size: 1.3rem;
    margin: 0 0 1rem 0;
}

.texto-descripcion {
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--texto);
    margin: 0 0 1.5rem 0;
    flex-grow: 1;
}

  /* Lista de definiciones para los datos técnicos (A11y y Semántica) */
.datos-meta {
    margin: 0;
    padding-top: 1.25rem;
    border-top: 1px dashed var(--gris-borde);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.meta-item {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 0.88rem;
}

.meta-item dt {
    font-weight: 700;
    color: var(--texto);
}

.meta-item dd {
    margin: 0;
    color: var(--primario);
    font-weight: 600;
}
</style>