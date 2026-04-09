<template>
  <div class="partners-page">
    <!-- HERO FULL WIDTH -->
    <Hero title="Partners" subtitle="Nuestros aliados estratégicos" />

    <!-- CONTENIDO LIMITADO POR EL CONTENEDOR GLOBAL -->
    <section class="partners-content container">
      <h2 class="section-title">Aliados que confían en nosotros</h2>
      <p class="section-subtitle">
        Trabajamos con los líderes de la industria para ofrecerte las mejores soluciones.
      </p>

      <div class="partners-grid">
        <div v-for="partner in partners" :key="partner.id" class="partner-card" @click="openModal(partner)">
          <div class="partner-logo">
            <img :src="partner.logo" :alt="partner.name" />
            <!-- Overlay que aparece al hover -->
            <div class="partner-overlay">
              <h3>{{ partner.name }}</h3>
              <p>{{ partner.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MODAL -->
    <transition name="modal-fade">
      <div v-if="modalVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="modal-close" @click="closeModal">&times;</button>
          <div class="modal-body">
            <div class="modal-logo">
              <img :src="selectedPartner?.logo" :alt="selectedPartner?.name" />
            </div>
            <h2>{{ selectedPartner?.name }}</h2>
            <p>{{ selectedPartner?.description }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Hero from '@/components/Hero.vue'

const partners = [
  { id: 1, name: 'Epygi', logo: '/img/partners/epygi.png', description: 'Soluciones de telefonía IP, sistemas PBX y comunicaciones unificadas para entornos empresariales.' },
  { id: 2, name: 'Aruba', logo: '/img/partners/aruba.png', description: 'Soluciones de redes empresariales que incluyen WiFi, switching y gestión de infraestructura de red.' },
  { id: 3, name: 'Cisco', logo: '/img/partners/cisco.png', description: 'Tecnología líder en networking, routing, switching, colaboración y soluciones avanzadas de ciberseguridad.' },
  { id: 4, name: 'Dell Technologies', logo: '/img/partners/dell.png', description: 'Servidores, almacenamiento y soluciones de infraestructura tecnológica para centros de datos empresariales.' },
  { id: 5, name: 'Gdata', logo: '/img/partners/gdata.png', description: 'Soluciones de ciberseguridad, antivirus empresarial y protección avanzada para endpoints.' },
  { id: 6, name: 'Brocade', logo: '/img/partners/brocade.jpg', description: 'Soluciones de networking y almacenamiento SAN orientadas a centros de datos de alto rendimiento.' },
  { id: 7, name: 'Infoblox', logo: '/img/partners/infoblox.png', description: 'Plataformas para la gestión de DNS, DHCP, direcciones IP (DDI) y seguridad de infraestructura de red.' },
  { id: 8, name: 'Force10', logo: '/img/partners/force10.jpg', description: 'Switching de alto rendimiento y soluciones de redes escalables para centros de datos.' },
  { id: 9, name: 'Fortinet', logo: '/img/partners/fortinet.jpg', description: 'Soluciones integrales de ciberseguridad, incluyendo firewalls, protección de redes y seguridad empresarial.' },
  { id: 10, name: 'VeeAM', logo: '/img/partners/veeam.png', description: 'Soluciones de respaldo, recuperación y protección de datos para entornos virtuales, físicos y cloud.' },
  { id: 11, name: 'Genius Vision Digital', logo: '/img/partners/gvd.png', description: 'Software profesional para videovigilancia, monitoreo y administración de cámaras IP.' },
  { id: 12, name: 'Rajant', logo: '/img/partners/rajant.png', description: 'Redes inalámbricas malladas (mesh) diseñadas para comunicaciones industriales y entornos de misión crítica.' },
  { id: 13, name: 'Panduit', logo: '/img/partners/panduit.png', description: 'Infraestructura de red, cableado estructurado y soluciones para centros de datos.' },
  { id: 14, name: 'Poly', logo: '/img/partners/poly.png', description: 'Soluciones de comunicación y colaboración empresarial con audio, video y sistemas de conferencias.' },
  { id: 15, name: 'Radwin', logo: '/img/partners/radwin.jpg', description: 'Soluciones inalámbricas punto a punto y punto multipunto para conectividad de banda ancha.' },
  { id: 16, name: 'Redline Communications', logo: '/img/partners/redline.png', description: 'Redes inalámbricas industriales y soluciones de comunicación para entornos críticos.' },
  { id: 17, name: 'Riverbed', logo: '/img/partners/riverbed.png', description: 'Optimización de redes, aceleración de aplicaciones y visibilidad del rendimiento de infraestructura TI.' },
  { id: 18, name: 'Snom The SIP Experts', logo: '/img/partners/snom.png', description: 'Teléfonos IP profesionales y soluciones de comunicación basadas en el protocolo SIP.' },
  { id: 19, name: 'VMware', logo: '/img/partners/vmware.png', description: 'Virtualización, infraestructura cloud, redes definidas por software y plataformas para centros de datos.' },
  { id: 20, name: 'Hewlett Packard Enterprise', logo: '/img/partners/hpe.png', description: 'Infraestructura tecnológica empresarial, incluyendo servidores, almacenamiento y soluciones híbridas.' }
]

// Modal state
const modalVisible = ref(false)
const selectedPartner = ref(null)

const openModal = (partner) => {
  selectedPartner.value = partner
  modalVisible.value = true
  document.body.style.overflow = 'hidden' // Prevenir scroll
}

const closeModal = () => {
  modalVisible.value = false
  selectedPartner.value = null
  document.body.style.overflow = '' // Restaurar scroll
}
</script>

<style scoped>
.partners-page {
  min-height: 100vh;
}

.partners-content {
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

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.partner-card {
  background: transparent;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  text-align: center;
  opacity: 0;
  transform: scale(0.9) translateY(30px);
  animation: zoomFadeIn 0.6s ease forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.partner-card:hover {
  transform: translateY(-5px) scale(1.02);
}

.partner-logo {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #eaeaea;
  overflow: hidden;
  transition: all 0.3s ease;
}

.partner-logo img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.partner-card:hover .partner-logo {
  box-shadow: 0 15px 30px rgba(101, 179, 202, 0.2);
  border-color: #65B3CA;
}

.partner-card:hover .partner-logo img {
  transform: scale(1.1);
}

/* Overlay que aparece al hover */
.partner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
  border-radius: 16px;
}

.partner-card:hover .partner-overlay {
  opacity: 1;
}

.partner-overlay h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #65B3CA;
}

.partner-overlay p {
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  color: #f0f0f0;
}

/* Animación de entrada */
@keyframes zoomFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(30px);
  }

  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Retrasos escalonados para 20 elementos */
.partner-card:nth-child(1) {
  animation-delay: 0.05s;
}

.partner-card:nth-child(2) {
  animation-delay: 0.1s;
}

.partner-card:nth-child(3) {
  animation-delay: 0.15s;
}

.partner-card:nth-child(4) {
  animation-delay: 0.2s;
}

.partner-card:nth-child(5) {
  animation-delay: 0.25s;
}

.partner-card:nth-child(6) {
  animation-delay: 0.3s;
}

.partner-card:nth-child(7) {
  animation-delay: 0.35s;
}

.partner-card:nth-child(8) {
  animation-delay: 0.4s;
}

.partner-card:nth-child(9) {
  animation-delay: 0.45s;
}

.partner-card:nth-child(10) {
  animation-delay: 0.5s;
}

.partner-card:nth-child(11) {
  animation-delay: 0.55s;
}

.partner-card:nth-child(12) {
  animation-delay: 0.6s;
}

.partner-card:nth-child(13) {
  animation-delay: 0.65s;
}

.partner-card:nth-child(14) {
  animation-delay: 0.7s;
}

.partner-card:nth-child(15) {
  animation-delay: 0.75s;
}

.partner-card:nth-child(16) {
  animation-delay: 0.8s;
}

.partner-card:nth-child(17) {
  animation-delay: 0.85s;
}

.partner-card:nth-child(18) {
  animation-delay: 0.9s;
}

.partner-card:nth-child(19) {
  animation-delay: 0.95s;
}

.partner-card:nth-child(20) {
  animation-delay: 1s;
}

/* MODAL */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: modalSlideUp 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  line-height: 1;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
  z-index: 10;
}

.modal-close:hover {
  background: #f0f0f0;
  color: #000;
  transform: scale(1.1);
}

.modal-body {
  padding: 2.5rem 2rem;
  text-align: center;
}

.modal-logo {
  width: 180px;
  height: 180px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  border-radius: 50%;
  padding: 1.5rem;
  border: 1px solid #eaeaea;
}

.modal-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.modal-body h2 {
  font-size: 2rem;
  color: #1a202c;
  margin-bottom: 1rem;
}

.modal-body p {
  color: #4a5568;
  line-height: 1.8;
  font-size: 1.1rem;
}

/* Transición del modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@keyframes modalSlideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .partners-content {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .modal-logo {
    width: 140px;
    height: 140px;
  }

  .modal-body h2 {
    font-size: 1.6rem;
  }

  .modal-body p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
}
</style>
