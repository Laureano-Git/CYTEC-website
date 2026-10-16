// src/routes/servicios/[slug]/+page.js
import { error } from '@sveltejs/kit';
import { serviciosDetalle } from '$lib/datos.js';

export function load({ params }) {
const servicio = serviciosDetalle[params.slug];

if (!servicio) {
    throw error(404, `El servicio solicitado "${params.slug}" no fue encontrado.`);
}

return {
    servicio
};
}
//Archivo para cargar la información antes de randerizar la página, si se escribe una URL inexistente Svelte reotrna error 404 limpio