//  影院列表
import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    cinemas: [],
    paging: {}, // 存储影院总数，hasmore，当前请求条数offset
    loading: true
  },
  mutations: {
    //  影院列表
    setCinemas (state, list) {
      state.cinemas = list
    },
    //  设置是否请求更多
    setPaging (state, list) {
      state.paging = list
    },
    //  设置请求状态
    loading (state, bol) {
      state.loading = bol
    },
    //  清空影院数据，防止相同请求数据重复
    clearCinema (state) {
      state.cinemas = []
    }
  },
  actions: {
    getCinemaList ({ commit, state }, offset) {
      if (state.loading) { // 不允在请求未完成时再次请求
        commit('loading', false)
        Toast.loading({
          duration: 0,
          message: '玩命加载中...'
        })
        axios.get('http://localhost:9090/ajax/cinemaList', {
          params: {
            day: '2019-06-12',
            offset: offset || 0,
            limit: 20,
            districtId: -1,
            lineId: -1,
            hallType: -1,
            brandId: -1,
            serviceId: -1,
            areaId: -1,
            stationId: -1,
            updateShowDay: true,
            reqId: 1560175168481,
            cityId: 30
          }
        })
          .then(res => {
            return res.data
          })
          .then(res => {
            //  如果请求是获取更多，填充影院地址列表数组
            if (state.paging.hasMore) {
              let newList = [...state.cinemas, ...res.cinemas]
              commit('setCinemas', newList)
            } else {
              // 替换设置影院地址列表
              commit('setCinemas', res.cinemas)
            }
            commit('setPaging', res.paging)// 设置请求判断参数
            commit('loading', true)
            console.log(res)
            Toast.clear()
          })
      }
    }
  }
}
