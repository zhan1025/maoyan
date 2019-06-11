import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/base.less'

//  全局导入插件，可改，局部导入
import { Tabbar, TabbarItem,NavBar,Tab, Tabs } from 'vant'

//  导入了所用插件的所有css，可改，按需导入
import 'vant/lib/index.css'

Vue
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
