import axios from 'axios'
import router from '../../router'
import setAuthToken from './../../util/setAuthToken'
import { apiUrl, AUTH_KEY_TOKEN } from '../../util/constUtil'

const state = {
    auth: {
        isAuthenticated: false
    }
}

const getters = {
    isAuthenticated: state => state.auth.isAuthenticated
}

const actions = {
    async login({ commit }, loginInput) {
        try {
            const response = await axios.post(
                `${apiUrl}/auth/login`,
                loginInput
            )
            commit('LOGIN', response.data)
        } catch (error) {
            console.log(error)
        }
    },

    async loadUser({ commit }) {
        if (localStorage[AUTH_KEY_TOKEN]) {
            setAuthToken(localStorage[AUTH_KEY_TOKEN])
        }

        try {
            const response = await axios.get(`${apiUrl}/auth`)
            commit('LOAD_USER', response.data)
        } catch (error) {
            console.log(error)
        }
    },

    async logout({ commit }) {
        localStorage.removeItem(AUTH_KEY_TOKEN)
        commit('LOGOUT')
    }
}

const mutations = {
    TOGGLE_AUTH(state) {
        state.auth.isAuthenticated = !state.auth.isAuthenticated
    },
    LOGIN(state, response) {
        if (response.success) {
            state.auth.isAuthenticated = response.success
            localStorage.setItem(AUTH_KEY_TOKEN, response.data.accessToken)
            router.push('/portal')
        }
    },
    LOAD_USER(state, response) {
        if (response.success) {
            state.auth.isAuthenticated = response.success
        } else {
            router.push('/login')
        }
    },
    LOGOUT(state) {
        state.auth.isAuthenticated = false
        router.push('/')
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
