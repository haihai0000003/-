import axios from "axios";
import { message } from 'antd';
// 创建axios实例
const service = axios.create({
  // 在请求地址前面加上baseURL
  baseURL: '/api',
  // 当发送跨域请求时携带cookie
  // withCredentials: true,
  timeout: 50000,
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 模拟指定请求令牌
    config.headers["X-Token"] = "my token";
    return config;
  },
  (error) => {
    // 请求错误的统一处理
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  /**
   * 通过判断状态码统一处理响应，根据情况修改
   * 同时也可以通过HTTP状态码判断请求结果
   */
  (response) => {
    console.log(response)
    const res = response.data;

    // 如果状态码不是20000则认为有错误
    if (res.code !== 200) {
      console.log('run')
        message.error(
        res.errMsg || "Error"
        );

      // 50008: 非法令牌; 50012: 其他客户端已登入; 50014: 令牌过期;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // 重新登录
    //     Msgbox.confirm("您已登出, 请重新登录", "确认", {
    //       confirmButtonText: "重新登录",
    //       cancelButtonText: "取消",
    //       type: "warning",
    //     }).then(() => {
    //       store.dispatch("user/resetToken").then(() => {
    //         location.reload();
    //       });
    //     });
    //   }
      return Promise.reject(new Error(res.errMsg || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    message.error({
      message: error.message,
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;