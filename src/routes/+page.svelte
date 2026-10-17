<!-- Home: composición de bloques. Alternan fondo blanco / gris claro. -->
<script>
//Seccion "HOME"
  import Slider from '$lib/components/Slider.svelte';
  import Valores from '$lib/components/Valores.svelte';
  import Servicios from '$lib/components/Servicios.svelte';
  import Testimonios from '$lib/components/Testimonios.svelte';
  import Novedades from '$lib/components/Novedades.svelte';
//Seccion "NOSOTROS"
  import QueHacemos from '$lib/components/QueHacemos.svelte';
  import Staff from '$lib/components/Staff.svelte';
  import Calidad from '$lib/components/Calidad.svelte';
  import Docencia from '$lib/components/Docencia.svelte';
  import Pacs from '$lib/components/Pacs.svelte';
//
</script>
<svelte:head><title>CYTEC La Plata — Diagnóstico por imágenes de alta complejidad</title></svelte:head>
<Slider /> 
<!-- Seccion NOSOTROS -->
<QueHacemos /> <Staff /> <Calidad /> <Docencia /> <Pacs />

<Valores /><Servicios /><Testimonios /><Novedades /> 
<section class="seccion" id="coberturas"><div class="contenedor"><h2>Coberturas</h2><p style="text-align:center">Podes consultar en recepción o por WhatsApp por alguna obra social o prepaga con convenio en particular.</p>
    <div class="acciones-home" style="text-align:center">
      <a href="/coberturas" class="btn btn-todas">Ver todas las coberturas</a>
    </div>
  </div></section>
