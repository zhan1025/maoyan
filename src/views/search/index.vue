<template>
  <div class="search">
    <div class="header">
      <button
      @click="abolish"
      ><div></div></button>
      <div class="title">猫眼电影</div>
    </div>
    <div class="search_bar">
      <div class="bar">
        <span class="iconfont icon-search"></span>
        <input
        type="search"
        placeholder="搜影院"
        v-model.trim="kw"
        ref="search"
        >
        <!-- <i class="x" v-if="kw.length" @click="clear_input">x</i> -->
      </div>
      <div
      class="abolish"
      @click="abolish"
      >取消</div>
    </div>
    <div class="content" v-if="searchResult.length" ref="content">
      <h1>影院</h1>
      <div class="Result">
        <router-link
        tag="div"
        class="items"
        v-for="item in searchResult"
        :key="item.id"
        to='/film'>
          <div class="title line_ellipsis">
            {{item.nm}}
            <span class="price">
              {{item.sellPrice}}
              <i>元起</i>
            </span>
          </div>
          <div class="addr">
            <div class="line_ellipsis">{{item.addr}} </div>
            <span class="distance">{{item.distance}}</span>
          </div>
          <div class="tags">
            <span class="tui">座</span>
            <span class="tui"
            v-for="hall in item.hallType"
            :key="hall">
            {{hall}}
            </span>
            <span class="tui" v-if="item.allowRefund">退</span>
            <span class="tui" v-if="item.endorse">改签</span>
            <span class="snack" v-if="item.snack">小吃</span>
            <span class="snack" v-if="item.vipTag">折扣卡</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="nothing" v-if="show">
      <img src="@/assets/nothing.png" alt="">
      <p>没有找到相关影院</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'serach',
  data () {
    return {
      kw: '',
      show: false
    }
  },

  computed: {
    ...mapState('search', ['searchResult'])
  },

  //  监听用户输入的内容，并发送请求
  watch: {
    kw (newVal, oldVal) {
      if (!newVal || newVal.length === 0) {
        //  当输入框的内容为空时清空，搜索记录
        this.clear()
      }
      clearTimeout(this.timer)
      if (newVal.length !== 0) {
        this.timer = setTimeout(() => {
          this.searchCinema(newVal)
        }, 100)
      }
    },
    searchResult (newVal, oldVal) {
      if (newVal.length === 0) {
        // 搜索不到数据显示，显示没有数据dom
        this.show = true
        if (this.kw.length === 0) {
          this.show = false
        }
      } else {
        this.show = false
      }
    }
  },

  methods: {
    ...mapMutations('search', ['clear']),
    ...mapActions('search', ['searchCinema']),
    // 取消，返回上一页
    abolish () {
      this.$router.back()
    }
    // `//  点击清除input内容，并写入localstorage
    // clear_input () {
    //   this.$refs.search.value = ''
    // }`
  },

  destroyed () {
    this.clear()
  }
}
</script>

<style lang="less" scoped>
.search{
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #f5f5f5;
  .header{
      background: #e54847;
      flex: 0 1 auto;
      display: flex;
      height: 50px;
      button{
      display: flex;
      justify-content: center;
      min-width:20px;
      border: 0;
      background-color: transparent;
      padding: 10px;
      div{
        width: 20px;
        height: 20px;
        border-bottom:2px solid #fff;
        border-left: 2px solid #fff;
        border-radius:3px;
        transform: rotate(45deg);
      }
      }
      .title{
        color: #fff;
        height: 50px;
        margin-right: 50px;
        flex: 1;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        line-height: 50px;
      }
    }
  .nothing{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      img{
      width: 87px;
      height: 100px;
      margin-bottom: 16px;
      }
    p{
      color:#999;
      font-size: 16px;
    }
  }
  .search_bar{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    flex: 0 1 auto;
    box-sizing: border-box;
    height: 47px;
    padding: 8px 0 8px 10px;
    .bar{
      display: flex;
      flex: 1;
      align-items: center;
      width: 332px;
      height: 30px;
      padding: 0 10px;
      background-color: #fff;
      border-radius: 5px;
      color: #777;
      .x{
        display: inline-block;
        width: 20px;
        height: 20px;
        color: #000;
        border-radius: 50%;
        line-height:16px;
        text-align: center;
        background: rgba(0,0,0,.3);
      }
      span{
        margin-right: 6px;
      }
      input{
        padding: 4px 0;
        border: 0;
        width: 100%;
        font-size: 15px;
      }
    }
    .abolish{
      color:#f03d37;
      font-size: 16px;
      width: 50px;
      text-align: center;
    }
  }
  .content{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    background: #fff;
    h1{
      font-size: 15px;
      display: block;
      height: 20px;
      line-height: 20px;
      color: #999;
      padding: 9px 15px;
      border-bottom: 1px solid #ccc;
      }
    .Result{
      .items{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 382px;
        padding: 13px 15px 13px  0;
        margin-left: 16px;
        border-bottom: 1px solid #e8e8e8;
        div{
          margin-top: 7px;
        }
        .price{
          color:#f03d37;
          font-size: 18px;
          i{
            font-size: 12px;
          }
        }
        .addr{
          display: flex;
          font-size: 13px;
          color: #666;
          align-content: center;
          justify-content: space-between;
          div{
            min-width: 270px;
            }
          .distance{
            flex: 0 1;
            right: 15px;
          }
        }
        .tags{
          span{
            display: inline-block;
            font-size:12px;
            padding: 2px;
            margin-left: 2px;
            border-radius: 2px;
          }
          .tui{
            color:#589DAF;
            border: 1px solid #589DAF;
          }
          .snack{
            color: #FF9900;
            border: 1px solid #FF9900;
          }
        }
      }
    }
  }
}
</style>
