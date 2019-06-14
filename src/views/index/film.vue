<template>
  <div class="page-film">
    <header class="navbar">
      <h1 class="nav-header">
        猫眼电影
      </h1>
    </header>
    <div class="topbar">
      <router-link to="/city" class="city-entry" tag="div">
        深圳
        <span class="trangle"></span>
      </router-link>
      <div class="switch-hot">
        <router-link tag="div" active-class="tab-active" class="hot-item" :abc="active" to="/film/now">正在热映
        </router-link>
        <router-link tag="div" active-class="tab-active" class="hot-item" :abc="active" to="/film/coming">即将上映
        </router-link>
      </div>
      <router-link
      tag="div"
      :to="{
        path: '/search',
        query: {
          searchtype: 'movie'
        }
      }"
      class="search-entry iconfont icon-search"
      ></router-link>
    </div>
    <keep-alive include="nowPlaying,comingSoon">
      <router-view
      :filmList="newFilmList"
      :popularList="newPopularList"
      :expectedList="newExpectedList"
      ></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'film',
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
  computed: {
    ...mapState('film', ['loading', 'total']),
    ...mapGetters('film', ['newFilmList', 'newPopularList', 'newExpectedList'])
  },
  methods: {
    ...mapMutations('film', ['SETPAGENUM'])
    // ...mapActions('film', ['getFilmList','filmTypeChange', 'getPopularList', 'getExpectedList']),
  },
  // created () {
  //   this.getFilmList()
  //   this.getPopularList()
  //   this.getExpectedList()
  // },
  beforeDestroy () {
    this.SETPAGENUM(true)
  }
}
</script>

<style lang="less">
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixin.less';

.page-film{
  flex: 1;
  overflow: hidden;
  padding-bottom: 50px;
  .navbar{
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
  .topbar{
    .border-bottom;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .city-entry{
      padding-left: 15px;
      font-size: 15px;
      color: #666;
      display: flex;
      align-items: center;
      cursor: pointer;
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
    }
    .switch-hot{
      display: flex;
      height: 44px;
      line-height: 44px;
      cursor: pointer;
      position: relative;
      .hot-item{
        font-size: 15px;
        color: #666;
        width: 80px;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
        box-sizing: border-box;
      }
      .tab-active{
        border-bottom: 3px solid red;
      }
    }
    .search-entry{
      width: 20px;
      height: 20px;
      font-size: 24px;
      font-weight: 900;
      color: red;
      background-size: 20px;
      padding: 10px 15px 10px 10px;
      cursor: pointer;
    }
  }
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
      .want{
        background: #faaf00;
      }
      }
    }
  }
  .now-playing, .coming-soon {
    flex: 1;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
  }

  .film-list, .film-expected {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
