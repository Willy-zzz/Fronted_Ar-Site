<template>
  <section class="products">

    <h1>Productos</h1>
    <p>Nuestro catálogo de soluciones tecnológicas</p>

    <div class="grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="card"
      >
        <img :src="product.image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>

  </section>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Servidor Empresarial',
    description: 'Alto rendimiento para empresas',
    image: '/img/product1.jpg'
  },
  {
    id: 2,
    name: 'Firewall',
    description: 'Seguridad perimetral',
    image: '/img/product2.jpg'
  },
  {
    id: 3,
    name: 'Cámaras IP',
    description: 'Vigilancia inteligente',
    image: '/img/product3.jpg'
  }
]
</script>

<style scoped>
.products {
  padding: 60px 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 30px;
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
