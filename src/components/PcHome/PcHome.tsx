"use client"
import styles from '@/components/PcHome/PcHome.module.css'
import React, { FC, useMemo } from "react";
import SecondItem from "@/components/PcHome/secondItem/SecondItem";
import RankColumn1 from "@/components/PcHome/rankColumn1/RankColumn1";
import RankColumn3 from "@/components/PcHome/rankColumn3/RankColumn3";
import { EnumPosition, IBookItem, INetHomeItem } from "@/typings/home.interface";
import PcSwiperNormal from "@/components/PcHome/swiperNormal/SwiperNormal";
import PcFirstItem from "@/components/PcHome/firstItem/FirstItem";
import PcHomeTitle from "@/components/PcHome/homeTitle/HomeTitle";
import ImageCommon from "@/components/common/ImageCommon";

interface IProps {
  bannerList: IBookItem[];
  homeData: INetHomeItem[];
}

const PcHome: FC<IProps> = ({ homeData = [], bannerList }) => {


  const bookData = useMemo<INetHomeItem[]>(() => {
    const rankingData = homeData.find(item => item.position === EnumPosition.排行榜);
    const trendingData = homeData.find(item => item.position === EnumPosition.大神好文);
    let isInset = false;
    const bookData = homeData.map(item => {
      if ((item.position === EnumPosition.排行榜 || item.position === EnumPosition.大神好文) && !isInset) {
        isInset = true;
        return {
          ...item,
          position: EnumPosition.CustomInset,
          columns: [trendingData, rankingData]
        }
      }
      return item;
    });

    return bookData.filter(item => !([EnumPosition.大神好文, EnumPosition.排行榜, EnumPosition.顶部banner].includes(item.position))) as INetHomeItem[]
  }, [homeData]);

  if (homeData.length === 0) {
    return <div className={styles.mainContentEmpty}>
      <ImageCommon source={'/images/common/search/empty.png'} className={styles.emptyImg}/>
      <div className={styles.emptyIntro}>
        <p>抱歉，沒有上架書籍~</p>
      </div>
    </div>
  }

  return (
    <div className={styles.container}>
      {/*顶部搜索背景块*/}
      {bannerList.length > 0 ? <PcSwiperNormal bannerList={bannerList}/> : null}
      {
        bookData.length > 0 && bookData.map((item, index) => {

          if (item.position === EnumPosition.熱銷好文) {
            return <div key={item.position}>
              <div className={styles.itemWrap}>
                <PcHomeTitle title={EnumPosition[item.position]}/>
                <PcFirstItem dataSource={item.bookList as IBookItem[]}/>
              </div>
            </div>
          }

          if (item.position === EnumPosition.CustomInset) {
            const trendingData = item?.columns?.[0];
            const rankingData = item?.columns?.[1];

            return <div key={item.position} className={styles.mainRankContent}>
              {trendingData && trendingData?.bookList?.length > 0 ? <div>
                <PcHomeTitle title={EnumPosition[trendingData.position]} />
                <RankColumn1 dataSource={trendingData.bookList.slice(0, 5) as IBookItem[] || []}/>
              </div> : null}
              { rankingData && rankingData?.bookList?.length > 0 && <div className={styles.mainContent4}>
                <PcHomeTitle title={EnumPosition[rankingData.position]}/>
                <RankColumn3 dataSource={rankingData.bookList.slice(0, 3) as IBookItem[] || []}/>
              </div>}
            </div>
          }

          return <div key={item.position} style={index % 2 === 0 ? { backgroundColor: '#F5F6FA' } : {}}>
            <div className={styles.itemWrap}>
              <PcHomeTitle title={EnumPosition[item.position]}/>
              <SecondItem dataSource={item.bookList as IBookItem[]}/>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default PcHome
