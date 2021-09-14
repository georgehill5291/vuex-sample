import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Portal from '../views/template/Portal.vue'
import PortalNav from '../components/shared/PortalNav.vue'
import PublicNav from '../components/shared/PublicNav.vue'
import Public from '../views/template/Public.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import SampleVuex from '../views/SampleVuex.vue'
import BlogListing from '../views/BlogListing.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Public',
        components: {
            default: Public,
            navbar: PublicNav
        },
        children: [
            {
                name: 'Home',
                path: '',
                component: Home
            },
            {
                name: 'About',
                path: 'about',
                component: About
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            allowAnonymous: true
        }
    },
    {
        path: '/portal',
        name: 'Portal',
        components: {
            default: Portal,
            navbar: PortalNav
        },
        children: [
            {
                name: 'sample-vuex',
                path: 'sample-vuex',
                component: SampleVuex
            },
            {
                name: 'blog-listing',
                path: 'blog-listing',
                component: BlogListing
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.name == 'Login' && router.app.$store.getters.isAuthenticated) {
//         next({ path: '/' })
//     } else if (
//         !to.meta.allowAnonymous &&
//         !router.app.$store.getters.isAuthenticated
//     ) {
//         next({
//             path: '/login',
//             query: { redirect: to.fullPath }
//         })
//     } else {
//         next()
//     }
// })

export default router
