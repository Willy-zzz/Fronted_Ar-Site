<template>
  <!-- HERO FULL WIDTH -->
  <Hero title="Nosotros" subtitle="Integración de Tecnologías de Información y Telecomunicaciones"/>

  <section class="about container">

    <!-- ── DESCRIPCIÓN ─────────────────────────────────── -->
    <div class="description reveal" data-delay="0">
      <span class="eyebrow">Quiénes somos</span>
      <h2 class="section-title">18 Años de <em>Experiencia</em></h2>
      <div class="divider-line"></div>
      <p>
        Los alcances de nuestros productos y servicios incluyen redes de datos
        inalámbricas de banda ancha WAN y LAN, WiMAX, fibra óptica, voz IP,
        CCTV circuito cerrado de TV análogo y digital, virtualización,
        almacenamiento, switches de alto desempeño, seguridad, recuperación de
        desastres, aceleración WAN y servidores. Ofrecemos tecnología de
        vanguardia con garantía, servicio de valor agregado y el mejor precio
        del mercado.
      </p>
    </div>

    <!-- ── STATS ROW ───────────────────────────────────── -->
    <div class="stats-row reveal" data-delay="100">
      <div v-for="stat in stats" :key="stat.label" class="stat-item">
        <span class="stat-number">{{ stat.number }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>

    <!-- ── MISIÓN Y VISIÓN ─────────────────────────────── -->
    <div class="mv-grid">
      <div class="mv-card reveal" data-delay="0">
        <div class="mv-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
        <h2 class="mv-title">Misión</h2>
        <p>
          Ser una empresa líder de integración de tecnologías de información y
          telecomunicaciones en México, ofreciendo servicios de consultoría de
          alto nivel, traduciendo la tecnología en rentabilidad para el negocio
          con una oferta competitiva en precio y calidad.
        </p>
      </div>
      <div class="mv-card reveal" data-delay="150">
        <div class="mv-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <h2 class="mv-title">Visión</h2>
        <p>
          Ser reconocidos por la excelencia en calidad de nuestros servicios,
          dando soluciones integrales en tecnologías de información que se
          traduzcan en una oferta competitiva en precio y calidad para nuestros
          clientes.
        </p>
      </div>
    </div>

    <!-- ── VALORES ─────────────────────────────────────── -->
    <div class="values-section reveal" data-delay="0">
      <span class="eyebrow">Lo que nos define</span>
      <h2 class="section-title">Nuestros <em>Valores</em></h2>
      <div class="divider-line"></div>
      <div class="values-grid">
        <div v-for="(value, i) in values" :key="value.title" class="value-card" :style="`--i:${i}`">
          <span class="value-num">0{{ i + 1 }}</span>
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
          <div class="value-bar"></div>
        </div>
      </div>
    </div>

    <!-- ── CERTIFICACIONES ─────────────────────────────── -->
    <div class="certifications reveal" data-delay="0">
      <span class="eyebrow">Respaldo técnico</span>
      <h2 class="section-title">Certificaciones</h2>
      <div class="divider-line"></div>
      <div class="cert-track">
        <div class="cert-grid">
          <div v-for="cert in certifications" :key="cert.name + cert.image" class="cert-item">
            <div class="cert-img-wrap">
              <img :src="cert.image" :alt="cert.name" />
            </div>
            <p>{{ cert.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ── PREMIOS ─────────────────────────────────────── -->
    <div class="awards reveal" data-delay="0">
      <span class="eyebrow">Trayectoria</span>
      <h2 class="section-title">Premios y <em>Reconocimientos</em></h2>
      <div class="divider-line"></div>

      <!-- Timeline -->
      <div class="timeline">
        <div v-for="(award, index) in awards" :key="index" class="timeline-item" :style="`--ti:${index}`">
          <div class="timeline-year">{{ award.year }}</div>
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>{{ award.title }}</h3>
            <p v-if="award.description">{{ award.description }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import Hero from '@/components/Hero.vue'

/* ── STATS ─────────────────────────────────────────────── */
const stats = [
  { number: '18+', label: 'Años de experiencia' },
  { number: '7', label: 'Certificaciones activas' },
  { number: '10+', label: 'Eventos tecnológicos' },
  { number: '3', label: 'Premios nacionales' }
]

/* ── CERTIFICACIONES ─────────────────────────────────── */
const certifications = [
  { name: 'Aruba ACMP', image: '/img/certificaciones/aruba-acmp.png' },
  { name: 'Aruba ACSA', image: '/img/certificaciones/aruba-acsa.png' },
  { name: 'Aruba ACMA', image: '/img/certificaciones/Aruba-acma.png' },
  { name: 'Infoblox Core DDI', image: '/img/certificaciones/core-ddi.webp' },
  { name: 'Silver Peak SD-WAN', image: '/img/certificaciones/sd-wan.jpg' },
  { name: 'PanduIT', image: '/img/certificaciones/panduit-installer.gif' },
  { name: 'Fortinet NSE 7', image: '/img/certificaciones/fortinet-nse.png' }
]

/* ── VALORES ─────────────────────────────────────────── */
const values = [
  {
    title: 'Honestidad',
    description: 'Claros y objetivos con nuestros clientes, dando la mejor solución en costo/beneficio para el pleno cumplimiento de compromisos.'
  },
  {
    title: 'Calidad',
    description: 'Estilo de vida reflejado en cada proyecto, a través de la mejora continua en procesos humanos y de servicios.'
  },
  {
    title: 'Innovación',
    description: 'Actitud proactiva ante nuevas tecnologías y productos, aprendiendo y difundiendo conocimiento para mejorar el servicio al cliente.'
  },
  {
    title: 'Excelencia',
    description: 'Adquisición continua de conocimientos en TI para mejorar servicios y atención, manteniendo la plena confianza de nuestros clientes.'
  },
  {
    title: 'Unidad',
    description: 'Fomentamos la integración de equipos para alcanzar metas comunes y satisfacer las necesidades tecnológicas de nuestros clientes.'
  }
]

/* ── PREMIOS ─────────────────────────────────────────── */
const awards = [
  { year: '2006', title: 'The Best New Performance Partner', description: 'Premio otorgado por Fortinet al mejor branding de la marca en el sureste de México.' },
  { year: '2007', title: '1er AR-SITE SECURITY DAY', description: 'Hotel Crown Plaza, Tabasco.' },
  { year: '2007', title: '2do AR-SITE SECURITY DAY', description: 'Hotel Casa Real, Tabasco.' },
  { year: '2008', title: '3er Lugar · Best National Fortinet Deployment' },
  { year: '2009', title: 'The Best Fortinet National Deployment', description: 'Una de las mejores implementaciones Fortinet a nivel nacional.' },
  { year: '2009', title: '1er AR-SITE TECHNOLOGY DAY', description: 'Hotel Camino Real.' },
  { year: '2010', title: '2do AR-SITE TECHNOLOGY DAY', description: 'Hotel Hilton.' },
  { year: '2011', title: '3er AR-SITE TECHNOLOGY DAY', description: 'Hotel Crowne Plaza.' },
  { year: '2012', title: '4to AR-SITE TECHNOLOGY DAY', description: 'Hotel Crowne Plaza.' },
  { year: '2013', title: '5to AR-SITE TECHNOLOGY DAY', description: 'Hotel Crowne Plaza.' },
  { year: '2014', title: 'AR-SITE México', description: 'Hacienda de los Morales.' },
  { year: '2016', title: 'Premio Monarca', description: 'Otorgado por Hewlett Packard Enterprise al canal con mayor volumen de ventas de ARUBA.' }
]

/* ── INTERSECTION OBSERVER (Reveal on scroll) ─────── */
onMounted(() => {
  const els = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = e.target.dataset.delay || 0
          setTimeout(() => e.target.classList.add('visible'), Number(delay))
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  els.forEach(el => io.observe(el))
})
</script>

<style scoped>
/* ────────────────────────────────────────────────────────
   TOKENS
──────────────────────────────────────────────────────── */
:root {
  --accent: #65B3CA;
  --accent-dk: #4a96b0;
  --accent-lt: #e8f6fa;
  --text: #111;
  --muted: #555;
  --border: #e0e0e0;
  --radius-lg: 16px;
  --radius-md: 10px;
  --font: 'Arial', sans-serif;
}

/* ────────────────────────────────────────────────────────
   REVEAL ANIMATION
──────────────────────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ────────────────────────────────────────────────────────
   WRAPPER
──────────────────────────────────────────────────────── */
.about {
  background: #fff;
  color: var(--text);
  font-family: var(--font);
  padding: 80px 0;
}

/* ────────────────────────────────────────────────────────
   TYPOGRAPHY HELPERS
──────────────────────────────────────────────────────── */
.eyebrow {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
}

.section-title {
  font-size: 2.6rem;
  font-weight: 800;
  color: #65B3CA;
  line-height: 1.15;
  margin: 0 0 18px;
}

.section-title em {
  font-style: normal;
  color: #65B3CA;
}

.divider-line {
  width: 56px;
  height: 3px;
  background: var(--accent);
  border-radius: 99px;
  margin-bottom: 28px;
}

/* ────────────────────────────────────────────────────────
   DESCRIPCIÓN
──────────────────────────────────────────────────────── */
.description {
  max-width: 780px;
  margin: 0 auto 70px;
  text-align: center;
}

.description .divider-line {
  margin-left: auto;
  margin-right: auto;
}

.description p {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--muted);
}

/* ────────────────────────────────────────────────────────
   STATS ROW
──────────────────────────────────────────────────────── */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 80px;
}

.stat-item {
  background: #fff;
  padding: 36px 24px;
  text-align: center;
  transition: background 0.3s;
}

.stat-item:hover {
  background: var(--accent-lt);
}

.stat-number {
  display: block;
  font-size: 2.8rem;
  font-weight: 900;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 8px;
  animation: countUp 1.2s ease both;
}

@keyframes countUp {
  from {
    opacity: 0;
    transform: scale(0.75);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.stat-label {
  font-size: 0.85rem;
  color: var(--muted);
  font-weight: 600;
  letter-spacing: 0.04em;
}

/* ────────────────────────────────────────────────────────
   MISIÓN / VISIÓN
──────────────────────────────────────────────────────── */
.mv-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  margin-bottom: 90px;
}

.mv-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 40px 36px;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  background: #fff;
}

.mv-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), var(--accent-dk));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.mv-card:hover::before {
  transform: scaleX(1);
}

