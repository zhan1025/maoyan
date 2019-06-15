// import http from '@/utils/http'
import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    filmList: [], // 正在热映影片数据
    movieIds: [], // 正在热映影片请求数据的id
    total: 13, // 请求电影列表的总数
    pageNum: 1, // 当前显示的页码数
    pageSize: 10, // 每页显示的条数
    loading: false, // 判断数据是否在请求 true 为请求中 false 不在请求
    // 即将上映的数据
    popularList: [], // 最受欢迎的影片数据
    popularPaging: {}, // 最受欢迎影片请求数据的参数
    expectedList: [], // 预售影片数据
    expectNum: 1, // 预售影片的页码数
    expectedMovieIds: [], // 预售影片请求数据的id
    movieDetail: {} // 电影详情数据
  },
  getters: {
    // 处理数据图片地址
    newFilmList (state) {
      state.filmList.forEach(item => {
        let str = item.img.replace('w.h', '120.180')
        item.img = str
      })
      return state.filmList
    },
    // 处理受欢迎的图片数据
    newPopularList (state) {
      state.popularList.forEach(item => {
        let str = item.img.replace('w.h', '120.180')
        item.img = str
      })
      return state.popularList
    },
    // 处理预售电影的图片,和上映日期数据
    newExpectedList (state) {
      let index = 0 // 下标
      let hash = {} // 循环电影列表的时候，判断该上映日期有没有创建
      let result = [] // 得到最后想要的数据
      state.expectedList.forEach(item => {
        let str = item.img.replace('w.h', '120.180')
        item.img = str
        let day = item.comingTitle // 拿到该电影上映的日期时间
        if (hash[day]) {
          result[ hash[day] - 1 ].movies.push(item)
        } else {
          // hash: {item.comingTitel: 1, item.comingTitel: 2}
          hash[day] = ++index
          // obj {day: item.comingTitel, mocies: {}}
          let obj = {
            day: day,
            movies: [item]
          }
          // 再将构建好的数据添加到 result 里面
          result.push(obj)
        }
      })
      return result
    }
    // 处理详情页电影数据
    // newMovieDetail (state) {
    //   return {
    //     ...state.movieDetail,
    //     img: state.movieDetail.img.replace('w.h', '120.180')
    //   }
    // }
  },
  mutations: {
    // 设置filmList 数据
    SETFILMLIST (state, list) {
      state.filmList = list
    },
    // 设置正在热映中请求电影数据列表的id
    SETMOVIEIDS (state, list) {
      state.movieIds = list
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
    // 设置最受期待的影片列表数据
    SETPOPULARLIST (state, list) {
      state.popularList = list
    },
    // 设置最受期待请求电影列表数据的id
    SETPOPULARLPAGING (state, list) {
      list.offset = 10 + list.offset
      state.popularPaging = list
    },
    // 清空最受期待的页码
    SETOFFSET (state) {
      state.popularPaging.offset = 0
    },
    // 设置预售影片数据
    SETEXPECTEDLIST (state, list) {
      state.expectedList = list
    },
    // 设置预售影片请求数据的id
    SEREXPECTEDMOVIESID (state, list) {
      state.expectedMovieIds = list
    },
    // 设置预售影片的页码数
    SETEXPECTEDNUM (state, isReset) {
      if (isReset) {
        state.expectNum = 1
      } else {
        state.expectNum += 1
      }
    },
    // 设置电影详情数据
    SETMOVIEDETAIL (state, list) {
      state.movieDetail = list
    }
  },
  actions: {
    // 获取正在热映影片数据
    getFilmList ({ commit, state }, isLoadMore) {
      commit('SETLOADING', true)
      Toast.loading({
        duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
        message: '玩命加载中...'
      })
      let arr = state.movieIds.slice(12 + (state.pageNum - 2) * state.pageSize, 12 + (state.pageNum - 1) * state.pageSize)
      let obj = arr.join(',')
      if (isLoadMore) {
        if (arr.length > 0) {
          axios.get('/my/ajax/moreComingList', {
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
          Toast('兄弟，到底了')
          commit('SETLOADING', false)
        }
      } else {
        axios.get('/my/ajax/movieOnInfoList?token=')
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
    },
    // 获取最受期待的影片数据
    getPopularList ({ commit, state }, isLoadMore) {
      commit('SETLOADING', true)
      if (state.popularPaging.hasMore) {
        axios.get('/my/ajax/mostExpected', {
          params: {
            ci: 30,
            limit: 10,
            offset: state.popularPaging.offset,
            token: ''
          }
        }).then(response => {
          let res = response.data
          let newPopularList = [ ...state.popularList, ...res.coming ]
          commit('SETPOPULARLIST', newPopularList)
          commit('SETPOPULARLPAGING', res.paging)
          commit('SETLOADING', false)
        })
      } else if (!isLoadMore) {
        axios.get('/my/ajax/mostExpected?ci=30&limit=10&offset=0&token=')
          .then(response => {
            let res = response.data
            commit('SETPOPULARLIST', res.coming)
            commit('SETPOPULARLPAGING', res.paging)
            commit('SETLOADING', false)
          })
      }
    },
    // 获取预售影片的数据
    getExpectedList ({ commit, state }, isLoadMore) {
      commit('SETLOADING', true)
      Toast.loading({
        duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
        message: '玩命加载中...'
      })
      let arr = state.expectedMovieIds.slice((state.expectNum - 1) * state.pageSize, state.expectNum * state.pageSize)
      let obj = arr.join(',')
      if (isLoadMore) {
        if (arr.length > 0) {
          axios.get('/my/ajax/moreComingList', {
            params: {
              ci: 30,
              token: '',
              limit: 10,
              movieIds: obj
            }
          }).then(res => {
            let newList = [ ...state.expectedList, ...res.data.coming ]
            commit('SETEXPECTEDLIST', newList)
            commit('SETEXPECTEDNUM')
            commit('SETLOADING', false)
            Toast.clear()
          })
        } else {
          Toast('你看个电影还想两年后看吗')
          commit('SETLOADING', false)
        }
      } else {
        axios.get('/my/ajax/comingList?ci=30&token=&limit=10')
          .then(response => {
            let res = response.data
            commit('SETEXPECTEDLIST', res.coming)
            // 请求完成 设置loading为false
            commit('SETLOADING', false)
            // 设置页码
            commit('SETEXPECTEDNUM')
            // 设置最多请求电影列表的总数
            commit('SETTOTAL', res.total)
            // 设置请求带过去的电影id
            commit('SEREXPECTEDMOVIESID', res.movieIds)
            Toast.clear()
          })
      }
    },
    // 获取详情页电影的数据
    getMovieDetail ({ commit }, movieId) {
      commit('SETLOADING', true)
      Toast.loading({
        duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
        message: '玩命加载中...'
      })
      axios.get('/my/ajax/detailmovie', {
        params: {
          movieId: movieId
        }
      }).then(res => {
        Toast.clear()
        let newMovie = {
          ...res.data.detailMovie,
          img: res.data.detailMovie.img.replace('w.h', '120.180')
        }
        commit('SETLOADING', false)
        commit('SETMOVIEDETAIL', newMovie)
      })
    }
    // 影片类型切换
    // filmTypeChange ({ commit, dispatch }, index) {
    //   if (index === 0) {
    //     // 先清空旧的影片数据
    //     commit('SETPOPULARLIST', [])
    //     commit('SETEXPECTEDLIST', [])
    //     // 还要清空一下页码数
    //     commit('SETPAGENUM', true)
    //     // 清空最受期待数据里面的 offset
    //     commit('SETOFFSET')
    //     // 再获取正在热映数据
    //     dispatch('getFilmList')
    //   } else if (index === 1) {
    //     // 先清空旧的影片数据
    //     commit('SETFILMLIST', [])
    //     // 还要清空一下页码数
    //     commit('SETPAGENUM', true)
    //     // 清空最受期待数据里面的 offset
    //     commit('SETOFFSET')
    //     // 再获取正在即将上映数据和最受期待数据
    //     dispatch('getPopularList')
    //     dispatch('getExpectedList')
    //   }
    // }
  }
}
