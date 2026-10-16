<!-- src/lib/components/QueHacemos.svelte -->
<script>
	/**
	 * @component QueHacemos
	 * @description Componente informativo institucional para la sección "Qué Hacemos".
	 * Diseñado para integrarse como sección anclable desde la navegación móvil/hamburguesa.
	 */
	import { queHacemosData } from '$lib/datos.js';

	// Permitimos opcionalmente inyectar props para sobrescribir o testear el componente
	export let data = queHacemosData;
</script>

<section id="que-hacemos" class="que-hacemos-section" aria-labelledby="que-hacemos-title">
	<div class="container">
		<!-- Encabezado de la sección -->
		<header class="section-header">
			<span class="badge">Institucional</span>
			<h2 id="que-hacemos-title">{data.titulo}</h2>
			<p class="subtitle">{data.subtitulo}</p>
		</header>

		<!-- Cuerpo explicativo -->
		<div class="content-grid">
			<article class="narrative">
				{#each data.descripcion as parrafo, index (index)}
					<p>{parrafo}</p>
				{/each}

				{#if data.cta}
					<a href={data.cta.enlace} class="btn-primary">
						{data.cta.texto}
					</a>
				{/if}
			</article>

			<!-- Tarjetas de pilares / atributos de valor -->
			<aside class="cards-grid" aria-label="Pilares institucionales">
				{#each data.pilares as pilar (pilar.id)}
					<div class="card">
						<div class="indicator-bar" aria-hidden="true"></div>
						<h3>{pilar.titulo}</h3>
						<p>{pilar.detalle}</p>
					</div>
				{/each}
			</aside>
		</div>
	</div>
</section>

<style>
	
	/* Uso de variables y unidades relativas (rem, ch) para garantizar consistencia y accesibilidad.*/
	.que-hacemos-section {
		padding: 5rem 1.5rem;
		background-color: var(--color-bg-light, #f8fafc);
		color: var(--color-text, #1e293b);
		scroll-margin-top: 5rem; /* Evita que el Header fijo tape el título al scrollear */
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3.5rem;
	}

	.badge {
		display: inline-block;
		text-transform: uppercase;
		font-size: 0.8125rem;
		letter-spacing: 0.08em;
		font-weight: 700;
		color: var(--color-primary, #0284c7);
		background-color: var(--color-primary-light, #e0f2fe);
		padding: 0.35rem 0.85rem;
		border-radius: 9999px;
		margin-bottom: 0.75rem;
	}

	h2 {
		font-size: clamp(2rem, 4vw, 2.75rem);
		font-weight: 800;
		line-height: 1.2;
		color: var(--color-heading, #0f172a);
		margin: 0 0 0.5rem 0;
	}

	.subtitle {
		font-size: 1.125rem;
		color: var(--color-text-muted, #64748b);
		max-width: 60ch;
		margin: 0 auto;
	}

	/* Disposición responsiva con CSS Grid */
	.content-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		align-items: start;
	}

	@media (min-width: 992px) {
		.content-grid {
			grid-template-columns: 1.1fr 0.9fr;
			gap: 4rem;
		}
	}

	.narrative {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.narrative p {
		font-size: 1.05rem;
		line-height: 1.75;
		color: var(--color-text, #334155);
		margin: 0;
	}

	.btn-primary {
		align-self: flex-start;
		margin-top: 1rem;
		padding: 0.85rem 1.75rem;
		background-color: var(--color-primary, #0284c7);
		color: #ffffff;
		border-radius: 8px;
		font-weight: 600;
		text-decoration: none;
		transition: background-color 0.2s ease, transform 0.15s ease;
	}

	.btn-primary:hover {
		background-color: var(--color-primary-dark, #0369a1);
		transform: translateY(-2px);
	}

	.cards-grid {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.card {
		position: relative;
		padding: 1.75rem;
		background-color: #ffffff;
		border-radius: 12px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
		border: 1px solid var(--color-border, #e2e8f0);
		transition: box-shadow 0.25s ease;
		overflow: hidden;
	}

	.card:hover {
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
	}

	.indicator-bar {
		position: absolute;
		top: 0;
		left: 0;
		width: 4px;
		height: 100%;
		background-color: var(--color-primary, #0284c7);
	}

	.card h3 {
		font-size: 1.15rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: var(--color-heading, #0f172a);
	}

	.card p {
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--color-text-muted, #64748b);
		margin: 0;
	}
</style>