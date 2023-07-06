import React, { FC } from 'react'
import styles from '@/components/PcHome/rankColumn3/RankColumn3.module.css'
import ImageCommon from "@/components/common/ImageCommon";
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";

interface IProps {
  dataSource: IBookItem[];
}

const RankColumn3: FC<IProps> = ({ dataSource }) => {

  const data = dataSource && dataSource.length > 0 ? [dataSource[1], dataSource[0], dataSource[2]] : []
  return <div className={styles.rankColumn3Wrap}>
    {data.length > 0 && (data as IBookItem[]).map((book, bookInd) => {
      if (!book) return <div />;
      return <div key={book.bookId} className={bookInd === 1 ? styles.imageItem1Wrap1 : styles.imageItem1Wrap}>
        <ImageCommon className={bookInd === 1 ? styles.topIcon1 : styles.topIcon} source={`/images/common/home/Top${bookInd + 1}.png`}/>
        <Link href={`/book/${book.bookId}`} className={bookInd === 1 ? styles.bookImage1 : styles.bookImage}>
          <ImageCommon w={196} h={258} className={bookInd === 1 ? styles.bookImage1 : styles.bookImage} source={book.cover} alt={book.bookName}/>
        </Link>
        <Link href={`/book/${book.bookId}`} className={bookInd === 1 ? styles.bookName1 : styles.bookName}>
          {book.bookName}
        </Link>
        <Link href={`/book/${book.bookId}`} className={styles.author}>
          {book.author} 著
        </Link>
        <Link href={`/book/${book.bookId}`} className={styles.intro}>
          {book.introduction}
        </Link>
      </div>
    })}
  </div>
}

export default RankColumn3;
