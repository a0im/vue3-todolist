import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import WeekView from '../views/WeekView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },
  {
    path: '/week/:days',
    name : 'week',
    component : WeekView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
