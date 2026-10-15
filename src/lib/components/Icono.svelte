<script>
  // Componente de iconografía: SVG lineales inline (sin dependencias externas).
  // Uso: <Icono nombre="telefono" tam={20} />
  let { nombre, tam = 24 } = $props();
  // Cada icono es un "path" SVG de 24x24 con trazo (stroke) y sin relleno.
  const trazos = {
    telefono: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
    pin: 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    reloj: 'M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z',
    responsabilidad: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5',
    formacion: 'M2 9l10-5 10 5-10 5L2 9zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5',
    tecnologia: 'M4 5h16v11H4zM8 20h8M12 16v4M8 10h3l1.5-2 2 4 1-2H17',
    atencion: 'M12 20s-8-5-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15 12 20 12 20z',
    servicio: 'M12 3v18M3 12h18M6 6l12 12M18 6L6 18',
    flecha_izq: 'M15 5l-7 7 7 7', flecha_der: 'M9 5l7 7-7 7',
    cerrar: 'M6 6l12 12M18 6L6 18', menu: 'M4 6h16M4 12h16M4 18h16',
    facebook: 'M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8z',
    instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM17.5 6.5h.01'
  };
</script>

{#if nombre === 'whatsapp'}
  <!-- Logo de WhatsApp: burbuja de chat con auricular (trazo lineal) -->
  <svg width={tam} height={tam} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.6L3 21z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.400-2.500-2.500l.8-1-1-2L9 8.500z" />
  </svg>
{:else}
  <svg width={tam} height={tam} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d={trazos[nombre]} />
  </svg>
{/if}
