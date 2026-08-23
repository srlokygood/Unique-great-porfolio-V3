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
    diploma: "certificados/mecatronica.png", // URL de la imagen del diploma, ej: "assets/diplomas/mecatronica.jpg"
    es: { titulo: "Ingeniería Mecatrónica", institucion: "El SENA", descripcion: "Formación en sistemas mecánicos, electrónicos y de control automatizado, integrando software embebido con procesos industriales." },
    en: { titulo: "Mechatronics Engineering", institucion: "Example University", descripcion: "Training in mechanical, electronic and automated control systems, integrating embedded software with industrial processes." }
  },
  {
    icon: "&#128187;",
    anio: "2019",
    diploma: "introduccionprogramacion.png",
    es: { titulo: "Introduccion a la programaciòn", institucion: "Capacitate para el empleo", descripcion: "Certificado en logica de programacion basica y algoritmos programaticos y buenas practicas" },
    en: { titulo: "Programming introduction", institucion: "Capacitate para el empleo", descripcion: "Certificate in basic programming logic and programming algorithms and good practices" }
  },
  {
    icon: "&#128187;",
    anio: "2020",
    diploma: "certificados/logicaprograacion.png",
    es: { titulo: "Logica de programaciòn", institucion: "Capacitate para el empleo", descripcion: "Curso enfocado en aprender e identificar los algoritmos y logica de la programacion" },
    en: { titulo: "Programming logic", institucion: "Capacitate para el empleo", descripcion: "A course focused on learning and identifying programming algorithms and logic" }
  },
  {
    icon: "&#128187;",
    anio: "2022",
    diploma: "certificados/php7.png",
    es: { titulo: "Novedades PHP 7", institucion: "Linkedin", descripcion: "Curso enfocado en adquirir herramientas para aplicar buenas practicas para optimizacion, seguridad y agilidad en el lenguaje PHP en su septima version" },
    en: { titulo: "PHP 7 news", institucion: "Linkedin", descripcion: "A course focused on acquiring tools to apply best practices for optimization, security, and agility in PHP version 7" }
  },
  {
    icon: "&#128187;",
    anio: "2025",
    diploma: "certificados/dtosdtos.png",
    es: { titulo: "Aspectos básicos: Datos, datos, en todas partes", institucion: "Google / Coursera", descripcion: "Curso basico enfocado en la recopilacion de datos y proposito del analisis de datos" },
    en: { titulo: "The Basics: Data, data, everywhere", institucion: "Google / Coursera", descripcion: "Basic course focused on data collection and the purpose of data analysis" }
  },
  {
    icon: "&#128187;",
    anio: "2026",
    diploma: "",
    es: { titulo: "Analaysis de datos", institucion: "Tripleten", descripcion: "Curso certificado avanzado como analista de datos (En proceso)" },
    en: { titulo: "Data analyst", institucion: "Tripleten", descripcion: "Advanced Certified Data Analyst Course (in Progress)" }
  },
];
 
