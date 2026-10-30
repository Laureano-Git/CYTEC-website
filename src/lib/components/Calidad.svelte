<!-- src/lib/components/Calidad.svelte -->
<script>
    import { calidadData } from '$lib/datos.js';
</script>

<section class="seccion calidad-section" id="calidad" aria-labelledby="titulo-calidad">
    <div class="contenedor">
    
    <!-- Encabezado de la Sección -->
    <header class="encabezado-seccion">
    <h2 id="titulo-calidad">{calidadData.titulo}</h2>
    <p class="subtitulo">{calidadData.subtitulo}</p>
    </header>

    <!-- Tarjeta Principal de Calidad (Layout Balanceado en 2 Columnas) -->
    <div class="tarjeta-principal-calidad">
    
    <!-- 📸 Columna 1: Imagen del Certificado / Acreditación -->
    <div class="columna-visual">
        <div class="marco-imagen-calidad">
        <img 
            src={calidadData.imagen?.src || '/img/calidad-iso.jpg'} 
            alt={calidadData.imagen?.alt || 'Certificación de Calidad ISO 9001:2015'} 
            loading="lazy"
            decoding="async"
        />
        <div class="overlay-badge">
            <span class="norma-tag">{calidadData.certificacion.norma}</span>
        </div>
        </div>
    </div>

    <!-- 📝 Columna 2: Declaración Institucional + Certificados PDF -->
    <div class="columna-contenido">
        
        <div class="encabezado-declaracion">
        <span class="organismo-tag">{calidadData.certificacion.organismo}</span>
        <h3>Compromiso con la Excelencia Médica</h3>
        </div>

        <div class="cuerpo-declaracion">
        {#each calidadData.declaracion as parrafo}
            <p>{parrafo}</p>
        {/each}
        </div>

        <!-- Enlaces directos a los PDFs de cada sede (sin forzar descarga) -->
        <div class="bloque-certificados">
        <span class="titulo-certificados">Certificados Oficiales Homologados:</span>
        <div class="sedes-lista">
            {#each calidadData.certificacion.sedes as sede}
            <a 
                href={sede.pdf} 
                class="btn-sede-pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                title={`Ver certificado PDF de ${sede.nombre} en nueva pestaña`}
            >
                <span class="check-icon" aria-hidden="true">✔</span>
                <span class="nombre-sede">{sede.nombre}</span>
                <span class="icono-abrir" aria-hidden="true">↗</span>
            </a>
            {/each}
        </div>
        </div>

    </div>

    </div>

    <!-- Nivel Inferior: Políticas de Calidad -->
    <div class="politicas-header">
    <h3>Nuestra Política de Calidad</h3>
    </div>

    <div class="grilla tres">
    {#each calidadData.politicas as item, i}
        <article class="tarjeta-politica">
          <span class="numero-item" aria-hidden="true">0{i + 1}</span>
          <h4>{item.titulo}</h4>
          <p>{item.descripcion}</p>
        </article>
    {/each}
    </div>

    </div>
</section>

<style>
    .calidad-section {
    scroll-margin-top: 80px;
    background: var(--blanco);
    padding-block: var(--sep-seccion);
    }

    .encabezado-seccion {
    text-align: center;
    margin-bottom: 3rem;
    }

.subtitulo {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--primario-oscuro);
    margin-top: -0.5rem;
    max-width: 750px;
    margin-inline: auto;
}

/* ============================================================
    SPLIT CARD BALANCEADA (Solución al texto estirado e imagen)
============================================================ */
.tarjeta-principal-calidad {
    background: var(--gris-claro);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    overflow: hidden;
    display: grid;
    grid-template-columns: 42% 58%; /* Proporción ideal entre imagen y texto */
    gap: 0;
    margin-bottom: 4rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

/* Columna Visual */
.columna-visual {
    position: relative;
    background: var(--primario-oscuro);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 380px;
}

.marco-imagen-calidad {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100%;
    display: flex;
}

.marco-imagen-calidad img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Se adapta sin recortar caras ni títulos clave */
    display: block;
    transition: transform var(--transicion);
}

.tarjeta-principal-calidad:hover .marco-imagen-calidad img {
    transform: scale(1.03);
}

.overlay-badge {
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    background: rgba(10, 127, 181, 0.92);
    backdrop-filter: blur(6px);
    color: var(--blanco);
    padding: 0.4rem 0.9rem;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 2;
}

.norma-tag {
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.05em;
}

/* Columna de Contenido */
.columna-contenido {
    padding: 3rem 2.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
}

.organismo-tag {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--primario);
    background: rgba(10, 127, 181, 0.12);
    padding: 0.3rem 0.65rem;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.encabezado-declaracion h3 {
    margin: 0;
    font-size: 1.45rem;
    color: var(--primario-oscuro);
    line-height: 1.3;
}

.cuerpo-declaracion {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.cuerpo-declaracion p {
    margin: 0;
    font-size: 0.98rem;
    line-height: 1.75;
    color: var(--texto);
    max-width: 65ch; /* Ancho de lectura óptimo: evita líneas infinitas */
}

/* Bloque de Enlaces PDF */
.bloque-certificados {
    margin-top: 0.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--gris-borde);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.titulo-certificados {
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #64748b;
    letter-spacing: 0.06em;
}

.sedes-lista {
    display: flex;
    gap: 0.85rem;
    flex-wrap: wrap;
}

.btn-sede-pdf {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.84rem;
    font-weight: 600;
    background: var(--blanco);
    color: var(--primario-oscuro);
    border: 1px solid var(--gris-borde);
    padding: 0.55rem 1rem;
    border-radius: 9999px;
    text-decoration: none;
    transition: all var(--transicion);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
}

.btn-sede-pdf:hover {
    background: var(--primario);
    color: var(--blanco);
    border-color: var(--primario);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(10, 127, 181, 0.25);
  }

  .check-icon {
    color: var(--acento-oscuro);
    font-weight: 800;
    font-size: 0.9rem;
    transition: color var(--transicion);
  }

  .btn-sede-pdf:hover .check-icon {
    color: var(--blanco);
  }

  .icono-abrir {
    font-size: 0.8rem;
    opacity: 0.65;
    transition: transform var(--transicion);
  }

  .btn-sede-pdf:hover .icono-abrir {
    transform: translate(2px, -2px);
    opacity: 1;
  }

/* ============================================================
POLÍTICAS DE CALIDAD (3 Principios Inferiores)
============================================================ */
.politicas-header {
    text-align: center;
    margin-bottom: 2rem;
}

.politicas-header h3 {
    color: var(--primario);
    font-size: 1.3rem;
}

.tarjeta-politica {
    background: var(--blanco);
    border: 1px solid var(--gris-borde);
    border-radius: var(--radio);
    padding: 2rem 1.75rem;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    transition: transform var(--transicion), box-shadow var(--transicion), border-color var(--transicion);
}

.tarjeta-politica:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(10, 127, 181, 0.12);
    border-color: var(--primario);
}

.numero-item {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--primario);
    opacity: 0.8;
    display: block;
    margin-bottom: 0.5rem;
}

.tarjeta-politica h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--primario-oscuro);
}

.tarjeta-politica p {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--texto);
    opacity: 0.9;
  }

/* ============================================================
    RESPONSIVE DESIGN (Tablets y Smartphones)
============================================================ */
@media (max-width: 960px) {
    .tarjeta-principal-calidad {
      grid-template-columns: 1fr; /* Colapsa armónicamente a 1 columna */
    }

    .columna-visual {
        min-height: 260px;
        max-height: 320px;
    }

    .columna-contenido {
        padding: 2.25rem 1.75rem;
    }

    .cuerpo-declaracion p {
        max-width: 100%;
    }
}

@media (max-width: 600px) {
    .columna-visual {
        min-height: 200px;
    }

    .columna-contenido {
        padding: 1.75rem 1.25rem;
    }

    .encabezado-declaracion h3 {
        font-size: 1.2rem;
    }

    .sedes-lista {
        flex-direction: column;
    }

    .btn-sede-pdf {
        width: 100%;
        justify-content: center;
    }
}
</style>