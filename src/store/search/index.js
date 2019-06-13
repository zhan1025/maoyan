import axios from 'axios'

export default {
  namespaced: 'search',
  state: {
    searchResult: []
  },
  mutations: {
    //  设置搜索结果
    setResult (state, payload) {
      state.searchResult = payload
    }
  },
  actions: {
    searchCinema ({ commit }, kw) {
      axios.get('http://localhost:9090/ajax/search', {
        params: {
          kw: kw,
          cityId: 30,
          stype: 2
        }
      })
        .then(res => res.data)
        .then(res => {
          if (res) {
            commit('setResult', res)
          } else {
            commit('setResult', res.cinemas.list)
          }
        })
    }
  }
}
