<template>
  <div class="page-film">
    <header class="navbar">
      <h1 class="nav-header">
        猫眼电影
      </h1>
    </header>
    <van-tabs
    v-model="active"
    animated
    >
      <van-tab title="正在热映">
        <nowPlaying :filmList="newFilmList" />
      </van-tab>
      <van-tab title="即将上映">
        <comingSoon :popularList="newPopularList" :expectedList="newExpectedList" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import nowPlaying from '@/components/nowPlaying.vue'
import comingSoon from '@/components/comingSoon.vue'

export default {
  data () {
    return {
      active: 0
    }
  },
  watch: {
    active (newVal, oldVal) {
      this.filmTypeChange(newVal)
    }
  },
  components: {
    nowPlaying,
    comingSoon
  },
  computed: {
    ...mapGetters('film', ['newFilmList', 'newPopularList', 'newExpectedList'])
  },
  methods: {
    ...mapMutations('film', ['SETPAGENUM']),
    ...mapActions('film', ['filmTypeChange'])
  },
  beforeDestroy () {
    this.SETPAGENUM(true)
  }
}
</script>

<style lang="less">
.page-film{
  flex: 1;
  overflow: hidden;
  // position: fixed;
  padding-bottom: 50px;
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
