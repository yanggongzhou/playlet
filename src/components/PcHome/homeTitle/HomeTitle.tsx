import React, { FC } from 'react'
import styles from './HomeTitle.module.scss'
import ImageCommon from "@/components/common/ImageCommon";
import Link from "next/link";
import { EnumPosition } from "@/typings/home.interface";

interface IProps {
  title: string;
  isMore?: Boolean;
  isSeo?: Boolean;
}
const PcHomeTitle: FC<IProps> = ({ title, isMore= true, isSeo }) => {

  const TitleItem = () => (
    <div className={styles.titleWrap}>
      <div className={styles.title}>
        <div className={styles.titleTip}/>
        { isSeo ? <h1 className={styles.titleText}>{title}</h1> : <h2 className={styles.titleText}>{title}</h2>}
      </div>
      { isMore &&
        <div className={styles.moreBox}>
          更多
          <ImageCommon
            source={'/images/playlet/pcMore.png'}
            className={styles.moreIcon}/>
        </div>
      }
    </div>
  )
  const isRankings = EnumPosition.排行榜 === EnumPosition[title]
  if (isMore) {
    return <Link href={isRankings ? '/rankings' : `/more/${EnumPosition[title]}/1`}>
      <TitleItem/>
    </Link>;
  } else {
    return <TitleItem/>
  }
}

export default PcHomeTitle
