<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import logo from '@/assets/LOGOARSITE.png'

const { isLoggedIn, logout, user } = useAuth()
const router = useRouter()

const open = ref(false)          // menú hamburguesa
const scrolled = ref(false)      // efecto scroll
const dropdownOpen = ref(false)  // dropdown de cuenta

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleDropdown = (event) => {
  event.stopPropagation()
  dropdownOpen.value = !dropdownOpen.value
}

const closeDropdown = () => {
  dropdownOpen.value = false
}

const closeMenuAndDropdown = () => {
  open.value = false
  dropdownOpen.value = false
}

const handleLogout = () => {
  logout()
  router.push('/soporte/login')
  closeMenuAndDropdown()
}

// Cerrar dropdown si se hace clic fuera
const handleClickOutside = (event) => {
  if (!event.target.closest('.dropdown')) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
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
      <button class="hamburger" @click="open = !open">☰</button>

      <!-- Menú principal -->
      <ul :class="['menu', { show: open }]">
        <li><router-link @click="open = false" to="/">Inicio</router-link></li>
        <li><router-link @click="open = false" to="/nosotros">Nosotros</router-link></li>
        <li><router-link @click="open = false" to="/productos">Productos</router-link></li>
        <li><router-link @click="open = false" to="/servicios">Servicios</router-link></li>
        <li><router-link @click="open = false" to="/partners">Partners</router-link></li>
        <li><router-link @click="open = false" to="/clientes">Clientes</router-link></li>
        <li><router-link @click="open = false" to="/soporte">Soporte</router-link></li>
        <li><router-link @click="open = false" to="/contacto">Contacto</router-link></li>

        <!-- Dropdown solo visible cuando hay sesión activa -->
        <li v-if="isLoggedIn" class="dropdown" @click.stop="toggleDropdown" @mouseleave="closeDropdown">
          <a href="#" class="dropdown-toggle" @click.prevent>
            <span class="user-name">{{ user?.name || user?.username || 'Mi cuenta' }}</span>
            <span class="arrow" :class="{ rotated: dropdownOpen }">▼</span>
          </a>
          <ul class="dropdown-menu" :class="{ 'show-dropdown': dropdownOpen }">
            <li><router-link @click="closeMenuAndDropdown" to="/soporte/cuenta">Mi perfil</router-link></li>
            <li><a href="#" @click.prevent="handleLogout">Cerrar sesión</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </nav>
</template>

<style scoped>
/* ===== NAVBAR ===== */
.navbar {
  background: rgba(242, 242, 242, 0.95);
  border-bottom: 1px solid transparent;
  position: sticky;
  top: 0;
  z-index: 9999;
  transition: all 0.4s ease;
  backdrop-filter: blur(5px);
}

.navbar.scrolled {
  background: #f2f2f2;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

/* ===== CONTENEDOR ===== */
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

/* ===== MENÚ DESKTOP ===== */
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
  transition: 0.2s;
}

.menu a:hover,
.menu a.router-link-active {
  color: #78c2e7;
  font-weight: 600;
}

/* ===== DROPDOWN ===== */
.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
}

.arrow {
  font-size: 0.7rem;
  transition: transform 0.2s;
}

.arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 160px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 1000;
}

.dropdown-menu.show-dropdown {
  opacity: 1;
  visibility: visible;
}

.dropdown-menu li {
  border-bottom: 1px solid #eee;
}

.dropdown-menu li:last-child {
  border-bottom: none;
}

.dropdown-menu a {
  display: block;
  padding: 10px 16px;
  color: #333;
  text-decoration: none;
  white-space: nowrap;
}

.dropdown-menu a:hover {
  background: #f5f5f5;
  color: #78c2e7;
}

/* ===== HAMBURGUESA ===== */
.hamburger {
  display: none;
  font-size: 26px;
  background: none;
  border: none;
  cursor: pointer;
}

/* ===== RESPONSIVE MÓVIL ===== */
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
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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

  /* Dropdown en móvil: se comporta como bloque expandible */
  .dropdown {
    position: static;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    padding-left: 20px;
    background: #fafafa;
    opacity: 1;
    visibility: visible;
    display: none;
  }

  .dropdown-menu.show-dropdown {
    display: block;
  }

  .dropdown-toggle .arrow {
    display: inline-block;
  }
}
</style>