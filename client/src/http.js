import axios              from 'axios';
import {Message, Loading} from 'element-ui';

let loading;

function startLoading () {
  loading = Loading.service({
    lock      : true,
    text      : 'please wait for seconds',
    background: 'rgba(0,0,0,0.7)',
  });

}

function endLoading () {
  loading.close();
}

// 请求拦截
axios.interceptors.request.use(req => {
  // 加载动画
  console.log(`\x1b[1m${'请求'}\x1b[0m`);
  startLoading();
  return req;
}, err => {
  return Promise.reject(err);
});

// 响应拦截
axios.interceptors.response.use(response => {
  // 加载动画
  console.log(`\x1b[1m${'响应'}\x1b[0m`);
  endLoading();
  return response;
}, err => {
  // 错误提醒
  endLoading();
  Message.error(err.response.data);
  return Promise.reject(err);
});

export default axios;
