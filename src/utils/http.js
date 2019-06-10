import axios from 'axios'
//  创建一个axios的实例对象
const http = axios.create()

//  设置基准url
http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://m.maoyan.com/ajax/' : 'http://m.maoyan.com/ajax/'

http.defaults.timeout = 10000

http.interceptors.response.use(response => {
  let res = response.data
  if (res.status === 0) {
    return res
  }
})
export default http
