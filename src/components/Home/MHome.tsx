"use client"
import React, { FC, useEffect, useState } from "react";
import SwiperNormal from "@/components/Home/swiperNormal/SwiperNormal";
import HomeTitle from "@/components/Home/homeTitle/HomeTitle";
import ImageCommon from "@/components/common/ImageCommon";
import FirstItem from "@/components/Home/firstItem/FirstItem";
import BookList from "@/components/Home/bookList/BookList";
import Link from "next/link";
import { IBookItem, EnumPosition, INetHomeItem } from "@/typings/home.interface";
import styles from '@/components/Home/MHome.module.css'
import MNav from "@/components/Home/mNav";

interface IProps {
  bannerList: IBookItem[];
  homeData: INetHomeItem[];
}

const MHome: FC<IProps> = ({ homeData = [], bannerList }) => {
  const [visible, setVisible] = useState(false);
  const navIconClick = () => {
    if (visible) {
      setVisible(false)
      document.body.style.overflow = ''
    } else {
      setVisible(true)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const HeadCommon = () => {
    return <>
      <ImageCommon
        className={styles.navMenuIcon}
        source={visible ? '/images/common/home/m-menu-cancel.png' : '/images/common/home/m-menu.png'}
        onClick={() => navIconClick()} />
      <ImageCommon className={styles.appIcon} source={'/images/playlet/logo.png'}/>
      <Link href={'/search'} className={styles.searchTop}>
          <ImageCommon className={styles.searchTop2} source={'/images/common/home/search.png'}/>
      </Link>
    </>
  }

  return (
    <div className={styles.container}>
      <MNav visible={visible} cancel={() => navIconClick()}/>
      { homeData.length > 0 ? <>
        {/*顶部搜索背景块*/}
        { bannerList.length > 0 ?
          <div className={styles.headerContent}>
            <ImageCommon className={styles.headerContentBg} source={'/images/playlet/mTitleBg.png'}/>
            <HeadCommon/>
            <SwiperNormal bannerList={bannerList}/>
          </div> :
          <div className={styles.headerContent2}>
            <ImageCommon className={styles.headerContentBg2} source={'/images/playlet/mTitleBgEmpty.png'}/>
            <HeadCommon/>
          </div> }
        {homeData.map((item, index) => {
          if (item.position === EnumPosition.顶部banner) return null;
          if (item.position === EnumPosition.熱銷好文) {
            return <div key={item.position} className={styles.mainContent}>
              <div className={styles.itemWrap}>
                <HomeTitle title={EnumPosition[item.position]}/>
                <FirstItem dataSource={item.bookList as IBookItem[]}/>
              </div>
            </div>
          }
          return <div key={item.position} className={styles.mainContent2} style={index%2 === 0 ? { backgroundColor: '#F5F6FA'} : {}}>
            <div className={styles.itemWrap}>
              <HomeTitle title={EnumPosition[item.position]}/>
              <BookList dataSource={item.bookList as IBookItem[]}/>
            </div>
          </div>
        })}
      </> : <>
        <div className={styles.headerContent2}>
          <ImageCommon className={styles.headerContentBg2} source={'/images/playlet/mTitleBgEmpty.png'}/>
          <ImageCommon className={styles.appIcon} source={'/images/playlet/logo.png'}/>
        </div>
        <div className={styles.mainContentEmpty}>
          <ImageCommon source={'/images/playlet/emptyBook.png'} className={styles.emptyImg}/>
          <div className={styles.emptyIntro}>
            <p>抱歉，沒有上架書籍~</p>
          </div>
        </div>
      </>}
    </div>
  )
}


export default MHome
