
// 类型的定义

import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// 拦截器的类型
export interface InRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 进行类型的继承并添加属性值；如: showLoading是否展示loading的dom
export interface InRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: InRequestInterceptors<T>
  showLoading?: boolean
}

