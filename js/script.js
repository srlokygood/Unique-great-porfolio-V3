document.addEventListener('DOMContentLoaded', () => {
/* ============================================================
   DATOS EDITABLES — modifica estos arrays con tu información
   ============================================================ */
 
// ---- DICCIONARIO DE TEXTOS ESTÁTICOS ----
const i18n = {
  es: {
    nav: { sobreMi: "Sobre mí", educacion: "Educación y Certificaciones", habilidades: "Habilidades", proyectos: "Proyectos", contacto: "Contacto" },
    hero: {
      eyebrow: "Bienvenido a mi portafolio",
      greeting: "Hola, soy Jair",
      role1: "Desarrollador de Software",
      role2: "Data Analyst",
      role3: "Ingeniero Mecatrónico",
      desc: "Combino ingeniería, análisis de datos y desarrollo de software para construir soluciones robustas de principio a fin. Escribe aquí una breve descripción sobre tu experiencia, enfoque de trabajo y lo que te hace diferente.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactarme",
      scroll: "Desliza"
    },
    edu: { title: "Educación y Certificaciones", hint: "Toca para ver más", detail: "Detalle", diploma: "Ver diploma" },
    skills: { title: "Mis Habilidades" },
    proj: { title: "Mis Proyectos", open: "Ver proyecto →", more: "Ver más", inProgress: "En proceso", completed: "Completado", personal: "Proyecto personal", 
        laboral: "Proyecto laboral", dedication: "Dedicación", complexity: "Complejidad", utility: "Utilidad" },
    contact: { title: "Contacto", name: "Nombre", email: "Correo", phone: "Teléfono", location: "Ubicación" },
    form: {
      heading: "¿Interesado en mis servicios o en contratarme?",
      sub: "Contáctame y te responderé lo antes posible.",
      name: "Nombre", namePh: "Tu nombre",
      email: "Correo", emailPh: "tu@correo.com",
      reason: "Motivo",
      reason1: "Interesado en contratarme",
      reason2: "Consulta sobre un proyecto",
      reason3: "Propuesta freelance",
      reason4: "Otro",
      msg: "Mensaje", msgPh: "Cuéntame en qué puedo ayudarte...",
      submit: "Enviar mensaje",
      successTitle: "¡Mensaje enviado!",
      successText: (nombre) => `Gracias ${nombre}, te responderé lo antes posible.`
    },
    footer: { text: "Diseñado y construido con enfoque en sistemas digitales." }
  },
  en: {
    nav: { sobreMi: "About Me", educacion: "Education & Certifications", habilidades: "Skills", proyectos: "Projects", contacto: "Contact" },
    hero: {
      eyebrow: "Welcome to my portfolio",
      greeting: "Hi, I'm Jair",
      role1: "Software Developer",
      role2: "Data Analyst",
      role3: "Mechatronics Engineer",
      desc: "I combine engineering, data analysis and software development to build robust solutions end to end. Write a short description here about your experience, work approach and what makes you different.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      scroll: "Scroll"
    },
    edu: { title: "Education & Certifications", hint: "Tap to see more", detail: "Details", diploma: "View diploma" },
    skills: { title: "My Skills" },
    proj: { title: "My Projects", open: "View project →", more: "View more", inProgress: "In progress", completed: "Completed", personal: "Personal project", laboral: "Work project", dedication: "Dedication", complexity: "Complexity", utility: "Utility" },
    contact: { title: "Contact", name: "Name", email: "Email", phone: "Phone", location: "Location" },
    form: {
      heading: "Interested in my services or in hiring me?",
      sub: "Get in touch and I'll respond as soon as possible.",
      name: "Name", namePh: "Your name",
      email: "Email", emailPh: "you@email.com",
      reason: "Reason",
      reason1: "Interested in hiring me",
      reason2: "Question about a project",
      reason3: "Freelance proposal",
      reason4: "Other",
      msg: "Message", msgPh: "Tell me how I can help you...",
      submit: "Send message",
      successTitle: "Message sent!",
      successText: (nombre) => `Thanks ${nombre}, I'll get back to you as soon as possible.`
    },
    footer: { text: "Designed and built with a focus on digital systems." }
  }
};
 
let currentLang = 'es';
 
// ---- EDUCACIÓN Y CERTIFICACIONES ----
const educacionData = [
  {
    icon: "&#127891;",
    anio: "2019 — 2022",
    diploma: "certificados/mecatronica.png",
    es: {
      titulo: "Ingeniería Mecatrónica",
      institucion: "SENA",
      descripcion: "Formación interdisciplinaria en sistemas mecánicos, electrónicos y de control, integrando automatización, programación y tecnologías aplicadas a procesos industriales."
    },
    en: {
      titulo: "Mechatronics Engineering",
      institucion: "SENA",
      descripcion: "Interdisciplinary training in mechanical, electronic, and control systems, integrating automation, programming, and technologies applied to industrial processes."
    }
  },

  {
    icon: "&#128187;",
    anio: "2019",
    diploma: "introduccionprogramacion.png",
    es: {
      titulo: "Introducción a la Programación",
      institucion: "Capacítate para el Empleo",
      descripcion: "Fundamentos de lógica de programación, algoritmos, resolución de problemas y buenas prácticas para el desarrollo de software."
    },
    en: {
      titulo: "Introduction to Programming",
      institucion: "Capacítate para el Empleo",
      descripcion: "Fundamentals of programming logic, algorithms, problem-solving, and good practices for software development."
    }
  },

  {
    icon: "&#128187;",
    anio: "2020",
    diploma: "certificados/logicaprograacion.png",
    es: {
      titulo: "Lógica de Programación",
      institucion: "Capacítate para el Empleo",
      descripcion: "Desarrollo de habilidades para analizar problemas, diseñar algoritmos y estructurar soluciones mediante fundamentos de lógica computacional."
    },
    en: {
      titulo: "Programming Logic",
      institucion: "Capacítate para el Empleo",
      descripcion: "Development of skills to analyze problems, design algorithms, and structure solutions using fundamental computational logic."
    }
  },

  {
    icon: "&#128187;",
    anio: "2022",
    diploma: "certificados/php7.png",
    es: {
      titulo: "Novedades de PHP 7",
      institucion: "LinkedIn",
      descripcion: "Actualización en PHP 7 orientada al desarrollo de aplicaciones más eficientes, seguras y mantenibles, aplicando buenas prácticas y mejoras del lenguaje."
    },
    en: {
      titulo: "PHP 7: New Features",
      institucion: "LinkedIn",
      descripcion: "Training in PHP 7 focused on building more efficient, secure, and maintainable applications through best practices and language improvements."
    }
  },

  {
    icon: "&#128187;",
    anio: "2025",
    diploma: "certificados/dtosdtos.png",
    es: {
      titulo: "Aspectos Básicos: Datos, datos, en todas partes",
      institucion: "Google / Coursera",
      descripcion: "Fundamentos del análisis de datos, desde la recopilación y organización de información hasta la comprensión de su propósito en la toma de decisiones."
    },
    en: {
      titulo: "The Basics: Data, Data, Everywhere",
      institucion: "Google / Coursera",
      descripcion: "Foundations of data analytics, covering data collection and organization, as well as understanding its role in supporting data-driven decision-making."
    }
  },

  {
    icon: "&#128187;",
    anio: "2026",
    diploma: "",
    es: {
      titulo: "Análisis de Datos",
      institucion: "TripleTen",
      descripcion: "Formación avanzada en análisis de datos, con enfoque práctico en SQL, Python, visualización, análisis exploratorio y generación de insights para la toma de decisiones. En proceso."
    },
    en: {
      titulo: "Data Analytics",
      institucion: "TripleTen",
      descripcion: "Advanced practical training in data analytics, focusing on SQL, Python, data visualization, exploratory analysis, and generating insights for decision-making. In progress."
    }
  }
];
 
// ---- HABILIDADES ----

const skillsData = [

  {
    nombre: "Go",
    nivel: 90,
    es: {
      categoria: "Backend", 
      descripcion: "Desarrollo de aplicaciones backend con enfoque en rendimiento, estructuras de datos, lógica de negocio y construcción de servicios eficientes."
    },
    en: {
      categoria: "Backend",
      descripcion: "Backend development focused on performance, data structures, business logic, and building efficient services."
    }
  },

  {
    nombre: "Java",
    nivel: 90,
    es: {
      categoria: "Backend",
      descripcion: "Desarrollo de aplicaciones y lógica de negocio utilizando programación orientada a objetos, estructuras de datos y principios de desarrollo de software."
    },
    en: {
      categoria: "Backend",
      descripcion: "Application and business logic development using object-oriented programming, data structures, and software development principles."
    }
  },

  {
    nombre: "PHP",
    nivel: 30,
    es: {
      categoria: "Backend",
      descripcion: "Conocimientos en PHP orientados al desarrollo web, manejo de lógica del servidor y comprensión de aplicaciones backend."
    },
    en: {
      categoria: "Backend",
      descripcion: "Knowledge of PHP for web development, server-side logic, and understanding of backend applications."
    }
  },

  {
    nombre: "JavaScript",
    nivel: 88,
    es: {
      categoria: "Frontend / Lógica",
      descripcion: "Desarrollo de interfaces dinámicas, manipulación del DOM, programación de interacciones, consumo de APIs y construcción de funcionalidades para aplicaciones web."
    },
    en: {
      categoria: "Frontend / Logic",
      descripcion: "Development of dynamic interfaces, DOM manipulation, interactive features, API consumption, and web application functionality."
    }
  },

  {
    nombre: "MySQL",
    nivel: 85,
    es: {
      categoria: "Bases de datos",
      descripcion: "Diseño y consulta de bases de datos relacionales, filtrado, agrupación, relaciones entre tablas y elaboración de consultas para análisis y gestión de información."
    },
    en: {
      categoria: "Databases",
      descripcion: "Relational database design and querying, filtering, grouping, table relationships, and query development for data analysis and information management."
    }
  },

  {
    nombre: "Python",
    nivel: 80,
    es: {
      categoria: "Data Analysis",
      descripcion: "Uso de Python para limpieza, transformación y análisis de datos, automatización de tareas y exploración de información mediante herramientas especializadas."
    },
    en: {
      categoria: "Data Analysis",
      descripcion: "Using Python for data cleaning, transformation, and analysis, task automation, and data exploration with specialized tools."
    }
  },

  {
    nombre: "HTML / CSS",
    nivel: 92,
    es: {
      categoria: "Frontend",
      descripcion: "Creación de interfaces web estructuradas y responsivas, aplicando HTML semántico, CSS, diseño adaptable y componentes reutilizables."
    },
    en: {
      categoria: "Frontend",
      descripcion: "Creation of structured and responsive web interfaces using semantic HTML, CSS, adaptive design, and reusable components."
    }
  },

  {
    nombre: "Git / GitHub",
    nivel: 82,
    es: {
      categoria: "Herramientas",
      descripcion: "Control de versiones con Git, gestión de repositorios, ramas, commits y publicación de proyectos mediante GitHub."
    },
    en: {
      categoria: "Tools",
      descripcion: "Version control with Git, repository management, branching, commits, and project publishing through GitHub."
    }
  },

  {
    nombre: "Excel",
    nivel: 85,
    es: {
      categoria: "Data Analysis",
      descripcion: "Organización, limpieza y análisis de información mediante fórmulas, tablas, filtros, herramientas de análisis y estructuras orientadas al seguimiento de datos."
    },
    en: {
      categoria: "Data Analysis",
      descripcion: "Data organization, cleaning, and analysis using formulas, tables, filters, analytical tools, and structures for data tracking."
    }
  },

  {
    nombre: "SQL",
    nivel: 85,
    es: {
      categoria: "Data Analysis",
      descripcion: "Consulta y análisis de bases de datos mediante filtros, JOIN, agregaciones, subconsultas y CTEs para transformar datos en información útil."
    },
    en: {
      categoria: "Data Analysis",
      descripcion: "Database querying and analysis using filters, JOINs, aggregations, subqueries, and CTEs to transform data into useful information."
    }
  },

  {
    nombre: "Pandas",
    nivel: 75,
    es: {
      categoria: "Data Analysis",
      descripcion: "Manipulación, limpieza, transformación y exploración de conjuntos de datos mediante DataFrames y operaciones orientadas al análisis."
    },
    en: {
      categoria: "Data Analysis",
      descripcion: "Data manipulation, cleaning, transformation, and exploration using DataFrames and analysis-oriented operations."
    }
  },

  {
    nombre: "Análisis Exploratorio de Datos",
    nivel: 75,
    es: {
      categoria: "Data Analysis",
      descripcion: "Exploración de conjuntos de datos para identificar patrones, tendencias, valores atípicos y relaciones que permitan obtener conclusiones relevantes."
    },
    en: {
      categoria: "Data Analysis",
      descripcion: "Exploration of datasets to identify patterns, trends, outliers, and relationships that can lead to meaningful insights."
    }
  },

  {
    nombre: "Limpieza de Datos",
    nivel: 80,
    es: {
      categoria: "Data Analysis",
      descripcion: "Preparación y depuración de datos mediante identificación de inconsistencias, valores faltantes, duplicados y estructuras necesarias para el análisis."
    },
    en: {
      categoria: "Data Analysis",
      descripcion: "Data preparation and cleaning by identifying inconsistencies, missing values, duplicates, and structures required for analysis."
    }
  },

  {
    nombre: "Visualización de Datos",
    nivel: 70,
    es: {
      categoria: "Data Analysis",
      descripcion: "Representación de información mediante gráficos y visualizaciones orientadas a facilitar la interpretación de datos y comunicar resultados."
    },
    en: {
      categoria: "Data Analysis",
      descripcion: "Data representation through charts and visualizations designed to facilitate data interpretation and communicate results."
    }
  },

  {
    nombre: "Power BI",
    nivel: 65,
    es: {
      categoria: "Data Analysis",
      descripcion: "Conocimientos en creación de visualizaciones, organización de información y construcción de reportes orientados al análisis y seguimiento de indicadores."
    },
    en: {
      categoria: "Data Analysis",
      descripcion: "Knowledge of creating visualizations, organizing information, and building reports for analysis and KPI tracking."
    }
  },

  {
    nombre: "Google Sheets",
    nivel: 75,
    es: {
      categoria: "Data Analysis",
      descripcion: "Gestión y organización de datos mediante hojas de cálculo, fórmulas, filtros y estructuras colaborativas para seguimiento y análisis de información."
    },
    en: {
      categoria: "Data Analysis",
      descripcion: "Data management and organization using spreadsheets, formulas, filters, and collaborative structures for information tracking and analysis."
    }
  },

  {
    nombre: "Angular",
    nivel: 40,
    es: {
      categoria: "Frontend",
      descripcion: "Conocimientos iniciales en desarrollo de aplicaciones frontend utilizando la estructura y componentes del framework Angular."
    },
    en: {
      categoria: "Frontend",
      descripcion: "Foundational knowledge of frontend application development using Angular's structure and component-based approach."
    }
  },

  {
    nombre: "Ionic",
    nivel: 40,
    es: {
      categoria: "Apps",
      descripcion: "Conocimientos iniciales en desarrollo de aplicaciones híbridas y adaptación de tecnologías web para entornos móviles."
    },
    en: {
      categoria: "Apps",
      descripcion: "Foundational knowledge of hybrid application development and adapting web technologies for mobile environments."
    }
  },

  {
    nombre: ".NET",
    nivel: 30,
    es: {
      categoria: "Backend",
      descripcion: "Conocimientos básicos del ecosistema .NET y sus fundamentos para el desarrollo de aplicaciones y servicios backend."
    },
    en: {
      categoria: "Backend",
      descripcion: "Basic knowledge of the .NET ecosystem and its fundamentals for developing backend applications and services."
    }
  },

  {
    nombre: "Progressive Web Apps (PWA)",
    nivel: 100,
    es: {
      categoria: "Web",
      descripcion: "Desarrollo de aplicaciones web progresivas orientadas a ofrecer experiencias similares a aplicaciones nativas, con capacidades de instalación y funcionamiento optimizado en dispositivos."
    },
    en: {
      categoria: "Web",
      descripcion: "Development of Progressive Web Apps designed to provide app-like experiences, including installability and optimized functionality across devices."
    }
  },

  {
    nombre: "REST API",
    nivel: 60,
    es: {
      categoria: "Backend",
      descripcion: "Conocimientos en consumo y estructuración de APIs REST para facilitar la comunicación e intercambio de información entre aplicaciones y servicios."
    },
    en: {
      categoria: "Backend",
      descripcion: "Knowledge of consuming and structuring REST APIs to enable communication and data exchange between applications and services."
    }
  },

  {
    nombre: "Automatización Industrial",
    nivel: 75,
    es: {
      categoria: "Mecatrónica",
      descripcion: "Conocimientos en automatización, sensores, actuadores y sistemas de control, integrando fundamentos de programación con procesos industriales."
    },
    en: {
      categoria: "Mechatronics",
      descripcion: "Knowledge of automation, sensors, actuators, and control systems, integrating programming fundamentals with industrial processes."
    }
  },
  {
    nombre: "IA",
    nivel: 100,
    es: {
      categoria: "Herramienta",
      descripcion: "Utilizo la IA para potenciar el desarrollo, automatizar procesos y optimizar flujos de trabajo, reduciendo significativamente el tiempo necesario para tareas complejas."
    },
    en: {
      categoria: "Tool",
      descripcion: "I use AI to enhance development, automate processes, and optimize workflows, significantly reducing the time required for complex tasks."
    }
  },

];
 
// ---- PROYECTOS ----
const proyectosData = [
  {
    tags: ["PHP", "JavaScript", "MySQL", "IndexedDB", "HTML/CSS"],
    estado: "proceso",
    tipo: "laboral",
    valoracion: { dedicacion: 5, complejidad: 4, utilidad: 5 },
    imagenes: [
      "proyectos/g-1.png",
      "proyectos/g-2.png",
      "proyectos/g-3.png",
      "proyectos/g-4.png",
      "proyectos/g-5.png",
    ],
    link: "https://masteqsystem.22web.org",

    es: {
      titulo: "Sistema de Gestión y Seguimiento de Servicios",
      resumen: "Plataforma web interna para centralizar la gestión de servicios técnicos, tickets, programación, informes y seguimiento de operaciones.",
      descripcion: "Desarrollo de una plataforma web modular orientada a digitalizar y centralizar la gestión de servicios técnicos en un entorno de mantenimiento de maquinaria. El sistema permite administrar tickets y solicitudes de servicio, programar actividades mediante un calendario, realizar seguimiento del estado de los trabajos, generar informes técnicos y controlar el acceso mediante diferentes roles de usuario. La aplicación cuenta con un backend desarrollado en PHP, una interfaz dinámica en JavaScript y persistencia de información mediante MySQL. Además, incorpora un enfoque offline-first utilizando IndexedDB, permitiendo almacenar temporalmente información en el navegador y continuar trabajando en escenarios con conectividad limitada. El proyecto se encuentra actualmente en proceso de desarrollo y evolución, con nuevas funcionalidades orientadas a mejorar la trazabilidad, organización y automatización de las operaciones de servicio."
    },

    en: {
      titulo: "Service Management & Tracking System",
      resumen: "Internal web platform for centralizing technical service management, ticketing, scheduling, reporting and operational tracking.",
      descripcion: "Development of a modular web platform designed to digitize and centralize technical service management within a machinery maintenance environment. The system enables users to manage service tickets and requests, schedule activities through a calendar, track work status, generate technical reports and control access through role-based permissions. The application features a PHP backend, a dynamic JavaScript interface and MySQL for data persistence. It also implements an offline-first approach using IndexedDB, allowing information to be temporarily stored in the browser and enabling continued work in environments with limited connectivity. The project is currently under active development, with new features focused on improving service traceability, operational organization and process automation."
    }
  },
  {
    tags: ["PHP", "HTML/CSS", "Go", "Angular","JavaScript", "UI/UX"],
    estado: "completado",
    tipo: "laboral",
    valoracion: { dedicacion: 5, complejidad: 5, utilidad: 5 },
    imagenes: [
      "proyectos/erp-1.png",
      "proyectos/erp-2.png",
    ],
    link: "https://erp.systemsweb.net",

    es: {
      titulo: "ERP / CRM Empresarial",
      resumen: "Sistema ERP/CRM modular para la gestión, facturación y automatización de procesos empresariales, adaptable a diferentes tipos de negocios.",
      descripcion: "Desarrollo y mantenimiento de una plataforma ERP/CRM modular orientada a centralizar y automatizar procesos administrativos y operativos de diferentes tipos de negocios, incluyendo centros comerciales, pequeñas empresas, restaurantes y lavaderos de vehículos. El sistema integra funcionalidades de facturación, cotizaciones, gestión de inventario, seguimiento de procesos y administración de información empresarial. Fue desarrollado utilizando tecnologías como PHP, Go, HTML/CSS y Angular, con una arquitectura orientada a la modularidad y escalabilidad para facilitar la incorporación de nuevas funcionalidades según las necesidades de cada negocio. También contempla la integración con APIs y servicios de terceros, incluyendo herramientas relacionadas con la gestión y automatización de redes sociales. Proyecto desarrollado para SystemsWeb."
    },
    en: {
      titulo: "Enterprise ERP / CRM",
      resumen: "Modular ERP/CRM platform for business management, invoicing and process automation, adaptable to different types of businesses.",
      descripcion: "Development and maintenance of a modular ERP/CRM platform designed to centralize and automate administrative and operational processes for different types of businesses, including shopping centers, small businesses, restaurants and car washes. The system integrates invoicing, quotations, inventory management, process tracking and business information management. It was developed using technologies such as PHP, Go, HTML/CSS and Angular, following a modular and scalable approach that facilitates the integration of new features according to each business's requirements. The platform also supports integrations with third-party APIs and services, including tools for social media management and automation. Project developed for SystemsWeb."
    }
  },
  {
    tags: ["PHP", "HTML/CSS", "Go", "Angular", "JavaScript", "CSS", "UI/UX"],
    estado: "completado",
    tipo: "laboral",
    valoracion: { dedicacion: 5, complejidad: 5, utilidad: 5 },
    imagenes: [
      "proyectos/siva-2.png",
      "proyectos/siva-3.png",
    ],
    link: "https://my-siva.com/vetermy",

    es: {
      titulo: "SIVA — Sistema de Gestión Veterinaria",
      resumen: "ERP especializado para clínicas y negocios veterinarios, orientado a la gestión de pacientes, facturación, cotizaciones, inventario y procesos administrativos.",
      descripcion: "Sistema ERP especializado para la gestión integral de establecimientos veterinarios, diseñado para centralizar y optimizar los procesos administrativos y operativos del negocio. La plataforma permite realizar seguimiento de pacientes, gestionar información y procesos asociados a la atención veterinaria, generar y administrar cotizaciones, gestionar facturación y controlar el inventario. El sistema incorpora diferentes herramientas de configuración y personalización para adaptar la plataforma a las necesidades de cada establecimiento. Desarrollado mediante una arquitectura basada en tecnologías como PHP, Go, Angular y JavaScript, con una interfaz enfocada en usabilidad, organización de la información y experiencia de usuario (UI/UX)."
    },

    en: {
      titulo: "SIVA — Veterinary Management System",
      resumen: "Specialized ERP for veterinary clinics and businesses, focused on patient management, invoicing, quotations, inventory and administrative processes.",
      descripcion: "Specialized ERP system designed to manage and centralize the administrative and operational processes of veterinary clinics and businesses. The platform enables patient tracking, management of veterinary care information and processes, quotation creation and management, invoicing and inventory control. It also includes configuration and customization tools that allow the platform to adapt to the specific needs of each business. Developed using technologies such as PHP, Go, Angular and JavaScript, with an interface focused on usability, information organization and user experience (UI/UX)."
    }
  },
  {
    tags: ["Go", "HTML/CSS", "SQLite", "UI/UX"],
    estado: "completado",
    tipo: "laboral",
    valoracion: { dedicacion: 5, complejidad: 5, utilidad: 5 },
    imagenes: [
      "proyectos/assembly-1.png",
      "proyectos/assembly-2.png",
      "proyectos/assembly-3.png",
      "proyectos/assembly-4.png",
    ],
    link: "#",

    es: {
      titulo: "ASSEMBLY — Sistema de Gestión de Asambleas",
      resumen: "Aplicación de escritorio para la gestión y digitalización de asambleas presenciales, incluyendo votaciones, validación de acceso y almacenamiento seguro de información.",
      descripcion: "Sistema de escritorio diseñado para digitalizar y gestionar asambleas presenciales, facilitando la administración de procesos de votación y el manejo de información durante las sesiones. La aplicación cuenta con un sistema de activación mediante claves únicas, permitiendo validar y controlar el acceso a cada instalación. Desarrollado en Go con SQLite para el almacenamiento local de información, incorpora mecanismos de protección y cifrado de datos para preservar la información relacionada con las votaciones. El sistema también permite integrarse con dispositivos y sistemas de control de terceros para recibir y procesar las interacciones de los participantes durante las asambleas. La interfaz fue diseñada bajo criterios de usabilidad y UI/UX, buscando facilitar la operación del sistema en escenarios presenciales donde la estabilidad y confiabilidad son fundamentales."
    },

    en: {
      titulo: "ASSEMBLY — Assembly Management System",
      resumen: "Desktop application for managing and digitizing in-person assemblies, including voting, access validation and secure data storage.",
      descripcion: "Desktop application designed to digitize and manage in-person assemblies, facilitating voting processes and information management during sessions. The application includes a unique-key activation system to validate and control access to each installation. Developed in Go with SQLite for local data storage, it incorporates data protection and encryption mechanisms to safeguard voting-related information. The system can also integrate with third-party control devices and systems to receive and process participant interactions during assemblies. Its interface was designed with usability and UI/UX principles in mind, focusing on ease of operation in in-person environments where stability and reliability are essential."
    }
  }
];
 
/* ============================================================
   RENDER: EDUCACIÓN
   ============================================================ */
const eduGrid = document.getElementById('eduGrid');
function renderEducacion(lang){
  const t = i18n[lang].edu;
  eduGrid.innerHTML = '';
  educacionData.forEach((item) => {
    const content = item[lang];
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-face flip-front">
          <div>
            <div class="edu-icon">${item.icon}</div>
            <h3>${content.titulo}</h3>
            <div class="edu-inst">${content.institucion}</div>
          </div>
          <div class="edu-year">${item.anio}</div>
          <div class="flip-hint">${t.hint}</div>
        </div>
        <div class="flip-face flip-back">
          <h4>${t.detail}</h4>
          <p>${content.descripcion}</p>
          ${item.diploma ? `<a class="diploma-link" href="${item.diploma}" target="_blank" onclick="event.stopPropagation()">${t.diploma}</a>` : ''}
        </div>
      </div>
    `;
    // click para tactil (toggle), hover ya cubierto por CSS en escritorio
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
    eduGrid.appendChild(card);
  });
}
 
/* ============================================================
   RENDER: HABILIDADES
   ============================================================ */
const skillsTags = document.getElementById('skillsTags');
const skillDetail = document.getElementById('skillDetail');
const skillDetailInner = document.getElementById('skillDetailInner');
let activeSkillIndex = null;
 
function renderSkills(lang){
  skillsTags.innerHTML = '';
  skillDetail.classList.remove('open');
  activeSkillIndex = null;
  skillsData.forEach((skill, i) => {
    const tag = document.createElement('button');
    tag.className = 'skill-tag';
    tag.innerHTML = `${skill.nombre}<span class="lvl"></span>`;
    tag.addEventListener('click', () => toggleSkill(i, tag));
    skillsTags.appendChild(tag);
  });
}
 
function toggleSkill(i, tagEl){
  const allTags = document.querySelectorAll('.skill-tag');
  if(activeSkillIndex === i){
    skillDetail.classList.remove('open');
    tagEl.classList.remove('active');
    activeSkillIndex = null;
    return;
  }
  allTags.forEach(t => t.classList.remove('active'));
  tagEl.classList.add('active');
  const skill = skillsData[i];
  const content = skill[currentLang];
  skillDetailInner.innerHTML = `
    <span class="skill-cat">${content.categoria}</span>
    <h4>${skill.nombre}</h4>
    <p>${content.descripcion}</p>
    <div class="skill-bar"><span id="skillBarFill"></span></div>
  `;
  skillDetail.classList.add('open');
  activeSkillIndex = i;
  setTimeout(() => {
    const fill = document.getElementById('skillBarFill');
    if(fill) fill.style.width = skill.nivel + '%';
  }, 60);
}
 
/* ============================================================
   RENDER: PROYECTOS + MODAL CON CARRUSEL AUTOMÁTICO
   ============================================================ */
const projGrid = document.getElementById('projGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots = document.getElementById('carouselDots');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTags = document.getElementById('modalTags');
const modalLinks = document.getElementById('modalLinks');
const modalRating = document.getElementById('modalRating');
 
let carouselTimer = null;
let carouselIndex = 0;
let carouselLen = 0;
 
function renderStarsHTML(value, size){
  let html = `<div class="stars${size === 'mini' ? '' : ''}">`;
  for(let i = 1; i <= 5; i++){
    html += `<span class="star${i <= value ? ' filled' : ''}">★</span>`;
  }
  html += `</div>`;
  return html;
}
 
function renderProyectos(lang){
  const t = i18n[lang].proj;
  projGrid.innerHTML = '';
  proyectosData.forEach((proj, i) => {
    const content = proj[lang];
    const card = document.createElement('div');
    card.className = 'proj-card';
    card.innerHTML = `
      <div class="proj-thumb" style="background-image:url('${proj.imagenes[0]}')">
        <div class="proj-tags">${proj.tags.slice(0,3).map(tag => `<span>${tag}</span>`).join('')}</div>
      </div>
      <div class="proj-body">
        <div class="proj-badges">
          <span class="badge badge-${proj.estado}">${proj.estado === 'proceso' ? '<span class="dot"></span>' : ''}${proj.estado === 'proceso' ? t.inProgress : t.completed}</span>
          <span class="badge badge-${proj.tipo}">${proj.tipo === 'personal' ? t.personal : t.laboral}</span>
        </div>
        <h3>${content.titulo}</h3>
        <p>${content.resumen}</p>
        <span class="proj-open">${t.open}</span>
      </div>
    `;
    card.addEventListener('click', () => openProjectModal(i));
    projGrid.appendChild(card);
  });
}
 
function openProjectModal(i){
  const proj = proyectosData[i];
  const content = proj[currentLang];
  const t = i18n[currentLang].proj;
  modalTitle.textContent = content.titulo;
  modalDesc.textContent = content.descripcion;
  modalTags.innerHTML = proj.tags.map(tag => `<span>${tag}</span>`).join('');
  modalLinks.innerHTML = proj.link ? `<a class="btn" href="${proj.link}" target="_blank">${t.more}</a>` : '';
 
  modalRating.innerHTML = `
    <div class="rating-row">
      <span class="rating-label">${t.dedication}</span>
      ${renderStarsHTML(proj.valoracion.dedicacion)}
    </div>
    <div class="rating-row">
      <span class="rating-label">${t.complexity}</span>
      ${renderStarsHTML(proj.valoracion.complejidad)}
    </div>
    <div class="rating-row">
      <span class="rating-label">${t.utility}</span>
      ${renderStarsHTML(proj.valoracion.utilidad)}
    </div>
  `;
 
  carouselTrack.innerHTML = proj.imagenes.map(src => `<img src="${src}" alt="${content.titulo}">`).join('');
  carouselDots.innerHTML = proj.imagenes.map((_, idx) => `<span data-idx="${idx}"></span>`).join('');
  carouselLen = proj.imagenes.length;
  carouselIndex = 0;
  updateCarousel();
 
  document.querySelectorAll('.carousel-dots span').forEach(dot => {
    dot.addEventListener('click', () => {
      carouselIndex = parseInt(dot.dataset.idx);
      updateCarousel();
      restartCarouselTimer();
    });
  });
 
  modalOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
  restartCarouselTimer();
}
 
function updateCarousel(){
  carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
  document.querySelectorAll('.carousel-dots span').forEach((d, idx) => {
    d.classList.toggle('active', idx === carouselIndex);
  });
}
 
function restartCarouselTimer(){
  clearInterval(carouselTimer);
  if(carouselLen > 1){
    carouselTimer = setInterval(() => {
      carouselIndex = (carouselIndex + 1) % carouselLen;
      updateCarousel();
    }, 3200);
  }
}
 
function closeModal(){
  modalOverlay.classList.remove('show');
  document.body.style.overflow = '';
  clearInterval(carouselTimer);
}
 
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if(e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
});
 
/* ============================================================
   IDIOMA: aplica textos estáticos, placeholders y re-renderiza
   las secciones dinámicas (educación, habilidades, proyectos)
   ============================================================ */
function getI18nValue(lang, path){
  return path.split('.').reduce((obj, key) => (obj ? obj[key] : undefined), i18n[lang]);
}
 
function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
 
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getI18nValue(lang, el.getAttribute('data-i18n'));
    if(typeof val === 'string') el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = getI18nValue(lang, el.getAttribute('data-i18n-placeholder'));
    if(typeof val === 'string') el.setAttribute('placeholder', val);
  });
 
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
 
  renderEducacion(lang);
  renderSkills(lang);
  renderProyectos(lang);
  updateActiveLink();
}
 
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.dataset.lang !== currentLang) setLanguage(btn.dataset.lang);
  });
});
 
/* ============================================================
   NAV: scroll state, menú móvil, link activo, smooth scroll
   ============================================================ */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
 
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveLink();
}, { passive:true });
 
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});
 
const sections = document.querySelectorAll('main section, main header');
function updateActiveLink(){
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 160;
    if(window.scrollY >= top) current = sec.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
 
/* ============================================================
   SCROLL REVEAL (cosas que se mueven al bajar)
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));
 
/* parallax leve del grid de fondo */
const gridBg = document.getElementById('gridBg');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  gridBg.style.transform = `translateY(${y * 0.06}px)`;
}, { passive:true });
 
/* ============================================================
   FORMULARIO DE CONTACTO
   ============================================================ */
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const nombre = document.getElementById('fName').value;
  const t = i18n[currentLang].form;
  emailjs.sendForm(
    "service_qxmqsbm",
    "template_ocksi6s",
    this
  )
  .then(() => {
    Swal.fire({
      title: t.successTitle,
      text: t.successText(nombre),
      icon: 'success',
      background: '#060e1a',
      color: '#e8f6ff',
      confirmButtonColor: '#00e5ff'
    });
    this.reset();
  })
  .catch((error) => {
    Swal.fire({
      title: t.successTitle,
      text: t.successText(nombre),
      icon: 'error Enviando el mensaje',
      background: '#060e1a',
      color: '#e8f6ff',
      confirmButtonColor: '#00e5ff'
    });
    console.error("Error:", error);
  });

  this.reset();
});
 
document.getElementById('year').textContent = new Date().getFullYear();
 
/* Inicializa el idioma por defecto una vez que todo el script ya fue declarado */
setLanguage('es');
});