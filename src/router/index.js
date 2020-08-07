import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import MainComponent from "../components/MainComponent";
import AgentsComponent from "../components/AgentsComponent";
import About from '../views/About';
import Login from '../components/LoginComponent';
// import Test from '../components/TestComponent';
import Map from '../components/MapComponent';
import Chart from '../components/ChartComponent';

Vue.use(VueRouter)
// const routes = [
const routes = [
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
        path: '/agents',
        name: 'agents',
        component: AgentsComponent,

    },
    {
        path: '',
       // redirect: '/main',
        name: 'main',
        component: MainComponent,
        children:[
            {
                path: '/agents',
                name: 'agents',
                component: AgentsComponent,
            },
        ]

    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/test',
        name: 'test',
        // component: Test
        component: () => import('@/components/TestComponent'),

    },
    {
        path: '/map',
        name: 'map',
        component: Map
    },
    {
        path: '/chart',
        name: 'chart',
        component: Chart
    }
]

const router = new VueRouter({
    routes
})

export default router
