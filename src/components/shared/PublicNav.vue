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
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link"
                        >About</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link to="/blogs" class="nav-link">Blog</router-link>
                </li>
            </ul>
            <ul class="navbar-nav  ml-auto">
                <li class="nav-item">
                    <router-link to="/login" class="nav-link"
                        >Login</router-link
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
    name: 'PublicNav'
}
</script>

<style>
a.navbar-brand,
#navbarSupportedContent li a {
    color: white !important;
}
</style>
