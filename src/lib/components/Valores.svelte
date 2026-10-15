<script>
  // Los 4 pilares institucionales en una grilla de 4 columnas (se apila en móvil).
  import Icono from './Icono.svelte';
  import { valores } from '$lib/datos.js';
</script>
<section class="seccion" id="nosotros">
  <div class="contenedor">
    <h2>Nuestros valores</h2>
    <div class="grilla">
      {#each valores as v}
        <article class="valor"><span class="ic"><Icono nombre={v.icono} tam={40} /></span><h3>{v.titulo}</h3><p>{v.texto}</p></article>
      {/each}
    </div>
  </div>
</section>
<style>
  .valor { text-align: center; padding: 1rem; }
  .ic { display: inline-grid; place-items: center; width: 80px; height: 80px; border-radius: 50%; color: var(--primario); background: var(--gris-claro); margin-bottom: 1rem; transition: background var(--transicion), color var(--transicion); }
  .valor:hover .ic { background: var(--primario); color: var(--blanco); }
</style>
