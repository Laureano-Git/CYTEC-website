// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // preprocess permite procesar CSS avanzado y componentes
preprocess: vitePreprocess(),

kit: {
    // adapter-auto detecta automáticamente Netlify, Vercel o Cloudflare en el despliegue
    adapter: adapter()
}
};

export default config;