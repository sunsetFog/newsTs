
/*
  类实例化
  service统一出口
*/
import InRequest from './Axios';
import { BASE_URL, TIME_OUT } from './config'; // 进行导入环境配置变量的使用；

const defHttp= new InRequest({
  baseURL: BASE_URL, //
  timeout: TIME_OUT
});

export default defHttp;
