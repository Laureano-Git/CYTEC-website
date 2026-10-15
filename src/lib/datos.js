// ============================================================
// DATOS DEL SITIO (fuente: https://cyteclaplata.com.ar)
// Separar contenido de presentación permite editar textos sin
// tocar componentes. En producción podría venir de un CMS/API.
// ============================================================
export const WHATSAPP_LA_PLATA = 'https://api.whatsapp.com/send?phone=5492216139002';
export const PORTAL_WEB = "http://cytec.ddns.net:8080/login"

// Menú multinivel: un ítem con "hijos" se muestra como dropdown
export const menu = [
  { texto: 'Home', href: '/' },
  { texto: 'Nosotros', hijos: [
    { texto: 'Qué hacemos', href: '/#nosotros' }, { texto: 'Staff', href: '/#nosotros' },
    { texto: 'Nuestra calidad', href: '/#nosotros' }, { texto: 'Convenios', href: '/#coberturas' },
    { texto: 'PACS', href: '/#nosotros' } ] },
  { texto: 'Servicios', hijos: [
    { texto: 'PET CT Multislice', href: '/#servicios' }, { texto: 'Tomografía', href: '/#servicios' },
    { texto: 'Resonancia Magnética', href: '/#servicios' }, { texto: 'Radiología Digital', href: '/#servicios' },
    { texto: 'Medicina Nuclear', href: '/#servicios' }, { texto: 'Mamografía Digital', href: '/#servicios' },
    { texto: 'Espinografía Digital', href: '/#servicios' }, { texto: 'Ecografía', href: '/#servicios' },
    { texto: 'Densitometría Ósea', href: '/#servicios' } ] },
  { texto: 'Cytec Bebé', href: '/#servicios' },
  { texto: 'Novedades', href: '/#novedades' },
  { texto: 'Coberturas', href: '/#coberturas' },
  { texto: 'Contacto', href: '/#contacto' }
];

// Slides del carrusel. "imagen" apunta a /static/img (reemplazar por fotos reales del equipamiento)
export const slides = [
  { titulo: 'Diagnóstico por imágenes de alta complejidad', texto: 'Tecnología de avanzada al servicio de tu salud.', imagen: '/img/slide-1.jpg', color: '#0a7fb5' },
  { titulo: 'PET CT Multislice y PET CT + RM', texto: 'Estudios de cuerpo entero con equipamiento de última generación.', imagen: '/img/slide-2.jpg', color: '#075f87' },
  { titulo: 'Cytec Bebé', texto: 'Espacios amables y respetuosos para nuestros héroes del futuro.', imagen: '/img/slide-3.jpg', color: '#0d93a8' }
];

export const valores = [
  { icono: 'responsabilidad', titulo: 'Responsabilidad', texto: 'Contamos con equipos profesionales comprometidos.' },
  { icono: 'formacion', titulo: 'Formación', texto: 'Creemos en la formación científica permanente.' },
  { icono: 'tecnologia', titulo: 'Tecnología', texto: 'Contamos con tecnología de avanzada.' },
  { icono: 'atencion', titulo: 'Atención', texto: 'Nos caracteriza la calidad de atención de nuestro personal.' }
];

export const servicios = [
  'Espinografía digital', 'PET CT Multislice y PET CT+RM', 'Resonancia magnética', 'Tomografía',
  'Mamografía digital', 'Ecografía', 'Medicina nuclear', 'Radiología digital', 'Densitometría ósea digital'
];

export const testimonios = [
  { autor: 'Mirta del Carmen Lopez', texto: 'El lugar es muy agradable. Todos muy respetuosos. Me gustó mucho.' },
  { autor: 'Sonia Varela', texto: 'Excelente atención desde que entré. Me hicieron un PET CT de cuerpo entero y me sentí muy bien.' },
  { autor: 'Pablo Tejero', texto: 'Excelente atención y amabilidad de sus empleados.' }
];

export const novedades = [
  { fecha: '30 May', titulo: 'Héroes Cytec', texto: 'Madres y padres confían en CYTEC para el diagnóstico de sus hijos. Creamos espacios amables para ellos.' },
  { fecha: '1 May', titulo: '¡Feliz día!', texto: 'Saludamos a nuestra comunidad y agradecemos a todo nuestro staff por su dedicación y profesionalismo.' },
  { fecha: '30 Abr', titulo: 'El encuentro de dos campeones', texto: 'Compartimos el encuentro con quienes nos eligen como su centro de diagnóstico por imágenes.' }
];

export const sedes = [
  { nombre: 'La Plata', direccion: 'Calle 8 nº 607 e/ 44 y 45 [B1900TGQ]', telefonos: '+54 221 425-7412 | 421-1067 / 1892 / 2074',
    whatsapp: 'https://api.whatsapp.com/send?phone=5492216139002', horario: 'Lunes a Viernes: 8:00 a 20:00 hs. Sábados: 8:00 a 12:00 hs.' },
  { nombre: 'Florencio Varela', direccion: 'Bartolomé Mitre Nº 40', telefonos: '(011) 4237-5458 | 4355-2957 | 4355-4833',
    whatsapp: 'https://api.whatsapp.com/send?phone=5491153388292', horario: 'Lunes a Viernes: 9:00 a 15:00 hs.' }
];
