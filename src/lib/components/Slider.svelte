<script>
  // Carrusel principal (equivalente a Smart Slider 3): fade automático + flechas + puntos.
  import Icono from './Icono.svelte';
  import { slides } from '$lib/datos.js';
  import { onMount } from 'svelte';

  let actual = $state(0);
  const siguiente = () => (actual = (actual + 1) % slides.length);
  const anterior = () => (actual = (actual - 1 + slides.length) % slides.length);

  // Autoplay cada 6 s. onMount sólo corre en el navegador (no en SSR) y devuelve la limpieza.
  onMount(() => {
    const id = setInterval(siguiente, 6000);
    return () => clearInterval(id);
  });
</script>

<section class="slider" aria-roledescription="carrusel">
  {#each slides as s, i}
    <!-- Todas las slides se apilan; sólo la activa tiene opacidad 1 (transición fade) -->
    <div class="slide" class:activa={i === actual} style="background-image: linear-gradient(90deg, {s.color}ee, {s.color}55), url({s.imagen}); background-color: {s.color}" aria-hidden={i !== actual}>
      <div class="contenedor">
        <h1>{s.titulo}</h1>
        <p>{s.texto}</p>
        <a class="btn whatsapp" href="https://api.whatsapp.com/send?phone=5492216139002" target="_blank" rel="noopener">Sacá tu turno</a>
      </div>
    </div>
  {/each}
  <button class="flecha izq" aria-label="Anterior" onclick={anterior}><Icono nombre="flecha_izq" tam={28} /></button>
  <button class="flecha der" aria-label="Siguiente" onclick={siguiente}><Icono nombre="flecha_der" tam={28} /></button>
  <div class="puntos">
    {#each slides as _, i}<button class:on={i === actual} aria-label={`Ir a la diapositiva ${i + 1}`} onclick={() => (actual = i)}></button>{/each}
  </div>
</section>

<style>
  .slider { position: relative; height: clamp(320px, 55vh, 520px); overflow: hidden; color: var(--blanco); }
  .slide { position: absolute; inset: 0; display: flex; align-items: center; background-size: cover; background-position: center; opacity: 0; transition: opacity 0.8s ease; }
  .slide.activa { opacity: 1; z-index: 1; }
  .slide h1 { max-width: 16ch; } .slide p { max-width: 45ch; font-size: 1.1rem; margin-bottom: 1.5rem; }
  .flecha { position: absolute; top: 50%; transform: translateY(-50%); z-index: 2; background: rgb(255 255 255 / 0.2); color: var(--blanco); border: 0; border-radius: 50%; width: 46px; height: 46px; display: grid; place-items: center; cursor: pointer; transition: background var(--transicion); }
  .flecha:hover { background: rgb(255 255 255 / 0.45); }
  .izq { left: 1rem; } .der { right: 1rem; }
  .puntos { position: absolute; bottom: 1rem; left: 0; right: 0; z-index: 2; display: flex; justify-content: center; gap: 0.5rem; }
  .puntos button { width: 12px; height: 12px; border-radius: 50%; border: 2px solid var(--blanco); background: transparent; cursor: pointer; padding: 0; transition: background var(--transicion); }
  .puntos button.on { background: var(--blanco); }
</style>
