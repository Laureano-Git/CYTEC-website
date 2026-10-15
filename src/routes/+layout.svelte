<script>
  // Layout raíz: envuelve TODAS las páginas (estilos globales, cabecera, modal y pie).
  import '../app.css';
  import TopBar from '$lib/components/TopBar.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Modal from '$lib/components/Modal.svelte';
  let { children } = $props();
  let modalTurnos = $state(false);  // controla el modal "Turnos online"
</script>

<TopBar onturnos={() => (modalTurnos = true)} />
<Header />
<main>{@render children()}</main>
<Footer />
<Modal abierto={modalTurnos} oncerrar={() => (modalTurnos = false)} titulo="Turnos online">
  <p>Estamos trabajando en esta sección. Próximamente podrá sacar turnos online.</p>
</Modal>
