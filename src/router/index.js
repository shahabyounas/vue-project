import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AirportsView from '../views/AirportsView.vue'
import RunwaysView from '../views/RunwaysView.vue'
import ParkingView from '../views/ParkingView.vue'
import MyDriveView from '../views/MyDriveView.vue'

console.log('import.meta.env.BASE_URL', import.meta.env.BASE_URL)

const router = createRouter({
  history: createWebHistory('/vue-project'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/airports',
      name: 'Airport',
      component: AirportsView
    },
    {
      path: '/runways',
      name: 'Runways',
      component: RunwaysView
    },
    {
      path: '/mydrive',
      name: 'Mydrive',
      component: MyDriveView
    },
    {
      path: '/parking',
      name: 'Parking',
      component: ParkingView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: HomeView }
  ]
})

export default router
