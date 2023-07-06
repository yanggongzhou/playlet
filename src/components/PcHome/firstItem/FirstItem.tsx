import React, { FC } from 'react'
import styles from '@/components/PcHome/firstItem/FirstItem.module.scss'
import ImageCommon from "@/components/common/ImageCommon";
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";

interface IProps {
  dataSource: IBookItem[];
}

const PcFirstItem: FC<IProps> = ({ dataSource, select }) => {

  return <div className={styles.firstItemWrap}>
    {dataSource && dataSource.length > 0 && (dataSource as IBookItem[]).map((book) => {
      return <div key={book.bookId} className={styles.imageItem1Wrap}>
        <Link href={`/book/${book.bookId}`} onClick={select} className={styles.bookImageA}>
          <ImageCommon w={160} h={212} className={styles.bookImage} source={book.cover} alt={book.bookName}/>
        </Link>

        <div className={styles.bookRight}>
          <Link href={`/book/${book.bookId}`}>
            <h2 className={styles.bookName}>{book.bookName}</h2>
          </Link>

          <Link href={`/book/${book.bookId}`} className={styles.bookLine2}>
            <span>{book.author} 著</span>
          </Link>

          <Link href={`/book/${book.bookId}`}>
            <div className={styles.bookLine3}>
              <span>{book.viewCountDisplay} </span> 阅读量
            </div>
            <div className={styles.bookLine4}>
              {book.introduction}
            </div>
          </Link>

        </div>
      </div>
    })}
  </div>
}

export default PcFirstItem;
