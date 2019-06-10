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
@import '//at.alicdn.com/t/font_1232452_2twax1bvjnu.css';
@import '~@/styles/common/mixin.less';

.b_bar {
  .border_top;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
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
  }
}
</style>
