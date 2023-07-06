import { Swiper } from 'antd-mobile'
import React, { FC } from 'react'
import styles from '@/components/Home/swiperNormal/SwiperNormal.module.css'
import ImageCommon from "@/components/common/ImageCommon";
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";

interface IProps {
  bannerList: IBookItem[];
}

const SwiperNormal: FC<IProps> = ({ bannerList}) => {

  const items = bannerList.map((ban, index) => (
    <Swiper.Item key={ban.bookId} className={styles.content} >
      <Link href={`/book/${ban.bookId}`} >
          <ImageCommon source={ ban?.bannerPic || ban.cover} className={styles.contentImg} alt={ban.bookName}/>
      </Link>
    </Swiper.Item>
  ))
  return <Swiper
    style={{
    '--height': '2.64rem',
    '--track-padding': ' 0 0 0',
    }}
    indicatorProps={{
      style: {
        '--dot-size': '0.12rem',
        '--active-dot-size': '0.12rem',
        '--dot-spacing': '0.32em',
      }
    }}
    className={styles.swiperBox}
    autoplay
    loop>{ items }</Swiper>
}

export default SwiperNormal
