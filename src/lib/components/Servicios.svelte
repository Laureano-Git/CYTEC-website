<!-- src/lib/components/Servicios.svelte -->
<script>
  import Icono from './Icono.svelte';
  import { servicios } from '$lib/datos.js';

  // Diccionario para normalizar los nombres del array a sus slugs de ruta
  const mapaSlugs = {
    'Espinografía digital': 'espinografia-digital',
    'PET CT Multislice y PET CT+RM': 'pet-ct-multislice',
    'PET CT Multislice': 'pet-ct-multislice',
    'Resonancia magnética': 'resonancia-magnetica',
    'Tomografía': 'tomografia',
    'Mamografía digital': 'mamografia-digital',
    'Ecografía': 'ecografia',
    'Medicina nuclear': 'medicina-nuclear',
    'Radiología digital': 'radiologia-digital',
    'Densitometría ósea digital': 'densitometria-osea'
  };

  function obtenerRuta(nombreServicio) {
    const slug = mapaSlugs[nombreServicio];
    return slug ? `/servicios/${slug}` : '/#servicios';
  }
</script>

<section class="seccion alt" id="servicios">
  <div class="contenedor">
    <h2>Nuestros servicios</h2>
    <div class="grilla tres">
      {#each servicios as s}
        <a class="tarjeta" href={obtenerRuta(s)}>
          <Icono nombre="servicio" tam={36} />
          <h3>{s}</h3>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .tarjeta {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 1.75rem 1rem;
    text-align: center;
    color: var(--primario);
    text-decoration: none;
    transition: transform var(--transicion), box-shadow var(--transicion), background var(--transicion), color var(--transicion);
  }
  .tarjeta h3 {
    margin: 0.75rem 0 0;
    color: var(--texto);
    font-size: 1.05rem;
    transition: color var(--transicion);
  }
  .tarjeta:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(10, 127, 181, 0.2);
    background: var(--primario);
    color: var(--blanco);
  }
  .tarjeta:hover h3 {
    color: var(--blanco);
  }
</style>
