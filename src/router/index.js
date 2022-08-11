import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import ThePrices from '../components/ThePrices.vue'
import ThePayment from '../components/ThePayment.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }, 
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/prices',
    name: 'ThePrices',
    component: ThePrices
  },
  {
    path: '/payment',
    name: 'ThePayment',
    component: ThePayment
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { 
      top: 0,
      behavior: 'smooth'
    }
  },
})

export default router
//process.env.BASE_URL