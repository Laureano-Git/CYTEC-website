<!-- src/routes/servicios/[slug]/+page.svelte -->
<script>
import { WHATSAPP_TURNOS_LA_PLATA } from '$lib/datos.js';

let { data } = $props();
let servicio = $derived(data.servicio);
</script>

<svelte:head>
<title>{servicio.titulo} — CYTEC La Plata</title>
<meta name="description" content={servicio.subtitulo} />
</svelte:head>

<!-- Cabecera de la Página -->
<header class="servicio-hero">
<div class="contenedor">
    <nav class="breadcrumb" aria-label="Migas de pan">
    <a href="/">Inicio</a> <span>/</span>
    <a href="/#servicios">Servicios</a> <span>/</span>
    <strong>{servicio.titulo}</strong>
    </nav>
    <h1>{servicio.titulo}</h1>
    <p class="hero-subtitulo">{servicio.subtitulo}</p>
</div>
</header>

<div class="contenedor contenido-servicio">
<div class="layout-detalle">
    <!-- Columna Principal -->
    <section class="detalle-principal">
    
    <!-- Introducción / Definición -->
    <article class="bloque-seccion">
        <h2>¿En qué consiste el estudio?</h2>
        {#each servicio.descripcion as parrafo}
        <p>{parrafo}</p>
        {/each}
    </article>

    <!-- Donde realizamos el SERVICIO -->
    {#if servicio.localidad}
        <article class="bloque-seccion">
            <h2>Realizamos estudios de {servicio.titulo} en:</h2>
            <ul class="lista-checks">
                {#each servicio.localidad as item}
                <li>
                    <span class="punto-check" aria-hidden="true">-</span>
                    <span>{item}</span>
                </li>
                {/each}
            </ul>
        </article>
    {/if}

    <!-- Tipos de estudios que realizamos del SERVICIO -->
    {#if servicio.tipo && servicio.tipo.length > 0}
    <article class="bloque-seccion">
    
    <!-- Evaluamos si el primer elemento es un objeto (Caso A) o un string plano (Caso B) -->
    {#if typeof servicio.tipo[0] === 'object'}
    
        <h2>{servicio.titulo} que realizamos</h2>
    
        {#each servicio.tipo as grupo}
            <div class="categoria-servicio">
            <h3>{grupo.titulo}</h3> 
            <ul class="lista-checks">
                {#each grupo.subtipos as subtipo}
                <li>
                    <span class="punto-check" aria-hidden="true">-</span>
                    <span>{subtipo}</span>
                </li>
                {/each}
            </ul>
            </div>
        {/each}

        {:else}
    
    <!-- Caso B: El array contiene strings directos -->
        <h2>Realizamos estudios de {servicio.titulo} en:</h2>
        <ul class="lista-checks">
            {#each servicio.tipo as item}
            <li>
                <span class="punto-check" aria-hidden="true">-</span>
                <span>{item}</span>
            </li>
            {/each}
        </ul>
        {/if}</article>
    {/if}

    <!-- 1. Aplicaciones Principales -->
    {#if servicio.aplicacionesPrincipales}
        <article class="bloque-seccion">
        <h2>Aplicaciones Principales</h2>
        <ul class="lista-checks">
            {#each servicio.aplicacionesPrincipales as item}
            <li>
                <span class="punto-check" aria-hidden="true">✔</span>
                <span>{item}</span>
            </li>
            {/each}
        </ul>
        </article>
    {/if}

    <!-- 2. Aplicaciones Clínicas por Especialidad -->
    {#if servicio.aplicacionesClinicas}
        <article class="bloque-seccion">
        <h2>Aplicaciones Clínicas</h2>
        <div class="grilla-clinica">
            {#each servicio.aplicacionesClinicas as area}
            <div class="tarjeta-clinica">
                <header class="header-clinica">
                <!-- Subtitulo para cada Especialidad -->
                <!--<span class="badge-area">Especialidad</span>-->
                <h3>{area.area}</h3>
                </header>
                <p class="desc-clinica">{area.descripcion}</p>
                <ul class="lista-items-clinica">
                {#each area.items as subitem}
                    <li>{subitem}</li>
                {/each}
                </ul>
            </div>
            {/each}
        </div>
        </article>
    {/if}

    <!-- 3. PET-CT + RM (Fusión de Imágenes) -->
    {#if servicio.fusionPETRM}
        <article class="bloque-destacado-hibrido">
        <div class="etiqueta-hibrida">Innovación Médica</div>
        <h2>{servicio.fusionPETRM.titulo}</h2>
        <p>{servicio.fusionPETRM.descripcion}</p>
        </article>
    {/if}

    <!-- 4. Preparación Previa del Paciente -->
    {#if servicio.preparacion}
        <article class="bloque-seccion">
        <h2>Preparación Previa del Paciente</h2>
        <div class="caja-preparacion">
            <header class="header-preparacion">
            <span class="icono-alerta" aria-hidden="true">ℹ</span>
            <strong>Indicaciones obligatorias antes de concurrir a su turno:</strong>
            </header>
            <ol class="lista-pasos">
            {#each servicio.preparacion as paso}
                <li>{paso}</li>
            {/each}
            </ol>
        </div>
        </article>
    {/if}

    </section>

    <!-- Barra Lateral: Tarjeta Visual + Tarjeta de Turnos -->
    <aside class="sidebar-lateral" aria-label="Información del equipamiento y turnos">
    <!-- 📸 1. Tarjeta de Equipamiento Tecnológico (Optimizado para Web Performance) -->
    {#if servicio.equipoImagen}
        <article class="tarjeta-equipo">
        <div class="marco-foto">
            <img 
            src={servicio.equipoImagen.src} 
            alt={servicio.equipoImagen.alt}
            loading="lazy"
            decoding="async"
            width="340"
            height="210"
            />
            <span class="etiqueta-foto">Tecnología CYTEC</span>
        </div>
        <div class="pie-foto">
            <h3>Nuestro Equipamiento</h3>
            <p>{servicio.equipoImagen.modelo}</p>
        </div>
        </article>
    {/if}
    <!-- 📅 2. Tarjeta Sticky de Solicitud de Turnos -->
    <div class="tarjeta-turno">
        <span class="badge-atencion">Atención Especializada</span>
        <h3>Solicitá tu Turno</h3>
        <p>Coordiná tu estudio con antelación enviando tu prescripción médica.</p>
        <a 
        href={WHATSAPP_TURNOS_LA_PLATA} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn btn-whatsapp"
        >
        Coordinar por WhatsApp
        </a>

        <div class="info-adicional">
        <div class="dato-util">
            <strong>Sede:</strong> Sede Central La Plata (Calle 8 Nº 607)
        </div>
        <div class="dato-util">
            <strong>Requisitos:</strong> DNI físico, orden médica y carnet de cobertura.
        </div>
        <div class="dato-util">
            <strong>Informes:</strong> Disponibles en línea mediante Portal PACS.
        </div>
        </div>
    </div>

    </aside>
</div>
</div>

<style>
.servicio-hero {
    background: linear-gradient(135deg, var(--primario) 0%, var(--primario-oscuro) 100%);
    color: var(--blanco);
    padding: 3.5rem 0 3rem;
    margin-bottom: 3.5rem;
}

.breadcrumb {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
    opacity: 0.85;
}

.breadcrumb a {
    color: var(--blanco);
    text-decoration: underline;
}

.breadcrumb span {
    margin: 0 0.5rem;
}

.servicio-hero h1 {
    margin: 0 0 0.6rem 0;
    font-size: clamp(2.2rem, 4.5vw, 3rem);
    letter-spacing: 0.02em;
}

  .hero-subtitulo {
    font-size: 1.15rem;
    max-width: 850px;
    margin: 0;
    opacity: 0.95;
    line-height: 1.5;
}

  .contenido-servicio {
    margin-bottom: 5rem;
  }

  .layout-detalle {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 3.5rem;
    align-items: start;
}

.detalle-principal {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.bloque-seccion h2 {
    font-size: 1.45rem;
    color: var(--primario-oscuro);
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--gris-borde);
}

.bloque-seccion p {
    font-size: 1.02rem;
    line-height: 1.75;
    color: var(--texto);
    margin-bottom: 1rem;
}

.lista-checks {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
}

.lista-checks li {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    font-size: 1rem;
    line-height: 1.55;
    color: var(--texto);
}

.punto-check {
    color: var(--primario);
    font-weight: 800;
    font-size: 1.1rem;
    line-height: 1.3;
}

.grilla-clinica {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

.tarjeta-clinica {
    background: var(--gris-claro);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 1.75rem 1.5rem;
    border-left: 5px solid var(--primario);
}

.header-clinica {
    margin-bottom: 0.75rem;
}

/*.badge-area {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
    color: var(--primario);
    background: rgba(10, 127, 181, 0.12);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    display: inline-block;
    margin-bottom: 0.35rem;
}*/

.header-clinica h3 {
    margin: 0;
    font-size: 1.25rem;
    color: var(--primario-oscuro);}
.desc-clinica {
    font-size: 0.95rem;
    color: var(--texto);
    margin-bottom: 1rem !important;}
.lista-items-clinica {
    margin: 0;
    padding-left: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;}
.lista-items-clinica li {
    font-size: 0.92rem;
    line-height: 1.5;
    color: var(--texto);}

.bloque-destacado-hibrido {
    background: linear-gradient(135deg, rgba(10, 127, 181, 0.08) 0%, rgba(7, 95, 135, 0.04) 100%);
    border: 1px solid var(--primario);
    border-radius: var(--radio);
    padding: 2.25rem;
}

.etiqueta-hibrida {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 800;
    color: var(--primario);
    margin-bottom: 0.5rem;
}
.bloque-destacado-hibrido h2 {
    font-size: 1.4rem;
    color: var(--primario-oscuro);
    margin: 0 0 1rem 0;}
.bloque-destacado-hibrido p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.7;
    color: var(--texto);}
.caja-preparacion {
    background: #fffdf5;
    border: 1px solid #f6e0b5;
    border-radius: var(--radio);
    padding: 1.75rem 2rem;}
.header-preparacion {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    color: #8c5d00;
    font-size: 0.95rem;}

.icono-alerta {
    display: inline-grid;
    place-items: center;
    width: 24px;
    height: 24px;
    background: #8c5d00;
    color: var(--blanco);
    border-radius: 50%;
    font-size: 0.8rem;
    font-weight: 700;
}

.lista-pasos {
    margin: 0;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.lista-pasos li {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #4d3800;
}

/* BARRA LATERAL (SIDEBAR) */
  .sidebar-lateral {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    position: sticky;
    top: 90px;
  }

  /* 📸 Estilos de la Tarjeta de Equipamiento */
  .tarjeta-equipo {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    overflow: hidden;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
}

.marco-foto {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    background: var(--gris-claro);
    overflow: hidden;
}

.marco-foto img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform var(--transicion);
}

.tarjeta-equipo:hover .marco-foto img {
    transform: scale(1.04);
}

.etiqueta-foto {
    position: absolute;
    bottom: 0.75rem;
    left: 0.75rem;
    background: rgba(10, 127, 181, 0.85);
    backdrop-filter: blur(4px);
    color: var(--blanco);
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
}

.pie-foto {
    padding: 1.15rem 1.25rem;
    background: var(--blanco);
}

.pie-foto h3 {
    margin: 0 0 0.25rem 0;
    font-size: 0.98rem;
    color: var(--primario-oscuro);
}

.pie-foto p {
    margin: 0;
    font-size: 0.84rem;
    color: var(--texto);
    line-height: 1.4;
    opacity: 0.85;
}

  /* Tarjeta Sticky de Turnos */
.tarjeta-turno {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 1.75rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.badge-atencion {
    display: inline-block;
    font-size: 0.72rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--primario);
    background: var(--gris-claro);
    padding: 0.3rem 0.65rem;
    border-radius: 4px;
    margin-bottom: 0.75rem;
}
.tarjeta-turno h3 {
    color: var(--primario-oscuro);
    font-size: 1.3rem;
    margin: 0 0 0.5rem 0;
}

.tarjeta-turno p {
    font-size: 0.88rem;
    color: var(--texto);
    margin-bottom: 1.25rem;
    line-height: 1.5;
}

.btn-whatsapp {
    display: block;
    text-align: center;
    width: 100%;
    padding: 0.85rem 1rem;
    background: var(--acento);
    color: var(--blanco);
    font-weight: 700;
    border-radius: var(--radio);
    text-decoration: none;
    letter-spacing: 0.03em;
    transition: background var(--transicion), transform var(--transicion);
}

.btn-whatsapp:hover {
    background: var(--acento-oscuro);
    transform: translateY(-2px);
}

.info-adicional {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--gris-borde);
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
}

.dato-util {
    font-size: 0.82rem;
    line-height: 1.45;
    color: #4a5568;
}

.dato-util strong {
    color: var(--texto);
}

@media (max-width: 960px) {
    .layout-detalle {
    grid-template-columns: 1fr;
    gap: 3rem;
    }

    .sidebar-lateral {
    position: static;
    }
}
</style>