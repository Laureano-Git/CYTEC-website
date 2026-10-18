<!-- src/lib/components/Novedades.svelte -->
<!-- Si se modifica este archivo recordar modificar src/routes/novedades/+page.svelte y la seccion novedades en datos.js -->
<script>
  import { novedades } from '$lib/datos.js';
  // En el Home mostramos únicamente las 3 más recientes
  const ultimasNovedades = novedades.slice(0, 3);
</script>

<section class="seccion alt" id="novedades">
  <div class="contenedor">
    <h2>Novedades</h2>
    <div class="grilla tres">
      {#each ultimasNovedades as n}
        <article class="card">
          <div class="mini">
          <!-- 📸 Renderizado semántico de la imagen -->
            <img 
              src={n.imagen} 
              alt={n.titulo} 
              loading="lazy" 
              decoding="async" 
            />
            <span class="fecha">{n.fecha}</span>
          </div>
          <div class="cuerpo">
            <h3>{n.titulo}</h3>
            <p>{n.resumen}</p>
            <a class="btn" href="/novedades/{n.slug}">Leer más</a>
          </div>
        </article>
      {/each}
    </div>

    <!-- Acceso a la página completa -->
    <div class="acciones-home">
      <a href="/novedades" class="btn btn-todas">Ver todas las novedades →</a>
    </div>
  </div>
</section>

<style>
  .card { 
    background: var(--blanco); 
    border-radius: var(--radio); 
    overflow: hidden; 
    border: 1px solid var(--gris-borde); 
    transition: transform var(--transicion), box-shadow var(--transicion); 
    display: flex;
    flex-direction: column;
  }
  .card:hover { 
    transform: translateY(-4px); 
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1); 
  }
  .card:hover .mini img {
    transform: scale(1.05);
  }

  /* Contenedor relativo para posicionar la insignia de fecha sobre la foto */
  .mini { 
    height: 190px; 
    position: relative; 
    overflow: hidden;
    background: var(--gris-claro);
  }

  .mini img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform var(--transicion);
  }

  .fecha { 
    position: absolute; 
    top: 0.75rem; 
    left: 0.75rem; 
    background: var(--acento); 
    color: var(--blanco); 
    padding: 0.25rem 0.7rem; 
    border-radius: 4px; 
    font-weight: 700; 
    font-size: 0.8rem; 
    box-shadow: 0 2px 6px rgba(0,0,0,0.25);
    z-index: 2;
  }

  .cuerpo { 
    padding: 1.25rem; 
    display: flex; 
    flex-direction: column; 
    flex-grow: 1; 
  }
  .cuerpo h3 { 
    margin: 0 0 0.5rem 0; 
    font-size: 1.15rem; 
    color: var(--primario-oscuro); 
  }
  .cuerpo p { 
    font-size: 0.9rem; 
    line-height: 1.6; 
    color: var(--texto); 
    margin: 0 0 1.25rem 0; 
    flex-grow: 1; 
  }
  .acciones-home { 
    text-align: center; 
    margin-top: 3rem; 
  }
  .btn-todas { 
    background: transparent; 
    border: 2px solid var(--primario); 
    color: var(--primario); 
  }
  .btn-todas:hover { 
    background: var(--primario); 
    color: var(--blanco); 
  }
</style>
