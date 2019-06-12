<template>
  <div class="page-city">
    <div class="city-title">
      <router-link to='/film' tag="i" class="iconfont icon-left"></router-link>
      <h5 >当前城市-</h5>
    </div>
    <div class="city-list">
      <div class="lv-indexlist">
        <clist :hotList="hotList" :newCityList="newCityList"></clist>
        <cAlphabet :indexList="indexList"> </cAlphabet>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import cAlphabet from '@/components/city/cAlphabet.vue'
import clist from '@/components/city/clist.vue'
export default {

  name: 'city',

  components: {
    cAlphabet,
    clist
  },

  computed: {
    ...mapGetters('city', ['newCityList', 'indexList', 'hotList'])
  },

  methods: {
    ...mapActions('city', ['getCityList'])
  },

  created () {
    this.getCityList()
  },
  beforeRouteEnter (to, from, next) {
    console.log(to, from)
    next()
  }
}
</script>

<style lang="less" scoped>
  @import '~@/styles/common/mixin.less';

.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.city-title{
  display: flex;
  text-align: center;
  height: 5%;
  align-items: center;
  .icon-left{
  display: block;
  height: 94%;
  width:10%;
  font-size:16px;
  line-height: 1;
  padding-top:6%;
  }
  h5{
    flex:1;
    text-align: center
  }
}

.city-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .lv-indexlist {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    background: #fff;
    overflow: hidden;
    position: relative;
    &__content {
      flex: 1;
      height: 100%;
      // overflow-y: auto;
    }
  }
}
</style>
