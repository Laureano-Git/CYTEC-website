// src/routes/novedades/[slug]/+page.js
import { error } from '@sveltejs/kit';
import { novedades } from '$lib/datos.js';

export function load({ params }) {
const noticia = novedades.find((n) => n.slug === params.slug);

if (!noticia) {
    throw error(404, `La publicación "${params.slug}" no existe.`);
}

return {
    noticia
};
}