import axios from 'axios'
const baseURL = 'http://localhost:8888/api/private/v1/'
// defaults 默认值  注意要加s  不能改 axios.defaults.baseURL
axios.defaults.baseURL = baseURL
// 实现用户登陆验证
export const login = (params) => {
  return axios.post('login', params).then((res) => {
    return res.data
  })
}

// // const 常量
// import axios from 'axios'
// // 基准路径:我们的请求就是路由名称，但是这个路由要基于服务器，设置基准路径的目的就是能够先找到对应的服务器，再匹配它里面设置的路由
// const baseURL = 'http://localhost:8888/api/private/v1/'

// axios.defaults.baseURL = baseURL

// // 实现用户登录
// export const login = (params) => {
//   return axios.post('login', params).then((res) => {
//     return res.data
//   })
// }
