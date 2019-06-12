<template>
  <div class="index">
    <router-view></router-view>
    <Tabbar :tabs="tabs"></Tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabbar from '@/components/Tabbar.vue'

export default {
  data () {
    return {
      tabs: [
        { id: 1, name: '电影', icon: 'icon-mive', href: '/film' },
        { id: 2, name: '影院', icon: 'icon-cinema', href: '/cinema' },
        { id: 4, name: '我的', icon: 'icon-mine', href: '/mine' }
      ]
    }
  },
  components: {
    Tabbar
  }
}
</script>
<style lang="less" >
html,body{
  height: 100%;
}
  .index{
    // position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
