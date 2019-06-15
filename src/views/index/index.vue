<template>
  <div class="index">
    <keep-alive :include="['cinema', 'film']">
      <router-view></router-view>
    </keep-alive>
    <Tabbar :tabs="tabs"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'

export default {
  name: 'index',
  data () {
    return {
      tabs: [
        { id: 1, name: '电影', icon: 'icon-mive', href: '/film' },
        { id: 2, name: '影院', icon: 'icon-cinema', href: '/cinema' },
        { id: 4, name: '我的', icon: 'icon-mine', href: '/account' }
      ]
    }
  },
  components: {
    Tabbar
  }
}
</script>

<style lang="less">
.index{
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