// ---- HABILIDADES ----
const skillsData = [
  { nombre: "GO", nivel: 90, es: { categoria: "Backend", descripcion: "Experiencia con Laravel y PHP vanilla para desarrollar backends robustos, APIs y lógica de negocio en aplicaciones web internas." }, en: { categoria: "Backend", descripcion: "Experience with Laravel and vanilla PHP to build robust backends, APIs and business logic for internal web applications." } },
  { nombre: "JAVA", nivel: 90, es: { categoria: "Backend", descripcion: "Experiencia con Laravel y PHP vanilla para desarrollar backends robustos, APIs y lógica de negocio en aplicaciones web internas." }, en: { categoria: "Backend", descripcion: "Experience with Laravel and vanilla PHP to build robust backends, APIs and business logic for internal web applications." } },
  { nombre: "PHP", nivel: 90, es: { categoria: "Backend", descripcion: "Experiencia con Laravel y PHP vanilla para desarrollar backends robustos, APIs y lógica de negocio en aplicaciones web internas." }, en: { categoria: "Backend", descripcion: "Experience with Laravel and vanilla PHP to build robust backends, APIs and business logic for internal web applications." } },
  { nombre: "JavaScript", nivel: 88, es: { categoria: "Frontend / Lógica", descripcion: "Manejo de JavaScript moderno (ES6+) para interfaces dinámicas, consumo de APIs con fetch/AJAX y componentes interactivos." }, en: { categoria: "Frontend / Logic", descripcion: "Proficient in modern JavaScript (ES6+) for dynamic interfaces, API consumption with fetch/AJAX and interactive components." } },
  { nombre: "MySQL", nivel: 85, es: { categoria: "Bases de datos", descripcion: "Diseño de esquemas relacionales, consultas optimizadas, procedimientos almacenados y patrones de agregación como GROUP_CONCAT." }, en: { categoria: "Databases", descripcion: "Relational schema design, optimized queries, stored procedures and aggregation patterns such as GROUP_CONCAT." } },
  { nombre: "Python", nivel: 80, es: { categoria: "Data Analysis", descripcion: "Análisis y limpieza de datos, automatización de procesos y construcción de modelos simples con pandas y librerías de visualización." }, en: { categoria: "Data Analysis", descripcion: "Data analysis and cleaning, process automation and simple modeling with pandas and visualization libraries." } },
  { nombre: "HTML / CSS", nivel: 92, es: { categoria: "Frontend", descripcion: "Maquetación semántica y estilos avanzados, animaciones, diseño responsivo y sistemas de componentes reutilizables." }, en: { categoria: "Frontend", descripcion: "Semantic markup and advanced styling, animations, responsive design and reusable component systems." } },
  { nombre: "Control de Versiones", nivel: 82, es: { categoria: "Herramientas", descripcion: "Uso de Git para control de versiones, ramas de trabajo y colaboración en proyectos de software." }, en: { categoria: "Tools", descripcion: "Use of Git for version control, branching workflows and collaboration on software projects." } },
  { nombre: "Automatización Industrial", nivel: 75, es: { categoria: "Mecatrónica", descripcion: "Fundamentos de PLC, sensores, actuadores e integración de sistemas de control con software de monitoreo." }, en: { categoria: "Mechatronics", descripcion: "Fundamentals of PLCs, sensors, actuators and integration of control systems with monitoring software." } },
  { nombre: "Angular", nivel: 40, es: { categoria: "Frontend", descripcion: "Experiencia con Laravel y PHP vanilla para desarrollar backends robustos, APIs y lógica de negocio en aplicaciones web internas." }, en: { categoria: "Backend", descripcion: "Experience with Laravel and vanilla PHP to build robust backends, APIs and business logic for internal web applications." } },
  { nombre: "IONIC", nivel: 40, es: { categoria: "Apps", descripcion: "Experiencia con Laravel y PHP vanilla para desarrollar backends robustos, APIs y lógica de negocio en aplicaciones web internas." }, en: { categoria: "Backend", descripcion: "Experience with Laravel and vanilla PHP to build robust backends, APIs and business logic for internal web applications." } },
  { nombre: ".NET", nivel: 30, es: { categoria: "Backend", descripcion: "Experiencia con Laravel y PHP vanilla para desarrollar backends robustos, APIs y lógica de negocio en aplicaciones web internas." }, en: { categoria: "Backend", descripcion: "Experience with Laravel and vanilla PHP to build robust backends, APIs and business logic for internal web applications." } },
  { nombre: "Progressive Web Apps (PWA)", nivel: 100, es: { categoria: "Backend", descripcion: "Experiencia con Laravel y PHP vanilla para desarrollar backends robustos, APIs y lógica de negocio en aplicaciones web internas." }, en: { categoria: "Backend", descripcion: "Experience with Laravel and vanilla PHP to build robust backends, APIs and business logic for internal web applications." } },
  { nombre: "API Rest", nivel: 60, es: { categoria: "Herramientas", descripcion: "Experiencia con Laravel y PHP vanilla para desarrollar backends robustos, APIs y lógica de negocio en aplicaciones web internas." }, en: { categoria: "Backend", descripcion: "Experience with Laravel and vanilla PHP to build robust backends, APIs and business logic for internal web applications." } }
];
 
