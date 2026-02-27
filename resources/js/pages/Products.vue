<template>
  <div class="products-page">
    <!-- HERO FULL WIDTH -->
    <Hero
      title="Productos"
      subtitle="Equipos y soluciones para redes, seguridad y conectividad"
      image="/img/hero-productos.png"
    />

    <!-- CONTENIDO LIMITADO POR EL CONTENEDOR GLOBAL -->
    <section class="products-content container">
      <h2 class="section-title">Nuestros productos</h2>
      <p class="section-subtitle">Tecnología de vanguardia para tu negocio</p>

      <div class="products-grid">
        <div
          v-for="product in products"
          :key="product.id"
          class="product-card fade-in"
        >
          <div class="product-image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <!-- Botón "Más información" que llevará a la página de detalle -->
            <router-link :to="`/producto/${product.id}`" class="product-button">
              Más información <span class="button-arrow">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'

const products = [
  {
    id: 1,
    name: 'Seguridad',
    description: 'Alto rendimiento para cargas críticas, con redundancia y escalabilidad.',
    image: '/img/fortigate.jpeg'
  },
  {
    id: 2,
    name: 'Firewall de Nueva Generación',
    description: 'Protección perimetral avanzada con inspección profunda de paquetes.',
    image: '/img/product2.jpg'
  },
  {
    id: 3,
    name: 'Cámaras IP',
    description: 'Vigilancia en alta definición con análisis de video inteligente.',
    image: '/img/product3.jpg'
  },
  {
    id: 4,
    name: 'Switch Gestionable',
    description: 'Conmutadores de alto desempeño para redes empresariales.',
    image: '/img/product4.jpg'
  },
  {
    id: 5,
    name: 'Punto de Acceso Wi-Fi',
    description: 'Conectividad inalámbrica de alta densidad con gestión centralizada.',
    image: '/img/product5.jpg'
  },
  {
    id: 6,
    name: 'Dispositivo de Almacenamiento NAS',
    description: 'Almacenamiento en red seguro y de alta capacidad para backups.',
    image: '/img/product6.jpg'
  }
]
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.product-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(101, 179, 202, 0.15);
  border-color: #65B3CA;
}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f5f5f5;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-info h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.product-info p {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

/* Botón de más información */
.product-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding: 8px 20px;
  background: #65B3CA;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  align-self: flex-start;
}

.product-button:hover {
  background: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(101, 179, 202, 0.3);
  border-color: white;
}

.product-button .button-arrow {
  transition: transform 0.3s ease;
}

.product-button:hover .button-arrow {
  transform: translateX(5px);
}

/* Animación fade-in */
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

/* Retrasos escalonados para las tarjetas */
.product-card:nth-child(1) { animation-delay: 0.1s; }
.product-card:nth-child(2) { animation-delay: 0.2s; }
.product-card:nth-child(3) { animation-delay: 0.3s; }
.product-card:nth-child(4) { animation-delay: 0.4s; }
.product-card:nth-child(5) { animation-delay: 0.5s; }
.product-card:nth-child(6) { animation-delay: 0.6s; }

/* Responsive */
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
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  .product-image {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>