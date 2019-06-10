import axios from 'axios'
import {Toast} from 'vant'

export default{
  namespaced:true,

  state:{
    citylist:[]
  },
  mutations:{
    setCityList(state,list){
      state.citylist=list
    }
  },

  actions:{
    getCityList({commit}){
      Toast.loading({
        duration:0,
        message:'玩命加载中...'
      })
      axios.get('https://m.maizuo.com/gateway?k=3386309',{
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15593007414398046512692"}',
          'X-Host':'mall.film-ticket.city.list'
        }
      }).then(res=>res.data)
      .then(response=>{
        commit('setCityList',response.data.cities)
        Toast.clear()
      })
    }
  }




}