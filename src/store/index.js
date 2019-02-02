import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
    },
    mutations: {
      set(state, {name, value}) {
        return state[name] = value
      }
    }
})

export default store