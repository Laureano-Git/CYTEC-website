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
      { texto: 'Espinografía Digital', href: '/servicios/espinografia-digital' },
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
    ]
  }
  // En los siguientes pasos se pueden incorporar 'tomografia', 'resonancia-magnetica', etc.
};
