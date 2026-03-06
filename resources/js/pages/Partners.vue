<template>
  <div class="partners-page">
    <!-- HERO FULL WIDTH -->
    <Hero title="Partners" subtitle="Nuestros aliados estratégicos" image="/img/mapRedesHero.jpg" />

    <!-- CONTENIDO LIMITADO POR EL CONTENEDOR GLOBAL -->
    <section class="partners-content container">
      <h2 class="section-title">Aliados que confían en nosotros</h2>
      <p class="section-subtitle">
        Trabajamos con los líderes de la industria para ofrecerte las mejores soluciones.
      </p>

      <div class="partners-grid">
        <div v-for="partner in partners" :key="partner.id" class="partner-card">
          <div class="partner-logo">
            <img :src="partner.logo" :alt="partner.name" />
          </div>
          <div class="partner-info">
            <h3>{{ partner.name }}</h3>
            <p v-if="partner.description">{{ partner.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'

const partners = [
  { id: 1, name: 'Fortinet', logo: '/img/partners/fortinet.jpg', description: 'Soluciones de seguridad de redes y ciberseguridad.' },
  { id: 2, name: 'Hewlett Packard Enterprise', logo: '/img/partners/hpe.png', description: 'Infraestructura tecnológica, servidores y almacenamiento.' },
  { id: 3, name: 'Aruba', logo: '/img/partners/aruba.png', description: 'Redes inalámbricas y soluciones de conectividad.' },
  { id: 4, name: 'VMware', logo: '/img/partners/vmware.png', description: 'Virtualización y cloud computing.' },
  { id: 5, name: 'Cisco', logo: '/img/partners/cisco.png', description: 'Equipos de red, routing, switching y seguridad.' },
  { id: 6, name: 'Microsoft', logo: '/img/partners/microsoft.png', description: 'Soluciones en la nube y productividad empresarial.' },
  { id: 7, name: 'Panduit', logo: '/img/partners/panduit.png', description: 'Infraestructura de red y cableado estructurado.' },
  { id: 8, name: 'Silver Peak', logo: '/img/partners/silverpeak.png', description: 'SD-WAN y optimización de redes WAN.' },
  { id: 9, name: 'Infoblox', logo: '/img/partners/infoblox.png', description: 'Gestión de DNS, DHCP y direcciones IP.' },
  { id: 10, name: 'Dell Technologies', logo: '/img/partners/dell.png', description: 'Servidores, almacenamiento y soluciones de TI.' },
  { id: 11, name: 'Lenovo', logo: '/img/partners/lenovo.png', description: 'Infraestructura y equipamiento empresarial.' },
  { id: 12, name: 'Samsung', logo: '/img/partners/samsung.png', description: 'Dispositivos móviles y pantallas profesionales.' },
  { id: 13, name: 'SonicWall', logo: '/img/partners/sonicwall.png', description: 'Seguridad perimetral y firewalls.' },
  { id: 14, name: 'Sophos', logo: '/img/partners/sophos.png', description: 'Protección de endpoints y redes.' },
  { id: 15, name: 'Check Point', logo: '/img/partners/checkpoint.png', description: 'Soluciones avanzadas de ciberseguridad.' },
  { id: 16, name: 'Palo Alto Networks', logo: '/img/partners/paloalto.png', description: 'Firewalls de nueva generación.' },
  { id: 17, name: 'Juniper Networks', logo: '/img/partners/juniper.png', description: 'Redes y seguridad para proveedores.' },
  { id: 18, name: 'Nutanix', logo: '/img/partners/nutanix.png', description: 'Hiperconvergencia y cloud híbrida.' },
  { id: 19, name: 'Red Hat', logo: '/img/partners/redhat.png', description: 'Soluciones open source y Linux empresarial.' },
  { id: 20, name: 'Oracle', logo: '/img/partners/oracle.png', description: 'Bases de datos y aplicaciones empresariales.' }
]
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.partner-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  text-align: center;
  opacity: 0;
  transform: scale(0.95) translateY(20px);
  animation: zoomFadeIn 0.6s ease forwards;
}

.partner-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 30px rgba(101, 179, 202, 0.2);
  border-color: #65B3CA;
}

.partner-logo {
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.4s ease;
}

.partner-card:hover .partner-logo {
  transform: rotate(3deg) scale(1.05);
}

.partner-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.partner-card:hover .partner-logo img {
  transform: scale(1.1);
}

.partner-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

.partner-card:hover .partner-info h3 {
  color: #65B3CA;
}

.partner-info p {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}

/* Animación de entrada: zoom + fade */
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

  .partner-logo {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 480px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
}
</style>