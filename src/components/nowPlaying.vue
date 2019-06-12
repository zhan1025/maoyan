// 正在上映电影列表组件

<template>
  <ul class="film-list">
    <li class="film-item" v-for="film in filmList" :key="film.id">
      <img class="film-img" :src="film.img" alt="">
      <div class="film-info">
        <h2>{{ film.nm }}</h2>
        <p v-if="film.sc">观众评<span class="grade">{{ film.sc }}</span></p>
        <p v-else><span class="grade wish">{{ film.wish }}</span>人想看</p>
        <p class="actor" v-if="film.star">主演: {{ film.star }}</p>
        <p>{{ film.showInfo }}</p>
      </div>
      <div class="buy" v-if="film.globalReleased">
        <span class="buy-btn">购票</span>
      </div>
      <div class="buy" v-else >
        <span class="buy-btn reserve">预购</span>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { Toast } from 'vant'

export default {
  name: "nowPlaying",
  props: {
    filmList: Array
  },
  computed: {
    ...mapGetters('film', ['newFilmList']),
    ...mapState('film', ['loading', 'total'])
  },
  methods: {
    ...mapActions('film', ['getFilmList',]),
    onScroll () {
      // 判断滚动条是否已经到底部
      let filmList = document.querySelector('.van-tabs__content')
      let scrollTop = filmList.scrollTop // 滚动条距离顶部的距离
      let clientHeight = filmList.clientHeight // 当前页面的可视高度
      let scrollHeight = filmList.scrollHeight // 当前页面的总高度
      if (scrollHeight - clientHeight - scrollTop <= 50 && !this.loading) {
        if (this.newFilmList.length >= this.total) {
          Toast('兄弟，到底了')
        } else {
          this.getFilmList(true)
        }
        // console.log('到底了')
      }
    }
  },
  created () {
    this.getFilmList()
    let filmList = document.querySelector('.van-tabs__content')
    filmList.addEventListener('scroll', this.onScroll)
  },
  activated () {
    console.log(111111111)
    let filmList = document.querySelector('.van-tabs__content')
    filmList.addEventListener('scroll', this.onScroll)
  },
  deactivated () {
    console.log(1111111)
    filmList.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="less">
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixin.less';

.film-list{
  .film-item{
    display: flex;
    padding: 15px;
    height: 94px;
    position: relative;
    align-items: center;
    .border-bottom;
    .film-img{
      width:64px;
    }
    .film-info{
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      color: @filmTextColor;
      font-size: 13px;
      box-sizing: border-box;
      padding-right: 60px;
      overflow: hidden;
      h2{
        font-size: 17px;
        color: #333;
        font-weight: 700;
        padding-right: 5px;
        flex-shrink: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p{
        margin-top: 6px;
        line-height: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .grade{
          margin-left: 5px;
          font-weight: 700;
          color: #faaf00;
          font-size: 15px;
        }
        .wish{
          margin: 0 5px 0 0;
        }
      }
    }
    .buy{
      font-size: 12px;
      position: absolute;
      right: 24px;
      top: 0;
      bottom: 0;
      height: 27px;
      margin: auto;
      .buy-btn{
        display: block;
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        box-sizing: border-box;
        background-color: #f03d37;
        color: #fff;
        margin-left: 6px;
        border-radius: 4px;
        white-space: nowrap;
        font-size: 12px;
        cursor: pointer;
      }
    .reserve{
      background-color: #3c9fe6
    }
    }
  }
}
</style>
