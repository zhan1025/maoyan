<template>
  <ul class="b_bar">
    <router-link
    v-for="tab in tabs"
      :key="tab.id"
      :to="tab.href"
      active-class="act_c"
      tag="li">
      <i :class="['iconfont', tab.icon]"></i>
      <span>{{ tab.name }}</span>
    </router-link>
  </ul>
</template>

<script>

export default {
  name: 'Tabber',
  props: {
    tabs: Array
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/common/mixin.less';

.b_bar {
  .border_top;
  // position: fixed;
  // bottom: 0;
  width: 100%;
  display: flex;
  background: #fff;
  li{
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    height: 50px;
    color:#696969;
    &.act_c{
      color:#fd3037;
    }
    i{
      font-size: 25px;
    }
  }
}
</style>
