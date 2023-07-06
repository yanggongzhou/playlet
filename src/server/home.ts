import Service from "@/server/request";
import { INetHomeItem } from "@/typings/home.interface";


// 获取首页index
export const netHomeData = async (): Promise<INetHomeItem[]> => {
  return await Service.get('/index.do')
}