.mv-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(101, 179, 202, 0.18);
}

.mv-icon {
  width: 48px;
  height: 48px;
  background: var(--accent-lt);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--accent);
  transition: background 0.3s, transform 0.3s;
}

.mv-card:hover .mv-icon {
  background: var(--accent);
  color: #fff;
  transform: rotate(8deg) scale(1.05);
}

.mv-icon svg {
  width: 26px;
  height: 26px;
}

.mv-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--accent);
  margin: 0 0 14px;
}

.mv-card p {
  color: var(--muted);
  line-height: 1.75;
  font-size: 0.97rem;
  margin: 0;
}

/* ────────────────────────────────────────────────────────
   VALORES
──────────────────────────────────────────────────────── */
.values-section {
  text-align: center;
  margin-bottom: 90px;
}

.values-section .divider-line {
  margin: 0 auto 40px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 8px;
}

/* 5th card centered */
.value-card:nth-child(5) {
  grid-column: 2;
}

.value-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 30px 26px 26px;
  text-align: left;
  position: relative;
  overflow: hidden;
  cursor: default;
  opacity: 0;
  transform: translateY(24px);
  animation: cardReveal 0.55s ease calc(var(--i, 0) * 80ms) forwards;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s;
}

@keyframes cardReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.value-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 30px rgba(101, 179, 202, 0.15);
  border-color: var(--accent);
}

