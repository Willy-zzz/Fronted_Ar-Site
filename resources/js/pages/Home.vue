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
          las instituciones educativas, atendiendo a las crecientes necesidades de productos y servicios de 
          telecomunicaciones que están en demanda en estos sectores.
        </p>
      </section>

      <!-- NUEVA SECCIÓN: Eventos y Noticias -->
      <section class="events-news">
        <h2>Eventos y Noticias</h2>
        <div class="events-grid">
          <div v-for="item in eventsNews" :key="item.id" class="event-card">
            <div class="event-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="event-content">
              <h3>{{ item.title }}</h3>
              <p class="event-date">{{ item.date }}</p>
              <p class="event-excerpt">{{ item.excerpt }}</p>
              <a href="#" class="read-more">Leer más →</a>
            </div>
          </div>
        </div>
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

// Datos de ejemplo para productos
const products = [
  { id: 1, name: 'Servidor Empresarial', image: '/img/product1.jpg' },
  { id: 2, name: 'Firewall', image: '/img/product2.jpg' },
  { id: 3, name: 'Cámaras IP', image: '/img/product3.jpg' }
]

// Datos de ejemplo para partners
const partners = [
  { id: 1, logo: '/img/partner1.png' },
  { id: 2, logo: '/img/partner2.png' },
  { id: 3, logo: '/img/partner3.png' }
]

// Datos de ejemplo para eventos y noticias (simulando futura API)
const eventsNews = [
  {
    id: 1,
    title: 'Conferencia de Ciberseguridad 2025',
    date: '15 de mayo, 2025',
    excerpt: 'Únete a nuestro evento anual donde expertos discutirán las últimas tendencias en seguridad informática.',
    image: '/img/evento1.jpg'
  },
  {
    id: 2,
    title: 'Lanzamiento de Nueva Solución en la Nube',
    date: '22 de abril, 2025',
    excerpt: 'Presentamos nuestra plataforma de virtualización con inteligencia artificial integrada.',
    image: '/img/evento2.jpg'
  },
  {
    id: 3,
    title: 'Webinar: Redes del Futuro',
    date: '10 de marzo, 2025',
    excerpt: 'Aprende sobre las tecnologías que transformarán las redes empresariales en la próxima década.',
    image: '/img/evento3.jpg'
  }
]
</script>

<style scoped>
.home {
  background: #ffffff;
  padding: 60px 0;
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
.partners h2,
.events-news h2 {
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

/* ----- NUEVA SECCIÓN: EVENTOS Y NOTICIAS ----- */
.events-news {
  margin: 60px 0;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

.event-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(101, 179, 202, 0.15);
  border-color: #65B3CA;
}

.event-image {
  height: 180px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.event-card:hover .event-image img {
  transform: scale(1.05);
}

.event-content {
  padding: 1.5rem;
  text-align: left;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.event-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.event-date {
  color: #65B3CA;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.event-excerpt {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  flex: 1;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #65B3CA;
  font-weight: 600;
  text-decoration: none;
  transition: gap 0.3s;
  margin-top: auto;
}

.read-more:hover {
  gap: 10px;
  color: #3b82f6;
}

/* Responsive */
@media (max-width: 600px) {
  .hero h1 {
    font-size: 2rem;
  }
  .products h2,
  .partners h2,
  .events-news h2 {
    font-size: 2rem;
  }
  .grid {
    gap: 16px;
  }
  .events-grid {
    grid-template-columns: 1fr;
  }
}
</style>