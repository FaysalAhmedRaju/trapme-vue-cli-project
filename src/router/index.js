import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import MainComponent from "../components/MainComponent";
import About from '../views/About';
import Login from '../components/LoginComponent';

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
      path: '/main',
      name: 'Main',
      component: MainComponent,
      // children: [
      //     //
      //     name: 'Dashboard',
      //     path: '',
      //     component: () => import('@/views/Dashboard'),
      // ]
  },
 {
     path: '/',
     redirect: '/login',
     name: 'login',
     component: Login

  },{
    path: '/login',
          name: 'login',
          component: Login
      }
]

const router = new VueRouter({
  routes
})

export default router
