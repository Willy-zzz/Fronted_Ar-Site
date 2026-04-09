<template>
  <div class="services-page">
    <!-- HERO FULL WIDTH -->
    <Hero title="Servicios" 
      subtitle="Soluciones integrales en tecnología, seguridad y conectividad"/>

    <section class="services-content container">
      <h2 class="section-title">Nuestros Servicios</h2>
      <p class="section-subtitle">
        Acompañamos tu negocio en cada etapa con soluciones a medida
      </p>

      <!-- Beneficios -->
      <div class="benefits-section">
        <h3 class="benefits-title">
          Beneficios que nuestros clientes obtienen:
        </h3>
        <div class="benefits-grid">
          <div v-for="beneficio in beneficios" :key="beneficio.id" class="benefit-item">
            <span class="benefit-number">{{ beneficio.id }}</span>
            <p class="benefit-text">{{ beneficio.texto }}</p>
          </div>
        </div>
      </div>

      <!-- SERVICIOS -->
      <div class="services-sections">
        <section v-for="(service, index) in services" :key="index" class="service-section"
          :class="{ reverse: index % 2 !== 0 }">
          <div class="service-image-wrapper">
            <img :src="service.image" :alt="service.title" />
          </div>

          <div class="service-content">
            <h3>{{ service.title }}</h3>
            <p style="white-space: pre-line;">
              {{ service.description }}
            </p>

            <!-- <router-link :to="service.link" class="service-button">
              Más información →
            </router-link> -->
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'

const services = [
  {
    title: 'Auditoría',
    description: `Parte del servicio que Arsite Integradores ofrece es identificar las principales exigencias, necesidades, debilidades y fortalezas tecnológicas de su empresa. Para  establecer cuales son la tecnologías apropiadas para satisfacer de manera óptima esas necesidades.
    
    Con este servicio se podrá averiguar la forma en que se optimizaran los procesos y procedimientos internos de la empresa a través del uso o buen uso de tecnologías adecuadas.`,
    image: '/img/servicio/auditoria.jpg',
    link: '/servicios/auditoria'
  },
  {
    title: 'Capacitación',
    description: `Como parte del desarrollo de habilidades Arsite Integradores a través de su area de capacitación, diseñamos cursos que le permitan hacer uso eficiente de las tecnologías adquiridas y así obtener el mejor beneficio de su inversión tecnológica.`,
    image: '/img/servicio/capacitacion.jpg',
    link: '/servicios/capacitacion'
  },
  {
    title: 'Consultoría',
    description: `Arsite integradores está comprometido en apoyar la empresa del cliente a través del uso de Tecnologías de Información, en este servicio se provee al cliente herramientas para la alineación de las soluciones tecnológicas con sus objetivos, aportando beneficios tangibles a nuestros clientes mediante un servicio especializado.

    Arsite Integradores le brinda la asesoría necesaria para contestar diversas preguntas que comúnmente se hace en su empresa:

    ¿Qué tecnologías debo usar?
    ¿Cuál es la más adecuada para mi empresa?
    ¿Cuál puedo pagar?
    ¿Cuál es el objetivo de implementar esta tecnología?
    ¿Me servirá esta tecnología en el futuro?`,
    image: '/img/servicio/consultoria.jpg',
    link: '/servicios/consultoria'
  },
  {
    title: 'Proyectos',
    description: `Este servicio ofrece el diseño mediante la satisfacción de una necesidad tecnológica,  tiene como fin solucionar la situación problemática particular del área de tecnología, a través del diseño, desarrollo, construcción, evaluación e impacto (económico y ambiente social) del producto o proceso en su empresa.

    Así mismo el servicio de elaboración de proyectos para programación o presupuestos en la generación del proyecto tecnológico, a instituciones o dependencias que lo requieran.`,
    image: '/img/servicio/proyectos.jpg',
    link: '/servicios/proyectos'
  }
]

const beneficios = [
  { id: '01', texto: 'Alineación de la tecnología con los objetivos del negocio' },
  { id: '02', texto: 'Apoyo importante para la toma de decisiones' },
  { id: '03', texto: 'Aumento sustancial en la calidad en los principales procesos de la empresa' },
  { id: '04', texto: 'Incremento en rentabilidad' },
  { id: '05', texto: 'Mejora de los canales de comunicación con clientes y proveedores' },
  { id: '06', texto: 'Reducción de los ciclos de desarrollo de sus productos y servicios' },
  { id: '07', texto: 'Reducción de tiempos y costos' },
  { id: '08', texto: 'Respuesta rápida a las necesidades de los clientes' },
  { id: '09', texto: 'Ventajas competitivas respecto a la competencia' }
]
</script>

<style scoped>
.services-page {
  min-height: 100vh;
}

.services-content {
  padding: 80px 0;
  background: #ffffff;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #65B3CA;
  text-align: center;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  text-align: center;
  color: #4a5568;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

/* Beneficios */
.benefits-section {
  margin-bottom: 60px;
  background: #f8fafc;
  padding: 40px;
  border-radius: 20px;
}

.benefits-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 2rem;
  text-align: center;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.benefit-number {
  font-size: 2rem;
  font-weight: 700;
  color: #65B3CA;
  min-width: 50px;
  text-align: right;
}

/* Servicios */
.services-sections {
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 3rem;
}

.service-section {
  display: flex;
  align-items: center;
  gap: 60px;
}

.service-section.reverse {
  flex-direction: row-reverse;
}

.service-image-wrapper {
  flex: 1;
}

.service-image-wrapper img {
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.service-content {
  flex: 1;
}

.service-content h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #65B3CA;
}

.service-content p {
  font-size: 1.05rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

/* .service-button {
  display: inline-block;
  padding: 10px 24px;
  background: #65B3CA;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;
}

.service-button:hover {
  background: #3b82f6;
  transform: translateY(-3px);
} */

/* Responsive */
@media (max-width: 992px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .service-section,
  .service-section.reverse {
    flex-direction: column;
  }

  .service-section {
    gap: 30px;
  }
}
</style>