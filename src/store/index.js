import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import cinema from './cinema'
import city from './city'
import search from './search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    cinema,
    city,
    search
  }
})
