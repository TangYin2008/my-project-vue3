/* eslint-disable @typescript-eslint/no-explicit-any */
// Copyright (c) 2024 tong<admin>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { ElMessage, ElLoading } from 'element-plus'
// 引入axios和提取interface接口类型
import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  AxiosError,
} from 'axios'
// import { store } from '@/redux'
import { ResponseCodeEnum } from '@/enums/httpEnum' // 引入封装的请求配置枚举
// import { setToken } from '@/redux/modules/global'
import type { ResultData } from '@/api/types/index.type' // 引入封装的接口返回类型
import { AxiosCancel } from './AxiosCancel' // 取消请求的封装

let loadingInstance: any

const config = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: ResponseCodeEnum.TIMEOUT as number,
  withCredentials: true,
  headers: {},
}

const axiosCancel = new AxiosCancel()

class RequestHttp {
  service: AxiosInstance

  constructor() {
    this.service = axios.create(config)

    /**
     * @description 请求拦截器
     */
    this.service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      // 打开全局 loading
      // 如不需要全局 loading，则第三个参数  { headers: { noLoading: true } }
      if (!config.headers.noLoading) {
        loadingInstance = ElLoading.service({ fullscreen: true })
      }

      // 将请求添加到 pending 中
      axiosCancel.addPending(config)

      // 这里如果需要添加token
      //   const token = store.getState().global.token // 我这里用的是 react-redux + redux-toolkit
      //   config.headers['X-Access-Token'] = token
      return config
    })

    /**
     * @description 响应拦截器
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response

        // 关闭全局 loading
        if (!config.headers.noLoading) {
          loadingInstance.close()
        }

        // 请求结束，移除本次请求
        axiosCancel.removePending(config.url, config.method)

        // 接口返回 code 不是 200 的处理
        if (data.code !== ResponseCodeEnum.SUCCESS) {
          ElMessage.error(data.msg)

          // 登录失效，清除 token，跳转到登录页面
          if (data.code === ResponseCodeEnum.NOLOGIN) {
            // store.dispatch(setToken(''))
            window.location.href = '/login'
          }

          return Promise.reject(data)
        }
        return data
      },

      (error: AxiosError) => {
        loadingInstance.close()

        const { response } = error
        if (response) {
          checkStatus(response.status)
        }
        return false
      },
    )
  }

  // 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: unknown, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object })
  }
}

/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */
const checkStatus = (status: number): void => {
  switch (status) {
    case 404:
      ElMessage.error('资源不存在！')
      break
    case 405:
      ElMessage.error('请求方式错误！')
      break
    case 500:
      ElMessage.error('服务器异常！')
      break
    default:
      ElMessage.error('请求失败！')
  }
}

const request = new RequestHttp()
export default request
