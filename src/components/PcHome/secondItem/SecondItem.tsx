import React, { FC } from 'react'
import styles from './SecondItem.module.scss'
import ImageCommon from "@/components/common/ImageCommon";
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";

interface IProps {
  dataSource: IBookItem[];
}

const SecondItem: FC<IProps> = ({ dataSource }) => {

  return <div className={styles.secondItemWrap}>
    {dataSource && dataSource.length > 0 && (dataSource as IBookItem[]).map((book) => {
      return <div key={book.bookId} className={styles.imageItem1Wrap}>
        <Link href={`/book/${book.bookId}`}>
          <ImageCommon w={192} h={258} className={styles.bookImage} source={book.cover} alt={book.bookName}/>
        </Link>
        <Link href={`/book/${book.bookId}`}>
          <h2 className={styles.bookName}>{book.bookName}</h2>
        </Link>

        <Link href={`/book/${book.bookId}`} className={styles.author}>
          {book.author} 著
        </Link>
        <Link href={`/book/${book.bookId}`} className={styles.viewCountDisplay}>
          <span>{book.viewCountDisplay} </span> 阅读量
        </Link>
      </div>
    })}
  </div>
}

export default SecondItem;
