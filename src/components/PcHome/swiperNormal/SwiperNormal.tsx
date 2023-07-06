"use client"
import { Swiper } from 'antd-mobile'
import React, { FC, useRef } from 'react'
import styles from './SwiperNormal.module.scss'
import ImageCommon from "@/components/common/ImageCommon";
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";
import { SwiperRef } from "antd-mobile/es/components/swiper";

interface IProps {
  bannerList: IBookItem[];
}

const PcSwiperNormal: FC<IProps> = ({ bannerList }) => {
  const swiperRef = useRef<SwiperRef>();
  const items = bannerList.map((ban, index) => (
    <Swiper.Item key={ban.bookId} className={styles.content}>
      {/*<div className={styles.contentMark} onClick={() => {*/}
      {/*  router.push({ pathname: `/book/${ban.bookId}` })*/}
      {/*}}/>*/}
      <Link href={`/book/${ban.bookId}`}>
          <ImageCommon source={ban?.bannerPic || ban.cover} className={styles.contentImg} alt={ban.bookName}/>
      </Link>
    </Swiper.Item>
  ))
  return <div className={styles.swiperWrap}>
    <Swiper
      ref={swiperRef}
      style={{
        '--height': '2.64rem',
        '--track-padding': '0 0 0',
      }}
      indicatorProps={{
        style: {
          '--dot-size': '0.08rem',
          '--active-dot-size': '0.08rem',
          '--dot-spacing': '0.08rem',
          marginBottom: '0.1rem'
        }
      }}
      className={styles.swiperBox}
      autoplay
      loop>{items}</Swiper>
    {bannerList.length > 1 ? <>
      <div className={styles.arrowLeft} onClick={() => {
        swiperRef.current?.swipePrev()
      }}>
        <ImageCommon source={'/images/common/home/arrow-left.png'} className={styles.arrowLeftIcon}/>
      </div>
      <div className={styles.arrowRight} onClick={() => {
        swiperRef.current?.swipeNext()
      }}>
        <ImageCommon source={'/images/common/home/arrow-left.png'} className={styles.arrowRightIcon}/>
      </div>
    </> : null}
  </div>
}

export default PcSwiperNormal
