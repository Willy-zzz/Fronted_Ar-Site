import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Products from '../pages/Products.vue'
import Services from '../pages/Services.vue'
import Partners from '../pages/Partners.vue'
import Clients from '../pages/Clients.vue'
import Support from '../pages/Support.vue'
import Contact from '../pages/Contact.vue'
import EnConstruccion from '../pages/EnConstruccion.vue'
import NotFound from '../pages/NotFound.vue'
import ProductoDetalle from '../pages/ProductoDetalle.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/nosotros', component: About },
  { path: '/productos', component: Products },
  { path: '/servicios', component: EnConstruccion },
  { path: '/partners', component: EnConstruccion },
  { path: '/clientes', component: EnConstruccion },   // Mientras tanto, en construcción
  { path: '/soporte', component: EnConstruccion },
  { path: '/contacto', component: Contact },
  { path: '/:pathMatch(.*)*', component: NotFound },
  // Productos 
  { path: '/producto/:id', component: ProductoDetalle }
  
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

export default router