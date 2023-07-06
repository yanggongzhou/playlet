import React, { FC } from 'react'
import styles from '@/components/PcHome/rankColumn1/RankColumn1.module.scss'
import ImageCommon from "@/components/common/ImageCommon";
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";

interface IProps {
  dataSource: IBookItem[];
}

const RankColumn1: FC<IProps> = ({ dataSource }) => {

  return <div className={styles.rankColumn1Wrap}>
    {dataSource && dataSource.length > 0 && (dataSource as IBookItem[]).map((book, bookInd) => {
      return <div key={book.bookId} className={styles.imageItem1Wrap}>
        <Link href={`/book/${book.bookId}`}>
          <ImageCommon w={60} h={80} className={styles.bookImage} source={book.cover} alt={book.bookName}/>
        </Link>
        <Link href={`/book/${book.bookId}`} className={bookInd < 3 ? styles.bookIndexTop : styles.bookIndex}>
          {bookInd + 1}
        </Link>
        <div className={styles.bookRow2}>
          <Link href={`/book/${book.bookId}`} className={styles.bookName}>
            {book.bookName}
          </Link>
          <Link href={`/book/${book.bookId}`} className={styles.viewCountDisplay}>
              <span>{book.viewCountDisplay} </span> 阅读量
          </Link>
        </div>
      </div>
    })}
  </div>
}

export default RankColumn1;
