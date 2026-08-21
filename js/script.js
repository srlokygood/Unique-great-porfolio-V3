/* ============================================================
   DATOS EDITABLES — modifica estos arrays con tu información
   ============================================================ */

// ---- EDUCACIÓN Y CERTIFICACIONES ----
const educacionData = [
  {
    icon: "&#127891;",
    titulo: "Ingeniería Mecatrónica",
    institucion: "Universidad Ejemplo",
    anio: "2018 — 2023",
    descripcion: "Formación en sistemas mecánicos, electrónicos y de control automatizado, integrando software embebido con procesos industriales.",
    diploma: "" // URL de la imagen del diploma, ej: "assets/diplomas/mecatronica.jpg"
  },
  {
    icon: "&#128187;",
    titulo: "Desarrollo Web Full Stack",
    institucion: "Plataforma / Bootcamp",
    anio: "2023",
    descripcion: "Certificación enfocada en desarrollo backend con PHP, JavaScript moderno, bases de datos relacionales y buenas prácticas de arquitectura web.",
    diploma: ""
  },
  {
    icon: "&#128202;",
    titulo: "Análisis de Datos",
    institucion: "Plataforma / Certificación",
    anio: "2024",
    descripcion: "Curso enfocado en limpieza, análisis y visualización de datos usando Python, SQL y herramientas de BI para toma de decisiones.",
    diploma: ""
  }
];

// ---- HABILIDADES ----
const skillsData = [
  { nombre: "PHP", categoria: "Backend", nivel: 90, descripcion: "Experiencia con Laravel y PHP vanilla para desarrollar backends robustos, APIs y lógica de negocio en aplicaciones web internas." },
  { nombre: "JavaScript", categoria: "Frontend / Lógica", nivel: 88, descripcion: "Manejo de JavaScript moderno (ES6+) para interfaces dinámicas, consumo de APIs con fetch/AJAX y componentes interactivos." },
  { nombre: "MySQL", categoria: "Bases de datos", nivel: 85, descripcion: "Diseño de esquemas relacionales, consultas optimizadas, procedimientos almacenados y patrones de agregación como GROUP_CONCAT." },
  { nombre: "Python", categoria: "Data Analysis", nivel: 80, descripcion: "Análisis y limpieza de datos, automatización de procesos y construcción de modelos simples con pandas y librerías de visualización." },
  { nombre: "HTML / CSS", categoria: "Frontend", nivel: 92, descripcion: "Maquetación semántica y estilos avanzados, animaciones, diseño responsivo y sistemas de componentes reutilizables." },
  { nombre: "Control de Versiones", categoria: "Herramientas", nivel: 82, descripcion: "Uso de Git para control de versiones, ramas de trabajo y colaboración en proyectos de software." },
  { nombre: "Automatización Industrial", categoria: "Mecatrónica", nivel: 75, descripcion: "Fundamentos de PLC, sensores, actuadores e integración de sistemas de control con software de monitoreo." }
];

// ---- PROYECTOS ----
const proyectosData = [
  {
    titulo: "Sistema de Gestión de Servicios",
    resumen: "Plataforma interna para gestión de tickets, informes y programación de servicios técnicos.",
    descripcion: "Aplicación web multi-módulo para un taller de mantenimiento de maquinaria, con gestión de tickets, calendario de servicios, generación de informes y control de acceso por roles. Backend en PHP y frontend en JavaScript con guardado offline-first usando IndexedDB.",
    tags: ["PHP", "JavaScript", "MySQL", "IndexedDB"],
    imagenes: [
      "https://via.placeholder.com/900x500/060e1a/00e5ff?text=Vista+Dashboard",
      "https://via.placeholder.com/900x500/060e1a/2f7bff?text=Calendario+de+Servicios",
      "https://via.placeholder.com/900x500/060e1a/9b5cff?text=Gestion+de+Tickets"
    ],
    link: "#"
  },
  {
    titulo: "Extractor de Informes PDF a Excel",
    resumen: "Utilidad para procesar informes técnicos en PDF y estructurarlos automáticamente en Excel.",
    descripcion: "Herramienta construida en PHP con Composer para extraer 17 campos definidos de informes técnicos en PDF, con modo de procesamiento por lotes (CLI) y carga individual vía web, usando un enfoque de extracción por posición de etiquetas.",
    tags: ["PHP", "Composer", "Automatización"],
    imagenes: [
      "https://via.placeholder.com/900x500/060e1a/00e5ff?text=Carga+de+PDF",
      "https://via.placeholder.com/900x500/060e1a/2f7bff?text=Extraccion+de+Datos",
      "https://via.placeholder.com/900x500/060e1a/9b5cff?text=Exportacion+Excel"
    ],
    link: "#"
  },
  {
    titulo: "Selector de Clientes con Autocompletado",
    resumen: "Componente visual de selección de clientes con filtrado en vivo y navegación por teclado.",
    descripcion: "Componente de UI reutilizable con diseño en grilla 2x2 por elemento, filtrado en tiempo real, navegación con teclado y estilos aislados mediante un prefijo CSS propio para evitar conflictos con el resto del sistema.",
    tags: ["JavaScript", "CSS", "UI/UX"],
    imagenes: [
      "https://via.placeholder.com/900x500/060e1a/00e5ff?text=Selector+Cliente",
      "https://via.placeholder.com/900x500/060e1a/2f7bff?text=Filtro+en+vivo"
    ],
    link: "#"
  }
];

