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
        { id: 1, name: '电影', icon: 'iconfont icon-mive', href: '/film' },
        { id: 2, name: '影院', icon: 'iconfont icon-cinema', href: '/cinema' },
        { id: 4, name: '我的', icon: 'iconfont icon-mine', href: '/mine' }
      ]
    }
  },
  components: {
    Tabbar
  }
}
</script>
