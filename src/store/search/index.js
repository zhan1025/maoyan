import axios from 'axios'

export default {
  namespaced: 'search',
  state: {
    searchResult: {}
  },
  mutations: {
    //  设置搜索结果
    setResult (state, payload) {
      state.searchResult = payload
    },
    //  清空搜索数据
    clear (state) {
      state.searchResult = {}
    }
  },
  actions: {
    searchCinema ({ commit }, payload) {
      axios.get('http://localhost:9090/ajax/search', {
        params: {
          kw: payload.newVal,
          cityId: 30,
          stype: payload.type === 'cinema' ? 2 : -1
        }
      })
        .then(res => {
          commit('setResult', res.data)
        })
    }
  }
}
