<script>
  // Componente de iconografía: SVG lineales inline (sin dependencias externas).
  // Uso: <Icono nombre="telefono" tam={20} />
  let { nombre, tam = 24 } = $props();
  // Cada icono es un "path" SVG de 24x24 con trazo (stroke) y sin relleno.
  const trazos = {
    // 📞 Contacto y Navegación
    telefono: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
    pin: 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    reloj: 'M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z',
    flecha_izq: 'M15 5l-7 7 7 7', 
    flecha_der: 'M9 5l7 7-7 7',
    cerrar: 'M6 6l12 12M18 6L6 18', 
    menu: 'M4 6h16M4 12h16M4 18h16',
    // 🏆 Valores Institucionales
    responsabilidad: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5',
    formacion: 'M2 9l10-5 10 5-10 5L2 9zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5',
    tecnologia: 'M4 5h16v11H4zM8 20h8M12 16v4M8 10h3l1.5-2 2 4 1-2H17',
    atencion: 'M12 20s-8-5-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15 12 20 12 20z',
    // 🏥 Símbolo Institucional Médico
    // Cruz médica redondeada con círculo envolvente clínico
    servicio: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 5v10m-5-5h10',
    // 🔬 Iconografía Especializada por Estudio de Diagnóstico
    'pet-ct': 'M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0 M12 2a10 4 0 1 0 0 20a10 4 0 1 0 0-20 M2 12a4 10 0 1 0 20 0a4 10 0 1 0-20 0',
    resonancia: 'M12 3a9 9 0 1 0 9 9 M12 7a5 5 0 1 0 5 5 M12 11a1 1 0 1 0 1 1 M4 12h3 M17 12h3',
    tomografia: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 4a6 6 0 1 0 6 6a6 6 0 0 0-6-6zm0 3a3 3 0 1 0 3 3a3 3 0 0 0-3-3z',
    radiologia: 'M4 4h16v16H4z M9 9h6v6H9z M12 4v3 M12 17v3 M4 12h3 M17 12h3',
    mamografia: 'M12 21a9 9 0 0 1-9-9c0-4.97 4.03-9 9-9s9 4.03 9 9a9 9 0 0 1-9 9zm0-13a4 4 0 0 0-4 4c0 2 2 3 4 5c2-2 4-3 4-5a4 4 0 0 0-4-4z',
    ecografia: 'M2 12c2-4 6-6 10-6s8 2 10 6c-2 4-6 6-10 6s-8-2-10-6zm10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z',
    densitometria: 'M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2 12l2.5-4 2 2.5 3-5',
    espirometria: 'M12 4v8m0-8C9 4 5 7 5 12c0 4 3 7 7 7s7-3 7-7c0-5-4-8-7-8zm0 8c-2 0-3.5 1.5-3.5 3.5S10 19 12 19s3.5-1.5 3.5-3.5S14 12 12 12z',
    nuclear: 'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0 M12 2v4 M12 18v4 M3.5 7l3.5 2 M17 15l3.5 2 M3.5 17l3.5-2 M17 9l3.5-2',
    // Redes Sociales
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
