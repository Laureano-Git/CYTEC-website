<!-- src/lib/components/Footer.svelte -->
<script>
  // Pie de página institucional: sedes balanceadas, tarjeta compacta de QR/feedback y redes sociales.
  import Icono from './Icono.svelte';
  import { sedes } from '$lib/datos.js';
</script>

<footer id="contacto">
  <div class="contenedor grilla tres">
    
    <!-- Columnas 1 y 2: Sedes La Plata y Florencio Varela estructuradas -->
    {#each sedes as s}
      <div class="tarjeta-sede">
        <div class="sede-contenido">
          <h3>Sede {s.nombre}</h3>
          <p><Icono nombre="pin" tam={18} /> <span>{s.direccion}</span></p>
          <p><Icono nombre="telefono" tam={18} /> <span>{s.telefonos}</span></p>
          <p><Icono nombre="reloj" tam={18} /> <span>{s.horario}</span></p>
        </div>
        
        <div class="sede-accion">
          <a class="btn whatsapp" href={s.whatsapp} target="_blank" rel="noopener noreferrer">
            <Icono nombre="whatsapp" tam={16} /> Turnos WhatsApp
          </a>
        </div>
      </div>
    {/each}

    <!-- Columna 3: Tarjeta Compacta de Feedback con QR + Redes Sociales -->
    <div class="tarjeta-feedback">
      
      <!-- Bloque QR Compacto -->
      <div class="caja-qr-compacta">
        <div class="qr-cabecera">
          <div class="marco-qr">
            <!-- Archivo de imagen del QR en static/img/ -->
            <img 
              src="/img/qr.png" 
              alt="Código QR de comentarios y sugerencias CYTEC" 
              class="qr-imagen"
              loading="lazy"
              decoding="async"
              width="88"
              height="88"
            />
          </div>
          <div class="qr-detalles">
            <h4>Tu opinión importa</h4>
            <span class="qr-subtexto">Escaneá o hacé clic para dejarnos tu comentario sobre la atención:</span>
          </div>
        </div>

        <a 
          href='http://search.google.com/local/writereview?placeid=ChIJ03144TXmopURwCI1NxM1S2c' 
          class="btn btn-comentario"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dejanos tu comentario acá →
        </a>
      </div>

      <!-- Redes Sociales integradas -->
      <div class="bloque-redes">
        <span class="redes-titulo">Seguinos:</span>
        <div class="redes-iconos">
          <a href="https://www.facebook.com/cytecargentina" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <Icono nombre="facebook" tam={24} />
          </a>
          <a href="https://www.instagram.com/cytecargentina/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <Icono nombre="instagram" tam={24} />
          </a>
        </div>
      </div>

    </div>

  </div>

  <p class="legal">© Cytec. Todos los derechos reservados.</p>
</footer>

<style>
  footer { 
    background: var(--primario); 
    color: var(--blanco); 
    padding-top: var(--sep-seccion); 
    width: 100%;
    overflow: hidden;
  }

  /* ============================================================
    COLUMNAS 1 Y 2: TARJETAS DE SEDES BALANCEADAS
    ============================================================ */
  .tarjeta-sede {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: var(--radio);
    padding: 1.5rem 1.35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; /* Ocupa el 100% de la altura de la fila */
  }

  .tarjeta-sede h3 { 
    color: var(--blanco); 
    font-size: 1.15rem;
    margin: 0 0 1rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  .tarjeta-sede p { 
    display: flex; 
    gap: 0.6rem; 
    align-items: flex-start; 
    margin: 0 0 0.65rem; 
    font-size: 0.85rem; 
    line-height: 1.45;
    color: rgba(255, 255, 255, 0.9);
  }

  .sede-accion {
    margin-top: 1.25rem;
  }

  .tarjeta-sede .btn { 
    display: inline-flex; 
    gap: 0.4rem; 
    align-items: center; 
    justify-content: center;
    width: 100%;
    font-size: 0.78rem;
    padding: 0.65rem 1rem;
  }

  /* ============================================================
    COLUMNA 3: TARJETA DE FEEDBACK Y QR COMPACTA
    ============================================================ */
  .tarjeta-feedback {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: var(--radio);
    padding: 1.5rem 1.35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .caja-qr-compacta {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .qr-cabecera {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* Marco del QR con tamaño balanceado */
  .marco-qr {
    background: #ffffff;
    padding: 0.4rem;
    border-radius: 6px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }

  .qr-imagen {
    width: 88px;
    height: 88px;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    display: block;
  }

  .qr-detalles {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .qr-detalles h4 {
    margin: 0 0 0.3rem 0;
    font-size: 0.95rem;
    color: var(--blanco);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    line-height: 1.2;
  }

  .qr-subtexto {
    font-size: 0.78rem;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.85);
  }

  .btn-comentario {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0.76rem;
    font-weight: 700;
    padding: 0.6rem 0.8rem;
    background: var(--acento);
    color: var(--blanco);
    border-radius: var(--radio);
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: background var(--transicion), transform var(--transicion);
  }

  .btn-comentario:hover {
    background: var(--acento-oscuro);
    transform: translateY(-2px);
  }

  /* ============================================================
    REDES SOCIALES COMPACTAS ALINEADAS
    ============================================================ */
  .bloque-redes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.85rem;
    margin-top: 0.85rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .redes-titulo {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.9);
  }

  .redes-iconos {
    display: flex;
    gap: 0.85rem;
    align-items: center;
  }

  .redes-iconos a { 
    color: var(--blanco);
    transition: color var(--transicion), transform var(--transicion); 
    display: inline-flex;
    align-items: center;
    justify-content: center;
  } 

  .redes-iconos a:hover { 
    color: var(--acento); 
    transform: scale(1.15); 
  }

  /* Pie legal */
  .legal { 
    display: flex;
    justify-content: center; 
    margin-top: 2.5rem; 
    padding: 1.25rem; 
    border-top: 1px solid rgba(255, 255, 255, 0.15); 
    font-size: 0.82rem;
    opacity: 0.8;
    text-align: center;
  }

  /* ============================================================
    RESPONSIVE EN DISPOSITIVOS MÓVILES
    ============================================================ */
  @media (max-width: 960px) {
    .tarjeta-sede, .tarjeta-feedback {
      height: auto;
    }
  }

  @media (max-width: 600px) {
    .tarjeta-sede, .tarjeta-feedback {
      padding: 1.25rem 1rem;
    }
    .qr-cabecera {
      flex-direction: column;
      text-align: center;
      gap: 0.75rem;
    }
    .qr-imagen {
      width: 96px;
      height: 96px;
    }
    .bloque-redes {
      justify-content: center;
      gap: 1.25rem;
    }
  }
</style>