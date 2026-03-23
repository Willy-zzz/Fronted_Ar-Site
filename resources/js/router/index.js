import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Products from '../pages/Products.vue'
import CategoriaProductos from '../pages/categoriaProductos.vue'
import Services from '../pages/Services.vue'
import Partners from '../pages/Partners.vue'
import Clients from '../pages/Clients.vue'
import Support from '../pages/Support.vue'
import Contact from '../pages/Contact.vue'
import EnConstruccion from '../pages/EnConstruccion.vue'
import NotFound from '../pages/NotFound.vue'
import ProductoDetalle from '../pages/ProductoDetalle.vue'
import Terminos from '../pages/Terminos.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/nosotros', component: About },
  { path: '/productos', component: Products },
  { path: '/productos/:categoria', component: CategoriaProductos },
  { path: '/servicios', component: Services },
  { path: '/partners', component: Partners },
  { path: '/clientes', component: Clients },   // Mientras tanto, en construcción
  { path: '/soporte', component: Support },
  { path: '/contacto', component: Contact },
  { path: '/terminos', component: Terminos },
  // Productos 
  { path: '/producto/:id', component: ProductoDetalle },

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

export default router