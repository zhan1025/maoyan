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
        <input type="search" placeholder="搜影院" v-model.trim="kw">
      </div>
      <div
      class="abolish"
      @click="abolish"
      >取消</div>
    </div>
    <div class="content">
      <h1 v-if="searchResult">没有数据{{searchResult}}</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'serach',
  data () {
    return {
      kw: '',
      back: ''
    }
  },
  computed: {
    ...mapState('search', ['searchResult'])
  },
  watch: {
    kw (newVal, oldVal) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.searchCinema(newVal)
      }, 100)
    }
  },
  methods: {
    ...mapActions('search', ['searchCinema']),
    abolish () {
      this.$router.back()
    }
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
      align-items: center;
      width: 332px;
      height: 30px;
      padding: 0 10px;
      background-color: #fff;
      border-radius: 5px;
      color: #777;
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
      flex: 1;
      text-align: center;
    }
  }
  .content{
  flex: 1;
  display: flex;
  }
}
</style>
