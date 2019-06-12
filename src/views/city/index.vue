<template>
  <div class="page-city">
    <van-nav-bar
      title="当前城市-"
      left-text="返回"
      left-arrow
    />
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
      overflow-y: auto;
    }
  }
}
</style>
