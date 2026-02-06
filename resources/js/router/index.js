import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Products from '../pages/Products.vue'
import Services from '../pages/Services.vue'
import Partners from '../pages/Partners.vue'
import Clients from '../pages/Clients.vue'
import Support from '../pages/Support.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/nosotros', component: About },
  { path: '/productos', component: Products },
  { path: '/servicios', component: Services },
  { path: '/partners', component: Partners },
  { path: '/clientes', component: Clients },
  { path: '/soporte', component: Support },
  { path: '/contacto', component: Contact }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