.value-num {
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--accent-lt);
  line-height: 1;
  user-select: none;
  transition: color 0.3s;
}

.value-card:hover .value-num {
  color: rgba(101, 179, 202, 0.2);
}

.value-card h3 {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--accent);
  margin: 0 0 10px;
}

.value-card p {
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.7;
  margin: 0 0 18px;
}

.value-bar {
  height: 3px;
  background: var(--border);
  border-radius: 99px;
  overflow: hidden;
}

.value-bar::after {
  content: '';
  display: block;
  height: 100%;
  width: 0;
  background: var(--accent);
  border-radius: 99px;
  transition: width 0.5s ease;
}

.value-card:hover .value-bar::after {
  width: 100%;
}

/* ────────────────────────────────────────────────────────
   CERTIFICACIONES
──────────────────────────────────────────────────────── */
.certifications {
  text-align: center;
  margin-bottom: 90px;
}

.certifications .divider-line {
  margin: 0 auto 40px;
}

.cert-track {
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1px;
  background: var(--border);
}

.cert-item {
  background: #fff;
  padding: 28px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  transition: background 0.3s;
  cursor: default;
}

.cert-item:hover {
  background: var(--accent-lt);
}

.cert-img-wrap {
  width: 90px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.35s ease;
  filter: grayscale(20%);
}

