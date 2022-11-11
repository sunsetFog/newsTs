
/*
  类实例化
  service统一出口
*/
import InRequest from './Axios';

const defHttp= new InRequest({
  baseURL: process.env.VUE_APP_BASE_URL, // http访问域名
  timeout: 10000 // 超时设置
});

export default defHttp;
