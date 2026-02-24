<template>
  <div class="construction-page">
    <!-- Hero reutilizable con animaciones -->
    <Hero
      title="Página en Construcción"
      subtitle="Estamos trabajando para ofrecerte algo increíble. Pronto estará disponible."
      image="/img/construction-bg.jpg"
    />

    <!-- Contenido adicional opcional -->
    <section class="construction-content">
      <div class="container">
        <div class="message-box">
          <svg class="construction-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 3v7a2 2 0 01-2 2H8a2 2 0 01-2-2V7L8 4z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12h.01" />
          </svg>
          <h2>¡Muy pronto!</h2>
          <p>Estamos construyendo esta sección con dedicación. Mientras tanto, puedes explorar el resto de nuestro sitio.</p>
          <router-link to="/" class="home-link">Volver al inicio</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
</script>

<style scoped>
.construction-page {
  min-height: 100vh;
}

.construction-content {
  padding: 60px 20px;
  background: #f8fafc;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.message-box {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.construction-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  color: #65B3CA;
  animation: bounce 2s infinite;
}

.message-box h2 {
  font-size: 2.5rem;
  color: #1a202c;
  margin-bottom: 15px;
}

.message-box p {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 30px;
  line-height: 1.6;
}

.home-link {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(135deg, #65B3CA 0%, #3b82f6 100%);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
}

.home-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(101, 179, 202, 0.4);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 600px) {
  .message-box {
    padding: 30px 20px;
  }
  .message-box h2 {
    font-size: 2rem;
  }
  .construction-icon {
    width: 60px;
    height: 60px;
  }
}
</style>