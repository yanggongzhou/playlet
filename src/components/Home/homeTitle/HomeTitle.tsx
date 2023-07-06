import React, { FC } from 'react'
import styles from './HomeTitle.module.css'
import ImageCommon from "@/components/common/ImageCommon";
import Link from "next/link";
import { EnumPosition } from "@/typings/home.interface";

interface IProps {
  title: string;
  isMore?: Boolean;
}
const HomeTitle: FC<IProps> = ({ title, isMore= true }) => {

  const TitleItem = () => (
    <div className={styles.titleWrap}>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      { isMore &&
        <div className={styles.moreBox}>
          查看更多
          <ImageCommon
            source={'/images/common/home/route_icon.png'}
            className={styles.moreIcon}/>
        </div>
      }
    </div>
  )
  if (isMore) {
    return <Link href={`/more/${EnumPosition[title]}/1`}>
      <TitleItem/>
    </Link>;
  } else {
    return <TitleItem/>
  }
}

export default HomeTitle
