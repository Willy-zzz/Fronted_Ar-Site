<template>
  <div class="clients-page">
    <!-- HERO FULL WIDTH -->
    <Hero title="Clientes" subtitle="Empresas que confían en nosotros" />

    <!-- CONTENIDO LIMITADO POR EL CONTENEDOR GLOBAL -->
    <section class="clients-content container">
      <h2 class="section-title">Nuestros clientes</h2>
      <p class="section-subtitle">
        A lo largo de los años hemos colaborado con empresas de diversos sectores.
        Aquí algunos de ellos:
      </p>

      <div class="clients-grid">
        <div v-for="client in clients" :key="client.id" class="client-card fade-in">
          <div class="client-logo">
            <img :src="client.logo" :alt="client.name" />
          </div>
          <h3 class="client-name">{{ client.name }}</h3>
          <p v-if="client.industry" class="client-industry">{{ client.industry }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'

const clients = [
  { id: 1, name: 'AutoSur', logo: '/img/clientes/autosur.jpg', industry: 'Automotriz' },
  { id: 2, name: 'Gamesa', logo: '/img/clientes/gamesa.png', industry: 'Alimentos' },
  { id: 3, name: 'Genomma Lab', logo: '/img/clientes/genomalab.jpg', industry: 'Farmacéutica / Consumo' },
  { id: 4, name: 'ITVH', logo: '/img/clientes/itvh.png', industry: 'Educación' },
  { id: 5, name: 'ISSET', logo: '/img/clientes/isset.png', industry: 'Salud / Gobierno' },
  { id: 6, name: 'Grupo Modelo', logo: '/img/clientes/grupomodelo.png', industry: 'Bebidas (Cervecera)' },
  { id: 7, name: 'Net Brains', logo: '/img/clientes/netbrains.png', industry: 'Tecnología / TI' },
  { id: 8, name: 'Pemex', logo: '/img/clientes/pemex.png', industry: 'Energía / Petróleo' },
  { id: 9, name: 'SAGARPA', logo: '/img/clientes/sagarpa.png', industry: 'Gobierno / Agricultura' },
  { id: 10, name: 'Secretaria de Salud', logo: '/img/clientes/ss.jpg', industry: 'Salud / Gobierno' },
  { id: 11, name: 'Secretaria de Seguridad Publica', logo: '/img/clientes/ssp.png', industry: 'Seguridad / Gobierno' },
  { id: 12, name: 'UNAM', logo: '/img/clientes/unam.png', industry: 'Educación' },
  { id: 13, name: 'Universidad Veracruzana', logo: '/img/clientes/uv.png', industry: 'Educación' },
  { id: 14, name: 'Corsa', logo: '/img/clientes/corsa.png', industry: 'Construcción' },
  { id: 15, name: 'FOVISSSTE', logo: '/img/clientes/fovissste.png', industry: 'Vivienda / Gobierno' },

]
</script>

<style scoped>
.clients-page {
  min-height: 100vh;
}

.clients-content {
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

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.client-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

.client-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(101, 179, 202, 0.1);
  border-color: #65B3CA;
}

.client-logo {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.4s ease;
}

.client-card:hover .client-logo {
  transform: scale(1.05);
}

.client-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(0.2);
  transition: filter 0.3s ease, transform 0.4s ease;
}

.client-card:hover .client-logo img {
  filter: grayscale(0);
}

.client-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.25rem;
}

.client-industry {
  font-size: 0.85rem;
  color: #718096;
  margin: 0;
}

/* Animación de entrada */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Retrasos escalonados para 20 elementos */
.client-card:nth-child(1) {
  animation-delay: 0.05s;
}

.client-card:nth-child(2) {
  animation-delay: 0.1s;
}

.client-card:nth-child(3) {
  animation-delay: 0.15s;
}

.client-card:nth-child(4) {
  animation-delay: 0.2s;
}

.client-card:nth-child(5) {
  animation-delay: 0.25s;
}

.client-card:nth-child(6) {
  animation-delay: 0.3s;
}

.client-card:nth-child(7) {
  animation-delay: 0.35s;
}

.client-card:nth-child(8) {
  animation-delay: 0.4s;
}

.client-card:nth-child(9) {
  animation-delay: 0.45s;
}

.client-card:nth-child(10) {
  animation-delay: 0.5s;
}

.client-card:nth-child(11) {
  animation-delay: 0.55s;
}

.client-card:nth-child(12) {
  animation-delay: 0.6s;
}

.client-card:nth-child(13) {
  animation-delay: 0.65s;
}

.client-card:nth-child(14) {
  animation-delay: 0.7s;
}

.client-card:nth-child(15) {
  animation-delay: 0.75s;
}

.client-card:nth-child(16) {
  animation-delay: 0.8s;
}

.client-card:nth-child(17) {
  animation-delay: 0.85s;
}

.client-card:nth-child(18) {
  animation-delay: 0.9s;
}

.client-card:nth-child(19) {
  animation-delay: 0.95s;
}

.client-card:nth-child(20) {
  animation-delay: 1s;
}

/* Responsive */
@media (max-width: 768px) {
  .clients-content {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .client-logo {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 480px) {
  .clients-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .client-card {
    padding: 1rem 0.5rem;
  }

  .client-name {
    font-size: 0.9rem;
  }

  .client-industry {
    font-size: 0.75rem;
  }
}
</style>