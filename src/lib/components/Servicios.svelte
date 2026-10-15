<script>
  // Cuadrícula de servicios: tarjetas con icono, título y hover.
  import Icono from './Icono.svelte';
  import { servicios } from '$lib/datos.js';
</script>
<section class="seccion alt" id="servicios">
  <div class="contenedor">
    <h2>Nuestros servicios</h2>
    <div class="grilla tres">
      {#each servicios as s}
        <a class="tarjeta" href="/#contacto"><Icono nombre="servicio" tam={36} /><h3>{s}</h3></a>
      {/each}
    </div>
  </div>
</section>
<style>
  .tarjeta { background: var(--blanco); border: 1px solid var(--gris-borde); border-radius: var(--radio); padding: 1.75rem 1rem; text-align: center; color: var(--primario); transition: transform var(--transicion), box-shadow var(--transicion), background var(--transicion), color var(--transicion); }
  .tarjeta h3 { margin: 0.75rem 0 0; color: var(--texto); transition: color var(--transicion); }
  .tarjeta:hover { transform: translateY(-4px); box-shadow: 0 10px 24px rgb(10 127 181 / 0.2); background: var(--primario); color: var(--blanco); }
  .tarjeta:hover h3 { color: var(--blanco); }
</style>
