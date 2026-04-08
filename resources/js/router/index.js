import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth' 


import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

import Products from '../pages/Products.vue'
import CategoriaProductos from '../pages/CategoriaProductos.vue'

import Services from '../pages/Services.vue'
import Partners from '../pages/Partners.vue'
import Clients from '../pages/Clients.vue'

import LoginPage from '../pages/soporte/LoginPage.vue'
import HelpDeskPage from '../pages/soporte/HelpDeskPage.vue'
import RecuperarPage from '../pages/soporte/RecuperarPage.vue'
import RegistroPage from '../pages/soporte/RegistroPage.vue'
import CuentaPage from '../pages/soporte/CuentaPage.vue'

import Contact from '../pages/Contact.vue'
import NotFound from '../pages/NotFound.vue'
import Terminos from '../pages/Terminos.vue'

//import EnConstruccion from '../pages/EnConstruccion.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/nosotros', component: About },

  { path: '/productos', component: Products },
  { path: '/productos/:categoria', component: CategoriaProductos },

  { path: '/servicios', component: Services },
  { path: '/partners', component: Partners },
  { path: '/clientes', component: Clients },
  
  
  { path: '/soporte/login', name: 'soporte.login', component: LoginPage,meta: { guest: true } }, // solo usuarios no autenticados
  { path: '/soporte/helpdesk', name: 'soporte.helpdesk', component: HelpDeskPage, meta: { requiresAuth: true } },
  { path: '/soporte/recuperar', component: RecuperarPage, meta: { guest: true } },
  { path: '/soporte/registro', component: RegistroPage, meta: { guest: true } },
  { path: '/soporte/cuenta', component: CuentaPage, meta: { requiresAuth: true } },
  // Opcional: redirigir /soporte a login o helpdesk según autenticación
  {
    path: '/soporte',
    redirect: () => {
      const { isLoggedIn } = useAuth()
      return isLoggedIn ? '/soporte/helpdesk' : '/soporte/login'
    }
  },


  { path: '/contacto', component: Contact },
  { path: '/terminos', component: Terminos },

  // 404
  { path: '/:pathMatch(.*)*', component: NotFound },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (por ejemplo, al usar "atrás" del navegador)
    if (savedPosition) {
      return savedPosition
    } else {
      // Siempre ir al inicio de la página
      return { top: 0, left: 0, behavior: 'smooth' } // behavior smooth opcional
    }
  }
})

// GUARDIA DE NAVEGACIÓN GLOBAL
router.beforeEach((to, from, next) => {
  // Obtén el estado actual de autenticación
  const { isLoggedIn } = useAuth()
  const authenticated = isLoggedIn.value

  if (to.meta.requiresAuth && !authenticated) {
    next('/soporte/login')
  } else if (to.meta.guest && authenticated) {
    next('/soporte/helpdesk')
  } else {
    next()
  }
})

export default router