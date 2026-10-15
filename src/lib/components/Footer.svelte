<script>
  // Pie de página: un bloque informativo por sede + redes sociales.
  import Icono from './Icono.svelte';
  import { sedes } from '$lib/datos.js';
</script>
<footer id="contacto">
  <div class="contenedor grilla tres">
    {#each sedes as s}
      <div>
        <h3>{s.nombre}</h3>
        <p><Icono nombre="pin" tam={18} /> {s.direccion}</p>
        <p><Icono nombre="telefono" tam={18} /> {s.telefonos}</p>
        <p><Icono nombre="reloj" tam={18} /> {s.horario}</p>
        <a class="btn whatsapp" href={s.whatsapp} target="_blank" rel="noopener"><Icono nombre="whatsapp" tam={16} /> Turnos WhatsApp</a>
      </div>
    {/each}
    <div>
      <h3>Seguinos</h3>
      <p class="redes">
        <a href="https://www.facebook.com/cytecargentina" aria-label="Facebook" target="_blank" rel="noopener"><Icono nombre="facebook" tam={26} /></a>
        <a href="https://www.instagram.com/cytecargentina/" aria-label="Instagram" target="_blank" rel="noopener"><Icono nombre="instagram" tam={26} /></a>
      </p>
    </div>
  </div>
  <p class="legal">© Cytec. Todos los derechos reservados.</p>
</footer>
<style>
  footer { background: var(--primario-oscuro); color: var(--blanco); padding-top: var(--sep-seccion); }
  footer h3 { color: var(--blanco); } p { display: flex; gap: 0.5rem; align-items: flex-start; margin: 0 0 0.6rem; font-size: 0.9rem; }
  .btn { display: inline-flex; gap: 0.4rem; align-items: center; margin-top: 0.5rem; }
  .redes a { transition: color var(--transicion), transform var(--transicion); } .redes a:hover { color: var(--acento); transform: scale(1.15); }
  .legal { justify-content: center; margin-top: 2.5rem; padding: 1rem; border-top: 1px solid rgb(255 255 255 / 0.2); }
</style>
