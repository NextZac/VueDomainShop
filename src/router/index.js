import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/DomainChoice.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]
const router = createRouter({
  history: createWebHistory('http://localhost:5173/'),
  routes
})
export default router