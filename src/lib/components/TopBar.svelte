<script>
  // Barra superior de contacto: teléfonos, horarios y botón de turnos por WhatsApp.
  import Icono from './Icono.svelte';
  import { WHATSAPP_LA_PLATA, PORTAL_WEB } from '$lib/datos.js';
  // "onturnos" es un callback recibido del padre: abre el modal de turnos online.
  let { onturnos } = $props();
</script>

<div class="topbar">
  <div class="contenedor fila">
    <span><Icono nombre="telefono" tam={16} /> La Plata: +54 9 2216 13-9002</span>
    <span class="oculto-movil"><Icono nombre="reloj" tam={16} /> Lun a Vie 8:00 a 20:00 hs · Sáb 8:00 a 12:00 hs</span>
    <span class="acciones">
      <a class="btn whatsapp chico" href={WHATSAPP_LA_PLATA} target="_blank" rel="noopener"><Icono nombre="whatsapp" tam={16} /> Turnos WhatsApp</a>
      <a class="btn chico" href={PORTAL_WEB}>Portal pacientes</a>
    </span>
  </div>
</div>

<style>
  .topbar { background: var(--primario-oscuro); color: var(--blanco); font-size: 0.8rem; padding-block: 0.5rem; }
  .fila { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
  span { display: inline-flex; align-items: center; gap: 0.4rem; }
  .acciones { gap: 0.5rem; }
  .chico { padding: 0.4rem 0.8rem; font-size: 0.72rem; display: inline-flex; align-items: center; gap: 0.35rem; }
  @media (max-width: 800px) { .oculto-movil { display: none; } }
</style>
