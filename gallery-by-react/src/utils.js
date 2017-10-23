import axios from 'axios';
let utils = {}

utils.post = function(url, params, success) {
  axios({
    url: url,
    method: 'post',
    data: params,
    transformRequest: [function (data) {
      // Do whatever you want to transform the data 对 data 进行任意转换处理
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then( res => {
      success(res.data)
    });
}

utils.get = function(url, params, success) {
  axios({
    method: 'get',
    url: url,
    params: params
  }).then(res => {
    success(res.data)
  });
}

export default utils