.cert-item:hover img {
  transform: scale(1.08);
  filter: grayscale(0%);
}

.cert-item p {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--muted);
  text-align: center;
  letter-spacing: 0.02em;
}

/* ────────────────────────────────────────────────────────
   PREMIOS – TIMELINE
──────────────────────────────────────────────────────── */
.awards {
  padding-bottom: 40px;
}

.awards .divider-line {
  margin-bottom: 50px;
}

.timeline {
  position: relative;
  padding-left: 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 110px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent) 0%, var(--border) 100%);
}

.timeline-item {
  display: grid;
  grid-template-columns: 110px 30px 1fr;
  align-items: flex-start;
  gap: 0 20px;
  margin-bottom: 36px;
  opacity: 0;
  transform: translateX(-16px);
  animation: slideIn 0.5s ease calc(var(--ti, 0) * 60ms) forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-year {
  text-align: right;
  font-size: 1rem;
  font-weight: 900;
  color: var(--accent);
  padding-top: 14px;
  letter-spacing: 0.02em;
}

.timeline-dot {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px var(--accent);
  align-self: center;
  z-index: 1;
  transition: transform 0.3s, box-shadow 0.3s;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.3);
  box-shadow: 0 0 0 4px rgba(101, 179, 202, 0.3);
}

.timeline-content {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 18px 22px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
}

.timeline-item:hover .timeline-content {
  transform: translateX(6px);
  box-shadow: 0 8px 24px rgba(101, 179, 202, 0.12);
  border-color: var(--accent);
}

.timeline-content h3 {
  margin: 0 0 6px;
  font-size: 1rem;
  font-weight: 700;
  color: #65B3CA;
}

.timeline-content p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.6;
}

/* ────────────────────────────────────────────────────────
   RESPONSIVE
──────────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .mv-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr 1fr;
  }

  .value-card:nth-child(5) {
    grid-column: auto;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 1.9rem;
  }

  .stats-row {
    grid-template-columns: 1fr 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .timeline::before {
    left: 80px;
  }

  .timeline-item {
    grid-template-columns: 80px 24px 1fr;
  }

  .timeline-year {
    font-size: 0.85rem;
    padding-top: 12px;
  }
}
</style>