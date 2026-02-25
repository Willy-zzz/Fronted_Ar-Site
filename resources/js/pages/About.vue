<template>
  <!-- HERO REUTILIZABLE -->
  <Hero title="Nosotros" subtitle="Integración de Tecnologías de Información y Telecomunicaciones"
    image="/img/mapRedesHero.jpg" />

  <section class="about">
    <!-- DESCRIPCIÓN CON AÑOS DE EXPERIENCIA Y SERVICIOS -->
    <div class="description fade-in">
      <h2 class="large-title">18 Años de Experiencia</h2>
      <p>
        Los alcances de nuestros productos y servicios incluyen redes de datos
        inalámbricas de banda ancha WAN y LAN, WiMAX, fibra óptica, voz IP,
        CCTV circuito cerrado de TV análogo y digital, virtualización,
        almacenamiento, switches de alto desempeño, seguridad, recuperación de
        desastres, aceleración WAN, servidores. Ofrecemos productos con
        tecnología de vanguardia que cuenten con la garantía y servicio con un
        valor agregado al mejor precio del mercado.
      </p>
    </div>

    <!-- MISIÓN Y VISIÓN -->
    <div class="grid-2 fade-in">
      <div class="card">
        <h2 class="large-title">Misión</h2>
        <p>
          Ser una empresa líder de integración de tecnologías de información y
          Telecomunicaciones en México, ofreciendo servicios de consultoría de
          alto nivel, distinguiéndonos por traducir la tecnología en
          rentabilidad para el negocio y que estas representen una oferta
          competitiva en precio y calidad, es decir una disminución de costos y
          un aumento en las ganancias del mismo.
        </p>
      </div>

      <div class="card">
        <h2 class="large-title">Visión</h2>
        <p>
          Ser reconocidos por la excelencia en la calidad de nuestros servicios,
          dando soluciones integrales en tecnologías de información, que se
          traduzcan en una oferta competitiva en precio y calidad para nuestros
          clientes.
        </p>
      </div>
    </div>

    <!-- VALORES (CON DESCRIPCIONES COMPLETAS) -->
    <div class="values-section fade-in">
      <div class="inner">
        <h2 class="large-title">Valores</h2>

        <div class="values-grid">
          <div v-for="value in values" :key="value.title" class="value-card">
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CERTIFICACIONES -->
    <div class="certifications fade-in">
      <h2 class="large-title">Certificaciones</h2>
      <div class="cert-grid">
        <div v-for="cert in certifications" :key="cert.name" class="cert-item">
          <img :src="cert.image" :alt="cert.name" />
          <p>{{ cert.name }}</p>
        </div>
      </div>
    </div>

    <!-- PREMIOS Y RECONOCIMIENTOS (SIN LÍNEA DE TIEMPO) -->
    <div class="awards fade-in">
      <h2 class="large-title">Premios y Reconocimientos</h2>

      <div class="awards-grid">
        <div v-for="(award, index) in awards" :key="index" class="award-card">
          <span class="award-year">{{ award.year }}</span>
          <h3>{{ award.title }}</h3>
          <p v-if="award.description">{{ award.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Hero from '@/components/Hero.vue'

// Certificaciones (logos o insignias)
const certifications = [
  {
    name: 'Aruba',
    image: '/img/certificaciones/aruba-acmp.png'
  },
  {
    name: 'Aruba',
    image: '/img/certificaciones/aruba-acsa.png'
  },
  {
    name: 'Aruba',
    image: '/img/certificaciones/Aruba-acma.png'
  },
  {
    name: 'Infoblox Core DDI',
    image: '/img/certificaciones/core-ddi.webp'
  },
  {
    name: 'Silver peak SD-WAN',
    image: '/img/certificaciones/sd-wan.jpg'

  },
  {
    name: 'PanduIT',
    image: '/img/certificaciones/panduit-installer.gif'

  },
  {
    name: 'Fortinet NSE 7',
    image: '/img/certificaciones/fortinet-nse.png'

  }
]

// Valores con sus descripciones completas
const values = [
  {
    title: 'Honestidad',
    description:
      'Buscamos ser siempre claros y objetivos con nuestros clientes, dando la mejor solución reflejada en costo/beneficio, para el pleno cumplimiento de los compromisos.'
  },
  {
    title: 'Calidad',
    description:
      'Es el estilo de vida que buscamos para nosotros en cada una de las cosas que emprendemos a través de la mejora continua en procesos humanos y de servicios.'
  },
  {
    title: 'Innovación',
    description:
      'Tenemos siempre una actitud proactiva ante nuevas tecnologías y nuevos productos, con la finalidad de aprender, difundir conocimientos y mejorar nuestra relación de servicio con el cliente.'
  },
  {
    title: 'Excelencia',
    description:
      'Estamos comprometidos a adquirir continuamente conocimientos en tecnologías de información, mejorar nuestros servicios y atención con lo cual mantenemos la plena confianza de nuestros clientes.'
  },
  {
    title: 'Unidad',
    description:
      'Trabajamos fomentando la integración de equipos con el propósito de alcanzar metas comunes y así de satisfacer las necesidades tecnológicas de nuestros clientes.'
  }
]

// Historial completo de premios, eventos y reconocimientos
const awards = [
  {
    year: '2006',
    title: 'The Best New Performance Partner',
    description:
      'Premio otorgado por Fortinet cuando ARSITE hizo el mejor branding de la marca en el sureste, a pesar de ser una empresa que llevaba poco tiempo formada. ARSITE hizo el mejor trabajo para dar a conocer la marca de Fortinet, al comprar equipos demos, cursos y eventos. Arsite hizo algo que ningún otro partner había logrado.'
  },
  {
    year: '2007',
    title: '1er AR-SITE SECURITY DAY',
    description: 'Tabasco - Hotel Crown Plaza'
  },
  {
    year: '2007',
    title: '2do AR-SITE SECURITY DAY',
    description: 'Tabasco - Hotel Casa Real'
  },
  {
    year: '2008',
    title: '3er Lugar como Best National Fortinet Deployment'
  },
  {
    year: '2009',
    title: 'The Best Fortinet National Deployment',
    description:
      'Otorgado porque ARSITE logró tener una de las mejores implementaciones a nivel nacional.'
  },
  {
    year: '2009',
    title: '1er AR-SITE TECHNOLOGY DAY',
    description: 'Hotel Camino Real'
  },
  {
    year: '2010',
    title: '2do AR-SITE TECHNOLOGY DAY',
    description: 'Hotel Hilton'
  },
  {
    year: '2011',
    title: '3er AR-SITE TECHNOLOGY DAY',
    description: 'Hotel Crowne Plaza'
  },
  {
    year: '2012',
    title: '4to AR-SITE TECHNOLOGY DAY',
    description: 'Hotel Crowne Plaza'
  },
  {
    year: '2013',
    title: '5to AR-SITE TECHNOLOGY DAY',
    description: 'Hotel Crowne Plaza'
  },
  {
    year: '2014',
    title: 'AR-SITE México',
    description: 'Hacienda de los Morales'
  },
  {
    year: '2016',
    title: 'Premio Monarca',
    description:
      'Premio otorgado por Hewlett Packard Enterprise por ser el canal con mayor volumen de ventas de ARUBA.'
  }
]
</script>

<style scoped>
.about {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px;
  box-sizing: border-box;
  background: #ffffff;
  color: #000;
  font-family: Arial, sans-serif;
}

/* TÍTULOS GRANDES */
.large-title {
  font-size: 2.8rem;
  font-weight: bold;
  color: #65B3CA;
  margin-bottom: 20px;
  line-height: 1.2;
}

/* ANIMACIONES */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* DESCRIPCIÓN */
.description {
  max-width: 900px;
  margin: auto;
  text-align: center;
  line-height: 1.8;
  margin-bottom: 60px;
}

/* MISIÓN Y VISIÓN */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.card {
  background: #ffffff;
  color: #000000;
  padding: 30px;
  border-radius: 12px;
  border-top: 4px solid #65B3CA;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(101, 179, 202, 0.2);
}

.card h2.large-title {
  font-size: 2.5rem;
  margin-top: 0;
}

/* VALORES */
.values-section {
  background: #ffffff;
  color: #000000;
  padding: 60px 0;
  margin-bottom: 80px;
}

.values-section .inner {
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
  text-align: center;
}

.values-section h2.large-title {
  margin-bottom: 40px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* DOS COLUMNAS */
  gap: 25px;
  margin-top: 20px;
}

.value-card {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #65B3CA;
  transition: all 0.3s ease;
  text-align: left;
  animation: fadeInUp 0.6s ease backwards;
}

.value-card:nth-child(1) {
  animation-delay: 0.1s;
}

.value-card:nth-child(2) {
  animation-delay: 0.2s;
}

.value-card:nth-child(3) {
  animation-delay: 0.3s;
}

.value-card:nth-child(4) {
  animation-delay: 0.4s;
}

.value-card:nth-child(5) {
  animation-delay: 0.5s;
}

.value-card h3 {
  color: #65B3CA;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.6rem;
}

.value-card p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
}

.value-card:hover {
  background: #65B3CA;
  color: #ffffff;
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(101, 179, 202, 0.3);
}

.value-card:hover h3 {
  color: #ffffff;
}

/* CERTIFICACIONES */
.certifications {
  text-align: center;
  margin-bottom: 80px;
}

.certifications h2.large-title {
  margin-bottom: 40px;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  align-items: center;
  justify-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.cert-item {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eaeaea;
  width: 100%;
  max-width: 180px;
  text-align: center;
}

.cert-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(101, 179, 202, 0.2);
  border-color: #65B3CA;
}

.cert-item img {
  width: 100%;
  height: auto;
  max-height: 80px;
  object-fit: contain;
  margin-bottom: 10px;
}

.cert-item p {
  margin: 0;
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
}

/* PREMIOS (GRID, SIN LÍNEA DE TIEMPO) */
.awards {
  padding: 20px 20px 80px;
  text-align: center;
}

.awards h2.large-title {
  margin-bottom: 40px;
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.award-card {
  background: #ffffff;
  border: 1px solid #65B3CA;
  border-radius: 12px;
  padding: 25px;
  text-align: left;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease backwards;
}

.award-card:nth-child(1) {
  animation-delay: 0.1s;
}

.award-card:nth-child(2) {
  animation-delay: 0.15s;
}

.award-card:nth-child(3) {
  animation-delay: 0.2s;
}

.award-card:nth-child(4) {
  animation-delay: 0.25s;
}

.award-card:nth-child(5) {
  animation-delay: 0.3s;
}

.award-card:nth-child(6) {
  animation-delay: 0.35s;
}

.award-card:nth-child(7) {
  animation-delay: 0.4s;
}

.award-card:nth-child(8) {
  animation-delay: 0.45s;
}

.award-card:nth-child(9) {
  animation-delay: 0.5s;
}

.award-card:nth-child(10) {
  animation-delay: 0.55s;
}

.award-card:nth-child(11) {
  animation-delay: 0.6s;
}

.award-card:nth-child(12) {
  animation-delay: 0.65s;
}

.award-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(101, 179, 202, 0.2);
  border-color: #65B3CA;
  background: #f9f9f9;
}

.award-year {
  display: inline-block;
  font-weight: bold;
  color: #65B3CA;
  font-size: 1.4rem;
  margin-bottom: 10px;
  border-bottom: 2px solid #65B3CA;
  padding-bottom: 3px;
}

.award-card h3 {
  font-size: 1.3rem;
  margin: 10px 0;
  color: #000;
}

.award-card p {
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
}

/* RESPONSIVE: en móviles los valores pasan a 1 columna */
@media (max-width: 600px) {
  .values-grid {
    grid-template-columns: 1fr;
  }

  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  .cert-item {
    padding: 15px;
  }
  .cert-item img {
    max-height: 60px;
  }
}
</style>