<template>
  <section class="page">

    <h1 class="title">Título de la página</h1>
    <p class="subtitle">Descripción corta aquí</p>

    <div class="grid">
      <div
        v-for="item in items"
        :key="item.id"
        class="card"
      >
        <img v-if="item.image" :src="item.image" />
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>

  </section>
</template>

<script setup>
/*
  👉 SOLO EDITA ESTO
*/

const items = [
  {
    id: 1,
    name: 'Elemento 1',
    description: 'Descripción del elemento',
    image: '/img/demo1.jpg'
  },
  {
    id: 2,
    name: 'Elemento 2',
    description: 'Descripción del elemento',
    image: '/img/demo2.jpg'
  },
  {
    id: 3,
    name: 'Elemento 3',
    description: 'Descripción del elemento',
    image: '/img/demo3.jpg'
  }
]
</script>

<style scoped>
.page {
  padding: 60px 40px;
}

.title {
  font-size: 32px;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  margin-bottom: 30px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.card {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin-bottom: 12px;
}
</style>
