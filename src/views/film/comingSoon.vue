// 即将上映电影列表组件
<template>
<div class="coming-soon">
  <div class="film-expected">
    <div class="expected">
      <p class="title">近期最受期待</p>
      <ul class="expected-list">
        <li class="expected-item" v-for="item in popularList" :key="item.id">
          <img class="popular-img" :src="item.img" alt="">
          <h5 class="popular-name">{{item.nm}}</h5>
          <p class="popular-day">{{item.comingTitle}}</p>
        </li>
      </ul>
    </div>
    <ul>
      <li v-for="item in expectedList" :key="item.day">
        <p class="group-date">{{ item.day }}</p>
        <ul class="film-list">
          <li class="film-item" v-for="movie in item.movies" :key="movie.id">
            <img class="film-img" :src="movie.img" alt="">
            <div class="film-info">
              <h2>{{ movie.nm }}</h2>
              <p v-if="movie.sc">观众评<span class="grade">{{ movie.sc }}</span></p>
              <p v-else><span class="grade wish">{{ movie.wish }}</span>人想看</p>
              <p class="actor" v-if="movie.star">主演: {{ movie.star }}</p>
              <p>{{ movie.showInfo }}</p>
            </div>
            <div class="buy" v-if="movie.showst === 4">
              <span class="buy-btn reserve">预购</span>
            </div>
            <div class="buy" v-else >
              <span class="buy-btn want">想看</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'comingSoon',
  props: {
    popularList: Array,
    expectedList: Array
  },
  computed: {
    ...mapState('film', ['loading', 'popularPaging', 'expectedMovieIds'])
  },
  methods: {
    ...mapActions('film', [ 'getPopularList', 'getExpectedList' ]),
    // 监听最受欢迎的滚动条事件
    onPopularScroll () {
      let popularList = document.querySelector('.expected-list')
      let scrollWidth = popularList.scrollWidth // 页面总宽度
      let scrollLeft = popularList.scrollLeft // 滚动条距离左边的距离
      let clientWidth = popularList.clientWidth // ul 的可视宽度
      if (scrollWidth - clientWidth - scrollLeft <= 50 && !this.loading) {
        this.getPopularList(true)
      }
    },
    // 监听竖向滚动条
    onExpectedScroll () {
      // 判断滚动条是否已经到底部
      let filmList = document.querySelector('.film-expected')
      let scrollTop = filmList.scrollTop // 滚动条距离顶部的距离
      let clientHeight = filmList.clientHeight // 当前页面的可视高度
      let scrollHeight = filmList.scrollHeight // 当前页面的总高度
      if (scrollHeight - clientHeight - scrollTop <= 50 && !this.loading) {
        this.getExpectedList(true)
      }
      // console.log('到底了')
    }
  },
  created () {
    this.getPopularList()
    this.getExpectedList()
  },
  mounted () {
    this.popularListEl = document.querySelector('.expected-list')
    this.filmExpectedEl = document.querySelector('.film-expected')
  },
  // 该组件激活监听滚动条
  activated () {
    this.popularListEl.addEventListener('scroll', this.onPopularScroll)
    this.filmExpectedEl.addEventListener('scroll', this.onExpectedScroll)
  },
  // 该组件失活清除监听滚动条事件
  deactivated () {
    this.popularListEl.removeEventListener('scroll', this.onPopularScroll)
    this.filmExpectedEl.removeEventListener('scroll', this.onExpectedScroll)
  }
}
</script>

<style lang="less">
.group-date{
  padding: 12px 15px 0;
  margin: 0;
  font-size: 14px;
  color: #333;
}
.expected{
  width: 100%;
  box-sizing: border-box;
  padding: 12px 30px 12px 15px;
  background-color: #fff;
  margin-bottom: 10px;
  overflow: hidden;
  .title{
    margin: 0 0 12px;
    font-size: 14px;
    color: #333;
  }
  .expected-list{
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    .expected-item{
      width: 85px;
      line-height: 16px;
      margin-right: 10px;
      .popular-img{
        width: 85px;
        height: 115px;
      }
      .popular-name{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 0 3px;
        font-size: 13px;
        color: #222;
        font-weight: 900;
      }
      .popular-day{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
        font-size: 12px;
        color: #999;
      }
    }
  }

}
</style>
