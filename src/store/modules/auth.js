const state = {
    auth: {
        isAuthenticated: true
    }
}

const getters = {
    isAuthenticated: state => state.auth.isAuthenticated
}

const actions = {}

const mutations = {
    TOGGLE_AUTH(state) {
        state.auth.isAuthenticated = !state.auth.isAuthenticated
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
