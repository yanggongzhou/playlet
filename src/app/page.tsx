import React from "react";
import { netHomeData } from "@/server/home";
import { EnumPosition } from "@/typings/home.interface";
import PcHome from "@/components/PcHome/PcHome";
import MHome from "@/components/Home/MHome";
import { ownOs } from "@/utils/ownOs";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

const Home = async () => {
  const { homeData, isPc, bannerList } = await getData();

  console.log('ispc', isPc)
  return <>
    12333
    <br/>
    <Link href={'/test'}>Test</Link>
    {/*{isPc ? <PcHome homeData={homeData} bannerList={bannerList}/> : <MHome homeData={homeData} bannerList={bannerList}/>}*/}
  </>
}

export const getData = async () => {
  const bookInfo = await netHomeData();
  const ua = headers().get('user-agent') || '';
  const bannerList = (bookInfo || []).find(item => item.position === EnumPosition.顶部banner)?.bookList ?? [];
  // 返回的参数将会按照 key 值赋值到 Home 组件的同名入参中
  return {
    homeData: bookInfo || [],
    bannerList,
    isPc: !!ownOs(ua).isPc,
  }
}

export default Home
