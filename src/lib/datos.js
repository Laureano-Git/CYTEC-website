// ============================================================
// DATOS DEL SITIO (fuente: https://cyteclaplata.com.ar)
// Separar contenido de presentación permite editar textos sin
// tocar componentes. En producción podría venir de un CMS/API.
// ============================================================
export const WHATSAPP_LA_PLATA = 'https://api.whatsapp.com/send?phone=5492216139002';
export const PORTAL_WEB = "http://cytec.ddns.net:8080/login"
export const DOPPLER = {titulo: 'Doppler:', subtipos:[
      'Ecocardiagrafía bidimensional.', ' Doppler color cardíaco.', 'Doppler color carotídeo.','Doppler color periférico arterial y venoso.','Doppler color transesofágico.',
      'Doppler Color en la Evaluación de la Circulación de la Mano (Art./Ven.).', 'Doppler color en la Evaluación de la Circulación del Pie (Art./Ven.).', 
      'Doppler Color en la Evaluación de Tumores de Mama.', 'Doppler Color Ginecológico Endovaginal (Descarte de C.A. ovárico, etc)', 'Doppler Color Obstétrico Endovaginal.',
      'Doppler Color Prostático Endorectal.', 'Doppler Color en la Evaluación de procesos Musculoesqueléticos.', 'Doppler Color Peneano.'
      ]};
export const GENERAL ={ titulo: 'General:', subtipos:[
      'Completa de Abdomen.', 'Hepática Biliar.', 'Renal Bilateral.',
      'Pancreática.', 'Vesical Prostática.', 'Testicular Tocoginecológica.',
      'De Tiroides.', 'Mamaria Bilateral.'
      ]};
export const ESPECIALES = {titulo: 'Especiales:', subtipos:[
        'Ultrasonido transvaginal o endovaginal.', 'Ultrasonido transrectal.', 'Tendón de Aquiles.', 
        'Tendón patelar.', 'Cerebral.', 'Caderas.','Glándulas Submaxilares.',
        'De Pene y testículos.', 'De Músculos.', '4D - 5D fetal'
      ]};



