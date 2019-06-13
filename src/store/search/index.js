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
    },
    //  清空搜索数据
    clear (state) {
      state.searchResult = []
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
          if (res.cinemas === undefined) {
            let arr = []
            commit('setResult', arr)
          } else {
            commit('setResult', res.cinemas.list)
          }
        })
    }
  }
}
