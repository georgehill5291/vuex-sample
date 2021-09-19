<template>
    <div class="public">
        <!-- <div id="nav" v-if="!isAuthPage">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |     

            <button v-if="!isAuthenticated">
                <router-link to="/login">Login</router-link>
            </button>
            <button v-else @click="logout">Logout</button>
        </div> -->

        <div class="public-container">
            <router-view />
        </div>
    </div>
</template>