// Menú multinivel: un ítem con "hijos" se muestra como dropdown
export const menu = [
  { texto: 'Home', href: '/' },
  { texto: 'Nosotros', hijos: [
      { texto: 'Qué hacemos', href: '/#que-hacemos' },
      { texto: 'Staff', href: '/#staff' },
      {texto: 'Nuestra calidad', href: '/#calidad' },
      { texto: 'Convenios y Formacion', href: '/#formacion' },
      { texto: 'PACS', href: '/#pacs' } 
    ] 
  },
  { texto: 'Servicios', hijos: [
      { texto: 'PET CT Multislice', href: '/servicios/pet-ct-multislice' }, 
      { texto: 'Tomografía', href: '/servicios/tomografia' },
      { texto: 'Resonancia Magnética', href: '/servicios/resonancia-magnetica' },
      { texto: 'Radiología Digital', href: '/servicios/radiologia-digital' },
      { texto: 'Medicina Nuclear', href: '/servicios/medicina-nuclear' },
      { texto: 'Mamografía Digital', href: '/servicios/mamografia-digital' },
      { texto: 'Espirometria Computada', href: '/servicios/espirometria-computada' },
      { texto: 'Ecografía', href: '/servicios/ecografia' },
      { texto: 'Densitometría Ósea', href: '/servicios/densitometria-osea' } 
    ] 
  },
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
  'Espirometría computada', 'PET CT Multislice y PET CT+RM', 'Resonancia magnética', 'Tomografía',
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
//Seccion SERVICIOS
export const serviciosDetalle = {
  'pet-ct-multislice': {
    slug: 'pet-ct-multislice',
    titulo: 'PET-CT Multislice',
    subtitulo: 'Tomografía por Emisión de Positrones fusionada con Tomografía Computada Multicorte',
    descripcion: [
      'El PET-CT es uno de los métodos diagnósticos más avanzados de la medicina moderna. Integra en una única exploración la información metabólica y biológica molecular que aporta el PET con el detalle anatómico milimétrico que brinda la tomografía multicorte de alta resolución.',
      'Esta correlación anatomo-funcional permite evaluar la actividad biológica de los tejidos antes de que se produzcan alteraciones morfológicas estructurales detectables por métodos convencionales.'
    ],
    // 1. Aplicaciones Principales
    aplicacionesPrincipales: [
      'Detección precoz y caracterización de lesiones.',
      'Diferenciación certera entre tejidos tumorales viables y fibrosis o necrosis post-tratamiento.',
      'Estadificación inicial precisa y reestadificación tras cirugía, quimioterapia o radioterapia.',
      'Monitorización temprana de la eficacia terapéutica en ciclos oncológicos.',
      'Detección precoz de recurrencias o recidivas ante elevación de marcadores tumorales.',
      'Localización y selección óptima del sitio de biopsia en masas heterogéneas.',
      'Planificación tridimensional guiada de volúmenes biológicos en radioterapia.'
    ],
    // 2. Aplicaciones Clínicas por Especialidad
    aplicacionesClinicas: [
      {
        area: 'Oncología',
        descripcion: 'Es el campo de mayor impacto. Proporciona información determinante en el manejo y pronóstico de patologías como:',
        items: [
          'Linfomas (Hodgkin y No Hodgkin): estadificación y control post-quimioterapia.',
          'Cáncer de pulmón y caracterización de nódulo pulmonar solitario.',
          'Cáncer colorrectal, esofágico, gástrico y de páncreas.',
          'Melanoma maligno y tumores de cabeza y cuello.',
          'Cáncer de mama, tumores ginecológicos (cérvix, ovario) y urológicos.'
        ]
      },
      {
        area: 'Neurodiagnóstico',
        descripcion: 'Evaluación no invasiva de la actividad metabólica cerebral y el consumo regional de glucosa:',
        items: [
          'Detección y diagnóstico diferencial de demencias (Enfermedad de Alzheimer vs. Demencia Frontotemporal).',
          'Localización precisa del foco epileptógeno refractario para evaluación prequirúrgica.',
          'Diferenciación entre radionecrosis y recidiva en tumores cerebrales primarios.'
        ]
      },
      {
        area: 'Cardiología',
        descripcion: 'Estudio funcional de precisión miocárdica:',
        items: [
          'Evaluación de viabilidad miocárdica en miocardiopatías isquémicas.',
          'Determinación de tejido hibernado antes de procedimientos de revascularización coronaria (angioplastia o bypass).'
        ]
      }
    ],
    // 3. Fusión Tecnológica Avanzada: PET-CT + RM
    fusionPETRM: {
      titulo: 'Tecnología Avanzada: PET-CT + RM',
      descripcion: 'En CYTEC integramos la información metabólica del PET-CT con imágenes morfológicas de Resonancia Magnética (RM). Este protocolo combinado de co-registro híbrido proporciona un contraste insuperable en tejidos blandos, fundamental en la evaluación de patologías del sistema nervioso central, tumores pélvicos, patología musculoesquelética y lesiones hepáticas complejas, minimizando la exposición y maximizando la exactitud diagnóstica.'
    },
    // 4. Preparación Previa
    preparacion: [
      'Ayuno estricto de 6 horas previas al estudio (sólo se permite ingerir agua pura sin gas).',
      'No consumir azúcares, pastas, harinas, cafeína, alcohol ni bebidas gaseosas las 24 horas previas (dieta hipoglúcida e hiperproteica).',
      'Suspender la actividad física intensa, deportes o esfuerzos musculares durante las 48 horas previas al examen.',
      'Pacientes diabéticos: dar aviso obligatorio al solicitar el turno para coordinar un régimen glucémico y horario de turno especial.',
      'Asistir con ropa cómoda y abrigada, sin cierres, tachas, botones metálicos ni joyas.',
      'Disponer de una permanencia aproximada en el centro de 2 a 3 horas (incluye tiempo de reposo, incorporación del trazador y escaneo).',
      'Presentar orden médica autorizada y todos los estudios diagnósticos previos relacionados (TAC, RMN, informes de biopsia o PET previos).'
    ],
    // 5. Requisitos
    requisito:[
      'coordinación de radiofármaco, carnet de obra social y orden médica'
    ],
    // 6. Localidad donde se realiza
    localidad:[
      'La Plata - Calle 8 nº 607 e/ 44 y 45 - Lunes a Viernes: 8:00 a 20:00 hs. Sábados: 8:00 a 12:00 hs.'
    ]
  },
  'tomografia': {
    slug: 'tomografia',
    titulo: 'Tomografía Computada Multislice',
    subtitulo: 'Diagnóstico anatómico rápido de alta resolución y reconstrucción tridimensional (3D)',
    descripcion: [
      'La Tomografía Computada Multislice (TAC) es una técnica diagnóstica no invasiva que emplea rayos X combinados con detectores digitales de alta sensibilidad para obtener imágenes axiales transversales del cuerpo.',
      'El sistema multidetector de CYTEC permite adquisiciones volumétricas en escasos segundos, generando reconstrucciones multiplanares (coronal, sagital, oblicuas) y representaciones tridimensionales de vasos sanguíneos, huesos y órganos blandos con una nitidez milimétrica.'
    ],
    // 1. Aplicaciones Principales
    aplicacionesPrincipales: [
      'Estudio integral de traumatismos agudos, fracturas complejas y evaluación de politraumatizados.',
      'Diagnóstico de patología respiratoria y pulmonar mediante Tomografía de Alta Resolución (TACAR).',
      'Evaluación de dolor abdominal agudo (apendicitis, diverticulitis, litiasis renal, obstrucción intestinal).',
      'Detección y control de procesos oncológicos, adenopatías y estadificación de tumores abdominales y torácicos.',
      'Angiotomografía computada (Angio-TAC) para mapeo vascular cerebral, aórtico, pulmonar y periférico.',
      'Planificación prequirúrgica mediante navegación y renderizado 3D de estructuras anatómicas.'
    ],
    // 2. Aplicaciones Clínicas por Área
    aplicacionesClinicas: [
      {
        area: 'Neurología y Cabeza / Cuello',
        descripcion: 'Exploración veloz del sistema nervioso central y macizo facial:',
        items: [
          'Accidente Cerebrovascular (ACV) isquémico o hemorrágico agudo.',
          'Traumatismo encéfalo-craneano (TEC) y evaluación de hematomas intracraneales.',
          'Senos paranasales, órbitas, peñascos y mastoides en cortes ultrafinos.'
        ]
      },
      {
        area: 'Tórax, Abdomen y Pelvis',
        descripcion: 'Estudio exhaustivo de cavidades y órganos internos:',
        items: [
          'Evaluación de parénquima pulmonar, nódulos, tromboembolismo pulmonar (TEP) e infecciones.',
          'Hígado, vías biliares, páncreas, bazo, glándulas suprarrenales y riñones.',
          'Patología ginecológica y urológica en pelvis menor.'
        ]
      },
      {
        area: 'Vascular y Osteoarticular',
        descripcion: 'Resolución de alta fidelidad para vasos y huesos:',
        items: [
          'Aneurismas y disecciones de la arteria aorta torácica y abdominal.',
          'Estudio de columna vertebral, articulaciones y reconstrucciones óseas 3D en fracturas.'
        ]
      }
    ],
    // 3. Tecnología y Equipamiento
    fusionPETRM: {
      titulo: 'Tecnología Multislice con Reducción de Dosis',
      descripcion: 'Nuestros tomógrafos multidetector incorporan algoritmos avanzados de modulación de dosis (Dose Reduction), permitiendo adquirir estudios de máxima calidad diagnóstica con la menor exposición a radiación posible para el paciente, además de tiempos de apnea respiratoria sustancialmente más cortos.'
    },
    // 4. Preparación Previa
    preparacion: [
      'Estudios Simples (sin contraste): Generalmente requieren un ayuno leve de 2 a 4 horas previas.',
      'Estudios con Contraste Endovenoso: Ayuno estricto de sólidos y líquidos de 6 horas previas al turno.',
      'Laboratorio renal obligatorio: En estudios con contraste endovenoso, presentar análisis de Urea y Creatinina en sangre (con validez no mayor a 30 días) para verificar la función renal.',
      'Alergias previas: Pacientes con antecedentes alérgicos a iodo, medicamentos o alimentos deben informar al momento de solicitar el turno para evaluar una premedicación antialérgica.',
      'Tomografía de Abdomen/Pelvis: Puede requerir la ingesta previa de líquido de contraste oral o agua en sala de espera previa al escaneo.',
      'Concurrir con ropa cómoda sin metales y presentar orden médica autorizada junto a estudios previos (TAC o radiografías anteriores).'
    ],
    // 5. Requisitos
    requisito:[
      'carnet de obra social y orden médica'
    ],
    // 6. Tipo de TC
    tipo:[
      'Tomografía Computada de cuerpo entero.', 'Tomografía computada con filtros de imágenes para la exquisita valoración de parénquina pulmonar', 
      'TC con Filtros especiales para la valoración de la arquitectura trabecular ósea.','Estudios tomográficos de abdomen de gran utilidad en el estudio angiodinámico de lesiones focales hepáticas y pancreáticas.',
      'Programa de Reconstrucción 3D.', 'Reconstrucción de imágenes 3D color (Work Station).'
    ],
    // 7. Localidad donde se realiza
    localidad:[
      'La Plata - Calle 8 nº 607 e/ 44 y 45 - Lunes a Viernes: 8:00 a 20:00 hs. Sábados: 8:00 a 12:00 hs.'
    ]
  },
  'resonancia-magnetica': {
    slug: 'resonancia-magnetica',
    titulo: 'Resonancia Magnética (RMN)',
    subtitulo: 'Diagnóstico de máxima resolución en tejidos blandos sin radiación ionizante',
    descripcion: [
      'La Resonancia Magnética Nuclear (RMN) es un procedimiento no invasivo y altamente avanzado que utiliza potentes campos magnéticos y ondas de radiofrecuencia para generar imágenes anatómicas y funcionales tridimensionales del interior del cuerpo humano.',
      'Al no emplear radiaciones ionizantes (rayos X), es el método de elección para la evaluación del sistema nervioso central, columna vertebral, articulaciones, estructuras osteomusculares, patología mamaria y órganos de la pelvis menor, ofreciendo un contraste insuperable en partes blandas.'
    ],
    // 1. Aplicaciones Principales
    aplicacionesPrincipales: [
      'Evaluación exhaustiva del Sistema Nervioso Central (encéfalo, tronco cerebral, médula espinal).',
      'Diagnóstico de patología articular y muscular (ligamentos, meniscos, tendones y cartílagos).',
      'Estudio anatómico y funcional de la columna vertebral en toda su extensión (cervical, dorsal, lumbosacra).',
      'Caracterización avanzada de lesiones tumorales y diferenciación tisular de alta precisión.',
      'Angioresonancia (Angio-RM): estudio detallado de la circulación arterial y venosa sin necesidad de cateterismo ni contraste iodado.',
      'Resonancia de mamas: screening en pacientes de alto riesgo y evaluación de implantes mamarios (ruptura intra/extracapsular).'
    ],
    // 2. Aplicaciones Clínicas por Especialidad
    aplicacionesClinicas: [
      {
        area: 'Neurorradiología y Columna',
        descripcion: 'Estudio de referencia absoluta para enfermedades neurológicas y del eje espinal:',
        items: [
          'Accidente Cerebrovascular (ACV) en etapa hiperaguda mediante secuencias de Difusión (DWI).',
          'Enfermedades desmielinizantes (Esclerosis Múltiple), neurodegenerativas e infecciosas.',
          'Hernias discales, compresiones radiculares, estenosis del canal raquídeo y espondilodiscitis.',
          'Tumores primarios y secundarios del encéfalo y de la médula espinal.'
        ]
      },
      {
        area: 'Músculo-Esquelético (Traumatología)',
        descripcion: 'Resolución de máxima nitidez en articulaciones complejas:',
        items: [
          'Rodilla: roturas meniscales, lesiones del ligamento cruzado anterior (LCA) y lesiones condrales.',
          'Hombro: roturas del manguito rotador, inestabilidad glenohumeral y lesiones de labrum (SLAP).',
          'Tobillo, muñeca, cadera y codo: tendinitis, edema óseo, fracturas por estrés y osteonecrosis.'
        ]
      },
      {
        area: 'Abdomen, Pelvis y Patología Femenina',
        descripcion: 'Caracterización tisular profunda de órganos abdominales y pélvicos:',
        items: [
          'Colangiorresonancia: visualización no invasiva de la vía biliar y conducto pancreático sin contraste.',
          'Pelvis femenina y masculina: estadificación de neoplasias de próstata (RM Multiparamétrica), endometrio, cuello uterino y endometriosis profunda.',
          'Hígado: caracterización de nódulos hepáticos benignos y malignos mediante agentes hepatobiliares.'
        ]
      }
    ],
    // 3. Equipamiento y Bioseguridad en Alto Campo
    fusionPETRM: {
      titulo: 'Equipamiento de Alto Campo y Protocolos Silenciosos',
      descripcion: 'En CYTEC contamos con resonadores de alto campo magnético (1.5 Tesla) equipados con bobinas multicanal dedicadas a cada región anatómica. Esta tecnología minimiza los tiempos de exploración, cuenta con secuencias diseñadas para reducir el ruido acústico ambiental y dispone de túneles más amplios para brindar mayor confort y reducir la sensación de claustrofobia en el paciente.'
    },
    // 4. Preparación Previa y Protocolo de Bioseguridad
    preparacion: [
      'CUESTIONARIO DE SEGURIDAD OBLIGATORIO: Se prohíbe el ingreso con marcapasos cardíacos no compatibles, implantes cocleares, clips metálicos cerebrales ferromagnéticos o esquirlas metálicas en ojos.',
      'Estudios Simples (sin contraste): Generalmente no requieren ayuno, salvo estudios de abdomen, pelvis o colangiorresonancia (ayuno de 6 horas para vaciamiento de la vesícula biliar).',
      'Estudios con Contraste (Gadolinio): Ayuno estricto de sólidos de 4 a 6 horas previas al turno.',
      'Evaluación de Función Renal: Presentar informe de laboratorio reciente con valores de Creatinina y Filtrado Glomerular si tiene más de 65 años, padece diabetes, hipertensión o insuficiencia renal conocida.',
      'Claustrofobia o Ansiedad: Si el paciente presenta dificultad para permanecer en espacios cerrados, consultar con su médico tratante la indicación de una premedicación sedante suave.',
      'Vestimenta y Metales: Concurrir con prendas confortables de algodón, sin cierres metálicos, botones a presión ni estampados con purpurina. Dejar en el vestidor tarjetas de crédito, celulares, relojes, llaves, prótesis dentales removibles y piercings.'
    ],
    // 5. Requisitos
    requisito:[
      'carnet de obra social y orden médica'
    ],
    // 6. Tipo de RMN
    tipo:[
      'Resonancia Magnética convencional.', 'RM con técnica Difusión-Perfusión.', 'RM Dinámica.','Artro resonancia.','Resonancia de ATM.', 'RM con espectroscopía.'
    ],
    // 7. Localidad donde se realiza
    localidad:[
      'La Plata - Calle 8 nº 607 e/ 44 y 45 - Lunes a Viernes: 8:00 a 20:00 hs. Sábados: 8:00 a 12:00 hs.',
      'Florencio Varela - Bartolomé Mitre Nº 40 - Lunes a Viernes: 9:00 a 15:00 hs.'
    ]
  },
  'radiologia-digital': {
    slug: 'radiologia-digital',
    titulo: 'Radiología Digital Directa (RX)',
    subtitulo: 'Diagnóstico radiológico de alta definición con mínima dosis de exposición',
    descripcion: [
      'La Radiología Digital es la evolución tecnológica de la radiografía convencional. Emplea detectores digitales de captura directa de última generación que sustituyen a las placas radiográficas analógicas y a los químicos de revelado.',
      'Este sistema permite adquirir imágenes de máxima definición en fracciones de segundo, optimizando el contraste de tejidos óseos y blandos, reduciendo sensiblemente la dosis de radiación recibida por el paciente y posibilitando el almacenamiento y distribución inmediata a través de la red digital PACS.'
    ],
    // 1. Aplicaciones Principales
    aplicacionesPrincipales: [
      'Evaluación primaria y de urgencia en traumatismos óseos, fisuras y fracturas articulares.',
      'Estudio del tórax para diagnóstico de infecciones respiratorias (neumonía, bronquitis), derrames pleurales y cardiomegalia.',
      'Exploración de la columna vertebral (cervical, dorsal, lumbosacra y sacrocóccix) con mediciones posturales.',
      'Radiología abdominal simple para detección de niveles hidroaéreos (obstrucción intestinal), cálculos renales o cuerpos extraños.',
      'Evaluación de senos paranasales y macizo craneofacial en patologías como sinusitis o desviación de tabique.',
      'Seguimiento postquirúrgico y control evolutivo de material de osteosíntesis (prótesis, placas y clavos).'
    ],
    // 2. Aplicaciones Clínicas por Región Anatómica
    aplicacionesClinicas: [
      {
        area: 'Tórax y Vías Respiratorias',
        descripcion: 'Estudio de primera línea cardiorrespiratorio:',
        items: [
          'Radiografía de Tórax (Frente y Perfil) para screening prequirúrgico y valoración pulmonar.',
          'Detección precoz de condensaciones neumónicas, atelectasias y nódulos.',
          'Evaluación del índice cardiotorácico y redistribución de flujo vascular.'
        ]
      },
      {
        area: 'Sistema Óseo y Articular',
        descripcion: 'Resolución de máxima nitidez cortical y trabecular:',
        items: [
          'Hombro, codo, muñeca y manos: estudio de artritis, artrosis y traumatismos deportivos.',
          'Pelvis, caderas, rodillas, tobillos y pies (con y sin carga / apoyo monopodal).',
          'Detección de anomalías congénitas, luxaciones articulares y microfisuras.'
        ]
      },
      {
        area: 'Columna y Estudios Especiales',
        descripcion: 'Visualización integral de la alineación raquídea:',
        items: [
          'Radiografías de columna con maniobras funcionales dinámicas (máxima flexión y extensión).',
          'Detección de escoliosis, lordosis, rectificaciones cervicales y espondilolistesis.',
          'Estudios radiológicos de cavum faríngeo en pediatría para hipertrofia adenoidea.'
        ]
      }
    ],
    // 3. Tecnología de Captura y Bioseguridad
    fusionPETRM: {
      titulo: 'Tecnología Directa y Protocolo ALARA de Baja Radiación',
      descripcion: 'Nuestros equipos de radiología digital cuentan con colimadores automáticos y algoritmos inteligentes de compensación de exposición bajo el criterio ALARA (As Low As Reasonably Achievable). Esto asegura que niños, adultos y adultos mayores reciban la menor dosis de radiación físicamente necesaria para un diagnóstico inequívoco, con disponibilidad instantánea en nuestro portal de estudios online.'
    },
    // 4. Preparación Previa y Pautas para el Paciente
    preparacion: [
      'Generalidades: La inmensa mayoría de los estudios radiológicos simples NO requieren ayuno ni preparación farmacológica previa.',
      'Vestimenta y Metales: Se debe concurrir con ropa cómoda sin elementos metálicos en la zona a estudiar (sin cierres metálicos, ganchos de corpiño, botones a presión o aplicaciones brillantes).',
      'Accesorios personales: Antes del disparo radiológico, se solicitará retirar collares, cadenas, aros, piercings corporales, cinturones o prótesis dentales removibles que puedan superponerse al área anatómica de interés.',
      'Precaución por Embarazo: En caso de sospecha o certeza de embarazo, la paciente debe informar indefectiblemente al personal técnico antes de la práctica para evaluar la justificación clínica y colocar los elementos de protección plomada pertinentes.',
      'Documentación requerida: Concurrir con la orden médica física o digital debidamente autorizada, DNI y estudios radiológicos previos para valoración comparativa.'
    ],
    // 5. Requisitos
    requisito:[
      'carnet de obra social y orden médica'
    ],
    // 6. Tipo de RX
    tipo:[
      'Rx Cráneo, Cara, Senos Paranasales.', ' Rx Hueso Temporal-Agujeros ópticos.', 'Rx Panorámica de Cráneo.','Rx Raquis-Columna.','Rx Hombro, Húmero, Pelvis, Cadera.',
      'Rx Codo. Mano. Pie, etc.','Rx de Tórax.', 'Medición Comparativa de Miembros Inferiores.', 'Espinografia digital'
    ],
    // 7. Localidad donde se realiza
    localidad:[
      'La Plata - Calle 8 nº 607 e/ 44 y 45 - Lunes a Viernes: 8:00 a 20:00 hs.',
      'Florencio Varela - Bartolomé Mitre Nº 40 - Lunes a Viernes: 9:00 a 15:00 hs.'
    ]
  },
  'medicina-nuclear': {
    slug: 'medicina-nuclear',
    titulo: 'Medicina Nuclear (Cámara Gamma / SPECT)',
    subtitulo: 'Diagnóstico funcional, metabólico y molecular de órganos y sistemas',
    descripcion: [
      'La Medicina Nuclear es una rama médica que utiliza cantidades seguras y controladas de sustancias denominadas radiofármacos para evaluar el funcionamiento y la fisiología de órganos vitales, detectando alteraciones a nivel celular mucho antes de que se manifiesten cambios estructurales anatómicos.',
      'Mediante el uso de Cámaras Gamma y tecnología tomográfica SPECT (Single Photon Emission Computed Tomography), en CYTEC obtenemos imágenes dinámicas y tridimensionales de alta sensibilidad clínica para cardiología, oncología, endocrinología, nefrología y traumatología.'
    ],
    // 1. Aplicaciones Principales
    aplicacionesPrincipales: [
      'Detección precoz de metástasis óseas en patologías oncológicas (próstata, mama, pulmón) mediante Centellograma Óseo Corporal Total.',
      'Evaluación de viabilidad y perfusión miocárdica (Spect Cardíaco con esfuerzo y reposo) para detección de isquemia coronaria.',
      'Estudio funcional de nódulos tiroideos, bocio y desórdenes del eje tiroidal (Centellograma Tiroideo y Captación de Iodo-131).',
      'Análisis funcional renal y urodinámico (Centellograma Renal con DMSA y Radiorrenograma con DTPA).',
      'Localización precisa del Ganglio Centinela en biopsias de mama y melanoma antes de la cirugía.',
      'Detección de reflujo vesicoureteral, divertículo de Meckel y vaciamiento gástrico en gastroenterología.'
    ],
    // 2. Aplicaciones Clínicas por Especialidad
    aplicacionesClinicas: [
      {
        area: 'Oncología y Osteoarticular',
        descripcion: 'Máxima sensibilidad en el metabolismo del esqueleto:',
        items: [
          'Centellograma Óseo Total: detección temprana de secundarismo neoplásico y microfisuras por estrés.',
          'Evaluación de aflojamiento o infección en prótesis de cadera y rodilla.',
          'Diagnóstico de patología osteomielítica, necrosis avascular y osteocondritis.'
        ]
      },
      {
        area: 'Cardiología Nuclear',
        descripcion: 'Estudio de perfusión y contractilidad miocárdica (SPECT):',
        items: [
          'Evaluación de cardiopatía isquémica en esfuerzo (cicloergómetro / cinta) y en reposo.',
          'Determinación de isquemia inducible, extensión de infartos previos y cálculo de Fracción de Eyección (FEVI).',
          'Protocolos con apremio farmacológico (Dipiridamol) en pacientes con dificultad motriz.'
        ]
      },
      {
        area: 'Nefrourología y Endocrinología',
        descripcion: 'Valoración funcional dividida por órgano:',
        items: [
          'Centellograma Renal con DMSA: cuantificación del parénquima funcionante y cicatrices post-pielonefritis.',
          'Radiorrenograma con DTPA/MAG3: análisis de permeabilidad de vías urinarias y patrones obstructivos.',
          'Centellograma de Paratiroides con MIBI para localización de adenomas en hiperparatiroidismo.'
        ]
      }
    ],
    // 3. Equipamiento y Radioprotección
    fusionPETRM: {
      titulo: 'Tecnología SPECT y Protección al Paciente',
      descripcion: 'Nuestras Cámaras Gamma con detectores de alta sensibilidad permiten disminuir notablemente la dosis de radiofármaco administrada al paciente, asegurando una mínima radiación biológica efectiva. Los radiofármacos utilizados tienen una vida media física de escasas horas y son eliminados rápidamente por vías naturales sin producir efectos adversos ni reacciones alérgicas.'
    },
    // 4. Preparación Previa y Pautas para el Paciente
    preparacion: [
      'Embarazo y Lactancia: Examen estrictamente contraindicado en mujeres embarazadas. En caso de lactancia, informar al momento de solicitar el turno para coordinar la suspensión transitoria de la extracción de leche materna según el radiofármaco.',
      'Centellograma Óseo: No requiere ayuno. Tras la inyección del trazador, el paciente debe aguardar de 2 a 3 horas antes de la captura de imágenes, debiendo beber entre 1 y 1.5 litros de agua para favorecer la fijación ósea y la eliminación urinaria.',
      'SPECT Cardíaco: Requiere ayuno de 4 a 6 horas y suspensión de cafeína, café descafeinado, mate, té, chocolate y bebidas cola durante las 24 horas previas. Consultar con su cardiólogo sobre la suspensión temporal de medicaciones como betabloqueantes.',
      'Centellograma Tiroideo: Suspender medicamentos tiroideos (Levotiroxina, Danantizol), suplementos multivitamínicos con iodo o estudios contrastados recientes según indicación del médico.',
      'Pauta Posterior al Estudio: Se recomienda mantener abundante hidratación el resto del día para acelerar la eliminación y evitar el contacto físico estrecho y prolongado con niños pequeños o embarazadas durante las primeras 12 a 24 horas.'
    ],
    // 5. Requisitos
    requisito:[
      'carnet de obra social y orden médica'
    ],
    // 6. Tipo de MEDICINA NUCLEAR
    tipo:[
      'Centellograma Óseo.', ' Centellograma Tiroideo.', 'SPECT Cardíaco.','Centellograma Renal con DMSA.','Centellograma de Paratiroides con MIBI.',
      'Radiorrenograma con DTPA/MAG3.'
    ],
    // 7. Localidad donde se realiza
    localidad:[
      'Florencio Varela - Bartolomé Mitre Nº 40 - Lunes a Viernes: 9:00 a 15:00 hs.'
    ]
  },
  'mamografia-digital': {
    slug: 'mamografia-digital',
    titulo: 'Mamografía Digital Directa',
    subtitulo: 'Detección precoz de lesiones mamarias con alta definición y mínima compresión',
    descripcion: [
      'La Mamografía Digital Directa es el método de exploración por excelencia para el tamizaje, diagnóstico y seguimiento de las patologías de la glándula mamaria. Utiliza detectores digitales de alta sensibilidad que convierten los rayos X directamente en señales electrónicas, brindando imágenes con una resolución espacial y contraste superiores a los sistemas analógicos convencionales.',
      'Su máxima ventaja radica en la detección temprana de anomalías microscópicas y microcalcificaciones agrupadas antes de que se manifiesten síntomas clínicos o nódulos palpables, incrementando sustancialmente las tasas de curación y permitiendo tratamientos conservadores de mínima invasión.'
    ],
    // 1. Aplicaciones Principales
    aplicacionesPrincipales: [
      'Screening o tamizaje anual preventivo en mujeres a partir de los 40 años (o antes según antecedentes familiares).',
      'Identificación y caracterización de microcalcificaciones pleomórficas, distorsiones de la arquitectura tisular y asimetrías focales.',
      'Diferenciación entre lesiones benignas (quistes, fibroadenomas) y sospechas de malignidad según categorización internacional BI-RADS.',
      'Evaluación mamográfica en pacientes portadoras de prótesis mamarias mediante técnica de desplazamiento de Eklund.',
      'Monitoreo y control post-quirúrgico, cicatrizal o post-radioterapia en pacientes con antecedentes oncológicos.',
      'Guía y correlación para procedimientos intervencionistas de punción, biopsia y marcación previa con arpón.'
    ],
    // 2. Aplicaciones Clínicas y Modalidades
    aplicacionesClinicas: [
      {
        area: 'Mamografía Preventiva y Diagnóstica',
        descripcion: 'Estudio protocolizado en proyecciones estándar y focalizadas:',
        items: [
          'Proyecciones Cráneo-Caudal (CC) y Medio-Lateral Oblicua (MLO) de ambas mamas.',
          'Magnificaciones focalizadas y compresiones localizadas para aclarar zonas de sospecha o superposición glandular.',
          'Complementariedad con Ecografía Mamaria en patrones de mama densa (categorías C y D de la clasificación ACR).'
        ]
      },
      {
        area: 'Pacientes con Implantes Mamarios',
        descripcion: 'Protocolo especializado de maniobras específicas:',
        items: [
          'Técnica de Eklund: maniobra cuidadosa que desplaza el implante protésico hacia la pared torácica para maximizar la visualización del parénquima mamario remanente.',
          'Inspección de la indemnidad del implante y detección temprana de cambios en el tejido adyacente a la cápsula fibrosa.'
        ]
      },
      {
        area: 'Clasificación Estandarizada BI-RADS',
        descripcion: 'Informe estructurado bajo norma internacional:',
        items: [
          'BI-RADS 1 y 2: Estudios normales y hallazgos típicamente benignos (control periódico habitual).',
          'BI-RADS 3: Hallazgos con alta probabilidad de benignidad (control semestral sugerido).',
          'BI-RADS 4 y 5: Lesiones con sospecha de malignidad moderada a alta que requieren confirmación histopatológica.'
        ]
      }
    ],
    // 3. Equipamiento y Confort del Paciente
    fusionPETRM: {
      titulo: 'Mamógrafos Digitales con Optimización de Dosis y Confort',
      descripcion: 'Nuestros equipos de mamografía digital disponen de paletas de compresión anatómicas y curvadas que adaptan la fuerza ejercida a la tolerancia de cada paciente, reduciendo notablemente las molestias durante el examen. Adicionalmente, el sistema de control automático de exposición (AEC) dosifica de manera precisa la mínima cantidad de radiación requerida en función del espesor y la densidad de la mama.'
    },
    // 4. Preparación Previa y Recomendaciones
    preparacion: [
      'Cosméticos y Desodorantes: NO colocarse talco, desodorante, antitranspirante, perfumes ni cremas corporales en mamas, escote o axilas el día del estudio (los residuos metálicos cosméticos pueden generar falsas microcalcificaciones en la imagen).',
      'Momento Óptimo del Ciclo: En pacientes premenopáusicas, se aconseja realizar el estudio entre el día 7 y 10 después de iniciado el ciclo menstrual, período en el cual la mama presenta menor retención de líquidos y sensibilidad a la compresión.',
      'Vestimenta recomendada: Concurrir con vestimenta de dos piezas (blusa o remera y pantalón/falda) para facilitar desvestir únicamente el torso sin necesidad de quitarse toda la ropa.',
      'Implantes y Prótesis: Informar al personal técnico la presencia de prótesis o implantes mamarios antes de dar inicio a la exploración.',
      'Estudios Anteriores: Es de vital importancia traer los estudios mamográficos y ecográficos previos para que el médico radiólogo pueda efectuar un análisis comparativo evolutivo.'
    ],
    // 5. Requisitos
    requisito:[
      'carnet de obra social y orden médica'
    ],
    // 6. Tipo de MAMOGRAFIA
    tipo:[
      'Mamografía bilateral con Proyección Axilar.', ' Mamografía de Alta Resolución.', 'Mamografía con magnificación.','Marcación Pre-Biopsia quirúrgica.',
      'Biopsia con aguja gruesa con pistola automática.'
    ],
    // 7. Localidad donde se realiza
    localidad:[
      'La Plata - Calle 8 nº 607 e/ 44 y 45 - Lunes a Viernes: 8:00 a 20:00 hs.'
    ]
  },
  'ecografia': {
    slug: 'ecografia',
    titulo: 'Ecografía General, 4D-5D y Doppler Color',
    subtitulo: 'Exploración no invasiva en tiempo real mediante ultrasonido de alta resolución',
    descripcion: [
      'La Ecografía o Ultrasonografía es un método diagnóstico por imágenes seguro, inocuo y en tiempo real que emplea ondas sonoras de alta frecuencia para generar imágenes anatómicas y funcionales del interior del cuerpo humano.',
      'Al no utilizar radiaciones ionizantes, es el estudio de primera elección en obstetricia, pediatría y evaluación de órganos abdominales, pélvicos, vasculares y partes blandas superficiales. En CYTEC contamos con ecógrafos digitales con tecnología Doppler Color, Doppler Pulsado y transductores multifrecuencia de máxima definición.'
    ],
    // 1. Aplicaciones Principales
    aplicacionesPrincipales: [
      'Evaluación estructural de órganos abdominales (hígado, vesícula biliar, páncreas, bazo y riñones).',
      'Diagnóstico de patología vesicular: litiasis (cálculos biliares), pólipos y colecistitis aguda.',
      'Exploración ginecológica y urológica (útero, ovarios, vejiga y glándula prostática).',
      'Ecografía musculoesquelética y articular: tendinitis, desgarros fibrilares, derrames y lesiones ligamentarias.',
      'Estudio de glándula tiroides, glándulas salivales, ganglios cervicales y partes blandas superficiales.',
      'Eco-Doppler Vascular: evaluación de estenosis carotídea, trombosis venosa profunda e insuficiencia venosa periférica.'
    ],
    // 2. Aplicaciones Clínicas por Especialidad
    aplicacionesClinicas: [
      {
        area: 'Ecografía Abdominal y Renovesiocprostática',
        descripcion: 'Estudio morfológico detallado del abdomen y vías urinarias:',
        items: [
          'Hígado y vías biliares: esteatosis hepática (hígado graso), quistes, nódulos y dilatación de vía biliar.',
          'Riñones y vías urinarias: cólico renal, litiasis, quistes renales e hidronefrosis.',
          'Próstata y residuo post-miccional: medición del volumen prostático y control de vaciamiento vesical.'
        ]
      },
      {
        area: 'Eco-Doppler Color y Vascular',
        descripcion: 'Análisis hemodinámico no invasivo del flujo sanguíneo:',
        items: [
          'Doppler de Vasos de Cuello (Carotídeo y Vertebral): detección de placas de ateroma y riesgo cardiovascular.',
          'Doppler Venoso de Miembros Inferiores: diagnóstico de várices, trombosis venosa profunda (TVP) e insuficiencia valvular.',
          'Doppler Arterial de Miembros Inferiores: claudicación intermitente y arteriopatía periférica.'
        ]
      },
      {
        area: 'Tiroides, Músculo y Partes Blandas',
        descripcion: 'Transductores lineales de alta frecuencia para estructuras superficiales:',
        items: [
          'Tiroides: medición volumétrica, caracterización de nódulos (clasificación TI-RADS) y tiroiditis.',
          'Músculo y tendón: hombro (manguito rotador), tendón de Aquiles, fascia plantar y articulaciones.',
          'Gineco-mamaria y testicular: diferenciación de masas quísticas vs. sólidas y control escrotal.'
        ]
      }
    ],
    // 3. Tecnología de Imagen y Confort
    fusionPETRM: {
      titulo: 'Equipamiento Digital con Doppler Multifrecuencia',
      descripcion: 'Nuestros ecógrafos cuentan con tecnología de procesamiento armónico tisular, elastografía y software de reducción de ruido granular (speckle reduction). Esto permite una diferenciación nítida de interfases tisulares, optimizando el confort del paciente mediante exploraciones dinámicas, rápidas e indoloras.'
    },
    // 4. Preparación Previa según el Tipo de Estudio
    preparacion: [
      'Ecografía Abdominal / Hepatobiliopancreática: Ayuno estricto de sólidos de 6 a 8 horas previas al turno. No fumar ni mascar chicle antes del examen (evita la aerofagia que dificulta la visión).',
      'Ecografía Renal, Vesical, Prostática o Ginecológica (Pelviana): Requiere vejiga llena. Debe beber 1 litro de agua sin gas 1 hora antes del turno y retener la orina hasta la realización del estudio.',
      'Ecografía Abdominal y Renal / Prostática combinada: Debe cumplir AMBAS condiciones: ayuno de sólidos de 6 horas y finalizar la ingesta de 1 litro de agua 1 hora antes sin concurrir al baño.',
      'Ecografías de Tiroides, Partes Blandas, Muscular o Testicular: NO requieren ayuno ni retención de orina.',
      'Eco-Doppler de Vasos de Cuello o Miembros: Generalmente no requieren preparación, excepto Doppler de Arterias Renales o Abdominal (requiere ayuno de 8 horas).',
      'Documentación: Concurrir con ropa cómoda de dos piezas, orden médica autorizada y estudios ecográficos previos para evaluación comparativa.'
    ],
    // 5. Requisitos
    requisito:[
      'carnet de obra social y orden médica'
    ],
    // 6. Tipos de ECOGRAFIA
    tipo:[
      DOPPLER, GENERAL, ESPECIALES
    ],
    // 8. Localidad donde se realiza
    localidad:[
      'La Plata - Calle 8 nº 607 e/ 44 y 45 - Lunes a Viernes.'
    ]
  },
  'densitometria-osea': {
    slug: 'densitometria-osea',
    titulo: 'Densitometría Ósea Digital (DEXA)',
    subtitulo: 'Evaluación de densidad mineral ósea y diagnóstico precoz de osteopenia y osteoporosis',
    descripcion: [
      'La Densitometría Ósea por absorciometría de rayos X de doble energía (DEXA / DXA) es el estudio de referencia internacional para cuantificar de manera no invasiva, indolora y precisa la masa mineral de los huesos.',
      'Permite determinar con exactitud el nivel de desmineralización ósea, predecir el riesgo futuro de fracturas por fragilidad y monitorizar la eficacia clínica de tratamientos médicos farmacológicos contra la osteoporosis en pacientes posmenopáusicas o con factores de riesgo asociados.'
    ],
    // 1. Aplicaciones Principales
    aplicacionesPrincipales: [
      'Diagnóstico certero y temprano de osteopenia y osteoporosis antes de la aparición de fracturas espontáneas.',
      'Detección de pérdida de masa ósea en mujeres en etapa peri y posmenopáusica o tras menopausia quirúrgica.',
      'Evaluación del riesgo de fractura osteoporótica en columna lumbar y cadera (cuello femoral).',
      'Monitoreo periódico y control evolutivo en pacientes bajo tratamiento con fijadores de calcio, bifosfonatos o terapia hormonal.',
      'Control de pacientes bajo tratamientos prolongados con corticoides, inmunosupresores, quimioterapia o fármacos antiepilépticos.',
      'Estudio óseo en trastornos endocrinos y metabólicos (hiperparatiroidismo, hipotiroidismo, celiaquía o insuficiencia renal crónica).'
    ],
    // 2. Regiones Anatómicas y Evaluación Clínica
    aplicacionesClinicas: [
      {
        area: 'Columna Lumbar y Fémur Proximal (Cadera)',
        descripcion: 'Sitios anatómicos estándar de referencia clínica:',
        items: [
          'Columna Lumbar (L1 a L4): evalúa el hueso trabecular, el más activo metabólicamente y el primero en perder calcio.',
          'Cadera y Cuello Femoral: evalúa el hueso cortical y trabecular, crucial para calcular el riesgo de fractura de cadera.',
          'Antebrazo (Radio 33%): región complementaria indicada en pacientes con prótesis de cadera bilateral, artrosis severa de columna o hiperparatiroidismo.'
        ]
      },
      {
        area: 'Escala y Clasificación Estandarizada OMS',
        descripcion: 'Parámetros cuantitativos de diagnóstico médico:',
        items: [
          'T-Score Normal: valores de densidad mineral mayores a -1.0 desviaciones estándar.',
          'Osteopenia: T-Score entre -1.0 y -2.5 (pérdida moderada de densidad ósea que requiere prevención y control).',
          'Osteoporosis: T-Score inferior a -2.5 (alto riesgo de fractura que requiere tratamiento médico específico).',
          'Z-Score: comparativa ajustada por edad, peso y sexo biológico (utilizada en pediatría y premenopausia).'
        ]
      },
      {
        area: 'Composición Corporal Total',
        descripcion: 'Análisis complementario opcional de alta precisión:',
        items: [
          'Cuantificación porcentual y en gramos de masa magra (músculo), tejido adiposo (grasa) y contenido mineral óseo.',
          'Detección y seguimiento de sarcopenia (pérdida de masa muscular) en adultos mayores y valoración en medicina deportiva.'
        ]
      }
    ],
    // 3. Tecnología de Dosis Ultrabaja
    fusionPETRM: {
      titulo: 'Tecnología Digital DEXA de Mínima Dosis',
      descripcion: 'Nuestros densitómetros óseos de última generación operan con emisiones de radiación extremadamente bajas, equivalentes a una fracción de la exposición ambiental diaria. La exploración es totalmente indolora, rápida y confortable, completándose en pocos minutos sin necesidad de confinamiento ni inyecciones.'
    },
    // 4. Preparación Previa y Pautas para el Paciente
    preparacion: [
      'SUSPENSIÓN DE CALCIO: No ingerir suplementos de calcio, tabletas vitamínicas con calcio ni antiácidos que contengan calcio durante las 24 a 48 horas previas al examen (pueden falsear la lectura si se ubican en el tubo digestivo).',
      'Estudios Contrastados Recientes: Si se realizó un estudio con contraste iodado o baritado (tomografía con contraste, seriada esofagogástrica) o estudios de medicina nuclear, debe aguardar al menos 7 días antes de realizar la densitometría.',
      'Alimentación y Ayuno: NO requiere ayuno; el paciente puede ingerir comidas y líquidos habituales con normalidad.',
      'Vestimenta recomendada: Concurrir con ropa cómoda sin elementos metálicos en la zona pélvica y lumbar (evitar cinturones con hebillas, cierres metálicos, botones a presión de jean o apliques metálicos).',
      'Embarazo: Como todo estudio que emplea radiación, se encuentra contraindicado en caso de sospecha o certeza de embarazo.',
      'Documentación: Concurrir con la orden médica autorizada, DNI y traer informes de densitometrías anteriores para evaluar la curva comparativa de evolución de la masa ósea.'
    ],
    // 5. Requisitos
    requisito:[
      'carnet de obra social y orden médica'
    ],
    // 6. Tipos de DENSITOMETRIAS
    tipo:[
      'Densitometría de cuerpo entero.', 'Análisis vertebral.', 'Software pediátrico.', 'Cadera periprotésica.', 'Antebrazo distal (muñeca).'
    ],
    // 8. Localidad donde se realiza
    localidad:[
      'La Plata - Calle 8 nº 607 e/ 44 y 45 - Lunes a Viernes.'
    ]
  },
  'espirometria-computada': {
    slug: 'espirometria-computada',
    titulo: 'Espirometría Computada con Curva Flujo-Volumen',
    subtitulo: 'Evaluación funcional respiratoria pre y post-broncodilatador (PBD)',
    descripcion: [
      'La Espirometría Computada es el estudio funcional respiratorio estándar de oro para medir la capacidad ventilatoria y los volúmenes pulmonares en movimiento. Evalúa la cantidad total de aire que los pulmones son capaces de inhalar y exhalar, así como la velocidad de los flujos aéreos.',
      'El test con curva Flujo-Volumen pre y post-broncodilatador (PBD) permite diagnosticar patrones obstructivos y restrictivos, determinar si la limitación al flujo aéreo es reversible tras la administración de un aerosol broncodilatador, y evaluar la respuesta terapéutica en patologías de la vía aérea.'
    ],
    // 1. Aplicaciones Principales
    aplicacionesPrincipales: [
      'Diagnóstico certero y diferencial entre Asma Bronquial y Enfermedad Pulmonar Obstructiva Crónica (EPOC).',
      'Test de Respuesta Broncodilatadora (PBD): evaluación de la reversibilidad del calibre bronquial tras inhalación de salbutamol.',
      'Detección precoz del compromiso pulmonar en pacientes fumadores activos o extabaquistas.',
      'Evaluación del riesgo quirúrgico preoperatorio en cirugías torácicas, abdominales mayores o pacientes con antecedentes respiratorios.',
      'Estudio de síntomas respiratorios persistentes no filiados: tos crónica, disnea (falta de aire) y sibilancias.',
      'Monitoreo funcional en enfermedades restrictivas (fibrosis pulmonar, cifoescoliosis o patologías neuromusculares).'
    ],
    // 2. Parámetros Técnicos y Evaluación Clínica
    aplicacionesClinicas: [
      {
        area: 'Patologías Obstructivas y Reversibilidad',
        descripcion: 'Diferenciación funcional de la limitación al flujo aéreo:',
        items: [
          'Asma: obstrucción variable con prueba broncodilatadora positiva (aumento significativo del FEV1 ≥ 12% y 200 ml).',
          'EPOC: obstrucción bronquial persistente poco o nada reversible con índice FEV1/FVC post-BD menor al límite inferior normal (LIN).',
          'Seguimiento y ajuste de dosis en tratamientos con corticoides inhalados y broncodilatadores LABA/LAMA.'
        ]
      },
      {
        area: 'Parámetros Espirométricos Estandarizados (GLI / ATS / ERS)',
        descripcion: 'Comparación computarizada contra valores de referencia poblacionales:',
        items: [
          'FVC (Capacidad Vital Forzada): volumen máximo de aire exhalado con esfuerzo extremo.',
          'FEV1 (Volumen Espiratorio Forzado en el primer segundo): indicador clave de permeabilidad de la vía aérea central.',
          'Relación FEV1/FVC (Índice de Tiffeneau): parámetro principal para definir presencia o ausencia de obstrucción.',
          'Z-Score (Global Lung Initiative): estadificación estandarizada de severidad (leve, moderada o severa) sin sesgo de edad o género.'
        ]
      },
      {
        area: 'Salud Ocupacional y Toxicidad Pulmonar',
        descripcion: 'Vigilancia epidemiológica y laboral preventiva:',
        items: [
          'Exámenes periódicos en trabajadores expuestos a polvos minerales, químicos, humos, gases o solventes industriales.',
          'Monitoreo de toxicidad pulmonar secundaria a fármacos (amiodarona, metotrexato, bleomicina).'
        ]
      }
    ],
    // 3. Tecnología del Espirómetro
    fusionPETRM: {
      titulo: 'Espirómetros Computarizados con Neumotacógrafo de Precisión',
      descripcion: 'Nuestros equipos cuentan con sensores de flujo digital calibrados diariamente con jeringa de 3 litros según normas internacionales ATS/ERS (American Thoracic Society / European Respiratory Society). Incorporan boquillas antibacterianas descartables con filtro biológico de un solo uso para total seguridad e higiene, y curvas en tiempo real con incentivos visuales que aseguran maniobras técnicamente reproducibles y aceptables.'
    },
    // 4. Preparación Previa y Pautas para el Paciente
    preparacion: [
      'SUSPENSIÓN DE BRONCODILATADORES (Previa consulta médica): Suspender inhaladores de rescate de acción corta (ej. Salbutamol, Bromuro de Ipratropio) 6 horas antes; y los de acción prolongada (ej. Formoterol, Salmeterol) 24 horas antes.',
      'Tabaco y Vapeo: NO fumar cigarrillos tradicionales ni usar vapeadores/cigarrillos electrónicos durante al menos 2 horas antes de la prueba.',
      'Estimulantes y Cafeína: No consumir café, mate, té, bebidas cola, bebidas energizantes ni chocolate 4 horas previas al examen.',
      'Alimentación: No realizar comidas copiosas o pesadas en las 2 horas anteriores para permitir la expansión diafragmática completa.',
      'Prendas y Actividad: Asistir con ropa holgada que no comprima el tórax ni el abdomen. Evitar ejercicio físico intenso 30 minutos antes.',
      'Medicamento aerosol: Concurrir al turno con su aerocámara y el inhalador de Salbutamol indicado por su médico (en caso de que el protocolo requiera el propio aerosol del paciente).'
    ],
    // 5. Requisitos
    requisito:[
      'carnet de obra social y orden médica'
    ],
    // 6. Tipos de ESPIROMETRIAS-COMPUTADAS
    tipo:[
      
    ],
    // 8. Localidad donde se realiza
    localidad:[
      'La Plata - Calle 8 nº 607 e/ 44 y 45 - Lunes a Viernes.'
    ]
  }
  // En los siguientes pasos se pueden incorporar 'tomografia', 'resonancia-magnetica', etc.
};
