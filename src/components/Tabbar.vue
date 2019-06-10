<template>
  <van-tabbar v-model="active" active-color="#FF5F16" route>
    <van-tabbar-item
    v-for="tab in tabs"
    :key="tab.id"
    :class="tab.icon"
    :to="tab.href"
    >{{tab.name}}</van-tabbar-item>
  </van-tabbar>
</template>

<script>

export default {
  props: {
    tabs: Array
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>

@import '//at.alicdn.com/t/font_1232452_2twax1bvjnu.css';

</style>
