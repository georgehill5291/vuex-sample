<template>
    <div class="left-sidebar bg-dark">
        Left nav bar

        <ul class="navbar-nav">
            <li class="nav-item active text-left p-2 left-item">
                Hi {{ username }}
            </li>
            <li class="nav-item active text-left p-2 left-item">
                <router-link to="/portal/sample-vuex">Sample Vuex</router-link>
            </li>
            <li class="nav-item text-left p-2 left-item">
                <router-link class="nav-link" to="/portal/blog-listing"
                    >Blog</router-link
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'LeftNavbar',
    computed: mapGetters(['username'])
}
</script>

<style>
.left-sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    padding-top: 50px;
    width: 250px;
    height: 100vh;
    display: table;
}

.left-item {
    border-bottom: 1px solid white;
    color: white;
}

.left-item a {
    color: white;
}
</style>
