// import http from '@/utils/http'
import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    filmList: [], // 影片数据
    movieIds: [], // 影片请求数据的id
    curFilmType: 0, // 当前影片类型，0为正在热映，1位即将上映
    total: 13, // 请求电影列表的总数
    pageNum: 1, // 当前显示的页码数
    pageSize: 10, // 每页显示的条数
    loading: false, // 判断数据是否在请求 true 为请求中 false 不在请求
    // 即将上映的数据
    popular: [] // 最受欢迎的影片数据
  },
  getters: {
    // 处理数据图片地址
    newFilmList (state) {
      state.filmList.forEach(item => {
        let str = item.img.replace('w.h', '120.180')
        item.img = str
      })
      return state.filmList
    }
  },
  mutations: {
    // 设置filmList 数据
    SETFILMLIST (state, list) {
      state.filmList = list
    },
    SETMOVIEIDS (state, list) {
      state.movieIds = list
    },
    // 设置影片类型
    SETCURFILMTYPE (state, value) {
      state.curFilmType = value
    },
    // 设置页码++, isReset再判断是否切换影片类型
    SETPAGENUM (state, isReset) {
      if (isReset) {
        state.pageNum = 1
      } else {
        state.pageNum += 1
      }
    },
    // 设置是否数据在请求中
    SETLOADING (state, boolean) {
      state.loading = boolean
    },
    // 设置电影列表的总数
    SETTOTAL (state, total) {
      state.total = total
    },
    // 设置最受欢迎的影片列表数据
    SETPOPULAR (state, list) {
      state.popular = list
    }
  },
  actions: {
    getFilmList ({ commit, state }, isLoadMore) {
      commit('SETLOADING', true)
      Toast.loading({
        mask: false,
        duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
        message: '玩命加载中...'
      })
      let arr = state.movieIds.slice(12 + (state.pageNum - 2) * state.pageSize, 12 + (state.pageNum - 1) * state.pageSize)
      let obj = arr.join(',')
      if (isLoadMore) {
        axios.get('http://localhost:9090/ajax/moreComingList', {
          params: {
            token: '',
            movieIds: obj
          }
        }).then(res => {
          let newList = [ ...state.filmList, ...res.data.coming ]
          commit('SETFILMLIST', newList)
          commit('SETPAGENUM')
          commit('SETLOADING', false)
          Toast.clear()
        })
      } else {
        axios.get('http://localhost:9090/ajax/movieOnInfoList?token=')
          .then(response => {
            let res = response.data
            commit('SETFILMLIST', res.movieList)
            // 请求完成 设置loading为false
            commit('SETLOADING', false)
            // 设置页码
            commit('SETPAGENUM')
            // 设置最多请求电影列表的总数
            commit('SETTOTAL', res.total)
            // 设置请求带过去的电影id
            commit('SETMOVIEIDS', res.movieIds)
            Toast.clear()
          })
      }
    }
  }
}
