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
    { texto: 'Qué hacemos', href: '/#que-hacemos' }, { texto: 'Staff', href: '/#staff' },
    { texto: 'Nuestra calidad', href: '/#calidad' }, { texto: 'Convenios y Formacion', href: '/#formacion' },
    { texto: 'PACS', href: '/#pacs' } ] },
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

//Seccion NOSOTROS
export const queHacemosData = {
	titulo: "Qué Hacemos",
	subtitulo: "Centro de Diagnóstico por Imágenes de Alta Complejidad",
	descripcion: [
		"Somos un grupo profesional, técnico y administrativo capacitado para la atención y contención del paciente.",
		"Nuestro staff médico integra un equipo multidisciplinario en diagnóstico por imágenes y medicina nuclear con permanente actualización científica, lo que permite la interpretación de imágenes médicas integradas para obtener diagnósticos de máxima precisión.",
		"Trabajamos en estrecha colaboración con los médicos derivadores para garantizar la indicación del tratamiento adecuado y personalizado para cada paciente."
	],
	pilares: [
		{
			id: "calidad",
			titulo: "Gestión de Calidad ISO 9001:2015",
			detalle: "Sistema certificado para garantizar la satisfacción del paciente y la mejora continua en todos los procesos."
		},
		{
			id: "tecnologia",
			titulo: "Tecnología de Vanguardia",
			detalle: "Segundo centro en el país equipado con dos equipos PET CT dedicados a diagnósticos oncológicos."
		},
		{
			id: "docencia",
			titulo: "Residencias Médicas y Convenios",
			detalle: "Convenio con la Sociedad Argentina de Radiología (S.A.R.), UBA y Fundación Centro Diagnóstico Nuclear para formación de especialistas."
		}
	],
	cta: {
		texto: "Conocé nuestros servicios",
		enlace: "#servicios"
	}
};
export const staffData = {
  titulo: "Nuestro Staff",
  subtitulo: "Equipo médico multidisciplinario de excelencia y permanente actualización científica",
  direccion: [
    { cargo: "Director", nombre: "Dr. Carlos De Pierris" },
    { cargo: "Subdirector", nombre: "Dr. Francisco De Pierris" }
  ],
  departamentos: [
    {
      area: "PET-CT + RM",
      profesionales: ["Dr. Gabriel Bruno", "Dr. Christian González", "Dr. Victor Mártire"]
    },
    {
      area: "RMN (Resonancia Magnética)",
      profesionales: [
        "Dr. Agustín Marrero",
        "Dr. Leandro Mazza",
        "Dr. Nicolás Cédola",
        "Dr. Enrique Mc Guire",
        "Dra. Florencia Polichella"
      ]
    },
    {
      area: "TAC (Tomografía Computada)",
      profesionales: [
        "Dr. Agustín Marrero",
        "Dr. Leandro Mazza",
        "Dr. Nicolás Cédola",
        "Dra. Florencia Polichella"
      ]
    },
    {
      area: "Medicina Nuclear",
      profesionales: ["Dr. Lucio Oscar Cendoya", "Dr. Héctor Guillermo Marrero", "Dr. Victor Mártire"]
    },
    {
      area: "Ecografía y Radiología Digital (ECO / RX)",
      profesionales: [
        "Dr. Luciano Melita",
        "Dra. Laura Martínez",
        "Dra. Laura Ivankovic",
        "Dra. Ana Pievani",
        "Dra. Evangelina Calzone",
        "Dra. Victoria Mártire",
        "Dr. Agustín Marrero",
        "Dr. Leandro Mazza",
        "Dr. Nicolás Cédola",
        "Dra. Florencia Polichella"
      ]
    },
    {
      area: "Cardiología",
      profesionales: ["Dr. Víctor Mártire"]
    },
    {
      area: "Clínica Médica",
      profesionales: ["Dr. Guenaga Fernando"]
    },
    {
      area: "Neurología",
      profesionales: ["Dr. Pepa Daniel"]
    },
    {
      area: "Especialista en Neurología en RM y TAC",
      profesionales: ["Dr. Enrique Mc Guire"]
    }
  ]
};
export const calidadData = {
  titulo: 'Nuestra Calidad',
  subtitulo: 'Sistema de Gestión de la Calidad según lineamientos de la Norma ISO 9001:2015',
  declaracion: [
    'Con el propósito de dar satisfacción a sus pacientes y médicos derivadores, desde la recepción previa a la práctica hasta la medición final de la conformidad, CyTec S.A. mantiene un Sistema de Gestión de la Calidad certificado internacionalmente.',
    'Esta política es entendida, implantada y mantenida en todos los niveles de la organización, contando con el total compromiso y apoyo de la Dirección.'
  ],
  certificacion: {
    norma: 'ISO 9001:2015',
    organismo: 'Sistema de Gestión Certificado',
    sedes: ['Sede Central La Plata', 'Anexo Florencio Varela']
  },
  politicas: [
    {
      titulo: 'Satisfacción y Requisitos',
      descripcion: 'Prioridad absoluta en dar cumplimiento estricto a las expectativas y necesidades de los pacientes.'
    },
    {
      titulo: 'Marco Regulatorio',
      descripcion: 'Ajuste continuo a las normativas sanitarias y regulaciones legales vigentes.'
    },
    {
      titulo: 'Capacitación Permanente',
      descripcion: 'Actualización y entrenamiento continuo del personal médico, técnico y administrativo.'
    },
    {
      titulo: 'Tecnología e Innovación',
      descripcion: 'Incorporación permanente de tecnología avanzada. Segundo centro en el país con dos equipos PET CT dedicados a oncología.'
    },
    {
      titulo: 'Control y Eficiencia',
      descripcion: 'Identificación temprana y eliminación de errores, reduciendo no conformidades y tiempos de respuesta.'
    },
    {
      titulo: 'Mejora Continua',
      descripcion: 'Recepción activa de sugerencias de pacientes y médicos para la optimización de procesos y servicios.'
    }
  ]
};
export const formacionData = {
  titulo: 'Docencia e Investigación',
  subtitulo: 'Compromiso con la formación médica continua y la excelencia académica',
  bloques: [
    {
      id: 'residencias',
      badge: 'Formación Médica',
      titulo: 'Residencias Médicas',
      cuerpo: 'Ciencia y Tecnología en Imágenes (CYTEC) suscribió en el año 2000 un convenio de enseñanza con la Sociedad Argentina de Radiología (S.A.R.) y la Universidad de Buenos Aires (U.B.A.), por el cual está reconocido por el Ministerio de Salud Pública y Medio Ambiente con Resolución Nº 2631, Art. 21, Ley Nº 17132 para la formación de médicos residentes en el área de diagnóstico por imágenes.',
      datosClave: [
        { etiqueta: 'Título obtenido', valor: 'Especialista en Diagnóstico por Imágenes' },
        { etiqueta: 'Duración', valor: '4 años' }
      ]
    },
    {
      id: 'convenios',
      badge: 'Alianza Estratégica',
      titulo: 'Convenio Centro Diagnóstico Nuclear',
      cuerpo: 'CyTec mantiene un convenio de reciprocidad con la Fundación Centro Diagnóstico Nuclear para la formación de recursos humanos altamente especializados en el campo del diagnóstico y tratamiento, como así también para el desarrollo de la ciencia y el impulso de aplicaciones avanzadas en Medicina Nuclear, Diagnóstico por Imágenes y disciplinas afines.',
      datosClave: [
        { etiqueta: 'Áreas de trabajo', valor: 'Medicina Nuclear y Teranóstica' },
        { etiqueta: 'Propósito', valor: 'Desarrollo científico e innovación' }
      ]
    }
  ]
};
export const pacsData = {
  titulo: 'Sistema PACS',
  subtitulo: 'Picture Archiving and Communication System — Archivo y visualización digital de estudios médicos',
  introduccion: 'CyTec cuenta con una moderna plataforma digital PACS que permite a pacientes y profesionales médicos acceder a las imágenes diagnósticas e informes de manera remota, ágil y segura desde cualquier dispositivo.',
  caracteristicas: [
    {
      titulo: 'Disponibilidad 24/7',
      descripcion: 'Acceso inmediato a los estudios médicos digitalizados en cualquier momento y desde cualquier lugar.'
    },
    {
      titulo: 'Formato DICOM Estándar',
      descripcion: 'Visualización de imágenes diagnósticas en máxima resolución y calidad para evaluación médica especializada.'
    },
    {
      titulo: 'Seguridad y Privacidad',
      descripcion: 'Entorno protegido para resguardar la confidencialidad de los historiales e informes de cada paciente.'
    }
  ],
  acceso: {
    mensaje: 'Ingrese al Portal Web para visualizar y descargar sus estudios médicos:',
    url: PORTAL_WEB,
    textoBoton: 'Acceder al Portal PACS'
  }
};
//