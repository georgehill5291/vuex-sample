<template>
    <div class="portal-nav">
        <router-link to="/portal/sample-vuex">Sample Vuex</router-link>|
        <router-link to="/portal/blog-listing">Blog</router-link>|
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    created() {
        this.loadUser()
    },
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
    methods: {
        ...mapActions(['loadUser', 'logout'])
    }
}
</script>
