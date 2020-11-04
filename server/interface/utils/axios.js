import axios from "axios";
const instance = axios.create({
  baseURL: `http://${process.env.HOST || "localhost"}:${process.env.PORT ||
    3000}`,
  timeout: 1000,
  headers: {}
});

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default instance;
