<script>
  // Encabezado: logo a la izquierda + menú multinivel (dropdown) + hamburguesa en móvil.
  import Icono from './Icono.svelte';
  import { menu } from '$lib/datos.js';
  let movilAbierto = $state(false);   // estado reactivo (Svelte 5 runes): menú móvil visible o no
  let abierto = $state(null);         // índice del submenú desplegado en móvil
</script>

<header class="header">
  <div class="contenedor fila">
    <a href="/" class="logo" aria-label="CYTEC La Plata — inicio">CYTEC<small>La Plata</small></a>

    <!-- Botón hamburguesa: sólo visible en móvil -->
    <button class="hamburguesa" aria-label="Abrir menú" aria-expanded={movilAbierto} onclick={() => (movilAbierto = !movilAbierto)}>
      <Icono nombre={movilAbierto ? 'cerrar' : 'menu'} tam={28} />
    </button>

    <nav class:abierto={movilAbierto} aria-label="Principal">
      <ul>
        {#each menu as item, i}
          <li class:tiene-hijos={item.hijos}>
            {#if item.hijos}
              <!-- En desktop el dropdown se abre con :hover/:focus-within (CSS puro) -->
              <button class="enlace" onclick={() => (abierto = abierto === i ? null : i)}>{item.texto} ▾</button>
              <ul class="sub" class:visible={abierto === i}>
                {#each item.hijos as h}<li><a href={h.href} onclick={() => (movilAbierto = false)}>{h.texto}</a></li>{/each}
              </ul>
            {:else}
              <a class="enlace" href={item.href} onclick={() => (movilAbierto = false)}>{item.texto}</a>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style>
  .header { 
    background: var(--blanco); 
    border-bottom: 1px solid var(--gris-borde); 
    position: sticky; 
    top: 0; 
    z-index: 50; 
    width: 100%;
  }

  .fila { 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    min-height: 72px; 
    position: relative; /* Contexto de posicionamiento para el nav móvil */
  }

  .logo { 
    font-weight: 700; 
    font-size: 1.6rem; 
    color: var(--primario); 
    letter-spacing: 0.05em; 
    line-height: 1; 
  }

  .logo small { 
    display: block; 
    font-size: 0.6rem; 
    font-weight: 600; 
    color: var(--texto); 
    letter-spacing: 0.2em; 
    text-transform: uppercase; 
  }

  ul { 
    list-style: none; 
    margin: 0; 
    padding: 0; 
  }

  nav > ul { 
    display: flex; 
    gap: 0.25rem; 
  }

  li { 
    position: relative; 
  }

  .enlace, .sub a { 
    display: block; 
    padding: 0.8rem 0.9rem; 
    font: 600 0.82rem var(--fuente); 
    text-transform: uppercase; 
    background: none; 
    border: 0; 
    cursor: pointer; 
    color: var(--texto); 
    transition: color var(--transicion), background var(--transicion); 
    width: 100%;
    text-align: left;
  }

  .enlace:hover, .sub a:hover { 
    color: var(--primario); 
    background: var(--gris-claro); 
  }

  /* Dropdown en escritorio */
  .sub { 
    position: absolute; 
    top: 100%; 
    left: 0; 
    min-width: 230px; 
    background: var(--blanco); 
    border: 1px solid var(--gris-borde); 
    border-radius: var(--radio); 
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    opacity: 0; 
    visibility: hidden; 
    transform: translateY(8px); 
    transition: opacity var(--transicion), transform var(--transicion), visibility var(--transicion); 
  }

  .tiene-hijos:hover > .sub, 
  .tiene-hijos:focus-within > .sub { 
    opacity: 1; 
    visibility: visible; 
    transform: none; 
  }

  .hamburguesa { 
    display: none; 
    background: none; 
    border: 0; 
    color: var(--primario); 
    cursor: pointer; 
    padding: 0.4rem;
  }

  /* Versión Móvil */
  @media (max-width: 960px) {
    .hamburguesa { 
      display: inline-flex; 
      align-items: center;
      justify-content: center;
    }

    nav { 
      display: none; 
      position: absolute; 
      top: 100%; 
      left: 0; 
      width: 100%; /* Exactamente el ancho del contenedor */
      background: var(--blanco); 
      border-bottom: 2px solid var(--gris-borde); 
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
      max-height: 80vh; 
      overflow-y: auto; 
    }

    nav.abierto { 
      display: block; 
    }

    nav > ul { 
      flex-direction: column; 
    }

    .sub { 
      position: static; 
      display: none; 
      opacity: 1; 
      visibility: visible; 
      transform: none; 
      border: 0; 
      box-shadow: none; 
      padding-left: 1rem; 
      background: var(--gris-claro);
    }

    .sub.visible { 
      display: block; 
    }

    .tiene-hijos:hover > .sub { 
      display: none; 
    }

    .tiene-hijos:hover > .sub.visible { 
      display: block; 
    }
  }
</style>
