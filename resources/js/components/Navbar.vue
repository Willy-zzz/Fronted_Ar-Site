<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/LOGOARSITE.png'

const open = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="['navbar', { scrolled: scrolled }]">
    
    <div class="nav-container">

      <!-- Logo -->
      <router-link to="/" class="logo">
        <img :src="logo" alt="ARSITE" />
      </router-link>

      <!-- Botón hamburguesa -->
      <button class="hamburger" @click="open = !open">
        ☰
      </button>

      <!-- Menú -->
      <ul :class="['menu', { show: open }]">
        <li><router-link @click="open=false" to="/">Inicio</router-link></li>
        <li><router-link @click="open=false" to="/nosotros">Nosotros</router-link></li>
        <li><router-link @click="open=false" to="/productos">Productos</router-link></li>
        <li><router-link @click="open=false" to="/servicios">Servicios</router-link></li>
        <li><router-link @click="open=false" to="/partners">Partners</router-link></li>
        <li><router-link @click="open=false" to="/clientes">Clientes</router-link></li>
        <li><router-link @click="open=false" to="/soporte">Soporte</router-link></li>
        <li><router-link @click="open=false" to="/contacto">Contacto</router-link></li>
      </ul>

    </div>

  </nav>
</template>

<style scoped>
/* ===== NAVBAR ===== */
.navbar {
  background: rgba(242, 242, 242, 0.95); /* Transparente inicial */
  border-bottom: 1px solid transparent; /* Sin borde inicial */
  
  position: sticky;
  top: 0;
  z-index: 9999;
  
  /* Transición suave para todos los cambios */
  transition: all 0.4s ease;
  backdrop-filter: blur(5px); /* Efecto de desenfoque de fondo */

  
}

/* Navbar cuando se hace scroll */
.navbar.scrolled {
  background: #f2f2f2; /* Color sólido */
  border-bottom: 1px solid #e5e5e5; /* Borde visible */
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

/* contenedor centrado */
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ===== LOGO ===== */
.logo img {
  height: 46px;
  display: block;
  transition: opacity 0.3s ease;
}

/* ===== MENU DESKTOP ===== */
.menu {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.menu a {
  text-decoration: none;
  color: #222;
  font-weight: 500;
  transition: .2s;
}

.menu a:hover,
.menu a.router-link-active {
  color: #78c2e7;
  font-weight: 600;
}

/* ===== HAMBURGER ===== */
.hamburger {
  display: none;
  font-size: 26px;
  background: none;
  border: none;
  cursor: pointer;
}

/* ===== MOBILE ===== */
@media (max-width: 820px) {

  .hamburger {
    display: block;
  }

  .menu {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    gap: 0;
    display: none;
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
    z-index: 10000;
  }

  .menu li {
    border-bottom: 1px solid #eee;
  }

  .menu a {
    display: block;
    padding: 14px 20px;
  }

  .menu.show {
    display: flex;
  }
  
  /* Para móviles, asegurar que el navbar sea sólido al abrir el menú */
  .navbar:has(.menu.show) {
    background: #f2f2f2;
  }
}
</style>