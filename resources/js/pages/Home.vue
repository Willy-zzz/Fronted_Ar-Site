<template>
  <section class="home">

    <!-- Carrusel -->
    <Carousel />

    <!-- Sección 1: Hero -->
    <section class="hero">
      <h1>Bienvenido a ARSITE</h1>
      <p>Somos una compañía de telecomunicaciones, informática y seguridad de la información, 
        certificada por nuestros partners. Nuestro mercado incluye el sector privado, el gobierno y 
        las instituciones educativas, Atendiendo a las crecientes necesidades de productos y servicios de 
        telecomunicaciones que están en demanda en estos sectores.</p>
    </section>

    <!-- Sección 2: Productos -->
    <section class="products">
      <h2>Productos</h2>

      <div class="grid">
        <div class="card" v-for="product in products" :key="product.id">
          <img :src="product.image" />
          <h3>{{ product.name }}</h3>
        </div>
      </div>
    </section>

    <!-- Sección 3: Partners -->
    <section class="partners">
      <h2>Partners</h2>

      <div class="logos">
        <img
          v-for="partner in partners"
          :key="partner.id"
          :src="partner.logo"
        />
      </div>
    </section>

    <!-- Sección 4: CTA -->
    <section class="cta">
      <h2>«Soluciones Tecnológicas a Entera Satisfacción»</h2>
      <p>Contáctanos y lleva tu empresa al siguiente nivel</p>
    </section>

  </section>
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
  padding: 0;
}

/* Hero */
.hero {
  padding: 60px 40px;
  text-align: center;
}

/* Grid reusable */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  padding: 40px;
}

/* Cards */
.card {
  background: #f8f8f8;
  padding: 24px;
  border-radius: 8px;
}

/* Productos */
.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  margin-bottom: 12px;
}

/* Partners */
.partners {
  padding: 40px;
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
}

/* CTA */
.cta {
  background: #0ea5e9;
  color: white;
  text-align: center;
  padding: 60px 40px;
}
</style>
