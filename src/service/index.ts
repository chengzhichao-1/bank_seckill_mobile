import ZCRequest from "./request"
import {
  BASE_URL_HYH,
  BASE_URL_YHY,
  BASE_URL_CZC,
  TIME_OUT
} from "./request/config"

import localCache from "@/utils/cache"

export const czcRequest = new ZCRequest({
  baseURL: BASE_URL_CZC,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      // const token = localCache.getCache("token")
      // if (token) {
      //   config.headers = token
      //   config?.headers["Authorization"] = token
      // }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export const hyhRequest = new ZCRequest({
  baseURL: BASE_URL_HYH,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      // const token = localCache.getCache('token')
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export const yhyRequest = new ZCRequest({
  baseURL: BASE_URL_YHY,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      // const token = localCache.getCache('token')
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
