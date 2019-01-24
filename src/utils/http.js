'use strict'

import axios from 'axios'

axios.interceptors.request.use(config => {
  let token = window.localStorage.authorization;
  if (token!== 'null'&& token!== null && token !=='') {
    config.headers.authorization = `Bearer TKVgPdbuFTFZ98ROknUsmrgc1ZQdduvVw5lmqoKC_VgjlQMXzGndWvZU5VkqXeepqVTeHA5uvgrCrzxSS2n-ZwaAyftzjyxP5gwfxFfEK3UG9GJISRj3xCx2SQVWzUQ5bALgu75RwuUGQezLm2jPqcwOasCW9TNF9EMlS2608wrG8DZlv7azTWUmVc4-tb3Y0Ypg1s8Q8MI8y4zABuH5fNldraNHMg1-QlHQVKNBHC-hHC53YOGJJ97pshk6tAZSzMNcG6RcPoEwB1UmmthEyrVE6ydvtTcgbygPvMlJpCTTm5z9lzVYNvJKy1p0u00nvoA928TzmmtW18wIX-clpnFcYTRqu4iEPOS6g8-nMOc`
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  if(response===undefined){
    // router.push({
    //   path: '/401'
    // });
  }
  let authorization = response.headers.authorization;
  if(authorization){
    window.localStorage.authorization = authorization;
  }
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  console.log(response,'response')
  if(response===undefined){
    // router.push({
    //   path: '/401'
    // });
    console.log('401')
  }
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    console.log('200')
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: response.status,
    msg: '异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    // router.push({
    //   path: '/404'
    // })
  }
  if (res.status === 500) {
    // router.push({
    //   path: '/401'
    // })
  }
  return res
}

// 对axios的方法进行一层封装
export default {
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: data,
      timeout: 5000000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params,
      // 允许携带cookie
      withCredentials: true,
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
}
