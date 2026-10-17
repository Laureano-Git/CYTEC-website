<!-- src/lib/components/Servicios.svelte -->
<script>
  import Icono from './Icono.svelte';
  import { servicios } from '$lib/datos.js';

// 1. Mapeo de slugs de navegación
  // Diccionario para normalizar los nombres del array a sus slugs de ruta
  const mapaSlugs = {
    'PET CT Multislice y PET CT+RM': 'pet-ct-multislice',
    'PET CT Multislice': 'pet-ct-multislice',
    'Resonancia magnética': 'resonancia-magnetica',
    'Tomografía': 'tomografia',
    'Mamografía digital': 'mamografia-digital',
    'Ecografía': 'ecografia',
    'Espirometría computada': 'espirometria-computada',
    'Espirometria computada': 'espirometria-computada',
    'Medicina nuclear': 'medicina-nuclear',
    'Radiología digital': 'radiologia-digital',
    'Densitometría ósea digital': 'densitometria-osea'
  };

// 2. Mapeo semántico de iconos para cada práctica
  const mapaIconos = {
    'PET CT Multislice y PET CT+RM': 'pet-ct',
    'PET CT Multislice': 'pet-ct',
    'Resonancia magnética': 'resonancia',
    'Tomografía': 'tomografia',
    'Mamografía digital': 'mamografia',
    'Ecografía': 'ecografia',
    'Espirometría computada': 'espirometria',
    'Espirometria computada': 'espirometria',
    'Medicina nuclear': 'nuclear',
    'Radiología digital': 'radiologia',
    'Densitometría ósea digital': 'densitometria'
  };

  function obtenerRuta(nombreServicio) {
    const slug = mapaSlugs[nombreServicio];
    return slug ? `/servicios/${slug}` : '/#servicios';
  }

  function obtenerIcono(nombreServicio) {
    return mapaIconos[nombreServicio] || 'servicio';
  }
</script>

<section class="seccion alt" id="servicios">
  <div class="contenedor">
    <h2>Nuestros servicios</h2>
    <div class="grilla tres">
      {#each servicios as s}
        <a class="tarjeta" href={obtenerRuta(s)}>
          <div class="icono-envoltorio">
            <Icono nombre={obtenerIcono(s)} tam={34} />
          </div>
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
    padding: 2rem 1.25rem;
    text-align: center;
    color: var(--primario);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform var(--transicion), box-shadow var(--transicion), background var(--transicion), color var(--transicion);
  }

  .icono-envoltorio {
    display: inline-grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--gris-claro);
    color: var(--primario);
    margin-bottom: 0.75rem;
    transition: background var(--transicion), color var(--transicion), transform var(--transicion);
  }

  .tarjeta h3 {
    margin: 0.5rem 0 0;
    color: var(--texto);
    font-size: 1.05rem;
    line-height: 1.35;
    transition: color var(--transicion);
  }

  /* Microinteracción Senior al posar el cursor */
  .tarjeta:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(10, 127, 181, 0.15);
    background: var(--primario);
    color: var(--blanco);
  }

  .tarjeta:hover .icono-envoltorio {
    background: rgba(255, 255, 255, 0.2);
    color: var(--blanco);
    transform: scale(1.08);
  }

  .tarjeta:hover h3 {
    color: var(--blanco);
  }
</style>
