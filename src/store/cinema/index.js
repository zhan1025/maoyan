//  影院列表
import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {

  },
  mutations: {

  },
  actions: {
    getCinemaList ({ commit }) {
      Toast.loading({
        duration: 0,
        message: '加载中...'
      })
      axios.get('http://localhost:9090/ajax/movieOnInfoList?token=').then(res => {
        console.log(res.data)
        Toast.clear()
      })
    }
  }
}
