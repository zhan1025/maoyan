// 正在上映电影列表组件

<template>
<div class="now-playing">
  <ul class="film-list">
    <router-link
    class="film-item"
    v-for="film in filmList"
    :key="film.id"
    tag="li"
    :to="{
      name: 'detail',
      params: {
        id: film.id
      }
    }"
    >
      <img class="film-img" :src="film.img" alt="">
      <div class="film-info">
        <h2>{{ film.nm }}</h2>
        <p class="score" v-if="film.sc">观众评<span class="grade">{{ film.sc }}</span></p>
        <p class="score" v-else><span class="grade wish">{{ film.wish }}</span>人想看</p>
        <p class="actor" v-if="film.star">主演: {{ film.star }}</p>
        <p>{{ film.showInfo }}</p>
      </div>
      <div class="buy" v-if="film.globalReleased">
        <span class="buy-btn">购票</span>
      </div>
      <div class="buy" v-else >
        <span class="buy-btn reserve">预购</span>
      </div>
    </router-link>
  </ul>
</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { Toast } from 'vant'

export default {
  name: 'nowPlaying',
  props: {
    filmList: Array
  },
  computed: {
    ...mapGetters('film', ['newFilmList']),
    ...mapState('film', ['loading', 'total'])
  },
  methods: {
    ...mapActions('film', ['getFilmList']),
    // 滚动条监听事件
    onScroll () {
      // 判断滚动条是否已经到底部
      // this.filmListEl = document.querySelector('.van-tabs__content')
      let scrollTop = this.filmListEl.scrollTop // 滚动条距离顶部的距离
      let clientHeight = this.filmListEl.clientHeight // 当前页面的可视高度
      let scrollHeight = this.filmListEl.scrollHeight // 当前页面的总高度
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
  },
  // 该组件激活监听滚动条
  activated () {
    this.filmListEl = document.querySelector('.film-list')
    this.filmListEl.addEventListener('scroll', this.onScroll)
  },
  // 该组件失活清除监听滚动条事件
  deactivated () {
    this.filmListEl.removeEventListener('scroll', this.onScroll)
  }
}
</script>