// ---- PROYECTOS ----
const proyectosData = [
  {
    tags: ["PHP", "JavaScript", "MySQL", "IndexedDB"],
    estado: "proceso",
    tipo: "laboral",
    valoracion: { dedicacion: 5, complejidad: 4, utilidad: 5 },
    imagenes: [
      "https://via.placeholder.com/900x500/060e1a/00e5ff?text=Dashboard+View",
      "https://via.placeholder.com/900x500/060e1a/2f7bff?text=Service+Calendar",
      "https://via.placeholder.com/900x500/060e1a/9b5cff?text=Ticket+Management"
    ],
    link: "#",
    es: { titulo: "Sistema de Gestión de Servicios", resumen: "Plataforma interna para gestión de tickets, informes y programación de servicios técnicos.", descripcion: "Aplicación web multi-módulo para un taller de mantenimiento de maquinaria, con gestión de tickets, calendario de servicios, generación de informes y control de acceso por roles. Backend en PHP y frontend en JavaScript con guardado offline-first usando IndexedDB." },
    en: { titulo: "Service Management System", resumen: "Internal platform for ticket management, reports and technical service scheduling.", descripcion: "Multi-module web application for a machinery maintenance workshop, with ticket management, service calendar, report generation and role-based access control. PHP backend and JavaScript frontend with offline-first saving using IndexedDB." }
  },
  {
    tags: ["PHP", "Composer", "Automatización"],
    estado: "completado",
    tipo: "laboral",
    valoracion: { dedicacion: 4, complejidad: 3, utilidad: 4 },
    imagenes: [
      "https://via.placeholder.com/900x500/060e1a/00e5ff?text=PDF+Upload",
      "https://via.placeholder.com/900x500/060e1a/2f7bff?text=Data+Extraction",
      "https://via.placeholder.com/900x500/060e1a/9b5cff?text=Excel+Export"
    ],
    link: "#",
    es: { titulo: "Extractor de Informes PDF a Excel", resumen: "Utilidad para procesar informes técnicos en PDF y estructurarlos automáticamente en Excel.", descripcion: "Herramienta construida en PHP con Composer para extraer 17 campos definidos de informes técnicos en PDF, con modo de procesamiento por lotes (CLI) y carga individual vía web, usando un enfoque de extracción por posición de etiquetas." },
    en: { titulo: "PDF-to-Excel Report Extractor", resumen: "Utility to process technical PDF reports and automatically structure them into Excel.", descripcion: "Tool built in PHP with Composer to extract 17 defined fields from technical PDF reports, supporting both batch processing (CLI) and individual web uploads, using a label-position extraction approach." }
  },
  {
    tags: ["JavaScript", "CSS", "UI/UX"],
    estado: "completado",
    tipo: "personal",
    valoracion: { dedicacion: 3, complejidad: 3, utilidad: 4 },
    imagenes: [
      "https://via.placeholder.com/900x500/060e1a/00e5ff?text=Client+Selector",
      "https://via.placeholder.com/900x500/060e1a/2f7bff?text=Live+Filtering"
    ],
    link: "#",
    es: { titulo: "Selector de Clientes con Autocompletado", resumen: "Componente visual de selección de clientes con filtrado en vivo y navegación por teclado.", descripcion: "Componente de UI reutilizable con diseño en grilla 2x2 por elemento, filtrado en tiempo real, navegación con teclado y estilos aislados mediante un prefijo CSS propio para evitar conflictos con el resto del sistema." },
    en: { titulo: "Client Selector with Autocomplete", resumen: "Visual client selection component with live filtering and keyboard navigation.", descripcion: "Reusable UI component with a 2x2 grid layout per item, real-time filtering, keyboard navigation and isolated styles using a custom CSS prefix to avoid conflicts with the rest of the system." }
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
  if(window.Swal){
    Swal.fire({
      title: t.successTitle,
      text: t.successText(nombre),
      icon: 'success',
      background: '#060e1a',
      color: '#e8f6ff',
      confirmButtonColor: '#00e5ff'
    });
  } else {
    alert(t.successTitle + ' ' + t.successText(nombre));
  }
  this.reset();
});
 
document.getElementById('year').textContent = new Date().getFullYear();
 
/* Inicializa el idioma por defecto una vez que todo el script ya fue declarado */
setLanguage('es');
});