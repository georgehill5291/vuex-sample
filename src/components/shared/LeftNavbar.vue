<template>
    <div class="left-sidebar bg-dark">
        <ul class="navbar-nav bg-dark">
            <li class="nav-item active text-left p-2 left-item">
                <span class="menu-nav" @click="toggleNavigation">&#9776;</span>
                Navigation
            </li>
            <li class="nav-item active text-left p-2 left-item">
                Hi {{ username }}
            </li>
            <li class="nav-item active text-left p-2 left-item">
                <router-link to="/portal/sample-vuex">Sample Vuex</router-link>
            </li>
            <li class="nav-item text-left p-2 left-item">
                <router-link class="nav-link" to="/portal/blog-listing">
                    <img
                        src="/assets/images/ic_faq.svg"
                        alt="menu"
                        class="mCS_img_loaded"
                    />
                    <span>Blog</span></router-link
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import $ from 'jquery'
export default {
    name: 'LeftNavbar',
    computed: mapGetters(['username']),
    methods: {
        toggleNavigation() {
            $('div.left-sidebar').toggleClass('open')
            $('.portal-container').toggleClass('open')
        }
    }
}
</script>

<style lang="scss">
.left-sidebar {
    background: #232343;
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 70px;
    padding-bottom: 70px;
    height: 100%;
    width: 80px;
    float: left;
    box-shadow: none;
    transition: all 0.1s linear;

    .left-item {
        border-bottom: 1px solid white;
        color: white;
    }

    .left-item a {
        color: white;
    }

    .left-item img.mCS_img_loaded {
        vertical-align: middle;
        position: relative;
        top: -2px;
        margin-right: 10px;
        width: 20px;
    }
}

.left-sidebar.open {
    width: 200px;
}
</style>
