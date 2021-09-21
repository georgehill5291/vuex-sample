<template>
    <div class="portal-nav">
        <div class="open-nav" @click="openNav()">
            <span class="menu-nav">&#9776;</span>
            <span class="menu-nav-title">Portal</span>
        </div>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
            <router-link to="/portal/sample-vuex">Sample Vuex</router-link>
            <router-link to="/portal/blog-listing">Blog</router-link>
            <a href="javascript:void(0)" @click="logout">Logout</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
    methods: {
        ...mapActions(['logout'])
    }
}
</script>

<style scoped>
.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    text-align: left;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }
    .sidenav a {
        font-size: 18px;
    }
}

.open-nav {
    font-size: 25px;
    cursor: pointer;
    display: flex;
    justify-content: left;
}
.menu-nav {
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 20px 0 25px;
    height: 35px;
    width: 35px;
    padding: 0 2px 4px 2px;
}
.menu-nav-title {
    margin: 10px 20px 0 0;
    height: 35px;
    padding: 0 2px 4px 2px;
}
</style>
