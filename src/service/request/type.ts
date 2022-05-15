import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface ZCRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface ZCRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZCRequestInterceptors<T>
  showLoading?: boolean
}
