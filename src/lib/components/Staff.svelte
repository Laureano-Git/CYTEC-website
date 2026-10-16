<!-- src/lib/components/Staff.svelte -->
<script>
import { staffData } from '$lib/datos.js';
</script>

<section class="seccion alt" id="staff" aria-labelledby="titulo-staff">
<div class="contenedor">
    <header class="encabezado-seccion">
    <h2 id="titulo-staff">{staffData.titulo}</h2>
    <p class="subtitulo">{staffData.subtitulo}</p>
    </header>

    <!-- 1. Dirección Médica Destacada -->
    <div class="direccion-grid">
    {#each staffData.direccion as dir}
        <article class="tarjeta-direccion">
        <span class="cargo">{dir.cargo}</span>
        <h3 class="nombre-director">{dir.nombre}</h3>
        </article>
    {/each}
    </div>

    <!-- 2. Departamentos y Servicios Médicos -->
    <div class="departamentos-grid">
    {#each staffData.departamentos as depto}
        <article class="tarjeta-depto">
        <header class="depto-header">
            <h3>{depto.area}</h3>
        </header>
        <ul class="lista-medicos">
            {#each depto.profesionales as medico}
            <li>
                <span class="punto-medico" aria-hidden="true"></span>
                <span>{medico}</span>
            </li>
            {/each}
        </ul>
        </article>
    {/each}
    </div>
</div>
</section>

<style>
#staff {
    scroll-margin-top: 80px; /* Compensación del Header sticky */
}

.encabezado-seccion {
    text-align: center;
    margin-bottom: 3rem;
}

.subtitulo {
    color: var(--texto);
    font-size: 1.05rem;
    max-width: 650px;
    margin: 0.5rem auto 0;
    opacity: 0.85;
}

  /* Tarjetas de Dirección */
.direccion-grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.tarjeta-direccion {
    background: var(--blanco);
    border: 2px solid var(--primario);
    border-radius: var(--radio);
    padding: 1.5rem 2.5rem;
    text-align: center;
    min-width: 280px;
    box-shadow: 0 4px 12px rgba(10, 127, 181, 0.08);
}

.cargo {
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    font-weight: 700;
    color: var(--primario);
    margin-bottom: 0.4rem;
}

.nombre-director {
    font-size: 1.25rem;
    color: var(--texto);
    margin: 0;
}

  /* Grilla de Especialidades */
.departamentos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

.tarjeta-depto {
    background: var(--blanco);
    border-radius: var(--radio);
    border: 1px solid var(--gris-borde);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
    transition: transform var(--transicion), box-shadow var(--transicion);
}

.tarjeta-depto:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
}

.depto-header {
    background: var(--primario);
    color: var(--blanco);
    padding: 0.85rem 1.25rem;
}

.depto-header h3 {
    margin: 0;
    font-size: 0.95rem;
    letter-spacing: 0.03em;
}

.lista-medicos {
    list-style: none;
    margin: 0;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    flex-grow: 1;
}

.lista-medicos li {
    font-size: 0.9rem;
    color: var(--texto);
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.punto-medico {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--primario);
    flex-shrink: 0;
}
</style>