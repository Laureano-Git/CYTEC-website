<!-- src/routes/coberturas/+page.svelte -->
<script>
import { coberturasData, WHATSAPP_TURNOS_LA_PLATA } from '$lib/datos.js';

  // Svelte 5: Estados reactivos para filtrado en tiempo real
let busqueda = $state('');
let filtroTipo = $state('Todas');

  // Obtener tipos únicos de entidades
let tiposDisponibles = $derived([
    'Todas',
    ...new Set(coberturasData.entidades.map((e) => e.tipo))
]);

  // Lista filtrada reactivamente
let entidadesFiltradas = $derived(
    coberturasData.entidades.filter((item) => {
    const coincideTexto = item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                            item.detalle.toLowerCase().includes(busqueda.toLowerCase());
    const coincideTipo = filtroTipo === 'Todas' || item.tipo === filtroTipo;
    return coincideTexto && coincideTipo;
    })
);
</script>

<svelte:head>
<title>{coberturasData.titulo} — CYTEC La Plata</title>
<meta name="description" content={coberturasData.subtitulo} />
</svelte:head>

<!-- Hero de Coberturas -->
<header class="coberturas-hero">
<div class="contenedor">
    <nav class="breadcrumb" aria-label="Migas de pan">
    <a href="/">Inicio</a> <span>/</span>
    <strong>Coberturas</strong>
    </nav>
    <span class="badge-cobertura">Convenios Asistenciales</span>
    <h1>{coberturasData.titulo}</h1>
    <p class="hero-subtitulo">{coberturasData.subtitulo}</p>
</div>
</header>

