<template>
    <div class="landing">
        <div class="login">
            <form @submit="onSubmit">
                <h3 class="text-white">Sign In</h3>

                <div class="form-group text-white">
                    <label>Username</label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="username"
                    />
                </div>

                <div class="form-group text-white">
                    <label>Password</label>
                    <input
                        type="password"
                        class="form-control form-control-lg"
                        v-model="password"
                    />
                </div>

                <button
                    type="submit"
                    class="btn btn-dark btn-lg btn-block mt-2"
                >
                    Sign In
                </button>

                <p class="forgot-password text-right mt-2 mb-4">
                    <router-link to="/forgot-password"
                        >Forgot password ?</router-link
                    >
                </p>
                <p class="forgot-password text-right mt-2 mb-4">
                    <router-link to="/">Back to home</router-link>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        onSubmit(event) {
            event.preventDefault()
            this.login({
                username: this.username,
                password: this.password
            })
        }
    }
}
</script>

<style scoped>
.landing {
    background-image: url('../assets/background-login-2.png');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: 100vh;
}

.login {
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
