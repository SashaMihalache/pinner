import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import { mutations } from './mutations'
import * as getters from './getters'
import hello from './modules/hello'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters,
  actions,
  mutations,
  modules: {
    hello
  }
})

export default store
