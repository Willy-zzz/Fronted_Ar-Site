<template>
  <div class="carousel-container">
    <div class="carousel">
      <!-- Contenedor de imagen con overlay -->
      <div class="slide-wrapper">
        <img :src="slides[current].image" :key="current" />
        
        <!-- Overlay oscuro para mejor legibilidad del texto -->
        <div class="overlay"></div>
        
        <!-- Contenido del slide -->
        <div class="slide-content">
          <!-- Título -->
          <h2 class="slide-title" v-html="slides[current].title"></h2>
          
          <!-- Descripción -->
          <p class="slide-description" v-html="slides[current].description"></p>
          
          <!-- Botón con enlace -->
          <a 
            :href="slides[current].link.url" 
            class="slide-button"
            :target="slides[current].link.external ? '_blank' : '_self'"
          >
            {{ slides[current].link.text }}
            <span class="button-arrow">→</span>
          </a>
        </div>
      </div>

      <!-- Botones de navegación -->
      <button class="prev" @click="prev">‹</button>
      <button class="next" @click="next">›</button>
      
      <!-- Indicadores de slides -->
      <div class="dots">
        <button 
          v-for="(slide, index) in slides" 
          :key="index"
          class="dot"
          :class="{ active: current === index }"
          @click="goToSlide(index)"
          :aria-label="`Ir al slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Array con toda la información de cada slide
const slides = ref([
  {
    image: '/img/slide1.png',
    title: 'Descubre Nuestros <span class="highlight">Productos</span>',
    description: 'Explora nuestra colección exclusiva con las mejores ofertas del mercado. Calidad garantizada y envío rápido.',
    link: {
      text: 'Ver Catálogo',
      url: '/catalogo',
      external: false
    }
  },
  {
    image: '/img/slide2.webp',
    title: 'Ofertas <span class="highlight">Especiales</span>',
    description: 'Hasta 50% de descuento en productos seleccionados. Oferta válida por tiempo limitado.',
    link: {
      text: 'Ver Ofertas',
      url: '/ofertas',
      external: false
    }
  },
  {
    image: '/img/slide3.webp',
    title: 'Nueva <span class="highlight">Colección</span> 2024',
    description: 'Llega la temporada con nuestros productos más innovadores. Diseño moderno y funcional.',
    link: {
      text: 'Explorar',
      url: '/nueva-coleccion',
      external: false
    }
  },
  // Puedes añadir más slides aquí
  {
    image: '/img/slide4.webp',
    title: 'Envío <span class="highlight">Gratis</span>',
    description: 'En todos los pedidos superiores a $50. Disfruta de nuestras promociones especiales.',
    link: {
      text: 'Comprar Ahora',
      url: '/tienda',
      external: false
    }
  }
])

const current = ref(0)

const next = () => {
  current.value = (current.value + 1) % slides.value.length
}

const prev = () => {
  current.value = (current.value - 1 + slides.value.length) % slides.value.length
}

const goToSlide = (index) => {
  current.value = index
}

// Auto-slide cada 5 segundos
let intervalId = null

onMounted(() => {
  intervalId = setInterval(next, 5000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
/* Contenedor principal con los márgenes */
.carousel-container {
  width: calc(100% - 440px);
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  padding: 0;
}

/* El carrusel en sí */
.carousel {
  position: relative;
  height: 80vh;
  min-height: 400px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

/* Contenedor de cada slide */
.slide-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
  display: block;
}

/* Overlay oscuro para mejorar legibilidad */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 1;
}

/* Contenido del slide */
.slide-content {
  position: absolute;
  top: 50%;
  left: 80px;
  transform: translateY(-50%);
  color: white;
  z-index: 2;
  max-width: 600px;
  text-align: left;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px) translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateY(-50%);
  }
}

/* Título del slide */
.slide-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.slide-title .highlight {
  color: #fbbf24; /* Color amarillo para destacar */
  text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
}

/* Descripción del slide */
.slide-description {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  opacity: 0.95;
  max-width: 500px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Botón del slide */
.slide-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #3b82f6; /* Color azul */
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  border: 2px solid transparent;
}

.slide-button:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  border-color: white;
}

.button-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.slide-button:hover .button-arrow {
  transform: translateX(5px);
}

/* Botones de navegación */
button.prev, button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

button.prev:hover, button.next:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.prev { 
  left: 20px;
}

.next { 
  right: 20px;
}

/* Indicadores de slides */
.dots {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 10;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: scale(1.2);
}

.dot.active {
  background: white;
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Responsive */
@media (max-width: 1600px) {
  .carousel-container {
    width: calc(100% - 200px);
  }
}

@media (max-width: 1200px) {
  .carousel-container {
    width: calc(100% - 100px);
  }
  
  .carousel {
    height: 70vh;
  }
  
  .slide-content {
    left: 60px;
    max-width: 500px;
  }
  
  .slide-title {
    font-size: 3rem;
  }
}

@media (max-width: 992px) {
  .slide-content {
    left: 40px;
    max-width: 450px;
  }
  
  .slide-title {
    font-size: 2.5rem;
  }
  
  .slide-description {
    font-size: 1.1rem;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .carousel-container {
    width: calc(100% - 40px);
  }
  
  .carousel {
    height: 60vh;
    min-height: 300px;
  }
  
  .slide-content {
    left: 30px;
    right: 30px;
    max-width: 100%;
    text-align: center;
  }
  
  .slide-title {
    font-size: 2.2rem;
  }
  
  .slide-description {
    font-size: 1rem;
    max-width: 100%;
  }
  
  .slide-button {
    padding: 12px 28px;
    font-size: 1rem;
  }
  
  button.prev, button.next {
    width: 50px;
    height: 50px;
    font-size: 30px;
    padding: 10px 15px;
  }
  
  .prev { left: 10px; }
  .next { right: 10px; }
  
  .dots {
    bottom: 20px;
  }
}

@media (max-width: 480px) {
  .carousel {
    height: 50vh;
    min-height: 250px;
  }
  
  .slide-content {
    left: 20px;
    right: 20px;
  }
  
  .slide-title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  .slide-description {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  
  button.prev, button.next {
    width: 40px;
    height: 40px;
    font-size: 24px;
    padding: 8px 12px;
  }
}
</style>

<style>
/* Estilos globales para el texto HTML */
.slide-title span.highlight {
  color: #fbbf24;
  font-weight: 800;
}
</style>