/* ============================================================
   RENDER: EDUCACIÓN
   ============================================================ */
const eduGrid = document.getElementById('eduGrid');
educacionData.forEach((item, i) => {
  const card = document.createElement('div');
  card.className = 'flip-card';
  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-face flip-front">
        <div>
          <div class="edu-icon">${item.icon}</div>
          <h3>${item.titulo}</h3>
          <div class="edu-inst">${item.institucion}</div>
        </div>
        <div class="edu-year">${item.anio}</div>
        <div class="flip-hint">Toca para ver más</div>
      </div>
      <div class="flip-face flip-back">
        <h4>Detalle</h4>
        <p>${item.descripcion}</p>
        ${item.diploma ? `<a class="diploma-link" href="${item.diploma}" target="_blank" onclick="event.stopPropagation()">Ver diploma</a>` : ''}
      </div>
    </div>
  `;
  // click para tactil (toggle), hover ya cubierto por CSS en escritorio
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
  eduGrid.appendChild(card);
});

/* ============================================================
   RENDER: HABILIDADES
   ============================================================ */
const skillsTags = document.getElementById('skillsTags');
const skillDetail = document.getElementById('skillDetail');
const skillDetailInner = document.getElementById('skillDetailInner');
let activeSkillIndex = null;

skillsData.forEach((skill, i) => {
  const tag = document.createElement('button');
  tag.className = 'skill-tag';
  tag.innerHTML = `${skill.nombre}<span class="lvl"></span>`;
  tag.addEventListener('click', () => toggleSkill(i, tag));
  skillsTags.appendChild(tag);
});

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
  skillDetailInner.innerHTML = `
    <span class="skill-cat">${skill.categoria}</span>
    <h4>${skill.nombre}</h4>
    <p>${skill.descripcion}</p>
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

let carouselTimer = null;
let carouselIndex = 0;
let carouselLen = 0;

proyectosData.forEach((proj, i) => {
  const card = document.createElement('div');
  card.className = 'proj-card';
  card.innerHTML = `
    <div class="proj-thumb" style="background-image:url('${proj.imagenes[0]}')">
      <div class="proj-tags">${proj.tags.slice(0,3).map(t => `<span>${t}</span>`).join('')}</div>
    </div>
    <div class="proj-body">
      <h3>${proj.titulo}</h3>
      <p>${proj.resumen}</p>
      <span class="proj-open">Ver proyecto &rarr;</span>
    </div>
  `;
  card.addEventListener('click', () => openProjectModal(i));
  projGrid.appendChild(card);
});

function openProjectModal(i){
  const proj = proyectosData[i];
  modalTitle.textContent = proj.titulo;
  modalDesc.textContent = proj.descripcion;
  modalTags.innerHTML = proj.tags.map(t => `<span>${t}</span>`).join('');
  modalLinks.innerHTML = proj.link ? `<a class="btn" href="${proj.link}" target="_blank">Ver más</a>` : '';

  carouselTrack.innerHTML = proj.imagenes.map(src => `<img src="${src}" alt="${proj.titulo}">`).join('');
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

  if(window.Swal){
    Swal.fire({
      title: '¡Mensaje enviado!',
      text: `Gracias ${nombre}, te responderé lo antes posible.`,
      icon: 'success',
      background: '#060e1a',
      color: '#e8f6ff',
      confirmButtonColor: '#00e5ff'
    });
  } else {
    alert('¡Mensaje enviado! Gracias ' + nombre + ', te responderé pronto.');
  }
  this.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();