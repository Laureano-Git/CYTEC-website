<script>
  import { testimonios } from '$lib/datos.js';
</script>
<section class="seccion">
  <div class="contenedor">
    <h2>Testimonios</h2>
    <div class="grilla tres">
      {#each testimonios as t}
        <figure><blockquote>{t.texto}</blockquote><figcaption>{t.autor}</figcaption></figure>
      {/each}
    </div>
  </div>
</section>
<style>
  figure { margin: 0; padding: 1.5rem; background: var(--gris-claro); border-left: 4px solid var(--acento); border-radius: var(--radio); }
  blockquote { margin: 0 0 1rem; font-style: italic; }
  figcaption { font-weight: 700; color: var(--primario); }
</style>
