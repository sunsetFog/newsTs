// service统一出口
import InRequest from './Axios';
import { BASE_URL, TIME_OUT } from './config'; // 进行导入环境配置变量的使用；

const defHttp= new InRequest({
  baseURL: BASE_URL, //
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
    //   const token = '';
    //   if (token) {
    //     // 添加头部的授权
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }

      console.log('请求成功的拦截');
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截');
      return err;
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截');
      return res;
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截');
      return err;
    }
  }
});

export default defHttp;
