<template>
  <div class="cinema">
    <div class="top">
      <div class="header"><h1>影院</h1></div>
      <div class="shell">
        <div class="t_search">
          <router-link
            class="city_btn"
            tag="div"
            to="/city">
            深圳<div class="trangle"></div>
          </router-link>
          <router-link
          tag="div"
          :to="{
            path:'/search',
            query: {
              searchType: 'cinema'
            }
            }"
          class='search_btn'>
            <span class="iconfont icon-search">搜索影院</span>
          </router-link>
        </div>
      </div>
        <div class="select">
          <div>全城<span class="trangle"></span></div>|
          <div>品牌<span class="trangle"></span></div>|
          <div>特色<span class="trangle"></span></div>
        </div>
    </div>
    <cinemaList
    :cinemas="cinemas"
    :paging="paging"
    ref="list"
    @scroll="hasMore"/>
  </div>
</template>

<script>
import cinemaList from '@/components/cinemaList.vue'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'cinema',
  components: {
    cinemaList
  },
  computed: {
    ...mapState('cinema', ['paging', 'cinemas'])
  },
  methods: {
    ...mapMutations('cinema', ['clearCinema']),
    ...mapActions('cinema', ['getCinemaList']),
    //  获取更多的影院数据
    hasMore () {
      if (this.paging.hasMore) {
        let offset = this.paging.offset + 20
        this.getCinemaList(offset)
      }
    }
  },
  created () {
    this.getCinemaList()
  },
  destroyed () {
    //  退出页面，清空页面数据
    this.clearCinema()
  }
}
</script>

<style lang="less" scoped>
.cinema{
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
  .top{
    .header{
      background: #e54847;
      h1{
        color: #fff;
        height: 50px;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        line-height: 50px;
      }
    }
    //  serach
    .trangle{
          margin-right: 5px;
          border: 4px solid #b0b0b0;
          border-left-color: transparent;
          border-right-color: transparent;
          border-bottom-color: transparent;
          display: inline-block;
          margin-left: 4px;
          margin-top: 5px;
        }

    .shell{
      height: 44px;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      .t_search{
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      .city_btn{
        color: #666;
        font-size: 15px;
        width: 47px;
        padding-left: 15px;
      }
      }
      .search_btn{
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 225px;
        flex: 1;
        margin: 0  15px 0 18px;
        height: 28px;
        color: #b2b2b2;
        border: .5px solid #e6e6e6;
        border-radius: 5px;
        background: #fff;
        text-align: center;
        span{
          font-size: 13px;
        }
      }
    }

    .select{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        div{
          height:40px;
          font-size: 13px;
          flex: 1;
          color: #777;
          text-align: center;
          line-height: 40px;
        }
      }
  }

</style>
