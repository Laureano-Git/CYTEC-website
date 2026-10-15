<script>
  // Ventana modal reutilizable. "children" es el contenido que inyecta el padre (snippet de Svelte 5).
  import Icono from './Icono.svelte';
  import { fade, scale } from 'svelte/transition';   // animaciones de entrada/salida
  let { abierto, oncerrar, titulo, children } = $props();
  // Cerrar con la tecla Escape (accesibilidad)
  const teclado = (e) => e.key === 'Escape' && oncerrar();
</script>
<svelte:window onkeydown={teclado} />

{#if abierto}
  <!-- Fondo oscuro: clic fuera del cuadro cierra el modal -->
  <div class="fondo" transition:fade={{ duration: 200 }} onclick={oncerrar} role="presentation">
    <div class="caja" role="dialog" aria-modal="true" aria-label={titulo} transition:scale={{ start: 0.9, duration: 250 }} onclick={(e) => e.stopPropagation()}>
      <button class="x" aria-label="Cerrar" onclick={oncerrar}><Icono nombre="cerrar" tam={22} /></button>
      <h3>{titulo}</h3>
      {@render children()}
      <button class="btn" onclick={oncerrar}>Cerrar</button>
    </div>
  </div>
{/if}

<style>
  .fondo { position: fixed; inset: 0; background: rgb(0 20 35 / 0.6); display: grid; place-items: center; z-index: 100; padding: 1rem; }
  .caja { position: relative; background: var(--blanco); border-radius: var(--radio); padding: 2rem; max-width: 440px; width: 100%; text-align: center; }
  .x { position: absolute; top: 0.7rem; right: 0.7rem; background: none; border: 0; cursor: pointer; color: var(--texto); transition: color var(--transicion); }
  .x:hover { color: var(--primario); }
</style>
