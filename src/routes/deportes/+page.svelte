<!-- src/routes/deportes/+page.svelte -->
<script>
import { deportesData, WHATSAPP_TURNOS_LA_PLATA } from '$lib/datos.js';
</script>

<svelte:head>
<title>{deportesData.titulo} — CYTEC La Plata</title>
<meta name="description" content={deportesData.subtitulo} />
</svelte:head>

<!-- Hero con estilo dinámico y deportivo -->
<header class="deportes-hero">
<div class="contenedor">
    <nav class="breadcrumb" aria-label="Migas de pan">
    <a href="/">Inicio</a> <span>/</span>
    <strong>Deportes</strong>
    </nav>
    <span class="badge-deporte">Medicina & Diagnóstico Deportivo</span>
    <h1>{deportesData.titulo}</h1>
    <p class="hero-subtitulo">{deportesData.subtitulo}</p>
</div>
</header>

<div class="contenedor contenido-deportes">
<div class="layout-deportes">
    <!-- Columna Principal -->
    <main class="deportes-principal">
    
    <!-- Introducción / Propósito -->
    <article class="bloque-intro">
        <h2>Precisión diagnóstica para un retorno seguro al deporte</h2>
        {#each deportesData.introduccion as parrafo}
        <p>{parrafo}</p>
        {/each}
    </article>

    <!-- 3 Pilares del Área Deportiva -->
    <section class="seccion-pilares" aria-label="Pilares del área deportiva">
        <div class="grilla tres">
        {#each deportesData.pilares as pilar}
            <div class="tarjeta-pilar-deporte">
            <div class="icono-pilar" aria-hidden="true">⚡</div>
            <h3>{pilar.titulo}</h3>
            <p>{pilar.detalle}</p>
            </div>
        {/each}
        </div>
    </section>

    <!-- Tecnologías Diagnósticas Aplicadas -->
    <section class="seccion-tecnologias" aria-labelledby="titulo-estudios-dep">
        <h2 id="titulo-estudios-dep">Métodos Diagnósticos de Vanguardia</h2>
        <div class="grilla-estudios">
        {#each deportesData.estudiosDeportivos as estudio}
            <article class="tarjeta-estudio-deporte">
            <header class="header-estudio-dep">
                <span class="punto-deporte" aria-hidden="true"></span>
                <h3>{estudio.nombre}</h3>
            </header>
            <p>{estudio.descripcion}</p>
            </article>
        {/each}
        </div>
    </section>

    <!-- Lesiones Frecuentes por Categoría -->
    <section class="seccion-lesiones" aria-labelledby="titulo-lesiones">
        <h2 id="titulo-lesiones">Cuerpo médico</h2>
        <div class="grilla-lesiones">
        {#each deportesData.lesionesFrecuentes as bloque}
            <div class="tarjeta-lesion">
            <header class="header-lesion">
                <span class="badge-cat-lesion">Medico</span>
                <h3>{bloque.categoria}</h3>
            </header>
            <ul class="lista-lesiones">
                {#each bloque.items as item}
                <li>
                    <span class="tilde-check" aria-hidden="true">-</span>
                    <span>{item}</span>
                </li>
                {/each}
            </ul>
            </div>
        {/each}
        </div>
    </section>

    </main>

<!-- Barra Lateral Sticky Completa -->
    <aside class="sidebar-deportes" aria-label="Turnos de traumatología y deporte">
    
    <!-- 📸 1. Tarjeta Visual Deportiva -->
    <article class="tarjeta-visual-sidebar">
        <div class="marco-foto">
        <img 
            src="/img/msk.png" 
            alt="Diagnóstico por imágenes de alta resolución en lesiones de deportistas" 
            loading="lazy"
            decoding="async"
            width="340"
            height="210"
        />
        <span class="etiqueta-foto">Alto Rendimiento</span>
        </div>
        <div class="pie-foto">
        <h3>Músculo-Esquelético & RMN</h3>
        <p>Protocolos de alta resolución en rodilla, hombro y tobillo para acortar tiempos de diagnóstico y rehabilitación.</p>
        </div>
    </article>

    <!-- 📅 2. Tarjeta de Coordinación de Turnos -->
    <div class="tarjeta-turno-deporte">
        <span class="etiqueta-atencion">Atención Deportiva</span>
        <h3>Turnos y Coordinación</h3>
        <p>Priorizamos la agenda de atletas y deportistas con lesiones agudas para iniciar el tratamiento de inmediato.</p>

        <a 
        href={WHATSAPP_TURNOS_LA_PLATA} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn btn-whatsapp"
        >
        Coordinar Turno por WhatsApp
        </a>

        <div class="info-adicional-dep">
        <div class="item-dep">
            <strong>Sede Central:</strong> Calle 8 nº 607 e/ 44 y 45, La Plata[cite: 4]
        </div>
        <div class="item-dep">
            <strong>Requisitos:</strong> Orden médica con diagnóstico presuntivo y DNI.[cite: 4]
        </div>
        <div class="item-dep">
            <strong>Entrega de Informes:</strong> Acceso digital inmediato mediante Portal PACS.[cite: 4]
        </div>
        </div>
    </div>

    </aside>
</div>
</div>

<style>
.deportes-hero {
    background: linear-gradient(135deg, #075f87 0%, var(--primario) 100%);
    color: var(--blanco);
    padding: 3.5rem 0 3rem;
    margin-bottom: 3.5rem;
}

.breadcrumb {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
    opacity: 0.9;
}

.breadcrumb a {
    color: var(--blanco);
    text-decoration: underline;
}

.breadcrumb span {
    margin: 0 0.5rem;
}

.badge-deporte {
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

.deportes-hero h1 {
    font-size: clamp(2.2rem, 4.5vw, 3rem);
    margin: 0 0 0.5rem 0;
}

.hero-subtitulo {
    font-size: 1.15rem;
    max-width: 780px;
    margin: 0;
    opacity: 0.95;
    line-height: 1.5;
}

.contenido-deportes {
    margin-bottom: 5rem;
}

.layout-deportes {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 3.5rem;
    align-items: start;
}

.deportes-principal {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
}

.bloque-intro h2,
.seccion-tecnologias h2,
.seccion-lesiones h2 {
    font-size: 1.45rem;
    color: var(--primario-oscuro);
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--gris-borde);
}

.bloque-intro p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--texto);
    margin-bottom: 1rem;
}

.tarjeta-pilar-deporte {
    background: var(--gris-claro);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 1.75rem 1.5rem;
    text-align: center;
}

.icono-pilar {
    display: inline-grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--primario);
    color: var(--blanco);
    font-size: 1.2rem;
    margin: 0 auto 1rem;
}

.tarjeta-pilar-deporte h3 {
    font-size: 1.1rem;
    color: var(--primario-oscuro);
    margin: 0 0 0.5rem 0;
}

.tarjeta-pilar-deporte p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--texto);
    margin: 0;
}

.grilla-estudios {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.tarjeta-estudio-deporte {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 1.75rem 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: transform var(--transicion), box-shadow var(--transicion);
}

.tarjeta-estudio-deporte:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
    border-color: var(--primario);
}

.header-estudio-dep {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.75rem;
}

.punto-deporte {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--primario);
    flex-shrink: 0;
}

