<!-- src/routes/bebe/+page.svelte -->
<script>
import { bebeData, WHATSAPP_TURNOS_LA_PLATA } from '$lib/datos.js';
</script>

<svelte:head>
<title>{bebeData.titulo} — CYTEC La Plata</title>
<meta name="description" content={bebeData.subtitulo} />
</svelte:head>

<!-- Cabecera Hero con estilo cálido y pediátrico -->
<header class="bebe-hero">
<div class="contenedor">
    <nav class="breadcrumb" aria-label="Migas de pan">
    <a href="/">Inicio</a> <span>/</span>
    <strong>CYTEC Bebé</strong>
    </nav>
    <span class="badge-pediatrico">Atención Pediátrica Integral</span>
    <h1>{bebeData.titulo}</h1>
    <p class="hero-subtitulo">{bebeData.subtitulo}</p>
</div>
</header>

<div class="contenedor contenido-bebe">
<div class="layout-bebe">
    <!-- Contenido Principal -->
    <main class="bebe-principal">
    
    <!-- Manifiesto / Misión -->
    <article class="bloque-mision">
        <h2>Atención con el corazón para los más pequeños</h2>
        {#each bebeData.mision as parrafo}
        <p>{parrafo}</p>
        {/each}
    </article>

    <!-- Pilares del Enfoque Pediátrico -->
    <section class="pilares-pediatricos" aria-label="Pilares de atención pediátrica">
        <div class="grilla tres">
        {#each bebeData.pilares as pilar}
            <div class="tarjeta-pilar">
            <div class="icono-pilar" aria-hidden="true">★</div>
            <h3>{pilar.titulo}</h3>
            <p>{pilar.detalle}</p>
            </div>
        {/each}
        </div>
    </section>

    <!-- Estudios Pediátricos Especializados -->
    <section class="seccion-estudios" aria-labelledby="titulo-estudios-ped">
        <h2 id="titulo-estudios-ped">Prácticas Diagnósticas Pediátricas</h2>
        <div class="grilla-estudios">
        {#each bebeData.estudiosPediatricos as estudio}
            <article class="tarjeta-estudio">
            <header class="header-estudio">
                <span class="marca-estudio" aria-hidden="true">♥</span>
                <h3>{estudio.nombre}</h3>
            </header>
            <p>{estudio.descripcion}</p>
            </article>
        {/each}
        </div>
    </section>

    <!-- Pautas para la Familia -->
    <section class="bloque-consejos" aria-labelledby="titulo-consejos">
        <h2 id="titulo-consejos">Recomendaciones para los Papás y la Familia</h2>
        <div class="caja-consejos">
        <ul class="lista-consejos">
            {#each bebeData.recomendacionesFamilia as consejo}
            <li>
                <span class="tilde-dulce" aria-hidden="true">✔</span>
                <span>{consejo}</span>
            </li>
            {/each}
        </ul>
        </div>
    </section>

    </main>

    <!-- Barra Lateral de Contacto y Turnos -->
    <aside class="sidebar-bebe" aria-label="Turnos de atención pediátrica">
    <div class="tarjeta-turno-bebe">
        <span class="etiqueta-reserva">Espacio Pediátrico</span>
        <h3>Turnos Pediátricos</h3>
        <p>Priorizamos turnos con tiempos ampliados para respetar el ritmo biológico y de descanso de cada bebé y niño.</p>

        <a 
        href={WHATSAPP_TURNOS_LA_PLATA} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn btn-whatsapp"
        >
        Pedir Turno por WhatsApp
        </a>

        <div class="info-pediatrica">
        <div class="item-info">
            <strong>Sede:</strong> Calle 8 nº 607 e/ 44 y 45, La Plata
        </div>
        <div class="item-info">
            <strong>Horarios:</strong> Lunes a Viernes de 8:00 a 20:00 hs.
        </div>
        <div class="item-info">
            <strong>Acompañamiento:</strong> Se permite el ingreso con ambos progenitores en sala.
        </div>
        </div>
    </div>
    </aside>
</div>
</div>

<style>
  /* Hero con gradiente azul-cian cálido y amable */
.bebe-hero {
    background: linear-gradient(135deg, #0d93a8 0%, #0a7fb5 100%);
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

.badge-pediatrico {
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

.bebe-hero h1 {
    font-size: clamp(2.2rem, 4.5vw, 3rem);
    margin: 0 0 0.5rem 0;
}

.hero-subtitulo {
    font-size: 1.15rem;
    max-width: 750px;
    margin: 0;
    opacity: 0.95;
    line-height: 1.5;
}

.contenido-bebe {
    margin-bottom: 5rem;
}

.layout-bebe {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 3.5rem;
    align-items: start;
}

.bebe-principal {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
}

.bloque-mision h2,
.seccion-estudios h2,
.bloque-consejos h2 {
    font-size: 1.45rem;
    color: var(--primario-oscuro);
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--gris-borde);
}

.bloque-mision p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--texto);
    margin-bottom: 1rem;
}

  /* Tarjetas de Pilares */
.tarjeta-pilar {
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
    background: #0d93a8;
    color: var(--blanco);
    font-size: 1.2rem;
    margin: 0 auto 1rem;
}

.tarjeta-pilar h3 {
    font-size: 1.1rem;
    color: var(--primario-oscuro);
    margin: 0 0 0.5rem 0;
}

.tarjeta-pilar p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--texto);
    margin: 0;
}

  /* Grilla de Estudios */
.grilla-estudios {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.tarjeta-estudio {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 1.75rem 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: transform var(--transicion), box-shadow var(--transicion);
}

.tarjeta-estudio:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
    border-color: #0d93a8;
}

.header-estudio {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.75rem;
}

.marca-estudio {
    color: #0d93a8;
    font-size: 1.1rem;
}

.header-estudio h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--primario-oscuro);
}

.tarjeta-estudio p {
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--texto);
    margin: 0;
}

  /* Caja de Consejos Familiares */
.caja-consejos {
    background: #f0fdfa;
    border: 1px solid #ccfbf1;
    border-radius: var(--radio);
    padding: 2rem;
}

.lista-consejos {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
}

.lista-consejos li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.98rem;
    line-height: 1.55;
    color: #115e59;
}

.tilde-dulce {
    color: #0d93a8;
    font-weight: 800;
}

  /* Sidebar Sticky */
.tarjeta-turno-bebe {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 2rem 1.75rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    position: sticky;
    top: 90px;
}

.etiqueta-reserva {
    display: inline-block;
    font-size: 0.72rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #0d93a8;
    background: #e6fffa;
    padding: 0.3rem 0.65rem;
    border-radius: 4px;
    margin-bottom: 0.75rem;
}

.tarjeta-turno-bebe h3 {
    color: var(--primario-oscuro);
    font-size: 1.35rem;
    margin: 0 0 0.5rem 0;
}

.tarjeta-turno-bebe p {
    font-size: 0.9rem;
    color: var(--texto);
    margin-bottom: 1.5rem;
    line-height: 1.5;
}

.info-pediatrica {
    margin-top: 1.75rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--gris-borde);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.item-info {
    font-size: 0.85rem;
    line-height: 1.45;
    color: #4a5568;
}

.item-info strong {
    color: var(--texto);
}

@media (max-width: 960px) {
    .layout-bebe {
    grid-template-columns: 1fr;
    gap: 3rem;
    }
    .grilla-estudios {
    grid-template-columns: 1fr;
    }
    .tarjeta-turno-bebe {
    position: static;
    }
}
</style>