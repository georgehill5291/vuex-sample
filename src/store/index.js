import Vue from 'vue'
import Vuex from 'vuex'

//import module
import auth from './modules/auth'
import todos from './modules/todo'
import blogs from './modules/blog'

Vue.use(Vuex)

const storeData = {
    modules: {
        auth,
        todos,
        blogs
    }
}

const store = new Vuex.Store(storeData)

export default store