.header-estudio-dep h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--primario-oscuro);
}

.tarjeta-estudio-deporte p {
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--texto);
    margin: 0;
}

.grilla-lesiones {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

.tarjeta-lesion {
    background: var(--gris-claro);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 1.75rem 1.5rem;
    border-left: 5px solid var(--primario);
}

.header-lesion {
    margin-bottom: 0.85rem;
}

.badge-cat-lesion {
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
}

.header-lesion h3 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--primario-oscuro);
}

.lista-lesiones {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
}

.lista-lesiones li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.94rem;
    line-height: 1.5;
    color: var(--texto);
}

.tilde-check {
    color: var(--primario);
    font-weight: 800;
}

/* ============================================================
SIDEBAR STICKY DEPORTES (Flota en todo el recorrido)
============================================================ */
.sidebar-deportes {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    position: sticky;
    top: 90px;
}

.tarjeta-visual-sidebar {
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

.tarjeta-visual-sidebar:hover .marco-foto img {
    transform: scale(1.04);
}

.etiqueta-foto {
    position: absolute;
    bottom: 0.75rem;
    left: 0.75rem;
    background: rgba(10, 127, 181, 0.88);
    backdrop-filter: blur(4px);
    color: var(--blanco);
    font-size: 0.68rem;
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
    margin: 0 0 0.35rem 0;
    font-size: 1rem;
    color: var(--primario-oscuro);
}

.pie-foto p {
    margin: 0;
    font-size: 0.85rem;
    color: var(--texto);
    line-height: 1.45;
    opacity: 0.88;
}

.tarjeta-turno-deporte {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 1.75rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.etiqueta-atencion {
    display: inline-block;
    font-size: 0.72rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--primario);
    background: var(--gris-claro);
    padding: 0.3rem 0.65rem;
    border-radius: 4px;
    margin-bottom: 0.75rem;
}

.tarjeta-turno-deporte h3 {
    color: var(--primario-oscuro);
    font-size: 1.3rem;
    margin: 0 0 0.5rem 0;
}

.tarjeta-turno-deporte p {
    font-size: 0.88rem;
    color: var(--texto);
    margin-bottom: 1.25rem;
    line-height: 1.5;
}

.info-adicional-dep {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--gris-borde);
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
}

.item-dep {
    font-size: 0.82rem;
    line-height: 1.45;
    color: #4a5568;
}

.item-dep strong {
    color: var(--texto);
}

@media (max-width: 960px) {
    .layout-deportes {
    grid-template-columns: 1fr;
    gap: 3rem;
    }
    .grilla-estudios {
    grid-template-columns: 1fr;
    }
    .sidebar-deportes {
    position: static;
    }
}
</style>