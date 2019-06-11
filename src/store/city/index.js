import axios from 'axios'
import {Toast} from 'vant'

export default{
  namespaced:true,

  state:{
    citylist:[]
  },
  getters:{
    newCityList(state){
      let hash={}
      let result=[]
      let index=0
      state.citylist.forEach(city=>{
        let py=city.pinyin.charAt(0).toUpperCase()
        if(hash[py]){
          result[hash[py]-1].list.push(city)
        }else{
          let obj={
            py:py,
            list:[city]
          }
          hash[py] = ++index
          return result.push(obj)
        }
      })
      return result.sort((a,b)=>a.py.charCodeAt()-b.py.charCodeAt())
    },

    indexList(state,getters){
      return getters.newCityList.map(item=>item.py)
    },

    hotList(state){
      return state.citylist.filter(item=>item.isHot)
    }




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