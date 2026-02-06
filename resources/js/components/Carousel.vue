<template>
  <div class="carousel">
    <img :src="images[current]" />

    <button class="prev" @click="prev">‹</button>
    <button class="next" @click="next">›</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  '/img/slide1.png',
  '/img/slide2.webp',
  '/img/slide3.webp'
]

const current = ref(0)

const next = () => {
  current.value = (current.value + 1) % images.length
}

const prev = () => {
  current.value =
    (current.value - 1 + images.length) % images.length
}
</script>

<style scoped>
.carousel {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.carousel img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  background: rgba(0,0,0,.4);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev { left: 10px }
.next { right: 10px }
</style>
