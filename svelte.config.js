// Configuración de SvelteKit: el adapter-auto detecta la plataforma de despliegue.
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
export default { preprocess: vitePreprocess(), kit: { adapter: adapter() } };
