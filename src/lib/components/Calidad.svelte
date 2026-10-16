<!-- src/lib/components/Calidad.svelte -->
<script>
import { calidadData } from '$lib/datos.js';
</script>

<section class="seccion calidad-section" id="calidad" aria-labelledby="titulo-calidad">
<div class="contenedor">
    <header class="encabezado-seccion">
    <h2 id="titulo-calidad">{calidadData.titulo}</h2>
    <p class="subtitulo">{calidadData.subtitulo}</p>
    </header>

    <!-- Tarjeta Principal de Certificación ISO -->
    <div class="banner-iso">
    <div class="iso-badge" aria-label="Certificación ISO">
        <span class="iso-norma">{calidadData.certificacion.norma}</span>
        <span class="iso-texto">{calidadData.certificacion.organismo}</span>
    </div>
    <div class="iso-contenido">
        {#each calidadData.declaracion as parrafo}
        <p>{parrafo}</p>
        {/each}
        <div class="sedes-badge">
        {#each calidadData.certificacion.sedes as sede}
            <span class="sede-pill">✓ {sede}</span>
        {/each}
        </div>
    </div>
    </div>

    <!-- Grilla de Principios / Política de Calidad -->
    <div class="politicas-header">
    <h3>Nuestra Política de Calidad</h3>
    </div>

    <div class="grilla tres">
    {#each calidadData.politicas as item, i}
        <article class="tarjeta-politica">
        <span class="numero-item" aria-hidden="true">0{i + 1}</span>
        <h4>{item.titulo}</h4>
        <p>{item.descripcion}</p>
        </article>
    {/each}
    </div>
</div>
</section>

<style>
.calidad-section {
    scroll-margin-top: 80px; /* Offset para el Header sticky */
    background: var(--blanco);
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

/* Banner de Certificación */
.banner-iso {
    background: var(--gris-claro);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 2.5rem;
    display: flex;
    gap: 2.5rem;
    align-items: center;
    margin-bottom: 3.5rem;
}

.iso-badge {
    background: var(--primario);
    color: var(--blanco);
    border-radius: var(--radio);
    padding: 1.75rem 1.5rem;
    text-align: center;
    min-width: 190px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(10, 127, 181, 0.25);
}

.iso-norma {
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: 0.05em;
}

.iso-texto {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-top: 0.25rem;
    opacity: 0.9;
}

.iso-contenido {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
}

.iso-contenido p {
    margin: 0;
    font-size: 0.98rem;
    line-height: 1.65;
    color: var(--texto);
}

.sedes-badge {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
}

.sede-pill {
    font-size: 0.8rem;
    font-weight: 600;
    background: var(--blanco);
    color: var(--primario-oscuro);
    border: 1px solid var(--gris-borde);
    padding: 0.35rem 0.75rem;
    border-radius: 9999px;
}

  /* Título de la política */
.politicas-header {
    text-align: center;
    margin-bottom: 2rem;
}

.politicas-header h3 {
    color: var(--primario);
    font-size: 1.25rem;
}

/* Tarjetas de Política */
.tarjeta-politica {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 1.75rem 1.5rem;
    position: relative;
    transition: transform var(--transicion), box-shadow var(--transicion), border-color var(--transicion);
}

.tarjeta-politica:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    border-color: var(--primario);
}

.numero-item {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primario);
    opacity: 0.75;
    display: block;
    margin-bottom: 0.5rem;
}

.tarjeta-politica h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--primario-oscuro);
}

.tarjeta-politica p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--texto);
    opacity: 0.9;
}

  /* Responsive: en móviles apilamos el banner ISO verticalmente */
@media (max-width: 768px) {
    .banner-iso {
    flex-direction: column;
    text-align: center;
    padding: 1.75rem;
    gap: 1.5rem;
    }

    .sedes-badge {
    justify-content: center;
    }
}
</style>