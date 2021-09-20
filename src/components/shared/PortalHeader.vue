<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark public-nav">
        <a class="navbar-brand" href="#">G-Vue</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/portal/sample-vuex" class="nav-link"
                        >Sample Vuex</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/portal/blog-listing"
                        >Blog</router-link
                    >
                </li>
            </ul>
            <ul class="navbar-nav  ml-auto">
                <li class="nav-item">
                    <a
                        href="javascript:void(0)"
                        class="nav-link"
                        @click="logout()"
                        >Logout</a
                    >
                </li>
            </ul>
        </div>
    </nav>
    <!-- <div class="public-nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/blogs">Blog</router-link>|
        <router-link to="/login">Login</router-link>|
    </div> -->
</template>

<script>
export default {
    name: 'PortalHeader'
}
</script>

<style scoped>
a.navbar-brand,
#navbarSupportedContent li a {
    color: white !important;
}

.navbar {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1;
}
</style>
