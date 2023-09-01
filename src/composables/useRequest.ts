import un, { type UnConfig, type UnData, type UnParams, type UnResponse } from '@uni-helper/uni-network'

interface Un<T = UnData, D = UnData> {
  request<TT = T, DD = D, R = UnResponse<TT, DD>>(config: UnConfig<TT, DD>): Promise<R>
  download<TT = T, DD = D, R = UnResponse<TT, DD>>(config: UnConfig<TT, DD>): Promise<R>
  upload<TT = T, DD = D, R = UnResponse<TT, DD>>(config: UnConfig<TT, DD>): Promise<R>
  get<TT = T, DD = D, R = UnResponse<TT, DD>>(url: string, params?: UnParams, config?: UnConfig<TT, DD>): Promise<R>
  delete<TT = T, DD = D, R = UnResponse<TT, DD>>(url: string, config?: UnConfig<TT, DD>): Promise<R>
  head<TT = T, DD = D, R = UnResponse<TT, DD>>(url: string, config?: UnConfig<TT, DD>): Promise<R>
  options<TT = T, DD = D, R = UnResponse<TT, DD>>(url: string, config?: UnConfig<TT, DD>): Promise<R>
  trace<TT = T, DD = D, R = UnResponse<TT, DD>>(url: string, config?: UnConfig<TT, DD>): Promise<R>
  connect<TT = T, DD = D, R = UnResponse<TT, DD>>(url: string, config?: UnConfig<TT, DD>): Promise<R>
  post<TT = T, DD = D, R = UnResponse<TT, DD>>(url: string, data?: DD, config?: UnConfig<TT, DD>): Promise<R>
  put<TT = T, DD = D, R = UnResponse<TT, DD>>(url: string, data?: DD, config?: UnConfig<TT, DD>): Promise<R>
  patch<TT = T, DD = D, R = UnResponse<TT, DD>>(url: string, data?: DD, config?: UnConfig<TT, DD>): Promise<R>
}

un.defaults.baseUrl = import.meta.env.VITE_API_BASE_URL

// 添加请求拦截器
un.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
un.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)
export const $fetch: Un = {
  ...un,
  get: (url: string, params?, option?) => un.get(url, params
    ? {
        ...option,
        params,
      }
    : undefined),

}
