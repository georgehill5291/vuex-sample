import axios from 'axios'
import router from '../../router'
import { authName } from '../../util/constant'
import setAuthToken from './../../util/setAuthToken'

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
                `${process.env.VUE_APP_PROD_API_URL}/auth/login`,
                loginInput
            )
            commit('LOGIN', response.data)
        } catch (error) {
            console.log(error)
        }
    },

    async loadUser({ commit }) {
        if (localStorage[authName]) {
            setAuthToken(localStorage[authName])
        }

        try {
            const response = await axios.get(
                `${process.env.VUE_APP_PROD_API_URL}/auth`
            )
            commit('LOAD_USER', response.data)
        } catch (error) {
            console.log(error)
        }
    },

    async logout({ commit }) {
        localStorage.removeItem(authName)
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
            localStorage.setItem(authName, response.data.accessToken)
            router.push('/portal')
        }
    },
    LOAD_USER(state, response) {
        if (response.success) {
            state.auth.isAuthenticated = response.success
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
