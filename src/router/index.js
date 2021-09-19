import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PublicBlogs from '../views/Blogs/PublicBlogs'
import Portal from '../views/template/Portal.vue'
import PortalNav from '../components/shared/PortalNav.vue'
import PublicNav from '../components/shared/PublicNav.vue'
import Public from '../views/template/Public.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import SampleVuex from '../views/SampleVuex.vue'
import BlogListing from '../views/BlogListing.vue'
import AddBlog from '../components/Blogs/AddBlog'
import EditBlog from '../components/Blogs/EditBlog'
import ViewBlog from '../components/Blogs/ViewBlog'
// import { isLoggedIn } from "../util/authCommon";

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
                component: Home,
                meta: {
                    allowAnonymous: true
                }
            },
            {
                name: 'About',
                path: 'about',
                component: About,
                meta: {
                    allowAnonymous: true
                }
            },
            {
                name: 'PublicBlogs',
                path: '/blogs',
                component: PublicBlogs,
                meta: {
                    allowAnonymous: true
                }
            },
            {
                name: 'ViewBlog',
                path: '/blogs/:id',
                component: ViewBlog,
                meta: {
                    allowAnonymous: true
                }
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
                name: 'SampleVuex',
                path: 'sample-vuex',
                component: SampleVuex
            },
            {
                name: 'BlogListing',
                path: 'blog-listing',
                component: BlogListing
            },
            {
                name: 'EditBlog',
                path: 'blog-listing/edit/:id',
                component: EditBlog
            },
            {
                name: 'AddBlog',
                path: 'blog-listing/add',
                component: AddBlog
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeResolve(async (to, from, next) => {
    await Vue.nextTick()
    if (!to.meta.allowAnonymous && !router.app.$store.getters.isAuthenticated) {
        await router.app.$store.dispatch('loadUser')
    }
    if (to.name == 'Login' && router.app.$store.getters.isAuthenticated) {
        next({ path: '/portal' })
    } else if (
        !to.meta.allowAnonymous &&
        !router.app.$store.getters.isAuthenticated
    ) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
})

export default router
