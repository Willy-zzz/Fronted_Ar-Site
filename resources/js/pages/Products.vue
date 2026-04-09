<template>
  <div class="products-page">
    <Hero
      title="Productos"
      subtitle="Equipos y soluciones para redes, seguridad y conectividad"
      
    />
    <!-- image="/img/mapRedesHero.jpg"  por si quieren agregar otra ruta  -->

    <section class="products-content container">
      <h2 class="section-title">Nuestras categorías</h2>
      <p class="section-subtitle">Explora nuestras soluciones tecnológicas</p>

      <div class="categories-grid">
        <div
          v-for="cat in categories"
          :key="cat.slug"
          class="category-card fade-in"
          @click="goToCategory(cat.slug)"
        >
          <div class="category-image">
            <img :src="cat.image" :alt="cat.name" />
          </div>
          <div class="category-info">
            <h3>{{ cat.name }}</h3>
            <p>{{ cat.description }}</p>
            <span class="category-link">Ver productos →</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Hero from '@/components/Hero.vue'

const router = useRouter()

const categories = [
  {
    slug: 'seguridad',
    name: 'Seguridad',
    description: 'Firewalls, UTM, protección perimetral y ciberseguridad empresarial.',
    image: '/img/categoriasProducto/forticlient.png'
  },
  {
    slug: 'movilidad',
    name: 'Movilidad',
    description: 'Soluciones WiFi, redes inalámbricas y gestión de dispositivos móviles.',
    image: '/img/categoriasProducto/movilidad.png'
  },
  {
    slug: 'switches-routers',
    name: 'Switches y Routers',
    description: 'Equipos de capa 2/3, routing avanzado y conmutación de alto rendimiento.',
    image: '/img/categoriasProducto/switches.png'
  },
  {
    slug: 'aceleracion-wan',
    name: 'Aceleración WAN',
    description: 'Optimización de enlaces, compresión y aceleración de aplicaciones.',
    image: '/img/categoriasProducto/wan.avif'
  },
  {
    slug: 'almacenamiento',
    name: 'Almacenamiento y recuperación de datos',
    description: 'NAS, SAN, backup y soluciones de continuidad de negocio.',
    image: '/img/categoriasProducto/almacenamiento.avif'
  },
  {
    slug: 'radio-enlaces',
    name: 'Radio enlaces',
    description: 'Enlaces punto a punto, punto multipunto y redes inalámbricas de largo alcance.',
    image: '/img/categoriasProducto/radio.webp'
  },
  {
    slug: 'telefonia-ip',
    name: 'Telefonía IP',
    description: 'Centrales IP, telefonía unificada y comunicaciones empresariales.',
    image: '/img/categoriasProducto/telefonia.png'
  },
  {
    slug: 'servidores',
    name: 'Servidores',
    description: 'Servidores físicos, blade, rack y soluciones de virtualización.',
    image: '/img/categoriasProducto/servidores.png'
  },
  {
    slug: 'cableado',
    name: 'Cable estructurado',
    description: 'Sistemas de cableado estructurado, fibra óptica, categoría 6/7.',
    image: '/img/categoriasProducto/cableado.png'
  },
  {
    slug: 'virtualizacion',
    name: 'Virtualización',
    description: 'Hypervisores, infraestructura definida por software y nube privada.',
    image: '/img/categoriasProducto/virtualizacion.svg'
  }
]

const goToCategory = (slug) => {
  router.push(`/productos/${slug}`)
}
</script>

<style scoped>
.products-page {
  min-height: 100vh;
}

.products-content {
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

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.category-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eaeaea;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(101, 179, 202, 0.15);
  border-color: #65B3CA;
}

.category-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f5f5f5;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.category-card:hover .category-image img {
  transform: scale(1.05);
}

.category-info {
  padding: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.category-info h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.category-info p {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  flex: 1;
}

.category-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #65B3CA;
  font-weight: 600;
  font-size: 0.9rem;
  transition: gap 0.3s;
  margin-top: auto;
}

.category-card:hover .category-link {
  gap: 10px;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.category-card:nth-child(1) { animation-delay: 0.05s; }
.category-card:nth-child(2) { animation-delay: 0.1s; }
.category-card:nth-child(3) { animation-delay: 0.15s; }
.category-card:nth-child(4) { animation-delay: 0.2s; }
.category-card:nth-child(5) { animation-delay: 0.25s; }
.category-card:nth-child(6) { animation-delay: 0.3s; }
.category-card:nth-child(7) { animation-delay: 0.35s; }
.category-card:nth-child(8) { animation-delay: 0.4s; }
.category-card:nth-child(9) { animation-delay: 0.45s; }
.category-card:nth-child(10) { animation-delay: 0.5s; }

@media (max-width: 768px) {
  .products-content {
    padding: 60px 0;
  }
  .section-title {
    font-size: 2rem;
  }
  .section-subtitle {
    font-size: 1rem;
  }
  .category-image {
    height: 180px;
  }
}
</style>