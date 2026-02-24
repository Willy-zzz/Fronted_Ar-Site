<template>
  <section class="hero" :style="backgroundStyle">
    <div class="overlay">
      <h1 class="animate-title">{{ title }}</h1>
      <p v-if="subtitle" class="animate-subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  subtitle: String,
  image: String
})

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.image})`
}))
</script>

<style scoped>
.hero {
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  position: relative;
}

.overlay {
  position: absolute;
  bottom: 40px;
  left: 60px;
  color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
  max-width: 80%;
}

.overlay h1 {
  font-size: 48px;
  margin: 0 0 10px 0;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

.overlay p {
  font-size: 20px;
  margin: 0;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s 0.3s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .overlay {
    left: 30px;
    bottom: 30px;
  }
  .overlay h1 {
    font-size: 32px;
  }
  .overlay p {
    font-size: 16px;
  }
}
</style>