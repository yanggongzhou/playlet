import axios, { AxiosResponse, AxiosError, CreateAxiosDefaults, Canceler } from 'axios'
import { notFound, redirect } from "next/navigation";

// 定义接口
interface PendingType {
  url?: string;
  method?: string;
  params: any;
  data: any;
  cancel: Canceler
}

// 取消重复请求
const pending: PendingType[] = [];
const CancelToken = axios.CancelToken;


// 取消重复请求
const Service = axios.create({
  baseURL: process.env.BaseUrl + "/asg/portal/website",
  timeout: 10 * 1000,
} as CreateAxiosDefaults);

// 添加请求拦截器
Service.interceptors.request.use(
  (request) => {
    request.cancelToken = new CancelToken((c: Canceler) => {
      if (request.method === 'get') {
        Reflect.has(request, 'params') && typeof Reflect.get(request, 'params') === 'object' ?
          Reflect.set(request.params, 'pline', process.env.ServerLine)
          : Reflect.set(request, 'params', { pline: process.env.ServerLine })
      }
      const item = {
        url: request.url,
        method: request.method,
        params: request.params,
        data: request.data,
        cancel: c
      };
      const itemIndex = pending.findIndex(val => val.url === request.url);
      if (itemIndex !== -1) {
        pending[itemIndex].cancel();
        pending.splice(itemIndex, 1, item);
      } else {
        pending.push(item);
      }
    });
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
Service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      if (response.data.status === 0) {
        return Promise.resolve(response.data.data)
      }

      return notFound();
    }
    if (response.status === 404) {
      return notFound();
      // return Promise.reject('BadRequest_404')
    }
    return notFound();
    // return Promise.reject('BadRequest_500')
  },
  (err: AxiosError) => {
    if (err?.code === "ERR_CANCELED") return; // 请求取消
    // redirect('/500', RedirectType.push);
    return notFound();
    // return Promise.resolve('BadRequest_500')
  }
);

export default Service