<div class="contenedor contenido-coberturas">
<div class="layout-coberturas">
    <!-- Columna Principal -->
    <main class="coberturas-principal">
    
    <!-- Información General -->
    <article class="bloque-info">
        <h2>Atención con Obras Sociales y Planes Privados</h2>
        {#each coberturasData.informacionGeneral as parrafo}
        <p>{parrafo}</p>
        {/each}
    </article>

    <!-- Requisitos de Admisión -->
    <section class="caja-requisitos" aria-labelledby="titulo-requisitos">
        <header class="header-requisitos">
        <span class="icono-req" aria-hidden="true">📋</span>
        <h3 id="titulo-requisitos">Documentación requerida el día del turno</h3>
        </header>
        <ul class="lista-requisitos">
        {#each coberturasData.requisitosIngreso as req}
            <li>
            <span class="tilde-check" aria-hidden="true">✔</span>
            <span>{req}</span>
            </li>
        {/each}
        </ul>
    </section>

    <!-- Panel Interactivo de Búsqueda y Filtros -->
    <section class="seccion-buscador" aria-labelledby="titulo-listado">
        <div class="buscador-header">
        <h2 id="titulo-listado">Listado de Coberturas Adheridas</h2>
        <span class="contador-badge">{entidadesFiltradas.length} encontradas</span>
        </div>

        <div class="controles-filtro">
        <div class="campo-busqueda">
            <span class="icono-lupa" aria-hidden="true">🔍</span>
            <input 
            type="search" 
            placeholder="Buscar obra social o prepaga (ej. OSDE, IOMA, Galeno)..." 
            bind:value={busqueda}
            aria-label="Buscar cobertura por nombre"
            />
        </div>

        <div class="pills-filtro" role="group" aria-label="Filtrar por tipo de entidad">
            {#each tiposDisponibles as tipo}
            <button 
                class="pill-btn" 
                class:activo={filtroTipo === tipo}
                onclick={() => (filtroTipo = tipo)}
            >
                {tipo}
            </button>
            {/each}
        </div>
        </div>

        <!-- Grilla de Entidades Filtradas -->
        {#if entidadesFiltradas.length > 0}
        <div class="grilla-entidades">
            {#each entidadesFiltradas as entidad (entidad.nombre)}
            <article class="tarjeta-cobertura">
                <header class="header-entidad">
                <h3>{entidad.nombre}</h3>
                <span class="badge-tipo">{entidad.tipo}</span>
                </header>
                <p>{entidad.detalle}</p>
            </article>
            {/each}
        </div>
        {:else}
        <div class="sin-resultados">
            <p>No se encontraron coberturas que coincidan con <strong>"{busqueda}"</strong>.</p>
            <p class="sub-sin-res">Podés consultar directamente si tu plan tiene convenio a través de nuestra línea de WhatsApp.</p>
        </div>
        {/if}
    </section>

    </main>

    <!-- Sidebar Sticky de Asesoramiento en Línea -->
    <aside class="sidebar-coberturas" aria-label="Consulta directa de planes y convenios">
    <div class="tarjeta-consulta-cobertura">
        <span class="badge-asesoria">Asesoramiento Online</span>
        <h3>¿Tenés dudas sobre tu plan?</h3>
        <p>Envianos una foto clara de tu orden médica y credencial por WhatsApp para que verifiquemos los requisitos de cobertura antes de tu turno.</p>

        <a 
        href={WHATSAPP_TURNOS_LA_PLATA} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn btn-whatsapp"
        >
        Consultar Cobertura por WhatsApp
        </a>

        <div class="info-adicional-cob">
        <div class="item-cob">
            <strong>Sede Central:</strong> Calle 8 nº 607 e/ 44 y 45, La Plata
        </div>
        <div class="item-cob">
            <strong>Sede Varela:</strong> Bartolomé Mitre Nº 40
        </div>
        <div class="item-cob">
            <strong>Particulares:</strong> Ofrecemos facilidades de pago para estudios de alta complejidad no cubiertos.
        </div>
        </div>
    </div>
    </aside>
</div>
</div>

<style>
.coberturas-hero {
    background: linear-gradient(135deg, var(--primario) 0%, var(--primario-oscuro) 100%);
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

.badge-cobertura {
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

.coberturas-hero h1 {
    font-size: clamp(2.2rem, 4.5vw, 3rem);
    margin: 0 0 0.5rem 0;
}

.hero-subtitulo {
    font-size: 1.15rem;
    max-width: 800px;
    margin: 0;
    opacity: 0.95;
    line-height: 1.5;
}

.contenido-coberturas {
    margin-bottom: 5rem;
}

.layout-coberturas {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 3.5rem;
    align-items: start;
}

.coberturas-principal {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
}

.bloque-info h2 {
    font-size: 1.45rem;
    color: var(--primario-oscuro);
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--gris-borde);
}

.bloque-info p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--texto);
    margin-bottom: 1rem;
}

/* Caja Requisitos */
.caja-requisitos {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: var(--radio);
    padding: 1.75rem 2rem;
}

.header-requisitos {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.icono-req {
    font-size: 1.3rem;
}

.header-requisitos h3 {
    margin: 0;
    font-size: 1.15rem;
    color: #166534;
}

.lista-requisitos {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
}

.lista-requisitos li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.95rem;
    line-height: 1.55;
    color: #14532d;
}

.tilde-check {
    color: var(--primario);
    font-weight: 800;
}

/* Buscador y Filtros */
.buscador-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--gris-borde);
    flex-wrap: wrap;
    gap: 1rem;
}

.buscador-header h2 {
    margin: 0;
    font-size: 1.45rem;
    color: var(--primario-oscuro);
}

.contador-badge {
    background: var(--gris-claro);
    color: var(--primario);
    font-weight: 700;
    font-size: 0.82rem;
    padding: 0.35rem 0.85rem;
    border-radius: 9999px;
    border: 1px solid var(--gris-borde);
}

.controles-filtro {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
}

.campo-busqueda {
    position: relative;
    width: 100%;
}

.campo-busqueda input {
    width: 100%;
    padding: 0.9rem 1rem 0.9rem 2.8rem;
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    font-size: 1rem;
    font-family: var(--fuente);
    transition: border-color var(--transicion), box-shadow var(--transicion);
}

.campo-busqueda input:focus {
    outline: none;
    border-color: var(--primario);
    box-shadow: 0 0 0 3px rgba(10, 127, 181, 0.15);
}

.icono-lupa {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    pointer-events: none;
}

.pills-filtro {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.pill-btn {
    font-family: var(--fuente);
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    color: var(--texto);
    padding: 0.4rem 0.9rem;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transicion);
}

.pill-btn:hover {
    background: var(--gris-claro);
    border-color: var(--primario);
    color: var(--primario);
}

.pill-btn.activo {
    background: var(--primario);
    color: var(--blanco);
    border-color: var(--primario);
}

/* Grilla de Entidades */
.grilla-entidades {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
}

.tarjeta-cobertura {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
    transition: transform var(--transicion), box-shadow var(--transicion);
}

.tarjeta-cobertura:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(10, 127, 181, 0.1);
    border-color: var(--primario);
}

.header-entidad {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
}

.header-entidad h3 {
    margin: 0;
    font-size: 1.15rem;
    color: var(--primario-oscuro);
}

.badge-tipo {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    background: var(--gris-claro);
    color: var(--primario);
    padding: 0.25rem 0.55rem;
    border-radius: 4px;
    border: 1px solid var(--gris-borde);
}

.tarjeta-cobertura p {
    font-size: 0.9rem;
    line-height: 1.55;
    color: var(--texto);
    margin: 0;
}

.sin-resultados {
    text-align: center;
    padding: 3rem 1.5rem;
    background: var(--gris-claro);
    border-radius: var(--radio);
    border: 1px dashed var(--gris-borde);
}

.sub-sin-res {
    font-size: 0.9rem;
    color: #64748b;
    margin-top: 0.5rem;
}

/* Sidebar Sticky */
.tarjeta-consulta-cobertura {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 2rem 1.75rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    position: sticky;
    top: 90px;
}

.badge-asesoria {
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

.tarjeta-consulta-cobertura h3 {
    color: var(--primario-oscuro);
    font-size: 1.35rem;
    margin: 0 0 0.5rem 0;
}

.tarjeta-consulta-cobertura p {
    font-size: 0.9rem;
    color: var(--texto);
    margin-bottom: 1.5rem;
    line-height: 1.5;
}

.info-adicional-cob {
    margin-top: 1.75rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--gris-borde);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.item-cob {
    font-size: 0.85rem;
    line-height: 1.45;
    color: #4a5568;
}

.item-cob strong {
    color: var(--texto);
}

@media (max-width: 960px) {
    .layout-coberturas {
    grid-template-columns: 1fr;
    gap: 3rem;
    }
    .grilla-entidades {
    grid-template-columns: 1fr;
    }
    .tarjeta-consulta-cobertura {
    position: static;
    }
}
</style>