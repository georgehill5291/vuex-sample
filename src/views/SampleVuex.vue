<template>
    <div id="app">
        <Navbar />
        <TodoForm />
        <Todos />
        <StatusBar />
        <ProgressBar />
    </div>
</template>

<script>
import Todos from '@/components/Todos.vue'
import Navbar from '@/components/Navbar.vue'
import StatusBar from '@/components/StatusBar.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import TodoForm from '@/components/TodoForm.vue'

export default {
    name: 'SampleVuex',
    components: { Todos, Navbar, StatusBar, ProgressBar, TodoForm }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(219, 219, 219);
    /* margin: 20px auto; */
    /* width: 90%;
    max-width: 800px; */
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
