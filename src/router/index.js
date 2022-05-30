import { createRouter, createWebHistory } from 'vue-router'
import routerHome from '@/modules/home/router'

const routes = [
  {
    path:'/home',
    ...routerHome
  },
  
  {
    path:'',
    redirect:'/home'
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
