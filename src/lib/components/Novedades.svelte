<script>
  // Tarjetas de blog: miniatura + fecha + título + extracto.
  import { novedades } from '$lib/datos.js';
</script>
<section class="seccion alt" id="novedades">
  <div class="contenedor">
    <h2>Novedades</h2>
    <div class="grilla tres">
      {#each novedades as n}
        <article class="card">
          <div class="mini"><span class="fecha">{n.fecha}</span></div>
          <div class="cuerpo"><h3>{n.titulo}</h3><p>{n.texto}</p><a class="btn" href="/#novedades">Leer más</a></div>
        </article>
      {/each}
    </div>
  </div>
</section>
<style>
  .card { background: var(--blanco); border-radius: var(--radio); overflow: hidden; border: 1px solid var(--gris-borde); transition: transform var(--transicion), box-shadow var(--transicion); }
  .card:hover { transform: translateY(-4px); box-shadow: 0 10px 24px rgb(0 0 0 / 0.1); }
  /* Reemplazar el degradé por <img> real (miniatura de la publicación) */
  .mini { height: 170px; background: linear-gradient(135deg, var(--primario), #0d93a8); position: relative; }
  .fecha { position: absolute; top: 0.75rem; left: 0.75rem; background: var(--acento); color: var(--blanco); padding: 0.25rem 0.7rem; border-radius: 4px; font-weight: 700; font-size: 0.8rem; }
  .cuerpo { padding: 1.25rem; }
</style>
