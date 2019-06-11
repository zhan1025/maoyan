<template>
  <div class="page-film">
    <header class="navbar">
      <h1 class="nav-header">
        猫眼电影
      </h1>
    </header>
    <van-tabs v-model="active" animated>
      <van-tab title="正在热映">
        <nowPlaying :filmList="newFilmList" />
      </van-tab>
      <van-tab title="即将上映">
        <comingSoon />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import nowPlaying from '@/components/nowPlaying.vue'
import comingSoon from '@/components/comingSoon.vue'
import { Toast } from 'vant'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    nowPlaying,
    comingSoon
  },
  computed: {
    ...mapState('film', ['loading', 'total', 'filmList']),
    ...mapGetters('film', ['newFilmList'])
  },
  methods: {
    ...mapActions('film', ['getFilmList']),
    onScroll () {
      // 判断滚动条是否已经到底部
      let filmList = document.querySelector('.van-tabs__content')
      let scrollTop = filmList.scrollTop // 滚动条距离顶部的距离
      let clientHeight = filmList.clientHeight // 当前页面的可视高度
      let scrollHeight = filmList.scrollHeight // 当前页面的总高度
      if (scrollHeight - clientHeight - scrollTop <= 50) {
        if (!this.loading) {
          if (this.newFilmList.length >= this.total) {
            Toast('兄弟，到底了')
          } else {
            this.getFilmList(true)
          }
        }
        // console.log('到底了')
      }
    }
  },
  created () {
    this.getFilmList()
    // console.log(this.filmList)
  },
  mounted () {
    let filmList = document.querySelector('.van-tabs__content')
    filmList.addEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="less">
.page-film{
  flex: 1;
  overflow: hidden;
  // position: fixed;
  padding-bottom: 100px;
  .navbar{
    // position: fixed;
    // top: 0;
    height: 50px;
    width: 100%;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    .nav-header{
      display: block;
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      line-height: 50px;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .van-tabs--line {
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .van-tabs__content {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
