<script setup>
import logo from '@/assets/logo.png'
</script>

<template>
  <nav class="navbar">
    <div class="container">

      <!-- Logo clickeable -->
      <router-link to="/" class="logo">
        <img :src="logo" alt="ARSITE" />
      </router-link>

      <!-- Menú -->
      <ul class="menu">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/nosotros">Nosotros</router-link></li>
        <li><router-link to="/productos">Productos</router-link></li>
        <li><router-link to="/servicios">Servicios</router-link></li>
        <li><router-link to="/partners">Partners</router-link></li>
        <li><router-link to="/clientes">Clientes</router-link></li>
        <li><router-link to="/soporte">Soporte</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
      </ul>

    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: #f2f2f2;
  padding: 14px 40px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* logo */
.logo img {
  height: 48px;
  cursor: pointer;
}

/* menú */
.menu {
  list-style: none;
  display: flex;
  gap: 26px;
  margin: 0;
  padding: 0;
}

.menu a {
  text-decoration: none;
  color: #222;
  font-weight: 500;
  transition: 0.2s;
}

.menu a:hover {
  color: #0ea5e9;
}

.menu a.router-link-active {
  color: #0ea5e9;
  font-weight: 700;
}
</style>
