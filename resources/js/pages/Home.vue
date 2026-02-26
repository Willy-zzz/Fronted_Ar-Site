<template>
  <div>
    <!-- Carrusel (siempre a ancho completo) -->
    <Carousel />

    <!-- Contenido limitado por el contenedor global -->
    <div class="home container">
      <!-- Sección Hero -->
      <section class="hero">
        <h1>Bienvenido a ARSITE</h1>
        <p>
          Somos una compañía de telecomunicaciones, informática y seguridad de la información, 
          certificada por nuestros partners. Nuestro mercado incluye el sector privado, el gobierno y 
          las instituciones educativas, Atendiendo a las crecientes necesidades de productos y servicios de 
          telecomunicaciones que están en demanda en estos sectores.
        </p>
      </section>

      <!-- Sección Productos -->
      <section class="products">
        <h2>Productos</h2>
        <div class="grid">
          <div class="card" v-for="product in products" :key="product.id">
            <img :src="product.image" />
            <h3>{{ product.name }}</h3>
          </div>
        </div>
      </section>

      <!-- Sección Partners -->
      <section class="partners">
        <h2>Partners</h2>
        <div class="logos">
          <img v-for="partner in partners" :key="partner.id" :src="partner.logo" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue'

const products = [
  { id: 1, name: 'Servidor Empresarial', image: '/img/product1.jpg' },
  { id: 2, name: 'Firewall', image: '/img/product2.jpg' },
  { id: 3, name: 'Cámaras IP', image: '/img/product3.jpg' }
]

const partners = [
  { id: 1, logo: '/img/partner1.png' },
  { id: 2, logo: '/img/partner2.png' },
  { id: 3, logo: '/img/partner3.png' }
]
</script>

<style scoped>
.home {
  background: #ffffff;
  padding: 60px 0; /* Padding vertical, el horizontal lo da .container */
}

/* Hero */
.hero {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 60px;
  line-height: 1.8;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #65B3CA;
}

/* Títulos de secciones */
.products h2,
.partners h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #65B3CA;
  margin-bottom: 40px;
}

/* Grid de productos */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.card {
  background: #f8f8f8;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  margin-bottom: 12px;
  border-radius: 8px;
}

/* Partners */
.partners {
  text-align: center;
}

.logos {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.logos img {
  height: 60px;
  filter: grayscale(0.5);
  transition: filter 0.3s;
}

.logos img:hover {
  filter: grayscale(0);
}

/* Responsive */
@media (max-width: 600px) {
  .hero h1 {
    font-size: 2rem;
  }
  .products h2,
  .partners h2 {
    font-size: 2rem;
  }
  .grid {
    gap: 16px;
  }
}
</style>