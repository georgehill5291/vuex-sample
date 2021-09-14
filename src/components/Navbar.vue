<template>
    <div class="navbar">
        <h1>My Vuex</h1>
        <!-- <ul>
            <li v-if="isAuthenticated">
                Total: {{ todos.length }}
                <button @click="TOGGLE_AUTH">Logout</button>
            </li>
            <li v-else>
                <button @click="TOGGLE_AUTH">Login</button>
            </li>
        </ul> -->
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Navbar',
    computed: mapGetters(['isAuthenticated', 'todos']),
    methods: mapMutations(['TOGGLE_AUTH'])
}
</script>

<style>
.navbar {
    padding: 5px;
    text-align: center;
    background: rgb(240, 240, 240);
    color: black;
}

.navbar ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
}
</style>
